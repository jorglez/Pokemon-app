import { LandingCss, LandingButtonCss, LandingTitleCss } from "./styles/LandingCss";
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <LandingCss>
      <LandingTitleCss>Pokemon Site</LandingTitleCss>
      <Link to="/home">
        <LandingButtonCss>
          Continue
        </LandingButtonCss>
      </Link>
    </LandingCss>
  );
}

export default Landing;