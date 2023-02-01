/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="javax.management.d.ts" />
/// <reference path="javax.management.openmbean.d.ts" />
declare module '@afterburnerhq/java.lang.management' { 
import { BasicPermission } from '@afterburnerhq/java.security'
import { Enum, StackTraceElement, Class, String, Thread } from '@afterburnerhq/java.lang'
import { Map, List, Set } from '@afterburnerhq/java.util'
import { MBeanServerConnection, MBeanServer, ObjectName } from '@afterburnerhq/javax.management'
import { CompositeData } from '@afterburnerhq/javax.management.openmbean'
export interface BufferPoolMXBean extends PlatformManagedObject {

getName(): String;

getCount(): number;

getTotalCapacity(): number;

getMemoryUsed(): number;
 }

export interface ClassLoadingMXBean extends PlatformManagedObject {

getTotalLoadedClassCount(): number;

getLoadedClassCount(): number;

getUnloadedClassCount(): number;

isVerbose(): boolean;

setVerbose(arg0: boolean): void;
 }

export interface CompilationMXBean extends PlatformManagedObject {

getName(): String;

isCompilationTimeMonitoringSupported(): boolean;

getTotalCompilationTime(): number;
 }

export interface GarbageCollectorMXBean extends MemoryManagerMXBean {

getCollectionCount(): number;

getCollectionTime(): number;
 }

export class LockInfo {
constructor(arg0: String, arg1: number);

getClassName(): String;

getIdentityHashCode(): number;

static from(arg0: CompositeData): LockInfo;
toString(): string;
 }

export class ManagementFactory {
static CLASS_LOADING_MXBEAN_NAME:String
static COMPILATION_MXBEAN_NAME:String
static MEMORY_MXBEAN_NAME:String
static OPERATING_SYSTEM_MXBEAN_NAME:String
static RUNTIME_MXBEAN_NAME:String
static THREAD_MXBEAN_NAME:String
static GARBAGE_COLLECTOR_MXBEAN_DOMAIN_TYPE:String
static MEMORY_MANAGER_MXBEAN_DOMAIN_TYPE:String
static MEMORY_POOL_MXBEAN_DOMAIN_TYPE:String

static getClassLoadingMXBean(): ClassLoadingMXBean;

static getMemoryMXBean(): MemoryMXBean;

static getThreadMXBean(): ThreadMXBean;

static getRuntimeMXBean(): RuntimeMXBean;

static getCompilationMXBean(): CompilationMXBean;

static getOperatingSystemMXBean(): OperatingSystemMXBean;

static getMemoryPoolMXBeans(): List<MemoryPoolMXBean>;

static getMemoryManagerMXBeans(): List<MemoryManagerMXBean>;

static getGarbageCollectorMXBeans(): List<GarbageCollectorMXBean>;

static getPlatformMBeanServer(): MBeanServer;

static newPlatformMXBeanProxy<T extends Object>(arg0: MBeanServerConnection, arg1: String, arg2: Class<T>): T;

static getPlatformMXBean<T extends PlatformManagedObject>(arg0: Class<T>): T;

static getPlatformMXBeans<T extends PlatformManagedObject>(arg0: Class<T>): List<T>;

static getPlatformMXBean<T extends PlatformManagedObject>(arg0: MBeanServerConnection, arg1: Class<T>): T;

static getPlatformMXBeans<T extends PlatformManagedObject>(arg0: MBeanServerConnection, arg1: Class<T>): List<T>;

static getPlatformManagementInterfaces(): Set<Class<PlatformManagedObject>>;
 }

export class ManagementPermission extends BasicPermission {
constructor(arg0: String);
constructor(arg0: String, arg1: String);
 }

export interface MemoryMXBean extends PlatformManagedObject {

getObjectPendingFinalizationCount(): number;

getHeapMemoryUsage(): MemoryUsage;

getNonHeapMemoryUsage(): MemoryUsage;

isVerbose(): boolean;

setVerbose(arg0: boolean): void;

gc(): void;
 }

export interface MemoryManagerMXBean extends PlatformManagedObject {

getName(): String;

isValid(): boolean;

getMemoryPoolNames(): String[];
 }

export class MemoryNotificationInfo {
static MEMORY_THRESHOLD_EXCEEDED:String
static MEMORY_COLLECTION_THRESHOLD_EXCEEDED:String
constructor(arg0: String, arg1: MemoryUsage, arg2: number);

getPoolName(): String;

getUsage(): MemoryUsage;

getCount(): number;

static from(arg0: CompositeData): MemoryNotificationInfo;
 }

export interface MemoryPoolMXBean extends PlatformManagedObject {

getName(): String;

getType(): MemoryType;

getUsage(): MemoryUsage;

getPeakUsage(): MemoryUsage;

resetPeakUsage(): void;

isValid(): boolean;

getMemoryManagerNames(): String[];

getUsageThreshold(): number;

setUsageThreshold(arg0: number): void;

isUsageThresholdExceeded(): boolean;

getUsageThresholdCount(): number;

isUsageThresholdSupported(): boolean;

getCollectionUsageThreshold(): number;

setCollectionUsageThreshold(arg0: number): void;

isCollectionUsageThresholdExceeded(): boolean;

getCollectionUsageThresholdCount(): number;

getCollectionUsage(): MemoryUsage;

isCollectionUsageThresholdSupported(): boolean;
 }

export class MemoryType extends Enum<MemoryType> {
static HEAP:MemoryType
static NON_HEAP:MemoryType

static values(): MemoryType[];

static valueOf(arg0: String): MemoryType;
toString(): string;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class MemoryUsage {
constructor(arg0: number, arg1: number, arg2: number, arg3: number);

getInit(): number;

getUsed(): number;

getCommitted(): number;

getMax(): number;
toString(): string;

static from(arg0: CompositeData): MemoryUsage;
 }

export class MonitorInfo extends LockInfo {
constructor(arg0: String, arg1: number, arg2: number, arg3: StackTraceElement);

getLockedStackDepth(): number;

getLockedStackFrame(): StackTraceElement;

static from(arg0: CompositeData): MonitorInfo;
 }

export interface OperatingSystemMXBean extends PlatformManagedObject {

getName(): String;

getArch(): String;

getVersion(): String;

getAvailableProcessors(): number;

getSystemLoadAverage(): number;
 }

export interface PlatformLoggingMXBean extends PlatformManagedObject {

getLoggerNames(): List<String>;

getLoggerLevel(arg0: String): String;

setLoggerLevel(arg0: String, arg1: String): void;

getParentLoggerName(arg0: String): String;
 }

export interface PlatformManagedObject {

getObjectName(): ObjectName;
 }

export interface RuntimeMXBean extends PlatformManagedObject {

/* default */ getPid(): number;

getName(): String;

getVmName(): String;

getVmVendor(): String;

getVmVersion(): String;

getSpecName(): String;

getSpecVendor(): String;

getSpecVersion(): String;

getManagementSpecVersion(): String;

getClassPath(): String;

getLibraryPath(): String;

isBootClassPathSupported(): boolean;

getBootClassPath(): String;

getInputArguments(): List<String>;

getUptime(): number;

getStartTime(): number;

getSystemProperties(): Map<String, String>;
 }

export class ThreadInfo {

getThreadId(): number;

getThreadName(): String;

getThreadState(): Thread.State;

getBlockedTime(): number;

getBlockedCount(): number;

getWaitedTime(): number;

getWaitedCount(): number;

getLockInfo(): LockInfo;

getLockName(): String;

getLockOwnerId(): number;

getLockOwnerName(): String;

getStackTrace(): StackTraceElement[];

isSuspended(): boolean;

isInNative(): boolean;

isDaemon(): boolean;

getPriority(): number;
toString(): string;

static from(arg0: CompositeData): ThreadInfo;

getLockedMonitors(): MonitorInfo[];

getLockedSynchronizers(): LockInfo[];
 }

export interface ThreadMXBean extends PlatformManagedObject {

getThreadCount(): number;

getPeakThreadCount(): number;

getTotalStartedThreadCount(): number;

getDaemonThreadCount(): number;

getAllThreadIds(): number[];

getThreadInfo(arg0: number): ThreadInfo;

getThreadInfo(arg0: number[]): ThreadInfo[];

getThreadInfo(arg0: number, arg1: number): ThreadInfo;

getThreadInfo(arg0: number[], arg1: number): ThreadInfo[];

isThreadContentionMonitoringSupported(): boolean;

isThreadContentionMonitoringEnabled(): boolean;

setThreadContentionMonitoringEnabled(arg0: boolean): void;

getCurrentThreadCpuTime(): number;

getCurrentThreadUserTime(): number;

getThreadCpuTime(arg0: number): number;

getThreadUserTime(arg0: number): number;

isThreadCpuTimeSupported(): boolean;

isCurrentThreadCpuTimeSupported(): boolean;

isThreadCpuTimeEnabled(): boolean;

setThreadCpuTimeEnabled(arg0: boolean): void;

findMonitorDeadlockedThreads(): number[];

resetPeakThreadCount(): void;

findDeadlockedThreads(): number[];

isObjectMonitorUsageSupported(): boolean;

isSynchronizerUsageSupported(): boolean;

getThreadInfo(arg0: number[], arg1: boolean, arg2: boolean): ThreadInfo[];

/* default */ getThreadInfo(arg0: number[], arg1: boolean, arg2: boolean, arg3: number): ThreadInfo[];

dumpAllThreads(arg0: boolean, arg1: boolean): ThreadInfo[];

/* default */ dumpAllThreads(arg0: boolean, arg1: boolean, arg2: number): ThreadInfo[];
 }

}
