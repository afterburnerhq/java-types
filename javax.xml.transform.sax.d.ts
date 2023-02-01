/// <reference path="org.xml.sax.ext.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="org.xml.sax.d.ts" />
/// <reference path="javax.xml.transform.d.ts" />
declare module '@afterburnerhq/javax.xml.transform.sax' { 
import { LexicalHandler } from '@afterburnerhq/org.xml.sax.ext'
import { String } from '@afterburnerhq/java.lang'
import { XMLFilter, InputSource, DTDHandler, ContentHandler, XMLReader } from '@afterburnerhq/org.xml.sax'
import { Templates, TransformerFactory, Transformer, Source, Result } from '@afterburnerhq/javax.xml.transform'
export class SAXResult implements Result {
static FEATURE:String
constructor();
constructor(arg0: ContentHandler);

setHandler(arg0: ContentHandler): void;

getHandler(): ContentHandler;

setLexicalHandler(arg0: LexicalHandler): void;

getLexicalHandler(): LexicalHandler;

setSystemId(arg0: String): void;

getSystemId(): String;
 }

export class SAXSource implements Source {
static FEATURE:String
constructor();
constructor(arg0: XMLReader, arg1: InputSource);
constructor(arg0: InputSource);

setXMLReader(arg0: XMLReader): void;

getXMLReader(): XMLReader;

setInputSource(arg0: InputSource): void;

getInputSource(): InputSource;

setSystemId(arg0: String): void;

getSystemId(): String;

static sourceToInputSource(arg0: Source): InputSource;

isEmpty(): boolean;
 }

export abstract class SAXTransformerFactory extends TransformerFactory {
static FEATURE:String
static FEATURE_XMLFILTER:String

abstract newTransformerHandler(arg0: Source): TransformerHandler;

abstract newTransformerHandler(arg0: Templates): TransformerHandler;

abstract newTransformerHandler(): TransformerHandler;

abstract newTemplatesHandler(): TemplatesHandler;

abstract newXMLFilter(arg0: Source): XMLFilter;

abstract newXMLFilter(arg0: Templates): XMLFilter;
 }

export interface TemplatesHandler extends ContentHandler {

getTemplates(): Templates;

setSystemId(arg0: String): void;

getSystemId(): String;
 }

export interface TransformerHandler extends ContentHandler, LexicalHandler, DTDHandler {

setResult(arg0: Result): void;

setSystemId(arg0: String): void;

getSystemId(): String;

getTransformer(): Transformer;
 }

}
