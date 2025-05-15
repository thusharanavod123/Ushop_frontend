import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { Modal } from 'flowbite';
import type { ModalOptions, ModalInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';
import styles from './ConfirmDelete.module.css';


const ConfirmDelete = ({ open, onClose }: {
  open: boolean;
  onClose: any;
}) => {
  let modal: any;
  const closeModal = () => {
    modal.hide();
    onClose();
  };

  useEffect(() => {
    const $targetEl: HTMLElement = document.querySelector('#delete-modal') as HTMLElement;

    const modalOptions: ModalOptions = {
      backdrop: 'static',
      closable: false
    };

    modal = new Modal($targetEl, modalOptions);

    const openModal = () => {
      modal.show();
    };

    if (open) {
      openModal();
    }

  }, [open]);

  return (
    <div id="delete-modal" data-modal-target='delete-modal' tabIndex={-1}
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button type="button"
            className="border-0 absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={closeModal}>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-8 text-left">
            <h3 className="text-3xl mb-5 font-semibold text-gray-700">
              Confirm deletion
            </h3>
            <p className='font-light text-lg text-gray-700'>
              Are you sure you want to delete this item?
              This action cannot be undone.
            </p>
            <div className="flex justify-between mt-6">
              <button type="button" onClick={closeModal}
                className="border-0 text-gray-700 bg-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-md text-sm font-medium px-8 py-2.5 hover:text-gray-900 focus:z-10">
                Cancel
              </button>
              <button type="button"
                className="border-0 hover:bg-red-700 bg-red-600 font-bold items-center px-8 py-2 text-white">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
