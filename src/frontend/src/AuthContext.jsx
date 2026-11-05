import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('edufusion_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('edufusion_user', JSON.stringify(userData));
    localStorage.setItem('edufusion_token', userData.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('edufusion_user');
    localStorage.removeItem('edufusion_token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
