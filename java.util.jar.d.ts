/// <reference path="java.security.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.util.stream.d.ts" />
/// <reference path="java.util.zip.d.ts" />
/// <reference path="java.security.cert.d.ts" />
declare module '@afterburnerhq/java.util.jar' { 
import { CodeSigner } from '@afterburnerhq/java.security'
import { Collection, Set, Enumeration, Map } from '@afterburnerhq/java.util'
import { Cloneable, Runtime, String } from '@afterburnerhq/java.lang'
import { File, InputStream, OutputStream } from '@afterburnerhq/java.io'
import { Stream } from '@afterburnerhq/java.util.stream'
import { ZipException, ZipInputStream, ZipFile, ZipOutputStream, ZipEntry } from '@afterburnerhq/java.util.zip'
import { Certificate } from '@afterburnerhq/java.security.cert'
export interface Attributes extends Map<Object, Object>, Cloneable { }
export class Attributes extends Object implements Map<Object, Object>, Cloneable {
constructor();
constructor(arg0: number);
constructor(arg0: Attributes);

get(arg0: Object): Object;

getValue(arg0: String): String;

getValue(arg0: Attributes.Name): String;

put(arg0: Object, arg1: Object): Object;

putValue(arg0: String, arg1: String): String;

remove(arg0: Object): Object;

containsValue(arg0: Object): boolean;

containsKey(arg0: Object): boolean;

putAll(arg0: Map<any, any>): void;

clear(): void;

size(): number;

isEmpty(): boolean;

keySet(): Set<Object>;

values(): Collection<Object>;

entrySet(): Set<Map.Entry<Object, Object>>;

equals(arg0: Object): boolean;

hashCode(): number;

clone(): Object;
 }
export namespace Attributes { 
export class Name {
static MANIFEST_VERSION:Attributes.Name
static SIGNATURE_VERSION:Attributes.Name
static CONTENT_TYPE:Attributes.Name
static CLASS_PATH:Attributes.Name
static MAIN_CLASS:Attributes.Name
static SEALED:Attributes.Name
static EXTENSION_LIST:Attributes.Name
static EXTENSION_NAME:Attributes.Name
static EXTENSION_INSTALLATION:Attributes.Name
static IMPLEMENTATION_TITLE:Attributes.Name
static IMPLEMENTATION_VERSION:Attributes.Name
static IMPLEMENTATION_VENDOR:Attributes.Name
static IMPLEMENTATION_VENDOR_ID:Attributes.Name
static IMPLEMENTATION_URL:Attributes.Name
static SPECIFICATION_TITLE:Attributes.Name
static SPECIFICATION_VERSION:Attributes.Name
static SPECIFICATION_VENDOR:Attributes.Name
static MULTI_RELEASE:Attributes.Name
constructor(arg0: String);

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

}

export class JarEntry extends ZipEntry {
constructor(arg0: String);
constructor(arg0: ZipEntry);
constructor(arg0: JarEntry);

getAttributes(): Attributes;

getCertificates(): Certificate[];

getCodeSigners(): CodeSigner[];

getRealName(): String;
 }

export class JarException extends ZipException {
constructor();
constructor(arg0: String);
 }

export class JarFile extends ZipFile {
static MANIFEST_NAME:String
constructor(arg0: String);
constructor(arg0: String, arg1: boolean);
constructor(arg0: File);
constructor(arg0: File, arg1: boolean);
constructor(arg0: File, arg1: boolean, arg2: number);
constructor(arg0: File, arg1: boolean, arg2: number, arg3: Runtime.Version);

static baseVersion(): Runtime.Version;

static runtimeVersion(): Runtime.Version;

getVersion(): Runtime.Version;

isMultiRelease(): boolean;

getManifest(): Manifest;

getJarEntry(arg0: String): JarEntry;

getEntry(arg0: String): ZipEntry;

entries(): Enumeration<JarEntry>;

stream(): Stream<JarEntry>;

versionedStream(): Stream<JarEntry>;

getInputStream(arg0: ZipEntry): InputStream;
 }

export class JarInputStream extends ZipInputStream {
constructor(arg0: InputStream);
constructor(arg0: InputStream, arg1: boolean);

getManifest(): Manifest;

getNextEntry(): ZipEntry;

getNextJarEntry(): JarEntry;

read(arg0: number[], arg1: number, arg2: number): number;
 }

export class JarOutputStream extends ZipOutputStream {
constructor(arg0: OutputStream, arg1: Manifest);
constructor(arg0: OutputStream);

putNextEntry(arg0: ZipEntry): void;
 }

export class Manifest implements Cloneable {
constructor();
constructor(arg0: InputStream);
constructor(arg0: Manifest);

getMainAttributes(): Attributes;

getEntries(): Map<String, Attributes>;

getAttributes(arg0: String): Attributes;

clear(): void;

write(arg0: OutputStream): void;

read(arg0: InputStream): void;

equals(arg0: Object): boolean;

hashCode(): number;

clone(): Object;
 }

}
