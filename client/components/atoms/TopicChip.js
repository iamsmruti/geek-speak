import Link from 'next/link'
import { Box } from '@mui/system'
import React from 'react'
import { BLACK, BLUE, GRAY } from '../../core/utils/Colors'

const TopicChip = ({title, link}) => {
  return (
    <Link href={link}>
        <Box sx={{bgcolor: GRAY, color: BLACK, width: 'fit-content', px: 0.7, py: 0.5, borderRadius: 10, fontSize: 12, mx: 2, mb: 1, '&:hover': {bgcolor: BLUE}}}>{title}</Box>
    </Link>
  )
}

export default TopicChip