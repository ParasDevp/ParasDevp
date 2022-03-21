import React from 'react';
import './SupplyContract.css';
import { useEffect, useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";
import dataa from "../../json/jsonData";
import { CSVLink } from "react-csv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload,faUpLong,faDownLong} from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { ExportToExcel } from "../../components/formFilters/ExportToExcel";

import Filter from "../../components/formFilters/Filter";



const SupplyContract = () => {
  const Excel = () => {};
  const tableColumn = [
    {
      Header: " ",
      columns: [
        {
          Header: "Supplier contract id",
          accessor: "supplycontractid",
        },
        {
          Header: "supply contract subid",
          accessor: "supplycontractsubid",
        },
        {
          Header: "supplier name",
          accessor: "suppliername",
        },
        {
          Header: "location",
          accessor: (row) => `${row.IATA}/${row.ICAO}`,
        },
        {
          Header: " customer name",
          accessor: "customername",
        },
        {
          Header: "price index",
          accessor: "priceindex",
        },
      ],
    },
    {
      Header: " ",
      columns: [
        {
          Header: "price cycle",
          accessor: "pricecycle",
        },
        {
          Header: "Status",
          accessor: "locstatus",
        },
      ],
    },
  ];
  const [products, setProducts] = useState([]);
  const columns = useMemo(() => tableColumn, []);
  const data = useMemo(() => products, [products]);
  const customers = [];

  dataa.forEach(
    ({
      supplycontractid,
      supplycontractname,
      suppliername,
      contractstartdate,
      contractenddate,
      contractstatus,
      supplycontractlocations,
    }) => {
      supplycontractlocations.forEach((customer) => {
        customers.push({
          supplycontractid,
          supplycontractname,
          suppliername,
          contractstartdate,
          contractenddate,
          contractstatus,
          ...customer,
        });
      });
    }
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );
  useEffect(() => {
    setProducts(customers);
  }, []);

  const filename = "Supplier Data";

  console.log(customers);

  return(
    <>
    <div style={{ display: `flex`, justifyContent: `space-between` }}>
    <h1 style={{ margin: `20px`, fontSize: `25px`, fontFamily: `cursive` }}>
      Supply Contract
    </h1>



    <div style={{display :`flex`}}>
    <div style={{ margin: `20px`, fontSize: `25px`, fontFamily: `cursive` }}>

  
    
    </div>
    <div class="dropdown">
      <button class="dropbtn">
        Download
        <FontAwesomeIcon icon={faDownload} />

      </button>
      <div class="dropdown-content">
        <ExportToExcel apiData={data} fileName={filename} />
        <CSVLink filename={filename} data={data}>
          <button style={{ textDecoration : `none`}}>CSV</button>
        </CSVLink>
      </div>
    </div>
   
    </div>
    
  </div>
  <table
    variant="striped"
    colorScheme="blue"
    className="TableMain"
    {...getTableProps()}
  >
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
              {column.render("Header")}
              {column.isSorted ? (column.isSortedDesc ? ( <FontAwesomeIcon icon={faUpLong} />) : (<FontAwesomeIcon icon={faDownLong}/>)) : ""}
              {}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row);

        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell) => (
              <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
            ))}
          </tr>
        );
      })}
    </tbody>
  </table>
  </>
  );
  }
export default SupplyContract;
