import { BASE_URL } from 'assets'
import { get } from 'lib'

export const getPrintersData = async () => await get({ useBaseURL: BASE_URL, path: '/printers'})

export const getPrinterData = async (ip_address:string) => await get({ useBaseURL: BASE_URL, path: `/printer/${ip_address}`})

