/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.time.d.ts" />
/// <reference path="java.text.d.ts" />
/// <reference path="java.time.chrono.d.ts" />
/// <reference path="java.time.temporal.d.ts" />
declare module '@afterburnerhq/java.time.format' { 
import { Enum, Appendable, CharSequence, Long, Throwable, Class, String, Boolean } from '@afterburnerhq/java.lang'
import { Locale, Map, Set } from '@afterburnerhq/java.util'
import { ZoneId, Period, DateTimeException } from '@afterburnerhq/java.time'
import { ParsePosition, Format } from '@afterburnerhq/java.text'
import { ChronoLocalDate, Chronology } from '@afterburnerhq/java.time.chrono'
import { TemporalQuery, TemporalField, TemporalAccessor } from '@afterburnerhq/java.time.temporal'
export class DateTimeFormatter {
static ISO_LOCAL_DATE:DateTimeFormatter
static ISO_OFFSET_DATE:DateTimeFormatter
static ISO_DATE:DateTimeFormatter
static ISO_LOCAL_TIME:DateTimeFormatter
static ISO_OFFSET_TIME:DateTimeFormatter
static ISO_TIME:DateTimeFormatter
static ISO_LOCAL_DATE_TIME:DateTimeFormatter
static ISO_OFFSET_DATE_TIME:DateTimeFormatter
static ISO_ZONED_DATE_TIME:DateTimeFormatter
static ISO_DATE_TIME:DateTimeFormatter
static ISO_ORDINAL_DATE:DateTimeFormatter
static ISO_WEEK_DATE:DateTimeFormatter
static ISO_INSTANT:DateTimeFormatter
static BASIC_ISO_DATE:DateTimeFormatter
static RFC_1123_DATE_TIME:DateTimeFormatter

static ofPattern(arg0: String): DateTimeFormatter;

static ofPattern(arg0: String, arg1: Locale): DateTimeFormatter;

static ofLocalizedDate(arg0: FormatStyle): DateTimeFormatter;

static ofLocalizedTime(arg0: FormatStyle): DateTimeFormatter;

static ofLocalizedDateTime(arg0: FormatStyle): DateTimeFormatter;

static ofLocalizedDateTime(arg0: FormatStyle, arg1: FormatStyle): DateTimeFormatter;

static parsedExcessDays(): TemporalQuery<Period>;

static parsedLeapSecond(): TemporalQuery<Boolean>;

getLocale(): Locale;

withLocale(arg0: Locale): DateTimeFormatter;

localizedBy(arg0: Locale): DateTimeFormatter;

getDecimalStyle(): DecimalStyle;

withDecimalStyle(arg0: DecimalStyle): DateTimeFormatter;

getChronology(): Chronology;

withChronology(arg0: Chronology): DateTimeFormatter;

getZone(): ZoneId;

withZone(arg0: ZoneId): DateTimeFormatter;

getResolverStyle(): ResolverStyle;

withResolverStyle(arg0: ResolverStyle): DateTimeFormatter;

getResolverFields(): Set<TemporalField>;

withResolverFields(arg0: TemporalField[]): DateTimeFormatter;

withResolverFields(arg0: Set<TemporalField>): DateTimeFormatter;

format(arg0: TemporalAccessor): String;

formatTo(arg0: TemporalAccessor, arg1: Appendable): void;

parse(arg0: CharSequence): TemporalAccessor;

parse(arg0: CharSequence, arg1: ParsePosition): TemporalAccessor;

parse<T extends Object>(arg0: CharSequence, arg1: TemporalQuery<T>): T;

parseBest(arg0: CharSequence, arg1: TemporalQuery<any>[]): TemporalAccessor;

parseUnresolved(arg0: CharSequence, arg1: ParsePosition): TemporalAccessor;

toFormat(): Format;

toFormat(arg0: TemporalQuery<any>): Format;
toString(): string;
 }

export class DateTimeFormatterBuilder {
constructor();

static getLocalizedDateTimePattern(arg0: FormatStyle, arg1: FormatStyle, arg2: Chronology, arg3: Locale): String;

parseCaseSensitive(): DateTimeFormatterBuilder;

parseCaseInsensitive(): DateTimeFormatterBuilder;

parseStrict(): DateTimeFormatterBuilder;

parseLenient(): DateTimeFormatterBuilder;

parseDefaulting(arg0: TemporalField, arg1: number): DateTimeFormatterBuilder;

appendValue(arg0: TemporalField): DateTimeFormatterBuilder;

appendValue(arg0: TemporalField, arg1: number): DateTimeFormatterBuilder;

appendValue(arg0: TemporalField, arg1: number, arg2: number, arg3: SignStyle): DateTimeFormatterBuilder;

appendValueReduced(arg0: TemporalField, arg1: number, arg2: number, arg3: number): DateTimeFormatterBuilder;

appendValueReduced(arg0: TemporalField, arg1: number, arg2: number, arg3: ChronoLocalDate): DateTimeFormatterBuilder;

appendFraction(arg0: TemporalField, arg1: number, arg2: number, arg3: boolean): DateTimeFormatterBuilder;

appendText(arg0: TemporalField): DateTimeFormatterBuilder;

appendText(arg0: TemporalField, arg1: TextStyle): DateTimeFormatterBuilder;

appendText(arg0: TemporalField, arg1: Map<Number, String>): DateTimeFormatterBuilder;

appendInstant(): DateTimeFormatterBuilder;

appendInstant(arg0: number): DateTimeFormatterBuilder;

appendOffsetId(): DateTimeFormatterBuilder;

appendOffset(arg0: String, arg1: String): DateTimeFormatterBuilder;

appendLocalizedOffset(arg0: TextStyle): DateTimeFormatterBuilder;

appendZoneId(): DateTimeFormatterBuilder;

appendZoneRegionId(): DateTimeFormatterBuilder;

appendZoneOrOffsetId(): DateTimeFormatterBuilder;

appendZoneText(arg0: TextStyle): DateTimeFormatterBuilder;

appendZoneText(arg0: TextStyle, arg1: Set<ZoneId>): DateTimeFormatterBuilder;

appendGenericZoneText(arg0: TextStyle): DateTimeFormatterBuilder;

appendGenericZoneText(arg0: TextStyle, arg1: Set<ZoneId>): DateTimeFormatterBuilder;

appendChronologyId(): DateTimeFormatterBuilder;

appendChronologyText(arg0: TextStyle): DateTimeFormatterBuilder;

appendLocalized(arg0: FormatStyle, arg1: FormatStyle): DateTimeFormatterBuilder;

appendLiteral(arg0: String): DateTimeFormatterBuilder;

appendLiteral(arg0: String): DateTimeFormatterBuilder;

appendDayPeriodText(arg0: TextStyle): DateTimeFormatterBuilder;

append(arg0: DateTimeFormatter): DateTimeFormatterBuilder;

appendOptional(arg0: DateTimeFormatter): DateTimeFormatterBuilder;

appendPattern(arg0: String): DateTimeFormatterBuilder;

padNext(arg0: number): DateTimeFormatterBuilder;

padNext(arg0: number, arg1: String): DateTimeFormatterBuilder;

optionalStart(): DateTimeFormatterBuilder;

optionalEnd(): DateTimeFormatterBuilder;

toFormatter(): DateTimeFormatter;

toFormatter(arg0: Locale): DateTimeFormatter;
 }

export class DateTimeParseException extends DateTimeException {
constructor(arg0: String, arg1: CharSequence, arg2: number);
constructor(arg0: String, arg1: CharSequence, arg2: number, arg3: Throwable);

getParsedString(): String;

getErrorIndex(): number;
 }

export class DecimalStyle {
static STANDARD:DecimalStyle

static getAvailableLocales(): Set<Locale>;

static ofDefaultLocale(): DecimalStyle;

static of(arg0: Locale): DecimalStyle;

getZeroDigit(): String;

withZeroDigit(arg0: String): DecimalStyle;

getPositiveSign(): String;

withPositiveSign(arg0: String): DecimalStyle;

getNegativeSign(): String;

withNegativeSign(arg0: String): DecimalStyle;

getDecimalSeparator(): String;

withDecimalSeparator(arg0: String): DecimalStyle;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class FormatStyle extends Enum<FormatStyle> {
static FULL:FormatStyle
static LONG:FormatStyle
static MEDIUM:FormatStyle
static SHORT:FormatStyle

static values(): FormatStyle[];

static valueOf(arg0: String): FormatStyle;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class ResolverStyle extends Enum<ResolverStyle> {
static STRICT:ResolverStyle
static SMART:ResolverStyle
static LENIENT:ResolverStyle

static values(): ResolverStyle[];

static valueOf(arg0: String): ResolverStyle;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class SignStyle extends Enum<SignStyle> {
static NORMAL:SignStyle
static ALWAYS:SignStyle
static NEVER:SignStyle
static NOT_NEGATIVE:SignStyle
static EXCEEDS_PAD:SignStyle

static values(): SignStyle[];

static valueOf(arg0: String): SignStyle;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class TextStyle extends Enum<TextStyle> {
static FULL:TextStyle
static FULL_STANDALONE:TextStyle
static SHORT:TextStyle
static SHORT_STANDALONE:TextStyle
static NARROW:TextStyle
static NARROW_STANDALONE:TextStyle

static values(): TextStyle[];

static valueOf(arg0: String): TextStyle;

isStandalone(): boolean;

asStandalone(): TextStyle;

asNormal(): TextStyle;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}
