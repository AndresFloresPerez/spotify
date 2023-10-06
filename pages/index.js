import Artist from "@/components/Artist";
import Library from "@/components/Library";
import PlaylistView from "@/components/PlaylistView";
import Search from "@/components/Search";
import Sidebar from "@/components/Sidebar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [view, setView] = useState("search"); // ["search", "library", "playlist", "artist"]
  const [globalPlaylistId, setGlobalPlaylistId] = useState(null);
  // const [globalArtistId, setGlobalArtistId] = useState(null);
  // const [globalCurrentSongId, setGlobalCurrentSongId] = useState(null);
  // const [globalIsTrackPlaying, setGlobalIsTrackPlaying] = useState(false);

  return (
    <>
      <main className="flex w-full h-screen overflow-hidden bg-black">
        <div className="flex w-full">
          <Sidebar
            view={view}
            setView={setView}
            setGlobalPlaylistId={setGlobalPlaylistId}
          />
          {view === "playlist" && (
            <PlaylistView globalPlaylistId={globalPlaylistId} />
          )}
          {view === "search" && <Search />}
          {view === "library" && <Library />}
          {view === "artist" && <Artist />}
        </div>
      </main>
      <div className="sticky z-20 bottom-0 h-24 w-full bg-red-100">Player</div>
    </>
  );
}
