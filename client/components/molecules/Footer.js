import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import CopyrightIcon from '@mui/icons-material/Copyright';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from "next/link";
import Logo from '../atoms/Logo'

import { useState, useEffect } from "react"
import { client } from "../../sanity";

import { BLUE, DARKGRAY } from "../../core/utils/Colors";

const Footer = () => {
  const [email, setEmail] = useState('')
  const currentTime = new Date()
  const handleClick = () => {
    if(email === '') {
      alert('Please enter your email address.')
      return
    } 
    alert('Thank you for subscribing to our newsletter. We will send you updates on our latest posts. Stay tuned!')
  }

  const [categories, setCategories] = useState([])

    const getCategories = async () => {
        const posts = await client.fetch(`*[_type == "category"]`);
        setCategories(posts)
      }

      useEffect(() => {
        getCategories()
      }, [])
    
      useEffect(() => {
        console.log(categories)
      },[categories])

  return (
    <Box sx={{ bgcolor: 'black', pt: 5 }}>
      <Container>
        <Grid sx={{ pl: 3, pr: 3, pb: 3 }} container spacing={3}>
          <Grid sx={{ mb: 3 }} item xs={12} md={4}>
            <Logo />
            <Typography variant="body2" sx={{ fontWeight: 400, color: 'gray' }}>A place for all your geeky dilemma.</Typography>

            <Typography variant="body2" sx={{ fontWeight: 400, color: 'gray', fontSize: 13, color: BLUE, mt: 4 }}>Copyright<CopyrightIcon sx={{ fontSize: 13 }} /> GeekSpeak {currentTime.getFullYear()}</Typography>
            <Typography variant="body2" sx={{ fontWeight: 400, color: 'gray', fontSize: 13, color: 'white', mt: 1, ml: 0 }}>Made with <FavoriteBorderIcon sx={{ fontSize: 13, color: 'red' }} /></Typography>
          </Grid>
          <Grid sx={{ mb: 3 }} item xs={6} md={2.5}>
            <Typography variant="h6" sx={{ color: 'white', mt: 2 }}>About</Typography>
            <Link href={'https://smruti.vercel.app/'}>
              <Typography variant="body1" sx={{ color: 'gray', "&:hover": { color: BLUE }, mt: 2 }}>Know the Developer</Typography>
            </Link>
          </Grid>
          <Grid sx={{ mb: 3 }} item xs={6} md={2.5}>
            <Typography variant="h6" sx={{ color: 'white', mt: 2 }}>Categories</Typography>
            {categories.map((category, index) => (
              <Link key={index} href={`/category?tags=${category.title}`}>
                <Typography variant="body1" sx={{ color: 'gray', "&:hover": { color: BLUE }, mt: 2 }}>{category.title}</Typography>
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: 'white', mt: 2 }}>Join our Newsletter</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', color: 'black' }}>
              <TextField onChange={(e) => setEmail(e.target.value)} fullWidth sx={{ bgcolor: DARKGRAY, mt: 3, border: 'none', outline: 'none' }} id="filled-basic" label="E-mail" variant="filled" />
              <Button sx={{ mt: 1 }} variant="contained" onClick={handleClick}>Subscribe</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;