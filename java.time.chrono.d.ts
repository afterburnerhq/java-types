/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.time.format.d.ts" />
/// <reference path="java.time.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.time.temporal.d.ts" />
declare module '@afterburnerhq/java.time.chrono' { 
import { Locale, List, Set, Map, Comparator } from '@afterburnerhq/java.util'
import { Long, Enum, Comparable, Class, String } from '@afterburnerhq/java.lang'
import { ResolverStyle, DateTimeFormatter, TextStyle } from '@afterburnerhq/java.time.format'
import { LocalDateTime, LocalTime, ZoneId, ZonedDateTime, Instant, Period, Clock, LocalDate, ZoneOffset } from '@afterburnerhq/java.time'
import { Serializable } from '@afterburnerhq/java.io'
import { ValueRange, TemporalField, TemporalAccessor, Temporal, TemporalUnit, TemporalAmount, ChronoField, TemporalAdjuster, TemporalQuery } from '@afterburnerhq/java.time.temporal'
export interface AbstractChronology extends Chronology { }
export abstract class AbstractChronology implements Chronology {

resolveDate(arg0: Map<TemporalField, Number>, arg1: ResolverStyle): ChronoLocalDate;

compareTo(arg0: Chronology): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export namespace ChronoLocalDate { 
function 
/* default */ timeLineOrder(): Comparator<ChronoLocalDate>;
function 
/* default */ from(arg0: TemporalAccessor): ChronoLocalDate;
}

export interface ChronoLocalDate extends Temporal, TemporalAdjuster, Comparable<ChronoLocalDate>, Object {

getChronology(): Chronology;

/* default */ getEra(): Era;

/* default */ isLeapYear(): boolean;

lengthOfMonth(): number;

/* default */ lengthOfYear(): number;

/* default */ isSupported(arg0: TemporalField): boolean;

/* default */ isSupported(arg0: TemporalUnit): boolean;

/* default */ with(arg0: TemporalAdjuster): ChronoLocalDate;

/* default */ with(arg0: TemporalField, arg1: number): ChronoLocalDate;

/* default */ plus(arg0: TemporalAmount): ChronoLocalDate;

/* default */ plus(arg0: number, arg1: TemporalUnit): ChronoLocalDate;

/* default */ minus(arg0: TemporalAmount): ChronoLocalDate;

/* default */ minus(arg0: number, arg1: TemporalUnit): ChronoLocalDate;

/* default */ query<R extends Object>(arg0: TemporalQuery<R>): R;

/* default */ adjustInto(arg0: Temporal): Temporal;

until(arg0: Temporal, arg1: TemporalUnit): number;

until(arg0: ChronoLocalDate): ChronoPeriod;

/* default */ format(arg0: DateTimeFormatter): String;

/* default */ atTime(arg0: LocalTime): ChronoLocalDateTime<any>;

/* default */ toEpochDay(): number;

/* default */ compareTo(arg0: ChronoLocalDate): number;

/* default */ isAfter(arg0: ChronoLocalDate): boolean;

/* default */ isBefore(arg0: ChronoLocalDate): boolean;

/* default */ isEqual(arg0: ChronoLocalDate): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export namespace ChronoLocalDateTime { 
function 
/* default */ timeLineOrder(): Comparator<ChronoLocalDateTime<any>>;
function 
/* default */ from(arg0: TemporalAccessor): ChronoLocalDateTime<any>;
}

export interface ChronoLocalDateTime<D extends ChronoLocalDate> extends Temporal, TemporalAdjuster, Comparable<ChronoLocalDateTime<any>>, Object {

/* default */ getChronology(): Chronology;

toLocalDate(): D;

toLocalTime(): LocalTime;

isSupported(arg0: TemporalField): boolean;

/* default */ isSupported(arg0: TemporalUnit): boolean;

/* default */ with(arg0: TemporalAdjuster): ChronoLocalDateTime<D>;

with(arg0: TemporalField, arg1: number): ChronoLocalDateTime<D>;

/* default */ plus(arg0: TemporalAmount): ChronoLocalDateTime<D>;

plus(arg0: number, arg1: TemporalUnit): ChronoLocalDateTime<D>;

/* default */ minus(arg0: TemporalAmount): ChronoLocalDateTime<D>;

/* default */ minus(arg0: number, arg1: TemporalUnit): ChronoLocalDateTime<D>;

/* default */ query<R extends Object>(arg0: TemporalQuery<R>): R;

/* default */ adjustInto(arg0: Temporal): Temporal;

/* default */ format(arg0: DateTimeFormatter): String;

atZone(arg0: ZoneId): ChronoZonedDateTime<D>;

/* default */ toInstant(arg0: ZoneOffset): Instant;

/* default */ toEpochSecond(arg0: ZoneOffset): number;

/* default */ compareTo(arg0: ChronoLocalDateTime<any>): number;

/* default */ isAfter(arg0: ChronoLocalDateTime<any>): boolean;

/* default */ isBefore(arg0: ChronoLocalDateTime<any>): boolean;

/* default */ isEqual(arg0: ChronoLocalDateTime<any>): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export namespace ChronoPeriod { 
function 
/* default */ between(arg0: ChronoLocalDate, arg1: ChronoLocalDate): ChronoPeriod;
}

export interface ChronoPeriod extends TemporalAmount {

get(arg0: TemporalUnit): number;

getUnits(): List<TemporalUnit>;

getChronology(): Chronology;

/* default */ isZero(): boolean;

/* default */ isNegative(): boolean;

plus(arg0: TemporalAmount): ChronoPeriod;

minus(arg0: TemporalAmount): ChronoPeriod;

multipliedBy(arg0: number): ChronoPeriod;

/* default */ negated(): ChronoPeriod;

normalized(): ChronoPeriod;

addTo(arg0: Temporal): Temporal;

subtractFrom(arg0: Temporal): Temporal;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export namespace ChronoZonedDateTime { 
function 
/* default */ timeLineOrder(): Comparator<ChronoZonedDateTime<any>>;
function 
/* default */ from(arg0: TemporalAccessor): ChronoZonedDateTime<any>;
}

export interface ChronoZonedDateTime<D extends ChronoLocalDate> extends Temporal, Comparable<ChronoZonedDateTime<any>>, Object {

/* default */ range(arg0: TemporalField): ValueRange;

/* default */ get(arg0: TemporalField): number;

/* default */ getLong(arg0: TemporalField): number;

/* default */ toLocalDate(): D;

/* default */ toLocalTime(): LocalTime;

toLocalDateTime(): ChronoLocalDateTime<D>;

/* default */ getChronology(): Chronology;

getOffset(): ZoneOffset;

getZone(): ZoneId;

withEarlierOffsetAtOverlap(): ChronoZonedDateTime<D>;

withLaterOffsetAtOverlap(): ChronoZonedDateTime<D>;

withZoneSameLocal(arg0: ZoneId): ChronoZonedDateTime<D>;

withZoneSameInstant(arg0: ZoneId): ChronoZonedDateTime<D>;

isSupported(arg0: TemporalField): boolean;

/* default */ isSupported(arg0: TemporalUnit): boolean;

/* default */ with(arg0: TemporalAdjuster): ChronoZonedDateTime<D>;

with(arg0: TemporalField, arg1: number): ChronoZonedDateTime<D>;

/* default */ plus(arg0: TemporalAmount): ChronoZonedDateTime<D>;

plus(arg0: number, arg1: TemporalUnit): ChronoZonedDateTime<D>;

/* default */ minus(arg0: TemporalAmount): ChronoZonedDateTime<D>;

/* default */ minus(arg0: number, arg1: TemporalUnit): ChronoZonedDateTime<D>;

/* default */ query<R extends Object>(arg0: TemporalQuery<R>): R;

/* default */ format(arg0: DateTimeFormatter): String;

/* default */ toInstant(): Instant;

/* default */ toEpochSecond(): number;

/* default */ compareTo(arg0: ChronoZonedDateTime<any>): number;

/* default */ isBefore(arg0: ChronoZonedDateTime<any>): boolean;

/* default */ isAfter(arg0: ChronoZonedDateTime<any>): boolean;

/* default */ isEqual(arg0: ChronoZonedDateTime<any>): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export namespace Chronology { 
function 
/* default */ from(arg0: TemporalAccessor): Chronology;
function 
/* default */ ofLocale(arg0: Locale): Chronology;
function 
/* default */ of(arg0: String): Chronology;
function 
/* default */ getAvailableChronologies(): Set<Chronology>;
}

export interface Chronology extends Comparable<Chronology>, Object {

getId(): String;

getCalendarType(): String;

/* default */ date(arg0: Era, arg1: number, arg2: number, arg3: number): ChronoLocalDate;

date(arg0: number, arg1: number, arg2: number): ChronoLocalDate;

/* default */ dateYearDay(arg0: Era, arg1: number, arg2: number): ChronoLocalDate;

dateYearDay(arg0: number, arg1: number): ChronoLocalDate;

dateEpochDay(arg0: number): ChronoLocalDate;

/* default */ dateNow(): ChronoLocalDate;

/* default */ dateNow(arg0: ZoneId): ChronoLocalDate;

/* default */ dateNow(arg0: Clock): ChronoLocalDate;

date(arg0: TemporalAccessor): ChronoLocalDate;

/* default */ localDateTime(arg0: TemporalAccessor): ChronoLocalDateTime<ChronoLocalDate>;

/* default */ zonedDateTime(arg0: TemporalAccessor): ChronoZonedDateTime<ChronoLocalDate>;

/* default */ zonedDateTime(arg0: Instant, arg1: ZoneId): ChronoZonedDateTime<ChronoLocalDate>;

isLeapYear(arg0: number): boolean;

prolepticYear(arg0: Era, arg1: number): number;

eraOf(arg0: number): Era;

eras(): List<Era>;

range(arg0: ChronoField): ValueRange;

/* default */ getDisplayName(arg0: TextStyle, arg1: Locale): String;

resolveDate(arg0: Map<TemporalField, Number>, arg1: ResolverStyle): ChronoLocalDate;

/* default */ period(arg0: number, arg1: number, arg2: number): ChronoPeriod;

/* default */ epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: ZoneOffset): number;

/* default */ epochSecond(arg0: Era, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: ZoneOffset): number;

compareTo(arg0: Chronology): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export interface Era extends TemporalAccessor, TemporalAdjuster {

getValue(): number;

/* default */ isSupported(arg0: TemporalField): boolean;

/* default */ range(arg0: TemporalField): ValueRange;

/* default */ get(arg0: TemporalField): number;

/* default */ getLong(arg0: TemporalField): number;

/* default */ query<R extends Object>(arg0: TemporalQuery<R>): R;

/* default */ adjustInto(arg0: Temporal): Temporal;

/* default */ getDisplayName(arg0: TextStyle, arg1: Locale): String;
 }

export interface HijrahChronology extends Serializable { }
export class HijrahChronology extends AbstractChronology implements Serializable {
static INSTANCE:HijrahChronology

getId(): String;

getCalendarType(): String;

date(arg0: Era, arg1: number, arg2: number, arg3: number): HijrahDate;

date(arg0: number, arg1: number, arg2: number): HijrahDate;

dateYearDay(arg0: Era, arg1: number, arg2: number): HijrahDate;

dateYearDay(arg0: number, arg1: number): HijrahDate;

dateEpochDay(arg0: number): HijrahDate;

dateNow(): HijrahDate;

dateNow(arg0: ZoneId): HijrahDate;

dateNow(arg0: Clock): HijrahDate;

date(arg0: TemporalAccessor): HijrahDate;

localDateTime(arg0: TemporalAccessor): ChronoLocalDateTime<HijrahDate>;

zonedDateTime(arg0: TemporalAccessor): ChronoZonedDateTime<HijrahDate>;

zonedDateTime(arg0: Instant, arg1: ZoneId): ChronoZonedDateTime<HijrahDate>;

isLeapYear(arg0: number): boolean;

prolepticYear(arg0: Era, arg1: number): number;

eraOf(arg0: number): HijrahEra;

eras(): List<Era>;

range(arg0: ChronoField): ValueRange;

resolveDate(arg0: Map<TemporalField, Number>, arg1: ResolverStyle): HijrahDate;
 }

export interface HijrahDate extends ChronoLocalDate, Serializable { }
export class HijrahDate extends ChronoLocalDateImpl<HijrahDate> implements ChronoLocalDate, Serializable {

static now(): HijrahDate;

static now(arg0: ZoneId): HijrahDate;

static now(arg0: Clock): HijrahDate;

static of(arg0: number, arg1: number, arg2: number): HijrahDate;

static from(arg0: TemporalAccessor): HijrahDate;

getChronology(): HijrahChronology;

getEra(): HijrahEra;

lengthOfMonth(): number;

lengthOfYear(): number;

range(arg0: TemporalField): ValueRange;

getLong(arg0: TemporalField): number;

with(arg0: TemporalField, arg1: number): HijrahDate;

with(arg0: TemporalAdjuster): HijrahDate;

withVariant(arg0: HijrahChronology): HijrahDate;

plus(arg0: TemporalAmount): HijrahDate;

minus(arg0: TemporalAmount): HijrahDate;

toEpochDay(): number;

isLeapYear(): boolean;

plus(arg0: number, arg1: TemporalUnit): HijrahDate;

minus(arg0: number, arg1: TemporalUnit): HijrahDate;

atTime(arg0: LocalTime): ChronoLocalDateTime<HijrahDate>;

until(arg0: ChronoLocalDate): ChronoPeriod;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export interface HijrahEra extends Era { }
export class HijrahEra extends Enum<HijrahEra> implements Era {
static AH:HijrahEra

static values(): HijrahEra[];

static valueOf(arg0: String): HijrahEra;

static of(arg0: number): HijrahEra;

getValue(): number;

range(arg0: TemporalField): ValueRange;

getDisplayName(arg0: TextStyle, arg1: Locale): String;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export interface IsoChronology extends Serializable { }
export class IsoChronology extends AbstractChronology implements Serializable {
static INSTANCE:IsoChronology

getId(): String;

getCalendarType(): String;

date(arg0: Era, arg1: number, arg2: number, arg3: number): LocalDate;

date(arg0: number, arg1: number, arg2: number): LocalDate;

dateYearDay(arg0: Era, arg1: number, arg2: number): LocalDate;

dateYearDay(arg0: number, arg1: number): LocalDate;

dateEpochDay(arg0: number): LocalDate;

date(arg0: TemporalAccessor): LocalDate;

epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: ZoneOffset): number;

localDateTime(arg0: TemporalAccessor): LocalDateTime;

zonedDateTime(arg0: TemporalAccessor): ZonedDateTime;

zonedDateTime(arg0: Instant, arg1: ZoneId): ZonedDateTime;

dateNow(): LocalDate;

dateNow(arg0: ZoneId): LocalDate;

dateNow(arg0: Clock): LocalDate;

isLeapYear(arg0: number): boolean;

prolepticYear(arg0: Era, arg1: number): number;

eraOf(arg0: number): IsoEra;

eras(): List<Era>;

resolveDate(arg0: Map<TemporalField, Number>, arg1: ResolverStyle): LocalDate;

range(arg0: ChronoField): ValueRange;

period(arg0: number, arg1: number, arg2: number): Period;
 }

export interface IsoEra extends Era { }
export class IsoEra extends Enum<IsoEra> implements Era {
static BCE:IsoEra
static CE:IsoEra

static values(): IsoEra[];

static valueOf(arg0: String): IsoEra;

static of(arg0: number): IsoEra;

getValue(): number;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export interface JapaneseChronology extends Serializable { }
export class JapaneseChronology extends AbstractChronology implements Serializable {
static INSTANCE:JapaneseChronology

getId(): String;

getCalendarType(): String;

date(arg0: Era, arg1: number, arg2: number, arg3: number): JapaneseDate;

date(arg0: number, arg1: number, arg2: number): JapaneseDate;

dateYearDay(arg0: Era, arg1: number, arg2: number): JapaneseDate;

dateYearDay(arg0: number, arg1: number): JapaneseDate;

dateEpochDay(arg0: number): JapaneseDate;

dateNow(): JapaneseDate;

dateNow(arg0: ZoneId): JapaneseDate;

dateNow(arg0: Clock): JapaneseDate;

date(arg0: TemporalAccessor): JapaneseDate;

localDateTime(arg0: TemporalAccessor): ChronoLocalDateTime<JapaneseDate>;

zonedDateTime(arg0: TemporalAccessor): ChronoZonedDateTime<JapaneseDate>;

zonedDateTime(arg0: Instant, arg1: ZoneId): ChronoZonedDateTime<JapaneseDate>;

isLeapYear(arg0: number): boolean;

prolepticYear(arg0: Era, arg1: number): number;

eraOf(arg0: number): JapaneseEra;

eras(): List<Era>;

range(arg0: ChronoField): ValueRange;

resolveDate(arg0: Map<TemporalField, Number>, arg1: ResolverStyle): JapaneseDate;
 }

export interface JapaneseDate extends ChronoLocalDate, Serializable { }
export class JapaneseDate extends ChronoLocalDateImpl<JapaneseDate> implements ChronoLocalDate, Serializable {

static now(): JapaneseDate;

static now(arg0: ZoneId): JapaneseDate;

static now(arg0: Clock): JapaneseDate;

static of(arg0: JapaneseEra, arg1: number, arg2: number, arg3: number): JapaneseDate;

static of(arg0: number, arg1: number, arg2: number): JapaneseDate;

static from(arg0: TemporalAccessor): JapaneseDate;

getChronology(): JapaneseChronology;

getEra(): JapaneseEra;

lengthOfMonth(): number;

lengthOfYear(): number;

isSupported(arg0: TemporalField): boolean;

range(arg0: TemporalField): ValueRange;

getLong(arg0: TemporalField): number;

with(arg0: TemporalField, arg1: number): JapaneseDate;

with(arg0: TemporalAdjuster): JapaneseDate;

plus(arg0: TemporalAmount): JapaneseDate;

minus(arg0: TemporalAmount): JapaneseDate;

plus(arg0: number, arg1: TemporalUnit): JapaneseDate;

minus(arg0: number, arg1: TemporalUnit): JapaneseDate;

atTime(arg0: LocalTime): ChronoLocalDateTime<JapaneseDate>;

until(arg0: ChronoLocalDate): ChronoPeriod;

toEpochDay(): number;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export interface JapaneseEra extends Era, Serializable { }
export class JapaneseEra implements Era, Serializable {
static MEIJI:JapaneseEra
static TAISHO:JapaneseEra
static SHOWA:JapaneseEra
static HEISEI:JapaneseEra
static REIWA:JapaneseEra

static of(arg0: number): JapaneseEra;

static valueOf(arg0: String): JapaneseEra;

static values(): JapaneseEra[];

getDisplayName(arg0: TextStyle, arg1: Locale): String;

getValue(): number;

range(arg0: TemporalField): ValueRange;
toString(): string;
 }

export interface MinguoChronology extends Serializable { }
export class MinguoChronology extends AbstractChronology implements Serializable {
static INSTANCE:MinguoChronology

getId(): String;

getCalendarType(): String;

date(arg0: Era, arg1: number, arg2: number, arg3: number): MinguoDate;

date(arg0: number, arg1: number, arg2: number): MinguoDate;

dateYearDay(arg0: Era, arg1: number, arg2: number): MinguoDate;

dateYearDay(arg0: number, arg1: number): MinguoDate;

dateEpochDay(arg0: number): MinguoDate;

dateNow(): MinguoDate;

dateNow(arg0: ZoneId): MinguoDate;

dateNow(arg0: Clock): MinguoDate;

date(arg0: TemporalAccessor): MinguoDate;

localDateTime(arg0: TemporalAccessor): ChronoLocalDateTime<MinguoDate>;

zonedDateTime(arg0: TemporalAccessor): ChronoZonedDateTime<MinguoDate>;

zonedDateTime(arg0: Instant, arg1: ZoneId): ChronoZonedDateTime<MinguoDate>;

isLeapYear(arg0: number): boolean;

prolepticYear(arg0: Era, arg1: number): number;

eraOf(arg0: number): MinguoEra;

eras(): List<Era>;

range(arg0: ChronoField): ValueRange;

resolveDate(arg0: Map<TemporalField, Number>, arg1: ResolverStyle): MinguoDate;
 }

export interface MinguoDate extends ChronoLocalDate, Serializable { }
export class MinguoDate extends ChronoLocalDateImpl<MinguoDate> implements ChronoLocalDate, Serializable {

static now(): MinguoDate;

static now(arg0: ZoneId): MinguoDate;

static now(arg0: Clock): MinguoDate;

static of(arg0: number, arg1: number, arg2: number): MinguoDate;

static from(arg0: TemporalAccessor): MinguoDate;

getChronology(): MinguoChronology;

getEra(): MinguoEra;

lengthOfMonth(): number;

range(arg0: TemporalField): ValueRange;

getLong(arg0: TemporalField): number;

with(arg0: TemporalField, arg1: number): MinguoDate;

with(arg0: TemporalAdjuster): MinguoDate;

plus(arg0: TemporalAmount): MinguoDate;

minus(arg0: TemporalAmount): MinguoDate;

plus(arg0: number, arg1: TemporalUnit): MinguoDate;

minus(arg0: number, arg1: TemporalUnit): MinguoDate;

atTime(arg0: LocalTime): ChronoLocalDateTime<MinguoDate>;

until(arg0: ChronoLocalDate): ChronoPeriod;

toEpochDay(): number;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export interface MinguoEra extends Era { }
export class MinguoEra extends Enum<MinguoEra> implements Era {
static BEFORE_ROC:MinguoEra
static ROC:MinguoEra

static values(): MinguoEra[];

static valueOf(arg0: String): MinguoEra;

static of(arg0: number): MinguoEra;

getValue(): number;

getDisplayName(arg0: TextStyle, arg1: Locale): String;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export interface ThaiBuddhistChronology extends Serializable { }
export class ThaiBuddhistChronology extends AbstractChronology implements Serializable {
static INSTANCE:ThaiBuddhistChronology

getId(): String;

getCalendarType(): String;

date(arg0: Era, arg1: number, arg2: number, arg3: number): ThaiBuddhistDate;

date(arg0: number, arg1: number, arg2: number): ThaiBuddhistDate;

dateYearDay(arg0: Era, arg1: number, arg2: number): ThaiBuddhistDate;

dateYearDay(arg0: number, arg1: number): ThaiBuddhistDate;

dateEpochDay(arg0: number): ThaiBuddhistDate;

dateNow(): ThaiBuddhistDate;

dateNow(arg0: ZoneId): ThaiBuddhistDate;

dateNow(arg0: Clock): ThaiBuddhistDate;

date(arg0: TemporalAccessor): ThaiBuddhistDate;

localDateTime(arg0: TemporalAccessor): ChronoLocalDateTime<ThaiBuddhistDate>;

zonedDateTime(arg0: TemporalAccessor): ChronoZonedDateTime<ThaiBuddhistDate>;

zonedDateTime(arg0: Instant, arg1: ZoneId): ChronoZonedDateTime<ThaiBuddhistDate>;

isLeapYear(arg0: number): boolean;

prolepticYear(arg0: Era, arg1: number): number;

eraOf(arg0: number): ThaiBuddhistEra;

eras(): List<Era>;

range(arg0: ChronoField): ValueRange;

resolveDate(arg0: Map<TemporalField, Number>, arg1: ResolverStyle): ThaiBuddhistDate;
 }

export interface ThaiBuddhistDate extends ChronoLocalDate, Serializable { }
export class ThaiBuddhistDate extends ChronoLocalDateImpl<ThaiBuddhistDate> implements ChronoLocalDate, Serializable {

static now(): ThaiBuddhistDate;

static now(arg0: ZoneId): ThaiBuddhistDate;

static now(arg0: Clock): ThaiBuddhistDate;

static of(arg0: number, arg1: number, arg2: number): ThaiBuddhistDate;

static from(arg0: TemporalAccessor): ThaiBuddhistDate;

getChronology(): ThaiBuddhistChronology;

getEra(): ThaiBuddhistEra;

lengthOfMonth(): number;

range(arg0: TemporalField): ValueRange;

getLong(arg0: TemporalField): number;

with(arg0: TemporalField, arg1: number): ThaiBuddhistDate;

with(arg0: TemporalAdjuster): ThaiBuddhistDate;

plus(arg0: TemporalAmount): ThaiBuddhistDate;

minus(arg0: TemporalAmount): ThaiBuddhistDate;

plus(arg0: number, arg1: TemporalUnit): ThaiBuddhistDate;

minus(arg0: number, arg1: TemporalUnit): ThaiBuddhistDate;

atTime(arg0: LocalTime): ChronoLocalDateTime<ThaiBuddhistDate>;

until(arg0: ChronoLocalDate): ChronoPeriod;

toEpochDay(): number;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export interface ThaiBuddhistEra extends Era { }
export class ThaiBuddhistEra extends Enum<ThaiBuddhistEra> implements Era {
static BEFORE_BE:ThaiBuddhistEra
static BE:ThaiBuddhistEra

static values(): ThaiBuddhistEra[];

static valueOf(arg0: String): ThaiBuddhistEra;

static of(arg0: number): ThaiBuddhistEra;

getValue(): number;

getDisplayName(arg0: TextStyle, arg1: Locale): String;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}
