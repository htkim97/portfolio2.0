import Profile from "@/components/Profile/Profile";
import React from "react";

export default function TabPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center", 
        width: "100%",
        height: "100vh",
        overflow:"hidden" 
      }}
    >
      <Profile />
    </div>
  );
}
