"use client";

import React, { useState } from "react";
import Papa from "papaparse";

function UploadFile() {
  const [csvData, setCsvData] = useState<unknown[] | null>(null);
  const [tableData, setTableData] = useState<Record<string, any>[]>([]);
  const [listTop, setListTop] = useState<number[]>([]);

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
      let dict_list: any[] = [];
      if (csvData != null) {
        const twoDimensionalArray: any[][] = csvData as any[][];
        const table = convertToTable(twoDimensionalArray);
        const json = table;
        setTableData(json);

        let header_list: string[] = [];

        Object.keys(tableData[0]).map((header) => {
          header_list.push(header);
        });
        dict_list.push(header_list);

        tableData.map((row) => {
          dict_list.push(row);
        });

        const list = sorter(dict_list, "english");
        setListTop(list);
        console.log(list);
      }
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
      <div>
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
      <div>
        {listTop.length != 0 && (
          <div className="p-5">
            <h3>Table Data</h3>
            <table>
              <thead>
                <tr>
                  {Object.keys(tableData[0]).map((header) => (
                    <th className="p-4 pl-0" key={header}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {listTop.map((value) => (
                  <tr className="p-4" key={value}>
                    {Object.entries(tableData[value]).map((values, index) => (
                      <td className="p-4">{values[1]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadFile;
function sorter(dict_list: any[], sort: string) {
  const body = dict_list.splice(0, dict_list.length);

  let sort_list: any[] = [];

  for (let i = 0; i < body.length; i++) {
    const element = body[i];
    if (!Number.isNaN(parseInt(element[sort]))) {
      sort_list.push(element[sort]);
    }
  }
  let list = [];

  const sorted_index = findIndex(sort_list);

  for (let i = sorted_index.length - 1; i >= 0; i--) {
    for (let j = 0; j < sorted_index.length; j++) {
      const element_2 = sorted_index[j];
      if (element_2 == i) {
        list.push(j);
      }
    }
  }

  return list;
}

function findIndex(arr2: any[]) {
  let arr: number[] = [];
  let arr1 = converNumber(arr2);
  arr1 = bubbleSort(arr1);

  for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    // console.log(element);

    for (let j = 0; j < arr1.length; j++) {
      const element_1 = arr1[j];

      if (element == element_1) {
        // console.log(element_1, element, element == element_1);
        arr.push(j);
      }
    }
  }
  return arr;
}
function converNumber(sort_list: any[]) {
  let arr: number[] = [];

  for (let i = 0; i < sort_list.length; i++) {
    const element = sort_list[i];
    arr.push(Number(element));
  }

  return arr;
}

function swap(
  arr: { [x: string]: any },
  a: string | number,
  b: string | number
) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

function defaultCompare(a: number, b: number) {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function bubbleSort(arr: number[], compare = defaultCompare) {
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      // refer to note below
      if (compare(arr[j], arr[j + 1]) === Compare.BIGGER_THAN) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function convertToTable(csvData: any[][]): any[] {
  const headers: string[] = csvData[0]; // Assume the first row contains the headers
  const tableData: any[] = [];

  for (let i = 1; i < csvData.length - 1; i++) {
    const row: Record<string, any> = {};
    for (let j = 0; j < headers.length; j++) {
      row[headers[j]] = csvData[i][j];
    }
    tableData.push(row);
  }

  return tableData;
}
