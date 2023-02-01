/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="javax.imageio.d.ts" />
declare module '@afterburnerhq/javax.imageio.plugins.jpeg' { 
import { Locale } from '@afterburnerhq/java.util'
import { String } from '@afterburnerhq/java.lang'
import { ImageWriteParam, ImageReadParam } from '@afterburnerhq/javax.imageio'
export class JPEGHuffmanTable {
static StdDCLuminance:JPEGHuffmanTable
static StdDCChrominance:JPEGHuffmanTable
static StdACLuminance:JPEGHuffmanTable
static StdACChrominance:JPEGHuffmanTable
constructor(arg0: number[], arg1: number[]);

getLengths(): number[];

getValues(): number[];
toString(): string;
 }

export class JPEGImageReadParam extends ImageReadParam {
constructor();

areTablesSet(): boolean;

setDecodeTables(arg0: JPEGQTable[], arg1: JPEGHuffmanTable[], arg2: JPEGHuffmanTable[]): void;

unsetDecodeTables(): void;

getQTables(): JPEGQTable[];

getDCHuffmanTables(): JPEGHuffmanTable[];

getACHuffmanTables(): JPEGHuffmanTable[];
 }

export class JPEGImageWriteParam extends ImageWriteParam {
constructor(arg0: Locale);

unsetCompression(): void;

isCompressionLossless(): boolean;

getCompressionQualityDescriptions(): String[];

getCompressionQualityValues(): number[];

areTablesSet(): boolean;

setEncodeTables(arg0: JPEGQTable[], arg1: JPEGHuffmanTable[], arg2: JPEGHuffmanTable[]): void;

unsetEncodeTables(): void;

getQTables(): JPEGQTable[];

getDCHuffmanTables(): JPEGHuffmanTable[];

getACHuffmanTables(): JPEGHuffmanTable[];

setOptimizeHuffmanTables(arg0: boolean): void;

getOptimizeHuffmanTables(): boolean;
 }

export class JPEGQTable {
static K1Luminance:JPEGQTable
static K1Div2Luminance:JPEGQTable
static K2Chrominance:JPEGQTable
static K2Div2Chrominance:JPEGQTable
constructor(arg0: number[]);

getTable(): number[];

getScaledInstance(arg0: number, arg1: boolean): JPEGQTable;
toString(): string;
 }

}
