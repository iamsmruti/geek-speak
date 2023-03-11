import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Layout from '../components/wrappers/Layout'
import { useRouter } from 'next/router'
import Heading from '../components/atoms/Heading'
import BlogCardLarge from '../components/molecules/BlogCardLarge'

import { client } from '../sanity'
import { Container } from '@mui/system'

const Category = () => {
  const router = useRouter()
  const { tags } = router.query

  const [posts, setPosts] = useState([])

  console.log(tags)

  const getPosts = async () => {
    const posts = await client.fetch(`*[_type == "post" && categories[]->title match "${tags}"]{
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
        }
      },
      categories[]->{
        title
      },
      tags[]->{
        title
      },
      publishedAt,
      body
    }`);
    setPosts(posts)
  }

  useEffect(() => {
    getPosts()
  }, [])

  useEffect(() => {
    console.log(posts)
  }, [posts])

  return (
    <>
      <Layout>
        <Container>
          <Heading title={`Search Query - ${tags}`}/>
          {posts.map((post, index) => (
            <BlogCardLarge key={index} post={post}/>
          ))}
        </Container>
      </Layout>
    </>
  )
}

export default Category