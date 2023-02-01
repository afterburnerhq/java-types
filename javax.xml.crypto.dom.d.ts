/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="javax.xml.crypto.d.ts" />
/// <reference path="org.w3c.dom.d.ts" />
declare module '@afterburnerhq/javax.xml.crypto.dom' { 
import { String } from '@afterburnerhq/java.lang'
import { Iterator, Map } from '@afterburnerhq/java.util'
import { XMLCryptoContext, XMLStructure, URIDereferencer, KeySelector, URIReference } from '@afterburnerhq/javax.xml.crypto'
import { Element, Node } from '@afterburnerhq/org.w3c.dom'
export class DOMCryptoContext implements XMLCryptoContext {

getNamespacePrefix(arg0: String, arg1: String): String;

putNamespacePrefix(arg0: String, arg1: String): String;

getDefaultNamespacePrefix(): String;

setDefaultNamespacePrefix(arg0: String): void;

getBaseURI(): String;

setBaseURI(arg0: String): void;

getURIDereferencer(): URIDereferencer;

setURIDereferencer(arg0: URIDereferencer): void;

getProperty(arg0: String): Object;

setProperty(arg0: String, arg1: Object): Object;

getKeySelector(): KeySelector;

setKeySelector(arg0: KeySelector): void;

getElementById(arg0: String): Element;

setIdAttributeNS(arg0: Element, arg1: String, arg2: String): void;

iterator(): Iterator<Map.Entry<String, Element>>;

get(arg0: Object): Object;

put(arg0: Object, arg1: Object): Object;
 }

export class DOMStructure implements XMLStructure {
constructor(arg0: Node);

getNode(): Node;

isFeatureSupported(arg0: String): boolean;
 }

export interface DOMURIReference extends URIReference {

getHere(): Node;
 }

}
