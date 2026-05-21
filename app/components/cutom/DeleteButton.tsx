import React, { useState } from "react";

export default function DeleteButton({ onDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      {!showConfirm ? (
        <button
          onClick={() => setShowConfirm(true)}
          className="px-3 py-1 bg-red-600 text-white rounded"
        >
          Delete
        </button>
      ) : (
        <div className="flex gap-2 items-center">
          <span className="text-sm">Confirm?</span>

          <button
            onClick={() => {
              onDelete();
              setShowConfirm(false);
            }}
            className="px-2 py-1 bg-red-700 text-white rounded"
          >
            Yes
          </button>

          <button
            onClick={() => setShowConfirm(false)}
            className="px-2 py-1 bg-gray-300 rounded"
          >
            No
          </button>
        </div>
      )}
    </>
  );
}