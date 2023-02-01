/// <reference path="java.rmi.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.rmi.server.d.ts" />
declare module '@afterburnerhq/java.rmi.registry' { 
import { Remote } from '@afterburnerhq/java.rmi'
import { String } from '@afterburnerhq/java.lang'
import { RMIServerSocketFactory, RMIClientSocketFactory } from '@afterburnerhq/java.rmi.server'
export class LocateRegistry {

static getRegistry(): Registry;

static getRegistry(arg0: number): Registry;

static getRegistry(arg0: String): Registry;

static getRegistry(arg0: String, arg1: number): Registry;

static getRegistry(arg0: String, arg1: number, arg2: RMIClientSocketFactory): Registry;

static createRegistry(arg0: number): Registry;

static createRegistry(arg0: number, arg1: RMIClientSocketFactory, arg2: RMIServerSocketFactory): Registry;
 }

export namespace Registry { 
const REGISTRY_PORT:number
}

export interface Registry extends Remote {
REGISTRY_PORT:number

lookup(arg0: String): Remote;

bind(arg0: String, arg1: Remote): void;

unbind(arg0: String): void;

rebind(arg0: String, arg1: Remote): void;

list(): String[];
 }

export interface RegistryHandler {

registryStub(arg0: String, arg1: number): Registry;

registryImpl(arg0: number): Registry;
 }

}
