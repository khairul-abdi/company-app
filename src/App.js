import React, { useEffect, useState } from 'react';
import Routes from './routes'
import { Link, useHistory } from 'react-router-dom'
import logo from './img/logo.png'

function App() {

  const history = useHistory()
  const [path, setPath] = useState("")

  window.addEventListener("load", () => {
    if (window.location.pathname === '/contact') {
      setPath(window.location.pathname)
    }
  })

  const checkPath = () => {
    history.listen((location) => {
      setPath(location.pathname)
    })
  }

  useEffect(() => {
    checkPath()
  }, [])


  return (
    <div className="App">
      <div className='container'>
        <nav>
          <ul>
            <li><Link to='/'> <img src={logo} className="logo"/> </Link></li>
          </ul>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Service</Link></li>
            <li><Link to='/'>About</Link></li>
            {/* <li>{_contact}</li> */}
            <li><Link to='/contact'>Contact Me</Link></li>
            <li><Link to='/blog'>blog</Link></li>
            <li><Link to='/signin'>Sign in</Link></li>
          </ul>
        </nav>
        <Routes />
      </div>
    </div>
  );
}

export default App;
