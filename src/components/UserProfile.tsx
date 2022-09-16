import { useKeycloak } from "@react-keycloak/web";
import { KeycloakProfile } from "keycloak-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface UserProfileProps {}

const UserProfile = (props: UserProfileProps) => {
  const navigator = useNavigate();
  const { keycloak } = useKeycloak();
  const [profile, setProfile] = useState<undefined | KeycloakProfile>(
    undefined
  );
  useEffect(() => {
    const loadProfile = async () => {
      const profile = await keycloak.loadUserProfile();
      return profile;
    };
    loadProfile()
      .then((p) => {
        setProfile(p);
      })
      .catch((e) => {
        console.error("ERROR FETCHING PROFILE: ", e);
      });
  });

  if (!profile) {
    return <p>Profile not found</p>;
  }

  // const { firstName, lastName, email, emailVerified, username, id, totp, enabled, createdTimestamp } = profile

  return (
    <div>
      <pre>
        <code>{JSON.stringify(profile, null, 2)}</code>
      </pre>
      <button onClick={() => navigator("/")}>Backsies</button>
    </div>
  );
};

export default UserProfile;
