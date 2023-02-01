/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/javax.xml.transform' { 
import { Throwable, ClassLoader, Error, String, Exception } from '@afterburnerhq/java.lang'
import { Properties } from '@afterburnerhq/java.util'
import { PrintStream, PrintWriter } from '@afterburnerhq/java.io'
export interface ErrorListener {

warning(arg0: TransformerException): void;

error(arg0: TransformerException): void;

fatalError(arg0: TransformerException): void;
 }

export class OutputKeys {
static METHOD:String
static VERSION:String
static ENCODING:String
static OMIT_XML_DECLARATION:String
static STANDALONE:String
static DOCTYPE_PUBLIC:String
static DOCTYPE_SYSTEM:String
static CDATA_SECTION_ELEMENTS:String
static INDENT:String
static MEDIA_TYPE:String
 }

export namespace Result { 
const PI_DISABLE_OUTPUT_ESCAPING:String
const PI_ENABLE_OUTPUT_ESCAPING:String
}

export interface Result {
PI_DISABLE_OUTPUT_ESCAPING:String
PI_ENABLE_OUTPUT_ESCAPING:String

setSystemId(arg0: String): void;

getSystemId(): String;
 }

export interface Source {

setSystemId(arg0: String): void;

getSystemId(): String;

/* default */ isEmpty(): boolean;
 }

export interface SourceLocator {

getPublicId(): String;

getSystemId(): String;

getLineNumber(): number;

getColumnNumber(): number;
 }

export interface Templates {

newTransformer(): Transformer;

getOutputProperties(): Properties;
 }

export abstract class Transformer {

reset(): void;

abstract transform(arg0: Source, arg1: Result): void;

abstract setParameter(arg0: String, arg1: Object): void;

abstract getParameter(arg0: String): Object;

abstract clearParameters(): void;

abstract setURIResolver(arg0: URIResolver): void;

abstract getURIResolver(): URIResolver;

abstract setOutputProperties(arg0: Properties): void;

abstract getOutputProperties(): Properties;

abstract setOutputProperty(arg0: String, arg1: String): void;

abstract getOutputProperty(arg0: String): String;

abstract setErrorListener(arg0: ErrorListener): void;

abstract getErrorListener(): ErrorListener;
 }

export class TransformerConfigurationException extends TransformerException {
constructor();
constructor(arg0: String);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: String, arg1: SourceLocator);
constructor(arg0: String, arg1: SourceLocator, arg2: Throwable);
 }

export class TransformerException extends Exception {
constructor(arg0: String);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: String, arg1: SourceLocator);
constructor(arg0: String, arg1: SourceLocator, arg2: Throwable);

getLocator(): SourceLocator;

setLocator(arg0: SourceLocator): void;

getException(): Throwable;

getCause(): Throwable;

initCause(arg0: Throwable): Throwable;

getMessageAndLocation(): String;

getLocationAsString(): String;

printStackTrace(): void;

printStackTrace(arg0: PrintStream): void;

printStackTrace(arg0: PrintWriter): void;
 }

export abstract class TransformerFactory {

static newDefaultInstance(): TransformerFactory;

static newInstance(): TransformerFactory;

static newInstance(arg0: String, arg1: ClassLoader): TransformerFactory;

abstract newTransformer(arg0: Source): Transformer;

abstract newTransformer(): Transformer;

abstract newTemplates(arg0: Source): Templates;

abstract getAssociatedStylesheet(arg0: Source, arg1: String, arg2: String, arg3: String): Source;

abstract setURIResolver(arg0: URIResolver): void;

abstract getURIResolver(): URIResolver;

abstract setFeature(arg0: String, arg1: boolean): void;

abstract getFeature(arg0: String): boolean;

abstract setAttribute(arg0: String, arg1: Object): void;

abstract getAttribute(arg0: String): Object;

abstract setErrorListener(arg0: ErrorListener): void;

abstract getErrorListener(): ErrorListener;
 }

export class TransformerFactoryConfigurationError extends Error {
constructor();
constructor(arg0: String);
constructor(arg0: Exception);
constructor(arg0: Exception, arg1: String);

getMessage(): String;

getException(): Exception;

getCause(): Throwable;
 }

export interface URIResolver {

resolve(arg0: String, arg1: String): Source;
 }

}
