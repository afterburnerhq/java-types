/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.lang.annotation.d.ts" />
/// <reference path="javax.lang.model.element.d.ts" />
declare module '@afterburnerhq/javax.lang.model' { 
import { List } from '@afterburnerhq/java.util'
import { Enum, CharSequence, Class, String, RuntimeException } from '@afterburnerhq/java.lang'
import { Annotation } from '@afterburnerhq/java.lang.annotation'
import { AnnotationMirror } from '@afterburnerhq/javax.lang.model.element'
export interface AnnotatedConstruct {

getAnnotationMirrors(): List<AnnotationMirror>;

getAnnotation<A extends Annotation>(arg0: Class<A>): A;

getAnnotationsByType<A extends Annotation>(arg0: Class<A>): A[];
 }

export class SourceVersion extends Enum<SourceVersion> {
static RELEASE_0:SourceVersion
static RELEASE_1:SourceVersion
static RELEASE_2:SourceVersion
static RELEASE_3:SourceVersion
static RELEASE_4:SourceVersion
static RELEASE_5:SourceVersion
static RELEASE_6:SourceVersion
static RELEASE_7:SourceVersion
static RELEASE_8:SourceVersion
static RELEASE_9:SourceVersion
static RELEASE_10:SourceVersion
static RELEASE_11:SourceVersion
static RELEASE_12:SourceVersion
static RELEASE_13:SourceVersion
static RELEASE_14:SourceVersion
static RELEASE_15:SourceVersion
static RELEASE_16:SourceVersion
static RELEASE_17:SourceVersion

static values(): SourceVersion[];

static valueOf(arg0: String): SourceVersion;

static latest(): SourceVersion;

static latestSupported(): SourceVersion;

static isIdentifier(arg0: CharSequence): boolean;

static isName(arg0: CharSequence): boolean;

static isName(arg0: CharSequence, arg1: SourceVersion): boolean;

static isKeyword(arg0: CharSequence): boolean;

static isKeyword(arg0: CharSequence, arg1: SourceVersion): boolean;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class UnknownEntityException extends RuntimeException {
 }

}
