import React from "react";
import p from "../assets/img/p.png";
function SettingPage() {
    return (
        <div className="settings-container">
            <h2>Settings</h2>

            <div className="profile-header">
                <img src={p} alt="Manar" className="profile-avatar" />
                <div className="profile-info"/>
            </div>

            <div className="settings-section">
                <h4>Profile</h4>
                <p>Name: Manar</p>
                <p>Email: manar@gmail.com</p>
            </div>

            <div className="settings-section">
                <h4>Account</h4>
                <p>Password: *******</p>
            </div>

            <div className="settings-buttons">
                <button className="save-btn">Save Changes</button>
                <button className="cancel-btn">Cancel</button>
            </div>
        </div>
    );
}

export default SettingPage;