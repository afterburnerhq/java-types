/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.stream.d.ts" />
declare module '@afterburnerhq/java.nio' { 
import { IllegalStateException, Comparable, RuntimeException, Appendable, CharSequence, Readable, String, UnsupportedOperationException } from '@afterburnerhq/java.lang'
import { IntStream } from '@afterburnerhq/java.util.stream'
export abstract class Buffer {

capacity(): number;

position(): number;

position(arg0: number): Buffer;

limit(): number;

limit(arg0: number): Buffer;

mark(): Buffer;

reset(): Buffer;

clear(): Buffer;

flip(): Buffer;

rewind(): Buffer;

remaining(): number;

hasRemaining(): boolean;

abstract isReadOnly(): boolean;

abstract hasArray(): boolean;

abstract array(): Object;

abstract arrayOffset(): number;

abstract isDirect(): boolean;

abstract slice(): Buffer;

abstract slice(arg0: number, arg1: number): Buffer;

abstract duplicate(): Buffer;
 }

export class BufferOverflowException extends RuntimeException {
constructor();
 }

export class BufferUnderflowException extends RuntimeException {
constructor();
 }

export abstract class ByteBuffer extends Buffer implements Comparable<ByteBuffer> {

static allocateDirect(arg0: number): ByteBuffer;

static allocate(arg0: number): ByteBuffer;

static wrap(arg0: number[], arg1: number, arg2: number): ByteBuffer;

static wrap(arg0: number[]): ByteBuffer;

abstract slice(): ByteBuffer;

abstract slice(arg0: number, arg1: number): ByteBuffer;

abstract duplicate(): ByteBuffer;

abstract asReadOnlyBuffer(): ByteBuffer;

abstract get(): number;

abstract put(arg0: number): ByteBuffer;

abstract get(arg0: number): number;

abstract put(arg0: number, arg1: number): ByteBuffer;

get(arg0: number[], arg1: number, arg2: number): ByteBuffer;

get(arg0: number[]): ByteBuffer;

get(arg0: number, arg1: number[], arg2: number, arg3: number): ByteBuffer;

get(arg0: number, arg1: number[]): ByteBuffer;

put(arg0: ByteBuffer): ByteBuffer;

put(arg0: number, arg1: ByteBuffer, arg2: number, arg3: number): ByteBuffer;

put(arg0: number[], arg1: number, arg2: number): ByteBuffer;

put(arg0: number[]): ByteBuffer;

put(arg0: number, arg1: number[], arg2: number, arg3: number): ByteBuffer;

put(arg0: number, arg1: number[]): ByteBuffer;

hasArray(): boolean;

array(): number[];

arrayOffset(): number;

position(arg0: number): ByteBuffer;

limit(arg0: number): ByteBuffer;

mark(): ByteBuffer;

reset(): ByteBuffer;

clear(): ByteBuffer;

flip(): ByteBuffer;

rewind(): ByteBuffer;

abstract compact(): ByteBuffer;

abstract isDirect(): boolean;
toString(): string;

hashCode(): number;

equals(arg0: Object): boolean;

compareTo(arg0: ByteBuffer): number;

mismatch(arg0: ByteBuffer): number;

order(): ByteOrder;

order(arg0: ByteOrder): ByteBuffer;

alignmentOffset(arg0: number, arg1: number): number;

alignedSlice(arg0: number): ByteBuffer;

abstract getChar(): String;

abstract putChar(arg0: String): ByteBuffer;

abstract getChar(arg0: number): String;

abstract putChar(arg0: number, arg1: String): ByteBuffer;

abstract asCharBuffer(): CharBuffer;

abstract getShort(): number;

abstract putShort(arg0: number): ByteBuffer;

abstract getShort(arg0: number): number;

abstract putShort(arg0: number, arg1: number): ByteBuffer;

abstract asShortBuffer(): ShortBuffer;

abstract getInt(): number;

abstract putInt(arg0: number): ByteBuffer;

abstract getInt(arg0: number): number;

abstract putInt(arg0: number, arg1: number): ByteBuffer;

abstract asIntBuffer(): IntBuffer;

abstract getLong(): number;

abstract putLong(arg0: number): ByteBuffer;

abstract getLong(arg0: number): number;

abstract putLong(arg0: number, arg1: number): ByteBuffer;

abstract asLongBuffer(): LongBuffer;

abstract getFloat(): number;

abstract putFloat(arg0: number): ByteBuffer;

abstract getFloat(arg0: number): number;

abstract putFloat(arg0: number, arg1: number): ByteBuffer;

abstract asFloatBuffer(): FloatBuffer;

abstract getDouble(): number;

abstract putDouble(arg0: number): ByteBuffer;

abstract getDouble(arg0: number): number;

abstract putDouble(arg0: number, arg1: number): ByteBuffer;

abstract asDoubleBuffer(): DoubleBuffer;
 }

export class ByteOrder {
static BIG_ENDIAN:ByteOrder
static LITTLE_ENDIAN:ByteOrder

static nativeOrder(): ByteOrder;
toString(): string;
 }

export interface CharBuffer extends Comparable<CharBuffer>, Appendable, CharSequence, Readable { }
export abstract class CharBuffer extends Buffer implements Comparable<CharBuffer>, Appendable, CharSequence, Readable {

static allocate(arg0: number): CharBuffer;

static wrap(arg0: String[], arg1: number, arg2: number): CharBuffer;

static wrap(arg0: String[]): CharBuffer;

read(arg0: CharBuffer): number;

static wrap(arg0: CharSequence, arg1: number, arg2: number): CharBuffer;

static wrap(arg0: CharSequence): CharBuffer;

abstract slice(): CharBuffer;

abstract slice(arg0: number, arg1: number): CharBuffer;

abstract duplicate(): CharBuffer;

abstract asReadOnlyBuffer(): CharBuffer;

abstract get(): String;

abstract put(arg0: String): CharBuffer;

abstract get(arg0: number): String;

abstract put(arg0: number, arg1: String): CharBuffer;

get(arg0: String[], arg1: number, arg2: number): CharBuffer;

get(arg0: String[]): CharBuffer;

get(arg0: number, arg1: String[], arg2: number, arg3: number): CharBuffer;

get(arg0: number, arg1: String[]): CharBuffer;

put(arg0: CharBuffer): CharBuffer;

put(arg0: number, arg1: CharBuffer, arg2: number, arg3: number): CharBuffer;

put(arg0: String[], arg1: number, arg2: number): CharBuffer;

put(arg0: String[]): CharBuffer;

put(arg0: number, arg1: String[], arg2: number, arg3: number): CharBuffer;

put(arg0: number, arg1: String[]): CharBuffer;

put(arg0: String, arg1: number, arg2: number): CharBuffer;

put(arg0: String): CharBuffer;

hasArray(): boolean;

array(): String[];

arrayOffset(): number;

position(arg0: number): CharBuffer;

limit(arg0: number): CharBuffer;

mark(): CharBuffer;

reset(): CharBuffer;

clear(): CharBuffer;

flip(): CharBuffer;

rewind(): CharBuffer;

abstract compact(): CharBuffer;

abstract isDirect(): boolean;

hashCode(): number;

equals(arg0: Object): boolean;

compareTo(arg0: CharBuffer): number;

mismatch(arg0: CharBuffer): number;
toString(): string;

length(): number;

isEmpty(): boolean;

charAt(arg0: number): String;

abstract subSequence(arg0: number, arg1: number): CharBuffer;

append(arg0: CharSequence): CharBuffer;

append(arg0: CharSequence, arg1: number, arg2: number): CharBuffer;

append(arg0: String): CharBuffer;

abstract order(): ByteOrder;

chars(): IntStream;
 }

export abstract class DoubleBuffer extends Buffer implements Comparable<DoubleBuffer> {

static allocate(arg0: number): DoubleBuffer;

static wrap(arg0: number[], arg1: number, arg2: number): DoubleBuffer;

static wrap(arg0: number[]): DoubleBuffer;

abstract slice(): DoubleBuffer;

abstract slice(arg0: number, arg1: number): DoubleBuffer;

abstract duplicate(): DoubleBuffer;

abstract asReadOnlyBuffer(): DoubleBuffer;

abstract get(): number;

abstract put(arg0: number): DoubleBuffer;

abstract get(arg0: number): number;

abstract put(arg0: number, arg1: number): DoubleBuffer;

get(arg0: number[], arg1: number, arg2: number): DoubleBuffer;

get(arg0: number[]): DoubleBuffer;

get(arg0: number, arg1: number[], arg2: number, arg3: number): DoubleBuffer;

get(arg0: number, arg1: number[]): DoubleBuffer;

put(arg0: DoubleBuffer): DoubleBuffer;

put(arg0: number, arg1: DoubleBuffer, arg2: number, arg3: number): DoubleBuffer;

put(arg0: number[], arg1: number, arg2: number): DoubleBuffer;

put(arg0: number[]): DoubleBuffer;

put(arg0: number, arg1: number[], arg2: number, arg3: number): DoubleBuffer;

put(arg0: number, arg1: number[]): DoubleBuffer;

hasArray(): boolean;

array(): number[];

arrayOffset(): number;

position(arg0: number): DoubleBuffer;

limit(arg0: number): DoubleBuffer;

mark(): DoubleBuffer;

reset(): DoubleBuffer;

clear(): DoubleBuffer;

flip(): DoubleBuffer;

rewind(): DoubleBuffer;

abstract compact(): DoubleBuffer;

abstract isDirect(): boolean;
toString(): string;

hashCode(): number;

equals(arg0: Object): boolean;

compareTo(arg0: DoubleBuffer): number;

mismatch(arg0: DoubleBuffer): number;

abstract order(): ByteOrder;
 }

export abstract class FloatBuffer extends Buffer implements Comparable<FloatBuffer> {

static allocate(arg0: number): FloatBuffer;

static wrap(arg0: number[], arg1: number, arg2: number): FloatBuffer;

static wrap(arg0: number[]): FloatBuffer;

abstract slice(): FloatBuffer;

abstract slice(arg0: number, arg1: number): FloatBuffer;

abstract duplicate(): FloatBuffer;

abstract asReadOnlyBuffer(): FloatBuffer;

abstract get(): number;

abstract put(arg0: number): FloatBuffer;

abstract get(arg0: number): number;

abstract put(arg0: number, arg1: number): FloatBuffer;

get(arg0: number[], arg1: number, arg2: number): FloatBuffer;

get(arg0: number[]): FloatBuffer;

get(arg0: number, arg1: number[], arg2: number, arg3: number): FloatBuffer;

get(arg0: number, arg1: number[]): FloatBuffer;

put(arg0: FloatBuffer): FloatBuffer;

put(arg0: number, arg1: FloatBuffer, arg2: number, arg3: number): FloatBuffer;

put(arg0: number[], arg1: number, arg2: number): FloatBuffer;

put(arg0: number[]): FloatBuffer;

put(arg0: number, arg1: number[], arg2: number, arg3: number): FloatBuffer;

put(arg0: number, arg1: number[]): FloatBuffer;

hasArray(): boolean;

array(): number[];

arrayOffset(): number;

position(arg0: number): FloatBuffer;

limit(arg0: number): FloatBuffer;

mark(): FloatBuffer;

reset(): FloatBuffer;

clear(): FloatBuffer;

flip(): FloatBuffer;

rewind(): FloatBuffer;

abstract compact(): FloatBuffer;

abstract isDirect(): boolean;
toString(): string;

hashCode(): number;

equals(arg0: Object): boolean;

compareTo(arg0: FloatBuffer): number;

mismatch(arg0: FloatBuffer): number;

abstract order(): ByteOrder;
 }

export abstract class IntBuffer extends Buffer implements Comparable<IntBuffer> {

static allocate(arg0: number): IntBuffer;

static wrap(arg0: number[], arg1: number, arg2: number): IntBuffer;

static wrap(arg0: number[]): IntBuffer;

abstract slice(): IntBuffer;

abstract slice(arg0: number, arg1: number): IntBuffer;

abstract duplicate(): IntBuffer;

abstract asReadOnlyBuffer(): IntBuffer;

abstract get(): number;

abstract put(arg0: number): IntBuffer;

abstract get(arg0: number): number;

abstract put(arg0: number, arg1: number): IntBuffer;

get(arg0: number[], arg1: number, arg2: number): IntBuffer;

get(arg0: number[]): IntBuffer;

get(arg0: number, arg1: number[], arg2: number, arg3: number): IntBuffer;

get(arg0: number, arg1: number[]): IntBuffer;

put(arg0: IntBuffer): IntBuffer;

put(arg0: number, arg1: IntBuffer, arg2: number, arg3: number): IntBuffer;

put(arg0: number[], arg1: number, arg2: number): IntBuffer;

put(arg0: number[]): IntBuffer;

put(arg0: number, arg1: number[], arg2: number, arg3: number): IntBuffer;

put(arg0: number, arg1: number[]): IntBuffer;

hasArray(): boolean;

array(): number[];

arrayOffset(): number;

position(arg0: number): IntBuffer;

limit(arg0: number): IntBuffer;

mark(): IntBuffer;

reset(): IntBuffer;

clear(): IntBuffer;

flip(): IntBuffer;

rewind(): IntBuffer;

abstract compact(): IntBuffer;

abstract isDirect(): boolean;
toString(): string;

hashCode(): number;

equals(arg0: Object): boolean;

compareTo(arg0: IntBuffer): number;

mismatch(arg0: IntBuffer): number;

abstract order(): ByteOrder;
 }

export class InvalidMarkException extends IllegalStateException {
constructor();
 }

export abstract class LongBuffer extends Buffer implements Comparable<LongBuffer> {

static allocate(arg0: number): LongBuffer;

static wrap(arg0: number[], arg1: number, arg2: number): LongBuffer;

static wrap(arg0: number[]): LongBuffer;

abstract slice(): LongBuffer;

abstract slice(arg0: number, arg1: number): LongBuffer;

abstract duplicate(): LongBuffer;

abstract asReadOnlyBuffer(): LongBuffer;

abstract get(): number;

abstract put(arg0: number): LongBuffer;

abstract get(arg0: number): number;

abstract put(arg0: number, arg1: number): LongBuffer;

get(arg0: number[], arg1: number, arg2: number): LongBuffer;

get(arg0: number[]): LongBuffer;

get(arg0: number, arg1: number[], arg2: number, arg3: number): LongBuffer;

get(arg0: number, arg1: number[]): LongBuffer;

put(arg0: LongBuffer): LongBuffer;

put(arg0: number, arg1: LongBuffer, arg2: number, arg3: number): LongBuffer;

put(arg0: number[], arg1: number, arg2: number): LongBuffer;

put(arg0: number[]): LongBuffer;

put(arg0: number, arg1: number[], arg2: number, arg3: number): LongBuffer;

put(arg0: number, arg1: number[]): LongBuffer;

hasArray(): boolean;

array(): number[];

arrayOffset(): number;

position(arg0: number): LongBuffer;

limit(arg0: number): LongBuffer;

mark(): LongBuffer;

reset(): LongBuffer;

clear(): LongBuffer;

flip(): LongBuffer;

rewind(): LongBuffer;

abstract compact(): LongBuffer;

abstract isDirect(): boolean;
toString(): string;

hashCode(): number;

equals(arg0: Object): boolean;

compareTo(arg0: LongBuffer): number;

mismatch(arg0: LongBuffer): number;

abstract order(): ByteOrder;
 }

export abstract class MappedByteBuffer extends ByteBuffer {

isLoaded(): boolean;

load(): MappedByteBuffer;

force(): MappedByteBuffer;

force(arg0: number, arg1: number): MappedByteBuffer;

position(arg0: number): MappedByteBuffer;

limit(arg0: number): MappedByteBuffer;

mark(): MappedByteBuffer;

reset(): MappedByteBuffer;

clear(): MappedByteBuffer;

flip(): MappedByteBuffer;

rewind(): MappedByteBuffer;

abstract slice(): MappedByteBuffer;

abstract slice(arg0: number, arg1: number): MappedByteBuffer;

abstract duplicate(): MappedByteBuffer;

abstract compact(): MappedByteBuffer;
 }

export class ReadOnlyBufferException extends UnsupportedOperationException {
constructor();
 }

export abstract class ShortBuffer extends Buffer implements Comparable<ShortBuffer> {

static allocate(arg0: number): ShortBuffer;

static wrap(arg0: number[], arg1: number, arg2: number): ShortBuffer;

static wrap(arg0: number[]): ShortBuffer;

abstract slice(): ShortBuffer;

abstract slice(arg0: number, arg1: number): ShortBuffer;

abstract duplicate(): ShortBuffer;

abstract asReadOnlyBuffer(): ShortBuffer;

abstract get(): number;

abstract put(arg0: number): ShortBuffer;

abstract get(arg0: number): number;

abstract put(arg0: number, arg1: number): ShortBuffer;

get(arg0: number[], arg1: number, arg2: number): ShortBuffer;

get(arg0: number[]): ShortBuffer;

get(arg0: number, arg1: number[], arg2: number, arg3: number): ShortBuffer;

get(arg0: number, arg1: number[]): ShortBuffer;

put(arg0: ShortBuffer): ShortBuffer;

put(arg0: number, arg1: ShortBuffer, arg2: number, arg3: number): ShortBuffer;

put(arg0: number[], arg1: number, arg2: number): ShortBuffer;

put(arg0: number[]): ShortBuffer;

put(arg0: number, arg1: number[], arg2: number, arg3: number): ShortBuffer;

put(arg0: number, arg1: number[]): ShortBuffer;

hasArray(): boolean;

array(): number[];

arrayOffset(): number;

position(arg0: number): ShortBuffer;

limit(arg0: number): ShortBuffer;

mark(): ShortBuffer;

reset(): ShortBuffer;

clear(): ShortBuffer;

flip(): ShortBuffer;

rewind(): ShortBuffer;

abstract compact(): ShortBuffer;

abstract isDirect(): boolean;
toString(): string;

hashCode(): number;

equals(arg0: Object): boolean;

compareTo(arg0: ShortBuffer): number;

mismatch(arg0: ShortBuffer): number;

abstract order(): ByteOrder;
 }

}
