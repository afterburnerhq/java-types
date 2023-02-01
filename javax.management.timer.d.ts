/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="javax.management.d.ts" />
declare module '@afterburnerhq/javax.management.timer' { 
import { Integer, Long, String, Boolean } from '@afterburnerhq/java.lang'
import { Vector, Date } from '@afterburnerhq/java.util'
import { MBeanNotificationInfo, NotificationBroadcasterSupport, Notification, MBeanRegistration, MBeanServer, ObjectName } from '@afterburnerhq/javax.management'
export class Timer extends NotificationBroadcasterSupport implements TimerMBean, MBeanRegistration {
static ONE_SECOND:number
static ONE_MINUTE:number
static ONE_HOUR:number
static ONE_DAY:number
static ONE_WEEK:number
constructor();

preRegister(arg0: MBeanServer, arg1: ObjectName): ObjectName;

postRegister(arg0: Boolean): void;

preDeregister(): void;

postDeregister(): void;

getNotificationInfo(): MBeanNotificationInfo[];

start(): void;

stop(): void;

addNotification(arg0: String, arg1: String, arg2: Object, arg3: Date, arg4: number, arg5: number, arg6: boolean): Number;

addNotification(arg0: String, arg1: String, arg2: Object, arg3: Date, arg4: number, arg5: number): Number;

addNotification(arg0: String, arg1: String, arg2: Object, arg3: Date, arg4: number): Number;

addNotification(arg0: String, arg1: String, arg2: Object, arg3: Date): Number;

removeNotification(arg0: Number): void;

removeNotifications(arg0: String): void;

removeAllNotifications(): void;

getNbNotifications(): number;

getAllNotificationIDs(): Vector<Number>;

getNotificationIDs(arg0: String): Vector<Number>;

getNotificationType(arg0: Number): String;

getNotificationMessage(arg0: Number): String;

getNotificationUserData(arg0: Number): Object;

getDate(arg0: Number): Date;

getPeriod(arg0: Number): Number;

getNbOccurences(arg0: Number): Number;

getFixedRate(arg0: Number): Boolean;

getSendPastNotifications(): boolean;

setSendPastNotifications(arg0: boolean): void;

isActive(): boolean;

isEmpty(): boolean;
 }

export interface TimerMBean {

start(): void;

stop(): void;

addNotification(arg0: String, arg1: String, arg2: Object, arg3: Date, arg4: number, arg5: number, arg6: boolean): Number;

addNotification(arg0: String, arg1: String, arg2: Object, arg3: Date, arg4: number, arg5: number): Number;

addNotification(arg0: String, arg1: String, arg2: Object, arg3: Date, arg4: number): Number;

addNotification(arg0: String, arg1: String, arg2: Object, arg3: Date): Number;

removeNotification(arg0: Number): void;

removeNotifications(arg0: String): void;

removeAllNotifications(): void;

getNbNotifications(): number;

getAllNotificationIDs(): Vector<Number>;

getNotificationIDs(arg0: String): Vector<Number>;

getNotificationType(arg0: Number): String;

getNotificationMessage(arg0: Number): String;

getNotificationUserData(arg0: Number): Object;

getDate(arg0: Number): Date;

getPeriod(arg0: Number): Number;

getNbOccurences(arg0: Number): Number;

getFixedRate(arg0: Number): Boolean;

getSendPastNotifications(): boolean;

setSendPastNotifications(arg0: boolean): void;

isActive(): boolean;

isEmpty(): boolean;
 }

export class TimerNotification extends Notification {
constructor(arg0: String, arg1: Object, arg2: number, arg3: number, arg4: String, arg5: Number);

getNotificationID(): Number;
 }

}
