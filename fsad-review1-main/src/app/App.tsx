import React, { useState } from "react";
import { LoginPage } from "./components/auth/LoginPage";
import { EducatorDashboard } from "./components/educator/EducatorDashboard";
import { StudentDashboard } from "./components/student/StudentDashboard";
import { Toaster } from "./components/ui/sonner";

import { User } from "./types";

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  if (!currentUser) {
    return (
      <>
        <LoginPage onLogin={handleLogin} />

        <Toaster />
      </>
    );
  }

  return (
    <>
      {currentUser.role === "educator" ? (
        <EducatorDashboard user={currentUser} onLogout={handleLogout} />
      ) : (
        <StudentDashboard user={currentUser} onLogout={handleLogout} />
      )}
      <Toaster />
    </>
  );
}
