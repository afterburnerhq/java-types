/// <reference path="java.lang.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.xml.transform.d.ts" />
declare module '@afterburnerhq/javax.xml.transform.stream' { 
import { String } from '@afterburnerhq/java.lang'
import { Reader, File, Writer, InputStream, OutputStream } from '@afterburnerhq/java.io'
import { Source, Result } from '@afterburnerhq/javax.xml.transform'
export class StreamResult implements Result {
static FEATURE:String
constructor();
constructor(arg0: OutputStream);
constructor(arg0: Writer);
constructor(arg0: String);
constructor(arg0: File);

setOutputStream(arg0: OutputStream): void;

getOutputStream(): OutputStream;

setWriter(arg0: Writer): void;

getWriter(): Writer;

setSystemId(arg0: String): void;

setSystemId(arg0: File): void;

getSystemId(): String;
 }

export class StreamSource implements Source {
static FEATURE:String
constructor();
constructor(arg0: InputStream);
constructor(arg0: InputStream, arg1: String);
constructor(arg0: Reader);
constructor(arg0: Reader, arg1: String);
constructor(arg0: String);
constructor(arg0: File);

setInputStream(arg0: InputStream): void;

getInputStream(): InputStream;

setReader(arg0: Reader): void;

getReader(): Reader;

setPublicId(arg0: String): void;

getPublicId(): String;

setSystemId(arg0: String): void;

getSystemId(): String;

setSystemId(arg0: File): void;

isEmpty(): boolean;
 }

}
