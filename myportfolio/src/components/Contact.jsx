import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaFacebook,
} from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import axios from 'axios';

// SheetDB API endpoint
const SHEETDB_API = 'https://sheetdb.io/api/v1/bkibdh4n1tole';

// Tic Tac Toe Helpers
const initialBoard = Array(9).fill(null);
const getEmptyIndices = (board) =>
  board.map((val, i) => (val === null ? i : null)).filter((v) => v !== null);
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

// Tic Tac Toe Component
const Square = ({ value, onClick }) => (
  <button
    onClick={onClick}
    className="w-16 h-16 md:w-20 md:h-20 text-3xl font-bold text-[#A7C1A8] border border-[#819A91] bg-[#0f0f0f] hover:bg-[#1a1a1a] transition rounded-md shadow-md"
  >
    {value}
  </button>
);

const TicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (!isPlayerTurn || board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsPlayerTurn(false);
  };

  useEffect(() => {
    if (!isPlayerTurn && !winner && board.includes(null)) {
      const timeout = setTimeout(() => {
        const empty = getEmptyIndices(board);
        const randIndex = empty[Math.floor(Math.random() * empty.length)];
        const newBoard = [...board];
        newBoard[randIndex] = 'O';
        setBoard(newBoard);
        setIsPlayerTurn(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isPlayerTurn, board, winner]);

  const handleReset = () => {
    setBoard(initialBoard);
    setIsPlayerTurn(true);
  };

  return (
    <div className="flex flex-col items-center space-y-4 text-[#EEEFE0]">
      <h3 className="text-xl font-bold text-[#A7C1A8]">Tic Tac Toe: You vs CPU</h3>
      <div className="grid grid-cols-3 gap-2">
        {board.map((val, idx) => (
          <Square key={idx} value={val} onClick={() => handleClick(idx)} />
        ))}
      </div>
      <p className="mt-2 text-sm text-[#A7C1A8]">
        {winner
          ? `🎉 ${winner === 'X' ? 'You Win!' : 'CPU Wins!'}`
          : board.every(Boolean)
          ? '😐 Draw!'
          : isPlayerTurn
          ? 'Your Turn'
          : 'CPU Thinking...'}
      </p>
      <button
        onClick={handleReset}
        className="px-4 py-2 mt-2 bg-[#A7C1A8] text-black font-semibold rounded hover:bg-[#CFE2D3] transition"
      >
        Reset Game
      </button>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(SHEETDB_API, {
        data: formData,
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission failed', error);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen px-6 md:px-16 py-20 text-[#A7C1A8] font-mono bg-gradient-to-br from-[#0f0f0f] to-black overflow-hidden"
    >
      {/* Retro Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#1f1f1f_0%,#0f0f0f_100%)] opacity-70" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/grid.svg')] opacity-[0.04] mix-blend-soft-light" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 neon-glow text-[#819990]">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Game */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 border border-[#819A91] bg-[#0f0f0f] rounded-xl p-6 shadow-[0_0_40px_#819A91]/10"
          >
            <TicTacToe />
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 backdrop-blur-lg bg-[#A7C1A8]/10 border border-[#A7C1A8]/50 rounded-xl p-6 shadow-[0_0_40px_#819A91]/20"
          >
            <div className="mb-6 text-[#EEEFE0] text-xl font-bold border-l-4 border-[#A7C1A8] pl-4 h-8">
              <Typewriter
                words={["Let's Work Together", 'Build Something Cool', 'Bring Ideas to Life']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-[#A7C1A8] mb-1">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 bg-[#0f0f0f] text-[#EEEFE0] border border-[#819A91] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A7C1A8]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[#A7C1A8] mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-[#0f0f0f] text-[#EEEFE0] border border-[#819A91] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A7C1A8]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-[#A7C1A8] mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 bg-[#0f0f0f] text-[#EEEFE0] border border-[#819A91] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A7C1A8]"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="w-full bg-[#A7C1A8] text-black font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#CFE2D3] transition duration-300"
              >
                {submitted ? 'Message Sent ✅' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
