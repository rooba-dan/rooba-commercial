import React, { useState } from 'react'

function Commercial2() {
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState('')
  const [startDate, setStartDate] = useState({ D: '', D2: '', M: '', M2: '', Y: '', Y2: '', Y3: '', Y4: '' })
  const [endDate, setEndDate] = useState({ D: '', D2: '', M: '', M2: '', Y: '', Y2: '', Y3: '', Y4: '' })
  const [term, setTerm] = useState({ type: 'Contingent sale', years: 3 })
  const [tokenFees, setTokenFees] = useState({ type: 'Percentage', value: 10 })
  const [investors, setInvestors] = useState({
    indianResidents: false,
    nriOci: false,
    foreignNationals: false,
    stateDomicile: false
  })
  const [areaOfLand, setAreaOfLand] = useState({ value: '', unit: 'Select Units' })
  const [mapLink, setMapLink] = useState('')
  const [location, setLocation] = useState({ village: '', district: '', state: '', country: '' })

  const handleStartDateChange = (key, value) => {
    setStartDate(prev => ({ ...prev, [key]: value }))
  }

  const handleEndDateChange = (key, value) => {
    setEndDate(prev => ({ ...prev, [key]: value }))
  }

  const handleTermChange = (change) => {
    setTerm(prev => ({ ...prev, years: Math.max(0, prev.years + change) }))
  }

  const handleTokenFeesChange = (change) => {
    setTokenFees(prev => ({ ...prev, value: Math.max(0, prev.value + change) }))
  }

  const handleSubmit = () => {
    const formData = {
      title,
      tags,
      startDate,
      endDate,
      term,
      tokenFees,
      investors,
      areaOfLand,
      mapLink,
      location
    }
    console.log('Form Data:', formData)
    // Here you would typically send this data to an API or perform other actions
  }

  return (
    <div className="container mx-auto p-4 bg-gray-200">
      <div className='flex bg-white mb-5'>
        <h1 className="ml-10 text-2xl font-bold mb-4">Enter Details</h1>
        <p className="ml-2 self-center text-sm text-red-500 mb-4">These details will be showed on the opportunity</p>
      </div>
      
      <div className='bg-white'>
        <div className="p-4 px-20 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
          <div className="space-y-4 border-solid border-2 border-gray-400 p-4">
            <div>
              <h2 className="font-semibold mb-2">About</h2>
              <input 
                type="text" 
                placeholder="Title" 
                className="w-full p-2 border rounded bg-gray-200" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
              />
              <input 
                type="text" 
                placeholder="Tags" 
                className="w-full p-2 border rounded mt-2 bg-gray-200" 
                value={tags} 
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
        
            <div>
              <h2 className="font-semibold mb-2">Starting Date</h2>
              <div className="grid grid-cols-8 gap-2">
                {['D', 'D2', 'M', 'M2', 'Y', 'Y2', 'Y3', 'Y4'].map(key => (
                  <input 
                    key={key}
                    type="text" 
                    placeholder={key.charAt(0)} 
                    className="p-2 border rounded bg-gray-200"
                    value={startDate[key]}
                    onChange={(e) => handleStartDateChange(key, e.target.value)}
                  />
                ))}
              </div>
            </div>
        
            <div>
              <h2 className="font-semibold mb-2">Closing Date</h2>
              <div className="grid grid-cols-8 gap-2">
                {['D', 'D2', 'M', 'M2', 'Y', 'Y2', 'Y3', 'Y4'].map(key => (
                  <input 
                    key={key}
                    type="text" 
                    placeholder={key.charAt(0)} 
                    className="p-2 border rounded bg-gray-200"
                    value={endDate[key]}
                    onChange={(e) => handleEndDateChange(key, e.target.value)}
                  />
                ))}
              </div>
            </div>
        
            <div>
              <h2 className="font-semibold mb-2">Term <span className="text-gray-500 text-sm">in years</span></h2>
              <div className="flex items-center space-x-4 mb-2">
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="term" 
                    checked={term.type === 'Contingent sale'} 
                    onChange={() => setTerm(prev => ({ ...prev, type: 'Contingent sale' }))} 
                    className="mr-2"
                  />
                  Contingent sale
                </label>
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="term" 
                    checked={term.type === 'Outright sale'} 
                    onChange={() => setTerm(prev => ({ ...prev, type: 'Outright sale' }))} 
                    className="mr-2"
                  />
                  Outright sale
                </label>
              </div>
              <div className="flex items-center">
                <button 
                  className="bg-gray-200 font-bold text-[#4375FB] mx-3 px-3 py-1 rounded-l" 
                  onClick={() => handleTermChange(-1)}
                >-</button>
                <input 
                  type="text" 
                  value={term.years} 
                  className="w-full p-2 border-t border-b bg-gray-200 text-center" 
                  readOnly 
                />
                <button 
                  className="bg-gray-200 font-bold text-[#4375FB] mx-3 px-3 py-1 rounded-r" 
                  onClick={() => handleTermChange(1)}
                >+</button>
              </div>
            </div>

            <div className="mt-4">
              <h2 className="font-semibold mb-2">Token Fees</h2>
              <div className="flex items-center space-x-4 mb-2">
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="fees" 
                    checked={tokenFees.type === 'Percentage'} 
                    onChange={() => setTokenFees(prev => ({ ...prev, type: 'Percentage' }))} 
                    className="mr-2"
                  />
                  Percentage
                </label>
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="fees" 
                    checked={tokenFees.type === 'Fees amount'} 
                    onChange={() => setTokenFees(prev => ({ ...prev, type: 'Fees amount' }))} 
                    className="mr-2"
                  />
                  Fees amount <span className="text-gray-500 text-sm">in Rs</span>
                </label>
              </div>
              <div className="flex items-center">
                <button 
                  className="bg-gray-200 font-bold text-[#4375FB] mx-3 px-3 py-1 rounded-l" 
                  onClick={() => handleTokenFeesChange(-1)}
                >-</button>
                <input 
                  type="text" 
                  value={`${tokenFees.value}${tokenFees.type === 'Percentage' ? '%' : ''}`} 
                  className="w-full p-2 border-t border-b bg-gray-200 text-center" 
                  readOnly 
                />
                <button 
                  className="bg-gray-200 font-bold text-[#4375FB] mx-3 px-3 py-1 rounded-r" 
                  onClick={() => handleTokenFeesChange(1)}
                >+</button>
              </div>
            </div>
        
            <div>
              <h2 className="font-semibold mb-2">Images of the Land</h2>
              <div className="border-2 border-dashed p-4 text-center">
                <p>Drag n Drop</p>
                <button className="bg-black text-white px-4 py-2 rounded mt-2">Choose files</button>
              </div>
            </div>
          </div>
        
          <div className="space-y-4">
            <div className='border-solid border-2 border-gray-400 p-4'>
              <h2 className="font-semibold mb-2">Who can invest (you can select multiple options)</h2>
              <div className="space-y-2">
                {Object.entries(investors).map(([key, value]) => (
                  <label key={key} className="flex items-center">
                    <input 
                      type="checkbox" 
                      checked={value} 
                      onChange={() => setInvestors(prev => ({ ...prev, [key]: !prev[key] }))} 
                      className="mr-2"
                    />
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </label>
                ))}
              </div>
            </div>
            
            <div className='border-solid border-2 border-gray-400 p-4 grid gap-4'>
              <div>
                <h2 className="font-semibold mb-2">Area Of Land</h2>
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="Type..." 
                    className="w-full p-2 border rounded-l bg-gray-200"
                    value={areaOfLand.value}
                    onChange={(e) => setAreaOfLand(prev => ({ ...prev, value: e.target.value }))}
                  />
                  <select 
                    className="p-2 border rounded-r bg-white"
                    value={areaOfLand.unit}
                    onChange={(e) => setAreaOfLand(prev => ({ ...prev, unit: e.target.value }))}
                  >
                    <option>Select Units</option>
                    <option>Square meters</option>
                    <option>Square feet</option>
                    <option>Acre</option>
                    <option>Bigha</option>
                  </select>
                </div>
              </div>
        
              <div>
                <h2 className="font-semibold mb-2">Google Map Link</h2>
                <input 
                  type="text" 
                  placeholder="Google Map Link" 
                  className="w-full p-2 border rounded bg-gray-200"
                  value={mapLink}
                  onChange={(e) => setMapLink(e.target.value)}
                />
              </div>
              
              {['village', 'district', 'state', 'country'].map(field => (
                <div key={field}>
                  <h2 className="font-semibold mb-2">{field.charAt(0).toUpperCase() + field.slice(1)}</h2>
                  <input 
                    type="text" 
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)} 
                    className="w-full p-2 border rounded bg-gray-200"
                    value={location[field]}
                    onChange={(e) => setLocation(prev => ({ ...prev, [field]: e.target.value }))}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className='flex justify-center pb-4'>
          <button 
            className="bg-black text-white px-4 py-2 rounded mt-4" 
            onClick={handleSubmit}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Commercial2