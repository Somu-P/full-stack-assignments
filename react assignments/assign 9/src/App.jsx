import { CounterProvider } from "./CounterContext";
import { UserProvider } from "./UserContext";
import CounterComponent from "./CounterComponent";
import LoginComponent from "./LoginComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <UserProvider>
            <CounterProvider>
                <div className="container mt-4">
                    <h1 className="text-center">React Context Example</h1>
                    <LoginComponent />
                    <CounterComponent />
                </div>
            </CounterProvider>
        </UserProvider>
    );
}

export default App;
