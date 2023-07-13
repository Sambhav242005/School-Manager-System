"use client";

import React, { useState } from "react";
import axios from "axios";
import Papa from "papaparse";

function UploadFile() {
  const [csvData, setCsvData] = useState<unknown[] | null>(null);
  const [tableData, setTableData] = useState<Record<string, any>[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      const file = e.target.files[0];

      Papa.parse(file, {
        complete: (results) => {
          setCsvData(results.data);
        },
      });
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/upload", { data: csvData });
      console.log(response.data);
      const json = response.data;
      setTableData(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Upload CSV File</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      {csvData && (
        <div>
          <h3>CSV Data</h3>
          <button onClick={handleSubmit}>Convert to Table</button>
        </div>
      )}
      {tableData.length != 0 && (
        <div className="p-5">
          <h3>Table Data</h3>
          <table>
            <thead>
              <tr>
                <th className="p-2 "></th>
                {Object.keys(tableData[0]).map((header) => (
                  <th className="p-4 pl-0" key={header}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="p-4">{index}</td>
                  {Object.values(row).map((value, index) => (
                    <td className="p-4" key={index}>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UploadFile;
