import { NavLink, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
// import { useLogout } from '../hooks/useLogout'
import useLogout from "../hooks/useLogout";
// /styles
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li className={styles.title}>
            <NavLink to="/">FinanceTracker</NavLink>
          </li>

          {!user && (
            <>
              <li>
                <NavLink to="login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Signup</NavLink>
              </li>
            </>
          )}

          {user && (
            <>
                <li>Hello,{user.displayName}</li>
              <li>
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
