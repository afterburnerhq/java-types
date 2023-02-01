/// <reference path="java.lang.d.ts" />
/// <reference path="javax.xml.namespace.d.ts" />
/// <reference path="javax.xml.stream.d.ts" />
/// <reference path="javax.xml.stream.events.d.ts" />
declare module '@afterburnerhq/javax.xml.stream.util' { 
import { String } from '@afterburnerhq/java.lang'
import { NamespaceContext, QName } from '@afterburnerhq/javax.xml.namespace'
import { XMLEventReader, XMLStreamReader, Location } from '@afterburnerhq/javax.xml.stream'
import { XMLEvent } from '@afterburnerhq/javax.xml.stream.events'
export interface EventReaderDelegate extends XMLEventReader { }
export class EventReaderDelegate implements XMLEventReader {
constructor();
constructor(arg0: XMLEventReader);

setParent(arg0: XMLEventReader): void;

getParent(): XMLEventReader;

nextEvent(): XMLEvent;

next(): Object;

hasNext(): boolean;

peek(): XMLEvent;

close(): void;

getElementText(): String;

nextTag(): XMLEvent;

getProperty(arg0: String): Object;

remove(): void;
 }

export class StreamReaderDelegate implements XMLStreamReader {
constructor();
constructor(arg0: XMLStreamReader);

setParent(arg0: XMLStreamReader): void;

getParent(): XMLStreamReader;

next(): number;

nextTag(): number;

getElementText(): String;

require(arg0: number, arg1: String, arg2: String): void;

hasNext(): boolean;

close(): void;

getNamespaceURI(arg0: String): String;

getNamespaceContext(): NamespaceContext;

isStartElement(): boolean;

isEndElement(): boolean;

isCharacters(): boolean;

isWhiteSpace(): boolean;

getAttributeValue(arg0: String, arg1: String): String;

getAttributeCount(): number;

getAttributeName(arg0: number): QName;

getAttributePrefix(arg0: number): String;

getAttributeNamespace(arg0: number): String;

getAttributeLocalName(arg0: number): String;

getAttributeType(arg0: number): String;

getAttributeValue(arg0: number): String;

isAttributeSpecified(arg0: number): boolean;

getNamespaceCount(): number;

getNamespacePrefix(arg0: number): String;

getNamespaceURI(arg0: number): String;

getEventType(): number;

getText(): String;

getTextCharacters(arg0: number, arg1: String[], arg2: number, arg3: number): number;

getTextCharacters(): String[];

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

getProperty(arg0: String): Object;
 }

export interface XMLEventAllocator {

newInstance(): XMLEventAllocator;

allocate(arg0: XMLStreamReader): XMLEvent;

allocate(arg0: XMLStreamReader, arg1: XMLEventConsumer): void;
 }

export interface XMLEventConsumer {

add(arg0: XMLEvent): void;
 }

}
