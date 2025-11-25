import React from "react";
import { useTheme } from "../context/ThemeContext";

function MiniBar({value}) {
  return <div style={{height: `${value}px`}} className="w-2 bg-gradient-to-b from-[#7c3aed] to-[#ff8a66] rounded"></div>
}

export default function Analytics(){
  const { isDark } = useTheme();
  const sample = [30,60,45,80,55,90,40,70,50,95,80];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-2xl p-6 text-white shadow-xl">
        <h1 className="text-3xl font-bold mb-2">📊 Your Performance Dashboard</h1>
        <p className="text-white/90">Track your music's journey and celebrate your success!</p>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className={`backdrop-blur-sm rounded-2xl p-6 shadow-xl border hover:scale-105 transition-all ${isDark ? 'bg-gray-800/80 border-gray-700/20' : 'bg-white/80 border-white/20'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="text-3xl">🎵</div>
            <div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total Streams</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">32,540</div>
            </div>
          </div>
          <div className="flex gap-2 items-end justify-center">
            {sample.map((v,i)=> <MiniBar key={i} value={v} />)}
          </div>
        </div>

        <div className={`backdrop-blur-sm rounded-2xl p-6 shadow-xl border lg:col-span-2 hover:scale-105 transition-all ${isDark ? 'bg-gray-800/80 border-gray-700/20' : 'bg-white/80 border-white/20'}`}>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="text-3xl">💰</div>
              <div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Earnings this month</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">$1,240</div>
              </div>
            </div>
            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>📊 Payment breakdown</div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-green-100 to-green-200 text-center hover:scale-105 transition-all">
              <div className="text-2xl mb-2">📱</div>
              <div className="font-medium text-gray-700">MPesa</div>
              <div className="font-bold text-green-600 text-xl">$540</div>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 text-center hover:scale-105 transition-all">
              <div className="text-2xl mb-2">💳</div>
              <div className="font-medium text-gray-700">PayPal</div>
              <div className="font-bold text-blue-600 text-xl">$360</div>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 text-center hover:scale-105 transition-all">
              <div className="text-2xl mb-2">💴</div>
              <div className="font-medium text-gray-700">Cards</div>
              <div className="font-bold text-purple-600 text-xl">$340</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
