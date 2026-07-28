import { type ReactNode } from "react";

interface Prop {
    children?: ReactNode
    className?: string
}

export default function CardContainer({ children, className }: Prop) {
    return (
        <div className={`bg-app-bg-secondary min-h-11 rounded-sm flex items-center ${className}`}>
            {children}
        </div>
    )
}
