/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.util.concurrent.d.ts" />
declare module '@afterburnerhq/java.util.concurrent.locks' { 
import { Thread } from '@afterburnerhq/java.lang'
import { Collection, Date } from '@afterburnerhq/java.util'
import { Serializable } from '@afterburnerhq/java.io'
import { TimeUnit } from '@afterburnerhq/java.util.concurrent'
export abstract class AbstractOwnableSynchronizer implements Serializable {
 }

export abstract class AbstractQueuedLongSynchronizer extends AbstractOwnableSynchronizer implements Serializable {
constructor();

acquire(arg0: number): void;

acquireInterruptibly(arg0: number): void;

tryAcquireNanos(arg0: number, arg1: number): boolean;

release(arg0: number): boolean;

acquireShared(arg0: number): void;

acquireSharedInterruptibly(arg0: number): void;

tryAcquireSharedNanos(arg0: number, arg1: number): boolean;

releaseShared(arg0: number): boolean;

hasQueuedThreads(): boolean;

hasContended(): boolean;

getFirstQueuedThread(): Thread;

isQueued(arg0: Thread): boolean;

hasQueuedPredecessors(): boolean;

getQueueLength(): number;

getQueuedThreads(): Collection<Thread>;

getExclusiveQueuedThreads(): Collection<Thread>;

getSharedQueuedThreads(): Collection<Thread>;
toString(): string;

owns(arg0: AbstractQueuedLongSynchronizer.ConditionObject): boolean;

hasWaiters(arg0: AbstractQueuedLongSynchronizer.ConditionObject): boolean;

getWaitQueueLength(arg0: AbstractQueuedLongSynchronizer.ConditionObject): number;

getWaitingThreads(arg0: AbstractQueuedLongSynchronizer.ConditionObject): Collection<Thread>;
 }
export namespace AbstractQueuedLongSynchronizer { 
export class ConditionObject implements Condition, Serializable {
constructor(arg0: AbstractQueuedLongSynchronizer);

signal(): void;

signalAll(): void;

awaitUninterruptibly(): void;

await(): void;

awaitNanos(arg0: number): number;

awaitUntil(arg0: Date): boolean;

await(arg0: number, arg1: TimeUnit): boolean;
 }

}

export abstract class AbstractQueuedSynchronizer extends AbstractOwnableSynchronizer implements Serializable {

acquire(arg0: number): void;

acquireInterruptibly(arg0: number): void;

tryAcquireNanos(arg0: number, arg1: number): boolean;

release(arg0: number): boolean;

acquireShared(arg0: number): void;

acquireSharedInterruptibly(arg0: number): void;

tryAcquireSharedNanos(arg0: number, arg1: number): boolean;

releaseShared(arg0: number): boolean;

hasQueuedThreads(): boolean;

hasContended(): boolean;

getFirstQueuedThread(): Thread;

isQueued(arg0: Thread): boolean;

hasQueuedPredecessors(): boolean;

getQueueLength(): number;

getQueuedThreads(): Collection<Thread>;

getExclusiveQueuedThreads(): Collection<Thread>;

getSharedQueuedThreads(): Collection<Thread>;
toString(): string;

owns(arg0: AbstractQueuedSynchronizer.ConditionObject): boolean;

hasWaiters(arg0: AbstractQueuedSynchronizer.ConditionObject): boolean;

getWaitQueueLength(arg0: AbstractQueuedSynchronizer.ConditionObject): number;

getWaitingThreads(arg0: AbstractQueuedSynchronizer.ConditionObject): Collection<Thread>;
 }
export namespace AbstractQueuedSynchronizer { 
export class ConditionObject implements Condition, Serializable {
constructor(arg0: AbstractQueuedSynchronizer);

signal(): void;

signalAll(): void;

awaitUninterruptibly(): void;

await(): void;

awaitNanos(arg0: number): number;

awaitUntil(arg0: Date): boolean;

await(arg0: number, arg1: TimeUnit): boolean;
 }

}

export interface Condition {

await(): void;

awaitUninterruptibly(): void;

awaitNanos(arg0: number): number;

await(arg0: number, arg1: TimeUnit): boolean;

awaitUntil(arg0: Date): boolean;

signal(): void;

signalAll(): void;
 }

export interface Lock {

lock(): void;

lockInterruptibly(): void;

tryLock(): boolean;

tryLock(arg0: number, arg1: TimeUnit): boolean;

unlock(): void;

newCondition(): Condition;
 }

export class LockSupport {

static setCurrentBlocker(arg0: Object): void;

static unpark(arg0: Thread): void;

static park(arg0: Object): void;

static parkNanos(arg0: Object, arg1: number): void;

static parkUntil(arg0: Object, arg1: number): void;

static getBlocker(arg0: Thread): Object;

static park(): void;

static parkNanos(arg0: number): void;

static parkUntil(arg0: number): void;
 }

export interface ReadWriteLock {

readLock(): Lock;

writeLock(): Lock;
 }

export class ReentrantLock implements Lock, Serializable {
constructor();
constructor(arg0: boolean);

lock(): void;

lockInterruptibly(): void;

tryLock(): boolean;

tryLock(arg0: number, arg1: TimeUnit): boolean;

unlock(): void;

newCondition(): Condition;

getHoldCount(): number;

isHeldByCurrentThread(): boolean;

isLocked(): boolean;

isFair(): boolean;

hasQueuedThreads(): boolean;

hasQueuedThread(arg0: Thread): boolean;

getQueueLength(): number;

hasWaiters(arg0: Condition): boolean;

getWaitQueueLength(arg0: Condition): number;
toString(): string;
 }

export class ReentrantReadWriteLock implements ReadWriteLock, Serializable {
constructor();
constructor(arg0: boolean);

writeLock(): ReentrantReadWriteLock.WriteLock;

readLock(): ReentrantReadWriteLock.ReadLock;

isFair(): boolean;

getReadLockCount(): number;

isWriteLocked(): boolean;

isWriteLockedByCurrentThread(): boolean;

getWriteHoldCount(): number;

getReadHoldCount(): number;

hasQueuedThreads(): boolean;

hasQueuedThread(arg0: Thread): boolean;

getQueueLength(): number;

hasWaiters(arg0: Condition): boolean;

getWaitQueueLength(arg0: Condition): number;
toString(): string;
 }
export namespace ReentrantReadWriteLock { 
export class ReadLock implements Lock, Serializable {

lock(): void;

lockInterruptibly(): void;

tryLock(): boolean;

tryLock(arg0: number, arg1: TimeUnit): boolean;

unlock(): void;

newCondition(): Condition;
toString(): string;
 }

export class WriteLock implements Lock, Serializable {

lock(): void;

lockInterruptibly(): void;

tryLock(): boolean;

tryLock(arg0: number, arg1: TimeUnit): boolean;

unlock(): void;

newCondition(): Condition;
toString(): string;

isHeldByCurrentThread(): boolean;

getHoldCount(): number;
 }

}

export class StampedLock implements Serializable {
constructor();

writeLock(): number;

tryWriteLock(): number;

tryWriteLock(arg0: number, arg1: TimeUnit): number;

writeLockInterruptibly(): number;

readLock(): number;

tryReadLock(): number;

tryReadLock(arg0: number, arg1: TimeUnit): number;

readLockInterruptibly(): number;

tryOptimisticRead(): number;

validate(arg0: number): boolean;

unlockWrite(arg0: number): void;

unlockRead(arg0: number): void;

unlock(arg0: number): void;

tryConvertToWriteLock(arg0: number): number;

tryConvertToReadLock(arg0: number): number;

tryConvertToOptimisticRead(arg0: number): number;

tryUnlockWrite(): boolean;

tryUnlockRead(): boolean;

isWriteLocked(): boolean;

isReadLocked(): boolean;

static isWriteLockStamp(arg0: number): boolean;

static isReadLockStamp(arg0: number): boolean;

static isLockStamp(arg0: number): boolean;

static isOptimisticReadStamp(arg0: number): boolean;

getReadLockCount(): number;
toString(): string;

asReadLock(): Lock;

asWriteLock(): Lock;

asReadWriteLock(): ReadWriteLock;
 }

}
