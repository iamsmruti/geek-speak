import React from 'react'
import { TfiWrite } from 'react-icons/tfi'
import { HiMenuAlt3 } from 'react-icons/hi'
import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'

const WriteIcon = () => {
  return (
    <Stack alignContent={'center'} direction={'row'} sx={{ml: 2}}>
        <TfiWrite fontSize={22}/>
        <Typography sx={{ml: 1}}>write</Typography>
    </Stack>
  )
}

export const MenuIcon = () => {
    return (
      <Stack direction={'row'} sx={{ml: 2, bgcolor: 'white', width: 50, height: 50, borderRadius: '50%' }} />
    )
}

export default WriteIcon