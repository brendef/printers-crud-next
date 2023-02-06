import { BaseSyntheticEvent, ReactNode } from "react"

export type navButton = {
    text: string,
    to: string
}

type navTitle = {
    text: string,
    to?: string,
    colour?: string
}

export type navbar = {
    title: navTitle,
    padding?: string,
    buttonLinks?: navButton[],
    backgroundColour: string
}

export type postRequest = {
    path: string,
    bodyParams: bodyParams,
    useBaseURL: String | boolean
}

export type getRequest = {
    path: string,
    useBaseURL: String | boolean
}

export type deleteRequest = {
    path: string,
    bodyParams?: Object[],
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

export type ipParams = {
    params?: {
        ip_address?: string
    }
}

export type inputFieldType = {
    label:string,
    type:string,
    onchange: (event: BaseSyntheticEvent) => void
  }

export type bodyParams = {
  name:string,
  ip_address:string,
  status:number
}