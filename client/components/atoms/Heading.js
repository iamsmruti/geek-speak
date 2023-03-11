import { Typography } from '@mui/material'
import React from 'react'

const Heading = ({title, color}) => {
  const c = color ? color : 'white'
  return (
    <Typography sx={{fontWeight: 500, fontSize: 22, mb: 2, color: c}}>{title}</Typography>
  )
}

export default Heading