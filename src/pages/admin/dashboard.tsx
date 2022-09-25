import { withPageAuthRequired } from "lib/components/hocs/withPageAuthRequired";
import withAuth from "lib/components/Utilities/Auth";
import Auth from "lib/components/Utilities/Auth";
import Dashboard from "lib/components/Utils/Dashboard";
import { GetServerSideProps } from "next";
import { AdminService, UserMetricsStandardResponse } from "Services";

function dashboard({ data }: { data: UserMetricsStandardResponse }) {
  return <Dashboard data={data} />;
}

export default withAuth(dashboard);

export const getServerSideProps: GetServerSideProps = withPageAuthRequired(
  async () => {
    try {
      const data =
        (await AdminService.getUserMetrics()) as UserMetricsStandardResponse;
      return {
        props: {
          data: data,
        },
      };
    } catch (error: any) {
      console.log(error);
      return {
        props: {
          data: [],
        },
      };
    }
  }
);
