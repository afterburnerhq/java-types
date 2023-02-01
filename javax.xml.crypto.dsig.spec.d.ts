/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="javax.xml.crypto.d.ts" />
/// <reference path="java.security.spec.d.ts" />
declare module '@afterburnerhq/javax.xml.crypto.dsig.spec' { 
import { String } from '@afterburnerhq/java.lang'
import { Map, List } from '@afterburnerhq/java.util'
import { XMLStructure } from '@afterburnerhq/javax.xml.crypto'
import { AlgorithmParameterSpec, PSSParameterSpec } from '@afterburnerhq/java.security.spec'
export interface C14NMethodParameterSpec extends TransformParameterSpec {
 }

export interface DigestMethodParameterSpec extends AlgorithmParameterSpec {
 }

export class ExcC14NParameterSpec implements C14NMethodParameterSpec {
static DEFAULT:String
constructor();
constructor(arg0: List<String>);

getPrefixList(): List<String>;
 }

export class HMACParameterSpec implements SignatureMethodParameterSpec {
constructor(arg0: number);

getOutputLength(): number;
 }

export class RSAPSSParameterSpec implements SignatureMethodParameterSpec {
constructor(arg0: PSSParameterSpec);

getPSSParameterSpec(): PSSParameterSpec;
 }

export interface SignatureMethodParameterSpec extends AlgorithmParameterSpec {
 }

export interface TransformParameterSpec extends AlgorithmParameterSpec {
 }

export class XPathFilter2ParameterSpec implements TransformParameterSpec {
constructor(arg0: List<XPathType>);

getXPathList(): List<XPathType>;
 }

export class XPathFilterParameterSpec implements TransformParameterSpec {
constructor(arg0: String);
constructor(arg0: String, arg1: Map<String, String>);

getXPath(): String;

getNamespaceMap(): Map<String, String>;
 }

export class XPathType {
constructor(arg0: String, arg1: XPathType.Filter);
constructor(arg0: String, arg1: XPathType.Filter, arg2: Map<String, String>);

getExpression(): String;

getFilter(): XPathType.Filter;

getNamespaceMap(): Map<String, String>;
 }
export namespace XPathType { 
export class Filter {
static INTERSECT:XPathType.Filter
static SUBTRACT:XPathType.Filter
static UNION:XPathType.Filter
toString(): string;
 }

}

export class XSLTTransformParameterSpec implements TransformParameterSpec {
constructor(arg0: XMLStructure);

getStylesheet(): XMLStructure;
 }

}
