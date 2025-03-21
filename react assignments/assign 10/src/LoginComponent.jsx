import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginComponent = () => {
    const { user, login, logout } = useContext(UserContext);
    const [username, setUsername] = useState("");

    return (
        <div className="text-center mt-4">
            {user ? (
                <>
                    <h2>Welcome, {user.name}!</h2>
                    <button className="btn btn-danger" onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        className="form-control w-50 mx-auto mb-2"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button className="btn btn-primary" onClick={() => login(username)}>Login</button>
                </>
            )}
        </div>
    );
};

export default LoginComponent;
