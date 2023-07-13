export default function handler(
  req: { body: { data: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: any): void; new (): any };
    };
  }
) {
  const { data } = req.body;

  // Convert the CSV data to a table format (you can use any logic or library you prefer)
  const tableData = convertToTable(data);

  console.log(tableData);

  res.status(200).json(tableData);
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
