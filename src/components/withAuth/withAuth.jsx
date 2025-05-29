"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";

const withAuth = (Component) => {
  const ProtectedComponent = (props) => {
    const user = useSelector((state) => state.user.user);
    const router = useRouter();
    const hasRedirected = useRef(false); 

    useEffect(() => {
      if (!user && !hasRedirected.current) {
        hasRedirected.current = true;
        toast("Please login to continue", {
          icon: "🔒",
        });

        router.replace("/login");
      }
    }, [user, router]);

    if (!user) return <Loader />;

    return <Component {...props} />;
  };

  return ProtectedComponent;
};

export default withAuth;
