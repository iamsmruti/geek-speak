import { Box, Container, Stack } from "@mui/material";
import Navbar from "../molecules/Navbar";
import Footer from "../molecules/Footer";

const Layout = ({children}) => {
    return (
        <Stack>
            <Navbar />
            <Box sx={{py: 3}}>
                {children}
            </Box>
            <Footer />
        </Stack>
    );
}
 
export default Layout;