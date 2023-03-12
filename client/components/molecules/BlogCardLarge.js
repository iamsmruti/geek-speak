import { Button, Typography, Grid, Link } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { LIGHTGRAY } from '../../core/utils/Colors'
import SubHeading from '../atoms/SubHeading'

const BlogCardLarge = ({post}) => {
    return (
        <Grid container direction={'row'} sx={{ height: 'auto', width: '100%', my: 4, p: 1, borderBottom: `0.3px solid ${LIGHTGRAY}`, flexWrap: 'wrap-reverse' }} justifyContent={"space-between"}>
            <Grid sx={{ pr: 2 }} item md={8} xs={12}>
                <Link href={`/blog?slug=${post.slug.current}`} style={{cursor: 'pointer'}}>
                    <SubHeading title={post.title} />
                </Link>
                <Typography sx={{
                    fontWeight: 32,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '4',
                    WebkitBoxOrient: 'vertical',
                }}>{post.description}</Typography>

                <Stack direction={'row'} justifyContent={'flex-start'} sx={{ mt: 2 }}>
                    <Link href={`/blog?slug=${post.slug.current}`} style={{cursor: 'pointer'}}><Button variant='contained'>Read More</Button></Link>
                </Stack>
            </Grid>
            <Grid item md={4} xs={12}>
                <Link href={`/blog?slug=${post.slug.current}`} style={{cursor: 'pointer'}}>
                    <img style={{ width: '100%' }} src={post.mainImage.asset.url} />
                </Link>
            </Grid>
        </Grid>
    )
}

export default BlogCardLarge