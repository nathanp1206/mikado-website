// import LogoImg from "../assets/images/logo-with-text.png";

const AuthenticatedLayout = ({ children }) => {
  return (
    <main>
      <img
        className="img-fluid d-block mx-auto hd-logo py-4"
        // src={LogoImg}
        alt="logo"
      />
      {children}
    </main>
  );
};

export default AuthenticatedLayout;
