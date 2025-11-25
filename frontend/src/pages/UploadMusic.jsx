import React, {useState, useRef} from "react";
import { useTheme } from "../context/ThemeContext";

const PaymentOption = ({name, icon, selected, onClick, isDark}) => (
  <button onClick={onClick} className={`flex items-center gap-2 px-3 py-2 border rounded-md transition-all ${selected ? "bg-purple-100 border-purple-400" : isDark ? "bg-gray-700/50 border-gray-600 text-gray-300" : "bg-white/50 border-gray-200"}`}>
    <img src={icon} alt={name} className="w-6 h-6" />
    <span className="text-sm font-medium">{name}</span>
  </button>
);

export default function UploadMusic(){
  const { isDark } = useTheme();
  const [fileName, setFileName] = useState(null);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
  const [payment, setPayment] = useState("MPesa");
  const fileRef = useRef();

  function handleDrop(e){
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if(f) { setFileName(f.name); }
  }
  function handleSelect(e){
    const f = e.target.files?.[0];
    if(f) setFileName(f.name);
  }
  function handleUpload(e){
    e.preventDefault();
    // call backend to upload. placeholder:
    alert(`Uploading "${title || fileName}" — price: ${price} via ${payment}`);
  }

  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-teal-500 rounded-2xl p-6 text-white shadow-xl">
        <h1 className="text-3xl font-bold mb-2">🎵 Welcome to Your Studio!</h1>
        <p className="text-white/90">Ready to share your music with the world? Let's get started!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main upload panel */}
        <div className={`lg:col-span-2 backdrop-blur-sm rounded-2xl p-6 shadow-xl border transition-all ${isDark ? 'bg-gray-800/80 border-gray-700/20' : 'bg-white/80 border-white/20'}`}>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">🎧 Upload Your Track</h2>

        <div
          onDrop={handleDrop}
          onDragOver={(e)=>e.preventDefault()}
          className={`border-2 border-dashed rounded-2xl p-8 mb-6 transition-all duration-300 hover:scale-[1.02] ${isDark ? 'border-purple-400 bg-gradient-to-br from-gray-700 to-gray-600 hover:border-purple-300' : 'border-purple-300 bg-gradient-to-br from-purple-50 to-teal-50 hover:border-purple-400'}`}
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🎵</div>
            <p className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Drag & drop your audio file here</p>
            <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{fileName ? `🎶 ${fileName}` : "No file chosen"}</p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <input ref={fileRef} type="file" accept="audio/*" className="hidden" onChange={handleSelect}/>
              <button onClick={()=>fileRef.current.click()} className="px-6 py-3 bg-gradient-to-r from-purple-500 to-teal-500 text-white rounded-lg font-semibold hover:scale-105 transition-all shadow-lg">📁 Browse Files</button>
            </div>
          </div>
        </div>

        <form onSubmit={handleUpload} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Song title" className={`p-3 rounded-md w-full border transition-all ${isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'}`}/>
            <input value={genre} onChange={e=>setGenre(e.target.value)} placeholder="Genre" className={`p-3 rounded-md w-full border transition-all ${isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'}`}/>
            <input value={price} onChange={e=>setPrice(e.target.value)} placeholder="Price (USD)" className={`p-3 rounded-md w-full border transition-all ${isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'}`}/>
            <select value={payment} onChange={e=>setPayment(e.target.value)} className={`p-3 rounded-md border transition-all ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}>
              <option>MPesa</option>
              <option>PayPal</option>
              <option>Card</option>
            </select>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <PaymentOption name="MPesa" icon="https://dummyimage.com/24x24/2dd4bf/fff.png&text=M" selected={payment==="MPesa"} onClick={()=>setPayment("MPesa")} isDark={isDark} />
            <PaymentOption name="PayPal" icon="https://dummyimage.com/24x24/7c3aed/fff.png&text=P" selected={payment==="PayPal"} onClick={()=>setPayment("PayPal")} isDark={isDark} />
            <PaymentOption name="Card" icon="https://dummyimage.com/24x24/ff8a66/fff.png&text=C" selected={payment==="Card"} onClick={()=>setPayment("Card")} isDark={isDark} />
          </div>

          <div className="flex items-center gap-3 mt-6">
            <button type="submit" className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-teal-500 text-white font-semibold hover:scale-105 transition-all shadow-lg">🚀 Upload & Publish</button>
            <button type="button" className={`px-4 py-3 rounded-lg border-2 transition-all ${isDark ? 'border-gray-600 hover:border-purple-400 text-gray-300' : 'border-gray-300 hover:border-purple-300'}`}>💾 Save Draft</button>
          </div>
        </form>
        </div>

        {/* Right column - previews and quick cards */}
        <aside className="space-y-6">
          <div className={`backdrop-blur-sm rounded-2xl p-4 shadow-xl border transition-all ${isDark ? 'bg-gray-800/80 border-gray-700/20' : 'bg-white/80 border-white/20'}`}>
            <h3 className={`font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>📱 Mobile Preview</h3>
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl p-4 shadow-inner">
              <div className="h-40 w-full bg-gradient-to-b from-purple-400 via-pink-400 to-teal-400 rounded-lg animate-pulse" />
              <div className="mt-3 flex justify-between items-center text-white">
                <div>
                  <div className="font-bold">{title || "Your Song"}</div>
                  <div className="text-sm text-gray-300">Duration: 3:12</div>
                </div>
                <div className="text-lg font-bold text-teal-300">$ {price || "0.00"}</div>
              </div>
            </div>
          </div>

          <div className={`backdrop-blur-sm rounded-2xl p-4 shadow-xl border transition-all ${isDark ? 'bg-gray-800/80 border-gray-700/20' : 'bg-white/80 border-white/20'}`}>
            <h3 className={`font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>⚡ Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:scale-105 transition-all shadow-md">🔗 Share Link</button>
              <button className="w-full p-3 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white font-medium hover:scale-105 transition-all shadow-md">💰 View Sales</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
