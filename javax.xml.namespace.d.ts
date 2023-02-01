/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/javax.xml.namespace' { 
import { String } from '@afterburnerhq/java.lang'
import { Iterator } from '@afterburnerhq/java.util'
import { Serializable } from '@afterburnerhq/java.io'
export interface NamespaceContext {

getNamespaceURI(arg0: String): String;

getPrefix(arg0: String): String;

getPrefixes(arg0: String): Iterator<String>;
 }

export class QName implements Serializable {
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: String, arg2: String);
constructor(arg0: String);

getNamespaceURI(): String;

getLocalPart(): String;

getPrefix(): String;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;

static valueOf(arg0: String): QName;
 }

}
