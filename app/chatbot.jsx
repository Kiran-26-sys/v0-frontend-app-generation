"use client"

import { Button } from "@/components/ui/button"
import { Icons } from "./utils/icons.jsx"

export default function PersistentChatbot({ showChatbot, setShowChatbot }) {
  return (
    <>
      {!showChatbot && (
        <div className="fixed bottom-6 right-6 z-50 animate-fadeInUp">
          <Button
            onClick={() => setShowChatbot(true)}
            className="rounded-full w-16 h-16 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 shadow-lg animate-pulse-custom hover-lift"
          >
            <Icons.Robot />
          </Button>
          <div className="absolute -top-12 right-0 bg-amber-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap animate-bounce-custom">
            <span className="animate-glow">Need help? Chat with AI!</span>
          </div>
        </div>
      )}

      {showChatbot && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl border border-amber-200 z-50 flex flex-col animate-slideInRight">
          <div className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icons.Robot />
              <span className="font-semibold animate-slideInLeft">AI Assistant</span>
            </div>
            <button
              onClick={() => setShowChatbot(false)}
              className="text-white hover:text-gray-200 transition-all duration-300 hover:scale-110"
            >
              ×
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-3">
              <div className="bg-amber-50 p-3 rounded-lg animate-fadeInUp border border-amber-200">
                <p className="text-sm text-gold-dark animate-typewriter">
                  👋 Hi! I'm your AI financial assistant. How can I help you today?
                </p>
              </div>
              <div
                className="bg-amber-50 p-3 rounded-lg animate-fadeInUp border border-amber-200"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="text-sm text-gold-dark animate-slideInLeft">💡 I can help you with:</p>
                <ul className="text-xs mt-2 space-y-1 text-gold-medium">
                  <li className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
                    • Understanding your financial data
                  </li>
                  <li className="animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
                    • Budget planning tips
                  </li>
                  <li className="animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
                    • Investment advice
                  </li>
                  <li className="animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
                    • Troubleshooting issues
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-amber-200">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 border border-amber-300 rounded-md text-sm transition-all duration-300 focus:scale-105 focus:border-amber-500"
              />
              <Button
                size="sm"
                className="hover-lift bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700"
              >
                <Icons.PaperPlane />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
