// src/components/GameWidget.jsx
import React, { useState } from 'react';
import { FaGamepad, FaArrowLeft } from 'react-icons/fa';
import TicTacToe from '../Games/TicTacToe';

const GameWidget = () => {
  const [open, setOpen] = useState(false);
  const [showGame, setShowGame] = useState(false);

  const toggleWidget = () => {
    if (showGame) {
      setShowGame(false);
    } else {
      setOpen(!open);
    }
  };

  const retroBox = 'bg-[#0f0f0f] border border-[#819A91] text-[#EEEFE0] rounded-lg shadow-lg p-4';

  return (
    <>
      <button
        onClick={toggleWidget}
        className="fixed bottom-6 right-6 z-50 bg-[#A7C1A8] hover:bg-[#CFE2D3] text-black p-3 rounded-full shadow-lg transition"
        title="Open Tic Tac Toe"
      >
        <FaGamepad size={20} />
      </button>

      {open && !showGame && (
        <div className={`fixed bottom-20 right-6 z-50 w-72 ${retroBox}`}>
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#A7C1A8] border-b pb-2">🎮 Tic Tac Toe</h2>
            <button
              onClick={() => {
                setShowGame(true);
                setOpen(false);
              }}
              className="w-full bg-[#1c1c1c] hover:bg-[#2a2a2a] py-2 rounded"
            >
              Play Now
            </button>
          </div>
        </div>
      )}

      {showGame && (
        <div className={`fixed bottom-20 right-6 z-50 w-72 ${retroBox}`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Tic Tac Toe</h3>
            <button onClick={toggleWidget} title="Back">
              <FaArrowLeft className="text-[#A7C1A8] hover:text-white" />
            </button>
          </div>
          <TicTacToe onBack={toggleWidget} />
        </div>
      )}
    </>
  );
};

export default GameWidget;
