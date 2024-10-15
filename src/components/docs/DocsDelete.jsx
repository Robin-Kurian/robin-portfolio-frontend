"use client";
import React from "react";

const MESSAGES = {
  CONFIRM:
    "By continuing, all documentation-related content will be permanently removed from this project.",
  API_ERROR:
    "An error occurred while attempting to delete the documentation files. Please try again later.",
  API_SUCCESS:
    "Documentation files have been successfully deleted from the project.",
};

const DocsDelete = ({ className }) => {
  const cleanDocs = async () => {
    const response = await fetch("/api/clean-project", { method: "DELETE" });
    if (response.ok) alert(MESSAGES.API_SUCCESS);
    else alert(MESSAGES.API_ERROR);
  };

  const handleDeleteDocs = () => {
    const isConfirmed = window.confirm(MESSAGES.CONFIRM);
    if (isConfirmed) cleanDocs();
  };

  return (
    <div className={`flex justify-end items-center ${className}`}>
      <p>Remove all documentation files</p>
      <button
        className={`ml-2 duration-150 bg-green-600 hover:bg-red-600 text-white text-xs px-2 py-1 rounded-md`}
        onClick={handleDeleteDocs}
      >
        Delete Docs🔥
      </button>
    </div>
  );
};

export default DocsDelete;
