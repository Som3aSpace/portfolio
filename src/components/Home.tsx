import {
    Box,
    Typography,
    Container,
    Grid,
    useTheme, Skeleton, styled,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import SocialIcon from "./SocialIcon.tsx";
import Card from "./Card.tsx";
import { PieChart } from '@mui/x-charts/PieChart';
import {useDrawingArea} from "@mui/x-charts";
import {ReactNode} from "react";
import {advansys, edu, frameworksChart, kion, languagesChart, nasnav, tawsela} from "../assets/data"

export const Home = () => {
    const theme = useTheme();



    const nameStyle = {
        fontFamily: "'Pacifico', cursive",
        color: theme.palette.primary.main,
        fontSize: '4rem',
        marginTop: 0,
        marginBottom: 2,
    };

    const titleStyle = {
        fontFamily: "'Pacifico', cursive",
        color: theme.palette.primary.main,
        fontSize: '2rem',
        marginTop: 0,
        marginBottom: 2,
    };

    const contactStyle = {
        fontFamily: "'Pacifico', cursive",
        color: theme.palette.primary.main,
        fontSize: '1rem',
        marginTop: 5,
        marginBottom: 2,
        textAlign: 'center',
    };

    const StyledText = styled('text')(({ theme }) => ({
        fill: theme.palette.text.primary,
        textAnchor: 'middle',
        dominantBaseline: 'central',
        fontSize: 20,
    }));

    function PieCenterLabel({ children }: { children: ReactNode }) {
        const { width, height, left, top } = useDrawingArea();
        return (
            <StyledText x={left + width / 2} y={top + height / 2}>
                {children}
            </StyledText>
        );
    }
    
    return (
        <Box sx={{ minHeight: '1vh', bgcolor: 'background.default', py: 2 }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 2 }}>
                    <Grid
                        container
                        spacing={6}
                        justifyContent="space-between"
                    >
                        <Grid item>
                            <Typography sx={nameStyle} component="h1">
                                Mohamed Ismail
                            </Typography>
                        </Grid>
                        <Grid/>
                        <Grid item>
                            <SocialIcon
                                icon = {<GitHubIcon/>}
                                label={'Steal my Code'}
                                href={'https://github.com/Som3aSpace'}
                            />
                            <SocialIcon
                                icon = {<LinkedInIcon/>}
                                label={'connect with me'}
                                href={'https://www.linkedin.com/in/mois97/'}
                            />
                            <SocialIcon
                                icon = {<ArticleIcon/>}
                                label={'Resume'}
                                href={'/Resume.pdf'}
                            />
                        </Grid>
                    </Grid>


                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 4 }}
                    >
                        I am a Fullstack Software Engineer with over five years of industry experience delivering scalable, secure, and high-performance web applications. My core strengths lie in backend development using Java Spring Boot and frontend engineering with React.js. I have successfully contributed to enterprise-grade systems across logistics, e-commerce, and resource management domains, serving both local and international clients.

                        My approach to software engineering is grounded in clean architecture, robust API design, and agile collaboration. I take pride in writing maintainable code, mentoring team members, and aligning engineering efforts with business goals.
                    </Typography>
                </Box>
                <Typography sx={titleStyle} component="h1">
                    Skills
                </Typography>
                <Grid container direction={"row"}>
                    <PieChart
                        series={[
                            {
                                data: frameworksChart,
                            },
                        ]}
                        width={200}
                        height={200}
                    />
                    <PieChart
                        series={[{
                            data: languagesChart,
                            innerRadius: 80 }
                        ]}
                        width={200}
                        height={200}
                    >
                        <PieCenterLabel>programming</PieCenterLabel>
                    </PieChart>

                </Grid>
                <Typography sx={titleStyle} component="h1">
                    Experience
                </Typography>
                <Container maxWidth="lg" sx={{
                    bgcolor: 'background.paper',
                    p: 4,
                    mb:4,
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <Card data={kion} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Card data={advansys} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Card data={nasnav} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Card data={tawsela} />
                </Container>
                <Typography sx={titleStyle} component="h1">
                    Education
                </Typography>
                <Box sx={{
                    bgcolor: 'background.paper',
                    p: 4,
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <Card data={edu}/>
                </Box>

                <Typography sx={contactStyle} component="h1">
                    +49 176 35107427 - mohamed.ismail.ibrahim97@gmail.com
                </Typography>
            </Container>
        </Box>
    );
}