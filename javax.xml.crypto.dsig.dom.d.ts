/// <reference path="java.security.d.ts" />
/// <reference path="org.w3c.dom.d.ts" />
/// <reference path="javax.xml.crypto.d.ts" />
/// <reference path="javax.xml.crypto.dom.d.ts" />
/// <reference path="javax.xml.crypto.dsig.d.ts" />
declare module '@afterburnerhq/javax.xml.crypto.dsig.dom' { 
import { Key } from '@afterburnerhq/java.security'
import { Node } from '@afterburnerhq/org.w3c.dom'
import { KeySelector } from '@afterburnerhq/javax.xml.crypto'
import { DOMCryptoContext } from '@afterburnerhq/javax.xml.crypto.dom'
import { XMLSignContext, XMLValidateContext } from '@afterburnerhq/javax.xml.crypto.dsig'
export class DOMSignContext extends DOMCryptoContext implements XMLSignContext {
constructor(arg0: Key, arg1: Node);
constructor(arg0: Key, arg1: Node, arg2: Node);
constructor(arg0: KeySelector, arg1: Node);
constructor(arg0: KeySelector, arg1: Node, arg2: Node);

setParent(arg0: Node): void;

setNextSibling(arg0: Node): void;

getParent(): Node;

getNextSibling(): Node;
 }

export class DOMValidateContext extends DOMCryptoContext implements XMLValidateContext {
constructor(arg0: KeySelector, arg1: Node);
constructor(arg0: Key, arg1: Node);

setNode(arg0: Node): void;

getNode(): Node;
 }

}
