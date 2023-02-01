/// <reference path="java.lang.d.ts" />
/// <reference path="java.lang.annotation.d.ts" />
declare module '@afterburnerhq/javax.annotation.meta' { 
import { Enum, Class, String } from '@afterburnerhq/java.lang'
import { Annotation } from '@afterburnerhq/java.lang.annotation'





export interface TypeQualifierValidator<A extends Annotation> extends Object {

forConstantValue(arg0: A, arg1: Object): When;
 }

export class When extends Enum<When> {
static ALWAYS:When
static UNKNOWN:When
static MAYBE:When
static NEVER:When

static values(): When[];

static valueOf(arg0: String): When;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}
