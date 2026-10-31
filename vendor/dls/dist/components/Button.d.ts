import React from "react";
export interface DevHorizonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "inverted" | "ghost";
    size?: "sm" | "md" | "lg";
    shape?: "pill" | "rounded";
    showArrow?: boolean;
    icon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    leadingIcon?: React.ReactNode;
    iconPosition?: "left" | "right";
    iconStyle?: "circle" | "plain";
    children: React.ReactNode;
    className?: string;
    asChild?: boolean;
}
export type DlsButtonProps = DevHorizonButtonProps;
export type DevHorizonTechButtonProps = DevHorizonButtonProps;
export declare const DevHorizonButton: any;
export declare const DevHorizonTechButton: any;
export declare const DlsButton: any;
export default DevHorizonButton;
