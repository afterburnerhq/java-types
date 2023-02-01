/// <reference path="java.lang.d.ts" />
/// <reference path="org.xml.sax.helpers.d.ts" />
/// <reference path="org.w3c.dom.d.ts" />
/// <reference path="javax.xml.validation.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="org.xml.sax.d.ts" />
declare module '@afterburnerhq/javax.xml.parsers' { 
import { ClassLoader, Error, Throwable, String, Exception } from '@afterburnerhq/java.lang'
import { DefaultHandler } from '@afterburnerhq/org.xml.sax.helpers'
import { Document, DOMImplementation } from '@afterburnerhq/org.w3c.dom'
import { Schema } from '@afterburnerhq/javax.xml.validation'
import { File, InputStream } from '@afterburnerhq/java.io'
import { HandlerBase, ErrorHandler, InputSource, EntityResolver, XMLReader, Parser } from '@afterburnerhq/org.xml.sax'
export abstract class DocumentBuilder {

reset(): void;

parse(arg0: InputStream): Document;

parse(arg0: InputStream, arg1: String): Document;

parse(arg0: String): Document;

parse(arg0: File): Document;

abstract parse(arg0: InputSource): Document;

abstract isNamespaceAware(): boolean;

abstract isValidating(): boolean;

abstract setEntityResolver(arg0: EntityResolver): void;

abstract setErrorHandler(arg0: ErrorHandler): void;

abstract newDocument(): Document;

abstract getDOMImplementation(): DOMImplementation;

getSchema(): Schema;

isXIncludeAware(): boolean;
 }

export abstract class DocumentBuilderFactory {

static newDefaultNSInstance(): DocumentBuilderFactory;

static newNSInstance(): DocumentBuilderFactory;

static newNSInstance(arg0: String, arg1: ClassLoader): DocumentBuilderFactory;

static newDefaultInstance(): DocumentBuilderFactory;

static newInstance(): DocumentBuilderFactory;

static newInstance(arg0: String, arg1: ClassLoader): DocumentBuilderFactory;

abstract newDocumentBuilder(): DocumentBuilder;

setNamespaceAware(arg0: boolean): void;

setValidating(arg0: boolean): void;

setIgnoringElementContentWhitespace(arg0: boolean): void;

setExpandEntityReferences(arg0: boolean): void;

setIgnoringComments(arg0: boolean): void;

setCoalescing(arg0: boolean): void;

isNamespaceAware(): boolean;

isValidating(): boolean;

isIgnoringElementContentWhitespace(): boolean;

isExpandEntityReferences(): boolean;

isIgnoringComments(): boolean;

isCoalescing(): boolean;

abstract setAttribute(arg0: String, arg1: Object): void;

abstract getAttribute(arg0: String): Object;

abstract setFeature(arg0: String, arg1: boolean): void;

abstract getFeature(arg0: String): boolean;

getSchema(): Schema;

setSchema(arg0: Schema): void;

setXIncludeAware(arg0: boolean): void;

isXIncludeAware(): boolean;
 }

export class FactoryConfigurationError extends Error {
constructor();
constructor(arg0: String);
constructor(arg0: Exception);
constructor(arg0: Exception, arg1: String);

getMessage(): String;

getException(): Exception;

getCause(): Throwable;
 }

export class ParserConfigurationException extends Exception {
constructor();
constructor(arg0: String);
 }

export abstract class SAXParser {

reset(): void;

parse(arg0: InputStream, arg1: HandlerBase): void;

parse(arg0: InputStream, arg1: HandlerBase, arg2: String): void;

parse(arg0: InputStream, arg1: DefaultHandler): void;

parse(arg0: InputStream, arg1: DefaultHandler, arg2: String): void;

parse(arg0: String, arg1: HandlerBase): void;

parse(arg0: String, arg1: DefaultHandler): void;

parse(arg0: File, arg1: HandlerBase): void;

parse(arg0: File, arg1: DefaultHandler): void;

parse(arg0: InputSource, arg1: HandlerBase): void;

parse(arg0: InputSource, arg1: DefaultHandler): void;

abstract getParser(): Parser;

abstract getXMLReader(): XMLReader;

abstract isNamespaceAware(): boolean;

abstract isValidating(): boolean;

abstract setProperty(arg0: String, arg1: Object): void;

abstract getProperty(arg0: String): Object;

getSchema(): Schema;

isXIncludeAware(): boolean;
 }

export abstract class SAXParserFactory {

static newDefaultNSInstance(): SAXParserFactory;

static newNSInstance(): SAXParserFactory;

static newNSInstance(arg0: String, arg1: ClassLoader): SAXParserFactory;

static newDefaultInstance(): SAXParserFactory;

static newInstance(): SAXParserFactory;

static newInstance(arg0: String, arg1: ClassLoader): SAXParserFactory;

abstract newSAXParser(): SAXParser;

setNamespaceAware(arg0: boolean): void;

setValidating(arg0: boolean): void;

isNamespaceAware(): boolean;

isValidating(): boolean;

abstract setFeature(arg0: String, arg1: boolean): void;

abstract getFeature(arg0: String): boolean;

getSchema(): Schema;

setSchema(arg0: Schema): void;

setXIncludeAware(arg0: boolean): void;

isXIncludeAware(): boolean;
 }

}
