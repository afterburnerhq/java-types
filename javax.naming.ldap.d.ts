/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="javax.naming.directory.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.naming.d.ts" />
/// <reference path="javax.net.ssl.d.ts" />
/// <reference path="javax.naming.event.d.ts" />
declare module '@afterburnerhq/javax.naming.ldap' { 
import { Comparable, String } from '@afterburnerhq/java.lang'
import { List, Enumeration, Hashtable, EventObject } from '@afterburnerhq/java.util'
import { Attributes, InitialDirContext, DirContext } from '@afterburnerhq/javax.naming.directory'
import { Serializable } from '@afterburnerhq/java.io'
import { Context, NamingException, ReferralException, Name } from '@afterburnerhq/javax.naming'
import { SSLSession, SSLSocketFactory, HostnameVerifier } from '@afterburnerhq/javax.net.ssl'
import { NamingListener } from '@afterburnerhq/javax.naming.event'
export class BasicControl implements Control {
constructor(arg0: String);
constructor(arg0: String, arg1: boolean, arg2: number[]);

getID(): String;

isCritical(): boolean;

getEncodedValue(): number[];
 }

export namespace Control { 
const CRITICAL:boolean
const NONCRITICAL:boolean
}

export interface Control extends Serializable {
CRITICAL:boolean
NONCRITICAL:boolean

getID(): String;

isCritical(): boolean;

getEncodedValue(): number[];
 }

export abstract class ControlFactory {

abstract getControlInstance(arg0: Control): Control;

static getControlInstance(arg0: Control, arg1: Context, arg2: Hashtable<any, any>): Control;
 }

export interface ExtendedRequest extends Serializable {

getID(): String;

getEncodedValue(): number[];

createExtendedResponse(arg0: String, arg1: number[], arg2: number, arg3: number): ExtendedResponse;
 }

export interface ExtendedResponse extends Serializable {

getID(): String;

getEncodedValue(): number[];
 }

export interface HasControls {

getControls(): Control[];
 }

export class InitialLdapContext extends InitialDirContext implements LdapContext {
constructor();
constructor(arg0: Hashtable<any, any>, arg1: Control[]);

extendedOperation(arg0: ExtendedRequest): ExtendedResponse;

newInstance(arg0: Control[]): LdapContext;

reconnect(arg0: Control[]): void;

getConnectControls(): Control[];

setRequestControls(arg0: Control[]): void;

getRequestControls(): Control[];

getResponseControls(): Control[];
 }

export namespace LdapContext { 
const CONTROL_FACTORIES:String
}

export interface LdapContext extends DirContext {
CONTROL_FACTORIES:String

extendedOperation(arg0: ExtendedRequest): ExtendedResponse;

newInstance(arg0: Control[]): LdapContext;

reconnect(arg0: Control[]): void;

getConnectControls(): Control[];

setRequestControls(arg0: Control[]): void;

getRequestControls(): Control[];

getResponseControls(): Control[];
 }

export class LdapName implements Name {
constructor(arg0: String);
constructor(arg0: List<Rdn>);

size(): number;

isEmpty(): boolean;

getAll(): Enumeration<String>;

get(arg0: number): String;

getRdn(arg0: number): Rdn;

getPrefix(arg0: number): Name;

getSuffix(arg0: number): Name;

startsWith(arg0: Name): boolean;

startsWith(arg0: List<Rdn>): boolean;

endsWith(arg0: Name): boolean;

endsWith(arg0: List<Rdn>): boolean;

addAll(arg0: Name): Name;

addAll(arg0: List<Rdn>): Name;

addAll(arg0: number, arg1: Name): Name;

addAll(arg0: number, arg1: List<Rdn>): Name;

add(arg0: String): Name;

add(arg0: Rdn): Name;

add(arg0: number, arg1: String): Name;

add(arg0: number, arg1: Rdn): Name;

remove(arg0: number): Object;

getRdns(): List<Rdn>;

clone(): Object;
toString(): string;

equals(arg0: Object): boolean;

compareTo(arg0: Object): number;

hashCode(): number;
 }

export abstract class LdapReferralException extends ReferralException {

abstract getReferralContext(): Context;

abstract getReferralContext(arg0: Hashtable<any, any>): Context;

abstract getReferralContext(arg0: Hashtable<any, any>, arg1: Control[]): Context;
 }

export class ManageReferralControl extends BasicControl {
static OID:String
constructor();
constructor(arg0: boolean);
 }

export class PagedResultsControl extends BasicControl {
static OID:String
constructor(arg0: number, arg1: boolean);
constructor(arg0: number, arg1: number[], arg2: boolean);
 }

export class PagedResultsResponseControl extends BasicControl {
static OID:String
constructor(arg0: String, arg1: boolean, arg2: number[]);

getResultSize(): number;

getCookie(): number[];
 }

export class Rdn extends Object implements Serializable, Comparable<Object> {
constructor(arg0: Attributes);
constructor(arg0: String);
constructor(arg0: Rdn);
constructor(arg0: String, arg1: Object);

getValue(): Object;

getType(): String;
toString(): string;

compareTo(arg0: Object): number;

equals(arg0: Object): boolean;

hashCode(): number;

toAttributes(): Attributes;

size(): number;

static escapeValue(arg0: Object): String;

static unescapeValue(arg0: String): Object;
 }

export class SortControl extends BasicControl {
static OID:String
constructor(arg0: String, arg1: boolean);
constructor(arg0: String[], arg1: boolean);
constructor(arg0: SortKey[], arg1: boolean);
 }

export class SortKey {
constructor(arg0: String);
constructor(arg0: String, arg1: boolean, arg2: String);

getAttributeID(): String;

isAscending(): boolean;

getMatchingRuleID(): String;
 }

export class SortResponseControl extends BasicControl {
static OID:String
constructor(arg0: String, arg1: boolean, arg2: number[]);

isSorted(): boolean;

getResultCode(): number;

getAttributeID(): String;

getException(): NamingException;
 }

export class StartTlsRequest implements ExtendedRequest {
static OID:String
constructor();

getID(): String;

getEncodedValue(): number[];

createExtendedResponse(arg0: String, arg1: number[], arg2: number, arg3: number): ExtendedResponse;
 }

export abstract class StartTlsResponse implements ExtendedResponse {
static OID:String

getID(): String;

getEncodedValue(): number[];

abstract setEnabledCipherSuites(arg0: String[]): void;

abstract setHostnameVerifier(arg0: HostnameVerifier): void;

abstract negotiate(): SSLSession;

abstract negotiate(arg0: SSLSocketFactory): SSLSession;

abstract close(): void;
 }

export interface UnsolicitedNotification extends ExtendedResponse, HasControls {

getReferrals(): String[];

getException(): NamingException;
 }

export class UnsolicitedNotificationEvent extends EventObject {
constructor(arg0: Object, arg1: UnsolicitedNotification);

getNotification(): UnsolicitedNotification;

dispatch(arg0: UnsolicitedNotificationListener): void;
 }

export interface UnsolicitedNotificationListener extends NamingListener {

notificationReceived(arg0: UnsolicitedNotificationEvent): void;
 }

}
