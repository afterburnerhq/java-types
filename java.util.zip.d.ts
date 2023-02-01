/// <reference path="java.lang.d.ts" />
/// <reference path="java.time.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.util.stream.d.ts" />
/// <reference path="java.nio.d.ts" />
/// <reference path="java.nio.file.attribute.d.ts" />
/// <reference path="java.nio.charset.d.ts" />
declare module '@afterburnerhq/java.util.zip' { 
import { Cloneable, String, InternalError, Exception } from '@afterburnerhq/java.lang'
import { LocalDateTime } from '@afterburnerhq/java.time'
import { Enumeration } from '@afterburnerhq/java.util'
import { FilterInputStream, InputStream, OutputStream, Closeable, IOException, FilterOutputStream, File } from '@afterburnerhq/java.io'
import { Stream } from '@afterburnerhq/java.util.stream'
import { ByteBuffer } from '@afterburnerhq/java.nio'
import { FileTime } from '@afterburnerhq/java.nio.file.attribute'
import { Charset } from '@afterburnerhq/java.nio.charset'
export interface Adler32 extends Checksum { }
export class Adler32 implements Checksum {
constructor();

update(arg0: number): void;

update(arg0: number[], arg1: number, arg2: number): void;

update(arg0: ByteBuffer): void;

reset(): void;

getValue(): number;
 }

export interface CRC32 extends Checksum { }
export class CRC32 implements Checksum {
constructor();

update(arg0: number): void;

update(arg0: number[], arg1: number, arg2: number): void;

update(arg0: ByteBuffer): void;

reset(): void;

getValue(): number;
 }

export interface CRC32C extends Checksum { }
export class CRC32C implements Checksum {
constructor();

update(arg0: number): void;

update(arg0: number[], arg1: number, arg2: number): void;

update(arg0: ByteBuffer): void;

reset(): void;

getValue(): number;
 }

export class CheckedInputStream extends FilterInputStream {
constructor(arg0: InputStream, arg1: Checksum);

read(): number;

read(arg0: number[], arg1: number, arg2: number): number;

skip(arg0: number): number;

getChecksum(): Checksum;
 }

export class CheckedOutputStream extends FilterOutputStream {
constructor(arg0: OutputStream, arg1: Checksum);

write(arg0: number): void;

write(arg0: number[], arg1: number, arg2: number): void;

getChecksum(): Checksum;
 }

export interface Checksum {

update(arg0: number): void;

/* default */ update(arg0: number[]): void;

update(arg0: number[], arg1: number, arg2: number): void;

/* default */ update(arg0: ByteBuffer): void;

getValue(): number;

reset(): void;
 }

export class DataFormatException extends Exception {
constructor();
constructor(arg0: String);
 }

export class Deflater {
static DEFLATED:number
static NO_COMPRESSION:number
static BEST_SPEED:number
static BEST_COMPRESSION:number
static DEFAULT_COMPRESSION:number
static FILTERED:number
static HUFFMAN_ONLY:number
static DEFAULT_STRATEGY:number
static NO_FLUSH:number
static SYNC_FLUSH:number
static FULL_FLUSH:number
constructor(arg0: number, arg1: boolean);
constructor(arg0: number);
constructor();

setInput(arg0: number[], arg1: number, arg2: number): void;

setInput(arg0: number[]): void;

setInput(arg0: ByteBuffer): void;

setDictionary(arg0: number[], arg1: number, arg2: number): void;

setDictionary(arg0: number[]): void;

setDictionary(arg0: ByteBuffer): void;

setStrategy(arg0: number): void;

setLevel(arg0: number): void;

needsInput(): boolean;

finish(): void;

finished(): boolean;

deflate(arg0: number[], arg1: number, arg2: number): number;

deflate(arg0: number[]): number;

deflate(arg0: ByteBuffer): number;

deflate(arg0: number[], arg1: number, arg2: number, arg3: number): number;

deflate(arg0: ByteBuffer, arg1: number): number;

getAdler(): number;

getTotalIn(): number;

getBytesRead(): number;

getTotalOut(): number;

getBytesWritten(): number;

reset(): void;

end(): void;
 }

export class DeflaterInputStream extends FilterInputStream {
constructor(arg0: InputStream);
constructor(arg0: InputStream, arg1: Deflater);
constructor(arg0: InputStream, arg1: Deflater, arg2: number);

close(): void;

read(): number;

read(arg0: number[], arg1: number, arg2: number): number;

skip(arg0: number): number;

available(): number;

markSupported(): boolean;

mark(arg0: number): void;

reset(): void;
 }

export class DeflaterOutputStream extends FilterOutputStream {
constructor(arg0: OutputStream, arg1: Deflater, arg2: number, arg3: boolean);
constructor(arg0: OutputStream, arg1: Deflater, arg2: number);
constructor(arg0: OutputStream, arg1: Deflater, arg2: boolean);
constructor(arg0: OutputStream, arg1: Deflater);
constructor(arg0: OutputStream, arg1: boolean);
constructor(arg0: OutputStream);

write(arg0: number): void;

write(arg0: number[], arg1: number, arg2: number): void;

finish(): void;

close(): void;

flush(): void;
 }

export class GZIPInputStream extends InflaterInputStream {
static GZIP_MAGIC:number
constructor(arg0: InputStream, arg1: number);
constructor(arg0: InputStream);

read(arg0: number[], arg1: number, arg2: number): number;

close(): void;
 }

export class GZIPOutputStream extends DeflaterOutputStream {
constructor(arg0: OutputStream, arg1: number);
constructor(arg0: OutputStream, arg1: number, arg2: boolean);
constructor(arg0: OutputStream);
constructor(arg0: OutputStream, arg1: boolean);

write(arg0: number[], arg1: number, arg2: number): void;

finish(): void;
 }

export class Inflater {
constructor(arg0: boolean);
constructor();

setInput(arg0: number[], arg1: number, arg2: number): void;

setInput(arg0: number[]): void;

setInput(arg0: ByteBuffer): void;

setDictionary(arg0: number[], arg1: number, arg2: number): void;

setDictionary(arg0: number[]): void;

setDictionary(arg0: ByteBuffer): void;

getRemaining(): number;

needsInput(): boolean;

needsDictionary(): boolean;

finished(): boolean;

inflate(arg0: number[], arg1: number, arg2: number): number;

inflate(arg0: number[]): number;

inflate(arg0: ByteBuffer): number;

getAdler(): number;

getTotalIn(): number;

getBytesRead(): number;

getTotalOut(): number;

getBytesWritten(): number;

reset(): void;

end(): void;
 }

export class InflaterInputStream extends FilterInputStream {
constructor(arg0: InputStream, arg1: Inflater, arg2: number);
constructor(arg0: InputStream, arg1: Inflater);
constructor(arg0: InputStream);

read(): number;

read(arg0: number[], arg1: number, arg2: number): number;

available(): number;

skip(arg0: number): number;

close(): void;

markSupported(): boolean;

mark(arg0: number): void;

reset(): void;
 }

export class InflaterOutputStream extends FilterOutputStream {
constructor(arg0: OutputStream);
constructor(arg0: OutputStream, arg1: Inflater);
constructor(arg0: OutputStream, arg1: Inflater, arg2: number);

close(): void;

flush(): void;

finish(): void;

write(arg0: number): void;

write(arg0: number[], arg1: number, arg2: number): void;
 }

export class ZipEntry implements ZipConstants, Cloneable {
static STORED:number
static DEFLATED:number
constructor(arg0: String);
constructor(arg0: ZipEntry);

getName(): String;

setTime(arg0: number): void;

getTime(): number;

setTimeLocal(arg0: LocalDateTime): void;

getTimeLocal(): LocalDateTime;

setLastModifiedTime(arg0: FileTime): ZipEntry;

getLastModifiedTime(): FileTime;

setLastAccessTime(arg0: FileTime): ZipEntry;

getLastAccessTime(): FileTime;

setCreationTime(arg0: FileTime): ZipEntry;

getCreationTime(): FileTime;

setSize(arg0: number): void;

getSize(): number;

getCompressedSize(): number;

setCompressedSize(arg0: number): void;

setCrc(arg0: number): void;

getCrc(): number;

setMethod(arg0: number): void;

getMethod(): number;

setExtra(arg0: number[]): void;

getExtra(): number[];

setComment(arg0: String): void;

getComment(): String;

isDirectory(): boolean;
toString(): string;

hashCode(): number;

clone(): Object;
 }

export class ZipError extends InternalError {
constructor(arg0: String);
 }

export class ZipException extends IOException {
constructor();
constructor(arg0: String);
 }

export class ZipFile implements ZipConstants, Closeable {
static OPEN_READ:number
static OPEN_DELETE:number
constructor(arg0: String);
constructor(arg0: File, arg1: number);
constructor(arg0: File);
constructor(arg0: File, arg1: number, arg2: Charset);
constructor(arg0: String, arg1: Charset);
constructor(arg0: File, arg1: Charset);

getComment(): String;

getEntry(arg0: String): ZipEntry;

getInputStream(arg0: ZipEntry): InputStream;

getName(): String;

entries(): Enumeration<ZipEntry>;

stream(): Stream<ZipEntry>;

size(): number;

close(): void;
 }

export class ZipInputStream extends InflaterInputStream implements ZipConstants {
constructor(arg0: InputStream);
constructor(arg0: InputStream, arg1: Charset);

getNextEntry(): ZipEntry;

closeEntry(): void;

available(): number;

read(arg0: number[], arg1: number, arg2: number): number;

skip(arg0: number): number;

close(): void;
 }

export class ZipOutputStream extends DeflaterOutputStream implements ZipConstants {
static STORED:number
static DEFLATED:number
constructor(arg0: OutputStream);
constructor(arg0: OutputStream, arg1: Charset);

setComment(arg0: String): void;

setMethod(arg0: number): void;

setLevel(arg0: number): void;

putNextEntry(arg0: ZipEntry): void;

closeEntry(): void;

write(arg0: number[], arg1: number, arg2: number): void;

finish(): void;

close(): void;
 }

}
