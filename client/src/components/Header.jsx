import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();
 
  return (
    <header className="header">
      <div className="projectName">
        <Link to="/">Chit Chat</Link>
      </div>
      <ul>
        <li>
              <Link to="/login">
                <FaSignInAlt />
                Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser />
                Register
              </Link>
            </li>
      </ul>
            
          
       
    </header>
  );
}
export default Header;
