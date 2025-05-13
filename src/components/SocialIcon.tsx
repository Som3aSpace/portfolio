import {ReactNode, useState} from "react";
import {IconButton, Tooltip, useTheme} from "@mui/material";

const SocialIcon: React.FC<{
    icon: ReactNode;
    label: string;
    href: string;
}> = ({ icon, label, href }) => {
    const [isHovered, setIsHovered] = useState(false);
    const theme = useTheme();

    return (
        <Tooltip title={label}>
            <IconButton
                href={href}
                size={"large"}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                    color: isHovered ? theme.palette.primary.main : theme.palette.grey[400],
                    transition: 'all 0.3s ease',
                    transform: isHovered ? 'translateY(-12px)' : 'translateY(0)',
                    '&:hover': {
                        backgroundColor: 'rgba(30, 185, 128, 0.1)',
                    },
                }}
            >
                {icon}
            </IconButton>
        </Tooltip>
    )
}
export default SocialIcon;