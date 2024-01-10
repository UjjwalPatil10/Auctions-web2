import React from 'react';
import './DataModal.css';
import PropTypes from 'prop-types';

const DataModal = ({ data, onClose }) => {

  const handleClose = () => {
    console.log("Close icon clicked!"); 
    onClose(); 
  };

  return (
    <div className='justify-content-center' style={{ }}>
      <h2>User Details</h2>
      <div className='close-icon' onClick={handleClose}>
        X
      </div>
      <table>
        <tbody>
          {data && Object.entries(data).map(([key, value]) => (
            <tr key={key}>
              <td><strong>{key}</strong></td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

DataModal.propTypes = {
  data: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
};

export default DataModal;