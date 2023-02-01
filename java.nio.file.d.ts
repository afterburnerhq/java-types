/// <reference path="java.nio.file.spi.d.ts" />
/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.util.stream.d.ts" />
/// <reference path="java.util.concurrent.d.ts" />
/// <reference path="java.nio.channels.d.ts" />
/// <reference path="java.util.function.d.ts" />
/// <reference path="java.nio.file.attribute.d.ts" />
/// <reference path="java.nio.charset.d.ts" />
declare module '@afterburnerhq/java.nio.file' { 
import { FileSystemProvider } from '@afterburnerhq/java.nio.file.spi'
import { BasicPermission } from '@afterburnerhq/java.security'
import { Enum, IllegalStateException, Comparable, RuntimeException, Iterable, CharSequence, ClassLoader, Class, String, IllegalArgumentException, UnsupportedOperationException } from '@afterburnerhq/java.lang'
import { Iterator, ConcurrentModificationException, List, Set, Map } from '@afterburnerhq/java.util'
import { URI } from '@afterburnerhq/java.net'
import { InputStream, Closeable, OutputStream, BufferedReader, IOException, File, BufferedWriter } from '@afterburnerhq/java.io'
import { Stream } from '@afterburnerhq/java.util.stream'
import { TimeUnit } from '@afterburnerhq/java.util.concurrent'
import { SeekableByteChannel } from '@afterburnerhq/java.nio.channels'
import { BiPredicate } from '@afterburnerhq/java.util.function'
import { UserPrincipalLookupService, FileTime, FileStoreAttributeView, PosixFilePermission, FileAttributeView, BasicFileAttributes, UserPrincipal, FileAttribute } from '@afterburnerhq/java.nio.file.attribute'
import { Charset } from '@afterburnerhq/java.nio.charset'
export class AccessDeniedException extends FileSystemException {
constructor(arg0: String);
constructor(arg0: String, arg1: String, arg2: String);
 }

export class AccessMode extends Enum<AccessMode> {
static READ:AccessMode
static WRITE:AccessMode
static EXECUTE:AccessMode

static values(): AccessMode[];

static valueOf(arg0: String): AccessMode;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class AtomicMoveNotSupportedException extends FileSystemException {
constructor(arg0: String, arg1: String, arg2: String);
 }

export class ClosedDirectoryStreamException extends IllegalStateException {
constructor();
 }

export class ClosedFileSystemException extends IllegalStateException {
constructor();
 }

export class ClosedWatchServiceException extends IllegalStateException {
constructor();
 }

export interface CopyOption {
 }

export class DirectoryIteratorException extends ConcurrentModificationException {
constructor(arg0: IOException);

getCause(): IOException;
 }

export class DirectoryNotEmptyException extends FileSystemException {
constructor(arg0: String);
 }

export interface DirectoryStream<T extends Object> extends Closeable, Iterable<T>, Object {

iterator(): Iterator<T>;
 }
export namespace DirectoryStream { 
export interface Filter<T extends Object> extends Object {

accept(arg0: T): boolean;
 }

}

export class FileAlreadyExistsException extends FileSystemException {
constructor(arg0: String);
constructor(arg0: String, arg1: String, arg2: String);
 }

export abstract class FileStore {

abstract name(): String;

abstract type(): String;

abstract isReadOnly(): boolean;

abstract getTotalSpace(): number;

abstract getUsableSpace(): number;

abstract getUnallocatedSpace(): number;

getBlockSize(): number;

abstract supportsFileAttributeView(arg0: Class<FileAttributeView>): boolean;

abstract supportsFileAttributeView(arg0: String): boolean;

abstract getFileStoreAttributeView<V extends FileStoreAttributeView>(arg0: Class<V>): V;

abstract getAttribute(arg0: String): Object;
 }

export abstract class FileSystem implements Closeable {

abstract provider(): FileSystemProvider;

abstract close(): void;

abstract isOpen(): boolean;

abstract isReadOnly(): boolean;

abstract getSeparator(): String;

abstract getRootDirectories(): Iterable<Path>;

abstract getFileStores(): Iterable<FileStore>;

abstract supportedFileAttributeViews(): Set<String>;

abstract getPath(arg0: String, arg1: String[]): Path;

abstract getPathMatcher(arg0: String): PathMatcher;

abstract getUserPrincipalLookupService(): UserPrincipalLookupService;

abstract newWatchService(): WatchService;
 }

export class FileSystemAlreadyExistsException extends RuntimeException {
constructor();
constructor(arg0: String);
 }

export class FileSystemException extends IOException {
constructor(arg0: String);
constructor(arg0: String, arg1: String, arg2: String);

getFile(): String;

getOtherFile(): String;

getReason(): String;

getMessage(): String;
 }

export class FileSystemLoopException extends FileSystemException {
constructor(arg0: String);
 }

export class FileSystemNotFoundException extends RuntimeException {
constructor();
constructor(arg0: String);
 }

export class FileSystems {

static getDefault(): FileSystem;

static getFileSystem(arg0: URI): FileSystem;

static newFileSystem(arg0: URI, arg1: Map<String, any>): FileSystem;

static newFileSystem(arg0: URI, arg1: Map<String, any>, arg2: ClassLoader): FileSystem;

static newFileSystem(arg0: Path, arg1: ClassLoader): FileSystem;

static newFileSystem(arg0: Path, arg1: Map<String, any>): FileSystem;

static newFileSystem(arg0: Path): FileSystem;

static newFileSystem(arg0: Path, arg1: Map<String, any>, arg2: ClassLoader): FileSystem;
 }

export class FileVisitOption extends Enum<FileVisitOption> {
static FOLLOW_LINKS:FileVisitOption

static values(): FileVisitOption[];

static valueOf(arg0: String): FileVisitOption;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class FileVisitResult extends Enum<FileVisitResult> {
static CONTINUE:FileVisitResult
static TERMINATE:FileVisitResult
static SKIP_SUBTREE:FileVisitResult
static SKIP_SIBLINGS:FileVisitResult

static values(): FileVisitResult[];

static valueOf(arg0: String): FileVisitResult;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export interface FileVisitor<T extends Object> extends Object {

preVisitDirectory(arg0: T, arg1: BasicFileAttributes): FileVisitResult;

visitFile(arg0: T, arg1: BasicFileAttributes): FileVisitResult;

visitFileFailed(arg0: T, arg1: IOException): FileVisitResult;

postVisitDirectory(arg0: T, arg1: IOException): FileVisitResult;
 }

export class Files {

static newInputStream(arg0: Path, arg1: OpenOption[]): InputStream;

static newOutputStream(arg0: Path, arg1: OpenOption[]): OutputStream;

static newByteChannel(arg0: Path, arg1: Set<OpenOption>, arg2: FileAttribute<any>[]): SeekableByteChannel;

static newByteChannel(arg0: Path, arg1: OpenOption[]): SeekableByteChannel;

static newDirectoryStream(arg0: Path): DirectoryStream<Path>;

static newDirectoryStream(arg0: Path, arg1: String): DirectoryStream<Path>;

static newDirectoryStream(arg0: Path, arg1: DirectoryStream.Filter<Path>): DirectoryStream<Path>;

static createFile(arg0: Path, arg1: FileAttribute<any>[]): Path;

static createDirectory(arg0: Path, arg1: FileAttribute<any>[]): Path;

static createDirectories(arg0: Path, arg1: FileAttribute<any>[]): Path;

static createTempFile(arg0: Path, arg1: String, arg2: String, arg3: FileAttribute<any>[]): Path;

static createTempFile(arg0: String, arg1: String, arg2: FileAttribute<any>[]): Path;

static createTempDirectory(arg0: Path, arg1: String, arg2: FileAttribute<any>[]): Path;

static createTempDirectory(arg0: String, arg1: FileAttribute<any>[]): Path;

static createSymbolicLink(arg0: Path, arg1: Path, arg2: FileAttribute<any>[]): Path;

static createLink(arg0: Path, arg1: Path): Path;

static delete(arg0: Path): void;

static deleteIfExists(arg0: Path): boolean;

static copy(arg0: Path, arg1: Path, arg2: CopyOption[]): Path;

static move(arg0: Path, arg1: Path, arg2: CopyOption[]): Path;

static readSymbolicLink(arg0: Path): Path;

static getFileStore(arg0: Path): FileStore;

static isSameFile(arg0: Path, arg1: Path): boolean;

static mismatch(arg0: Path, arg1: Path): number;

static isHidden(arg0: Path): boolean;

static probeContentType(arg0: Path): String;

static getFileAttributeView<V extends FileAttributeView>(arg0: Path, arg1: Class<V>, arg2: LinkOption[]): V;

static readAttributes<A extends BasicFileAttributes>(arg0: Path, arg1: Class<A>, arg2: LinkOption[]): A;

static setAttribute(arg0: Path, arg1: String, arg2: Object, arg3: LinkOption[]): Path;

static getAttribute(arg0: Path, arg1: String, arg2: LinkOption[]): Object;

static readAttributes(arg0: Path, arg1: String, arg2: LinkOption[]): Map<String, Object>;

static getPosixFilePermissions(arg0: Path, arg1: LinkOption[]): Set<PosixFilePermission>;

static setPosixFilePermissions(arg0: Path, arg1: Set<PosixFilePermission>): Path;

static getOwner(arg0: Path, arg1: LinkOption[]): UserPrincipal;

static setOwner(arg0: Path, arg1: UserPrincipal): Path;

static isSymbolicLink(arg0: Path): boolean;

static isDirectory(arg0: Path, arg1: LinkOption[]): boolean;

static isRegularFile(arg0: Path, arg1: LinkOption[]): boolean;

static getLastModifiedTime(arg0: Path, arg1: LinkOption[]): FileTime;

static setLastModifiedTime(arg0: Path, arg1: FileTime): Path;

static size(arg0: Path): number;

static exists(arg0: Path, arg1: LinkOption[]): boolean;

static notExists(arg0: Path, arg1: LinkOption[]): boolean;

static isReadable(arg0: Path): boolean;

static isWritable(arg0: Path): boolean;

static isExecutable(arg0: Path): boolean;

static walkFileTree(arg0: Path, arg1: Set<FileVisitOption>, arg2: number, arg3: FileVisitor<Path>): Path;

static walkFileTree(arg0: Path, arg1: FileVisitor<Path>): Path;

static newBufferedReader(arg0: Path, arg1: Charset): BufferedReader;

static newBufferedReader(arg0: Path): BufferedReader;

static newBufferedWriter(arg0: Path, arg1: Charset, arg2: OpenOption[]): BufferedWriter;

static newBufferedWriter(arg0: Path, arg1: OpenOption[]): BufferedWriter;

static copy(arg0: InputStream, arg1: Path, arg2: CopyOption[]): number;

static copy(arg0: Path, arg1: OutputStream): number;

static readAllBytes(arg0: Path): number[];

static readString(arg0: Path): String;

static readString(arg0: Path, arg1: Charset): String;

static readAllLines(arg0: Path, arg1: Charset): List<String>;

static readAllLines(arg0: Path): List<String>;

static write(arg0: Path, arg1: number[], arg2: OpenOption[]): Path;

static write(arg0: Path, arg1: Iterable<CharSequence>, arg2: Charset, arg3: OpenOption[]): Path;

static write(arg0: Path, arg1: Iterable<CharSequence>, arg2: OpenOption[]): Path;

static writeString(arg0: Path, arg1: CharSequence, arg2: OpenOption[]): Path;

static writeString(arg0: Path, arg1: CharSequence, arg2: Charset, arg3: OpenOption[]): Path;

static list(arg0: Path): Stream<Path>;

static walk(arg0: Path, arg1: number, arg2: FileVisitOption[]): Stream<Path>;

static walk(arg0: Path, arg1: FileVisitOption[]): Stream<Path>;

static find(arg0: Path, arg1: number, arg2: BiPredicate<Path, BasicFileAttributes>, arg3: FileVisitOption[]): Stream<Path>;

static lines(arg0: Path, arg1: Charset): Stream<String>;

static lines(arg0: Path): Stream<String>;
 }

export class InvalidPathException extends IllegalArgumentException {
constructor(arg0: String, arg1: String, arg2: number);
constructor(arg0: String, arg1: String);

getInput(): String;

getReason(): String;

getIndex(): number;

getMessage(): String;
 }

export class LinkOption extends Enum<LinkOption> implements OpenOption, CopyOption {
static NOFOLLOW_LINKS:LinkOption

static values(): LinkOption[];

static valueOf(arg0: String): LinkOption;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class LinkPermission extends BasicPermission {
constructor(arg0: String);
constructor(arg0: String, arg1: String);
 }

export class NoSuchFileException extends FileSystemException {
constructor(arg0: String);
constructor(arg0: String, arg1: String, arg2: String);
 }

export class NotDirectoryException extends FileSystemException {
constructor(arg0: String);
 }

export class NotLinkException extends FileSystemException {
constructor(arg0: String);
constructor(arg0: String, arg1: String, arg2: String);
 }

export interface OpenOption {
 }

export namespace Path { 
function 
/* default */ of(arg0: String, arg1: String[]): Path;
function 
/* default */ of(arg0: URI): Path;
}

export interface Path extends Comparable<Path>, Iterable<Path>, Watchable, Object {

getFileSystem(): FileSystem;

isAbsolute(): boolean;

getRoot(): Path;

getFileName(): Path;

getParent(): Path;

getNameCount(): number;

getName(arg0: number): Path;

subpath(arg0: number, arg1: number): Path;

startsWith(arg0: Path): boolean;

/* default */ startsWith(arg0: String): boolean;

endsWith(arg0: Path): boolean;

/* default */ endsWith(arg0: String): boolean;

normalize(): Path;

resolve(arg0: Path): Path;

/* default */ resolve(arg0: String): Path;

/* default */ resolveSibling(arg0: Path): Path;

/* default */ resolveSibling(arg0: String): Path;

relativize(arg0: Path): Path;

toUri(): URI;

toAbsolutePath(): Path;

toRealPath(arg0: LinkOption[]): Path;

/* default */ toFile(): File;

register(arg0: WatchService, arg1: WatchEvent.Kind<any>[], arg2: WatchEvent.Modifier[]): WatchKey;

/* default */ register(arg0: WatchService, arg1: WatchEvent.Kind<any>[]): WatchKey;

/* default */ iterator(): Iterator<Path>;

compareTo(arg0: Path): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export interface PathMatcher {

matches(arg0: Path): boolean;
 }

export class Paths {

static get(arg0: String, arg1: String[]): Path;

static get(arg0: URI): Path;
 }

export class ProviderMismatchException extends IllegalArgumentException {
constructor();
constructor(arg0: String);
 }

export class ProviderNotFoundException extends RuntimeException {
constructor();
constructor(arg0: String);
 }

export class ReadOnlyFileSystemException extends UnsupportedOperationException {
constructor();
 }

export interface SecureDirectoryStream<T extends Object> extends DirectoryStream<T>, Object {

newDirectoryStream(arg0: T, arg1: LinkOption[]): SecureDirectoryStream<T>;

newByteChannel(arg0: T, arg1: Set<OpenOption>, arg2: FileAttribute<any>[]): SeekableByteChannel;

deleteFile(arg0: T): void;

deleteDirectory(arg0: T): void;

move(arg0: T, arg1: SecureDirectoryStream<T>, arg2: T): void;

getFileAttributeView<V extends FileAttributeView>(arg0: Class<V>): V;

getFileAttributeView<V extends FileAttributeView>(arg0: T, arg1: Class<V>, arg2: LinkOption[]): V;
 }

export class SimpleFileVisitor<T extends Object> extends Object implements FileVisitor<T> {

preVisitDirectory(arg0: T, arg1: BasicFileAttributes): FileVisitResult;

visitFile(arg0: T, arg1: BasicFileAttributes): FileVisitResult;

visitFileFailed(arg0: T, arg1: IOException): FileVisitResult;

postVisitDirectory(arg0: T, arg1: IOException): FileVisitResult;
 }

export class StandardCopyOption extends Enum<StandardCopyOption> implements CopyOption {
static REPLACE_EXISTING:StandardCopyOption
static COPY_ATTRIBUTES:StandardCopyOption
static ATOMIC_MOVE:StandardCopyOption

static values(): StandardCopyOption[];

static valueOf(arg0: String): StandardCopyOption;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class StandardOpenOption extends Enum<StandardOpenOption> implements OpenOption {
static READ:StandardOpenOption
static WRITE:StandardOpenOption
static APPEND:StandardOpenOption
static TRUNCATE_EXISTING:StandardOpenOption
static CREATE:StandardOpenOption
static CREATE_NEW:StandardOpenOption
static DELETE_ON_CLOSE:StandardOpenOption
static SPARSE:StandardOpenOption
static SYNC:StandardOpenOption
static DSYNC:StandardOpenOption

static values(): StandardOpenOption[];

static valueOf(arg0: String): StandardOpenOption;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class StandardWatchEventKinds {
static OVERFLOW:WatchEvent.Kind<Object>
static ENTRY_CREATE:WatchEvent.Kind<Path>
static ENTRY_DELETE:WatchEvent.Kind<Path>
static ENTRY_MODIFY:WatchEvent.Kind<Path>
 }

export interface WatchEvent<T extends Object> extends Object {

kind(): WatchEvent.Kind<T>;

count(): number;

context(): T;
 }
export namespace WatchEvent { 
export interface Kind<T extends Object> extends Object {

name(): String;

type(): Class<T>;
 }

export interface Modifier {

name(): String;
 }

}

export interface WatchKey {

isValid(): boolean;

pollEvents(): List<WatchEvent<any>>;

reset(): boolean;

cancel(): void;

watchable(): Watchable;
 }

export interface WatchService extends Closeable {

close(): void;

poll(): WatchKey;

poll(arg0: number, arg1: TimeUnit): WatchKey;

take(): WatchKey;
 }

export interface Watchable {

register(arg0: WatchService, arg1: WatchEvent.Kind<any>[], arg2: WatchEvent.Modifier[]): WatchKey;

register(arg0: WatchService, arg1: WatchEvent.Kind<any>[]): WatchKey;
 }

}
