import { Button, Divider, Link as MLink, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import GoogleLoginButton from '../components/atoms/GoogleLoginButton'
import Heading from '../components/atoms/Heading'
import { BLACK, GRAY } from '../core/utils/Colors'
import Link from 'next/link'

const login = () => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} className="login-background">
      <Stack sx={{ border: '5px solid black', p: 2, bgcolor: GRAY, width: 300 }} alignItems={"center"}>
        <Heading title={"Login"} color={'black'} />
        <GoogleLoginButton />

        <Link href='/'>
          <Typography sx={{ color: 'black', "&:hover": { textDecoration: 'underline' }, mt: 2 }}>Go Back</Typography>
        </Link>
      </Stack>
    </Stack>
  )
}

export default login