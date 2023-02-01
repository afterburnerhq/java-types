/// <reference path="java.lang.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.nio.d.ts" />
declare module '@afterburnerhq/javax.imageio.stream' { 
import { String } from '@afterburnerhq/java.lang'
import { DataInput, DataOutput, RandomAccessFile, InputStream, OutputStream, Closeable, File } from '@afterburnerhq/java.io'
import { ByteOrder } from '@afterburnerhq/java.nio'
export class FileCacheImageInputStream extends ImageInputStreamImpl {
constructor(arg0: InputStream, arg1: File);

read(): number;

read(arg0: number[], arg1: number, arg2: number): number;

isCached(): boolean;

isCachedFile(): boolean;

isCachedMemory(): boolean;

close(): void;
 }

export class FileCacheImageOutputStream extends ImageOutputStreamImpl {
constructor(arg0: OutputStream, arg1: File);

read(): number;

read(arg0: number[], arg1: number, arg2: number): number;

write(arg0: number): void;

write(arg0: number[], arg1: number, arg2: number): void;

length(): number;

seek(arg0: number): void;

isCached(): boolean;

isCachedFile(): boolean;

isCachedMemory(): boolean;

close(): void;

flushBefore(arg0: number): void;
 }

export class FileImageInputStream extends ImageInputStreamImpl {
constructor(arg0: File);
constructor(arg0: RandomAccessFile);

read(): number;

read(arg0: number[], arg1: number, arg2: number): number;

length(): number;

seek(arg0: number): void;

close(): void;
 }

export class FileImageOutputStream extends ImageOutputStreamImpl {
constructor(arg0: File);
constructor(arg0: RandomAccessFile);

read(): number;

read(arg0: number[], arg1: number, arg2: number): number;

write(arg0: number): void;

write(arg0: number[], arg1: number, arg2: number): void;

length(): number;

seek(arg0: number): void;

close(): void;
 }

export class IIOByteBuffer {
constructor(arg0: number[], arg1: number, arg2: number);

getData(): number[];

setData(arg0: number[]): void;

getOffset(): number;

setOffset(arg0: number): void;

getLength(): number;

setLength(arg0: number): void;
 }

export interface ImageInputStream extends DataInput, Closeable {

setByteOrder(arg0: ByteOrder): void;

getByteOrder(): ByteOrder;

read(): number;

read(arg0: number[]): number;

read(arg0: number[], arg1: number, arg2: number): number;

readBytes(arg0: IIOByteBuffer, arg1: number): void;

readBoolean(): boolean;

readByte(): number;

readUnsignedByte(): number;

readShort(): number;

readUnsignedShort(): number;

readChar(): String;

readInt(): number;

readUnsignedInt(): number;

readLong(): number;

readFloat(): number;

readDouble(): number;

readLine(): String;

readUTF(): String;

readFully(arg0: number[], arg1: number, arg2: number): void;

readFully(arg0: number[]): void;

readFully(arg0: number[], arg1: number, arg2: number): void;

readFully(arg0: String[], arg1: number, arg2: number): void;

readFully(arg0: number[], arg1: number, arg2: number): void;

readFully(arg0: number[], arg1: number, arg2: number): void;

readFully(arg0: number[], arg1: number, arg2: number): void;

readFully(arg0: number[], arg1: number, arg2: number): void;

getStreamPosition(): number;

getBitOffset(): number;

setBitOffset(arg0: number): void;

readBit(): number;

readBits(arg0: number): number;

length(): number;

skipBytes(arg0: number): number;

skipBytes(arg0: number): number;

seek(arg0: number): void;

mark(): void;

reset(): void;

flushBefore(arg0: number): void;

flush(): void;

getFlushedPosition(): number;

isCached(): boolean;

isCachedMemory(): boolean;

isCachedFile(): boolean;

close(): void;
 }

export abstract class ImageInputStreamImpl implements ImageInputStream {
constructor();

setByteOrder(arg0: ByteOrder): void;

getByteOrder(): ByteOrder;

abstract read(): number;

read(arg0: number[]): number;

abstract read(arg0: number[], arg1: number, arg2: number): number;

readBytes(arg0: IIOByteBuffer, arg1: number): void;

readBoolean(): boolean;

readByte(): number;

readUnsignedByte(): number;

readShort(): number;

readUnsignedShort(): number;

readChar(): String;

readInt(): number;

readUnsignedInt(): number;

readLong(): number;

readFloat(): number;

readDouble(): number;

readLine(): String;

readUTF(): String;

readFully(arg0: number[], arg1: number, arg2: number): void;

readFully(arg0: number[]): void;

readFully(arg0: number[], arg1: number, arg2: number): void;

readFully(arg0: String[], arg1: number, arg2: number): void;

readFully(arg0: number[], arg1: number, arg2: number): void;

readFully(arg0: number[], arg1: number, arg2: number): void;

readFully(arg0: number[], arg1: number, arg2: number): void;

readFully(arg0: number[], arg1: number, arg2: number): void;

getStreamPosition(): number;

getBitOffset(): number;

setBitOffset(arg0: number): void;

readBit(): number;

readBits(arg0: number): number;

length(): number;

skipBytes(arg0: number): number;

skipBytes(arg0: number): number;

seek(arg0: number): void;

mark(): void;

reset(): void;

flushBefore(arg0: number): void;

flush(): void;

getFlushedPosition(): number;

isCached(): boolean;

isCachedMemory(): boolean;

isCachedFile(): boolean;

close(): void;
 }

export interface ImageOutputStream extends ImageInputStream, DataOutput {

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

writeShorts(arg0: number[], arg1: number, arg2: number): void;

writeChars(arg0: String[], arg1: number, arg2: number): void;

writeInts(arg0: number[], arg1: number, arg2: number): void;

writeLongs(arg0: number[], arg1: number, arg2: number): void;

writeFloats(arg0: number[], arg1: number, arg2: number): void;

writeDoubles(arg0: number[], arg1: number, arg2: number): void;

writeBit(arg0: number): void;

writeBits(arg0: number, arg1: number): void;

flushBefore(arg0: number): void;
 }

export abstract class ImageOutputStreamImpl extends ImageInputStreamImpl implements ImageOutputStream {
constructor();

abstract write(arg0: number): void;

write(arg0: number[]): void;

abstract write(arg0: number[], arg1: number, arg2: number): void;

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

writeShorts(arg0: number[], arg1: number, arg2: number): void;

writeChars(arg0: String[], arg1: number, arg2: number): void;

writeInts(arg0: number[], arg1: number, arg2: number): void;

writeLongs(arg0: number[], arg1: number, arg2: number): void;

writeFloats(arg0: number[], arg1: number, arg2: number): void;

writeDoubles(arg0: number[], arg1: number, arg2: number): void;

writeBit(arg0: number): void;

writeBits(arg0: number, arg1: number): void;
 }

export class MemoryCacheImageInputStream extends ImageInputStreamImpl {
constructor(arg0: InputStream);

read(): number;

read(arg0: number[], arg1: number, arg2: number): number;

flushBefore(arg0: number): void;

isCached(): boolean;

isCachedFile(): boolean;

isCachedMemory(): boolean;

close(): void;
 }

export class MemoryCacheImageOutputStream extends ImageOutputStreamImpl {
constructor(arg0: OutputStream);

read(): number;

read(arg0: number[], arg1: number, arg2: number): number;

write(arg0: number): void;

write(arg0: number[], arg1: number, arg2: number): void;

length(): number;

isCached(): boolean;

isCachedFile(): boolean;

isCachedMemory(): boolean;

close(): void;

flushBefore(arg0: number): void;
 }

}
