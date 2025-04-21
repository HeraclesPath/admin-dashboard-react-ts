import { useRef } from 'react';
import toast from 'react-hot-toast';
import { HiOutlineTrash } from 'react-icons/hi2';

const DeleteAccountModal = () => {
  const modalDelete = useRef<HTMLDialogElement>(null);

  return (
    <div className="mt-10">
      <button
        className="btn btn-disabled text-error text-xs xl:text-sm"
        onClick={() => modalDelete.current?.showModal()}
      >
        <HiOutlineTrash className="text-lg" />
        Delete My Account
      </button>
      <dialog className="modal" ref={modalDelete}>
        <div className="modal-box">
          <h3 className="font-bold text-lg dark:text-white">Action Confirmation!</h3>
          <p className="py-4">Do you want to delete your account?</p>
          <div className="modal-action flex-col gap-3">
            <button
              onClick={() => toast('Lancang kamu ya!', { icon: '😠' })}
              className="btn btn-error btn-block"
            >
              Yes, I want to delete my account
            </button>
            <form method="dialog" className="w-full">
              <button className="btn btn-block dark:btn-neutral">
                No, I don't think so
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteAccountModal;