import { Divider, Grid, Stack } from '@mui/material'
import { Container } from '@mui/system'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import LargeHeading from '../components/atoms/LargeHeading'
import ProfileCard from '../components/molecules/ProfileCard'
import Layout from '../components/wrappers/Layout'
import { client } from '../sanity'

import {PortableText} from '@portabletext/react'
import { SampleImageComponent, customCodeComponent } from '../core/utils/BlockItems'

const Blog = () => {
  const router = useRouter()
  const { slug } = router.query

  const [loading, setLoading] = useState(true)
  
  const [post, setPost] = useState({})

  const getPost = async () => {
    const post = await client.fetch(`*[_type == "post" && slug.current == "${slug}"]{
      title,
      description,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      author->{
        name,
        image{
          asset->{
            _id,
            url
          }
        },
        bio
      },
      categories[]->{
        title
      },
      tags[]->{
        title
      },
      publishedAt,
      body
    }[0]`);
    console.log(post)
    setPost(post)
  }

  useEffect(() => {
    if(slug) getPost()
  }, [slug])
  
  useEffect(() => {
    if(post) setLoading(false)
  }, [post])

  const customSerializers = {
    types: {
      image: SampleImageComponent,
    },
    block: {
      normal: ({ children }) => <p style={{marginTop: '10px', fontSize: '1.1rem', }}>{children}</p>,
    },
    marks: {
      code: customCodeComponent,
    }
  }

  return (
    <Layout>
      {!loading && <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <LargeHeading title={post.title} />
            <Divider />

            <Stack sx={{ mt: 1 }}>
              {post.mainImage && <img src={post.mainImage.asset.url} />}

              <PortableText
                value={post.body}
                components={customSerializers}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <ProfileCard person={post.author}/>
          </Grid>
        </Grid>
      </Container>}

      {loading && <div>Loading...</div>}
    </Layout>
  )
}

export default Blog