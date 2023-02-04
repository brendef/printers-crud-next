'use client'

import { printer } from "assets"
import Card from "components/card"
import { getPrinters } from "lib/functions/printerFunctions"
import { useEffect, useState } from "react"

export default () => {

  const [printers, setPrinters] = useState<printer[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchPrinters()
  }, [])

  const fetchPrinters = async () => {
    await getPrinters()
      .then((response) => {
        setPrinters(response)
      })
    setIsLoading(false)
  }

  const SkeletonCards = () => {
    return (
      <div role="status" className="max-w-sm animate-pulse">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <span className="sr-only">Loading...</span>
      </div>

    )
  }

  const RenderPrinters = () => {
    const printersMap = printers && printers.map((printer, key) => {
      const status = printer.status ? <p className='text-success-500'>active</p> : <p className='text-danger-500'>inactive</p>
      return (
        <div key={key}>
          <Card title={printer.name} subTitle={printer.ip_address} body={status} to='#' css='' />
        </div>
      )
    })
    return (
      <div className='p-4 grid grid-cols-4 gap-4'> {printersMap} </div>
    )
  }

  return isLoading ? <SkeletonCards /> : (
    <RenderPrinters />
  )
}
