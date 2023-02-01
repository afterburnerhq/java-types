/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.concurrent.d.ts" />
declare module '@afterburnerhq/java.lang.ref' { 
import { Runnable } from '@afterburnerhq/java.lang'
import { ThreadFactory } from '@afterburnerhq/java.util.concurrent'
export class Cleaner {

static create(): Cleaner;

static create(arg0: ThreadFactory): Cleaner;

register(arg0: Object, arg1: Runnable): Cleaner.Cleanable;
 }
export namespace Cleaner { 
export interface Cleanable {

clean(): void;
 }

}

export class PhantomReference<T extends Object> extends Reference<T> {
constructor(arg0: T, arg1: ReferenceQueue<T>);

get(): T;
 }

export abstract class Reference<T extends Object> extends Object {

get(): T;

refersTo(arg0: T): boolean;

clear(): void;

isEnqueued(): boolean;

enqueue(): boolean;

static reachabilityFence(arg0: Object): void;
 }

export class ReferenceQueue<T extends Object> extends Object {
constructor();

poll(): Reference<T>;

remove(arg0: number): Reference<T>;

remove(): Reference<T>;
 }

export class SoftReference<T extends Object> extends Reference<T> {
constructor(arg0: T);
constructor(arg0: T, arg1: ReferenceQueue<T>);

get(): T;
 }

export class WeakReference<T extends Object> extends Reference<T> {
constructor(arg0: T);
constructor(arg0: T, arg1: ReferenceQueue<T>);
 }

}
