/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.lang.annotation.d.ts" />
declare module '@afterburnerhq/java.lang.reflect' { 
import { BasicPermission } from '@afterburnerhq/java.security'
import { ClassFormatError, RuntimeException, ReflectiveOperationException, Throwable, ClassLoader, Class, String } from '@afterburnerhq/java.lang'
import { Serializable } from '@afterburnerhq/java.io'
import { Annotation } from '@afterburnerhq/java.lang.annotation'
export class AccessibleObject implements AnnotatedElement {

static setAccessible(arg0: AccessibleObject[], arg1: boolean): void;

setAccessible(arg0: boolean): void;

trySetAccessible(): boolean;

isAccessible(): boolean;

canAccess(arg0: Object): boolean;

getAnnotation<T extends Annotation>(arg0: Class<T>): T;

isAnnotationPresent(arg0: Class<Annotation>): boolean;

getAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];

getAnnotations(): Annotation[];

getDeclaredAnnotation<T extends Annotation>(arg0: Class<T>): T;

getDeclaredAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];

getDeclaredAnnotations(): Annotation[];
 }

export interface AnnotatedArrayType extends AnnotatedType {

getAnnotatedGenericComponentType(): AnnotatedType;

getAnnotatedOwnerType(): AnnotatedType;
 }

export interface AnnotatedElement {

/* default */ isAnnotationPresent(arg0: Class<Annotation>): boolean;

getAnnotation<T extends Annotation>(arg0: Class<T>): T;

getAnnotations(): Annotation[];

/* default */ getAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];

/* default */ getDeclaredAnnotation<T extends Annotation>(arg0: Class<T>): T;

/* default */ getDeclaredAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];

getDeclaredAnnotations(): Annotation[];
 }

export interface AnnotatedParameterizedType extends AnnotatedType {

getAnnotatedActualTypeArguments(): AnnotatedType[];

getAnnotatedOwnerType(): AnnotatedType;
 }

export interface AnnotatedType extends AnnotatedElement {

/* default */ getAnnotatedOwnerType(): AnnotatedType;

getType(): Type;

getAnnotation<T extends Annotation>(arg0: Class<T>): T;

getAnnotations(): Annotation[];

getDeclaredAnnotations(): Annotation[];
 }

export interface AnnotatedTypeVariable extends AnnotatedType {

getAnnotatedBounds(): AnnotatedType[];

getAnnotatedOwnerType(): AnnotatedType;
 }

export interface AnnotatedWildcardType extends AnnotatedType {

getAnnotatedLowerBounds(): AnnotatedType[];

getAnnotatedUpperBounds(): AnnotatedType[];

getAnnotatedOwnerType(): AnnotatedType;
 }

export class Array {

static newInstance(arg0: Class<any>, arg1: number): Object;

static newInstance(arg0: Class<any>, arg1: number[]): Object;

static getLength(arg0: Object): number;

static get(arg0: Object, arg1: number): Object;

static getBoolean(arg0: Object, arg1: number): boolean;

static getByte(arg0: Object, arg1: number): number;

static getChar(arg0: Object, arg1: number): String;

static getShort(arg0: Object, arg1: number): number;

static getInt(arg0: Object, arg1: number): number;

static getLong(arg0: Object, arg1: number): number;

static getFloat(arg0: Object, arg1: number): number;

static getDouble(arg0: Object, arg1: number): number;

static set(arg0: Object, arg1: number, arg2: Object): void;

static setBoolean(arg0: Object, arg1: number, arg2: boolean): void;

static setByte(arg0: Object, arg1: number, arg2: number): void;

static setChar(arg0: Object, arg1: number, arg2: String): void;

static setShort(arg0: Object, arg1: number, arg2: number): void;

static setInt(arg0: Object, arg1: number, arg2: number): void;

static setLong(arg0: Object, arg1: number, arg2: number): void;

static setFloat(arg0: Object, arg1: number, arg2: number): void;

static setDouble(arg0: Object, arg1: number, arg2: number): void;
 }

export interface Constructor<T extends Object> { }
export class Constructor<T extends Object> extends Executable {

setAccessible(arg0: boolean): void;

getDeclaringClass(): Class<T>;

getName(): String;

getModifiers(): number;

getTypeParameters(): TypeVariable<Constructor<T>>[];

getParameterTypes(): Class<any>[];

getParameterCount(): number;

getGenericParameterTypes(): Type[];

getExceptionTypes(): Class<any>[];

getGenericExceptionTypes(): Type[];

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;

toGenericString(): String;

newInstance(arg0: Object[]): T;

isVarArgs(): boolean;

isSynthetic(): boolean;

getAnnotation<T extends Annotation>(arg0: Class<T>): T;

getDeclaredAnnotations(): Annotation[];

getParameterAnnotations(): Array<Array<Annotation>>;

getAnnotatedReturnType(): AnnotatedType;

getAnnotatedReceiverType(): AnnotatedType;
 }

export interface Executable extends Member, GenericDeclaration { }
export abstract class Executable extends AccessibleObject implements Member, GenericDeclaration {

abstract getDeclaringClass(): Class<any>;

abstract getName(): String;

abstract getModifiers(): number;

abstract getTypeParameters(): TypeVariable<any>[];

abstract getParameterTypes(): Class<any>[];

getParameterCount(): number;

getGenericParameterTypes(): Type[];

getParameters(): Parameter[];

abstract getExceptionTypes(): Class<any>[];

getGenericExceptionTypes(): Type[];

abstract toGenericString(): String;

isVarArgs(): boolean;

isSynthetic(): boolean;

abstract getParameterAnnotations(): Array<Array<Annotation>>;

getAnnotation<T extends Annotation>(arg0: Class<T>): T;

getAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];

getDeclaredAnnotations(): Annotation[];

abstract getAnnotatedReturnType(): AnnotatedType;

getAnnotatedReceiverType(): AnnotatedType;

getAnnotatedParameterTypes(): AnnotatedType[];

getAnnotatedExceptionTypes(): AnnotatedType[];
 }

export interface Field extends Member { }
export class Field extends AccessibleObject implements Member {

setAccessible(arg0: boolean): void;

getDeclaringClass(): Class<any>;

getName(): String;

getModifiers(): number;

isEnumConstant(): boolean;

isSynthetic(): boolean;

getType(): Class<any>;

getGenericType(): Type;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;

toGenericString(): String;

get(arg0: Object): Object;

getBoolean(arg0: Object): boolean;

getByte(arg0: Object): number;

getChar(arg0: Object): String;

getShort(arg0: Object): number;

getInt(arg0: Object): number;

getLong(arg0: Object): number;

getFloat(arg0: Object): number;

getDouble(arg0: Object): number;

set(arg0: Object, arg1: Object): void;

setBoolean(arg0: Object, arg1: boolean): void;

setByte(arg0: Object, arg1: number): void;

setChar(arg0: Object, arg1: String): void;

setShort(arg0: Object, arg1: number): void;

setInt(arg0: Object, arg1: number): void;

setLong(arg0: Object, arg1: number): void;

setFloat(arg0: Object, arg1: number): void;

setDouble(arg0: Object, arg1: number): void;

getAnnotation<T extends Annotation>(arg0: Class<T>): T;

getAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];

getDeclaredAnnotations(): Annotation[];

getAnnotatedType(): AnnotatedType;
 }

export interface GenericArrayType extends Type {

getGenericComponentType(): Type;
 }

export interface GenericDeclaration extends AnnotatedElement {

getTypeParameters(): TypeVariable<any>[];
 }

export class GenericSignatureFormatError extends ClassFormatError {
constructor();
constructor(arg0: String);
 }

export class InaccessibleObjectException extends RuntimeException {
constructor();
constructor(arg0: String);
 }

export namespace InvocationHandler { 
function 
/* default */ invokeDefault(arg0: Object, arg1: Method, arg2: Object[]): Object;
}

export interface InvocationHandler {

invoke(arg0: Object, arg1: Method, arg2: Object[]): Object;
 }

export class InvocationTargetException extends ReflectiveOperationException {
constructor(arg0: Throwable);
constructor(arg0: Throwable, arg1: String);

getTargetException(): Throwable;

getCause(): Throwable;
 }

export class MalformedParameterizedTypeException extends RuntimeException {
constructor();
constructor(arg0: String);
 }

export class MalformedParametersException extends RuntimeException {
constructor();
constructor(arg0: String);
 }

export namespace Member { 
const PUBLIC:number
const DECLARED:number
}

export interface Member {
PUBLIC:number
DECLARED:number

getDeclaringClass(): Class<any>;

getName(): String;

getModifiers(): number;

isSynthetic(): boolean;
 }

export interface Method { }
export class Method extends Executable {

setAccessible(arg0: boolean): void;

getDeclaringClass(): Class<any>;

getName(): String;

getModifiers(): number;

getTypeParameters(): TypeVariable<Method>[];

getReturnType(): Class<any>;

getGenericReturnType(): Type;

getParameterTypes(): Class<any>[];

getParameterCount(): number;

getGenericParameterTypes(): Type[];

getExceptionTypes(): Class<any>[];

getGenericExceptionTypes(): Type[];

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;

toGenericString(): String;

invoke(arg0: Object, arg1: Object[]): Object;

isBridge(): boolean;

isVarArgs(): boolean;

isSynthetic(): boolean;

isDefault(): boolean;

getDefaultValue(): Object;

getAnnotation<T extends Annotation>(arg0: Class<T>): T;

getDeclaredAnnotations(): Annotation[];

getParameterAnnotations(): Array<Array<Annotation>>;

getAnnotatedReturnType(): AnnotatedType;
 }

export class Modifier {
static PUBLIC:number
static PRIVATE:number
static PROTECTED:number
static STATIC:number
static FINAL:number
static SYNCHRONIZED:number
static VOLATILE:number
static TRANSIENT:number
static NATIVE:number
static INTERFACE:number
static ABSTRACT:number
static STRICT:number

static isPublic(arg0: number): boolean;

static isPrivate(arg0: number): boolean;

static isProtected(arg0: number): boolean;

static isStatic(arg0: number): boolean;

static isFinal(arg0: number): boolean;

static isSynchronized(arg0: number): boolean;

static isVolatile(arg0: number): boolean;

static isTransient(arg0: number): boolean;

static isNative(arg0: number): boolean;

static isInterface(arg0: number): boolean;

static isAbstract(arg0: number): boolean;

static isStrict(arg0: number): boolean;

static toString(arg0: number): String;

static classModifiers(): number;

static interfaceModifiers(): number;

static constructorModifiers(): number;

static methodModifiers(): number;

static fieldModifiers(): number;

static parameterModifiers(): number;
 }

export interface Parameter extends AnnotatedElement { }
export class Parameter implements AnnotatedElement {

equals(arg0: Object): boolean;

hashCode(): number;

isNamePresent(): boolean;
toString(): string;

getDeclaringExecutable(): Executable;

getModifiers(): number;

getName(): String;

getParameterizedType(): Type;

getType(): Class<any>;

getAnnotatedType(): AnnotatedType;

isImplicit(): boolean;

isSynthetic(): boolean;

isVarArgs(): boolean;

getAnnotation<T extends Annotation>(arg0: Class<T>): T;

getAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];

getDeclaredAnnotations(): Annotation[];

getDeclaredAnnotation<T extends Annotation>(arg0: Class<T>): T;

getDeclaredAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];

getAnnotations(): Annotation[];
 }

export interface ParameterizedType extends Type {

getActualTypeArguments(): Type[];

getRawType(): Type;

getOwnerType(): Type;
 }

export class Proxy implements Serializable {

static getProxyClass(arg0: ClassLoader, arg1: Class<any>[]): Class<any>;

static newProxyInstance(arg0: ClassLoader, arg1: Class<any>[], arg2: InvocationHandler): Object;

static isProxyClass(arg0: Class<any>): boolean;

static getInvocationHandler(arg0: Object): InvocationHandler;
 }

export interface RecordComponent extends AnnotatedElement { }
export class RecordComponent implements AnnotatedElement {

getName(): String;

getType(): Class<any>;

getGenericSignature(): String;

getGenericType(): Type;

getAnnotatedType(): AnnotatedType;

getAccessor(): Method;

getAnnotation<T extends Annotation>(arg0: Class<T>): T;

getAnnotations(): Annotation[];

getDeclaredAnnotations(): Annotation[];
toString(): string;

getDeclaringRecord(): Class<any>;
 }

export class ReflectPermission extends BasicPermission {
constructor(arg0: String);
constructor(arg0: String, arg1: String);
 }

export interface Type {

/* default */ getTypeName(): String;
 }

export interface TypeVariable<D extends GenericDeclaration> extends Type, AnnotatedElement, Object {

getBounds(): Type[];

getGenericDeclaration(): D;

getName(): String;

getAnnotatedBounds(): AnnotatedType[];
 }

export class UndeclaredThrowableException extends RuntimeException {
constructor(arg0: Throwable);
constructor(arg0: Throwable, arg1: String);

getUndeclaredThrowable(): Throwable;
 }

export interface WildcardType extends Type {

getUpperBounds(): Type[];

getLowerBounds(): Type[];
 }

}
