import React from 'react'

function Footer() {
  return (
    <>
        <footer className="w-full bg-gradient-to-r from-white to-[#f8f6ff] border-t border-gray-200 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center font-bold">S</div>
          <span className="text-gray-800 font-medium">Iron-Learning</span>
        </div>
        <p className="text-center mt-4 sm:mt-0 sm:text-right text-sm text-gray-500">
          Doing timepass with the skills
        </p>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-100">
        © Copyright 2025 - IronLearning | Created by{' '}
        <a href="#" className="text-blue-600 hover:underline">
         Tanish Tirpathi for timepass
        </a>
      </div>
    </footer>
    
    </>
  )
}

export default Footer