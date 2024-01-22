// import React, { useContext } from 'react';
// import UserContext from './UserContext';
// import { Table } from 'react-bootstrap';

// const AuctionView = () => {
//   const {
//     open,
//     operation,
//     initialUser,
//     handleClose,
//     filteredRows,
//     getData,
//     data,
//     setData,
//   } = useContext(UserContext);

//   console.log("Views:", data);

//   return (
//     <>
//       <div>
//         <h2>Auction View</h2>
//         <Table striped bordered hover>

//           {Array.isArray(data) && data.map((value,i)=>{
//             return (
//               <>
//               <div>
//                 <h2>{ value.auctionName}</h2>
//                 {<h2></h2>}
//               </div>
//               </>
//             )
//           })}
//           {/* <tbody>
//             {Array.isArray(data) && data.map((item) => (
//               Object.entries(item).map(([key, value]) => (
//                 <tr key={value.id}>
//                   <td>{key}</td>
//                   <td>{value}</td>
//                 </tr>
//               ))
//             ))}
//           </tbody> */}
//         </Table>
//       </div>
//     </>
//   );
// };

// export default AuctionView;

// ===================================================================================



import React, { useContext } from 'react';
import UserContext from './UserContext';
import { Table } from 'react-bootstrap';

const AuctionView = () => {
  const {
    open,
    operation,
    initialUser,
    handleClose,
    filteredRows,
    getData,
    data,
    setData,
  } = useContext(UserContext);

  // console.log("Views:", data);

  // Helper function to render key-value pairs for a specific object
  const renderObjectDetails = (object) => {
    return (
      <tbody>
        {Object.entries(object).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <>
      <div>
        <h2>Auction View</h2>
        <Table striped bordered hover>
          {operation === "view" && (
            <>
              <thead>
                <tr>
                  <th>Properties</th>
                  <th>Value</th>
                </tr>
              </thead>
              {renderObjectDetails(initialUser)}
            </>
          )}
        </Table>
      </div>
    </>
  );
};

export default AuctionView;
