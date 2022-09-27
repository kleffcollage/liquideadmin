import { GetServerSideProps } from "next";

export default function Request() {
  return <>Reliefs</>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    redirect: {
      permanent: false,
      destination: "/admin/loans/requests",
    },
    props: {},
  };
};
