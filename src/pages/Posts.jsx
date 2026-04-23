import Page from "../components/Page";
import { parsedPosts } from "../utils/parsedPost";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router";
import PostList from "../components/PostList";

const Posts = () => {

    const navigate = useNavigate();

    return (
        <Page>
            <Box sx={{ mb: 6, textAlign: 'center' }}>
                <Typography 
                    variant="h3" 
                    sx={{ 
                        fontWeight: 800, 
                        mb: 2,
                        letterSpacing: '-0.02em'
                    }}
                >
                    All Posts
                </Typography>
                <Typography 
                    variant="h6" 
                    sx={{ 
                        color: 'text.secondary',
                        maxWidth: 600,
                        margin: '0 auto'
                    }}
                >
                    A collection of thoughts, experiments, and lessons learned.
                </Typography>
            </Box>
            <PostList
                posts={parsedPosts}
                navigate={navigate}
            />
        </Page>
    );
};

export default Posts;