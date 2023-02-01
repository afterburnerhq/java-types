/// <reference path="java.rmi.d.ts" />
/// <reference path="java.lang.reflect.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/java.rmi.server' { 
import { RemoteException, Remote } from '@afterburnerhq/java.rmi'
import { InvocationHandler, Method } from '@afterburnerhq/java.lang.reflect'
import { ClassLoader, Throwable, Class, String, Exception, CloneNotSupportedException } from '@afterburnerhq/java.lang'
import { URL, Socket, ServerSocket } from '@afterburnerhq/java.net'
import { DataInput, PrintStream, DataOutput, Serializable, ObjectOutput, ObjectInputFilter, OutputStream, Externalizable, ObjectInput } from '@afterburnerhq/java.io'
export class ExportException extends RemoteException {
constructor(arg0: String);
constructor(arg0: String, arg1: Exception);
 }

export namespace LoaderHandler { 
const packagePrefix:String
}

export interface LoaderHandler {
packagePrefix:String

loadClass(arg0: String): Class<any>;

loadClass(arg0: URL, arg1: String): Class<any>;

getSecurityContext(arg0: ClassLoader): Object;
 }

export class LogStream extends PrintStream {
static SILENT:number
static BRIEF:number
static VERBOSE:number

static log(arg0: String): LogStream;

static getDefaultStream(): PrintStream;

static setDefaultStream(arg0: PrintStream): void;

getOutputStream(): OutputStream;

setOutputStream(arg0: OutputStream): void;

write(arg0: number): void;

write(arg0: number[], arg1: number, arg2: number): void;
toString(): string;

static parseLevel(arg0: String): number;
 }

export class ObjID implements Serializable {
static REGISTRY_ID:number
static ACTIVATOR_ID:number
static DGC_ID:number
constructor();
constructor(arg0: number);

write(arg0: ObjectOutput): void;

static read(arg0: ObjectInput): ObjID;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;
 }

export class Operation {
constructor(arg0: String);

getOperation(): String;
toString(): string;
 }

export class RMIClassLoader {

static loadClass(arg0: String): Class<any>;

static loadClass(arg0: URL, arg1: String): Class<any>;

static loadClass(arg0: String, arg1: String): Class<any>;

static loadClass(arg0: String, arg1: String, arg2: ClassLoader): Class<any>;

static loadProxyClass(arg0: String, arg1: String[], arg2: ClassLoader): Class<any>;

static getClassLoader(arg0: String): ClassLoader;

static getClassAnnotation(arg0: Class<any>): String;

static getDefaultProviderInstance(): RMIClassLoaderSpi;

static getSecurityContext(arg0: ClassLoader): Object;
 }

export abstract class RMIClassLoaderSpi {
constructor();

abstract loadClass(arg0: String, arg1: String, arg2: ClassLoader): Class<any>;

abstract loadProxyClass(arg0: String, arg1: String[], arg2: ClassLoader): Class<any>;

abstract getClassLoader(arg0: String): ClassLoader;

abstract getClassAnnotation(arg0: Class<any>): String;
 }

export interface RMIClientSocketFactory {

createSocket(arg0: String, arg1: number): Socket;
 }

export interface RMIFailureHandler {

failure(arg0: Exception): boolean;
 }

export interface RMIServerSocketFactory {

createServerSocket(arg0: number): ServerSocket;
 }

export abstract class RMISocketFactory implements RMIClientSocketFactory, RMIServerSocketFactory {
constructor();

abstract createSocket(arg0: String, arg1: number): Socket;

abstract createServerSocket(arg0: number): ServerSocket;

static setSocketFactory(arg0: RMISocketFactory): void;

static getSocketFactory(): RMISocketFactory;

static getDefaultSocketFactory(): RMISocketFactory;

static setFailureHandler(arg0: RMIFailureHandler): void;

static getFailureHandler(): RMIFailureHandler;
 }

export interface RemoteCall {

getOutputStream(): ObjectOutput;

releaseOutputStream(): void;

getInputStream(): ObjectInput;

releaseInputStream(): void;

getResultStream(arg0: boolean): ObjectOutput;

executeCall(): void;

done(): void;
 }

export abstract class RemoteObject implements Remote, Serializable {

getRef(): RemoteRef;

static toStub(arg0: Remote): Remote;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;
 }

export class RemoteObjectInvocationHandler extends RemoteObject implements InvocationHandler {
constructor(arg0: RemoteRef);

invoke(arg0: Object, arg1: Method, arg2: Object[]): Object;
 }

export namespace RemoteRef { 
const serialVersionUID:number
const packagePrefix:String
}

export interface RemoteRef extends Externalizable {
serialVersionUID:number
packagePrefix:String

invoke(arg0: Remote, arg1: Method, arg2: Object[], arg3: number): Object;

newCall(arg0: RemoteObject, arg1: Operation[], arg2: number, arg3: number): RemoteCall;

invoke(arg0: RemoteCall): void;

done(arg0: RemoteCall): void;

getRefClass(arg0: ObjectOutput): String;

remoteHashCode(): number;

remoteEquals(arg0: RemoteRef): boolean;

remoteToString(): String;
 }

export abstract class RemoteServer extends RemoteObject {

static getClientHost(): String;

static setLog(arg0: OutputStream): void;

static getLog(): PrintStream;
 }

export abstract class RemoteStub extends RemoteObject {
 }

export class ServerCloneException extends CloneNotSupportedException {
detail:Exception
constructor(arg0: String);
constructor(arg0: String, arg1: Exception);

getMessage(): String;

getCause(): Throwable;
 }

export class ServerNotActiveException extends Exception {
constructor();
constructor(arg0: String);
 }

export namespace ServerRef { 
const serialVersionUID:number
}

export interface ServerRef extends RemoteRef {
serialVersionUID:number

exportObject(arg0: Remote, arg1: Object): RemoteStub;

getClientHost(): String;
 }

export interface Skeleton {

dispatch(arg0: Remote, arg1: RemoteCall, arg2: number, arg3: number): void;

getOperations(): Operation[];
 }

export class SkeletonMismatchException extends RemoteException {
constructor(arg0: String);
 }

export class SkeletonNotFoundException extends RemoteException {
constructor(arg0: String);
constructor(arg0: String, arg1: Exception);
 }

export class SocketSecurityException extends ExportException {
constructor(arg0: String);
constructor(arg0: String, arg1: Exception);
 }

export class UID implements Serializable {
constructor();
constructor(arg0: number);

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;

write(arg0: DataOutput): void;

static read(arg0: DataInput): UID;
 }

export class UnicastRemoteObject extends RemoteServer {

clone(): Object;

static exportObject(arg0: Remote): RemoteStub;

static exportObject(arg0: Remote, arg1: number): Remote;

static exportObject(arg0: Remote, arg1: number, arg2: RMIClientSocketFactory, arg3: RMIServerSocketFactory): Remote;

static exportObject(arg0: Remote, arg1: number, arg2: ObjectInputFilter): Remote;

static exportObject(arg0: Remote, arg1: number, arg2: RMIClientSocketFactory, arg3: RMIServerSocketFactory, arg4: ObjectInputFilter): Remote;

static unexportObject(arg0: Remote, arg1: boolean): boolean;
 }

export interface Unreferenced {

unreferenced(): void;
 }

}
