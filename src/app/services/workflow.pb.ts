/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions,
  uint8ArrayToBase64
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export enum EnrollStatus {
  ENROLL_STATUS_OK = 0,
  ENROLL_STATUS_ERROR = 1
}
export enum AuthenticateStatus {
  AUTHENTICATE_STATUS_OK = 0,
  AUTHENTICATE_STATUS_ERROR = 1
}
/**
 * Message implementation for face_authenticator.Point
 */
export class Point implements GrpcMessage {
  static id = 'face_authenticator.Point';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Point();
    Point.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Point) {
    _instance.x = _instance.x || '0';
    _instance.y = _instance.y || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Point, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.x = _reader.readInt64String();
          break;
        case 2:
          _instance.y = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    Point.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Point, _writer: BinaryWriter) {
    if (_instance.x) {
      _writer.writeInt64String(1, _instance.x);
    }
    if (_instance.y) {
      _writer.writeInt64String(2, _instance.y);
    }
  }

  private _x?: string;
  private _y?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Point to deeply clone from
   */
  constructor(_value?: RecursivePartial<Point.AsObject>) {
    _value = _value || {};
    this.x = _value.x;
    this.y = _value.y;
    Point.refineValues(this);
  }
  get x(): string | undefined {
    return this._x;
  }
  set x(value: string | undefined) {
    this._x = value;
  }
  get y(): string | undefined {
    return this._y;
  }
  set y(value: string | undefined) {
    this._y = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Point.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Point.AsObject {
    return {
      x: this.x,
      y: this.y
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Point.AsProtobufJSON {
    return {
      x: this.x,
      y: this.y
    };
  }
}
export module Point {
  /**
   * Standard JavaScript object representation for Point
   */
  export interface AsObject {
    x?: string;
    y?: string;
  }

  /**
   * Protobuf JSON representation for Point
   */
  export interface AsProtobufJSON {
    x?: string;
    y?: string;
  }
}

/**
 * Message implementation for face_authenticator.FaceCoordinates
 */
export class FaceCoordinates implements GrpcMessage {
  static id = 'face_authenticator.FaceCoordinates';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FaceCoordinates();
    FaceCoordinates.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FaceCoordinates) {
    _instance.topLeft = _instance.topLeft || undefined;
    _instance.bottomRight = _instance.bottomRight || undefined;
    _instance.leftEye = _instance.leftEye || undefined;
    _instance.rightEye = _instance.rightEye || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FaceCoordinates,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.topLeft = new Point();
          _reader.readMessage(
            _instance.topLeft,
            Point.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.bottomRight = new Point();
          _reader.readMessage(
            _instance.bottomRight,
            Point.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.leftEye = new Point();
          _reader.readMessage(
            _instance.leftEye,
            Point.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.rightEye = new Point();
          _reader.readMessage(
            _instance.rightEye,
            Point.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    FaceCoordinates.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FaceCoordinates,
    _writer: BinaryWriter
  ) {
    if (_instance.topLeft) {
      _writer.writeMessage(
        1,
        _instance.topLeft as any,
        Point.serializeBinaryToWriter
      );
    }
    if (_instance.bottomRight) {
      _writer.writeMessage(
        2,
        _instance.bottomRight as any,
        Point.serializeBinaryToWriter
      );
    }
    if (_instance.leftEye) {
      _writer.writeMessage(
        3,
        _instance.leftEye as any,
        Point.serializeBinaryToWriter
      );
    }
    if (_instance.rightEye) {
      _writer.writeMessage(
        4,
        _instance.rightEye as any,
        Point.serializeBinaryToWriter
      );
    }
  }

  private _topLeft?: Point;
  private _bottomRight?: Point;
  private _leftEye?: Point;
  private _rightEye?: Point;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FaceCoordinates to deeply clone from
   */
  constructor(_value?: RecursivePartial<FaceCoordinates.AsObject>) {
    _value = _value || {};
    this.topLeft = _value.topLeft ? new Point(_value.topLeft) : undefined;
    this.bottomRight = _value.bottomRight
      ? new Point(_value.bottomRight)
      : undefined;
    this.leftEye = _value.leftEye ? new Point(_value.leftEye) : undefined;
    this.rightEye = _value.rightEye ? new Point(_value.rightEye) : undefined;
    FaceCoordinates.refineValues(this);
  }
  get topLeft(): Point | undefined {
    return this._topLeft;
  }
  set topLeft(value: Point | undefined) {
    this._topLeft = value;
  }
  get bottomRight(): Point | undefined {
    return this._bottomRight;
  }
  set bottomRight(value: Point | undefined) {
    this._bottomRight = value;
  }
  get leftEye(): Point | undefined {
    return this._leftEye;
  }
  set leftEye(value: Point | undefined) {
    this._leftEye = value;
  }
  get rightEye(): Point | undefined {
    return this._rightEye;
  }
  set rightEye(value: Point | undefined) {
    this._rightEye = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    FaceCoordinates.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FaceCoordinates.AsObject {
    return {
      topLeft: this.topLeft ? this.topLeft.toObject() : undefined,
      bottomRight: this.bottomRight ? this.bottomRight.toObject() : undefined,
      leftEye: this.leftEye ? this.leftEye.toObject() : undefined,
      rightEye: this.rightEye ? this.rightEye.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): FaceCoordinates.AsProtobufJSON {
    return {
      topLeft: this.topLeft ? this.topLeft.toProtobufJSON(options) : null,
      bottomRight: this.bottomRight
        ? this.bottomRight.toProtobufJSON(options)
        : null,
      leftEye: this.leftEye ? this.leftEye.toProtobufJSON(options) : null,
      rightEye: this.rightEye ? this.rightEye.toProtobufJSON(options) : null
    };
  }
}
export module FaceCoordinates {
  /**
   * Standard JavaScript object representation for FaceCoordinates
   */
  export interface AsObject {
    topLeft?: Point.AsObject;
    bottomRight?: Point.AsObject;
    leftEye?: Point.AsObject;
    rightEye?: Point.AsObject;
  }

  /**
   * Protobuf JSON representation for FaceCoordinates
   */
  export interface AsProtobufJSON {
    topLeft?: Point.AsProtobufJSON | null;
    bottomRight?: Point.AsProtobufJSON | null;
    leftEye?: Point.AsProtobufJSON | null;
    rightEye?: Point.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for face_authenticator.FaceRequest
 */
export class FaceRequest implements GrpcMessage {
  static id = 'face_authenticator.FaceRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FaceRequest();
    FaceRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FaceRequest) {
    _instance.id = _instance.id || '';
    _instance.face = _instance.face || new Uint8Array();
    _instance.faceCoordinates = _instance.faceCoordinates || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FaceRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.face = _reader.readBytes();
          break;
        case 3:
          _instance.faceCoordinates = new FaceCoordinates();
          _reader.readMessage(
            _instance.faceCoordinates,
            FaceCoordinates.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    FaceRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FaceRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.face && _instance.face.length) {
      _writer.writeBytes(2, _instance.face);
    }
    if (_instance.faceCoordinates) {
      _writer.writeMessage(
        3,
        _instance.faceCoordinates as any,
        FaceCoordinates.serializeBinaryToWriter
      );
    }
  }

  private _id?: string;
  private _face?: Uint8Array;
  private _faceCoordinates?: FaceCoordinates;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FaceRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<FaceRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.face = _value.face;
    this.faceCoordinates = _value.faceCoordinates
      ? new FaceCoordinates(_value.faceCoordinates)
      : undefined;
    FaceRequest.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get face(): Uint8Array | undefined {
    return this._face;
  }
  set face(value: Uint8Array | undefined) {
    this._face = value;
  }
  get faceCoordinates(): FaceCoordinates | undefined {
    return this._faceCoordinates;
  }
  set faceCoordinates(value: FaceCoordinates | undefined) {
    this._faceCoordinates = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    FaceRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FaceRequest.AsObject {
    return {
      id: this.id,
      face: this.face ? this.face.subarray(0) : new Uint8Array(),
      faceCoordinates: this.faceCoordinates
        ? this.faceCoordinates.toObject()
        : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): FaceRequest.AsProtobufJSON {
    return {
      id: this.id,
      face: this.face ? uint8ArrayToBase64(this.face) : '',
      faceCoordinates: this.faceCoordinates
        ? this.faceCoordinates.toProtobufJSON(options)
        : null
    };
  }
}
export module FaceRequest {
  /**
   * Standard JavaScript object representation for FaceRequest
   */
  export interface AsObject {
    id?: string;
    face?: Uint8Array;
    faceCoordinates?: FaceCoordinates.AsObject;
  }

  /**
   * Protobuf JSON representation for FaceRequest
   */
  export interface AsProtobufJSON {
    id?: string;
    face?: string;
    faceCoordinates?: FaceCoordinates.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for face_authenticator.EnrollRequest
 */
export class EnrollRequest implements GrpcMessage {
  static id = 'face_authenticator.EnrollRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EnrollRequest();
    EnrollRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EnrollRequest) {
    _instance.faceRequest = _instance.faceRequest || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EnrollRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.faceRequest = new FaceRequest();
          _reader.readMessage(
            _instance.faceRequest,
            FaceRequest.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    EnrollRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EnrollRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.faceRequest) {
      _writer.writeMessage(
        1,
        _instance.faceRequest as any,
        FaceRequest.serializeBinaryToWriter
      );
    }
  }

  private _faceRequest?: FaceRequest;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EnrollRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<EnrollRequest.AsObject>) {
    _value = _value || {};
    this.faceRequest = _value.faceRequest
      ? new FaceRequest(_value.faceRequest)
      : undefined;
    EnrollRequest.refineValues(this);
  }
  get faceRequest(): FaceRequest | undefined {
    return this._faceRequest;
  }
  set faceRequest(value: FaceRequest | undefined) {
    this._faceRequest = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EnrollRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EnrollRequest.AsObject {
    return {
      faceRequest: this.faceRequest ? this.faceRequest.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): EnrollRequest.AsProtobufJSON {
    return {
      faceRequest: this.faceRequest
        ? this.faceRequest.toProtobufJSON(options)
        : null
    };
  }
}
export module EnrollRequest {
  /**
   * Standard JavaScript object representation for EnrollRequest
   */
  export interface AsObject {
    faceRequest?: FaceRequest.AsObject;
  }

  /**
   * Protobuf JSON representation for EnrollRequest
   */
  export interface AsProtobufJSON {
    faceRequest?: FaceRequest.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for face_authenticator.EnrollResponse
 */
export class EnrollResponse implements GrpcMessage {
  static id = 'face_authenticator.EnrollResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EnrollResponse();
    EnrollResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EnrollResponse) {
    _instance.status = _instance.status || 0;
    _instance.message = _instance.message || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EnrollResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.status = _reader.readEnum();
          break;
        case 2:
          _instance.message = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    EnrollResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EnrollResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.status) {
      _writer.writeEnum(1, _instance.status);
    }
    if (_instance.message) {
      _writer.writeString(2, _instance.message);
    }
  }

  private _status?: EnrollStatus;
  private _message?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EnrollResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<EnrollResponse.AsObject>) {
    _value = _value || {};
    this.status = _value.status;
    this.message = _value.message;
    EnrollResponse.refineValues(this);
  }
  get status(): EnrollStatus | undefined {
    return this._status;
  }
  set status(value: EnrollStatus | undefined) {
    this._status = value;
  }
  get message(): string | undefined {
    return this._message;
  }
  set message(value: string | undefined) {
    this._message = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EnrollResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EnrollResponse.AsObject {
    return {
      status: this.status,
      message: this.message
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): EnrollResponse.AsProtobufJSON {
    return {
      status: EnrollStatus[this.status ?? 0],
      message: this.message
    };
  }
}
export module EnrollResponse {
  /**
   * Standard JavaScript object representation for EnrollResponse
   */
  export interface AsObject {
    status?: EnrollStatus;
    message?: string;
  }

  /**
   * Protobuf JSON representation for EnrollResponse
   */
  export interface AsProtobufJSON {
    status?: string;
    message?: string;
  }
}

/**
 * Message implementation for face_authenticator.AuthenticateRequest
 */
export class AuthenticateRequest implements GrpcMessage {
  static id = 'face_authenticator.AuthenticateRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AuthenticateRequest();
    AuthenticateRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AuthenticateRequest) {
    _instance.faceRequest = _instance.faceRequest || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AuthenticateRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.faceRequest = new FaceRequest();
          _reader.readMessage(
            _instance.faceRequest,
            FaceRequest.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    AuthenticateRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AuthenticateRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.faceRequest) {
      _writer.writeMessage(
        1,
        _instance.faceRequest as any,
        FaceRequest.serializeBinaryToWriter
      );
    }
  }

  private _faceRequest?: FaceRequest;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AuthenticateRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<AuthenticateRequest.AsObject>) {
    _value = _value || {};
    this.faceRequest = _value.faceRequest
      ? new FaceRequest(_value.faceRequest)
      : undefined;
    AuthenticateRequest.refineValues(this);
  }
  get faceRequest(): FaceRequest | undefined {
    return this._faceRequest;
  }
  set faceRequest(value: FaceRequest | undefined) {
    this._faceRequest = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AuthenticateRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AuthenticateRequest.AsObject {
    return {
      faceRequest: this.faceRequest ? this.faceRequest.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AuthenticateRequest.AsProtobufJSON {
    return {
      faceRequest: this.faceRequest
        ? this.faceRequest.toProtobufJSON(options)
        : null
    };
  }
}
export module AuthenticateRequest {
  /**
   * Standard JavaScript object representation for AuthenticateRequest
   */
  export interface AsObject {
    faceRequest?: FaceRequest.AsObject;
  }

  /**
   * Protobuf JSON representation for AuthenticateRequest
   */
  export interface AsProtobufJSON {
    faceRequest?: FaceRequest.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for face_authenticator.AuthenticateResponse
 */
export class AuthenticateResponse implements GrpcMessage {
  static id = 'face_authenticator.AuthenticateResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AuthenticateResponse();
    AuthenticateResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AuthenticateResponse) {
    _instance.status = _instance.status || 0;
    _instance.message = _instance.message || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AuthenticateResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.status = _reader.readEnum();
          break;
        case 2:
          _instance.message = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    AuthenticateResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AuthenticateResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.status) {
      _writer.writeEnum(1, _instance.status);
    }
    if (_instance.message) {
      _writer.writeString(2, _instance.message);
    }
  }

  private _status?: AuthenticateStatus;
  private _message?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AuthenticateResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<AuthenticateResponse.AsObject>) {
    _value = _value || {};
    this.status = _value.status;
    this.message = _value.message;
    AuthenticateResponse.refineValues(this);
  }
  get status(): AuthenticateStatus | undefined {
    return this._status;
  }
  set status(value: AuthenticateStatus | undefined) {
    this._status = value;
  }
  get message(): string | undefined {
    return this._message;
  }
  set message(value: string | undefined) {
    this._message = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AuthenticateResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AuthenticateResponse.AsObject {
    return {
      status: this.status,
      message: this.message
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AuthenticateResponse.AsProtobufJSON {
    return {
      status: AuthenticateStatus[this.status ?? 0],
      message: this.message
    };
  }
}
export module AuthenticateResponse {
  /**
   * Standard JavaScript object representation for AuthenticateResponse
   */
  export interface AsObject {
    status?: AuthenticateStatus;
    message?: string;
  }

  /**
   * Protobuf JSON representation for AuthenticateResponse
   */
  export interface AsProtobufJSON {
    status?: string;
    message?: string;
  }
}
