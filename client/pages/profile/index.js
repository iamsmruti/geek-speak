import { Container, Divider, Grid, Box, Typography, TextField, Button } from '@mui/material'
import React from 'react'
import Layout from '../../components/wrappers/Layout'
import Heading from '../../components/atoms/Heading'
import { Stack } from '@mui/system'

const index = () => {
  return (
    <Layout>
      <Container>
        <Heading title={"Profile"} />
        <Divider />

        <Grid sx={{ heigh: 'auto' }} container spacing={3}>
          <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={12} md={4}>
            <img style={{ borderRadius: '100%', marginTop: '1rem', marginBottom: '1rem' }} width={"80%"} src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png' />
          </Grid>
          <Grid item xs={12} md={8}>
            <Stack sx={{maxWidth: '430px', mt: 2}}>
              <TextField fullWidth sx={{mb: 2}} label="UserName"/>
              <TextField fullWidth sx={{mb: 2}} label="Full Name"/>
              <TextField fullWidth sx={{mb: 2}} label="Short Bio"/>

              <Button variant="contained">Save</Button>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ mt: 5 }} />
        <Heading title={"Articles"} />
        <Divider />
        <Typography sx={{ mt: 1, fontSize: '14px' }}>No articles to show.</Typography>
      </Container>
    </Layout>
  )
}

export default index