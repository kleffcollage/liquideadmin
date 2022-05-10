import { UserContext } from "lib/Utils/MainContext";
import { useRouter } from "next/router";
import { ReactNode, useContext, useEffect } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const { user, setUser, admin, setAdmin } = useContext(UserContext);

  useEffect(() => {
    const isUser = localStorage.getItem("user") as unknown as string;
    if (isUser != null || undefined) {
      setUser(JSON.parse(isUser));
      return;
    }
    const isAdmin = localStorage.getItem("admin") as unknown as string;
    if (isAdmin != null || undefined) {
      setAdmin(JSON.parse(isAdmin));
      return;
    }
  }, []);

  return (
    <>
      <div>Nothing here</div>
    </>
  );
};

export default Layout;
