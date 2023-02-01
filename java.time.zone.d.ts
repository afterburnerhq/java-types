/// <reference path="java.lang.d.ts" />
/// <reference path="java.time.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/java.time.zone' { 
import { Enum, Throwable, Comparable, Class, String } from '@afterburnerhq/java.lang'
import { LocalDateTime, Month, DayOfWeek, DateTimeException, LocalTime, Instant, Duration, ZoneOffset } from '@afterburnerhq/java.time'
import { NavigableMap, List, Set } from '@afterburnerhq/java.util'
import { Serializable } from '@afterburnerhq/java.io'
export class ZoneOffsetTransition extends Object implements Comparable<ZoneOffsetTransition>, Serializable {

static of(arg0: LocalDateTime, arg1: ZoneOffset, arg2: ZoneOffset): ZoneOffsetTransition;

getInstant(): Instant;

toEpochSecond(): number;

getDateTimeBefore(): LocalDateTime;

getDateTimeAfter(): LocalDateTime;

getOffsetBefore(): ZoneOffset;

getOffsetAfter(): ZoneOffset;

getDuration(): Duration;

isGap(): boolean;

isOverlap(): boolean;

isValidOffset(arg0: ZoneOffset): boolean;

compareTo(arg0: ZoneOffsetTransition): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class ZoneOffsetTransitionRule implements Serializable {

static of(arg0: Month, arg1: number, arg2: DayOfWeek, arg3: LocalTime, arg4: boolean, arg5: ZoneOffsetTransitionRule.TimeDefinition, arg6: ZoneOffset, arg7: ZoneOffset, arg8: ZoneOffset): ZoneOffsetTransitionRule;

getMonth(): Month;

getDayOfMonthIndicator(): number;

getDayOfWeek(): DayOfWeek;

getLocalTime(): LocalTime;

isMidnightEndOfDay(): boolean;

getTimeDefinition(): ZoneOffsetTransitionRule.TimeDefinition;

getStandardOffset(): ZoneOffset;

getOffsetBefore(): ZoneOffset;

getOffsetAfter(): ZoneOffset;

createTransition(arg0: number): ZoneOffsetTransition;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }
export namespace ZoneOffsetTransitionRule { 
export class TimeDefinition extends Enum<ZoneOffsetTransitionRule.TimeDefinition> {
static UTC:ZoneOffsetTransitionRule.TimeDefinition
static WALL:ZoneOffsetTransitionRule.TimeDefinition
static STANDARD:ZoneOffsetTransitionRule.TimeDefinition

static values(): ZoneOffsetTransitionRule.TimeDefinition[];

static valueOf(arg0: String): ZoneOffsetTransitionRule.TimeDefinition;

createDateTime(arg0: LocalDateTime, arg1: ZoneOffset, arg2: ZoneOffset): LocalDateTime;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class ZoneRules implements Serializable {

static of(arg0: ZoneOffset, arg1: ZoneOffset, arg2: List<ZoneOffsetTransition>, arg3: List<ZoneOffsetTransition>, arg4: List<ZoneOffsetTransitionRule>): ZoneRules;

static of(arg0: ZoneOffset): ZoneRules;

isFixedOffset(): boolean;

getOffset(arg0: Instant): ZoneOffset;

getOffset(arg0: LocalDateTime): ZoneOffset;

getValidOffsets(arg0: LocalDateTime): List<ZoneOffset>;

getTransition(arg0: LocalDateTime): ZoneOffsetTransition;

getStandardOffset(arg0: Instant): ZoneOffset;

getDaylightSavings(arg0: Instant): Duration;

isDaylightSavings(arg0: Instant): boolean;

isValidOffset(arg0: LocalDateTime, arg1: ZoneOffset): boolean;

nextTransition(arg0: Instant): ZoneOffsetTransition;

previousTransition(arg0: Instant): ZoneOffsetTransition;

getTransitions(): List<ZoneOffsetTransition>;

getTransitionRules(): List<ZoneOffsetTransitionRule>;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class ZoneRulesException extends DateTimeException {
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
 }

export abstract class ZoneRulesProvider {

static getAvailableZoneIds(): Set<String>;

static getRules(arg0: String, arg1: boolean): ZoneRules;

static getVersions(arg0: String): NavigableMap<String, ZoneRules>;

static registerProvider(arg0: ZoneRulesProvider): void;

static refresh(): boolean;
 }

}
