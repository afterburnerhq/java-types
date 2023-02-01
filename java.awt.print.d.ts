/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.print.d.ts" />
/// <reference path="javax.print.attribute.d.ts" />
declare module '@afterburnerhq/java.awt.print' { 
import { Graphics } from '@afterburnerhq/java.awt'
import { Throwable, Cloneable, String, Exception } from '@afterburnerhq/java.lang'
import { IOException } from '@afterburnerhq/java.io'
import { StreamPrintServiceFactory, PrintService } from '@afterburnerhq/javax.print'
import { PrintRequestAttributeSet } from '@afterburnerhq/javax.print.attribute'
export class Book implements Pageable {
constructor();

getNumberOfPages(): number;

getPageFormat(arg0: number): PageFormat;

getPrintable(arg0: number): Printable;

setPage(arg0: number, arg1: Printable, arg2: PageFormat): void;

append(arg0: Printable, arg1: PageFormat): void;

append(arg0: Printable, arg1: PageFormat, arg2: number): void;
 }

export class PageFormat implements Cloneable {
static LANDSCAPE:number
static PORTRAIT:number
static REVERSE_LANDSCAPE:number
constructor();

clone(): Object;

getWidth(): number;

getHeight(): number;

getImageableX(): number;

getImageableY(): number;

getImageableWidth(): number;

getImageableHeight(): number;

getPaper(): Paper;

setPaper(arg0: Paper): void;

setOrientation(arg0: number): void;

getOrientation(): number;

getMatrix(): number[];
 }

export namespace Pageable { 
const UNKNOWN_NUMBER_OF_PAGES:number
}

export interface Pageable {
UNKNOWN_NUMBER_OF_PAGES:number

getNumberOfPages(): number;

getPageFormat(arg0: number): PageFormat;

getPrintable(arg0: number): Printable;
 }

export class Paper implements Cloneable {
constructor();

clone(): Object;

getHeight(): number;

setSize(arg0: number, arg1: number): void;

getWidth(): number;

setImageableArea(arg0: number, arg1: number, arg2: number, arg3: number): void;

getImageableX(): number;

getImageableY(): number;

getImageableWidth(): number;

getImageableHeight(): number;
 }

export namespace Printable { 
const PAGE_EXISTS:number
const NO_SUCH_PAGE:number
}

export interface Printable {
PAGE_EXISTS:number
NO_SUCH_PAGE:number

print(arg0: Graphics, arg1: PageFormat, arg2: number): number;
 }

export class PrinterAbortException extends PrinterException {
constructor();
constructor(arg0: String);
 }

export class PrinterException extends Exception {
constructor();
constructor(arg0: String);
 }

export interface PrinterGraphics {

getPrinterJob(): PrinterJob;
 }

export class PrinterIOException extends PrinterException {
constructor(arg0: IOException);

getIOException(): IOException;

getCause(): Throwable;
 }

export abstract class PrinterJob {
constructor();

static getPrinterJob(): PrinterJob;

static lookupPrintServices(): PrintService[];

static lookupStreamPrintServices(arg0: String): StreamPrintServiceFactory[];

getPrintService(): PrintService;

setPrintService(arg0: PrintService): void;

abstract setPrintable(arg0: Printable): void;

abstract setPrintable(arg0: Printable, arg1: PageFormat): void;

abstract setPageable(arg0: Pageable): void;

abstract printDialog(): boolean;

printDialog(arg0: PrintRequestAttributeSet): boolean;

abstract pageDialog(arg0: PageFormat): PageFormat;

pageDialog(arg0: PrintRequestAttributeSet): PageFormat;

abstract defaultPage(arg0: PageFormat): PageFormat;

defaultPage(): PageFormat;

getPageFormat(arg0: PrintRequestAttributeSet): PageFormat;

abstract validatePage(arg0: PageFormat): PageFormat;

abstract print(): void;

print(arg0: PrintRequestAttributeSet): void;

abstract setCopies(arg0: number): void;

abstract getCopies(): number;

abstract getUserName(): String;

abstract setJobName(arg0: String): void;

abstract getJobName(): String;

abstract cancel(): void;

abstract isCancelled(): boolean;
 }

}
