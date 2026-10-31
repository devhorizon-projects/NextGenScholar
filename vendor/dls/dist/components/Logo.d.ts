import React from "react";
export interface DlsLogoProps {
    variant?: "full" | "horizontal" | "mark";
    size?: "sm" | "md" | "lg" | "xl";
    showTagline?: boolean;
    className?: string;
    asLink?: boolean;
    to?: string;
}
export declare const DlsLogo: React.FC<DlsLogoProps>;
export declare const DevHorizonLogo: React.FC<DlsLogoProps>;
export declare const DevHorizonTechLogo: React.FC<DlsLogoProps>;
export default DlsLogo;
