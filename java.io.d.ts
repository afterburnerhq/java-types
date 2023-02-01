/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.util.stream.d.ts" />
/// <reference path="java.nio.d.ts" />
/// <reference path="java.nio.channels.d.ts" />
/// <reference path="java.util.function.d.ts" />
/// <reference path="java.nio.file.d.ts" />
/// <reference path="java.nio.charset.d.ts" />
declare module '@afterburnerhq/java.io' { 
import { Permission, PermissionCollection, BasicPermission } from '@afterburnerhq/java.security'
import { Enum, Comparable, AutoCloseable, Appendable, CharSequence, Error, String, Exception, StringBuffer, RuntimeException, Throwable, Class, Readable } from '@afterburnerhq/java.lang'
import { Locale, Enumeration } from '@afterburnerhq/java.util'
import { URI, URL } from '@afterburnerhq/java.net'
import { Stream } from '@afterburnerhq/java.util.stream'
import { CharBuffer } from '@afterburnerhq/java.nio'
import { FileChannel } from '@afterburnerhq/java.nio.channels'
import { BinaryOperator, Predicate } from '@afterburnerhq/java.util.function'
import { Path } from '@afterburnerhq/java.nio.file'
import { Charset, CharsetEncoder, CharsetDecoder } from '@afterburnerhq/java.nio.charset'
export class BufferedInputStream extends FilterInputStream {
constructor(arg0: InputStream);
constructor(arg0: InputStream, arg1: number);

read(): number;

read(arg0: number[], arg1: number, arg2: number): number;

skip(arg0: number): number;

available(): number;

mark(arg0: number): void;

reset(): void;

markSupported(): boolean;

close(): void;
 }

export class BufferedOutputStream extends FilterOutputStream {
constructor(arg0: OutputStream);
constructor(arg0: OutputStream, arg1: number);

write(arg0: number): void;

write(arg0: number[], arg1: number, arg2: number): void;

flush(): void;
 }

export class BufferedReader extends Reader {
constructor(arg0: Reader, arg1: number);
constructor(arg0: Reader);

read(): number;

read(arg0: String[], arg1: number, arg2: number): number;

readLine(): String;

skip(arg0: number): number;

ready(): boolean;

markSupported(): boolean;

mark(arg0: number): void;

reset(): void;

close(): void;

lines(): Stream<String>;
 }

export class BufferedWriter extends Writer {
constructor(arg0: Writer);
constructor(arg0: Writer, arg1: number);

write(arg0: number): void;

write(arg0: String[], arg1: number, arg2: number): void;

write(arg0: String, arg1: number, arg2: number): void;

newLine(): void;

flush(): void;

close(): void;
 }

export class ByteArrayInputStream extends InputStream {
constructor(arg0: number[]);
constructor(arg0: number[], arg1: number, arg2: number);

read(): number;

read(arg0: number[], arg1: number, arg2: number): number;

readAllBytes(): number[];

readNBytes(arg0: number[], arg1: number, arg2: number): number;

transferTo(arg0: OutputStream): number;

skip(arg0: number): number;

available(): number;

markSupported(): boolean;

mark(arg0: number): void;

reset(): void;

close(): void;
 }

export class ByteArrayOutputStream extends OutputStream {
constructor();
constructor(arg0: number);

write(arg0: number): void;

write(arg0: number[], arg1: number, arg2: number): void;

writeBytes(arg0: number[]): void;

writeTo(arg0: OutputStream): void;

reset(): void;

toByteArray(): number[];

size(): number;
toString(): string;

toString(arg0: String): String;

toString(arg0: Charset): String;

toString(arg0: number): String;

close(): void;
 }

export class CharArrayReader extends Reader {
constructor(arg0: String[]);
constructor(arg0: String[], arg1: number, arg2: number);

read(): number;

read(arg0: String[], arg1: number, arg2: number): number;

read(arg0: CharBuffer): number;

skip(arg0: number): number;

ready(): boolean;

markSupported(): boolean;

mark(arg0: number): void;

reset(): void;

close(): void;
 }

export class CharArrayWriter extends Writer {
constructor();
constructor(arg0: number);

write(arg0: number): void;

write(arg0: String[], arg1: number, arg2: number): void;

write(arg0: String, arg1: number, arg2: number): void;

writeTo(arg0: Writer): void;

append(arg0: CharSequence): CharArrayWriter;

append(arg0: CharSequence, arg1: number, arg2: number): CharArrayWriter;

append(arg0: String): CharArrayWriter;

reset(): void;

toCharArray(): String[];

size(): number;
toString(): string;

flush(): void;

close(): void;
 }

export class CharConversionException extends IOException {
constructor();
constructor(arg0: String);
 }

export interface Closeable extends AutoCloseable {

close(): void;
 }

export class Console implements Flushable {

writer(): PrintWriter;

reader(): Reader;

format(arg0: String, arg1: Object[]): Console;

printf(arg0: String, arg1: Object[]): Console;

readLine(arg0: String, arg1: Object[]): String;

readLine(): String;

readPassword(arg0: String, arg1: Object[]): String[];

readPassword(): String[];

flush(): void;

charset(): Charset;
 }

export interface DataInput {

readFully(arg0: number[]): void;

readFully(arg0: number[], arg1: number, arg2: number): void;

skipBytes(arg0: number): number;

readBoolean(): boolean;

readByte(): number;

readUnsignedByte(): number;

readShort(): number;

readUnsignedShort(): number;

readChar(): String;

readInt(): number;

readLong(): number;

readFloat(): number;

readDouble(): number;

readLine(): String;

readUTF(): String;
 }

export class DataInputStream extends FilterInputStream implements DataInput {
constructor(arg0: InputStream);

read(arg0: number[]): number;

read(arg0: number[], arg1: number, arg2: number): number;

readFully(arg0: number[]): void;

readFully(arg0: number[], arg1: number, arg2: number): void;

skipBytes(arg0: number): number;

readBoolean(): boolean;

readByte(): number;

readUnsignedByte(): number;

readShort(): number;

readUnsignedShort(): number;

readChar(): String;

readInt(): number;

readLong(): number;

readFloat(): number;

readDouble(): number;

readLine(): String;

readUTF(): String;

static readUTF(arg0: DataInput): String;
 }

export interface DataOutput {

write(arg0: number): void;

write(arg0: number[]): void;

write(arg0: number[], arg1: number, arg2: number): void;

writeBoolean(arg0: boolean): void;

writeByte(arg0: number): void;

writeShort(arg0: number): void;

writeChar(arg0: number): void;

writeInt(arg0: number): void;

writeLong(arg0: number): void;

writeFloat(arg0: number): void;

writeDouble(arg0: number): void;

writeBytes(arg0: String): void;

writeChars(arg0: String): void;

writeUTF(arg0: String): void;
 }

export class DataOutputStream extends FilterOutputStream implements DataOutput {
constructor(arg0: OutputStream);

write(arg0: number): void;

write(arg0: number[], arg1: number, arg2: number): void;

flush(): void;

writeBoolean(arg0: boolean): void;

writeByte(arg0: number): void;

writeShort(arg0: number): void;

writeChar(arg0: number): void;

writeInt(arg0: number): void;

writeLong(arg0: number): void;

writeFloat(arg0: number): void;

writeDouble(arg0: number): void;

writeBytes(arg0: String): void;

writeChars(arg0: String): void;

writeUTF(arg0: String): void;

size(): number;
 }

export class EOFException extends IOException {
constructor();
constructor(arg0: String);
 }

export interface Externalizable extends Serializable {

writeExternal(arg0: ObjectOutput): void;

readExternal(arg0: ObjectInput): void;
 }

export class File extends Object implements Serializable, Comparable<File> {
static separatorChar:String
static separator:String
static pathSeparatorChar:String
static pathSeparator:String
constructor(arg0: String);
constructor(arg0: String, arg1: String);
constructor(arg0: File, arg1: String);
constructor(arg0: URI);

getName(): String;

getParent(): String;

getParentFile(): File;

getPath(): String;

isAbsolute(): boolean;

getAbsolutePath(): String;

getAbsoluteFile(): File;

getCanonicalPath(): String;

getCanonicalFile(): File;

toURL(): URL;

toURI(): URI;

canRead(): boolean;

canWrite(): boolean;

exists(): boolean;

isDirectory(): boolean;

isFile(): boolean;

isHidden(): boolean;

lastModified(): number;

length(): number;

createNewFile(): boolean;

delete(): boolean;

deleteOnExit(): void;

list(): String[];

list(arg0: FilenameFilter): String[];

listFiles(): File[];

listFiles(arg0: FilenameFilter): File[];

listFiles(arg0: FileFilter): File[];

mkdir(): boolean;

mkdirs(): boolean;

renameTo(arg0: File): boolean;

setLastModified(arg0: number): boolean;

setReadOnly(): boolean;

setWritable(arg0: boolean, arg1: boolean): boolean;

setWritable(arg0: boolean): boolean;

setReadable(arg0: boolean, arg1: boolean): boolean;

setReadable(arg0: boolean): boolean;

setExecutable(arg0: boolean, arg1: boolean): boolean;

setExecutable(arg0: boolean): boolean;

canExecute(): boolean;

static listRoots(): File[];

getTotalSpace(): number;

getFreeSpace(): number;

getUsableSpace(): number;

static createTempFile(arg0: String, arg1: String, arg2: File): File;

static createTempFile(arg0: String, arg1: String): File;

compareTo(arg0: File): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;

toPath(): Path;
 }

export class FileDescriptor {
static in:FileDescriptor
static out:FileDescriptor
static err:FileDescriptor
constructor();

valid(): boolean;

sync(): void;
 }

export interface FileFilter {

accept(arg0: File): boolean;
 }

export class FileInputStream extends InputStream {
constructor(arg0: String);
constructor(arg0: File);
constructor(arg0: FileDescriptor);

read(): number;

read(arg0: number[]): number;

read(arg0: number[], arg1: number, arg2: number): number;

readAllBytes(): number[];

readNBytes(arg0: number): number[];

skip(arg0: number): number;

available(): number;

close(): void;

getFD(): FileDescriptor;

getChannel(): FileChannel;
 }

export class FileNotFoundException extends IOException {
constructor();
constructor(arg0: String);
 }

export class FileOutputStream extends OutputStream {
constructor(arg0: String);
constructor(arg0: String, arg1: boolean);
constructor(arg0: File);
constructor(arg0: File, arg1: boolean);
constructor(arg0: FileDescriptor);

write(arg0: number): void;

write(arg0: number[]): void;

write(arg0: number[], arg1: number, arg2: number): void;

close(): void;

getFD(): FileDescriptor;

getChannel(): FileChannel;
 }

export class FilePermission extends Permission implements Serializable {
constructor(arg0: String, arg1: String);

implies(arg0: Permission): boolean;

equals(arg0: Object): boolean;

hashCode(): number;

getActions(): String;

newPermissionCollection(): PermissionCollection;
 }

export class FileReader extends InputStreamReader {
constructor(arg0: String);
constructor(arg0: File);
constructor(arg0: FileDescriptor);
constructor(arg0: String, arg1: Charset);
constructor(arg0: File, arg1: Charset);
 }

export class FileWriter extends OutputStreamWriter {
constructor(arg0: String);
constructor(arg0: String, arg1: boolean);
constructor(arg0: File);
constructor(arg0: File, arg1: boolean);
constructor(arg0: FileDescriptor);
constructor(arg0: String, arg1: Charset);
constructor(arg0: String, arg1: Charset, arg2: boolean);
constructor(arg0: File, arg1: Charset);
constructor(arg0: File, arg1: Charset, arg2: boolean);
 }

export interface FilenameFilter {

accept(arg0: File, arg1: String): boolean;
 }

export class FilterInputStream extends InputStream {

read(): number;

read(arg0: number[]): number;

read(arg0: number[], arg1: number, arg2: number): number;

skip(arg0: number): number;

available(): number;

close(): void;

mark(arg0: number): void;

reset(): void;

markSupported(): boolean;
 }

export class FilterOutputStream extends OutputStream {
constructor(arg0: OutputStream);

write(arg0: number): void;

write(arg0: number[]): void;

write(arg0: number[], arg1: number, arg2: number): void;

flush(): void;

close(): void;
 }

export abstract class FilterReader extends Reader {

read(): number;

read(arg0: String[], arg1: number, arg2: number): number;

skip(arg0: number): number;

ready(): boolean;

markSupported(): boolean;

mark(arg0: number): void;

reset(): void;

close(): void;
 }

export abstract class FilterWriter extends Writer {

write(arg0: number): void;

write(arg0: String[], arg1: number, arg2: number): void;

write(arg0: String, arg1: number, arg2: number): void;

flush(): void;

close(): void;
 }

export interface Flushable {

flush(): void;
 }

export class IOError extends Error {
constructor(arg0: Throwable);
 }

export class IOException extends Exception {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export abstract class InputStream implements Closeable {
constructor();

static nullInputStream(): InputStream;

abstract read(): number;

read(arg0: number[]): number;

read(arg0: number[], arg1: number, arg2: number): number;

readAllBytes(): number[];

readNBytes(arg0: number): number[];

readNBytes(arg0: number[], arg1: number, arg2: number): number;

skip(arg0: number): number;

skipNBytes(arg0: number): void;

available(): number;

close(): void;

mark(arg0: number): void;

reset(): void;

markSupported(): boolean;

transferTo(arg0: OutputStream): number;
 }

export class InputStreamReader extends Reader {
constructor(arg0: InputStream);
constructor(arg0: InputStream, arg1: String);
constructor(arg0: InputStream, arg1: Charset);
constructor(arg0: InputStream, arg1: CharsetDecoder);

getEncoding(): String;

read(arg0: CharBuffer): number;

read(): number;

read(arg0: String[], arg1: number, arg2: number): number;

ready(): boolean;

close(): void;
 }

export class InterruptedIOException extends IOException {
bytesTransferred:number
constructor();
constructor(arg0: String);
 }

export class InvalidClassException extends ObjectStreamException {
classname:String
constructor(arg0: String);
constructor(arg0: String, arg1: String);

getMessage(): String;
 }

export class InvalidObjectException extends ObjectStreamException {
constructor(arg0: String);
 }

export class LineNumberInputStream extends FilterInputStream {
constructor(arg0: InputStream);

read(): number;

read(arg0: number[], arg1: number, arg2: number): number;

skip(arg0: number): number;

setLineNumber(arg0: number): void;

getLineNumber(): number;

available(): number;

mark(arg0: number): void;

reset(): void;
 }

export class LineNumberReader extends BufferedReader {
constructor(arg0: Reader);
constructor(arg0: Reader, arg1: number);

setLineNumber(arg0: number): void;

getLineNumber(): number;

read(): number;

read(arg0: String[], arg1: number, arg2: number): number;

readLine(): String;

skip(arg0: number): number;

mark(arg0: number): void;

reset(): void;
 }

export class NotActiveException extends ObjectStreamException {
constructor(arg0: String);
constructor();
 }

export class NotSerializableException extends ObjectStreamException {
constructor(arg0: String);
constructor();
 }

export interface ObjectInput extends DataInput, AutoCloseable {

readObject(): Object;

read(): number;

read(arg0: number[]): number;

read(arg0: number[], arg1: number, arg2: number): number;

skip(arg0: number): number;

available(): number;

close(): void;
 }

export namespace ObjectInputFilter { 
function 
/* default */ allowFilter(arg0: Predicate<Class<any>>, arg1: ObjectInputFilter.Status): ObjectInputFilter;
function 
/* default */ rejectFilter(arg0: Predicate<Class<any>>, arg1: ObjectInputFilter.Status): ObjectInputFilter;
function 
/* default */ merge(arg0: ObjectInputFilter, arg1: ObjectInputFilter): ObjectInputFilter;
function 
/* default */ rejectUndecidedClass(arg0: ObjectInputFilter): ObjectInputFilter;
}

export interface ObjectInputFilter {

checkInput(arg0: ObjectInputFilter.FilterInfo): ObjectInputFilter.Status;
 }
export namespace ObjectInputFilter { 
export class Config {

static getSerialFilter(): ObjectInputFilter;

static setSerialFilter(arg0: ObjectInputFilter): void;

static getSerialFilterFactory(): BinaryOperator<ObjectInputFilter>;

static setSerialFilterFactory(arg0: BinaryOperator<ObjectInputFilter>): void;

static createFilter(arg0: String): ObjectInputFilter;
 }

export interface FilterInfo {

serialClass(): Class<any>;

arrayLength(): number;

depth(): number;

references(): number;

streamBytes(): number;
 }

export class Status extends Enum<ObjectInputFilter.Status> {
static UNDECIDED:ObjectInputFilter.Status
static ALLOWED:ObjectInputFilter.Status
static REJECTED:ObjectInputFilter.Status

static values(): ObjectInputFilter.Status[];

static valueOf(arg0: String): ObjectInputFilter.Status;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class ObjectInputStream extends InputStream implements ObjectInput, ObjectStreamConstants {
constructor(arg0: InputStream);

readObject(): Object;

readUnshared(): Object;

defaultReadObject(): void;

readFields(): ObjectInputStream.GetField;

registerValidation(arg0: ObjectInputValidation, arg1: number): void;

read(): number;

read(arg0: number[], arg1: number, arg2: number): number;

available(): number;

close(): void;

readBoolean(): boolean;

readByte(): number;

readUnsignedByte(): number;

readChar(): String;

readShort(): number;

readUnsignedShort(): number;

readInt(): number;

readLong(): number;

readFloat(): number;

readDouble(): number;

readFully(arg0: number[]): void;

readFully(arg0: number[], arg1: number, arg2: number): void;

skipBytes(arg0: number): number;

readLine(): String;

readUTF(): String;

getObjectInputFilter(): ObjectInputFilter;

setObjectInputFilter(arg0: ObjectInputFilter): void;
 }
export namespace ObjectInputStream { 
export abstract class GetField {
constructor();

abstract getObjectStreamClass(): ObjectStreamClass;

abstract defaulted(arg0: String): boolean;

abstract get(arg0: String, arg1: boolean): boolean;

abstract get(arg0: String, arg1: number): number;

abstract get(arg0: String, arg1: String): String;

abstract get(arg0: String, arg1: number): number;

abstract get(arg0: String, arg1: number): number;

abstract get(arg0: String, arg1: number): number;

abstract get(arg0: String, arg1: number): number;

abstract get(arg0: String, arg1: number): number;

abstract get(arg0: String, arg1: Object): Object;
 }

}

export interface ObjectInputValidation {

validateObject(): void;
 }

export interface ObjectOutput extends DataOutput, AutoCloseable {

writeObject(arg0: Object): void;

write(arg0: number): void;

write(arg0: number[]): void;

write(arg0: number[], arg1: number, arg2: number): void;

flush(): void;

close(): void;
 }

export class ObjectOutputStream extends OutputStream implements ObjectOutput, ObjectStreamConstants {
constructor(arg0: OutputStream);

useProtocolVersion(arg0: number): void;

writeObject(arg0: Object): void;

writeUnshared(arg0: Object): void;

defaultWriteObject(): void;

putFields(): ObjectOutputStream.PutField;

writeFields(): void;

reset(): void;

write(arg0: number): void;

write(arg0: number[]): void;

write(arg0: number[], arg1: number, arg2: number): void;

flush(): void;

close(): void;

writeBoolean(arg0: boolean): void;

writeByte(arg0: number): void;

writeShort(arg0: number): void;

writeChar(arg0: number): void;

writeInt(arg0: number): void;

writeLong(arg0: number): void;

writeFloat(arg0: number): void;

writeDouble(arg0: number): void;

writeBytes(arg0: String): void;

writeChars(arg0: String): void;

writeUTF(arg0: String): void;
 }
export namespace ObjectOutputStream { 
export abstract class PutField {
constructor();

abstract put(arg0: String, arg1: boolean): void;

abstract put(arg0: String, arg1: number): void;

abstract put(arg0: String, arg1: String): void;

abstract put(arg0: String, arg1: number): void;

abstract put(arg0: String, arg1: number): void;

abstract put(arg0: String, arg1: number): void;

abstract put(arg0: String, arg1: number): void;

abstract put(arg0: String, arg1: number): void;

abstract put(arg0: String, arg1: Object): void;

abstract write(arg0: ObjectOutput): void;
 }

}

export class ObjectStreamClass implements Serializable {
static NO_FIELDS:ObjectStreamField[]

static lookup(arg0: Class<any>): ObjectStreamClass;

static lookupAny(arg0: Class<any>): ObjectStreamClass;

getName(): String;

getSerialVersionUID(): number;

forClass(): Class<any>;

getFields(): ObjectStreamField[];

getField(arg0: String): ObjectStreamField;
toString(): string;
 }

export namespace ObjectStreamConstants { 
const STREAM_MAGIC:number
const STREAM_VERSION:number
const TC_BASE:number
const TC_NULL:number
const TC_REFERENCE:number
const TC_CLASSDESC:number
const TC_OBJECT:number
const TC_STRING:number
const TC_ARRAY:number
const TC_CLASS:number
const TC_BLOCKDATA:number
const TC_ENDBLOCKDATA:number
const TC_RESET:number
const TC_BLOCKDATALONG:number
const TC_EXCEPTION:number
const TC_LONGSTRING:number
const TC_PROXYCLASSDESC:number
const TC_ENUM:number
const TC_MAX:number
const baseWireHandle:number
const SC_WRITE_METHOD:number
const SC_BLOCK_DATA:number
const SC_SERIALIZABLE:number
const SC_EXTERNALIZABLE:number
const SC_ENUM:number
const SUBSTITUTION_PERMISSION:SerializablePermission
const SUBCLASS_IMPLEMENTATION_PERMISSION:SerializablePermission
const SERIAL_FILTER_PERMISSION:SerializablePermission
const PROTOCOL_VERSION_1:number
const PROTOCOL_VERSION_2:number
}

export interface ObjectStreamConstants {
STREAM_MAGIC:number
STREAM_VERSION:number
TC_BASE:number
TC_NULL:number
TC_REFERENCE:number
TC_CLASSDESC:number
TC_OBJECT:number
TC_STRING:number
TC_ARRAY:number
TC_CLASS:number
TC_BLOCKDATA:number
TC_ENDBLOCKDATA:number
TC_RESET:number
TC_BLOCKDATALONG:number
TC_EXCEPTION:number
TC_LONGSTRING:number
TC_PROXYCLASSDESC:number
TC_ENUM:number
TC_MAX:number
baseWireHandle:number
SC_WRITE_METHOD:number
SC_BLOCK_DATA:number
SC_SERIALIZABLE:number
SC_EXTERNALIZABLE:number
SC_ENUM:number
SUBSTITUTION_PERMISSION:SerializablePermission
SUBCLASS_IMPLEMENTATION_PERMISSION:SerializablePermission
SERIAL_FILTER_PERMISSION:SerializablePermission
PROTOCOL_VERSION_1:number
PROTOCOL_VERSION_2:number
 }

export abstract class ObjectStreamException extends IOException {
 }

export class ObjectStreamField extends Object implements Comparable<Object> {
constructor(arg0: String, arg1: Class<any>);
constructor(arg0: String, arg1: Class<any>, arg2: boolean);

getName(): String;

getType(): Class<any>;

getTypeCode(): String;

getTypeString(): String;

getOffset(): number;

isPrimitive(): boolean;

isUnshared(): boolean;

compareTo(arg0: Object): number;
toString(): string;
 }

export class OptionalDataException extends ObjectStreamException {
length:number
eof:boolean
 }

export abstract class OutputStream implements Closeable, Flushable {
constructor();

static nullOutputStream(): OutputStream;

abstract write(arg0: number): void;

write(arg0: number[]): void;

write(arg0: number[], arg1: number, arg2: number): void;

flush(): void;

close(): void;
 }

export class OutputStreamWriter extends Writer {
constructor(arg0: OutputStream, arg1: String);
constructor(arg0: OutputStream);
constructor(arg0: OutputStream, arg1: Charset);
constructor(arg0: OutputStream, arg1: CharsetEncoder);

getEncoding(): String;

write(arg0: number): void;

write(arg0: String[], arg1: number, arg2: number): void;

write(arg0: String, arg1: number, arg2: number): void;

append(arg0: CharSequence, arg1: number, arg2: number): Writer;

append(arg0: CharSequence): Writer;

flush(): void;

close(): void;
 }

export class PipedInputStream extends InputStream {
constructor(arg0: PipedOutputStream);
constructor(arg0: PipedOutputStream, arg1: number);
constructor();
constructor(arg0: number);

connect(arg0: PipedOutputStream): void;

read(): number;

read(arg0: number[], arg1: number, arg2: number): number;

available(): number;

close(): void;
 }

export class PipedOutputStream extends OutputStream {
constructor(arg0: PipedInputStream);
constructor();

connect(arg0: PipedInputStream): void;

write(arg0: number): void;

write(arg0: number[], arg1: number, arg2: number): void;

flush(): void;

close(): void;
 }

export class PipedReader extends Reader {
constructor(arg0: PipedWriter);
constructor(arg0: PipedWriter, arg1: number);
constructor();
constructor(arg0: number);

connect(arg0: PipedWriter): void;

read(): number;

read(arg0: String[], arg1: number, arg2: number): number;

ready(): boolean;

close(): void;
 }

export class PipedWriter extends Writer {
constructor(arg0: PipedReader);
constructor();

connect(arg0: PipedReader): void;

write(arg0: number): void;

write(arg0: String[], arg1: number, arg2: number): void;

flush(): void;

close(): void;
 }

export class PrintStream extends FilterOutputStream implements Appendable, Closeable {
constructor(arg0: OutputStream);
constructor(arg0: OutputStream, arg1: boolean);
constructor(arg0: OutputStream, arg1: boolean, arg2: String);
constructor(arg0: OutputStream, arg1: boolean, arg2: Charset);
constructor(arg0: String);
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: Charset);
constructor(arg0: File);
constructor(arg0: File, arg1: String);
constructor(arg0: File, arg1: Charset);

flush(): void;

close(): void;

checkError(): boolean;

write(arg0: number): void;

write(arg0: number[], arg1: number, arg2: number): void;

write(arg0: number[]): void;

writeBytes(arg0: number[]): void;

print(arg0: boolean): void;

print(arg0: String): void;

print(arg0: number): void;

print(arg0: number): void;

print(arg0: number): void;

print(arg0: number): void;

print(arg0: String[]): void;

print(arg0: String): void;

print(arg0: Object): void;

println(): void;

println(arg0: boolean): void;

println(arg0: String): void;

println(arg0: number): void;

println(arg0: number): void;

println(arg0: number): void;

println(arg0: number): void;

println(arg0: String[]): void;

println(arg0: String): void;

println(arg0: Object): void;

printf(arg0: String, arg1: Object[]): PrintStream;

printf(arg0: Locale, arg1: String, arg2: Object[]): PrintStream;

format(arg0: String, arg1: Object[]): PrintStream;

format(arg0: Locale, arg1: String, arg2: Object[]): PrintStream;

append(arg0: CharSequence): PrintStream;

append(arg0: CharSequence, arg1: number, arg2: number): PrintStream;

append(arg0: String): PrintStream;
 }

export class PrintWriter extends Writer {
constructor(arg0: Writer);
constructor(arg0: Writer, arg1: boolean);
constructor(arg0: OutputStream);
constructor(arg0: OutputStream, arg1: boolean);
constructor(arg0: OutputStream, arg1: boolean, arg2: Charset);
constructor(arg0: String);
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: Charset);
constructor(arg0: File);
constructor(arg0: File, arg1: String);
constructor(arg0: File, arg1: Charset);

flush(): void;

close(): void;

checkError(): boolean;

write(arg0: number): void;

write(arg0: String[], arg1: number, arg2: number): void;

write(arg0: String[]): void;

write(arg0: String, arg1: number, arg2: number): void;

write(arg0: String): void;

print(arg0: boolean): void;

print(arg0: String): void;

print(arg0: number): void;

print(arg0: number): void;

print(arg0: number): void;

print(arg0: number): void;

print(arg0: String[]): void;

print(arg0: String): void;

print(arg0: Object): void;

println(): void;

println(arg0: boolean): void;

println(arg0: String): void;

println(arg0: number): void;

println(arg0: number): void;

println(arg0: number): void;

println(arg0: number): void;

println(arg0: String[]): void;

println(arg0: String): void;

println(arg0: Object): void;

printf(arg0: String, arg1: Object[]): PrintWriter;

printf(arg0: Locale, arg1: String, arg2: Object[]): PrintWriter;

format(arg0: String, arg1: Object[]): PrintWriter;

format(arg0: Locale, arg1: String, arg2: Object[]): PrintWriter;

append(arg0: CharSequence): PrintWriter;

append(arg0: CharSequence, arg1: number, arg2: number): PrintWriter;

append(arg0: String): PrintWriter;
 }

export class PushbackInputStream extends FilterInputStream {
constructor(arg0: InputStream, arg1: number);
constructor(arg0: InputStream);

read(): number;

read(arg0: number[], arg1: number, arg2: number): number;

unread(arg0: number): void;

unread(arg0: number[], arg1: number, arg2: number): void;

unread(arg0: number[]): void;

available(): number;

skip(arg0: number): number;

markSupported(): boolean;

mark(arg0: number): void;

reset(): void;

close(): void;
 }

export class PushbackReader extends FilterReader {
constructor(arg0: Reader, arg1: number);
constructor(arg0: Reader);

read(): number;

read(arg0: String[], arg1: number, arg2: number): number;

unread(arg0: number): void;

unread(arg0: String[], arg1: number, arg2: number): void;

unread(arg0: String[]): void;

ready(): boolean;

mark(arg0: number): void;

reset(): void;

markSupported(): boolean;

close(): void;

skip(arg0: number): number;
 }

export class RandomAccessFile implements DataOutput, DataInput, Closeable {
constructor(arg0: String, arg1: String);
constructor(arg0: File, arg1: String);

getFD(): FileDescriptor;

getChannel(): FileChannel;

read(): number;

read(arg0: number[], arg1: number, arg2: number): number;

read(arg0: number[]): number;

readFully(arg0: number[]): void;

readFully(arg0: number[], arg1: number, arg2: number): void;

skipBytes(arg0: number): number;

write(arg0: number): void;

write(arg0: number[]): void;

write(arg0: number[], arg1: number, arg2: number): void;

getFilePointer(): number;

seek(arg0: number): void;

length(): number;

setLength(arg0: number): void;

close(): void;

readBoolean(): boolean;

readByte(): number;

readUnsignedByte(): number;

readShort(): number;

readUnsignedShort(): number;

readChar(): String;

readInt(): number;

readLong(): number;

readFloat(): number;

readDouble(): number;

readLine(): String;

readUTF(): String;

writeBoolean(arg0: boolean): void;

writeByte(arg0: number): void;

writeShort(arg0: number): void;

writeChar(arg0: number): void;

writeInt(arg0: number): void;

writeLong(arg0: number): void;

writeFloat(arg0: number): void;

writeDouble(arg0: number): void;

writeBytes(arg0: String): void;

writeChars(arg0: String): void;

writeUTF(arg0: String): void;
 }

export abstract class Reader implements Readable, Closeable {

static nullReader(): Reader;

read(arg0: CharBuffer): number;

read(): number;

read(arg0: String[]): number;

abstract read(arg0: String[], arg1: number, arg2: number): number;

skip(arg0: number): number;

ready(): boolean;

markSupported(): boolean;

mark(arg0: number): void;

reset(): void;

abstract close(): void;

transferTo(arg0: Writer): number;
 }

export class SequenceInputStream extends InputStream {
constructor(arg0: Enumeration<InputStream>);
constructor(arg0: InputStream, arg1: InputStream);

available(): number;

read(): number;

read(arg0: number[], arg1: number, arg2: number): number;

close(): void;
 }


export interface Serializable {
 }

export class SerializablePermission extends BasicPermission {
constructor(arg0: String);
constructor(arg0: String, arg1: String);
 }

export class StreamCorruptedException extends ObjectStreamException {
constructor(arg0: String);
constructor();
 }

export class StreamTokenizer {
ttype:number
static TT_EOF:number
static TT_EOL:number
static TT_NUMBER:number
static TT_WORD:number
sval:String
nval:number
constructor(arg0: InputStream);
constructor(arg0: Reader);

resetSyntax(): void;

wordChars(arg0: number, arg1: number): void;

whitespaceChars(arg0: number, arg1: number): void;

ordinaryChars(arg0: number, arg1: number): void;

ordinaryChar(arg0: number): void;

commentChar(arg0: number): void;

quoteChar(arg0: number): void;

parseNumbers(): void;

eolIsSignificant(arg0: boolean): void;

slashStarComments(arg0: boolean): void;

slashSlashComments(arg0: boolean): void;

lowerCaseMode(arg0: boolean): void;

nextToken(): number;

pushBack(): void;

lineno(): number;
toString(): string;
 }

export class StringBufferInputStream extends InputStream {
constructor(arg0: String);

read(): number;

read(arg0: number[], arg1: number, arg2: number): number;

skip(arg0: number): number;

available(): number;

reset(): void;
 }

export class StringReader extends Reader {
constructor(arg0: String);

read(): number;

read(arg0: String[], arg1: number, arg2: number): number;

skip(arg0: number): number;

ready(): boolean;

markSupported(): boolean;

mark(arg0: number): void;

reset(): void;

close(): void;
 }

export class StringWriter extends Writer {
constructor();
constructor(arg0: number);

write(arg0: number): void;

write(arg0: String[], arg1: number, arg2: number): void;

write(arg0: String): void;

write(arg0: String, arg1: number, arg2: number): void;

append(arg0: CharSequence): StringWriter;

append(arg0: CharSequence, arg1: number, arg2: number): StringWriter;

append(arg0: String): StringWriter;
toString(): string;

getBuffer(): StringBuffer;

flush(): void;

close(): void;
 }

export class SyncFailedException extends IOException {
constructor(arg0: String);
 }

export class UTFDataFormatException extends IOException {
constructor();
constructor(arg0: String);
 }

export class UncheckedIOException extends RuntimeException {
constructor(arg0: String, arg1: IOException);
constructor(arg0: IOException);

getCause(): IOException;
 }

export class UnsupportedEncodingException extends IOException {
constructor();
constructor(arg0: String);
 }

export class WriteAbortedException extends ObjectStreamException {
detail:Exception
constructor(arg0: String, arg1: Exception);

getMessage(): String;

getCause(): Throwable;
 }

export abstract class Writer implements Appendable, Closeable, Flushable {

static nullWriter(): Writer;

write(arg0: number): void;

write(arg0: String[]): void;

abstract write(arg0: String[], arg1: number, arg2: number): void;

write(arg0: String): void;

write(arg0: String, arg1: number, arg2: number): void;

append(arg0: CharSequence): Writer;

append(arg0: CharSequence, arg1: number, arg2: number): Writer;

append(arg0: String): Writer;

abstract flush(): void;

abstract close(): void;
 }

}
