import { OpenAPI } from "Services";

export function withPageAuthRequired(gssp:any) {
    return async (context:any) => {
        const { req, res } = context;
        const token = req.cookies.token;


        if (!token) {
            // Redirect to login page
            return {
                redirect: {
                    destination: '/admin',
                    statusCode: 302
                }
            };
        }

        OpenAPI.TOKEN = token;
        OpenAPI.BASE = process.env.NEXT_PUBLIC_API_BASEURL as string;

        return await gssp(context); // Continue on to call `getServerSideProps` logic
    }
}