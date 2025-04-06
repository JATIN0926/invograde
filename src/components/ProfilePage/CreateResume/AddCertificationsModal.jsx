import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCertification } from "@/redux/slices/modalSlice";

const AddCertificationsModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [certificationName, setCertificationName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [doesNotExpire, setDoesNotExpire] = useState(false);

  const resetForm = () => {
    setCertificationName("");
    setExpiryMonth("");
    setExpiryYear("");
    setDoesNotExpire(false);
  };

  const handleSave = (addAnother = false) => {
    if (!certificationName.trim()) return;

    const newCertification = {
      name: certificationName.trim(),
      expiryMonth: doesNotExpire ? null : expiryMonth,
      expiryYear: doesNotExpire ? null : expiryYear,
      doesNotExpire,
    };

    dispatch(addCertification(newCertification));
    resetForm();

    if (!addAnother) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[40%] relative font-PublicSans-Regular">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg text-black">Add certification</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-black text-xl font-bold">
            ✖
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Certification name *"
            value={certificationName}
            onChange={(e) => setCertificationName(e.target.value)}
            className="border border-[#AAAAAA] w-full p-2 rounded-lg placeholder:font-PublicSans-Regular"
          />

          <div className="flex gap-4">
            <select
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
              disabled={doesNotExpire}
              className="border border-[#AAAAAA] w-1/2 p-2 rounded-lg"
            >
              <option value="">Expiry month</option>
              {[
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ].map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>

            <select
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
              disabled={doesNotExpire}
              className="border border-[#AAAAAA] w-1/2 p-2 rounded-lg"
            >
              <option value="">Expiry year</option>
              {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <label className="flex items-center gap-2 text-sm text-black">
            <input
              type="checkbox"
              checked={doesNotExpire}
              onChange={() => setDoesNotExpire(!doesNotExpire)}
            />
            Does not expire
          </label>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button onClick={onClose} className="border border-[#774FCC] px-4 py-2 rounded-lg hover:bg-purple-200">
            Cancel
          </button>
          <button onClick={() => handleSave(true)} className="border border-[#774FCC] px-8 py-2 rounded-lg hover:bg-purple-200">
            Save and add another
          </button>
          <button onClick={() => handleSave(false)} className="border border-[#774FCC] px-4 py-2 rounded-lg hover:bg-purple-200">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCertificationsModal;
