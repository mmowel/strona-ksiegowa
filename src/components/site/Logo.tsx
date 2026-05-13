import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl gradient-brand shadow-glow">
        <Sparkles className="h-4 w-4 text-white" strokeWidth={2.5} />
      </span>
      <span className={`text-lg font-bold tracking-tight ${light ? "text-white" : "text-foreground"}`}>
        ksiegowa<span className="gradient-text">360</span>.pl
      </span>
    </Link>
  );
}
