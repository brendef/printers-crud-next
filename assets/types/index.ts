import { ReactNode } from "react"

export type postRequest = {
    path: string,
    bodyParams: Object[],
    useBaseURL: String | boolean
}

export type getRequest = {
    path: string,
    useBaseURL: String | boolean
}

export type renderPrinters = {
    printer: string,
    key: number
}

export type printer = {
    name: string,
    ip_address: string,
    status: number
}

export type card = {
    title?: string,
    subTitle?: string,
    body?: string | ReactNode,
    to?: string,
    css?: string
}
