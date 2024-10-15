/* eslint-disable no-console */
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const FILES_TO_CLEAN = [
  { path: "src/app/(docs)", type: "dir", deleteType: "complete" },
  { path: "src/components/docs", type: "dir", deleteType: "complete" },
  { path: "src/data/docs.js", type: "file", deleteType: "complete" },
  {
    path: "src/app/api/package/route.js",
    type: "file",
    deleteType: "complete",
  },
  {
    path: "src/data/appRoute.js",
    type: "file",
    deleteType: "partial",
    regex: "/docs/",
  },
  {
    path: "src/app/api/clean-project/route.js",
    type: "file",
    deleteType: "complete",
  },
];

export async function DELETE(request) {
  const cleanProject = async (fileList) => {
    const projectDir = process.cwd();
    for (const item of fileList) {
      const itemPath = path.resolve(projectDir, item.path);

      if (item.type === "dir") {
        if (item.deleteType === "complete") {
          await deleteDirectory(itemPath);
        }
      } else if (item.type === "file") {
        if (item.deleteType === "complete") {
          await deleteFile(itemPath);
        } else if (item.deleteType === "partial" && item.regex) {
          await deleteFilePartially(itemPath, item.regex);
        }
      }
    }
  };

  const deleteDirectory = async (dirPath) => {
    fs.readdir(dirPath, (err, files) => {
      if (err) throw err;
      const deleteFileOrDir = (file) => {
        const filePath = path.join(dirPath, file);
        fs.lstat(filePath, (err, stat) => {
          if (err) throw err;
          if (stat.isDirectory()) {
            deleteDirectory(filePath);
          } else {
            fs.unlink(filePath, (err) => {
              if (err) throw err;
              console.log(`File ${filePath} deleted.`);
            });
          }
        });
      };
      files.forEach(deleteFileOrDir);
      fs.rmdir(dirPath, (err) => {
        if (err) throw err;
        console.log(`Directory ${dirPath} deleted.`);
      });
    });
  };

  const deleteFile = async (filePath) => {
    fs.unlink(filePath, (err) => {
      if (err) throw err;
      console.log(`File ${filePath} deleted.`);
    });
  };

  const deleteFilePartially = (filePath, searchString) => {
    fs.readFile(filePath, { encoding: "utf-8" }, (err, fileContent) => {
      if (err) {
        console.error(`Error reading file ${filePath}:`, err);
        return;
      }
      const lines = fileContent.split("\n");
      const filteredLines = lines.filter(
        (line) => !line.includes(searchString)
      );
      const updatedContent = filteredLines.join("\n");
      fs.writeFile(filePath, updatedContent, "utf-8", (err) => {
        if (err) {
          console.error(`Error writing file ${filePath}:`, err);
          return;
        }
        console.log(
          `File ${filePath} partially deleted (lines containing ${searchString} removed).`
        );
      });
    });
  };

  try {
    await cleanProject(FILES_TO_CLEAN);
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.log("error", error)``;
    return NextResponse.json(
      { message: "Something went wrong.", error },
      { status: 500 }
    );
  }
}
