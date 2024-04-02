
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  return (
    <div>
      <Header />
      {showLoginForm ? (
        <LoginForm onSwitchToSignup={() => setShowLoginForm(false)} />
      ) : (
        <SignupForm onSwitchToLogin={() => setShowLoginForm(true)} />
      )}
      <Footer />
    </div>
  );
};

export default LoginPage;
