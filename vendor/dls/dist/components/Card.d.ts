import React from "react";
export interface DarkSurfaceCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}
export declare const DarkSurfaceCard: React.FC<DarkSurfaceCardProps>;
export interface WhiteServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    linkText?: string;
    badge?: string;
    onLinkClick?: () => void;
    className?: string;
}
export declare const WhiteServiceCard: React.FC<WhiteServiceCardProps>;
export interface DevHorizonProjectCardProps {
    title: string;
    category?: string;
    description: string;
    image?: string;
    tags?: string[];
    linkUrl?: string;
    linkText?: string;
    onLinkClick?: () => void;
    className?: string;
}
export declare const DevHorizonProjectCard: React.FC<DevHorizonProjectCardProps>;
export declare const DevHorizonCard: React.FC<DarkSurfaceCardProps>;
export declare const DevHorizonTechCard: React.FC<DarkSurfaceCardProps>;
export declare const DevHorizonServiceCard: React.FC<WhiteServiceCardProps>;
export declare const DevHorizonTechServiceCard: React.FC<WhiteServiceCardProps>;
export declare const ProjectCard: React.FC<DevHorizonProjectCardProps>;
export declare const DevHorizonTechProjectCard: React.FC<DevHorizonProjectCardProps>;
export default DarkSurfaceCard;
