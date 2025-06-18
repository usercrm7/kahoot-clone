import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

const Dashboard = () => {
  useEffect(() => {
    const socket = io("${import.meta.env.BACKEND_URL || 'http://localhost:5000'}", {
      transports: ['websocket'],
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });
    socket.on('connect', () => console.log('Socket bağlantısı başarılı!'));
    return () => socket.disconnect();
  }, []);

  return <div>Quiz Dashboard</div>;
};

export default Dashboard;