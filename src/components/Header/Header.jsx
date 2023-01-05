import { useEffect, useState } from "react";
import GlobalLoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import HeaderStyled from "./HeaderStyled";

const { NavLink, useLocation } = require("react-router-dom");

const Header = () => {
  let location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(function () {
      setIsLoading(false);
    }, 1000);
  }, [location]);

  return (
    <HeaderStyled>
      <NavLink className="link" to="/">
        <h1>Podcaster</h1>
      </NavLink>
      <GlobalLoadingIndicator isLoading={isLoading} />
    </HeaderStyled>
  );
};

export default Header;
