import React from "react";
import { useNavigate } from "react-router";
function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/about")}>Navigate to Aboutpage</button>
    </div>
  );
}

export default HomePage;
