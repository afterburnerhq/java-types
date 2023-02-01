/// <reference path="java.rmi.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.management.d.ts" />
/// <reference path="javax.security.auth.d.ts" />
/// <reference path="java.rmi.server.d.ts" />
/// <reference path="javax.management.remote.d.ts" />
declare module '@afterburnerhq/javax.management.remote.rmi' { 
import { Remote, MarshalledObject } from '@afterburnerhq/java.rmi'
import { Integer, ClassLoader, String } from '@afterburnerhq/java.lang'
import { Map, Set } from '@afterburnerhq/java.util'
import { Serializable, Closeable } from '@afterburnerhq/java.io'
import { MBeanInfo, AttributeList, ObjectInstance, NotificationFilter, MBeanServerConnection, ObjectName, NotificationListener, MBeanServer } from '@afterburnerhq/javax.management'
import { Subject } from '@afterburnerhq/javax.security.auth'
import { RemoteRef, RemoteStub, RMIServerSocketFactory, Unreferenced, RMIClientSocketFactory } from '@afterburnerhq/java.rmi.server'
import { JMXServiceURL, NotificationResult, JMXAddressable, JMXConnector, JMXConnectorServer, MBeanServerForwarder } from '@afterburnerhq/javax.management.remote'
export interface RMIConnection extends Closeable, Remote {

getConnectionId(): String;

close(): void;

createMBean(arg0: String, arg1: ObjectName, arg2: Subject): ObjectInstance;

createMBean(arg0: String, arg1: ObjectName, arg2: ObjectName, arg3: Subject): ObjectInstance;

createMBean(arg0: String, arg1: ObjectName, arg2: MarshalledObject, arg3: String[], arg4: Subject): ObjectInstance;

createMBean(arg0: String, arg1: ObjectName, arg2: ObjectName, arg3: MarshalledObject, arg4: String[], arg5: Subject): ObjectInstance;

unregisterMBean(arg0: ObjectName, arg1: Subject): void;

getObjectInstance(arg0: ObjectName, arg1: Subject): ObjectInstance;

queryMBeans(arg0: ObjectName, arg1: MarshalledObject, arg2: Subject): Set<ObjectInstance>;

queryNames(arg0: ObjectName, arg1: MarshalledObject, arg2: Subject): Set<ObjectName>;

isRegistered(arg0: ObjectName, arg1: Subject): boolean;

getMBeanCount(arg0: Subject): Number;

getAttribute(arg0: ObjectName, arg1: String, arg2: Subject): Object;

getAttributes(arg0: ObjectName, arg1: String[], arg2: Subject): AttributeList;

setAttribute(arg0: ObjectName, arg1: MarshalledObject, arg2: Subject): void;

setAttributes(arg0: ObjectName, arg1: MarshalledObject, arg2: Subject): AttributeList;

invoke(arg0: ObjectName, arg1: String, arg2: MarshalledObject, arg3: String[], arg4: Subject): Object;

getDefaultDomain(arg0: Subject): String;

getDomains(arg0: Subject): String[];

getMBeanInfo(arg0: ObjectName, arg1: Subject): MBeanInfo;

isInstanceOf(arg0: ObjectName, arg1: String, arg2: Subject): boolean;

addNotificationListener(arg0: ObjectName, arg1: ObjectName, arg2: MarshalledObject, arg3: MarshalledObject, arg4: Subject): void;

removeNotificationListener(arg0: ObjectName, arg1: ObjectName, arg2: Subject): void;

removeNotificationListener(arg0: ObjectName, arg1: ObjectName, arg2: MarshalledObject, arg3: MarshalledObject, arg4: Subject): void;

addNotificationListeners(arg0: ObjectName[], arg1: MarshalledObject[], arg2: Subject[]): Number[];

removeNotificationListeners(arg0: ObjectName, arg1: Number[], arg2: Subject): void;

fetchNotifications(arg0: number, arg1: number, arg2: number): NotificationResult;
 }

export class RMIConnectionImpl implements RMIConnection, Unreferenced {
constructor(arg0: RMIServerImpl, arg1: String, arg2: ClassLoader, arg3: Subject, arg4: Map<String, any>);

getConnectionId(): String;

close(): void;

unreferenced(): void;

createMBean(arg0: String, arg1: ObjectName, arg2: Subject): ObjectInstance;

createMBean(arg0: String, arg1: ObjectName, arg2: ObjectName, arg3: Subject): ObjectInstance;

createMBean(arg0: String, arg1: ObjectName, arg2: MarshalledObject, arg3: String[], arg4: Subject): ObjectInstance;

createMBean(arg0: String, arg1: ObjectName, arg2: ObjectName, arg3: MarshalledObject, arg4: String[], arg5: Subject): ObjectInstance;

unregisterMBean(arg0: ObjectName, arg1: Subject): void;

getObjectInstance(arg0: ObjectName, arg1: Subject): ObjectInstance;

queryMBeans(arg0: ObjectName, arg1: MarshalledObject, arg2: Subject): Set<ObjectInstance>;

queryNames(arg0: ObjectName, arg1: MarshalledObject, arg2: Subject): Set<ObjectName>;

isRegistered(arg0: ObjectName, arg1: Subject): boolean;

getMBeanCount(arg0: Subject): Number;

getAttribute(arg0: ObjectName, arg1: String, arg2: Subject): Object;

getAttributes(arg0: ObjectName, arg1: String[], arg2: Subject): AttributeList;

setAttribute(arg0: ObjectName, arg1: MarshalledObject, arg2: Subject): void;

setAttributes(arg0: ObjectName, arg1: MarshalledObject, arg2: Subject): AttributeList;

invoke(arg0: ObjectName, arg1: String, arg2: MarshalledObject, arg3: String[], arg4: Subject): Object;

getDefaultDomain(arg0: Subject): String;

getDomains(arg0: Subject): String[];

getMBeanInfo(arg0: ObjectName, arg1: Subject): MBeanInfo;

isInstanceOf(arg0: ObjectName, arg1: String, arg2: Subject): boolean;

addNotificationListeners(arg0: ObjectName[], arg1: MarshalledObject[], arg2: Subject[]): Number[];

addNotificationListener(arg0: ObjectName, arg1: ObjectName, arg2: MarshalledObject, arg3: MarshalledObject, arg4: Subject): void;

removeNotificationListeners(arg0: ObjectName, arg1: Number[], arg2: Subject): void;

removeNotificationListener(arg0: ObjectName, arg1: ObjectName, arg2: Subject): void;

removeNotificationListener(arg0: ObjectName, arg1: ObjectName, arg2: MarshalledObject, arg3: MarshalledObject, arg4: Subject): void;

fetchNotifications(arg0: number, arg1: number, arg2: number): NotificationResult;
toString(): string;
 }

export class RMIConnectionImpl_Stub extends RemoteStub implements RMIConnection {
constructor(arg0: RemoteRef);

addNotificationListener(arg0: ObjectName, arg1: ObjectName, arg2: MarshalledObject, arg3: MarshalledObject, arg4: Subject): void;

addNotificationListeners(arg0: ObjectName[], arg1: MarshalledObject[], arg2: Subject[]): Number[];

close(): void;

createMBean(arg0: String, arg1: ObjectName, arg2: MarshalledObject, arg3: String[], arg4: Subject): ObjectInstance;

createMBean(arg0: String, arg1: ObjectName, arg2: ObjectName, arg3: MarshalledObject, arg4: String[], arg5: Subject): ObjectInstance;

createMBean(arg0: String, arg1: ObjectName, arg2: ObjectName, arg3: Subject): ObjectInstance;

createMBean(arg0: String, arg1: ObjectName, arg2: Subject): ObjectInstance;

fetchNotifications(arg0: number, arg1: number, arg2: number): NotificationResult;

getAttribute(arg0: ObjectName, arg1: String, arg2: Subject): Object;

getAttributes(arg0: ObjectName, arg1: String[], arg2: Subject): AttributeList;

getConnectionId(): String;

getDefaultDomain(arg0: Subject): String;

getDomains(arg0: Subject): String[];

getMBeanCount(arg0: Subject): Number;

getMBeanInfo(arg0: ObjectName, arg1: Subject): MBeanInfo;

getObjectInstance(arg0: ObjectName, arg1: Subject): ObjectInstance;

invoke(arg0: ObjectName, arg1: String, arg2: MarshalledObject, arg3: String[], arg4: Subject): Object;

isInstanceOf(arg0: ObjectName, arg1: String, arg2: Subject): boolean;

isRegistered(arg0: ObjectName, arg1: Subject): boolean;

queryMBeans(arg0: ObjectName, arg1: MarshalledObject, arg2: Subject): Set;

queryNames(arg0: ObjectName, arg1: MarshalledObject, arg2: Subject): Set;

removeNotificationListener(arg0: ObjectName, arg1: ObjectName, arg2: MarshalledObject, arg3: MarshalledObject, arg4: Subject): void;

removeNotificationListener(arg0: ObjectName, arg1: ObjectName, arg2: Subject): void;

removeNotificationListeners(arg0: ObjectName, arg1: Number[], arg2: Subject): void;

setAttribute(arg0: ObjectName, arg1: MarshalledObject, arg2: Subject): void;

setAttributes(arg0: ObjectName, arg1: MarshalledObject, arg2: Subject): AttributeList;

unregisterMBean(arg0: ObjectName, arg1: Subject): void;
 }

export class RMIConnector implements JMXConnector, Serializable, JMXAddressable {
constructor(arg0: JMXServiceURL, arg1: Map<String, any>);
constructor(arg0: RMIServer, arg1: Map<String, any>);
toString(): string;

getAddress(): JMXServiceURL;

connect(): void;

connect(arg0: Map<String, any>): void;

getConnectionId(): String;

getMBeanServerConnection(): MBeanServerConnection;

getMBeanServerConnection(arg0: Subject): MBeanServerConnection;

addConnectionNotificationListener(arg0: NotificationListener, arg1: NotificationFilter, arg2: Object): void;

removeConnectionNotificationListener(arg0: NotificationListener): void;

removeConnectionNotificationListener(arg0: NotificationListener, arg1: NotificationFilter, arg2: Object): void;

close(): void;
 }

export class RMIConnectorServer extends JMXConnectorServer {
static JNDI_REBIND_ATTRIBUTE:String
static RMI_CLIENT_SOCKET_FACTORY_ATTRIBUTE:String
static RMI_SERVER_SOCKET_FACTORY_ATTRIBUTE:String
static CREDENTIALS_FILTER_PATTERN:String
static SERIAL_FILTER_PATTERN:String
constructor(arg0: JMXServiceURL, arg1: Map<String, any>);
constructor(arg0: JMXServiceURL, arg1: Map<String, any>, arg2: MBeanServer);
constructor(arg0: JMXServiceURL, arg1: Map<String, any>, arg2: RMIServerImpl, arg3: MBeanServer);

toJMXConnector(arg0: Map<String, any>): JMXConnector;

start(): void;

stop(): void;

isActive(): boolean;

getAddress(): JMXServiceURL;

getAttributes(): Map<String, any>;

setMBeanServerForwarder(arg0: MBeanServerForwarder): void;
 }

export class RMIIIOPServerImpl extends RMIServerImpl {
constructor(arg0: Map<String, any>);

toStub(): Remote;
 }

export class RMIJRMPServerImpl extends RMIServerImpl {
constructor(arg0: number, arg1: RMIClientSocketFactory, arg2: RMIServerSocketFactory, arg3: Map<String, any>);

toStub(): Remote;
 }

export interface RMIServer extends Remote {

getVersion(): String;

newClient(arg0: Object): RMIConnection;
 }

export abstract class RMIServerImpl implements Closeable, RMIServer {
constructor(arg0: Map<String, any>);

abstract toStub(): Remote;

setDefaultClassLoader(arg0: ClassLoader): void;

getDefaultClassLoader(): ClassLoader;

setMBeanServer(arg0: MBeanServer): void;

getMBeanServer(): MBeanServer;

getVersion(): String;

newClient(arg0: Object): RMIConnection;

close(): void;
 }

export class RMIServerImpl_Stub extends RemoteStub implements RMIServer {
constructor(arg0: RemoteRef);

getVersion(): String;

newClient(arg0: Object): RMIConnection;
 }

}
