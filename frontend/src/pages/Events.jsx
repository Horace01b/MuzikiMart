import React, {useState} from "react";

function EventCard({title, date, venue}) {
  return (
    <div className="p-4 rounded-md bg-white/50">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-600">{date} • {venue}</div>
        </div>
        <div>
          <button className="px-3 py-1 rounded-md border">Manage</button>
        </div>
      </div>
    </div>
  )
}

export default function Events(){
  const [events, setEvents] = useState([
    {title:"Sunset Beats", date:"2025-12-12", venue:"Nairobi Arena"},
    {title:"Acoustic Night", date:"2025-11-05", venue:"Lagos Club"}
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-4">
          <h3 className="font-semibold">Create event</h3>
          <form onSubmit={(e)=>{e.preventDefault(); alert("Create event placeholder")}} className="mt-3 grid gap-3">
            <input placeholder="Event title" className="p-2 rounded border" />
            <input type="date" className="p-2 rounded border" />
            <input placeholder="Venue" className="p-2 rounded border" />
            <div className="flex gap-2">
              <button className="px-3 py-2 rounded-md bg-[#ff8a66] text-black font-semibold">Create</button>
              <button type="button" className="px-3 py-2 rounded-md border">Preview</button>
            </div>
          </form>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Your events</h3>
          <div className="space-y-3">
            {events.map((ev,i)=> <EventCard key={i} {...ev} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
