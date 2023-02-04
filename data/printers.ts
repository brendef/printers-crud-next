import react from "react"
import { BASE_URL } from 'assets'
import { get } from 'lib'

export const getPrintersData = async () => await get({ useBaseURL: BASE_URL, path: '/printers'})

