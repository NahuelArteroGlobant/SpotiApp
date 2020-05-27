import { useEffect } from "react";

function call() {
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const clientId = "c43f1354564140aebf2cf25645ad1dad";
  const redirectUri = "http://localhost:3000";
  const responseType = "token";

  const url = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`;

  window.location.href = url;
}

function AuthService() {
  useEffect(() => {
    const LocationUrl = window.location.href.split("access_token=")[1];
    const AccessToken = LocationUrl ? LocationUrl.split("&")[0] : null;
    if (AccessToken) {
      localStorage.setItem("auth", AccessToken);
    } else {
      call();
    }
  }, []);
}

export default AuthService;
