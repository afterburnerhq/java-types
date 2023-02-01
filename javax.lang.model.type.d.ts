/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="javax.lang.model.d.ts" />
/// <reference path="java.lang.annotation.d.ts" />
/// <reference path="javax.lang.model.element.d.ts" />
declare module '@afterburnerhq/javax.lang.model.type' { 
import { List } from '@afterburnerhq/java.util'
import { Enum, Class, RuntimeException, String } from '@afterburnerhq/java.lang'
import { AnnotatedConstruct, UnknownEntityException } from '@afterburnerhq/javax.lang.model'
import { Annotation } from '@afterburnerhq/java.lang.annotation'
import { AnnotationMirror, Element } from '@afterburnerhq/javax.lang.model.element'
export interface ArrayType extends ReferenceType {

getComponentType(): TypeMirror;
 }

export interface DeclaredType extends ReferenceType {

asElement(): Element;

getEnclosingType(): TypeMirror;

getTypeArguments(): List<TypeMirror>;
 }

export interface ErrorType extends DeclaredType {
 }

export interface ExecutableType extends TypeMirror {

getTypeVariables(): List<TypeVariable>;

getReturnType(): TypeMirror;

getParameterTypes(): List<TypeMirror>;

getReceiverType(): TypeMirror;

getThrownTypes(): List<TypeMirror>;
 }

export interface IntersectionType extends TypeMirror {

getBounds(): List<TypeMirror>;
 }

export class MirroredTypeException extends MirroredTypesException {
constructor(arg0: TypeMirror);

getTypeMirror(): TypeMirror;
 }

export class MirroredTypesException extends RuntimeException {
constructor(arg0: List<TypeMirror>);

getTypeMirrors(): List<TypeMirror>;
 }

export interface NoType extends TypeMirror {
 }

export interface NullType extends ReferenceType {
 }

export interface PrimitiveType extends TypeMirror {
 }

export interface ReferenceType extends TypeMirror {
 }

export class TypeKind extends Enum<TypeKind> {
static BOOLEAN:TypeKind
static BYTE:TypeKind
static SHORT:TypeKind
static INT:TypeKind
static LONG:TypeKind
static CHAR:TypeKind
static FLOAT:TypeKind
static DOUBLE:TypeKind
static VOID:TypeKind
static NONE:TypeKind
static NULL:TypeKind
static ARRAY:TypeKind
static DECLARED:TypeKind
static ERROR:TypeKind
static TYPEVAR:TypeKind
static WILDCARD:TypeKind
static PACKAGE:TypeKind
static EXECUTABLE:TypeKind
static OTHER:TypeKind
static UNION:TypeKind
static INTERSECTION:TypeKind
static MODULE:TypeKind

static values(): TypeKind[];

static valueOf(arg0: String): TypeKind;

isPrimitive(): boolean;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export interface TypeMirror extends AnnotatedConstruct {

getKind(): TypeKind;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;

getAnnotationMirrors(): List<AnnotationMirror>;

getAnnotation<A extends Annotation>(arg0: Class<A>): A;

getAnnotationsByType<A extends Annotation>(arg0: Class<A>): A[];

accept<R extends Object, P extends Object>(arg0: TypeVisitor<R, P>, arg1: P): R;
 }

export interface TypeVariable extends ReferenceType {

asElement(): Element;

getUpperBound(): TypeMirror;

getLowerBound(): TypeMirror;
 }

export interface TypeVisitor<R extends Object, P extends Object> extends Object {

visit(arg0: TypeMirror, arg1: P): R;

/* default */ visit(arg0: TypeMirror): R;

visitPrimitive(arg0: PrimitiveType, arg1: P): R;

visitNull(arg0: NullType, arg1: P): R;

visitArray(arg0: ArrayType, arg1: P): R;

visitDeclared(arg0: DeclaredType, arg1: P): R;

visitError(arg0: ErrorType, arg1: P): R;

visitTypeVariable(arg0: TypeVariable, arg1: P): R;

visitWildcard(arg0: WildcardType, arg1: P): R;

visitExecutable(arg0: ExecutableType, arg1: P): R;

visitNoType(arg0: NoType, arg1: P): R;

visitUnknown(arg0: TypeMirror, arg1: P): R;

visitUnion(arg0: UnionType, arg1: P): R;

visitIntersection(arg0: IntersectionType, arg1: P): R;
 }

export interface UnionType extends TypeMirror {

getAlternatives(): List<TypeMirror>;
 }

export class UnknownTypeException extends UnknownEntityException {
constructor(arg0: TypeMirror, arg1: Object);

getUnknownType(): TypeMirror;

getArgument(): Object;
 }

export interface WildcardType extends TypeMirror {

getExtendsBound(): TypeMirror;

getSuperBound(): TypeMirror;
 }

}
