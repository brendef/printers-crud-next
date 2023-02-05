import { BASE_URL } from 'assets'
import { get, post } from 'lib'

export const getPrintersData = async () => await get({ useBaseURL: BASE_URL, path: '/printers'})

export const getPrinterData = async (ip_address:string) => await get({ useBaseURL: BASE_URL, path: `/printer/${ip_address}`})

export const changePrinterNameByIpData = async (ip_address:string, name:string) => await get({ useBaseURL: BASE_URL, path: `/update_name/${ip_address}?name=${name}` })

export const changePrinterStatusByIpData = async (ip_address:string) => await get({ useBaseURL: BASE_URL, path:`/change_status/${ip_address}`} )
