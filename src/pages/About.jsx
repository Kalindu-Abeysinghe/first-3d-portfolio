import React from 'react';
import {experiences} from "../constants/index.js";
import {starbucks} from "../assets/images/index.js";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CallToAction from "../components/CallToAction.jsx";
import {skills} from "../constants/skills.js";

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: '16px 20px',
    backgroundColor: '#f8fafc', // Tailwind slate-50
    border: '1px solid #e2e8f0', // Tailwind slate-200
    borderRadius: '12px',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    '&:hover': {
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        transform: 'translateY(-1px)',
        transition: 'all 0.2s ease-in-out',
    },
    // Mobile responsiveness
    [theme.breakpoints.down('md')]: {
        padding: '12px 16px',
        marginLeft: 0,
        marginRight: 0,
    },
    [theme.breakpoints.down('sm')]: {
        padding: '8px 12px',
    },
}));

const ResponsiveTimeline = styled(Timeline)(({ theme }) => ({
    // Desktop styles (default)
    '& .MuiTimelineItem-root': {
        minHeight: 'auto',
    },
    '& .MuiTimelineOppositeContent-root': {
        flex: '0 0 250px',
        paddingRight: theme.spacing(2),
        textAlign: 'left',
    },
    '& .MuiTimelineContent-root': {
        flex: 1,
        paddingLeft: theme.spacing(2),
        maxWidth: 'none',
    },

    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        '& .MuiTimelineItem-root': {
            '&:before': {
                display: 'none', // Remove the flex spacer
            },
        },
        '& .MuiTimelineOppositeContent-root': {
            flex: 'none',
            display: 'none', // Hide opposite content on mobile
        },
        '& .MuiTimelineContent-root': {
            flex: 1,
            paddingLeft: theme.spacing(2),
            paddingRight: 0,
        },
        '& .MuiTimelineSeparator-root': {
            marginRight: theme.spacing(2),
        },
    },
}));

const About = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const ABOUT_ME_DESCRIPTION = "Software craftsman and Cloud Solutions Architect with 4+ years of experience specialized in microservices architecture, cloud-native development, and full-stack engineering with a strong focus on scalability, maintainability and championing engineering best practices.";
    const ABOUT_ME_WORK_EXPERIENCE_DESCRIPTION = "Proven track record of introducing new technologies, mentoring teams, and delivering high-impact features that drive business value:";

    return (
        <section className="max-container">
            <h1 className="head-text">
                Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Kalindu</span>
            </h1>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>
                    {ABOUT_ME_DESCRIPTION}
                </p>
            </div>

            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">My Skills</h3>
                <div className="mt-16 flex flex-wrap gap-12 justify-center sm:justify-start">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center gap-3">
                        <div key={index} className="block-container w-16 h-16 sm:w-20 sm:h-20">
                            <div className="btn-back rounded-xl"/>
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-sm sm:text-base font-medium text-gray-700 text-center">
                            {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-16">
                <h3 className="subhead-text">Work experience</h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                        {ABOUT_ME_WORK_EXPERIENCE_DESCRIPTION}
                    </p>
                </div>

                <div className="mt-12 flex justify-center">
                    <ResponsiveTimeline position= "right">
                        {experiences.map((experience, index) => (
                            <TimelineItem key={index}>
                                {!isMobile && (
                                    <TimelineOppositeContent
                                        sx={{
                                            m: 'auto 0',
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            component="div"
                                            sx={{
                                                fontWeight: 600,
                                                fontSize: { xs: '1rem', sm: '1.1rem' },
                                                color: '#1e293b',
                                                marginBottom: 0.5,
                                                lineHeight: 1.2,
                                            }}
                                        >
                                            {experience.company_name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#64748b',
                                                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                                fontWeight: 500
                                            }}
                                        >
                                            {experience.date}
                                        </Typography>
                                    </TimelineOppositeContent>
                                )}

                                <TimelineSeparator>
                                    <TimelineConnector sx={{ backgroundColor: '#e2e8f0' }} />
                                    <TimelineDot
                                        sx={{
                                            backgroundColor: '#3b82f6',
                                            width: { xs: 12, sm: 16 },
                                            height: { xs: 12, sm: 16 },
                                            border: '3px solid white',
                                            boxShadow: '0 0 0 3px #dbeafe'
                                        }}
                                    />
                                    <TimelineConnector sx={{ backgroundColor: '#e2e8f0' }} />
                                </TimelineSeparator>

                                <TimelineContent
                                    sx={{
                                        py: '12px',
                                        px: { xs: 1, sm: 2 },
                                    }}
                                >
                                    {/* Mobile: Show company and date at top of content */}
                                    {isMobile && (
                                        <div className="mb-3">
                                            <Typography
                                                variant="h6"
                                                component="div"
                                                sx={{
                                                    fontWeight: 600,
                                                    fontSize: '1rem',
                                                    color: '#1e293b',
                                                    marginBottom: 0.5,
                                                    lineHeight: 1.2,
                                                }}
                                            >
                                                {experience.company_name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: '#64748b',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 500
                                                }}
                                            >
                                                {experience.date}
                                            </Typography>
                                        </div>
                                    )}

                                    <StyledPaper elevation={0}>
                                        <Typography
                                            variant="h6"
                                            component="h4"
                                            sx={{
                                                fontWeight: 600,
                                                color: '#1e293b',
                                                marginBottom: 1.5,
                                                fontSize: { xs: '1rem', sm: '1.125rem' },
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {experience.title}
                                        </Typography>
                                        <div className="space-y-2">
                                            {experience?.teams.map((team, teamIndex) => (
                                                <div key={teamIndex} className="border-l-4 border-blue-200 pl-4 mb-4">
                                                    {/* Team Name */}
                                                    <Typography
                                                        variant="h6"
                                                        component="h5"
                                                        sx={{
                                                            fontWeight: 600,
                                                            fontSize: { xs: '0.9rem', sm: '1rem' },
                                                            color: '#1e40af', // blue-800
                                                            marginBottom: 1,
                                                            lineHeight: 1.3,
                                                        }}
                                                    >
                                                        {team.name}
                                                    </Typography>

                                                    {/* Technologies */}
                                                    <div className="mb-3">
                                                        <Typography
                                                            variant="body2"
                                                            component="span"
                                                            sx={{
                                                                fontWeight: 600,
                                                                fontSize: { xs: '0.75rem', sm: '0.8rem' },
                                                                color: '#374151', // gray-700
                                                                marginRight: 1,
                                                            }}
                                                        >
                                                            Technologies:
                                                        </Typography>
                                                        <div className="flex flex-wrap gap-2 mt-1">
                                                            {team.technologies.split(', ').map((tech, techIndex) => (
                                                                <span
                                                                    key={techIndex}
                                                                    className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-md"
                                                                >
                                                                    {tech.trim()}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Team Points */}
                                                    <div className="space-y-1">
                                                        {team?.points.map((point, pointIndex) => (
                                                            <Typography
                                                                key={pointIndex}
                                                                variant="body2"
                                                                sx={{
                                                                    color: '#475569',
                                                                    lineHeight: 1.6,
                                                                    fontSize: { xs: '0.8rem', sm: '0.875rem' },
                                                                    wordBreak: 'break-word',
                                                                }}
                                                            >
                                                                • {point}
                                                            </Typography>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </StyledPaper>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </ResponsiveTimeline>
                </div>
            </div>

            <CallToAction />
        </section>
    );
};

export default About;