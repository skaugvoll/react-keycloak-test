import { useKeycloak } from "@react-keycloak/web";
import { Outlet } from "react-router";

const ProtectedPath = (props: any) => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;

  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return (
      <div>
        <p>You're not signed in</p>
        <button onClick={() => keycloak.login()}>Login</button>
      </div>
    );
  }

  // return isLoggedIn ? children : keycloak.login;
};

export default ProtectedPath;
