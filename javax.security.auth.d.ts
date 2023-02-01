/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/javax.security.auth' { 
import { BasicPermission, PermissionCollection, ProtectionDomain, DomainCombiner, AccessControlContext, PrivilegedAction, Permission, PrivilegedExceptionAction, Principal } from '@afterburnerhq/java.security'
import { Exception, Class, String } from '@afterburnerhq/java.lang'
import { Set } from '@afterburnerhq/java.util'
import { Serializable } from '@afterburnerhq/java.io'
export class AuthPermission extends BasicPermission {
constructor(arg0: String);
constructor(arg0: String, arg1: String);
 }

export class DestroyFailedException extends Exception {
constructor();
constructor(arg0: String);
 }

export interface Destroyable {

/* default */ destroy(): void;

/* default */ isDestroyed(): boolean;
 }

export class PrivateCredentialPermission extends Permission {
constructor(arg0: String, arg1: String);

getCredentialClass(): String;

getPrincipals(): Array<Array<String>>;

implies(arg0: Permission): boolean;

equals(arg0: Object): boolean;

hashCode(): number;

getActions(): String;

newPermissionCollection(): PermissionCollection;
 }

export class RefreshFailedException extends Exception {
constructor();
constructor(arg0: String);
 }

export interface Refreshable {

isCurrent(): boolean;

refresh(): void;
 }

export class Subject implements Serializable {
constructor();
constructor(arg0: boolean, arg1: Set<Principal>, arg2: Set<any>, arg3: Set<any>);

setReadOnly(): void;

isReadOnly(): boolean;

static getSubject(arg0: AccessControlContext): Subject;

static doAs<T extends Object>(arg0: Subject, arg1: PrivilegedAction<T>): T;

static doAs<T extends Object>(arg0: Subject, arg1: PrivilegedExceptionAction<T>): T;

static doAsPrivileged<T extends Object>(arg0: Subject, arg1: PrivilegedAction<T>, arg2: AccessControlContext): T;

static doAsPrivileged<T extends Object>(arg0: Subject, arg1: PrivilegedExceptionAction<T>, arg2: AccessControlContext): T;

getPrincipals(): Set<Principal>;

getPrincipals<T extends Principal>(arg0: Class<T>): Set<T>;

getPublicCredentials(): Set<Object>;

getPrivateCredentials(): Set<Object>;

getPublicCredentials<T extends Object>(arg0: Class<T>): Set<T>;

getPrivateCredentials<T extends Object>(arg0: Class<T>): Set<T>;

equals(arg0: Object): boolean;
toString(): string;

hashCode(): number;
 }

export class SubjectDomainCombiner implements DomainCombiner {
constructor(arg0: Subject);

getSubject(): Subject;

combine(arg0: ProtectionDomain[], arg1: ProtectionDomain[]): ProtectionDomain[];
 }

}
