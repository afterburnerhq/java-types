/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.util.concurrent.d.ts" />
/// <reference path="java.util.function.d.ts" />
declare module '@afterburnerhq/java.util.stream' { 
import { Enum, Integer, AutoCloseable, Runnable, CharSequence, Long, Class, String, Boolean, Double } from '@afterburnerhq/java.lang'
import { Set, Optional, PrimitiveIterator, OptionalInt, DoubleSummaryStatistics, IntSummaryStatistics, OptionalDouble, Comparator, LongSummaryStatistics, Iterator, Collection, OptionalLong, List, Map, Spliterator } from '@afterburnerhq/java.util'
import { ConcurrentMap } from '@afterburnerhq/java.util.concurrent'
import { IntSupplier, DoubleToLongFunction, IntUnaryOperator, IntToDoubleFunction, Predicate, ObjDoubleConsumer, Function, ToLongFunction, Consumer, LongToIntFunction, ObjLongConsumer, Supplier, BinaryOperator, ObjIntConsumer, UnaryOperator, ToDoubleFunction, DoubleUnaryOperator, LongBinaryOperator, DoublePredicate, IntPredicate, LongPredicate, IntConsumer, LongToDoubleFunction, DoubleFunction, LongConsumer, DoubleConsumer, DoubleBinaryOperator, LongFunction, BiFunction, DoubleSupplier, IntFunction, IntBinaryOperator, LongUnaryOperator, IntToLongFunction, ToIntFunction, LongSupplier, BiConsumer, DoubleToIntFunction } from '@afterburnerhq/java.util.function'
export interface BaseStream<T extends Object, S extends BaseStream<T, S>> extends AutoCloseable, Object {

iterator(): Iterator<T>;

spliterator(): Spliterator<T>;

isParallel(): boolean;

sequential(): S;

parallel(): S;

unordered(): S;

onClose(arg0: Runnable): S;

close(): void;
 }

export namespace Collector { 
function 
/* default */ of<T extends Object, R extends Object>(arg0: Supplier<R>, arg1: BiConsumer<R, T>, arg2: BinaryOperator<R>, arg3: Collector.Characteristics[]): Collector<T, R, R>;
function 
/* default */ of<T extends Object, A extends Object, R extends Object>(arg0: Supplier<A>, arg1: BiConsumer<A, T>, arg2: BinaryOperator<A>, arg3: Function<A, R>, arg4: Collector.Characteristics[]): Collector<T, A, R>;
}

export interface Collector<T extends Object, A extends Object, R extends Object> extends Object {

supplier(): Supplier<A>;

accumulator(): BiConsumer<A, T>;

combiner(): BinaryOperator<A>;

finisher(): Function<A, R>;

characteristics(): Set<Collector.Characteristics>;
 }
export namespace Collector { 
export class Characteristics extends Enum<Collector.Characteristics> {
static CONCURRENT:Collector.Characteristics
static UNORDERED:Collector.Characteristics
static IDENTITY_FINISH:Collector.Characteristics

static values(): Collector.Characteristics[];

static valueOf(arg0: String): Collector.Characteristics;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class Collectors {

static toCollection<T extends Object, C extends Collection<T>>(arg0: Supplier<C>): Collector<T, any, C>;

static toList<T extends Object>(): Collector<T, any, List<T>>;

static toUnmodifiableList<T extends Object>(): Collector<T, any, List<T>>;

static toSet<T extends Object>(): Collector<T, any, Set<T>>;

static toUnmodifiableSet<T extends Object>(): Collector<T, any, Set<T>>;

static joining(): Collector<CharSequence, any, String>;

static joining(arg0: CharSequence): Collector<CharSequence, any, String>;

static joining(arg0: CharSequence, arg1: CharSequence, arg2: CharSequence): Collector<CharSequence, any, String>;

static mapping<T extends Object, U extends Object, A extends Object, R extends Object>(arg0: Function<T, U>, arg1: Collector<U, A, R>): Collector<T, any, R>;

static flatMapping<T extends Object, U extends Object, A extends Object, R extends Object>(arg0: Function<T, Stream<U>>, arg1: Collector<U, A, R>): Collector<T, any, R>;

static filtering<T extends Object, A extends Object, R extends Object>(arg0: Predicate<T>, arg1: Collector<T, A, R>): Collector<T, any, R>;

static collectingAndThen<T extends Object, A extends Object, R extends Object, RR extends Object>(arg0: Collector<T, A, R>, arg1: Function<R, RR>): Collector<T, A, RR>;

static counting<T extends Object>(): Collector<T, any, Number>;

static minBy<T extends Object>(arg0: Comparator<T>): Collector<T, any, Optional<T>>;

static maxBy<T extends Object>(arg0: Comparator<T>): Collector<T, any, Optional<T>>;

static summingInt<T extends Object>(arg0: ToIntFunction<T>): Collector<T, any, Number>;

static summingLong<T extends Object>(arg0: ToLongFunction<T>): Collector<T, any, Number>;

static summingDouble<T extends Object>(arg0: ToDoubleFunction<T>): Collector<T, any, Number>;

static averagingInt<T extends Object>(arg0: ToIntFunction<T>): Collector<T, any, Number>;

static averagingLong<T extends Object>(arg0: ToLongFunction<T>): Collector<T, any, Number>;

static averagingDouble<T extends Object>(arg0: ToDoubleFunction<T>): Collector<T, any, Number>;

static reducing<T extends Object>(arg0: T, arg1: BinaryOperator<T>): Collector<T, any, T>;

static reducing<T extends Object>(arg0: BinaryOperator<T>): Collector<T, any, Optional<T>>;

static reducing<T extends Object, U extends Object>(arg0: U, arg1: Function<T, U>, arg2: BinaryOperator<U>): Collector<T, any, U>;

static groupingBy<T extends Object, K extends Object>(arg0: Function<T, K>): Collector<T, any, Map<K, List<T>>>;

static groupingBy<T extends Object, K extends Object, A extends Object, D extends Object>(arg0: Function<T, K>, arg1: Collector<T, A, D>): Collector<T, any, Map<K, D>>;

static groupingBy<T extends Object, K extends Object, D extends Object, A extends Object, M extends Map<K, D>>(arg0: Function<T, K>, arg1: Supplier<M>, arg2: Collector<T, A, D>): Collector<T, any, M>;

static groupingByConcurrent<T extends Object, K extends Object>(arg0: Function<T, K>): Collector<T, any, ConcurrentMap<K, List<T>>>;

static groupingByConcurrent<T extends Object, K extends Object, A extends Object, D extends Object>(arg0: Function<T, K>, arg1: Collector<T, A, D>): Collector<T, any, ConcurrentMap<K, D>>;

static groupingByConcurrent<T extends Object, K extends Object, A extends Object, D extends Object, M extends ConcurrentMap<K, D>>(arg0: Function<T, K>, arg1: Supplier<M>, arg2: Collector<T, A, D>): Collector<T, any, M>;

static partitioningBy<T extends Object>(arg0: Predicate<T>): Collector<T, any, Map<Boolean, List<T>>>;

static partitioningBy<T extends Object, D extends Object, A extends Object>(arg0: Predicate<T>, arg1: Collector<T, A, D>): Collector<T, any, Map<Boolean, D>>;

static toMap<T extends Object, K extends Object, U extends Object>(arg0: Function<T, K>, arg1: Function<T, U>): Collector<T, any, Map<K, U>>;

static toUnmodifiableMap<T extends Object, K extends Object, U extends Object>(arg0: Function<T, K>, arg1: Function<T, U>): Collector<T, any, Map<K, U>>;

static toMap<T extends Object, K extends Object, U extends Object>(arg0: Function<T, K>, arg1: Function<T, U>, arg2: BinaryOperator<U>): Collector<T, any, Map<K, U>>;

static toUnmodifiableMap<T extends Object, K extends Object, U extends Object>(arg0: Function<T, K>, arg1: Function<T, U>, arg2: BinaryOperator<U>): Collector<T, any, Map<K, U>>;

static toMap<T extends Object, K extends Object, U extends Object, M extends Map<K, U>>(arg0: Function<T, K>, arg1: Function<T, U>, arg2: BinaryOperator<U>, arg3: Supplier<M>): Collector<T, any, M>;

static toConcurrentMap<T extends Object, K extends Object, U extends Object>(arg0: Function<T, K>, arg1: Function<T, U>): Collector<T, any, ConcurrentMap<K, U>>;

static toConcurrentMap<T extends Object, K extends Object, U extends Object>(arg0: Function<T, K>, arg1: Function<T, U>, arg2: BinaryOperator<U>): Collector<T, any, ConcurrentMap<K, U>>;

static toConcurrentMap<T extends Object, K extends Object, U extends Object, M extends ConcurrentMap<K, U>>(arg0: Function<T, K>, arg1: Function<T, U>, arg2: BinaryOperator<U>, arg3: Supplier<M>): Collector<T, any, M>;

static summarizingInt<T extends Object>(arg0: ToIntFunction<T>): Collector<T, any, IntSummaryStatistics>;

static summarizingLong<T extends Object>(arg0: ToLongFunction<T>): Collector<T, any, LongSummaryStatistics>;

static summarizingDouble<T extends Object>(arg0: ToDoubleFunction<T>): Collector<T, any, DoubleSummaryStatistics>;

static teeing<T extends Object, R1 extends Object, R2 extends Object, R extends Object>(arg0: Collector<T, any, R1>, arg1: Collector<T, any, R2>, arg2: BiFunction<R1, R2, R>): Collector<T, any, R>;
 }

export namespace DoubleStream { 
function 
/* default */ builder(): DoubleStream.Builder;
function 
/* default */ empty(): DoubleStream;
function 
/* default */ of(arg0: number): DoubleStream;
function 
/* default */ of(arg0: number[]): DoubleStream;
function 
/* default */ iterate(arg0: number, arg1: DoubleUnaryOperator): DoubleStream;
function 
/* default */ iterate(arg0: number, arg1: DoublePredicate, arg2: DoubleUnaryOperator): DoubleStream;
function 
/* default */ generate(arg0: DoubleSupplier): DoubleStream;
function 
/* default */ concat(arg0: DoubleStream, arg1: DoubleStream): DoubleStream;
}

export interface DoubleStream extends BaseStream<Number, DoubleStream>, Object {

filter(arg0: DoublePredicate): DoubleStream;

map(arg0: DoubleUnaryOperator): DoubleStream;

mapToObj<U extends Object>(arg0: DoubleFunction<U>): Stream<U>;

mapToInt(arg0: DoubleToIntFunction): IntStream;

mapToLong(arg0: DoubleToLongFunction): LongStream;

flatMap(arg0: DoubleFunction<DoubleStream>): DoubleStream;

/* default */ mapMulti(arg0: DoubleStream.DoubleMapMultiConsumer): DoubleStream;

distinct(): DoubleStream;

sorted(): DoubleStream;

peek(arg0: DoubleConsumer): DoubleStream;

limit(arg0: number): DoubleStream;

skip(arg0: number): DoubleStream;

/* default */ takeWhile(arg0: DoublePredicate): DoubleStream;

/* default */ dropWhile(arg0: DoublePredicate): DoubleStream;

forEach(arg0: DoubleConsumer): void;

forEachOrdered(arg0: DoubleConsumer): void;

toArray(): number[];

reduce(arg0: number, arg1: DoubleBinaryOperator): number;

reduce(arg0: DoubleBinaryOperator): OptionalDouble;

collect<R extends Object>(arg0: Supplier<R>, arg1: ObjDoubleConsumer<R>, arg2: BiConsumer<R, R>): R;

sum(): number;

min(): OptionalDouble;

max(): OptionalDouble;

count(): number;

average(): OptionalDouble;

summaryStatistics(): DoubleSummaryStatistics;

anyMatch(arg0: DoublePredicate): boolean;

allMatch(arg0: DoublePredicate): boolean;

noneMatch(arg0: DoublePredicate): boolean;

findFirst(): OptionalDouble;

findAny(): OptionalDouble;

boxed(): Stream<Number>;

sequential(): DoubleStream;

parallel(): DoubleStream;

iterator(): PrimitiveIterator.OfDouble;

spliterator(): Spliterator.OfDouble;
 }
export namespace DoubleStream { 
export interface Builder extends DoubleConsumer {

accept(arg0: number): void;

/* default */ add(arg0: number): DoubleStream.Builder;

build(): DoubleStream;
 }

export interface DoubleMapMultiConsumer {

accept(arg0: number, arg1: DoubleConsumer): void;
 }

}

export namespace IntStream { 
function 
/* default */ builder(): IntStream.Builder;
function 
/* default */ empty(): IntStream;
function 
/* default */ of(arg0: number): IntStream;
function 
/* default */ of(arg0: number[]): IntStream;
function 
/* default */ iterate(arg0: number, arg1: IntUnaryOperator): IntStream;
function 
/* default */ iterate(arg0: number, arg1: IntPredicate, arg2: IntUnaryOperator): IntStream;
function 
/* default */ generate(arg0: IntSupplier): IntStream;
function 
/* default */ range(arg0: number, arg1: number): IntStream;
function 
/* default */ rangeClosed(arg0: number, arg1: number): IntStream;
function 
/* default */ concat(arg0: IntStream, arg1: IntStream): IntStream;
}

export interface IntStream extends BaseStream<Number, IntStream>, Object {

filter(arg0: IntPredicate): IntStream;

map(arg0: IntUnaryOperator): IntStream;

mapToObj<U extends Object>(arg0: IntFunction<U>): Stream<U>;

mapToLong(arg0: IntToLongFunction): LongStream;

mapToDouble(arg0: IntToDoubleFunction): DoubleStream;

flatMap(arg0: IntFunction<IntStream>): IntStream;

/* default */ mapMulti(arg0: IntStream.IntMapMultiConsumer): IntStream;

distinct(): IntStream;

sorted(): IntStream;

peek(arg0: IntConsumer): IntStream;

limit(arg0: number): IntStream;

skip(arg0: number): IntStream;

/* default */ takeWhile(arg0: IntPredicate): IntStream;

/* default */ dropWhile(arg0: IntPredicate): IntStream;

forEach(arg0: IntConsumer): void;

forEachOrdered(arg0: IntConsumer): void;

toArray(): number[];

reduce(arg0: number, arg1: IntBinaryOperator): number;

reduce(arg0: IntBinaryOperator): OptionalInt;

collect<R extends Object>(arg0: Supplier<R>, arg1: ObjIntConsumer<R>, arg2: BiConsumer<R, R>): R;

sum(): number;

min(): OptionalInt;

max(): OptionalInt;

count(): number;

average(): OptionalDouble;

summaryStatistics(): IntSummaryStatistics;

anyMatch(arg0: IntPredicate): boolean;

allMatch(arg0: IntPredicate): boolean;

noneMatch(arg0: IntPredicate): boolean;

findFirst(): OptionalInt;

findAny(): OptionalInt;

asLongStream(): LongStream;

asDoubleStream(): DoubleStream;

boxed(): Stream<Number>;

sequential(): IntStream;

parallel(): IntStream;

iterator(): PrimitiveIterator.OfInt;

spliterator(): Spliterator.OfInt;
 }
export namespace IntStream { 
export interface Builder extends IntConsumer {

accept(arg0: number): void;

/* default */ add(arg0: number): IntStream.Builder;

build(): IntStream;
 }

export interface IntMapMultiConsumer {

accept(arg0: number, arg1: IntConsumer): void;
 }

}

export namespace LongStream { 
function 
/* default */ builder(): LongStream.Builder;
function 
/* default */ empty(): LongStream;
function 
/* default */ of(arg0: number): LongStream;
function 
/* default */ of(arg0: number[]): LongStream;
function 
/* default */ iterate(arg0: number, arg1: LongUnaryOperator): LongStream;
function 
/* default */ iterate(arg0: number, arg1: LongPredicate, arg2: LongUnaryOperator): LongStream;
function 
/* default */ generate(arg0: LongSupplier): LongStream;
function 
/* default */ range(arg0: number, arg1: number): LongStream;
function 
/* default */ rangeClosed(arg0: number, arg1: number): LongStream;
function 
/* default */ concat(arg0: LongStream, arg1: LongStream): LongStream;
}

export interface LongStream extends BaseStream<Number, LongStream>, Object {

filter(arg0: LongPredicate): LongStream;

map(arg0: LongUnaryOperator): LongStream;

mapToObj<U extends Object>(arg0: LongFunction<U>): Stream<U>;

mapToInt(arg0: LongToIntFunction): IntStream;

mapToDouble(arg0: LongToDoubleFunction): DoubleStream;

flatMap(arg0: LongFunction<LongStream>): LongStream;

/* default */ mapMulti(arg0: LongStream.LongMapMultiConsumer): LongStream;

distinct(): LongStream;

sorted(): LongStream;

peek(arg0: LongConsumer): LongStream;

limit(arg0: number): LongStream;

skip(arg0: number): LongStream;

/* default */ takeWhile(arg0: LongPredicate): LongStream;

/* default */ dropWhile(arg0: LongPredicate): LongStream;

forEach(arg0: LongConsumer): void;

forEachOrdered(arg0: LongConsumer): void;

toArray(): number[];

reduce(arg0: number, arg1: LongBinaryOperator): number;

reduce(arg0: LongBinaryOperator): OptionalLong;

collect<R extends Object>(arg0: Supplier<R>, arg1: ObjLongConsumer<R>, arg2: BiConsumer<R, R>): R;

sum(): number;

min(): OptionalLong;

max(): OptionalLong;

count(): number;

average(): OptionalDouble;

summaryStatistics(): LongSummaryStatistics;

anyMatch(arg0: LongPredicate): boolean;

allMatch(arg0: LongPredicate): boolean;

noneMatch(arg0: LongPredicate): boolean;

findFirst(): OptionalLong;

findAny(): OptionalLong;

asDoubleStream(): DoubleStream;

boxed(): Stream<Number>;

sequential(): LongStream;

parallel(): LongStream;

iterator(): PrimitiveIterator.OfLong;

spliterator(): Spliterator.OfLong;
 }
export namespace LongStream { 
export interface Builder extends LongConsumer {

accept(arg0: number): void;

/* default */ add(arg0: number): LongStream.Builder;

build(): LongStream;
 }

export interface LongMapMultiConsumer {

accept(arg0: number, arg1: LongConsumer): void;
 }

}

export namespace Stream { 
function 
/* default */ builder<T extends Object>(): Stream.Builder<T>;
function 
/* default */ empty<T extends Object>(): Stream<T>;
function 
/* default */ of<T extends Object>(arg0: T): Stream<T>;
function 
/* default */ ofNullable<T extends Object>(arg0: T): Stream<T>;
function 
/* default */ of<T extends Object>(arg0: T[]): Stream<T>;
function 
/* default */ iterate<T extends Object>(arg0: T, arg1: UnaryOperator<T>): Stream<T>;
function 
/* default */ iterate<T extends Object>(arg0: T, arg1: Predicate<T>, arg2: UnaryOperator<T>): Stream<T>;
function 
/* default */ generate<T extends Object>(arg0: Supplier<T>): Stream<T>;
function 
/* default */ concat<T extends Object>(arg0: Stream<T>, arg1: Stream<T>): Stream<T>;
}

export interface Stream<T extends Object> extends BaseStream<T, Stream<T>>, Object {

filter(arg0: Predicate<T>): Stream<T>;

map<R extends Object>(arg0: Function<T, R>): Stream<R>;

mapToInt(arg0: ToIntFunction<T>): IntStream;

mapToLong(arg0: ToLongFunction<T>): LongStream;

mapToDouble(arg0: ToDoubleFunction<T>): DoubleStream;

flatMap<R extends Object>(arg0: Function<T, Stream<R>>): Stream<R>;

flatMapToInt(arg0: Function<T, IntStream>): IntStream;

flatMapToLong(arg0: Function<T, LongStream>): LongStream;

flatMapToDouble(arg0: Function<T, DoubleStream>): DoubleStream;

/* default */ mapMulti<R extends Object>(arg0: BiConsumer<T, Consumer<R>>): Stream<R>;

/* default */ mapMultiToInt(arg0: BiConsumer<T, IntConsumer>): IntStream;

/* default */ mapMultiToLong(arg0: BiConsumer<T, LongConsumer>): LongStream;

/* default */ mapMultiToDouble(arg0: BiConsumer<T, DoubleConsumer>): DoubleStream;

distinct(): Stream<T>;

sorted(): Stream<T>;

sorted(arg0: Comparator<T>): Stream<T>;

peek(arg0: Consumer<T>): Stream<T>;

limit(arg0: number): Stream<T>;

skip(arg0: number): Stream<T>;

/* default */ takeWhile(arg0: Predicate<T>): Stream<T>;

/* default */ dropWhile(arg0: Predicate<T>): Stream<T>;

forEach(arg0: Consumer<T>): void;

forEachOrdered(arg0: Consumer<T>): void;

toArray(): Object[];

toArray<A extends Object>(arg0: IntFunction<A[]>): A[];

reduce(arg0: T, arg1: BinaryOperator<T>): T;

reduce(arg0: BinaryOperator<T>): Optional<T>;

reduce<U extends Object>(arg0: U, arg1: BiFunction<U, T, U>, arg2: BinaryOperator<U>): U;

collect<R extends Object>(arg0: Supplier<R>, arg1: BiConsumer<R, T>, arg2: BiConsumer<R, R>): R;

collect<R extends Object, A extends Object>(arg0: Collector<T, A, R>): R;

/* default */ toList(): List<T>;

min(arg0: Comparator<T>): Optional<T>;

max(arg0: Comparator<T>): Optional<T>;

count(): number;

anyMatch(arg0: Predicate<T>): boolean;

allMatch(arg0: Predicate<T>): boolean;

noneMatch(arg0: Predicate<T>): boolean;

findFirst(): Optional<T>;

findAny(): Optional<T>;
 }
export namespace Stream { 
export interface Builder<T extends Object> extends Consumer<T>, Object {

accept(arg0: T): void;

/* default */ add(arg0: T): Stream.Builder<T>;

build(): Stream<T>;
 }

}

export class StreamSupport {

static stream<T extends Object>(arg0: Spliterator<T>, arg1: boolean): Stream<T>;

static stream<T extends Object>(arg0: Supplier<Spliterator<T>>, arg1: number, arg2: boolean): Stream<T>;

static intStream(arg0: Spliterator.OfInt, arg1: boolean): IntStream;

static intStream(arg0: Supplier<Spliterator.OfInt>, arg1: number, arg2: boolean): IntStream;

static longStream(arg0: Spliterator.OfLong, arg1: boolean): LongStream;

static longStream(arg0: Supplier<Spliterator.OfLong>, arg1: number, arg2: boolean): LongStream;

static doubleStream(arg0: Spliterator.OfDouble, arg1: boolean): DoubleStream;

static doubleStream(arg0: Supplier<Spliterator.OfDouble>, arg1: number, arg2: boolean): DoubleStream;
 }

}
