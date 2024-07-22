import React, { useState, useCallback } from 'react';
import { FaRegCircle } from 'react-icons/fa';

const FormField = ({ label, type = 'file', maxFileSize = 5, onFieldChange }) => {
  const [fileName, setFileName] = useState('');
  const [isUploaded, setIsUploaded] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [isUnavailable, setIsUnavailable] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setIsUploaded(true);
      onFieldChange(label, file);
    }
  };

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
    onFieldChange(label, event.target.value);
  };

  const toggleUnavailable = () => {
    setIsUnavailable(!isUnavailable);
    if (!isUnavailable) {
      setIsUploaded(false);
      setFileName('');
      onFieldChange(label, null);
    } else {
      onFieldChange(label, 'unavailable');
    }
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <label className="block text-sm font-medium text-gray-700">
          {label}
          <span className="text-red-500 ml-1">*</span>
        </label>
        {type === 'file' && (
          <button onClick={toggleUnavailable} className="text-xs">
            {isUnavailable ? 
              <div className='flex border rounded-full bg-red-300 p-1'>
                <span className="text-sm text-red-500">Document Unavailable</span>
                <FaRegCircle className='self-center bg-red-500 border rounded-[50%]' />
              </div>
              : 
              <div className='flex border rounded-full bg-green-300 p-1'>
                <FaRegCircle className='self-center bg-green-500 border rounded-[50%]' />
                <span className="text-sm text-green-500">Document Available</span>
              </div>
            }
          </button>
        )}
      </div>
      {type === 'file' && !isUnavailable && (
        <div className={`py-5 flex justify-center border bg-gray-100 border-gray-300`}>
          <label className="cursor-pointer inline-block bg-black text-white text-sm py-1 px-3">
            {fileName || `Choose files (max ${maxFileSize}MB)`}
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
            />
          </label>
        </div>
      )}
      {type === 'file' && isUnavailable && (
        <input
          type="text"
          className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
          placeholder="Why is the document unavailable? Type here.."
          value={textValue}
          onChange={handleTextChange}
        />
      )}
      {type === 'text' && (
        <input
          type="text"
          className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
          value={textValue}
          onChange={handleTextChange}
          placeholder={`Enter ${label}`}
        />
      )}
      {isUploaded && !isUnavailable && <span className="text-xs text-green-600">Document uploaded</span>}
    </div>
  );
};

function Commercial6() {
  const [saleDeedData, setSaleDeedData] = useState({});
  const [buildingApprovalData, setBuildingApprovalData] = useState({});

  const saleDeedFields = [
    { label: "Sale Deed", type: "file" },
    { label: "Title Deed", type: "file" },
    { label: "Builder Buyer Agreement", type: "file" }
  ];

  const buildingApprovalFields = [
    { label: "Title Deed", type: "file" },
    { label: "Property PID", type: "file" },
    { label: "City Survey Sketch", type: "file" },
    { label: "Updated Tax Receipt", type: "file" },
    { label: "Property drawings", type: "file" },
    { label: "Foundation certificate and demand drafts", type: "file" }
  ];

  const handleSaleDeedFieldChange = useCallback((fieldName, value) => {
    setSaleDeedData(prevData => ({ ...prevData, [fieldName]: value }));
  }, []);

  const handleBuildingApprovalFieldChange = useCallback((fieldName, value) => {
    setBuildingApprovalData(prevData => ({ ...prevData, [fieldName]: value }));
  }, []);

  const handleSaleDeedSubmit = () => {
    console.log("Sale Deed Form Data:", saleDeedData);
    // send this data to a server
  };

  const handleBuildingApprovalSubmit = () => {
    console.log("Building Approval Form Data:", buildingApprovalData);
    // send this data to a server
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 bg-white rounded-lg shadow-md">
        <div className="w-full md:w-1/2 p-4">
          <div className='flex justify-between'>
              <h2 className="text-lg font-semibold mb-4">1. Sale Deed</h2>
              <span className="text-white bg-green-600 px-3 border self-start">✓</span>
          </div>
          <hr className='mb-5' />
          {saleDeedFields.map((field, index) => (
            <FormField key={index} label={field.label} type={field.type} onFieldChange={handleSaleDeedFieldChange} />
          ))}
          <div className='flex justify-end'>
            <button onClick={handleSaleDeedSubmit} className="mt-4 py-2 px-16 bg-black text-white rounded hover:bg-gray-800">
              Submit
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className='flex justify-between'>
              <h2 className="text-lg font-semibold mb-4">2. Building Approval Plan</h2>
              <span className="text-white bg-green-600 px-3 border self-start">✓</span>
          </div>
          <hr className='mb-5' />
          {buildingApprovalFields.map((field, index) => (
            <FormField key={index} label={field.label} type={field.type} onFieldChange={handleBuildingApprovalFieldChange} />
          ))}
          <div className='flex justify-end'>
            <button onClick={handleBuildingApprovalSubmit} className="mt-4 py-2 px-16 bg-black text-white rounded hover:bg-gray-800">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commercial6;