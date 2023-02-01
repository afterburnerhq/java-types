/// <reference path="java.lang.reflect.d.ts" />
/// <reference path="java.lang.d.ts" />
declare module '@afterburnerhq/java.lang.annotation' { 
import { Method } from '@afterburnerhq/java.lang.reflect'
import { Enum, Error, Throwable, Class, String, RuntimeException } from '@afterburnerhq/java.lang'
export interface Annotation {

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;

annotationType(): Class<Annotation>;
 }

export class AnnotationFormatError extends Error {
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class AnnotationTypeMismatchException extends RuntimeException {
constructor(arg0: Method, arg1: String);

element(): Method;

foundType(): String;
 }


export class ElementType extends Enum<ElementType> {
static TYPE:ElementType
static FIELD:ElementType
static METHOD:ElementType
static PARAMETER:ElementType
static CONSTRUCTOR:ElementType
static LOCAL_VARIABLE:ElementType
static ANNOTATION_TYPE:ElementType
static PACKAGE:ElementType
static TYPE_PARAMETER:ElementType
static TYPE_USE:ElementType
static MODULE:ElementType
static RECORD_COMPONENT:ElementType

static values(): ElementType[];

static valueOf(arg0: String): ElementType;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class IncompleteAnnotationException extends RuntimeException {
constructor(arg0: Class<Annotation>, arg1: String);

annotationType(): Class<Annotation>;

elementName(): String;
 }





export class RetentionPolicy extends Enum<RetentionPolicy> {
static SOURCE:RetentionPolicy
static CLASS:RetentionPolicy
static RUNTIME:RetentionPolicy

static values(): RetentionPolicy[];

static valueOf(arg0: String): RetentionPolicy;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }


}
