import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfileComponent = () => {
    const { user, updateProfile } = useContext(UserContext);
    const [newEmail, setNewEmail] = useState(user ? user.email : "");

    const handleUpdate = () => {
        updateProfile({ email: newEmail });
    };

    return user ? (
        <div className="text-center mt-4">
            <h2>Edit Profile</h2>
            <input
                type="email"
                className="form-control w-50 mx-auto mb-2"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
            />
            <button className="btn btn-success" onClick={handleUpdate}>Update Profile</button>
        </div>
    ) : (
        <h2 className="text-center mt-4">Please log in to edit your profile.</h2>
    );
};

export default ProfileComponent;
