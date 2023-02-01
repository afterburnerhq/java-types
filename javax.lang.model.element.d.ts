/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="javax.lang.model.d.ts" />
/// <reference path="java.lang.annotation.d.ts" />
/// <reference path="javax.lang.model.type.d.ts" />
declare module '@afterburnerhq/javax.lang.model.element' { 
import { Map, List, Set } from '@afterburnerhq/java.util'
import { Enum, CharSequence, Class, String } from '@afterburnerhq/java.lang'
import { AnnotatedConstruct, UnknownEntityException } from '@afterburnerhq/javax.lang.model'
import { Annotation } from '@afterburnerhq/java.lang.annotation'
import { TypeMirror, DeclaredType } from '@afterburnerhq/javax.lang.model.type'
export interface AnnotationMirror {

getAnnotationType(): DeclaredType;

getElementValues(): Map<ExecutableElement, AnnotationValue>;
 }

export interface AnnotationValue {

getValue(): Object;
toString(): string;

accept<R extends Object, P extends Object>(arg0: AnnotationValueVisitor<R, P>, arg1: P): R;
 }

export interface AnnotationValueVisitor<R extends Object, P extends Object> extends Object {

visit(arg0: AnnotationValue, arg1: P): R;

/* default */ visit(arg0: AnnotationValue): R;

visitBoolean(arg0: boolean, arg1: P): R;

visitByte(arg0: number, arg1: P): R;

visitChar(arg0: String, arg1: P): R;

visitDouble(arg0: number, arg1: P): R;

visitFloat(arg0: number, arg1: P): R;

visitInt(arg0: number, arg1: P): R;

visitLong(arg0: number, arg1: P): R;

visitShort(arg0: number, arg1: P): R;

visitString(arg0: String, arg1: P): R;

visitType(arg0: TypeMirror, arg1: P): R;

visitEnumConstant(arg0: VariableElement, arg1: P): R;

visitAnnotation(arg0: AnnotationMirror, arg1: P): R;

visitArray(arg0: List<AnnotationValue>, arg1: P): R;

visitUnknown(arg0: AnnotationValue, arg1: P): R;
 }

export interface Element extends AnnotatedConstruct {

asType(): TypeMirror;

getKind(): ElementKind;

getModifiers(): Set<Modifier>;

getSimpleName(): Name;

getEnclosingElement(): Element;

getEnclosedElements(): List<Element>;

equals(arg0: Object): boolean;

hashCode(): number;

getAnnotationMirrors(): List<AnnotationMirror>;

getAnnotation<A extends Annotation>(arg0: Class<A>): A;

getAnnotationsByType<A extends Annotation>(arg0: Class<A>): A[];

accept<R extends Object, P extends Object>(arg0: ElementVisitor<R, P>, arg1: P): R;
 }

export class ElementKind extends Enum<ElementKind> {
static PACKAGE:ElementKind
static ENUM:ElementKind
static CLASS:ElementKind
static ANNOTATION_TYPE:ElementKind
static INTERFACE:ElementKind
static ENUM_CONSTANT:ElementKind
static FIELD:ElementKind
static PARAMETER:ElementKind
static LOCAL_VARIABLE:ElementKind
static EXCEPTION_PARAMETER:ElementKind
static METHOD:ElementKind
static CONSTRUCTOR:ElementKind
static STATIC_INIT:ElementKind
static INSTANCE_INIT:ElementKind
static TYPE_PARAMETER:ElementKind
static OTHER:ElementKind
static RESOURCE_VARIABLE:ElementKind
static MODULE:ElementKind
static RECORD:ElementKind
static RECORD_COMPONENT:ElementKind
static BINDING_VARIABLE:ElementKind

static values(): ElementKind[];

static valueOf(arg0: String): ElementKind;

isClass(): boolean;

isInterface(): boolean;

isField(): boolean;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export interface ElementVisitor<R extends Object, P extends Object> extends Object {

visit(arg0: Element, arg1: P): R;

/* default */ visit(arg0: Element): R;

visitPackage(arg0: PackageElement, arg1: P): R;

visitType(arg0: TypeElement, arg1: P): R;

visitVariable(arg0: VariableElement, arg1: P): R;

visitExecutable(arg0: ExecutableElement, arg1: P): R;

visitTypeParameter(arg0: TypeParameterElement, arg1: P): R;

visitUnknown(arg0: Element, arg1: P): R;

/* default */ visitModule(arg0: ModuleElement, arg1: P): R;

/* default */ visitRecordComponent(arg0: RecordComponentElement, arg1: P): R;
 }

export interface ExecutableElement extends Element, Parameterizable {

asType(): TypeMirror;

getTypeParameters(): List<TypeParameterElement>;

getReturnType(): TypeMirror;

getParameters(): List<VariableElement>;

getReceiverType(): TypeMirror;

isVarArgs(): boolean;

isDefault(): boolean;

getThrownTypes(): List<TypeMirror>;

getDefaultValue(): AnnotationValue;

getSimpleName(): Name;
 }

export class Modifier extends Enum<Modifier> {
static PUBLIC:Modifier
static PROTECTED:Modifier
static PRIVATE:Modifier
static ABSTRACT:Modifier
static DEFAULT:Modifier
static STATIC:Modifier
static SEALED:Modifier
static NON_SEALED:Modifier
static FINAL:Modifier
static TRANSIENT:Modifier
static VOLATILE:Modifier
static SYNCHRONIZED:Modifier
static NATIVE:Modifier
static STRICTFP:Modifier

static values(): Modifier[];

static valueOf(arg0: String): Modifier;
toString(): string;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export interface ModuleElement extends Element, QualifiedNameable {

asType(): TypeMirror;

getQualifiedName(): Name;

getSimpleName(): Name;

getEnclosedElements(): List<Element>;

isOpen(): boolean;

isUnnamed(): boolean;

getEnclosingElement(): Element;

getDirectives(): List<ModuleElement.Directive>;
 }
export namespace ModuleElement { 
export interface Directive {

getKind(): ModuleElement.DirectiveKind;

accept<R extends Object, P extends Object>(arg0: ModuleElement.DirectiveVisitor<R, P>, arg1: P): R;
 }

export class DirectiveKind extends Enum<ModuleElement.DirectiveKind> {
static REQUIRES:ModuleElement.DirectiveKind
static EXPORTS:ModuleElement.DirectiveKind
static OPENS:ModuleElement.DirectiveKind
static USES:ModuleElement.DirectiveKind
static PROVIDES:ModuleElement.DirectiveKind

static values(): ModuleElement.DirectiveKind[];

static valueOf(arg0: String): ModuleElement.DirectiveKind;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export interface DirectiveVisitor<R extends Object, P extends Object> extends Object {

/* default */ visit(arg0: ModuleElement.Directive): R;

/* default */ visit(arg0: ModuleElement.Directive, arg1: P): R;

visitRequires(arg0: ModuleElement.RequiresDirective, arg1: P): R;

visitExports(arg0: ModuleElement.ExportsDirective, arg1: P): R;

visitOpens(arg0: ModuleElement.OpensDirective, arg1: P): R;

visitUses(arg0: ModuleElement.UsesDirective, arg1: P): R;

visitProvides(arg0: ModuleElement.ProvidesDirective, arg1: P): R;

/* default */ visitUnknown(arg0: ModuleElement.Directive, arg1: P): R;
 }

export interface ExportsDirective extends ModuleElement.Directive {

getPackage(): PackageElement;

getTargetModules(): List<ModuleElement>;
 }

export interface OpensDirective extends ModuleElement.Directive {

getPackage(): PackageElement;

getTargetModules(): List<ModuleElement>;
 }

export interface ProvidesDirective extends ModuleElement.Directive {

getService(): TypeElement;

getImplementations(): List<TypeElement>;
 }

export interface RequiresDirective extends ModuleElement.Directive {

isStatic(): boolean;

isTransitive(): boolean;

getDependency(): ModuleElement;
 }

export interface UsesDirective extends ModuleElement.Directive {

getService(): TypeElement;
 }

}

export interface Name extends CharSequence {

equals(arg0: Object): boolean;

hashCode(): number;

contentEquals(arg0: CharSequence): boolean;
 }

export class NestingKind extends Enum<NestingKind> {
static TOP_LEVEL:NestingKind
static MEMBER:NestingKind
static LOCAL:NestingKind
static ANONYMOUS:NestingKind

static values(): NestingKind[];

static valueOf(arg0: String): NestingKind;

isNested(): boolean;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export interface PackageElement extends Element, QualifiedNameable {

asType(): TypeMirror;

getQualifiedName(): Name;

getSimpleName(): Name;

getEnclosedElements(): List<Element>;

isUnnamed(): boolean;

getEnclosingElement(): Element;
 }

export interface Parameterizable extends Element {

getTypeParameters(): List<TypeParameterElement>;
 }

export interface QualifiedNameable extends Element {

getQualifiedName(): Name;
 }

export interface RecordComponentElement extends Element {

getEnclosingElement(): Element;

getSimpleName(): Name;

getAccessor(): ExecutableElement;
 }

export interface TypeElement extends Element, Parameterizable, QualifiedNameable {

asType(): TypeMirror;

getEnclosedElements(): List<Element>;

getNestingKind(): NestingKind;

getQualifiedName(): Name;

getSimpleName(): Name;

getSuperclass(): TypeMirror;

getInterfaces(): List<TypeMirror>;

getTypeParameters(): List<TypeParameterElement>;

/* default */ getRecordComponents(): List<RecordComponentElement>;

/* default */ getPermittedSubclasses(): List<TypeMirror>;

getEnclosingElement(): Element;
 }

export interface TypeParameterElement extends Element {

asType(): TypeMirror;

getGenericElement(): Element;

getBounds(): List<TypeMirror>;

getEnclosingElement(): Element;
 }

export class UnknownAnnotationValueException extends UnknownEntityException {
constructor(arg0: AnnotationValue, arg1: Object);

getUnknownAnnotationValue(): AnnotationValue;

getArgument(): Object;
 }

export class UnknownDirectiveException extends UnknownEntityException {
constructor(arg0: ModuleElement.Directive, arg1: Object);

getUnknownDirective(): ModuleElement.Directive;

getArgument(): Object;
 }

export class UnknownElementException extends UnknownEntityException {
constructor(arg0: Element, arg1: Object);

getUnknownElement(): Element;

getArgument(): Object;
 }

export interface VariableElement extends Element {

asType(): TypeMirror;

getConstantValue(): Object;

getSimpleName(): Name;

getEnclosingElement(): Element;
 }

}
