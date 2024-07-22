import React from 'react';
import { FaFileDownload, FaEdit } from 'react-icons/fa';

const FileItem = ({ name, isDownloadable = true }) => (
  <div className="flex justify-between items-center p-2 bg-gray-100 rounded-lg mb-1">
    <span className="text-sm">{name}</span>
    {isDownloadable && (
      <FaFileDownload className="text-blue-500 cursor-pointer" />
    )}
  </div>
);

const FileSection = ({ title, files, editable = false }) => (
  <div className="h-full flex flex-col">
    <div className="flex items-center mb-2">
      <h3 className="text-lg font-semibold text-gray-400 mr-2">{title}</h3>
      {editable ? <FaEdit className="text-blue-500 hover:cursor-pointer" /> : <FaEdit className="text-blue-500 hover:cursor-not-allowed" />}
    </div>
    <div className="flex-grow p-2 rounded-lg border-solid border-gray-200 border-2 flex flex-col">
      {files.length > 0 && files[0] !== 'Not applicable' ? (
        files.map((file, index) => (
          <FileItem key={index} name={file} />
        ))
      ) : (
        <div className="text-center self-center text-gray-300">Not Applicable</div>
      )}
    </div>
  </div>
);

function Commercial10_1_files() {
  const filesData = [
    {
      title: "Sale deed",
      files: ["Template", "Older"],
      editable: true,
      gridArea: "1 / 1 / 2 / 3"
    },
    {
      title: "Power Attorney",
      files: ["Supporting docs"],
      editable: true,
      gridArea: "1 / 3 / 2 / 6"
    },
    {
      title: "Registry of Land",
      files: ["Not applicable"],
      editable: true,
      gridArea: "1 / 6 / 2 / 9"
    },
    {
      title: "Jamabandi",
      files: ["file.pdf", "file.pdf", "file.pdf", "file.pdf"],
      editable: true,
      gridArea: "2 / 1 / 4 / 6"
    },
    {
      title: "Khata Certificate and Extract",
      files: ["Khata Certificate", "Extract not available"],
      editable: true,
      gridArea: "2 / 6 / 3 / 9"
    },
    {
      title: "Encumbrance Certificates",
      files: ["Undertaking form"],
      editable: true,
      gridArea: "3 / 6 / 4 / 9"
    }
  ];

  const legalDescription = {
    title: "Legal Description of land",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    editable: true,
    gridArea: "4 / 1 / 5 / 6"
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Files</h2>
      
      <div className="grid grid-cols-8 grid-rows-4 gap-10" style={{ height: '600px' }}>
        {filesData.map((section, index) => (
          <div key={index} style={{ gridArea: section.gridArea }}>
            <FileSection {...section} />
          </div>
        ))}
        
        <div style={{ gridArea: legalDescription.gridArea }} className="self-end">
          <div className="flex items-center mb-2">
            <h3 className="text-sm font-semibold text-gray-400 mr-2">{legalDescription.title}</h3>
            {legalDescription.editable ? <FaEdit className="text-blue-500 hover:cursor-pointer" /> : <FaEdit className="text-blue-500 hover:cursor-not-allowed" />}
          </div>
          <p className="text-sm text-gray-700">
            {legalDescription.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Commercial10_1_files;
