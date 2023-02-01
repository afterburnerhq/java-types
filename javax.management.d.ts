/// <reference path="java.lang.reflect.d.ts" />
/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.util.concurrent.d.ts" />
/// <reference path="javax.management.loading.d.ts" />
declare module '@afterburnerhq/javax.management' { 
import { InvocationHandler, Constructor, Method } from '@afterburnerhq/java.lang.reflect'
import { Permission, BasicPermission, PermissionCollection } from '@afterburnerhq/java.security'
import { Integer, Comparable, RuntimeException, Number, ClassLoader, Throwable, Error, Class, Cloneable, String, Boolean, Exception } from '@afterburnerhq/java.lang'
import { Set, Hashtable, ArrayList, Collection, List, EventListener, Vector, Map, EventObject } from '@afterburnerhq/java.util'
import { Serializable, ObjectInputStream } from '@afterburnerhq/java.io'
import { Executor } from '@afterburnerhq/java.util.concurrent'
import { ClassLoaderRepository } from '@afterburnerhq/javax.management.loading'
export class Attribute implements Serializable {
constructor(arg0: String, arg1: Object);

getName(): String;

getValue(): Object;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class AttributeChangeNotification extends Notification {
static ATTRIBUTE_CHANGE:String
constructor(arg0: Object, arg1: number, arg2: number, arg3: String, arg4: String, arg5: String, arg6: Object, arg7: Object);

getAttributeName(): String;

getAttributeType(): String;

getOldValue(): Object;

getNewValue(): Object;
 }

export class AttributeChangeNotificationFilter implements NotificationFilter {
constructor();

isNotificationEnabled(arg0: Notification): boolean;

enableAttribute(arg0: String): void;

disableAttribute(arg0: String): void;

disableAllAttributes(): void;

getEnabledAttributes(): Vector<String>;
 }

export interface AttributeList { }
export class AttributeList extends ArrayList<Object> {
constructor();
constructor(arg0: number);
constructor(arg0: AttributeList);
constructor(arg0: List<Attribute>);

asList(): List<Attribute>;

add(arg0: Attribute): void;

add(arg0: number, arg1: Attribute): void;

set(arg0: number, arg1: Attribute): void;

addAll(arg0: AttributeList): boolean;

addAll(arg0: number, arg1: AttributeList): boolean;

add(arg0: Object): boolean;

add(arg0: number, arg1: Object): void;

addAll(arg0: Collection<any>): boolean;

addAll(arg0: number, arg1: Collection<any>): boolean;

set(arg0: number, arg1: Object): Object;
 }

export class AttributeNotFoundException extends OperationsException {
constructor();
constructor(arg0: String);
 }

export class AttributeValueExp implements ValueExp {
constructor();
constructor(arg0: String);

getAttributeName(): String;

apply(arg0: ObjectName): ValueExp;
toString(): string;

setMBeanServer(arg0: MBeanServer): void;
 }

export class BadAttributeValueExpException extends Exception {
constructor(arg0: Object);
toString(): string;
 }

export class BadBinaryOpValueExpException extends Exception {
constructor(arg0: ValueExp);

getExp(): ValueExp;
toString(): string;
 }

export class BadStringOperationException extends Exception {
constructor(arg0: String);
toString(): string;
 }


export class DefaultLoaderRepository {
constructor();

static loadClass(arg0: String): Class<any>;

static loadClassWithout(arg0: ClassLoader, arg1: String): Class<any>;
 }

export interface Descriptor extends Serializable, Cloneable {

getFieldValue(arg0: String): Object;

setField(arg0: String, arg1: Object): void;

getFields(): String[];

getFieldNames(): String[];

getFieldValues(arg0: String[]): Object[];

removeField(arg0: String): void;

setFields(arg0: String[], arg1: Object[]): void;

clone(): Object;

isValid(): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export interface DescriptorAccess extends DescriptorRead {

setDescriptor(arg0: Descriptor): void;
 }


export interface DescriptorRead {

getDescriptor(): Descriptor;
 }

export interface DynamicMBean {

getAttribute(arg0: String): Object;

setAttribute(arg0: Attribute): void;

getAttributes(arg0: String[]): AttributeList;

setAttributes(arg0: AttributeList): AttributeList;

invoke(arg0: String, arg1: Object[], arg2: String[]): Object;

getMBeanInfo(): MBeanInfo;
 }

export class ImmutableDescriptor implements Descriptor {
static EMPTY_DESCRIPTOR:ImmutableDescriptor
constructor(arg0: String[], arg1: Object[]);
constructor(arg0: String[]);
constructor(arg0: Map<String, any>);

static union(arg0: Descriptor[]): ImmutableDescriptor;

getFieldValue(arg0: String): Object;

getFields(): String[];

getFieldValues(arg0: String[]): Object[];

getFieldNames(): String[];

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;

isValid(): boolean;

clone(): Descriptor;

setFields(arg0: String[], arg1: Object[]): void;

setField(arg0: String, arg1: Object): void;

removeField(arg0: String): void;
 }

export class InstanceAlreadyExistsException extends OperationsException {
constructor();
constructor(arg0: String);
 }

export class InstanceNotFoundException extends OperationsException {
constructor();
constructor(arg0: String);
 }

export class IntrospectionException extends OperationsException {
constructor();
constructor(arg0: String);
 }

export class InvalidApplicationException extends Exception {
constructor(arg0: Object);
 }

export class InvalidAttributeValueException extends OperationsException {
constructor();
constructor(arg0: String);
 }

export class JMException extends Exception {
constructor();
constructor(arg0: String);
 }

export class JMRuntimeException extends RuntimeException {
constructor();
constructor(arg0: String);
 }

export class JMX {
static DEFAULT_VALUE_FIELD:String
static IMMUTABLE_INFO_FIELD:String
static INTERFACE_CLASS_NAME_FIELD:String
static LEGAL_VALUES_FIELD:String
static MAX_VALUE_FIELD:String
static MIN_VALUE_FIELD:String
static MXBEAN_FIELD:String
static OPEN_TYPE_FIELD:String
static ORIGINAL_TYPE_FIELD:String

static newMBeanProxy<T extends Object>(arg0: MBeanServerConnection, arg1: ObjectName, arg2: Class<T>): T;

static newMBeanProxy<T extends Object>(arg0: MBeanServerConnection, arg1: ObjectName, arg2: Class<T>, arg3: boolean): T;

static newMXBeanProxy<T extends Object>(arg0: MBeanServerConnection, arg1: ObjectName, arg2: Class<T>): T;

static newMXBeanProxy<T extends Object>(arg0: MBeanServerConnection, arg1: ObjectName, arg2: Class<T>, arg3: boolean): T;

static isMXBeanInterface(arg0: Class<any>): boolean;
 }

export class ListenerNotFoundException extends OperationsException {
constructor();
constructor(arg0: String);
 }

export class MBeanAttributeInfo extends MBeanFeatureInfo implements Cloneable {
constructor(arg0: String, arg1: String, arg2: String, arg3: boolean, arg4: boolean, arg5: boolean);
constructor(arg0: String, arg1: String, arg2: String, arg3: boolean, arg4: boolean, arg5: boolean, arg6: Descriptor);
constructor(arg0: String, arg1: String, arg2: Method, arg3: Method);

clone(): Object;

getType(): String;

isReadable(): boolean;

isWritable(): boolean;

isIs(): boolean;
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class MBeanConstructorInfo extends MBeanFeatureInfo implements Cloneable {
constructor(arg0: String, arg1: Constructor<any>);
constructor(arg0: String, arg1: String, arg2: MBeanParameterInfo[]);
constructor(arg0: String, arg1: String, arg2: MBeanParameterInfo[], arg3: Descriptor);

clone(): Object;

getSignature(): MBeanParameterInfo[];
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class MBeanException extends JMException {
constructor(arg0: Exception);
constructor(arg0: Exception, arg1: String);

getTargetException(): Exception;

getCause(): Throwable;
 }

export class MBeanFeatureInfo implements Serializable, DescriptorRead {
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: String, arg2: Descriptor);

getName(): String;

getDescription(): String;

getDescriptor(): Descriptor;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class MBeanInfo implements Cloneable, Serializable, DescriptorRead {
constructor(arg0: String, arg1: String, arg2: MBeanAttributeInfo[], arg3: MBeanConstructorInfo[], arg4: MBeanOperationInfo[], arg5: MBeanNotificationInfo[]);
constructor(arg0: String, arg1: String, arg2: MBeanAttributeInfo[], arg3: MBeanConstructorInfo[], arg4: MBeanOperationInfo[], arg5: MBeanNotificationInfo[], arg6: Descriptor);

clone(): Object;

getClassName(): String;

getDescription(): String;

getAttributes(): MBeanAttributeInfo[];

getOperations(): MBeanOperationInfo[];

getConstructors(): MBeanConstructorInfo[];

getNotifications(): MBeanNotificationInfo[];

getDescriptor(): Descriptor;
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class MBeanNotificationInfo extends MBeanFeatureInfo implements Cloneable {
constructor(arg0: String[], arg1: String, arg2: String);
constructor(arg0: String[], arg1: String, arg2: String, arg3: Descriptor);

clone(): Object;

getNotifTypes(): String[];
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class MBeanOperationInfo extends MBeanFeatureInfo implements Cloneable {
static INFO:number
static ACTION:number
static ACTION_INFO:number
static UNKNOWN:number
constructor(arg0: String, arg1: Method);
constructor(arg0: String, arg1: String, arg2: MBeanParameterInfo[], arg3: String, arg4: number);
constructor(arg0: String, arg1: String, arg2: MBeanParameterInfo[], arg3: String, arg4: number, arg5: Descriptor);

clone(): Object;

getReturnType(): String;

getSignature(): MBeanParameterInfo[];

getImpact(): number;
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class MBeanParameterInfo extends MBeanFeatureInfo implements Cloneable {
constructor(arg0: String, arg1: String, arg2: String);
constructor(arg0: String, arg1: String, arg2: String, arg3: Descriptor);

clone(): Object;

getType(): String;
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class MBeanPermission extends Permission {
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: String, arg2: ObjectName, arg3: String);

getActions(): String;

hashCode(): number;

implies(arg0: Permission): boolean;

equals(arg0: Object): boolean;
 }

export interface MBeanRegistration {

preRegister(arg0: MBeanServer, arg1: ObjectName): ObjectName;

postRegister(arg0: Boolean): void;

preDeregister(): void;

postDeregister(): void;
 }

export class MBeanRegistrationException extends MBeanException {
constructor(arg0: Exception);
constructor(arg0: Exception, arg1: String);
 }

export interface MBeanServer extends MBeanServerConnection {

createMBean(arg0: String, arg1: ObjectName): ObjectInstance;

createMBean(arg0: String, arg1: ObjectName, arg2: ObjectName): ObjectInstance;

createMBean(arg0: String, arg1: ObjectName, arg2: Object[], arg3: String[]): ObjectInstance;

createMBean(arg0: String, arg1: ObjectName, arg2: ObjectName, arg3: Object[], arg4: String[]): ObjectInstance;

registerMBean(arg0: Object, arg1: ObjectName): ObjectInstance;

unregisterMBean(arg0: ObjectName): void;

getObjectInstance(arg0: ObjectName): ObjectInstance;

queryMBeans(arg0: ObjectName, arg1: QueryExp): Set<ObjectInstance>;

queryNames(arg0: ObjectName, arg1: QueryExp): Set<ObjectName>;

isRegistered(arg0: ObjectName): boolean;

getMBeanCount(): Number;

getAttribute(arg0: ObjectName, arg1: String): Object;

getAttributes(arg0: ObjectName, arg1: String[]): AttributeList;

setAttribute(arg0: ObjectName, arg1: Attribute): void;

setAttributes(arg0: ObjectName, arg1: AttributeList): AttributeList;

invoke(arg0: ObjectName, arg1: String, arg2: Object[], arg3: String[]): Object;

getDefaultDomain(): String;

getDomains(): String[];

addNotificationListener(arg0: ObjectName, arg1: NotificationListener, arg2: NotificationFilter, arg3: Object): void;

addNotificationListener(arg0: ObjectName, arg1: ObjectName, arg2: NotificationFilter, arg3: Object): void;

removeNotificationListener(arg0: ObjectName, arg1: ObjectName): void;

removeNotificationListener(arg0: ObjectName, arg1: ObjectName, arg2: NotificationFilter, arg3: Object): void;

removeNotificationListener(arg0: ObjectName, arg1: NotificationListener): void;

removeNotificationListener(arg0: ObjectName, arg1: NotificationListener, arg2: NotificationFilter, arg3: Object): void;

getMBeanInfo(arg0: ObjectName): MBeanInfo;

isInstanceOf(arg0: ObjectName, arg1: String): boolean;

instantiate(arg0: String): Object;

instantiate(arg0: String, arg1: ObjectName): Object;

instantiate(arg0: String, arg1: Object[], arg2: String[]): Object;

instantiate(arg0: String, arg1: ObjectName, arg2: Object[], arg3: String[]): Object;

/* default */ deserialize(arg0: ObjectName, arg1: number[]): ObjectInputStream;

/* default */ deserialize(arg0: String, arg1: number[]): ObjectInputStream;

/* default */ deserialize(arg0: String, arg1: ObjectName, arg2: number[]): ObjectInputStream;

getClassLoaderFor(arg0: ObjectName): ClassLoader;

getClassLoader(arg0: ObjectName): ClassLoader;

getClassLoaderRepository(): ClassLoaderRepository;
 }

export class MBeanServerBuilder {
constructor();

newMBeanServerDelegate(): MBeanServerDelegate;

newMBeanServer(arg0: String, arg1: MBeanServer, arg2: MBeanServerDelegate): MBeanServer;
 }

export interface MBeanServerConnection {

createMBean(arg0: String, arg1: ObjectName): ObjectInstance;

createMBean(arg0: String, arg1: ObjectName, arg2: ObjectName): ObjectInstance;

createMBean(arg0: String, arg1: ObjectName, arg2: Object[], arg3: String[]): ObjectInstance;

createMBean(arg0: String, arg1: ObjectName, arg2: ObjectName, arg3: Object[], arg4: String[]): ObjectInstance;

unregisterMBean(arg0: ObjectName): void;

getObjectInstance(arg0: ObjectName): ObjectInstance;

queryMBeans(arg0: ObjectName, arg1: QueryExp): Set<ObjectInstance>;

queryNames(arg0: ObjectName, arg1: QueryExp): Set<ObjectName>;

isRegistered(arg0: ObjectName): boolean;

getMBeanCount(): Number;

getAttribute(arg0: ObjectName, arg1: String): Object;

getAttributes(arg0: ObjectName, arg1: String[]): AttributeList;

setAttribute(arg0: ObjectName, arg1: Attribute): void;

setAttributes(arg0: ObjectName, arg1: AttributeList): AttributeList;

invoke(arg0: ObjectName, arg1: String, arg2: Object[], arg3: String[]): Object;

getDefaultDomain(): String;

getDomains(): String[];

addNotificationListener(arg0: ObjectName, arg1: NotificationListener, arg2: NotificationFilter, arg3: Object): void;

addNotificationListener(arg0: ObjectName, arg1: ObjectName, arg2: NotificationFilter, arg3: Object): void;

removeNotificationListener(arg0: ObjectName, arg1: ObjectName): void;

removeNotificationListener(arg0: ObjectName, arg1: ObjectName, arg2: NotificationFilter, arg3: Object): void;

removeNotificationListener(arg0: ObjectName, arg1: NotificationListener): void;

removeNotificationListener(arg0: ObjectName, arg1: NotificationListener, arg2: NotificationFilter, arg3: Object): void;

getMBeanInfo(arg0: ObjectName): MBeanInfo;

isInstanceOf(arg0: ObjectName, arg1: String): boolean;
 }

export class MBeanServerDelegate implements MBeanServerDelegateMBean, NotificationEmitter {
static DELEGATE_NAME:ObjectName
constructor();

getMBeanServerId(): String;

getSpecificationName(): String;

getSpecificationVersion(): String;

getSpecificationVendor(): String;

getImplementationName(): String;

getImplementationVersion(): String;

getImplementationVendor(): String;

getNotificationInfo(): MBeanNotificationInfo[];

addNotificationListener(arg0: NotificationListener, arg1: NotificationFilter, arg2: Object): void;

removeNotificationListener(arg0: NotificationListener, arg1: NotificationFilter, arg2: Object): void;

removeNotificationListener(arg0: NotificationListener): void;

sendNotification(arg0: Notification): void;
 }

export interface MBeanServerDelegateMBean {

getMBeanServerId(): String;

getSpecificationName(): String;

getSpecificationVersion(): String;

getSpecificationVendor(): String;

getImplementationName(): String;

getImplementationVersion(): String;

getImplementationVendor(): String;
 }

export class MBeanServerFactory {

static releaseMBeanServer(arg0: MBeanServer): void;

static createMBeanServer(): MBeanServer;

static createMBeanServer(arg0: String): MBeanServer;

static newMBeanServer(): MBeanServer;

static newMBeanServer(arg0: String): MBeanServer;

static findMBeanServer(arg0: String): ArrayList<MBeanServer>;

static getClassLoaderRepository(arg0: MBeanServer): ClassLoaderRepository;
 }

export class MBeanServerInvocationHandler implements InvocationHandler {
constructor(arg0: MBeanServerConnection, arg1: ObjectName);
constructor(arg0: MBeanServerConnection, arg1: ObjectName, arg2: boolean);

getMBeanServerConnection(): MBeanServerConnection;

getObjectName(): ObjectName;

isMXBean(): boolean;

static newProxyInstance<T extends Object>(arg0: MBeanServerConnection, arg1: ObjectName, arg2: Class<T>, arg3: boolean): T;

invoke(arg0: Object, arg1: Method, arg2: Object[]): Object;
 }

export class MBeanServerNotification extends Notification {
static REGISTRATION_NOTIFICATION:String
static UNREGISTRATION_NOTIFICATION:String
constructor(arg0: String, arg1: Object, arg2: number, arg3: ObjectName);

getMBeanName(): ObjectName;
toString(): string;
 }

export class MBeanServerPermission extends BasicPermission {
constructor(arg0: String);
constructor(arg0: String, arg1: String);

hashCode(): number;

implies(arg0: Permission): boolean;

equals(arg0: Object): boolean;

newPermissionCollection(): PermissionCollection;
 }

export class MBeanTrustPermission extends BasicPermission {
constructor(arg0: String);
constructor(arg0: String, arg1: String);
 }


export class MalformedObjectNameException extends OperationsException {
constructor();
constructor(arg0: String);
 }

export class NotCompliantMBeanException extends OperationsException {
constructor();
constructor(arg0: String);
 }

export class Notification extends EventObject {
constructor(arg0: String, arg1: Object, arg2: number);
constructor(arg0: String, arg1: Object, arg2: number, arg3: String);
constructor(arg0: String, arg1: Object, arg2: number, arg3: number);
constructor(arg0: String, arg1: Object, arg2: number, arg3: number, arg4: String);

setSource(arg0: Object): void;

getSequenceNumber(): number;

setSequenceNumber(arg0: number): void;

getType(): String;

getTimeStamp(): number;

setTimeStamp(arg0: number): void;

getMessage(): String;

getUserData(): Object;

setUserData(arg0: Object): void;
toString(): string;
 }

export interface NotificationBroadcaster {

addNotificationListener(arg0: NotificationListener, arg1: NotificationFilter, arg2: Object): void;

removeNotificationListener(arg0: NotificationListener): void;

getNotificationInfo(): MBeanNotificationInfo[];
 }

export class NotificationBroadcasterSupport implements NotificationEmitter {
constructor();
constructor(arg0: Executor);
constructor(arg0: MBeanNotificationInfo[]);
constructor(arg0: Executor, arg1: MBeanNotificationInfo[]);

addNotificationListener(arg0: NotificationListener, arg1: NotificationFilter, arg2: Object): void;

removeNotificationListener(arg0: NotificationListener): void;

removeNotificationListener(arg0: NotificationListener, arg1: NotificationFilter, arg2: Object): void;

getNotificationInfo(): MBeanNotificationInfo[];

sendNotification(arg0: Notification): void;
 }

export interface NotificationEmitter extends NotificationBroadcaster {

removeNotificationListener(arg0: NotificationListener, arg1: NotificationFilter, arg2: Object): void;
 }

export interface NotificationFilter extends Serializable {

isNotificationEnabled(arg0: Notification): boolean;
 }

export class NotificationFilterSupport implements NotificationFilter {
constructor();

isNotificationEnabled(arg0: Notification): boolean;

enableType(arg0: String): void;

disableType(arg0: String): void;

disableAllTypes(): void;

getEnabledTypes(): Vector<String>;
 }

export interface NotificationListener extends EventListener {

handleNotification(arg0: Notification, arg1: Object): void;
 }

export class ObjectInstance implements Serializable {
constructor(arg0: String, arg1: String);
constructor(arg0: ObjectName, arg1: String);

equals(arg0: Object): boolean;

hashCode(): number;

getObjectName(): ObjectName;

getClassName(): String;
toString(): string;
 }

export class ObjectName extends Object implements Comparable<ObjectName>, QueryExp {
static WILDCARD:ObjectName
constructor(arg0: String);
constructor(arg0: String, arg1: String, arg2: String);
constructor(arg0: String, arg1: Hashtable<String, String>);

static getInstance(arg0: String): ObjectName;

static getInstance(arg0: String, arg1: String, arg2: String): ObjectName;

static getInstance(arg0: String, arg1: Hashtable<String, String>): ObjectName;

static getInstance(arg0: ObjectName): ObjectName;

isPattern(): boolean;

isDomainPattern(): boolean;

isPropertyPattern(): boolean;

isPropertyListPattern(): boolean;

isPropertyValuePattern(): boolean;

isPropertyValuePattern(arg0: String): boolean;

getCanonicalName(): String;

getDomain(): String;

getKeyProperty(arg0: String): String;

getKeyPropertyList(): Hashtable<String, String>;

getKeyPropertyListString(): String;

getCanonicalKeyPropertyListString(): String;
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;

static quote(arg0: String): String;

static unquote(arg0: String): String;

apply(arg0: ObjectName): boolean;

setMBeanServer(arg0: MBeanServer): void;

compareTo(arg0: ObjectName): number;
 }

export class OperationsException extends JMException {
constructor();
constructor(arg0: String);
 }

export interface PersistentMBean {

load(): void;

store(): void;
 }

export class Query {
static GT:number
static LT:number
static GE:number
static LE:number
static EQ:number
static PLUS:number
static MINUS:number
static TIMES:number
static DIV:number
constructor();

static and(arg0: QueryExp, arg1: QueryExp): QueryExp;

static or(arg0: QueryExp, arg1: QueryExp): QueryExp;

static gt(arg0: ValueExp, arg1: ValueExp): QueryExp;

static geq(arg0: ValueExp, arg1: ValueExp): QueryExp;

static leq(arg0: ValueExp, arg1: ValueExp): QueryExp;

static lt(arg0: ValueExp, arg1: ValueExp): QueryExp;

static eq(arg0: ValueExp, arg1: ValueExp): QueryExp;

static between(arg0: ValueExp, arg1: ValueExp, arg2: ValueExp): QueryExp;

static match(arg0: AttributeValueExp, arg1: StringValueExp): QueryExp;

static attr(arg0: String): AttributeValueExp;

static attr(arg0: String, arg1: String): AttributeValueExp;

static classattr(): AttributeValueExp;

static not(arg0: QueryExp): QueryExp;

static in(arg0: ValueExp, arg1: ValueExp[]): QueryExp;

static value(arg0: String): StringValueExp;

static value(arg0: Number): ValueExp;

static value(arg0: number): ValueExp;

static value(arg0: number): ValueExp;

static value(arg0: number): ValueExp;

static value(arg0: number): ValueExp;

static value(arg0: boolean): ValueExp;

static plus(arg0: ValueExp, arg1: ValueExp): ValueExp;

static times(arg0: ValueExp, arg1: ValueExp): ValueExp;

static minus(arg0: ValueExp, arg1: ValueExp): ValueExp;

static div(arg0: ValueExp, arg1: ValueExp): ValueExp;

static initialSubString(arg0: AttributeValueExp, arg1: StringValueExp): QueryExp;

static anySubString(arg0: AttributeValueExp, arg1: StringValueExp): QueryExp;

static finalSubString(arg0: AttributeValueExp, arg1: StringValueExp): QueryExp;

static isInstanceOf(arg0: StringValueExp): QueryExp;
 }

export abstract class QueryEval implements Serializable {
constructor();

setMBeanServer(arg0: MBeanServer): void;

static getMBeanServer(): MBeanServer;
 }

export interface QueryExp extends Serializable {

apply(arg0: ObjectName): boolean;

setMBeanServer(arg0: MBeanServer): void;
 }

export class ReflectionException extends JMException {
constructor(arg0: Exception);
constructor(arg0: Exception, arg1: String);

getTargetException(): Exception;

getCause(): Throwable;
 }

export class RuntimeErrorException extends JMRuntimeException {
constructor(arg0: Error);
constructor(arg0: Error, arg1: String);

getTargetError(): Error;

getCause(): Throwable;
 }

export class RuntimeMBeanException extends JMRuntimeException {
constructor(arg0: RuntimeException);
constructor(arg0: RuntimeException, arg1: String);

getTargetException(): RuntimeException;

getCause(): Throwable;
 }

export class RuntimeOperationsException extends JMRuntimeException {
constructor(arg0: RuntimeException);
constructor(arg0: RuntimeException, arg1: String);

getTargetException(): RuntimeException;

getCause(): Throwable;
 }

export class ServiceNotFoundException extends OperationsException {
constructor();
constructor(arg0: String);
 }

export class StandardEmitterMBean extends StandardMBean implements NotificationEmitter {
constructor(arg0: T, arg1: Class<T>, arg2: NotificationEmitter);
constructor(arg0: T, arg1: Class<T>, arg2: boolean, arg3: NotificationEmitter);

removeNotificationListener(arg0: NotificationListener): void;

removeNotificationListener(arg0: NotificationListener, arg1: NotificationFilter, arg2: Object): void;

addNotificationListener(arg0: NotificationListener, arg1: NotificationFilter, arg2: Object): void;

getNotificationInfo(): MBeanNotificationInfo[];

sendNotification(arg0: Notification): void;
 }

export class StandardMBean implements DynamicMBean, MBeanRegistration {
constructor(arg0: T, arg1: Class<T>);
constructor(arg0: T, arg1: Class<T>, arg2: boolean);

setImplementation(arg0: Object): void;

getImplementation(): Object;

getMBeanInterface(): Class<any>;

getImplementationClass(): Class<any>;

getAttribute(arg0: String): Object;

setAttribute(arg0: Attribute): void;

getAttributes(arg0: String[]): AttributeList;

setAttributes(arg0: AttributeList): AttributeList;

invoke(arg0: String, arg1: Object[], arg2: String[]): Object;

getMBeanInfo(): MBeanInfo;

preRegister(arg0: MBeanServer, arg1: ObjectName): ObjectName;

postRegister(arg0: Boolean): void;

preDeregister(): void;

postDeregister(): void;
 }

export class StringValueExp implements ValueExp {
constructor();
constructor(arg0: String);

getValue(): String;
toString(): string;

setMBeanServer(arg0: MBeanServer): void;

apply(arg0: ObjectName): ValueExp;
 }

export interface ValueExp extends Serializable {

apply(arg0: ObjectName): ValueExp;

setMBeanServer(arg0: MBeanServer): void;
 }

}
