# DOCS

- react router: https://www.w3schools.com/react/react_router.asp
- securing with kc: https://cagline.medium.com/authenticate-and-authorize-react-routes-component-with-keycloak-666e85662636
- https://blog.logrocket.com/implement-keycloak-authentication-react/

# Noteworthy discoveries

> Note ther was a change in OIDC / Keycloak protocol, so the path-prefix "auth" was removed. A lot of tutorials and libraries have not updated with this new change. so that's something to keep in mind!
> KC rest api overview: https://www.keycloak.org/docs-api/11.0/rest-api/index.html#_users_resource

# Setting up KeyCloak

1. docker-compose up
2. localhost:8080
   1. sign in to admin console
3. Create new realm
4. create user in realm
   1. remember to go to credentials tab and set password
5. Create client
   1. must be `public access`
   2. root url: http://localhost:3000,
   3. valid redirect urls: http://localhost:3000/\*
   4. valid post redirects urls: http://localhost:3000, http://localhost:3000/, etc
      1. when we use keycloak.logout({redirectUrl: xxx /_ this must match valid post redirect url_/})
   5. web origins: http://localhost:3000

# Implementing Keycloak-js and @react-keycloak/web

> NB: cannot use <React.strictMode>

See code for how to implement it
important files;

1. index.js
2. App.tsx
3. keycloak.js
4. src/components/ProtectedRoute.tsx
5.

- keycloak.logout functions should specifiy which redirect url to use
