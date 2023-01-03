import { useEffect, useState } from 'react';
import './App.scss';
import AllRouts from './components/AllRouts';
import { AuthContext } from './Context/Context';
function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [value2, setValue2] = useState('')
  const getdata = JSON.parse(localStorage.getItem('register-data'));
  useEffect(() => {
    getdata != null ? setIsAuth(true) : setIsAuth(false)  
  }); 
  return (
    <div className="App">
      <AuthContext.Provider value={{
      isAuth, 
      setIsAuth,
      getdata,
      value2,
      setValue2
    }}>
      <AllRouts />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
