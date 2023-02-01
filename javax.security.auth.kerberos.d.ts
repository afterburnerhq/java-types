/// <reference path="javax.crypto.d.ts" />
/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.security.auth.d.ts" />
declare module '@afterburnerhq/javax.security.auth.kerberos' { 
import { SecretKey } from '@afterburnerhq/javax.crypto'
import { Permission, BasicPermission, PermissionCollection, Principal } from '@afterburnerhq/java.security'
import { String } from '@afterburnerhq/java.lang'
import { Date } from '@afterburnerhq/java.util'
import { InetAddress } from '@afterburnerhq/java.net'
import { File, Serializable } from '@afterburnerhq/java.io'
import { Destroyable, Refreshable } from '@afterburnerhq/javax.security.auth'
export class DelegationPermission extends BasicPermission implements Serializable {
constructor(arg0: String);
constructor(arg0: String, arg1: String);

implies(arg0: Permission): boolean;

equals(arg0: Object): boolean;

hashCode(): number;

newPermissionCollection(): PermissionCollection;
 }

export class EncryptionKey implements SecretKey {
constructor(arg0: number[], arg1: number);

getKeyType(): number;

getAlgorithm(): String;

getFormat(): String;

getEncoded(): number[];

destroy(): void;

isDestroyed(): boolean;
toString(): string;

hashCode(): number;

equals(arg0: Object): boolean;
 }

export class KerberosCredMessage implements Destroyable {
constructor(arg0: KerberosPrincipal, arg1: KerberosPrincipal, arg2: number[]);

getEncoded(): number[];

getSender(): KerberosPrincipal;

getRecipient(): KerberosPrincipal;

destroy(): void;

isDestroyed(): boolean;
toString(): string;

hashCode(): number;

equals(arg0: Object): boolean;
 }

export class KerberosKey implements SecretKey {
constructor(arg0: KerberosPrincipal, arg1: number[], arg2: number, arg3: number);
constructor(arg0: KerberosPrincipal, arg1: String[], arg2: String);

getPrincipal(): KerberosPrincipal;

getVersionNumber(): number;

getKeyType(): number;

getAlgorithm(): String;

getFormat(): String;

getEncoded(): number[];

destroy(): void;

isDestroyed(): boolean;
toString(): string;

hashCode(): number;

equals(arg0: Object): boolean;
 }

export interface KerberosPrincipal extends Principal, Serializable { }
export class KerberosPrincipal implements Principal, Serializable {
static KRB_NT_UNKNOWN:number
static KRB_NT_PRINCIPAL:number
static KRB_NT_SRV_INST:number
static KRB_NT_SRV_HST:number
static KRB_NT_SRV_XHST:number
static KRB_NT_UID:number
static KRB_NT_ENTERPRISE:number
constructor(arg0: String);
constructor(arg0: String, arg1: number);

getRealm(): String;

hashCode(): number;

equals(arg0: Object): boolean;

getName(): String;

getNameType(): number;
toString(): string;
 }

export class KerberosTicket implements Destroyable, Refreshable, Serializable {
constructor(arg0: number[], arg1: KerberosPrincipal, arg2: KerberosPrincipal, arg3: number[], arg4: number, arg5: boolean[], arg6: Date, arg7: Date, arg8: Date, arg9: Date, arg10: InetAddress[]);

getClient(): KerberosPrincipal;

getServer(): KerberosPrincipal;

getSessionKey(): SecretKey;

getSessionKeyType(): number;

isForwardable(): boolean;

isForwarded(): boolean;

isProxiable(): boolean;

isProxy(): boolean;

isPostdated(): boolean;

isRenewable(): boolean;

isInitial(): boolean;

getFlags(): boolean[];

getAuthTime(): Date;

getStartTime(): Date;

getEndTime(): Date;

getRenewTill(): Date;

getClientAddresses(): InetAddress[];

getEncoded(): number[];

isCurrent(): boolean;

refresh(): void;

destroy(): void;

isDestroyed(): boolean;
toString(): string;

hashCode(): number;

equals(arg0: Object): boolean;
 }

export class KeyTab {

static getInstance(arg0: File): KeyTab;

static getUnboundInstance(arg0: File): KeyTab;

static getInstance(arg0: KerberosPrincipal, arg1: File): KeyTab;

static getInstance(): KeyTab;

static getUnboundInstance(): KeyTab;

static getInstance(arg0: KerberosPrincipal): KeyTab;

getKeys(arg0: KerberosPrincipal): KerberosKey[];

exists(): boolean;
toString(): string;

hashCode(): number;

equals(arg0: Object): boolean;

getPrincipal(): KerberosPrincipal;

isBound(): boolean;
 }

export class ServicePermission extends Permission implements Serializable {
constructor(arg0: String, arg1: String);

implies(arg0: Permission): boolean;

equals(arg0: Object): boolean;

hashCode(): number;

getActions(): String;

newPermissionCollection(): PermissionCollection;
 }

}
