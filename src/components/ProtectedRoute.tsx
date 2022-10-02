import { useKeycloak } from "@react-keycloak/web";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;

  if (isLoggedIn) {
    return children;
  } else {
    return (
      <div>
        <p>You're not signed in</p>
        <button data-cy="signin" onClick={() => keycloak.login()}>
          Login
        </button>
      </div>
    );
  }

  // return isLoggedIn ? children : keycloak.login;
};

export default ProtectedRoute;
