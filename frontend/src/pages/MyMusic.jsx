import { useState } from "react";
import { 
  Music, 
  Play, 
  Pause,
  Upload,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Download,
  BarChart3,
  Heart,
  Clock,
  Calendar,
  Disc3
} from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const tracks = [
  {
    id: 1,
    title: "Midnight Dreams",
    album: "Neon Nights",
    duration: "3:45",
    plays: 125840,
    likes: 8420,
    uploadDate: "Jan 15, 2024",
    status: "published",
    coverArt: "🎵"
  },
  {
    id: 2,
    title: "City Lights",
    album: "Neon Nights",
    duration: "4:12",
    plays: 98320,
    likes: 6230,
    uploadDate: "Jan 15, 2024",
    status: "published",
    coverArt: "🌃"
  },
  {
    id: 3,
    title: "Lost in Time",
    album: "Echoes",
    duration: "5:01",
    plays: 87650,
    likes: 5890,
    uploadDate: "Feb 20, 2024",
    status: "published",
    coverArt: "⏳"
  },
  {
    id: 4,
    title: "Electric Soul",
    album: "Echoes",
    duration: "3:58",
    plays: 76420,
    likes: 4560,
    uploadDate: "Feb 20, 2024",
    status: "published",
    coverArt: "⚡"
  },
  {
    id: 5,
    title: "Summer Vibes",
    album: "Tropical EP",
    duration: "4:30",
    plays: 54320,
    likes: 3210,
    uploadDate: "Mar 10, 2024",
    status: "published",
    coverArt: "🌴"
  },
  {
    id: 6,
    title: "Unreleased Demo",
    album: "Singles",
    duration: "3:22",
    plays: 0,
    likes: 0,
    uploadDate: "Apr 5, 2024",
    status: "draft",
    coverArt: "📝"
  },
];

const albums = [
  { name: "Neon Nights", tracks: 8, year: 2024, coverArt: "🌙" },
  { name: "Echoes", tracks: 6, year: 2024, coverArt: "🔊" },
  { name: "Tropical EP", tracks: 4, year: 2024, coverArt: "🏝️" },
  { name: "Singles", tracks: 3, year: 2024, coverArt: "🎤" },
];

const MyMusicPage = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [filter, setFilter] = useState("all");
  const [playingTrack, setPlayingTrack] = useState(null);

  const filteredTracks = tracks.filter(track => {
    if (filter === "all") return true;
    return track.status === filter;
  });

  const totalPlays = tracks.reduce((acc, t) => acc + t.plays, 0);
  const totalLikes = tracks.reduce((acc, t) => acc + t.likes, 0);

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8 animate-slide-up">
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Music</h1>
            <p className="text-muted-foreground mt-1">Manage your uploaded tracks and albums</p>
          </div>
          <button 
            onClick={() => setShowUploadModal(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:glow-primary transition-all"
          >
            <Upload className="w-5 h-5" />
            Upload Track
          </button>
        </header>

        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="stat-card animate-slide-up">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-primary/10">
                <Music className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Total Tracks</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{tracks.length}</p>
          </div>
          <div className="stat-card animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-accent/10">
                <Disc3 className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">Albums</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{albums.length}</p>
          </div>
          <div className="stat-card animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-emerald-500/10">
                <BarChart3 className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-sm text-muted-foreground">Total Plays</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{totalPlays.toLocaleString()}</p>
          </div>
          <div className="stat-card animate-slide-up" style={{ animationDelay: "300ms" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-rose-500/10">
                <Heart className="w-6 h-6 text-rose-400" />
              </div>
              <span className="text-sm text-muted-foreground">Total Likes</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{totalLikes.toLocaleString()}</p>
          </div>
        </div>

        {/* Albums Section */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: "400ms" }}>
          <h2 className="text-xl font-semibold text-foreground mb-4">Your Albums</h2>
          <div className="grid grid-cols-4 gap-4">
            {albums.map((album, index) => (
              <div 
                key={album.name}
                className="glass-card p-4 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-5xl mb-4 group-hover:scale-105 transition-transform">
                  {album.coverArt}
                </div>
                <h3 className="font-semibold text-foreground truncate">{album.name}</h3>
                <p className="text-sm text-muted-foreground">{album.tracks} tracks • {album.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-6 animate-slide-up" style={{ animationDelay: "500ms" }}>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search tracks..."
                className="pl-10 pr-4 py-2.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 w-72 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              {["all", "published", "draft"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filter === f 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors">
            <Filter className="w-4 h-4" />
            More Filters
          </button>
        </div>

        {/* Tracks List */}
        <div className="glass-card overflow-hidden animate-slide-up" style={{ animationDelay: "600ms" }}>
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground w-12">#</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Title</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Album</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                  <Clock className="w-4 h-4" />
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Plays</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Likes</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTracks.map((track, index) => (
                <tr 
                  key={track.id}
                  className="border-b border-border/30 hover:bg-secondary/30 transition-colors group"
                >
                  <td className="py-4 px-6">
                    <button 
                      onClick={() => setPlayingTrack(playingTrack === track.id ? null : track.id)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary text-primary group-hover:text-primary-foreground transition-all"
                    >
                      {playingTrack === track.id ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4 ml-0.5" />
                      )}
                    </button>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-lg">
                        {track.coverArt}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{track.title}</p>
                        <p className="text-xs text-muted-foreground">{track.uploadDate}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-muted-foreground">{track.album}</td>
                  <td className="py-4 px-6 text-muted-foreground">{track.duration}</td>
                  <td className="py-4 px-6 text-foreground font-medium">{track.plays.toLocaleString()}</td>
                  <td className="py-4 px-6 text-foreground font-medium">{track.likes.toLocaleString()}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      track.status === "published" 
                        ? "bg-emerald-500/10 text-emerald-400" 
                        : "bg-orange-500/10 text-orange-400"
                    }`}>
                      {track.status.charAt(0).toUpperCase() + track.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1">
                      <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <Edit className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <Download className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-destructive/10 transition-colors">
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center animate-in fade-in duration-200">
            <div className="glass-card p-8 w-full max-w-2xl mx-4 animate-slide-up">
              <h2 className="text-2xl font-bold text-foreground mb-6">Upload New Track</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Track Title</label>
                  <input 
                    type="text" 
                    placeholder="Enter track title..."
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Album</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                    <option value="">Select album...</option>
                    {albums.map(album => (
                      <option key={album.name} value={album.name}>{album.name}</option>
                    ))}
                    <option value="new">+ Create new album</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Genre</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                    <option value="">Select genre...</option>
                    <option value="pop">Pop</option>
                    <option value="hiphop">Hip Hop</option>
                    <option value="rnb">R&B</option>
                    <option value="electronic">Electronic</option>
                    <option value="rock">Rock</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Audio File</label>
                  <div className="border-2 border-dashed border-border/50 rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
                    <p className="text-foreground font-medium">Drop your audio file here</p>
                    <p className="text-sm text-muted-foreground mt-1">or click to browse (MP3, WAV, FLAC)</p>
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Cover Art</label>
                  <div className="border-2 border-dashed border-border/50 rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <p className="text-muted-foreground">Drop cover image or click to browse</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-4 mt-8">
                <button 
                  onClick={() => setShowUploadModal(false)}
                  className="px-6 py-3 rounded-xl bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-all"
                >
                  Cancel
                </button>
                <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:glow-primary transition-all">
                  Upload Track
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyMusicPage;
