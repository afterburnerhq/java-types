/// <reference path="java.lang.d.ts" />
/// <reference path="org.w3c.dom.d.ts" />
/// <reference path="javax.xml.transform.d.ts" />
declare module '@afterburnerhq/javax.xml.transform.dom' { 
import { String } from '@afterburnerhq/java.lang'
import { Node } from '@afterburnerhq/org.w3c.dom'
import { SourceLocator, Source, Result } from '@afterburnerhq/javax.xml.transform'
export interface DOMLocator extends SourceLocator {

getOriginatingNode(): Node;
 }

export class DOMResult implements Result {
static FEATURE:String
constructor();
constructor(arg0: Node);
constructor(arg0: Node, arg1: String);
constructor(arg0: Node, arg1: Node);
constructor(arg0: Node, arg1: Node, arg2: String);

setNode(arg0: Node): void;

getNode(): Node;

setNextSibling(arg0: Node): void;

getNextSibling(): Node;

setSystemId(arg0: String): void;

getSystemId(): String;
 }

export class DOMSource implements Source {
static FEATURE:String
constructor();
constructor(arg0: Node);
constructor(arg0: Node, arg1: String);

setNode(arg0: Node): void;

getNode(): Node;

setSystemId(arg0: String): void;

getSystemId(): String;

isEmpty(): boolean;
 }

}
