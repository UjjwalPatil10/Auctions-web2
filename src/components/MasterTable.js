import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import "../components/MasterTable.css"; // Import your CSS file
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
// import { GlobalFilter } from "../../shared/GlobalFilter";
import ReactToPrint from "react-to-print";
import GlobalFilterSearch from "../shared/GlobalFilterSearch";
import Modal from "react-modal";

import "../components/MasterTable.css";
import { useNavigate } from "react-router-dom";
import MasterEditForm from "./MasterEditForm";



// const navigate = useNavigate()

export default function MasterTable() {
    const navigate = useNavigate();

  // Add functions to handle actions (edit, delete, view)
const handleEdit = (id) => {
  // navigate("/masterEditForm")



  // Implement edit logic
  // console.log(`Edit row with ID ${id}`);


};

const handleDelete = (id) => {
  // Implement delete logic
//   console.log(`Delete row with ID ${id}`);
};

const handleView = (id) => {
  // Implement view logic
  console.log(`View row with ID ${id}`);
};


  const columns = [
    { field: "id", headerName: "User ID", width: 60 },
    {
      field: "auctionName",
      headerName: "Auction Name",
      width: 150,
      editable: true,
    },
    {
      field: "auctionInventory",
      headerName: "Auction Inventory",
      width: 150,
      editable: true,
    },
    {
      field: "viewingDate",
      headerName: "Viewing Date",
      type: "number",
      width: 110,
      editable: true,
    },
  
    {
      field: "viewingTime",
      headerName: "Viewing Time",
      type: "number",
      width: 110,
      editable: true,
    },
  
    {
      field: "startDate",
      headerName: "Start Date",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "startTime",
      headerName: "Start Time",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "endDate",
      headerName: "End Date",
      type: "number",
      width: 110,
      editable: true,
    },
  
    {
      field: "endTime",
      headerName: "End Time",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "defaultBid",
      headerName: "Default Bid Increment By",
      type: "number",
      width: 170,
      editable: true,
    },
    {
      field: "auctionResult",
      headerName: "Auction Result Date",
      type: "number",
      width: 170,
      editable: true,
    },
    {
      field: "hideBid",
      headerName: " Hide Bulk Bid",
      type: "number",
      width: 170,
      editable: true,
    },
    {
      field: "allowProxyBid",
      headerName: " Allow Proxy Bid",
      type: "number",
      width: 170,
      editable: true,
    },
  
    {
      field: "allowPopcornBid",
      headerName: "Allow PopCorn Bid",
      type: "number",
      width: 170,
      editable: true,
    },
    {
      field: "extendDeadlineType",
      headerName: "Extend Deadline within Type",
      type: "number",
      width: 210,
      editable: true,
    },
    {
      field: "extendDeadlineValue",
      headerName: "Extend Deadline within Value",
      type: "number",
      width: 210,
      editable: true,
    },
    {
      field: "noofBids",
      headerName: "No of Times Bid Extend",
      type: "number",
      width: 170,
      editable: true,
    },
  
    {
      field: "auctionMode",
      headerName: "Auction Mode",
      type: "number",
      width: 170,
      editable: true,
    },
    {
      field: "recordStatus",
      headerName: "Record Status",
      type: "number",
      width: 170,
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      type: "number",
      
      width: 170,
      editable: true,
    },
  
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 120,
      renderCell: (params) => (
        <div className="">
          <IconButton onClick={() => handleEdit(params.row.id)}>
            <EditIcon className="text-info" />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon className="text-danger" />
          </IconButton>
          <IconButton onClick={() => handleView(params.row.id)}>
            <VisibilityIcon className="text-warning" />
          </IconButton>
        </div>
      ),
    },
  ];
  
  const rows = [
    {
      id: 1,
      auctionName: "Snow",
      auctionInventory: "Jons",
      viewingDate: 22,
      viewingTime: 6,
      startDate: "3",
      startTime: "11",
      endDate: "31",
      endTime: "11.45 AM",
      defaultBid: "300$",
      auctionResult: "pass",
      hideBid: "ssd",
      allowProxyBid: "vfj",
      allowPopcornBid: "gjo",
      extendDeadlineType: "ffqvgg",
      extendDeadlineValue: "fbj",
      noofBids: "fjwec",
      auctionMode: "ggyy",
      recordStatus: "Active",
      description: "jgfg",
    },
    {
      id: 2,
      auctionName: "nnnp",
      auctionInventory: "Jonny",
      viewingDate: 12,
      viewingTime: 5,
      startDate: "4",
      startTime: "11",
      endDate: "31",
      endTime: "12.30 AM",
      defaultBid: "500$",
      auctionResult: "succeed",
      hideBid: "ssd",
      allowProxyBid: "vfj",
      allowPopcornBid: "gjo",
      extendDeadlineType: "ffqv",
      extendDeadlineValue: "fbj",
      noofBids: "fj",
      auctionMode: "gg",
      recordStatus: "InActive",
      description: "jgfg",
    },
    {
      id: 3,
      auctionName: "jjh",
      auctionInventory: "Jon",
      viewingDate: 14,
      viewingTime: 4,
      startDate: "3",
      startTime: "11",
      endDate: "31",
      endTime: "11.30 AM",
      defaultBid: "400$",
      auctionResult: "pass",
      hideBid: "ssd",
      allowProxyBid: "vfj",
      allowPopcornBid: "gjo",
      extendDeadlineType: "ffqv",
      extendDeadlineValue: "fbj",
      noofBids: "j",
      auctionMode: "g",
      recordStatus: "InActive",
      description: "jfrrfg",
    },
    {
      id: 4,
      auctionName: "Snow",
      auctionInventory: "Jon",
      viewingDate: 14,
      viewingTime: 8,
      startDate: "4",
      startTime: "11",
      endDate: "31",
      endTime: "11.30 AM",
      defaultBid: "300$",
      auctionResult: "succeed",
      hideBid: "ssd",
      allowProxyBid: "vfj",
      allowPopcornBid: "gjo",
      extendDeadlineType: "ffqv",
      extendDeadlineValue: "fbj",
      noofBids: "fj",
      auctionMode: "gg",
      recordStatus: "Active",
      description: "jgfg",
    },
    {
      id: 5,
      auctionName: "Snow",
      auctionInventory: "Jonnyn",
      viewingDate: 1,
      viewingTime: 5,
      startDate: "4",
      startTime: "11",
      endDate: "31",
      endTime: "11.30 AM",
      defaultBid: "300$",
      auctionResult: "succeed",
      hideBid: "ssd",
      allowProxyBid: "vfj",
      allowPopcornBid: "gjo",
      extendDeadlineType: "ttp",
      extendDeadlineValue: "fbj",
      noofBids: "fj",
      auctionMode: "gg",
      recordStatus: "Active",
      description: "jgfg",
    },
    {
      id: 6,
      auctionName: "Sddgdgow",
      auctionInventory: "Jon",
      viewingDate: 4,
      viewingTime: 5,
      startDate: "4",
      startTime: "11",
      endDate: "32",
      endTime: "11.30 AM",
      defaultBid: "300$",
      auctionResult: "pass",
      hideBid: "ssd",
      allowProxyBid: "vfj",
      allowPopcornBid: "gjo",
      extendDeadlineType: "ffqv",
      extendDeadlineValue: "fbj",
      noofBids: "fj",
      auctionMode: "gg",
      recordStatus: "Active",
      description: "jgfg",
    },
    {
      id: 7,
      auctionName: "now",
      auctionInventory: "Jogfg",
      viewingDate: 14,
      viewingTime: 14,
      startDate: "4",
      startTime: "11",
      endDate: "31",
      endTime: "11.30 AM",
      defaultBid: "370$",
      auctionResult: "succeed",
      hideBid: "ssd",
      allowProxyBid: "vfj",
      allowPopcornBid: "gjo",
      extendDeadlineType: "ffqv",
      extendDeadlineValue: "fbj",
      noofBids: "fj",
      auctionMode: "gg",
      recordStatus: "Active",
      description: "jgfg",
    },
    {
      id: 8,
      auctionName: "Snow",
      auctionInventory: "Jon",
      viewingDate: 17,
      viewingTime: 9,
      startDate: "3",
      startTime: "11",
      endDate: "31",
      endTime: "11.30 AM",
      defaultBid: "304$",
      auctionResult: "pass",
      hideBid: "ssd",
      allowProxyBid: "vfj",
      allowPopcornBid: "gjo",
      extendDeadlineType: "ffqv",
      extendDeadlineValue: "fbj",
      noofBids: "fj",
      auctionMode: "gg",
      recordStatus: "Active",
      description: "jgfg",
    },
    {
      id: 9,
      auctionName: "Snow",
      auctionInventory: "zong",
      viewingDate: 12,
      viewingTime: 2,
      startDate: "3",
      startTime: "11",
      endDate: "31",
      endTime: "11.30 AM",
      defaultBid: "340$",
      auctionResult: "succeed",
      hideBid: "ssd",
      allowProxyBid: "vfj",
      allowPopcornBid: "gjo",
      extendDeadlineType: "ffqv",
      extendDeadlineValue: "fbj",
      noofBids: "fj",
      auctionMode: "gg",
      recordStatus: "InActive",
      description: "jgfg",
    },
    {
      id: 10,
      auctionName: "Snow",
      auctionInventory: "Jon",
      viewingDate: 15,
      viewingTime: 4,
      startDate: "3",
      startTime: "11",
      endDate: "31",
      endTime: "11.30 AM",
      defaultBid: "310$",
      auctionResult: "pass",
      hideBid: "ssdf",
      allowProxyBid: "vfjm",
      allowPopcornBid: "gjo",
      extendDeadlineType: "ffqv",
      extendDeadlineValue: "fbj",
      noofBids: "fj",
      auctionMode: "gg",
      recordStatus: "Active",
      description: "jgfg",
    },
    // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    // { id: 6, lastName: 'Melisandre', firstName: 'Shivaa', age: 150 },
    // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    // { id: 10, lastName: 'Smith', firstName: 'John', age: 25 },
  ];

  
  const emptyRows = [];



  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalData, setModalData] = useState(null); 

  const componentRef = useRef();
  // Add state for search filter
  const [filterText, setFilterText] = useState("");
  const handleFilterChange = (value) => {
    setFilterText(value);
    //  setFilterText(value || 'shiva');
  };

  // Function to check if a value is a string and includes the filter text
  const filterString = (value, filterText) => {
    return (
      typeof value === "string" &&
      value.toLowerCase().includes(filterText.toLowerCase())
    );
  };

  // Function to check if a value is a number and includes the filter text
  const filterNumber = (value, filterText) => {
    return (
      typeof value === "number" &&
      value.toString().toLowerCase().includes(filterText.toLowerCase())
    );
  };

  const filteredRows = rows.filter(
    (row) =>
      filterString(row.auctionName, filterText) ||
      filterString(row.auctionInventory, filterText) ||
      filterString(row.auctionResult, filterText) ||
      filterString(row.viewingDate, filterText) ||
      filterString(row.viewingTime, filterText) ||
      filterString(row.startDate, filterText) ||
      filterString(row.startTime, filterText) ||
      filterString(row.endDate, filterText) ||
      filterString(row.endTime, filterText) ||
      filterString(row.defaultBid, filterText) ||
      filterString(row.auctionResult, filterText) ||
      filterString(row.hideBid, filterText) ||
      filterString(row.allowProxyBid, filterText) ||
      filterString(row.allowPopcornBid, filterText) ||
      filterString(row.extendDeadlineType, filterText) ||
      filterString(row.extendDeadlineValue, filterText) ||
      filterString(row.noofBids, filterText) ||
      filterString(row.auctionMode, filterText) ||
      filterString(row.recordStatus, filterText) ||
      filterString(row.description, filterText) ||
      filterNumber(row.viewingDate, filterText) ||
      filterNumber(row.viewingTime, filterText) ||
      filterNumber(row.startDate, filterText) ||
      filterNumber(row.startTime, filterText) ||
      filterNumber(row.endDate, filterText) ||
      filterNumber(row.endTime, filterText) ||
      filterNumber(row.defaultBid, filterText) ||
      filterNumber(row.auctionResult, filterText) ||
      filterNumber(row.hideBid, filterText) ||
      filterNumber(row.allowProxyBid, filterText) ||
      filterNumber(row.allowPopcornBid, filterText) ||
      filterNumber(row.extendDeadlineType, filterText) ||
      filterNumber(row.extendDeadlineValue, filterText) ||
      filterNumber(row.noofBids, filterText) ||
      filterNumber(row.auctionMode, filterText) ||
      filterNumber(row.recordStatus, filterText) ||
      filterNumber(row.description, filterText)
  );

  return (
    <div className="container-fluid">
      <Box sx={{ height: 400, width: "100%", alignItems: "center" }}>
        <Typography className="text-success" variant="h5">
          Master Auction DataGrid Table
        </Typography>
        <div className="row">
        <div className="col-md-6 col-sm-6 d-flex  justify-content-start">
            {/* Add GlobalFilter component for search */}

            <GlobalFilterSearch
              filter={filterText}
              setFilter={handleFilterChange}
            />
          </div>
      

          <div className="col-md-3 col-sm-6 d-flex justify-content-end">
            <ReactToPrint
              trigger={() => (
                <button className="btn btn-primary">Print Table</button>
              )}
              content={() => componentRef.current}
              pageStyle="print"
              documentTitle="new document"
            />
          </div>
          <div className="col-md-3 col-sm-6 d-flex justify-content-center">
            {/* <Modal> */}
     <Button variant="contained"
            onClick={()=>navigate("/masterAddForm")}
            >Add Master User</Button>
            {/* </Modal> */}
           
           
          </div>

          
        </div>

        <div className="mt-3" ref={componentRef}>
          <DataGrid
            // rows={rows}
            rows={filteredRows}
            columns={columns}
            autoHeight // Set autoHeight to true to remove scrollbars
            pageSize={10}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </div>
      </Box>

      <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={true}>
        {/* {console.log("click " + userDetails)} */}
        <MasterEditForm data={userDetails} onClose={handleClose} />
        <br />
      </Modal>
    </div>
  );
}


