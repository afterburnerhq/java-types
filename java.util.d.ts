/// <reference path="java.security.d.ts" />
/// <reference path="java.util.stream.d.ts" />
/// <reference path="java.util.random.d.ts" />
/// <reference path="java.nio.d.ts" />
/// <reference path="java.nio.channels.d.ts" />
/// <reference path="java.nio.file.d.ts" />
/// <reference path="java.nio.charset.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.time.d.ts" />
/// <reference path="java.util.regex.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.util.function.d.ts" />
/// <reference path="java.math.d.ts" />
declare module '@afterburnerhq/java.util' { 
import { Permission, BasicPermission, PermissionCollection } from '@afterburnerhq/java.security'
import { Stream, DoubleStream, LongStream, IntStream } from '@afterburnerhq/java.util.stream'
import { RandomGenerator } from '@afterburnerhq/java.util.random'
import { ByteBuffer, LongBuffer } from '@afterburnerhq/java.nio'
import { ReadableByteChannel } from '@afterburnerhq/java.nio.channels'
import { Path } from '@afterburnerhq/java.nio.file'
import { Charset } from '@afterburnerhq/java.nio.charset'
import { Enum, IllegalStateException, Comparable, Iterable, Character, Appendable, CharSequence, Error, String, Double, Exception, Integer, RuntimeException, Runnable, Long, Throwable, ClassLoader, Cloneable, Class, Readable, ModuleLayer, Boolean, Module, IllegalArgumentException } from '@afterburnerhq/java.lang'
import { ZoneId, ZonedDateTime, Instant } from '@afterburnerhq/java.time'
import { Pattern, MatchResult } from '@afterburnerhq/java.util.regex'
import { PrintStream, Serializable, InputStream, OutputStream, Closeable, Reader, IOException, Flushable, File, Writer, PrintWriter } from '@afterburnerhq/java.io'
import { LongBinaryOperator, IntSupplier, IntUnaryOperator, IntToDoubleFunction, Predicate, IntConsumer, Function, ToLongFunction, LongConsumer, DoubleBinaryOperator, DoubleConsumer, Consumer, BiFunction, DoubleSupplier, IntFunction, IntBinaryOperator, IntToLongFunction, ToIntFunction, Supplier, UnaryOperator, BinaryOperator, LongSupplier, BiConsumer, ToDoubleFunction } from '@afterburnerhq/java.util.function'
import { BigInteger, BigDecimal } from '@afterburnerhq/java.math'
export interface AbstractCollection<E extends Object> extends Collection<E> { }
export abstract class AbstractCollection<E extends Object> extends Object implements Collection<E> {

abstract iterator(): Iterator<E>;

abstract size(): number;

isEmpty(): boolean;

contains(arg0: Object): boolean;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];

add(arg0: E): boolean;

remove(arg0: Object): boolean;

containsAll(arg0: Collection<any>): boolean;

addAll(arg0: Collection<E>): boolean;

removeAll(arg0: Collection<any>): boolean;

retainAll(arg0: Collection<any>): boolean;

clear(): void;
toString(): string;
 }

export interface AbstractList<E extends Object> extends List<E> { }
export abstract class AbstractList<E extends Object> extends AbstractCollection<E> implements List<E> {

add(arg0: E): boolean;

abstract get(arg0: number): E;

set(arg0: number, arg1: E): E;

add(arg0: number, arg1: E): void;

remove(arg0: number): E;

indexOf(arg0: Object): number;

lastIndexOf(arg0: Object): number;

clear(): void;

addAll(arg0: number, arg1: Collection<E>): boolean;

iterator(): Iterator<E>;

listIterator(): ListIterator<E>;

listIterator(arg0: number): ListIterator<E>;

subList(arg0: number, arg1: number): List<E>;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export interface AbstractMap<K extends Object, V extends Object> extends Map<K, V> { }
export abstract class AbstractMap<K extends Object, V extends Object> extends Object implements Map<K, V> {

size(): number;

isEmpty(): boolean;

containsValue(arg0: Object): boolean;

containsKey(arg0: Object): boolean;

get(arg0: Object): V;

put(arg0: K, arg1: V): V;

remove(arg0: Object): V;

putAll(arg0: Map<K, V>): void;

clear(): void;

keySet(): Set<K>;

values(): Collection<V>;

abstract entrySet(): Set<Map.Entry<K, V>>;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }
export namespace AbstractMap { 
export class SimpleEntry<K extends Object, V extends Object> extends Object implements Map.Entry<K, V>, Serializable {
constructor(arg0: K, arg1: V);
constructor(arg0: Map.Entry<K, V>);

getKey(): K;

getValue(): V;

setValue(arg0: V): V;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class SimpleImmutableEntry<K extends Object, V extends Object> extends Object implements Map.Entry<K, V>, Serializable {
constructor(arg0: K, arg1: V);
constructor(arg0: Map.Entry<K, V>);

getKey(): K;

getValue(): V;

setValue(arg0: V): V;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

}

export interface AbstractQueue<E extends Object> extends Queue<E> { }
export abstract class AbstractQueue<E extends Object> extends AbstractCollection<E> implements Queue<E> {

add(arg0: E): boolean;

remove(): E;

element(): E;

clear(): void;

addAll(arg0: Collection<E>): boolean;
 }

export interface AbstractSequentialList<E extends Object> { }
export abstract class AbstractSequentialList<E extends Object> extends AbstractList<E> {

get(arg0: number): E;

set(arg0: number, arg1: E): E;

add(arg0: number, arg1: E): void;

remove(arg0: number): E;

addAll(arg0: number, arg1: Collection<E>): boolean;

iterator(): Iterator<E>;

abstract listIterator(arg0: number): ListIterator<E>;
 }

export interface AbstractSet<E extends Object> extends Set<E> { }
export abstract class AbstractSet<E extends Object> extends AbstractCollection<E> implements Set<E> {

equals(arg0: Object): boolean;

hashCode(): number;

removeAll(arg0: Collection<any>): boolean;
 }

export interface ArrayDeque<E extends Object> extends Deque<E>, Cloneable, Serializable { }
export class ArrayDeque<E extends Object> extends AbstractCollection<E> implements Deque<E>, Cloneable, Serializable {
constructor();
constructor(arg0: number);
constructor(arg0: Collection<E>);

addFirst(arg0: E): void;

addLast(arg0: E): void;

addAll(arg0: Collection<E>): boolean;

offerFirst(arg0: E): boolean;

offerLast(arg0: E): boolean;

removeFirst(): E;

removeLast(): E;

pollFirst(): E;

pollLast(): E;

getFirst(): E;

getLast(): E;

peekFirst(): E;

peekLast(): E;

removeFirstOccurrence(arg0: Object): boolean;

removeLastOccurrence(arg0: Object): boolean;

add(arg0: E): boolean;

offer(arg0: E): boolean;

remove(): E;

poll(): E;

element(): E;

peek(): E;

push(arg0: E): void;

pop(): E;

size(): number;

isEmpty(): boolean;

iterator(): Iterator<E>;

descendingIterator(): Iterator<E>;

spliterator(): Spliterator<E>;

forEach(arg0: Consumer<E>): void;

removeIf(arg0: Predicate<E>): boolean;

removeAll(arg0: Collection<any>): boolean;

retainAll(arg0: Collection<any>): boolean;

contains(arg0: Object): boolean;

remove(arg0: Object): boolean;

clear(): void;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];

clone(): ArrayDeque<E>;
 }

export interface ArrayList<E extends Object> extends List<E>, RandomAccess, Cloneable, Serializable { }
export class ArrayList<E extends Object> extends AbstractList<E> implements List<E>, RandomAccess, Cloneable, Serializable {
constructor(arg0: number);
constructor();
constructor(arg0: Collection<E>);

trimToSize(): void;

ensureCapacity(arg0: number): void;

size(): number;

isEmpty(): boolean;

contains(arg0: Object): boolean;

indexOf(arg0: Object): number;

lastIndexOf(arg0: Object): number;

clone(): Object;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];

get(arg0: number): E;

set(arg0: number, arg1: E): E;

add(arg0: E): boolean;

add(arg0: number, arg1: E): void;

remove(arg0: number): E;

equals(arg0: Object): boolean;

hashCode(): number;

remove(arg0: Object): boolean;

clear(): void;

addAll(arg0: Collection<E>): boolean;

addAll(arg0: number, arg1: Collection<E>): boolean;

removeAll(arg0: Collection<any>): boolean;

retainAll(arg0: Collection<any>): boolean;

listIterator(arg0: number): ListIterator<E>;

listIterator(): ListIterator<E>;

iterator(): Iterator<E>;

subList(arg0: number, arg1: number): List<E>;

forEach(arg0: Consumer<E>): void;

spliterator(): Spliterator<E>;

removeIf(arg0: Predicate<E>): boolean;

replaceAll(arg0: UnaryOperator<E>): void;

sort(arg0: Comparator<E>): void;
 }

export class Arrays {

static sort(arg0: number[]): void;

static sort(arg0: number[], arg1: number, arg2: number): void;

static sort(arg0: number[]): void;

static sort(arg0: number[], arg1: number, arg2: number): void;

static sort(arg0: number[]): void;

static sort(arg0: number[], arg1: number, arg2: number): void;

static sort(arg0: String[]): void;

static sort(arg0: String[], arg1: number, arg2: number): void;

static sort(arg0: number[]): void;

static sort(arg0: number[], arg1: number, arg2: number): void;

static sort(arg0: number[]): void;

static sort(arg0: number[], arg1: number, arg2: number): void;

static sort(arg0: number[]): void;

static sort(arg0: number[], arg1: number, arg2: number): void;

static parallelSort(arg0: number[]): void;

static parallelSort(arg0: number[], arg1: number, arg2: number): void;

static parallelSort(arg0: String[]): void;

static parallelSort(arg0: String[], arg1: number, arg2: number): void;

static parallelSort(arg0: number[]): void;

static parallelSort(arg0: number[], arg1: number, arg2: number): void;

static parallelSort(arg0: number[]): void;

static parallelSort(arg0: number[], arg1: number, arg2: number): void;

static parallelSort(arg0: number[]): void;

static parallelSort(arg0: number[], arg1: number, arg2: number): void;

static parallelSort(arg0: number[]): void;

static parallelSort(arg0: number[], arg1: number, arg2: number): void;

static parallelSort(arg0: number[]): void;

static parallelSort(arg0: number[], arg1: number, arg2: number): void;

static parallelSort<T extends Comparable<T>>(arg0: T[]): void;

static parallelSort<T extends Comparable<T>>(arg0: T[], arg1: number, arg2: number): void;

static parallelSort<T extends Object>(arg0: T[], arg1: Comparator<T>): void;

static parallelSort<T extends Object>(arg0: T[], arg1: number, arg2: number, arg3: Comparator<T>): void;

static sort(arg0: Object[]): void;

static sort(arg0: Object[], arg1: number, arg2: number): void;

static sort<T extends Object>(arg0: T[], arg1: Comparator<T>): void;

static sort<T extends Object>(arg0: T[], arg1: number, arg2: number, arg3: Comparator<T>): void;

static parallelPrefix<T extends Object>(arg0: T[], arg1: BinaryOperator<T>): void;

static parallelPrefix<T extends Object>(arg0: T[], arg1: number, arg2: number, arg3: BinaryOperator<T>): void;

static parallelPrefix(arg0: number[], arg1: LongBinaryOperator): void;

static parallelPrefix(arg0: number[], arg1: number, arg2: number, arg3: LongBinaryOperator): void;

static parallelPrefix(arg0: number[], arg1: DoubleBinaryOperator): void;

static parallelPrefix(arg0: number[], arg1: number, arg2: number, arg3: DoubleBinaryOperator): void;

static parallelPrefix(arg0: number[], arg1: IntBinaryOperator): void;

static parallelPrefix(arg0: number[], arg1: number, arg2: number, arg3: IntBinaryOperator): void;

static binarySearch(arg0: number[], arg1: number): number;

static binarySearch(arg0: number[], arg1: number, arg2: number, arg3: number): number;

static binarySearch(arg0: number[], arg1: number): number;

static binarySearch(arg0: number[], arg1: number, arg2: number, arg3: number): number;

static binarySearch(arg0: number[], arg1: number): number;

static binarySearch(arg0: number[], arg1: number, arg2: number, arg3: number): number;

static binarySearch(arg0: String[], arg1: String): number;

static binarySearch(arg0: String[], arg1: number, arg2: number, arg3: String): number;

static binarySearch(arg0: number[], arg1: number): number;

static binarySearch(arg0: number[], arg1: number, arg2: number, arg3: number): number;

static binarySearch(arg0: number[], arg1: number): number;

static binarySearch(arg0: number[], arg1: number, arg2: number, arg3: number): number;

static binarySearch(arg0: number[], arg1: number): number;

static binarySearch(arg0: number[], arg1: number, arg2: number, arg3: number): number;

static binarySearch(arg0: Object[], arg1: Object): number;

static binarySearch(arg0: Object[], arg1: number, arg2: number, arg3: Object): number;

static binarySearch<T extends Object>(arg0: T[], arg1: T, arg2: Comparator<T>): number;

static binarySearch<T extends Object>(arg0: T[], arg1: number, arg2: number, arg3: T, arg4: Comparator<T>): number;

static equals(arg0: number[], arg1: number[]): boolean;

static equals(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): boolean;

static equals(arg0: number[], arg1: number[]): boolean;

static equals(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): boolean;

static equals(arg0: number[], arg1: number[]): boolean;

static equals(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): boolean;

static equals(arg0: String[], arg1: String[]): boolean;

static equals(arg0: String[], arg1: number, arg2: number, arg3: String[], arg4: number, arg5: number): boolean;

static equals(arg0: number[], arg1: number[]): boolean;

static equals(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): boolean;

static equals(arg0: boolean[], arg1: boolean[]): boolean;

static equals(arg0: boolean[], arg1: number, arg2: number, arg3: boolean[], arg4: number, arg5: number): boolean;

static equals(arg0: number[], arg1: number[]): boolean;

static equals(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): boolean;

static equals(arg0: number[], arg1: number[]): boolean;

static equals(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): boolean;

static equals(arg0: Object[], arg1: Object[]): boolean;

static equals(arg0: Object[], arg1: number, arg2: number, arg3: Object[], arg4: number, arg5: number): boolean;

static equals<T extends Object>(arg0: T[], arg1: T[], arg2: Comparator<T>): boolean;

static equals<T extends Object>(arg0: T[], arg1: number, arg2: number, arg3: T[], arg4: number, arg5: number, arg6: Comparator<T>): boolean;

static fill(arg0: number[], arg1: number): void;

static fill(arg0: number[], arg1: number, arg2: number, arg3: number): void;

static fill(arg0: number[], arg1: number): void;

static fill(arg0: number[], arg1: number, arg2: number, arg3: number): void;

static fill(arg0: number[], arg1: number): void;

static fill(arg0: number[], arg1: number, arg2: number, arg3: number): void;

static fill(arg0: String[], arg1: String): void;

static fill(arg0: String[], arg1: number, arg2: number, arg3: String): void;

static fill(arg0: number[], arg1: number): void;

static fill(arg0: number[], arg1: number, arg2: number, arg3: number): void;

static fill(arg0: boolean[], arg1: boolean): void;

static fill(arg0: boolean[], arg1: number, arg2: number, arg3: boolean): void;

static fill(arg0: number[], arg1: number): void;

static fill(arg0: number[], arg1: number, arg2: number, arg3: number): void;

static fill(arg0: number[], arg1: number): void;

static fill(arg0: number[], arg1: number, arg2: number, arg3: number): void;

static fill(arg0: Object[], arg1: Object): void;

static fill(arg0: Object[], arg1: number, arg2: number, arg3: Object): void;

static copyOf<T extends Object>(arg0: T[], arg1: number): T[];

static copyOf<T extends Object, U extends Object>(arg0: U[], arg1: number, arg2: Class<T[]>): T[];

static copyOf(arg0: number[], arg1: number): number[];

static copyOf(arg0: number[], arg1: number): number[];

static copyOf(arg0: number[], arg1: number): number[];

static copyOf(arg0: number[], arg1: number): number[];

static copyOf(arg0: String[], arg1: number): String[];

static copyOf(arg0: number[], arg1: number): number[];

static copyOf(arg0: number[], arg1: number): number[];

static copyOf(arg0: boolean[], arg1: number): boolean[];

static copyOfRange<T extends Object>(arg0: T[], arg1: number, arg2: number): T[];

static copyOfRange<T extends Object, U extends Object>(arg0: U[], arg1: number, arg2: number, arg3: Class<T[]>): T[];

static copyOfRange(arg0: number[], arg1: number, arg2: number): number[];

static copyOfRange(arg0: number[], arg1: number, arg2: number): number[];

static copyOfRange(arg0: number[], arg1: number, arg2: number): number[];

static copyOfRange(arg0: number[], arg1: number, arg2: number): number[];

static copyOfRange(arg0: String[], arg1: number, arg2: number): String[];

static copyOfRange(arg0: number[], arg1: number, arg2: number): number[];

static copyOfRange(arg0: number[], arg1: number, arg2: number): number[];

static copyOfRange(arg0: boolean[], arg1: number, arg2: number): boolean[];

static asList<T extends Object>(arg0: T[]): List<T>;

static hashCode(arg0: number[]): number;

static hashCode(arg0: number[]): number;

static hashCode(arg0: number[]): number;

static hashCode(arg0: String[]): number;

static hashCode(arg0: number[]): number;

static hashCode(arg0: boolean[]): number;

static hashCode(arg0: number[]): number;

static hashCode(arg0: number[]): number;

static hashCode(arg0: Object[]): number;

static deepHashCode(arg0: Object[]): number;

static deepEquals(arg0: Object[], arg1: Object[]): boolean;

static toString(arg0: number[]): String;

static toString(arg0: number[]): String;

static toString(arg0: number[]): String;

static toString(arg0: String[]): String;

static toString(arg0: number[]): String;

static toString(arg0: boolean[]): String;

static toString(arg0: number[]): String;

static toString(arg0: number[]): String;

static toString(arg0: Object[]): String;

static deepToString(arg0: Object[]): String;

static setAll<T extends Object>(arg0: T[], arg1: IntFunction<T>): void;

static parallelSetAll<T extends Object>(arg0: T[], arg1: IntFunction<T>): void;

static setAll(arg0: number[], arg1: IntUnaryOperator): void;

static parallelSetAll(arg0: number[], arg1: IntUnaryOperator): void;

static setAll(arg0: number[], arg1: IntToLongFunction): void;

static parallelSetAll(arg0: number[], arg1: IntToLongFunction): void;

static setAll(arg0: number[], arg1: IntToDoubleFunction): void;

static parallelSetAll(arg0: number[], arg1: IntToDoubleFunction): void;

static spliterator<T extends Object>(arg0: T[]): Spliterator<T>;

static spliterator<T extends Object>(arg0: T[], arg1: number, arg2: number): Spliterator<T>;

static spliterator(arg0: number[]): Spliterator.OfInt;

static spliterator(arg0: number[], arg1: number, arg2: number): Spliterator.OfInt;

static spliterator(arg0: number[]): Spliterator.OfLong;

static spliterator(arg0: number[], arg1: number, arg2: number): Spliterator.OfLong;

static spliterator(arg0: number[]): Spliterator.OfDouble;

static spliterator(arg0: number[], arg1: number, arg2: number): Spliterator.OfDouble;

static stream<T extends Object>(arg0: T[]): Stream<T>;

static stream<T extends Object>(arg0: T[], arg1: number, arg2: number): Stream<T>;

static stream(arg0: number[]): IntStream;

static stream(arg0: number[], arg1: number, arg2: number): IntStream;

static stream(arg0: number[]): LongStream;

static stream(arg0: number[], arg1: number, arg2: number): LongStream;

static stream(arg0: number[]): DoubleStream;

static stream(arg0: number[], arg1: number, arg2: number): DoubleStream;

static compare(arg0: boolean[], arg1: boolean[]): number;

static compare(arg0: boolean[], arg1: number, arg2: number, arg3: boolean[], arg4: number, arg5: number): number;

static compare(arg0: number[], arg1: number[]): number;

static compare(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;

static compareUnsigned(arg0: number[], arg1: number[]): number;

static compareUnsigned(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;

static compare(arg0: number[], arg1: number[]): number;

static compare(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;

static compareUnsigned(arg0: number[], arg1: number[]): number;

static compareUnsigned(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;

static compare(arg0: String[], arg1: String[]): number;

static compare(arg0: String[], arg1: number, arg2: number, arg3: String[], arg4: number, arg5: number): number;

static compare(arg0: number[], arg1: number[]): number;

static compare(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;

static compareUnsigned(arg0: number[], arg1: number[]): number;

static compareUnsigned(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;

static compare(arg0: number[], arg1: number[]): number;

static compare(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;

static compareUnsigned(arg0: number[], arg1: number[]): number;

static compareUnsigned(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;

static compare(arg0: number[], arg1: number[]): number;

static compare(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;

static compare(arg0: number[], arg1: number[]): number;

static compare(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;

static compare<T extends Comparable<T>>(arg0: T[], arg1: T[]): number;

static compare<T extends Comparable<T>>(arg0: T[], arg1: number, arg2: number, arg3: T[], arg4: number, arg5: number): number;

static compare<T extends Object>(arg0: T[], arg1: T[], arg2: Comparator<T>): number;

static compare<T extends Object>(arg0: T[], arg1: number, arg2: number, arg3: T[], arg4: number, arg5: number, arg6: Comparator<T>): number;

static mismatch(arg0: boolean[], arg1: boolean[]): number;

static mismatch(arg0: boolean[], arg1: number, arg2: number, arg3: boolean[], arg4: number, arg5: number): number;

static mismatch(arg0: number[], arg1: number[]): number;

static mismatch(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;

static mismatch(arg0: String[], arg1: String[]): number;

static mismatch(arg0: String[], arg1: number, arg2: number, arg3: String[], arg4: number, arg5: number): number;

static mismatch(arg0: number[], arg1: number[]): number;

static mismatch(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;

static mismatch(arg0: number[], arg1: number[]): number;

static mismatch(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;

static mismatch(arg0: number[], arg1: number[]): number;

static mismatch(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;

static mismatch(arg0: number[], arg1: number[]): number;

static mismatch(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;

static mismatch(arg0: number[], arg1: number[]): number;

static mismatch(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;

static mismatch(arg0: Object[], arg1: Object[]): number;

static mismatch(arg0: Object[], arg1: number, arg2: number, arg3: Object[], arg4: number, arg5: number): number;

static mismatch<T extends Object>(arg0: T[], arg1: T[], arg2: Comparator<T>): number;

static mismatch<T extends Object>(arg0: T[], arg1: number, arg2: number, arg3: T[], arg4: number, arg5: number, arg6: Comparator<T>): number;
 }

export class Base64 {

static getEncoder(): Base64.Encoder;

static getUrlEncoder(): Base64.Encoder;

static getMimeEncoder(): Base64.Encoder;

static getMimeEncoder(arg0: number, arg1: number[]): Base64.Encoder;

static getDecoder(): Base64.Decoder;

static getUrlDecoder(): Base64.Decoder;

static getMimeDecoder(): Base64.Decoder;
 }
export namespace Base64 { 
export class Decoder {

decode(arg0: number[]): number[];

decode(arg0: String): number[];

decode(arg0: number[], arg1: number[]): number;

decode(arg0: ByteBuffer): ByteBuffer;

wrap(arg0: InputStream): InputStream;
 }

export class Encoder {

encode(arg0: number[]): number[];

encode(arg0: number[], arg1: number[]): number;

encodeToString(arg0: number[]): String;

encode(arg0: ByteBuffer): ByteBuffer;

wrap(arg0: OutputStream): OutputStream;

withoutPadding(): Base64.Encoder;
 }

}

export class BitSet implements Cloneable, Serializable {
constructor();
constructor(arg0: number);

static valueOf(arg0: number[]): BitSet;

static valueOf(arg0: LongBuffer): BitSet;

static valueOf(arg0: number[]): BitSet;

static valueOf(arg0: ByteBuffer): BitSet;

toByteArray(): number[];

toLongArray(): number[];

flip(arg0: number): void;

flip(arg0: number, arg1: number): void;

set(arg0: number): void;

set(arg0: number, arg1: boolean): void;

set(arg0: number, arg1: number): void;

set(arg0: number, arg1: number, arg2: boolean): void;

clear(arg0: number): void;

clear(arg0: number, arg1: number): void;

clear(): void;

get(arg0: number): boolean;

get(arg0: number, arg1: number): BitSet;

nextSetBit(arg0: number): number;

nextClearBit(arg0: number): number;

previousSetBit(arg0: number): number;

previousClearBit(arg0: number): number;

length(): number;

isEmpty(): boolean;

intersects(arg0: BitSet): boolean;

cardinality(): number;

and(arg0: BitSet): void;

or(arg0: BitSet): void;

xor(arg0: BitSet): void;

andNot(arg0: BitSet): void;

hashCode(): number;

size(): number;

equals(arg0: Object): boolean;

clone(): Object;
toString(): string;

stream(): IntStream;
 }

export abstract class Calendar extends Object implements Serializable, Cloneable, Comparable<Calendar> {
static ERA:number
static YEAR:number
static MONTH:number
static WEEK_OF_YEAR:number
static WEEK_OF_MONTH:number
static DATE:number
static DAY_OF_MONTH:number
static DAY_OF_YEAR:number
static DAY_OF_WEEK:number
static DAY_OF_WEEK_IN_MONTH:number
static AM_PM:number
static HOUR:number
static HOUR_OF_DAY:number
static MINUTE:number
static SECOND:number
static MILLISECOND:number
static ZONE_OFFSET:number
static DST_OFFSET:number
static FIELD_COUNT:number
static SUNDAY:number
static MONDAY:number
static TUESDAY:number
static WEDNESDAY:number
static THURSDAY:number
static FRIDAY:number
static SATURDAY:number
static JANUARY:number
static FEBRUARY:number
static MARCH:number
static APRIL:number
static MAY:number
static JUNE:number
static JULY:number
static AUGUST:number
static SEPTEMBER:number
static OCTOBER:number
static NOVEMBER:number
static DECEMBER:number
static UNDECIMBER:number
static AM:number
static PM:number
static ALL_STYLES:number
static SHORT:number
static LONG:number
static NARROW_FORMAT:number
static NARROW_STANDALONE:number
static SHORT_FORMAT:number
static LONG_FORMAT:number
static SHORT_STANDALONE:number
static LONG_STANDALONE:number

static getInstance(): Calendar;

static getInstance(arg0: TimeZone): Calendar;

static getInstance(arg0: Locale): Calendar;

static getInstance(arg0: TimeZone, arg1: Locale): Calendar;

static getAvailableLocales(): Locale[];

getTime(): Date;

setTime(arg0: Date): void;

getTimeInMillis(): number;

setTimeInMillis(arg0: number): void;

get(arg0: number): number;

set(arg0: number, arg1: number): void;

set(arg0: number, arg1: number, arg2: number): void;

set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;

set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

clear(): void;

clear(arg0: number): void;

isSet(arg0: number): boolean;

getDisplayName(arg0: number, arg1: number, arg2: Locale): String;

getDisplayNames(arg0: number, arg1: number, arg2: Locale): Map<String, Number>;

static getAvailableCalendarTypes(): Set<String>;

getCalendarType(): String;

equals(arg0: Object): boolean;

hashCode(): number;

before(arg0: Object): boolean;

after(arg0: Object): boolean;

compareTo(arg0: Calendar): number;

abstract add(arg0: number, arg1: number): void;

abstract roll(arg0: number, arg1: boolean): void;

roll(arg0: number, arg1: number): void;

setTimeZone(arg0: TimeZone): void;

getTimeZone(): TimeZone;

setLenient(arg0: boolean): void;

isLenient(): boolean;

setFirstDayOfWeek(arg0: number): void;

getFirstDayOfWeek(): number;

setMinimalDaysInFirstWeek(arg0: number): void;

getMinimalDaysInFirstWeek(): number;

isWeekDateSupported(): boolean;

getWeekYear(): number;

setWeekDate(arg0: number, arg1: number, arg2: number): void;

getWeeksInWeekYear(): number;

abstract getMinimum(arg0: number): number;

abstract getMaximum(arg0: number): number;

abstract getGreatestMinimum(arg0: number): number;

abstract getLeastMaximum(arg0: number): number;

getActualMinimum(arg0: number): number;

getActualMaximum(arg0: number): number;

clone(): Object;
toString(): string;

toInstant(): Instant;
 }
export namespace Calendar { 
export class Builder {
constructor();

setInstant(arg0: number): Calendar.Builder;

setInstant(arg0: Date): Calendar.Builder;

set(arg0: number, arg1: number): Calendar.Builder;

setFields(arg0: number[]): Calendar.Builder;

setDate(arg0: number, arg1: number, arg2: number): Calendar.Builder;

setTimeOfDay(arg0: number, arg1: number, arg2: number): Calendar.Builder;

setTimeOfDay(arg0: number, arg1: number, arg2: number, arg3: number): Calendar.Builder;

setWeekDate(arg0: number, arg1: number, arg2: number): Calendar.Builder;

setTimeZone(arg0: TimeZone): Calendar.Builder;

setLenient(arg0: boolean): Calendar.Builder;

setCalendarType(arg0: String): Calendar.Builder;

setLocale(arg0: Locale): Calendar.Builder;

setWeekDefinition(arg0: number, arg1: number): Calendar.Builder;

build(): Calendar;
 }

}

export interface Collection<E extends Object> extends Iterable<E>, Object {

size(): number;

isEmpty(): boolean;

contains(arg0: Object): boolean;

iterator(): Iterator<E>;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];

/* default */ toArray<T extends Object>(arg0: IntFunction<T[]>): T[];

add(arg0: E): boolean;

remove(arg0: Object): boolean;

containsAll(arg0: Collection<any>): boolean;

addAll(arg0: Collection<E>): boolean;

removeAll(arg0: Collection<any>): boolean;

/* default */ removeIf(arg0: Predicate<E>): boolean;

retainAll(arg0: Collection<any>): boolean;

clear(): void;

equals(arg0: Object): boolean;

hashCode(): number;

/* default */ spliterator(): Spliterator<E>;

/* default */ stream(): Stream<E>;

/* default */ parallelStream(): Stream<E>;
 }

export class Collections {
static EMPTY_SET:Set
static EMPTY_LIST:List
static EMPTY_MAP:Map

static sort<T extends Comparable<T>>(arg0: List<T>): void;

static sort<T extends Object>(arg0: List<T>, arg1: Comparator<T>): void;

static binarySearch<T extends Object>(arg0: List<Comparable<T>>, arg1: T): number;

static binarySearch<T extends Object>(arg0: List<T>, arg1: T, arg2: Comparator<T>): number;

static reverse(arg0: List<any>): void;

static shuffle(arg0: List<any>): void;

static shuffle(arg0: List<any>, arg1: Random): void;

static swap(arg0: List<any>, arg1: number, arg2: number): void;

static fill<T extends Object>(arg0: List<T>, arg1: T): void;

static copy<T extends Object>(arg0: List<T>, arg1: List<T>): void;

static min<T extends Comparable<T> & Object>(arg0: Collection<T>): T;

static min<T extends Object>(arg0: Collection<T>, arg1: Comparator<T>): T;

static max<T extends Comparable<T> & Object>(arg0: Collection<T>): T;

static max<T extends Object>(arg0: Collection<T>, arg1: Comparator<T>): T;

static rotate(arg0: List<any>, arg1: number): void;

static replaceAll<T extends Object>(arg0: List<T>, arg1: T, arg2: T): boolean;

static indexOfSubList(arg0: List<any>, arg1: List<any>): number;

static lastIndexOfSubList(arg0: List<any>, arg1: List<any>): number;

static unmodifiableCollection<T extends Object>(arg0: Collection<T>): Collection<T>;

static unmodifiableSet<T extends Object>(arg0: Set<T>): Set<T>;

static unmodifiableSortedSet<T extends Object>(arg0: SortedSet<T>): SortedSet<T>;

static unmodifiableNavigableSet<T extends Object>(arg0: NavigableSet<T>): NavigableSet<T>;

static unmodifiableList<T extends Object>(arg0: List<T>): List<T>;

static unmodifiableMap<K extends Object, V extends Object>(arg0: Map<K, V>): Map<K, V>;

static unmodifiableSortedMap<K extends Object, V extends Object>(arg0: SortedMap<K, V>): SortedMap<K, V>;

static unmodifiableNavigableMap<K extends Object, V extends Object>(arg0: NavigableMap<K, V>): NavigableMap<K, V>;

static synchronizedCollection<T extends Object>(arg0: Collection<T>): Collection<T>;

static synchronizedSet<T extends Object>(arg0: Set<T>): Set<T>;

static synchronizedSortedSet<T extends Object>(arg0: SortedSet<T>): SortedSet<T>;

static synchronizedNavigableSet<T extends Object>(arg0: NavigableSet<T>): NavigableSet<T>;

static synchronizedList<T extends Object>(arg0: List<T>): List<T>;

static synchronizedMap<K extends Object, V extends Object>(arg0: Map<K, V>): Map<K, V>;

static synchronizedSortedMap<K extends Object, V extends Object>(arg0: SortedMap<K, V>): SortedMap<K, V>;

static synchronizedNavigableMap<K extends Object, V extends Object>(arg0: NavigableMap<K, V>): NavigableMap<K, V>;

static checkedCollection<E extends Object>(arg0: Collection<E>, arg1: Class<E>): Collection<E>;

static checkedQueue<E extends Object>(arg0: Queue<E>, arg1: Class<E>): Queue<E>;

static checkedSet<E extends Object>(arg0: Set<E>, arg1: Class<E>): Set<E>;

static checkedSortedSet<E extends Object>(arg0: SortedSet<E>, arg1: Class<E>): SortedSet<E>;

static checkedNavigableSet<E extends Object>(arg0: NavigableSet<E>, arg1: Class<E>): NavigableSet<E>;

static checkedList<E extends Object>(arg0: List<E>, arg1: Class<E>): List<E>;

static checkedMap<K extends Object, V extends Object>(arg0: Map<K, V>, arg1: Class<K>, arg2: Class<V>): Map<K, V>;

static checkedSortedMap<K extends Object, V extends Object>(arg0: SortedMap<K, V>, arg1: Class<K>, arg2: Class<V>): SortedMap<K, V>;

static checkedNavigableMap<K extends Object, V extends Object>(arg0: NavigableMap<K, V>, arg1: Class<K>, arg2: Class<V>): NavigableMap<K, V>;

static emptyIterator<T extends Object>(): Iterator<T>;

static emptyListIterator<T extends Object>(): ListIterator<T>;

static emptyEnumeration<T extends Object>(): Enumeration<T>;

static emptySet<T extends Object>(): Set<T>;

static emptySortedSet<E extends Object>(): SortedSet<E>;

static emptyNavigableSet<E extends Object>(): NavigableSet<E>;

static emptyList<T extends Object>(): List<T>;

static emptyMap<K extends Object, V extends Object>(): Map<K, V>;

static emptySortedMap<K extends Object, V extends Object>(): SortedMap<K, V>;

static emptyNavigableMap<K extends Object, V extends Object>(): NavigableMap<K, V>;

static singleton<T extends Object>(arg0: T): Set<T>;

static singletonList<T extends Object>(arg0: T): List<T>;

static singletonMap<K extends Object, V extends Object>(arg0: K, arg1: V): Map<K, V>;

static nCopies<T extends Object>(arg0: number, arg1: T): List<T>;

static reverseOrder<T extends Object>(): Comparator<T>;

static reverseOrder<T extends Object>(arg0: Comparator<T>): Comparator<T>;

static enumeration<T extends Object>(arg0: Collection<T>): Enumeration<T>;

static list<T extends Object>(arg0: Enumeration<T>): ArrayList<T>;

static frequency(arg0: Collection<any>, arg1: Object): number;

static disjoint(arg0: Collection<any>, arg1: Collection<any>): boolean;

static addAll<T extends Object>(arg0: Collection<T>, arg1: T[]): boolean;

static newSetFromMap<E extends Object>(arg0: Map<E, Boolean>): Set<E>;

static asLifoQueue<T extends Object>(arg0: Deque<T>): Queue<T>;
 }

export namespace Comparator { 
function 
/* default */ reverseOrder<T extends Comparable<T>>(): Comparator<T>;
function 
/* default */ naturalOrder<T extends Comparable<T>>(): Comparator<T>;
function 
/* default */ nullsFirst<T extends Object>(arg0: Comparator<T>): Comparator<T>;
function 
/* default */ nullsLast<T extends Object>(arg0: Comparator<T>): Comparator<T>;
function 
/* default */ comparing<T extends Object, U extends Object>(arg0: Function<T, U>, arg1: Comparator<U>): Comparator<T>;
function 
/* default */ comparing<T extends Object, U extends Comparable<U>>(arg0: Function<T, U>): Comparator<T>;
function 
/* default */ comparingInt<T extends Object>(arg0: ToIntFunction<T>): Comparator<T>;
function 
/* default */ comparingLong<T extends Object>(arg0: ToLongFunction<T>): Comparator<T>;
function 
/* default */ comparingDouble<T extends Object>(arg0: ToDoubleFunction<T>): Comparator<T>;
}

export interface Comparator<T extends Object> extends Object {

compare(arg0: T, arg1: T): number;

equals(arg0: Object): boolean;

/* default */ reversed(): Comparator<T>;

/* default */ thenComparing(arg0: Comparator<T>): Comparator<T>;

/* default */ thenComparing<U extends Object>(arg0: Function<T, U>, arg1: Comparator<U>): Comparator<T>;

/* default */ thenComparing<U extends Comparable<U>>(arg0: Function<T, U>): Comparator<T>;

/* default */ thenComparingInt(arg0: ToIntFunction<T>): Comparator<T>;

/* default */ thenComparingLong(arg0: ToLongFunction<T>): Comparator<T>;

/* default */ thenComparingDouble(arg0: ToDoubleFunction<T>): Comparator<T>;
 }

export class ConcurrentModificationException extends RuntimeException {
constructor();
constructor(arg0: String);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
 }

export class Currency implements Serializable {

static getInstance(arg0: String): Currency;

static getInstance(arg0: Locale): Currency;

static getAvailableCurrencies(): Set<Currency>;

getCurrencyCode(): String;

getSymbol(): String;

getSymbol(arg0: Locale): String;

getDefaultFractionDigits(): number;

getNumericCode(): number;

getNumericCodeAsString(): String;

getDisplayName(): String;

getDisplayName(arg0: Locale): String;
toString(): string;
 }

export class Date extends Object implements Serializable, Cloneable, Comparable<Date> {
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
constructor(arg0: String);

clone(): Object;

static UTC(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;

static parse(arg0: String): number;

getYear(): number;

setYear(arg0: number): void;

getMonth(): number;

setMonth(arg0: number): void;

getDate(): number;

setDate(arg0: number): void;

getDay(): number;

getHours(): number;

setHours(arg0: number): void;

getMinutes(): number;

setMinutes(arg0: number): void;

getSeconds(): number;

setSeconds(arg0: number): void;

getTime(): number;

setTime(arg0: number): void;

before(arg0: Date): boolean;

after(arg0: Date): boolean;

equals(arg0: Object): boolean;

compareTo(arg0: Date): number;

hashCode(): number;
toString(): string;

toLocaleString(): String;

toGMTString(): String;

getTimezoneOffset(): number;

static from(arg0: Instant): Date;

toInstant(): Instant;
 }

export interface Deque<E extends Object> extends Queue<E>, Object {

addFirst(arg0: E): void;

addLast(arg0: E): void;

offerFirst(arg0: E): boolean;

offerLast(arg0: E): boolean;

removeFirst(): E;

removeLast(): E;

pollFirst(): E;

pollLast(): E;

getFirst(): E;

getLast(): E;

peekFirst(): E;

peekLast(): E;

removeFirstOccurrence(arg0: Object): boolean;

removeLastOccurrence(arg0: Object): boolean;

add(arg0: E): boolean;

offer(arg0: E): boolean;

remove(): E;

poll(): E;

element(): E;

peek(): E;

addAll(arg0: Collection<E>): boolean;

push(arg0: E): void;

pop(): E;

remove(arg0: Object): boolean;

contains(arg0: Object): boolean;

size(): number;

iterator(): Iterator<E>;

descendingIterator(): Iterator<E>;
 }

export abstract class Dictionary<K extends Object, V extends Object> extends Object {
constructor();

abstract size(): number;

abstract isEmpty(): boolean;

abstract keys(): Enumeration<K>;

abstract elements(): Enumeration<V>;

abstract get(arg0: Object): V;

abstract put(arg0: K, arg1: V): V;

abstract remove(arg0: Object): V;
 }

export interface DoubleSummaryStatistics extends DoubleConsumer { }
export class DoubleSummaryStatistics implements DoubleConsumer {
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number);

accept(arg0: number): void;

combine(arg0: DoubleSummaryStatistics): void;

getCount(): number;

getSum(): number;

getMin(): number;

getMax(): number;

getAverage(): number;
toString(): string;
 }

export class DuplicateFormatFlagsException extends IllegalFormatException {
constructor(arg0: String);

getFlags(): String;

getMessage(): String;
 }

export class EmptyStackException extends RuntimeException {
constructor();
 }

export interface EnumMap<K extends Enum<K>, V extends Object> extends Serializable, Cloneable { }
export class EnumMap<K extends Enum<K>, V extends Object> extends AbstractMap<K, V> implements Serializable, Cloneable {
constructor(arg0: Class<K>);
constructor(arg0: EnumMap<K, V>);
constructor(arg0: Map<K, V>);

size(): number;

containsValue(arg0: Object): boolean;

containsKey(arg0: Object): boolean;

get(arg0: Object): V;

put(arg0: K, arg1: V): V;

remove(arg0: Object): V;

putAll(arg0: Map<K, V>): void;

clear(): void;

keySet(): Set<K>;

values(): Collection<V>;

entrySet(): Set<Map.Entry<K, V>>;

equals(arg0: Object): boolean;

hashCode(): number;

clone(): EnumMap<K, V>;
 }

export interface EnumSet<E extends Enum<E>> extends Cloneable, Serializable { }
export abstract class EnumSet<E extends Enum<E>> extends AbstractSet<E> implements Cloneable, Serializable {

static noneOf<E extends Enum<E>>(arg0: Class<E>): EnumSet<E>;

static allOf<E extends Enum<E>>(arg0: Class<E>): EnumSet<E>;

static copyOf<E extends Enum<E>>(arg0: EnumSet<E>): EnumSet<E>;

static copyOf<E extends Enum<E>>(arg0: Collection<E>): EnumSet<E>;

static complementOf<E extends Enum<E>>(arg0: EnumSet<E>): EnumSet<E>;

static of<E extends Enum<E>>(arg0: E): EnumSet<E>;

static of<E extends Enum<E>>(arg0: E, arg1: E): EnumSet<E>;

static of<E extends Enum<E>>(arg0: E, arg1: E, arg2: E): EnumSet<E>;

static of<E extends Enum<E>>(arg0: E, arg1: E, arg2: E, arg3: E): EnumSet<E>;

static of<E extends Enum<E>>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): EnumSet<E>;

static of<E extends Enum<E>>(arg0: E, arg1: E[]): EnumSet<E>;

static range<E extends Enum<E>>(arg0: E, arg1: E): EnumSet<E>;

clone(): EnumSet<E>;
 }

export interface Enumeration<E extends Object> extends Object {

hasMoreElements(): boolean;

nextElement(): E;

/* default */ asIterator(): Iterator<E>;
 }

export interface EventListener {
 }

export abstract class EventListenerProxy<T extends EventListener> extends Object implements EventListener {
constructor(arg0: T);

getListener(): T;
 }

export class EventObject implements Serializable {
constructor(arg0: Object);

getSource(): Object;
toString(): string;
 }

export class FormatFlagsConversionMismatchException extends IllegalFormatException {
constructor(arg0: String, arg1: String);

getFlags(): String;

getConversion(): String;

getMessage(): String;
 }

export interface Formattable {

formatTo(arg0: Formatter, arg1: number, arg2: number, arg3: number): void;
 }

export class FormattableFlags {
static LEFT_JUSTIFY:number
static UPPERCASE:number
static ALTERNATE:number
 }

export class Formatter implements Closeable, Flushable {
constructor();
constructor(arg0: Appendable);
constructor(arg0: Locale);
constructor(arg0: Appendable, arg1: Locale);
constructor(arg0: String);
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: String, arg2: Locale);
constructor(arg0: String, arg1: Charset, arg2: Locale);
constructor(arg0: File);
constructor(arg0: File, arg1: String);
constructor(arg0: File, arg1: String, arg2: Locale);
constructor(arg0: File, arg1: Charset, arg2: Locale);
constructor(arg0: PrintStream);
constructor(arg0: OutputStream);
constructor(arg0: OutputStream, arg1: String);
constructor(arg0: OutputStream, arg1: String, arg2: Locale);
constructor(arg0: OutputStream, arg1: Charset, arg2: Locale);

locale(): Locale;

out(): Appendable;
toString(): string;

flush(): void;

close(): void;

ioException(): IOException;

format(arg0: String, arg1: Object[]): Formatter;

format(arg0: Locale, arg1: String, arg2: Object[]): Formatter;
 }
export namespace Formatter { 
export class BigDecimalLayoutForm extends Enum<Formatter.BigDecimalLayoutForm> {
static SCIENTIFIC:Formatter.BigDecimalLayoutForm
static DECIMAL_FLOAT:Formatter.BigDecimalLayoutForm

static values(): Formatter.BigDecimalLayoutForm[];

static valueOf(arg0: String): Formatter.BigDecimalLayoutForm;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class FormatterClosedException extends IllegalStateException {
constructor();
 }

export class GregorianCalendar extends Calendar {
static BC:number
static AD:number
constructor();
constructor(arg0: TimeZone);
constructor(arg0: Locale);
constructor(arg0: TimeZone, arg1: Locale);
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);

setGregorianChange(arg0: Date): void;

getGregorianChange(): Date;

isLeapYear(arg0: number): boolean;

getCalendarType(): String;

equals(arg0: Object): boolean;

hashCode(): number;

add(arg0: number, arg1: number): void;

roll(arg0: number, arg1: boolean): void;

roll(arg0: number, arg1: number): void;

getMinimum(arg0: number): number;

getMaximum(arg0: number): number;

getGreatestMinimum(arg0: number): number;

getLeastMaximum(arg0: number): number;

getActualMinimum(arg0: number): number;

getActualMaximum(arg0: number): number;

clone(): Object;

getTimeZone(): TimeZone;

setTimeZone(arg0: TimeZone): void;

isWeekDateSupported(): boolean;

getWeekYear(): number;

setWeekDate(arg0: number, arg1: number, arg2: number): void;

getWeeksInWeekYear(): number;

toZonedDateTime(): ZonedDateTime;

static from(arg0: ZonedDateTime): GregorianCalendar;
 }

export class HashMap<K extends Object, V extends Object> extends AbstractMap<K, V> implements Map<K, V>, Cloneable, Serializable {
constructor(arg0: number, arg1: number);
constructor(arg0: number);
constructor();
constructor(arg0: Map<K, V>);

size(): number;

isEmpty(): boolean;

get(arg0: Object): V;

containsKey(arg0: Object): boolean;

put(arg0: K, arg1: V): V;

putAll(arg0: Map<K, V>): void;

remove(arg0: Object): V;

clear(): void;

containsValue(arg0: Object): boolean;

keySet(): Set<K>;

values(): Collection<V>;

entrySet(): Set<Map.Entry<K, V>>;

getOrDefault(arg0: Object, arg1: V): V;

putIfAbsent(arg0: K, arg1: V): V;

remove(arg0: Object, arg1: Object): boolean;

replace(arg0: K, arg1: V, arg2: V): boolean;

replace(arg0: K, arg1: V): V;

computeIfAbsent(arg0: K, arg1: Function<K, V>): V;

computeIfPresent(arg0: K, arg1: BiFunction<K, V, V>): V;

compute(arg0: K, arg1: BiFunction<K, V, V>): V;

merge(arg0: K, arg1: V, arg2: BiFunction<V, V, V>): V;

forEach(arg0: BiConsumer<K, V>): void;

replaceAll(arg0: BiFunction<K, V, V>): void;

clone(): Object;
 }

export interface HashSet<E extends Object> extends Set<E>, Cloneable, Serializable { }
export class HashSet<E extends Object> extends AbstractSet<E> implements Set<E>, Cloneable, Serializable {
constructor();
constructor(arg0: Collection<E>);
constructor(arg0: number, arg1: number);
constructor(arg0: number);

iterator(): Iterator<E>;

size(): number;

isEmpty(): boolean;

contains(arg0: Object): boolean;

add(arg0: E): boolean;

remove(arg0: Object): boolean;

clear(): void;

clone(): Object;

spliterator(): Spliterator<E>;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];
 }

export class Hashtable<K extends Object, V extends Object> extends Dictionary<K, V> implements Map<K, V>, Cloneable, Serializable {
constructor(arg0: number, arg1: number);
constructor(arg0: number);
constructor();
constructor(arg0: Map<K, V>);

size(): number;

isEmpty(): boolean;

keys(): Enumeration<K>;

elements(): Enumeration<V>;

contains(arg0: Object): boolean;

containsValue(arg0: Object): boolean;

containsKey(arg0: Object): boolean;

get(arg0: Object): V;

put(arg0: K, arg1: V): V;

remove(arg0: Object): V;

putAll(arg0: Map<K, V>): void;

clear(): void;

clone(): Object;
toString(): string;

keySet(): Set<K>;

entrySet(): Set<Map.Entry<K, V>>;

values(): Collection<V>;

equals(arg0: Object): boolean;

hashCode(): number;

getOrDefault(arg0: Object, arg1: V): V;

forEach(arg0: BiConsumer<K, V>): void;

replaceAll(arg0: BiFunction<K, V, V>): void;

putIfAbsent(arg0: K, arg1: V): V;

remove(arg0: Object, arg1: Object): boolean;

replace(arg0: K, arg1: V, arg2: V): boolean;

replace(arg0: K, arg1: V): V;

computeIfAbsent(arg0: K, arg1: Function<K, V>): V;

computeIfPresent(arg0: K, arg1: BiFunction<K, V, V>): V;

compute(arg0: K, arg1: BiFunction<K, V, V>): V;

merge(arg0: K, arg1: V, arg2: BiFunction<V, V, V>): V;
 }

export class HexFormat {

static of(): HexFormat;

static ofDelimiter(arg0: String): HexFormat;

withDelimiter(arg0: String): HexFormat;

withPrefix(arg0: String): HexFormat;

withSuffix(arg0: String): HexFormat;

withUpperCase(): HexFormat;

withLowerCase(): HexFormat;

delimiter(): String;

prefix(): String;

suffix(): String;

isUpperCase(): boolean;

formatHex(arg0: number[]): String;

formatHex(arg0: number[], arg1: number, arg2: number): String;

formatHex<A extends Appendable>(arg0: A, arg1: number[]): A;

formatHex<A extends Appendable>(arg0: A, arg1: number[], arg2: number, arg3: number): A;

parseHex(arg0: CharSequence): number[];

parseHex(arg0: CharSequence, arg1: number, arg2: number): number[];

parseHex(arg0: String[], arg1: number, arg2: number): number[];

toLowHexDigit(arg0: number): String;

toHighHexDigit(arg0: number): String;

toHexDigits<A extends Appendable>(arg0: A, arg1: number): A;

toHexDigits(arg0: number): String;

toHexDigits(arg0: String): String;

toHexDigits(arg0: number): String;

toHexDigits(arg0: number): String;

toHexDigits(arg0: number): String;

toHexDigits(arg0: number, arg1: number): String;

static isHexDigit(arg0: number): boolean;

static fromHexDigit(arg0: number): number;

static fromHexDigits(arg0: CharSequence): number;

static fromHexDigits(arg0: CharSequence, arg1: number, arg2: number): number;

static fromHexDigitsToLong(arg0: CharSequence): number;

static fromHexDigitsToLong(arg0: CharSequence, arg1: number, arg2: number): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export interface IdentityHashMap<K extends Object, V extends Object> extends Map<K, V>, Serializable, Cloneable { }
export class IdentityHashMap<K extends Object, V extends Object> extends AbstractMap<K, V> implements Map<K, V>, Serializable, Cloneable {
constructor();
constructor(arg0: number);
constructor(arg0: Map<K, V>);

size(): number;

isEmpty(): boolean;

get(arg0: Object): V;

containsKey(arg0: Object): boolean;

containsValue(arg0: Object): boolean;

put(arg0: K, arg1: V): V;

putAll(arg0: Map<K, V>): void;

remove(arg0: Object): V;

clear(): void;

equals(arg0: Object): boolean;

hashCode(): number;

clone(): Object;

keySet(): Set<K>;

values(): Collection<V>;

entrySet(): Set<Map.Entry<K, V>>;

forEach(arg0: BiConsumer<K, V>): void;

replaceAll(arg0: BiFunction<K, V, V>): void;
 }

export class IllegalFormatCodePointException extends IllegalFormatException {
constructor(arg0: number);

getCodePoint(): number;

getMessage(): String;
 }

export class IllegalFormatConversionException extends IllegalFormatException {
constructor(arg0: String, arg1: Class<any>);

getConversion(): String;

getArgumentClass(): Class<any>;

getMessage(): String;
 }

export class IllegalFormatException extends IllegalArgumentException {
 }

export class IllegalFormatFlagsException extends IllegalFormatException {
constructor(arg0: String);

getFlags(): String;

getMessage(): String;
 }

export class IllegalFormatPrecisionException extends IllegalFormatException {
constructor(arg0: number);

getPrecision(): number;

getMessage(): String;
 }

export class IllegalFormatWidthException extends IllegalFormatException {
constructor(arg0: number);

getWidth(): number;

getMessage(): String;
 }

export class IllformedLocaleException extends RuntimeException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: number);

getErrorIndex(): number;
 }

export class InputMismatchException extends NoSuchElementException {
constructor();
constructor(arg0: String);
 }

export interface IntSummaryStatistics extends IntConsumer { }
export class IntSummaryStatistics implements IntConsumer {
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number);

accept(arg0: number): void;

combine(arg0: IntSummaryStatistics): void;

getCount(): number;

getSum(): number;

getMin(): number;

getMax(): number;

getAverage(): number;
toString(): string;
 }

export class InvalidPropertiesFormatException extends IOException {
constructor(arg0: Throwable);
constructor(arg0: String);
 }

export interface Iterator<E extends Object> extends Object {

hasNext(): boolean;

next(): E;

/* default */ remove(): void;

/* default */ forEachRemaining(arg0: Consumer<E>): void;
 }

export interface LinkedHashMap<K extends Object, V extends Object> extends Map<K, V> { }
export class LinkedHashMap<K extends Object, V extends Object> extends HashMap<K, V> implements Map<K, V> {
constructor(arg0: number, arg1: number);
constructor(arg0: number);
constructor();
constructor(arg0: Map<K, V>);
constructor(arg0: number, arg1: number, arg2: boolean);

containsValue(arg0: Object): boolean;

get(arg0: Object): V;

getOrDefault(arg0: Object, arg1: V): V;

clear(): void;

keySet(): Set<K>;

values(): Collection<V>;

entrySet(): Set<Map.Entry<K, V>>;

forEach(arg0: BiConsumer<K, V>): void;

replaceAll(arg0: BiFunction<K, V, V>): void;
 }

export interface LinkedHashSet<E extends Object> extends Set<E>, Cloneable, Serializable { }
export class LinkedHashSet<E extends Object> extends HashSet<E> implements Set<E>, Cloneable, Serializable {
constructor(arg0: number, arg1: number);
constructor(arg0: number);
constructor();
constructor(arg0: Collection<E>);

spliterator(): Spliterator<E>;
 }

export interface LinkedList<E extends Object> extends List<E>, Deque<E>, Cloneable, Serializable { }
export class LinkedList<E extends Object> extends AbstractSequentialList<E> implements List<E>, Deque<E>, Cloneable, Serializable {
constructor();
constructor(arg0: Collection<E>);

getFirst(): E;

getLast(): E;

removeFirst(): E;

removeLast(): E;

addFirst(arg0: E): void;

addLast(arg0: E): void;

contains(arg0: Object): boolean;

size(): number;

add(arg0: E): boolean;

remove(arg0: Object): boolean;

addAll(arg0: Collection<E>): boolean;

addAll(arg0: number, arg1: Collection<E>): boolean;

clear(): void;

get(arg0: number): E;

set(arg0: number, arg1: E): E;

add(arg0: number, arg1: E): void;

remove(arg0: number): E;

indexOf(arg0: Object): number;

lastIndexOf(arg0: Object): number;

peek(): E;

element(): E;

poll(): E;

remove(): E;

offer(arg0: E): boolean;

offerFirst(arg0: E): boolean;

offerLast(arg0: E): boolean;

peekFirst(): E;

peekLast(): E;

pollFirst(): E;

pollLast(): E;

push(arg0: E): void;

pop(): E;

removeFirstOccurrence(arg0: Object): boolean;

removeLastOccurrence(arg0: Object): boolean;

listIterator(arg0: number): ListIterator<E>;

descendingIterator(): Iterator<E>;

clone(): Object;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];

spliterator(): Spliterator<E>;
 }

export namespace List { 
function 
/* default */ of<E extends Object>(): List<E>;
function 
/* default */ of<E extends Object>(arg0: E): List<E>;
function 
/* default */ of<E extends Object>(arg0: E, arg1: E): List<E>;
function 
/* default */ of<E extends Object>(arg0: E, arg1: E, arg2: E): List<E>;
function 
/* default */ of<E extends Object>(arg0: E, arg1: E, arg2: E, arg3: E): List<E>;
function 
/* default */ of<E extends Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): List<E>;
function 
/* default */ of<E extends Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): List<E>;
function 
/* default */ of<E extends Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): List<E>;
function 
/* default */ of<E extends Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): List<E>;
function 
/* default */ of<E extends Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): List<E>;
function 
/* default */ of<E extends Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): List<E>;
function 
/* default */ of<E extends Object>(arg0: E[]): List<E>;
function 
/* default */ copyOf<E extends Object>(arg0: Collection<E>): List<E>;
}

export interface List<E extends Object> extends Collection<E>, Object {

size(): number;

isEmpty(): boolean;

contains(arg0: Object): boolean;

iterator(): Iterator<E>;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];

add(arg0: E): boolean;

remove(arg0: Object): boolean;

containsAll(arg0: Collection<any>): boolean;

addAll(arg0: Collection<E>): boolean;

addAll(arg0: number, arg1: Collection<E>): boolean;

removeAll(arg0: Collection<any>): boolean;

retainAll(arg0: Collection<any>): boolean;

/* default */ replaceAll(arg0: UnaryOperator<E>): void;

/* default */ sort(arg0: Comparator<E>): void;

clear(): void;

equals(arg0: Object): boolean;

hashCode(): number;

get(arg0: number): E;

set(arg0: number, arg1: E): E;

add(arg0: number, arg1: E): void;

remove(arg0: number): E;

indexOf(arg0: Object): number;

lastIndexOf(arg0: Object): number;

listIterator(): ListIterator<E>;

listIterator(arg0: number): ListIterator<E>;

subList(arg0: number, arg1: number): List<E>;

/* default */ spliterator(): Spliterator<E>;
 }

export interface ListIterator<E extends Object> extends Iterator<E>, Object {

hasNext(): boolean;

next(): E;

hasPrevious(): boolean;

previous(): E;

nextIndex(): number;

previousIndex(): number;

remove(): void;

set(arg0: E): void;

add(arg0: E): void;
 }

export abstract class ListResourceBundle extends ResourceBundle {
constructor();

handleGetObject(arg0: String): Object;

getKeys(): Enumeration<String>;
 }

export class Locale implements Cloneable, Serializable {
static ENGLISH:Locale
static FRENCH:Locale
static GERMAN:Locale
static ITALIAN:Locale
static JAPANESE:Locale
static KOREAN:Locale
static CHINESE:Locale
static SIMPLIFIED_CHINESE:Locale
static TRADITIONAL_CHINESE:Locale
static FRANCE:Locale
static GERMANY:Locale
static ITALY:Locale
static JAPAN:Locale
static KOREA:Locale
static UK:Locale
static US:Locale
static CANADA:Locale
static CANADA_FRENCH:Locale
static ROOT:Locale
static CHINA:Locale
static PRC:Locale
static TAIWAN:Locale
static PRIVATE_USE_EXTENSION:String
static UNICODE_LOCALE_EXTENSION:String
constructor(arg0: String, arg1: String, arg2: String);
constructor(arg0: String, arg1: String);
constructor(arg0: String);

static getDefault(): Locale;

static getDefault(arg0: Locale.Category): Locale;

static setDefault(arg0: Locale): void;

static setDefault(arg0: Locale.Category, arg1: Locale): void;

static getAvailableLocales(): Locale[];

static getISOCountries(): String[];

static getISOCountries(arg0: Locale.IsoCountryCode): Set<String>;

static getISOLanguages(): String[];

getLanguage(): String;

getScript(): String;

getCountry(): String;

getVariant(): String;

hasExtensions(): boolean;

stripExtensions(): Locale;

getExtension(arg0: String): String;

getExtensionKeys(): Set<String>;

getUnicodeLocaleAttributes(): Set<String>;

getUnicodeLocaleType(arg0: String): String;

getUnicodeLocaleKeys(): Set<String>;
toString(): string;

toLanguageTag(): String;

static forLanguageTag(arg0: String): Locale;

getISO3Language(): String;

getISO3Country(): String;

getDisplayLanguage(): String;

getDisplayLanguage(arg0: Locale): String;

getDisplayScript(): String;

getDisplayScript(arg0: Locale): String;

getDisplayCountry(): String;

getDisplayCountry(arg0: Locale): String;

getDisplayVariant(): String;

getDisplayVariant(arg0: Locale): String;

getDisplayName(): String;

getDisplayName(arg0: Locale): String;

clone(): Object;

hashCode(): number;

equals(arg0: Object): boolean;

static filter(arg0: List<Locale.LanguageRange>, arg1: Collection<Locale>, arg2: Locale.FilteringMode): List<Locale>;

static filter(arg0: List<Locale.LanguageRange>, arg1: Collection<Locale>): List<Locale>;

static filterTags(arg0: List<Locale.LanguageRange>, arg1: Collection<String>, arg2: Locale.FilteringMode): List<String>;

static filterTags(arg0: List<Locale.LanguageRange>, arg1: Collection<String>): List<String>;

static lookup(arg0: List<Locale.LanguageRange>, arg1: Collection<Locale>): Locale;

static lookupTag(arg0: List<Locale.LanguageRange>, arg1: Collection<String>): String;
 }
export namespace Locale { 
export class Builder {
constructor();

setLocale(arg0: Locale): Locale.Builder;

setLanguageTag(arg0: String): Locale.Builder;

setLanguage(arg0: String): Locale.Builder;

setScript(arg0: String): Locale.Builder;

setRegion(arg0: String): Locale.Builder;

setVariant(arg0: String): Locale.Builder;

setExtension(arg0: String, arg1: String): Locale.Builder;

setUnicodeLocaleKeyword(arg0: String, arg1: String): Locale.Builder;

addUnicodeLocaleAttribute(arg0: String): Locale.Builder;

removeUnicodeLocaleAttribute(arg0: String): Locale.Builder;

clear(): Locale.Builder;

clearExtensions(): Locale.Builder;

build(): Locale;
 }

export class Category extends Enum<Locale.Category> {
static DISPLAY:Locale.Category
static FORMAT:Locale.Category

static values(): Locale.Category[];

static valueOf(arg0: String): Locale.Category;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class FilteringMode extends Enum<Locale.FilteringMode> {
static AUTOSELECT_FILTERING:Locale.FilteringMode
static EXTENDED_FILTERING:Locale.FilteringMode
static IGNORE_EXTENDED_RANGES:Locale.FilteringMode
static MAP_EXTENDED_RANGES:Locale.FilteringMode
static REJECT_EXTENDED_RANGES:Locale.FilteringMode

static values(): Locale.FilteringMode[];

static valueOf(arg0: String): Locale.FilteringMode;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export abstract class IsoCountryCode extends Enum<Locale.IsoCountryCode> {
static PART1_ALPHA2:Locale.IsoCountryCode
static PART1_ALPHA3:Locale.IsoCountryCode
static PART3:Locale.IsoCountryCode

static values(): Locale.IsoCountryCode[];

static valueOf(arg0: String): Locale.IsoCountryCode;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class LanguageRange {
static MAX_WEIGHT:number
static MIN_WEIGHT:number
constructor(arg0: String);
constructor(arg0: String, arg1: number);

getRange(): String;

getWeight(): number;

static parse(arg0: String): List<Locale.LanguageRange>;

static parse(arg0: String, arg1: Map<String, List<String>>): List<Locale.LanguageRange>;

static mapEquivalents(arg0: List<Locale.LanguageRange>, arg1: Map<String, List<String>>): List<Locale.LanguageRange>;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;
 }

}

export interface LongSummaryStatistics extends LongConsumer, IntConsumer { }
export class LongSummaryStatistics implements LongConsumer, IntConsumer {
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number);

accept(arg0: number): void;

accept(arg0: number): void;

combine(arg0: LongSummaryStatistics): void;

getCount(): number;

getSum(): number;

getMin(): number;

getMax(): number;

getAverage(): number;
toString(): string;
 }

export namespace Map { 
function 
/* default */ of<K extends Object, V extends Object>(): Map<K, V>;
function 
/* default */ of<K extends Object, V extends Object>(arg0: K, arg1: V): Map<K, V>;
function 
/* default */ of<K extends Object, V extends Object>(arg0: K, arg1: V, arg2: K, arg3: V): Map<K, V>;
function 
/* default */ of<K extends Object, V extends Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Map<K, V>;
function 
/* default */ of<K extends Object, V extends Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Map<K, V>;
function 
/* default */ of<K extends Object, V extends Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Map<K, V>;
function 
/* default */ of<K extends Object, V extends Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Map<K, V>;
function 
/* default */ of<K extends Object, V extends Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Map<K, V>;
function 
/* default */ of<K extends Object, V extends Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Map<K, V>;
function 
/* default */ of<K extends Object, V extends Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Map<K, V>;
function 
/* default */ of<K extends Object, V extends Object>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Map<K, V>;
function 
/* default */ ofEntries<K extends Object, V extends Object>(arg0: Map.Entry<K, V>[]): Map<K, V>;
function 
/* default */ entry<K extends Object, V extends Object>(arg0: K, arg1: V): Map.Entry<K, V>;
function 
/* default */ copyOf<K extends Object, V extends Object>(arg0: Map<K, V>): Map<K, V>;
}

export interface Map<K extends Object, V extends Object> extends Object {

size(): number;

isEmpty(): boolean;

containsKey(arg0: Object): boolean;

containsValue(arg0: Object): boolean;

get(arg0: Object): V;

put(arg0: K, arg1: V): V;

remove(arg0: Object): V;

putAll(arg0: Map<K, V>): void;

clear(): void;

keySet(): Set<K>;

values(): Collection<V>;

entrySet(): Set<Map.Entry<K, V>>;

equals(arg0: Object): boolean;

hashCode(): number;

/* default */ getOrDefault(arg0: Object, arg1: V): V;

/* default */ forEach(arg0: BiConsumer<K, V>): void;

/* default */ replaceAll(arg0: BiFunction<K, V, V>): void;

/* default */ putIfAbsent(arg0: K, arg1: V): V;

/* default */ remove(arg0: Object, arg1: Object): boolean;

/* default */ replace(arg0: K, arg1: V, arg2: V): boolean;

/* default */ replace(arg0: K, arg1: V): V;

/* default */ computeIfAbsent(arg0: K, arg1: Function<K, V>): V;

/* default */ computeIfPresent(arg0: K, arg1: BiFunction<K, V, V>): V;

/* default */ compute(arg0: K, arg1: BiFunction<K, V, V>): V;

/* default */ merge(arg0: K, arg1: V, arg2: BiFunction<V, V, V>): V;
 }
export namespace Map { 
export namespace Entry { 
function 
/* default */ comparingByKey<K extends Comparable<K>, V extends Object>(): Comparator<Map.Entry<K, V>>;
function 
/* default */ comparingByValue<K extends Object, V extends Comparable<V>>(): Comparator<Map.Entry<K, V>>;
function 
/* default */ comparingByKey<K extends Object, V extends Object>(arg0: Comparator<K>): Comparator<Map.Entry<K, V>>;
function 
/* default */ comparingByValue<K extends Object, V extends Object>(arg0: Comparator<V>): Comparator<Map.Entry<K, V>>;
function 
/* default */ copyOf<K extends Object, V extends Object>(arg0: Map.Entry<K, V>): Map.Entry<K, V>;
}

export interface Entry<K extends Object, V extends Object> extends Object {

getKey(): K;

getValue(): V;

setValue(arg0: V): V;

equals(arg0: Object): boolean;

hashCode(): number;
 }

}

export class MissingFormatArgumentException extends IllegalFormatException {
constructor(arg0: String);

getFormatSpecifier(): String;

getMessage(): String;
 }

export class MissingFormatWidthException extends IllegalFormatException {
constructor(arg0: String);

getFormatSpecifier(): String;

getMessage(): String;
 }

export class MissingResourceException extends RuntimeException {
constructor(arg0: String, arg1: String, arg2: String);

getClassName(): String;

getKey(): String;
 }

export interface NavigableMap<K extends Object, V extends Object> extends SortedMap<K, V>, Object {

lowerEntry(arg0: K): Map.Entry<K, V>;

lowerKey(arg0: K): K;

floorEntry(arg0: K): Map.Entry<K, V>;

floorKey(arg0: K): K;

ceilingEntry(arg0: K): Map.Entry<K, V>;

ceilingKey(arg0: K): K;

higherEntry(arg0: K): Map.Entry<K, V>;

higherKey(arg0: K): K;

firstEntry(): Map.Entry<K, V>;

lastEntry(): Map.Entry<K, V>;

pollFirstEntry(): Map.Entry<K, V>;

pollLastEntry(): Map.Entry<K, V>;

descendingMap(): NavigableMap<K, V>;

navigableKeySet(): NavigableSet<K>;

descendingKeySet(): NavigableSet<K>;

subMap(arg0: K, arg1: boolean, arg2: K, arg3: boolean): NavigableMap<K, V>;

headMap(arg0: K, arg1: boolean): NavigableMap<K, V>;

tailMap(arg0: K, arg1: boolean): NavigableMap<K, V>;

subMap(arg0: K, arg1: K): SortedMap<K, V>;

headMap(arg0: K): SortedMap<K, V>;

tailMap(arg0: K): SortedMap<K, V>;
 }

export interface NavigableSet<E extends Object> extends SortedSet<E>, Object {

lower(arg0: E): E;

floor(arg0: E): E;

ceiling(arg0: E): E;

higher(arg0: E): E;

pollFirst(): E;

pollLast(): E;

iterator(): Iterator<E>;

descendingSet(): NavigableSet<E>;

descendingIterator(): Iterator<E>;

subSet(arg0: E, arg1: boolean, arg2: E, arg3: boolean): NavigableSet<E>;

headSet(arg0: E, arg1: boolean): NavigableSet<E>;

tailSet(arg0: E, arg1: boolean): NavigableSet<E>;

subSet(arg0: E, arg1: E): SortedSet<E>;

headSet(arg0: E): SortedSet<E>;

tailSet(arg0: E): SortedSet<E>;
 }

export class NoSuchElementException extends RuntimeException {
constructor();
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
constructor(arg0: String);
 }

export class Objects {

static equals(arg0: Object, arg1: Object): boolean;

static deepEquals(arg0: Object, arg1: Object): boolean;

static hashCode(arg0: Object): number;

static hash(arg0: Object[]): number;

static toString(arg0: Object): String;

static toString(arg0: Object, arg1: String): String;

static compare<T extends Object>(arg0: T, arg1: T, arg2: Comparator<T>): number;

static requireNonNull<T extends Object>(arg0: T): T;

static requireNonNull<T extends Object>(arg0: T, arg1: String): T;

static isNull(arg0: Object): boolean;

static nonNull(arg0: Object): boolean;

static requireNonNullElse<T extends Object>(arg0: T, arg1: T): T;

static requireNonNullElseGet<T extends Object>(arg0: T, arg1: Supplier<T>): T;

static requireNonNull<T extends Object>(arg0: T, arg1: Supplier<String>): T;

static checkIndex(arg0: number, arg1: number): number;

static checkFromToIndex(arg0: number, arg1: number, arg2: number): number;

static checkFromIndexSize(arg0: number, arg1: number, arg2: number): number;

static checkIndex(arg0: number, arg1: number): number;

static checkFromToIndex(arg0: number, arg1: number, arg2: number): number;

static checkFromIndexSize(arg0: number, arg1: number, arg2: number): number;
 }

export class Observable {
constructor();

addObserver(arg0: Observer): void;

deleteObserver(arg0: Observer): void;

notifyObservers(): void;

notifyObservers(arg0: Object): void;

deleteObservers(): void;

hasChanged(): boolean;

countObservers(): number;
 }

export interface Observer {

update(arg0: Observable, arg1: Object): void;
 }

export class Optional<T extends Object> extends Object {

static empty<T extends Object>(): Optional<T>;

static of<T extends Object>(arg0: T): Optional<T>;

static ofNullable<T extends Object>(arg0: T): Optional<T>;

get(): T;

isPresent(): boolean;

isEmpty(): boolean;

ifPresent(arg0: Consumer<T>): void;

ifPresentOrElse(arg0: Consumer<T>, arg1: Runnable): void;

filter(arg0: Predicate<T>): Optional<T>;

map<U extends Object>(arg0: Function<T, U>): Optional<U>;

flatMap<U extends Object>(arg0: Function<T, Optional<U>>): Optional<U>;

or(arg0: Supplier<Optional<T>>): Optional<T>;

stream(): Stream<T>;

orElse(arg0: T): T;

orElseGet(arg0: Supplier<T>): T;

orElseThrow(): T;

orElseThrow<X extends Throwable>(arg0: Supplier<X>): T;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class OptionalDouble {

static empty(): OptionalDouble;

static of(arg0: number): OptionalDouble;

getAsDouble(): number;

isPresent(): boolean;

isEmpty(): boolean;

ifPresent(arg0: DoubleConsumer): void;

ifPresentOrElse(arg0: DoubleConsumer, arg1: Runnable): void;

stream(): DoubleStream;

orElse(arg0: number): number;

orElseGet(arg0: DoubleSupplier): number;

orElseThrow(): number;

orElseThrow<X extends Throwable>(arg0: Supplier<X>): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class OptionalInt {

static empty(): OptionalInt;

static of(arg0: number): OptionalInt;

getAsInt(): number;

isPresent(): boolean;

isEmpty(): boolean;

ifPresent(arg0: IntConsumer): void;

ifPresentOrElse(arg0: IntConsumer, arg1: Runnable): void;

stream(): IntStream;

orElse(arg0: number): number;

orElseGet(arg0: IntSupplier): number;

orElseThrow(): number;

orElseThrow<X extends Throwable>(arg0: Supplier<X>): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class OptionalLong {

static empty(): OptionalLong;

static of(arg0: number): OptionalLong;

getAsLong(): number;

isPresent(): boolean;

isEmpty(): boolean;

ifPresent(arg0: LongConsumer): void;

ifPresentOrElse(arg0: LongConsumer, arg1: Runnable): void;

stream(): LongStream;

orElse(arg0: number): number;

orElseGet(arg0: LongSupplier): number;

orElseThrow(): number;

orElseThrow<X extends Throwable>(arg0: Supplier<X>): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export interface PrimitiveIterator<T extends Object, T_CONS extends Object> extends Iterator<T>, Object {

forEachRemaining(arg0: T_CONS): void;
 }
export namespace PrimitiveIterator { 
export interface OfDouble extends PrimitiveIterator<Number, DoubleConsumer>, Object {

nextDouble(): number;

/* default */ forEachRemaining(arg0: DoubleConsumer): void;

/* default */ next(): Number;

/* default */ forEachRemaining(arg0: Consumer<Number>): void;
 }

export interface OfInt extends PrimitiveIterator<Number, IntConsumer>, Object {

nextInt(): number;

/* default */ forEachRemaining(arg0: IntConsumer): void;

/* default */ next(): Number;

/* default */ forEachRemaining(arg0: Consumer<Number>): void;
 }

export interface OfLong extends PrimitiveIterator<Number, LongConsumer>, Object {

nextLong(): number;

/* default */ forEachRemaining(arg0: LongConsumer): void;

/* default */ next(): Number;

/* default */ forEachRemaining(arg0: Consumer<Number>): void;
 }

}

export interface PriorityQueue<E extends Object> extends Serializable { }
export class PriorityQueue<E extends Object> extends AbstractQueue<E> implements Serializable {
constructor();
constructor(arg0: number);
constructor(arg0: Comparator<E>);
constructor(arg0: number, arg1: Comparator<E>);
constructor(arg0: Collection<E>);
constructor(arg0: PriorityQueue<E>);
constructor(arg0: SortedSet<E>);

add(arg0: E): boolean;

offer(arg0: E): boolean;

peek(): E;

remove(arg0: Object): boolean;

contains(arg0: Object): boolean;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];

iterator(): Iterator<E>;

size(): number;

clear(): void;

poll(): E;

comparator(): Comparator<E>;

spliterator(): Spliterator<E>;

removeIf(arg0: Predicate<E>): boolean;

removeAll(arg0: Collection<any>): boolean;

retainAll(arg0: Collection<any>): boolean;

forEach(arg0: Consumer<E>): void;
 }

export class Properties extends Hashtable<Object, Object> {
constructor();
constructor(arg0: number);
constructor(arg0: Properties);

setProperty(arg0: String, arg1: String): Object;

load(arg0: Reader): void;

load(arg0: InputStream): void;

save(arg0: OutputStream, arg1: String): void;

store(arg0: Writer, arg1: String): void;

store(arg0: OutputStream, arg1: String): void;

loadFromXML(arg0: InputStream): void;

storeToXML(arg0: OutputStream, arg1: String): void;

storeToXML(arg0: OutputStream, arg1: String, arg2: String): void;

storeToXML(arg0: OutputStream, arg1: String, arg2: Charset): void;

getProperty(arg0: String): String;

getProperty(arg0: String, arg1: String): String;

propertyNames(): Enumeration<any>;

stringPropertyNames(): Set<String>;

list(arg0: PrintStream): void;

list(arg0: PrintWriter): void;

size(): number;

isEmpty(): boolean;

keys(): Enumeration<Object>;

elements(): Enumeration<Object>;

contains(arg0: Object): boolean;

containsValue(arg0: Object): boolean;

containsKey(arg0: Object): boolean;

get(arg0: Object): Object;

put(arg0: Object, arg1: Object): Object;

remove(arg0: Object): Object;

putAll(arg0: Map<any, any>): void;

clear(): void;
toString(): string;

keySet(): Set<Object>;

values(): Collection<Object>;

entrySet(): Set<Map.Entry<Object, Object>>;

equals(arg0: Object): boolean;

hashCode(): number;

getOrDefault(arg0: Object, arg1: Object): Object;

forEach(arg0: BiConsumer<Object, Object>): void;

replaceAll(arg0: BiFunction<Object, Object, any>): void;

putIfAbsent(arg0: Object, arg1: Object): Object;

remove(arg0: Object, arg1: Object): boolean;

replace(arg0: Object, arg1: Object, arg2: Object): boolean;

replace(arg0: Object, arg1: Object): Object;

computeIfAbsent(arg0: Object, arg1: Function<Object, any>): Object;

computeIfPresent(arg0: Object, arg1: BiFunction<Object, Object, any>): Object;

compute(arg0: Object, arg1: BiFunction<Object, Object, any>): Object;

merge(arg0: Object, arg1: Object, arg2: BiFunction<Object, Object, any>): Object;

clone(): Object;
 }

export class PropertyPermission extends BasicPermission {
constructor(arg0: String, arg1: String);

implies(arg0: Permission): boolean;

equals(arg0: Object): boolean;

hashCode(): number;

getActions(): String;

newPermissionCollection(): PermissionCollection;
 }

export class PropertyResourceBundle extends ResourceBundle {
constructor(arg0: InputStream);
constructor(arg0: Reader);

handleGetObject(arg0: String): Object;

getKeys(): Enumeration<String>;
 }

export interface Queue<E extends Object> extends Collection<E>, Object {

add(arg0: E): boolean;

offer(arg0: E): boolean;

remove(): E;

poll(): E;

element(): E;

peek(): E;
 }

export interface Random extends RandomGenerator, Serializable { }
export class Random implements RandomGenerator, Serializable {
constructor();
constructor(arg0: number);

setSeed(arg0: number): void;

nextBytes(arg0: number[]): void;

nextInt(): number;

nextInt(arg0: number): number;

nextLong(): number;

nextBoolean(): boolean;

nextFloat(): number;

nextDouble(): number;

nextGaussian(): number;

ints(arg0: number): IntStream;

ints(): IntStream;

ints(arg0: number, arg1: number, arg2: number): IntStream;

ints(arg0: number, arg1: number): IntStream;

longs(arg0: number): LongStream;

longs(): LongStream;

longs(arg0: number, arg1: number, arg2: number): LongStream;

longs(arg0: number, arg1: number): LongStream;

doubles(arg0: number): DoubleStream;

doubles(): DoubleStream;

doubles(arg0: number, arg1: number, arg2: number): DoubleStream;

doubles(arg0: number, arg1: number): DoubleStream;
 }

export interface RandomAccess {
 }

export abstract class ResourceBundle {
constructor();

getBaseBundleName(): String;

getString(arg0: String): String;

getStringArray(arg0: String): String[];

getObject(arg0: String): Object;

getLocale(): Locale;

static getBundle(arg0: String): ResourceBundle;

static getBundle(arg0: String, arg1: ResourceBundle.Control): ResourceBundle;

static getBundle(arg0: String, arg1: Locale): ResourceBundle;

static getBundle(arg0: String, arg1: Module): ResourceBundle;

static getBundle(arg0: String, arg1: Locale, arg2: Module): ResourceBundle;

static getBundle(arg0: String, arg1: Locale, arg2: ResourceBundle.Control): ResourceBundle;

static getBundle(arg0: String, arg1: Locale, arg2: ClassLoader): ResourceBundle;

static getBundle(arg0: String, arg1: Locale, arg2: ClassLoader, arg3: ResourceBundle.Control): ResourceBundle;

static clearCache(): void;

static clearCache(arg0: ClassLoader): void;

abstract getKeys(): Enumeration<String>;

containsKey(arg0: String): boolean;

keySet(): Set<String>;
 }
export namespace ResourceBundle { 
export class Control {
static FORMAT_DEFAULT:List<String>
static FORMAT_CLASS:List<String>
static FORMAT_PROPERTIES:List<String>
static TTL_DONT_CACHE:number
static TTL_NO_EXPIRATION_CONTROL:number

static getControl(arg0: List<String>): ResourceBundle.Control;

static getNoFallbackControl(arg0: List<String>): ResourceBundle.Control;

getFormats(arg0: String): List<String>;

getCandidateLocales(arg0: String, arg1: Locale): List<Locale>;

getFallbackLocale(arg0: String, arg1: Locale): Locale;

newBundle(arg0: String, arg1: Locale, arg2: String, arg3: ClassLoader, arg4: boolean): ResourceBundle;

getTimeToLive(arg0: String, arg1: Locale): number;

needsReload(arg0: String, arg1: Locale, arg2: String, arg3: ClassLoader, arg4: ResourceBundle, arg5: number): boolean;

toBundleName(arg0: String, arg1: Locale): String;

toResourceName(arg0: String, arg1: String): String;
 }

}

export interface Scanner extends Iterator<String>, Closeable { }
export class Scanner extends Object implements Iterator<String>, Closeable {
constructor(arg0: Readable);
constructor(arg0: InputStream);
constructor(arg0: InputStream, arg1: String);
constructor(arg0: InputStream, arg1: Charset);
constructor(arg0: File);
constructor(arg0: File, arg1: String);
constructor(arg0: File, arg1: Charset);
constructor(arg0: Path);
constructor(arg0: Path, arg1: String);
constructor(arg0: Path, arg1: Charset);
constructor(arg0: String);
constructor(arg0: ReadableByteChannel);
constructor(arg0: ReadableByteChannel, arg1: String);
constructor(arg0: ReadableByteChannel, arg1: Charset);

close(): void;

ioException(): IOException;

delimiter(): Pattern;

useDelimiter(arg0: Pattern): Scanner;

useDelimiter(arg0: String): Scanner;

locale(): Locale;

useLocale(arg0: Locale): Scanner;

radix(): number;

useRadix(arg0: number): Scanner;

match(): MatchResult;
toString(): string;

hasNext(): boolean;

next(): String;

remove(): void;

hasNext(arg0: String): boolean;

next(arg0: String): String;

hasNext(arg0: Pattern): boolean;

next(arg0: Pattern): String;

hasNextLine(): boolean;

nextLine(): String;

findInLine(arg0: String): String;

findInLine(arg0: Pattern): String;

findWithinHorizon(arg0: String, arg1: number): String;

findWithinHorizon(arg0: Pattern, arg1: number): String;

skip(arg0: Pattern): Scanner;

skip(arg0: String): Scanner;

hasNextBoolean(): boolean;

nextBoolean(): boolean;

hasNextByte(): boolean;

hasNextByte(arg0: number): boolean;

nextByte(): number;

nextByte(arg0: number): number;

hasNextShort(): boolean;

hasNextShort(arg0: number): boolean;

nextShort(): number;

nextShort(arg0: number): number;

hasNextInt(): boolean;

hasNextInt(arg0: number): boolean;

nextInt(): number;

nextInt(arg0: number): number;

hasNextLong(): boolean;

hasNextLong(arg0: number): boolean;

nextLong(): number;

nextLong(arg0: number): number;

hasNextFloat(): boolean;

nextFloat(): number;

hasNextDouble(): boolean;

nextDouble(): number;

hasNextBigInteger(): boolean;

hasNextBigInteger(arg0: number): boolean;

nextBigInteger(): BigInteger;

nextBigInteger(arg0: number): BigInteger;

hasNextBigDecimal(): boolean;

nextBigDecimal(): BigDecimal;

reset(): Scanner;

tokens(): Stream<String>;

findAll(arg0: Pattern): Stream<MatchResult>;

findAll(arg0: String): Stream<MatchResult>;
 }

export class ServiceConfigurationError extends Error {
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
 }

export interface ServiceLoader<S extends Object> extends Iterable<S> { }
export class ServiceLoader<S extends Object> extends Object implements Iterable<S> {

iterator(): Iterator<S>;

stream(): Stream<ServiceLoader.Provider<S>>;

static load<S extends Object>(arg0: Class<S>, arg1: ClassLoader): ServiceLoader<S>;

static load<S extends Object>(arg0: Class<S>): ServiceLoader<S>;

static loadInstalled<S extends Object>(arg0: Class<S>): ServiceLoader<S>;

static load<S extends Object>(arg0: ModuleLayer, arg1: Class<S>): ServiceLoader<S>;

findFirst(): Optional<S>;

reload(): void;
toString(): string;
 }
export namespace ServiceLoader { 
export interface Provider<S extends Object> extends Supplier<S>, Object {

type(): Class<S>;

get(): S;
 }

}

export namespace Set { 
function 
/* default */ of<E extends Object>(): Set<E>;
function 
/* default */ of<E extends Object>(arg0: E): Set<E>;
function 
/* default */ of<E extends Object>(arg0: E, arg1: E): Set<E>;
function 
/* default */ of<E extends Object>(arg0: E, arg1: E, arg2: E): Set<E>;
function 
/* default */ of<E extends Object>(arg0: E, arg1: E, arg2: E, arg3: E): Set<E>;
function 
/* default */ of<E extends Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Set<E>;
function 
/* default */ of<E extends Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Set<E>;
function 
/* default */ of<E extends Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Set<E>;
function 
/* default */ of<E extends Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Set<E>;
function 
/* default */ of<E extends Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Set<E>;
function 
/* default */ of<E extends Object>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Set<E>;
function 
/* default */ of<E extends Object>(arg0: E[]): Set<E>;
function 
/* default */ copyOf<E extends Object>(arg0: Collection<E>): Set<E>;
}

export interface Set<E extends Object> extends Collection<E>, Object {

size(): number;

isEmpty(): boolean;

contains(arg0: Object): boolean;

iterator(): Iterator<E>;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];

add(arg0: E): boolean;

remove(arg0: Object): boolean;

containsAll(arg0: Collection<any>): boolean;

addAll(arg0: Collection<E>): boolean;

retainAll(arg0: Collection<any>): boolean;

removeAll(arg0: Collection<any>): boolean;

clear(): void;

equals(arg0: Object): boolean;

hashCode(): number;

/* default */ spliterator(): Spliterator<E>;
 }

export class SimpleTimeZone extends TimeZone {
static WALL_TIME:number
static STANDARD_TIME:number
static UTC_TIME:number
constructor(arg0: number, arg1: String);
constructor(arg0: number, arg1: String, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number);
constructor(arg0: number, arg1: String, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number);
constructor(arg0: number, arg1: String, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number);

setStartYear(arg0: number): void;

setStartRule(arg0: number, arg1: number, arg2: number, arg3: number): void;

setStartRule(arg0: number, arg1: number, arg2: number): void;

setStartRule(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;

setEndRule(arg0: number, arg1: number, arg2: number, arg3: number): void;

setEndRule(arg0: number, arg1: number, arg2: number): void;

setEndRule(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;

getOffset(arg0: number): number;

getOffset(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;

getRawOffset(): number;

setRawOffset(arg0: number): void;

setDSTSavings(arg0: number): void;

getDSTSavings(): number;

useDaylightTime(): boolean;

observesDaylightTime(): boolean;

inDaylightTime(arg0: Date): boolean;

clone(): Object;

hashCode(): number;

equals(arg0: Object): boolean;

hasSameRules(arg0: TimeZone): boolean;
toString(): string;
 }

export interface SortedMap<K extends Object, V extends Object> extends Map<K, V>, Object {

comparator(): Comparator<K>;

subMap(arg0: K, arg1: K): SortedMap<K, V>;

headMap(arg0: K): SortedMap<K, V>;

tailMap(arg0: K): SortedMap<K, V>;

firstKey(): K;

lastKey(): K;

keySet(): Set<K>;

values(): Collection<V>;

entrySet(): Set<Map.Entry<K, V>>;
 }

export interface SortedSet<E extends Object> extends Set<E>, Object {

comparator(): Comparator<E>;

subSet(arg0: E, arg1: E): SortedSet<E>;

headSet(arg0: E): SortedSet<E>;

tailSet(arg0: E): SortedSet<E>;

first(): E;

last(): E;

/* default */ spliterator(): Spliterator<E>;
 }

export namespace Spliterator { 
const ORDERED:number
const DISTINCT:number
const SORTED:number
const SIZED:number
const NONNULL:number
const IMMUTABLE:number
const CONCURRENT:number
const SUBSIZED:number
}

export interface Spliterator<T extends Object> extends Object {
ORDERED:number
DISTINCT:number
SORTED:number
SIZED:number
NONNULL:number
IMMUTABLE:number
CONCURRENT:number
SUBSIZED:number

tryAdvance(arg0: Consumer<T>): boolean;

/* default */ forEachRemaining(arg0: Consumer<T>): void;

trySplit(): Spliterator<T>;

estimateSize(): number;

/* default */ getExactSizeIfKnown(): number;

characteristics(): number;

/* default */ hasCharacteristics(arg0: number): boolean;

/* default */ getComparator(): Comparator<T>;
 }
export namespace Spliterator { 
export interface OfDouble extends Spliterator.OfPrimitive<Number, DoubleConsumer, Spliterator.OfDouble>, Object {

trySplit(): Spliterator.OfDouble;

tryAdvance(arg0: DoubleConsumer): boolean;

/* default */ forEachRemaining(arg0: DoubleConsumer): void;

/* default */ tryAdvance(arg0: Consumer<Number>): boolean;

/* default */ forEachRemaining(arg0: Consumer<Number>): void;
 }

export interface OfInt extends Spliterator.OfPrimitive<Number, IntConsumer, Spliterator.OfInt>, Object {

trySplit(): Spliterator.OfInt;

tryAdvance(arg0: IntConsumer): boolean;

/* default */ forEachRemaining(arg0: IntConsumer): void;

/* default */ tryAdvance(arg0: Consumer<Number>): boolean;

/* default */ forEachRemaining(arg0: Consumer<Number>): void;
 }

export interface OfLong extends Spliterator.OfPrimitive<Number, LongConsumer, Spliterator.OfLong>, Object {

trySplit(): Spliterator.OfLong;

tryAdvance(arg0: LongConsumer): boolean;

/* default */ forEachRemaining(arg0: LongConsumer): void;

/* default */ tryAdvance(arg0: Consumer<Number>): boolean;

/* default */ forEachRemaining(arg0: Consumer<Number>): void;
 }

export interface OfPrimitive<T extends Object, T_CONS extends Object, T_SPLITR extends Spliterator.OfPrimitive<T, T_CONS, T_SPLITR>> extends Spliterator<T>, Object {

trySplit(): T_SPLITR;

tryAdvance(arg0: T_CONS): boolean;

/* default */ forEachRemaining(arg0: T_CONS): void;
 }

}

export class Spliterators {

static emptySpliterator<T extends Object>(): Spliterator<T>;

static emptyIntSpliterator(): Spliterator.OfInt;

static emptyLongSpliterator(): Spliterator.OfLong;

static emptyDoubleSpliterator(): Spliterator.OfDouble;

static spliterator<T extends Object>(arg0: Object[], arg1: number): Spliterator<T>;

static spliterator<T extends Object>(arg0: Object[], arg1: number, arg2: number, arg3: number): Spliterator<T>;

static spliterator(arg0: number[], arg1: number): Spliterator.OfInt;

static spliterator(arg0: number[], arg1: number, arg2: number, arg3: number): Spliterator.OfInt;

static spliterator(arg0: number[], arg1: number): Spliterator.OfLong;

static spliterator(arg0: number[], arg1: number, arg2: number, arg3: number): Spliterator.OfLong;

static spliterator(arg0: number[], arg1: number): Spliterator.OfDouble;

static spliterator(arg0: number[], arg1: number, arg2: number, arg3: number): Spliterator.OfDouble;

static spliterator<T extends Object>(arg0: Collection<T>, arg1: number): Spliterator<T>;

static spliterator<T extends Object>(arg0: Iterator<T>, arg1: number, arg2: number): Spliterator<T>;

static spliteratorUnknownSize<T extends Object>(arg0: Iterator<T>, arg1: number): Spliterator<T>;

static spliterator(arg0: PrimitiveIterator.OfInt, arg1: number, arg2: number): Spliterator.OfInt;

static spliteratorUnknownSize(arg0: PrimitiveIterator.OfInt, arg1: number): Spliterator.OfInt;

static spliterator(arg0: PrimitiveIterator.OfLong, arg1: number, arg2: number): Spliterator.OfLong;

static spliteratorUnknownSize(arg0: PrimitiveIterator.OfLong, arg1: number): Spliterator.OfLong;

static spliterator(arg0: PrimitiveIterator.OfDouble, arg1: number, arg2: number): Spliterator.OfDouble;

static spliteratorUnknownSize(arg0: PrimitiveIterator.OfDouble, arg1: number): Spliterator.OfDouble;

static iterator<T extends Object>(arg0: Spliterator<T>): Iterator<T>;

static iterator(arg0: Spliterator.OfInt): PrimitiveIterator.OfInt;

static iterator(arg0: Spliterator.OfLong): PrimitiveIterator.OfLong;

static iterator(arg0: Spliterator.OfDouble): PrimitiveIterator.OfDouble;
 }
export namespace Spliterators { 
export interface AbstractDoubleSpliterator extends Spliterator.OfDouble { }
export abstract class AbstractDoubleSpliterator implements Spliterator.OfDouble {

trySplit(): Spliterator.OfDouble;

estimateSize(): number;

characteristics(): number;
 }

export interface AbstractIntSpliterator extends Spliterator.OfInt { }
export abstract class AbstractIntSpliterator implements Spliterator.OfInt {

trySplit(): Spliterator.OfInt;

estimateSize(): number;

characteristics(): number;
 }

export interface AbstractLongSpliterator extends Spliterator.OfLong { }
export abstract class AbstractLongSpliterator implements Spliterator.OfLong {

trySplit(): Spliterator.OfLong;

estimateSize(): number;

characteristics(): number;
 }

export interface AbstractSpliterator<T extends Object> extends Spliterator<T> { }
export abstract class AbstractSpliterator<T extends Object> extends Object implements Spliterator<T> {

trySplit(): Spliterator<T>;

estimateSize(): number;

characteristics(): number;
 }

}

export interface SplittableRandom extends RandomGenerator, RandomGenerator.SplittableGenerator { }
export class SplittableRandom implements RandomGenerator, RandomGenerator.SplittableGenerator {
constructor(arg0: number);
constructor();

split(): SplittableRandom;

split(arg0: RandomGenerator.SplittableGenerator): SplittableRandom;

nextInt(): number;

nextLong(): number;

nextBytes(arg0: number[]): void;

splits(): Stream<RandomGenerator.SplittableGenerator>;

splits(arg0: number): Stream<RandomGenerator.SplittableGenerator>;

splits(arg0: RandomGenerator.SplittableGenerator): Stream<RandomGenerator.SplittableGenerator>;

splits(arg0: number, arg1: RandomGenerator.SplittableGenerator): Stream<RandomGenerator.SplittableGenerator>;

ints(arg0: number): IntStream;

ints(): IntStream;

ints(arg0: number, arg1: number, arg2: number): IntStream;

ints(arg0: number, arg1: number): IntStream;

longs(arg0: number): LongStream;

longs(): LongStream;

longs(arg0: number, arg1: number, arg2: number): LongStream;

longs(arg0: number, arg1: number): LongStream;

doubles(arg0: number): DoubleStream;

doubles(): DoubleStream;

doubles(arg0: number, arg1: number, arg2: number): DoubleStream;

doubles(arg0: number, arg1: number): DoubleStream;
 }

export interface Stack<E extends Object> { }
export class Stack<E extends Object> extends Vector<E> {
constructor();

push(arg0: E): E;

pop(): E;

peek(): E;

empty(): boolean;

search(arg0: Object): number;
 }

export class StringJoiner {
constructor(arg0: CharSequence);
constructor(arg0: CharSequence, arg1: CharSequence, arg2: CharSequence);

setEmptyValue(arg0: CharSequence): StringJoiner;
toString(): string;

add(arg0: CharSequence): StringJoiner;

merge(arg0: StringJoiner): StringJoiner;

length(): number;
 }

export interface StringTokenizer extends Enumeration<Object> { }
export class StringTokenizer extends Object implements Enumeration<Object> {
constructor(arg0: String, arg1: String, arg2: boolean);
constructor(arg0: String, arg1: String);
constructor(arg0: String);

hasMoreTokens(): boolean;

nextToken(): String;

nextToken(arg0: String): String;

hasMoreElements(): boolean;

nextElement(): Object;

countTokens(): number;
 }

export abstract class TimeZone implements Serializable, Cloneable {
static SHORT:number
static LONG:number
constructor();

abstract getOffset(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;

getOffset(arg0: number): number;

abstract setRawOffset(arg0: number): void;

abstract getRawOffset(): number;

getID(): String;

setID(arg0: String): void;

getDisplayName(): String;

getDisplayName(arg0: Locale): String;

getDisplayName(arg0: boolean, arg1: number): String;

getDisplayName(arg0: boolean, arg1: number, arg2: Locale): String;

getDSTSavings(): number;

abstract useDaylightTime(): boolean;

observesDaylightTime(): boolean;

abstract inDaylightTime(arg0: Date): boolean;

static getTimeZone(arg0: String): TimeZone;

static getTimeZone(arg0: ZoneId): TimeZone;

toZoneId(): ZoneId;

static getAvailableIDs(arg0: number): String[];

static getAvailableIDs(): String[];

static getDefault(): TimeZone;

static setDefault(arg0: TimeZone): void;

hasSameRules(arg0: TimeZone): boolean;

clone(): Object;
 }

export class Timer {
constructor();
constructor(arg0: boolean);
constructor(arg0: String);
constructor(arg0: String, arg1: boolean);

schedule(arg0: TimerTask, arg1: number): void;

schedule(arg0: TimerTask, arg1: Date): void;

schedule(arg0: TimerTask, arg1: number, arg2: number): void;

schedule(arg0: TimerTask, arg1: Date, arg2: number): void;

scheduleAtFixedRate(arg0: TimerTask, arg1: number, arg2: number): void;

scheduleAtFixedRate(arg0: TimerTask, arg1: Date, arg2: number): void;

cancel(): void;

purge(): number;
 }

export abstract class TimerTask implements Runnable {

abstract run(): void;

cancel(): boolean;

scheduledExecutionTime(): number;
 }

export class TooManyListenersException extends Exception {
constructor();
constructor(arg0: String);
 }

export interface TreeMap<K extends Object, V extends Object> extends NavigableMap<K, V>, Cloneable, Serializable { }
export class TreeMap<K extends Object, V extends Object> extends AbstractMap<K, V> implements NavigableMap<K, V>, Cloneable, Serializable {
constructor();
constructor(arg0: Comparator<K>);
constructor(arg0: Map<K, V>);
constructor(arg0: SortedMap<K, V>);

size(): number;

containsKey(arg0: Object): boolean;

containsValue(arg0: Object): boolean;

get(arg0: Object): V;

comparator(): Comparator<K>;

firstKey(): K;

lastKey(): K;

putAll(arg0: Map<K, V>): void;

put(arg0: K, arg1: V): V;

putIfAbsent(arg0: K, arg1: V): V;

computeIfAbsent(arg0: K, arg1: Function<K, V>): V;

computeIfPresent(arg0: K, arg1: BiFunction<K, V, V>): V;

compute(arg0: K, arg1: BiFunction<K, V, V>): V;

merge(arg0: K, arg1: V, arg2: BiFunction<V, V, V>): V;

remove(arg0: Object): V;

clear(): void;

clone(): Object;

firstEntry(): Map.Entry<K, V>;

lastEntry(): Map.Entry<K, V>;

pollFirstEntry(): Map.Entry<K, V>;

pollLastEntry(): Map.Entry<K, V>;

lowerEntry(arg0: K): Map.Entry<K, V>;

lowerKey(arg0: K): K;

floorEntry(arg0: K): Map.Entry<K, V>;

floorKey(arg0: K): K;

ceilingEntry(arg0: K): Map.Entry<K, V>;

ceilingKey(arg0: K): K;

higherEntry(arg0: K): Map.Entry<K, V>;

higherKey(arg0: K): K;

keySet(): Set<K>;

navigableKeySet(): NavigableSet<K>;

descendingKeySet(): NavigableSet<K>;

values(): Collection<V>;

entrySet(): Set<Map.Entry<K, V>>;

descendingMap(): NavigableMap<K, V>;

subMap(arg0: K, arg1: boolean, arg2: K, arg3: boolean): NavigableMap<K, V>;

headMap(arg0: K, arg1: boolean): NavigableMap<K, V>;

tailMap(arg0: K, arg1: boolean): NavigableMap<K, V>;

subMap(arg0: K, arg1: K): SortedMap<K, V>;

headMap(arg0: K): SortedMap<K, V>;

tailMap(arg0: K): SortedMap<K, V>;

replace(arg0: K, arg1: V, arg2: V): boolean;

replace(arg0: K, arg1: V): V;

forEach(arg0: BiConsumer<K, V>): void;

replaceAll(arg0: BiFunction<K, V, V>): void;
 }

export interface TreeSet<E extends Object> extends NavigableSet<E>, Cloneable, Serializable { }
export class TreeSet<E extends Object> extends AbstractSet<E> implements NavigableSet<E>, Cloneable, Serializable {
constructor();
constructor(arg0: Comparator<E>);
constructor(arg0: Collection<E>);
constructor(arg0: SortedSet<E>);

iterator(): Iterator<E>;

descendingIterator(): Iterator<E>;

descendingSet(): NavigableSet<E>;

size(): number;

isEmpty(): boolean;

contains(arg0: Object): boolean;

add(arg0: E): boolean;

remove(arg0: Object): boolean;

clear(): void;

addAll(arg0: Collection<E>): boolean;

subSet(arg0: E, arg1: boolean, arg2: E, arg3: boolean): NavigableSet<E>;

headSet(arg0: E, arg1: boolean): NavigableSet<E>;

tailSet(arg0: E, arg1: boolean): NavigableSet<E>;

subSet(arg0: E, arg1: E): SortedSet<E>;

headSet(arg0: E): SortedSet<E>;

tailSet(arg0: E): SortedSet<E>;

comparator(): Comparator<E>;

first(): E;

last(): E;

lower(arg0: E): E;

floor(arg0: E): E;

ceiling(arg0: E): E;

higher(arg0: E): E;

pollFirst(): E;

pollLast(): E;

clone(): Object;

spliterator(): Spliterator<E>;
 }

export class UUID extends Object implements Serializable, Comparable<UUID> {
constructor(arg0: number, arg1: number);

static randomUUID(): UUID;

static nameUUIDFromBytes(arg0: number[]): UUID;

static fromString(arg0: String): UUID;

getLeastSignificantBits(): number;

getMostSignificantBits(): number;

version(): number;

variant(): number;

timestamp(): number;

clockSequence(): number;

node(): number;
toString(): string;

hashCode(): number;

equals(arg0: Object): boolean;

compareTo(arg0: UUID): number;
 }

export class UnknownFormatConversionException extends IllegalFormatException {
constructor(arg0: String);

getConversion(): String;

getMessage(): String;
 }

export class UnknownFormatFlagsException extends IllegalFormatException {
constructor(arg0: String);

getFlags(): String;

getMessage(): String;
 }

export interface Vector<E extends Object> extends List<E>, RandomAccess, Cloneable, Serializable { }
export class Vector<E extends Object> extends AbstractList<E> implements List<E>, RandomAccess, Cloneable, Serializable {
constructor(arg0: number, arg1: number);
constructor(arg0: number);
constructor();
constructor(arg0: Collection<E>);

copyInto(arg0: Object[]): void;

trimToSize(): void;

ensureCapacity(arg0: number): void;

setSize(arg0: number): void;

capacity(): number;

size(): number;

isEmpty(): boolean;

elements(): Enumeration<E>;

contains(arg0: Object): boolean;

indexOf(arg0: Object): number;

indexOf(arg0: Object, arg1: number): number;

lastIndexOf(arg0: Object): number;

lastIndexOf(arg0: Object, arg1: number): number;

elementAt(arg0: number): E;

firstElement(): E;

lastElement(): E;

setElementAt(arg0: E, arg1: number): void;

removeElementAt(arg0: number): void;

insertElementAt(arg0: E, arg1: number): void;

addElement(arg0: E): void;

removeElement(arg0: Object): boolean;

removeAllElements(): void;

clone(): Object;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];

get(arg0: number): E;

set(arg0: number, arg1: E): E;

add(arg0: E): boolean;

remove(arg0: Object): boolean;

add(arg0: number, arg1: E): void;

remove(arg0: number): E;

clear(): void;

containsAll(arg0: Collection<any>): boolean;

addAll(arg0: Collection<E>): boolean;

removeAll(arg0: Collection<any>): boolean;

retainAll(arg0: Collection<any>): boolean;

removeIf(arg0: Predicate<E>): boolean;

addAll(arg0: number, arg1: Collection<E>): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;

subList(arg0: number, arg1: number): List<E>;

listIterator(arg0: number): ListIterator<E>;

listIterator(): ListIterator<E>;

iterator(): Iterator<E>;

forEach(arg0: Consumer<E>): void;

replaceAll(arg0: UnaryOperator<E>): void;

sort(arg0: Comparator<E>): void;

spliterator(): Spliterator<E>;
 }

export interface WeakHashMap<K extends Object, V extends Object> extends Map<K, V> { }
export class WeakHashMap<K extends Object, V extends Object> extends AbstractMap<K, V> implements Map<K, V> {
constructor(arg0: number, arg1: number);
constructor(arg0: number);
constructor();
constructor(arg0: Map<K, V>);

size(): number;

isEmpty(): boolean;

get(arg0: Object): V;

containsKey(arg0: Object): boolean;

put(arg0: K, arg1: V): V;

putAll(arg0: Map<K, V>): void;

remove(arg0: Object): V;

clear(): void;

containsValue(arg0: Object): boolean;

keySet(): Set<K>;

values(): Collection<V>;

entrySet(): Set<Map.Entry<K, V>>;

forEach(arg0: BiConsumer<K, V>): void;

replaceAll(arg0: BiFunction<K, V, V>): void;
 }

}
