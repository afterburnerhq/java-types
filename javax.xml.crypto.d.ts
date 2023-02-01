/// <reference path="javax.xml.crypto.dsig.keyinfo.d.ts" />
/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.security.spec.d.ts" />
declare module '@afterburnerhq/javax.xml.crypto' { 
import { KeyInfo } from '@afterburnerhq/javax.xml.crypto.dsig.keyinfo'
import { Key } from '@afterburnerhq/java.security'
import { Throwable, String, RuntimeException, Iterable, Exception } from '@afterburnerhq/java.lang'
import { Iterator } from '@afterburnerhq/java.util'
import { PrintStream, InputStream, PrintWriter } from '@afterburnerhq/java.io'
import { AlgorithmParameterSpec } from '@afterburnerhq/java.security.spec'
export interface AlgorithmMethod {

getAlgorithm(): String;

getParameterSpec(): AlgorithmParameterSpec;
 }

export interface Data {
 }

export abstract class KeySelector {

abstract select(arg0: KeyInfo, arg1: KeySelector.Purpose, arg2: AlgorithmMethod, arg3: XMLCryptoContext): KeySelectorResult;

static singletonKeySelector(arg0: Key): KeySelector;
 }
export namespace KeySelector { 
export class Purpose {
static SIGN:KeySelector.Purpose
static VERIFY:KeySelector.Purpose
static ENCRYPT:KeySelector.Purpose
static DECRYPT:KeySelector.Purpose
toString(): string;
 }

}

export class KeySelectorException extends Exception {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);

getCause(): Throwable;

printStackTrace(): void;

printStackTrace(arg0: PrintStream): void;

printStackTrace(arg0: PrintWriter): void;
 }

export interface KeySelectorResult {

getKey(): Key;
 }

export class MarshalException extends Exception {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);

getCause(): Throwable;

printStackTrace(): void;

printStackTrace(arg0: PrintStream): void;

printStackTrace(arg0: PrintWriter): void;
 }

export class NoSuchMechanismException extends RuntimeException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);

getCause(): Throwable;

printStackTrace(): void;

printStackTrace(arg0: PrintStream): void;

printStackTrace(arg0: PrintWriter): void;
 }

export interface NodeSetData<T extends Object> extends Data, Iterable<T>, Object {

iterator(): Iterator<T>;
 }

export class OctetStreamData implements Data {
constructor(arg0: InputStream);
constructor(arg0: InputStream, arg1: String, arg2: String);

getOctetStream(): InputStream;

getURI(): String;

getMimeType(): String;
 }

export interface URIDereferencer {

dereference(arg0: URIReference, arg1: XMLCryptoContext): Data;
 }

export interface URIReference {

getURI(): String;

getType(): String;
 }

export class URIReferenceException extends Exception {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: String, arg1: Throwable, arg2: URIReference);
constructor(arg0: Throwable);

getURIReference(): URIReference;

getCause(): Throwable;

printStackTrace(): void;

printStackTrace(arg0: PrintStream): void;

printStackTrace(arg0: PrintWriter): void;
 }

export interface XMLCryptoContext {

getBaseURI(): String;

setBaseURI(arg0: String): void;

getKeySelector(): KeySelector;

setKeySelector(arg0: KeySelector): void;

getURIDereferencer(): URIDereferencer;

setURIDereferencer(arg0: URIDereferencer): void;

getNamespacePrefix(arg0: String, arg1: String): String;

putNamespacePrefix(arg0: String, arg1: String): String;

getDefaultNamespacePrefix(): String;

setDefaultNamespacePrefix(arg0: String): void;

setProperty(arg0: String, arg1: Object): Object;

getProperty(arg0: String): Object;

get(arg0: Object): Object;

put(arg0: Object, arg1: Object): Object;
 }

export interface XMLStructure {

isFeatureSupported(arg0: String): boolean;
 }

}
