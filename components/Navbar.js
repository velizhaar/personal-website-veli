import {useState} from 'react'


export default function Navbar(props) {
    const [isActive, setIsActive] = useState(false)

    return (
        <nav>
        {/* <!--logo---> */}
        <a href="#" className="logo">velizha</a>
        {/* <!--menu---------> */}
        <div className={isActive ? "toggle": "toggle active"} onClick={() => setIsActive(!isActive)}></div>
        <ul className={isActive? "menu" : "menu active-menu"}>
          <li className="active"><a href="#main">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    )
}