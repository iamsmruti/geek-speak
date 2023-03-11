import { useState } from 'react'
import { Button, Divider } from '@mui/material'
import { Stack } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import WriteIcon, { MenuIcon } from '../../core/icons/Icons'
import Logo from '../atoms/Logo'

const Navbar = () => {
  const [auth, setAuth] = useState(false)
  return (
    <>
      <Stack sx={{ px: { md: 4, xs: 2 }, py: { md: 2, xs: 1 } }} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Link href={"/"}>
          <Logo />
        </Link>

        <Stack direction={'row'} alignItems={'center'}>
          <a href='https://geek-speak-sanity.vercel.app'>
            <WriteIcon />
          </a>
        </Stack>
      </Stack>
      <Divider />
    </>
  )
}

export default Navbar