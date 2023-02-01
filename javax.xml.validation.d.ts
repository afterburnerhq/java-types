/// <reference path="java.lang.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="org.w3c.dom.d.ts" />
/// <reference path="org.w3c.dom.ls.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="org.xml.sax.d.ts" />
/// <reference path="javax.xml.transform.d.ts" />
declare module '@afterburnerhq/javax.xml.validation' { 
import { ClassLoader, Error, Throwable, String } from '@afterburnerhq/java.lang'
import { URL } from '@afterburnerhq/java.net'
import { TypeInfo } from '@afterburnerhq/org.w3c.dom'
import { LSResourceResolver } from '@afterburnerhq/org.w3c.dom.ls'
import { File } from '@afterburnerhq/java.io'
import { ErrorHandler, ContentHandler } from '@afterburnerhq/org.xml.sax'
import { Source, Result } from '@afterburnerhq/javax.xml.transform'
export abstract class Schema {

abstract newValidator(): Validator;

abstract newValidatorHandler(): ValidatorHandler;
 }

export abstract class SchemaFactory {

static newDefaultInstance(): SchemaFactory;

static newInstance(arg0: String): SchemaFactory;

static newInstance(arg0: String, arg1: String, arg2: ClassLoader): SchemaFactory;

abstract isSchemaLanguageSupported(arg0: String): boolean;

getFeature(arg0: String): boolean;

setFeature(arg0: String, arg1: boolean): void;

setProperty(arg0: String, arg1: Object): void;

getProperty(arg0: String): Object;

abstract setErrorHandler(arg0: ErrorHandler): void;

abstract getErrorHandler(): ErrorHandler;

abstract setResourceResolver(arg0: LSResourceResolver): void;

abstract getResourceResolver(): LSResourceResolver;

newSchema(arg0: Source): Schema;

newSchema(arg0: File): Schema;

newSchema(arg0: URL): Schema;

abstract newSchema(arg0: Source[]): Schema;

abstract newSchema(): Schema;
 }

export class SchemaFactoryConfigurationError extends Error {
constructor();
constructor(arg0: String);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
 }

export abstract class SchemaFactoryLoader {

abstract newFactory(arg0: String): SchemaFactory;
 }

export abstract class TypeInfoProvider {

abstract getElementTypeInfo(): TypeInfo;

abstract getAttributeTypeInfo(arg0: number): TypeInfo;

abstract isIdAttribute(arg0: number): boolean;

abstract isSpecified(arg0: number): boolean;
 }

export abstract class Validator {

abstract reset(): void;

validate(arg0: Source): void;

abstract validate(arg0: Source, arg1: Result): void;

abstract setErrorHandler(arg0: ErrorHandler): void;

abstract getErrorHandler(): ErrorHandler;

abstract setResourceResolver(arg0: LSResourceResolver): void;

abstract getResourceResolver(): LSResourceResolver;

getFeature(arg0: String): boolean;

setFeature(arg0: String, arg1: boolean): void;

setProperty(arg0: String, arg1: Object): void;

getProperty(arg0: String): Object;
 }

export interface ValidatorHandler extends ContentHandler { }
export abstract class ValidatorHandler implements ContentHandler {

abstract setContentHandler(arg0: ContentHandler): void;

abstract getContentHandler(): ContentHandler;

abstract setErrorHandler(arg0: ErrorHandler): void;

abstract getErrorHandler(): ErrorHandler;

abstract setResourceResolver(arg0: LSResourceResolver): void;

abstract getResourceResolver(): LSResourceResolver;

abstract getTypeInfoProvider(): TypeInfoProvider;

getFeature(arg0: String): boolean;

setFeature(arg0: String, arg1: boolean): void;

setProperty(arg0: String, arg1: Object): void;

getProperty(arg0: String): Object;
 }

}
