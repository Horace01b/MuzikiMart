import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Summer Music Festival",
    date: "Aug 15, 2024",
    location: "Los Angeles, CA",
    attendees: 1250,
    ticketsSold: 892,
    image: "🎪"
  },
  {
    id: 2,
    title: "Album Launch Party",
    date: "Sep 3, 2024",
    location: "New York, NY",
    attendees: 500,
    ticketsSold: 423,
    image: "🎉"
  },
  {
    id: 3,
    title: "Acoustic Session",
    date: "Sep 20, 2024",
    location: "Chicago, IL",
    attendees: 200,
    ticketsSold: 156,
    image: "🎸"
  },
];

const UpcomingEvents = () => {
  return (
    <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "400ms" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Upcoming Events</h3>
          <p className="text-sm text-muted-foreground">Your scheduled performances</p>
        </div>
        <Link 
          to="/events" 
          className="flex items-center gap-1 text-sm text-primary hover:underline"
        >
          Manage Events
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div 
            key={event.id}
            className="group p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-secondary/30 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-3xl">
                {event.image}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground truncate">{event.title}</h4>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">
                  {event.ticketsSold}/{event.attendees}
                </p>
                <p className="text-xs text-muted-foreground">tickets sold</p>
                <div className="mt-2 w-24 h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    style={{ width: `${(event.ticketsSold / event.attendees) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
