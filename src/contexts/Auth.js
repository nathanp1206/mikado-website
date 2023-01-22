import { createContext, useContext, useEffect, useState } from "react";
import { API } from 'aws-amplify'
import PropTypes from "prop-types";

const defaultValue = {
  isAuthenticated: false,
  user: null,
  login: () => { },
  logout: () => { },
};

export const AuthContext = createContext(defaultValue);
export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      setUser(user);
    } catch (e) {
      console.log('failed to load user', e);
    }
  }, []);

  function logout() {
    localStorage.setItem('user', '')
    setUser('')
  }

  async function login(email, password) {
    return new Promise(async (resolve, reject) => {
      try {
        const { user } = await API.post('REST', '/login', {
          body: {
            app: 'hmcoptimum',
            email,
            password
          }
        })
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
        return resolve(user)
      } catch (e) {
        console.log('failed to save profile', e)
        return reject(e)
      }
    })
  }

  async function register(payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const { user } = await API.post('REST', '/register', {
          body: payload
        })
        return resolve(user)
      } catch (e) {
        console.log('failed to save profile', e?.response, e?.msg, e?.data)
        return reject(e)
      }
    })
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
AuthContextProvider.defaultProps = {
  children: null,
};

export default AuthContextProvider;
