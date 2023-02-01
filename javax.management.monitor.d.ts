/// <reference path="java.lang.d.ts" />
/// <reference path="javax.management.d.ts" />
declare module '@afterburnerhq/javax.management.monitor' { 
import { Number, Boolean, String } from '@afterburnerhq/java.lang'
import { MBeanNotificationInfo, NotificationBroadcasterSupport, JMRuntimeException, Notification, ObjectName, MBeanRegistration, MBeanServer } from '@afterburnerhq/javax.management'
export class CounterMonitor extends Monitor implements CounterMonitorMBean {
constructor();

start(): void;

stop(): void;

getDerivedGauge(arg0: ObjectName): Number;

getDerivedGaugeTimeStamp(arg0: ObjectName): number;

getThreshold(arg0: ObjectName): Number;

getInitThreshold(): Number;

setInitThreshold(arg0: Number): void;

getDerivedGauge(): Number;

getDerivedGaugeTimeStamp(): number;

getThreshold(): Number;

setThreshold(arg0: Number): void;

getOffset(): Number;

setOffset(arg0: Number): void;

getModulus(): Number;

setModulus(arg0: Number): void;

getNotify(): boolean;

setNotify(arg0: boolean): void;

getDifferenceMode(): boolean;

setDifferenceMode(arg0: boolean): void;

getNotificationInfo(): MBeanNotificationInfo[];
 }

export interface CounterMonitorMBean extends MonitorMBean {

getDerivedGauge(): Number;

getDerivedGaugeTimeStamp(): number;

getThreshold(): Number;

setThreshold(arg0: Number): void;

getDerivedGauge(arg0: ObjectName): Number;

getDerivedGaugeTimeStamp(arg0: ObjectName): number;

getThreshold(arg0: ObjectName): Number;

getInitThreshold(): Number;

setInitThreshold(arg0: Number): void;

getOffset(): Number;

setOffset(arg0: Number): void;

getModulus(): Number;

setModulus(arg0: Number): void;

getNotify(): boolean;

setNotify(arg0: boolean): void;

getDifferenceMode(): boolean;

setDifferenceMode(arg0: boolean): void;
 }

export class GaugeMonitor extends Monitor implements GaugeMonitorMBean {
constructor();

start(): void;

stop(): void;

getDerivedGauge(arg0: ObjectName): Number;

getDerivedGaugeTimeStamp(arg0: ObjectName): number;

getDerivedGauge(): Number;

getDerivedGaugeTimeStamp(): number;

getHighThreshold(): Number;

getLowThreshold(): Number;

setThresholds(arg0: Number, arg1: Number): void;

getNotifyHigh(): boolean;

setNotifyHigh(arg0: boolean): void;

getNotifyLow(): boolean;

setNotifyLow(arg0: boolean): void;

getDifferenceMode(): boolean;

setDifferenceMode(arg0: boolean): void;

getNotificationInfo(): MBeanNotificationInfo[];
 }

export interface GaugeMonitorMBean extends MonitorMBean {

getDerivedGauge(): Number;

getDerivedGaugeTimeStamp(): number;

getDerivedGauge(arg0: ObjectName): Number;

getDerivedGaugeTimeStamp(arg0: ObjectName): number;

getHighThreshold(): Number;

getLowThreshold(): Number;

setThresholds(arg0: Number, arg1: Number): void;

getNotifyHigh(): boolean;

setNotifyHigh(arg0: boolean): void;

getNotifyLow(): boolean;

setNotifyLow(arg0: boolean): void;

getDifferenceMode(): boolean;

setDifferenceMode(arg0: boolean): void;
 }

export abstract class Monitor extends NotificationBroadcasterSupport implements MonitorMBean, MBeanRegistration {
constructor();

preRegister(arg0: MBeanServer, arg1: ObjectName): ObjectName;

postRegister(arg0: Boolean): void;

preDeregister(): void;

postDeregister(): void;

abstract start(): void;

abstract stop(): void;

getObservedObject(): ObjectName;

setObservedObject(arg0: ObjectName): void;

addObservedObject(arg0: ObjectName): void;

removeObservedObject(arg0: ObjectName): void;

containsObservedObject(arg0: ObjectName): boolean;

getObservedObjects(): ObjectName[];

getObservedAttribute(): String;

setObservedAttribute(arg0: String): void;

getGranularityPeriod(): number;

setGranularityPeriod(arg0: number): void;

isActive(): boolean;
 }

export interface MonitorMBean {

start(): void;

stop(): void;

addObservedObject(arg0: ObjectName): void;

removeObservedObject(arg0: ObjectName): void;

containsObservedObject(arg0: ObjectName): boolean;

getObservedObjects(): ObjectName[];

getObservedObject(): ObjectName;

setObservedObject(arg0: ObjectName): void;

getObservedAttribute(): String;

setObservedAttribute(arg0: String): void;

getGranularityPeriod(): number;

setGranularityPeriod(arg0: number): void;

isActive(): boolean;
 }

export class MonitorNotification extends Notification {
static OBSERVED_OBJECT_ERROR:String
static OBSERVED_ATTRIBUTE_ERROR:String
static OBSERVED_ATTRIBUTE_TYPE_ERROR:String
static THRESHOLD_ERROR:String
static RUNTIME_ERROR:String
static THRESHOLD_VALUE_EXCEEDED:String
static THRESHOLD_HIGH_VALUE_EXCEEDED:String
static THRESHOLD_LOW_VALUE_EXCEEDED:String
static STRING_TO_COMPARE_VALUE_MATCHED:String
static STRING_TO_COMPARE_VALUE_DIFFERED:String

getObservedObject(): ObjectName;

getObservedAttribute(): String;

getDerivedGauge(): Object;

getTrigger(): Object;
 }

export class MonitorSettingException extends JMRuntimeException {
constructor();
constructor(arg0: String);
 }

export class StringMonitor extends Monitor implements StringMonitorMBean {
constructor();

start(): void;

stop(): void;

getDerivedGauge(arg0: ObjectName): String;

getDerivedGaugeTimeStamp(arg0: ObjectName): number;

getDerivedGauge(): String;

getDerivedGaugeTimeStamp(): number;

getStringToCompare(): String;

setStringToCompare(arg0: String): void;

getNotifyMatch(): boolean;

setNotifyMatch(arg0: boolean): void;

getNotifyDiffer(): boolean;

setNotifyDiffer(arg0: boolean): void;

getNotificationInfo(): MBeanNotificationInfo[];
 }

export interface StringMonitorMBean extends MonitorMBean {

getDerivedGauge(): String;

getDerivedGaugeTimeStamp(): number;

getDerivedGauge(arg0: ObjectName): String;

getDerivedGaugeTimeStamp(arg0: ObjectName): number;

getStringToCompare(): String;

setStringToCompare(arg0: String): void;

getNotifyMatch(): boolean;

setNotifyMatch(arg0: boolean): void;

getNotifyDiffer(): boolean;

setNotifyDiffer(arg0: boolean): void;
 }

}
