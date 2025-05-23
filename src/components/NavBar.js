import { Link } from "react-router-dom";
import * as userService from "../utilities/users-service";

export default function NavBar({ user, setUser }) {
  //console.log(user);
  const handleLogOut = () => {
    //delegate to users-service
    userService.logOut();
    setUser(null);
  };
  return (
    <nav>
      {/*<h1>Wecome, {user.name}</h1>*/}
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
      <Link to="/pots/history">Pots History</Link>
      <Link to="/pots/new">New Pot Details</Link>
    </nav>
  );
}
