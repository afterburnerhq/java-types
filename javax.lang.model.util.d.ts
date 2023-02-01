/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.lang.model.d.ts" />
/// <reference path="javax.lang.model.type.d.ts" />
/// <reference path="javax.lang.model.element.d.ts" />
declare module '@afterburnerhq/javax.lang.model.util' { 
import { CharSequence, Enum, Class, String, Iterable } from '@afterburnerhq/java.lang'
import { Map, List, Set } from '@afterburnerhq/java.util'
import { Writer } from '@afterburnerhq/java.io'
import { AnnotatedConstruct } from '@afterburnerhq/javax.lang.model'
import { ExecutableType, UnionType, NoType, TypeVisitor, TypeKind, ArrayType, WildcardType, IntersectionType, ErrorType, TypeMirror, TypeVariable, PrimitiveType, NullType, DeclaredType } from '@afterburnerhq/javax.lang.model.type'
import { TypeElement, Element, ExecutableElement, RecordComponentElement, ElementVisitor, VariableElement, TypeParameterElement, Name, AnnotationMirror, ModuleElement, AnnotationValue, AnnotationValueVisitor, PackageElement } from '@afterburnerhq/javax.lang.model.element'
export interface AbstractAnnotationValueVisitor14<R extends Object, P extends Object> { }
export abstract class AbstractAnnotationValueVisitor14<R extends Object, P extends Object> extends AbstractAnnotationValueVisitor9<R, P> {
 }

export abstract class AbstractAnnotationValueVisitor6<R extends Object, P extends Object> extends Object implements AnnotationValueVisitor<R, P> {

visit(arg0: AnnotationValue, arg1: P): R;

visit(arg0: AnnotationValue): R;

visitUnknown(arg0: AnnotationValue, arg1: P): R;
 }

export interface AbstractAnnotationValueVisitor7<R extends Object, P extends Object> { }
export abstract class AbstractAnnotationValueVisitor7<R extends Object, P extends Object> extends AbstractAnnotationValueVisitor6<R, P> {
 }

export interface AbstractAnnotationValueVisitor8<R extends Object, P extends Object> { }
export abstract class AbstractAnnotationValueVisitor8<R extends Object, P extends Object> extends AbstractAnnotationValueVisitor7<R, P> {
 }

export interface AbstractAnnotationValueVisitor9<R extends Object, P extends Object> { }
export abstract class AbstractAnnotationValueVisitor9<R extends Object, P extends Object> extends AbstractAnnotationValueVisitor8<R, P> {
 }

export interface AbstractElementVisitor14<R extends Object, P extends Object> { }
export abstract class AbstractElementVisitor14<R extends Object, P extends Object> extends AbstractElementVisitor9<R, P> {

abstract visitRecordComponent(arg0: RecordComponentElement, arg1: P): R;
 }

export abstract class AbstractElementVisitor6<R extends Object, P extends Object> extends Object implements ElementVisitor<R, P> {

visit(arg0: Element, arg1: P): R;

visit(arg0: Element): R;

visitUnknown(arg0: Element, arg1: P): R;

visitModule(arg0: ModuleElement, arg1: P): R;

visitRecordComponent(arg0: RecordComponentElement, arg1: P): R;
 }

export interface AbstractElementVisitor7<R extends Object, P extends Object> { }
export abstract class AbstractElementVisitor7<R extends Object, P extends Object> extends AbstractElementVisitor6<R, P> {
 }

export interface AbstractElementVisitor8<R extends Object, P extends Object> { }
export abstract class AbstractElementVisitor8<R extends Object, P extends Object> extends AbstractElementVisitor7<R, P> {
 }

export interface AbstractElementVisitor9<R extends Object, P extends Object> { }
export abstract class AbstractElementVisitor9<R extends Object, P extends Object> extends AbstractElementVisitor8<R, P> {

abstract visitModule(arg0: ModuleElement, arg1: P): R;
 }

export interface AbstractTypeVisitor14<R extends Object, P extends Object> { }
export abstract class AbstractTypeVisitor14<R extends Object, P extends Object> extends AbstractTypeVisitor9<R, P> {
 }

export abstract class AbstractTypeVisitor6<R extends Object, P extends Object> extends Object implements TypeVisitor<R, P> {

visit(arg0: TypeMirror, arg1: P): R;

visit(arg0: TypeMirror): R;

visitUnion(arg0: UnionType, arg1: P): R;

visitIntersection(arg0: IntersectionType, arg1: P): R;

visitUnknown(arg0: TypeMirror, arg1: P): R;
 }

export interface AbstractTypeVisitor7<R extends Object, P extends Object> { }
export abstract class AbstractTypeVisitor7<R extends Object, P extends Object> extends AbstractTypeVisitor6<R, P> {

abstract visitUnion(arg0: UnionType, arg1: P): R;
 }

export interface AbstractTypeVisitor8<R extends Object, P extends Object> { }
export abstract class AbstractTypeVisitor8<R extends Object, P extends Object> extends AbstractTypeVisitor7<R, P> {

abstract visitIntersection(arg0: IntersectionType, arg1: P): R;
 }

export interface AbstractTypeVisitor9<R extends Object, P extends Object> { }
export abstract class AbstractTypeVisitor9<R extends Object, P extends Object> extends AbstractTypeVisitor8<R, P> {
 }

export class ElementFilter {

static fieldsIn(arg0: Iterable<Element>): List<VariableElement>;

static fieldsIn(arg0: Set<Element>): Set<VariableElement>;

static recordComponentsIn(arg0: Iterable<Element>): List<RecordComponentElement>;

static recordComponentsIn(arg0: Set<Element>): Set<RecordComponentElement>;

static constructorsIn(arg0: Iterable<Element>): List<ExecutableElement>;

static constructorsIn(arg0: Set<Element>): Set<ExecutableElement>;

static methodsIn(arg0: Iterable<Element>): List<ExecutableElement>;

static methodsIn(arg0: Set<Element>): Set<ExecutableElement>;

static typesIn(arg0: Iterable<Element>): List<TypeElement>;

static typesIn(arg0: Set<Element>): Set<TypeElement>;

static packagesIn(arg0: Iterable<Element>): List<PackageElement>;

static packagesIn(arg0: Set<Element>): Set<PackageElement>;

static modulesIn(arg0: Iterable<Element>): List<ModuleElement>;

static modulesIn(arg0: Set<Element>): Set<ModuleElement>;

static exportsIn(arg0: Iterable<ModuleElement.Directive>): List<ModuleElement.ExportsDirective>;

static opensIn(arg0: Iterable<ModuleElement.Directive>): List<ModuleElement.OpensDirective>;

static providesIn(arg0: Iterable<ModuleElement.Directive>): List<ModuleElement.ProvidesDirective>;

static requiresIn(arg0: Iterable<ModuleElement.Directive>): List<ModuleElement.RequiresDirective>;

static usesIn(arg0: Iterable<ModuleElement.Directive>): List<ModuleElement.UsesDirective>;
 }

export interface ElementKindVisitor14<R extends Object, P extends Object> { }
export class ElementKindVisitor14<R extends Object, P extends Object> extends ElementKindVisitor9<R, P> {

visitRecordComponent(arg0: RecordComponentElement, arg1: P): R;

visitTypeAsRecord(arg0: TypeElement, arg1: P): R;

visitVariableAsBindingVariable(arg0: VariableElement, arg1: P): R;
 }

export interface ElementKindVisitor6<R extends Object, P extends Object> { }
export class ElementKindVisitor6<R extends Object, P extends Object> extends SimpleElementVisitor6<R, P> {

visitPackage(arg0: PackageElement, arg1: P): R;

visitType(arg0: TypeElement, arg1: P): R;

visitTypeAsAnnotationType(arg0: TypeElement, arg1: P): R;

visitTypeAsClass(arg0: TypeElement, arg1: P): R;

visitTypeAsEnum(arg0: TypeElement, arg1: P): R;

visitTypeAsInterface(arg0: TypeElement, arg1: P): R;

visitTypeAsRecord(arg0: TypeElement, arg1: P): R;

visitVariable(arg0: VariableElement, arg1: P): R;

visitVariableAsEnumConstant(arg0: VariableElement, arg1: P): R;

visitVariableAsExceptionParameter(arg0: VariableElement, arg1: P): R;

visitVariableAsField(arg0: VariableElement, arg1: P): R;

visitVariableAsLocalVariable(arg0: VariableElement, arg1: P): R;

visitVariableAsParameter(arg0: VariableElement, arg1: P): R;

visitVariableAsResourceVariable(arg0: VariableElement, arg1: P): R;

visitVariableAsBindingVariable(arg0: VariableElement, arg1: P): R;

visitExecutable(arg0: ExecutableElement, arg1: P): R;

visitExecutableAsConstructor(arg0: ExecutableElement, arg1: P): R;

visitExecutableAsInstanceInit(arg0: ExecutableElement, arg1: P): R;

visitExecutableAsMethod(arg0: ExecutableElement, arg1: P): R;

visitExecutableAsStaticInit(arg0: ExecutableElement, arg1: P): R;

visitTypeParameter(arg0: TypeParameterElement, arg1: P): R;
 }

export interface ElementKindVisitor7<R extends Object, P extends Object> { }
export class ElementKindVisitor7<R extends Object, P extends Object> extends ElementKindVisitor6<R, P> {

visitVariableAsResourceVariable(arg0: VariableElement, arg1: P): R;
 }

export interface ElementKindVisitor8<R extends Object, P extends Object> { }
export class ElementKindVisitor8<R extends Object, P extends Object> extends ElementKindVisitor7<R, P> {
 }

export interface ElementKindVisitor9<R extends Object, P extends Object> { }
export class ElementKindVisitor9<R extends Object, P extends Object> extends ElementKindVisitor8<R, P> {

visitModule(arg0: ModuleElement, arg1: P): R;
 }

export interface ElementScanner14<R extends Object, P extends Object> { }
export class ElementScanner14<R extends Object, P extends Object> extends ElementScanner9<R, P> {

visitType(arg0: TypeElement, arg1: P): R;

visitExecutable(arg0: ExecutableElement, arg1: P): R;

visitRecordComponent(arg0: RecordComponentElement, arg1: P): R;
 }

export interface ElementScanner6<R extends Object, P extends Object> { }
export class ElementScanner6<R extends Object, P extends Object> extends AbstractElementVisitor6<R, P> {

scan(arg0: Iterable<Element>, arg1: P): R;

scan(arg0: Element, arg1: P): R;

scan(arg0: Element): R;

visitPackage(arg0: PackageElement, arg1: P): R;

visitType(arg0: TypeElement, arg1: P): R;

visitVariable(arg0: VariableElement, arg1: P): R;

visitExecutable(arg0: ExecutableElement, arg1: P): R;

visitTypeParameter(arg0: TypeParameterElement, arg1: P): R;
 }

export interface ElementScanner7<R extends Object, P extends Object> { }
export class ElementScanner7<R extends Object, P extends Object> extends ElementScanner6<R, P> {

visitVariable(arg0: VariableElement, arg1: P): R;
 }

export interface ElementScanner8<R extends Object, P extends Object> { }
export class ElementScanner8<R extends Object, P extends Object> extends ElementScanner7<R, P> {
 }

export interface ElementScanner9<R extends Object, P extends Object> { }
export class ElementScanner9<R extends Object, P extends Object> extends ElementScanner8<R, P> {

visitModule(arg0: ModuleElement, arg1: P): R;
 }

export interface Elements {

getPackageElement(arg0: CharSequence): PackageElement;

/* default */ getPackageElement(arg0: ModuleElement, arg1: CharSequence): PackageElement;

/* default */ getAllPackageElements(arg0: CharSequence): Set<PackageElement>;

getTypeElement(arg0: CharSequence): TypeElement;

/* default */ getTypeElement(arg0: ModuleElement, arg1: CharSequence): TypeElement;

/* default */ getAllTypeElements(arg0: CharSequence): Set<TypeElement>;

/* default */ getModuleElement(arg0: CharSequence): ModuleElement;

/* default */ getAllModuleElements(): Set<ModuleElement>;

getElementValuesWithDefaults(arg0: AnnotationMirror): Map<ExecutableElement, AnnotationValue>;

getDocComment(arg0: Element): String;

isDeprecated(arg0: Element): boolean;

/* default */ getOrigin(arg0: Element): Elements.Origin;

/* default */ getOrigin(arg0: AnnotatedConstruct, arg1: AnnotationMirror): Elements.Origin;

/* default */ getOrigin(arg0: ModuleElement, arg1: ModuleElement.Directive): Elements.Origin;

/* default */ isBridge(arg0: ExecutableElement): boolean;

getBinaryName(arg0: TypeElement): Name;

getPackageOf(arg0: Element): PackageElement;

/* default */ getModuleOf(arg0: Element): ModuleElement;

getAllMembers(arg0: TypeElement): List<Element>;

getAllAnnotationMirrors(arg0: Element): List<AnnotationMirror>;

hides(arg0: Element, arg1: Element): boolean;

overrides(arg0: ExecutableElement, arg1: ExecutableElement, arg2: TypeElement): boolean;

getConstantExpression(arg0: Object): String;

printElements(arg0: Writer, arg1: Element[]): void;

getName(arg0: CharSequence): Name;

isFunctionalInterface(arg0: TypeElement): boolean;

/* default */ isAutomaticModule(arg0: ModuleElement): boolean;

/* default */ recordComponentFor(arg0: ExecutableElement): RecordComponentElement;
 }
export namespace Elements { 
export class Origin extends Enum<Elements.Origin> {
static EXPLICIT:Elements.Origin
static MANDATED:Elements.Origin
static SYNTHETIC:Elements.Origin

static values(): Elements.Origin[];

static valueOf(arg0: String): Elements.Origin;

isDeclared(): boolean;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export interface SimpleAnnotationValueVisitor14<R extends Object, P extends Object> { }
export class SimpleAnnotationValueVisitor14<R extends Object, P extends Object> extends SimpleAnnotationValueVisitor9<R, P> {
 }

export interface SimpleAnnotationValueVisitor6<R extends Object, P extends Object> { }
export class SimpleAnnotationValueVisitor6<R extends Object, P extends Object> extends AbstractAnnotationValueVisitor6<R, P> {

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
 }

export interface SimpleAnnotationValueVisitor7<R extends Object, P extends Object> { }
export class SimpleAnnotationValueVisitor7<R extends Object, P extends Object> extends SimpleAnnotationValueVisitor6<R, P> {
 }

export interface SimpleAnnotationValueVisitor8<R extends Object, P extends Object> { }
export class SimpleAnnotationValueVisitor8<R extends Object, P extends Object> extends SimpleAnnotationValueVisitor7<R, P> {
 }

export interface SimpleAnnotationValueVisitor9<R extends Object, P extends Object> { }
export class SimpleAnnotationValueVisitor9<R extends Object, P extends Object> extends SimpleAnnotationValueVisitor8<R, P> {
 }

export interface SimpleElementVisitor14<R extends Object, P extends Object> { }
export class SimpleElementVisitor14<R extends Object, P extends Object> extends SimpleElementVisitor9<R, P> {

visitRecordComponent(arg0: RecordComponentElement, arg1: P): R;
 }

export interface SimpleElementVisitor6<R extends Object, P extends Object> { }
export class SimpleElementVisitor6<R extends Object, P extends Object> extends AbstractElementVisitor6<R, P> {

visitPackage(arg0: PackageElement, arg1: P): R;

visitType(arg0: TypeElement, arg1: P): R;

visitVariable(arg0: VariableElement, arg1: P): R;

visitExecutable(arg0: ExecutableElement, arg1: P): R;

visitTypeParameter(arg0: TypeParameterElement, arg1: P): R;
 }

export interface SimpleElementVisitor7<R extends Object, P extends Object> { }
export class SimpleElementVisitor7<R extends Object, P extends Object> extends SimpleElementVisitor6<R, P> {

visitVariable(arg0: VariableElement, arg1: P): R;
 }

export interface SimpleElementVisitor8<R extends Object, P extends Object> { }
export class SimpleElementVisitor8<R extends Object, P extends Object> extends SimpleElementVisitor7<R, P> {
 }

export interface SimpleElementVisitor9<R extends Object, P extends Object> { }
export class SimpleElementVisitor9<R extends Object, P extends Object> extends SimpleElementVisitor8<R, P> {

visitModule(arg0: ModuleElement, arg1: P): R;
 }

export interface SimpleTypeVisitor14<R extends Object, P extends Object> { }
export class SimpleTypeVisitor14<R extends Object, P extends Object> extends SimpleTypeVisitor9<R, P> {
 }

export interface SimpleTypeVisitor6<R extends Object, P extends Object> { }
export class SimpleTypeVisitor6<R extends Object, P extends Object> extends AbstractTypeVisitor6<R, P> {

visitPrimitive(arg0: PrimitiveType, arg1: P): R;

visitNull(arg0: NullType, arg1: P): R;

visitArray(arg0: ArrayType, arg1: P): R;

visitDeclared(arg0: DeclaredType, arg1: P): R;

visitError(arg0: ErrorType, arg1: P): R;

visitTypeVariable(arg0: TypeVariable, arg1: P): R;

visitWildcard(arg0: WildcardType, arg1: P): R;

visitExecutable(arg0: ExecutableType, arg1: P): R;

visitNoType(arg0: NoType, arg1: P): R;
 }

export interface SimpleTypeVisitor7<R extends Object, P extends Object> { }
export class SimpleTypeVisitor7<R extends Object, P extends Object> extends SimpleTypeVisitor6<R, P> {

visitUnion(arg0: UnionType, arg1: P): R;
 }

export interface SimpleTypeVisitor8<R extends Object, P extends Object> { }
export class SimpleTypeVisitor8<R extends Object, P extends Object> extends SimpleTypeVisitor7<R, P> {

visitIntersection(arg0: IntersectionType, arg1: P): R;
 }

export interface SimpleTypeVisitor9<R extends Object, P extends Object> { }
export class SimpleTypeVisitor9<R extends Object, P extends Object> extends SimpleTypeVisitor8<R, P> {
 }

export interface TypeKindVisitor14<R extends Object, P extends Object> { }
export class TypeKindVisitor14<R extends Object, P extends Object> extends TypeKindVisitor9<R, P> {
 }

export interface TypeKindVisitor6<R extends Object, P extends Object> { }
export class TypeKindVisitor6<R extends Object, P extends Object> extends SimpleTypeVisitor6<R, P> {

visitPrimitive(arg0: PrimitiveType, arg1: P): R;

visitPrimitiveAsBoolean(arg0: PrimitiveType, arg1: P): R;

visitPrimitiveAsByte(arg0: PrimitiveType, arg1: P): R;

visitPrimitiveAsShort(arg0: PrimitiveType, arg1: P): R;

visitPrimitiveAsInt(arg0: PrimitiveType, arg1: P): R;

visitPrimitiveAsLong(arg0: PrimitiveType, arg1: P): R;

visitPrimitiveAsChar(arg0: PrimitiveType, arg1: P): R;

visitPrimitiveAsFloat(arg0: PrimitiveType, arg1: P): R;

visitPrimitiveAsDouble(arg0: PrimitiveType, arg1: P): R;

visitNoType(arg0: NoType, arg1: P): R;

visitNoTypeAsVoid(arg0: NoType, arg1: P): R;

visitNoTypeAsPackage(arg0: NoType, arg1: P): R;

visitNoTypeAsModule(arg0: NoType, arg1: P): R;

visitNoTypeAsNone(arg0: NoType, arg1: P): R;
 }

export interface TypeKindVisitor7<R extends Object, P extends Object> { }
export class TypeKindVisitor7<R extends Object, P extends Object> extends TypeKindVisitor6<R, P> {

visitUnion(arg0: UnionType, arg1: P): R;
 }

export interface TypeKindVisitor8<R extends Object, P extends Object> { }
export class TypeKindVisitor8<R extends Object, P extends Object> extends TypeKindVisitor7<R, P> {

visitIntersection(arg0: IntersectionType, arg1: P): R;
 }

export interface TypeKindVisitor9<R extends Object, P extends Object> { }
export class TypeKindVisitor9<R extends Object, P extends Object> extends TypeKindVisitor8<R, P> {

visitNoTypeAsModule(arg0: NoType, arg1: P): R;
 }

export interface Types {

asElement(arg0: TypeMirror): Element;

isSameType(arg0: TypeMirror, arg1: TypeMirror): boolean;

isSubtype(arg0: TypeMirror, arg1: TypeMirror): boolean;

isAssignable(arg0: TypeMirror, arg1: TypeMirror): boolean;

contains(arg0: TypeMirror, arg1: TypeMirror): boolean;

isSubsignature(arg0: ExecutableType, arg1: ExecutableType): boolean;

directSupertypes(arg0: TypeMirror): List<TypeMirror>;

erasure(arg0: TypeMirror): TypeMirror;

boxedClass(arg0: PrimitiveType): TypeElement;

unboxedType(arg0: TypeMirror): PrimitiveType;

capture(arg0: TypeMirror): TypeMirror;

getPrimitiveType(arg0: TypeKind): PrimitiveType;

getNullType(): NullType;

getNoType(arg0: TypeKind): NoType;

getArrayType(arg0: TypeMirror): ArrayType;

getWildcardType(arg0: TypeMirror, arg1: TypeMirror): WildcardType;

getDeclaredType(arg0: TypeElement, arg1: TypeMirror[]): DeclaredType;

getDeclaredType(arg0: DeclaredType, arg1: TypeElement, arg2: TypeMirror[]): DeclaredType;

asMemberOf(arg0: DeclaredType, arg1: Element): TypeMirror;
 }

}
