import { useKeycloak } from "@react-keycloak/web";

const Secured = () => {
  const { keycloak } = useKeycloak();

  return (
    <div>
      <h1>Secured</h1>
      <button
        onClick={() =>
          keycloak.logout({
            redirectUri: "http://localhost:3000",
          })
        }
      >
        Logout
      </button>
    </div>
  );
};

export default Secured;
