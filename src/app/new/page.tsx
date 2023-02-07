'use client'

import { inputFieldType } from "assets"
import { BackButton } from "components/buttons"
import { addPrinter } from "lib"
import { useRouter } from "next/navigation"
import { BaseSyntheticEvent, HTMLAttributeAnchorTarget, SyntheticEvent, useState } from "react"


export default () => {

  const router = useRouter()

  const [printerName, setPrinterName] = useState<string>()
  const [ipAddress, setIpAddress] = useState<string>()
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

  const inputFields = [
    { label: 'printer name', type: 'text', onchange: (event:BaseSyntheticEvent) => setPrinterName(event?.target.value) },
    { label: 'ip address', type: 'text', onchange: (event:BaseSyntheticEvent) => setIpAddress(event.target.value) },
  ]

  const submitNewPrinter = () => {
    const printerDetails = {
      name: String(printerName),
      ip_address: String(ipAddress),
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
          {inputFields.map((field:inputFieldType, key:number) => (
            <div key={key} className='my-2'>
              <label className="block text-gray-700 text-lg font-bold my-4" htmlFor="printer-name"> { field.label } </label>
              <input className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={field.onchange} id={field.label.split(' ').join('_').toLowerCase()} type={field.type} placeholder={`${field.label}`} />
            </div>
          ))}
          <label className="block text-gray-700 text-lg font-bold my-4" htmlFor="status"> status</label>
          <RenderStatusCheckbox />
          <div className='mt-6 mb-2'>
            <button onClick={submitNewPrinter} className="py-2 px-4 w-full bg-primary-500 hover:bg-primary-700 text-white font-bold rounded focus:outline-none focus:shadow-outline" type='button'> add printer </button>
          </div>
          <div className='my-2'>
            <BackButton router={router} />
          </div>
        </div>
      </div>
    </div>
  )
}
