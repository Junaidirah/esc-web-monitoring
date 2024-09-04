import React from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

const ConfirmationButton = ({ isDeviceOn, setIsDeviceOn }) => {

  const handleClick = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: isDeviceOn ? "You are about to turn off the device." : "You are about to turn on the device.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: isDeviceOn ? 'Yes, turn it off!' : 'Yes, turn it on!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: isDeviceOn ? 'Turned off!' : 'Turned on!',
          text: `The device has been ${isDeviceOn ? 'turned off' : 'turned on'}.`,
          icon: 'success'
        });
        setIsDeviceOn(!isDeviceOn);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: 'Cancelled',
          text: 'Action has been cancelled.',
          icon: 'error'
        });
      }
    });
  };

  return (
    <button onClick={handleClick} style={isDeviceOn ? styles.redButton : styles.blueButton}>
      {isDeviceOn ? 'Matikan alat' : 'Klik untuk menghidupkan'}
    </button>
  );
};

const styles = {
  blueButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  redButton: {
    padding: '10px 20px',
    backgroundColor: '#DC3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ConfirmationButton;
