import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { DARKGRAY } from '../../core/utils/Colors'
import SubHeading from '../atoms/SubHeading'

const ProfileCard = ({person}) => {
  return (
    <Stack alignItems={"center"} sx={{border: `0.5px solid ${DARKGRAY}`, py: 1}}>
        <SubHeading title={'Author'}/>

        {person && <>
          <img style={{width: '150px', borderRadius: '50%', marginBottom: '1rem'}} src={person.image.asset.url}/>
          <Typography>{person.name}</Typography>
          <Typography sx={{fontWeight: 32, fontSize: '14px'}}>{person.bio}</Typography>
        </>}
    </Stack>
  )
}

export default ProfileCard