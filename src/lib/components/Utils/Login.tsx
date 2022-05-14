import {
	Box,
	Flex,
	HStack,
	Image,
	Text,
	Link,
	VStack,
	Button,
} from "@chakra-ui/react";
import { PrimaryInput } from "lib/components/Utilities/PrimaryInput";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { UserContext } from "lib/Utils/MainContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginModel } from "types/AppTypes";
import { useOperationMethod } from "react-openapi-client";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const schema = yup.object().shape({
	email: yup.string().required("Email is required"),
	password: yup.string().required("Password is required"),
});

function Login() {
	const [logUserIn, { data, loading, error }] =
		useOperationMethod("Admintoken");
	const router = useRouter();
	const { setAdmin } = useContext(UserContext);
	const { addToast } = useToasts();
	const {
		handleSubmit,
		register,
		formState: { errors, isValid },
	} = useForm<LoginModel>({
		resolver: yupResolver(schema),
		mode: "all",
	});

	const onSubmit = async (data: LoginModel) => {
		try {
			const result = await logUserIn(undefined, data);
			console.log(data);
			const value = result.data;
			console.log({ value });
			if (value.status) {
				addToast("Login Successful", {
					appearance: "success",
					autoDismiss: true,
				});
				setAdmin(value.data);
				Cookies.set("token", value.data.token);
				localStorage.setItem("admin", JSON.stringify(value.data));
				router.push("/admin/dashboard");
				return;
			}
			addToast(value.message, { appearance: "error", autoDismiss: true });
			return;
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Flex
			bgColor="black"
			w="full"
			h="100vh"
			justify="center"
			alignItems="center"
		>
			<HStack
				bgColor="white"
				h="90vh"
				w="65%"
				borderRadius="20px"
				boxShadow="0 2px 6px 6px rgba(0,0,0,0.03)"
				overflow="hidden"
			>
				<Box w="50%" bgColor="grey" h="100%">
					<Image src="/assets/image3.png" w="full" h="full" objectFit="cover" />
				</Box>
				<Box w="50%">
					<Box w="70%" mx="auto">
						<Text fontSize="1rem" fontWeight="medium">
							Hello!
						</Text>
						<Text
							fontSize="50px"
							fontWeight="bold"
							w={["100%", "100%"]}
							lineHeight="1"
						>
							Glad you're back!
						</Text>
						<Box display="flex" justifyContent="center" w="full" my="2rem">
							<Image src="/assets/padlock.png" />
						</Box>
						<form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
							<VStack w="full" spacing=".7rem">
								<PrimaryInput<LoginModel>
									register={register}
									name="email"
									error={errors.email}
									defaultValue=""
									type="email"
									placeholder="Chigozie"
								/>
								<PrimaryInput<LoginModel>
									register={register}
									name="password"
									error={errors.password}
									defaultValue=""
									type="password"
									placeholder="*********"
								/>
								<Button
									variant="solid"
									type="submit"
									isLoading={loading}
									disabled={!isValid}
									w="full"
									p="1.5rem 0"
									// mt={["2rem", "0"]}
								>
									Login
								</Button>
								<NextLink href="" passHref>
									<Link fontSize="1rem" fontWeight="semibold">
										I forgot my password
									</Link>
								</NextLink>
							</VStack>
						</form>
					</Box>
				</Box>
			</HStack>
		</Flex>
	);
}

export default Login;
