/// <reference path="java.lang.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.util.function.d.ts" />
declare module '@afterburnerhq/java.util.concurrent.atomic' { 
import { Number, Class, String } from '@afterburnerhq/java.lang'
import { Serializable } from '@afterburnerhq/java.io'
import { DoubleBinaryOperator, LongBinaryOperator, IntBinaryOperator, LongUnaryOperator, IntUnaryOperator, UnaryOperator, BinaryOperator } from '@afterburnerhq/java.util.function'
export class AtomicBoolean implements Serializable {
constructor(arg0: boolean);
constructor();

get(): boolean;

compareAndSet(arg0: boolean, arg1: boolean): boolean;

weakCompareAndSet(arg0: boolean, arg1: boolean): boolean;

weakCompareAndSetPlain(arg0: boolean, arg1: boolean): boolean;

set(arg0: boolean): void;

lazySet(arg0: boolean): void;

getAndSet(arg0: boolean): boolean;
toString(): string;

getPlain(): boolean;

setPlain(arg0: boolean): void;

getOpaque(): boolean;

setOpaque(arg0: boolean): void;

getAcquire(): boolean;

setRelease(arg0: boolean): void;

compareAndExchange(arg0: boolean, arg1: boolean): boolean;

compareAndExchangeAcquire(arg0: boolean, arg1: boolean): boolean;

compareAndExchangeRelease(arg0: boolean, arg1: boolean): boolean;

weakCompareAndSetVolatile(arg0: boolean, arg1: boolean): boolean;

weakCompareAndSetAcquire(arg0: boolean, arg1: boolean): boolean;

weakCompareAndSetRelease(arg0: boolean, arg1: boolean): boolean;
 }

export class AtomicInteger extends Number implements Serializable {
constructor(arg0: number);
constructor();

get(): number;

set(arg0: number): void;

lazySet(arg0: number): void;

getAndSet(arg0: number): number;

compareAndSet(arg0: number, arg1: number): boolean;

weakCompareAndSet(arg0: number, arg1: number): boolean;

weakCompareAndSetPlain(arg0: number, arg1: number): boolean;

getAndIncrement(): number;

getAndDecrement(): number;

getAndAdd(arg0: number): number;

incrementAndGet(): number;

decrementAndGet(): number;

addAndGet(arg0: number): number;

getAndUpdate(arg0: IntUnaryOperator): number;

updateAndGet(arg0: IntUnaryOperator): number;

getAndAccumulate(arg0: number, arg1: IntBinaryOperator): number;

accumulateAndGet(arg0: number, arg1: IntBinaryOperator): number;
toString(): string;

intValue(): number;

longValue(): number;

floatValue(): number;

doubleValue(): number;

getPlain(): number;

setPlain(arg0: number): void;

getOpaque(): number;

setOpaque(arg0: number): void;

getAcquire(): number;

setRelease(arg0: number): void;

compareAndExchange(arg0: number, arg1: number): number;

compareAndExchangeAcquire(arg0: number, arg1: number): number;

compareAndExchangeRelease(arg0: number, arg1: number): number;

weakCompareAndSetVolatile(arg0: number, arg1: number): boolean;

weakCompareAndSetAcquire(arg0: number, arg1: number): boolean;

weakCompareAndSetRelease(arg0: number, arg1: number): boolean;
 }

export class AtomicIntegerArray implements Serializable {
constructor(arg0: number);
constructor(arg0: number[]);

length(): number;

get(arg0: number): number;

set(arg0: number, arg1: number): void;

lazySet(arg0: number, arg1: number): void;

getAndSet(arg0: number, arg1: number): number;

compareAndSet(arg0: number, arg1: number, arg2: number): boolean;

weakCompareAndSet(arg0: number, arg1: number, arg2: number): boolean;

weakCompareAndSetPlain(arg0: number, arg1: number, arg2: number): boolean;

getAndIncrement(arg0: number): number;

getAndDecrement(arg0: number): number;

getAndAdd(arg0: number, arg1: number): number;

incrementAndGet(arg0: number): number;

decrementAndGet(arg0: number): number;

addAndGet(arg0: number, arg1: number): number;

getAndUpdate(arg0: number, arg1: IntUnaryOperator): number;

updateAndGet(arg0: number, arg1: IntUnaryOperator): number;

getAndAccumulate(arg0: number, arg1: number, arg2: IntBinaryOperator): number;

accumulateAndGet(arg0: number, arg1: number, arg2: IntBinaryOperator): number;
toString(): string;

getPlain(arg0: number): number;

setPlain(arg0: number, arg1: number): void;

getOpaque(arg0: number): number;

setOpaque(arg0: number, arg1: number): void;

getAcquire(arg0: number): number;

setRelease(arg0: number, arg1: number): void;

compareAndExchange(arg0: number, arg1: number, arg2: number): number;

compareAndExchangeAcquire(arg0: number, arg1: number, arg2: number): number;

compareAndExchangeRelease(arg0: number, arg1: number, arg2: number): number;

weakCompareAndSetVolatile(arg0: number, arg1: number, arg2: number): boolean;

weakCompareAndSetAcquire(arg0: number, arg1: number, arg2: number): boolean;

weakCompareAndSetRelease(arg0: number, arg1: number, arg2: number): boolean;
 }

export abstract class AtomicIntegerFieldUpdater<T extends Object> extends Object {

static newUpdater<U extends Object>(arg0: Class<U>, arg1: String): AtomicIntegerFieldUpdater<U>;

abstract compareAndSet(arg0: T, arg1: number, arg2: number): boolean;

abstract weakCompareAndSet(arg0: T, arg1: number, arg2: number): boolean;

abstract set(arg0: T, arg1: number): void;

abstract lazySet(arg0: T, arg1: number): void;

abstract get(arg0: T): number;

getAndSet(arg0: T, arg1: number): number;

getAndIncrement(arg0: T): number;

getAndDecrement(arg0: T): number;

getAndAdd(arg0: T, arg1: number): number;

incrementAndGet(arg0: T): number;

decrementAndGet(arg0: T): number;

addAndGet(arg0: T, arg1: number): number;

getAndUpdate(arg0: T, arg1: IntUnaryOperator): number;

updateAndGet(arg0: T, arg1: IntUnaryOperator): number;

getAndAccumulate(arg0: T, arg1: number, arg2: IntBinaryOperator): number;

accumulateAndGet(arg0: T, arg1: number, arg2: IntBinaryOperator): number;
 }

export class AtomicLong extends Number implements Serializable {
constructor(arg0: number);
constructor();

get(): number;

set(arg0: number): void;

lazySet(arg0: number): void;

getAndSet(arg0: number): number;

compareAndSet(arg0: number, arg1: number): boolean;

weakCompareAndSet(arg0: number, arg1: number): boolean;

weakCompareAndSetPlain(arg0: number, arg1: number): boolean;

getAndIncrement(): number;

getAndDecrement(): number;

getAndAdd(arg0: number): number;

incrementAndGet(): number;

decrementAndGet(): number;

addAndGet(arg0: number): number;

getAndUpdate(arg0: LongUnaryOperator): number;

updateAndGet(arg0: LongUnaryOperator): number;

getAndAccumulate(arg0: number, arg1: LongBinaryOperator): number;

accumulateAndGet(arg0: number, arg1: LongBinaryOperator): number;
toString(): string;

intValue(): number;

longValue(): number;

floatValue(): number;

doubleValue(): number;

getPlain(): number;

setPlain(arg0: number): void;

getOpaque(): number;

setOpaque(arg0: number): void;

getAcquire(): number;

setRelease(arg0: number): void;

compareAndExchange(arg0: number, arg1: number): number;

compareAndExchangeAcquire(arg0: number, arg1: number): number;

compareAndExchangeRelease(arg0: number, arg1: number): number;

weakCompareAndSetVolatile(arg0: number, arg1: number): boolean;

weakCompareAndSetAcquire(arg0: number, arg1: number): boolean;

weakCompareAndSetRelease(arg0: number, arg1: number): boolean;
 }

export class AtomicLongArray implements Serializable {
constructor(arg0: number);
constructor(arg0: number[]);

length(): number;

get(arg0: number): number;

set(arg0: number, arg1: number): void;

lazySet(arg0: number, arg1: number): void;

getAndSet(arg0: number, arg1: number): number;

compareAndSet(arg0: number, arg1: number, arg2: number): boolean;

weakCompareAndSet(arg0: number, arg1: number, arg2: number): boolean;

weakCompareAndSetPlain(arg0: number, arg1: number, arg2: number): boolean;

getAndIncrement(arg0: number): number;

getAndDecrement(arg0: number): number;

getAndAdd(arg0: number, arg1: number): number;

incrementAndGet(arg0: number): number;

decrementAndGet(arg0: number): number;

addAndGet(arg0: number, arg1: number): number;

getAndUpdate(arg0: number, arg1: LongUnaryOperator): number;

updateAndGet(arg0: number, arg1: LongUnaryOperator): number;

getAndAccumulate(arg0: number, arg1: number, arg2: LongBinaryOperator): number;

accumulateAndGet(arg0: number, arg1: number, arg2: LongBinaryOperator): number;
toString(): string;

getPlain(arg0: number): number;

setPlain(arg0: number, arg1: number): void;

getOpaque(arg0: number): number;

setOpaque(arg0: number, arg1: number): void;

getAcquire(arg0: number): number;

setRelease(arg0: number, arg1: number): void;

compareAndExchange(arg0: number, arg1: number, arg2: number): number;

compareAndExchangeAcquire(arg0: number, arg1: number, arg2: number): number;

compareAndExchangeRelease(arg0: number, arg1: number, arg2: number): number;

weakCompareAndSetVolatile(arg0: number, arg1: number, arg2: number): boolean;

weakCompareAndSetAcquire(arg0: number, arg1: number, arg2: number): boolean;

weakCompareAndSetRelease(arg0: number, arg1: number, arg2: number): boolean;
 }

export abstract class AtomicLongFieldUpdater<T extends Object> extends Object {

static newUpdater<U extends Object>(arg0: Class<U>, arg1: String): AtomicLongFieldUpdater<U>;

abstract compareAndSet(arg0: T, arg1: number, arg2: number): boolean;

abstract weakCompareAndSet(arg0: T, arg1: number, arg2: number): boolean;

abstract set(arg0: T, arg1: number): void;

abstract lazySet(arg0: T, arg1: number): void;

abstract get(arg0: T): number;

getAndSet(arg0: T, arg1: number): number;

getAndIncrement(arg0: T): number;

getAndDecrement(arg0: T): number;

getAndAdd(arg0: T, arg1: number): number;

incrementAndGet(arg0: T): number;

decrementAndGet(arg0: T): number;

addAndGet(arg0: T, arg1: number): number;

getAndUpdate(arg0: T, arg1: LongUnaryOperator): number;

updateAndGet(arg0: T, arg1: LongUnaryOperator): number;

getAndAccumulate(arg0: T, arg1: number, arg2: LongBinaryOperator): number;

accumulateAndGet(arg0: T, arg1: number, arg2: LongBinaryOperator): number;
 }

export class AtomicMarkableReference<V extends Object> extends Object {
constructor(arg0: V, arg1: boolean);

getReference(): V;

isMarked(): boolean;

get(arg0: boolean[]): V;

weakCompareAndSet(arg0: V, arg1: V, arg2: boolean, arg3: boolean): boolean;

compareAndSet(arg0: V, arg1: V, arg2: boolean, arg3: boolean): boolean;

set(arg0: V, arg1: boolean): void;

attemptMark(arg0: V, arg1: boolean): boolean;
 }

export class AtomicReference<V extends Object> extends Object implements Serializable {
constructor(arg0: V);
constructor();

get(): V;

set(arg0: V): void;

lazySet(arg0: V): void;

compareAndSet(arg0: V, arg1: V): boolean;

weakCompareAndSet(arg0: V, arg1: V): boolean;

weakCompareAndSetPlain(arg0: V, arg1: V): boolean;

getAndSet(arg0: V): V;

getAndUpdate(arg0: UnaryOperator<V>): V;

updateAndGet(arg0: UnaryOperator<V>): V;

getAndAccumulate(arg0: V, arg1: BinaryOperator<V>): V;

accumulateAndGet(arg0: V, arg1: BinaryOperator<V>): V;
toString(): string;

getPlain(): V;

setPlain(arg0: V): void;

getOpaque(): V;

setOpaque(arg0: V): void;

getAcquire(): V;

setRelease(arg0: V): void;

compareAndExchange(arg0: V, arg1: V): V;

compareAndExchangeAcquire(arg0: V, arg1: V): V;

compareAndExchangeRelease(arg0: V, arg1: V): V;

weakCompareAndSetVolatile(arg0: V, arg1: V): boolean;

weakCompareAndSetAcquire(arg0: V, arg1: V): boolean;

weakCompareAndSetRelease(arg0: V, arg1: V): boolean;
 }

export class AtomicReferenceArray<E extends Object> extends Object implements Serializable {
constructor(arg0: number);
constructor(arg0: E[]);

length(): number;

get(arg0: number): E;

set(arg0: number, arg1: E): void;

lazySet(arg0: number, arg1: E): void;

getAndSet(arg0: number, arg1: E): E;

compareAndSet(arg0: number, arg1: E, arg2: E): boolean;

weakCompareAndSet(arg0: number, arg1: E, arg2: E): boolean;

weakCompareAndSetPlain(arg0: number, arg1: E, arg2: E): boolean;

getAndUpdate(arg0: number, arg1: UnaryOperator<E>): E;

updateAndGet(arg0: number, arg1: UnaryOperator<E>): E;

getAndAccumulate(arg0: number, arg1: E, arg2: BinaryOperator<E>): E;

accumulateAndGet(arg0: number, arg1: E, arg2: BinaryOperator<E>): E;
toString(): string;

getPlain(arg0: number): E;

setPlain(arg0: number, arg1: E): void;

getOpaque(arg0: number): E;

setOpaque(arg0: number, arg1: E): void;

getAcquire(arg0: number): E;

setRelease(arg0: number, arg1: E): void;

compareAndExchange(arg0: number, arg1: E, arg2: E): E;

compareAndExchangeAcquire(arg0: number, arg1: E, arg2: E): E;

compareAndExchangeRelease(arg0: number, arg1: E, arg2: E): E;

weakCompareAndSetVolatile(arg0: number, arg1: E, arg2: E): boolean;

weakCompareAndSetAcquire(arg0: number, arg1: E, arg2: E): boolean;

weakCompareAndSetRelease(arg0: number, arg1: E, arg2: E): boolean;
 }

export abstract class AtomicReferenceFieldUpdater<T extends Object, V extends Object> extends Object {

static newUpdater<U extends Object, W extends Object>(arg0: Class<U>, arg1: Class<W>, arg2: String): AtomicReferenceFieldUpdater<U, W>;

abstract compareAndSet(arg0: T, arg1: V, arg2: V): boolean;

abstract weakCompareAndSet(arg0: T, arg1: V, arg2: V): boolean;

abstract set(arg0: T, arg1: V): void;

abstract lazySet(arg0: T, arg1: V): void;

abstract get(arg0: T): V;

getAndSet(arg0: T, arg1: V): V;

getAndUpdate(arg0: T, arg1: UnaryOperator<V>): V;

updateAndGet(arg0: T, arg1: UnaryOperator<V>): V;

getAndAccumulate(arg0: T, arg1: V, arg2: BinaryOperator<V>): V;

accumulateAndGet(arg0: T, arg1: V, arg2: BinaryOperator<V>): V;
 }

export class AtomicStampedReference<V extends Object> extends Object {
constructor(arg0: V, arg1: number);

getReference(): V;

getStamp(): number;

get(arg0: number[]): V;

weakCompareAndSet(arg0: V, arg1: V, arg2: number, arg3: number): boolean;

compareAndSet(arg0: V, arg1: V, arg2: number, arg3: number): boolean;

set(arg0: V, arg1: number): void;

attemptStamp(arg0: V, arg1: number): boolean;
 }

export class DoubleAccumulator extends Striped64 implements Serializable {
constructor(arg0: DoubleBinaryOperator, arg1: number);

accumulate(arg0: number): void;

get(): number;

reset(): void;

getThenReset(): number;
toString(): string;

doubleValue(): number;

longValue(): number;

intValue(): number;

floatValue(): number;
 }

export class DoubleAdder extends Striped64 implements Serializable {
constructor();

add(arg0: number): void;

sum(): number;

reset(): void;

sumThenReset(): number;
toString(): string;

doubleValue(): number;

longValue(): number;

intValue(): number;

floatValue(): number;
 }

export class LongAccumulator extends Striped64 implements Serializable {
constructor(arg0: LongBinaryOperator, arg1: number);

accumulate(arg0: number): void;

get(): number;

reset(): void;

getThenReset(): number;
toString(): string;

longValue(): number;

intValue(): number;

floatValue(): number;

doubleValue(): number;
 }

export class LongAdder extends Striped64 implements Serializable {
constructor();

add(arg0: number): void;

increment(): void;

decrement(): void;

sum(): number;

reset(): void;

sumThenReset(): number;
toString(): string;

longValue(): number;

intValue(): number;

floatValue(): number;

doubleValue(): number;
 }

}
