import Page from "../components/Page";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import { parsedPosts } from "../utils/parsedPost";
import { getRelatedPosts } from "../utils/parsedPost";
import PostList from "../components/PostList";
import { useNavigate } from "react-router";

const PostPage = () => {

    const { slug } = useParams();
    const navigate = useNavigate();

    const post = parsedPosts.find((p) => p.slug === slug);

    return (
        <Page>
            <Box
                sx={{
                    maxWidth: 800,
                    margin: '0 auto',
                    width: '100%',
                    "& h1": {
                        textAlign: 'center',
                        fontSize: { xs: '2.25rem', md: '3.5rem' },
                        fontWeight: 900,
                        mb: 2,
                        letterSpacing: '-0.04em',
                        color: 'primary.main'
                    },
                    "& h2": {
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 800,
                        mt: 6,
                        mb: 3,
                        color: 'text.primary'
                    },
                    "& p": {
                        fontSize: { xs: '1.05rem', md: '1.15rem' },
                        lineHeight: 1.8,
                        color: 'text.secondary',
                        mb: 3
                    },
                    "& img": {
                        maxWidth: '100%',
                        borderRadius: 4,
                        my: 6,
                        boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                    },
                    "& blockquote": {
                        borderLeft: '4px solid',
                        borderColor: 'primary.main',
                        pl: { xs: 2, md: 4 },
                        py: 2,
                        my: 4,
                        backgroundColor: 'rgba(144, 202, 249, 0.05)',
                        fontStyle: 'italic',
                        borderRadius: '0 12px 12px 0',
                        "& p": { mb: 0 }
                    },
                    "& code": {
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        padding: '0.2em 0.4em',
                        borderRadius: '4px',
                        fontSize: '0.9em'
                    }
                }}
            >
                <Typography
                    variant="caption"
                    sx={{
                        display: 'block',
                        textAlign: 'center',
                        color: 'text.secondary',
                        mb: 2,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                    }}
                >
                    Published {post.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </Typography>
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </Box>

            <Box sx={{ mt: 10, pt: 6, borderTop: '1px solid', borderColor: 'divider' }}>
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: 'center',
                        fontWeight: 700,
                        mb: 4
                    }}
                >
                    Related Posts
                </Typography>
                <PostList
                    posts={getRelatedPosts(post)}
                    navigate={navigate}
                    row={true}
                />
            </Box>
        </Page>
    )
}

export default PostPage;