import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <ul className="icons-list">
      <li className="icon">
        <FaGoogle />
      </li>
      <li className="icon">
        <FaTwitter />
      </li>
      <li className="icon">
        <FaInstagram />
      </li>
      <li className="icon">
        <FaYoutube />
      </li>
    </ul>
    <p className="footer-text">Contact Us</p>
  </div>
)
//   const iconsList = [FaGoogle, FaTwitter, FaInstagram, FaYoutube]

//   const icons = () => (
//       iconsList.map(eachIcon => (<li>
//           <{eachIcon/}>
//       </li>))
//   )

export default Footer
