import {
  Box,
  Circle,
  Divider,
  Flex,
  GridItem,
  ListItem,
  OrderedList,
  Select,
  SimpleGrid,
  Square,
  Text,
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { UserMetricsStandardResponse } from "Services";
import { BarChart } from "../Charts/BarChart";
import Donut from "../Charts/Donut";
import LineChart from "../Charts/LineChart";
import MiniCards from "../Utilities/MiniCards";
import ValueBox from "../Utilities/ValueBox";
//Fixed couple things

function Dashboard({ data }: { data: UserMetricsStandardResponse }) {
  const metrics = data?.data;
  return (
    <VStack spacing="2rem" align="flex-start">
      <Box w="full">
        <Flex justifyContent="space-between" mb="1rem" align="center">
          <Text fontSize="1rem" fontWeight="bold">
            User
          </Text>
          <HStack
            justifyContent="flex-end"
            align="center"
            spacing={6}
            cursor="pointer"
          >
            <Flex
              w="180px"
              h="36px"
              bgColor="rgba(0,0,0,.03)"
              justify="space-between"
              alignItems="center"
              px="1.1rem"
            >
              <Text color="black" fontSize="14px" fontWeight="600">
                Generate Report
              </Text>
              <i
                className="far fa-file-export"
                style={{ color: "rgba(0, 0, 0, 0.3)" }}
              ></i>
            </Flex>

            <Select
              placeholder="Weekly"
              borderRadius="3px"
              w="95px"
              color="rgba(0, 0, 0, 0.4)"
              border="1px solid rgba(0,0,0,0.8)"
              fontSize="12px"
              bgColor="white"
              fontWeight="500"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
        </Flex>
        <SimpleGrid columns={6} gap="1rem">
          <GridItem colSpan={1}>
            <MiniCards
              label="All Users"
              increase="12%"
              value={metrics?.allUsers}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <MiniCards
              label="New Users"
              increase="12%"
              value={metrics?.newUsers}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <MiniCards label="Returning Users" increase="12%" value="1,798" />
          </GridItem>
          <GridItem colSpan={2}>
            <Box
              bgColor="white"
              fontWeight="semibold"
              borderRadius="6px"
              boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
              h="12rem"
              padding="1rem 0"
            >
              <Flex justifyContent="space-between" px="1rem">
                <Text fontSize="12px">Active Users</Text>
              </Flex>
              <Box
                width="full"
                h="9rem"
                fontSize=".7rem"
                px="1rem"
                position="relative"
              >
                <LineChart />
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box
              bgColor="white"
              fontWeight="semibold"
              borderRadius="6px"
              boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
              h="12rem"
              padding="1rem 0"
              overflow="hidden"
            >
              <Flex justifyContent="space-between" px="1rem">
                <Text fontSize="12px">Devices</Text>
              </Flex>
              <Box width="full" h="9rem" pl=".5rem">
                <Donut />
              </Box>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box>
      <Box w="full">
        <Flex justifyContent="space-between" mb="1rem">
          <Text fontSize="1rem" fontWeight="bold">
            Transactions
          </Text>
        </Flex>
        <SimpleGrid columns={6} gap="1rem">
          <GridItem colSpan={2}>
            <Box
              bgColor="white"
              fontWeight="semibold"
              borderRadius="6px"
              boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
              h="14rem"
              padding="1rem 0"
            >
              <Flex justifyContent="space-between" px="1rem">
                <Text fontSize="12px">Revenue</Text>
              </Flex>
              <Box width="full" h="11rem" fontSize=".7rem" px="1rem">
                <LineChart />
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box
              bgColor="white"
              fontWeight="semibold"
              borderRadius="6px"
              boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
              h="14rem"
              padding="1rem 0"
              overflow="hidden"
            >
              <Flex justifyContent="space-between" px="1rem" mb="-1rem">
                <Text fontSize="12px">Transaction Value</Text>
              </Flex>
              <Box width="85%" h="9.5rem" fontSize=".7rem" pr="1rem">
                <BarChart />
              </Box>
              <HStack gap="2" px="1rem">
                <ValueBox title="All Services" value="737" />
                <ValueBox title="Completed" value="151" />
                <ValueBox title="Pending" value="19" />
                <ValueBox title="Failed" value="321" />
              </HStack>
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box
              bgColor="white"
              fontWeight="semibold"
              borderRadius="6px"
              boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
              h="14rem"
              padding="1rem 0"
            >
              <Flex justifyContent="space-between" px="1rem" mb="-1rem">
                <Text fontSize="12px">Transaction Volume</Text>
              </Flex>
              <Box width="85%" h="9.5rem" fontSize=".7rem" pr="1rem">
                <BarChart />
              </Box>
              <HStack gap="2" px="1rem">
                <ValueBox title="All Services" value="737" />
                <ValueBox title="Completed" value="151" />
                <ValueBox title="Pending" value="19" />
                <ValueBox title="Failed" value="321" />
              </HStack>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box>
      <Box w="full">
        <SimpleGrid columns={4} gap="1rem">
          <GridItem colSpan={1}>
            <Box
              bgColor="white"
              fontWeight="semibold"
              borderRadius="6px"
              boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
              minH="10rem"
            >
              <Flex
                justifyContent="space-between"
                mb=".5rem"
                alignItems="center"
                padding="1.5rem 1rem .4rem"
              >
                <Text fontSize="1rem">Users</Text>
                <Select placeholder="Value" w="45%">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>
              <Divider />
              <OrderedList p="1rem" spacing="1rem">
                <ListItem>
                  <Flex alignItems="center">
                    <Circle bgColor="black" color="white" size="3rem" mx="1rem">
                      EP
                    </Circle>
                    <Box>
                      <Text fontSize=".9rem">Ella Pope</Text>
                      <Text fontSize="10px" fontWeight="medium">
                        928328899
                      </Text>
                    </Box>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex alignItems="center">
                    <Circle bgColor="black" color="white" size="3rem" mx="1rem">
                      EP
                    </Circle>
                    <Box>
                      <Text fontSize=".9rem">Ella Pope</Text>
                      <Text fontSize="10px" fontWeight="medium">
                        928328899
                      </Text>
                    </Box>
                  </Flex>
                </ListItem>
              </OrderedList>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box
              bgColor="white"
              fontWeight="semibold"
              borderRadius="6px"
              boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
              minH="10rem"
            >
              <Flex
                justifyContent="space-between"
                mb=".5rem"
                alignItems="center"
                padding="1.5rem 1rem .4rem"
              >
                <Text fontSize="1rem">Services</Text>
                <Select placeholder="Value" w="45%">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>
              <Divider />
              <OrderedList p="1rem" spacing="1rem">
                <ListItem>
                  <Flex alignItems="center">
                    <Square
                      bgColor="black"
                      color="white"
                      size="3rem"
                      mx="1rem"
                      overflow="hidden"
                      borderRadius="6px"
                    >
                      <Image src="" objectFit="cover" />
                    </Square>
                    <Box>
                      <Text fontSize=".9rem">DSTV</Text>
                    </Box>
                  </Flex>
                </ListItem>
              </OrderedList>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box
              bgColor="white"
              fontWeight="semibold"
              borderRadius="6px"
              boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
              minH="10rem"
            >
              <Flex
                justifyContent="space-between"
                mb=".5rem"
                alignItems="center"
                padding="1.5rem 1rem .4rem"
              >
                <Text fontSize="1rem">Location</Text>
                <Select placeholder="Value" w="45%">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>
              <Divider />
              <OrderedList p="1rem" spacing="1rem">
                <ListItem>
                  <Flex alignItems="center">
                    <Circle bgColor="black" color="white" size="3rem" mx="1rem">
                      <i
                        className="fas fa-map-pin"
                        style={{ color: "white", fontSize: "1.3rem" }}
                      ></i>
                    </Circle>
                    <Box>
                      <Text fontSize=".9rem">Ella Pope</Text>
                      <Text fontSize="10px" fontWeight="medium">
                        928328899
                      </Text>
                    </Box>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex alignItems="center">
                    <Circle bgColor="black" color="white" size="3rem" mx="1rem">
                      <i
                        className="fas fa-map-pin"
                        style={{ color: "white", fontSize: "1.3rem" }}
                      ></i>
                    </Circle>
                    <Box>
                      <Text fontSize=".9rem">Ella Pope</Text>
                      <Text fontSize="10px" fontWeight="medium">
                        928328899
                      </Text>
                    </Box>
                  </Flex>
                </ListItem>
              </OrderedList>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box>
    </VStack>
  );
}

export default Dashboard;
