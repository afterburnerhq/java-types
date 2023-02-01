/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.nio.charset.d.ts" />
declare module '@afterburnerhq/java.nio.charset.spi' { 
import { Iterator } from '@afterburnerhq/java.util'
import { String } from '@afterburnerhq/java.lang'
import { Charset } from '@afterburnerhq/java.nio.charset'
export abstract class CharsetProvider {

abstract charsets(): Iterator<Charset>;

abstract charsetForName(arg0: String): Charset;
 }

}
