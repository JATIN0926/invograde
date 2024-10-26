"use client";

import { useState } from "react";
import axios from "axios";

import { CardMedia } from "@mui/material";

const LoginTest = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const [user, setUser] = useState({profilePicture: ""});
    const [profilePic, setProfilePic] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(loginData);
        try {
          const response = await axios.post("/api/users/login", loginData);
          setUser(response.data.data);
          console.log(response.data.data);
          await axios.post("/api/users/getProfilePicture", {email: loginData.email})
          .then(res => setProfilePic(res.data.profilePicture.data))
          .catch(error => console.log(error));
        } catch (error) {
          console.error(error);
        }
    }
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <form className="w-3/4 flex flex-col gap-5 border-2 border-black rounded-xl p-10">
                <input
                    type="email"
                    placeholder="Email"
                    className="text-2xl border rounded-xl px-3 py-2"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="text-2xl border rounded-xl px-3 py-2"
                    value={loginData.password}
                    onChange={(e) =>
                        setLoginData({ ...loginData, password: e.target.value })
                    }
                />
                <button className="text-2xl font-bold border-2 border-black text-white hover:text-black bg-black hover:bg-white rounded-xl p-3" onClick={handleLogin}>
                    Login User
                </button>
            </form>

            <div className="">
                    <img src={profilePic} alt="" />
            </div>
        </div>
    )
}

export default LoginTest;
