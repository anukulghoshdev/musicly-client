import React from 'react';

const DeleteConfirmModal = ({title, message, closeModal, successAction, modalData}) => {
    return (
        <div>
            {/* The button to open modal */}
            

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="Delete-Confirm-Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={()=>successAction(modalData)} htmlFor="Delete-Confirm-Modal" className="btn btn-error">Delete</label>
                        <button onClick={()=>closeModal()} className="btn btn-outline btn-warning">Cancle</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;