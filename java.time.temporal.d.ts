/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.time.d.ts" />
/// <reference path="java.time.format.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.time.chrono.d.ts" />
/// <reference path="java.util.function.d.ts" />
declare module '@afterburnerhq/java.time.temporal' { 
import { Enum, Long, Throwable, Class, String } from '@afterburnerhq/java.lang'
import { Locale, Map, List } from '@afterburnerhq/java.util'
import { DayOfWeek, DateTimeException, ZoneId, LocalTime, Duration, LocalDate, ZoneOffset } from '@afterburnerhq/java.time'
import { ResolverStyle } from '@afterburnerhq/java.time.format'
import { Serializable } from '@afterburnerhq/java.io'
import { Chronology } from '@afterburnerhq/java.time.chrono'
import { UnaryOperator } from '@afterburnerhq/java.util.function'
export interface ChronoField extends TemporalField { }
export class ChronoField extends Enum<ChronoField> implements TemporalField {
static NANO_OF_SECOND:ChronoField
static NANO_OF_DAY:ChronoField
static MICRO_OF_SECOND:ChronoField
static MICRO_OF_DAY:ChronoField
static MILLI_OF_SECOND:ChronoField
static MILLI_OF_DAY:ChronoField
static SECOND_OF_MINUTE:ChronoField
static SECOND_OF_DAY:ChronoField
static MINUTE_OF_HOUR:ChronoField
static MINUTE_OF_DAY:ChronoField
static HOUR_OF_AMPM:ChronoField
static CLOCK_HOUR_OF_AMPM:ChronoField
static HOUR_OF_DAY:ChronoField
static CLOCK_HOUR_OF_DAY:ChronoField
static AMPM_OF_DAY:ChronoField
static DAY_OF_WEEK:ChronoField
static ALIGNED_DAY_OF_WEEK_IN_MONTH:ChronoField
static ALIGNED_DAY_OF_WEEK_IN_YEAR:ChronoField
static DAY_OF_MONTH:ChronoField
static DAY_OF_YEAR:ChronoField
static EPOCH_DAY:ChronoField
static ALIGNED_WEEK_OF_MONTH:ChronoField
static ALIGNED_WEEK_OF_YEAR:ChronoField
static MONTH_OF_YEAR:ChronoField
static PROLEPTIC_MONTH:ChronoField
static YEAR_OF_ERA:ChronoField
static YEAR:ChronoField
static ERA:ChronoField
static INSTANT_SECONDS:ChronoField
static OFFSET_SECONDS:ChronoField

static values(): ChronoField[];

static valueOf(arg0: String): ChronoField;

getDisplayName(arg0: Locale): String;

getBaseUnit(): TemporalUnit;

getRangeUnit(): TemporalUnit;

range(): ValueRange;

isDateBased(): boolean;

isTimeBased(): boolean;

checkValidValue(arg0: number): number;

checkValidIntValue(arg0: number): number;

isSupportedBy(arg0: TemporalAccessor): boolean;

rangeRefinedBy(arg0: TemporalAccessor): ValueRange;

getFrom(arg0: TemporalAccessor): number;

adjustInto<R extends Temporal>(arg0: R, arg1: number): R;
toString(): string;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class ChronoUnit extends Enum<ChronoUnit> implements TemporalUnit {
static NANOS:ChronoUnit
static MICROS:ChronoUnit
static MILLIS:ChronoUnit
static SECONDS:ChronoUnit
static MINUTES:ChronoUnit
static HOURS:ChronoUnit
static HALF_DAYS:ChronoUnit
static DAYS:ChronoUnit
static WEEKS:ChronoUnit
static MONTHS:ChronoUnit
static YEARS:ChronoUnit
static DECADES:ChronoUnit
static CENTURIES:ChronoUnit
static MILLENNIA:ChronoUnit
static ERAS:ChronoUnit
static FOREVER:ChronoUnit

static values(): ChronoUnit[];

static valueOf(arg0: String): ChronoUnit;

getDuration(): Duration;

isDurationEstimated(): boolean;

isDateBased(): boolean;

isTimeBased(): boolean;

isSupportedBy(arg0: Temporal): boolean;

addTo<R extends Temporal>(arg0: R, arg1: number): R;

between(arg0: Temporal, arg1: Temporal): number;
toString(): string;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class IsoFields {
static DAY_OF_QUARTER:TemporalField
static QUARTER_OF_YEAR:TemporalField
static WEEK_OF_WEEK_BASED_YEAR:TemporalField
static WEEK_BASED_YEAR:TemporalField
static WEEK_BASED_YEARS:TemporalUnit
static QUARTER_YEARS:TemporalUnit
 }

export class JulianFields {
static JULIAN_DAY:TemporalField
static MODIFIED_JULIAN_DAY:TemporalField
static RATA_DIE:TemporalField
 }

export interface Temporal extends TemporalAccessor {

isSupported(arg0: TemporalUnit): boolean;

/* default */ with(arg0: TemporalAdjuster): Temporal;

with(arg0: TemporalField, arg1: number): Temporal;

/* default */ plus(arg0: TemporalAmount): Temporal;

plus(arg0: number, arg1: TemporalUnit): Temporal;

/* default */ minus(arg0: TemporalAmount): Temporal;

/* default */ minus(arg0: number, arg1: TemporalUnit): Temporal;

until(arg0: Temporal, arg1: TemporalUnit): number;
 }

export interface TemporalAccessor {

isSupported(arg0: TemporalField): boolean;

/* default */ range(arg0: TemporalField): ValueRange;

/* default */ get(arg0: TemporalField): number;

getLong(arg0: TemporalField): number;

/* default */ query<R extends Object>(arg0: TemporalQuery<R>): R;
 }

export interface TemporalAdjuster {

adjustInto(arg0: Temporal): Temporal;
 }

export class TemporalAdjusters {

static ofDateAdjuster(arg0: UnaryOperator<LocalDate>): TemporalAdjuster;

static firstDayOfMonth(): TemporalAdjuster;

static lastDayOfMonth(): TemporalAdjuster;

static firstDayOfNextMonth(): TemporalAdjuster;

static firstDayOfYear(): TemporalAdjuster;

static lastDayOfYear(): TemporalAdjuster;

static firstDayOfNextYear(): TemporalAdjuster;

static firstInMonth(arg0: DayOfWeek): TemporalAdjuster;

static lastInMonth(arg0: DayOfWeek): TemporalAdjuster;

static dayOfWeekInMonth(arg0: number, arg1: DayOfWeek): TemporalAdjuster;

static next(arg0: DayOfWeek): TemporalAdjuster;

static nextOrSame(arg0: DayOfWeek): TemporalAdjuster;

static previous(arg0: DayOfWeek): TemporalAdjuster;

static previousOrSame(arg0: DayOfWeek): TemporalAdjuster;
 }

export interface TemporalAmount {

get(arg0: TemporalUnit): number;

getUnits(): List<TemporalUnit>;

addTo(arg0: Temporal): Temporal;

subtractFrom(arg0: Temporal): Temporal;
 }

export interface TemporalField {

/* default */ getDisplayName(arg0: Locale): String;

getBaseUnit(): TemporalUnit;

getRangeUnit(): TemporalUnit;

range(): ValueRange;

isDateBased(): boolean;

isTimeBased(): boolean;

isSupportedBy(arg0: TemporalAccessor): boolean;

rangeRefinedBy(arg0: TemporalAccessor): ValueRange;

getFrom(arg0: TemporalAccessor): number;

adjustInto<R extends Temporal>(arg0: R, arg1: number): R;

/* default */ resolve(arg0: Map<TemporalField, Number>, arg1: TemporalAccessor, arg2: ResolverStyle): TemporalAccessor;
toString(): string;
 }

export class TemporalQueries {

static zoneId(): TemporalQuery<ZoneId>;

static chronology(): TemporalQuery<Chronology>;

static precision(): TemporalQuery<TemporalUnit>;

static zone(): TemporalQuery<ZoneId>;

static offset(): TemporalQuery<ZoneOffset>;

static localDate(): TemporalQuery<LocalDate>;

static localTime(): TemporalQuery<LocalTime>;
 }

export interface TemporalQuery<R extends Object> extends Object {

queryFrom(arg0: TemporalAccessor): R;
 }

export interface TemporalUnit {

getDuration(): Duration;

isDurationEstimated(): boolean;

isDateBased(): boolean;

isTimeBased(): boolean;

/* default */ isSupportedBy(arg0: Temporal): boolean;

addTo<R extends Temporal>(arg0: R, arg1: number): R;

between(arg0: Temporal, arg1: Temporal): number;
toString(): string;
 }

export class UnsupportedTemporalTypeException extends DateTimeException {
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
 }

export class ValueRange implements Serializable {

static of(arg0: number, arg1: number): ValueRange;

static of(arg0: number, arg1: number, arg2: number): ValueRange;

static of(arg0: number, arg1: number, arg2: number, arg3: number): ValueRange;

isFixed(): boolean;

getMinimum(): number;

getLargestMinimum(): number;

getSmallestMaximum(): number;

getMaximum(): number;

isIntValue(): boolean;

isValidValue(arg0: number): boolean;

isValidIntValue(arg0: number): boolean;

checkValidValue(arg0: number, arg1: TemporalField): number;

checkValidIntValue(arg0: number, arg1: TemporalField): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class WeekFields implements Serializable {
static ISO:WeekFields
static SUNDAY_START:WeekFields
static WEEK_BASED_YEARS:TemporalUnit

static of(arg0: Locale): WeekFields;

static of(arg0: DayOfWeek, arg1: number): WeekFields;

getFirstDayOfWeek(): DayOfWeek;

getMinimalDaysInFirstWeek(): number;

dayOfWeek(): TemporalField;

weekOfMonth(): TemporalField;

weekOfYear(): TemporalField;

weekOfWeekBasedYear(): TemporalField;

weekBasedYear(): TemporalField;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

}
