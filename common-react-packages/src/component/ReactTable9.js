import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

const ReactTable9 = () => {
  // Use createColumnHelper to define columns
  const columnHelper = createColumnHelper();

  // Define the columns using createColumnHelper
  const columns = [
    columnHelper.accessor("id", {
      header: () => "ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: () => "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("age", {
      header: () => "Age",
      cell: (info) => info.getValue(),
    }),
  ];

  // Sample data (3 rows, 3 columns)
  const data = React.useMemo(
    () => [
      { id: 1, name: "John Doe", age: 28 },
      { id: 2, name: "Jane Doe", age: 32 },
      { id: 3, name: "Sam Smith", age: 22 },
    ],
    []
  );

  // Initialize the table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReactTable9;
