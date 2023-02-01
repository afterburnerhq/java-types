/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="javax.xml.namespace.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.xml.stream.util.d.ts" />
/// <reference path="javax.xml.stream.events.d.ts" />
/// <reference path="javax.xml.transform.d.ts" />
declare module '@afterburnerhq/javax.xml.stream' { 
import { Error, Throwable, ClassLoader, String, Exception } from '@afterburnerhq/java.lang'
import { Iterator } from '@afterburnerhq/java.util'
import { QName, NamespaceContext } from '@afterburnerhq/javax.xml.namespace'
import { Reader, InputStream, Writer, OutputStream } from '@afterburnerhq/java.io'
import { XMLEventConsumer, XMLEventAllocator } from '@afterburnerhq/javax.xml.stream.util'
import { Comment, Attribute, EndElement, EntityDeclaration, Characters, Namespace, StartElement, StartDocument, EndDocument, DTD, XMLEvent, EntityReference, ProcessingInstruction } from '@afterburnerhq/javax.xml.stream.events'
import { Source, Result } from '@afterburnerhq/javax.xml.transform'
export interface EventFilter {

accept(arg0: XMLEvent): boolean;
 }

export class FactoryConfigurationError extends Error {
constructor();
constructor(arg0: Exception);
constructor(arg0: Exception, arg1: String);
constructor(arg0: String, arg1: Exception);
constructor(arg0: String);

getException(): Exception;

getCause(): Throwable;

getMessage(): String;
 }

export interface Location {

getLineNumber(): number;

getColumnNumber(): number;

getCharacterOffset(): number;

getPublicId(): String;

getSystemId(): String;
 }

export interface StreamFilter {

accept(arg0: XMLStreamReader): boolean;
 }

export abstract class XMLEventFactory {

static newDefaultFactory(): XMLEventFactory;

static newInstance(): XMLEventFactory;

static newFactory(): XMLEventFactory;

static newInstance(arg0: String, arg1: ClassLoader): XMLEventFactory;

static newFactory(arg0: String, arg1: ClassLoader): XMLEventFactory;

abstract setLocation(arg0: Location): void;

abstract createAttribute(arg0: String, arg1: String, arg2: String, arg3: String): Attribute;

abstract createAttribute(arg0: String, arg1: String): Attribute;

abstract createAttribute(arg0: QName, arg1: String): Attribute;

abstract createNamespace(arg0: String): Namespace;

abstract createNamespace(arg0: String, arg1: String): Namespace;

abstract createStartElement(arg0: QName, arg1: Iterator<Attribute>, arg2: Iterator<Namespace>): StartElement;

abstract createStartElement(arg0: String, arg1: String, arg2: String): StartElement;

abstract createStartElement(arg0: String, arg1: String, arg2: String, arg3: Iterator<Attribute>, arg4: Iterator<Namespace>): StartElement;

abstract createStartElement(arg0: String, arg1: String, arg2: String, arg3: Iterator<Attribute>, arg4: Iterator<Namespace>, arg5: NamespaceContext): StartElement;

abstract createEndElement(arg0: QName, arg1: Iterator<Namespace>): EndElement;

abstract createEndElement(arg0: String, arg1: String, arg2: String): EndElement;

abstract createEndElement(arg0: String, arg1: String, arg2: String, arg3: Iterator<Namespace>): EndElement;

abstract createCharacters(arg0: String): Characters;

abstract createCData(arg0: String): Characters;

abstract createSpace(arg0: String): Characters;

abstract createIgnorableSpace(arg0: String): Characters;

abstract createStartDocument(): StartDocument;

abstract createStartDocument(arg0: String, arg1: String, arg2: boolean): StartDocument;

abstract createStartDocument(arg0: String, arg1: String): StartDocument;

abstract createStartDocument(arg0: String): StartDocument;

abstract createEndDocument(): EndDocument;

abstract createEntityReference(arg0: String, arg1: EntityDeclaration): EntityReference;

abstract createComment(arg0: String): Comment;

abstract createProcessingInstruction(arg0: String, arg1: String): ProcessingInstruction;

abstract createDTD(arg0: String): DTD;
 }

export interface XMLEventReader extends Iterator<Object>, Object {

nextEvent(): XMLEvent;

hasNext(): boolean;

peek(): XMLEvent;

getElementText(): String;

nextTag(): XMLEvent;

getProperty(arg0: String): Object;

close(): void;
 }

export interface XMLEventWriter extends XMLEventConsumer {

flush(): void;

close(): void;

add(arg0: XMLEvent): void;

add(arg0: XMLEventReader): void;

getPrefix(arg0: String): String;

setPrefix(arg0: String, arg1: String): void;

setDefaultNamespace(arg0: String): void;

setNamespaceContext(arg0: NamespaceContext): void;

getNamespaceContext(): NamespaceContext;
 }

export abstract class XMLInputFactory {
static IS_NAMESPACE_AWARE:String
static IS_VALIDATING:String
static IS_COALESCING:String
static IS_REPLACING_ENTITY_REFERENCES:String
static IS_SUPPORTING_EXTERNAL_ENTITIES:String
static SUPPORT_DTD:String
static REPORTER:String
static RESOLVER:String
static ALLOCATOR:String

static newDefaultFactory(): XMLInputFactory;

static newInstance(): XMLInputFactory;

static newFactory(): XMLInputFactory;

static newInstance(arg0: String, arg1: ClassLoader): XMLInputFactory;

static newFactory(arg0: String, arg1: ClassLoader): XMLInputFactory;

abstract createXMLStreamReader(arg0: Reader): XMLStreamReader;

abstract createXMLStreamReader(arg0: Source): XMLStreamReader;

abstract createXMLStreamReader(arg0: InputStream): XMLStreamReader;

abstract createXMLStreamReader(arg0: InputStream, arg1: String): XMLStreamReader;

abstract createXMLStreamReader(arg0: String, arg1: InputStream): XMLStreamReader;

abstract createXMLStreamReader(arg0: String, arg1: Reader): XMLStreamReader;

abstract createXMLEventReader(arg0: Reader): XMLEventReader;

abstract createXMLEventReader(arg0: String, arg1: Reader): XMLEventReader;

abstract createXMLEventReader(arg0: XMLStreamReader): XMLEventReader;

abstract createXMLEventReader(arg0: Source): XMLEventReader;

abstract createXMLEventReader(arg0: InputStream): XMLEventReader;

abstract createXMLEventReader(arg0: InputStream, arg1: String): XMLEventReader;

abstract createXMLEventReader(arg0: String, arg1: InputStream): XMLEventReader;

abstract createFilteredReader(arg0: XMLStreamReader, arg1: StreamFilter): XMLStreamReader;

abstract createFilteredReader(arg0: XMLEventReader, arg1: EventFilter): XMLEventReader;

abstract getXMLResolver(): XMLResolver;

abstract setXMLResolver(arg0: XMLResolver): void;

abstract getXMLReporter(): XMLReporter;

abstract setXMLReporter(arg0: XMLReporter): void;

abstract setProperty(arg0: String, arg1: Object): void;

abstract getProperty(arg0: String): Object;

abstract isPropertySupported(arg0: String): boolean;

abstract setEventAllocator(arg0: XMLEventAllocator): void;

abstract getEventAllocator(): XMLEventAllocator;
 }

export abstract class XMLOutputFactory {
static IS_REPAIRING_NAMESPACES:String

static newDefaultFactory(): XMLOutputFactory;

static newInstance(): XMLOutputFactory;

static newFactory(): XMLOutputFactory;

static newInstance(arg0: String, arg1: ClassLoader): XMLInputFactory;

static newFactory(arg0: String, arg1: ClassLoader): XMLOutputFactory;

abstract createXMLStreamWriter(arg0: Writer): XMLStreamWriter;

abstract createXMLStreamWriter(arg0: OutputStream): XMLStreamWriter;

abstract createXMLStreamWriter(arg0: OutputStream, arg1: String): XMLStreamWriter;

abstract createXMLStreamWriter(arg0: Result): XMLStreamWriter;

abstract createXMLEventWriter(arg0: Result): XMLEventWriter;

abstract createXMLEventWriter(arg0: OutputStream): XMLEventWriter;

abstract createXMLEventWriter(arg0: OutputStream, arg1: String): XMLEventWriter;

abstract createXMLEventWriter(arg0: Writer): XMLEventWriter;

abstract setProperty(arg0: String, arg1: Object): void;

abstract getProperty(arg0: String): Object;

abstract isPropertySupported(arg0: String): boolean;
 }

export interface XMLReporter {

report(arg0: String, arg1: String, arg2: Object, arg3: Location): void;
 }

export interface XMLResolver {

resolveEntity(arg0: String, arg1: String, arg2: String, arg3: String): Object;
 }

export namespace XMLStreamConstants { 
const START_ELEMENT:number
const END_ELEMENT:number
const PROCESSING_INSTRUCTION:number
const CHARACTERS:number
const COMMENT:number
const SPACE:number
const START_DOCUMENT:number
const END_DOCUMENT:number
const ENTITY_REFERENCE:number
const ATTRIBUTE:number
const DTD:number
const CDATA:number
const NAMESPACE:number
const NOTATION_DECLARATION:number
const ENTITY_DECLARATION:number
}

export interface XMLStreamConstants {
START_ELEMENT:number
END_ELEMENT:number
PROCESSING_INSTRUCTION:number
CHARACTERS:number
COMMENT:number
SPACE:number
START_DOCUMENT:number
END_DOCUMENT:number
ENTITY_REFERENCE:number
ATTRIBUTE:number
DTD:number
CDATA:number
NAMESPACE:number
NOTATION_DECLARATION:number
ENTITY_DECLARATION:number
 }

export class XMLStreamException extends Exception {
constructor();
constructor(arg0: String);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: String, arg1: Location, arg2: Throwable);
constructor(arg0: String, arg1: Location);

getNestedException(): Throwable;

getLocation(): Location;
 }

export interface XMLStreamReader extends XMLStreamConstants {

getProperty(arg0: String): Object;

next(): number;

require(arg0: number, arg1: String, arg2: String): void;

getElementText(): String;

nextTag(): number;

hasNext(): boolean;

close(): void;

getNamespaceURI(arg0: String): String;

isStartElement(): boolean;

isEndElement(): boolean;

isCharacters(): boolean;

isWhiteSpace(): boolean;

getAttributeValue(arg0: String, arg1: String): String;

getAttributeCount(): number;

getAttributeName(arg0: number): QName;

getAttributeNamespace(arg0: number): String;

getAttributeLocalName(arg0: number): String;

getAttributePrefix(arg0: number): String;

getAttributeType(arg0: number): String;

getAttributeValue(arg0: number): String;

isAttributeSpecified(arg0: number): boolean;

getNamespaceCount(): number;

getNamespacePrefix(arg0: number): String;

getNamespaceURI(arg0: number): String;

getNamespaceContext(): NamespaceContext;

getEventType(): number;

getText(): String;

getTextCharacters(): String[];

getTextCharacters(arg0: number, arg1: String[], arg2: number, arg3: number): number;

getTextStart(): number;

getTextLength(): number;

getEncoding(): String;

hasText(): boolean;

getLocation(): Location;

getName(): QName;

getLocalName(): String;

hasName(): boolean;

getNamespaceURI(): String;

getPrefix(): String;

getVersion(): String;

isStandalone(): boolean;

standaloneSet(): boolean;

getCharacterEncodingScheme(): String;

getPITarget(): String;

getPIData(): String;
 }

export interface XMLStreamWriter {

writeStartElement(arg0: String): void;

writeStartElement(arg0: String, arg1: String): void;

writeStartElement(arg0: String, arg1: String, arg2: String): void;

writeEmptyElement(arg0: String, arg1: String): void;

writeEmptyElement(arg0: String, arg1: String, arg2: String): void;

writeEmptyElement(arg0: String): void;

writeEndElement(): void;

writeEndDocument(): void;

close(): void;

flush(): void;

writeAttribute(arg0: String, arg1: String): void;

writeAttribute(arg0: String, arg1: String, arg2: String, arg3: String): void;

writeAttribute(arg0: String, arg1: String, arg2: String): void;

writeNamespace(arg0: String, arg1: String): void;

writeDefaultNamespace(arg0: String): void;

writeComment(arg0: String): void;

writeProcessingInstruction(arg0: String): void;

writeProcessingInstruction(arg0: String, arg1: String): void;

writeCData(arg0: String): void;

writeDTD(arg0: String): void;

writeEntityRef(arg0: String): void;

writeStartDocument(): void;

writeStartDocument(arg0: String): void;

writeStartDocument(arg0: String, arg1: String): void;

writeCharacters(arg0: String): void;

writeCharacters(arg0: String[], arg1: number, arg2: number): void;

getPrefix(arg0: String): String;

setPrefix(arg0: String, arg1: String): void;

setDefaultNamespace(arg0: String): void;

setNamespaceContext(arg0: NamespaceContext): void;

getNamespaceContext(): NamespaceContext;

getProperty(arg0: String): Object;
 }

}
