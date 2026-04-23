import { Typography, Box, Paper } from "@mui/material";

const Post = ({
    post,
    navigate
}) => {

    return (
        <Paper
            elevation={0}
            onClick={() => { navigate(`/post/${post.slug}`) }}
            sx={{
                width: '100%',
                maxWidth: 850,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'flex-start', sm: 'center' },
                gap: { xs: 2, sm: 4 },
                p: { xs: 2, sm: 3 },
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 4,
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                }
            }}
        >
            <Box
                component='img'
                src={post.thumbnail ? post.thumbnail : '/navbar_icon.svg'}
                alt={post.title}
                sx={{
                    height: { xs: 160, sm: 120 },
                    width: { xs: '100%', sm: 120 },
                    objectFit: 'cover',
                    borderRadius: 3
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    gap: 0.5
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                        lineHeight: 1.3
                    }}
                >
                    {post.title}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: 'text.secondary',
                        mb: 1.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}
                >
                    {post.description}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 'auto'
                    }}
                >
                    <Typography
                        variant="caption"
                        sx={{
                            fontWeight: 600,
                            color: 'primary.main',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}
                    >
                        Read More →
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{
                            color: 'text.disabled',
                        }}
                    >
                        {post.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default Post;