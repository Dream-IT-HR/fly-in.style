import React from 'reactn';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog"
     style={{
         position:'fixed',
         top:'50%',
         left: '50%',
         transform: 'translate(-50%,-50%)',
         backgroundColor: 'aquamarine',
         marginleft: '10px',
         marginright: '10px',
         borderwidth: 'thin',
         borderStyle: 'solid',
         padding: '5px'
    }}
    >
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
          Hello, I'm a modal.
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;