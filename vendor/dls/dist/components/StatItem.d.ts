import React from "react";
export interface DevHorizonStatItemProps {
    value: string;
    label: string;
    subtext?: string;
    trend?: string;
    trendType?: "positive" | "neutral" | "negative";
    metallic?: boolean;
    className?: string;
}
export type StatItemProps = DevHorizonStatItemProps;
export declare const DevHorizonStatItem: React.FC<DevHorizonStatItemProps>;
export declare const DevHorizonTechStatItem: React.FC<DevHorizonStatItemProps>;
export declare const StatItem: React.FC<DevHorizonStatItemProps>;
export default DevHorizonStatItem;
