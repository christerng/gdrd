import * as React from "react";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useTable } from "react-table";
import "./App.css";
import fakeData from "./MOCK_DATA.json";
import Alert from "./components/Alert";
import Button from "./components/Button";

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
<<<<<<< HEAD
    useTable({ columns, data }, useSortBy);
=======
    useTable({ columns, data });
>>>>>>> 9d04d5b (Admin Panel draft)
  return (
    <div className="App">
      <h1>Admin Panel</h1>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
<<<<<<< HEAD
  <Button color="secondary" onClick={() => setAlertVisibility(false)}>
=======
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
>>>>>>> 9d04d5b (Admin Panel draft)
      Refresh
    </Button>
    <div className="container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
<<<<<<< HEAD
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
=======
                  <th {...column.getHeaderProps()}>
                {column.render("Header")}
>>>>>>> 9d04d5b (Admin Panel draft)
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
<<<<<<< HEAD
 * /

import AgeCheck from "./AgeCheck";
import AgeFail from "./AgeFail";
import Home from "./Home";
import OrderScreen from "./OrderScreen";
import Select0 from "./Select0";
import Select1 from "./Select1";
import Select2 from "./Select2";
import Select3 from "./Select3";
import Select4 from "./Select4";
import Select5 from "./Select5";
import Transpo from "./Transpo";

const App = () => {
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Transpo" element={<Transpo />} />
          <Route path="/AgeCheck" element={<AgeCheck />} />
          <Route path="/AgeFail" element={<AgeFail />} />
          <Route path="/Select0" element={<Select0 />} />
          <Route path="/Select1" element={<Select1 />} />
          <Route path="/Select2" element={<Select2 />} />
          <Route path="/Select3" element={<Select3 />} />
          <Route path="/Select4" element={<Select4 />} />
          <Route path="/Select5" element={<Select5 />} />
          <Route path="/OrderScreen" element={<OrderScreen />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

// Kindacode.com
// Just some styling
const styles = {
  app: {
    padding: 0,
  },
};
=======
>>>>>>> 9d04d5b (Admin Panel draft)
