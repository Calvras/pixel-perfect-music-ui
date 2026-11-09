import { createFileRoute } from "@tanstack/react-router";
import {
  Music2, Search, MoreHorizontal, Bell, Play, Pin,
  Volume2, Heart, Home, Library, Settings, SkipBack, SkipForward, Shuffle, Repeat, Maximize2,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import covers from "@/assets/covers.jpg";
import artists from "@/assets/artists.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chill Vibes — Music Player" },
      { name: "description", content: "A calm, pastel music player with playlists, top artists and a now-playing bar." },
      { property: "og:title", content: "Chill Vibes — Music Player" },
      { property: "og:description", content: "A calm, pastel music player with playlists and top artists." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Tile({ src, i, className = "" }: { src: string; i: number; className?: string }) {
  const x = (i % 4) * 33.333, y = Math.floor(i / 4) * 33.333;
  return (
    <div
      className={className}
      style={{ backgroundImage: `url(${src})`, backgroundSize: "400% 400%", backgroundPosition: `${x}% ${y}%` }}
    />
  );
}

const songs = [
  ["Cruel Summer", "Taylor Swift", "Lover", "22.6.2024", "4:00", 0],
  ["Good Morning", "Kanye West", "Graduation", "24.6.2024", "3:15", 3],
  ["Burning Up", "Madonna", "Madonna", "14.7.2024", "3:45", 2],
  ["Dirty Computer (feat. Brian Wilson)", "Janelle Monáe, Brian Wilson", "Dirty Computer", "18.7.2024", "1:59", 6],
  ["La Vie en Rose", "Grace Jones", "Portfolio", "26.8.2024", "7:28", 8],
  ["bad guy", "Billie Eilish", "When We All Fall Asleep, Where Do We Go", "27.8.2024", "3:14", 15],
  ["Hurricane", "Kanye West", "Donda", "27.8.2024", "3:58", 5],
  ["Tryin' Times", "Roberta Flack", "First Take", "15.9.2024", "5:08", 14],
  ["Midnight City", "M83", "Hurry Up, We're Dreaming", "20.9.2024", "4:03", 10],
] as const;

const topArtists = [
  ["Taylor Swift", "221M", 14, 4], ["The Weekend", "190M", 5, 11], ["Taylor Swift", "156M", 7, 2],
  ["Lana Del Rey", "142M", 9, 15], ["Bruno Mars", "119M", 4, 3], ["Lady Gaga", "104M", 7, 0],
  ["Eminem", "98M", 14, 8], ["Drake", "85M", 8, 10],
] as const;

function Index() {
  return (
    <div className="h-screen w-screen">
      <div className="bg-app flex h-full w-full flex-col overflow-hidden text-foreground">
        {/* Top bar */}
        <header className="flex h-[56px] shrink-0 items-center pl-[20px] pr-[22px]">
          <div className="bg-logo -ml-[2px] mr-[12px] flex size-8 items-center justify-center rounded-[9px] text-foreground">
            <Music2 className="size-[18px]" strokeWidth={2.5} />
          </div>
          <nav className="flex items-center gap-1 text-[14.5px]">
            <a className="px-3 py-1.5 text-muted-foreground/90">Home</a>
            <a className="rounded-lg bg-accent px-3 py-1.5 font-medium">Playlists</a>
            <a className="px-3 py-1.5 text-muted-foreground">Albums</a>
            <a className="px-3 py-1.5 text-muted-foreground">Artists</a>
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
            <button aria-label="Home" className="flex size-10 items-center justify-center"><Home className="size-[22px] fill-current" /></button>
            <button aria-label="Search" className="mt-2 flex size-10 items-center justify-center text-muted-foreground"><Search className="size-[22px]" strokeWidth={2.5} /></button>
            <button aria-label="Library" className="mt-2 flex size-10 items-center justify-center text-muted-foreground"><Library className="size-[22px]" /></button>
            <button aria-label="Settings" className="mt-auto flex size-10 items-center justify-center text-muted-foreground"><Settings className="size-[22px]" /></button>
          </aside>

          {/* Main */}
          <main className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-[14px] bg-panel">
            <section className="relative h-[198px] shrink-0 overflow-hidden">
              <img src={hero} alt="Chill Vibes playlist cover" width={1536} height={640} className="absolute inset-0 size-full object-cover" />
              <div className="relative px-[25px] pt-[22px] text-foreground">
                <h1 className="text-[56px] font-bold leading-[1.05] tracking-tight drop-shadow-sm">Chill Vibes</h1>
                <p className="mt-[12px] text-[12.5px] font-medium">Playlist • 67 songs • 2h 31 min</p>
                <div className="mt-[38px] flex items-center gap-6">
                  <MoreHorizontal className="size-5" /><Pin className="size-4" />
                </div>
              </div>
              <button className="bg-play absolute right-[56px] top-[73px] flex size-[56px] items-center justify-center rounded-full text-foreground">
                <Play className="ml-1 size-6 fill-current" />
              </button>
            </section>

            <div className="grid grid-cols-[56px_minmax(0,1.6fr)_minmax(0,1.4fr)_96px_80px] items-center px-[0px] pb-[8px] pt-[23px] text-[13px] text-muted-foreground">
              <span className="pl-[24px]">#</span><span>Title</span><span>Album</span><span>Added date</span><span>Time</span>
            </div>
            <div className="scroll-thin min-h-0 flex-1 overflow-y-auto pb-2">
              {songs.map(([t, a, al, d, tm, c], i) => (
                <div key={t} className={`grid h-[51.7px] grid-cols-[56px_minmax(0,1.6fr)_minmax(0,1.4fr)_96px_80px] items-center ${i === 0 ? "bg-row-active" : ""}`}>
                  <span className="pl-[24px] text-[14.5px] text-muted-foreground">
                    {i === 0 ? <Play className="size-3 fill-foreground text-foreground" /> : i + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    <Tile src={covers} i={c} className="size-10 shrink-0 rounded-md" />
                    <div className="min-w-0">
                      <div className="truncate text-[14.5px] font-medium">{t}</div>
                      <div className="truncate text-[12.5px] text-muted-foreground">{a}</div>
                    </div>
                  </div>
                  <span className="truncate pr-4 text-[13px] text-muted-foreground">{al}</span>
                  <span className="text-[13px] text-muted-foreground">{d}</span>
                  <span className="flex items-center text-[13px] text-muted-foreground">
                    {tm}{i === 0 && <MoreHorizontal className="ml-auto mr-[22px] size-5 text-foreground" />}
                  </span>
                </div>
              ))}
            </div>
          </main>

          {/* Right */}
          <aside className="flex w-[22%] min-w-[260px] max-w-[346px] shrink-0 flex-col gap-[8px] px-[8px]">
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[14px] bg-panel">
              <div className="flex items-center px-[24px] pt-[22px] pb-[14px] text-[14.5px] text-muted-foreground">
                Top Artists <MoreHorizontal className="ml-auto size-5" />
              </div>
              <div className="scroll-thin flex-1 overflow-y-auto">
                {topArtists.map(([n, l, al, img], i) => (
                  <div key={i} className="flex h-[59.6px] items-center gap-3 px-[24px]">
                    <Tile src={artists} i={img} className="size-12 shrink-0 rounded-lg" />
                    <div>
                      <div className="text-[14.5px] font-medium">{n}</div>
                      <div className="text-[12.5px] text-muted-foreground">{l} listeners • {al} albums</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-promo shrink-0 rounded-[14px] px-[24px] pb-[24px] pt-[22px]">
              <h3 className="text-[18px] font-semibold">Uninterrupted Music Awaits</h3>
              <p className="mt-1 text-[12.5px] text-muted-foreground">Enjoy ad-free music with our premium plan.</p>
              <button className="mt-[12px] h-8 w-full rounded-md bg-card text-[14.5px] font-medium">Upgrade now</button>
            </div>
          </aside>
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
