/// <reference path="java.lang.reflect.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.management.d.ts" />
/// <reference path="java.math.d.ts" />
declare module '@afterburnerhq/javax.management.openmbean' { 
import { InvocationHandler, Method } from '@afterburnerhq/java.lang.reflect'
import { Comparable, Character, String, Double, Integer, Float, Byte, Long, Class, Cloneable, Void, Boolean, IllegalArgumentException, Short } from '@afterburnerhq/java.lang'
import { Collection, List, Set, Map, Date } from '@afterburnerhq/java.util'
import { Serializable } from '@afterburnerhq/java.io'
import { MBeanConstructorInfo, MBeanNotificationInfo, MBeanInfo, MBeanOperationInfo, JMException, Descriptor, MBeanAttributeInfo, MBeanParameterInfo, ObjectName } from '@afterburnerhq/javax.management'
import { BigInteger, BigDecimal } from '@afterburnerhq/java.math'
export class ArrayType<T extends Object> extends OpenType<T> {
constructor(arg0: number, arg1: OpenType<any>);
constructor(arg0: SimpleType<any>, arg1: boolean);

getDimension(): number;

getElementOpenType(): OpenType<any>;

isPrimitiveArray(): boolean;

isValue(arg0: Object): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;

static getArrayType<E extends Object>(arg0: OpenType<E>): ArrayType<E[]>;

static getPrimitiveArrayType<T extends Object>(arg0: Class<T>): ArrayType<T>;
 }

export interface CompositeData {

getCompositeType(): CompositeType;

get(arg0: String): Object;

getAll(arg0: String[]): Object[];

containsKey(arg0: String): boolean;

containsValue(arg0: Object): boolean;

values(): Collection<any>;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class CompositeDataInvocationHandler implements InvocationHandler {
constructor(arg0: CompositeData);

getCompositeData(): CompositeData;

invoke(arg0: Object, arg1: Method, arg2: Object[]): Object;
 }

export class CompositeDataSupport implements CompositeData, Serializable {
constructor(arg0: CompositeType, arg1: String[], arg2: Object[]);
constructor(arg0: CompositeType, arg1: Map<String, any>);

getCompositeType(): CompositeType;

get(arg0: String): Object;

getAll(arg0: String[]): Object[];

containsKey(arg0: String): boolean;

containsValue(arg0: Object): boolean;

values(): Collection<any>;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export interface CompositeDataView {

toCompositeData(arg0: CompositeType): CompositeData;
 }

export class CompositeType extends OpenType<CompositeData> {
constructor(arg0: String, arg1: String, arg2: String[], arg3: String[], arg4: OpenType<any>[]);

containsKey(arg0: String): boolean;

getDescription(arg0: String): String;

getType(arg0: String): OpenType<any>;

keySet(): Set<String>;

isValue(arg0: Object): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class InvalidKeyException extends IllegalArgumentException {
constructor();
constructor(arg0: String);
 }

export class InvalidOpenTypeException extends IllegalArgumentException {
constructor();
constructor(arg0: String);
 }

export class KeyAlreadyExistsException extends IllegalArgumentException {
constructor();
constructor(arg0: String);
 }

export class OpenDataException extends JMException {
constructor();
constructor(arg0: String);
 }

export interface OpenMBeanAttributeInfo extends OpenMBeanParameterInfo {

isReadable(): boolean;

isWritable(): boolean;

isIs(): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class OpenMBeanAttributeInfoSupport extends MBeanAttributeInfo implements OpenMBeanAttributeInfo {
constructor(arg0: String, arg1: String, arg2: OpenType<any>, arg3: boolean, arg4: boolean, arg5: boolean);
constructor(arg0: String, arg1: String, arg2: OpenType<any>, arg3: boolean, arg4: boolean, arg5: boolean, arg6: Descriptor);
constructor(arg0: String, arg1: String, arg2: OpenType<T>, arg3: boolean, arg4: boolean, arg5: boolean, arg6: T);
constructor(arg0: String, arg1: String, arg2: OpenType<T>, arg3: boolean, arg4: boolean, arg5: boolean, arg6: T, arg7: T[]);
constructor(arg0: String, arg1: String, arg2: OpenType<T>, arg3: boolean, arg4: boolean, arg5: boolean, arg6: T, arg7: Comparable<T>, arg8: Comparable<T>);

getOpenType(): OpenType<any>;

getDefaultValue(): Object;

getLegalValues(): Set<any>;

getMinValue(): Comparable<any>;

getMaxValue(): Comparable<any>;

hasDefaultValue(): boolean;

hasLegalValues(): boolean;

hasMinValue(): boolean;

hasMaxValue(): boolean;

isValue(arg0: Object): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export interface OpenMBeanConstructorInfo {

getDescription(): String;

getName(): String;

getSignature(): MBeanParameterInfo[];

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class OpenMBeanConstructorInfoSupport extends MBeanConstructorInfo implements OpenMBeanConstructorInfo {
constructor(arg0: String, arg1: String, arg2: OpenMBeanParameterInfo[]);
constructor(arg0: String, arg1: String, arg2: OpenMBeanParameterInfo[], arg3: Descriptor);

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export interface OpenMBeanInfo {

getClassName(): String;

getDescription(): String;

getAttributes(): MBeanAttributeInfo[];

getOperations(): MBeanOperationInfo[];

getConstructors(): MBeanConstructorInfo[];

getNotifications(): MBeanNotificationInfo[];

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class OpenMBeanInfoSupport extends MBeanInfo implements OpenMBeanInfo {
constructor(arg0: String, arg1: String, arg2: OpenMBeanAttributeInfo[], arg3: OpenMBeanConstructorInfo[], arg4: OpenMBeanOperationInfo[], arg5: MBeanNotificationInfo[]);
constructor(arg0: String, arg1: String, arg2: OpenMBeanAttributeInfo[], arg3: OpenMBeanConstructorInfo[], arg4: OpenMBeanOperationInfo[], arg5: MBeanNotificationInfo[], arg6: Descriptor);

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export interface OpenMBeanOperationInfo {

getDescription(): String;

getName(): String;

getSignature(): MBeanParameterInfo[];

getImpact(): number;

getReturnType(): String;

getReturnOpenType(): OpenType<any>;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class OpenMBeanOperationInfoSupport extends MBeanOperationInfo implements OpenMBeanOperationInfo {
constructor(arg0: String, arg1: String, arg2: OpenMBeanParameterInfo[], arg3: OpenType<any>, arg4: number);
constructor(arg0: String, arg1: String, arg2: OpenMBeanParameterInfo[], arg3: OpenType<any>, arg4: number, arg5: Descriptor);

getReturnOpenType(): OpenType<any>;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export interface OpenMBeanParameterInfo {

getDescription(): String;

getName(): String;

getOpenType(): OpenType<any>;

getDefaultValue(): Object;

getLegalValues(): Set<any>;

getMinValue(): Comparable<any>;

getMaxValue(): Comparable<any>;

hasDefaultValue(): boolean;

hasLegalValues(): boolean;

hasMinValue(): boolean;

hasMaxValue(): boolean;

isValue(arg0: Object): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class OpenMBeanParameterInfoSupport extends MBeanParameterInfo implements OpenMBeanParameterInfo {
constructor(arg0: String, arg1: String, arg2: OpenType<any>);
constructor(arg0: String, arg1: String, arg2: OpenType<any>, arg3: Descriptor);
constructor(arg0: String, arg1: String, arg2: OpenType<T>, arg3: T);
constructor(arg0: String, arg1: String, arg2: OpenType<T>, arg3: T, arg4: T[]);
constructor(arg0: String, arg1: String, arg2: OpenType<T>, arg3: T, arg4: Comparable<T>, arg5: Comparable<T>);

getOpenType(): OpenType<any>;

getDefaultValue(): Object;

getLegalValues(): Set<any>;

getMinValue(): Comparable<any>;

getMaxValue(): Comparable<any>;

hasDefaultValue(): boolean;

hasLegalValues(): boolean;

hasMinValue(): boolean;

hasMaxValue(): boolean;

isValue(arg0: Object): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export abstract class OpenType<T extends Object> extends Object implements Serializable {
static ALLOWED_CLASSNAMES_LIST:List<String>
static ALLOWED_CLASSNAMES:String[]

getClassName(): String;

getTypeName(): String;

getDescription(): String;

isArray(): boolean;

abstract isValue(arg0: Object): boolean;

abstract equals(arg0: Object): boolean;

abstract hashCode(): number;
toString(): string;
 }

export class SimpleType<T extends Object> extends OpenType<T> {
static VOID:SimpleType<Void>
static BOOLEAN:SimpleType<Boolean>
static CHARACTER:SimpleType<String>
static BYTE:SimpleType<Number>
static SHORT:SimpleType<Number>
static INTEGER:SimpleType<Number>
static LONG:SimpleType<Number>
static FLOAT:SimpleType<Number>
static DOUBLE:SimpleType<Number>
static STRING:SimpleType<String>
static BIGDECIMAL:SimpleType<BigDecimal>
static BIGINTEGER:SimpleType<BigInteger>
static DATE:SimpleType<Date>
static OBJECTNAME:SimpleType<ObjectName>

isValue(arg0: Object): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;

readResolve(): Object;
 }

export interface TabularData {

getTabularType(): TabularType;

calculateIndex(arg0: CompositeData): Object[];

size(): number;

isEmpty(): boolean;

containsKey(arg0: Object[]): boolean;

containsValue(arg0: CompositeData): boolean;

get(arg0: Object[]): CompositeData;

put(arg0: CompositeData): void;

remove(arg0: Object[]): CompositeData;

putAll(arg0: CompositeData[]): void;

clear(): void;

keySet(): Set<any>;

values(): Collection<any>;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export interface TabularDataSupport extends TabularData, Map<Object, Object>, Cloneable, Serializable { }
export class TabularDataSupport extends Object implements TabularData, Map<Object, Object>, Cloneable, Serializable {
constructor(arg0: TabularType);
constructor(arg0: TabularType, arg1: number, arg2: number);

getTabularType(): TabularType;

calculateIndex(arg0: CompositeData): Object[];

containsKey(arg0: Object): boolean;

containsKey(arg0: Object[]): boolean;

containsValue(arg0: CompositeData): boolean;

containsValue(arg0: Object): boolean;

get(arg0: Object): Object;

get(arg0: Object[]): CompositeData;

put(arg0: Object, arg1: Object): Object;

put(arg0: CompositeData): void;

remove(arg0: Object): Object;

remove(arg0: Object[]): CompositeData;

putAll(arg0: Map<any, any>): void;

putAll(arg0: CompositeData[]): void;

clear(): void;

size(): number;

isEmpty(): boolean;

keySet(): Set<Object>;

values(): Collection<Object>;

entrySet(): Set<Map.Entry<Object, Object>>;

clone(): Object;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class TabularType extends OpenType<TabularData> {
constructor(arg0: String, arg1: String, arg2: CompositeType, arg3: String[]);

getRowType(): CompositeType;

getIndexNames(): List<String>;

isValue(arg0: Object): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

}
