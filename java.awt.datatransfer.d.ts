/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/java.awt.datatransfer' { 
import { ClassLoader, Cloneable, Class, String, Exception } from '@afterburnerhq/java.lang'
import { List, EventListener, Map, EventObject } from '@afterburnerhq/java.util'
import { Reader, Externalizable, ObjectInput, ObjectOutput } from '@afterburnerhq/java.io'
export class Clipboard {
constructor(arg0: String);

getName(): String;

setContents(arg0: Transferable, arg1: ClipboardOwner): void;

getContents(arg0: Object): Transferable;

getAvailableDataFlavors(): DataFlavor[];

isDataFlavorAvailable(arg0: DataFlavor): boolean;

getData(arg0: DataFlavor): Object;

addFlavorListener(arg0: FlavorListener): void;

removeFlavorListener(arg0: FlavorListener): void;

getFlavorListeners(): FlavorListener[];
 }

export interface ClipboardOwner {

lostOwnership(arg0: Clipboard, arg1: Transferable): void;
 }

export class DataFlavor implements Externalizable, Cloneable {
static stringFlavor:DataFlavor
static imageFlavor:DataFlavor
static plainTextFlavor:DataFlavor
static javaSerializedObjectMimeType:String
static javaFileListFlavor:DataFlavor
static javaJVMLocalObjectMimeType:String
static javaRemoteObjectMimeType:String
static selectionHtmlFlavor:DataFlavor
static fragmentHtmlFlavor:DataFlavor
static allHtmlFlavor:DataFlavor
constructor();
constructor(arg0: Class<any>, arg1: String);
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: String, arg2: ClassLoader);
constructor(arg0: String);
toString(): string;

static getTextPlainUnicodeFlavor(): DataFlavor;

static selectBestTextFlavor(arg0: DataFlavor[]): DataFlavor;

getReaderForText(arg0: Transferable): Reader;

getMimeType(): String;

getRepresentationClass(): Class<any>;

getHumanPresentableName(): String;

getPrimaryType(): String;

getSubType(): String;

getParameter(arg0: String): String;

setHumanPresentableName(arg0: String): void;

equals(arg0: Object): boolean;

equals(arg0: DataFlavor): boolean;

equals(arg0: String): boolean;

hashCode(): number;

match(arg0: DataFlavor): boolean;

isMimeTypeEqual(arg0: String): boolean;

isMimeTypeEqual(arg0: DataFlavor): boolean;

isMimeTypeSerializedObject(): boolean;

getDefaultRepresentationClass(): Class<any>;

getDefaultRepresentationClassAsString(): String;

isRepresentationClassInputStream(): boolean;

isRepresentationClassReader(): boolean;

isRepresentationClassCharBuffer(): boolean;

isRepresentationClassByteBuffer(): boolean;

isRepresentationClassSerializable(): boolean;

isRepresentationClassRemote(): boolean;

isFlavorSerializedObjectType(): boolean;

isFlavorRemoteObjectType(): boolean;

isFlavorJavaFileListType(): boolean;

isFlavorTextType(): boolean;

writeExternal(arg0: ObjectOutput): void;

readExternal(arg0: ObjectInput): void;

clone(): Object;
 }

export class FlavorEvent extends EventObject {
constructor(arg0: Clipboard);
 }

export interface FlavorListener extends EventListener {

flavorsChanged(arg0: FlavorEvent): void;
 }

export interface FlavorMap {

getNativesForFlavors(arg0: DataFlavor[]): Map<DataFlavor, String>;

getFlavorsForNatives(arg0: String[]): Map<String, DataFlavor>;
 }

export interface FlavorTable extends FlavorMap {

getNativesForFlavor(arg0: DataFlavor): List<String>;

getFlavorsForNative(arg0: String): List<DataFlavor>;
 }

export class MimeTypeParseException extends Exception {
constructor();
constructor(arg0: String);
 }

export class StringSelection implements Transferable, ClipboardOwner {
constructor(arg0: String);

getTransferDataFlavors(): DataFlavor[];

isDataFlavorSupported(arg0: DataFlavor): boolean;

getTransferData(arg0: DataFlavor): Object;

lostOwnership(arg0: Clipboard, arg1: Transferable): void;
 }

export class SystemFlavorMap implements FlavorMap, FlavorTable {

static getDefaultFlavorMap(): FlavorMap;

getNativesForFlavor(arg0: DataFlavor): List<String>;

getFlavorsForNative(arg0: String): List<DataFlavor>;

getNativesForFlavors(arg0: DataFlavor[]): Map<DataFlavor, String>;

getFlavorsForNatives(arg0: String[]): Map<String, DataFlavor>;

addUnencodedNativeForFlavor(arg0: DataFlavor, arg1: String): void;

setNativesForFlavor(arg0: DataFlavor, arg1: String[]): void;

addFlavorForUnencodedNative(arg0: String, arg1: DataFlavor): void;

setFlavorsForNative(arg0: String, arg1: DataFlavor[]): void;

static encodeJavaMIMEType(arg0: String): String;

static encodeDataFlavor(arg0: DataFlavor): String;

static isJavaMIMEType(arg0: String): boolean;

static decodeJavaMIMEType(arg0: String): String;

static decodeDataFlavor(arg0: String): DataFlavor;
 }

export interface Transferable {

getTransferDataFlavors(): DataFlavor[];

isDataFlavorSupported(arg0: DataFlavor): boolean;

getTransferData(arg0: DataFlavor): Object;
 }

export class UnsupportedFlavorException extends Exception {
constructor(arg0: DataFlavor);
 }

}
