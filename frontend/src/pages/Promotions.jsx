import React from "react";

function CollabCard({artist, followers}) {
  return (
    <div className="p-4 rounded-md bg-white/50 flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ffd6c0] to-[#ff8a66] grid place-items-center font-bold">A</div>
      <div>
        <div className="font-semibold">{artist}</div>
        <div className="text-sm text-gray-600">{followers} followers</div>
      </div>
      <div className="ml-auto"><button className="px-3 py-2 rounded-md border">Invite</button></div>
    </div>
  )
}

export default function Promotions(){
  const suggestions = [
    {artist: "DJ Kala", followers: "12k"},
    {artist: "Luna Rey", followers: "22k"},
    {artist: "MC Orion", followers: "9k"}
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Promotions & Collaborations</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-4">
          <h3 className="font-semibold">Suggested collaborators</h3>
          <div className="mt-3 space-y-3">
            {suggestions.map((s,i)=> <CollabCard key={i} {...s} />)}
          </div>
        </div>

        <div className="card p-4">
          <h3 className="font-semibold">Promotion options</h3>
          <div className="mt-3 grid gap-3">
            <button className="p-3 rounded-md border text-left">Featured on homepage — $15/day</button>
            <button className="p-3 rounded-md border text-left">Newsletter spotlight — $40</button>
            <button className="p-3 rounded-md border text-left">Collab matchmaking — $5</button>
          </div>
        </div>
      </div>
    </div>
  )
}
