import { Box, Circle, Flex, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { GetServerSideProps } from "next";
import {
  AdminService,
  SavingPlanType,
  SavingPlanTypeView,
  UserService,
  UserView,
  UserViewPagedCollectionStandardResponse,
} from "Services";
import { useRouter } from "next/router";
import Tab from "lib/components/Utilities/Tab";
import Profile from "lib/components/Utils/UsersTab/Profile";
import Pagination from "lib/components/Utilities/Pagination";
import { filterPagingSearchOptions } from "lib/components/Utilities/Functions/utils";
import { withPageAuthRequired } from "lib/components/hocs/withPageAuthRequired";
import SearchComponent from "lib/components/Utilities/SearchComponent";
import withAuth from "lib/components/Utilities/Auth";
import AdminProfile from "lib/components/Utils/SettingsTab/AdminProfile";
import AddNewAdmin from "lib/components/Modals/AddNewAdmin";
import Statistics from "lib/components/Utils/SavingsTab/Statistics";

function SavingsStatistics({
  allSavingsPlan,
  savingsId,
  singlePlan,
}: {
  allSavingsPlan: SavingPlanTypeView[];
  savingsId: number;
  singlePlan: SavingPlanType;
}) {
  const [currentTab, setCurrentTab] = useState("statistics");
  const router = useRouter();
  const navigateTabs = (tabname: string) => {
    router.push(`/admin/savings/${singlePlan.id}/${tabname}`);
  };
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Box w="100%" bgColor="white" p="1.5rem" minH="90vh">
        <HStack spacing="1rem" h="auto" alignItems="flex-start">
          <Box w="20%">
            <Box bgColor="white" h="90vh" position="relative">
              <SearchComponent border={false} />
              {allSavingsPlan
                ?.slice(0, 3)
                .map((savings: SavingPlanType, i: number) => {
                  return (
                    <Box
                      onClick={() => {
                        router.push({
                          pathname: `/admin/savings/${savings.id}/statistics`,
                          query: { ...router.query },
                        });
                      }}
                    >
                      <Flex
                        borderTop="1px solid rgba(36,68,115,0.3)"
                        h="40px"
                        role="group"
                        cursor="pointer"
                        alignItems="center"
                        transition="all .2s ease"
                        _hover={{ bgColor: "brand.100" }}
                        bgColor={
                          savings.id == savingsId ? "brand.100" : "unset"
                        }
                      >
                        <Text
                          color={savings.id == savingsId ? "white" : "black"}
                          fontSize="14px"
                          textTransform="capitalize"
                          fontWeight="600"
                          pl="1.2rem"
                          _groupHover={{ color: "white" }}
                        >
                          {savings.name}
                        </Text>
                      </Flex>
                    </Box>
                  );
                })}
            </Box>
          </Box>
          <Box w="80%" bgColor="white" p="1.5rem" minH="90vh">
            <Flex alignItems="center" fontWeight="bold">
              <Box>
                <Text fontSize="1.5rem">{singlePlan?.name}</Text>
              </Box>
            </Flex>
            <Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt="2rem">
              <Box onClick={() => navigateTabs("statistics")}>
                <Tab tabname="statistics" currentTab={currentTab} />
              </Box>
              <Box onClick={() => navigateTabs("setup")}>
                <Tab tabname="setup" currentTab={currentTab} />
              </Box>
            </Flex>
            <Statistics plan={singlePlan} />
          </Box>
        </HStack>
      </Box>
    </>
  );
}
export default withAuth(SavingsStatistics);

export const getServerSideProps: GetServerSideProps = withPageAuthRequired(
  async (ctx: any) => {
    ctx.query.limit = 3;
    const pagingOptions = filterPagingSearchOptions(ctx);
    const savingsId = ctx.query.savingsId;

    try {
      const allSavingsPlan = (await AdminService.listSavinGPlanTypes()).data;
      const singlePlan = (await AdminService.getSavingPlanType(savingsId))
        .data as UserViewPagedCollectionStandardResponse;

      //   console.log({ allUsers, userId, singleUser });

      return {
        props: {
          allSavingsPlan,
          savingsId,
          singlePlan,
        },
      };
    } catch (error) {
      return {
        props: {
          allUsers: [],
        },
      };
    }
  }
);
