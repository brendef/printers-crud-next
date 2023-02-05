'use client'

import { printer } from "assets"
import Card from "components/card"
import Search from "components/search"
import SkeletonCard from "components/skeletonCard"
import { getPrinters, getPrinterStatus } from "lib"
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

  const RenderPrinters = () => {
    const printersMap = printers && printers.map((printer, key) => {
      const status = getPrinterStatus(printer.status)
      const to = `/printer/${printer.ip_address}`
      return (
        <div key={key}>
          <Card title={printer.name} subTitle={printer.ip_address} body={status} to={to} css='' />
        </div>
      )
    })
    return (
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'> {printersMap} </div>
    )
  }

  const RenderLoadingCard = () => {
    return <div className='mt-20 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>{[...Array(5)].map(() => <SkeletonCard />)}</div>
  }

  const RenderPrintersFound = () => {
    return (
      <div className='p-3'>
        <div className='mt-2 mb-5'>
          <Search />
        </div>
        <RenderPrinters />
      </div>
    )
  }

  return isLoading ? <RenderLoadingCard  /> : <RenderPrintersFound />
}
