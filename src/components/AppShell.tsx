import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  Music2, Search, MoreHorizontal, Bell, Play,
  Volume2, Heart, Home, Library, Settings, SkipBack, SkipForward, Shuffle, Repeat, Maximize2,
} from "lucide-react";
import covers from "@/assets/covers.jpg";
import artists from "@/assets/artists.jpg";

export function Tile({ src, i, className = "" }: { src: string; i: number; className?: string }) {
  const x = (i % 4) * 33.333, y = Math.floor(i / 4) * 33.333;
  return (
    <div
      className={className}
      style={{ backgroundImage: `url(${src})`, backgroundSize: "400% 400%", backgroundPosition: `${x}% ${y}%` }}
    />
  );
}

export function AppShell({ active, children }: { active: "/" | "/playlists"; children: ReactNode }) {
  return (
    <div className="h-screen w-screen">
      <div className="bg-app flex h-full w-full flex-col overflow-hidden text-foreground">
        {/* Top bar */}
        <header className="flex h-[56px] shrink-0 items-center pl-[20px] pr-[22px]">
          <div className="bg-logo -ml-[2px] mr-[12px] flex size-8 items-center justify-center rounded-[9px] text-foreground">
            <Music2 className="size-[18px]" strokeWidth={2.5} />
          </div>
          <nav className="flex items-center gap-1 text-[14.5px]">
            {([["/", "Home"], ["/playlists", "Playlists"]] as const).map(([to, label]) => (
              <Link key={to} to={to} className={active === to ? "rounded-lg bg-accent px-3 py-1.5 font-medium" : "px-3 py-1.5 text-muted-foreground"}>{label}</Link>
            ))}
            <span className="px-3 py-1.5 text-muted-foreground">Albums</span>
            <span className="px-3 py-1.5 text-muted-foreground">Artists</span>
          </nav>
          <div className="ml-auto flex items-center gap-[10px]">
            <div className="flex h-8 w-[357px] items-center gap-2.5 rounded-lg border bg-muted px-2.5 text-[14.5px] text-muted-foreground">
              <Search className="size-[18px]" /> What do you want to listen?
            </div>
            <button className="flex size-8 items-center justify-center rounded-lg border bg-muted"><MoreHorizontal className="size-4" /></button>
            <button className="relative flex size-8 items-center justify-center rounded-lg border bg-muted">
              <Bell className="size-4" /><span className="absolute right-[7px] top-[6px] size-1.5 rounded-full bg-logo" />
            </button>
            <Tile src={artists} i={1} className="size-8 rounded-lg" />
          </div>
        </header>

        <div className="flex min-h-0 flex-1">
          {/* Sidebar */}
          <aside className="mx-[10px] mb-[10px] flex w-[52px] shrink-0 flex-col items-center rounded-[14px] bg-rail py-4 text-foreground">
            <Link to="/" aria-label="Home" className={`flex size-10 items-center justify-center ${active === "/" ? "" : "text-muted-foreground"}`}><Home className={`size-[22px] ${active === "/" ? "fill-current" : ""}`} /></Link>
            <button aria-label="Search" className="mt-2 flex size-10 items-center justify-center text-muted-foreground"><Search className="size-[22px]" strokeWidth={2.5} /></button>
            <Link to="/playlists" aria-label="Library" className={`mt-2 flex size-10 items-center justify-center ${active === "/playlists" ? "" : "text-muted-foreground"}`}><Library className="size-[22px]" /></Link>
            <button aria-label="Settings" className="mt-auto flex size-10 items-center justify-center text-muted-foreground"><Settings className="size-[22px]" /></button>
          </aside>

          {children}
        </div>

        {/* Player */}
        <footer className="flex h-[80px] shrink-0 items-center px-[15px]">
          <Tile src={covers} i={0} className="size-[56px] rounded-lg" />
          <div className="ml-[8px] w-[142px]">
            <div className="text-[14.5px] font-medium">Cruel Summer</div>
            <div className="text-[12.5px] text-muted-foreground">Taylor Swift</div>
          </div>
          <Heart className="size-4 fill-muted-foreground text-muted-foreground" />
          <div className="ml-auto flex items-center gap-[26px] pl-[32px]">
            <SkipBack className="size-[18px] fill-current" />
            <button className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Play className="ml-0.5 size-[18px] fill-current" />
            </button>
            <SkipForward className="size-[18px] fill-current" />
          </div>
          <span className="ml-[38px] text-[12.5px] text-muted-foreground">00:57</span>
          <div className="mx-[8px] h-[3px] min-w-0 flex-1 rounded-full bg-track">
            <div className="h-full w-[36%] rounded-full bg-primary" />
          </div>
          <span className="text-[12.5px] text-muted-foreground">2:58</span>
          <div className="ml-[40px] flex items-center gap-[22px]">
            <Shuffle className="size-[18px]" /><Repeat className="size-[18px]" /><Volume2 className="size-[18px]" />
          </div>
          <Maximize2 className="ml-[40px] mr-[8px] size-[18px]" />
        </footer>
      </div>
    </div>
  );
}
