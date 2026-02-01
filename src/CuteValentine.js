import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import yes from '../src/img/giphy.gif';

const CuteValentine = () => {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [isAccepted, setIsAccepted] = useState(false);

  // Logic to move the "No" button when hovered
  const moveNoButton = () => {
    const x = Math.random() * (window.innerWidth - 100) - window.innerWidth / 2;
    const y = Math.random() * (window.innerHeight - 100) - window.innerHeight / 2;
    setNoButtonPos({ x, y });
  };

  const handleYes = () => {
    setIsAccepted(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff69b4', '#ff1493', '#ffffff']
    });
  };

  return (
    <div className="min-h-screen bg-[#fff0f3] flex flex-col items-center justify-center p-4 overflow-hidden font-['Comic_Sans_MS',_cursive]">
      {!isAccepted ? (
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-10 rounded-[40px] shadow-xl text-center border-4 border-[#ffb3c1] max-w-sm"
        >
          {/* Cute Floating Heart */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-6xl mb-6"
          >
            💖
          </motion.div>

          <h1 className="text-3xl font-bold text-[#c9184a] mb-8 leading-tight">
            Will you be my Valentine? 🥺
          </h1>

          <div className="flex flex-col gap-4 items-center relative">
            {/* BIG YES BUTTON */}
            <button
              onClick={handleYes}
              className="bg-[#ff4d6d] hover:bg-[#ff758f] text-white text-2xl font-bold py-4 px-12 rounded-full shadow-lg hover:scale-110 transition-transform active:scale-95 z-10"
            >
              YES! 💍
            </button>

            <motion.button
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              animate={{ x: noButtonPos.x, y: noButtonPos.y }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-gray-200 text-gray-500 font-semibold py-2 px-6 rounded-full cursor-default"
            >
              No
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, zoom: 0.5 }}
          animate={{ opacity: 1, zoom: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-black text-[#ff4d6d] mb-6 animate-bounce">
            YAYYYY! Congrats you have unlocked lifetime suffering! 🕺🔥
          </h2>
          
          <div className="rounded-2xl border-8 border-white shadow-2xl overflow-hidden max-w-md mx-auto">
            {/* The Viral Dance GIF */}
            <img 
              src={yes} 
              alt="Dhurandhar Dance"
              className="w-full h-auto"
            />
          </div>

        </motion.div>
      )}

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30">
        <span className="absolute top-10 left-10 text-2xl animate-pulse">🌸</span>
        <span className="absolute bottom-20 right-10 text-3xl animate-bounce">💖</span>
        <span className="absolute top-1/2 left-1/4 text-xl">✨</span>
      </div>
    </div>
  );
};

export default CuteValentine;