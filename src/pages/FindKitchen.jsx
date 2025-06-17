import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FindKitchen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first to access this page");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      Find Kitchen Page (Visible only when logged in)
    </div>
  );
};

export default FindKitchen;
