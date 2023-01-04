import GlobalLoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import HeaderStyled from "./HeaderStyled";

const { NavLink } = require("react-router-dom");

const Header = () => {
  return (
    <HeaderStyled>
      <NavLink className="link" to="/">
        <h1>Podcaster</h1>
      </NavLink>

      <GlobalLoadingIndicator />
    </HeaderStyled>
  );
};

export default Header;
