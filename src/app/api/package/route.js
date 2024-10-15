import { NextResponse } from "next/server";
import fs from "fs";

export async function GET(request) {
  try {
    const [err, body] = await new Promise((resolve, reject) => {
      fs.readFile("./package.json", "utf8", (err, data) => {
        if (err) {
          const body = {
            message: "An error occurred while reading package.json",
          };
          reject([true, body]);
        }

        const packageJson = JSON.parse(data);
        const body = { message: "ok", data: packageJson };
        resolve([false, body]);
      });
    });
    return NextResponse.json(body, { status: err ? 500 : 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong.", error },
      { status: 500 }
    );
  }
}
