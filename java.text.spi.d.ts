/// <reference path="java.util.spi.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.text.d.ts" />
declare module '@afterburnerhq/java.text.spi' { 
import { LocaleServiceProvider } from '@afterburnerhq/java.util.spi'
import { Locale } from '@afterburnerhq/java.util'
import { DateFormatSymbols, DecimalFormatSymbols, BreakIterator, Collator, DateFormat, NumberFormat } from '@afterburnerhq/java.text'
export abstract class BreakIteratorProvider extends LocaleServiceProvider {

abstract getWordInstance(arg0: Locale): BreakIterator;

abstract getLineInstance(arg0: Locale): BreakIterator;

abstract getCharacterInstance(arg0: Locale): BreakIterator;

abstract getSentenceInstance(arg0: Locale): BreakIterator;
 }

export abstract class CollatorProvider extends LocaleServiceProvider {

abstract getInstance(arg0: Locale): Collator;
 }

export abstract class DateFormatProvider extends LocaleServiceProvider {

abstract getTimeInstance(arg0: number, arg1: Locale): DateFormat;

abstract getDateInstance(arg0: number, arg1: Locale): DateFormat;

abstract getDateTimeInstance(arg0: number, arg1: number, arg2: Locale): DateFormat;
 }

export abstract class DateFormatSymbolsProvider extends LocaleServiceProvider {

abstract getInstance(arg0: Locale): DateFormatSymbols;
 }

export abstract class DecimalFormatSymbolsProvider extends LocaleServiceProvider {

abstract getInstance(arg0: Locale): DecimalFormatSymbols;
 }

export abstract class NumberFormatProvider extends LocaleServiceProvider {

abstract getCurrencyInstance(arg0: Locale): NumberFormat;

abstract getIntegerInstance(arg0: Locale): NumberFormat;

abstract getNumberInstance(arg0: Locale): NumberFormat;

abstract getPercentInstance(arg0: Locale): NumberFormat;

getCompactNumberInstance(arg0: Locale, arg1: NumberFormat.Style): NumberFormat;
 }

}
