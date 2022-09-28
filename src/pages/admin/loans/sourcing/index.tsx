import { Box, Flex } from "@chakra-ui/react";
import { withPageAuthRequired } from "lib/components/hocs/withPageAuthRequired";
import withAuth from "lib/components/Utilities/Auth";
import { filterPagingSearchOptions } from "lib/components/Utilities/Functions/utils";
import SecondaryTab from "lib/components/Utilities/SecondaryTab";
import Sourcing from "lib/components/Utils/LoansTabs/Sourcing";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  AdminService,
  LoanViewPagedCollectionStandardResponse,
} from "Services";

interface loanType {
  request: LoanViewPagedCollectionStandardResponse;
  review: LoanViewPagedCollectionStandardResponse;
  sourcing: LoanViewPagedCollectionStandardResponse;
  approval: LoanViewPagedCollectionStandardResponse;
}

function LoanSourcing({ request, review, sourcing, approval }: loanType) {
  const [currentTab, setCurrentTab] = useState("sourcing");
  const router = useRouter();
  const navigateTabs = (tabname: string) => {
    router.push(`/admin/loans/${tabname}`);
  };

  return (
    <Box w="100%" p="0rem" minH="90vh">
      {/* <Flex justify="flex-end">
        <Flex
          as="button"
          w="132px"
          h="2.3rem"
          borderRadius="3px"
          border="2px solid rgba(25,25,25,1)"
          align="center"
          bgColor="white"
          justify="center"
          fontSize="14.5px"
          fontWeight="bold"
        >
          Loans Setup
        </Flex>
      </Flex> */}
      <Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt="2rem">
        <Box onClick={() => navigateTabs("requests")}>
          <SecondaryTab
            tabname="requests"
            num={request.data?.size}
            icon="fa-arrow-down"
            currentTab={currentTab}
          />
        </Box>
        <Box onClick={() => navigateTabs("review")}>
          <SecondaryTab
            tabname="review"
            num={review.data?.size}
            icon="fa-fingerprint"
            currentTab={currentTab}
          />
        </Box>
        <Box onClick={() => navigateTabs("sourcing")}>
          <SecondaryTab
            tabname="sourcing"
            num={sourcing.data?.size}
            icon="fa-file-search"
            currentTab={currentTab}
          />
        </Box>
        <Box onClick={() => navigateTabs("approval")}>
          <SecondaryTab
            tabname="approval"
            num={approval.data?.size}
            icon="fa-user-check"
            currentTab={currentTab}
          />
        </Box>
      </Flex>
      <Sourcing data={sourcing} />
    </Box>
  );
}
export default withAuth(LoanSourcing);

export const getServerSideProps: GetServerSideProps = withPageAuthRequired(
  async (ctx: any) => {
    const pagingOptions = filterPagingSearchOptions(ctx);
    try {
      const request =
        (await AdminService.listPendingPlans()) as LoanViewPagedCollectionStandardResponse;
      const review =
        (await AdminService.listAcceptedLoan()) as LoanViewPagedCollectionStandardResponse;
      const sourcing = (await AdminService.listReviewedLoan(
        pagingOptions.offset,
        pagingOptions.limit
      )) as LoanViewPagedCollectionStandardResponse;
      const approval =
        (await AdminService.listApprovedLoan()) as LoanViewPagedCollectionStandardResponse;
      return {
        props: {
          request,
          review,
          sourcing,
          approval,
        },
      };
    } catch (error: any) {
      console.log(error);
      return {
        props: {
          request: [],
        },
      };
    }
  }
);
