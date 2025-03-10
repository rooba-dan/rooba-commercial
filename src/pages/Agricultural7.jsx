import React, { useState } from 'react';
import { FaRegCircle } from "react-icons/fa";

const FileInput = ({ label, maxFileSize, onChange, onAvailabilityChange }) => {
  const [fileName, setFileName] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);
  const [unavailabilityReason, setUnavailabilityReason] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onChange(file);
    }
  };

  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
    onAvailabilityChange(!isAvailable);
    if (isAvailable) {
      setFileName('');
      onChange(null);
    }
  };

  const handleReasonChange = (event) => {
    setUnavailabilityReason(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <label className="text-sm font-medium text-gray-700">
          {label} <span className="text-red-500">*</span>
        </label>
        <button onClick={toggleAvailability} className="text-xs">
          {isAvailable ? 
            <div className='flex border rounded-lg bg-green-300 p-1'>
              <FaRegCircle className='self-center bg-green-500 border rounded-[50%]' />
              <span className="text-sm text-green-500">Document Available</span>
            </div>
            : 
            <div className='flex border rounded-lg bg-red-300 p-1'>
              <span className="text-sm text-red-500">Document Unavailable</span>
              <FaRegCircle className='self-center bg-red-500 border rounded-[50%]' />
            </div>
          }
        </button>
      </div>
      {isAvailable ? (
        <div className="bg-gray-100 py-4 flex justify-center">
          <label className="cursor-pointer bg-black text-white text-sm py-1 px-3 rounded">
            {fileName || `Choose files (max ${maxFileSize}MB)`}
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
            />
          </label>
        </div>
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
          placeholder="Why is the document unavailable? Type here.."
          value={unavailabilityReason}
          onChange={handleReasonChange}
        />
      )}
    </div>
  );
};

const FormField = ({ title, subtitle, fields, fieldName, maxFileSize }) => {
  const [files, setFiles] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (field, file) => {
    setFiles(prev => ({ ...prev, [field]: file }));
  };

  const handleAvailabilityChange = (field, isAvailable) => {
    if (!isAvailable) {
      setFiles(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Submitted files:', files);
    setIsSubmitting(false);
    // Reset files after submission
    setFiles({});
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm border border-gray-200 mb-6">
      <div className='flex justify-between items-start'>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}
        </div>
        <span className="text-white bg-green-600 px-2 py-1 rounded-sm text-xs">✓</span>
      </div>
      <hr className="mb-4" />
      {fields ? (
        fields.map((field, index) => (
          <FileInput 
            key={index} 
            {...field} 
            onChange={(file) => handleFileChange(field.label, file)}
            onAvailabilityChange={(isAvailable) => handleAvailabilityChange(field.label, isAvailable)}
          />
        ))
      ) : (
        <FileInput 
          label={fieldName} 
          maxFileSize={maxFileSize} 
          onChange={(file) => handleFileChange(fieldName, file)}
          onAvailabilityChange={(isAvailable) => handleAvailabilityChange(fieldName, isAvailable)}
        />
      )}
      <div className='flex justify-end mt-6'>
        <button 
          className="bg-black w-24 text-white px-4 py-2 text-sm hover:bg-gray-800 transition-colors"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

function Agricultural7() {
  const formFields = [
    { title: "4. Registry of land", subtitle: "If applicable", fieldName: "Registry of land", maxFileSize: 5 },
    { title: "5. Jamabandi", subtitle: "If applicable", fieldName: "Jamabandi", maxFileSize: 5 },
    { 
      title: "6. Khata Certificate and Extract",
      fields: [
        { label: "Khata Certificate", maxFileSize: 5 },
        { label: "Extract", maxFileSize: 5 },
      ]
    },
    { title: "7. Undertaking confirming the land is free from encumbrances", fieldName: "Undertaking Form", maxFileSize: 5 },
  ];

  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-2 gap-4 p-6">
        {formFields.map((field, index) => (
          <FormField key={index} {...field} />
        ))}
      </div>
    </div>
  );
}

export default Agricultural7;