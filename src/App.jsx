import { useState } from "react";
import RegistrationForm from "../src/components/form/Registration";
import Footer from "../src/components/footer/Footer";
import Navbar from "../src/components/navbar/Navbar";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggle = () => {
    // setIsDark(isDark ? false : true);
    setIsDark(!isDark);
  };

  return (
    <>
      <Navbar toggle={toggle} isDark={isDark} />
        <RegistrationForm isDark={isDark} />
      <Footer isDark={isDark} />
    </>
  );
};
export default App;
