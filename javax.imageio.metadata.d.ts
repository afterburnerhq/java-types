/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="org.w3c.dom.d.ts" />
/// <reference path="javax.imageio.d.ts" />
declare module '@afterburnerhq/javax.imageio.metadata' { 
import { Throwable, Class, Comparable, String } from '@afterburnerhq/java.lang'
import { Locale } from '@afterburnerhq/java.util'
import { UserDataHandler, NamedNodeMap, Node, Element, NodeList, Document, TypeInfo, Attr } from '@afterburnerhq/org.w3c.dom'
import { IIOException, ImageTypeSpecifier } from '@afterburnerhq/javax.imageio'
export class IIOInvalidTreeException extends IIOException {
constructor(arg0: String, arg1: Node);
constructor(arg0: String, arg1: Throwable, arg2: Node);

getOffendingNode(): Node;
 }

export abstract class IIOMetadata {

isStandardMetadataFormatSupported(): boolean;

abstract isReadOnly(): boolean;

getNativeMetadataFormatName(): String;

getExtraMetadataFormatNames(): String[];

getMetadataFormatNames(): String[];

getMetadataFormat(arg0: String): IIOMetadataFormat;

abstract getAsTree(arg0: String): Node;

abstract mergeTree(arg0: String, arg1: Node): void;

setFromTree(arg0: String, arg1: Node): void;

abstract reset(): void;

setController(arg0: IIOMetadataController): void;

getController(): IIOMetadataController;

getDefaultController(): IIOMetadataController;

hasController(): boolean;

activateController(): boolean;
 }

export interface IIOMetadataController {

activate(arg0: IIOMetadata): boolean;
 }

export namespace IIOMetadataFormat { 
const CHILD_POLICY_EMPTY:number
const CHILD_POLICY_ALL:number
const CHILD_POLICY_SOME:number
const CHILD_POLICY_CHOICE:number
const CHILD_POLICY_SEQUENCE:number
const CHILD_POLICY_REPEAT:number
const CHILD_POLICY_MAX:number
const VALUE_NONE:number
const VALUE_ARBITRARY:number
const VALUE_RANGE:number
const VALUE_RANGE_MIN_INCLUSIVE_MASK:number
const VALUE_RANGE_MAX_INCLUSIVE_MASK:number
const VALUE_RANGE_MIN_INCLUSIVE:number
const VALUE_RANGE_MAX_INCLUSIVE:number
const VALUE_RANGE_MIN_MAX_INCLUSIVE:number
const VALUE_ENUMERATION:number
const VALUE_LIST:number
const DATATYPE_STRING:number
const DATATYPE_BOOLEAN:number
const DATATYPE_INTEGER:number
const DATATYPE_FLOAT:number
const DATATYPE_DOUBLE:number
}

export interface IIOMetadataFormat {
CHILD_POLICY_EMPTY:number
CHILD_POLICY_ALL:number
CHILD_POLICY_SOME:number
CHILD_POLICY_CHOICE:number
CHILD_POLICY_SEQUENCE:number
CHILD_POLICY_REPEAT:number
CHILD_POLICY_MAX:number
VALUE_NONE:number
VALUE_ARBITRARY:number
VALUE_RANGE:number
VALUE_RANGE_MIN_INCLUSIVE_MASK:number
VALUE_RANGE_MAX_INCLUSIVE_MASK:number
VALUE_RANGE_MIN_INCLUSIVE:number
VALUE_RANGE_MAX_INCLUSIVE:number
VALUE_RANGE_MIN_MAX_INCLUSIVE:number
VALUE_ENUMERATION:number
VALUE_LIST:number
DATATYPE_STRING:number
DATATYPE_BOOLEAN:number
DATATYPE_INTEGER:number
DATATYPE_FLOAT:number
DATATYPE_DOUBLE:number

getRootName(): String;

canNodeAppear(arg0: String, arg1: ImageTypeSpecifier): boolean;

getElementMinChildren(arg0: String): number;

getElementMaxChildren(arg0: String): number;

getElementDescription(arg0: String, arg1: Locale): String;

getChildPolicy(arg0: String): number;

getChildNames(arg0: String): String[];

getAttributeNames(arg0: String): String[];

getAttributeValueType(arg0: String, arg1: String): number;

getAttributeDataType(arg0: String, arg1: String): number;

isAttributeRequired(arg0: String, arg1: String): boolean;

getAttributeDefaultValue(arg0: String, arg1: String): String;

getAttributeEnumerations(arg0: String, arg1: String): String[];

getAttributeMinValue(arg0: String, arg1: String): String;

getAttributeMaxValue(arg0: String, arg1: String): String;

getAttributeListMinLength(arg0: String, arg1: String): number;

getAttributeListMaxLength(arg0: String, arg1: String): number;

getAttributeDescription(arg0: String, arg1: String, arg2: Locale): String;

getObjectValueType(arg0: String): number;

getObjectClass(arg0: String): Class<any>;

getObjectDefaultValue(arg0: String): Object;

getObjectEnumerations(arg0: String): Object[];

getObjectMinValue(arg0: String): Comparable<any>;

getObjectMaxValue(arg0: String): Comparable<any>;

getObjectArrayMinLength(arg0: String): number;

getObjectArrayMaxLength(arg0: String): number;
 }

export abstract class IIOMetadataFormatImpl implements IIOMetadataFormat {
static standardMetadataFormatName:String
constructor(arg0: String, arg1: number);
constructor(arg0: String, arg1: number, arg2: number);

getRootName(): String;

abstract canNodeAppear(arg0: String, arg1: ImageTypeSpecifier): boolean;

getElementMinChildren(arg0: String): number;

getElementMaxChildren(arg0: String): number;

getElementDescription(arg0: String, arg1: Locale): String;

getChildPolicy(arg0: String): number;

getChildNames(arg0: String): String[];

getAttributeNames(arg0: String): String[];

getAttributeValueType(arg0: String, arg1: String): number;

getAttributeDataType(arg0: String, arg1: String): number;

isAttributeRequired(arg0: String, arg1: String): boolean;

getAttributeDefaultValue(arg0: String, arg1: String): String;

getAttributeEnumerations(arg0: String, arg1: String): String[];

getAttributeMinValue(arg0: String, arg1: String): String;

getAttributeMaxValue(arg0: String, arg1: String): String;

getAttributeListMinLength(arg0: String, arg1: String): number;

getAttributeListMaxLength(arg0: String, arg1: String): number;

getAttributeDescription(arg0: String, arg1: String, arg2: Locale): String;

getObjectValueType(arg0: String): number;

getObjectClass(arg0: String): Class<any>;

getObjectDefaultValue(arg0: String): Object;

getObjectEnumerations(arg0: String): Object[];

getObjectMinValue(arg0: String): Comparable<any>;

getObjectMaxValue(arg0: String): Comparable<any>;

getObjectArrayMinLength(arg0: String): number;

getObjectArrayMaxLength(arg0: String): number;

static getStandardFormatInstance(): IIOMetadataFormat;
 }

export class IIOMetadataNode implements Element, NodeList {
constructor();
constructor(arg0: String);

getNodeName(): String;

getNodeValue(): String;

setNodeValue(arg0: String): void;

getNodeType(): number;

getParentNode(): Node;

getChildNodes(): NodeList;

getFirstChild(): Node;

getLastChild(): Node;

getPreviousSibling(): Node;

getNextSibling(): Node;

getAttributes(): NamedNodeMap;

getOwnerDocument(): Document;

insertBefore(arg0: Node, arg1: Node): Node;

replaceChild(arg0: Node, arg1: Node): Node;

removeChild(arg0: Node): Node;

appendChild(arg0: Node): Node;

hasChildNodes(): boolean;

cloneNode(arg0: boolean): Node;

normalize(): void;

isSupported(arg0: String, arg1: String): boolean;

getNamespaceURI(): String;

getPrefix(): String;

setPrefix(arg0: String): void;

getLocalName(): String;

getTagName(): String;

getAttribute(arg0: String): String;

getAttributeNS(arg0: String, arg1: String): String;

setAttribute(arg0: String, arg1: String): void;

setAttributeNS(arg0: String, arg1: String, arg2: String): void;

removeAttribute(arg0: String): void;

removeAttributeNS(arg0: String, arg1: String): void;

getAttributeNode(arg0: String): Attr;

getAttributeNodeNS(arg0: String, arg1: String): Attr;

setAttributeNode(arg0: Attr): Attr;

setAttributeNodeNS(arg0: Attr): Attr;

removeAttributeNode(arg0: Attr): Attr;

getElementsByTagName(arg0: String): NodeList;

getElementsByTagNameNS(arg0: String, arg1: String): NodeList;

hasAttributes(): boolean;

hasAttribute(arg0: String): boolean;

hasAttributeNS(arg0: String, arg1: String): boolean;

getLength(): number;

item(arg0: number): Node;

getUserObject(): Object;

setUserObject(arg0: Object): void;

setIdAttribute(arg0: String, arg1: boolean): void;

setIdAttributeNS(arg0: String, arg1: String, arg2: boolean): void;

setIdAttributeNode(arg0: Attr, arg1: boolean): void;

getSchemaTypeInfo(): TypeInfo;

setUserData(arg0: String, arg1: Object, arg2: UserDataHandler): Object;

getUserData(arg0: String): Object;

getFeature(arg0: String, arg1: String): Object;

isSameNode(arg0: Node): boolean;

isEqualNode(arg0: Node): boolean;

lookupNamespaceURI(arg0: String): String;

isDefaultNamespace(arg0: String): boolean;

lookupPrefix(arg0: String): String;

getTextContent(): String;

setTextContent(arg0: String): void;

compareDocumentPosition(arg0: Node): number;

getBaseURI(): String;
 }

}
