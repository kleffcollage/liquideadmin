import { Box, Divider, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import axios from "axios";
import Naira from "lib/components/Utilities/Functions/Naira";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const validate = () => {
  const router = useRouter();
  const tx_ref = router.query.tx_ref;
  const transaction_id = router.query.transaction_id;
  const tx_status = router.query.status;
  const [transaction, setTransaction] = useState<any>();
  const [loading, setLoading] = useState(false);

  const validatePayment = async () => {
    try {
      const data = await (
        await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASEURL}api/wallet/payment/validate/${tx_ref}/${transaction_id}`
        )
      ).data;
      setLoading(false);
      if (data.status === true) {
        setTransaction(data.data.transaction);
        return;
      }
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (router.isReady) {
      validatePayment();
    }
  }, [router.isReady]);

  console.log({ transaction });
  return (
    <Flex w="full" h="100vh" justify="center" align="center">
      {transaction !== undefined ? (
        <Box w="50%" h="80vh" boxShadow="0px 0px 15px 2px rgba(0, 0, 0, 0.07)">
          <Box textAlign="center" p="3rem">
            <Icon as={AiOutlineCheckCircle} fontSize="3rem" />
            <Heading>Payment Successful</Heading>
          </Box>
          <Divider
            borderBottomWidth="5px"
            borderColor="brand.200"
            opacity="1"
          />
          <Text fontSize="1.2rem" py="2rem" textAlign="center">
            Your payment was received successfully
          </Text>
          <Box
            w="80%"
            p="3rem"
            fontSize="4rem"
            fontWeight="bold"
            bgColor="brand.200"
            color="#FFFFFF"
            textAlign="center"
            mx="auto"
          >
            <Text>{Naira(transaction?.amount)}</Text>
          </Box>

          <Text textAlign="center" pt="3rem" opacity=".6" fontSize=".9rem">
            Transaction Reference Id: {transaction?.transactionReference}
          </Text>
          <Text textAlign="center">
            You can now close this page and view transaction details on your
            mobile app.
          </Text>
        </Box>
      ) : (
        <Text>Confirming Payment...</Text>
      )}
    </Flex>
  );
};

export default validate;
