import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import img1 from './img/1.jpeg';
import img2 from './img/2.jpeg';
import img3 from './img/3.jpeg';
import img4 from './img/4.jpeg';
import img5 from './img/5.jpeg';
import img6 from './img/6.jpeg';


const CoderValentine = () => {
  const [step, setStep] = useState(0);
  const [logs, setLogs] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);
  const [isVerified, setIsVerified] = useState(false);

  // Terminal boot-up sequence
  useEffect(() => {
    if (step === 0) {
      const messages = [
        "> Initializing heart_protocol.exe...",
        "> Loading assets: hoodies, snacks, cuddles...",
        "> Searching for 'Best_Boyfriend' in local database...",
        "> Match found: [USER_TARGET_BF]",
        "> System: Action Required. Please login."
      ];
      messages.forEach((msg, i) => {
        setTimeout(() => {
          setLogs(prev => [...prev, msg]);
          if (i === messages.length - 1) setTimeout(() => setStep(1), 1000);
        }, i * 600);
      });
    }
  }, [step]);

  const handleFinalSubmit = () => {
    if (sliderValue < 100) return;
    confetti({
      particleCount: 150,
      spread: 70,
      colors: ['#ff2d55', '#50fa7b', '#8be9fd'] // Cyberpunk colors
    });
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center p-4 font-mono">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-xl w-full bg-[#161b22] border border-[#30363d] rounded-lg shadow-2xl overflow-hidden"
      >
        {/* IDE-Style Header */}
        <div className="bg-[#21262d] p-3 flex items-center justify-between border-b border-[#30363d]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-xs text-gray-400 font-mono tracking-widest uppercase">valentine_request.sh — 2026</span>
          <div className="w-10" />
        </div>

        <div className="p-6 md:p-10">
          <AnimatePresence mode="wait">
            {/* STEP 0: THE TERMINAL BOOT */}
            {step === 0 && (
              <motion.div key="boot" exit={{ opacity: 0 }} className="space-y-2">
                {logs.map((log, i) => (
                  <p key={i} className="text-[#50fa7b] text-sm md:text-base leading-relaxed">
                    {log}<span className={i === logs.length - 1 ? "animate-pulse" : ""}>_</span>
                  </p>
                ))}
              </motion.div>
            )}

            {/* STEP 1: THE CAPTCHA TEST */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-[#ff79c6] text-xl mb-2 font-bold underline">SECURITY CHECK: Human_Verification</h2>
                <p className="text-gray-400 mb-6 text-xs italic"> Select the target 'Good Boy' to decrypt the proposal</p>
                
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {[
                    { id: 1, src: img1 },
                    { id: 2, src: img2 },
                    { id: 3, src: img3 },
                    { id: 4, src: img4 },
                    { id: 5, src: img5 },
                    { id: 6, src: img6 },
                  ].map((img) => (
                    <motion.div 
      whileHover={{ scale: 1.05 }}
      key={img.id} 
      onClick={() => setIsVerified(true)}
      className={`relative aspect-square rounded border-2 overflow-hidden cursor-pointer transition-all
        ${isVerified ? 'border-[#50fa7b]' : 'border-[#30363d] hover:border-[#bd93f9]'}`}
    >
      <img 
        src={img.src} 
        alt={`bf-${img.id}`} 
        className={`w-full h-full object-cover transition-opacity ${isVerified ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`} 
      />
      
      {/* Success Overlay */}
      {isVerified && (
        <div className="absolute inset-0 bg-[#50fa7b]/20 flex items-center justify-center">
          <div className="bg-[#0d1117] text-[#50fa7b] text-[10px] px-2 py-1 rounded border border-[#50fa7b] font-bold">
            VAL_MATCH_FOUND
          </div>
        </div>
      )}
    </motion.div>
                  ))}
                </div>

                <button 
                  onClick={() => setStep(2)}
                  disabled={!isVerified}
                  className={`w-full py-3 font-bold uppercase tracking-[0.2em] transition-all
                    ${isVerified ? 'bg-[#bd93f9] text-black hover:shadow-[0_0_20px_#bd93f9]' : 'bg-gray-700 text-gray-400 cursor-not-allowed'}`}
                >
                  Decrypt Message
                </button>
              </motion.div>
            )}

            {/* STEP 2: THE LOGIC GATE */}
            {step === 2 && (
              <motion.div key="step2" className="space-y-8">
                <div>
                  <label className="text-[#8be9fd] text-sm block mb-4 italic">
                    if (boyfriend.love_level &lt; 100) {'{'} process.exit(1); {'}'}
                  </label>
                  <div className="relative pt-1">
                    <input 
                      type="range" min="0" max="100" value={sliderValue}
                      onChange={(e) => setSliderValue(e.target.value)}
                      className="w-full h-1 bg-[#30363d] rounded-lg appearance-none cursor-pointer accent-[#ff79c6]"
                    />
                    <div className="flex justify-between text-[10px] text-gray-500 mt-2">
                      <span>0% (LOOSER)</span>
                      <span className={sliderValue === "100" ? "text-[#50fa7b] font-bold" : ""}>{sliderValue}%</span>
                      <span>100% (SOULMATE)</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#0d1117] rounded border border-[#ffb86c]/30">
                  <p className="text-[#ffb86c] text-[11px] leading-relaxed">
                    <span className="font-bold"> TERMS_OF_SERVICE:</span><br />
                    Agreement includes 24/7 technical support for my mood swings, mandatory sharing of fries, and infinite head scratches.
                  </p>
                </div>

                <button 
                  onClick={handleFinalSubmit}
                  className={`w-full py-4 font-black transition-all border-2
                    ${sliderValue === "100" 
                      ? 'border-[#ff2d55] text-[#ff2d55] hover:bg-[#ff2d55] hover:text-white hover:shadow-[0_0_30px_#ff2d55]' 
                      : 'border-gray-700 text-gray-700 cursor-not-allowed'}`}
                >
                  {sliderValue === "100" ? "EXECUTE VALENTINE.EXE" : "LOGIC ERROR: INSUFFICIENT LOVE"}
                </button>
              </motion.div>
            )}

            {/* STEP 3: THE COMPILED SUCCESS */}
            {step === 3 && (
              <motion.div 
                key="step3" 
                initial={{ opacity: 0, filter: 'blur(10px)' }} 
                animate={{ opacity: 1, filter: 'blur(0px)' }} 
                className="text-center py-10"
              >
                <div className="mb-6 inline-block p-4 rounded-full bg-[#ff2d55]/10 border border-[#ff2d55] animate-pulse">
                  <svg className="w-12 h-12 text-[#ff2d55]" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
                </div>
                <h2 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase">Deployment Successful!</h2>
                <div className="bg-[#0d1117] p-6 rounded-lg border border-[#50fa7b]">
                  <p className="text-[#50fa7b] text-xl font-bold mb-2">System.out.println("Will you be my Valentine?");</p>
                  <p className="text-gray-500 text-xs tracking-widest italic mt-4">Exit Status: 0 (No Errors, Infinite Love)</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      <div className="fixed bottom-4 text-gray-600 text-[10px] uppercase tracking-widest">
        Developed with ❤️ by Your Favorite Developer
      </div>
    </div>
  );
};

export default CoderValentine;