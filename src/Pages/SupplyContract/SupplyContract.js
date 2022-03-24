import React from "react";
import "./SupplyContract.css";
import { useEffect, useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";
import dataa from "../../json/jsonData";
import { CSVLink } from "react-csv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import {
  faDownload,
  faUpLong,
  faDownLong,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { ExportToExcel } from "../../components/formFilters/ExportToExcel";
import Filter from "../../components/formFilters/Filter";
import SupplyContractFilter from "./SupplyContractFilter/SupplyContractFilter";

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
  const [supplierData, setSupplierdata] = useState('');
//  const[customer,setcustomer] =useState([]);
  const customers = [];
  const fetchData = async () => {
    const response = await axios
      .get("http://localhost:3006/SupplierData")
      .catch((err) => console.log("please start server", err));
    setSupplierdata(response.data);
  };
  useEffect(() => {
   
    fetchData();
    setProducts(customers);
    if (supplierData) {
      console.log("we are inside =>", supplierData);
      supplierData.forEach(
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
    }
    
  }, [supplierData]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );
    

  const filename = "Supplier Data";

  
  const [filterPortal, setFiltersPortal] = useState(false);

  const handlePortal = () => {
    setFiltersPortal(!filterPortal);
    console.log(filterPortal);
  };
  console.log(customers);
  return (
    <>
      {supplierData === "" ? (
        <>
          {" "}
          <div
            style={{
              display: `flex`,
              justifyContent: `center`,
              marginTop: `40px`,
              fontSize: `25px`,
            }}
          >
            Loading...
          </div>
        </>
      ) : (
        <>
          {" "}
          {filterPortal && <SupplyContractFilter onclose={handlePortal} />}
          <div style={{ display: `flex`, justifyContent: `space-between` }}>
            <h1 style={{ margin: `20px`, fontSize: `25px`, fontWeight: `400` }}>
              Supply Contract
            </h1>

            <div style={{ display: `flex` }}>
              <div className="options">
                <i className="fa-solid fa-filter" onClick={handlePortal}></i>
                <div className="dropdown">
                  <button className="dropbtn">
                    <FontAwesomeIcon icon={faDownload} />
                  </button>
                  <div className="dropdown-content">
                    <FontAwesomeIcon icon="fa-solid fa-file-excel" />
                    <ExportToExcel apiData={data} fileName={filename} />
                    <CSVLink filename={filename} data={data}>
                      <FontAwesomeIcon
                        icon={faFileExcel}
                        style={{
                          color: `black`,
                          fontSize: `25px`,
                          margin: `10px`,
                        }}
                      />
                    </CSVLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <table colorScheme="white" className="TableMain" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FontAwesomeIcon icon={faUpLong} />
                        ) : (
                          <FontAwesomeIcon icon={faDownLong} />
                        )
                      ) : (
                        ""
                      )}
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
      )}
    </>
  );
};
export default SupplyContract;
