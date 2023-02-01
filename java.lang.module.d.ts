/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.util.stream.d.ts" />
/// <reference path="java.nio.d.ts" />
/// <reference path="java.util.function.d.ts" />
/// <reference path="java.nio.file.d.ts" />
declare module '@afterburnerhq/java.lang.module' { 
import { Collection, List, Set, Optional } from '@afterburnerhq/java.util'
import { Enum, Throwable, Comparable, Class, String, RuntimeException } from '@afterburnerhq/java.lang'
import { URI } from '@afterburnerhq/java.net'
import { InputStream, Closeable } from '@afterburnerhq/java.io'
import { Stream } from '@afterburnerhq/java.util.stream'
import { ByteBuffer } from '@afterburnerhq/java.nio'
import { Supplier } from '@afterburnerhq/java.util.function'
import { Path } from '@afterburnerhq/java.nio.file'
export class Configuration {

resolve(arg0: ModuleFinder, arg1: ModuleFinder, arg2: Collection<String>): Configuration;

resolveAndBind(arg0: ModuleFinder, arg1: ModuleFinder, arg2: Collection<String>): Configuration;

static resolve(arg0: ModuleFinder, arg1: List<Configuration>, arg2: ModuleFinder, arg3: Collection<String>): Configuration;

static resolveAndBind(arg0: ModuleFinder, arg1: List<Configuration>, arg2: ModuleFinder, arg3: Collection<String>): Configuration;

static empty(): Configuration;

parents(): List<Configuration>;

modules(): Set<ResolvedModule>;

findModule(arg0: String): Optional<ResolvedModule>;
toString(): string;
 }

export class FindException extends RuntimeException {
constructor();
constructor(arg0: String);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
 }

export class InvalidModuleDescriptorException extends RuntimeException {
constructor();
constructor(arg0: String);
 }

export class ModuleDescriptor extends Object implements Comparable<ModuleDescriptor> {

name(): String;

modifiers(): Set<ModuleDescriptor.Modifier>;

isOpen(): boolean;

isAutomatic(): boolean;

requires(): Set<ModuleDescriptor.Requires>;

exports(): Set<ModuleDescriptor.Exports>;

opens(): Set<ModuleDescriptor.Opens>;

uses(): Set<String>;

provides(): Set<ModuleDescriptor.Provides>;

version(): Optional<ModuleDescriptor.Version>;

rawVersion(): Optional<String>;

toNameAndVersion(): String;

mainClass(): Optional<String>;

packages(): Set<String>;

compareTo(arg0: ModuleDescriptor): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;

static newModule(arg0: String, arg1: Set<ModuleDescriptor.Modifier>): ModuleDescriptor.Builder;

static newModule(arg0: String): ModuleDescriptor.Builder;

static newOpenModule(arg0: String): ModuleDescriptor.Builder;

static newAutomaticModule(arg0: String): ModuleDescriptor.Builder;

static read(arg0: InputStream, arg1: Supplier<Set<String>>): ModuleDescriptor;

static read(arg0: InputStream): ModuleDescriptor;

static read(arg0: ByteBuffer, arg1: Supplier<Set<String>>): ModuleDescriptor;

static read(arg0: ByteBuffer): ModuleDescriptor;
 }
export namespace ModuleDescriptor { 
export class Builder {

requires(arg0: ModuleDescriptor.Requires): ModuleDescriptor.Builder;

requires(arg0: Set<ModuleDescriptor.Requires.Modifier>, arg1: String, arg2: ModuleDescriptor.Version): ModuleDescriptor.Builder;

requires(arg0: Set<ModuleDescriptor.Requires.Modifier>, arg1: String): ModuleDescriptor.Builder;

requires(arg0: String): ModuleDescriptor.Builder;

exports(arg0: ModuleDescriptor.Exports): ModuleDescriptor.Builder;

exports(arg0: Set<ModuleDescriptor.Exports.Modifier>, arg1: String, arg2: Set<String>): ModuleDescriptor.Builder;

exports(arg0: Set<ModuleDescriptor.Exports.Modifier>, arg1: String): ModuleDescriptor.Builder;

exports(arg0: String, arg1: Set<String>): ModuleDescriptor.Builder;

exports(arg0: String): ModuleDescriptor.Builder;

opens(arg0: ModuleDescriptor.Opens): ModuleDescriptor.Builder;

opens(arg0: Set<ModuleDescriptor.Opens.Modifier>, arg1: String, arg2: Set<String>): ModuleDescriptor.Builder;

opens(arg0: Set<ModuleDescriptor.Opens.Modifier>, arg1: String): ModuleDescriptor.Builder;

opens(arg0: String, arg1: Set<String>): ModuleDescriptor.Builder;

opens(arg0: String): ModuleDescriptor.Builder;

uses(arg0: String): ModuleDescriptor.Builder;

provides(arg0: ModuleDescriptor.Provides): ModuleDescriptor.Builder;

provides(arg0: String, arg1: List<String>): ModuleDescriptor.Builder;

packages(arg0: Set<String>): ModuleDescriptor.Builder;

version(arg0: ModuleDescriptor.Version): ModuleDescriptor.Builder;

version(arg0: String): ModuleDescriptor.Builder;

mainClass(arg0: String): ModuleDescriptor.Builder;

build(): ModuleDescriptor;
 }

export class Exports extends Object implements Comparable<ModuleDescriptor.Exports> {

modifiers(): Set<ModuleDescriptor.Exports.Modifier>;

isQualified(): boolean;

source(): String;

targets(): Set<String>;

compareTo(arg0: ModuleDescriptor.Exports): number;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;
 }
export namespace Exports { 
export class Modifier extends Enum<ModuleDescriptor.Exports.Modifier> {
static SYNTHETIC:ModuleDescriptor.Exports.Modifier
static MANDATED:ModuleDescriptor.Exports.Modifier

static values(): ModuleDescriptor.Exports.Modifier[];

static valueOf(arg0: String): ModuleDescriptor.Exports.Modifier;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class Modifier extends Enum<ModuleDescriptor.Exports.Modifier> {
static SYNTHETIC:ModuleDescriptor.Exports.Modifier
static MANDATED:ModuleDescriptor.Exports.Modifier

static values(): ModuleDescriptor.Exports.Modifier[];

static valueOf(arg0: String): ModuleDescriptor.Exports.Modifier;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class Modifier extends Enum<ModuleDescriptor.Modifier> {
static OPEN:ModuleDescriptor.Modifier
static AUTOMATIC:ModuleDescriptor.Modifier
static SYNTHETIC:ModuleDescriptor.Modifier
static MANDATED:ModuleDescriptor.Modifier

static values(): ModuleDescriptor.Modifier[];

static valueOf(arg0: String): ModuleDescriptor.Modifier;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class Opens extends Object implements Comparable<ModuleDescriptor.Opens> {

modifiers(): Set<ModuleDescriptor.Opens.Modifier>;

isQualified(): boolean;

source(): String;

targets(): Set<String>;

compareTo(arg0: ModuleDescriptor.Opens): number;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;
 }
export namespace Opens { 
export class Modifier extends Enum<ModuleDescriptor.Opens.Modifier> {
static SYNTHETIC:ModuleDescriptor.Opens.Modifier
static MANDATED:ModuleDescriptor.Opens.Modifier

static values(): ModuleDescriptor.Opens.Modifier[];

static valueOf(arg0: String): ModuleDescriptor.Opens.Modifier;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class Modifier extends Enum<ModuleDescriptor.Opens.Modifier> {
static SYNTHETIC:ModuleDescriptor.Opens.Modifier
static MANDATED:ModuleDescriptor.Opens.Modifier

static values(): ModuleDescriptor.Opens.Modifier[];

static valueOf(arg0: String): ModuleDescriptor.Opens.Modifier;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class Provides extends Object implements Comparable<ModuleDescriptor.Provides> {

service(): String;

providers(): List<String>;

compareTo(arg0: ModuleDescriptor.Provides): number;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;
 }

export class Requires extends Object implements Comparable<ModuleDescriptor.Requires> {

modifiers(): Set<ModuleDescriptor.Requires.Modifier>;

name(): String;

compiledVersion(): Optional<ModuleDescriptor.Version>;

rawCompiledVersion(): Optional<String>;

compareTo(arg0: ModuleDescriptor.Requires): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }
export namespace Requires { 
export class Modifier extends Enum<ModuleDescriptor.Requires.Modifier> {
static TRANSITIVE:ModuleDescriptor.Requires.Modifier
static STATIC:ModuleDescriptor.Requires.Modifier
static SYNTHETIC:ModuleDescriptor.Requires.Modifier
static MANDATED:ModuleDescriptor.Requires.Modifier

static values(): ModuleDescriptor.Requires.Modifier[];

static valueOf(arg0: String): ModuleDescriptor.Requires.Modifier;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class Modifier extends Enum<ModuleDescriptor.Requires.Modifier> {
static TRANSITIVE:ModuleDescriptor.Requires.Modifier
static STATIC:ModuleDescriptor.Requires.Modifier
static SYNTHETIC:ModuleDescriptor.Requires.Modifier
static MANDATED:ModuleDescriptor.Requires.Modifier

static values(): ModuleDescriptor.Requires.Modifier[];

static valueOf(arg0: String): ModuleDescriptor.Requires.Modifier;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class Version extends Object implements Comparable<ModuleDescriptor.Version> {

static parse(arg0: String): ModuleDescriptor.Version;

compareTo(arg0: ModuleDescriptor.Version): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

}

export namespace ModuleFinder { 
function 
/* default */ ofSystem(): ModuleFinder;
function 
/* default */ of(arg0: Path[]): ModuleFinder;
function 
/* default */ compose(arg0: ModuleFinder[]): ModuleFinder;
}

export interface ModuleFinder {

find(arg0: String): Optional<ModuleReference>;

findAll(): Set<ModuleReference>;
 }

export interface ModuleReader extends Closeable {

find(arg0: String): Optional<URI>;

/* default */ open(arg0: String): Optional<InputStream>;

/* default */ read(arg0: String): Optional<ByteBuffer>;

/* default */ release(arg0: ByteBuffer): void;

list(): Stream<String>;

close(): void;
 }

export abstract class ModuleReference {

descriptor(): ModuleDescriptor;

location(): Optional<URI>;

abstract open(): ModuleReader;
 }

export class ResolutionException extends RuntimeException {
constructor();
constructor(arg0: String);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
 }

export class ResolvedModule {

configuration(): Configuration;

reference(): ModuleReference;

name(): String;

reads(): Set<ResolvedModule>;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;
 }

}
