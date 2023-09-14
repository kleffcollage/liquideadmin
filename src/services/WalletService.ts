/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CardViewIEnumerableStandardResponse } from "./models/CardViewIEnumerableStandardResponse";
import type { DebitWalletModel } from "./models/DebitWalletModel";
import type { FundWalletModel } from "./models/FundWalletModel";
import type { Int32StandardResponse } from "./models/Int32StandardResponse";
import type { NGNTransferModel } from "./models/NGNTransferModel";
import type { PaymentViewStandardResponse } from "./models/PaymentViewStandardResponse";
import type { StringStandardResponse } from "./models/StringStandardResponse";
import type { TransactionViewPagedCollectionStandardResponse } from "./models/TransactionViewPagedCollectionStandardResponse";
import type { WalletModel } from "./models/WalletModel";
import type { WalletPinModel } from "./models/WalletPinModel";
import type { WalletTransferModel } from "./models/WalletTransferModel";
import type { WalletViewStandardResponse } from "./models/WalletViewStandardResponse";

import type { CancelablePromise } from "./core/CancelablePromise";
import { OpenAPI } from "./core/OpenAPI";
import { request as __request } from "./core/request";

export class WalletService {
  /**
   * @param requestBody
   * @returns WalletViewStandardResponse Success
   * @throws ApiError
   */
  public static createUserWallet(
    requestBody?: WalletModel
  ): CancelablePromise<WalletViewStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Wallet/create",
      body: requestBody,
      mediaType: "application/json-patch+json",
    });
  }

  /**
   * @param requestBody
   * @returns WalletViewStandardResponse Success
   * @throws ApiError
   */
  public static createTransactionPin(
    requestBody?: WalletPinModel
  ): CancelablePromise<WalletViewStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Wallet/create/pin",
      body: requestBody,
      mediaType: "application/json-patch+json",
    });
  }

  /**
   * @param userId
   * @returns Int32StandardResponse Success
   * @throws ApiError
   */
  public static getTransactionPin(
    userId: number
  ): CancelablePromise<Int32StandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Wallet/pin/{userId}",
      path: {
        userId: userId,
      },
    });
  }

  /**
   * @param requestBody
   * @returns StringStandardResponse Success
   * @throws ApiError
   */
  public static fundWallet(
    requestBody?: FundWalletModel
  ): CancelablePromise<StringStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Wallet/fund",
      body: requestBody,
      mediaType: "application/json-patch+json",
    });
  }

  /**
   * @param userId
   * @returns TransactionViewPagedCollectionStandardResponse Success
   * @throws ApiError
   */
  public static walletBalance(
    userId?: number
  ): CancelablePromise<TransactionViewPagedCollectionStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Wallet/balance",
      query: {
        userId: userId,
      },
    });
  }

  /**
   * @param transactionReference
   * @param transactionId
   * @returns PaymentViewStandardResponse Success
   * @throws ApiError
   */
  public static validatePayment(
    transactionReference: string | null,
    transactionId: number
  ): CancelablePromise<PaymentViewStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Wallet/payment/validate/{transactionReference}/{transactionId}",
      path: {
        transactionReference: transactionReference,
        transactionId: transactionId,
      },
    });
  }

  /**
   * @param requestBody
   * @returns WalletViewStandardResponse Success
   * @throws ApiError
   */
  public static transferToNigerianBank(
    requestBody?: NGNTransferModel
  ): CancelablePromise<WalletViewStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Wallet/transfer/nigerianbank",
      body: requestBody,
      mediaType: "application/json-patch+json",
    });
  }

  /**
   * @param userId
   * @param startDate
   * @param endDate
   * @param offset
   * @param limit
   * @returns TransactionViewPagedCollectionStandardResponse Success
   * @throws ApiError
   */
  public static statementOfAccount(
    userId: number,
    startDate: string,
    endDate: string,
    offset?: number | null,
    limit?: number | null
  ): CancelablePromise<TransactionViewPagedCollectionStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Wallet/statementOfAccount/{userId}/{startDate}/{endDate}",
      path: {
        userId: userId,
        startDate: startDate,
        endDate: endDate,
      },
      query: {
        Offset: offset,
        Limit: limit,
      },
    });
  }

  /**
   * @param requestBody
   * @returns WalletViewStandardResponse Success
   * @throws ApiError
   */
  public static transferToWallet(
    requestBody?: WalletTransferModel
  ): CancelablePromise<WalletViewStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Wallet/transfer",
      body: requestBody,
      mediaType: "application/json-patch+json",
    });
  }

  /**
   * @param userId
   * @param offset
   * @param limit
   * @param search
   * @returns TransactionViewPagedCollectionStandardResponse Success
   * @throws ApiError
   */
  public static listTransactions(
    userId: number,
    offset?: number | null,
    limit?: number | null,
    search?: string | null
  ): CancelablePromise<TransactionViewPagedCollectionStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Wallet/transaction/{userId}/list",
      path: {
        userId: userId,
      },
      query: {
        Offset: offset,
        Limit: limit,
        search: search,
      },
    });
  }

  /**
   * @param requestBody
   * @returns WalletViewStandardResponse Success
   * @throws ApiError
   */
  public static debitWallet(
    requestBody?: DebitWalletModel
  ): CancelablePromise<WalletViewStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Wallet/debit",
      body: requestBody,
      mediaType: "application/json-patch+json",
    });
  }

  /**
   * @param userId
   * @param offset
   * @param limit
   * @returns TransactionViewPagedCollectionStandardResponse Success
   * @throws ApiError
   */
  public static listCardsByUserId(
    userId: number,
    offset?: number | null,
    limit?: number | null
  ): CancelablePromise<TransactionViewPagedCollectionStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Wallet/card/{userId}/list",
      path: {
        userId: userId,
      },
      query: {
        Offset: offset,
        Limit: limit,
      },
    });
  }

  /**
   * @returns CardViewIEnumerableStandardResponse Success
   * @throws ApiError
   */
  public static listCards(): CancelablePromise<CardViewIEnumerableStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Wallet/cards/list",
    });
  }
}
