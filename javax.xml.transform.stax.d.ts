/// <reference path="java.lang.d.ts" />
/// <reference path="javax.xml.stream.d.ts" />
/// <reference path="javax.xml.transform.d.ts" />
declare module '@afterburnerhq/javax.xml.transform.stax' { 
import { String } from '@afterburnerhq/java.lang'
import { XMLEventReader, XMLStreamReader, XMLEventWriter, XMLStreamWriter } from '@afterburnerhq/javax.xml.stream'
import { Source, Result } from '@afterburnerhq/javax.xml.transform'
export class StAXResult implements Result {
static FEATURE:String
constructor(arg0: XMLEventWriter);
constructor(arg0: XMLStreamWriter);

getXMLEventWriter(): XMLEventWriter;

getXMLStreamWriter(): XMLStreamWriter;

setSystemId(arg0: String): void;

getSystemId(): String;
 }

export class StAXSource implements Source {
static FEATURE:String
constructor(arg0: XMLEventReader);
constructor(arg0: XMLStreamReader);

getXMLEventReader(): XMLEventReader;

getXMLStreamReader(): XMLStreamReader;

setSystemId(arg0: String): void;

getSystemId(): String;

isEmpty(): boolean;
 }

}
