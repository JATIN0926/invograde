"use client";

import { useState } from "react";
import axios from "axios";

import FileBase from "react-file-base64";

const RegisterTest = () => {

    const [userData, setUserData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        profilePicture: "",
        bio: "",
        profile_title: "",
    });

    const handleSubmit = async (e) => {
        console.log(userData);
        e.preventDefault();
        try {
          const response = await axios.post("/api/users/signup", userData);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
    }

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10">
      <div className="text-3xl font-bold">Register Test For Backend</div>
      <form className="border-2 border-black rounded-xl flex flex-col gap-5 p-6">
        <input
          type="text"
          placeholder="Name"
          className="text-2xl border rounded-xl px-3 py-2"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Username"
          className="text-2xl border rounded-xl px-3 py-2"
          value={userData.username}
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          className="text-2xl border rounded-xl px-3 py-2"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="text-2xl border rounded-xl px-3 py-2"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        {/* <input
          type="text"
          placeholder="Profile Picture"
          className="text-2xl border rounded-xl px-3 py-2"
          value={userData.profilePicture}
          onChange={(e) =>
            setUserData({ ...userData, profilePicture: e.target.value })
          }
        /> */}
        <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setUserData({ ...userData, profilePicture: base64 })
            }
          ></FileBase>
        <input
          type="text"
          placeholder="Bio"
          className="text-2xl border rounded-xl px-3 py-2"
          value={userData.bio}
          onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
        />
        <input
          type="text"
          placeholder="Profile Title"
          className="text-2xl border rounded-xl px-3 py-2"
          value={userData.profile_title}
          onChange={(e) =>
            setUserData({ ...userData, profile_title: e.target.value })
          }
        />
        <button className="text-2xl font-bold border-2 border-black text-white hover:text-black bg-black hover:bg-white rounded-xl p-3" onClick={handleSubmit}>
          Register User
        </button>
      </form>
    </div>
  );
};

export default RegisterTest;
