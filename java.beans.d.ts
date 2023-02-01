/// <reference path="java.applet.d.ts" />
/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.reflect.d.ts" />
/// <reference path="java.beans.beancontext.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="org.xml.sax.helpers.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="org.xml.sax.d.ts" />
declare module '@afterburnerhq/java.beans' { 
import { Applet } from '@afterburnerhq/java.applet'
import { Graphics, Rectangle, Image, Component } from '@afterburnerhq/java.awt'
import { InvocationHandler, Method } from '@afterburnerhq/java.lang.reflect'
import { BeanContext } from '@afterburnerhq/java.beans.beancontext'
import { ClassLoader, Class, String, Exception, AutoCloseable } from '@afterburnerhq/java.lang'
import { Enumeration, EventListener, EventListenerProxy, EventObject } from '@afterburnerhq/java.util'
import { DefaultHandler } from '@afterburnerhq/org.xml.sax.helpers'
import { Serializable, InputStream, OutputStream } from '@afterburnerhq/java.io'
import { InputSource } from '@afterburnerhq/org.xml.sax'
export interface AppletInitializer {

initialize(arg0: Applet, arg1: BeanContext): void;

activate(arg0: Applet): void;
 }

export class BeanDescriptor extends FeatureDescriptor {
constructor(arg0: Class<any>);
constructor(arg0: Class<any>, arg1: Class<any>);

getBeanClass(): Class<any>;

getCustomizerClass(): Class<any>;
 }

export namespace BeanInfo { 
const ICON_COLOR_16x16:number
const ICON_COLOR_32x32:number
const ICON_MONO_16x16:number
const ICON_MONO_32x32:number
}

export interface BeanInfo {
ICON_COLOR_16x16:number
ICON_COLOR_32x32:number
ICON_MONO_16x16:number
ICON_MONO_32x32:number

getBeanDescriptor(): BeanDescriptor;

getEventSetDescriptors(): EventSetDescriptor[];

getDefaultEventIndex(): number;

getPropertyDescriptors(): PropertyDescriptor[];

getDefaultPropertyIndex(): number;

getMethodDescriptors(): MethodDescriptor[];

getAdditionalBeanInfo(): BeanInfo[];

getIcon(arg0: number): Image;
 }


export class Beans {
constructor();

static instantiate(arg0: ClassLoader, arg1: String): Object;

static instantiate(arg0: ClassLoader, arg1: String, arg2: BeanContext): Object;

static instantiate(arg0: ClassLoader, arg1: String, arg2: BeanContext, arg3: AppletInitializer): Object;

static getInstanceOf(arg0: Object, arg1: Class<any>): Object;

static isInstanceOf(arg0: Object, arg1: Class<any>): boolean;

static isDesignTime(): boolean;

static isGuiAvailable(): boolean;

static setDesignTime(arg0: boolean): void;

static setGuiAvailable(arg0: boolean): void;
 }


export interface Customizer {

setObject(arg0: Object): void;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;
 }

export class DefaultPersistenceDelegate extends PersistenceDelegate {
constructor();
constructor(arg0: String[]);
 }

export namespace DesignMode { 
const PROPERTYNAME:String
}

export interface DesignMode {
PROPERTYNAME:String

setDesignTime(arg0: boolean): void;

isDesignTime(): boolean;
 }

export class Encoder {
constructor();

setExceptionListener(arg0: ExceptionListener): void;

getExceptionListener(): ExceptionListener;

getPersistenceDelegate(arg0: Class<any>): PersistenceDelegate;

setPersistenceDelegate(arg0: Class<any>, arg1: PersistenceDelegate): void;

remove(arg0: Object): Object;

get(arg0: Object): Object;

writeStatement(arg0: Statement): void;

writeExpression(arg0: Expression): void;
 }

export class EventHandler implements InvocationHandler {
constructor(arg0: Object, arg1: String, arg2: String, arg3: String);

getTarget(): Object;

getAction(): String;

getEventPropertyName(): String;

getListenerMethodName(): String;

invoke(arg0: Object, arg1: Method, arg2: Object[]): Object;

static create<T extends Object>(arg0: Class<T>, arg1: Object, arg2: String): T;

static create<T extends Object>(arg0: Class<T>, arg1: Object, arg2: String, arg3: String): T;

static create<T extends Object>(arg0: Class<T>, arg1: Object, arg2: String, arg3: String, arg4: String): T;
 }

export class EventSetDescriptor extends FeatureDescriptor {
constructor(arg0: Class<any>, arg1: String, arg2: Class<any>, arg3: String);
constructor(arg0: Class<any>, arg1: String, arg2: Class<any>, arg3: String[], arg4: String, arg5: String);
constructor(arg0: Class<any>, arg1: String, arg2: Class<any>, arg3: String[], arg4: String, arg5: String, arg6: String);
constructor(arg0: String, arg1: Class<any>, arg2: Method[], arg3: Method, arg4: Method);
constructor(arg0: String, arg1: Class<any>, arg2: Method[], arg3: Method, arg4: Method, arg5: Method);
constructor(arg0: String, arg1: Class<any>, arg2: MethodDescriptor[], arg3: Method, arg4: Method);

getListenerType(): Class<any>;

getListenerMethods(): Method[];

getListenerMethodDescriptors(): MethodDescriptor[];

getAddListenerMethod(): Method;

getRemoveListenerMethod(): Method;

getGetListenerMethod(): Method;

setUnicast(arg0: boolean): void;

isUnicast(): boolean;

setInDefaultEventSet(arg0: boolean): void;

isInDefaultEventSet(): boolean;
 }

export interface ExceptionListener {

exceptionThrown(arg0: Exception): void;
 }

export class Expression extends Statement {
constructor(arg0: Object, arg1: String, arg2: Object[]);
constructor(arg0: Object, arg1: Object, arg2: String, arg3: Object[]);

execute(): void;

getValue(): Object;

setValue(arg0: Object): void;
toString(): string;
 }

export class FeatureDescriptor {
constructor();

getName(): String;

setName(arg0: String): void;

getDisplayName(): String;

setDisplayName(arg0: String): void;

isExpert(): boolean;

setExpert(arg0: boolean): void;

isHidden(): boolean;

setHidden(arg0: boolean): void;

isPreferred(): boolean;

setPreferred(arg0: boolean): void;

getShortDescription(): String;

setShortDescription(arg0: String): void;

setValue(arg0: String, arg1: Object): void;

getValue(arg0: String): Object;

attributeNames(): Enumeration<String>;
toString(): string;
 }

export class IndexedPropertyChangeEvent extends PropertyChangeEvent {
constructor(arg0: Object, arg1: String, arg2: Object, arg3: Object, arg4: number);

getIndex(): number;
 }

export class IndexedPropertyDescriptor extends PropertyDescriptor {
constructor(arg0: String, arg1: Class<any>);
constructor(arg0: String, arg1: Class<any>, arg2: String, arg3: String, arg4: String, arg5: String);
constructor(arg0: String, arg1: Method, arg2: Method, arg3: Method, arg4: Method);

getIndexedReadMethod(): Method;

setIndexedReadMethod(arg0: Method): void;

getIndexedWriteMethod(): Method;

setIndexedWriteMethod(arg0: Method): void;

getIndexedPropertyType(): Class<any>;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class IntrospectionException extends Exception {
constructor(arg0: String);
 }

export class Introspector {
static USE_ALL_BEANINFO:number
static IGNORE_IMMEDIATE_BEANINFO:number
static IGNORE_ALL_BEANINFO:number

static getBeanInfo(arg0: Class<any>): BeanInfo;

static getBeanInfo(arg0: Class<any>, arg1: number): BeanInfo;

static getBeanInfo(arg0: Class<any>, arg1: Class<any>): BeanInfo;

static getBeanInfo(arg0: Class<any>, arg1: Class<any>, arg2: number): BeanInfo;

static decapitalize(arg0: String): String;

static getBeanInfoSearchPath(): String[];

static setBeanInfoSearchPath(arg0: String[]): void;

static flushCaches(): void;

static flushFromCaches(arg0: Class<any>): void;
 }


export class MethodDescriptor extends FeatureDescriptor {
constructor(arg0: Method);
constructor(arg0: Method, arg1: ParameterDescriptor[]);

getMethod(): Method;

getParameterDescriptors(): ParameterDescriptor[];
 }

export class ParameterDescriptor extends FeatureDescriptor {
constructor();
 }

export abstract class PersistenceDelegate {

writeObject(arg0: Object, arg1: Encoder): void;
 }

export class PropertyChangeEvent extends EventObject {
constructor(arg0: Object, arg1: String, arg2: Object, arg3: Object);

getPropertyName(): String;

getNewValue(): Object;

getOldValue(): Object;

setPropagationId(arg0: Object): void;

getPropagationId(): Object;
toString(): string;
 }

export interface PropertyChangeListener extends EventListener {

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class PropertyChangeListenerProxy extends EventListenerProxy<PropertyChangeListener> implements PropertyChangeListener {
constructor(arg0: String, arg1: PropertyChangeListener);

propertyChange(arg0: PropertyChangeEvent): void;

getPropertyName(): String;
 }

export class PropertyChangeSupport implements Serializable {
constructor(arg0: Object);

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

getPropertyChangeListeners(): PropertyChangeListener[];

addPropertyChangeListener(arg0: String, arg1: PropertyChangeListener): void;

removePropertyChangeListener(arg0: String, arg1: PropertyChangeListener): void;

getPropertyChangeListeners(arg0: String): PropertyChangeListener[];

firePropertyChange(arg0: String, arg1: Object, arg2: Object): void;

firePropertyChange(arg0: String, arg1: number, arg2: number): void;

firePropertyChange(arg0: String, arg1: boolean, arg2: boolean): void;

firePropertyChange(arg0: PropertyChangeEvent): void;

fireIndexedPropertyChange(arg0: String, arg1: number, arg2: Object, arg3: Object): void;

fireIndexedPropertyChange(arg0: String, arg1: number, arg2: number, arg3: number): void;

fireIndexedPropertyChange(arg0: String, arg1: number, arg2: boolean, arg3: boolean): void;

hasListeners(arg0: String): boolean;
 }

export class PropertyDescriptor extends FeatureDescriptor {
constructor(arg0: String, arg1: Class<any>);
constructor(arg0: String, arg1: Class<any>, arg2: String, arg3: String);
constructor(arg0: String, arg1: Method, arg2: Method);

getPropertyType(): Class<any>;

getReadMethod(): Method;

setReadMethod(arg0: Method): void;

getWriteMethod(): Method;

setWriteMethod(arg0: Method): void;

isBound(): boolean;

setBound(arg0: boolean): void;

isConstrained(): boolean;

setConstrained(arg0: boolean): void;

setPropertyEditorClass(arg0: Class<any>): void;

getPropertyEditorClass(): Class<any>;

createPropertyEditor(arg0: Object): PropertyEditor;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export interface PropertyEditor {

setValue(arg0: Object): void;

getValue(): Object;

isPaintable(): boolean;

paintValue(arg0: Graphics, arg1: Rectangle): void;

getJavaInitializationString(): String;

getAsText(): String;

setAsText(arg0: String): void;

getTags(): String[];

getCustomEditor(): Component;

supportsCustomEditor(): boolean;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;
 }

export class PropertyEditorManager {
constructor();

static registerEditor(arg0: Class<any>, arg1: Class<any>): void;

static findEditor(arg0: Class<any>): PropertyEditor;

static getEditorSearchPath(): String[];

static setEditorSearchPath(arg0: String[]): void;
 }

export class PropertyEditorSupport implements PropertyEditor {
constructor();
constructor(arg0: Object);

getSource(): Object;

setSource(arg0: Object): void;

setValue(arg0: Object): void;

getValue(): Object;

isPaintable(): boolean;

paintValue(arg0: Graphics, arg1: Rectangle): void;

getJavaInitializationString(): String;

getAsText(): String;

setAsText(arg0: String): void;

getTags(): String[];

getCustomEditor(): Component;

supportsCustomEditor(): boolean;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

firePropertyChange(): void;
 }

export class PropertyVetoException extends Exception {
constructor(arg0: String, arg1: PropertyChangeEvent);

getPropertyChangeEvent(): PropertyChangeEvent;
 }

export class SimpleBeanInfo implements BeanInfo {
constructor();

getBeanDescriptor(): BeanDescriptor;

getPropertyDescriptors(): PropertyDescriptor[];

getDefaultPropertyIndex(): number;

getEventSetDescriptors(): EventSetDescriptor[];

getDefaultEventIndex(): number;

getMethodDescriptors(): MethodDescriptor[];

getAdditionalBeanInfo(): BeanInfo[];

getIcon(arg0: number): Image;

loadImage(arg0: String): Image;
 }

export class Statement {
constructor(arg0: Object, arg1: String, arg2: Object[]);

getTarget(): Object;

getMethodName(): String;

getArguments(): Object[];

execute(): void;
toString(): string;
 }


export interface VetoableChangeListener extends EventListener {

vetoableChange(arg0: PropertyChangeEvent): void;
 }

export class VetoableChangeListenerProxy extends EventListenerProxy<VetoableChangeListener> implements VetoableChangeListener {
constructor(arg0: String, arg1: VetoableChangeListener);

vetoableChange(arg0: PropertyChangeEvent): void;

getPropertyName(): String;
 }

export class VetoableChangeSupport implements Serializable {
constructor(arg0: Object);

addVetoableChangeListener(arg0: VetoableChangeListener): void;

removeVetoableChangeListener(arg0: VetoableChangeListener): void;

getVetoableChangeListeners(): VetoableChangeListener[];

addVetoableChangeListener(arg0: String, arg1: VetoableChangeListener): void;

removeVetoableChangeListener(arg0: String, arg1: VetoableChangeListener): void;

getVetoableChangeListeners(arg0: String): VetoableChangeListener[];

fireVetoableChange(arg0: String, arg1: Object, arg2: Object): void;

fireVetoableChange(arg0: String, arg1: number, arg2: number): void;

fireVetoableChange(arg0: String, arg1: boolean, arg2: boolean): void;

fireVetoableChange(arg0: PropertyChangeEvent): void;

hasListeners(arg0: String): boolean;
 }

export interface Visibility {

needsGui(): boolean;

dontUseGui(): void;

okToUseGui(): void;

avoidingGui(): boolean;
 }

export class XMLDecoder implements AutoCloseable {
constructor(arg0: InputStream);
constructor(arg0: InputStream, arg1: Object);
constructor(arg0: InputStream, arg1: Object, arg2: ExceptionListener);
constructor(arg0: InputStream, arg1: Object, arg2: ExceptionListener, arg3: ClassLoader);
constructor(arg0: InputSource);

close(): void;

setExceptionListener(arg0: ExceptionListener): void;

getExceptionListener(): ExceptionListener;

readObject(): Object;

setOwner(arg0: Object): void;

getOwner(): Object;

static createHandler(arg0: Object, arg1: ExceptionListener, arg2: ClassLoader): DefaultHandler;
 }

export class XMLEncoder extends Encoder implements AutoCloseable {
constructor(arg0: OutputStream);
constructor(arg0: OutputStream, arg1: String, arg2: boolean, arg3: number);

setOwner(arg0: Object): void;

getOwner(): Object;

writeObject(arg0: Object): void;

writeStatement(arg0: Statement): void;

writeExpression(arg0: Expression): void;

flush(): void;

close(): void;
 }

}
