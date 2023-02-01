/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/javax.naming' { 
import { Throwable, Cloneable, Comparable, String, Exception } from '@afterburnerhq/java.lang'
import { Properties, Hashtable, Enumeration } from '@afterburnerhq/java.util'
import { Serializable } from '@afterburnerhq/java.io'
export class AuthenticationException extends NamingSecurityException {
constructor(arg0: String);
constructor();
 }

export class AuthenticationNotSupportedException extends NamingSecurityException {
constructor(arg0: String);
constructor();
 }

export class BinaryRefAddr extends RefAddr {
constructor(arg0: String, arg1: number[]);
constructor(arg0: String, arg1: number[], arg2: number, arg3: number);

getContent(): Object;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class Binding extends NameClassPair {
constructor(arg0: String, arg1: Object);
constructor(arg0: String, arg1: Object, arg2: boolean);
constructor(arg0: String, arg1: String, arg2: Object);
constructor(arg0: String, arg1: String, arg2: Object, arg3: boolean);

getClassName(): String;

getObject(): Object;

setObject(arg0: Object): void;
toString(): string;
 }

export class CannotProceedException extends NamingException {
constructor(arg0: String);
constructor();

getEnvironment(): Hashtable<any, any>;

setEnvironment(arg0: Hashtable<any, any>): void;

getRemainingNewName(): Name;

setRemainingNewName(arg0: Name): void;

getAltName(): Name;

setAltName(arg0: Name): void;

getAltNameCtx(): Context;

setAltNameCtx(arg0: Context): void;
 }

export class CommunicationException extends NamingException {
constructor(arg0: String);
constructor();
 }

export class CompositeName implements Name {
constructor(arg0: String);
constructor();
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;

compareTo(arg0: Object): number;

clone(): Object;

size(): number;

isEmpty(): boolean;

getAll(): Enumeration<String>;

get(arg0: number): String;

getPrefix(arg0: number): Name;

getSuffix(arg0: number): Name;

startsWith(arg0: Name): boolean;

endsWith(arg0: Name): boolean;

addAll(arg0: Name): Name;

addAll(arg0: number, arg1: Name): Name;

add(arg0: String): Name;

add(arg0: number, arg1: String): Name;

remove(arg0: number): Object;
 }

export class CompoundName implements Name {
constructor(arg0: String, arg1: Properties);
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;

clone(): Object;

compareTo(arg0: Object): number;

size(): number;

isEmpty(): boolean;

getAll(): Enumeration<String>;

get(arg0: number): String;

getPrefix(arg0: number): Name;

getSuffix(arg0: number): Name;

startsWith(arg0: Name): boolean;

endsWith(arg0: Name): boolean;

addAll(arg0: Name): Name;

addAll(arg0: number, arg1: Name): Name;

add(arg0: String): Name;

add(arg0: number, arg1: String): Name;

remove(arg0: number): Object;
 }

export class ConfigurationException extends NamingException {
constructor(arg0: String);
constructor();
 }

export namespace Context { 
const INITIAL_CONTEXT_FACTORY:String
const OBJECT_FACTORIES:String
const STATE_FACTORIES:String
const URL_PKG_PREFIXES:String
const PROVIDER_URL:String
const DNS_URL:String
const AUTHORITATIVE:String
const BATCHSIZE:String
const REFERRAL:String
const SECURITY_PROTOCOL:String
const SECURITY_AUTHENTICATION:String
const SECURITY_PRINCIPAL:String
const SECURITY_CREDENTIALS:String
const LANGUAGE:String
const APPLET:String
}

export interface Context {
INITIAL_CONTEXT_FACTORY:String
OBJECT_FACTORIES:String
STATE_FACTORIES:String
URL_PKG_PREFIXES:String
PROVIDER_URL:String
DNS_URL:String
AUTHORITATIVE:String
BATCHSIZE:String
REFERRAL:String
SECURITY_PROTOCOL:String
SECURITY_AUTHENTICATION:String
SECURITY_PRINCIPAL:String
SECURITY_CREDENTIALS:String
LANGUAGE:String
APPLET:String

lookup(arg0: Name): Object;

lookup(arg0: String): Object;

bind(arg0: Name, arg1: Object): void;

bind(arg0: String, arg1: Object): void;

rebind(arg0: Name, arg1: Object): void;

rebind(arg0: String, arg1: Object): void;

unbind(arg0: Name): void;

unbind(arg0: String): void;

rename(arg0: Name, arg1: Name): void;

rename(arg0: String, arg1: String): void;

list(arg0: Name): NamingEnumeration<NameClassPair>;

list(arg0: String): NamingEnumeration<NameClassPair>;

listBindings(arg0: Name): NamingEnumeration<Binding>;

listBindings(arg0: String): NamingEnumeration<Binding>;

destroySubcontext(arg0: Name): void;

destroySubcontext(arg0: String): void;

createSubcontext(arg0: Name): Context;

createSubcontext(arg0: String): Context;

lookupLink(arg0: Name): Object;

lookupLink(arg0: String): Object;

getNameParser(arg0: Name): NameParser;

getNameParser(arg0: String): NameParser;

composeName(arg0: Name, arg1: Name): Name;

composeName(arg0: String, arg1: String): String;

addToEnvironment(arg0: String, arg1: Object): Object;

removeFromEnvironment(arg0: String): Object;

getEnvironment(): Hashtable<any, any>;

close(): void;

getNameInNamespace(): String;
 }

export class ContextNotEmptyException extends NamingException {
constructor(arg0: String);
constructor();
 }

export class InitialContext implements Context {
constructor();
constructor(arg0: Hashtable<any, any>);

static doLookup<T extends Object>(arg0: Name): T;

static doLookup<T extends Object>(arg0: String): T;

lookup(arg0: String): Object;

lookup(arg0: Name): Object;

bind(arg0: String, arg1: Object): void;

bind(arg0: Name, arg1: Object): void;

rebind(arg0: String, arg1: Object): void;

rebind(arg0: Name, arg1: Object): void;

unbind(arg0: String): void;

unbind(arg0: Name): void;

rename(arg0: String, arg1: String): void;

rename(arg0: Name, arg1: Name): void;

list(arg0: String): NamingEnumeration<NameClassPair>;

list(arg0: Name): NamingEnumeration<NameClassPair>;

listBindings(arg0: String): NamingEnumeration<Binding>;

listBindings(arg0: Name): NamingEnumeration<Binding>;

destroySubcontext(arg0: String): void;

destroySubcontext(arg0: Name): void;

createSubcontext(arg0: String): Context;

createSubcontext(arg0: Name): Context;

lookupLink(arg0: String): Object;

lookupLink(arg0: Name): Object;

getNameParser(arg0: String): NameParser;

getNameParser(arg0: Name): NameParser;

composeName(arg0: String, arg1: String): String;

composeName(arg0: Name, arg1: Name): Name;

addToEnvironment(arg0: String, arg1: Object): Object;

removeFromEnvironment(arg0: String): Object;

getEnvironment(): Hashtable<any, any>;

close(): void;

getNameInNamespace(): String;
 }

export class InsufficientResourcesException extends NamingException {
constructor(arg0: String);
constructor();
 }

export class InterruptedNamingException extends NamingException {
constructor(arg0: String);
constructor();
 }

export class InvalidNameException extends NamingException {
constructor(arg0: String);
constructor();
 }

export class LimitExceededException extends NamingException {
constructor();
constructor(arg0: String);
 }

export class LinkException extends NamingException {
constructor(arg0: String);
constructor();

getLinkResolvedName(): Name;

getLinkRemainingName(): Name;

getLinkResolvedObj(): Object;

getLinkExplanation(): String;

setLinkExplanation(arg0: String): void;

setLinkResolvedName(arg0: Name): void;

setLinkRemainingName(arg0: Name): void;

setLinkResolvedObj(arg0: Object): void;
toString(): string;

toString(arg0: boolean): String;
 }

export class LinkLoopException extends LinkException {
constructor(arg0: String);
constructor();
 }

export class LinkRef extends Reference {
constructor(arg0: Name);
constructor(arg0: String);

getLinkName(): String;
 }

export class MalformedLinkException extends LinkException {
constructor(arg0: String);
constructor();
 }

export namespace Name { 
const serialVersionUID:number
}

export interface Name extends Cloneable, Serializable, Comparable<Object>, Object {
serialVersionUID:number

clone(): Object;

compareTo(arg0: Object): number;

size(): number;

isEmpty(): boolean;

getAll(): Enumeration<String>;

get(arg0: number): String;

getPrefix(arg0: number): Name;

getSuffix(arg0: number): Name;

startsWith(arg0: Name): boolean;

endsWith(arg0: Name): boolean;

addAll(arg0: Name): Name;

addAll(arg0: number, arg1: Name): Name;

add(arg0: String): Name;

add(arg0: number, arg1: String): Name;

remove(arg0: number): Object;
 }

export class NameAlreadyBoundException extends NamingException {
constructor(arg0: String);
constructor();
 }

export class NameClassPair implements Serializable {
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: String, arg2: boolean);

getClassName(): String;

getName(): String;

setName(arg0: String): void;

setClassName(arg0: String): void;

isRelative(): boolean;

setRelative(arg0: boolean): void;

getNameInNamespace(): String;

setNameInNamespace(arg0: String): void;
toString(): string;
 }

export class NameNotFoundException extends NamingException {
constructor(arg0: String);
constructor();
 }

export interface NameParser {

parse(arg0: String): Name;
 }

export interface NamingEnumeration<T extends Object> extends Enumeration<T>, Object {

next(): T;

hasMore(): boolean;

close(): void;
 }

export class NamingException extends Exception {
constructor(arg0: String);
constructor();

getResolvedName(): Name;

getRemainingName(): Name;

getResolvedObj(): Object;

getExplanation(): String;

setResolvedName(arg0: Name): void;

setRemainingName(arg0: Name): void;

setResolvedObj(arg0: Object): void;

appendRemainingComponent(arg0: String): void;

appendRemainingName(arg0: Name): void;

getRootCause(): Throwable;

setRootCause(arg0: Throwable): void;

getCause(): Throwable;

initCause(arg0: Throwable): Throwable;
toString(): string;

toString(arg0: boolean): String;
 }

export abstract class NamingSecurityException extends NamingException {
constructor(arg0: String);
constructor();
 }

export class NoInitialContextException extends NamingException {
constructor();
constructor(arg0: String);
 }

export class NoPermissionException extends NamingSecurityException {
constructor(arg0: String);
constructor();
 }

export class NotContextException extends NamingException {
constructor(arg0: String);
constructor();
 }

export class OperationNotSupportedException extends NamingException {
constructor();
constructor(arg0: String);
 }

export class PartialResultException extends NamingException {
constructor(arg0: String);
constructor();
 }

export abstract class RefAddr implements Serializable {

getType(): String;

abstract getContent(): Object;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class Reference implements Cloneable, Serializable {
constructor(arg0: String);
constructor(arg0: String, arg1: RefAddr);
constructor(arg0: String, arg1: String, arg2: String);
constructor(arg0: String, arg1: RefAddr, arg2: String, arg3: String);

getClassName(): String;

getFactoryClassName(): String;

getFactoryClassLocation(): String;

get(arg0: String): RefAddr;

get(arg0: number): RefAddr;

getAll(): Enumeration<RefAddr>;

size(): number;

add(arg0: RefAddr): void;

add(arg0: number, arg1: RefAddr): void;

remove(arg0: number): Object;

clear(): void;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;

clone(): Object;
 }

export interface Referenceable {

getReference(): Reference;
 }

export abstract class ReferralException extends NamingException {

abstract getReferralInfo(): Object;

abstract getReferralContext(): Context;

abstract getReferralContext(arg0: Hashtable<any, any>): Context;

abstract skipReferral(): boolean;

abstract retryReferral(): void;
 }

export class ServiceUnavailableException extends NamingException {
constructor(arg0: String);
constructor();
 }

export class SizeLimitExceededException extends LimitExceededException {
constructor();
constructor(arg0: String);
 }

export class StringRefAddr extends RefAddr {
constructor(arg0: String, arg1: String);

getContent(): Object;
 }

export class TimeLimitExceededException extends LimitExceededException {
constructor();
constructor(arg0: String);
 }

}
