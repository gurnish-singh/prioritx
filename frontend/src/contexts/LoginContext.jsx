import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginContext = createContext();

const useLoginContext = () => {
  return useContext(LoginContext);
};

function LoginProvider({ children }) {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(storedLoginState);
  }, []);

  const login = (token) => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('token', token);
  };

  const toggleLogin = (token) => {
    setIsLoggedIn((prev) => !prev);
    localStorage.setItem('isLoggedIn', !isLoggedIn);
    if (!isLoggedIn) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', false);
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <LoginContext.Provider
      value={{ isLoggedIn, login, toggleLogin, handleLogout }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export { LoginProvider, useLoginContext };