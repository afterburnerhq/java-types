/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.security.auth.callback.d.ts" />
declare module '@afterburnerhq/javax.security.sasl' { 
import { Throwable, String } from '@afterburnerhq/java.lang'
import { Map, Enumeration } from '@afterburnerhq/java.util'
import { Serializable, IOException } from '@afterburnerhq/java.io'
import { ChoiceCallback, CallbackHandler, Callback, TextInputCallback } from '@afterburnerhq/javax.security.auth.callback'
export class AuthenticationException extends SaslException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
 }

export class AuthorizeCallback implements Callback, Serializable {
constructor(arg0: String, arg1: String);

getAuthenticationID(): String;

getAuthorizationID(): String;

isAuthorized(): boolean;

setAuthorized(arg0: boolean): void;

getAuthorizedID(): String;

setAuthorizedID(arg0: String): void;
 }

export class RealmCallback extends TextInputCallback {
constructor(arg0: String);
constructor(arg0: String, arg1: String);
 }

export class RealmChoiceCallback extends ChoiceCallback {
constructor(arg0: String, arg1: String[], arg2: number, arg3: boolean);
 }

export class Sasl {
static QOP:String
static STRENGTH:String
static SERVER_AUTH:String
static BOUND_SERVER_NAME:String
static MAX_BUFFER:String
static RAW_SEND_SIZE:String
static REUSE:String
static POLICY_NOPLAINTEXT:String
static POLICY_NOACTIVE:String
static POLICY_NODICTIONARY:String
static POLICY_NOANONYMOUS:String
static POLICY_FORWARD_SECRECY:String
static POLICY_PASS_CREDENTIALS:String
static CREDENTIALS:String

static createSaslClient(arg0: String[], arg1: String, arg2: String, arg3: String, arg4: Map<String, any>, arg5: CallbackHandler): SaslClient;

static createSaslServer(arg0: String, arg1: String, arg2: String, arg3: Map<String, any>, arg4: CallbackHandler): SaslServer;

static getSaslClientFactories(): Enumeration<SaslClientFactory>;

static getSaslServerFactories(): Enumeration<SaslServerFactory>;
 }

export interface SaslClient {

getMechanismName(): String;

hasInitialResponse(): boolean;

evaluateChallenge(arg0: number[]): number[];

isComplete(): boolean;

unwrap(arg0: number[], arg1: number, arg2: number): number[];

wrap(arg0: number[], arg1: number, arg2: number): number[];

getNegotiatedProperty(arg0: String): Object;

dispose(): void;
 }

export interface SaslClientFactory {

createSaslClient(arg0: String[], arg1: String, arg2: String, arg3: String, arg4: Map<String, any>, arg5: CallbackHandler): SaslClient;

getMechanismNames(arg0: Map<String, any>): String[];
 }

export class SaslException extends IOException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);

getCause(): Throwable;

initCause(arg0: Throwable): Throwable;
toString(): string;
 }

export interface SaslServer {

getMechanismName(): String;

evaluateResponse(arg0: number[]): number[];

isComplete(): boolean;

getAuthorizationID(): String;

unwrap(arg0: number[], arg1: number, arg2: number): number[];

wrap(arg0: number[], arg1: number, arg2: number): number[];

getNegotiatedProperty(arg0: String): Object;

dispose(): void;
 }

export interface SaslServerFactory {

createSaslServer(arg0: String, arg1: String, arg2: String, arg3: Map<String, any>, arg4: CallbackHandler): SaslServer;

getMechanismNames(arg0: Map<String, any>): String[];
 }

}
