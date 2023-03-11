import { Box, Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Heading from '../atoms/Heading'
import BlogCardLarge from '../molecules/BlogCardLarge'
import { client } from '../../sanity'

const TopPicks = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const posts = await client.fetch(`*[_type == "post"]{
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
  },[posts])

  return (
    <Container sx={{py: 2}}>
        <Heading title={"Top Picks"}/>
        {posts.map((post, index) => (
          <BlogCardLarge key={index} post={post}/>
        ))}
    </Container>
  )
}

export default TopPicks