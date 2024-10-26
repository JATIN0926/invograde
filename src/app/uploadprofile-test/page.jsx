"use client";

import { useState } from "react";

export default function UploadImage() {
    const [file, setFile] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            console.log("Please select a file");
            return;
        }

        const data = new FormData();
        data.append("file", file);
        data.append("email", email);

        try {
            let response = await fetch("/api/users/uploadProfilePicture", {
                method: "POST",
                body: data,
            });
            response = await response.json();

            if (response.success) {
                console.log("Done");
            } else {
                console.log("Failed");
            }
        }
        catch(error) {
            console.log(error);
        }
    }
    return (
        <div className="">
            <form onSubmit={handleSubmit}>
                <input type="file" name="file" onChange={e => setFile(e.target.files?.[0])} />
                <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                <button type="submit">Upload</button>
            </form>
        </div>
    )
}
