import React from "react";

const Table = ({ data, className }) => {
  return (
    <table className={`table-auto w-full ${className}`}>
      <thead>
        <tr className='p-5'>
          {Object.keys(data[0]).map((heading, index) => (
            <th
              key={index}
              className='p-3 border'
            >
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, index) => (
              <td
                key={index}
                className='p-3 border'
              >
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
