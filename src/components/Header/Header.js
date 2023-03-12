import "./header.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ token, setUser }) => {
  // const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <div className="header-main">
      <Link to="/">
        <p>Home</p>
      </Link>
      <div>
        <div className="right-part">
          {token === null ? (
            <>
              <div className="button">
                <Link to="/user/signup">S'inscrire</Link>
              </div>
              <div className="button">
                <Link to="/user/signin">Se connecter</Link>
              </div>
            </>
          ) : (
            <button
              className="logout"
              onClick={() => {
                setUser(null);
                navigate("/");
              }}
            >
              Se déconnecter
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
