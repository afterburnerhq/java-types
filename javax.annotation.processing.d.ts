/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="javax.lang.model.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.lang.model.d.ts" />
/// <reference path="javax.tools.d.ts" />
/// <reference path="java.lang.annotation.d.ts" />
/// <reference path="javax.lang.model.element.d.ts" />
declare module '@afterburnerhq/javax.annotation.processing' { 
import { Locale, Map, Set } from '@afterburnerhq/java.util'
import { CharSequence, Class, String, Iterable } from '@afterburnerhq/java.lang'
import { Elements, Types } from '@afterburnerhq/javax.lang.model.util'
import { IOException } from '@afterburnerhq/java.io'
import { SourceVersion } from '@afterburnerhq/javax.lang.model'
import { JavaFileObject, Diagnostic, FileObject, JavaFileManager } from '@afterburnerhq/javax.tools'
import { Annotation } from '@afterburnerhq/java.lang.annotation'
import { AnnotationMirror, AnnotationValue, TypeElement, Element, ExecutableElement } from '@afterburnerhq/javax.lang.model.element'
export abstract class AbstractProcessor implements Processor {

getSupportedOptions(): Set<String>;

getSupportedAnnotationTypes(): Set<String>;

getSupportedSourceVersion(): SourceVersion;

init(arg0: ProcessingEnvironment): void;

abstract process(arg0: Set<TypeElement>, arg1: RoundEnvironment): boolean;

getCompletions(arg0: Element, arg1: AnnotationMirror, arg2: ExecutableElement, arg3: String): Iterable<Completion>;
 }

export interface Completion {

getValue(): String;

getMessage(): String;
 }

export class Completions {

static of(arg0: String, arg1: String): Completion;

static of(arg0: String): Completion;
 }

export interface Filer {

createSourceFile(arg0: CharSequence, arg1: Element[]): JavaFileObject;

createClassFile(arg0: CharSequence, arg1: Element[]): JavaFileObject;

createResource(arg0: JavaFileManager.Location, arg1: CharSequence, arg2: CharSequence, arg3: Element[]): FileObject;

getResource(arg0: JavaFileManager.Location, arg1: CharSequence, arg2: CharSequence): FileObject;
 }

export class FilerException extends IOException {
constructor(arg0: String);
 }


export interface Messager {

printMessage(arg0: Diagnostic.Kind, arg1: CharSequence): void;

printMessage(arg0: Diagnostic.Kind, arg1: CharSequence, arg2: Element): void;

printMessage(arg0: Diagnostic.Kind, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror): void;

printMessage(arg0: Diagnostic.Kind, arg1: CharSequence, arg2: Element, arg3: AnnotationMirror, arg4: AnnotationValue): void;
 }

export interface ProcessingEnvironment {

getOptions(): Map<String, String>;

getMessager(): Messager;

getFiler(): Filer;

getElementUtils(): Elements;

getTypeUtils(): Types;

getSourceVersion(): SourceVersion;

getLocale(): Locale;

/* default */ isPreviewEnabled(): boolean;
 }

export interface Processor {

getSupportedOptions(): Set<String>;

getSupportedAnnotationTypes(): Set<String>;

getSupportedSourceVersion(): SourceVersion;

init(arg0: ProcessingEnvironment): void;

process(arg0: Set<TypeElement>, arg1: RoundEnvironment): boolean;

getCompletions(arg0: Element, arg1: AnnotationMirror, arg2: ExecutableElement, arg3: String): Iterable<Completion>;
 }

export interface RoundEnvironment {

processingOver(): boolean;

errorRaised(): boolean;

getRootElements(): Set<Element>;

getElementsAnnotatedWith(arg0: TypeElement): Set<Element>;

/* default */ getElementsAnnotatedWithAny(arg0: TypeElement[]): Set<Element>;

getElementsAnnotatedWith(arg0: Class<Annotation>): Set<Element>;

/* default */ getElementsAnnotatedWithAny(arg0: Set<Class<Annotation>>): Set<Element>;
 }




}
