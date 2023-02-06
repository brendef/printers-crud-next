import { BASE_URL, bodyParams } from 'assets'
import { del, get, post } from 'lib'

export const getPrintersData = async () => await get({ useBaseURL: BASE_URL, path: '/printers'})

export const getPrinterData = async (ip_address:string) => await get({ useBaseURL: BASE_URL, path: `/printer/${ip_address}`})

export const changePrinterNameByIpData = async (ip_address:string, name:string) => await get({ useBaseURL: BASE_URL, path: `/update_name/${ip_address}?name=${name}` })

export const changePrinterStatusByIpData = async (ip_address:string) => await get({ useBaseURL: BASE_URL, path:`/change_status/${ip_address}`} )

export const removePrinterByIpData = async (ip_address:string) => await del({ useBaseURL: BASE_URL, path: `/remove_printer/${ip_address}`})

export const addPrinterData = async (bodyParams:bodyParams) => await post({useBaseURL: BASE_URL, bodyParams, path:'/add_printer'})
