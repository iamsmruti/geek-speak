import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { BLUE } from '../../core/utils/Colors'

const Logo = () => {
  return (
    <Stack direction={'row'}>
        <Typography sx={{fontSize: 24, fontWeight: 32}}>Geek</Typography>
        <Typography sx={{fontSize: 24, color: BLUE}}>Speak</Typography>
    </Stack>
  )
}

export default Logo