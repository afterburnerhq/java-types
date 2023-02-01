/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.time.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.util.stream.d.ts" />
/// <reference path="java.util.function.d.ts" />
/// <reference path="java.time.temporal.d.ts" />
declare module '@afterburnerhq/java.util.concurrent' { 
import { PrivilegedAction, PrivilegedExceptionAction } from '@afterburnerhq/java.security'
import { Enum, IllegalStateException, Comparable, AutoCloseable, String, Exception, Thread, RuntimeException, Runnable, Throwable, Cloneable, Class, Void, Boolean } from '@afterburnerhq/java.lang'
import { NavigableSet, Set, Enumeration, NavigableMap, AbstractCollection, RandomAccess, AbstractSet, ListIterator, Deque, SortedSet, Comparator, AbstractMap, AbstractQueue, Random, SortedMap, Iterator, Collection, List, Queue, Map, Spliterator } from '@afterburnerhq/java.util'
import { Duration } from '@afterburnerhq/java.time'
import { Serializable } from '@afterburnerhq/java.io'
import { IntStream, DoubleStream, LongStream } from '@afterburnerhq/java.util.stream'
import { LongBinaryOperator, ToDoubleBiFunction, Predicate, Function, ToLongFunction, DoubleBinaryOperator, Consumer, BiFunction, ToIntBiFunction, IntBinaryOperator, Supplier, ToIntFunction, UnaryOperator, ToLongBiFunction, BiConsumer, BiPredicate, ToDoubleFunction } from '@afterburnerhq/java.util.function'
import { ChronoUnit } from '@afterburnerhq/java.time.temporal'
export abstract class AbstractExecutorService implements ExecutorService {
constructor();

submit(arg0: Runnable): Future<any>;

submit<T extends Object>(arg0: Runnable, arg1: T): Future<T>;

submit<T extends Object>(arg0: Callable<T>): Future<T>;

invokeAny<T extends Object>(arg0: Collection<Callable<T>>): T;

invokeAny<T extends Object>(arg0: Collection<Callable<T>>, arg1: number, arg2: TimeUnit): T;

invokeAll<T extends Object>(arg0: Collection<Callable<T>>): List<Future<T>>;

invokeAll<T extends Object>(arg0: Collection<Callable<T>>, arg1: number, arg2: TimeUnit): List<Future<T>>;
 }

export interface ArrayBlockingQueue<E extends Object> extends BlockingQueue<E>, Serializable { }
export class ArrayBlockingQueue<E extends Object> extends AbstractQueue<E> implements BlockingQueue<E>, Serializable {
constructor(arg0: number);
constructor(arg0: number, arg1: boolean);
constructor(arg0: number, arg1: boolean, arg2: Collection<E>);

add(arg0: E): boolean;

offer(arg0: E): boolean;

put(arg0: E): void;

offer(arg0: E, arg1: number, arg2: TimeUnit): boolean;

poll(): E;

take(): E;

poll(arg0: number, arg1: TimeUnit): E;

peek(): E;

size(): number;

remainingCapacity(): number;

remove(arg0: Object): boolean;

contains(arg0: Object): boolean;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];
toString(): string;

clear(): void;

drainTo(arg0: Collection<E>): number;

drainTo(arg0: Collection<E>, arg1: number): number;

iterator(): Iterator<E>;

spliterator(): Spliterator<E>;

forEach(arg0: Consumer<E>): void;

removeIf(arg0: Predicate<E>): boolean;

removeAll(arg0: Collection<any>): boolean;

retainAll(arg0: Collection<any>): boolean;
 }

export interface BlockingDeque<E extends Object> extends BlockingQueue<E>, Deque<E>, Object {

addFirst(arg0: E): void;

addLast(arg0: E): void;

offerFirst(arg0: E): boolean;

offerLast(arg0: E): boolean;

putFirst(arg0: E): void;

putLast(arg0: E): void;

offerFirst(arg0: E, arg1: number, arg2: TimeUnit): boolean;

offerLast(arg0: E, arg1: number, arg2: TimeUnit): boolean;

takeFirst(): E;

takeLast(): E;

pollFirst(arg0: number, arg1: TimeUnit): E;

pollLast(arg0: number, arg1: TimeUnit): E;

removeFirstOccurrence(arg0: Object): boolean;

removeLastOccurrence(arg0: Object): boolean;

add(arg0: E): boolean;

offer(arg0: E): boolean;

put(arg0: E): void;

offer(arg0: E, arg1: number, arg2: TimeUnit): boolean;

remove(): E;

poll(): E;

take(): E;

poll(arg0: number, arg1: TimeUnit): E;

element(): E;

peek(): E;

remove(arg0: Object): boolean;

contains(arg0: Object): boolean;

size(): number;

iterator(): Iterator<E>;

push(arg0: E): void;
 }

export interface BlockingQueue<E extends Object> extends Queue<E>, Object {

add(arg0: E): boolean;

offer(arg0: E): boolean;

put(arg0: E): void;

offer(arg0: E, arg1: number, arg2: TimeUnit): boolean;

take(): E;

poll(arg0: number, arg1: TimeUnit): E;

remainingCapacity(): number;

remove(arg0: Object): boolean;

contains(arg0: Object): boolean;

drainTo(arg0: Collection<E>): number;

drainTo(arg0: Collection<E>, arg1: number): number;
 }

export class BrokenBarrierException extends Exception {
constructor();
constructor(arg0: String);
 }

export interface Callable<V extends Object> extends Object {

call(): V;
 }

export class CancellationException extends IllegalStateException {
constructor();
constructor(arg0: String);
 }

export class CompletableFuture<T extends Object> extends Object implements Future<T>, CompletionStage<T> {
constructor();

static supplyAsync<U extends Object>(arg0: Supplier<U>): CompletableFuture<U>;

static supplyAsync<U extends Object>(arg0: Supplier<U>, arg1: Executor): CompletableFuture<U>;

static runAsync(arg0: Runnable): CompletableFuture<Void>;

static runAsync(arg0: Runnable, arg1: Executor): CompletableFuture<Void>;

static completedFuture<U extends Object>(arg0: U): CompletableFuture<U>;

isDone(): boolean;

get(): T;

get(arg0: number, arg1: TimeUnit): T;

join(): T;

getNow(arg0: T): T;

complete(arg0: T): boolean;

completeExceptionally(arg0: Throwable): boolean;

thenApply<U extends Object>(arg0: Function<T, U>): CompletableFuture<U>;

thenApplyAsync<U extends Object>(arg0: Function<T, U>): CompletableFuture<U>;

thenApplyAsync<U extends Object>(arg0: Function<T, U>, arg1: Executor): CompletableFuture<U>;

thenAccept(arg0: Consumer<T>): CompletableFuture<Void>;

thenAcceptAsync(arg0: Consumer<T>): CompletableFuture<Void>;

thenAcceptAsync(arg0: Consumer<T>, arg1: Executor): CompletableFuture<Void>;

thenRun(arg0: Runnable): CompletableFuture<Void>;

thenRunAsync(arg0: Runnable): CompletableFuture<Void>;

thenRunAsync(arg0: Runnable, arg1: Executor): CompletableFuture<Void>;

thenCombine<U extends Object, V extends Object>(arg0: CompletionStage<U>, arg1: BiFunction<T, U, V>): CompletableFuture<V>;

thenCombineAsync<U extends Object, V extends Object>(arg0: CompletionStage<U>, arg1: BiFunction<T, U, V>): CompletableFuture<V>;

thenCombineAsync<U extends Object, V extends Object>(arg0: CompletionStage<U>, arg1: BiFunction<T, U, V>, arg2: Executor): CompletableFuture<V>;

thenAcceptBoth<U extends Object>(arg0: CompletionStage<U>, arg1: BiConsumer<T, U>): CompletableFuture<Void>;

thenAcceptBothAsync<U extends Object>(arg0: CompletionStage<U>, arg1: BiConsumer<T, U>): CompletableFuture<Void>;

thenAcceptBothAsync<U extends Object>(arg0: CompletionStage<U>, arg1: BiConsumer<T, U>, arg2: Executor): CompletableFuture<Void>;

runAfterBoth(arg0: CompletionStage<any>, arg1: Runnable): CompletableFuture<Void>;

runAfterBothAsync(arg0: CompletionStage<any>, arg1: Runnable): CompletableFuture<Void>;

runAfterBothAsync(arg0: CompletionStage<any>, arg1: Runnable, arg2: Executor): CompletableFuture<Void>;

applyToEither<U extends Object>(arg0: CompletionStage<T>, arg1: Function<T, U>): CompletableFuture<U>;

applyToEitherAsync<U extends Object>(arg0: CompletionStage<T>, arg1: Function<T, U>): CompletableFuture<U>;

applyToEitherAsync<U extends Object>(arg0: CompletionStage<T>, arg1: Function<T, U>, arg2: Executor): CompletableFuture<U>;

acceptEither(arg0: CompletionStage<T>, arg1: Consumer<T>): CompletableFuture<Void>;

acceptEitherAsync(arg0: CompletionStage<T>, arg1: Consumer<T>): CompletableFuture<Void>;

acceptEitherAsync(arg0: CompletionStage<T>, arg1: Consumer<T>, arg2: Executor): CompletableFuture<Void>;

runAfterEither(arg0: CompletionStage<any>, arg1: Runnable): CompletableFuture<Void>;

runAfterEitherAsync(arg0: CompletionStage<any>, arg1: Runnable): CompletableFuture<Void>;

runAfterEitherAsync(arg0: CompletionStage<any>, arg1: Runnable, arg2: Executor): CompletableFuture<Void>;

thenCompose<U extends Object>(arg0: Function<T, CompletionStage<U>>): CompletableFuture<U>;

thenComposeAsync<U extends Object>(arg0: Function<T, CompletionStage<U>>): CompletableFuture<U>;

thenComposeAsync<U extends Object>(arg0: Function<T, CompletionStage<U>>, arg1: Executor): CompletableFuture<U>;

whenComplete(arg0: BiConsumer<T, Throwable>): CompletableFuture<T>;

whenCompleteAsync(arg0: BiConsumer<T, Throwable>): CompletableFuture<T>;

whenCompleteAsync(arg0: BiConsumer<T, Throwable>, arg1: Executor): CompletableFuture<T>;

handle<U extends Object>(arg0: BiFunction<T, Throwable, U>): CompletableFuture<U>;

handleAsync<U extends Object>(arg0: BiFunction<T, Throwable, U>): CompletableFuture<U>;

handleAsync<U extends Object>(arg0: BiFunction<T, Throwable, U>, arg1: Executor): CompletableFuture<U>;

toCompletableFuture(): CompletableFuture<T>;

exceptionally(arg0: Function<Throwable, T>): CompletableFuture<T>;

exceptionallyAsync(arg0: Function<Throwable, T>): CompletableFuture<T>;

exceptionallyAsync(arg0: Function<Throwable, T>, arg1: Executor): CompletableFuture<T>;

exceptionallyCompose(arg0: Function<Throwable, CompletionStage<T>>): CompletableFuture<T>;

exceptionallyComposeAsync(arg0: Function<Throwable, CompletionStage<T>>): CompletableFuture<T>;

exceptionallyComposeAsync(arg0: Function<Throwable, CompletionStage<T>>, arg1: Executor): CompletableFuture<T>;

static allOf(arg0: CompletableFuture<any>[]): CompletableFuture<Void>;

static anyOf(arg0: CompletableFuture<any>[]): CompletableFuture<Object>;

cancel(arg0: boolean): boolean;

isCancelled(): boolean;

isCompletedExceptionally(): boolean;

obtrudeValue(arg0: T): void;

obtrudeException(arg0: Throwable): void;

getNumberOfDependents(): number;
toString(): string;

newIncompleteFuture<U extends Object>(): CompletableFuture<U>;

defaultExecutor(): Executor;

copy(): CompletableFuture<T>;

minimalCompletionStage(): CompletionStage<T>;

completeAsync(arg0: Supplier<T>, arg1: Executor): CompletableFuture<T>;

completeAsync(arg0: Supplier<T>): CompletableFuture<T>;

orTimeout(arg0: number, arg1: TimeUnit): CompletableFuture<T>;

completeOnTimeout(arg0: T, arg1: number, arg2: TimeUnit): CompletableFuture<T>;

static delayedExecutor(arg0: number, arg1: TimeUnit, arg2: Executor): Executor;

static delayedExecutor(arg0: number, arg1: TimeUnit): Executor;

static completedStage<U extends Object>(arg0: U): CompletionStage<U>;

static failedFuture<U extends Object>(arg0: Throwable): CompletableFuture<U>;

static failedStage<U extends Object>(arg0: Throwable): CompletionStage<U>;
 }
export namespace CompletableFuture { 
export interface AsynchronousCompletionTask {
 }

}

export class CompletionException extends RuntimeException {
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export interface CompletionService<V extends Object> extends Object {

submit(arg0: Callable<V>): Future<V>;

submit(arg0: Runnable, arg1: V): Future<V>;

take(): Future<V>;

poll(): Future<V>;

poll(arg0: number, arg1: TimeUnit): Future<V>;
 }

export interface CompletionStage<T extends Object> extends Object {

thenApply<U extends Object>(arg0: Function<T, U>): CompletionStage<U>;

thenApplyAsync<U extends Object>(arg0: Function<T, U>): CompletionStage<U>;

thenApplyAsync<U extends Object>(arg0: Function<T, U>, arg1: Executor): CompletionStage<U>;

thenAccept(arg0: Consumer<T>): CompletionStage<Void>;

thenAcceptAsync(arg0: Consumer<T>): CompletionStage<Void>;

thenAcceptAsync(arg0: Consumer<T>, arg1: Executor): CompletionStage<Void>;

thenRun(arg0: Runnable): CompletionStage<Void>;

thenRunAsync(arg0: Runnable): CompletionStage<Void>;

thenRunAsync(arg0: Runnable, arg1: Executor): CompletionStage<Void>;

thenCombine<U extends Object, V extends Object>(arg0: CompletionStage<U>, arg1: BiFunction<T, U, V>): CompletionStage<V>;

thenCombineAsync<U extends Object, V extends Object>(arg0: CompletionStage<U>, arg1: BiFunction<T, U, V>): CompletionStage<V>;

thenCombineAsync<U extends Object, V extends Object>(arg0: CompletionStage<U>, arg1: BiFunction<T, U, V>, arg2: Executor): CompletionStage<V>;

thenAcceptBoth<U extends Object>(arg0: CompletionStage<U>, arg1: BiConsumer<T, U>): CompletionStage<Void>;

thenAcceptBothAsync<U extends Object>(arg0: CompletionStage<U>, arg1: BiConsumer<T, U>): CompletionStage<Void>;

thenAcceptBothAsync<U extends Object>(arg0: CompletionStage<U>, arg1: BiConsumer<T, U>, arg2: Executor): CompletionStage<Void>;

runAfterBoth(arg0: CompletionStage<any>, arg1: Runnable): CompletionStage<Void>;

runAfterBothAsync(arg0: CompletionStage<any>, arg1: Runnable): CompletionStage<Void>;

runAfterBothAsync(arg0: CompletionStage<any>, arg1: Runnable, arg2: Executor): CompletionStage<Void>;

applyToEither<U extends Object>(arg0: CompletionStage<T>, arg1: Function<T, U>): CompletionStage<U>;

applyToEitherAsync<U extends Object>(arg0: CompletionStage<T>, arg1: Function<T, U>): CompletionStage<U>;

applyToEitherAsync<U extends Object>(arg0: CompletionStage<T>, arg1: Function<T, U>, arg2: Executor): CompletionStage<U>;

acceptEither(arg0: CompletionStage<T>, arg1: Consumer<T>): CompletionStage<Void>;

acceptEitherAsync(arg0: CompletionStage<T>, arg1: Consumer<T>): CompletionStage<Void>;

acceptEitherAsync(arg0: CompletionStage<T>, arg1: Consumer<T>, arg2: Executor): CompletionStage<Void>;

runAfterEither(arg0: CompletionStage<any>, arg1: Runnable): CompletionStage<Void>;

runAfterEitherAsync(arg0: CompletionStage<any>, arg1: Runnable): CompletionStage<Void>;

runAfterEitherAsync(arg0: CompletionStage<any>, arg1: Runnable, arg2: Executor): CompletionStage<Void>;

thenCompose<U extends Object>(arg0: Function<T, CompletionStage<U>>): CompletionStage<U>;

thenComposeAsync<U extends Object>(arg0: Function<T, CompletionStage<U>>): CompletionStage<U>;

thenComposeAsync<U extends Object>(arg0: Function<T, CompletionStage<U>>, arg1: Executor): CompletionStage<U>;

handle<U extends Object>(arg0: BiFunction<T, Throwable, U>): CompletionStage<U>;

handleAsync<U extends Object>(arg0: BiFunction<T, Throwable, U>): CompletionStage<U>;

handleAsync<U extends Object>(arg0: BiFunction<T, Throwable, U>, arg1: Executor): CompletionStage<U>;

whenComplete(arg0: BiConsumer<T, Throwable>): CompletionStage<T>;

whenCompleteAsync(arg0: BiConsumer<T, Throwable>): CompletionStage<T>;

whenCompleteAsync(arg0: BiConsumer<T, Throwable>, arg1: Executor): CompletionStage<T>;

exceptionally(arg0: Function<Throwable, T>): CompletionStage<T>;

/* default */ exceptionallyAsync(arg0: Function<Throwable, T>): CompletionStage<T>;

/* default */ exceptionallyAsync(arg0: Function<Throwable, T>, arg1: Executor): CompletionStage<T>;

/* default */ exceptionallyCompose(arg0: Function<Throwable, CompletionStage<T>>): CompletionStage<T>;

/* default */ exceptionallyComposeAsync(arg0: Function<Throwable, CompletionStage<T>>): CompletionStage<T>;

/* default */ exceptionallyComposeAsync(arg0: Function<Throwable, CompletionStage<T>>, arg1: Executor): CompletionStage<T>;

toCompletableFuture(): CompletableFuture<T>;
 }

export class ConcurrentHashMap<K extends Object, V extends Object> extends AbstractMap<K, V> implements ConcurrentMap<K, V>, Serializable {
constructor();
constructor(arg0: number);
constructor(arg0: Map<K, V>);
constructor(arg0: number, arg1: number);
constructor(arg0: number, arg1: number, arg2: number);

size(): number;

isEmpty(): boolean;

get(arg0: Object): V;

containsKey(arg0: Object): boolean;

containsValue(arg0: Object): boolean;

put(arg0: K, arg1: V): V;

putAll(arg0: Map<K, V>): void;

remove(arg0: Object): V;

clear(): void;

keySet(): ConcurrentHashMap.KeySetView<K, V>;

values(): Collection<V>;

entrySet(): Set<Map.Entry<K, V>>;

hashCode(): number;
toString(): string;

equals(arg0: Object): boolean;

putIfAbsent(arg0: K, arg1: V): V;

remove(arg0: Object, arg1: Object): boolean;

replace(arg0: K, arg1: V, arg2: V): boolean;

replace(arg0: K, arg1: V): V;

getOrDefault(arg0: Object, arg1: V): V;

forEach(arg0: BiConsumer<K, V>): void;

replaceAll(arg0: BiFunction<K, V, V>): void;

computeIfAbsent(arg0: K, arg1: Function<K, V>): V;

computeIfPresent(arg0: K, arg1: BiFunction<K, V, V>): V;

compute(arg0: K, arg1: BiFunction<K, V, V>): V;

merge(arg0: K, arg1: V, arg2: BiFunction<V, V, V>): V;

contains(arg0: Object): boolean;

keys(): Enumeration<K>;

elements(): Enumeration<V>;

mappingCount(): number;

static newKeySet<K extends Object>(): ConcurrentHashMap.KeySetView<K, Boolean>;

static newKeySet<K extends Object>(arg0: number): ConcurrentHashMap.KeySetView<K, Boolean>;

keySet(arg0: V): ConcurrentHashMap.KeySetView<K, V>;

forEach(arg0: number, arg1: BiConsumer<K, V>): void;

forEach<U extends Object>(arg0: number, arg1: BiFunction<K, V, U>, arg2: Consumer<U>): void;

search<U extends Object>(arg0: number, arg1: BiFunction<K, V, U>): U;

reduce<U extends Object>(arg0: number, arg1: BiFunction<K, V, U>, arg2: BiFunction<U, U, U>): U;

reduceToDouble(arg0: number, arg1: ToDoubleBiFunction<K, V>, arg2: number, arg3: DoubleBinaryOperator): number;

reduceToLong(arg0: number, arg1: ToLongBiFunction<K, V>, arg2: number, arg3: LongBinaryOperator): number;

reduceToInt(arg0: number, arg1: ToIntBiFunction<K, V>, arg2: number, arg3: IntBinaryOperator): number;

forEachKey(arg0: number, arg1: Consumer<K>): void;

forEachKey<U extends Object>(arg0: number, arg1: Function<K, U>, arg2: Consumer<U>): void;

searchKeys<U extends Object>(arg0: number, arg1: Function<K, U>): U;

reduceKeys(arg0: number, arg1: BiFunction<K, K, K>): K;

reduceKeys<U extends Object>(arg0: number, arg1: Function<K, U>, arg2: BiFunction<U, U, U>): U;

reduceKeysToDouble(arg0: number, arg1: ToDoubleFunction<K>, arg2: number, arg3: DoubleBinaryOperator): number;

reduceKeysToLong(arg0: number, arg1: ToLongFunction<K>, arg2: number, arg3: LongBinaryOperator): number;

reduceKeysToInt(arg0: number, arg1: ToIntFunction<K>, arg2: number, arg3: IntBinaryOperator): number;

forEachValue(arg0: number, arg1: Consumer<V>): void;

forEachValue<U extends Object>(arg0: number, arg1: Function<V, U>, arg2: Consumer<U>): void;

searchValues<U extends Object>(arg0: number, arg1: Function<V, U>): U;

reduceValues(arg0: number, arg1: BiFunction<V, V, V>): V;

reduceValues<U extends Object>(arg0: number, arg1: Function<V, U>, arg2: BiFunction<U, U, U>): U;

reduceValuesToDouble(arg0: number, arg1: ToDoubleFunction<V>, arg2: number, arg3: DoubleBinaryOperator): number;

reduceValuesToLong(arg0: number, arg1: ToLongFunction<V>, arg2: number, arg3: LongBinaryOperator): number;

reduceValuesToInt(arg0: number, arg1: ToIntFunction<V>, arg2: number, arg3: IntBinaryOperator): number;

forEachEntry(arg0: number, arg1: Consumer<Map.Entry<K, V>>): void;

forEachEntry<U extends Object>(arg0: number, arg1: Function<Map.Entry<K, V>, U>, arg2: Consumer<U>): void;

searchEntries<U extends Object>(arg0: number, arg1: Function<Map.Entry<K, V>, U>): U;

reduceEntries(arg0: number, arg1: BiFunction<Map.Entry<K, V>, Map.Entry<K, V>, Map.Entry<K, V>>): Map.Entry<K, V>;

reduceEntries<U extends Object>(arg0: number, arg1: Function<Map.Entry<K, V>, U>, arg2: BiFunction<U, U, U>): U;

reduceEntriesToDouble(arg0: number, arg1: ToDoubleFunction<Map.Entry<K, V>>, arg2: number, arg3: DoubleBinaryOperator): number;

reduceEntriesToLong(arg0: number, arg1: ToLongFunction<Map.Entry<K, V>>, arg2: number, arg3: LongBinaryOperator): number;

reduceEntriesToInt(arg0: number, arg1: ToIntFunction<Map.Entry<K, V>>, arg2: number, arg3: IntBinaryOperator): number;
 }
export namespace ConcurrentHashMap { 
export interface KeySetView<K extends Object, V extends Object> extends Set<K>, Serializable { }
export class KeySetView<K extends Object, V extends Object> extends ConcurrentHashMap.CollectionView<K, V, K> implements Set<K>, Serializable {

getMappedValue(): V;

contains(arg0: Object): boolean;

remove(arg0: Object): boolean;

iterator(): Iterator<K>;

add(arg0: K): boolean;

addAll(arg0: Collection<K>): boolean;

hashCode(): number;

equals(arg0: Object): boolean;

spliterator(): Spliterator<K>;

forEach(arg0: Consumer<K>): void;
 }

}

export interface ConcurrentLinkedDeque<E extends Object> extends Deque<E>, Serializable { }
export class ConcurrentLinkedDeque<E extends Object> extends AbstractCollection<E> implements Deque<E>, Serializable {
constructor();
constructor(arg0: Collection<E>);

addFirst(arg0: E): void;

addLast(arg0: E): void;

offerFirst(arg0: E): boolean;

offerLast(arg0: E): boolean;

peekFirst(): E;

peekLast(): E;

getFirst(): E;

getLast(): E;

pollFirst(): E;

pollLast(): E;

removeFirst(): E;

removeLast(): E;

offer(arg0: E): boolean;

add(arg0: E): boolean;

poll(): E;

peek(): E;

remove(): E;

pop(): E;

element(): E;

push(arg0: E): void;

removeFirstOccurrence(arg0: Object): boolean;

removeLastOccurrence(arg0: Object): boolean;

contains(arg0: Object): boolean;

isEmpty(): boolean;

size(): number;

remove(arg0: Object): boolean;

addAll(arg0: Collection<E>): boolean;

clear(): void;
toString(): string;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];

iterator(): Iterator<E>;

descendingIterator(): Iterator<E>;

spliterator(): Spliterator<E>;

removeIf(arg0: Predicate<E>): boolean;

removeAll(arg0: Collection<any>): boolean;

retainAll(arg0: Collection<any>): boolean;

forEach(arg0: Consumer<E>): void;
 }

export interface ConcurrentLinkedQueue<E extends Object> extends Queue<E>, Serializable { }
export class ConcurrentLinkedQueue<E extends Object> extends AbstractQueue<E> implements Queue<E>, Serializable {
constructor();
constructor(arg0: Collection<E>);

add(arg0: E): boolean;

offer(arg0: E): boolean;

poll(): E;

peek(): E;

isEmpty(): boolean;

size(): number;

contains(arg0: Object): boolean;

remove(arg0: Object): boolean;

addAll(arg0: Collection<E>): boolean;
toString(): string;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];

iterator(): Iterator<E>;

spliterator(): Spliterator<E>;

removeIf(arg0: Predicate<E>): boolean;

removeAll(arg0: Collection<any>): boolean;

retainAll(arg0: Collection<any>): boolean;

clear(): void;

forEach(arg0: Consumer<E>): void;
 }

export interface ConcurrentMap<K extends Object, V extends Object> extends Map<K, V>, Object {

/* default */ getOrDefault(arg0: Object, arg1: V): V;

/* default */ forEach(arg0: BiConsumer<K, V>): void;

putIfAbsent(arg0: K, arg1: V): V;

remove(arg0: Object, arg1: Object): boolean;

replace(arg0: K, arg1: V, arg2: V): boolean;

replace(arg0: K, arg1: V): V;

/* default */ replaceAll(arg0: BiFunction<K, V, V>): void;

/* default */ computeIfAbsent(arg0: K, arg1: Function<K, V>): V;

/* default */ computeIfPresent(arg0: K, arg1: BiFunction<K, V, V>): V;

/* default */ compute(arg0: K, arg1: BiFunction<K, V, V>): V;

/* default */ merge(arg0: K, arg1: V, arg2: BiFunction<V, V, V>): V;
 }

export interface ConcurrentNavigableMap<K extends Object, V extends Object> extends ConcurrentMap<K, V>, NavigableMap<K, V>, Object {

subMap(arg0: K, arg1: boolean, arg2: K, arg3: boolean): ConcurrentNavigableMap<K, V>;

headMap(arg0: K, arg1: boolean): ConcurrentNavigableMap<K, V>;

tailMap(arg0: K, arg1: boolean): ConcurrentNavigableMap<K, V>;

subMap(arg0: K, arg1: K): ConcurrentNavigableMap<K, V>;

headMap(arg0: K): ConcurrentNavigableMap<K, V>;

tailMap(arg0: K): ConcurrentNavigableMap<K, V>;

descendingMap(): ConcurrentNavigableMap<K, V>;

navigableKeySet(): NavigableSet<K>;

keySet(): NavigableSet<K>;

descendingKeySet(): NavigableSet<K>;
 }

export class ConcurrentSkipListMap<K extends Object, V extends Object> extends AbstractMap<K, V> implements ConcurrentNavigableMap<K, V>, Cloneable, Serializable {
constructor();
constructor(arg0: Comparator<K>);
constructor(arg0: Map<K, V>);
constructor(arg0: SortedMap<K, V>);

clone(): ConcurrentSkipListMap<K, V>;

containsKey(arg0: Object): boolean;

get(arg0: Object): V;

getOrDefault(arg0: Object, arg1: V): V;

put(arg0: K, arg1: V): V;

remove(arg0: Object): V;

containsValue(arg0: Object): boolean;

size(): number;

isEmpty(): boolean;

clear(): void;

computeIfAbsent(arg0: K, arg1: Function<K, V>): V;

computeIfPresent(arg0: K, arg1: BiFunction<K, V, V>): V;

compute(arg0: K, arg1: BiFunction<K, V, V>): V;

merge(arg0: K, arg1: V, arg2: BiFunction<V, V, V>): V;

keySet(): NavigableSet<K>;

navigableKeySet(): NavigableSet<K>;

values(): Collection<V>;

entrySet(): Set<Map.Entry<K, V>>;

descendingMap(): ConcurrentNavigableMap<K, V>;

descendingKeySet(): NavigableSet<K>;

equals(arg0: Object): boolean;

putIfAbsent(arg0: K, arg1: V): V;

remove(arg0: Object, arg1: Object): boolean;

replace(arg0: K, arg1: V, arg2: V): boolean;

replace(arg0: K, arg1: V): V;

comparator(): Comparator<K>;

firstKey(): K;

lastKey(): K;

subMap(arg0: K, arg1: boolean, arg2: K, arg3: boolean): ConcurrentNavigableMap<K, V>;

headMap(arg0: K, arg1: boolean): ConcurrentNavigableMap<K, V>;

tailMap(arg0: K, arg1: boolean): ConcurrentNavigableMap<K, V>;

subMap(arg0: K, arg1: K): ConcurrentNavigableMap<K, V>;

headMap(arg0: K): ConcurrentNavigableMap<K, V>;

tailMap(arg0: K): ConcurrentNavigableMap<K, V>;

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

forEach(arg0: BiConsumer<K, V>): void;

replaceAll(arg0: BiFunction<K, V, V>): void;
 }

export interface ConcurrentSkipListSet<E extends Object> extends NavigableSet<E>, Cloneable, Serializable { }
export class ConcurrentSkipListSet<E extends Object> extends AbstractSet<E> implements NavigableSet<E>, Cloneable, Serializable {
constructor();
constructor(arg0: Comparator<E>);
constructor(arg0: Collection<E>);
constructor(arg0: SortedSet<E>);

clone(): ConcurrentSkipListSet<E>;

size(): number;

isEmpty(): boolean;

contains(arg0: Object): boolean;

add(arg0: E): boolean;

remove(arg0: Object): boolean;

clear(): void;

iterator(): Iterator<E>;

descendingIterator(): Iterator<E>;

equals(arg0: Object): boolean;

removeAll(arg0: Collection<any>): boolean;

lower(arg0: E): E;

floor(arg0: E): E;

ceiling(arg0: E): E;

higher(arg0: E): E;

pollFirst(): E;

pollLast(): E;

comparator(): Comparator<E>;

first(): E;

last(): E;

subSet(arg0: E, arg1: boolean, arg2: E, arg3: boolean): NavigableSet<E>;

headSet(arg0: E, arg1: boolean): NavigableSet<E>;

tailSet(arg0: E, arg1: boolean): NavigableSet<E>;

subSet(arg0: E, arg1: E): NavigableSet<E>;

headSet(arg0: E): NavigableSet<E>;

tailSet(arg0: E): NavigableSet<E>;

descendingSet(): NavigableSet<E>;

spliterator(): Spliterator<E>;
 }

export interface CopyOnWriteArrayList<E extends Object> extends List<E>, RandomAccess, Cloneable, Serializable { }
export class CopyOnWriteArrayList<E extends Object> extends Object implements List<E>, RandomAccess, Cloneable, Serializable {
constructor();
constructor(arg0: Collection<E>);
constructor(arg0: E[]);

size(): number;

isEmpty(): boolean;

contains(arg0: Object): boolean;

indexOf(arg0: Object): number;

indexOf(arg0: E, arg1: number): number;

lastIndexOf(arg0: Object): number;

lastIndexOf(arg0: E, arg1: number): number;

clone(): Object;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];

get(arg0: number): E;

set(arg0: number, arg1: E): E;

add(arg0: E): boolean;

add(arg0: number, arg1: E): void;

remove(arg0: number): E;

remove(arg0: Object): boolean;

addIfAbsent(arg0: E): boolean;

containsAll(arg0: Collection<any>): boolean;

removeAll(arg0: Collection<any>): boolean;

retainAll(arg0: Collection<any>): boolean;

addAllAbsent(arg0: Collection<E>): number;

clear(): void;

addAll(arg0: Collection<E>): boolean;

addAll(arg0: number, arg1: Collection<E>): boolean;

forEach(arg0: Consumer<E>): void;

removeIf(arg0: Predicate<E>): boolean;

replaceAll(arg0: UnaryOperator<E>): void;

sort(arg0: Comparator<E>): void;
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;

iterator(): Iterator<E>;

listIterator(): ListIterator<E>;

listIterator(arg0: number): ListIterator<E>;

spliterator(): Spliterator<E>;

subList(arg0: number, arg1: number): List<E>;
 }

export interface CopyOnWriteArraySet<E extends Object> extends Serializable { }
export class CopyOnWriteArraySet<E extends Object> extends AbstractSet<E> implements Serializable {
constructor();
constructor(arg0: Collection<E>);

size(): number;

isEmpty(): boolean;

contains(arg0: Object): boolean;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];

clear(): void;

remove(arg0: Object): boolean;

add(arg0: E): boolean;

containsAll(arg0: Collection<any>): boolean;

addAll(arg0: Collection<E>): boolean;

removeAll(arg0: Collection<any>): boolean;

retainAll(arg0: Collection<any>): boolean;

iterator(): Iterator<E>;

equals(arg0: Object): boolean;

removeIf(arg0: Predicate<E>): boolean;

forEach(arg0: Consumer<E>): void;

spliterator(): Spliterator<E>;
 }

export class CountDownLatch {
constructor(arg0: number);

await(): void;

await(arg0: number, arg1: TimeUnit): boolean;

countDown(): void;

getCount(): number;
toString(): string;
 }

export abstract class CountedCompleter<T extends Object> extends ForkJoinTask<T> {

abstract compute(): void;

onCompletion(arg0: CountedCompleter<any>): void;

onExceptionalCompletion(arg0: Throwable, arg1: CountedCompleter<any>): boolean;

getCompleter(): CountedCompleter<any>;

getPendingCount(): number;

setPendingCount(arg0: number): void;

addToPendingCount(arg0: number): void;

compareAndSetPendingCount(arg0: number, arg1: number): boolean;

decrementPendingCountUnlessZero(): number;

getRoot(): CountedCompleter<any>;

tryComplete(): void;

propagateCompletion(): void;

complete(arg0: T): void;

firstComplete(): CountedCompleter<any>;

nextComplete(): CountedCompleter<any>;

quietlyCompleteRoot(): void;

helpComplete(arg0: number): void;

getRawResult(): T;
 }

export class CyclicBarrier {
constructor(arg0: number, arg1: Runnable);
constructor(arg0: number);

getParties(): number;

await(): number;

await(arg0: number, arg1: TimeUnit): number;

isBroken(): boolean;

reset(): void;

getNumberWaiting(): number;
 }

export interface DelayQueue<E extends Delayed> extends BlockingQueue<E> { }
export class DelayQueue<E extends Delayed> extends AbstractQueue<E> implements BlockingQueue<E> {
constructor();
constructor(arg0: Collection<E>);

add(arg0: E): boolean;

offer(arg0: E): boolean;

put(arg0: E): void;

offer(arg0: E, arg1: number, arg2: TimeUnit): boolean;

poll(): E;

take(): E;

poll(arg0: number, arg1: TimeUnit): E;

peek(): E;

size(): number;

drainTo(arg0: Collection<E>): number;

drainTo(arg0: Collection<E>, arg1: number): number;

clear(): void;

remainingCapacity(): number;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];

remove(arg0: Object): boolean;

iterator(): Iterator<E>;
 }

export interface Delayed extends Comparable<Delayed>, Object {

getDelay(arg0: TimeUnit): number;
 }

export class Exchanger<V extends Object> extends Object {
constructor();

exchange(arg0: V): V;

exchange(arg0: V, arg1: number, arg2: TimeUnit): V;
 }

export class ExecutionException extends Exception {
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export interface Executor {

execute(arg0: Runnable): void;
 }

export class ExecutorCompletionService<V extends Object> extends Object implements CompletionService<V> {
constructor(arg0: Executor);
constructor(arg0: Executor, arg1: BlockingQueue<Future<V>>);

submit(arg0: Callable<V>): Future<V>;

submit(arg0: Runnable, arg1: V): Future<V>;

take(): Future<V>;

poll(): Future<V>;

poll(arg0: number, arg1: TimeUnit): Future<V>;
 }

export interface ExecutorService extends Executor {

shutdown(): void;

shutdownNow(): List<Runnable>;

isShutdown(): boolean;

isTerminated(): boolean;

awaitTermination(arg0: number, arg1: TimeUnit): boolean;

submit<T extends Object>(arg0: Callable<T>): Future<T>;

submit<T extends Object>(arg0: Runnable, arg1: T): Future<T>;

submit(arg0: Runnable): Future<any>;

invokeAll<T extends Object>(arg0: Collection<Callable<T>>): List<Future<T>>;

invokeAll<T extends Object>(arg0: Collection<Callable<T>>, arg1: number, arg2: TimeUnit): List<Future<T>>;

invokeAny<T extends Object>(arg0: Collection<Callable<T>>): T;

invokeAny<T extends Object>(arg0: Collection<Callable<T>>, arg1: number, arg2: TimeUnit): T;
 }

export class Executors {

static newFixedThreadPool(arg0: number): ExecutorService;

static newWorkStealingPool(arg0: number): ExecutorService;

static newWorkStealingPool(): ExecutorService;

static newFixedThreadPool(arg0: number, arg1: ThreadFactory): ExecutorService;

static newSingleThreadExecutor(): ExecutorService;

static newSingleThreadExecutor(arg0: ThreadFactory): ExecutorService;

static newCachedThreadPool(): ExecutorService;

static newCachedThreadPool(arg0: ThreadFactory): ExecutorService;

static newSingleThreadScheduledExecutor(): ScheduledExecutorService;

static newSingleThreadScheduledExecutor(arg0: ThreadFactory): ScheduledExecutorService;

static newScheduledThreadPool(arg0: number): ScheduledExecutorService;

static newScheduledThreadPool(arg0: number, arg1: ThreadFactory): ScheduledExecutorService;

static unconfigurableExecutorService(arg0: ExecutorService): ExecutorService;

static unconfigurableScheduledExecutorService(arg0: ScheduledExecutorService): ScheduledExecutorService;

static defaultThreadFactory(): ThreadFactory;

static privilegedThreadFactory(): ThreadFactory;

static callable<T extends Object>(arg0: Runnable, arg1: T): Callable<T>;

static callable(arg0: Runnable): Callable<Object>;

static callable(arg0: PrivilegedAction<any>): Callable<Object>;

static callable(arg0: PrivilegedExceptionAction<any>): Callable<Object>;

static privilegedCallable<T extends Object>(arg0: Callable<T>): Callable<T>;

static privilegedCallableUsingCurrentClassLoader<T extends Object>(arg0: Callable<T>): Callable<T>;
 }

export class Flow {

static defaultBufferSize(): number;
 }
export namespace Flow { 
export interface Processor<T extends Object, R extends Object> extends Flow.Subscriber<T>, Flow.Publisher<R>, Object {
 }

export interface Publisher<T extends Object> extends Object {

subscribe(arg0: Flow.Subscriber<T>): void;
 }

export interface Subscriber<T extends Object> extends Object {

onSubscribe(arg0: Flow.Subscription): void;

onNext(arg0: T): void;

onError(arg0: Throwable): void;

onComplete(): void;
 }

export interface Subscription {

request(arg0: number): void;

cancel(): void;
 }

}

export class ForkJoinPool extends AbstractExecutorService {
static defaultForkJoinWorkerThreadFactory:ForkJoinPool.ForkJoinWorkerThreadFactory
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: ForkJoinPool.ForkJoinWorkerThreadFactory, arg2: Thread.UncaughtExceptionHandler, arg3: boolean);
constructor(arg0: number, arg1: ForkJoinPool.ForkJoinWorkerThreadFactory, arg2: Thread.UncaughtExceptionHandler, arg3: boolean, arg4: number, arg5: number, arg6: number, arg7: Predicate<ForkJoinPool>, arg8: number, arg9: TimeUnit);

static commonPool(): ForkJoinPool;

invoke<T extends Object>(arg0: ForkJoinTask<T>): T;

execute(arg0: ForkJoinTask<any>): void;

execute(arg0: Runnable): void;

submit<T extends Object>(arg0: ForkJoinTask<T>): ForkJoinTask<T>;

submit<T extends Object>(arg0: Callable<T>): ForkJoinTask<T>;

submit<T extends Object>(arg0: Runnable, arg1: T): ForkJoinTask<T>;

submit(arg0: Runnable): ForkJoinTask<any>;

invokeAll<T extends Object>(arg0: Collection<Callable<T>>): List<Future<T>>;

invokeAll<T extends Object>(arg0: Collection<Callable<T>>, arg1: number, arg2: TimeUnit): List<Future<T>>;

invokeAny<T extends Object>(arg0: Collection<Callable<T>>): T;

invokeAny<T extends Object>(arg0: Collection<Callable<T>>, arg1: number, arg2: TimeUnit): T;

getFactory(): ForkJoinPool.ForkJoinWorkerThreadFactory;

getUncaughtExceptionHandler(): Thread.UncaughtExceptionHandler;

getParallelism(): number;

static getCommonPoolParallelism(): number;

getPoolSize(): number;

getAsyncMode(): boolean;

getRunningThreadCount(): number;

getActiveThreadCount(): number;

isQuiescent(): boolean;

getStealCount(): number;

getQueuedTaskCount(): number;

getQueuedSubmissionCount(): number;

hasQueuedSubmissions(): boolean;
toString(): string;

shutdown(): void;

shutdownNow(): List<Runnable>;

isTerminated(): boolean;

isTerminating(): boolean;

isShutdown(): boolean;

awaitTermination(arg0: number, arg1: TimeUnit): boolean;

awaitQuiescence(arg0: number, arg1: TimeUnit): boolean;

static managedBlock(arg0: ForkJoinPool.ManagedBlocker): void;
 }
export namespace ForkJoinPool { 
export interface ForkJoinWorkerThreadFactory {

newThread(arg0: ForkJoinPool): ForkJoinWorkerThread;
 }

export interface ManagedBlocker {

block(): boolean;

isReleasable(): boolean;
 }

}

export abstract class ForkJoinTask<V extends Object> extends Object implements Future<V>, Serializable {
constructor();

fork(): ForkJoinTask<V>;

join(): V;

invoke(): V;

static invokeAll(arg0: ForkJoinTask<any>, arg1: ForkJoinTask<any>): void;

static invokeAll(arg0: ForkJoinTask<any>[]): void;

static invokeAll<T extends ForkJoinTask<any>>(arg0: Collection<T>): Collection<T>;

cancel(arg0: boolean): boolean;

isDone(): boolean;

isCancelled(): boolean;

isCompletedAbnormally(): boolean;

isCompletedNormally(): boolean;

getException(): Throwable;

completeExceptionally(arg0: Throwable): void;

complete(arg0: V): void;

quietlyComplete(): void;

get(): V;

get(arg0: number, arg1: TimeUnit): V;

quietlyJoin(): void;

quietlyInvoke(): void;

static helpQuiesce(): void;

reinitialize(): void;

static getPool(): ForkJoinPool;

static inForkJoinPool(): boolean;

tryUnfork(): boolean;

static getQueuedTaskCount(): number;

static getSurplusQueuedTaskCount(): number;

abstract getRawResult(): V;

getForkJoinTaskTag(): number;

setForkJoinTaskTag(arg0: number): number;

compareAndSetForkJoinTaskTag(arg0: number, arg1: number): boolean;

static adapt(arg0: Runnable): ForkJoinTask<any>;

static adapt<T extends Object>(arg0: Runnable, arg1: T): ForkJoinTask<T>;

static adapt<T extends Object>(arg0: Callable<T>): ForkJoinTask<T>;
 }

export class ForkJoinWorkerThread extends Thread {

getPool(): ForkJoinPool;

getPoolIndex(): number;

run(): void;
 }

export interface Future<V extends Object> extends Object {

cancel(arg0: boolean): boolean;

isCancelled(): boolean;

isDone(): boolean;

get(): V;

get(arg0: number, arg1: TimeUnit): V;
 }

export class FutureTask<V extends Object> extends Object implements RunnableFuture<V> {
constructor(arg0: Callable<V>);
constructor(arg0: Runnable, arg1: V);

isCancelled(): boolean;

isDone(): boolean;

cancel(arg0: boolean): boolean;

get(): V;

get(arg0: number, arg1: TimeUnit): V;

run(): void;
toString(): string;
 }

export interface LinkedBlockingDeque<E extends Object> extends BlockingDeque<E>, Serializable { }
export class LinkedBlockingDeque<E extends Object> extends AbstractQueue<E> implements BlockingDeque<E>, Serializable {
constructor();
constructor(arg0: number);
constructor(arg0: Collection<E>);

addFirst(arg0: E): void;

addLast(arg0: E): void;

offerFirst(arg0: E): boolean;

offerLast(arg0: E): boolean;

putFirst(arg0: E): void;

putLast(arg0: E): void;

offerFirst(arg0: E, arg1: number, arg2: TimeUnit): boolean;

offerLast(arg0: E, arg1: number, arg2: TimeUnit): boolean;

removeFirst(): E;

removeLast(): E;

pollFirst(): E;

pollLast(): E;

takeFirst(): E;

takeLast(): E;

pollFirst(arg0: number, arg1: TimeUnit): E;

pollLast(arg0: number, arg1: TimeUnit): E;

getFirst(): E;

getLast(): E;

peekFirst(): E;

peekLast(): E;

removeFirstOccurrence(arg0: Object): boolean;

removeLastOccurrence(arg0: Object): boolean;

add(arg0: E): boolean;

offer(arg0: E): boolean;

put(arg0: E): void;

offer(arg0: E, arg1: number, arg2: TimeUnit): boolean;

remove(): E;

poll(): E;

take(): E;

poll(arg0: number, arg1: TimeUnit): E;

element(): E;

peek(): E;

remainingCapacity(): number;

drainTo(arg0: Collection<E>): number;

drainTo(arg0: Collection<E>, arg1: number): number;

push(arg0: E): void;

pop(): E;

remove(arg0: Object): boolean;

size(): number;

contains(arg0: Object): boolean;

addAll(arg0: Collection<E>): boolean;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];
toString(): string;

clear(): void;

iterator(): Iterator<E>;

descendingIterator(): Iterator<E>;

spliterator(): Spliterator<E>;

forEach(arg0: Consumer<E>): void;

removeIf(arg0: Predicate<E>): boolean;

removeAll(arg0: Collection<any>): boolean;

retainAll(arg0: Collection<any>): boolean;
 }

export interface LinkedBlockingQueue<E extends Object> extends BlockingQueue<E>, Serializable { }
export class LinkedBlockingQueue<E extends Object> extends AbstractQueue<E> implements BlockingQueue<E>, Serializable {
constructor();
constructor(arg0: number);
constructor(arg0: Collection<E>);

size(): number;

remainingCapacity(): number;

put(arg0: E): void;

offer(arg0: E, arg1: number, arg2: TimeUnit): boolean;

offer(arg0: E): boolean;

take(): E;

poll(arg0: number, arg1: TimeUnit): E;

poll(): E;

peek(): E;

remove(arg0: Object): boolean;

contains(arg0: Object): boolean;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];
toString(): string;

clear(): void;

drainTo(arg0: Collection<E>): number;

drainTo(arg0: Collection<E>, arg1: number): number;

iterator(): Iterator<E>;

spliterator(): Spliterator<E>;

forEach(arg0: Consumer<E>): void;

removeIf(arg0: Predicate<E>): boolean;

removeAll(arg0: Collection<any>): boolean;

retainAll(arg0: Collection<any>): boolean;
 }

export interface LinkedTransferQueue<E extends Object> extends TransferQueue<E>, Serializable { }
export class LinkedTransferQueue<E extends Object> extends AbstractQueue<E> implements TransferQueue<E>, Serializable {
constructor();
constructor(arg0: Collection<E>);
toString(): string;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];

spliterator(): Spliterator<E>;

put(arg0: E): void;

offer(arg0: E, arg1: number, arg2: TimeUnit): boolean;

offer(arg0: E): boolean;

add(arg0: E): boolean;

tryTransfer(arg0: E): boolean;

transfer(arg0: E): void;

tryTransfer(arg0: E, arg1: number, arg2: TimeUnit): boolean;

take(): E;

poll(arg0: number, arg1: TimeUnit): E;

poll(): E;

drainTo(arg0: Collection<E>): number;

drainTo(arg0: Collection<E>, arg1: number): number;

iterator(): Iterator<E>;

peek(): E;

isEmpty(): boolean;

hasWaitingConsumer(): boolean;

size(): number;

getWaitingConsumerCount(): number;

remove(arg0: Object): boolean;

contains(arg0: Object): boolean;

remainingCapacity(): number;

removeIf(arg0: Predicate<E>): boolean;

removeAll(arg0: Collection<any>): boolean;

retainAll(arg0: Collection<any>): boolean;

clear(): void;

forEach(arg0: Consumer<E>): void;
 }

export class Phaser {
constructor();
constructor(arg0: number);
constructor(arg0: Phaser);
constructor(arg0: Phaser, arg1: number);

register(): number;

bulkRegister(arg0: number): number;

arrive(): number;

arriveAndDeregister(): number;

arriveAndAwaitAdvance(): number;

awaitAdvance(arg0: number): number;

awaitAdvanceInterruptibly(arg0: number): number;

awaitAdvanceInterruptibly(arg0: number, arg1: number, arg2: TimeUnit): number;

forceTermination(): void;

getPhase(): number;

getRegisteredParties(): number;

getArrivedParties(): number;

getUnarrivedParties(): number;

getParent(): Phaser;

getRoot(): Phaser;

isTerminated(): boolean;
toString(): string;
 }

export interface PriorityBlockingQueue<E extends Object> extends BlockingQueue<E>, Serializable { }
export class PriorityBlockingQueue<E extends Object> extends AbstractQueue<E> implements BlockingQueue<E>, Serializable {
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: Comparator<E>);
constructor(arg0: Collection<E>);

add(arg0: E): boolean;

offer(arg0: E): boolean;

put(arg0: E): void;

offer(arg0: E, arg1: number, arg2: TimeUnit): boolean;

poll(): E;

take(): E;

poll(arg0: number, arg1: TimeUnit): E;

peek(): E;

comparator(): Comparator<E>;

size(): number;

remainingCapacity(): number;

remove(arg0: Object): boolean;

contains(arg0: Object): boolean;
toString(): string;

drainTo(arg0: Collection<E>): number;

drainTo(arg0: Collection<E>, arg1: number): number;

clear(): void;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];

iterator(): Iterator<E>;

spliterator(): Spliterator<E>;

removeIf(arg0: Predicate<E>): boolean;

removeAll(arg0: Collection<any>): boolean;

retainAll(arg0: Collection<any>): boolean;

forEach(arg0: Consumer<E>): void;
 }

export abstract class RecursiveAction extends ForkJoinTask<Void> {
constructor();

getRawResult(): Void;
 }

export abstract class RecursiveTask<V extends Object> extends ForkJoinTask<V> {
constructor();

getRawResult(): V;
 }

export class RejectedExecutionException extends RuntimeException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export interface RejectedExecutionHandler {

rejectedExecution(arg0: Runnable, arg1: ThreadPoolExecutor): void;
 }

export interface RunnableFuture<V extends Object> extends Runnable, Future<V>, Object {

run(): void;
 }

export interface RunnableScheduledFuture<V extends Object> extends RunnableFuture<V>, ScheduledFuture<V>, Object {

isPeriodic(): boolean;
 }

export interface ScheduledExecutorService extends ExecutorService {

schedule(arg0: Runnable, arg1: number, arg2: TimeUnit): ScheduledFuture<any>;

schedule<V extends Object>(arg0: Callable<V>, arg1: number, arg2: TimeUnit): ScheduledFuture<V>;

scheduleAtFixedRate(arg0: Runnable, arg1: number, arg2: number, arg3: TimeUnit): ScheduledFuture<any>;

scheduleWithFixedDelay(arg0: Runnable, arg1: number, arg2: number, arg3: TimeUnit): ScheduledFuture<any>;
 }

export interface ScheduledFuture<V extends Object> extends Delayed, Future<V>, Object {
 }

export class ScheduledThreadPoolExecutor extends ThreadPoolExecutor implements ScheduledExecutorService {
constructor(arg0: number);
constructor(arg0: number, arg1: ThreadFactory);
constructor(arg0: number, arg1: RejectedExecutionHandler);
constructor(arg0: number, arg1: ThreadFactory, arg2: RejectedExecutionHandler);

schedule(arg0: Runnable, arg1: number, arg2: TimeUnit): ScheduledFuture<any>;

schedule<V extends Object>(arg0: Callable<V>, arg1: number, arg2: TimeUnit): ScheduledFuture<V>;

scheduleAtFixedRate(arg0: Runnable, arg1: number, arg2: number, arg3: TimeUnit): ScheduledFuture<any>;

scheduleWithFixedDelay(arg0: Runnable, arg1: number, arg2: number, arg3: TimeUnit): ScheduledFuture<any>;

execute(arg0: Runnable): void;

submit(arg0: Runnable): Future<any>;

submit<T extends Object>(arg0: Runnable, arg1: T): Future<T>;

submit<T extends Object>(arg0: Callable<T>): Future<T>;

setContinueExistingPeriodicTasksAfterShutdownPolicy(arg0: boolean): void;

getContinueExistingPeriodicTasksAfterShutdownPolicy(): boolean;

setExecuteExistingDelayedTasksAfterShutdownPolicy(arg0: boolean): void;

getExecuteExistingDelayedTasksAfterShutdownPolicy(): boolean;

setRemoveOnCancelPolicy(arg0: boolean): void;

getRemoveOnCancelPolicy(): boolean;

shutdown(): void;

shutdownNow(): List<Runnable>;

getQueue(): BlockingQueue<Runnable>;
 }

export class Semaphore implements Serializable {
constructor(arg0: number);
constructor(arg0: number, arg1: boolean);

acquire(): void;

acquireUninterruptibly(): void;

tryAcquire(): boolean;

tryAcquire(arg0: number, arg1: TimeUnit): boolean;

release(): void;

acquire(arg0: number): void;

acquireUninterruptibly(arg0: number): void;

tryAcquire(arg0: number): boolean;

tryAcquire(arg0: number, arg1: number, arg2: TimeUnit): boolean;

release(arg0: number): void;

availablePermits(): number;

drainPermits(): number;

isFair(): boolean;

hasQueuedThreads(): boolean;

getQueueLength(): number;
toString(): string;
 }

export class SubmissionPublisher<T extends Object> extends Object implements Flow.Publisher<T>, AutoCloseable {
constructor(arg0: Executor, arg1: number, arg2: BiConsumer<Flow.Subscriber<T>, Throwable>);
constructor(arg0: Executor, arg1: number);
constructor();

subscribe(arg0: Flow.Subscriber<T>): void;

submit(arg0: T): number;

offer(arg0: T, arg1: BiPredicate<Flow.Subscriber<T>, T>): number;

offer(arg0: T, arg1: number, arg2: TimeUnit, arg3: BiPredicate<Flow.Subscriber<T>, T>): number;

close(): void;

closeExceptionally(arg0: Throwable): void;

isClosed(): boolean;

getClosedException(): Throwable;

hasSubscribers(): boolean;

getNumberOfSubscribers(): number;

getExecutor(): Executor;

getMaxBufferCapacity(): number;

getSubscribers(): List<Flow.Subscriber<T>>;

isSubscribed(arg0: Flow.Subscriber<T>): boolean;

estimateMinimumDemand(): number;

estimateMaximumLag(): number;

consume(arg0: Consumer<T>): CompletableFuture<Void>;
 }

export interface SynchronousQueue<E extends Object> extends BlockingQueue<E>, Serializable { }
export class SynchronousQueue<E extends Object> extends AbstractQueue<E> implements BlockingQueue<E>, Serializable {
constructor();
constructor(arg0: boolean);

put(arg0: E): void;

offer(arg0: E, arg1: number, arg2: TimeUnit): boolean;

offer(arg0: E): boolean;

take(): E;

poll(arg0: number, arg1: TimeUnit): E;

poll(): E;

isEmpty(): boolean;

size(): number;

remainingCapacity(): number;

clear(): void;

contains(arg0: Object): boolean;

remove(arg0: Object): boolean;

containsAll(arg0: Collection<any>): boolean;

removeAll(arg0: Collection<any>): boolean;

retainAll(arg0: Collection<any>): boolean;

peek(): E;

iterator(): Iterator<E>;

spliterator(): Spliterator<E>;

toArray(): Object[];

toArray<T extends Object>(arg0: T[]): T[];
toString(): string;

drainTo(arg0: Collection<E>): number;

drainTo(arg0: Collection<E>, arg1: number): number;
 }

export interface ThreadFactory {

newThread(arg0: Runnable): Thread;
 }

export interface ThreadLocalRandom { }
export class ThreadLocalRandom extends Random {

static current(): ThreadLocalRandom;

setSeed(arg0: number): void;

nextBoolean(): boolean;

nextInt(): number;

nextInt(arg0: number): number;

nextInt(arg0: number, arg1: number): number;

nextLong(): number;

nextLong(arg0: number): number;

nextLong(arg0: number, arg1: number): number;

nextFloat(): number;

nextFloat(arg0: number): number;

nextFloat(arg0: number, arg1: number): number;

nextDouble(): number;

nextDouble(arg0: number): number;

nextDouble(arg0: number, arg1: number): number;

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

export class ThreadPoolExecutor extends AbstractExecutorService {
constructor(arg0: number, arg1: number, arg2: number, arg3: TimeUnit, arg4: BlockingQueue<Runnable>);
constructor(arg0: number, arg1: number, arg2: number, arg3: TimeUnit, arg4: BlockingQueue<Runnable>, arg5: ThreadFactory);
constructor(arg0: number, arg1: number, arg2: number, arg3: TimeUnit, arg4: BlockingQueue<Runnable>, arg5: RejectedExecutionHandler);
constructor(arg0: number, arg1: number, arg2: number, arg3: TimeUnit, arg4: BlockingQueue<Runnable>, arg5: ThreadFactory, arg6: RejectedExecutionHandler);

execute(arg0: Runnable): void;

shutdown(): void;

shutdownNow(): List<Runnable>;

isShutdown(): boolean;

isTerminating(): boolean;

isTerminated(): boolean;

awaitTermination(arg0: number, arg1: TimeUnit): boolean;

setThreadFactory(arg0: ThreadFactory): void;

getThreadFactory(): ThreadFactory;

setRejectedExecutionHandler(arg0: RejectedExecutionHandler): void;

getRejectedExecutionHandler(): RejectedExecutionHandler;

setCorePoolSize(arg0: number): void;

getCorePoolSize(): number;

prestartCoreThread(): boolean;

prestartAllCoreThreads(): number;

allowsCoreThreadTimeOut(): boolean;

allowCoreThreadTimeOut(arg0: boolean): void;

setMaximumPoolSize(arg0: number): void;

getMaximumPoolSize(): number;

setKeepAliveTime(arg0: number, arg1: TimeUnit): void;

getKeepAliveTime(arg0: TimeUnit): number;

getQueue(): BlockingQueue<Runnable>;

remove(arg0: Runnable): boolean;

purge(): void;

getPoolSize(): number;

getActiveCount(): number;

getLargestPoolSize(): number;

getTaskCount(): number;

getCompletedTaskCount(): number;
toString(): string;
 }
export namespace ThreadPoolExecutor { 
export class AbortPolicy implements RejectedExecutionHandler {
constructor();

rejectedExecution(arg0: Runnable, arg1: ThreadPoolExecutor): void;
 }

export class CallerRunsPolicy implements RejectedExecutionHandler {
constructor();

rejectedExecution(arg0: Runnable, arg1: ThreadPoolExecutor): void;
 }

export class DiscardOldestPolicy implements RejectedExecutionHandler {
constructor();

rejectedExecution(arg0: Runnable, arg1: ThreadPoolExecutor): void;
 }

export class DiscardPolicy implements RejectedExecutionHandler {
constructor();

rejectedExecution(arg0: Runnable, arg1: ThreadPoolExecutor): void;
 }

}

export class TimeUnit extends Enum<TimeUnit> {
static NANOSECONDS:TimeUnit
static MICROSECONDS:TimeUnit
static MILLISECONDS:TimeUnit
static SECONDS:TimeUnit
static MINUTES:TimeUnit
static HOURS:TimeUnit
static DAYS:TimeUnit

static values(): TimeUnit[];

static valueOf(arg0: String): TimeUnit;

convert(arg0: number, arg1: TimeUnit): number;

convert(arg0: Duration): number;

toNanos(arg0: number): number;

toMicros(arg0: number): number;

toMillis(arg0: number): number;

toSeconds(arg0: number): number;

toMinutes(arg0: number): number;

toHours(arg0: number): number;

toDays(arg0: number): number;

timedWait(arg0: Object, arg1: number): void;

timedJoin(arg0: Thread, arg1: number): void;

sleep(arg0: number): void;

toChronoUnit(): ChronoUnit;

static of(arg0: ChronoUnit): TimeUnit;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class TimeoutException extends Exception {
constructor();
constructor(arg0: String);
 }

export interface TransferQueue<E extends Object> extends BlockingQueue<E>, Object {

tryTransfer(arg0: E): boolean;

transfer(arg0: E): void;

tryTransfer(arg0: E, arg1: number, arg2: TimeUnit): boolean;

hasWaitingConsumer(): boolean;

getWaitingConsumerCount(): number;
 }

}
