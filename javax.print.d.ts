/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.print.event.d.ts" />
/// <reference path="javax.print.attribute.d.ts" />
declare module '@afterburnerhq/javax.print' { 
import { GraphicsConfiguration } from '@afterburnerhq/java.awt'
import { Class, Cloneable, String, Exception } from '@afterburnerhq/java.lang'
import { URI } from '@afterburnerhq/java.net'
import { Reader, Serializable, InputStream, OutputStream } from '@afterburnerhq/java.io'
import { PrintJobAttributeListener, PrintServiceAttributeListener, PrintJobListener } from '@afterburnerhq/javax.print.event'
import { Attribute, AttributeSet, PrintJobAttributeSet, PrintServiceAttribute, PrintServiceAttributeSet, DocAttributeSet, PrintRequestAttributeSet } from '@afterburnerhq/javax.print.attribute'
export interface AttributeException {

getUnsupportedAttributes(): Class<any>[];

getUnsupportedValues(): Attribute[];
 }

export interface CancelablePrintJob extends DocPrintJob {

cancel(): void;
 }

export interface Doc {

getDocFlavor(): DocFlavor;

getPrintData(): Object;

getAttributes(): DocAttributeSet;

getReaderForText(): Reader;

getStreamForBytes(): InputStream;
 }

export class DocFlavor implements Serializable, Cloneable {
static hostEncoding:String
constructor(arg0: String, arg1: String);

getMimeType(): String;

getMediaType(): String;

getMediaSubtype(): String;

getParameter(arg0: String): String;

getRepresentationClassName(): String;
toString(): string;

hashCode(): number;

equals(arg0: Object): boolean;
 }
export namespace DocFlavor { 
export class BYTE_ARRAY extends DocFlavor {
static TEXT_PLAIN_HOST:DocFlavor.BYTE_ARRAY
static TEXT_PLAIN_UTF_8:DocFlavor.BYTE_ARRAY
static TEXT_PLAIN_UTF_16:DocFlavor.BYTE_ARRAY
static TEXT_PLAIN_UTF_16BE:DocFlavor.BYTE_ARRAY
static TEXT_PLAIN_UTF_16LE:DocFlavor.BYTE_ARRAY
static TEXT_PLAIN_US_ASCII:DocFlavor.BYTE_ARRAY
static TEXT_HTML_HOST:DocFlavor.BYTE_ARRAY
static TEXT_HTML_UTF_8:DocFlavor.BYTE_ARRAY
static TEXT_HTML_UTF_16:DocFlavor.BYTE_ARRAY
static TEXT_HTML_UTF_16BE:DocFlavor.BYTE_ARRAY
static TEXT_HTML_UTF_16LE:DocFlavor.BYTE_ARRAY
static TEXT_HTML_US_ASCII:DocFlavor.BYTE_ARRAY
static PDF:DocFlavor.BYTE_ARRAY
static POSTSCRIPT:DocFlavor.BYTE_ARRAY
static PCL:DocFlavor.BYTE_ARRAY
static GIF:DocFlavor.BYTE_ARRAY
static JPEG:DocFlavor.BYTE_ARRAY
static PNG:DocFlavor.BYTE_ARRAY
static AUTOSENSE:DocFlavor.BYTE_ARRAY
constructor(arg0: String);
 }

export class CHAR_ARRAY extends DocFlavor {
static TEXT_PLAIN:DocFlavor.CHAR_ARRAY
static TEXT_HTML:DocFlavor.CHAR_ARRAY
constructor(arg0: String);
 }

export class INPUT_STREAM extends DocFlavor {
static TEXT_PLAIN_HOST:DocFlavor.INPUT_STREAM
static TEXT_PLAIN_UTF_8:DocFlavor.INPUT_STREAM
static TEXT_PLAIN_UTF_16:DocFlavor.INPUT_STREAM
static TEXT_PLAIN_UTF_16BE:DocFlavor.INPUT_STREAM
static TEXT_PLAIN_UTF_16LE:DocFlavor.INPUT_STREAM
static TEXT_PLAIN_US_ASCII:DocFlavor.INPUT_STREAM
static TEXT_HTML_HOST:DocFlavor.INPUT_STREAM
static TEXT_HTML_UTF_8:DocFlavor.INPUT_STREAM
static TEXT_HTML_UTF_16:DocFlavor.INPUT_STREAM
static TEXT_HTML_UTF_16BE:DocFlavor.INPUT_STREAM
static TEXT_HTML_UTF_16LE:DocFlavor.INPUT_STREAM
static TEXT_HTML_US_ASCII:DocFlavor.INPUT_STREAM
static PDF:DocFlavor.INPUT_STREAM
static POSTSCRIPT:DocFlavor.INPUT_STREAM
static PCL:DocFlavor.INPUT_STREAM
static GIF:DocFlavor.INPUT_STREAM
static JPEG:DocFlavor.INPUT_STREAM
static PNG:DocFlavor.INPUT_STREAM
static AUTOSENSE:DocFlavor.INPUT_STREAM
constructor(arg0: String);
 }

export class READER extends DocFlavor {
static TEXT_PLAIN:DocFlavor.READER
static TEXT_HTML:DocFlavor.READER
constructor(arg0: String);
 }

export class SERVICE_FORMATTED extends DocFlavor {
static RENDERABLE_IMAGE:DocFlavor.SERVICE_FORMATTED
static PRINTABLE:DocFlavor.SERVICE_FORMATTED
static PAGEABLE:DocFlavor.SERVICE_FORMATTED
constructor(arg0: String);
 }

export class STRING extends DocFlavor {
static TEXT_PLAIN:DocFlavor.STRING
static TEXT_HTML:DocFlavor.STRING
constructor(arg0: String);
 }

export class URL extends DocFlavor {
static TEXT_PLAIN_HOST:DocFlavor.URL
static TEXT_PLAIN_UTF_8:DocFlavor.URL
static TEXT_PLAIN_UTF_16:DocFlavor.URL
static TEXT_PLAIN_UTF_16BE:DocFlavor.URL
static TEXT_PLAIN_UTF_16LE:DocFlavor.URL
static TEXT_PLAIN_US_ASCII:DocFlavor.URL
static TEXT_HTML_HOST:DocFlavor.URL
static TEXT_HTML_UTF_8:DocFlavor.URL
static TEXT_HTML_UTF_16:DocFlavor.URL
static TEXT_HTML_UTF_16BE:DocFlavor.URL
static TEXT_HTML_UTF_16LE:DocFlavor.URL
static TEXT_HTML_US_ASCII:DocFlavor.URL
static PDF:DocFlavor.URL
static POSTSCRIPT:DocFlavor.URL
static PCL:DocFlavor.URL
static GIF:DocFlavor.URL
static JPEG:DocFlavor.URL
static PNG:DocFlavor.URL
static AUTOSENSE:DocFlavor.URL
constructor(arg0: String);
 }

}

export interface DocPrintJob {

getPrintService(): PrintService;

getAttributes(): PrintJobAttributeSet;

addPrintJobListener(arg0: PrintJobListener): void;

removePrintJobListener(arg0: PrintJobListener): void;

addPrintJobAttributeListener(arg0: PrintJobAttributeListener, arg1: PrintJobAttributeSet): void;

removePrintJobAttributeListener(arg0: PrintJobAttributeListener): void;

print(arg0: Doc, arg1: PrintRequestAttributeSet): void;
 }

export interface FlavorException {

getUnsupportedFlavors(): DocFlavor[];
 }

export interface MultiDoc {

getDoc(): Doc;

next(): MultiDoc;
 }

export interface MultiDocPrintJob extends DocPrintJob {

print(arg0: MultiDoc, arg1: PrintRequestAttributeSet): void;
 }

export interface MultiDocPrintService extends PrintService {

createMultiDocPrintJob(): MultiDocPrintJob;
 }

export class PrintException extends Exception {
constructor();
constructor(arg0: String);
constructor(arg0: Exception);
constructor(arg0: String, arg1: Exception);
 }

export interface PrintService {

getName(): String;

createPrintJob(): DocPrintJob;

addPrintServiceAttributeListener(arg0: PrintServiceAttributeListener): void;

removePrintServiceAttributeListener(arg0: PrintServiceAttributeListener): void;

getAttributes(): PrintServiceAttributeSet;

getAttribute<T extends PrintServiceAttribute>(arg0: Class<T>): T;

getSupportedDocFlavors(): DocFlavor[];

isDocFlavorSupported(arg0: DocFlavor): boolean;

getSupportedAttributeCategories(): Class<any>[];

isAttributeCategorySupported(arg0: Class<Attribute>): boolean;

getDefaultAttributeValue(arg0: Class<Attribute>): Object;

getSupportedAttributeValues(arg0: Class<Attribute>, arg1: DocFlavor, arg2: AttributeSet): Object;

isAttributeValueSupported(arg0: Attribute, arg1: DocFlavor, arg2: AttributeSet): boolean;

getUnsupportedAttributes(arg0: DocFlavor, arg1: AttributeSet): AttributeSet;

getServiceUIFactory(): ServiceUIFactory;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export abstract class PrintServiceLookup {

static lookupPrintServices(arg0: DocFlavor, arg1: AttributeSet): PrintService[];

static lookupMultiDocPrintServices(arg0: DocFlavor[], arg1: AttributeSet): MultiDocPrintService[];

static lookupDefaultPrintService(): PrintService;

static registerServiceProvider(arg0: PrintServiceLookup): boolean;

static registerService(arg0: PrintService): boolean;

abstract getPrintServices(arg0: DocFlavor, arg1: AttributeSet): PrintService[];

abstract getPrintServices(): PrintService[];

abstract getMultiDocPrintServices(arg0: DocFlavor[], arg1: AttributeSet): MultiDocPrintService[];

abstract getDefaultPrintService(): PrintService;
 }

export class ServiceUI {
constructor();

static printDialog(arg0: GraphicsConfiguration, arg1: number, arg2: number, arg3: PrintService[], arg4: PrintService, arg5: DocFlavor, arg6: PrintRequestAttributeSet): PrintService;
 }

export abstract class ServiceUIFactory {
static JCOMPONENT_UI:String
static PANEL_UI:String
static DIALOG_UI:String
static JDIALOG_UI:String
static ABOUT_UIROLE:number
static ADMIN_UIROLE:number
static MAIN_UIROLE:number
static RESERVED_UIROLE:number

abstract getUI(arg0: number, arg1: String): Object;

abstract getUIClassNamesForRole(arg0: number): String[];
 }

export class SimpleDoc implements Doc {
constructor(arg0: Object, arg1: DocFlavor, arg2: DocAttributeSet);

getDocFlavor(): DocFlavor;

getAttributes(): DocAttributeSet;

getPrintData(): Object;

getReaderForText(): Reader;

getStreamForBytes(): InputStream;
 }

export abstract class StreamPrintService implements PrintService {

getOutputStream(): OutputStream;

abstract getOutputFormat(): String;

dispose(): void;

isDisposed(): boolean;
 }

export abstract class StreamPrintServiceFactory {

static lookupStreamPrintServiceFactories(arg0: DocFlavor, arg1: String): StreamPrintServiceFactory[];

abstract getOutputFormat(): String;

abstract getSupportedDocFlavors(): DocFlavor[];

abstract getPrintService(arg0: OutputStream): StreamPrintService;
 }

export namespace URIException { 
const URIInaccessible:number
const URISchemeNotSupported:number
const URIOtherProblem:number
}

export interface URIException {
URIInaccessible:number
URISchemeNotSupported:number
URIOtherProblem:number

getUnsupportedURI(): URI;

getReason(): number;
 }

}
