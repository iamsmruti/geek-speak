import { Stack } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <Stack sx={{background: 'black', width: '100vw', height: '100vh'}} justifyContent={'center'} alignItems={'center'}>
        <div className="lds-ripple"><div></div><div></div></div>
    </Stack>
  )
}

export default Loading