/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.time.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.util.function.d.ts" />
declare module '@afterburnerhq/java.util.logging' { 
import { BasicPermission } from '@afterburnerhq/java.security'
import { Throwable, String, Exception, Runnable } from '@afterburnerhq/java.lang'
import { ResourceBundle, List, Enumeration } from '@afterburnerhq/java.util'
import { Instant } from '@afterburnerhq/java.time'
import { Serializable, InputStream, OutputStream } from '@afterburnerhq/java.io'
import { Function, BiFunction, Supplier } from '@afterburnerhq/java.util.function'
export class ConsoleHandler extends StreamHandler {
constructor();

publish(arg0: LogRecord): void;

close(): void;
 }

export class ErrorManager {
static GENERIC_FAILURE:number
static WRITE_FAILURE:number
static FLUSH_FAILURE:number
static CLOSE_FAILURE:number
static OPEN_FAILURE:number
static FORMAT_FAILURE:number
constructor();

error(arg0: String, arg1: Exception, arg2: number): void;
 }

export class FileHandler extends StreamHandler {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: boolean);
constructor(arg0: String, arg1: number, arg2: number);
constructor(arg0: String, arg1: number, arg2: number, arg3: boolean);
constructor(arg0: String, arg1: number, arg2: number, arg3: boolean);

publish(arg0: LogRecord): void;

close(): void;
 }

export interface Filter {

isLoggable(arg0: LogRecord): boolean;
 }

export abstract class Formatter {

abstract format(arg0: LogRecord): String;

getHead(arg0: Handler): String;

getTail(arg0: Handler): String;

formatMessage(arg0: LogRecord): String;
 }

export abstract class Handler {

abstract publish(arg0: LogRecord): void;

abstract flush(): void;

abstract close(): void;

setFormatter(arg0: Formatter): void;

getFormatter(): Formatter;

setEncoding(arg0: String): void;

getEncoding(): String;

setFilter(arg0: Filter): void;

getFilter(): Filter;

setErrorManager(arg0: ErrorManager): void;

getErrorManager(): ErrorManager;

setLevel(arg0: Level): void;

getLevel(): Level;

isLoggable(arg0: LogRecord): boolean;
 }

export class Level implements Serializable {
static OFF:Level
static SEVERE:Level
static WARNING:Level
static INFO:Level
static CONFIG:Level
static FINE:Level
static FINER:Level
static FINEST:Level
static ALL:Level

getResourceBundleName(): String;

getName(): String;

getLocalizedName(): String;
toString(): string;

intValue(): number;

static parse(arg0: String): Level;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class LogManager {
static LOGGING_MXBEAN_NAME:String

static getLogManager(): LogManager;

addLogger(arg0: Logger): boolean;

getLogger(arg0: String): Logger;

getLoggerNames(): Enumeration<String>;

readConfiguration(): void;

reset(): void;

readConfiguration(arg0: InputStream): void;

updateConfiguration(arg0: Function<String, BiFunction<String, String, String>>): void;

updateConfiguration(arg0: InputStream, arg1: Function<String, BiFunction<String, String, String>>): void;

getProperty(arg0: String): String;

checkAccess(): void;

static getLoggingMXBean(): LoggingMXBean;

addConfigurationListener(arg0: Runnable): LogManager;

removeConfigurationListener(arg0: Runnable): void;
 }

export class LogRecord implements Serializable {
constructor(arg0: Level, arg1: String);

getLoggerName(): String;

setLoggerName(arg0: String): void;

getResourceBundle(): ResourceBundle;

setResourceBundle(arg0: ResourceBundle): void;

getResourceBundleName(): String;

setResourceBundleName(arg0: String): void;

getLevel(): Level;

setLevel(arg0: Level): void;

getSequenceNumber(): number;

setSequenceNumber(arg0: number): void;

getSourceClassName(): String;

setSourceClassName(arg0: String): void;

getSourceMethodName(): String;

setSourceMethodName(arg0: String): void;

getMessage(): String;

setMessage(arg0: String): void;

getParameters(): Object[];

setParameters(arg0: Object[]): void;

getThreadID(): number;

setThreadID(arg0: number): void;

getLongThreadID(): number;

setLongThreadID(arg0: number): LogRecord;

getMillis(): number;

setMillis(arg0: number): void;

getInstant(): Instant;

setInstant(arg0: Instant): void;

getThrown(): Throwable;

setThrown(arg0: Throwable): void;
 }

export class Logger {
static GLOBAL_LOGGER_NAME:String
static global:Logger

static getGlobal(): Logger;

static getLogger(arg0: String): Logger;

static getLogger(arg0: String, arg1: String): Logger;

static getAnonymousLogger(): Logger;

static getAnonymousLogger(arg0: String): Logger;

getResourceBundle(): ResourceBundle;

getResourceBundleName(): String;

setFilter(arg0: Filter): void;

getFilter(): Filter;

log(arg0: LogRecord): void;

log(arg0: Level, arg1: String): void;

log(arg0: Level, arg1: Supplier<String>): void;

log(arg0: Level, arg1: String, arg2: Object): void;

log(arg0: Level, arg1: String, arg2: Object[]): void;

log(arg0: Level, arg1: String, arg2: Throwable): void;

log(arg0: Level, arg1: Throwable, arg2: Supplier<String>): void;

logp(arg0: Level, arg1: String, arg2: String, arg3: String): void;

logp(arg0: Level, arg1: String, arg2: String, arg3: Supplier<String>): void;

logp(arg0: Level, arg1: String, arg2: String, arg3: String, arg4: Object): void;

logp(arg0: Level, arg1: String, arg2: String, arg3: String, arg4: Object[]): void;

logp(arg0: Level, arg1: String, arg2: String, arg3: String, arg4: Throwable): void;

logp(arg0: Level, arg1: String, arg2: String, arg3: Throwable, arg4: Supplier<String>): void;

logrb(arg0: Level, arg1: String, arg2: String, arg3: String, arg4: String): void;

logrb(arg0: Level, arg1: String, arg2: String, arg3: String, arg4: String, arg5: Object): void;

logrb(arg0: Level, arg1: String, arg2: String, arg3: String, arg4: String, arg5: Object[]): void;

logrb(arg0: Level, arg1: String, arg2: String, arg3: ResourceBundle, arg4: String, arg5: Object[]): void;

logrb(arg0: Level, arg1: ResourceBundle, arg2: String, arg3: Object[]): void;

logrb(arg0: Level, arg1: String, arg2: String, arg3: String, arg4: String, arg5: Throwable): void;

logrb(arg0: Level, arg1: String, arg2: String, arg3: ResourceBundle, arg4: String, arg5: Throwable): void;

logrb(arg0: Level, arg1: ResourceBundle, arg2: String, arg3: Throwable): void;

entering(arg0: String, arg1: String): void;

entering(arg0: String, arg1: String, arg2: Object): void;

entering(arg0: String, arg1: String, arg2: Object[]): void;

exiting(arg0: String, arg1: String): void;

exiting(arg0: String, arg1: String, arg2: Object): void;

throwing(arg0: String, arg1: String, arg2: Throwable): void;

severe(arg0: String): void;

warning(arg0: String): void;

info(arg0: String): void;

config(arg0: String): void;

fine(arg0: String): void;

finer(arg0: String): void;

finest(arg0: String): void;

severe(arg0: Supplier<String>): void;

warning(arg0: Supplier<String>): void;

info(arg0: Supplier<String>): void;

config(arg0: Supplier<String>): void;

fine(arg0: Supplier<String>): void;

finer(arg0: Supplier<String>): void;

finest(arg0: Supplier<String>): void;

setLevel(arg0: Level): void;

getLevel(): Level;

isLoggable(arg0: Level): boolean;

getName(): String;

addHandler(arg0: Handler): void;

removeHandler(arg0: Handler): void;

getHandlers(): Handler[];

setUseParentHandlers(arg0: boolean): void;

getUseParentHandlers(): boolean;

setResourceBundle(arg0: ResourceBundle): void;

getParent(): Logger;

setParent(arg0: Logger): void;
 }

export interface LoggingMXBean {

getLoggerNames(): List<String>;

getLoggerLevel(arg0: String): String;

setLoggerLevel(arg0: String, arg1: String): void;

getParentLoggerName(arg0: String): String;
 }

export class LoggingPermission extends BasicPermission {
constructor(arg0: String, arg1: String);
 }

export class MemoryHandler extends Handler {
constructor();
constructor(arg0: Handler, arg1: number, arg2: Level);

publish(arg0: LogRecord): void;

push(): void;

flush(): void;

close(): void;

setPushLevel(arg0: Level): void;

getPushLevel(): Level;

isLoggable(arg0: LogRecord): boolean;
 }

export class SimpleFormatter extends Formatter {
constructor();

format(arg0: LogRecord): String;
 }

export class SocketHandler extends StreamHandler {
constructor();
constructor(arg0: String, arg1: number);

close(): void;

publish(arg0: LogRecord): void;
 }

export class StreamHandler extends Handler {
constructor();
constructor(arg0: OutputStream, arg1: Formatter);

setEncoding(arg0: String): void;

publish(arg0: LogRecord): void;

isLoggable(arg0: LogRecord): boolean;

flush(): void;

close(): void;
 }

export class XMLFormatter extends Formatter {
constructor();

format(arg0: LogRecord): String;

getHead(arg0: Handler): String;

getTail(arg0: Handler): String;
 }

}
