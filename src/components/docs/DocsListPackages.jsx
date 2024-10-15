"use client";
import React from "react";

const DocsListPackages = ({
  dependencies,
  isDev = false,
  showErrorMessage = false,
}) => {
  return (
    <>
      {/* list dependencies */}
      {dependencies &&
        Object.keys(dependencies).map((key) => (
          <div
            className={`text-sm px-2 py-1 bg-white/20 opacity-90 rounded-md border-spacing-3`}
            key={`package-${key}`}
          >
            {isDev ? "🛠️" : ""}
            {key}
            {dependencies[key]}
          </div>
        ))}

      {/* handle error case */}
      {showErrorMessage && !dependencies && (
        <div className='text-sm text-error'>Error getting data...</div>
      )}
    </>
  );
};

export default DocsListPackages;
