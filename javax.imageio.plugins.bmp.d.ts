/// <reference path="java.util.d.ts" />
/// <reference path="javax.imageio.d.ts" />
declare module '@afterburnerhq/javax.imageio.plugins.bmp' { 
import { Locale } from '@afterburnerhq/java.util'
import { ImageWriteParam } from '@afterburnerhq/javax.imageio'
export class BMPImageWriteParam extends ImageWriteParam {
constructor(arg0: Locale);
constructor();

setTopDown(arg0: boolean): void;

isTopDown(): boolean;
 }

}
