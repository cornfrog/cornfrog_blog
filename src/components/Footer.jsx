import { Box, Typography, Link, Container } from "@mui/material";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: { xs: 4, md: 6 },
                px: 2,
                mt: 'auto',
                borderTop: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'background.paper',
                textAlign: 'center'
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    Made by
                    <Link
                        href="https://github.com/cornfrog"
                        target="_blank"
                        rel="noopener"
                        sx={{
                            ml: 0.5,
                            fontWeight: 700,
                            color: 'primary.main',
                            textDecoration: 'none',
                            transition: 'color 0.2s',
                            '&:hover': {
                                color: 'primary.light',
                                textDecoration: 'underline'
                            }
                        }}
                    >
                        Cornfrog
                    </Link>
                </Typography>
                <Typography variant="caption" sx={{ mt: 1.5, display: 'block', color: 'text.disabled', letterSpacing: '0.05em' }}>
                    © {new Date().getFullYear()} CORNFROG_BLOG. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;