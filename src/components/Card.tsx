import {Box, Chip, Container, Grid, Paper, Stack, Typography, useTheme} from "@mui/material";
import {experienceType} from "../assets/types.ts";


const Card:React.FC<{
    data: experienceType
    // title: string;
    // period: string;
    // description: string;
    // caps: string[];
    // bullets: string[];
}> = ({data}) => {
    const theme = useTheme();

    return (
        <Box sx={{ minHeight: '0vh', bgcolor: 'background.default', py: 2 }}>
            <Container maxWidth="lg">
                <Box>
                    <Paper
                        elevation={0}
                        sx={{
                            bgcolor: 'background.paper',
                            p: 4,
                            borderRadius: 2,
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                display: 'inline-block',
                                px: 0,
                                py: 0,
                                // borderRadius: 1,
                                color: theme.palette.primary.main,
                                mb: 0,
                                pt: 0,
                            }}
                        >
                            <ul style={{paddingLeft: '0rem'}}>
                                {data.title}
                            </ul>
                            <ul style={{paddingLeft: '0rem', fontSize: '0.8rem'}}>
                                {data.period}
                            </ul>
                        </Typography>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={8}>
                                <Typography variant="body1" color="text.secondary" paragraph>
                                    {data.description}
                                </Typography>
                                <ul style={{paddingLeft: '3rem'}}>
                                    {data.bullets.map((bullet, index) => (
                                        <li key={index}><Typography variant="body1">{bullet}</Typography></li>
                                    ))}
                                </ul>


                                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{gap: 1, mt: 3}}>
                                    {data.skills.map((tech) => (
                                        <Chip
                                            key={tech}
                                            label={tech}
                                            sx={{
                                                bgcolor: 'rgba(163,221,200,0.1)',
                                                color: theme.palette.primary.main,
                                                border: `1px solid ${theme.palette.primary.main}`,
                                                mb: 1,
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            </Container>
        </Box>

    )
}
export default Card;