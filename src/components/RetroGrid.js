import { cn } from "../lib/cn";

const RetroGrid = ({ className = "" }) => {
    return (
        <div
            className={cn(
                "pointer-events-none absolute inset-0 opacity-40 mix-blend-screen",
                className
            )}
            aria-hidden
        >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[length:60px_60px]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[length:60px_60px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_70%)]" />
        </div>
    );
};

export default RetroGrid;

