import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const withAuth = (Component: any) => {
  const AuthenticatedComponent = (props: any) => {
    const router = useRouter();
    const pathName = router.pathname;
    Cookies.set("path", pathName);
    const [token, setToken] = useState<string>();

    useEffect(() => {
      const getUser = async () => {
        const token = Cookies.get("token");
        setToken(token);
        if (!token) {
          router.push("/admin");
        }
      };
      getUser();
    }, []);

    return token ? <Component {...props} /> : null; // Render whatever you want while the authentication occurs
  };

  return AuthenticatedComponent;
};

export default withAuth;
