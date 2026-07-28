import React from 'react';
import { X } from 'lucide-react';

const RegistrationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
          aria-hidden="true"
          onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-gray-900 border border-cyan-400/30 rounded-lg text-left overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.2)] transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 className="text-2xl leading-6 font-mono font-bold text-cyan-400 mb-4" id="modal-title">
                  Registration Complete!
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-300">
                    Thank you for your interest in SIGNOVA'26! 
                  </p>
                  <div className="mt-4 p-4 border border-emerald-400/30 bg-emerald-400/10 rounded-md">
                     <p className="text-emerald-400 font-mono text-center">
                        ✓ Individual Registration Acknowledged
                     </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    This is a placeholder modal for demonstration purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="btn-primary w-full sm:w-auto sm:ml-3"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
