import Page from "../components/Page";
import { Box, Typography } from "@mui/material";

const About = () => {
    return (
        <Page>
            <Box
                sx={{
                    maxWidth: 750,
                    margin: { xs: "2rem auto", md: "4rem auto" },
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    p: { xs: 4, md: 8 },
                    backgroundColor: 'background.paper',
                    borderRadius: 6,
                    border: '1px solid',
                    borderColor: 'divider',
                    boxShadow: '0 12px 48px rgba(0,0,0,0.4)'
                }}
            >
                <Typography 
                    variant="h3" 
                    component="h1"
                    sx={{ 
                        fontWeight: 900,
                        letterSpacing: '-0.03em',
                        color: 'primary.main',
                        textAlign: 'center',
                        mb: 2,
                        fontSize: { xs: '2.5rem', md: '3.5rem' }
                    }}
                >
                    About Me
                </Typography>

                <Typography variant="h6" sx={{ lineHeight: 1.8, fontWeight: 500, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                    I&apos;m Corey — a web developer building things, breaking them,
                    and figuring it out as I go.
                </Typography>

                <Typography sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, lineHeight: 1.8, color: 'text.secondary' }}>
                    This blog is just a place where I dump what I&apos;m learning while
                    working on projects. No tutorials, no polished guides — just real
                    development in real time.
                </Typography>

                <Typography sx={{ 
                    fontSize: { xs: '1rem', md: '1.125rem' }, 
                    lineHeight: 1.8, 
                    color: 'text.secondary',
                    p: 3,
                    borderLeft: '4px solid',
                    borderColor: 'primary.main',
                    backgroundColor: 'rgba(144, 202, 249, 0.05)',
                    fontStyle: 'italic',
                    borderRadius: '0 8px 8px 0'
                }}>
                    If something is here, it probably broke first.
                </Typography>
            </Box>
        </Page>
    );
};

export default About;