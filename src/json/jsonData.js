const dataa= [
    {
      "supplycontractid": "AVG1001", //contract id
      "supplycontractname": "AVGAS JETA contract",
      "suppliername": "AVGAS",
      "contractstartdate": "2021-12-21T18:30:00.000Z",
      "contractenddate": "2022-12-20T18:30:00.000Z",
      "contractstatus": null,
      "supplycontractlocations": [
        {
          "supplycontractsubid": "AVG1001-1",
          "locid": 520,
          "offaptlocationid": null, // location
          "IATA": "JFK", // location
          "ICAO": "KJFK", //location
          "locationtype": "APT",
          "customerid": null, // customer blank
          "customername": null, // customer name
          "ipagentid": 1,
          "transporterid": 1,
          "corp_comm": "Comm",
          "fuelcustomsid": 2,
          "priceindexid": 5,
          "priceindex": "AVG-WEEKLY",
          "pricecycle": "WEEKLY", // price cycle
          "locstatus": "NEW", // Active/ inprogress/ Expired
          "priceindexbasisid": 3,
          "locationstatus": "Active",
          "ipagentname": "1 TEST IP FULL NAME",
          "transpoter": null,
          "isactive": true,
          "locname": "John F Kennedy", //on hover location
          "country": "USA" //on hover location
        },
        {
          "supplycontractsubid": "AVG1001-2",
          "locid": 556,
          "offaptlocationid": null,
          "IATA": "SFO",
          "ICAO": "KSFO",
          "locationtype": "APT",
          "customerid": null, // customer
          "customername": null, // customer name
          "ipagentid": 2,
          "transporterid": 1,
          "corp_comm": "Comm",
          "fuelcustomsid": 2,
          "priceindexid": 5,
          "priceindex": "AVG-WEEKLY",
          "pricecycle": "WEEKLY", // price cycle
          "locstatus": "NEW", // Active/ inprogress/ Expired
          "priceindexbasisid": 3,
          "locationstatus": "Active",
          "ipagentname": "2 TEST IP FULL NAME",
          "transpoter": null,
          "isactive": true,
          "locname": "Sanfrancisco International Airport",
          "country": "USA"
        }
      ]
    },
    {
      "supplycontractid": "SIG1001",
      "supplycontractname": "SIGNATURE JETA contract",
      "suppliername": "SIGNATURE",
      "contractstartdate": "2021-12-21T18:30:00.000Z",
      "contractenddate": "2022-12-20T18:30:00.000Z",
      "contractstatus": null,
      "supplycontractlocations": [
        {
          "supplycontractsubid": "SIG1001-1",
          "locid": 520,
          "offaptlocationid": null,
          "IATA": "JFK",
          "ICAO": "KJFK",
          "locationtype": "APT",
          "customerid": null, // customer
          "customername": null, // customer name
          "ipagentid": 1,
          "transporterid": 1,
          "corp_comm": "Comm",
          "fuelcustomsid": 2,
          "priceindexid": 5,
          "priceindex": "SIG-WEEKLY", // price index
          "pricecycle": "WEEKLY", // price cycle
          "locstatus": "NEW", // Active/ inprogress/ Expired
          "priceindexbasisid": 3,
          "locationstatus": "Active",
          "ipagentname": "1 TEST IP FULL NAME", // into plane
          "transpoter": null,
          "isactive": true,
          "locname": "John F Kennedy",
          "country": "USA"
        },
        {
          "supplycontractsubid": "SIG1001-2",
          "locid": 556,
          "offaptlocationid": null,
          "IATA": "SFO",
          "ICAO": "KSFO",
          "locationtype": "APT",
          "customerid": null, // customer
          "customername": null, // customer name
          "ipagentid": 2,
          "transporterid": 1,
          "corp_comm": "Comm",
          "fuelcustomsid": 2,
          "priceindexid": 5,
          "priceindex": "SIG-WEEKLY",
          "pricecycle": "WEEKLY", // price cycle
          "locstatus": "NEW", // Active/ inprogress/ Expired
          "priceindexbasisid": 3,
          "locationstatus": "Active",
          "ipagentname": "2 TEST IP FULL NAME",
          "transpoter": null,
          "isactive": true,
          "locname": "Sanfrancisco International Airport",
          "country": "USA"
        }
      ]
    }
  ]
 
 export default dataa;