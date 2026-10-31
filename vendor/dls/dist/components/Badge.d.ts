import React from "react";
export interface DevHorizonBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "silver" | "dark" | "light" | "outline" | "success" | "warning" | "info";
    size?: "sm" | "md";
    showDot?: boolean;
    children: React.ReactNode;
    className?: string;
}
export type DlsBadgeProps = DevHorizonBadgeProps;
export type DevHorizonTechBadgeProps = DevHorizonBadgeProps;
export declare const DevHorizonBadge: React.FC<DevHorizonBadgeProps>;
export declare const DevHorizonTechBadge: React.FC<DevHorizonBadgeProps>;
export declare const DlsBadge: React.FC<DevHorizonBadgeProps>;
export default DevHorizonBadge;
