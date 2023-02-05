'use client'

import { EMPTY_PRINTER, ipParams, printer } from "assets"
import { getPrinter, getPrinterStatus } from "lib"
import { useEffect, useState } from "react"

export default ({ params }: ipParams) => {

  const ip_address = params?.ip_address

  const [printer, setPrinter] = useState<printer>(EMPTY_PRINTER)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchPrinters()
  }, [])

  const fetchPrinters = async () => {
    ip_address && await getPrinter(ip_address)
      .then((response) => {
        setPrinter(response)
      })
    setIsLoading(false)
  }

  const RenderPrinter = () => {

    const name = printer.name

    const status = getPrinterStatus(printer.status)

    return (
      <div className='flex justify-center'>
        <div className="w-full max-w-md">
          <div className="p-8">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="printer-name"> printer name </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue={name} id="printer-name" type="text" placeholder={`printer name (${name})`} />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ip_address">ip address</label>
              <input className="appearance-none rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue={ip_address} id="ip_address" readOnly type="text" placeholder={`printer ip address (${ip_address})`} />
            </div>
            <div className='my-2'>
              <button className="py-2 px-4 w-full bg-primary-500 hover:bg-primary-700 text-white font-bold rounded focus:outline-none focus:shadow-outline" type='button'> update printer </button>
            </div>
            <div className="my-2">
              <button className="py-2 px-4 w-full bg-danger-500 hover:bg-danger-700 text-white font-bold rounded focus:outline-none focus:shadow-outline" type='button'> remove printer </button>
              <p className="text-red-500 text-xs italic">warning! this is perminent.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const RenderLoadingScreen = () => {
    return <div className=''>Loading...</div>
  }


  return isLoading ? <RenderLoadingScreen /> : <RenderPrinter />
}
{/* <div className='h-screen flex flex-col items-center'>
        <div className='h-3/6 flex flex-col justify-evenly'>
          <h1 className='text-3xl'>name:</h1>
          <h1 className='text-3xl'>{printer.name}</h1>
          <h1 className='text-3xl'>ip address:</h1>
          <h1 className='text-3xl'>{printer.ip_address}</h1>
          <h1 className='text-3xl'>status:</h1>
          <h1 className='text-3xl'>{status}</h1>
        </div>
      </div> */}