'use client'

import { printer } from "assets"
import Card from "components/card"
import SkeletonCard from "components/skeletonCard"
import { getPrinters, getPrinterStatus } from "lib"
import { useEffect, useState } from "react"

export default () => {

  const [printers, setPrinters] = useState<printer[]>()
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [showActiveStateOnly, setShowActiveStateOnly] = useState(false)
  const [filterByActivityState, setFilterByActivityState] = useState(false)

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

  const RenderPrinters = () => {
    const printersMap = printers && printers.map((printer, key) => {
      const status = getPrinterStatus(printer.status) 
      const to = `/printer/${printer.ip_address}`
      const whatToShow = filterByActivityState ? (!!printer.status === showActiveStateOnly) : true
      return whatToShow && (
         (printer.name.includes(searchTerm)) && <div key={key}>
          <Card title={printer.name} subTitle={printer.ip_address} body={status} to={to} css='' />
        </div>
      )
    })
    return (
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'> {printersMap} </div>
    )
  }

  const RenderLoadingCard = () => {
    return <div className='mt-20 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>{[...Array(5)].map((a, index) => <div className={a} key={index}><SkeletonCard /></div>)}</div>
  }

  const searchPrinters = (searchText:string) => {
    setSearchTerm(searchText)
  }

  const handleStateToggle = () => {
    setShowActiveStateOnly(!showActiveStateOnly)
  }

  const RenderToggleState = () => {
    return ( 
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" checked={showActiveStateOnly} onChange={handleStateToggle} />
        <div className="w-11 h-6 bg-danger-300 rounded-full peer peer-focus:ring-4 peer-focus:ring-success-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-success-600"></div>
      </label>

    )
  }
  
  return isLoading ? <RenderLoadingCard  /> : ( 
    <div className='p-3'>
      <div className='mx-3 mt-2 mb-5'>
        <div className="w-full flex items-center">   
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input type="text" id="simple-search" onChange={event => searchPrinters(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
          </div>
        </div>
        <div className='my-3'>
          <div className='flex flex-row-reverse'>
            <RenderToggleState /> 
            <p className='mx-2'>filter by activity state</p>
            <input className='ml-3' type='checkbox' checked={filterByActivityState} onChange={() => setFilterByActivityState(!filterByActivityState)} />
          </div>
        </div>
      </div>
      <RenderPrinters />
    </div>
  )
}
