/// <reference path="java.util.d.ts" />
declare module '@afterburnerhq/java.util.function' { 
import { Comparator } from '@afterburnerhq/java.util'
export interface BiConsumer<T extends Object, U extends Object> extends Object {

accept(arg0: T, arg1: U): void;

/* default */ andThen(arg0: BiConsumer<T, U>): BiConsumer<T, U>;
 }

export interface BiFunction<T extends Object, U extends Object, R extends Object> extends Object {

apply(arg0: T, arg1: U): R;

/* default */ andThen<V extends Object>(arg0: Function<R, V>): BiFunction<T, U, V>;
 }

export interface BiPredicate<T extends Object, U extends Object> extends Object {

test(arg0: T, arg1: U): boolean;

/* default */ and(arg0: BiPredicate<T, U>): BiPredicate<T, U>;

/* default */ negate(): BiPredicate<T, U>;

/* default */ or(arg0: BiPredicate<T, U>): BiPredicate<T, U>;
 }

export namespace BinaryOperator { 
function 
/* default */ minBy<T extends Object>(arg0: Comparator<T>): BinaryOperator<T>;
function 
/* default */ maxBy<T extends Object>(arg0: Comparator<T>): BinaryOperator<T>;
}

export interface BinaryOperator<T extends Object> extends BiFunction<T, T, T>, Object {
 }

export interface BooleanSupplier {

getAsBoolean(): boolean;
 }

export interface Consumer<T extends Object> extends Object {

accept(arg0: T): void;

/* default */ andThen(arg0: Consumer<T>): Consumer<T>;
 }

export interface DoubleBinaryOperator {

applyAsDouble(arg0: number, arg1: number): number;
 }

export interface DoubleConsumer {

accept(arg0: number): void;

/* default */ andThen(arg0: DoubleConsumer): DoubleConsumer;
 }

export interface DoubleFunction<R extends Object> extends Object {

apply(arg0: number): R;
 }

export interface DoublePredicate {

test(arg0: number): boolean;

/* default */ and(arg0: DoublePredicate): DoublePredicate;

/* default */ negate(): DoublePredicate;

/* default */ or(arg0: DoublePredicate): DoublePredicate;
 }

export interface DoubleSupplier {

getAsDouble(): number;
 }

export interface DoubleToIntFunction {

applyAsInt(arg0: number): number;
 }

export interface DoubleToLongFunction {

applyAsLong(arg0: number): number;
 }

export namespace DoubleUnaryOperator { 
function 
/* default */ identity(): DoubleUnaryOperator;
}

export interface DoubleUnaryOperator {

applyAsDouble(arg0: number): number;

/* default */ compose(arg0: DoubleUnaryOperator): DoubleUnaryOperator;

/* default */ andThen(arg0: DoubleUnaryOperator): DoubleUnaryOperator;
 }

export namespace Function { 
function 
/* default */ identity<T extends Object>(): Function<T, T>;
}

export interface Function<T extends Object, R extends Object> extends Object {

apply(arg0: T): R;

/* default */ compose<V extends Object>(arg0: Function<V, T>): Function<V, R>;

/* default */ andThen<V extends Object>(arg0: Function<R, V>): Function<T, V>;
 }

export interface IntBinaryOperator {

applyAsInt(arg0: number, arg1: number): number;
 }

export interface IntConsumer {

accept(arg0: number): void;

/* default */ andThen(arg0: IntConsumer): IntConsumer;
 }

export interface IntFunction<R extends Object> extends Object {

apply(arg0: number): R;
 }

export interface IntPredicate {

test(arg0: number): boolean;

/* default */ and(arg0: IntPredicate): IntPredicate;

/* default */ negate(): IntPredicate;

/* default */ or(arg0: IntPredicate): IntPredicate;
 }

export interface IntSupplier {

getAsInt(): number;
 }

export interface IntToDoubleFunction {

applyAsDouble(arg0: number): number;
 }

export interface IntToLongFunction {

applyAsLong(arg0: number): number;
 }

export namespace IntUnaryOperator { 
function 
/* default */ identity(): IntUnaryOperator;
}

export interface IntUnaryOperator {

applyAsInt(arg0: number): number;

/* default */ compose(arg0: IntUnaryOperator): IntUnaryOperator;

/* default */ andThen(arg0: IntUnaryOperator): IntUnaryOperator;
 }

export interface LongBinaryOperator {

applyAsLong(arg0: number, arg1: number): number;
 }

export interface LongConsumer {

accept(arg0: number): void;

/* default */ andThen(arg0: LongConsumer): LongConsumer;
 }

export interface LongFunction<R extends Object> extends Object {

apply(arg0: number): R;
 }

export interface LongPredicate {

test(arg0: number): boolean;

/* default */ and(arg0: LongPredicate): LongPredicate;

/* default */ negate(): LongPredicate;

/* default */ or(arg0: LongPredicate): LongPredicate;
 }

export interface LongSupplier {

getAsLong(): number;
 }

export interface LongToDoubleFunction {

applyAsDouble(arg0: number): number;
 }

export interface LongToIntFunction {

applyAsInt(arg0: number): number;
 }

export namespace LongUnaryOperator { 
function 
/* default */ identity(): LongUnaryOperator;
}

export interface LongUnaryOperator {

applyAsLong(arg0: number): number;

/* default */ compose(arg0: LongUnaryOperator): LongUnaryOperator;

/* default */ andThen(arg0: LongUnaryOperator): LongUnaryOperator;
 }

export interface ObjDoubleConsumer<T extends Object> extends Object {

accept(arg0: T, arg1: number): void;
 }

export interface ObjIntConsumer<T extends Object> extends Object {

accept(arg0: T, arg1: number): void;
 }

export interface ObjLongConsumer<T extends Object> extends Object {

accept(arg0: T, arg1: number): void;
 }

export namespace Predicate { 
function 
/* default */ isEqual<T extends Object>(arg0: Object): Predicate<T>;
function 
/* default */ not<T extends Object>(arg0: Predicate<T>): Predicate<T>;
}

export interface Predicate<T extends Object> extends Object {

test(arg0: T): boolean;

/* default */ and(arg0: Predicate<T>): Predicate<T>;

/* default */ negate(): Predicate<T>;

/* default */ or(arg0: Predicate<T>): Predicate<T>;
 }

export interface Supplier<T extends Object> extends Object {

get(): T;
 }

export interface ToDoubleBiFunction<T extends Object, U extends Object> extends Object {

applyAsDouble(arg0: T, arg1: U): number;
 }

export interface ToDoubleFunction<T extends Object> extends Object {

applyAsDouble(arg0: T): number;
 }

export interface ToIntBiFunction<T extends Object, U extends Object> extends Object {

applyAsInt(arg0: T, arg1: U): number;
 }

export interface ToIntFunction<T extends Object> extends Object {

applyAsInt(arg0: T): number;
 }

export interface ToLongBiFunction<T extends Object, U extends Object> extends Object {

applyAsLong(arg0: T, arg1: U): number;
 }

export interface ToLongFunction<T extends Object> extends Object {

applyAsLong(arg0: T): number;
 }

export namespace UnaryOperator { 
function 
/* default */ identity<T extends Object>(): UnaryOperator<T>;
}

export interface UnaryOperator<T extends Object> extends Function<T, T>, Object {
 }

}
