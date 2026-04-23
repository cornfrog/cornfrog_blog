import Page from "../components/Page";
import { Box, Typography } from "@mui/material";
import { getRecentPosts } from "../utils/parsedPost";
import { useNavigate } from "react-router";
import PostList from "../components/PostList";

const Home = () => {

    const navigate = useNavigate();

    return (
        <Page>
            <Box
                sx={{
                    py: { xs: 6, md: 10 },
                    px: { xs: 3, md: 6 },
                    textAlign: 'center',
                    backgroundColor: 'background.paper',
                    borderRadius: { xs: 4, md: 6 },
                    border: '1px solid',
                    borderColor: 'divider',
                    maxWidth: 900,
                    margin: '0 auto',
                    mb: { xs: 6, md: 10 },
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                }}
            >
                <Typography 
                    variant="h3" 
                    component="h1"
                    sx={{ 
                        fontWeight: 900, 
                        mb: 3,
                        letterSpacing: '-0.03em',
                        fontSize: { xs: '2.25rem', sm: '3rem', md: '4rem' },
                        background: 'linear-gradient(45deg, #90caf9 30%, #64b5f6 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Welcome to Cornfrog_Blog
                </Typography>
                <Typography 
                    variant="h6" 
                    sx={{ 
                        color: 'text.secondary',
                        fontWeight: 400,
                        maxWidth: 700,
                        margin: '0 auto',
                        lineHeight: 1.6,
                        fontSize: { xs: '1rem', sm: '1.25rem' }
                    }}
                >
                    Writing down what I learn while I
                    build web apps, tools, and whatever
                    I&apos;m currently obsessed with.
                </Typography>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography 
                    variant="h4" 
                    sx={{ 
                        mb: 4, 
                        fontWeight: 800,
                        alignSelf: 'flex-start',
                        maxWidth: 800,
                        margin: '0 auto 2.5rem auto',
                        width: '100%',
                        fontSize: { xs: '1.5rem', md: '2rem' }
                    }}
                >
                    Recent Posts
                </Typography>
                <PostList
                    posts={getRecentPosts()}
                    navigate={navigate}
                />
            </Box>
        </Page>
    )
}

export default Home;