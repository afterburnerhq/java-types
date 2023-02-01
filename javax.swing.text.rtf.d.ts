/// <reference path="java.lang.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.swing.text.d.ts" />
declare module '@afterburnerhq/javax.swing.text.rtf' { 
import { String } from '@afterburnerhq/java.lang'
import { Reader, InputStream, Writer, OutputStream } from '@afterburnerhq/java.io'
import { StyledEditorKit, Document } from '@afterburnerhq/javax.swing.text'
export class RTFEditorKit extends StyledEditorKit {
constructor();

getContentType(): String;

read(arg0: InputStream, arg1: Document, arg2: number): void;

write(arg0: OutputStream, arg1: Document, arg2: number, arg3: number): void;

read(arg0: Reader, arg1: Document, arg2: number): void;

write(arg0: Writer, arg1: Document, arg2: number, arg3: number): void;
 }

}
