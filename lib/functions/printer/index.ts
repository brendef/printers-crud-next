import { getPrinterData, getPrintersData } from "data"
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

export const getPrinterStatus = (status:number) => {
    const activeParagraph = createElement(
        'p',
        {className: 'text-success-500' },
        'active'
    )

    const inactiveParagraph = createElement(
        'p',
        {className: 'text-danger-500' },
        'inactive'
    )
    
    return status ? activeParagraph : inactiveParagraph
}