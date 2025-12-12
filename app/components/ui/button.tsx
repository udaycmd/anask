import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type buttonProps = {
    className?: string;
    children?: ReactNode;
};

export function Button({ className, children }: buttonProps) {
    return (
        <button
            className={cn(
                "text-btn-txt items-center inline-flex justify-center rounded-md text-sm font-medium hover:cursor-pointer bg-emerald-500 px-4 py-1",
                className
            )}
        >
            {children}
        </button>
    );
}
