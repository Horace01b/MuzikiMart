import React from "react";
import { Link } from "react-router-dom";

export default function ArtistCard({artist}) {
  return (
    <Link to={`/artist/${artist.id}`} className="block">
      <div className="glass p-3 rounded-card flex flex-col items-center">
        <img src={artist.img} alt={artist.name} className="w-24 h-24 rounded-lg object-cover" />
        <div className="mt-2 text-sm font-semibold">{artist.name}</div>
        <div className="text-xs text-white/60">{artist.followers} followers</div>
      </div>
    </Link>
  );
}
