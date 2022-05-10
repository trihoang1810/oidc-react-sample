import { UserManager } from "oidc-client";
const config = {
  // the URL of our identity server
  authority: "https://authenticationserver20220111094343.azurewebsites.net",
  // this ID maps to the client ID in the identity client configuration
  client_id: "react-client",
  // URL to redirect to after login
  redirect_uri: "http://localhost:3000/signin-oidc",
  response_type: "id_token token",
  // the scopes or resources we would like access to
  scope: "openid profile native-client-scope",
  // URL to redirect to after logout
  post_logout_redirect_uri: "http://localhost:3000/signout-oidc",
};

// initialise!
const userManager = new UserManager(config);
export async function loadUserFromStorage(store) {
  try {
    let user = await userManager.getUser();
    if (!user) {
      return null;
    }
    return user;
  } catch (e) {
    console.error(`User not found: ${e}`);
    return null;
  }
}

export function signinRedirect() {
  return userManager.signinRedirect();
}

export function signinRedirectCallback() {
  return userManager.signinRedirectCallback();
}

export function signoutRedirect() {
  userManager.clearStaleState();
  userManager.removeUser();
  return userManager.signoutRedirect();
}

export function signoutRedirectCallback() {
  userManager.clearStaleState();
  userManager.removeUser();
  return userManager.signoutRedirectCallback();
}

export default userManager;
