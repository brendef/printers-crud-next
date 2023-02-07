'use client'

import { EMPTY_PRINTER, ipParams, printer } from "assets"
import { BackButton } from "components/buttons/back"
import ParagraphSkeleton from "components/ParagraphSkeleton"
import { changePrinterNameByIp, changePrinterStatusByIp, getPrinter, getPrinterStatus, removePrinterByIp } from "lib"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default ({ params }: ipParams) => {

  const router = useRouter()

  const ip_address = params?.ip_address

  const [printer, setPrinter] = useState<printer>(EMPTY_PRINTER)
  const [printerName, setPrinterName] = useState<string>()
  const [printerStatus, setPrinterStatus] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(true)
  const [inEditMode, setInEditMode] = useState(false)

  useEffect(() => {
    fetchPrinter()
  }, [])

  const handleEditUpdate = () => {
    const editModeStatus = inEditMode
    setInEditMode(!inEditMode)

    if (!editModeStatus) return

    printerName != printer.name && changePrinterNameByIp(String(ip_address), String(printerName))
      .then(response => {
        printer.name = String(printerName)
      })

    !printerStatus === !!printer.status && changePrinterStatusByIp(String(ip_address))
      .then(response => {
        printer.status = + printerStatus
        setPrinterStatus(printerStatus)
      })
  }

  const fetchPrinter = async () => {
    ip_address && await getPrinter(ip_address)
      .then((response) => {
        setPrinter(response)
        setPrinterName(response.name)
        setPrinterStatus(response.status)
      })
    setIsLoading(false)
  }

  const deletePrinter = () => {
    removePrinterByIp(String(ip_address))
      .then((response) => {
        router.push('/')
      })
  }

  const RenderStatusCheckbox = () => {
    return (
      <div className='flex justify-evenly'>
        <div className="mx-2">
          <input id="active-checkbox" type="checkbox" value="" className="w-4 h-4 rounded" checked={printerStatus} onChange={() => setPrinterStatus(!printerStatus)} />
          <label htmlFor="active-checkbox" className="ml-2 text-sm font-medium text-success-500">active</label>
        </div>
        <div className="mx-2">
          <input id="inactive-checkbox" type="checkbox" value="" className="w-4 h-4 rounded" checked={!printerStatus} onChange={() => setPrinterStatus(!printerStatus)} />
          <label htmlFor="inactive-checkbox" className="ml-2 text-sm font-medium text-danger-500">inactive</label>
        </div>
      </div>
    )
  }

  const RenderPrinterStatus = () => {
    return <div>{getPrinterStatus(+ printerStatus)}</div>
  }

  const RenderDelete = () => {
    return (
      <div className="my-2">
        <button className="py-2 px-4 w-full bg-danger-500 hover:bg-danger-700 text-white font-bold rounded focus:outline-none focus:shadow-outline" onDoubleClick={deletePrinter} type='button'>remove printer</button>
        <p className="text-red-500 text-xs italic">double click "remove printer" to remove product.</p>
        <p className="text-red-500 text-xs italic">warning! this is perminent.</p>
      </div>
    )
  }

  const handleCancel = () => {
    setInEditMode(!inEditMode);
    setPrinterName(printer.name)
    setPrinterStatus(!!printer.status)
  }

  const RenderCancel = () => {
    return (
      <div className='my-2'>
        <button className="py-2 px-4 w-full bg-secondary-500 hover:bg-secondary-700 text-white font-bold rounded focus:outline-none focus:shadow-outline" onClick={handleCancel} type='button'> cancel </button>
      </div>
    )
  }

  return isLoading ? <ParagraphSkeleton amount={3} /> : (
    <div className='flex justify-center'>
      <div className="w-full max-w-lg">
        <div className="p-8">
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="printer-name"> printer name </label>
            {inEditMode ?
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={printerName} onChange={e => setPrinterName(e.target.value)} id="printer-name" type="text" placeholder={`printer name (${printer.name})`} /> :
              <p className="appearance-none rounded w-full py-2" id="printer-name">{printerName}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="ip_address"> ip address </label>
            <p className="appearance-none rounded w-full py-2 text-gray-700" id="ip_address" >{ip_address} </p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="checkbox"> status</label>
            {inEditMode ? <RenderStatusCheckbox /> : <RenderPrinterStatus />}
          </div>
          <div className='my-2'>
            <button className="py-2 px-4 w-full bg-primary-500 hover:bg-primary-700 text-white font-bold rounded focus:outline-none focus:shadow-outline" onClick={handleEditUpdate} type='button'> {inEditMode ? 'update' : 'edit'} printer </button>
          </div>
          {inEditMode && <RenderCancel />}
          {inEditMode ? <RenderDelete /> : <BackButton router={router} />}
        </div>
      </div>
    </div>
  )
}
