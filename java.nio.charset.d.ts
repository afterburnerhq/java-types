/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.nio.d.ts" />
declare module '@afterburnerhq/java.nio.charset' { 
import { CharSequence, Error, Comparable, String, Exception, IllegalArgumentException } from '@afterburnerhq/java.lang'
import { Locale, SortedMap, Set } from '@afterburnerhq/java.util'
import { IOException } from '@afterburnerhq/java.io'
import { CharBuffer, ByteBuffer } from '@afterburnerhq/java.nio'
export class CharacterCodingException extends IOException {
constructor();
 }

export abstract class Charset extends Object implements Comparable<Charset> {

static isSupported(arg0: String): boolean;

static forName(arg0: String): Charset;

static availableCharsets(): SortedMap<String, Charset>;

static defaultCharset(): Charset;

name(): String;

aliases(): Set<String>;

displayName(): String;

isRegistered(): boolean;

displayName(arg0: Locale): String;

abstract contains(arg0: Charset): boolean;

abstract newDecoder(): CharsetDecoder;

abstract newEncoder(): CharsetEncoder;

canEncode(): boolean;

decode(arg0: ByteBuffer): CharBuffer;

encode(arg0: CharBuffer): ByteBuffer;

encode(arg0: String): ByteBuffer;

compareTo(arg0: Charset): number;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;
 }

export abstract class CharsetDecoder {

charset(): Charset;

replacement(): String;

replaceWith(arg0: String): CharsetDecoder;

malformedInputAction(): CodingErrorAction;

onMalformedInput(arg0: CodingErrorAction): CharsetDecoder;

unmappableCharacterAction(): CodingErrorAction;

onUnmappableCharacter(arg0: CodingErrorAction): CharsetDecoder;

averageCharsPerByte(): number;

maxCharsPerByte(): number;

decode(arg0: ByteBuffer, arg1: CharBuffer, arg2: boolean): CoderResult;

flush(arg0: CharBuffer): CoderResult;

reset(): CharsetDecoder;

decode(arg0: ByteBuffer): CharBuffer;

isAutoDetecting(): boolean;

isCharsetDetected(): boolean;

detectedCharset(): Charset;
 }

export abstract class CharsetEncoder {

charset(): Charset;

replacement(): number[];

replaceWith(arg0: number[]): CharsetEncoder;

isLegalReplacement(arg0: number[]): boolean;

malformedInputAction(): CodingErrorAction;

onMalformedInput(arg0: CodingErrorAction): CharsetEncoder;

unmappableCharacterAction(): CodingErrorAction;

onUnmappableCharacter(arg0: CodingErrorAction): CharsetEncoder;

averageBytesPerChar(): number;

maxBytesPerChar(): number;

encode(arg0: CharBuffer, arg1: ByteBuffer, arg2: boolean): CoderResult;

flush(arg0: ByteBuffer): CoderResult;

reset(): CharsetEncoder;

encode(arg0: CharBuffer): ByteBuffer;

canEncode(arg0: String): boolean;

canEncode(arg0: CharSequence): boolean;
 }

export class CoderMalfunctionError extends Error {
constructor(arg0: Exception);
 }

export class CoderResult {
static UNDERFLOW:CoderResult
static OVERFLOW:CoderResult
toString(): string;

isUnderflow(): boolean;

isOverflow(): boolean;

isError(): boolean;

isMalformed(): boolean;

isUnmappable(): boolean;

length(): number;

static malformedForLength(arg0: number): CoderResult;

static unmappableForLength(arg0: number): CoderResult;

throwException(): void;
 }

export class CodingErrorAction {
static IGNORE:CodingErrorAction
static REPLACE:CodingErrorAction
static REPORT:CodingErrorAction
toString(): string;
 }

export class IllegalCharsetNameException extends IllegalArgumentException {
constructor(arg0: String);

getCharsetName(): String;
 }

export class MalformedInputException extends CharacterCodingException {
constructor(arg0: number);

getInputLength(): number;

getMessage(): String;
 }

export class StandardCharsets {
static US_ASCII:Charset
static ISO_8859_1:Charset
static UTF_8:Charset
static UTF_16BE:Charset
static UTF_16LE:Charset
static UTF_16:Charset
 }

export class UnmappableCharacterException extends CharacterCodingException {
constructor(arg0: number);

getInputLength(): number;

getMessage(): String;
 }

export class UnsupportedCharsetException extends IllegalArgumentException {
constructor(arg0: String);

getCharsetName(): String;
 }

}
