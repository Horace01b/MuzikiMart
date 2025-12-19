// src/pages/fans/Discovery.jsx
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Play, 
  Heart, 
  Share2, 
  MoreVertical,
  Clock,
  Users,
  TrendingUp,
  Globe,
  Music,
  Mic,
  Headphones,
  Radio,
  Download,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
  ListMusic,
  Plus,
  Check,
  ChevronDown,
  Sparkles,
  Zap,
  Star,
  TrendingDown,
  Crown
} from 'lucide-react';

const Discovery = () => {
  const [activeTab, setActiveTab] = useState('genres');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [playingTrack, setPlayingTrack] = useState(null);
  const [likedTracks, setLikedTracks] = useState(new Set());
  const [followedArtists, setFollowedArtists] = useState(new Set([1, 3]));
  const [podcastQueue, setPodcastQueue] = useState([]);

  const genres = [
    { id: 'all', name: 'All Genres', icon: '🎵', color: 'from-blue-500 to-purple-500', count: 245 },
    { id: 'pop', name: 'Pop', icon: '🌟', color: 'from-pink-500 to-rose-500', count: 42 },
    { id: 'hiphop', name: 'Hip Hop', icon: '🎤', color: 'from-orange-500 to-red-500', count: 38 },
    { id: 'electronic', name: 'Electronic', icon: '⚡', color: 'from-cyan-500 to-blue-500', count: 56 },
    { id: 'rnb', name: 'R&B/Soul', icon: '🎶', color: 'from-violet-500 to-purple-500', count: 29 },
    { id: 'rock', name: 'Rock', icon: '🎸', color: 'from-yellow-500 to-orange-500', count: 33 },
    { id: 'jazz', name: 'Jazz', icon: '🎷', color: 'from-amber-500 to-yellow-500', count: 18 },
    { id: 'latin', name: 'Latin', icon: '💃', color: 'from-green-500 to-emerald-500', count: 27 },
    { id: 'afro', name: 'Afrobeat', icon: '🌍', color: 'from-lime-500 to-green-500', count: 22 },
    { id: 'indie', name: 'Indie', icon: '🎨', color: 'from-fuchsia-500 to-pink-500', count: 31 },
    { id: 'country', name: 'Country', icon: '🤠', color: 'from-red-500 to-amber-500', count: 15 },
    { id: 'classical', name: 'Classical', icon: '🎻', color: 'from-slate-500 to-gray-500', count: 12 },
  ];

  const trendingArtists = [
    { id: 1, name: 'Nova Rhythm', genre: 'Electronic Pop', location: 'Berlin, DE', followers: '1.8M', isTrending: true, change: '+15%' },
    { id: 2, name: 'Soul Waves', genre: 'R&B', location: 'London, UK', followers: '2.4M', isTrending: true, change: '+22%' },
    { id: 3, name: 'Desert Echo', genre: 'Alternative', location: 'Austin, US', followers: '920K', isTrending: false, change: '+8%' },
    { id: 4, name: 'Tokyo Pulse', genre: 'Synthwave', location: 'Tokyo, JP', followers: '1.3M', isTrending: true, change: '+18%' },
    { id: 5, name: 'Caribbean Sun', genre: 'Reggae', location: 'Kingston, JM', followers: '850K', isTrending: true, change: '+12%' },
    { id: 6, name: 'Alpine Echo', genre: 'Folk', location: 'Oslo, NO', followers: '620K', isTrending: false, change: '+5%' },
  ];

  const podcasts = [
    { id: 1, title: 'Music Theory Unlocked', host: 'Dr. Melody', category: 'Education', duration: '45 min', episodes: 128, listeners: '350K' },
    { id: 2, title: 'Indie Spotlight', host: 'Luna Parker', category: 'Interview', duration: '60 min', episodes: 94, listeners: '210K' },
    { id: 3, title: 'Electronic Frontiers', host: 'DJ Circuit', category: 'Technology', duration: '75 min', episodes: 156, listeners: '540K' },
    { id: 4, title: 'Global Grooves', host: 'World Beat Collective', category: 'Culture', duration: '55 min', episodes: 72, listeners: '180K' },
    { id: 5, title: 'Songwriting Secrets', host: 'Chord Masters', category: 'Creative', duration: '40 min', episodes: 203, listeners: '890K' },
    { id: 6, title: 'Hip Hop History', host: 'B-Boy Legacy', category: 'History', duration: '90 min', episodes: 65, listeners: '310K' },
  ];

  const globalRecommendations = [
    { id: 1, title: 'Midnight in Tokyo', artist: 'Tokyo Pulse', country: 'Japan', genre: 'Synthwave', plays: '2.4M', trending: true },
    { id: 2, title: 'Samba Sunrise', artist: 'Rio Rhythm', country: 'Brazil', genre: 'Latin', plays: '1.8M', trending: true },
    { id: 3, title: 'Desert Dreams', artist: 'Sahara Sound', country: 'Morocco', genre: 'World', plays: '890K', trending: false },
    { id: 4, title: 'Nordic Echoes', artist: 'Fjord Folk', country: 'Norway', genre: 'Folk', plays: '1.2M', trending: true },
    { id: 5, title: 'K-Pop Rising', artist: 'Seoul Stars', country: 'South Korea', genre: 'K-Pop', plays: '3.1M', trending: true },
    { id: 6, title: 'Afro Future', artist: 'Lagos Collective', country: 'Nigeria', genre: 'Afrobeat', plays: '2.1M', trending: true },
  ];

  const topCharts = [
    { id: 1, rank: 1, title: 'Electric Dreams', artist: 'Nova Rhythm', genre: 'Electronic', plays: '4.2M', trend: 'up' },
    { id: 2, rank: 2, title: 'Midnight Drive', artist: 'Tokyo Pulse', genre: 'Synthwave', plays: '3.8M', trend: 'up' },
    { id: 3, rank: 3, title: 'Ocean Waves', artist: 'Soul Waves', genre: 'R&B', plays: '3.5M', trend: 'steady' },
    { id: 4, rank: 4, title: 'Mountain High', artist: 'Alpine Echo', genre: 'Folk', plays: '2.9M', trend: 'up' },
    { id: 5, rank: 5, title: 'City Lights', artist: 'Urban Beats', genre: 'Hip Hop', plays: '2.7M', trend: 'down' },
  ];

  const handlePlayTrack = (trackId) => {
    setPlayingTrack(trackId);
  };

  const handleLikeTrack = (trackId) => {
    const newLiked = new Set(likedTracks);
    if (newLiked.has(trackId)) {
      newLiked.delete(trackId);
    } else {
      newLiked.add(trackId);
    }
    setLikedTracks(newLiked);
  };

  const handleFollowArtist = (artistId) => {
    const newFollowed = new Set(followedArtists);
    if (newFollowed.has(artistId)) {
      newFollowed.delete(artistId);
    } else {
      newFollowed.add(artistId);
    }
    setFollowedArtists(newFollowed);
  };

  const filteredTracks = selectedGenre === 'all' 
    ? globalRecommendations 
    : globalRecommendations.filter(track => track.genre.toLowerCase() === selectedGenre);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/50 to-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-lg border-b border-blue-800/30">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold flex items-center">
                <Globe className="w-8 h-8 mr-3 text-blue-400" />
                Discover New Music
              </h1>
              <p className="text-gray-400 mt-2">Explore genres, podcasts, and trending tracks from around the world</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search artists, genres, podcasts..."
                  className="pl-12 pr-4 py-3 bg-gray-800/50 border border-blue-800/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 w-96"
                />
              </div>
              
              <button className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl font-semibold flex items-center transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-500/25">
                <Shuffle className="w-5 h-5 mr-2" />
                Shuffle Play
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {[
              { id: 'genres', label: 'Genres', icon: '🎵' },
              { id: 'trending', label: 'Trending', icon: '🔥' },
              { id: 'podcasts', label: 'Podcasts', icon: '🎙️' },
              { id: 'global', label: 'Global', icon: '🌎' },
              { id: 'charts', label: 'Top Charts', icon: '🏆' },
              { id: 'new', label: 'New Releases', icon: '✨' },
              { id: 'curated', label: 'Curated', icon: '⭐' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all flex items-center ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800/50 hover:bg-gray-800 text-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Genres Grid */}
        {activeTab === 'genres' && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold flex items-center">
                <Music className="w-6 h-6 mr-3 text-blue-400" />
                Browse Genres
              </h2>
              <button className="text-blue-400 hover:text-blue-300 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filter & Sort
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {genres.map((genre) => (
                <button
                  key={genre.id}
                  onClick={() => setSelectedGenre(genre.id)}
                  className={`relative group p-6 rounded-2xl transition-all transform hover:scale-[1.03] ${
                    selectedGenre === genre.id
                      ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-900'
                      : ''
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${genre.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <div className="relative z-10">
                    <div className="text-3xl mb-3">{genre.icon}</div>
                    <div className="font-bold text-lg mb-1">{genre.name}</div>
                    <div className="text-sm text-gray-400">{genre.count} tracks</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Trending Artists */}
          <div className="lg:col-span-2 space-y-8">
            {/* Trending Artists */}
            <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-blue-400" />
                  Trending Artists
                  <Sparkles className="w-5 h-5 ml-2 text-yellow-500" />
                </h3>
                <button className="text-blue-400 hover:text-blue-300 text-sm">
                  View All Artists
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {trendingArtists.map((artist) => (
                  <div key={artist.id} className="bg-gray-900/50 rounded-xl p-4 hover:bg-gray-800/50 transition-all group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center text-2xl mr-4">
                          <Mic className="w-8 h-8 text-blue-400" />
                        </div>
                        <div>
                          <div className="font-bold text-lg">{artist.name}</div>
                          <div className="text-sm text-gray-400">{artist.genre}</div>
                          <div className="text-xs text-gray-500 flex items-center mt-1">
                            <Globe className="w-3 h-3 mr-1" />
                            {artist.location}
                          </div>
                        </div>
                      </div>
                      
                      {artist.isTrending && (
                        <div className="flex items-center px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 rounded-lg text-sm">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          {artist.change}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-300">
                        <Users className="w-4 h-4 inline mr-1" />
                        {artist.followers} followers
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleFollowArtist(artist.id)}
                          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                            followedArtists.has(artist.id)
                              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                              : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                          }`}
                        >
                          {followedArtists.has(artist.id) ? (
                            <>
                              <Check className="w-4 h-4 inline mr-1" />
                              Following
                            </>
                          ) : (
                            'Follow'
                          )}
                        </button>
                        
                        <button className="p-2 hover:bg-gray-700 rounded-lg">
                          <MoreVertical className="w-5 h-5 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Global Recommendations */}
            <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-blue-400" />
                  Top Recommendations
                  {selectedGenre !== 'all' && (
                    <span className="ml-4 text-sm font-normal bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-lg">
                      {genres.find(g => g.id === selectedGenre)?.name}
                    </span>
                  )}
                </h3>
                
                <div className="flex items-center space-x-4">
                  <button className="text-sm text-gray-400 hover:text-white">
                    <Shuffle className="w-5 h-5" />
                  </button>
                  <button className="text-sm text-blue-400 hover:text-blue-300">
                    View All
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {filteredTracks.map((track) => (
                  <div key={track.id} className="group flex items-center justify-between p-4 bg-gray-900/50 rounded-xl hover:bg-gray-800/50 transition-all">
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                          <Music className="w-7 h-7 text-blue-400" />
                        </div>
                        <button
                          onClick={() => handlePlayTrack(track.id)}
                          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity flex items-center justify-center"
                        >
                          {playingTrack === track.id ? (
                            <div className="flex space-x-1">
                              <div className="w-1 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                              <div className="w-1 h-4 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-1 h-4 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                            </div>
                          ) : (
                            <Play className="w-8 h-8 text-white fill-white" />
                          )}
                        </button>
                      </div>
                      
                      <div className="flex-1">
                        <div className="font-semibold">{track.title}</div>
                        <div className="text-sm text-gray-400">{track.artist}</div>
                        <div className="flex items-center space-x-3 text-xs text-gray-500 mt-1">
                          <span className="flex items-center">
                            <Globe className="w-3 h-3 mr-1" />
                            {track.country}
                          </span>
                          <span className="px-2 py-0.5 bg-blue-900/30 text-blue-300 rounded">
                            {track.genre}
                          </span>
                          {track.trending && (
                            <span className="flex items-center text-yellow-500">
                              <Zap className="w-3 h-3 mr-1" />
                              Trending
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="text-sm text-gray-300">{track.plays}</div>
                        <div className="text-xs text-gray-500">plays</div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleLikeTrack(track.id)}
                          className="p-2 hover:bg-gray-700 rounded-lg"
                        >
                          <Heart className={`w-5 h-5 ${likedTracks.has(track.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                        </button>
                        
                        <button className="p-2 hover:bg-gray-700 rounded-lg">
                          <Share2 className="w-5 h-5 text-gray-400" />
                        </button>
                        
                        <button className="p-2 hover:bg-gray-700 rounded-lg">
                          <MoreVertical className="w-5 h-5 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Podcasts & Charts */}
          <div className="space-y-8">
            {/* Podcasts */}
            <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center">
                  <Headphones className="w-6 h-6 mr-3 text-blue-400" />
                  Featured Podcasts
                </h3>
                <button className="text-sm text-blue-400 hover:text-blue-300">
                  All Podcasts
                </button>
              </div>

              <div className="space-y-4">
                {podcasts.map((podcast) => (
                  <div key={podcast.id} className="p-4 bg-gray-900/50 rounded-xl hover:bg-gray-800/50 transition-all group">
                    <div className="flex items-start space-x-4">
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center">
                          <Radio className="w-8 h-8 text-orange-400" />
                        </div>
                        <button className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity flex items-center justify-center">
                          <Play className="w-6 h-6 text-white fill-white" />
                        </button>
                      </div>
                      
                      <div className="flex-1">
                        <div className="font-semibold">{podcast.title}</div>
                        <div className="text-sm text-gray-400">{podcast.host}</div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                            {podcast.category}
                          </span>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {podcast.duration}
                            </span>
                            <span>{podcast.episodes} eps</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-3">
                          <div className="text-sm text-gray-300">
                            <Users className="w-4 h-4 inline mr-1" />
                            {podcast.listeners} listeners
                          </div>
                          
                          <button className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-sm transition-all">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Charts */}
            <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center">
                  <Crown className="w-6 h-6 mr-3 text-yellow-500" />
                  Global Top Charts
                </h3>
                <div className="text-xs text-gray-400">Updated Today</div>
              </div>

              <div className="space-y-3">
                {topCharts.map((chart) => (
                  <div key={chart.id} className="flex items-center justify-between p-3 hover:bg-gray-800/50 rounded-xl transition-all group">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-10 h-10 flex items-center justify-center">
                        <div className={`text-lg font-bold ${
                          chart.rank <= 3 ? 'text-yellow-500' : 'text-gray-400'
                        }`}>
                          {chart.rank}
                        </div>
                        {chart.trend === 'up' && (
                          <TrendingUp className="absolute -top-1 -right-1 w-4 h-4 text-green-500" />
                        )}
                        {chart.trend === 'down' && (
                          <TrendingDown className="absolute -top-1 -right-1 w-4 h-4 text-red-500" />
                        )}
                      </div>
                      
                      <div>
                        <div className="font-semibold">{chart.title}</div>
                        <div className="text-sm text-gray-400">{chart.artist}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                        {chart.genre}
                      </span>
                      <div className="text-right">
                        <div className="text-sm text-gray-300">{chart.plays}</div>
                      </div>
                      
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-700 rounded-lg">
                        <Play className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Discovery Stats */}
            <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30 shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Sparkles className="w-6 h-6 mr-3 text-blue-400" />
                Your Discovery Stats
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-gray-400">Genres Explored</div>
                  <div className="text-2xl font-bold">8/24</div>
                </div>
                
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-1/3"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-900/50 p-4 rounded-xl">
                    <div className="text-2xl font-bold mb-1">42</div>
                    <div className="text-sm text-gray-400">New Artists</div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-4 rounded-xl">
                    <div className="text-2xl font-bold mb-1">156</div>
                    <div className="text-sm text-gray-400">Tracks Discovered</div>
                  </div>
                </div>
                
                <button className="w-full mt-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-semibold transition-all">
                  <Plus className="w-5 h-5 inline mr-2" />
                  Create Discovery Playlist
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Country Highlights */}
        <div className="mt-12 bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30 shadow-xl">
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <Globe className="w-6 h-6 mr-3 text-blue-400" />
            Hot Around the World
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { country: '🇺🇸 USA', genre: 'Hip Hop', artist: 'Urban Beats' },
              { country: '🇰🇷 Korea', genre: 'K-Pop', artist: 'Seoul Stars' },
              { country: '🇳🇬 Nigeria', genre: 'Afrobeats', artist: 'Lagos Collective' },
              { country: '🇬🇧 UK', genre: 'Indie Rock', artist: 'London Dreams' },
              { country: '🇧🇷 Brazil', genre: 'Latin', artist: 'Rio Rhythm' },
            ].map((highlight, index) => (
              <div key={index} className="bg-gray-900/50 p-4 rounded-xl hover:bg-gray-800/50 transition-all">
                <div className="text-2xl mb-2">{highlight.country}</div>
                <div className="text-sm text-gray-400 mb-1">{highlight.genre}</div>
                <div className="font-semibold">{highlight.artist}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discovery;