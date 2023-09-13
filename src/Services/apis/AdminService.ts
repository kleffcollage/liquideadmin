/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoanTypeListStandardResponse } from "../models/LoanTypeListStandardResponse";
import type { LoanTypeStandardResponse } from "../models/LoanTypeStandardResponse";
import type { LoanViewPagedCollectionStandardResponse } from "../models/LoanViewPagedCollectionStandardResponse";
import type { LoanViewStandardResponse } from "../models/LoanViewStandardResponse";
import type { LoginModel } from "../models/LoginModel";
import type { Register } from "../models/Register";
import type { SavingPlanType } from "../models/SavingPlanType";
import type { SavingPlanTypeStandardResponse } from "../models/SavingPlanTypeStandardResponse";
import type { SavingPlanTypeViewListStandardResponse } from "../models/SavingPlanTypeViewListStandardResponse";
import type { SavingPlanTypeViewStandardResponse } from "../models/SavingPlanTypeViewStandardResponse";
import type { Service } from "../models/Service";
import type { ServiceListStandardResponse } from "../models/ServiceListStandardResponse";
import type { ServiceStandardResponse } from "../models/ServiceStandardResponse";
import type { TransactionViewPagedCollectionStandardResponse } from "../models/TransactionViewPagedCollectionStandardResponse";
import type { TransactionViewStandardResponse } from "../models/TransactionViewStandardResponse";
import type { UserMetricsStandardResponse } from "../models/UserMetricsStandardResponse";
import type { UserViewPagedCollectionStandardResponse } from "../models/UserViewPagedCollectionStandardResponse";
import type { UserViewStandardResponse } from "../models/UserViewStandardResponse";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class AdminService {
  /**
   * @param requestBody
   * @returns UserViewStandardResponse Success
   * @throws ApiError
   */
  public static authenticate(
    requestBody?: LoginModel
  ): CancelablePromise<UserViewStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Admin/token",
      body: requestBody,
      mediaType: "application/json-patch+json",
    });
  }

  /**
   * @param requestBody
   * @returns UserViewStandardResponse Success
   * @throws ApiError
   */
  public static create(
    requestBody?: Register
  ): CancelablePromise<UserViewStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Admin/create",
      body: requestBody,
      mediaType: "application/json-patch+json",
    });
  }

  /**
   * @param offset
   * @param limit
   * @param search
   * @returns UserViewPagedCollectionStandardResponse Success
   * @throws ApiError
   */
  public static listAdmins(
    offset?: number | null,
    limit?: number | null,
    search?: string | null
  ): CancelablePromise<UserViewPagedCollectionStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/list",
      query: {
        Offset: offset,
        Limit: limit,
        search: search,
      },
    });
  }

  /**
   * @param email
   * @returns UserViewStandardResponse Success
   * @throws ApiError
   */
  public static deleteUser(
    email: string | null
  ): CancelablePromise<UserViewStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/delete/{email}",
      path: {
        email: email,
      },
    });
  }

  /**
   * @param id
   * @returns UserViewPagedCollectionStandardResponse Success
   * @throws ApiError
   */
  public static getUserById(
    id: number
  ): CancelablePromise<UserViewPagedCollectionStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/user/get/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * @param offset
   * @param limit
   * @returns LoanViewPagedCollectionStandardResponse Success
   * @throws ApiError
   */
  public static listLoans(
    offset?: number | null,
    limit?: number | null
  ): CancelablePromise<LoanViewPagedCollectionStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/loans/list",
      query: {
        Offset: offset,
        Limit: limit,
      },
    });
  }

  /**
   * @returns UserMetricsStandardResponse Success
   * @throws ApiError
   */
  public static getUserMetrics(): CancelablePromise<UserMetricsStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/dashboard/metrics",
    });
  }

  /**
   * @param userId
   * @param offset
   * @param limit
   * @returns TransactionViewPagedCollectionStandardResponse Success
   * @throws ApiError
   */
  public static listUsersTransaction(
    userId: number,
    offset?: number | null,
    limit?: number | null
  ): CancelablePromise<TransactionViewPagedCollectionStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/transactions/user/{userId}",
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
   * @param offset
   * @param limit
   * @returns TransactionViewPagedCollectionStandardResponse Success
   * @throws ApiError
   */
  public static listTransactionsAdmin(
    offset?: number | null,
    limit?: number | null
  ): CancelablePromise<TransactionViewPagedCollectionStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/transactions",
      query: {
        Offset: offset,
        Limit: limit,
      },
    });
  }

  /**
   * @param id
   * @returns TransactionViewStandardResponse Success
   * @throws ApiError
   */
  public static getTransaction(
    id: number
  ): CancelablePromise<TransactionViewStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/transactions/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * @param userId
   * @param offset
   * @param limit
   * @returns LoanViewPagedCollectionStandardResponse Success
   * @throws ApiError
   */
  public static getUserLoan(
    userId: number,
    offset?: number | null,
    limit?: number | null
  ): CancelablePromise<LoanViewPagedCollectionStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/users/loans/{userId}",
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
   * @param id
   * @returns LoanViewStandardResponse Success
   * @throws ApiError
   */
  public static getLoan(
    id: number
  ): CancelablePromise<LoanViewStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/loans/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * @returns SavingPlanTypeViewListStandardResponse Success
   * @throws ApiError
   */
  public static listSavinGPlanTypes(): CancelablePromise<SavingPlanTypeViewListStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/savings/plans",
    });
  }

  /**
   * @param id
   * @returns SavingPlanTypeViewStandardResponse Success
   * @throws ApiError
   */
  public static getSavingPlanType(
    id: number
  ): CancelablePromise<SavingPlanTypeViewStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/savings/plans/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * @param requestBody
   * @returns SavingPlanTypeStandardResponse Success
   * @throws ApiError
   */
  public static updateSavingPlanType(
    requestBody?: SavingPlanType
  ): CancelablePromise<SavingPlanTypeStandardResponse> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/Admin/savings/plans/update",
      body: requestBody,
      mediaType: "application/json-patch+json",
    });
  }

  /**
   * @param offset
   * @param limit
   * @returns LoanViewPagedCollectionStandardResponse Success
   * @throws ApiError
   */
  public static listPendingPlans(
    offset?: number | null,
    limit?: number | null
  ): CancelablePromise<LoanViewPagedCollectionStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/loans/pending",
      query: {
        Offset: offset,
        Limit: limit,
      },
    });
  }

  /**
   * @param offset
   * @param limit
   * @returns LoanViewPagedCollectionStandardResponse Success
   * @throws ApiError
   */
  public static listApprovedLoan(
    offset?: number | null,
    limit?: number | null
  ): CancelablePromise<LoanViewPagedCollectionStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/loans/approved",
      query: {
        Offset: offset,
        Limit: limit,
      },
    });
  }

  /**
   * @param offset
   * @param limit
   * @returns LoanViewPagedCollectionStandardResponse Success
   * @throws ApiError
   */
  public static listRejectedLoan(
    offset?: number | null,
    limit?: number | null
  ): CancelablePromise<LoanViewPagedCollectionStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/loans/rejected",
      query: {
        Offset: offset,
        Limit: limit,
      },
    });
  }

  /**
   * @param offset
   * @param limit
   * @returns LoanViewPagedCollectionStandardResponse Success
   * @throws ApiError
   */
  public static listReviewedLoan(
    offset?: number | null,
    limit?: number | null
  ): CancelablePromise<LoanViewPagedCollectionStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/loans/reviewed",
      query: {
        Offset: offset,
        Limit: limit,
      },
    });
  }

  /**
   * @param offset
   * @param limit
   * @returns LoanViewPagedCollectionStandardResponse Success
   * @throws ApiError
   */
  public static listAcceptedLoan(
    offset?: number | null,
    limit?: number | null
  ): CancelablePromise<LoanViewPagedCollectionStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/loans/accepted",
      query: {
        Offset: offset,
        Limit: limit,
      },
    });
  }

  /**
   * @param id
   * @returns LoanViewStandardResponse Success
   * @throws ApiError
   */
  public static acceptLoan(
    id: number
  ): CancelablePromise<LoanViewStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/loans/accept/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * @param id
   * @returns LoanViewStandardResponse Success
   * @throws ApiError
   */
  public static rejectLoan(
    id: number
  ): CancelablePromise<LoanViewStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/loans/reject/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * @param id
   * @returns LoanViewStandardResponse Success
   * @throws ApiError
   */
  public static reviewLoan(
    id: number
  ): CancelablePromise<LoanViewStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/loans/review/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * @param id
   * @returns LoanViewStandardResponse Success
   * @throws ApiError
   */
  public static approveLoan(
    id: number
  ): CancelablePromise<LoanViewStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/loans/approve/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * @returns LoanTypeListStandardResponse Success
   * @throws ApiError
   */
  public static listLoanTypes(): CancelablePromise<LoanTypeListStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/loantypes",
    });
  }

  /**
   * @param id
   * @param interestRate
   * @returns LoanTypeStandardResponse Success
   * @throws ApiError
   */
  public static updateInterestRate(
    id: number,
    interestRate: string | null
  ): CancelablePromise<LoanTypeStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/loan/types/update/{id}/{interestRate}",
      path: {
        id: id,
        interestRate: interestRate,
      },
    });
  }

  /**
   * @param requestBody
   * @returns ServiceStandardResponse Success
   * @throws ApiError
   */
  public static createService(
    requestBody?: Service
  ): CancelablePromise<ServiceStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Admin/service/create",
      body: requestBody,
      mediaType: "application/json-patch+json",
    });
  }

  /**
   * @returns ServiceListStandardResponse Success
   * @throws ApiError
   */
  public static listServices(): CancelablePromise<ServiceListStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/services",
    });
  }

  /**
   * @param id
   * @returns ServiceStandardResponse Success
   * @throws ApiError
   */
  public static getService(
    id: number
  ): CancelablePromise<ServiceStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Admin/services/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * @param requestBody
   * @returns ServiceStandardResponse Success
   * @throws ApiError
   */
  public static updateService(
    requestBody?: Service
  ): CancelablePromise<ServiceStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Admin/services/update",
      body: requestBody,
      mediaType: "application/json-patch+json",
    });
  }
}
