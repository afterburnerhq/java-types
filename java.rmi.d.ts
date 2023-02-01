/// <reference path="java.lang.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/java.rmi' { 
import { Throwable, Error, SecurityException, String, SecurityManager, Exception } from '@afterburnerhq/java.lang'
import { Serializable, IOException } from '@afterburnerhq/java.io'
export class AccessException extends RemoteException {
constructor(arg0: String);
constructor(arg0: String, arg1: Exception);
 }

export class AlreadyBoundException extends Exception {
constructor();
constructor(arg0: String);
 }

export class ConnectException extends RemoteException {
constructor(arg0: String);
constructor(arg0: String, arg1: Exception);
 }

export class ConnectIOException extends RemoteException {
constructor(arg0: String);
constructor(arg0: String, arg1: Exception);
 }

export class MarshalException extends RemoteException {
constructor(arg0: String);
constructor(arg0: String, arg1: Exception);
 }

export class MarshalledObject<T extends Object> extends Object implements Serializable {
constructor(arg0: T);

get(): T;

hashCode(): number;

equals(arg0: Object): boolean;
 }

export class Naming {

static lookup(arg0: String): Remote;

static bind(arg0: String, arg1: Remote): void;

static unbind(arg0: String): void;

static rebind(arg0: String, arg1: Remote): void;

static list(arg0: String): String[];
 }

export class NoSuchObjectException extends RemoteException {
constructor(arg0: String);
 }

export class NotBoundException extends Exception {
constructor();
constructor(arg0: String);
 }

export class RMISecurityException extends SecurityException {
constructor(arg0: String);
constructor(arg0: String, arg1: String);
 }

export class RMISecurityManager extends SecurityManager {
constructor();
 }

export interface Remote {
 }

export class RemoteException extends IOException {
detail:Throwable
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);

getMessage(): String;

getCause(): Throwable;
 }

export class ServerError extends RemoteException {
constructor(arg0: String, arg1: Error);
 }

export class ServerException extends RemoteException {
constructor(arg0: String);
constructor(arg0: String, arg1: Exception);
 }

export class ServerRuntimeException extends RemoteException {
constructor(arg0: String, arg1: Exception);
 }

export class StubNotFoundException extends RemoteException {
constructor(arg0: String);
constructor(arg0: String, arg1: Exception);
 }

export class UnexpectedException extends RemoteException {
constructor(arg0: String);
constructor(arg0: String, arg1: Exception);
 }

export class UnknownHostException extends RemoteException {
constructor(arg0: String);
constructor(arg0: String, arg1: Exception);
 }

export class UnmarshalException extends RemoteException {
constructor(arg0: String);
constructor(arg0: String, arg1: Exception);
 }

}
