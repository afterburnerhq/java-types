/// <reference path="java.lang.reflect.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.lang.constant.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.nio.d.ts" />
declare module '@afterburnerhq/java.lang.invoke' { 
import { Field, Method, Member, Constructor } from '@afterburnerhq/java.lang.reflect'
import { Enum, RuntimeException, Throwable, ClassLoader, Class, String, Exception } from '@afterburnerhq/java.lang'
import { MethodTypeDesc, MethodHandleDesc, Constable, DynamicConstantDesc, ClassDesc } from '@afterburnerhq/java.lang.constant'
import { Optional, List } from '@afterburnerhq/java.util'
import { Serializable } from '@afterburnerhq/java.io'
import { ByteOrder } from '@afterburnerhq/java.nio'
export abstract class CallSite {

type(): MethodType;

abstract getTarget(): MethodHandle;

abstract setTarget(arg0: MethodHandle): void;

abstract dynamicInvoker(): MethodHandle;
 }

export class ConstantBootstraps {

static nullConstant(arg0: Lookup, arg1: String, arg2: Class<any>): Object;

static primitiveClass(arg0: Lookup, arg1: String, arg2: Class<any>): Class<any>;

static enumConstant<E extends Enum<E>>(arg0: Lookup, arg1: String, arg2: Class<E>): E;

static getStaticFinal(arg0: Lookup, arg1: String, arg2: Class<any>, arg3: Class<any>): Object;

static getStaticFinal(arg0: Lookup, arg1: String, arg2: Class<any>): Object;

static invoke(arg0: Lookup, arg1: String, arg2: Class<any>, arg3: MethodHandle, arg4: Object[]): Object;

static fieldVarHandle(arg0: Lookup, arg1: String, arg2: Class<VarHandle>, arg3: Class<any>, arg4: Class<any>): VarHandle;

static staticFieldVarHandle(arg0: Lookup, arg1: String, arg2: Class<VarHandle>, arg3: Class<any>, arg4: Class<any>): VarHandle;

static arrayVarHandle(arg0: Lookup, arg1: String, arg2: Class<VarHandle>, arg3: Class<any>): VarHandle;

static explicitCast(arg0: Lookup, arg1: String, arg2: Class<any>, arg3: Object): Object;
 }

export class ConstantCallSite extends CallSite {
constructor(arg0: MethodHandle);

getTarget(): MethodHandle;

setTarget(arg0: MethodHandle): void;

dynamicInvoker(): MethodHandle;
 }

export class LambdaConversionException extends Exception {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable, arg2: boolean, arg3: boolean);
 }

export class LambdaMetafactory {
static FLAG_SERIALIZABLE:number
static FLAG_MARKERS:number
static FLAG_BRIDGES:number

static metafactory(arg0: Lookup, arg1: String, arg2: MethodType, arg3: MethodType, arg4: MethodHandle, arg5: MethodType): CallSite;

static altMetafactory(arg0: Lookup, arg1: String, arg2: MethodType, arg3: Object[]): CallSite;
 }

export abstract class MethodHandle implements Constable {

type(): MethodType;

invokeExact(arg0: Object[]): Object;

invoke(arg0: Object[]): Object;

invokeWithArguments(arg0: Object[]): Object;

invokeWithArguments(arg0: List<any>): Object;

asType(arg0: MethodType): MethodHandle;

asSpreader(arg0: Class<any>, arg1: number): MethodHandle;

asSpreader(arg0: number, arg1: Class<any>, arg2: number): MethodHandle;

withVarargs(arg0: boolean): MethodHandle;

asCollector(arg0: Class<any>, arg1: number): MethodHandle;

asCollector(arg0: number, arg1: Class<any>, arg2: number): MethodHandle;

asVarargsCollector(arg0: Class<any>): MethodHandle;

isVarargsCollector(): boolean;

asFixedArity(): MethodHandle;

bindTo(arg0: Object): MethodHandle;

describeConstable(): Optional<MethodHandleDesc>;
toString(): string;
 }

export namespace MethodHandleInfo { 
function 
/* default */ referenceKindToString(arg0: number): String;
function 
/* default */ toString(arg0: number, arg1: Class<any>, arg2: String, arg3: MethodType): String;
const REF_getField:number
const REF_getStatic:number
const REF_putField:number
const REF_putStatic:number
const REF_invokeVirtual:number
const REF_invokeStatic:number
const REF_invokeSpecial:number
const REF_newInvokeSpecial:number
const REF_invokeInterface:number
}

export interface MethodHandleInfo {
REF_getField:number
REF_getStatic:number
REF_putField:number
REF_putStatic:number
REF_invokeVirtual:number
REF_invokeStatic:number
REF_invokeSpecial:number
REF_newInvokeSpecial:number
REF_invokeInterface:number

getReferenceKind(): number;

getDeclaringClass(): Class<any>;

getName(): String;

getMethodType(): MethodType;

reflectAs<T extends Member>(arg0: Class<T>, arg1: Lookup): T;

getModifiers(): number;

/* default */ isVarArgs(): boolean;
 }

export class MethodHandleProxies {

static asInterfaceInstance<T extends Object>(arg0: Class<T>, arg1: MethodHandle): T;

static isWrapperInstance(arg0: Object): boolean;

static wrapperInstanceTarget(arg0: Object): MethodHandle;

static wrapperInstanceType(arg0: Object): Class<any>;
 }

export class MethodHandles {

static lookup(): Lookup;

static publicLookup(): Lookup;

static privateLookupIn(arg0: Class<any>, arg1: Lookup): Lookup;

static classData<T extends Object>(arg0: Lookup, arg1: String, arg2: Class<T>): T;

static classDataAt<T extends Object>(arg0: Lookup, arg1: String, arg2: Class<T>, arg3: number): T;

static reflectAs<T extends Member>(arg0: Class<T>, arg1: MethodHandle): T;

static arrayConstructor(arg0: Class<any>): MethodHandle;

static arrayLength(arg0: Class<any>): MethodHandle;

static arrayElementGetter(arg0: Class<any>): MethodHandle;

static arrayElementSetter(arg0: Class<any>): MethodHandle;

static arrayElementVarHandle(arg0: Class<any>): VarHandle;

static byteArrayViewVarHandle(arg0: Class<any>, arg1: ByteOrder): VarHandle;

static byteBufferViewVarHandle(arg0: Class<any>, arg1: ByteOrder): VarHandle;

static spreadInvoker(arg0: MethodType, arg1: number): MethodHandle;

static exactInvoker(arg0: MethodType): MethodHandle;

static invoker(arg0: MethodType): MethodHandle;

static varHandleExactInvoker(arg0: VarHandle.AccessMode, arg1: MethodType): MethodHandle;

static varHandleInvoker(arg0: VarHandle.AccessMode, arg1: MethodType): MethodHandle;

static explicitCastArguments(arg0: MethodHandle, arg1: MethodType): MethodHandle;

static permuteArguments(arg0: MethodHandle, arg1: MethodType, arg2: number[]): MethodHandle;

static constant(arg0: Class<any>, arg1: Object): MethodHandle;

static identity(arg0: Class<any>): MethodHandle;

static zero(arg0: Class<any>): MethodHandle;

static empty(arg0: MethodType): MethodHandle;

static insertArguments(arg0: MethodHandle, arg1: number, arg2: Object[]): MethodHandle;

static dropArguments(arg0: MethodHandle, arg1: number, arg2: List<Class<any>>): MethodHandle;

static dropArguments(arg0: MethodHandle, arg1: number, arg2: Class<any>[]): MethodHandle;

static dropArgumentsToMatch(arg0: MethodHandle, arg1: number, arg2: List<Class<any>>, arg3: number): MethodHandle;

static dropReturn(arg0: MethodHandle): MethodHandle;

static filterArguments(arg0: MethodHandle, arg1: number, arg2: MethodHandle[]): MethodHandle;

static collectArguments(arg0: MethodHandle, arg1: number, arg2: MethodHandle): MethodHandle;

static filterReturnValue(arg0: MethodHandle, arg1: MethodHandle): MethodHandle;

static foldArguments(arg0: MethodHandle, arg1: MethodHandle): MethodHandle;

static foldArguments(arg0: MethodHandle, arg1: number, arg2: MethodHandle): MethodHandle;

static guardWithTest(arg0: MethodHandle, arg1: MethodHandle, arg2: MethodHandle): MethodHandle;

static catchException(arg0: MethodHandle, arg1: Class<Throwable>, arg2: MethodHandle): MethodHandle;

static throwException(arg0: Class<any>, arg1: Class<Throwable>): MethodHandle;

static loop(arg0: Array<Array<MethodHandle>>): MethodHandle;

static whileLoop(arg0: MethodHandle, arg1: MethodHandle, arg2: MethodHandle): MethodHandle;

static doWhileLoop(arg0: MethodHandle, arg1: MethodHandle, arg2: MethodHandle): MethodHandle;

static countedLoop(arg0: MethodHandle, arg1: MethodHandle, arg2: MethodHandle): MethodHandle;

static countedLoop(arg0: MethodHandle, arg1: MethodHandle, arg2: MethodHandle, arg3: MethodHandle): MethodHandle;

static iteratedLoop(arg0: MethodHandle, arg1: MethodHandle, arg2: MethodHandle): MethodHandle;

static tryFinally(arg0: MethodHandle, arg1: MethodHandle): MethodHandle;

static tableSwitch(arg0: MethodHandle, arg1: MethodHandle[]): MethodHandle;
 }

export class Lookup {
static PUBLIC:number
static PRIVATE:number
static PROTECTED:number
static PACKAGE:number
static MODULE:number
static UNCONDITIONAL:number
static ORIGINAL:number

lookupClass(): Class<any>;

previousLookupClass(): Class<any>;

lookupModes(): number;

in(arg0: Class<any>): Lookup;

dropLookupMode(arg0: number): Lookup;

defineClass(arg0: number[]): Class<any>;

defineHiddenClass(arg0: number[], arg1: boolean, arg2: MethodHandles.Lookup.ClassOption[]): Lookup;

defineHiddenClassWithClassData(arg0: number[], arg1: Object, arg2: boolean, arg3: MethodHandles.Lookup.ClassOption[]): Lookup;
toString(): string;

findStatic(arg0: Class<any>, arg1: String, arg2: MethodType): MethodHandle;

findVirtual(arg0: Class<any>, arg1: String, arg2: MethodType): MethodHandle;

findConstructor(arg0: Class<any>, arg1: MethodType): MethodHandle;

findClass(arg0: String): Class<any>;

ensureInitialized(arg0: Class<any>): Class<any>;

accessClass(arg0: Class<any>): Class<any>;

findSpecial(arg0: Class<any>, arg1: String, arg2: MethodType, arg3: Class<any>): MethodHandle;

findGetter(arg0: Class<any>, arg1: String, arg2: Class<any>): MethodHandle;

findSetter(arg0: Class<any>, arg1: String, arg2: Class<any>): MethodHandle;

findVarHandle(arg0: Class<any>, arg1: String, arg2: Class<any>): VarHandle;

findStaticGetter(arg0: Class<any>, arg1: String, arg2: Class<any>): MethodHandle;

findStaticSetter(arg0: Class<any>, arg1: String, arg2: Class<any>): MethodHandle;

findStaticVarHandle(arg0: Class<any>, arg1: String, arg2: Class<any>): VarHandle;

bind(arg0: Object, arg1: String, arg2: MethodType): MethodHandle;

unreflect(arg0: Method): MethodHandle;

unreflectSpecial(arg0: Method, arg1: Class<any>): MethodHandle;

unreflectConstructor(arg0: Constructor<any>): MethodHandle;

unreflectGetter(arg0: Field): MethodHandle;

unreflectSetter(arg0: Field): MethodHandle;

unreflectVarHandle(arg0: Field): VarHandle;

revealDirect(arg0: MethodHandle): MethodHandleInfo;

hasPrivateAccess(): boolean;

hasFullPrivilegeAccess(): boolean;
 }
export namespace Lookup { 
export class ClassOption extends Enum<MethodHandles.Lookup.ClassOption> {
static NESTMATE:MethodHandles.Lookup.ClassOption
static STRONG:MethodHandles.Lookup.ClassOption

static values(): MethodHandles.Lookup.ClassOption[];

static valueOf(arg0: String): MethodHandles.Lookup.ClassOption;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class MethodType extends Object implements Constable, TypeDescriptor.OfMethod<Class<any>, MethodType>, Serializable {

static methodType(arg0: Class<any>, arg1: Class<any>[]): MethodType;

static methodType(arg0: Class<any>, arg1: List<Class<any>>): MethodType;

static methodType(arg0: Class<any>, arg1: Class<any>, arg2: Class<any>[]): MethodType;

static methodType(arg0: Class<any>): MethodType;

static methodType(arg0: Class<any>, arg1: Class<any>): MethodType;

static methodType(arg0: Class<any>, arg1: MethodType): MethodType;

static genericMethodType(arg0: number, arg1: boolean): MethodType;

static genericMethodType(arg0: number): MethodType;

changeParameterType(arg0: number, arg1: Class<any>): MethodType;

insertParameterTypes(arg0: number, arg1: Class<any>[]): MethodType;

appendParameterTypes(arg0: Class<any>[]): MethodType;

insertParameterTypes(arg0: number, arg1: List<Class<any>>): MethodType;

appendParameterTypes(arg0: List<Class<any>>): MethodType;

dropParameterTypes(arg0: number, arg1: number): MethodType;

changeReturnType(arg0: Class<any>): MethodType;

hasPrimitives(): boolean;

hasWrappers(): boolean;

erase(): MethodType;

generic(): MethodType;

wrap(): MethodType;

unwrap(): MethodType;

parameterType(arg0: number): Class<any>;

parameterCount(): number;

returnType(): Class<any>;

parameterList(): List<Class<any>>;

lastParameterType(): Class<any>;

parameterArray(): Class<any>[];

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;

static fromMethodDescriptorString(arg0: String, arg1: ClassLoader): MethodType;

toMethodDescriptorString(): String;

descriptorString(): String;

describeConstable(): Optional<MethodTypeDesc>;
 }

export class MutableCallSite extends CallSite {
constructor(arg0: MethodType);
constructor(arg0: MethodHandle);

getTarget(): MethodHandle;

setTarget(arg0: MethodHandle): void;

dynamicInvoker(): MethodHandle;

static syncAll(arg0: MutableCallSite[]): void;
 }

export class SerializedLambda implements Serializable {
constructor(arg0: Class<any>, arg1: String, arg2: String, arg3: String, arg4: number, arg5: String, arg6: String, arg7: String, arg8: String, arg9: Object[]);

getCapturingClass(): String;

getFunctionalInterfaceClass(): String;

getFunctionalInterfaceMethodName(): String;

getFunctionalInterfaceMethodSignature(): String;

getImplClass(): String;

getImplMethodName(): String;

getImplMethodSignature(): String;

getImplMethodKind(): number;

getInstantiatedMethodType(): String;

getCapturedArgCount(): number;

getCapturedArg(arg0: number): Object;
toString(): string;
 }

export class StringConcatException extends Exception {
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
 }

export class StringConcatFactory {

static makeConcat(arg0: Lookup, arg1: String, arg2: MethodType): CallSite;

static makeConcatWithConstants(arg0: Lookup, arg1: String, arg2: MethodType, arg3: String, arg4: Object[]): CallSite;
 }

export class SwitchPoint {
constructor();

hasBeenInvalidated(): boolean;

guardWithTest(arg0: MethodHandle, arg1: MethodHandle): MethodHandle;

static invalidateAll(arg0: SwitchPoint[]): void;
 }

export interface TypeDescriptor {

descriptorString(): String;
 }
export namespace TypeDescriptor { 
export interface OfField<F extends TypeDescriptor.OfField<F>> extends TypeDescriptor, Object {

isArray(): boolean;

isPrimitive(): boolean;

componentType(): F;

arrayType(): F;
 }

export interface OfMethod<F extends TypeDescriptor.OfField<F>, M extends TypeDescriptor.OfMethod<F, M>> extends TypeDescriptor, Object {

parameterCount(): number;

parameterType(arg0: number): F;

returnType(): F;

parameterArray(): F[];

parameterList(): List<F>;

changeReturnType(arg0: F): M;

changeParameterType(arg0: number, arg1: F): M;

dropParameterTypes(arg0: number, arg1: number): M;

insertParameterTypes(arg0: number, arg1: F[]): M;
 }

}

export abstract class VarHandle implements Constable {

hasInvokeExactBehavior(): boolean;

get(arg0: Object[]): Object;

set(arg0: Object[]): void;

getVolatile(arg0: Object[]): Object;

setVolatile(arg0: Object[]): void;

getOpaque(arg0: Object[]): Object;

setOpaque(arg0: Object[]): void;

getAcquire(arg0: Object[]): Object;

setRelease(arg0: Object[]): void;

compareAndSet(arg0: Object[]): boolean;

compareAndExchange(arg0: Object[]): Object;

compareAndExchangeAcquire(arg0: Object[]): Object;

compareAndExchangeRelease(arg0: Object[]): Object;

weakCompareAndSetPlain(arg0: Object[]): boolean;

weakCompareAndSet(arg0: Object[]): boolean;

weakCompareAndSetAcquire(arg0: Object[]): boolean;

weakCompareAndSetRelease(arg0: Object[]): boolean;

getAndSet(arg0: Object[]): Object;

getAndSetAcquire(arg0: Object[]): Object;

getAndSetRelease(arg0: Object[]): Object;

getAndAdd(arg0: Object[]): Object;

getAndAddAcquire(arg0: Object[]): Object;

getAndAddRelease(arg0: Object[]): Object;

getAndBitwiseOr(arg0: Object[]): Object;

getAndBitwiseOrAcquire(arg0: Object[]): Object;

getAndBitwiseOrRelease(arg0: Object[]): Object;

getAndBitwiseAnd(arg0: Object[]): Object;

getAndBitwiseAndAcquire(arg0: Object[]): Object;

getAndBitwiseAndRelease(arg0: Object[]): Object;

getAndBitwiseXor(arg0: Object[]): Object;

getAndBitwiseXorAcquire(arg0: Object[]): Object;

getAndBitwiseXorRelease(arg0: Object[]): Object;

abstract withInvokeExactBehavior(): VarHandle;

abstract withInvokeBehavior(): VarHandle;
toString(): string;

varType(): Class<any>;

coordinateTypes(): List<Class<any>>;

accessModeType(arg0: VarHandle.AccessMode): MethodType;

isAccessModeSupported(arg0: VarHandle.AccessMode): boolean;

toMethodHandle(arg0: VarHandle.AccessMode): MethodHandle;

describeConstable(): Optional<VarHandle.VarHandleDesc>;

static fullFence(): void;

static acquireFence(): void;

static releaseFence(): void;

static loadLoadFence(): void;

static storeStoreFence(): void;
 }
export namespace VarHandle { 
export class AccessMode extends Enum<VarHandle.AccessMode> {
static GET:VarHandle.AccessMode
static SET:VarHandle.AccessMode
static GET_VOLATILE:VarHandle.AccessMode
static SET_VOLATILE:VarHandle.AccessMode
static GET_ACQUIRE:VarHandle.AccessMode
static SET_RELEASE:VarHandle.AccessMode
static GET_OPAQUE:VarHandle.AccessMode
static SET_OPAQUE:VarHandle.AccessMode
static COMPARE_AND_SET:VarHandle.AccessMode
static COMPARE_AND_EXCHANGE:VarHandle.AccessMode
static COMPARE_AND_EXCHANGE_ACQUIRE:VarHandle.AccessMode
static COMPARE_AND_EXCHANGE_RELEASE:VarHandle.AccessMode
static WEAK_COMPARE_AND_SET_PLAIN:VarHandle.AccessMode
static WEAK_COMPARE_AND_SET:VarHandle.AccessMode
static WEAK_COMPARE_AND_SET_ACQUIRE:VarHandle.AccessMode
static WEAK_COMPARE_AND_SET_RELEASE:VarHandle.AccessMode
static GET_AND_SET:VarHandle.AccessMode
static GET_AND_SET_ACQUIRE:VarHandle.AccessMode
static GET_AND_SET_RELEASE:VarHandle.AccessMode
static GET_AND_ADD:VarHandle.AccessMode
static GET_AND_ADD_ACQUIRE:VarHandle.AccessMode
static GET_AND_ADD_RELEASE:VarHandle.AccessMode
static GET_AND_BITWISE_OR:VarHandle.AccessMode
static GET_AND_BITWISE_OR_RELEASE:VarHandle.AccessMode
static GET_AND_BITWISE_OR_ACQUIRE:VarHandle.AccessMode
static GET_AND_BITWISE_AND:VarHandle.AccessMode
static GET_AND_BITWISE_AND_RELEASE:VarHandle.AccessMode
static GET_AND_BITWISE_AND_ACQUIRE:VarHandle.AccessMode
static GET_AND_BITWISE_XOR:VarHandle.AccessMode
static GET_AND_BITWISE_XOR_RELEASE:VarHandle.AccessMode
static GET_AND_BITWISE_XOR_ACQUIRE:VarHandle.AccessMode

static values(): VarHandle.AccessMode[];

static valueOf(arg0: String): VarHandle.AccessMode;

methodName(): String;

static valueFromMethodName(arg0: String): VarHandle.AccessMode;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class VarHandleDesc extends DynamicConstantDesc<VarHandle> {

static ofField(arg0: ClassDesc, arg1: String, arg2: ClassDesc): VarHandle.VarHandleDesc;

static ofStaticField(arg0: ClassDesc, arg1: String, arg2: ClassDesc): VarHandle.VarHandleDesc;

static ofArray(arg0: ClassDesc): VarHandle.VarHandleDesc;

varType(): ClassDesc;

resolveConstantDesc(arg0: Lookup): VarHandle;
toString(): string;
 }

}

export class VolatileCallSite extends CallSite {
constructor(arg0: MethodType);
constructor(arg0: MethodHandle);

getTarget(): MethodHandle;

setTarget(arg0: MethodHandle): void;

dynamicInvoker(): MethodHandle;
 }

export class WrongMethodTypeException extends RuntimeException {
constructor();
constructor(arg0: String);
 }

}
