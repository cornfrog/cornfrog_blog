import { Typography, Box } from "@mui/material";
import Post from "./Post";

const PostList = ({
    posts,
    navigate,
    row=false
}) => {

    const postThumbnails = posts.map((post) => {
        return (
            <Post
                key={post.slug}
                post={post}
                navigate={navigate}
            />
        );
    })

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: row ? { xs: 'column', md: 'row' } : 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
                gap: 3,
                width: '100%',
                maxWidth: row ? 'none' : 800,
                margin: '0 auto'
            }}
        >
            {postThumbnails}
        </Box>
    )
};

export default PostList;