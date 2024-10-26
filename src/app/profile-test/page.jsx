"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function ProfileTest() {
    const [user, setUser] = useState(null);
    const [profilePicture, setProfilePicture] = useState(null);

    const logout = async () => {
        await axios.get("/api/users/logout")
        .then(res => {
            if (res.status === 200) {
                console.log(res);
                setUser(null);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        const getProfile = async (email) => {
            await axios.post("/api/users/getProfilePicture", {email})
            .then(res => {
                if (res.status === 200) {
                    console.log("-->", res);
                    setProfilePicture(res.data.profilePicture);
                    console.log(res.data.profilePicture);
                }
            })
            .catch(error => {
                console.log(error);
            });
        }

        const getAuthenticatedUser = async () => {
            await axios.get("/api/users/me")
            .then(res => {
                if (res.status === 200) {
                    setUser(res.data.data);
                    console.log(res.data.data);
                    getProfile(res.data.data.email);
                }
            })
            .catch(error => {
                console.log(error);
            });
        }
        getAuthenticatedUser();
    }, []);

    return user ? (
        <div className="w-full h-screen overflow-hidden flex flex-col items-center justify-center gap-5">
            {user.username}

            <img src={profilePicture} alt="nothing yet" className="w-96 h-96" />

            {/* <button className="text-2xl font-bold border-2 border-black text-white hover:text-black bg-black hover:bg-white rounded-xl p-3" onClick={getProfile}>Get Profile</button> */}

            <button className="text-2xl font-bold border-2 border-black text-white hover:text-black bg-black hover:bg-white rounded-xl p-3" onClick={logout}>Logout</button>
        </div>
    ) : (
        <div className="w-full h-screen overflow-hidden flex items-center justify-center text-[60px]">Loading...</div>
    )
}
