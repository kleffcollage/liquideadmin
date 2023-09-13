/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "Services/core/CancelablePromise";
import { OpenAPI } from "Services/core/OpenAPI";
import { request as __request } from "Services/core/request";

export class CallBackService {
  /**
   * @returns any Success
   * @throws ApiError
   */
  public static transferCallback(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/CallBack/transfer/callback",
    });
  }
}
