/// <reference path="java.rmi.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.rmi.server.d.ts" />
declare module '@afterburnerhq/java.rmi.dgc' { 
import { Remote } from '@afterburnerhq/java.rmi'
import { Serializable } from '@afterburnerhq/java.io'
import { ObjID } from '@afterburnerhq/java.rmi.server'
export interface DGC extends Remote {

dirty(arg0: ObjID[], arg1: number, arg2: Lease): Lease;

clean(arg0: ObjID[], arg1: number, arg2: VMID, arg3: boolean): void;
 }

export class Lease implements Serializable {
constructor(arg0: VMID, arg1: number);

getVMID(): VMID;

getValue(): number;
 }

export class VMID implements Serializable {
constructor();

static isUnique(): boolean;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;
 }

}
