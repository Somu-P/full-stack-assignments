import { UserProvider } from "./UserContext";
import LoginComponent from "./LoginComponent";
import ProfileComponent from "./ProfileComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <UserProvider>
            <div className="container mt-4">
                <h1 className="text-center">User Authentication & Profile Update</h1>
                <LoginComponent />
                <ProfileComponent />
            </div>
        </UserProvider>
    );
}

export default App;
