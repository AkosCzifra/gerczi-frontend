import React from 'react';

import Backdrop from '../backdrop/Backdrop';
import Modal from '../modal/Modal';

const ErrorHandler = (props) => {
  return (
    <React.Fragment>
      {props.error && (
        <Backdrop clickhandler={() => window.location.reload()} />
      )}
      {props.error && (
        <Modal title="An error occured!">{props.error.customMessage}</Modal>
      )}
    </React.Fragment>
  );
};

export default ErrorHandler;
