/// <reference path="javax.annotation.processing.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.util.concurrent.d.ts" />
/// <reference path="javax.lang.model.d.ts" />
/// <reference path="javax.lang.model.element.d.ts" />
/// <reference path="java.nio.file.d.ts" />
/// <reference path="java.nio.charset.d.ts" />
declare module '@afterburnerhq/javax.tools' { 
import { Processor } from '@afterburnerhq/javax.annotation.processing'
import { Enum, Iterable, CharSequence, ClassLoader, Class, String, Boolean } from '@afterburnerhq/java.lang'
import { Locale, Iterator, ServiceLoader, Collection, List, Set } from '@afterburnerhq/java.util'
import { URI } from '@afterburnerhq/java.net'
import { InputStream, OutputStream, Closeable, Reader, Flushable, File, Writer } from '@afterburnerhq/java.io'
import { Callable } from '@afterburnerhq/java.util.concurrent'
import { SourceVersion } from '@afterburnerhq/javax.lang.model'
import { Modifier, NestingKind } from '@afterburnerhq/javax.lang.model.element'
import { Path } from '@afterburnerhq/java.nio.file'
import { Charset } from '@afterburnerhq/java.nio.charset'
export namespace Diagnostic { 
const NOPOS:number
}

export interface Diagnostic<S extends Object> extends Object {
NOPOS:number

getKind(): Diagnostic.Kind;

getSource(): S;

getPosition(): number;

getStartPosition(): number;

getEndPosition(): number;

getLineNumber(): number;

getColumnNumber(): number;

getCode(): String;

getMessage(arg0: Locale): String;
 }
export namespace Diagnostic { 
export class Kind extends Enum<Diagnostic.Kind> {
static ERROR:Diagnostic.Kind
static WARNING:Diagnostic.Kind
static MANDATORY_WARNING:Diagnostic.Kind
static NOTE:Diagnostic.Kind
static OTHER:Diagnostic.Kind

static values(): Diagnostic.Kind[];

static valueOf(arg0: String): Diagnostic.Kind;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class DiagnosticCollector<S extends Object> extends Object implements DiagnosticListener<S> {
constructor();

report(arg0: Diagnostic<S>): void;

getDiagnostics(): List<Diagnostic<S>>;
 }

export interface DiagnosticListener<S extends Object> extends Object {

report(arg0: Diagnostic<S>): void;
 }

export interface DocumentationTool extends Tool, OptionChecker {

getTask(arg0: Writer, arg1: JavaFileManager, arg2: DiagnosticListener<JavaFileObject>, arg3: Class<any>, arg4: Iterable<String>, arg5: Iterable<JavaFileObject>): DocumentationTool.DocumentationTask;

getStandardFileManager(arg0: DiagnosticListener<JavaFileObject>, arg1: Locale, arg2: Charset): StandardJavaFileManager;
 }
export namespace DocumentationTool { 
export interface DocumentationTask extends Callable<Boolean>, Object {

addModules(arg0: Iterable<String>): void;

setLocale(arg0: Locale): void;

call(): Boolean;
 }

export interface Location extends JavaFileManager.Location { }
export class Location extends Enum<DocumentationTool.Location> implements JavaFileManager.Location {
static DOCUMENTATION_OUTPUT:DocumentationTool.Location
static DOCLET_PATH:DocumentationTool.Location
static TAGLET_PATH:DocumentationTool.Location

static values(): DocumentationTool.Location[];

static valueOf(arg0: String): DocumentationTool.Location;

getName(): String;

isOutputLocation(): boolean;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export interface FileObject {

toUri(): URI;

getName(): String;

openInputStream(): InputStream;

openOutputStream(): OutputStream;

openReader(arg0: boolean): Reader;

getCharContent(arg0: boolean): CharSequence;

openWriter(): Writer;

getLastModified(): number;

delete(): boolean;
 }

export class ForwardingFileObject<F extends FileObject> extends Object implements FileObject {

toUri(): URI;

getName(): String;

openInputStream(): InputStream;

openOutputStream(): OutputStream;

openReader(arg0: boolean): Reader;

getCharContent(arg0: boolean): CharSequence;

openWriter(): Writer;

getLastModified(): number;

delete(): boolean;
 }

export class ForwardingJavaFileManager<M extends JavaFileManager> extends Object implements JavaFileManager {

getClassLoader(arg0: JavaFileManager.Location): ClassLoader;

list(arg0: JavaFileManager.Location, arg1: String, arg2: Set<JavaFileObject.Kind>, arg3: boolean): Iterable<JavaFileObject>;

inferBinaryName(arg0: JavaFileManager.Location, arg1: JavaFileObject): String;

isSameFile(arg0: FileObject, arg1: FileObject): boolean;

handleOption(arg0: String, arg1: Iterator<String>): boolean;

hasLocation(arg0: JavaFileManager.Location): boolean;

isSupportedOption(arg0: String): number;

getJavaFileForInput(arg0: JavaFileManager.Location, arg1: String, arg2: JavaFileObject.Kind): JavaFileObject;

getJavaFileForOutput(arg0: JavaFileManager.Location, arg1: String, arg2: JavaFileObject.Kind, arg3: FileObject): JavaFileObject;

getFileForInput(arg0: JavaFileManager.Location, arg1: String, arg2: String): FileObject;

getFileForOutput(arg0: JavaFileManager.Location, arg1: String, arg2: String, arg3: FileObject): FileObject;

flush(): void;

close(): void;

getLocationForModule(arg0: JavaFileManager.Location, arg1: String): JavaFileManager.Location;

getLocationForModule(arg0: JavaFileManager.Location, arg1: JavaFileObject): JavaFileManager.Location;

getServiceLoader<S extends Object>(arg0: JavaFileManager.Location, arg1: Class<S>): ServiceLoader<S>;

inferModuleName(arg0: JavaFileManager.Location): String;

listLocationsForModules(arg0: JavaFileManager.Location): Iterable<Set<JavaFileManager.Location>>;

contains(arg0: JavaFileManager.Location, arg1: FileObject): boolean;
 }

export class ForwardingJavaFileObject<F extends JavaFileObject> extends ForwardingFileObject<F> implements JavaFileObject {

getKind(): JavaFileObject.Kind;

isNameCompatible(arg0: String, arg1: JavaFileObject.Kind): boolean;

getNestingKind(): NestingKind;

getAccessLevel(): Modifier;
 }

export interface JavaCompiler extends Tool, OptionChecker {

getTask(arg0: Writer, arg1: JavaFileManager, arg2: DiagnosticListener<JavaFileObject>, arg3: Iterable<String>, arg4: Iterable<String>, arg5: Iterable<JavaFileObject>): JavaCompiler.CompilationTask;

getStandardFileManager(arg0: DiagnosticListener<JavaFileObject>, arg1: Locale, arg2: Charset): StandardJavaFileManager;
 }
export namespace JavaCompiler { 
export interface CompilationTask extends Callable<Boolean>, Object {

addModules(arg0: Iterable<String>): void;

setProcessors(arg0: Iterable<Processor>): void;

setLocale(arg0: Locale): void;

call(): Boolean;
 }

}

export interface JavaFileManager extends Closeable, Flushable, OptionChecker {

getClassLoader(arg0: JavaFileManager.Location): ClassLoader;

list(arg0: JavaFileManager.Location, arg1: String, arg2: Set<JavaFileObject.Kind>, arg3: boolean): Iterable<JavaFileObject>;

inferBinaryName(arg0: JavaFileManager.Location, arg1: JavaFileObject): String;

isSameFile(arg0: FileObject, arg1: FileObject): boolean;

handleOption(arg0: String, arg1: Iterator<String>): boolean;

hasLocation(arg0: JavaFileManager.Location): boolean;

getJavaFileForInput(arg0: JavaFileManager.Location, arg1: String, arg2: JavaFileObject.Kind): JavaFileObject;

getJavaFileForOutput(arg0: JavaFileManager.Location, arg1: String, arg2: JavaFileObject.Kind, arg3: FileObject): JavaFileObject;

getFileForInput(arg0: JavaFileManager.Location, arg1: String, arg2: String): FileObject;

getFileForOutput(arg0: JavaFileManager.Location, arg1: String, arg2: String, arg3: FileObject): FileObject;

flush(): void;

close(): void;

/* default */ getLocationForModule(arg0: JavaFileManager.Location, arg1: String): JavaFileManager.Location;

/* default */ getLocationForModule(arg0: JavaFileManager.Location, arg1: JavaFileObject): JavaFileManager.Location;

/* default */ getServiceLoader<S extends Object>(arg0: JavaFileManager.Location, arg1: Class<S>): ServiceLoader<S>;

/* default */ inferModuleName(arg0: JavaFileManager.Location): String;

/* default */ listLocationsForModules(arg0: JavaFileManager.Location): Iterable<Set<JavaFileManager.Location>>;

/* default */ contains(arg0: JavaFileManager.Location, arg1: FileObject): boolean;
 }
export namespace JavaFileManager { 
export interface Location {

getName(): String;

isOutputLocation(): boolean;

/* default */ isModuleOrientedLocation(): boolean;
 }

}

export interface JavaFileObject extends FileObject {

getKind(): JavaFileObject.Kind;

isNameCompatible(arg0: String, arg1: JavaFileObject.Kind): boolean;

getNestingKind(): NestingKind;

getAccessLevel(): Modifier;
 }
export namespace JavaFileObject { 
export class Kind extends Enum<JavaFileObject.Kind> {
static SOURCE:JavaFileObject.Kind
static CLASS:JavaFileObject.Kind
static HTML:JavaFileObject.Kind
static OTHER:JavaFileObject.Kind
extension:String

static values(): JavaFileObject.Kind[];

static valueOf(arg0: String): JavaFileObject.Kind;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export interface OptionChecker {

isSupportedOption(arg0: String): number;
 }

export class SimpleJavaFileObject implements JavaFileObject {

toUri(): URI;

getName(): String;

openInputStream(): InputStream;

openOutputStream(): OutputStream;

openReader(arg0: boolean): Reader;

getCharContent(arg0: boolean): CharSequence;

openWriter(): Writer;

getLastModified(): number;

delete(): boolean;

getKind(): JavaFileObject.Kind;

isNameCompatible(arg0: String, arg1: JavaFileObject.Kind): boolean;

getNestingKind(): NestingKind;

getAccessLevel(): Modifier;
toString(): string;
 }

export interface StandardJavaFileManager extends JavaFileManager {

isSameFile(arg0: FileObject, arg1: FileObject): boolean;

getJavaFileObjectsFromFiles(arg0: Iterable<File>): Iterable<JavaFileObject>;

/* default */ getJavaFileObjectsFromPaths(arg0: Collection<Path>): Iterable<JavaFileObject>;

/* default */ getJavaFileObjectsFromPaths(arg0: Iterable<Path>): Iterable<JavaFileObject>;

getJavaFileObjects(arg0: File[]): Iterable<JavaFileObject>;

/* default */ getJavaFileObjects(arg0: Path[]): Iterable<JavaFileObject>;

getJavaFileObjectsFromStrings(arg0: Iterable<String>): Iterable<JavaFileObject>;

getJavaFileObjects(arg0: String[]): Iterable<JavaFileObject>;

setLocation(arg0: JavaFileManager.Location, arg1: Iterable<File>): void;

/* default */ setLocationFromPaths(arg0: JavaFileManager.Location, arg1: Collection<Path>): void;

/* default */ setLocationForModule(arg0: JavaFileManager.Location, arg1: String, arg2: Collection<Path>): void;

getLocation(arg0: JavaFileManager.Location): Iterable<File>;

/* default */ getLocationAsPaths(arg0: JavaFileManager.Location): Iterable<Path>;

/* default */ asPath(arg0: FileObject): Path;

/* default */ setPathFactory(arg0: StandardJavaFileManager.PathFactory): void;
 }
export namespace StandardJavaFileManager { 
export interface PathFactory {

getPath(arg0: String, arg1: String[]): Path;
 }

}

export class StandardLocation extends Enum<StandardLocation> implements JavaFileManager.Location {
static CLASS_OUTPUT:StandardLocation
static SOURCE_OUTPUT:StandardLocation
static CLASS_PATH:StandardLocation
static SOURCE_PATH:StandardLocation
static ANNOTATION_PROCESSOR_PATH:StandardLocation
static ANNOTATION_PROCESSOR_MODULE_PATH:StandardLocation
static PLATFORM_CLASS_PATH:StandardLocation
static NATIVE_HEADER_OUTPUT:StandardLocation
static MODULE_SOURCE_PATH:StandardLocation
static UPGRADE_MODULE_PATH:StandardLocation
static SYSTEM_MODULES:StandardLocation
static MODULE_PATH:StandardLocation
static PATCH_MODULE_PATH:StandardLocation

static values(): StandardLocation[];

static valueOf(arg0: String): StandardLocation;

static locationFor(arg0: String): JavaFileManager.Location;

getName(): String;

isOutputLocation(): boolean;

isModuleOrientedLocation(): boolean;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export interface Tool {

/* default */ name(): String;

run(arg0: InputStream, arg1: OutputStream, arg2: OutputStream, arg3: String[]): number;

getSourceVersions(): Set<SourceVersion>;
 }

export class ToolProvider {

static getSystemJavaCompiler(): JavaCompiler;

static getSystemDocumentationTool(): DocumentationTool;

static getSystemToolClassLoader(): ClassLoader;
 }

}
