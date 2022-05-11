import { Box } from "@chakra-ui/react";
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

	return (
		<>
			<Header />
			<Box as="main">{children}</Box>
			<Footer />
		</>
	);
};

export default Layout;
