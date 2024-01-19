import {GoogleLogout} from "react-google-login";
import {useSetAtom} from "jotai";
import {userAtom} from "../atoms/userAtom.tsx";
import {useNavigate} from "react-router-dom";

export function LogoutButton () {
    const clientId = "673042186693-2m5j2elqlhnukhflpjf4871goq384cb9.apps.googleusercontent.com";
    const setUser = useSetAtom(userAtom);
    const navigate = useNavigate();

    const onSuccess = () => {
        console.log("logout success");
        setUser(undefined);
        navigate("/");
    }

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}