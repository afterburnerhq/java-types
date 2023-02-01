/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.swing.text.html.d.ts" />
declare module '@afterburnerhq/javax.swing.text.html.parser' { 
import { String } from '@afterburnerhq/java.lang'
import { BitSet, Enumeration, Vector, Hashtable } from '@afterburnerhq/java.util'
import { DataInputStream, Reader, Serializable } from '@afterburnerhq/java.io'
import { HTMLEditorKit, HTML } from '@afterburnerhq/javax.swing.text.html'
export class AttributeList implements DTDConstants, Serializable {
name:String
type:number
values:Vector<any>
modifier:number
value:String
next:AttributeList
constructor(arg0: String);
constructor(arg0: String, arg1: number, arg2: number, arg3: String, arg4: Vector<any>, arg5: AttributeList);

getName(): String;

getType(): number;

getModifier(): number;

getValues(): Enumeration<any>;

getValue(): String;

getNext(): AttributeList;
toString(): string;

static name2type(arg0: String): number;

static type2name(arg0: number): String;
 }

export class ContentModel implements Serializable {
type:number
content:Object
next:ContentModel
constructor();
constructor(arg0: Element);
constructor(arg0: number, arg1: ContentModel);
constructor(arg0: number, arg1: Object, arg2: ContentModel);

empty(): boolean;

getElements(arg0: Vector<Element>): void;

first(arg0: Object): boolean;

first(): Element;
toString(): string;
 }

export class DTD implements DTDConstants {
name:String
elements:Vector<Element>
elementHash:Hashtable<String, Element>
entityHash:Hashtable<Object, Entity>
pcdata:Element
html:Element
meta:Element
base:Element
isindex:Element
head:Element
body:Element
applet:Element
param:Element
p:Element
title:Element
static FILE_VERSION:number

getName(): String;

getEntity(arg0: String): Entity;

getEntity(arg0: number): Entity;

getElement(arg0: String): Element;

getElement(arg0: number): Element;

defineEntity(arg0: String, arg1: number, arg2: String[]): Entity;

defineElement(arg0: String, arg1: number, arg2: boolean, arg3: boolean, arg4: ContentModel, arg5: BitSet, arg6: BitSet, arg7: AttributeList): Element;

defineAttributes(arg0: String, arg1: AttributeList): void;

defEntity(arg0: String, arg1: number, arg2: number): Entity;
toString(): string;

static putDTDHash(arg0: String, arg1: DTD): void;

static getDTD(arg0: String): DTD;

read(arg0: DataInputStream): void;
 }

export namespace DTDConstants { 
const CDATA:number
const ENTITY:number
const ENTITIES:number
const ID:number
const IDREF:number
const IDREFS:number
const NAME:number
const NAMES:number
const NMTOKEN:number
const NMTOKENS:number
const NOTATION:number
const NUMBER:number
const NUMBERS:number
const NUTOKEN:number
const NUTOKENS:number
const RCDATA:number
const EMPTY:number
const MODEL:number
const ANY:number
const FIXED:number
const REQUIRED:number
const CURRENT:number
const CONREF:number
const IMPLIED:number
const PUBLIC:number
const SDATA:number
const PI:number
const STARTTAG:number
const ENDTAG:number
const MS:number
const MD:number
const SYSTEM:number
const GENERAL:number
const DEFAULT:number
const PARAMETER:number
}

export interface DTDConstants {
CDATA:number
ENTITY:number
ENTITIES:number
ID:number
IDREF:number
IDREFS:number
NAME:number
NAMES:number
NMTOKEN:number
NMTOKENS:number
NOTATION:number
NUMBER:number
NUMBERS:number
NUTOKEN:number
NUTOKENS:number
RCDATA:number
EMPTY:number
MODEL:number
ANY:number
FIXED:number
REQUIRED:number
CURRENT:number
CONREF:number
IMPLIED:number
PUBLIC:number
SDATA:number
PI:number
STARTTAG:number
ENDTAG:number
MS:number
MD:number
SYSTEM:number
GENERAL:number
DEFAULT:number
PARAMETER:number
 }

export class DocumentParser extends Parser {
constructor(arg0: DTD);

parse(arg0: Reader, arg1: HTMLEditorKit.ParserCallback, arg2: boolean): void;
 }

export class Element implements DTDConstants, Serializable {
index:number
name:String
oStart:boolean
oEnd:boolean
inclusions:BitSet
exclusions:BitSet
type:number
content:ContentModel
atts:AttributeList
data:Object

getName(): String;

omitStart(): boolean;

omitEnd(): boolean;

getType(): number;

getContent(): ContentModel;

getAttributes(): AttributeList;

getIndex(): number;

isEmpty(): boolean;
toString(): string;

getAttribute(arg0: String): AttributeList;

getAttributeByValue(arg0: String): AttributeList;

static name2type(arg0: String): number;
 }

export class Entity implements DTDConstants {
name:String
type:number
data:String[]
constructor(arg0: String, arg1: number, arg2: String[]);

getName(): String;

getType(): number;

isParameter(): boolean;

isGeneral(): boolean;

getData(): String[];

getString(): String;

static name2type(arg0: String): number;
 }

export class Parser implements DTDConstants {
constructor(arg0: DTD);

parseDTDMarkup(): String;

parse(arg0: Reader): void;
 }

export class ParserDelegator extends HTMLEditorKit.Parser implements Serializable {
constructor();

parse(arg0: Reader, arg1: HTMLEditorKit.ParserCallback, arg2: boolean): void;
 }

export class TagElement {
constructor(arg0: Element);
constructor(arg0: Element, arg1: boolean);

breaksFlow(): boolean;

isPreformatted(): boolean;

getElement(): Element;

getHTMLTag(): HTML.Tag;

fictional(): boolean;
 }

}
