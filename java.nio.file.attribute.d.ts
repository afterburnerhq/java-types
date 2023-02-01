/// <reference path="java.security.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.time.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.util.concurrent.d.ts" />
/// <reference path="java.nio.d.ts" />
declare module '@afterburnerhq/java.nio.file.attribute' { 
import { Principal } from '@afterburnerhq/java.security'
import { List, Set } from '@afterburnerhq/java.util'
import { Enum, Class, Comparable, String } from '@afterburnerhq/java.lang'
import { Instant } from '@afterburnerhq/java.time'
import { IOException } from '@afterburnerhq/java.io'
import { TimeUnit } from '@afterburnerhq/java.util.concurrent'
import { ByteBuffer } from '@afterburnerhq/java.nio'
export class AclEntry {

static newBuilder(): AclEntry.Builder;

static newBuilder(arg0: AclEntry): AclEntry.Builder;

type(): AclEntryType;

principal(): UserPrincipal;

permissions(): Set<AclEntryPermission>;

flags(): Set<AclEntryFlag>;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }
export namespace AclEntry { 
export class Builder {

build(): AclEntry;

setType(arg0: AclEntryType): AclEntry.Builder;

setPrincipal(arg0: UserPrincipal): AclEntry.Builder;

setPermissions(arg0: Set<AclEntryPermission>): AclEntry.Builder;

setPermissions(arg0: AclEntryPermission[]): AclEntry.Builder;

setFlags(arg0: Set<AclEntryFlag>): AclEntry.Builder;

setFlags(arg0: AclEntryFlag[]): AclEntry.Builder;
 }

}

export class AclEntryFlag extends Enum<AclEntryFlag> {
static FILE_INHERIT:AclEntryFlag
static DIRECTORY_INHERIT:AclEntryFlag
static NO_PROPAGATE_INHERIT:AclEntryFlag
static INHERIT_ONLY:AclEntryFlag

static values(): AclEntryFlag[];

static valueOf(arg0: String): AclEntryFlag;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class AclEntryPermission extends Enum<AclEntryPermission> {
static READ_DATA:AclEntryPermission
static WRITE_DATA:AclEntryPermission
static APPEND_DATA:AclEntryPermission
static READ_NAMED_ATTRS:AclEntryPermission
static WRITE_NAMED_ATTRS:AclEntryPermission
static EXECUTE:AclEntryPermission
static DELETE_CHILD:AclEntryPermission
static READ_ATTRIBUTES:AclEntryPermission
static WRITE_ATTRIBUTES:AclEntryPermission
static DELETE:AclEntryPermission
static READ_ACL:AclEntryPermission
static WRITE_ACL:AclEntryPermission
static WRITE_OWNER:AclEntryPermission
static SYNCHRONIZE:AclEntryPermission
static LIST_DIRECTORY:AclEntryPermission
static ADD_FILE:AclEntryPermission
static ADD_SUBDIRECTORY:AclEntryPermission

static values(): AclEntryPermission[];

static valueOf(arg0: String): AclEntryPermission;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class AclEntryType extends Enum<AclEntryType> {
static ALLOW:AclEntryType
static DENY:AclEntryType
static AUDIT:AclEntryType
static ALARM:AclEntryType

static values(): AclEntryType[];

static valueOf(arg0: String): AclEntryType;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export interface AclFileAttributeView extends FileOwnerAttributeView {

name(): String;

getAcl(): List<AclEntry>;

setAcl(arg0: List<AclEntry>): void;
 }

export interface AttributeView {

name(): String;
 }

export interface BasicFileAttributeView extends FileAttributeView {

name(): String;

readAttributes(): BasicFileAttributes;

setTimes(arg0: FileTime, arg1: FileTime, arg2: FileTime): void;
 }

export interface BasicFileAttributes {

lastModifiedTime(): FileTime;

lastAccessTime(): FileTime;

creationTime(): FileTime;

isRegularFile(): boolean;

isDirectory(): boolean;

isSymbolicLink(): boolean;

isOther(): boolean;

size(): number;

fileKey(): Object;
 }

export interface DosFileAttributeView extends BasicFileAttributeView {

name(): String;

readAttributes(): DosFileAttributes;

setReadOnly(arg0: boolean): void;

setHidden(arg0: boolean): void;

setSystem(arg0: boolean): void;

setArchive(arg0: boolean): void;
 }

export interface DosFileAttributes extends BasicFileAttributes {

isReadOnly(): boolean;

isHidden(): boolean;

isArchive(): boolean;

isSystem(): boolean;
 }

export interface FileAttribute<T extends Object> extends Object {

name(): String;

value(): T;
 }

export interface FileAttributeView extends AttributeView {
 }

export interface FileOwnerAttributeView extends FileAttributeView {

name(): String;

getOwner(): UserPrincipal;

setOwner(arg0: UserPrincipal): void;
 }

export interface FileStoreAttributeView extends AttributeView {
 }

export class FileTime extends Object implements Comparable<FileTime> {

static from(arg0: number, arg1: TimeUnit): FileTime;

static fromMillis(arg0: number): FileTime;

static from(arg0: Instant): FileTime;

to(arg0: TimeUnit): number;

toMillis(): number;

toInstant(): Instant;

equals(arg0: Object): boolean;

hashCode(): number;

compareTo(arg0: FileTime): number;
toString(): string;
 }

export interface GroupPrincipal extends UserPrincipal {
 }

export interface PosixFileAttributeView extends BasicFileAttributeView, FileOwnerAttributeView {

name(): String;

readAttributes(): PosixFileAttributes;

setPermissions(arg0: Set<PosixFilePermission>): void;

setGroup(arg0: GroupPrincipal): void;
 }

export interface PosixFileAttributes extends BasicFileAttributes {

owner(): UserPrincipal;

group(): GroupPrincipal;

permissions(): Set<PosixFilePermission>;
 }

export class PosixFilePermission extends Enum<PosixFilePermission> {
static OWNER_READ:PosixFilePermission
static OWNER_WRITE:PosixFilePermission
static OWNER_EXECUTE:PosixFilePermission
static GROUP_READ:PosixFilePermission
static GROUP_WRITE:PosixFilePermission
static GROUP_EXECUTE:PosixFilePermission
static OTHERS_READ:PosixFilePermission
static OTHERS_WRITE:PosixFilePermission
static OTHERS_EXECUTE:PosixFilePermission

static values(): PosixFilePermission[];

static valueOf(arg0: String): PosixFilePermission;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class PosixFilePermissions {

static toString(arg0: Set<PosixFilePermission>): String;

static fromString(arg0: String): Set<PosixFilePermission>;

static asFileAttribute(arg0: Set<PosixFilePermission>): FileAttribute<Set<PosixFilePermission>>;
 }

export interface UserDefinedFileAttributeView extends FileAttributeView {

name(): String;

list(): List<String>;

size(arg0: String): number;

read(arg0: String, arg1: ByteBuffer): number;

write(arg0: String, arg1: ByteBuffer): number;

delete(arg0: String): void;
 }

export interface UserPrincipal extends Principal {
 }

export abstract class UserPrincipalLookupService {

abstract lookupPrincipalByName(arg0: String): UserPrincipal;

abstract lookupPrincipalByGroupName(arg0: String): GroupPrincipal;
 }

export class UserPrincipalNotFoundException extends IOException {
constructor(arg0: String);

getName(): String;
 }

}
