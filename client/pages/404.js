import { Stack, Typography } from '@mui/material'
import React from 'react'
import { GRAY } from '../core/utils/Colors'
import Link from 'next/link'

const login = () => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} className="login-background">
      <Stack sx={{ border: '5px solid black', p: 2, bgcolor: GRAY, width: 300 }} alignItems={"center"}>
        <Typography sx={{fontSize: 108, color: 'black'}}>404</Typography>
        <Typography sx={{fontSize: 14, color: 'black', mt: -4}}>Page not found</Typography>
        
        <Link href='/'>
          <Typography sx={{color: 'black', "&:hover": {textDecoration: 'underline'}, mt: 2}}>Go Back</Typography>
        </Link>
      </Stack>
    </Stack>
  )
}

export default login