import { changePrinterNameByIpData, changePrinterStatusByIpData, getPrinterData, getPrintersData, removePrinterByIpData } from "data"
import { createElement } from "react"

export const getPrinters = async () => {
    return await getPrintersData()
        .then(response => {
            return response
        })
}

export const getPrinter = async (ip_address: string) => {
    return await getPrinterData(ip_address)
        .then(response => {
            return response
        })
}

export const changePrinterNameByIp = async (ip_address: string, name:string) => {
  return await changePrinterNameByIpData(ip_address, name)
    .then(response => {
      return response
    })
}

export const changePrinterStatusByIp = async (ip_address:string) => {
  return await changePrinterStatusByIpData(ip_address)
    .then(response => {
      return response
    })
}

export const removePrinterByIp = async (ip_address:string) => {
  return await removePrinterByIpData(ip_address)
    .then(response => {
      return response
    })
}

export const getPrinterStatus = (status:number) => {
    const activeParagraph = createElement(
        'p',
        {style: {color: "green" }},
        'active'
    )

    const inactiveParagraph = createElement(
        'p',
        {style: {color: "red" }},
        'inactive'
    )
    
    return status ? activeParagraph : inactiveParagraph
}
