/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './workflow.pb';
import {
  GRPC_ENROLLER_CLIENT_SETTINGS,
  GRPC_AUTHENTICATOR_CLIENT_SETTINGS
} from './workflow.pbconf';
/**
 * Service client implementation for face_authenticator.Enroller
 */
@Injectable({ providedIn: 'any' })
export class EnrollerClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /face_authenticator.Enroller/enroll
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.EnrollResponse>>
     */
    enroll: (
      requestData: thisProto.EnrollRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.EnrollResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/face_authenticator.Enroller/enroll',
        requestData,
        requestMetadata,
        requestClass: thisProto.EnrollRequest,
        responseClass: thisProto.EnrollResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_ENROLLER_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'face_authenticator.Enroller',
      settings
    );
  }

  /**
   * Unary RPC for /face_authenticator.Enroller/enroll
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.EnrollResponse>
   */
  enroll(
    requestData: thisProto.EnrollRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.EnrollResponse> {
    return this.$raw
      .enroll(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
/**
 * Service client implementation for face_authenticator.Authenticator
 */
@Injectable({ providedIn: 'any' })
export class AuthenticatorClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /face_authenticator.Authenticator/authenticate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AuthenticateResponse>>
     */
    authenticate: (
      requestData: thisProto.AuthenticateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.AuthenticateResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/face_authenticator.Authenticator/authenticate',
        requestData,
        requestMetadata,
        requestClass: thisProto.AuthenticateRequest,
        responseClass: thisProto.AuthenticateResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_AUTHENTICATOR_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'face_authenticator.Authenticator',
      settings
    );
  }

  /**
   * Unary RPC for /face_authenticator.Authenticator/authenticate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AuthenticateResponse>
   */
  authenticate(
    requestData: thisProto.AuthenticateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.AuthenticateResponse> {
    return this.$raw
      .authenticate(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
