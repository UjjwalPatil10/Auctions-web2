import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import FormEditModal from "./FormEditModal";
import Modal from "react-modal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";
import { GlobalFilter } from "../../shared/GlobalFilter";
import { COLUMNS } from "./columns";
import "./table.css";
import { TableCheckbox } from "../../shared/TableCheckbox";
import { useNavigate } from "react-router-dom";
import {
  BsFillPencilFill,
  BsFillTrashFill,
  BsFillEyeFill,
} from "react-icons/bs";
import DataModal from "./DataModal";
import axiosInstance from "../../utils/axiosInstance";

export const UserGrid = () => {
  const columns = useMemo(() => COLUMNS, []);
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect is running");

    const fetchData = async () => {
      console.log("Inside fetchData function"); // Debugging line
      const options = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT, PATCH, OPTION',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Expose-Headers': '*',
          'Content-Type': 'application/json;charset=utf-8',
          'Accept': 'application/json;charset=utf-8',
          'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxODcyNzhhMC1iYWJjLTQ4MWUtYTAyNi0yMjZhYzM2MDczNmYiLCJsYXN0TmFtZSI6Ik1hbGkiLCJmaXJzdE5hbWUiOiJSaXNoaSIsInN1YiI6ImFkbWluIiwiaWF0IjoxNzA0NDYxMTE5LCJleHAiOjE3MDQ0NjI1NTl9.2WdJ9Etcs5AtJAHBnHUF_BraJKWu6ya5rTlghGqPUjA",
          'Access-Control-Allow-Credentials': "true",
        },
      };
      try {
        console.log("Fetching data...");
        const response = await axiosInstance.get('/api/v1/user/all', options);
        // const response = await axios.get('http://localhost:8080/api/v1/user/all', options);

        const data = response.data;
        console.log(data);
        setData(data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    console.log("After fetchData call"); // Debugging line
  }, []);

  //     const visibleColumns = React.useMemo(
  //    () => columns.filter(column => column.Header !== 'User ID'),
  //    [columns]
  //  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    selectedFlatRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,

    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <TableCheckbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <TableCheckbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );

  const deleteUser = async (userId) => {
    const url = `http://localhost:8080/api/v1/user/${userId}`;

    axios
      .delete(url)
      .then((response) => {
        console.log("Successfully deleted:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  const editUser = (row) => {
    console.log(row);
    setModalIsOpen(true);
    setUserDetails(row);
  };

  const { globalFilter } = state;

  const { pageIndex, pageSize } = state;

  useEffect(() => {
    console.log("Global Filter Value:", globalFilter);
  }, [globalFilter]);

  const handleView = (row) => {
    setModalData(row.values);
    console.log(row.values);
    setIsModalVisible(true);
  };

  const handleCloseModal2 = () => {
    setIsModalVisible(false);
  };

  const handleCloseModal1 = () => {
    setModalIsOpen(false);
  };

  const isInsideModal = modalIsOpen || isModalVisible;

  return (
    <>
      {!isInsideModal && (
        <div
          className="abc"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: "#ffffff",
            padding: "10px 20px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="d-flex justify-content-between mt-3">
            <GlobalFilter
              filter={globalFilter}
              setFilter={setGlobalFilter}
              style={{ marginLeft: "20px" }}
            />
            <button
              className="btn form-control mb-1 col-md-1 btn-sm btn-primary"
              style={{
                width: "120px",
                height: "40px",
                marginRight: "10px",
              }}
              onClick={() => navigate("/user/register")}
            >
              Add New User
            </button>
          </div>
        </div>
      )}
      <table style={{ marginTop: "75px" }} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <div>
                    {column.canFilter ? (
                      <React.Fragment>
                        <div>{JSON.stringify(column.Filter)}</div>
                        {column.Filter &&
                          React.createElement(column.Filter, { column })}
                      </React.Fragment>
                    ) : null}
                  </div>
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
              <th>Action</th>
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {data.length > 0 ? (
            page.map((row) => {
              prepareRow(row);
              console.log("Row Data:", row.original);
              console.log(row.original.values);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}

                  <td>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-primary btn-sm me-1 border-0 bg-transparent"
                        style={{ width: "2rem", height: "1.5rem" }}
                        onClick={() => editUser(row.original)}
                      >
                        <i class="bi-trash"></i>
                        <BsFillPencilFill style={{ color: "blue" }} />
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm border-0 bg-transparent"
                        style={{ width: "2rem", height: "1.5rem" }}
                        onClick={() => deleteUser(row.original.id)}
                      >
                        <i class="bi-trash"></i>
                        <BsFillTrashFill style={{ color: "red" }} />
                      </button>
                    </div>
                    <div>
                      <button
                        className="btn btn-outline-danger btn-sm border-0 bg-transparent gap-1"
                        style={{ width: "0.5rem", height: "1.5rem" }}
                        onClick={() => handleView(row)}
                      >
                        <BsFillEyeFill style={{ color: "black" }} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={columns.length}>Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
      <br />
      <div className="d-flex justify-content-center gap-2 mb-5">
        <select
          className="col-md-1 btn-sm mb-2 ml-5"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <span className="mt-2">
          Page{" "}
          <strong>
            {" "}
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>

        <span className="mt-1">
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>
        <button
          className="btn mb-2 col-md-1 btn-sm"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          style={{
            background: "none",
            border: "none",
            outline: "none",
            width: "auto",
            padding: "0 6px",
          }}
        >
          {"<<"}
        </button>
        <button
          className="btn mb-2 col-md-1 btn-sm btn-outline-primary"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <button
          className="btn mb-2 col-md-1 btn-sm btn-outline-primary"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
        <button
          className="btn mb-2 col-md-1 btn-sm"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          style={{
            background: "none",
            border: "none",
            outline: "none",
            width: "auto",
            padding: "0 6px",
          }}
        >
          {">>"}
        </button>
      </div>
      {/* <pre>
        <code>
          {JSON.stringify(
            {
              SelectedRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2
          )}
        </code>
      </pre> */}

      <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={true}>
        {console.log("click " + userDetails)}
        <FormEditModal data={userDetails} onClose={handleCloseModal1} />
        <br />
      </Modal>
      <Modal isOpen={isModalVisible} shouldCloseOnOverlayClick={true}>
        <DataModal data={modalData} onClose={handleCloseModal2} />
        <br />
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-outline-primary"
            onClick={handleCloseModal2}
          >
            Close
          </button>
        </div>
      </Modal>
      <div>
        <ToastContainer />
      </div>
    </>
  );
};
