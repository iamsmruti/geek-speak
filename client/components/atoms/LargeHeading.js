import { Typography } from '@mui/material'
import React from 'react'

const LargeHeading = ({title}) => {
  return (
    <Typography sx={{fontWeight: 500, fontSize: 42, mb: 2, fontFamily: 'Nanum Myeongjo'}}>{title}</Typography>
  )
}

export default LargeHeading