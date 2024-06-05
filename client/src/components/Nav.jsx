import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="bg-white-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex items-center gap-5">
            <li className="hidden md:block">
              <Link to="/" className="text-black">Home</Link>
            </li>
            <li className="hidden md:block">
              <Link to="/signup" className="text-black">Signup</Link>
            </li>
            <li className="hidden md:block">
              <Link to="/login" className="text-black">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
