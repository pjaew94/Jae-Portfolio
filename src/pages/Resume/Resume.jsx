import "./Resume.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

export const Resume = ({ textColor, setTextColor, route, setRoute }) => {
  return (
    <div className='resume'>
      <Navbar
        textColor={textColor}
        setTextColor={setTextColor}
        route={route}
        setRoute={setRoute}
      />

      <Footer textColor={textColor} />
    </div>
  );
};
