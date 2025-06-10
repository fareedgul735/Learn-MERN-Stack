const Navbar = ({ toggle = () => { }, isDark = false }) => {
  return (
    <>
      <nav className={isDark ? "dark-navbar" : "navbar"}>
        <div className="logo">
          <img
            src="/src/assets/images/logo.png"
            alt="register-log"
            width={"100px"}
            height={"72px"}
          />
        </div>
        <div className="theme-btn" onClick={toggle}>
          {isDark ? (
            <i className={"fa-solid fa-sun"} onClick={toggle}></i>
          ) : (
            <i className={"fa-solid fa-moon"} onClick={toggle}></i>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
