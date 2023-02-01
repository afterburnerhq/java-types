/// <reference path="java.lang.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.util.stream.d.ts" />
/// <reference path="java.util.function.d.ts" />
declare module '@afterburnerhq/java.util.regex' { 
import { CharSequence, StringBuffer, String, StringBuilder, IllegalArgumentException } from '@afterburnerhq/java.lang'
import { Serializable } from '@afterburnerhq/java.io'
import { Stream } from '@afterburnerhq/java.util.stream'
import { Function, Predicate } from '@afterburnerhq/java.util.function'
export interface MatchResult {

start(): number;

start(arg0: number): number;

end(): number;

end(arg0: number): number;

group(): String;

group(arg0: number): String;

groupCount(): number;
 }

export class Matcher implements MatchResult {

pattern(): Pattern;

toMatchResult(): MatchResult;

usePattern(arg0: Pattern): Matcher;

reset(): Matcher;

reset(arg0: CharSequence): Matcher;

start(): number;

start(arg0: number): number;

start(arg0: String): number;

end(): number;

end(arg0: number): number;

end(arg0: String): number;

group(): String;

group(arg0: number): String;

group(arg0: String): String;

groupCount(): number;

matches(): boolean;

find(): boolean;

find(arg0: number): boolean;

lookingAt(): boolean;

static quoteReplacement(arg0: String): String;

appendReplacement(arg0: StringBuffer, arg1: String): Matcher;

appendReplacement(arg0: StringBuilder, arg1: String): Matcher;

appendTail(arg0: StringBuffer): StringBuffer;

appendTail(arg0: StringBuilder): StringBuilder;

replaceAll(arg0: String): String;

replaceAll(arg0: Function<MatchResult, String>): String;

results(): Stream<MatchResult>;

replaceFirst(arg0: String): String;

replaceFirst(arg0: Function<MatchResult, String>): String;

region(arg0: number, arg1: number): Matcher;

regionStart(): number;

regionEnd(): number;

hasTransparentBounds(): boolean;

useTransparentBounds(arg0: boolean): Matcher;

hasAnchoringBounds(): boolean;

useAnchoringBounds(arg0: boolean): Matcher;
toString(): string;

hitEnd(): boolean;

requireEnd(): boolean;
 }

export class Pattern implements Serializable {
static UNIX_LINES:number
static CASE_INSENSITIVE:number
static COMMENTS:number
static MULTILINE:number
static LITERAL:number
static DOTALL:number
static UNICODE_CASE:number
static CANON_EQ:number
static UNICODE_CHARACTER_CLASS:number

static compile(arg0: String): Pattern;

static compile(arg0: String, arg1: number): Pattern;

pattern(): String;
toString(): string;

matcher(arg0: CharSequence): Matcher;

flags(): number;

static matches(arg0: String, arg1: CharSequence): boolean;

split(arg0: CharSequence, arg1: number): String[];

split(arg0: CharSequence): String[];

static quote(arg0: String): String;

asPredicate(): Predicate<String>;

asMatchPredicate(): Predicate<String>;

splitAsStream(arg0: CharSequence): Stream<String>;
 }

export class PatternSyntaxException extends IllegalArgumentException {
constructor(arg0: String, arg1: String, arg2: number);

getIndex(): number;

getDescription(): String;

getPattern(): String;

getMessage(): String;
 }

}
