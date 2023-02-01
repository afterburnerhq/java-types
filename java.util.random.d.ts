/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.stream.d.ts" />
/// <reference path="java.math.d.ts" />
declare module '@afterburnerhq/java.util.random' { 
import { String } from '@afterburnerhq/java.lang'
import { DoubleStream, Stream, LongStream, IntStream } from '@afterburnerhq/java.util.stream'
import { BigInteger } from '@afterburnerhq/java.math'
export namespace RandomGenerator { 
function 
/* default */ of(arg0: String): RandomGenerator;
function 
/* default */ getDefault(): RandomGenerator;
}

export interface RandomGenerator {

/* default */ isDeprecated(): boolean;

/* default */ doubles(): DoubleStream;

/* default */ doubles(arg0: number, arg1: number): DoubleStream;

/* default */ doubles(arg0: number): DoubleStream;

/* default */ doubles(arg0: number, arg1: number, arg2: number): DoubleStream;

/* default */ ints(): IntStream;

/* default */ ints(arg0: number, arg1: number): IntStream;

/* default */ ints(arg0: number): IntStream;

/* default */ ints(arg0: number, arg1: number, arg2: number): IntStream;

/* default */ longs(): LongStream;

/* default */ longs(arg0: number, arg1: number): LongStream;

/* default */ longs(arg0: number): LongStream;

/* default */ longs(arg0: number, arg1: number, arg2: number): LongStream;

/* default */ nextBoolean(): boolean;

/* default */ nextBytes(arg0: number[]): void;

/* default */ nextFloat(): number;

/* default */ nextFloat(arg0: number): number;

/* default */ nextFloat(arg0: number, arg1: number): number;

/* default */ nextDouble(): number;

/* default */ nextDouble(arg0: number): number;

/* default */ nextDouble(arg0: number, arg1: number): number;

/* default */ nextInt(): number;

/* default */ nextInt(arg0: number): number;

/* default */ nextInt(arg0: number, arg1: number): number;

nextLong(): number;

/* default */ nextLong(arg0: number): number;

/* default */ nextLong(arg0: number, arg1: number): number;

/* default */ nextGaussian(): number;

/* default */ nextGaussian(arg0: number, arg1: number): number;

/* default */ nextExponential(): number;
 }
export namespace RandomGenerator { 
export namespace ArbitrarilyJumpableGenerator { 
function 
/* default */ of(arg0: String): RandomGenerator.ArbitrarilyJumpableGenerator;
}

export interface ArbitrarilyJumpableGenerator extends RandomGenerator.LeapableGenerator {

copy(): RandomGenerator.ArbitrarilyJumpableGenerator;

jumpPowerOfTwo(arg0: number): void;

jump(arg0: number): void;

/* default */ jump(): void;

/* default */ jumps(arg0: number): Stream<RandomGenerator.ArbitrarilyJumpableGenerator>;

/* default */ jumps(arg0: number, arg1: number): Stream<RandomGenerator.ArbitrarilyJumpableGenerator>;

/* default */ leap(): void;

/* default */ copyAndJump(arg0: number): RandomGenerator.ArbitrarilyJumpableGenerator;
 }

export namespace JumpableGenerator { 
function 
/* default */ of(arg0: String): RandomGenerator.JumpableGenerator;
}

export interface JumpableGenerator extends RandomGenerator.StreamableGenerator {

copy(): RandomGenerator.JumpableGenerator;

jump(): void;

jumpDistance(): number;

/* default */ jumps(): Stream<RandomGenerator>;

/* default */ jumps(arg0: number): Stream<RandomGenerator>;

/* default */ rngs(): Stream<RandomGenerator>;

/* default */ rngs(arg0: number): Stream<RandomGenerator>;

/* default */ copyAndJump(): RandomGenerator;
 }

export namespace LeapableGenerator { 
function 
/* default */ of(arg0: String): RandomGenerator.LeapableGenerator;
}

export interface LeapableGenerator extends RandomGenerator.JumpableGenerator {

copy(): RandomGenerator.LeapableGenerator;

leap(): void;

leapDistance(): number;

/* default */ leaps(): Stream<RandomGenerator.JumpableGenerator>;

/* default */ leaps(arg0: number): Stream<RandomGenerator.JumpableGenerator>;

/* default */ copyAndLeap(): RandomGenerator.JumpableGenerator;
 }

export namespace SplittableGenerator { 
function 
/* default */ of(arg0: String): RandomGenerator.SplittableGenerator;
}

export interface SplittableGenerator extends RandomGenerator.StreamableGenerator {

split(): RandomGenerator.SplittableGenerator;

split(arg0: RandomGenerator.SplittableGenerator): RandomGenerator.SplittableGenerator;

/* default */ splits(): Stream<RandomGenerator.SplittableGenerator>;

splits(arg0: number): Stream<RandomGenerator.SplittableGenerator>;

splits(arg0: RandomGenerator.SplittableGenerator): Stream<RandomGenerator.SplittableGenerator>;

splits(arg0: number, arg1: RandomGenerator.SplittableGenerator): Stream<RandomGenerator.SplittableGenerator>;

/* default */ rngs(): Stream<RandomGenerator>;

/* default */ rngs(arg0: number): Stream<RandomGenerator>;
 }

export namespace StreamableGenerator { 
function 
/* default */ of(arg0: String): RandomGenerator.StreamableGenerator;
}

export interface StreamableGenerator extends RandomGenerator {

rngs(): Stream<RandomGenerator>;

/* default */ rngs(arg0: number): Stream<RandomGenerator>;
 }

}

export class RandomGeneratorFactory<T extends RandomGenerator> extends Object {

static of<T extends RandomGenerator>(arg0: String): RandomGeneratorFactory<T>;

static getDefault(): RandomGeneratorFactory<RandomGenerator>;

static all(): Stream<RandomGeneratorFactory<RandomGenerator>>;

name(): String;

group(): String;

stateBits(): number;

equidistribution(): number;

period(): BigInteger;

isStatistical(): boolean;

isStochastic(): boolean;

isHardware(): boolean;

isArbitrarilyJumpable(): boolean;

isJumpable(): boolean;

isLeapable(): boolean;

isSplittable(): boolean;

isStreamable(): boolean;

isDeprecated(): boolean;

create(): T;

create(arg0: number): T;

create(arg0: number[]): T;
 }

}
