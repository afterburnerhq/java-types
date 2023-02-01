/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="org.w3c.dom.d.ts" />
/// <reference path="javax.xml.namespace.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="org.xml.sax.d.ts" />
declare module '@afterburnerhq/javax.xml.xpath' { 
import { Enum, Iterable, Throwable, ClassLoader, Class, String, Exception } from '@afterburnerhq/java.lang'
import { Iterator, List } from '@afterburnerhq/java.util'
import { Node } from '@afterburnerhq/org.w3c.dom'
import { NamespaceContext, QName } from '@afterburnerhq/javax.xml.namespace'
import { PrintStream, PrintWriter } from '@afterburnerhq/java.io'
import { InputSource } from '@afterburnerhq/org.xml.sax'
export interface XPath {

reset(): void;

setXPathVariableResolver(arg0: XPathVariableResolver): void;

getXPathVariableResolver(): XPathVariableResolver;

setXPathFunctionResolver(arg0: XPathFunctionResolver): void;

getXPathFunctionResolver(): XPathFunctionResolver;

setNamespaceContext(arg0: NamespaceContext): void;

getNamespaceContext(): NamespaceContext;

compile(arg0: String): XPathExpression;

evaluate(arg0: String, arg1: Object, arg2: QName): Object;

evaluate(arg0: String, arg1: Object): String;

evaluate(arg0: String, arg1: InputSource, arg2: QName): Object;

evaluate(arg0: String, arg1: InputSource): String;

/* default */ evaluateExpression<T extends Object>(arg0: String, arg1: Object, arg2: Class<T>): T;

/* default */ evaluateExpression(arg0: String, arg1: Object): XPathEvaluationResult<any>;

/* default */ evaluateExpression<T extends Object>(arg0: String, arg1: InputSource, arg2: Class<T>): T;

/* default */ evaluateExpression(arg0: String, arg1: InputSource): XPathEvaluationResult<any>;
 }

export class XPathConstants {
static NUMBER:QName
static STRING:QName
static BOOLEAN:QName
static NODESET:QName
static NODE:QName
static DOM_OBJECT_MODEL:String
 }

export interface XPathEvaluationResult<T extends Object> extends Object {

type(): XPathEvaluationResult.XPathResultType;

value(): T;
 }
export namespace XPathEvaluationResult { 
export class XPathResultType extends Enum<XPathEvaluationResult.XPathResultType> {
static ANY:XPathEvaluationResult.XPathResultType
static BOOLEAN:XPathEvaluationResult.XPathResultType
static NUMBER:XPathEvaluationResult.XPathResultType
static STRING:XPathEvaluationResult.XPathResultType
static NODESET:XPathEvaluationResult.XPathResultType
static NODE:XPathEvaluationResult.XPathResultType

static values(): XPathEvaluationResult.XPathResultType[];

static valueOf(arg0: String): XPathEvaluationResult.XPathResultType;

static getQNameType(arg0: Class<any>): QName;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class XPathException extends Exception {
constructor(arg0: String);
constructor(arg0: Throwable);

getCause(): Throwable;

printStackTrace(arg0: PrintStream): void;

printStackTrace(): void;

printStackTrace(arg0: PrintWriter): void;
 }

export interface XPathExpression {

evaluate(arg0: Object, arg1: QName): Object;

evaluate(arg0: Object): String;

evaluate(arg0: InputSource, arg1: QName): Object;

evaluate(arg0: InputSource): String;

/* default */ evaluateExpression<T extends Object>(arg0: Object, arg1: Class<T>): T;

/* default */ evaluateExpression(arg0: Object): XPathEvaluationResult<any>;

/* default */ evaluateExpression<T extends Object>(arg0: InputSource, arg1: Class<T>): T;

/* default */ evaluateExpression(arg0: InputSource): XPathEvaluationResult<any>;
 }

export class XPathExpressionException extends XPathException {
constructor(arg0: String);
constructor(arg0: Throwable);
 }

export abstract class XPathFactory {
static DEFAULT_PROPERTY_NAME:String
static DEFAULT_OBJECT_MODEL_URI:String

static newDefaultInstance(): XPathFactory;

static newInstance(): XPathFactory;

static newInstance(arg0: String): XPathFactory;

static newInstance(arg0: String, arg1: String, arg2: ClassLoader): XPathFactory;

abstract isObjectModelSupported(arg0: String): boolean;

abstract setFeature(arg0: String, arg1: boolean): void;

abstract getFeature(arg0: String): boolean;

abstract setXPathVariableResolver(arg0: XPathVariableResolver): void;

abstract setXPathFunctionResolver(arg0: XPathFunctionResolver): void;

abstract newXPath(): XPath;
 }

export class XPathFactoryConfigurationException extends XPathException {
constructor(arg0: String);
constructor(arg0: Throwable);
 }

export interface XPathFunction {

evaluate(arg0: List<any>): Object;
 }

export class XPathFunctionException extends XPathExpressionException {
constructor(arg0: String);
constructor(arg0: Throwable);
 }

export interface XPathFunctionResolver {

resolveFunction(arg0: QName, arg1: number): XPathFunction;
 }

export interface XPathNodes extends Iterable<Node>, Object {

iterator(): Iterator<Node>;

size(): number;

get(arg0: number): Node;
 }

export interface XPathVariableResolver {

resolveVariable(arg0: QName): Object;
 }

}
