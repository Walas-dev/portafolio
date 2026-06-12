import { ReactNode } from 'react'

export interface elements {
    title:string;
    styleBt:string;
    styleTx:string;
    children?: ReactNode;
    colorElement:string;
    onClick?: () => void;
    href?:string;
}