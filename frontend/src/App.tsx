import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";
import fakeData from "./MOCK_DATA.json";
import * as React from "react";
import { useState } from "react";
import { Column, useTable, useSortBy } from "react-table";

interface Data {
  bar_id: number;
  wait_time: number;
  total_orders: number;
  qty_left: number;
  manual_override: number;
}

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo<Column<Data>[]>(
    () => [
      {
        Header: "Bar ID",
        accessor: "bar_id",
      },
      {
        Header: "Wait Time",
        accessor: "wait_time",
      },
      {
        Header: "Total Orders",
        accessor: "total_orders",
      },
      {
        Header: "Quantity Left",
        accessor: "qty_left",
      },
      {
        Header: "Manual Override",
        accessor: "manual_override",
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);
  return (
    <div className="App">
      <h1>Admin Panel</h1>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(false)}>
        Refresh
      </Button>
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;