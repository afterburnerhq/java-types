/// <reference path="java.lang.d.ts" />
/// <reference path="java.time.format.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.time.chrono.d.ts" />
/// <reference path="java.util.stream.d.ts" />
/// <reference path="java.time.zone.d.ts" />
/// <reference path="java.time.temporal.d.ts" />
declare module '@afterburnerhq/java.time' { 
import { Enum, Comparable, RuntimeException, CharSequence, Throwable, Class, String } from '@afterburnerhq/java.lang'
import { TextStyle, DateTimeFormatter } from '@afterburnerhq/java.time.format'
import { Locale, List, Set, Map, Comparator } from '@afterburnerhq/java.util'
import { Serializable } from '@afterburnerhq/java.io'
import { ChronoPeriod, ChronoLocalDate, IsoChronology, ChronoLocalDateTime, IsoEra, ChronoZonedDateTime } from '@afterburnerhq/java.time.chrono'
import { Stream } from '@afterburnerhq/java.util.stream'
import { ZoneRules } from '@afterburnerhq/java.time.zone'
import { ValueRange, TemporalAccessor, TemporalField, Temporal, TemporalUnit, TemporalAmount, TemporalAdjuster, TemporalQuery } from '@afterburnerhq/java.time.temporal'
export abstract class Clock implements InstantSource {

static systemUTC(): Clock;

static systemDefaultZone(): Clock;

static system(arg0: ZoneId): Clock;

static tickMillis(arg0: ZoneId): Clock;

static tickSeconds(arg0: ZoneId): Clock;

static tickMinutes(arg0: ZoneId): Clock;

static tick(arg0: Clock, arg1: Duration): Clock;

static fixed(arg0: Instant, arg1: ZoneId): Clock;

static offset(arg0: Clock, arg1: Duration): Clock;

abstract getZone(): ZoneId;

abstract withZone(arg0: ZoneId): Clock;

millis(): number;

abstract instant(): Instant;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class DateTimeException extends RuntimeException {
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
 }

export class DayOfWeek extends Enum<DayOfWeek> implements TemporalAccessor, TemporalAdjuster {
static MONDAY:DayOfWeek
static TUESDAY:DayOfWeek
static WEDNESDAY:DayOfWeek
static THURSDAY:DayOfWeek
static FRIDAY:DayOfWeek
static SATURDAY:DayOfWeek
static SUNDAY:DayOfWeek

static values(): DayOfWeek[];

static valueOf(arg0: String): DayOfWeek;

static of(arg0: number): DayOfWeek;

static from(arg0: TemporalAccessor): DayOfWeek;

getValue(): number;

getDisplayName(arg0: TextStyle, arg1: Locale): String;

isSupported(arg0: TemporalField): boolean;

range(arg0: TemporalField): ValueRange;

get(arg0: TemporalField): number;

getLong(arg0: TemporalField): number;

plus(arg0: number): DayOfWeek;

minus(arg0: number): DayOfWeek;

query<R extends Object>(arg0: TemporalQuery<R>): R;

adjustInto(arg0: Temporal): Temporal;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class Duration extends Object implements TemporalAmount, Comparable<Duration>, Serializable {
static ZERO:Duration

static ofDays(arg0: number): Duration;

static ofHours(arg0: number): Duration;

static ofMinutes(arg0: number): Duration;

static ofSeconds(arg0: number): Duration;

static ofSeconds(arg0: number, arg1: number): Duration;

static ofMillis(arg0: number): Duration;

static ofNanos(arg0: number): Duration;

static of(arg0: number, arg1: TemporalUnit): Duration;

static from(arg0: TemporalAmount): Duration;

static parse(arg0: CharSequence): Duration;

static between(arg0: Temporal, arg1: Temporal): Duration;

get(arg0: TemporalUnit): number;

getUnits(): List<TemporalUnit>;

isZero(): boolean;

isNegative(): boolean;

getSeconds(): number;

getNano(): number;

withSeconds(arg0: number): Duration;

withNanos(arg0: number): Duration;

plus(arg0: Duration): Duration;

plus(arg0: number, arg1: TemporalUnit): Duration;

plusDays(arg0: number): Duration;

plusHours(arg0: number): Duration;

plusMinutes(arg0: number): Duration;

plusSeconds(arg0: number): Duration;

plusMillis(arg0: number): Duration;

plusNanos(arg0: number): Duration;

minus(arg0: Duration): Duration;

minus(arg0: number, arg1: TemporalUnit): Duration;

minusDays(arg0: number): Duration;

minusHours(arg0: number): Duration;

minusMinutes(arg0: number): Duration;

minusSeconds(arg0: number): Duration;

minusMillis(arg0: number): Duration;

minusNanos(arg0: number): Duration;

multipliedBy(arg0: number): Duration;

dividedBy(arg0: number): Duration;

dividedBy(arg0: Duration): number;

negated(): Duration;

abs(): Duration;

addTo(arg0: Temporal): Temporal;

subtractFrom(arg0: Temporal): Temporal;

toDays(): number;

toHours(): number;

toMinutes(): number;

toSeconds(): number;

toMillis(): number;

toNanos(): number;

toDaysPart(): number;

toHoursPart(): number;

toMinutesPart(): number;

toSecondsPart(): number;

toMillisPart(): number;

toNanosPart(): number;

truncatedTo(arg0: TemporalUnit): Duration;

compareTo(arg0: Duration): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class Instant extends Object implements Temporal, TemporalAdjuster, Comparable<Instant>, Serializable {
static EPOCH:Instant
static MIN:Instant
static MAX:Instant

static now(): Instant;

static now(arg0: Clock): Instant;

static ofEpochSecond(arg0: number): Instant;

static ofEpochSecond(arg0: number, arg1: number): Instant;

static ofEpochMilli(arg0: number): Instant;

static from(arg0: TemporalAccessor): Instant;

static parse(arg0: CharSequence): Instant;

isSupported(arg0: TemporalField): boolean;

isSupported(arg0: TemporalUnit): boolean;

range(arg0: TemporalField): ValueRange;

get(arg0: TemporalField): number;

getLong(arg0: TemporalField): number;

getEpochSecond(): number;

getNano(): number;

with(arg0: TemporalAdjuster): Instant;

with(arg0: TemporalField, arg1: number): Instant;

truncatedTo(arg0: TemporalUnit): Instant;

plus(arg0: TemporalAmount): Instant;

plus(arg0: number, arg1: TemporalUnit): Instant;

plusSeconds(arg0: number): Instant;

plusMillis(arg0: number): Instant;

plusNanos(arg0: number): Instant;

minus(arg0: TemporalAmount): Instant;

minus(arg0: number, arg1: TemporalUnit): Instant;

minusSeconds(arg0: number): Instant;

minusMillis(arg0: number): Instant;

minusNanos(arg0: number): Instant;

query<R extends Object>(arg0: TemporalQuery<R>): R;

adjustInto(arg0: Temporal): Temporal;

until(arg0: Temporal, arg1: TemporalUnit): number;

atOffset(arg0: ZoneOffset): OffsetDateTime;

atZone(arg0: ZoneId): ZonedDateTime;

toEpochMilli(): number;

compareTo(arg0: Instant): number;

isAfter(arg0: Instant): boolean;

isBefore(arg0: Instant): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export namespace InstantSource { 
function 
/* default */ system(): InstantSource;
function 
/* default */ tick(arg0: InstantSource, arg1: Duration): InstantSource;
function 
/* default */ fixed(arg0: Instant): InstantSource;
function 
/* default */ offset(arg0: InstantSource, arg1: Duration): InstantSource;
}

export interface InstantSource {

instant(): Instant;

/* default */ millis(): number;

/* default */ withZone(arg0: ZoneId): Clock;
 }

export class LocalDate implements Temporal, TemporalAdjuster, ChronoLocalDate, Serializable {
static MIN:LocalDate
static MAX:LocalDate
static EPOCH:LocalDate

static now(): LocalDate;

static now(arg0: ZoneId): LocalDate;

static now(arg0: Clock): LocalDate;

static of(arg0: number, arg1: Month, arg2: number): LocalDate;

static of(arg0: number, arg1: number, arg2: number): LocalDate;

static ofYearDay(arg0: number, arg1: number): LocalDate;

static ofInstant(arg0: Instant, arg1: ZoneId): LocalDate;

static ofEpochDay(arg0: number): LocalDate;

static from(arg0: TemporalAccessor): LocalDate;

static parse(arg0: CharSequence): LocalDate;

static parse(arg0: CharSequence, arg1: DateTimeFormatter): LocalDate;

isSupported(arg0: TemporalField): boolean;

isSupported(arg0: TemporalUnit): boolean;

range(arg0: TemporalField): ValueRange;

get(arg0: TemporalField): number;

getLong(arg0: TemporalField): number;

getChronology(): IsoChronology;

getEra(): IsoEra;

getYear(): number;

getMonthValue(): number;

getMonth(): Month;

getDayOfMonth(): number;

getDayOfYear(): number;

getDayOfWeek(): DayOfWeek;

isLeapYear(): boolean;

lengthOfMonth(): number;

lengthOfYear(): number;

with(arg0: TemporalAdjuster): LocalDate;

with(arg0: TemporalField, arg1: number): LocalDate;

withYear(arg0: number): LocalDate;

withMonth(arg0: number): LocalDate;

withDayOfMonth(arg0: number): LocalDate;

withDayOfYear(arg0: number): LocalDate;

plus(arg0: TemporalAmount): LocalDate;

plus(arg0: number, arg1: TemporalUnit): LocalDate;

plusYears(arg0: number): LocalDate;

plusMonths(arg0: number): LocalDate;

plusWeeks(arg0: number): LocalDate;

plusDays(arg0: number): LocalDate;

minus(arg0: TemporalAmount): LocalDate;

minus(arg0: number, arg1: TemporalUnit): LocalDate;

minusYears(arg0: number): LocalDate;

minusMonths(arg0: number): LocalDate;

minusWeeks(arg0: number): LocalDate;

minusDays(arg0: number): LocalDate;

query<R extends Object>(arg0: TemporalQuery<R>): R;

adjustInto(arg0: Temporal): Temporal;

until(arg0: Temporal, arg1: TemporalUnit): number;

until(arg0: ChronoLocalDate): Period;

datesUntil(arg0: LocalDate): Stream<LocalDate>;

datesUntil(arg0: LocalDate, arg1: Period): Stream<LocalDate>;

format(arg0: DateTimeFormatter): String;

atTime(arg0: LocalTime): LocalDateTime;

atTime(arg0: number, arg1: number): LocalDateTime;

atTime(arg0: number, arg1: number, arg2: number): LocalDateTime;

atTime(arg0: number, arg1: number, arg2: number, arg3: number): LocalDateTime;

atTime(arg0: OffsetTime): OffsetDateTime;

atStartOfDay(): LocalDateTime;

atStartOfDay(arg0: ZoneId): ZonedDateTime;

toEpochDay(): number;

toEpochSecond(arg0: LocalTime, arg1: ZoneOffset): number;

compareTo(arg0: ChronoLocalDate): number;

isAfter(arg0: ChronoLocalDate): boolean;

isBefore(arg0: ChronoLocalDate): boolean;

isEqual(arg0: ChronoLocalDate): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export interface LocalDateTime extends Temporal, TemporalAdjuster, ChronoLocalDateTime<LocalDate>, Serializable { }
export class LocalDateTime extends Object implements Temporal, TemporalAdjuster, ChronoLocalDateTime<LocalDate>, Serializable {
static MIN:LocalDateTime
static MAX:LocalDateTime

static now(): LocalDateTime;

static now(arg0: ZoneId): LocalDateTime;

static now(arg0: Clock): LocalDateTime;

static of(arg0: number, arg1: Month, arg2: number, arg3: number, arg4: number): LocalDateTime;

static of(arg0: number, arg1: Month, arg2: number, arg3: number, arg4: number, arg5: number): LocalDateTime;

static of(arg0: number, arg1: Month, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): LocalDateTime;

static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): LocalDateTime;

static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): LocalDateTime;

static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): LocalDateTime;

static of(arg0: LocalDate, arg1: LocalTime): LocalDateTime;

static ofInstant(arg0: Instant, arg1: ZoneId): LocalDateTime;

static ofEpochSecond(arg0: number, arg1: number, arg2: ZoneOffset): LocalDateTime;

static from(arg0: TemporalAccessor): LocalDateTime;

static parse(arg0: CharSequence): LocalDateTime;

static parse(arg0: CharSequence, arg1: DateTimeFormatter): LocalDateTime;

isSupported(arg0: TemporalField): boolean;

isSupported(arg0: TemporalUnit): boolean;

range(arg0: TemporalField): ValueRange;

get(arg0: TemporalField): number;

getLong(arg0: TemporalField): number;

toLocalDate(): LocalDate;

getYear(): number;

getMonthValue(): number;

getMonth(): Month;

getDayOfMonth(): number;

getDayOfYear(): number;

getDayOfWeek(): DayOfWeek;

toLocalTime(): LocalTime;

getHour(): number;

getMinute(): number;

getSecond(): number;

getNano(): number;

with(arg0: TemporalAdjuster): LocalDateTime;

with(arg0: TemporalField, arg1: number): LocalDateTime;

withYear(arg0: number): LocalDateTime;

withMonth(arg0: number): LocalDateTime;

withDayOfMonth(arg0: number): LocalDateTime;

withDayOfYear(arg0: number): LocalDateTime;

withHour(arg0: number): LocalDateTime;

withMinute(arg0: number): LocalDateTime;

withSecond(arg0: number): LocalDateTime;

withNano(arg0: number): LocalDateTime;

truncatedTo(arg0: TemporalUnit): LocalDateTime;

plus(arg0: TemporalAmount): LocalDateTime;

plus(arg0: number, arg1: TemporalUnit): LocalDateTime;

plusYears(arg0: number): LocalDateTime;

plusMonths(arg0: number): LocalDateTime;

plusWeeks(arg0: number): LocalDateTime;

plusDays(arg0: number): LocalDateTime;

plusHours(arg0: number): LocalDateTime;

plusMinutes(arg0: number): LocalDateTime;

plusSeconds(arg0: number): LocalDateTime;

plusNanos(arg0: number): LocalDateTime;

minus(arg0: TemporalAmount): LocalDateTime;

minus(arg0: number, arg1: TemporalUnit): LocalDateTime;

minusYears(arg0: number): LocalDateTime;

minusMonths(arg0: number): LocalDateTime;

minusWeeks(arg0: number): LocalDateTime;

minusDays(arg0: number): LocalDateTime;

minusHours(arg0: number): LocalDateTime;

minusMinutes(arg0: number): LocalDateTime;

minusSeconds(arg0: number): LocalDateTime;

minusNanos(arg0: number): LocalDateTime;

query<R extends Object>(arg0: TemporalQuery<R>): R;

adjustInto(arg0: Temporal): Temporal;

until(arg0: Temporal, arg1: TemporalUnit): number;

format(arg0: DateTimeFormatter): String;

atOffset(arg0: ZoneOffset): OffsetDateTime;

atZone(arg0: ZoneId): ZonedDateTime;

compareTo(arg0: ChronoLocalDateTime<any>): number;

isAfter(arg0: ChronoLocalDateTime<any>): boolean;

isBefore(arg0: ChronoLocalDateTime<any>): boolean;

isEqual(arg0: ChronoLocalDateTime<any>): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class LocalTime extends Object implements Temporal, TemporalAdjuster, Comparable<LocalTime>, Serializable {
static MIN:LocalTime
static MAX:LocalTime
static MIDNIGHT:LocalTime
static NOON:LocalTime

static now(): LocalTime;

static now(arg0: ZoneId): LocalTime;

static now(arg0: Clock): LocalTime;

static of(arg0: number, arg1: number): LocalTime;

static of(arg0: number, arg1: number, arg2: number): LocalTime;

static of(arg0: number, arg1: number, arg2: number, arg3: number): LocalTime;

static ofInstant(arg0: Instant, arg1: ZoneId): LocalTime;

static ofSecondOfDay(arg0: number): LocalTime;

static ofNanoOfDay(arg0: number): LocalTime;

static from(arg0: TemporalAccessor): LocalTime;

static parse(arg0: CharSequence): LocalTime;

static parse(arg0: CharSequence, arg1: DateTimeFormatter): LocalTime;

isSupported(arg0: TemporalField): boolean;

isSupported(arg0: TemporalUnit): boolean;

range(arg0: TemporalField): ValueRange;

get(arg0: TemporalField): number;

getLong(arg0: TemporalField): number;

getHour(): number;

getMinute(): number;

getSecond(): number;

getNano(): number;

with(arg0: TemporalAdjuster): LocalTime;

with(arg0: TemporalField, arg1: number): LocalTime;

withHour(arg0: number): LocalTime;

withMinute(arg0: number): LocalTime;

withSecond(arg0: number): LocalTime;

withNano(arg0: number): LocalTime;

truncatedTo(arg0: TemporalUnit): LocalTime;

plus(arg0: TemporalAmount): LocalTime;

plus(arg0: number, arg1: TemporalUnit): LocalTime;

plusHours(arg0: number): LocalTime;

plusMinutes(arg0: number): LocalTime;

plusSeconds(arg0: number): LocalTime;

plusNanos(arg0: number): LocalTime;

minus(arg0: TemporalAmount): LocalTime;

minus(arg0: number, arg1: TemporalUnit): LocalTime;

minusHours(arg0: number): LocalTime;

minusMinutes(arg0: number): LocalTime;

minusSeconds(arg0: number): LocalTime;

minusNanos(arg0: number): LocalTime;

query<R extends Object>(arg0: TemporalQuery<R>): R;

adjustInto(arg0: Temporal): Temporal;

until(arg0: Temporal, arg1: TemporalUnit): number;

format(arg0: DateTimeFormatter): String;

atDate(arg0: LocalDate): LocalDateTime;

atOffset(arg0: ZoneOffset): OffsetTime;

toSecondOfDay(): number;

toNanoOfDay(): number;

toEpochSecond(arg0: LocalDate, arg1: ZoneOffset): number;

compareTo(arg0: LocalTime): number;

isAfter(arg0: LocalTime): boolean;

isBefore(arg0: LocalTime): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class Month extends Enum<Month> implements TemporalAccessor, TemporalAdjuster {
static JANUARY:Month
static FEBRUARY:Month
static MARCH:Month
static APRIL:Month
static MAY:Month
static JUNE:Month
static JULY:Month
static AUGUST:Month
static SEPTEMBER:Month
static OCTOBER:Month
static NOVEMBER:Month
static DECEMBER:Month

static values(): Month[];

static valueOf(arg0: String): Month;

static of(arg0: number): Month;

static from(arg0: TemporalAccessor): Month;

getValue(): number;

getDisplayName(arg0: TextStyle, arg1: Locale): String;

isSupported(arg0: TemporalField): boolean;

range(arg0: TemporalField): ValueRange;

get(arg0: TemporalField): number;

getLong(arg0: TemporalField): number;

plus(arg0: number): Month;

minus(arg0: number): Month;

length(arg0: boolean): number;

minLength(): number;

maxLength(): number;

firstDayOfYear(arg0: boolean): number;

firstMonthOfQuarter(): Month;

query<R extends Object>(arg0: TemporalQuery<R>): R;

adjustInto(arg0: Temporal): Temporal;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class MonthDay extends Object implements TemporalAccessor, TemporalAdjuster, Comparable<MonthDay>, Serializable {

static now(): MonthDay;

static now(arg0: ZoneId): MonthDay;

static now(arg0: Clock): MonthDay;

static of(arg0: Month, arg1: number): MonthDay;

static of(arg0: number, arg1: number): MonthDay;

static from(arg0: TemporalAccessor): MonthDay;

static parse(arg0: CharSequence): MonthDay;

static parse(arg0: CharSequence, arg1: DateTimeFormatter): MonthDay;

isSupported(arg0: TemporalField): boolean;

range(arg0: TemporalField): ValueRange;

get(arg0: TemporalField): number;

getLong(arg0: TemporalField): number;

getMonthValue(): number;

getMonth(): Month;

getDayOfMonth(): number;

isValidYear(arg0: number): boolean;

withMonth(arg0: number): MonthDay;

with(arg0: Month): MonthDay;

withDayOfMonth(arg0: number): MonthDay;

query<R extends Object>(arg0: TemporalQuery<R>): R;

adjustInto(arg0: Temporal): Temporal;

format(arg0: DateTimeFormatter): String;

atYear(arg0: number): LocalDate;

compareTo(arg0: MonthDay): number;

isAfter(arg0: MonthDay): boolean;

isBefore(arg0: MonthDay): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class OffsetDateTime extends Object implements Temporal, TemporalAdjuster, Comparable<OffsetDateTime>, Serializable {
static MIN:OffsetDateTime
static MAX:OffsetDateTime

static timeLineOrder(): Comparator<OffsetDateTime>;

static now(): OffsetDateTime;

static now(arg0: ZoneId): OffsetDateTime;

static now(arg0: Clock): OffsetDateTime;

static of(arg0: LocalDate, arg1: LocalTime, arg2: ZoneOffset): OffsetDateTime;

static of(arg0: LocalDateTime, arg1: ZoneOffset): OffsetDateTime;

static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: ZoneOffset): OffsetDateTime;

static ofInstant(arg0: Instant, arg1: ZoneId): OffsetDateTime;

static from(arg0: TemporalAccessor): OffsetDateTime;

static parse(arg0: CharSequence): OffsetDateTime;

static parse(arg0: CharSequence, arg1: DateTimeFormatter): OffsetDateTime;

isSupported(arg0: TemporalField): boolean;

isSupported(arg0: TemporalUnit): boolean;

range(arg0: TemporalField): ValueRange;

get(arg0: TemporalField): number;

getLong(arg0: TemporalField): number;

getOffset(): ZoneOffset;

withOffsetSameLocal(arg0: ZoneOffset): OffsetDateTime;

withOffsetSameInstant(arg0: ZoneOffset): OffsetDateTime;

toLocalDateTime(): LocalDateTime;

toLocalDate(): LocalDate;

getYear(): number;

getMonthValue(): number;

getMonth(): Month;

getDayOfMonth(): number;

getDayOfYear(): number;

getDayOfWeek(): DayOfWeek;

toLocalTime(): LocalTime;

getHour(): number;

getMinute(): number;

getSecond(): number;

getNano(): number;

with(arg0: TemporalAdjuster): OffsetDateTime;

with(arg0: TemporalField, arg1: number): OffsetDateTime;

withYear(arg0: number): OffsetDateTime;

withMonth(arg0: number): OffsetDateTime;

withDayOfMonth(arg0: number): OffsetDateTime;

withDayOfYear(arg0: number): OffsetDateTime;

withHour(arg0: number): OffsetDateTime;

withMinute(arg0: number): OffsetDateTime;

withSecond(arg0: number): OffsetDateTime;

withNano(arg0: number): OffsetDateTime;

truncatedTo(arg0: TemporalUnit): OffsetDateTime;

plus(arg0: TemporalAmount): OffsetDateTime;

plus(arg0: number, arg1: TemporalUnit): OffsetDateTime;

plusYears(arg0: number): OffsetDateTime;

plusMonths(arg0: number): OffsetDateTime;

plusWeeks(arg0: number): OffsetDateTime;

plusDays(arg0: number): OffsetDateTime;

plusHours(arg0: number): OffsetDateTime;

plusMinutes(arg0: number): OffsetDateTime;

plusSeconds(arg0: number): OffsetDateTime;

plusNanos(arg0: number): OffsetDateTime;

minus(arg0: TemporalAmount): OffsetDateTime;

minus(arg0: number, arg1: TemporalUnit): OffsetDateTime;

minusYears(arg0: number): OffsetDateTime;

minusMonths(arg0: number): OffsetDateTime;

minusWeeks(arg0: number): OffsetDateTime;

minusDays(arg0: number): OffsetDateTime;

minusHours(arg0: number): OffsetDateTime;

minusMinutes(arg0: number): OffsetDateTime;

minusSeconds(arg0: number): OffsetDateTime;

minusNanos(arg0: number): OffsetDateTime;

query<R extends Object>(arg0: TemporalQuery<R>): R;

adjustInto(arg0: Temporal): Temporal;

until(arg0: Temporal, arg1: TemporalUnit): number;

format(arg0: DateTimeFormatter): String;

atZoneSameInstant(arg0: ZoneId): ZonedDateTime;

atZoneSimilarLocal(arg0: ZoneId): ZonedDateTime;

toOffsetTime(): OffsetTime;

toZonedDateTime(): ZonedDateTime;

toInstant(): Instant;

toEpochSecond(): number;

compareTo(arg0: OffsetDateTime): number;

isAfter(arg0: OffsetDateTime): boolean;

isBefore(arg0: OffsetDateTime): boolean;

isEqual(arg0: OffsetDateTime): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class OffsetTime extends Object implements Temporal, TemporalAdjuster, Comparable<OffsetTime>, Serializable {
static MIN:OffsetTime
static MAX:OffsetTime

static now(): OffsetTime;

static now(arg0: ZoneId): OffsetTime;

static now(arg0: Clock): OffsetTime;

static of(arg0: LocalTime, arg1: ZoneOffset): OffsetTime;

static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ZoneOffset): OffsetTime;

static ofInstant(arg0: Instant, arg1: ZoneId): OffsetTime;

static from(arg0: TemporalAccessor): OffsetTime;

static parse(arg0: CharSequence): OffsetTime;

static parse(arg0: CharSequence, arg1: DateTimeFormatter): OffsetTime;

isSupported(arg0: TemporalField): boolean;

isSupported(arg0: TemporalUnit): boolean;

range(arg0: TemporalField): ValueRange;

get(arg0: TemporalField): number;

getLong(arg0: TemporalField): number;

getOffset(): ZoneOffset;

withOffsetSameLocal(arg0: ZoneOffset): OffsetTime;

withOffsetSameInstant(arg0: ZoneOffset): OffsetTime;

toLocalTime(): LocalTime;

getHour(): number;

getMinute(): number;

getSecond(): number;

getNano(): number;

with(arg0: TemporalAdjuster): OffsetTime;

with(arg0: TemporalField, arg1: number): OffsetTime;

withHour(arg0: number): OffsetTime;

withMinute(arg0: number): OffsetTime;

withSecond(arg0: number): OffsetTime;

withNano(arg0: number): OffsetTime;

truncatedTo(arg0: TemporalUnit): OffsetTime;

plus(arg0: TemporalAmount): OffsetTime;

plus(arg0: number, arg1: TemporalUnit): OffsetTime;

plusHours(arg0: number): OffsetTime;

plusMinutes(arg0: number): OffsetTime;

plusSeconds(arg0: number): OffsetTime;

plusNanos(arg0: number): OffsetTime;

minus(arg0: TemporalAmount): OffsetTime;

minus(arg0: number, arg1: TemporalUnit): OffsetTime;

minusHours(arg0: number): OffsetTime;

minusMinutes(arg0: number): OffsetTime;

minusSeconds(arg0: number): OffsetTime;

minusNanos(arg0: number): OffsetTime;

query<R extends Object>(arg0: TemporalQuery<R>): R;

adjustInto(arg0: Temporal): Temporal;

until(arg0: Temporal, arg1: TemporalUnit): number;

format(arg0: DateTimeFormatter): String;

atDate(arg0: LocalDate): OffsetDateTime;

toEpochSecond(arg0: LocalDate): number;

compareTo(arg0: OffsetTime): number;

isAfter(arg0: OffsetTime): boolean;

isBefore(arg0: OffsetTime): boolean;

isEqual(arg0: OffsetTime): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class Period implements ChronoPeriod, Serializable {
static ZERO:Period

static ofYears(arg0: number): Period;

static ofMonths(arg0: number): Period;

static ofWeeks(arg0: number): Period;

static ofDays(arg0: number): Period;

static of(arg0: number, arg1: number, arg2: number): Period;

static from(arg0: TemporalAmount): Period;

static parse(arg0: CharSequence): Period;

static between(arg0: LocalDate, arg1: LocalDate): Period;

get(arg0: TemporalUnit): number;

getUnits(): List<TemporalUnit>;

getChronology(): IsoChronology;

isZero(): boolean;

isNegative(): boolean;

getYears(): number;

getMonths(): number;

getDays(): number;

withYears(arg0: number): Period;

withMonths(arg0: number): Period;

withDays(arg0: number): Period;

plus(arg0: TemporalAmount): Period;

plusYears(arg0: number): Period;

plusMonths(arg0: number): Period;

plusDays(arg0: number): Period;

minus(arg0: TemporalAmount): Period;

minusYears(arg0: number): Period;

minusMonths(arg0: number): Period;

minusDays(arg0: number): Period;

multipliedBy(arg0: number): Period;

negated(): Period;

normalized(): Period;

toTotalMonths(): number;

addTo(arg0: Temporal): Temporal;

subtractFrom(arg0: Temporal): Temporal;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class Year extends Object implements Temporal, TemporalAdjuster, Comparable<Year>, Serializable {
static MIN_VALUE:number
static MAX_VALUE:number

static now(): Year;

static now(arg0: ZoneId): Year;

static now(arg0: Clock): Year;

static of(arg0: number): Year;

static from(arg0: TemporalAccessor): Year;

static parse(arg0: CharSequence): Year;

static parse(arg0: CharSequence, arg1: DateTimeFormatter): Year;

static isLeap(arg0: number): boolean;

getValue(): number;

isSupported(arg0: TemporalField): boolean;

isSupported(arg0: TemporalUnit): boolean;

range(arg0: TemporalField): ValueRange;

get(arg0: TemporalField): number;

getLong(arg0: TemporalField): number;

isLeap(): boolean;

isValidMonthDay(arg0: MonthDay): boolean;

length(): number;

with(arg0: TemporalAdjuster): Year;

with(arg0: TemporalField, arg1: number): Year;

plus(arg0: TemporalAmount): Year;

plus(arg0: number, arg1: TemporalUnit): Year;

plusYears(arg0: number): Year;

minus(arg0: TemporalAmount): Year;

minus(arg0: number, arg1: TemporalUnit): Year;

minusYears(arg0: number): Year;

query<R extends Object>(arg0: TemporalQuery<R>): R;

adjustInto(arg0: Temporal): Temporal;

until(arg0: Temporal, arg1: TemporalUnit): number;

format(arg0: DateTimeFormatter): String;

atDay(arg0: number): LocalDate;

atMonth(arg0: Month): YearMonth;

atMonth(arg0: number): YearMonth;

atMonthDay(arg0: MonthDay): LocalDate;

compareTo(arg0: Year): number;

isAfter(arg0: Year): boolean;

isBefore(arg0: Year): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class YearMonth extends Object implements Temporal, TemporalAdjuster, Comparable<YearMonth>, Serializable {

static now(): YearMonth;

static now(arg0: ZoneId): YearMonth;

static now(arg0: Clock): YearMonth;

static of(arg0: number, arg1: Month): YearMonth;

static of(arg0: number, arg1: number): YearMonth;

static from(arg0: TemporalAccessor): YearMonth;

static parse(arg0: CharSequence): YearMonth;

static parse(arg0: CharSequence, arg1: DateTimeFormatter): YearMonth;

isSupported(arg0: TemporalField): boolean;

isSupported(arg0: TemporalUnit): boolean;

range(arg0: TemporalField): ValueRange;

get(arg0: TemporalField): number;

getLong(arg0: TemporalField): number;

getYear(): number;

getMonthValue(): number;

getMonth(): Month;

isLeapYear(): boolean;

isValidDay(arg0: number): boolean;

lengthOfMonth(): number;

lengthOfYear(): number;

with(arg0: TemporalAdjuster): YearMonth;

with(arg0: TemporalField, arg1: number): YearMonth;

withYear(arg0: number): YearMonth;

withMonth(arg0: number): YearMonth;

plus(arg0: TemporalAmount): YearMonth;

plus(arg0: number, arg1: TemporalUnit): YearMonth;

plusYears(arg0: number): YearMonth;

plusMonths(arg0: number): YearMonth;

minus(arg0: TemporalAmount): YearMonth;

minus(arg0: number, arg1: TemporalUnit): YearMonth;

minusYears(arg0: number): YearMonth;

minusMonths(arg0: number): YearMonth;

query<R extends Object>(arg0: TemporalQuery<R>): R;

adjustInto(arg0: Temporal): Temporal;

until(arg0: Temporal, arg1: TemporalUnit): number;

format(arg0: DateTimeFormatter): String;

atDay(arg0: number): LocalDate;

atEndOfMonth(): LocalDate;

compareTo(arg0: YearMonth): number;

isAfter(arg0: YearMonth): boolean;

isBefore(arg0: YearMonth): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export abstract class ZoneId implements Serializable {
static SHORT_IDS:Map<String, String>

static systemDefault(): ZoneId;

static getAvailableZoneIds(): Set<String>;

static of(arg0: String, arg1: Map<String, String>): ZoneId;

static of(arg0: String): ZoneId;

static ofOffset(arg0: String, arg1: ZoneOffset): ZoneId;

static from(arg0: TemporalAccessor): ZoneId;

abstract getId(): String;

getDisplayName(arg0: TextStyle, arg1: Locale): String;

abstract getRules(): ZoneRules;

normalized(): ZoneId;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class ZoneOffset extends ZoneId implements TemporalAccessor, TemporalAdjuster, Comparable<ZoneOffset>, Serializable {
static UTC:ZoneOffset
static MIN:ZoneOffset
static MAX:ZoneOffset

static of(arg0: String): ZoneOffset;

static ofHours(arg0: number): ZoneOffset;

static ofHoursMinutes(arg0: number, arg1: number): ZoneOffset;

static ofHoursMinutesSeconds(arg0: number, arg1: number, arg2: number): ZoneOffset;

static from(arg0: TemporalAccessor): ZoneOffset;

static ofTotalSeconds(arg0: number): ZoneOffset;

getTotalSeconds(): number;

getId(): String;

getRules(): ZoneRules;

isSupported(arg0: TemporalField): boolean;

range(arg0: TemporalField): ValueRange;

get(arg0: TemporalField): number;

getLong(arg0: TemporalField): number;

query<R extends Object>(arg0: TemporalQuery<R>): R;

adjustInto(arg0: Temporal): Temporal;

compareTo(arg0: ZoneOffset): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export interface ZonedDateTime extends Temporal, ChronoZonedDateTime<LocalDate>, Serializable { }
export class ZonedDateTime extends Object implements Temporal, ChronoZonedDateTime<LocalDate>, Serializable {

static now(): ZonedDateTime;

static now(arg0: ZoneId): ZonedDateTime;

static now(arg0: Clock): ZonedDateTime;

static of(arg0: LocalDate, arg1: LocalTime, arg2: ZoneId): ZonedDateTime;

static of(arg0: LocalDateTime, arg1: ZoneId): ZonedDateTime;

static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: ZoneId): ZonedDateTime;

static ofLocal(arg0: LocalDateTime, arg1: ZoneId, arg2: ZoneOffset): ZonedDateTime;

static ofInstant(arg0: Instant, arg1: ZoneId): ZonedDateTime;

static ofInstant(arg0: LocalDateTime, arg1: ZoneOffset, arg2: ZoneId): ZonedDateTime;

static ofStrict(arg0: LocalDateTime, arg1: ZoneOffset, arg2: ZoneId): ZonedDateTime;

static from(arg0: TemporalAccessor): ZonedDateTime;

static parse(arg0: CharSequence): ZonedDateTime;

static parse(arg0: CharSequence, arg1: DateTimeFormatter): ZonedDateTime;

isSupported(arg0: TemporalField): boolean;

isSupported(arg0: TemporalUnit): boolean;

range(arg0: TemporalField): ValueRange;

get(arg0: TemporalField): number;

getLong(arg0: TemporalField): number;

getOffset(): ZoneOffset;

withEarlierOffsetAtOverlap(): ZonedDateTime;

withLaterOffsetAtOverlap(): ZonedDateTime;

getZone(): ZoneId;

withZoneSameLocal(arg0: ZoneId): ZonedDateTime;

withZoneSameInstant(arg0: ZoneId): ZonedDateTime;

withFixedOffsetZone(): ZonedDateTime;

toLocalDateTime(): LocalDateTime;

toLocalDate(): LocalDate;

getYear(): number;

getMonthValue(): number;

getMonth(): Month;

getDayOfMonth(): number;

getDayOfYear(): number;

getDayOfWeek(): DayOfWeek;

toLocalTime(): LocalTime;

getHour(): number;

getMinute(): number;

getSecond(): number;

getNano(): number;

with(arg0: TemporalAdjuster): ZonedDateTime;

with(arg0: TemporalField, arg1: number): ZonedDateTime;

withYear(arg0: number): ZonedDateTime;

withMonth(arg0: number): ZonedDateTime;

withDayOfMonth(arg0: number): ZonedDateTime;

withDayOfYear(arg0: number): ZonedDateTime;

withHour(arg0: number): ZonedDateTime;

withMinute(arg0: number): ZonedDateTime;

withSecond(arg0: number): ZonedDateTime;

withNano(arg0: number): ZonedDateTime;

truncatedTo(arg0: TemporalUnit): ZonedDateTime;

plus(arg0: TemporalAmount): ZonedDateTime;

plus(arg0: number, arg1: TemporalUnit): ZonedDateTime;

plusYears(arg0: number): ZonedDateTime;

plusMonths(arg0: number): ZonedDateTime;

plusWeeks(arg0: number): ZonedDateTime;

plusDays(arg0: number): ZonedDateTime;

plusHours(arg0: number): ZonedDateTime;

plusMinutes(arg0: number): ZonedDateTime;

plusSeconds(arg0: number): ZonedDateTime;

plusNanos(arg0: number): ZonedDateTime;

minus(arg0: TemporalAmount): ZonedDateTime;

minus(arg0: number, arg1: TemporalUnit): ZonedDateTime;

minusYears(arg0: number): ZonedDateTime;

minusMonths(arg0: number): ZonedDateTime;

minusWeeks(arg0: number): ZonedDateTime;

minusDays(arg0: number): ZonedDateTime;

minusHours(arg0: number): ZonedDateTime;

minusMinutes(arg0: number): ZonedDateTime;

minusSeconds(arg0: number): ZonedDateTime;

minusNanos(arg0: number): ZonedDateTime;

query<R extends Object>(arg0: TemporalQuery<R>): R;

until(arg0: Temporal, arg1: TemporalUnit): number;

format(arg0: DateTimeFormatter): String;

toOffsetDateTime(): OffsetDateTime;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

}
