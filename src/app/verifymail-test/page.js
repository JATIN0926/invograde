"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function verifyEmail() {
    const searchParams = useSearchParams();

    const [otp, setOTP] = useState("");

    const handleSubmitOtp = async (event) => {
        event.preventDefault();
        const id = searchParams.get('id');
        console.log(id, otp)
        await axios.post("/api/users/verifyemail", {id, otp})
        .then(res => console.log(res))
        .catch(error => console.log("error while verifying otp : ", error));
    }
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <form className="flex flex-col gap-5">
                <input type="text" placeholder="enter your otp" value={otp} onChange={event => setOTP(event.target.value)} />
                <button onClick={handleSubmitOtp}>verify</button>
            </form>
        </div>
    )
}