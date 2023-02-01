/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.math.d.ts" />
declare module '@afterburnerhq/java.text' { 
import { Locale, TimeZone, Set, Calendar, Currency, Map, Date, Comparator } from '@afterburnerhq/java.util'
import { Enum, StringBuffer, Comparable, Number, CharSequence, Cloneable, Class, String, Exception } from '@afterburnerhq/java.lang'
import { Serializable } from '@afterburnerhq/java.io'
import { RoundingMode } from '@afterburnerhq/java.math'
export class Annotation {
constructor(arg0: Object);

getValue(): Object;
toString(): string;
 }

export interface AttributedCharacterIterator extends CharacterIterator {

getRunStart(): number;

getRunStart(arg0: AttributedCharacterIterator.Attribute): number;

getRunStart(arg0: Set<AttributedCharacterIterator.Attribute>): number;

getRunLimit(): number;

getRunLimit(arg0: AttributedCharacterIterator.Attribute): number;

getRunLimit(arg0: Set<AttributedCharacterIterator.Attribute>): number;

getAttributes(): Map<AttributedCharacterIterator.Attribute, Object>;

getAttribute(arg0: AttributedCharacterIterator.Attribute): Object;

getAllAttributeKeys(): Set<AttributedCharacterIterator.Attribute>;
 }
export namespace AttributedCharacterIterator { 
export class Attribute implements Serializable {
static LANGUAGE:AttributedCharacterIterator.Attribute
static READING:AttributedCharacterIterator.Attribute
static INPUT_METHOD_SEGMENT:AttributedCharacterIterator.Attribute

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

}

export class AttributedString {
constructor(arg0: String);
constructor(arg0: String, arg1: Map<AttributedCharacterIterator.Attribute, any>);
constructor(arg0: AttributedCharacterIterator);
constructor(arg0: AttributedCharacterIterator, arg1: number, arg2: number);
constructor(arg0: AttributedCharacterIterator, arg1: number, arg2: number, arg3: AttributedCharacterIterator.Attribute[]);

addAttribute(arg0: AttributedCharacterIterator.Attribute, arg1: Object): void;

addAttribute(arg0: AttributedCharacterIterator.Attribute, arg1: Object, arg2: number, arg3: number): void;

addAttributes(arg0: Map<AttributedCharacterIterator.Attribute, any>, arg1: number, arg2: number): void;

getIterator(): AttributedCharacterIterator;

getIterator(arg0: AttributedCharacterIterator.Attribute[]): AttributedCharacterIterator;

getIterator(arg0: AttributedCharacterIterator.Attribute[], arg1: number, arg2: number): AttributedCharacterIterator;
 }

export class Bidi {
static DIRECTION_LEFT_TO_RIGHT:number
static DIRECTION_RIGHT_TO_LEFT:number
static DIRECTION_DEFAULT_LEFT_TO_RIGHT:number
static DIRECTION_DEFAULT_RIGHT_TO_LEFT:number
constructor(arg0: String, arg1: number);
constructor(arg0: AttributedCharacterIterator);
constructor(arg0: String[], arg1: number, arg2: number[], arg3: number, arg4: number, arg5: number);

createLineBidi(arg0: number, arg1: number): Bidi;

isMixed(): boolean;

isLeftToRight(): boolean;

isRightToLeft(): boolean;

getLength(): number;

baseIsLeftToRight(): boolean;

getBaseLevel(): number;

getLevelAt(arg0: number): number;

getRunCount(): number;

getRunLevel(arg0: number): number;

getRunStart(arg0: number): number;

getRunLimit(arg0: number): number;

static requiresBidi(arg0: String[], arg1: number, arg2: number): boolean;

static reorderVisually(arg0: number[], arg1: number, arg2: Object[], arg3: number, arg4: number): void;
toString(): string;
 }

export abstract class BreakIterator implements Cloneable {
static DONE:number

clone(): Object;

abstract first(): number;

abstract last(): number;

abstract next(arg0: number): number;

abstract next(): number;

abstract previous(): number;

abstract following(arg0: number): number;

preceding(arg0: number): number;

isBoundary(arg0: number): boolean;

abstract current(): number;

abstract getText(): CharacterIterator;

setText(arg0: String): void;

abstract setText(arg0: CharacterIterator): void;

static getWordInstance(): BreakIterator;

static getWordInstance(arg0: Locale): BreakIterator;

static getLineInstance(): BreakIterator;

static getLineInstance(arg0: Locale): BreakIterator;

static getCharacterInstance(): BreakIterator;

static getCharacterInstance(arg0: Locale): BreakIterator;

static getSentenceInstance(): BreakIterator;

static getSentenceInstance(arg0: Locale): BreakIterator;

static getAvailableLocales(): Locale[];
 }

export namespace CharacterIterator { 
const DONE:String
}

export interface CharacterIterator extends Cloneable {
DONE:String

first(): String;

last(): String;

current(): String;

next(): String;

previous(): String;

setIndex(arg0: number): String;

getBeginIndex(): number;

getEndIndex(): number;

getIndex(): number;

clone(): Object;
 }

export class ChoiceFormat extends NumberFormat {
constructor(arg0: String);
constructor(arg0: number[], arg1: String[]);

applyPattern(arg0: String): void;

toPattern(): String;

setChoices(arg0: number[], arg1: String[]): void;

getLimits(): number[];

getFormats(): Object[];

format(arg0: number, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;

format(arg0: number, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;

parse(arg0: String, arg1: ParsePosition): Number;

static nextDouble(arg0: number): number;

static previousDouble(arg0: number): number;

clone(): Object;

hashCode(): number;

equals(arg0: Object): boolean;

static nextDouble(arg0: number, arg1: boolean): number;
 }

export class CollationElementIterator {
static NULLORDER:number

reset(): void;

next(): number;

previous(): number;

static primaryOrder(arg0: number): number;

static secondaryOrder(arg0: number): number;

static tertiaryOrder(arg0: number): number;

setOffset(arg0: number): void;

getOffset(): number;

getMaxExpansion(arg0: number): number;

setText(arg0: String): void;

setText(arg0: CharacterIterator): void;
 }

export abstract class CollationKey extends Object implements Comparable<CollationKey> {

abstract compareTo(arg0: CollationKey): number;

getSourceString(): String;

abstract toByteArray(): number[];
 }

export interface Collator extends Comparator<Object>, Cloneable { }
export abstract class Collator extends Object implements Comparator<Object>, Cloneable {
static PRIMARY:number
static SECONDARY:number
static TERTIARY:number
static IDENTICAL:number
static NO_DECOMPOSITION:number
static CANONICAL_DECOMPOSITION:number
static FULL_DECOMPOSITION:number

static getInstance(): Collator;

static getInstance(arg0: Locale): Collator;

abstract compare(arg0: String, arg1: String): number;

compare(arg0: Object, arg1: Object): number;

abstract getCollationKey(arg0: String): CollationKey;

equals(arg0: String, arg1: String): boolean;

getStrength(): number;

setStrength(arg0: number): void;

getDecomposition(): number;

setDecomposition(arg0: number): void;

static getAvailableLocales(): Locale[];

clone(): Object;

equals(arg0: Object): boolean;

abstract hashCode(): number;
 }

export class CompactNumberFormat extends NumberFormat {
constructor(arg0: String, arg1: DecimalFormatSymbols, arg2: String[]);
constructor(arg0: String, arg1: DecimalFormatSymbols, arg2: String[], arg3: String);

format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;

format(arg0: number, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;

format(arg0: number, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;

formatToCharacterIterator(arg0: Object): AttributedCharacterIterator;

parse(arg0: String, arg1: ParsePosition): Number;

setMaximumIntegerDigits(arg0: number): void;

setMinimumIntegerDigits(arg0: number): void;

setMinimumFractionDigits(arg0: number): void;

setMaximumFractionDigits(arg0: number): void;

getRoundingMode(): RoundingMode;

setRoundingMode(arg0: RoundingMode): void;

getGroupingSize(): number;

setGroupingSize(arg0: number): void;

isGroupingUsed(): boolean;

setGroupingUsed(arg0: boolean): void;

isParseIntegerOnly(): boolean;

setParseIntegerOnly(arg0: boolean): void;

isParseBigDecimal(): boolean;

setParseBigDecimal(arg0: boolean): void;

equals(arg0: Object): boolean;

hashCode(): number;

clone(): CompactNumberFormat;
 }

export abstract class DateFormat extends Format {
static ERA_FIELD:number
static YEAR_FIELD:number
static MONTH_FIELD:number
static DATE_FIELD:number
static HOUR_OF_DAY1_FIELD:number
static HOUR_OF_DAY0_FIELD:number
static MINUTE_FIELD:number
static SECOND_FIELD:number
static MILLISECOND_FIELD:number
static DAY_OF_WEEK_FIELD:number
static DAY_OF_YEAR_FIELD:number
static DAY_OF_WEEK_IN_MONTH_FIELD:number
static WEEK_OF_YEAR_FIELD:number
static WEEK_OF_MONTH_FIELD:number
static AM_PM_FIELD:number
static HOUR1_FIELD:number
static HOUR0_FIELD:number
static TIMEZONE_FIELD:number
static FULL:number
static LONG:number
static MEDIUM:number
static SHORT:number
static DEFAULT:number

format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;

abstract format(arg0: Date, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;

format(arg0: Date): String;

parse(arg0: String): Date;

abstract parse(arg0: String, arg1: ParsePosition): Date;

parseObject(arg0: String, arg1: ParsePosition): Object;

static getTimeInstance(): DateFormat;

static getTimeInstance(arg0: number): DateFormat;

static getTimeInstance(arg0: number, arg1: Locale): DateFormat;

static getDateInstance(): DateFormat;

static getDateInstance(arg0: number): DateFormat;

static getDateInstance(arg0: number, arg1: Locale): DateFormat;

static getDateTimeInstance(): DateFormat;

static getDateTimeInstance(arg0: number, arg1: number): DateFormat;

static getDateTimeInstance(arg0: number, arg1: number, arg2: Locale): DateFormat;

static getInstance(): DateFormat;

static getAvailableLocales(): Locale[];

setCalendar(arg0: Calendar): void;

getCalendar(): Calendar;

setNumberFormat(arg0: NumberFormat): void;

getNumberFormat(): NumberFormat;

setTimeZone(arg0: TimeZone): void;

getTimeZone(): TimeZone;

setLenient(arg0: boolean): void;

isLenient(): boolean;

hashCode(): number;

equals(arg0: Object): boolean;

clone(): Object;
 }
export namespace DateFormat { 
export class Field extends Format.Field {
static ERA:DateFormat.Field
static YEAR:DateFormat.Field
static MONTH:DateFormat.Field
static DAY_OF_MONTH:DateFormat.Field
static HOUR_OF_DAY1:DateFormat.Field
static HOUR_OF_DAY0:DateFormat.Field
static MINUTE:DateFormat.Field
static SECOND:DateFormat.Field
static MILLISECOND:DateFormat.Field
static DAY_OF_WEEK:DateFormat.Field
static DAY_OF_YEAR:DateFormat.Field
static DAY_OF_WEEK_IN_MONTH:DateFormat.Field
static WEEK_OF_YEAR:DateFormat.Field
static WEEK_OF_MONTH:DateFormat.Field
static AM_PM:DateFormat.Field
static HOUR1:DateFormat.Field
static HOUR0:DateFormat.Field
static TIME_ZONE:DateFormat.Field

static ofCalendarField(arg0: number): DateFormat.Field;

getCalendarField(): number;
 }

}

export class DateFormatSymbols implements Serializable, Cloneable {
constructor();
constructor(arg0: Locale);

static getAvailableLocales(): Locale[];

static getInstance(): DateFormatSymbols;

static getInstance(arg0: Locale): DateFormatSymbols;

getEras(): String[];

setEras(arg0: String[]): void;

getMonths(): String[];

setMonths(arg0: String[]): void;

getShortMonths(): String[];

setShortMonths(arg0: String[]): void;

getWeekdays(): String[];

setWeekdays(arg0: String[]): void;

getShortWeekdays(): String[];

setShortWeekdays(arg0: String[]): void;

getAmPmStrings(): String[];

setAmPmStrings(arg0: String[]): void;

getZoneStrings(): Array<Array<String>>;

setZoneStrings(arg0: Array<Array<String>>): void;

getLocalPatternChars(): String;

setLocalPatternChars(arg0: String): void;

clone(): Object;

hashCode(): number;

equals(arg0: Object): boolean;
 }

export class DecimalFormat extends NumberFormat {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: DecimalFormatSymbols);

format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;

format(arg0: number, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;

format(arg0: number, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;

formatToCharacterIterator(arg0: Object): AttributedCharacterIterator;

parse(arg0: String, arg1: ParsePosition): Number;

getDecimalFormatSymbols(): DecimalFormatSymbols;

setDecimalFormatSymbols(arg0: DecimalFormatSymbols): void;

getPositivePrefix(): String;

setPositivePrefix(arg0: String): void;

getNegativePrefix(): String;

setNegativePrefix(arg0: String): void;

getPositiveSuffix(): String;

setPositiveSuffix(arg0: String): void;

getNegativeSuffix(): String;

setNegativeSuffix(arg0: String): void;

getMultiplier(): number;

setMultiplier(arg0: number): void;

setGroupingUsed(arg0: boolean): void;

getGroupingSize(): number;

setGroupingSize(arg0: number): void;

isDecimalSeparatorAlwaysShown(): boolean;

setDecimalSeparatorAlwaysShown(arg0: boolean): void;

isParseBigDecimal(): boolean;

setParseBigDecimal(arg0: boolean): void;

clone(): Object;

equals(arg0: Object): boolean;

hashCode(): number;

toPattern(): String;

toLocalizedPattern(): String;

applyPattern(arg0: String): void;

applyLocalizedPattern(arg0: String): void;

setMaximumIntegerDigits(arg0: number): void;

setMinimumIntegerDigits(arg0: number): void;

setMaximumFractionDigits(arg0: number): void;

setMinimumFractionDigits(arg0: number): void;

getMaximumIntegerDigits(): number;

getMinimumIntegerDigits(): number;

getMaximumFractionDigits(): number;

getMinimumFractionDigits(): number;

getCurrency(): Currency;

setCurrency(arg0: Currency): void;

getRoundingMode(): RoundingMode;

setRoundingMode(arg0: RoundingMode): void;
 }

export class DecimalFormatSymbols implements Cloneable, Serializable {
constructor();
constructor(arg0: Locale);

static getAvailableLocales(): Locale[];

static getInstance(): DecimalFormatSymbols;

static getInstance(arg0: Locale): DecimalFormatSymbols;

getZeroDigit(): String;

setZeroDigit(arg0: String): void;

getGroupingSeparator(): String;

setGroupingSeparator(arg0: String): void;

getDecimalSeparator(): String;

setDecimalSeparator(arg0: String): void;

getPerMill(): String;

setPerMill(arg0: String): void;

getPercent(): String;

setPercent(arg0: String): void;

getDigit(): String;

setDigit(arg0: String): void;

getPatternSeparator(): String;

setPatternSeparator(arg0: String): void;

getInfinity(): String;

setInfinity(arg0: String): void;

getNaN(): String;

setNaN(arg0: String): void;

getMinusSign(): String;

setMinusSign(arg0: String): void;

getCurrencySymbol(): String;

setCurrencySymbol(arg0: String): void;

getInternationalCurrencySymbol(): String;

setInternationalCurrencySymbol(arg0: String): void;

getCurrency(): Currency;

setCurrency(arg0: Currency): void;

getMonetaryDecimalSeparator(): String;

setMonetaryDecimalSeparator(arg0: String): void;

getExponentSeparator(): String;

setExponentSeparator(arg0: String): void;

getMonetaryGroupingSeparator(): String;

setMonetaryGroupingSeparator(arg0: String): void;

clone(): Object;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class FieldPosition {
constructor(arg0: number);
constructor(arg0: Format.Field);
constructor(arg0: Format.Field, arg1: number);

getFieldAttribute(): Format.Field;

getField(): number;

getBeginIndex(): number;

getEndIndex(): number;

setBeginIndex(arg0: number): void;

setEndIndex(arg0: number): void;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export abstract class Format implements Serializable, Cloneable {

format(arg0: Object): String;

abstract format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;

formatToCharacterIterator(arg0: Object): AttributedCharacterIterator;

abstract parseObject(arg0: String, arg1: ParsePosition): Object;

parseObject(arg0: String): Object;

clone(): Object;
 }
export namespace Format { 
export class Field extends AttributedCharacterIterator.Attribute {
 }

}

export class MessageFormat extends Format {
constructor(arg0: String);
constructor(arg0: String, arg1: Locale);

setLocale(arg0: Locale): void;

getLocale(): Locale;

applyPattern(arg0: String): void;

toPattern(): String;

setFormatsByArgumentIndex(arg0: Format[]): void;

setFormats(arg0: Format[]): void;

setFormatByArgumentIndex(arg0: number, arg1: Format): void;

setFormat(arg0: number, arg1: Format): void;

getFormatsByArgumentIndex(): Format[];

getFormats(): Format[];

format(arg0: Object[], arg1: StringBuffer, arg2: FieldPosition): StringBuffer;

static format(arg0: String, arg1: Object[]): String;

format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;

formatToCharacterIterator(arg0: Object): AttributedCharacterIterator;

parse(arg0: String, arg1: ParsePosition): Object[];

parse(arg0: String): Object[];

parseObject(arg0: String, arg1: ParsePosition): Object;

clone(): Object;

equals(arg0: Object): boolean;

hashCode(): number;
 }
export namespace MessageFormat { 
export class Field extends Format.Field {
static ARGUMENT:MessageFormat.Field
 }

}

export class Normalizer {

static normalize(arg0: CharSequence, arg1: Normalizer.Form): String;

static isNormalized(arg0: CharSequence, arg1: Normalizer.Form): boolean;
 }
export namespace Normalizer { 
export class Form extends Enum<Normalizer.Form> {
static NFD:Normalizer.Form
static NFC:Normalizer.Form
static NFKD:Normalizer.Form
static NFKC:Normalizer.Form

static values(): Normalizer.Form[];

static valueOf(arg0: String): Normalizer.Form;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export abstract class NumberFormat extends Format {
static INTEGER_FIELD:number
static FRACTION_FIELD:number

format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;

parseObject(arg0: String, arg1: ParsePosition): Object;

format(arg0: number): String;

format(arg0: number): String;

abstract format(arg0: number, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;

abstract format(arg0: number, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;

abstract parse(arg0: String, arg1: ParsePosition): Number;

parse(arg0: String): Number;

isParseIntegerOnly(): boolean;

setParseIntegerOnly(arg0: boolean): void;

static getInstance(): NumberFormat;

static getInstance(arg0: Locale): NumberFormat;

static getNumberInstance(): NumberFormat;

static getNumberInstance(arg0: Locale): NumberFormat;

static getIntegerInstance(): NumberFormat;

static getIntegerInstance(arg0: Locale): NumberFormat;

static getCurrencyInstance(): NumberFormat;

static getCurrencyInstance(arg0: Locale): NumberFormat;

static getPercentInstance(): NumberFormat;

static getPercentInstance(arg0: Locale): NumberFormat;

static getCompactNumberInstance(): NumberFormat;

static getCompactNumberInstance(arg0: Locale, arg1: NumberFormat.Style): NumberFormat;

static getAvailableLocales(): Locale[];

hashCode(): number;

equals(arg0: Object): boolean;

clone(): Object;

isGroupingUsed(): boolean;

setGroupingUsed(arg0: boolean): void;

getMaximumIntegerDigits(): number;

setMaximumIntegerDigits(arg0: number): void;

getMinimumIntegerDigits(): number;

setMinimumIntegerDigits(arg0: number): void;

getMaximumFractionDigits(): number;

setMaximumFractionDigits(arg0: number): void;

getMinimumFractionDigits(): number;

setMinimumFractionDigits(arg0: number): void;

getCurrency(): Currency;

setCurrency(arg0: Currency): void;

getRoundingMode(): RoundingMode;

setRoundingMode(arg0: RoundingMode): void;
 }
export namespace NumberFormat { 
export class Field extends Format.Field {
static INTEGER:NumberFormat.Field
static FRACTION:NumberFormat.Field
static EXPONENT:NumberFormat.Field
static DECIMAL_SEPARATOR:NumberFormat.Field
static SIGN:NumberFormat.Field
static GROUPING_SEPARATOR:NumberFormat.Field
static EXPONENT_SYMBOL:NumberFormat.Field
static PERCENT:NumberFormat.Field
static PERMILLE:NumberFormat.Field
static CURRENCY:NumberFormat.Field
static EXPONENT_SIGN:NumberFormat.Field
static PREFIX:NumberFormat.Field
static SUFFIX:NumberFormat.Field
 }

export class Style extends Enum<NumberFormat.Style> {
static SHORT:NumberFormat.Style
static LONG:NumberFormat.Style

static values(): NumberFormat.Style[];

static valueOf(arg0: String): NumberFormat.Style;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class ParseException extends Exception {
constructor(arg0: String, arg1: number);

getErrorOffset(): number;
 }

export class ParsePosition {
constructor(arg0: number);

getIndex(): number;

setIndex(arg0: number): void;

setErrorIndex(arg0: number): void;

getErrorIndex(): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export interface RuleBasedCollator { }
export class RuleBasedCollator extends Collator {
constructor(arg0: String);

getRules(): String;

getCollationElementIterator(arg0: String): CollationElementIterator;

getCollationElementIterator(arg0: CharacterIterator): CollationElementIterator;

compare(arg0: String, arg1: String): number;

getCollationKey(arg0: String): CollationKey;

clone(): Object;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class SimpleDateFormat extends DateFormat {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Locale);
constructor(arg0: String, arg1: DateFormatSymbols);

set2DigitYearStart(arg0: Date): void;

get2DigitYearStart(): Date;

format(arg0: Date, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;

formatToCharacterIterator(arg0: Object): AttributedCharacterIterator;

parse(arg0: String, arg1: ParsePosition): Date;

toPattern(): String;

toLocalizedPattern(): String;

applyPattern(arg0: String): void;

applyLocalizedPattern(arg0: String): void;

getDateFormatSymbols(): DateFormatSymbols;

setDateFormatSymbols(arg0: DateFormatSymbols): void;

clone(): Object;

hashCode(): number;

equals(arg0: Object): boolean;
 }

export class StringCharacterIterator implements CharacterIterator {
constructor(arg0: String);
constructor(arg0: String, arg1: number);
constructor(arg0: String, arg1: number, arg2: number, arg3: number);

setText(arg0: String): void;

first(): String;

last(): String;

setIndex(arg0: number): String;

current(): String;

next(): String;

previous(): String;

getBeginIndex(): number;

getEndIndex(): number;

getIndex(): number;

equals(arg0: Object): boolean;

hashCode(): number;

clone(): Object;
 }

}
