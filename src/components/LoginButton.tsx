import {GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline} from "react-google-login";
import {useSetAtom} from "jotai";
import {userAtom} from "../atoms/userAtom.tsx";
import {useNavigate} from "react-router-dom";
export function LoginButton () {
    const clientId = "673042186693-2m5j2elqlhnukhflpjf4871goq384cb9.apps.googleusercontent.com";
    const setUser = useSetAtom(userAtom);
    const navigate = useNavigate();

    const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        console.log("LOGIN SUCCESS! Current user: ", (res as GoogleLoginResponse).profileObj);
        setUser((res as GoogleLoginResponse).profileObj);
        navigate("/home")
    }

    const onFailure = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        console.log("LOGIN FAILED! res: ", res);
        setUser(undefined);
    }

    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}