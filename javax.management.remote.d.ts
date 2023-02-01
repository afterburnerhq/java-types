/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.management.d.ts" />
/// <reference path="javax.security.auth.d.ts" />
declare module '@afterburnerhq/javax.management.remote' { 
import { BasicPermission, Principal } from '@afterburnerhq/java.security'
import { Integer, Throwable, Error, String, Boolean } from '@afterburnerhq/java.lang'
import { Map } from '@afterburnerhq/java.util'
import { Serializable, Closeable, IOException } from '@afterburnerhq/java.io'
import { MBeanNotificationInfo, NotificationBroadcasterSupport, NotificationFilter, Notification, MBeanServerConnection, NotificationListener, MBeanRegistration, MBeanServer, ObjectName } from '@afterburnerhq/javax.management'
import { Subject } from '@afterburnerhq/javax.security.auth'
export interface JMXAddressable {

getAddress(): JMXServiceURL;
 }

export interface JMXAuthenticator {

authenticate(arg0: Object): Subject;
 }

export class JMXConnectionNotification extends Notification {
static OPENED:String
static CLOSED:String
static FAILED:String
static NOTIFS_LOST:String
constructor(arg0: String, arg1: Object, arg2: String, arg3: number, arg4: String, arg5: Object);

getConnectionId(): String;
 }

export namespace JMXConnector { 
const CREDENTIALS:String
}

export interface JMXConnector extends Closeable {
CREDENTIALS:String

connect(): void;

connect(arg0: Map<String, any>): void;

getMBeanServerConnection(): MBeanServerConnection;

getMBeanServerConnection(arg0: Subject): MBeanServerConnection;

close(): void;

addConnectionNotificationListener(arg0: NotificationListener, arg1: NotificationFilter, arg2: Object): void;

removeConnectionNotificationListener(arg0: NotificationListener): void;

removeConnectionNotificationListener(arg0: NotificationListener, arg1: NotificationFilter, arg2: Object): void;

getConnectionId(): String;
 }

export class JMXConnectorFactory {
static DEFAULT_CLASS_LOADER:String
static PROTOCOL_PROVIDER_PACKAGES:String
static PROTOCOL_PROVIDER_CLASS_LOADER:String

static connect(arg0: JMXServiceURL): JMXConnector;

static connect(arg0: JMXServiceURL, arg1: Map<String, any>): JMXConnector;

static newJMXConnector(arg0: JMXServiceURL, arg1: Map<String, any>): JMXConnector;
 }

export interface JMXConnectorProvider {

newJMXConnector(arg0: JMXServiceURL, arg1: Map<String, any>): JMXConnector;
 }

export abstract class JMXConnectorServer extends NotificationBroadcasterSupport implements JMXConnectorServerMBean, MBeanRegistration, JMXAddressable {
static AUTHENTICATOR:String
constructor();
constructor(arg0: MBeanServer);

getMBeanServer(): MBeanServer;

setMBeanServerForwarder(arg0: MBeanServerForwarder): void;

getConnectionIds(): String[];

toJMXConnector(arg0: Map<String, any>): JMXConnector;

getNotificationInfo(): MBeanNotificationInfo[];

preRegister(arg0: MBeanServer, arg1: ObjectName): ObjectName;

postRegister(arg0: Boolean): void;

preDeregister(): void;

postDeregister(): void;
 }

export class JMXConnectorServerFactory {
static DEFAULT_CLASS_LOADER:String
static DEFAULT_CLASS_LOADER_NAME:String
static PROTOCOL_PROVIDER_PACKAGES:String
static PROTOCOL_PROVIDER_CLASS_LOADER:String

static newJMXConnectorServer(arg0: JMXServiceURL, arg1: Map<String, any>, arg2: MBeanServer): JMXConnectorServer;
 }

export interface JMXConnectorServerMBean {

start(): void;

stop(): void;

isActive(): boolean;

setMBeanServerForwarder(arg0: MBeanServerForwarder): void;

getConnectionIds(): String[];

getAddress(): JMXServiceURL;

getAttributes(): Map<String, any>;

toJMXConnector(arg0: Map<String, any>): JMXConnector;
 }

export interface JMXConnectorServerProvider {

newJMXConnectorServer(arg0: JMXServiceURL, arg1: Map<String, any>, arg2: MBeanServer): JMXConnectorServer;
 }

export interface JMXPrincipal extends Principal, Serializable { }
export class JMXPrincipal implements Principal, Serializable {
constructor(arg0: String);

getName(): String;
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class JMXProviderException extends IOException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);

getCause(): Throwable;
 }

export class JMXServerErrorException extends IOException {
constructor(arg0: String, arg1: Error);

getCause(): Throwable;
 }

export class JMXServiceURL implements Serializable {
constructor(arg0: String);
constructor(arg0: String, arg1: String, arg2: number);
constructor(arg0: String, arg1: String, arg2: number, arg3: String);

getProtocol(): String;

getHost(): String;

getPort(): number;

getURLPath(): String;
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export interface MBeanServerForwarder extends MBeanServer {

getMBeanServer(): MBeanServer;

setMBeanServer(arg0: MBeanServer): void;
 }

export class NotificationResult implements Serializable {
constructor(arg0: number, arg1: number, arg2: TargetedNotification[]);

getEarliestSequenceNumber(): number;

getNextSequenceNumber(): number;

getTargetedNotifications(): TargetedNotification[];
toString(): string;
 }

export class SubjectDelegationPermission extends BasicPermission {
constructor(arg0: String);
constructor(arg0: String, arg1: String);
 }

export class TargetedNotification implements Serializable {
constructor(arg0: Notification, arg1: Number);

getNotification(): Notification;

getListenerID(): Number;
toString(): string;
 }

}
