import React, { useState } from 'react'
import { FaPlane, FaCity, FaLandmark, FaShieldAlt, FaBolt, FaEdit, FaTrash } from 'react-icons/fa'

function Agricultural4() {
  const [contentBlocks, setContentBlocks] = useState([])
  const [landmarks, setLandmarks] = useState([
    { placeholder: 'Name of land mark', distance: '2 KM', icon: FaPlane },
    { placeholder: 'Name of land mark', distance: '2 KM', icon: FaCity },
    { placeholder: 'Name of land mark', distance: '2 KM', icon: FaLandmark },
    { placeholder: 'Name of land mark', distance: '2 KM', icon: FaShieldAlt },
    { placeholder: 'Name of land mark', distance: '2 KM', icon: FaBolt },
  ])
  const [showModal, setShowModal] = useState(false)
  const [newBlockTitle, setNewBlockTitle] = useState('')
  const [newBlockDescription, setNewBlockDescription] = useState('')
  const [editingIndex, setEditingIndex] = useState(null)

  const addContentBlock = () => {
    setEditingIndex(null)
    setNewBlockTitle('')
    setNewBlockDescription('')
    setShowModal(true)
  }

  const handleAddOrEditBlock = () => {
    if (newBlockTitle.trim() !== '') {
      if (editingIndex !== null) {
        // Edit existing block
        const updatedBlocks = [...contentBlocks]
        updatedBlocks[editingIndex] = { title: newBlockTitle, description: newBlockDescription }
        setContentBlocks(updatedBlocks)
      } else {
        // Add new block
        setContentBlocks([...contentBlocks, { title: newBlockTitle, description: newBlockDescription }])
      }
      setNewBlockTitle('')
      setNewBlockDescription('')
      setShowModal(false)
      setEditingIndex(null)
    }
  }

  const handleEdit = (index) => {
    setEditingIndex(index)
    setNewBlockTitle(contentBlocks[index].title)
    setNewBlockDescription(contentBlocks[index].description)
    setShowModal(true)
  }

  const handleDelete = (index) => {
    const updatedBlocks = contentBlocks.filter((_, i) => i !== index)
    setContentBlocks(updatedBlocks)
  }

  const handleDescriptionChange = (e) => {
    const description = e.target.value
    if (description.length <= 300) {
      setNewBlockDescription(description)
    }
  }

  return (
    <div className="container mx-auto p-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-20 min-h-[500px]">
        <div className="border-solid border-2 border-gray-400 p-4">
          <div className='flex justify-between items-center mb-4'>
            <h2 className="font-semibold">Content</h2>
            <button
              onClick={addContentBlock}
              className="text-blue-500 border border-blue-500 px-3 py-1 rounded"
            >
              + Add a content block
            </button>
          </div>
          {contentBlocks.length === 0 ? (
            <p className="text-gray-400 text-center pt-24">
              Fill in with blocks of<br/>
              content to increase the<br/>
              chances of investors<br/>
              investing in your<br/>
              opportunity.
            </p>
          ) : (
            contentBlocks.map((block, index) => (
              <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-blue-500">
                    {block.title} 
                    <FaEdit 
                      className="inline text-blue-500 ml-2 cursor-pointer" 
                      onClick={() => handleEdit(index)}
                    />
                  </h3>
                  <FaTrash 
                    className="text-blue-500 cursor-pointer" 
                    onClick={() => handleDelete(index)}
                  />
                </div>
                <p className="text-gray-600">{block.description}</p>
              </div>
            ))
          )}
        </div>
        
        <div className="border-solid border-2 border-gray-400 p-4">
          <h2 className="font-semibold mb-2">Land marks</h2>
          {landmarks.map((landmark, index) => (
            <div key={index} className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              <input 
                type="text" 
                placeholder={landmark.placeholder} 
                className="flex-grow p-2 border rounded mr-2 bg-gray-200"
                onChange={(e) => {
                  const newLandmarks = [...landmarks]
                  newLandmarks[index].name = e.target.value
                  setLandmarks(newLandmarks)
                }}
              />
              <input 
                type="text" 
                value={landmark.distance} 
                className="w-16 p-2 border rounded mr-2 bg-gray-200"
                onChange={(e) => {
                  const newLandmarks = [...landmarks]
                  newLandmarks[index].distance = e.target.value
                  setLandmarks(newLandmarks)
                }}
              />
              <landmark.icon className="text-2xl" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-20">
        <button className="bg-black text-white px-4 py-2 rounded">
          Next
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">
              {editingIndex !== null ? 'Edit Content Block' : 'Add Content Block'}
            </h2>
            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 border rounded mb-4"
              value={newBlockTitle}
              onChange={(e) => setNewBlockTitle(e.target.value)}
            />
            <textarea
              placeholder="Description"
              className="w-full p-2 border rounded mb-2 h-24"
              value={newBlockDescription}
              onChange={handleDescriptionChange}
              maxLength={300}
            />
            <p className="text-sm text-gray-500 mb-4">
              {newBlockDescription.length}/300 characters
            </p>
            <div className="flex justify-end">
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2"
                onClick={() => {
                  setShowModal(false)
                  setEditingIndex(null)
                }}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleAddOrEditBlock}
              >
                {editingIndex !== null ? 'Save' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Agricultural4