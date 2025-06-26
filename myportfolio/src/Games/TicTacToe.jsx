import React, { useState, useEffect } from 'react';

const TicTacToe = ({ onBack }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true); // true = player (X), false = computer (O)
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const checkWinner = (b) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let [a, b_, c] of lines) {
      if (b[a] && b[a] === b[b_] && b[a] === b[c]) return b[a];
    }
    return null;
  };

  const handleClick = (index) => {
    if (!isPlayerTurn || board[index] || gameOver) return;
    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsPlayerTurn(false);
  };

  const computerMove = () => {
    const emptyIndices = board.map((val, idx) => val === null ? idx : null).filter(v => v !== null);
    if (emptyIndices.length === 0 || gameOver) return;
    const randIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    const newBoard = [...board];
    newBoard[randIndex] = 'O';
    setTimeout(() => {
      setBoard(newBoard);
      setIsPlayerTurn(true);
    }, 500);
  };

  useEffect(() => {
    const result = checkWinner(board);
    if (result) {
      setWinner(result);
      setGameOver(true);
    } else if (!board.includes(null)) {
      setGameOver(true);
    } else if (!isPlayerTurn) {
      computerMove();
    }
  }, [board, isPlayerTurn]);

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setGameOver(false);
    setWinner(null);
  };

  const status = gameOver
    ? winner ? `🎉 Winner: ${winner}` : "🤝 It's a draw!"
    : `Next Turn: ${isPlayerTurn ? 'You (X)' : 'Computer (O)'}`;

  return (
    <div className="text-[#A7C1A8]">
      <h2 className="text-xl mb-2">Tic Tac Toe</h2>
      <div className="grid grid-cols-3 gap-1 w-40">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-12 h-12 bg-[#0f0f0f] border border-[#819A91] text-xl font-bold"
          >
            {cell}
          </button>
        ))}
      </div>
      <p className="mt-3">{status}</p>
      <div className="mt-4 flex gap-2">
        <button onClick={handleRestart} className="px-3 py-1 bg-[#819A91] text-black rounded">Restart</button>
        <button onClick={onBack} className="px-3 py-1 bg-[#819A91] text-black rounded">Return</button>
      </div>
    </div>
  );
};

export default TicTacToe;
