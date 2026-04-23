import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router";

const NavBar = () => {

    const navigate = useNavigate();

    const navBarLinks = [
        {
            key: 'home-navbar-link',
            path: '/',
            text: 'Home'
        },
        {
            key: 'posts-navbar-link',
            path: '/posts',
            text: 'Posts'
        },
        {
            key: 'about-navbar-link',
            path: '/about',
            text: 'About'
        },
    ];

    const navBarLinkList = navBarLinks.map((link) => {
        return (
            <Button
                key={link.key}
                onClick={() => { navigate(link.path) }}
                sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: 'action.hover',
                    }
                }}
            >
                {link.text}
            </Button>
        );
    });

    return (
        <Box
            component="nav"
            sx={{
                py: { xs: 1.5, sm: 2 },
                borderBottom: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'rgba(18, 18, 18, 0.8)',
                position: 'sticky',
                top: 0,
                zIndex: 1100,
                backdropFilter: 'blur(12px)',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: { xs: 1.5, sm: 2 }
                    }}
                >
                    <Box
                        onClick={() => { navigate("/") }}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            '&:hover': {
                                cursor: 'pointer',
                                opacity: 0.8
                            },
                            transition: 'opacity 0.2s'
                        }}
                    >
                        <Box
                            component='img'
                            src="/navbar_icon.svg"
                            alt="logo"
                            sx={{ 
                                width: { xs: 28, sm: 32 }, 
                                height: { xs: 28, sm: 32 }
                            }}
                        />
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 800,
                                letterSpacing: '-0.02em',
                                userSelect: 'none',
                                color: 'primary.main',
                                fontSize: { xs: '1.25rem', sm: '1.5rem' }
                            }}
                        >
                            Cornfrog_Blog
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: { xs: 0.5, sm: 1 },
                            width: { xs: '100%', sm: 'auto' },
                            justifyContent: 'center'
                        }}
                    >
                        {navBarLinkList}
                    </Box>
                </Box>
            </Container>
        </Box>
    )
};

export default NavBar;