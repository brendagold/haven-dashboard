import React from 'react'

export default async function getAllProperties() {
  const res = await fetch('http://localhost:8080/api/v1/properties')
  if (!res.ok) throw new Error('failed to fetch data')
  return res.json()
}
