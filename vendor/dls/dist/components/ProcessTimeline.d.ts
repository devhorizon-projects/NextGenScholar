import React from "react";
export interface ProcessStepItem {
    number: string;
    title: string;
    description: string;
    status?: "completed" | "active" | "upcoming";
    duration?: string;
    icon?: React.ReactNode;
}
export interface DevHorizonProcessTimelineProps {
    steps?: ProcessStepItem[];
    layout?: "grid" | "connected" | "vertical";
    className?: string;
}
export type ProcessTimelineProps = DevHorizonProcessTimelineProps;
export declare const DevHorizonProcessTimeline: React.FC<DevHorizonProcessTimelineProps>;
export declare const DevHorizonTechProcessTimeline: React.FC<DevHorizonProcessTimelineProps>;
export declare const ProcessTimeline: React.FC<DevHorizonProcessTimelineProps>;
export default DevHorizonProcessTimeline;
