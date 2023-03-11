import { Typography } from '@mui/material'
import React from 'react'

const SubHeading = ({ title }) => {
  return (
    <Typography sx={{
      fontWeight: 400, fontSize: 20, mb: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: '1',
      WebkitBoxOrient: 'vertical',
    }}>{title}</Typography>
  )
}

export default SubHeading