/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AirtimePurchaseInput } from "../models/AirtimePurchaseInput";
import type { AirtimePurchaseViewStandardResponse } from "../models/AirtimePurchaseViewStandardResponse";
import type { BaxiProvidersResponseStandardResponse } from "../models/BaxiProvidersResponseStandardResponse";
import type { CableSubscriptionModel } from "../models/CableSubscriptionModel";
import type { DataBundlePurchaseInput } from "../models/DataBundlePurchaseInput";
import type { DataProviderResponseStandardResponse } from "../models/DataProviderResponseStandardResponse";
import type { MultichoiceAccountResponseStandardResponse } from "../models/MultichoiceAccountResponseStandardResponse";
import type { ProviderBouquetResponseListStandardResponse } from "../models/ProviderBouquetResponseListStandardResponse";
import type { ProviderBundleResponseListStandardResponse } from "../models/ProviderBundleResponseListStandardResponse";
import type { PurchaseElectricityModel } from "../models/PurchaseElectricityModel";
import type { StringStandardResponse } from "../models/StringStandardResponse";
import type { SubscriptionModel } from "../models/SubscriptionModel";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class BillsService {
  /**
   * @returns BaxiProvidersResponseStandardResponse Success
   * @throws ApiError
   */
  public static getAirtimeProviders(): CancelablePromise<BaxiProvidersResponseStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Bills/airtime/providers",
    });
  }

  /**
   * @param requestBody
   * @returns AirtimePurchaseViewStandardResponse Success
   * @throws ApiError
   */
  public static purchaseAirtime(
    requestBody?: AirtimePurchaseInput
  ): CancelablePromise<AirtimePurchaseViewStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Bills/airtime/purchase",
      body: requestBody,
      mediaType: "application/json-patch+json",
    });
  }

  /**
   * @returns DataProviderResponseStandardResponse Success
   * @throws ApiError
   */
  public static getDataProviders(): CancelablePromise<DataProviderResponseStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Bills/airtime/data-providers",
    });
  }

  /**
   * @param requestBody
   * @returns AirtimePurchaseViewStandardResponse Success
   * @throws ApiError
   */
  public static purchaseDataBundle(
    requestBody?: DataBundlePurchaseInput
  ): CancelablePromise<AirtimePurchaseViewStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Bills/airtime/data-bundle",
      body: requestBody,
      mediaType: "application/json-patch+json",
    });
  }

  /**
   * @param serviceType
   * @param accountNumber
   * @returns ProviderBundleResponseListStandardResponse Success
   * @throws ApiError
   */
  public static getProviderBundles(
    serviceType: string | null,
    accountNumber: string | null
  ): CancelablePromise<ProviderBundleResponseListStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Bills/airtime/data-bundles/{ServiceType}/{AccountNumber}",
      path: {
        ServiceType: serviceType,
        AccountNumber: accountNumber,
      },
    });
  }

  /**
   * @param serviceType
   * @param accountNumber
   * @returns MultichoiceAccountResponseStandardResponse Success
   * @throws ApiError
   */
  public static validateMultiChoiceAccount(
    serviceType: string | null,
    accountNumber: string | null
  ): CancelablePromise<MultichoiceAccountResponseStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Bills/multichoice/multichoice-account/{ServiceType}/{AccountNumber}",
      path: {
        ServiceType: serviceType,
        AccountNumber: accountNumber,
      },
    });
  }

  /**
   * @param requestBody
   * @returns StringStandardResponse Success
   * @throws ApiError
   */
  public static renewSubscription(
    requestBody?: SubscriptionModel
  ): CancelablePromise<StringStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Bills/multichoice/renew-subscription",
      body: requestBody,
      mediaType: "application/json-patch+json",
    });
  }

  /**
   * @param serviceType
   * @returns ProviderBouquetResponseListStandardResponse Success
   * @throws ApiError
   */
  public static getProviderBouquets(
    serviceType: string | null
  ): CancelablePromise<ProviderBouquetResponseListStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Bills/multichoice/provider-bouquets/{serviceType}",
      path: {
        serviceType: serviceType,
      },
    });
  }

  /**
   * @param productCode
   * @param serviceType
   * @returns ProviderBouquetResponseListStandardResponse Success
   * @throws ApiError
   */
  public static getProviderAddons(
    productCode: string | null,
    serviceType: string | null
  ): CancelablePromise<ProviderBouquetResponseListStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Bills/multichoice/provider-addons/{ServiceType}/{ProductCode}",
      path: {
        ProductCode: productCode,
        ServiceType: serviceType,
      },
    });
  }

  /**
   * @param requestBody
   * @returns AirtimePurchaseViewStandardResponse Success
   * @throws ApiError
   */
  public static changeCableTvSubscription(
    requestBody?: CableSubscriptionModel
  ): CancelablePromise<AirtimePurchaseViewStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Bills/airtime/change-cable-tv-subscription",
      body: requestBody,
      mediaType: "application/json-patch+json",
    });
  }

  /**
   * @returns DataProviderResponseStandardResponse Success
   * @throws ApiError
   */
  public static getElectricityBillers(): CancelablePromise<DataProviderResponseStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Bills/airtime/electricity-billers",
    });
  }

  /**
   * @param requestBody
   * @returns AirtimePurchaseViewStandardResponse Success
   * @throws ApiError
   */
  public static purchasePostPaidElectricity(
    requestBody?: PurchaseElectricityModel
  ): CancelablePromise<AirtimePurchaseViewStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Bills/airtime/purchase-postpaid-electricity",
      body: requestBody,
      mediaType: "application/json-patch+json",
    });
  }

  /**
   * @param requestBody
   * @returns AirtimePurchaseViewStandardResponse Success
   * @throws ApiError
   */
  public static purchasePrePaidElectricity(
    requestBody?: PurchaseElectricityModel
  ): CancelablePromise<AirtimePurchaseViewStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Bills/airtime/purchase-prepaid-electricity",
      body: requestBody,
      mediaType: "application/json-patch+json",
    });
  }
}
