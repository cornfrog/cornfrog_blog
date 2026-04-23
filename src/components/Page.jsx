import { Container } from "@mui/material";

const Page = ({ children }) => {
    
    return (
        <Container
            maxWidth="lg"
            sx={{
                py: 4,
                px: { xs: 2, sm: 3 },
                minHeight: 'calc(100vh - 160px)', // Account for NavBar and Footer
                display: 'flex',
                flexDirection: 'column',
                gap: 4
            }}
        >
            {children}
        </Container>
    )
}

export default Page;