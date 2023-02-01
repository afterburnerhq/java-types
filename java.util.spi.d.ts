/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/java.util.spi' { 
import { Integer, String } from '@afterburnerhq/java.lang'
import { Locale, ResourceBundle, Optional, Map } from '@afterburnerhq/java.util'
import { PrintStream, PrintWriter } from '@afterburnerhq/java.io'
export abstract class AbstractResourceBundleProvider implements ResourceBundleProvider {

getBundle(arg0: String, arg1: Locale): ResourceBundle;
 }

export abstract class CalendarDataProvider extends LocaleServiceProvider {

abstract getFirstDayOfWeek(arg0: Locale): number;

abstract getMinimalDaysInFirstWeek(arg0: Locale): number;
 }

export abstract class CalendarNameProvider extends LocaleServiceProvider {

abstract getDisplayName(arg0: String, arg1: number, arg2: number, arg3: number, arg4: Locale): String;

abstract getDisplayNames(arg0: String, arg1: number, arg2: number, arg3: Locale): Map<String, Number>;
 }

export abstract class CurrencyNameProvider extends LocaleServiceProvider {

abstract getSymbol(arg0: String, arg1: Locale): String;

getDisplayName(arg0: String, arg1: Locale): String;
 }

export abstract class LocaleNameProvider extends LocaleServiceProvider {

abstract getDisplayLanguage(arg0: String, arg1: Locale): String;

getDisplayScript(arg0: String, arg1: Locale): String;

abstract getDisplayCountry(arg0: String, arg1: Locale): String;

abstract getDisplayVariant(arg0: String, arg1: Locale): String;

getDisplayUnicodeExtensionKey(arg0: String, arg1: Locale): String;

getDisplayUnicodeExtensionType(arg0: String, arg1: String, arg2: Locale): String;
 }

export abstract class LocaleServiceProvider {

abstract getAvailableLocales(): Locale[];

isSupportedLocale(arg0: Locale): boolean;
 }

export interface ResourceBundleControlProvider {

getControl(arg0: String): ResourceBundle.Control;
 }

export interface ResourceBundleProvider {

getBundle(arg0: String, arg1: Locale): ResourceBundle;
 }

export abstract class TimeZoneNameProvider extends LocaleServiceProvider {

abstract getDisplayName(arg0: String, arg1: boolean, arg2: number, arg3: Locale): String;

getGenericDisplayName(arg0: String, arg1: number, arg2: Locale): String;
 }

export namespace ToolProvider { 
function 
/* default */ findFirst(arg0: String): Optional<ToolProvider>;
}

export interface ToolProvider {

name(): String;

run(arg0: PrintWriter, arg1: PrintWriter, arg2: String[]): number;

/* default */ run(arg0: PrintStream, arg1: PrintStream, arg2: String[]): number;
 }

}
