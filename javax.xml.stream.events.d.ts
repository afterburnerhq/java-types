/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="javax.xml.namespace.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.xml.stream.d.ts" />
declare module '@afterburnerhq/javax.xml.stream.events' { 
import { String } from '@afterburnerhq/java.lang'
import { Iterator, List } from '@afterburnerhq/java.util'
import { QName, NamespaceContext } from '@afterburnerhq/javax.xml.namespace'
import { Writer } from '@afterburnerhq/java.io'
import { XMLStreamConstants, Location } from '@afterburnerhq/javax.xml.stream'
export interface Attribute extends XMLEvent {

getName(): QName;

getValue(): String;

getDTDType(): String;

isSpecified(): boolean;
 }

export interface Characters extends XMLEvent {

getData(): String;

isWhiteSpace(): boolean;

isCData(): boolean;

isIgnorableWhiteSpace(): boolean;
 }

export interface Comment extends XMLEvent {

getText(): String;
 }

export interface DTD extends XMLEvent {

getDocumentTypeDeclaration(): String;

getProcessedDTD(): Object;

getNotations(): List<NotationDeclaration>;

getEntities(): List<EntityDeclaration>;
 }

export interface EndDocument extends XMLEvent {
 }

export interface EndElement extends XMLEvent {

getName(): QName;

getNamespaces(): Iterator<Namespace>;
 }

export interface EntityDeclaration extends XMLEvent {

getPublicId(): String;

getSystemId(): String;

getName(): String;

getNotationName(): String;

getReplacementText(): String;

getBaseURI(): String;
 }

export interface EntityReference extends XMLEvent {

getDeclaration(): EntityDeclaration;

getName(): String;
 }

export interface Namespace extends Attribute {

getPrefix(): String;

getNamespaceURI(): String;

isDefaultNamespaceDeclaration(): boolean;
 }

export interface NotationDeclaration extends XMLEvent {

getName(): String;

getPublicId(): String;

getSystemId(): String;
 }

export interface ProcessingInstruction extends XMLEvent {

getTarget(): String;

getData(): String;
 }

export interface StartDocument extends XMLEvent {

getSystemId(): String;

getCharacterEncodingScheme(): String;

encodingSet(): boolean;

isStandalone(): boolean;

standaloneSet(): boolean;

getVersion(): String;
 }

export interface StartElement extends XMLEvent {

getName(): QName;

getAttributes(): Iterator<Attribute>;

getNamespaces(): Iterator<Namespace>;

getAttributeByName(arg0: QName): Attribute;

getNamespaceContext(): NamespaceContext;

getNamespaceURI(arg0: String): String;
 }

export interface XMLEvent extends XMLStreamConstants {

getEventType(): number;

getLocation(): Location;

isStartElement(): boolean;

isAttribute(): boolean;

isNamespace(): boolean;

isEndElement(): boolean;

isEntityReference(): boolean;

isProcessingInstruction(): boolean;

isCharacters(): boolean;

isStartDocument(): boolean;

isEndDocument(): boolean;

asStartElement(): StartElement;

asEndElement(): EndElement;

asCharacters(): Characters;

getSchemaType(): QName;

writeAsEncodedUnicode(arg0: Writer): void;
 }

}
