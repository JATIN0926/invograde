"use client";

import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import Loader from "../common/Loader/Loader";

const withAuth = (Component) => {
  const ProtectedComponent = (props) => {
    const user = useSelector((state) => state.user.user);
    const router = useRouter();
    const pathname = usePathname();
    const hasRedirected = useRef(false);

    useEffect(() => {
      if (!user && !hasRedirected.current) {
        hasRedirected.current = true;
        toast("Please login to continue", {
          icon: "🔒",
        });
        router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
      }
    }, [user, pathname, router]);

    if (!user) return <Loader />;

    return <Component {...props} />;
  };

  return ProtectedComponent;
};

export default withAuth;
