/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="javax.xml.namespace.d.ts" />
/// <reference path="java.math.d.ts" />
declare module '@afterburnerhq/javax.xml.datatype' { 
import { Throwable, ClassLoader, Cloneable, String, Number, Exception } from '@afterburnerhq/java.lang'
import { GregorianCalendar, Locale, TimeZone, Date, Calendar } from '@afterburnerhq/java.util'
import { QName } from '@afterburnerhq/javax.xml.namespace'
import { BigInteger, BigDecimal } from '@afterburnerhq/java.math'
export class DatatypeConfigurationException extends Exception {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class DatatypeConstants {
static JANUARY:number
static FEBRUARY:number
static MARCH:number
static APRIL:number
static MAY:number
static JUNE:number
static JULY:number
static AUGUST:number
static SEPTEMBER:number
static OCTOBER:number
static NOVEMBER:number
static DECEMBER:number
static LESSER:number
static EQUAL:number
static GREATER:number
static INDETERMINATE:number
static FIELD_UNDEFINED:number
static YEARS:DatatypeConstants.Field
static MONTHS:DatatypeConstants.Field
static DAYS:DatatypeConstants.Field
static HOURS:DatatypeConstants.Field
static MINUTES:DatatypeConstants.Field
static SECONDS:DatatypeConstants.Field
static DATETIME:QName
static TIME:QName
static DATE:QName
static GYEARMONTH:QName
static GMONTHDAY:QName
static GYEAR:QName
static GMONTH:QName
static GDAY:QName
static DURATION:QName
static DURATION_DAYTIME:QName
static DURATION_YEARMONTH:QName
static MAX_TIMEZONE_OFFSET:number
static MIN_TIMEZONE_OFFSET:number
 }
export namespace DatatypeConstants { 
export class Field {
toString(): string;

getId(): number;
 }

}

export abstract class DatatypeFactory {
static DATATYPEFACTORY_PROPERTY:String
static DATATYPEFACTORY_IMPLEMENTATION_CLASS:String

static newDefaultInstance(): DatatypeFactory;

static newInstance(): DatatypeFactory;

static newInstance(arg0: String, arg1: ClassLoader): DatatypeFactory;

abstract newDuration(arg0: String): Duration;

abstract newDuration(arg0: number): Duration;

abstract newDuration(arg0: boolean, arg1: BigInteger, arg2: BigInteger, arg3: BigInteger, arg4: BigInteger, arg5: BigInteger, arg6: BigDecimal): Duration;

newDuration(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Duration;

newDurationDayTime(arg0: String): Duration;

newDurationDayTime(arg0: number): Duration;

newDurationDayTime(arg0: boolean, arg1: BigInteger, arg2: BigInteger, arg3: BigInteger, arg4: BigInteger): Duration;

newDurationDayTime(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number): Duration;

newDurationYearMonth(arg0: String): Duration;

newDurationYearMonth(arg0: number): Duration;

newDurationYearMonth(arg0: boolean, arg1: BigInteger, arg2: BigInteger): Duration;

newDurationYearMonth(arg0: boolean, arg1: number, arg2: number): Duration;

abstract newXMLGregorianCalendar(): XMLGregorianCalendar;

abstract newXMLGregorianCalendar(arg0: String): XMLGregorianCalendar;

abstract newXMLGregorianCalendar(arg0: GregorianCalendar): XMLGregorianCalendar;

abstract newXMLGregorianCalendar(arg0: BigInteger, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: BigDecimal, arg7: number): XMLGregorianCalendar;

newXMLGregorianCalendar(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): XMLGregorianCalendar;

newXMLGregorianCalendarDate(arg0: number, arg1: number, arg2: number, arg3: number): XMLGregorianCalendar;

newXMLGregorianCalendarTime(arg0: number, arg1: number, arg2: number, arg3: number): XMLGregorianCalendar;

newXMLGregorianCalendarTime(arg0: number, arg1: number, arg2: number, arg3: BigDecimal, arg4: number): XMLGregorianCalendar;

newXMLGregorianCalendarTime(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): XMLGregorianCalendar;
 }

export abstract class Duration {
constructor();

getXMLSchemaType(): QName;

abstract getSign(): number;

getYears(): number;

getMonths(): number;

getDays(): number;

getHours(): number;

getMinutes(): number;

getSeconds(): number;

getTimeInMillis(arg0: Calendar): number;

getTimeInMillis(arg0: Date): number;

abstract getField(arg0: DatatypeConstants.Field): Number;

abstract isSet(arg0: DatatypeConstants.Field): boolean;

abstract add(arg0: Duration): Duration;

abstract addTo(arg0: Calendar): void;

addTo(arg0: Date): void;

subtract(arg0: Duration): Duration;

multiply(arg0: number): Duration;

abstract multiply(arg0: BigDecimal): Duration;

abstract negate(): Duration;

abstract normalizeWith(arg0: Calendar): Duration;

abstract compare(arg0: Duration): number;

isLongerThan(arg0: Duration): boolean;

isShorterThan(arg0: Duration): boolean;

equals(arg0: Object): boolean;

abstract hashCode(): number;
toString(): string;
 }

export abstract class XMLGregorianCalendar implements Cloneable {
constructor();

abstract clear(): void;

abstract reset(): void;

abstract setYear(arg0: BigInteger): void;

abstract setYear(arg0: number): void;

abstract setMonth(arg0: number): void;

abstract setDay(arg0: number): void;

abstract setTimezone(arg0: number): void;

setTime(arg0: number, arg1: number, arg2: number): void;

abstract setHour(arg0: number): void;

abstract setMinute(arg0: number): void;

abstract setSecond(arg0: number): void;

abstract setMillisecond(arg0: number): void;

abstract setFractionalSecond(arg0: BigDecimal): void;

setTime(arg0: number, arg1: number, arg2: number, arg3: BigDecimal): void;

setTime(arg0: number, arg1: number, arg2: number, arg3: number): void;

abstract getEon(): BigInteger;

abstract getYear(): number;

abstract getEonAndYear(): BigInteger;

abstract getMonth(): number;

abstract getDay(): number;

abstract getTimezone(): number;

abstract getHour(): number;

abstract getMinute(): number;

abstract getSecond(): number;

getMillisecond(): number;

abstract getFractionalSecond(): BigDecimal;

abstract compare(arg0: XMLGregorianCalendar): number;

abstract normalize(): XMLGregorianCalendar;

equals(arg0: Object): boolean;

hashCode(): number;

abstract toXMLFormat(): String;

abstract getXMLSchemaType(): QName;
toString(): string;

abstract isValid(): boolean;

abstract add(arg0: Duration): void;

abstract toGregorianCalendar(): GregorianCalendar;

abstract toGregorianCalendar(arg0: TimeZone, arg1: Locale, arg2: XMLGregorianCalendar): GregorianCalendar;

abstract getTimeZone(arg0: number): TimeZone;

abstract clone(): Object;
 }

}
