import { Container } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState, useEffect } from 'react'
import Heading from '../atoms/Heading'
import TopicChip from '../atoms/TopicChip'
import { client } from '../../sanity'

const BrowseTopics = () => {
    const [topics, setTopics] = useState([])

    const getTopics = async () => {
        const posts = await client.fetch(`*[_type == "tag"]`);
        setTopics(posts)
      }

      useEffect(() => {
        getTopics()
      }, [])
    
      useEffect(() => {
        console.log(topics)
      },[topics])

    return (
        <Container sx={{mb: 4}}>
            <Heading title={"Browse Topics"} />
            <Stack direction={'row'} sx={{ flexWrap: 'wrap' }} justifyContent={'center'}>
                {topics && topics.map((topic, index) => (
                    <TopicChip key={index} title={topic.title} link={`/search?tags=${topic.title}`} />
                ))}
            </Stack>
        </Container>
    )
}

export default BrowseTopics