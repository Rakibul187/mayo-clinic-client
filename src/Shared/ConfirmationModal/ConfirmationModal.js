import React from 'react';

const ConfirmationModal = ({ closeModal, title, message, successAction, modalData, successBtnName }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <button
                            onClick={closeModal} className="btn btn-outline btn-xs">
                            Close
                        </button>
                        <label
                            onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="btn btn-xs btn-primary text-white">{successBtnName}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;