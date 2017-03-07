import React, { Component } from 'react';

const Modal = ({del, id}) => {
  return (
    <div className="modal fade" id="deleteModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Are you sure?</h3>
          </div>
          <div className="modal-body">
            <p>Once this game is deleted it cannot be undone.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-warning" onClick={() => del(String(id))} data-dismiss="modal">Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;
