/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.util.jar.d.ts" />
declare module '@afterburnerhq/java.lang.instrument' { 
import { ProtectionDomain } from '@afterburnerhq/java.security'
import { ClassLoader, Class, String, RuntimeException, Module, Exception } from '@afterburnerhq/java.lang'
import { Map, List, Set } from '@afterburnerhq/java.util'
import { JarFile } from '@afterburnerhq/java.util.jar'
export class ClassDefinition {
constructor(arg0: Class<any>, arg1: number[]);

getDefinitionClass(): Class<any>;

getDefinitionClassFile(): number[];
 }

export interface ClassFileTransformer {

/* default */ transform(arg0: ClassLoader, arg1: String, arg2: Class<any>, arg3: ProtectionDomain, arg4: number[]): number[];

/* default */ transform(arg0: Module, arg1: ClassLoader, arg2: String, arg3: Class<any>, arg4: ProtectionDomain, arg5: number[]): number[];
 }

export class IllegalClassFormatException extends Exception {
constructor();
constructor(arg0: String);
 }

export interface Instrumentation {

addTransformer(arg0: ClassFileTransformer, arg1: boolean): void;

addTransformer(arg0: ClassFileTransformer): void;

removeTransformer(arg0: ClassFileTransformer): boolean;

isRetransformClassesSupported(): boolean;

retransformClasses(arg0: Class<any>[]): void;

isRedefineClassesSupported(): boolean;

redefineClasses(arg0: ClassDefinition[]): void;

isModifiableClass(arg0: Class<any>): boolean;

getAllLoadedClasses(): Class[];

getInitiatedClasses(arg0: ClassLoader): Class[];

getObjectSize(arg0: Object): number;

appendToBootstrapClassLoaderSearch(arg0: JarFile): void;

appendToSystemClassLoaderSearch(arg0: JarFile): void;

isNativeMethodPrefixSupported(): boolean;

setNativeMethodPrefix(arg0: ClassFileTransformer, arg1: String): void;

redefineModule(arg0: Module, arg1: Set<Module>, arg2: Map<String, Set<Module>>, arg3: Map<String, Set<Module>>, arg4: Set<Class<any>>, arg5: Map<Class<any>, List<Class<any>>>): void;

isModifiableModule(arg0: Module): boolean;
 }

export class UnmodifiableClassException extends Exception {
constructor();
constructor(arg0: String);
 }

export class UnmodifiableModuleException extends RuntimeException {
constructor();
constructor(arg0: String);
 }

}
