/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.invoke.d.ts" />
declare module '@afterburnerhq/java.lang.constant' { 
import { Enum, Class, String, Boolean } from '@afterburnerhq/java.lang'
import { Optional, List } from '@afterburnerhq/java.util'
import { TypeDescriptor, Lookup, CallSite } from '@afterburnerhq/java.lang.invoke'
export namespace ClassDesc { 
function 
/* default */ of(arg0: String): ClassDesc;
function 
/* default */ of(arg0: String, arg1: String): ClassDesc;
function 
/* default */ ofDescriptor(arg0: String): ClassDesc;
}

export interface ClassDesc extends ConstantDesc, TypeDescriptor.OfField<ClassDesc>, Object {

/* default */ arrayType(): ClassDesc;

/* default */ arrayType(arg0: number): ClassDesc;

/* default */ nested(arg0: String): ClassDesc;

/* default */ nested(arg0: String, arg1: String[]): ClassDesc;

/* default */ isArray(): boolean;

/* default */ isPrimitive(): boolean;

/* default */ isClassOrInterface(): boolean;

/* default */ componentType(): ClassDesc;

/* default */ packageName(): String;

/* default */ displayName(): String;

descriptorString(): String;

equals(arg0: Object): boolean;
 }

export interface Constable {

describeConstable(): Optional<ConstantDesc>;
 }

export interface ConstantDesc {

resolveConstantDesc(arg0: Lookup): Object;
 }

export class ConstantDescs {
static DEFAULT_NAME:String
static CD_Object:ClassDesc
static CD_String:ClassDesc
static CD_Class:ClassDesc
static CD_Number:ClassDesc
static CD_Integer:ClassDesc
static CD_Long:ClassDesc
static CD_Float:ClassDesc
static CD_Double:ClassDesc
static CD_Short:ClassDesc
static CD_Byte:ClassDesc
static CD_Character:ClassDesc
static CD_Boolean:ClassDesc
static CD_Void:ClassDesc
static CD_Throwable:ClassDesc
static CD_Exception:ClassDesc
static CD_Enum:ClassDesc
static CD_VarHandle:ClassDesc
static CD_MethodHandles:ClassDesc
static CD_MethodHandles_Lookup:ClassDesc
static CD_MethodHandle:ClassDesc
static CD_MethodType:ClassDesc
static CD_CallSite:ClassDesc
static CD_Collection:ClassDesc
static CD_List:ClassDesc
static CD_Set:ClassDesc
static CD_Map:ClassDesc
static CD_ConstantDesc:ClassDesc
static CD_ClassDesc:ClassDesc
static CD_EnumDesc:ClassDesc
static CD_MethodTypeDesc:ClassDesc
static CD_MethodHandleDesc:ClassDesc
static CD_DirectMethodHandleDesc:ClassDesc
static CD_VarHandleDesc:ClassDesc
static CD_MethodHandleDesc_Kind:ClassDesc
static CD_DynamicConstantDesc:ClassDesc
static CD_DynamicCallSiteDesc:ClassDesc
static CD_ConstantBootstraps:ClassDesc
static BSM_PRIMITIVE_CLASS:DirectMethodHandleDesc
static BSM_ENUM_CONSTANT:DirectMethodHandleDesc
static BSM_GET_STATIC_FINAL:DirectMethodHandleDesc
static BSM_NULL_CONSTANT:DirectMethodHandleDesc
static BSM_VARHANDLE_FIELD:DirectMethodHandleDesc
static BSM_VARHANDLE_STATIC_FIELD:DirectMethodHandleDesc
static BSM_VARHANDLE_ARRAY:DirectMethodHandleDesc
static BSM_INVOKE:DirectMethodHandleDesc
static BSM_EXPLICIT_CAST:DirectMethodHandleDesc
static CD_int:ClassDesc
static CD_long:ClassDesc
static CD_float:ClassDesc
static CD_double:ClassDesc
static CD_short:ClassDesc
static CD_byte:ClassDesc
static CD_char:ClassDesc
static CD_boolean:ClassDesc
static CD_void:ClassDesc
static NULL:ConstantDesc
static TRUE:DynamicConstantDesc<Boolean>
static FALSE:DynamicConstantDesc<Boolean>

static ofCallsiteBootstrap(arg0: ClassDesc, arg1: String, arg2: ClassDesc, arg3: ClassDesc[]): DirectMethodHandleDesc;

static ofConstantBootstrap(arg0: ClassDesc, arg1: String, arg2: ClassDesc, arg3: ClassDesc[]): DirectMethodHandleDesc;
 }

export interface DirectMethodHandleDesc extends MethodHandleDesc {

kind(): DirectMethodHandleDesc.Kind;

refKind(): number;

isOwnerInterface(): boolean;

owner(): ClassDesc;

methodName(): String;

lookupDescriptor(): String;
 }
export namespace DirectMethodHandleDesc { 
export class Kind extends Enum<DirectMethodHandleDesc.Kind> {
static STATIC:DirectMethodHandleDesc.Kind
static INTERFACE_STATIC:DirectMethodHandleDesc.Kind
static VIRTUAL:DirectMethodHandleDesc.Kind
static INTERFACE_VIRTUAL:DirectMethodHandleDesc.Kind
static SPECIAL:DirectMethodHandleDesc.Kind
static INTERFACE_SPECIAL:DirectMethodHandleDesc.Kind
static CONSTRUCTOR:DirectMethodHandleDesc.Kind
static GETTER:DirectMethodHandleDesc.Kind
static SETTER:DirectMethodHandleDesc.Kind
static STATIC_GETTER:DirectMethodHandleDesc.Kind
static STATIC_SETTER:DirectMethodHandleDesc.Kind
refKind:number
isInterface:boolean

static values(): DirectMethodHandleDesc.Kind[];

static valueOf(arg0: String): DirectMethodHandleDesc.Kind;

static valueOf(arg0: number): DirectMethodHandleDesc.Kind;

static valueOf(arg0: number, arg1: boolean): DirectMethodHandleDesc.Kind;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class DynamicCallSiteDesc {

static of(arg0: DirectMethodHandleDesc, arg1: String, arg2: MethodTypeDesc, arg3: ConstantDesc[]): DynamicCallSiteDesc;

static of(arg0: DirectMethodHandleDesc, arg1: String, arg2: MethodTypeDesc): DynamicCallSiteDesc;

static of(arg0: DirectMethodHandleDesc, arg1: MethodTypeDesc): DynamicCallSiteDesc;

withArgs(arg0: ConstantDesc[]): DynamicCallSiteDesc;

withNameAndType(arg0: String, arg1: MethodTypeDesc): DynamicCallSiteDesc;

invocationName(): String;

invocationType(): MethodTypeDesc;

bootstrapMethod(): MethodHandleDesc;

bootstrapArgs(): ConstantDesc[];

resolveCallSiteDesc(arg0: Lookup): CallSite;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export abstract class DynamicConstantDesc<T extends Object> extends Object implements ConstantDesc {

static ofCanonical<T extends Object>(arg0: DirectMethodHandleDesc, arg1: String, arg2: ClassDesc, arg3: ConstantDesc[]): ConstantDesc;

static ofNamed<T extends Object>(arg0: DirectMethodHandleDesc, arg1: String, arg2: ClassDesc, arg3: ConstantDesc[]): DynamicConstantDesc<T>;

static of<T extends Object>(arg0: DirectMethodHandleDesc, arg1: ConstantDesc[]): DynamicConstantDesc<T>;

static of<T extends Object>(arg0: DirectMethodHandleDesc): DynamicConstantDesc<T>;

constantName(): String;

constantType(): ClassDesc;

bootstrapMethod(): DirectMethodHandleDesc;

bootstrapArgs(): ConstantDesc[];

bootstrapArgsList(): List<ConstantDesc>;

resolveConstantDesc(arg0: Lookup): T;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export namespace MethodHandleDesc { 
function 
/* default */ of(arg0: DirectMethodHandleDesc.Kind, arg1: ClassDesc, arg2: String, arg3: String): DirectMethodHandleDesc;
function 
/* default */ ofMethod(arg0: DirectMethodHandleDesc.Kind, arg1: ClassDesc, arg2: String, arg3: MethodTypeDesc): DirectMethodHandleDesc;
function 
/* default */ ofField(arg0: DirectMethodHandleDesc.Kind, arg1: ClassDesc, arg2: String, arg3: ClassDesc): DirectMethodHandleDesc;
function 
/* default */ ofConstructor(arg0: ClassDesc, arg1: ClassDesc[]): DirectMethodHandleDesc;
}

export interface MethodHandleDesc extends ConstantDesc {

/* default */ asType(arg0: MethodTypeDesc): MethodHandleDesc;

invocationType(): MethodTypeDesc;

equals(arg0: Object): boolean;
 }

export namespace MethodTypeDesc { 
function 
/* default */ ofDescriptor(arg0: String): MethodTypeDesc;
function 
/* default */ of(arg0: ClassDesc, arg1: ClassDesc[]): MethodTypeDesc;
}

export interface MethodTypeDesc extends ConstantDesc, TypeDescriptor.OfMethod<ClassDesc, MethodTypeDesc>, Object {

returnType(): ClassDesc;

parameterCount(): number;

parameterType(arg0: number): ClassDesc;

parameterList(): List<ClassDesc>;

parameterArray(): ClassDesc[];

changeReturnType(arg0: ClassDesc): MethodTypeDesc;

changeParameterType(arg0: number, arg1: ClassDesc): MethodTypeDesc;

dropParameterTypes(arg0: number, arg1: number): MethodTypeDesc;

insertParameterTypes(arg0: number, arg1: ClassDesc[]): MethodTypeDesc;

/* default */ descriptorString(): String;

/* default */ displayDescriptor(): String;

equals(arg0: Object): boolean;
 }

}
