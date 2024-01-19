import {LoginButton} from "./components/LoginButton.tsx";
import {LogoutButton} from "./components/LogoutButton.tsx";
import {useEffect} from "react";
import {gapi} from "gapi-script";

function App() {
  const clientId = "673042186693-2m5j2elqlhnukhflpjf4871goq384cb9.apps.googleusercontent.com";

  useEffect(() => {
    function start () {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }

    gapi.load('client:auth2', start);
  }, []);

  return (
    <>
      <LoginButton />
      <LogoutButton />
    </>
  )
}

export default App
