/// <reference path="java.lang.reflect.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="javax.management.d.ts" />
declare module '@afterburnerhq/javax.management.modelmbean' { 
import { Constructor, Method } from '@afterburnerhq/java.lang.reflect'
import { Boolean, Exception, String } from '@afterburnerhq/java.lang'
import { DynamicMBean, MBeanInfo, AttributeChangeNotification, Attribute, MBeanOperationInfo, AttributeList, DescriptorAccess, MBeanAttributeInfo, Notification, ObjectName, MBeanConstructorInfo, MBeanNotificationInfo, NotificationEmitter, NotificationBroadcaster, Descriptor, NotificationFilter, PersistentMBean, MBeanParameterInfo, NotificationListener, MBeanRegistration, MBeanServer } from '@afterburnerhq/javax.management'
export class DescriptorSupport implements Descriptor {
constructor();
constructor(arg0: number);
constructor(arg0: DescriptorSupport);
constructor(arg0: String);
constructor(arg0: String[], arg1: Object[]);
constructor(arg0: String[]);

getFieldValue(arg0: String): Object;

setField(arg0: String, arg1: Object): void;

getFields(): String[];

getFieldNames(): String[];

getFieldValues(arg0: String[]): Object[];

setFields(arg0: String[], arg1: Object[]): void;

clone(): Object;

removeField(arg0: String): void;

equals(arg0: Object): boolean;

hashCode(): number;

isValid(): boolean;

toXMLString(): String;
toString(): string;
 }

export class InvalidTargetObjectTypeException extends Exception {
constructor();
constructor(arg0: String);
constructor(arg0: Exception, arg1: String);
 }

export interface ModelMBean extends DynamicMBean, PersistentMBean, ModelMBeanNotificationBroadcaster {

setModelMBeanInfo(arg0: ModelMBeanInfo): void;

setManagedResource(arg0: Object, arg1: String): void;
 }

export class ModelMBeanAttributeInfo extends MBeanAttributeInfo implements DescriptorAccess {
constructor(arg0: String, arg1: String, arg2: Method, arg3: Method);
constructor(arg0: String, arg1: String, arg2: Method, arg3: Method, arg4: Descriptor);
constructor(arg0: String, arg1: String, arg2: String, arg3: boolean, arg4: boolean, arg5: boolean);
constructor(arg0: String, arg1: String, arg2: String, arg3: boolean, arg4: boolean, arg5: boolean, arg6: Descriptor);
constructor(arg0: ModelMBeanAttributeInfo);

getDescriptor(): Descriptor;

setDescriptor(arg0: Descriptor): void;

clone(): Object;
toString(): string;
 }

export class ModelMBeanConstructorInfo extends MBeanConstructorInfo implements DescriptorAccess {
constructor(arg0: String, arg1: Constructor<any>);
constructor(arg0: String, arg1: Constructor<any>, arg2: Descriptor);
constructor(arg0: String, arg1: String, arg2: MBeanParameterInfo[]);
constructor(arg0: String, arg1: String, arg2: MBeanParameterInfo[], arg3: Descriptor);

clone(): Object;

getDescriptor(): Descriptor;

setDescriptor(arg0: Descriptor): void;
toString(): string;
 }

export interface ModelMBeanInfo {

getDescriptors(arg0: String): Descriptor[];

setDescriptors(arg0: Descriptor[]): void;

getDescriptor(arg0: String, arg1: String): Descriptor;

setDescriptor(arg0: Descriptor, arg1: String): void;

getMBeanDescriptor(): Descriptor;

setMBeanDescriptor(arg0: Descriptor): void;

getAttribute(arg0: String): ModelMBeanAttributeInfo;

getOperation(arg0: String): ModelMBeanOperationInfo;

getNotification(arg0: String): ModelMBeanNotificationInfo;

clone(): Object;

getAttributes(): MBeanAttributeInfo[];

getClassName(): String;

getConstructors(): MBeanConstructorInfo[];

getDescription(): String;

getNotifications(): MBeanNotificationInfo[];

getOperations(): MBeanOperationInfo[];
 }

export class ModelMBeanInfoSupport extends MBeanInfo implements ModelMBeanInfo {
constructor(arg0: ModelMBeanInfo);
constructor(arg0: String, arg1: String, arg2: ModelMBeanAttributeInfo[], arg3: ModelMBeanConstructorInfo[], arg4: ModelMBeanOperationInfo[], arg5: ModelMBeanNotificationInfo[]);
constructor(arg0: String, arg1: String, arg2: ModelMBeanAttributeInfo[], arg3: ModelMBeanConstructorInfo[], arg4: ModelMBeanOperationInfo[], arg5: ModelMBeanNotificationInfo[], arg6: Descriptor);

clone(): Object;

getDescriptors(arg0: String): Descriptor[];

setDescriptors(arg0: Descriptor[]): void;

getDescriptor(arg0: String): Descriptor;

getDescriptor(arg0: String, arg1: String): Descriptor;

setDescriptor(arg0: Descriptor, arg1: String): void;

getAttribute(arg0: String): ModelMBeanAttributeInfo;

getOperation(arg0: String): ModelMBeanOperationInfo;

getConstructor(arg0: String): ModelMBeanConstructorInfo;

getNotification(arg0: String): ModelMBeanNotificationInfo;

getDescriptor(): Descriptor;

getMBeanDescriptor(): Descriptor;

setMBeanDescriptor(arg0: Descriptor): void;
 }

export interface ModelMBeanNotificationBroadcaster extends NotificationBroadcaster {

sendNotification(arg0: Notification): void;

sendNotification(arg0: String): void;

sendAttributeChangeNotification(arg0: AttributeChangeNotification): void;

sendAttributeChangeNotification(arg0: Attribute, arg1: Attribute): void;

addAttributeChangeNotificationListener(arg0: NotificationListener, arg1: String, arg2: Object): void;

removeAttributeChangeNotificationListener(arg0: NotificationListener, arg1: String): void;
 }

export class ModelMBeanNotificationInfo extends MBeanNotificationInfo implements DescriptorAccess {
constructor(arg0: String[], arg1: String, arg2: String);
constructor(arg0: String[], arg1: String, arg2: String, arg3: Descriptor);
constructor(arg0: ModelMBeanNotificationInfo);

clone(): Object;

getDescriptor(): Descriptor;

setDescriptor(arg0: Descriptor): void;
toString(): string;
 }

export class ModelMBeanOperationInfo extends MBeanOperationInfo implements DescriptorAccess {
constructor(arg0: String, arg1: Method);
constructor(arg0: String, arg1: Method, arg2: Descriptor);
constructor(arg0: String, arg1: String, arg2: MBeanParameterInfo[], arg3: String, arg4: number);
constructor(arg0: String, arg1: String, arg2: MBeanParameterInfo[], arg3: String, arg4: number, arg5: Descriptor);
constructor(arg0: ModelMBeanOperationInfo);

clone(): Object;

getDescriptor(): Descriptor;

setDescriptor(arg0: Descriptor): void;
toString(): string;
 }

export class RequiredModelMBean implements ModelMBean, MBeanRegistration, NotificationEmitter {
constructor();
constructor(arg0: ModelMBeanInfo);

setModelMBeanInfo(arg0: ModelMBeanInfo): void;

setManagedResource(arg0: Object, arg1: String): void;

load(): void;

store(): void;

getMBeanInfo(): MBeanInfo;

invoke(arg0: String, arg1: Object[], arg2: String[]): Object;

getAttribute(arg0: String): Object;

getAttributes(arg0: String[]): AttributeList;

setAttribute(arg0: Attribute): void;

setAttributes(arg0: AttributeList): AttributeList;

addNotificationListener(arg0: NotificationListener, arg1: NotificationFilter, arg2: Object): void;

removeNotificationListener(arg0: NotificationListener): void;

removeNotificationListener(arg0: NotificationListener, arg1: NotificationFilter, arg2: Object): void;

sendNotification(arg0: Notification): void;

sendNotification(arg0: String): void;

getNotificationInfo(): MBeanNotificationInfo[];

addAttributeChangeNotificationListener(arg0: NotificationListener, arg1: String, arg2: Object): void;

removeAttributeChangeNotificationListener(arg0: NotificationListener, arg1: String): void;

sendAttributeChangeNotification(arg0: AttributeChangeNotification): void;

sendAttributeChangeNotification(arg0: Attribute, arg1: Attribute): void;

preRegister(arg0: MBeanServer, arg1: ObjectName): ObjectName;

postRegister(arg0: Boolean): void;

preDeregister(): void;

postDeregister(): void;
 }

export class XMLParseException extends Exception {
constructor();
constructor(arg0: String);
constructor(arg0: Exception, arg1: String);
 }

}
