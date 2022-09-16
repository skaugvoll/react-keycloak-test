import { useKeycloak } from "@react-keycloak/web";

const Secured = () => {
  const { keycloak } = useKeycloak();

  return (
    <div>
      <h1>Secured By KC</h1>
      <h2>Access Token Values:</h2>
      <pre>
        <code>{JSON.stringify(keycloak.tokenParsed, null, 2)}</code>
      </pre>
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
