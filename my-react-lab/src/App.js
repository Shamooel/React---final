import React from "react";
import UserInfo from "./Component/UserInfo";
import Statistics from "./Component/Statistics";
import Messages from "./Component/Messages";
import './Component/USM.css';
import "./App.css"; 

function App() {
  const user = {
    name: "Shamoeel Ali",
    email: "sm.shamoeel@gmail.com",
    role: "Software engineer",
    profilePicture: "data:image/jpeg;base64,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", 
  };

  const stats = {
    totalUsers: 10000,
    activeUsers: 1000,
    newSignups: 120,
    activePercentage: ((10000 / 80000) * 120).toFixed(2), 
  };

  const messages = [
    "Welcome to the Dashboard!",
    "Hello there! Dive into your dashboard to manage tasks, track progress, and customize your experience",
    "Welcome back! Everything you need is right here on your dashboard, ready to help you get things done.",
  ];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <UserInfo user={user} />
      </aside>
      <main className="main-content">
        <Statistics stats={stats} />
        <Messages messages={messages} />
      </main>
    </div>
  );
}

export default App;




