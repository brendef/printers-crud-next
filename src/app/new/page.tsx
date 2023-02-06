'use client'

import { addPrinter } from "lib"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default () => {

  const router = useRouter()

  const [printerName, setPrinterName] = useState()
  const [ipAddress, setIpAddress] = useState()
  const [printerStatus, setPrinterStatus] = useState(0)

  const RenderStatusCheckbox = () => {
    return (
      <div className='flex justify-evenly'>
        <div className="mx-2">
          <input id="active-checkbox" type="checkbox" value="" checked={!!printerStatus} onChange={() => setPrinterStatus(+ !printerStatus)} className="w-4 h-4 rounded" />
          <label htmlFor="active-checkbox" className="ml-2 text-sm font-medium text-success-500">active</label>
        </div>
        <div className="mx-2">
          <input id="inactive-checkbox" type="checkbox" value="" checked={!printerStatus} onChange={() => setPrinterStatus(+ !printerStatus)} className="w-4 h-4 rounded" />
          <label htmlFor="inactive-checkbox" className="ml-2 text-sm font-medium text-danger-500">inactive</label>
        </div>
      </div>
    )
  }

  const handleAddName = (text:any) => {
    setPrinterName(text)
  }

  const handleAddIp = (text:any) => {
    setIpAddress(text)
  }

  const inputFields = [
    { label: 'printer name', type: 'text', onchange: (e:any) => handleAddName(e.target.value) },
    { label: 'ip address', type: 'text', onchange: (e:any) => handleAddIp(e.target.value) },
  ]

  const submitNewPrinter = () => {
    const printerDetails = {
      name: printerName,
      ip_address: ipAddress,
      status: printerStatus
    }

    addPrinter(printerDetails)
      .then(response => {
        router.push('/') 
      })
  }
  
  return (
    <div className='flex justify-center'>
      <div className="w-full max-w-md">
        <div className="p-8">
          {inputFields.map((field:any, key:number) => (
            <div key={key} className='my-2'>
              <label className="block text-gray-700 text-lg font-bold my-4" htmlFor="printer-name"> { field.label } </label>
              <input className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={field.onchange} id={field.label.split(' ').join('_').toLowerCase()} type={field.type} placeholder={`${field.label}`} />
            </div>
          ))}
          <label className="block text-gray-700 text-lg font-bold my-4" htmlFor="status"> status</label>
          <RenderStatusCheckbox />
          <div className='my-6'>
            <button onClick={submitNewPrinter} className="py-2 px-4 w-full bg-primary-500 hover:bg-primary-700 text-white font-bold rounded focus:outline-none focus:shadow-outline" type='button'> add printer </button>
          </div>
        </div>
      </div>
    </div>
  )
}
