'use client'

type ipParams = {
  params?: {
    ip_address?: string
  }
}

export default ({ params }:ipParams) => {

  const ip_address = params?.ip_address

  return (
      <h1>{ip_address}</h1>
  )
}
