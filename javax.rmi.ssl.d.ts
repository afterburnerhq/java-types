/// <reference path="java.lang.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.rmi.server.d.ts" />
/// <reference path="javax.net.ssl.d.ts" />
declare module '@afterburnerhq/javax.rmi.ssl' { 
import { String } from '@afterburnerhq/java.lang'
import { Socket, ServerSocket } from '@afterburnerhq/java.net'
import { Serializable } from '@afterburnerhq/java.io'
import { RMIServerSocketFactory, RMIClientSocketFactory } from '@afterburnerhq/java.rmi.server'
import { SSLContext } from '@afterburnerhq/javax.net.ssl'
export class SslRMIClientSocketFactory implements RMIClientSocketFactory, Serializable {
constructor();

createSocket(arg0: String, arg1: number): Socket;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class SslRMIServerSocketFactory implements RMIServerSocketFactory {
constructor();
constructor(arg0: String[], arg1: String[], arg2: boolean);
constructor(arg0: SSLContext, arg1: String[], arg2: String[], arg3: boolean);

getEnabledCipherSuites(): String[];

getEnabledProtocols(): String[];

getNeedClientAuth(): boolean;

createServerSocket(arg0: number): ServerSocket;

equals(arg0: Object): boolean;

hashCode(): number;
 }

}
