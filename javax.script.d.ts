/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/javax.script' { 
import { Integer, ClassLoader, Class, String, Exception } from '@afterburnerhq/java.lang'
import { Collection, List, Set, Map } from '@afterburnerhq/java.util'
import { Reader, Writer } from '@afterburnerhq/java.io'
export abstract class AbstractScriptEngine implements ScriptEngine {
constructor();
constructor(arg0: Bindings);

setContext(arg0: ScriptContext): void;

getContext(): ScriptContext;

getBindings(arg0: number): Bindings;

setBindings(arg0: Bindings, arg1: number): void;

put(arg0: String, arg1: Object): void;

get(arg0: String): Object;

eval(arg0: Reader, arg1: Bindings): Object;

eval(arg0: String, arg1: Bindings): Object;

eval(arg0: Reader): Object;

eval(arg0: String): Object;
 }

export interface Bindings extends Map<String, Object>, Object {

put(arg0: String, arg1: Object): Object;

putAll(arg0: Map<String, Object>): void;

containsKey(arg0: Object): boolean;

get(arg0: Object): Object;

remove(arg0: Object): Object;
 }

export interface Compilable {

compile(arg0: String): CompiledScript;

compile(arg0: Reader): CompiledScript;
 }

export abstract class CompiledScript {
constructor();

abstract eval(arg0: ScriptContext): Object;

eval(arg0: Bindings): Object;

eval(): Object;

abstract getEngine(): ScriptEngine;
 }

export interface Invocable {

invokeMethod(arg0: Object, arg1: String, arg2: Object[]): Object;

invokeFunction(arg0: String, arg1: Object[]): Object;

getInterface<T extends Object>(arg0: Class<T>): T;

getInterface<T extends Object>(arg0: Object, arg1: Class<T>): T;
 }

export namespace ScriptContext { 
const ENGINE_SCOPE:number
const GLOBAL_SCOPE:number
}

export interface ScriptContext {
ENGINE_SCOPE:number
GLOBAL_SCOPE:number

setBindings(arg0: Bindings, arg1: number): void;

getBindings(arg0: number): Bindings;

setAttribute(arg0: String, arg1: Object, arg2: number): void;

getAttribute(arg0: String, arg1: number): Object;

removeAttribute(arg0: String, arg1: number): Object;

getAttribute(arg0: String): Object;

getAttributesScope(arg0: String): number;

getWriter(): Writer;

getErrorWriter(): Writer;

setWriter(arg0: Writer): void;

setErrorWriter(arg0: Writer): void;

getReader(): Reader;

setReader(arg0: Reader): void;

getScopes(): List<Number>;
 }

export namespace ScriptEngine { 
const ARGV:String
const FILENAME:String
const ENGINE:String
const ENGINE_VERSION:String
const NAME:String
const LANGUAGE:String
const LANGUAGE_VERSION:String
}

export interface ScriptEngine {
ARGV:String
FILENAME:String
ENGINE:String
ENGINE_VERSION:String
NAME:String
LANGUAGE:String
LANGUAGE_VERSION:String

eval(arg0: String, arg1: ScriptContext): Object;

eval(arg0: Reader, arg1: ScriptContext): Object;

eval(arg0: String): Object;

eval(arg0: Reader): Object;

eval(arg0: String, arg1: Bindings): Object;

eval(arg0: Reader, arg1: Bindings): Object;

put(arg0: String, arg1: Object): void;

get(arg0: String): Object;

getBindings(arg0: number): Bindings;

setBindings(arg0: Bindings, arg1: number): void;

createBindings(): Bindings;

getContext(): ScriptContext;

setContext(arg0: ScriptContext): void;

getFactory(): ScriptEngineFactory;
 }

export interface ScriptEngineFactory {

getEngineName(): String;

getEngineVersion(): String;

getExtensions(): List<String>;

getMimeTypes(): List<String>;

getNames(): List<String>;

getLanguageName(): String;

getLanguageVersion(): String;

getParameter(arg0: String): Object;

getMethodCallSyntax(arg0: String, arg1: String, arg2: String[]): String;

getOutputStatement(arg0: String): String;

getProgram(arg0: String[]): String;

getScriptEngine(): ScriptEngine;
 }

export class ScriptEngineManager {
constructor();
constructor(arg0: ClassLoader);

setBindings(arg0: Bindings): void;

getBindings(): Bindings;

put(arg0: String, arg1: Object): void;

get(arg0: String): Object;

getEngineByName(arg0: String): ScriptEngine;

getEngineByExtension(arg0: String): ScriptEngine;

getEngineByMimeType(arg0: String): ScriptEngine;

getEngineFactories(): List<ScriptEngineFactory>;

registerEngineName(arg0: String, arg1: ScriptEngineFactory): void;

registerEngineMimeType(arg0: String, arg1: ScriptEngineFactory): void;

registerEngineExtension(arg0: String, arg1: ScriptEngineFactory): void;
 }

export class ScriptException extends Exception {
constructor(arg0: String);
constructor(arg0: Exception);
constructor(arg0: String, arg1: String, arg2: number);
constructor(arg0: String, arg1: String, arg2: number, arg3: number);

getMessage(): String;

getLineNumber(): number;

getColumnNumber(): number;

getFileName(): String;
 }

export interface SimpleBindings extends Bindings { }
export class SimpleBindings implements Bindings {
constructor(arg0: Map<String, Object>);
constructor();

put(arg0: String, arg1: Object): Object;

putAll(arg0: Map<String, Object>): void;

clear(): void;

containsKey(arg0: Object): boolean;

containsValue(arg0: Object): boolean;

entrySet(): Set<Map.Entry<String, Object>>;

get(arg0: Object): Object;

isEmpty(): boolean;

keySet(): Set<String>;

remove(arg0: Object): Object;

size(): number;

values(): Collection<Object>;
 }

export class SimpleScriptContext implements ScriptContext {
constructor();

setBindings(arg0: Bindings, arg1: number): void;

getAttribute(arg0: String): Object;

getAttribute(arg0: String, arg1: number): Object;

removeAttribute(arg0: String, arg1: number): Object;

setAttribute(arg0: String, arg1: Object, arg2: number): void;

getWriter(): Writer;

getReader(): Reader;

setReader(arg0: Reader): void;

setWriter(arg0: Writer): void;

getErrorWriter(): Writer;

setErrorWriter(arg0: Writer): void;

getAttributesScope(arg0: String): number;

getBindings(arg0: number): Bindings;

getScopes(): List<Number>;
 }

}
