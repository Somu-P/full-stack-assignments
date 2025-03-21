import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "User", email: "user@example.com" });

    const login = (username) => {
        setUser({ name: username, email: "user@example.com" });
    };

    const logout = () => setUser(null);

    const updateProfile = async (updatedData) => {
        if (!user) return;

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedData),
            });

            if (response.ok) {
                // Merge the new changes into the current user state
                setUser((prev) => ({ ...prev, ...updatedData }));
                alert("Profile updated successfully!");
            } else {
                alert("Failed to update profile");
            }
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <UserContext.Provider value={{ user, login, logout, updateProfile }}>
            {children}
        </UserContext.Provider>
    );
};
