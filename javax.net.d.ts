/// <reference path="java.lang.d.ts" />
/// <reference path="java.net.d.ts" />
declare module '@afterburnerhq/javax.net' { 
import { String } from '@afterburnerhq/java.lang'
import { InetAddress, ServerSocket, Socket } from '@afterburnerhq/java.net'
export abstract class ServerSocketFactory {

static getDefault(): ServerSocketFactory;

createServerSocket(): ServerSocket;

abstract createServerSocket(arg0: number): ServerSocket;

abstract createServerSocket(arg0: number, arg1: number): ServerSocket;

abstract createServerSocket(arg0: number, arg1: number, arg2: InetAddress): ServerSocket;
 }

export abstract class SocketFactory {

static getDefault(): SocketFactory;

createSocket(): Socket;

abstract createSocket(arg0: String, arg1: number): Socket;

abstract createSocket(arg0: String, arg1: number, arg2: InetAddress, arg3: number): Socket;

abstract createSocket(arg0: InetAddress, arg1: number): Socket;

abstract createSocket(arg0: InetAddress, arg1: number, arg2: InetAddress, arg3: number): Socket;
 }

}
