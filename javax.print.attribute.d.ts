/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/javax.print.attribute' { 
import { Class, Cloneable, String, RuntimeException } from '@afterburnerhq/java.lang'
import { Locale, Date } from '@afterburnerhq/java.util'
import { URI } from '@afterburnerhq/java.net'
import { Serializable } from '@afterburnerhq/java.io'
export interface Attribute extends Serializable {

getCategory(): Class<Attribute>;

getName(): String;
 }

export interface AttributeSet {

get(arg0: Class<any>): Attribute;

add(arg0: Attribute): boolean;

remove(arg0: Class<any>): boolean;

remove(arg0: Attribute): boolean;

containsKey(arg0: Class<any>): boolean;

containsValue(arg0: Attribute): boolean;

addAll(arg0: AttributeSet): boolean;

size(): number;

toArray(): Attribute[];

clear(): void;

isEmpty(): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class AttributeSetUtilities {

static unmodifiableView(arg0: AttributeSet): AttributeSet;

static unmodifiableView(arg0: DocAttributeSet): DocAttributeSet;

static unmodifiableView(arg0: PrintRequestAttributeSet): PrintRequestAttributeSet;

static unmodifiableView(arg0: PrintJobAttributeSet): PrintJobAttributeSet;

static unmodifiableView(arg0: PrintServiceAttributeSet): PrintServiceAttributeSet;

static synchronizedView(arg0: AttributeSet): AttributeSet;

static synchronizedView(arg0: DocAttributeSet): DocAttributeSet;

static synchronizedView(arg0: PrintRequestAttributeSet): PrintRequestAttributeSet;

static synchronizedView(arg0: PrintJobAttributeSet): PrintJobAttributeSet;

static synchronizedView(arg0: PrintServiceAttributeSet): PrintServiceAttributeSet;

static verifyAttributeCategory(arg0: Object, arg1: Class<any>): Class<any>;

static verifyAttributeValue(arg0: Object, arg1: Class<any>): Attribute;

static verifyCategoryForValue(arg0: Class<any>, arg1: Attribute): void;
 }

export abstract class DateTimeSyntax implements Serializable, Cloneable {

getValue(): Date;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export interface DocAttribute extends Attribute {
 }

export interface DocAttributeSet extends AttributeSet {

add(arg0: Attribute): boolean;

addAll(arg0: AttributeSet): boolean;
 }

export abstract class EnumSyntax implements Serializable, Cloneable {

getValue(): number;

clone(): Object;

hashCode(): number;
toString(): string;
 }

export class HashAttributeSet implements AttributeSet, Serializable {
constructor();
constructor(arg0: Attribute);
constructor(arg0: Attribute[]);
constructor(arg0: AttributeSet);

get(arg0: Class<any>): Attribute;

add(arg0: Attribute): boolean;

remove(arg0: Class<any>): boolean;

remove(arg0: Attribute): boolean;

containsKey(arg0: Class<any>): boolean;

containsValue(arg0: Attribute): boolean;

addAll(arg0: AttributeSet): boolean;

size(): number;

toArray(): Attribute[];

clear(): void;

isEmpty(): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class HashDocAttributeSet extends HashAttributeSet implements DocAttributeSet, Serializable {
constructor();
constructor(arg0: DocAttribute);
constructor(arg0: DocAttribute[]);
constructor(arg0: DocAttributeSet);
 }

export class HashPrintJobAttributeSet extends HashAttributeSet implements PrintJobAttributeSet, Serializable {
constructor();
constructor(arg0: PrintJobAttribute);
constructor(arg0: PrintJobAttribute[]);
constructor(arg0: PrintJobAttributeSet);
 }

export class HashPrintRequestAttributeSet extends HashAttributeSet implements PrintRequestAttributeSet, Serializable {
constructor();
constructor(arg0: PrintRequestAttribute);
constructor(arg0: PrintRequestAttribute[]);
constructor(arg0: PrintRequestAttributeSet);
 }

export class HashPrintServiceAttributeSet extends HashAttributeSet implements PrintServiceAttributeSet, Serializable {
constructor();
constructor(arg0: PrintServiceAttribute);
constructor(arg0: PrintServiceAttribute[]);
constructor(arg0: PrintServiceAttributeSet);
 }

export abstract class IntegerSyntax implements Serializable, Cloneable {

getValue(): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export interface PrintJobAttribute extends Attribute {
 }

export interface PrintJobAttributeSet extends AttributeSet {

add(arg0: Attribute): boolean;

addAll(arg0: AttributeSet): boolean;
 }

export interface PrintRequestAttribute extends Attribute {
 }

export interface PrintRequestAttributeSet extends AttributeSet {

add(arg0: Attribute): boolean;

addAll(arg0: AttributeSet): boolean;
 }

export interface PrintServiceAttribute extends Attribute {
 }

export interface PrintServiceAttributeSet extends AttributeSet {

add(arg0: Attribute): boolean;

addAll(arg0: AttributeSet): boolean;
 }

export abstract class ResolutionSyntax implements Serializable, Cloneable {
static DPI:number
static DPCM:number
constructor(arg0: number, arg1: number, arg2: number);

getResolution(arg0: number): number[];

getCrossFeedResolution(arg0: number): number;

getFeedResolution(arg0: number): number;

toString(arg0: number, arg1: String): String;

lessThanOrEquals(arg0: ResolutionSyntax): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export abstract class SetOfIntegerSyntax implements Serializable, Cloneable {

getMembers(): Array<Array<number>>;

contains(arg0: number): boolean;

contains(arg0: IntegerSyntax): boolean;

next(arg0: number): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export abstract class Size2DSyntax implements Serializable, Cloneable {
static INCH:number
static MM:number

getSize(arg0: number): number[];

getX(arg0: number): number;

getY(arg0: number): number;

toString(arg0: number, arg1: String): String;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export interface SupportedValuesAttribute extends Attribute {
 }

export abstract class TextSyntax implements Serializable, Cloneable {

getValue(): String;

getLocale(): Locale;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;
 }

export abstract class URISyntax implements Serializable, Cloneable {

getURI(): URI;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;
 }

export class UnmodifiableSetException extends RuntimeException {
constructor();
constructor(arg0: String);
 }

}
