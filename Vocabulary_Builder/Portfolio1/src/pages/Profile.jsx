

import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Profile = () => {
  const [savedWordsCount, setSavedWordsCount] = useState(0);
  const [streakCount, setStreakCount] = React.useState(0);

React.useEffect(() => {
  const streak = calculateStreak();
  setStreakCount(streak);
}, []);

   // Example streak
  const user = {
    name: "Rishika Rajput",
    email: "itsrishikarajput@gmail.com",
    bio: "Passionate about learning new words ✨",
  };

  // const progressData = [
  //   { day: "Mon", words: 5 },
  //   { day: "Tue", words: 4 },
  //   { day: "Wed", words: 5 },
  //   { day: "Thu", words: 6 },
  //   { day: "Fri", words: 5 },
  //   { day: "Sat", words: 4 },
  //   { day: "Sun", words: 5 },
  // ];

  //streak start
  const calculateStreak = () => {
    const savedDates = JSON.parse(localStorage.getItem('savedDates')) || [];
    if (savedDates.length === 0) return 0;
  
    const today = new Date();
    let streak = 0;
  
    for (let i = 0; ; i++) {
      const checkDate = new Date();
      checkDate.setDate(today.getDate() - i);
      const checkDateString = checkDate.toISOString().split('T')[0];
  
      if (savedDates.includes(checkDateString)) {
        streak++;
      } else {
        break;
      }
    }
  
    return streak;
  };




  

React.useEffect(() => {
  const streak = calculateStreak();
  setStreakCount(streak);
}, []);

  
  //streak end






  useEffect(() => {
    const savedWords = JSON.parse(localStorage.getItem('savedWords')) || [];
      const saved1= savedWords.length;
    const savedWords1 = JSON.parse(localStorage.getItem('savedWords1')) || [];
     const saved2= savedWords1.length;
     const total =saved1+saved2;
     setSavedWordsCount(total);
  }, []);


  const getWeeklyProgress = () => {
    const savedDates = JSON.parse(localStorage.getItem('savedDates')) || [];
    const data = [];
    const today = new Date();
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      const dateString = date.toISOString().split('T')[0];
      const wordsSaved = savedDates.filter(d => d === dateString).length;

      data.push({
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        words: wordsSaved,
      });
    }

    return data;}

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      {/* Profile Header */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-3xl text-center mb-8">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
            {user.name.charAt(0)}
          </div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-400">{user.bio}</p>
          <p className="text-gray-400 mt-2">{user.email}</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-4xl">
        <div className="bg-gray-800 p-6 rounded-2xl flex flex-col items-center shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Words Saved</h2>
          <p className="text-3xl font-bold text-green-400">{savedWordsCount}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl flex flex-col items-center shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Current Streak</h2>
          <p className="text-3xl font-bold text-yellow-400">{streakCount} 🔥</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl flex flex-col items-center shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Total Active Days</h2>
          <p className="text-3xl font-bold text-blue-400">{streakCount + 10}</p>
        </div>
      </div>

      {/* Progress Chart */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-4xl mb-8">
        <h2 className="text-xl font-semibold mb-6 text-center">Weekly Progress</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={getWeeklyProgress}>
            <XAxis dataKey="day" stroke="#ccc" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="words" stroke="#38bdf8" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Motivational Footer */}
      <div className="text-gray-500 text-center mt-10">
        <p className="italic">"Keep learning, keep growing! 🌟"</p>
      </div>
    </div>
  );
};

export default Profile;

