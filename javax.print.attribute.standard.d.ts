/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="javax.print.attribute.d.ts" />
declare module '@afterburnerhq/javax.print.attribute.standard' { 
import { Window } from '@afterburnerhq/java.awt'
import { Class, String } from '@afterburnerhq/java.lang'
import { Locale, Set, HashMap, Collection, Map, Date, HashSet } from '@afterburnerhq/java.util'
import { URI } from '@afterburnerhq/java.net'
import { PrintJobAttribute, Attribute, SetOfIntegerSyntax, EnumSyntax, TextSyntax, SupportedValuesAttribute, IntegerSyntax, URISyntax, Size2DSyntax, ResolutionSyntax, PrintRequestAttribute, DateTimeSyntax, PrintServiceAttribute, DocAttribute } from '@afterburnerhq/javax.print.attribute'
export class Chromaticity extends EnumSyntax implements DocAttribute, PrintRequestAttribute, PrintJobAttribute {
static MONOCHROME:Chromaticity
static COLOR:Chromaticity

getCategory(): Class<Attribute>;

getName(): String;
 }

export class ColorSupported extends EnumSyntax implements PrintServiceAttribute {
static NOT_SUPPORTED:ColorSupported
static SUPPORTED:ColorSupported

getCategory(): Class<Attribute>;

getName(): String;
 }

export class Compression extends EnumSyntax implements DocAttribute {
static NONE:Compression
static DEFLATE:Compression
static GZIP:Compression
static COMPRESS:Compression

getCategory(): Class<Attribute>;

getName(): String;
 }

export class Copies extends IntegerSyntax implements PrintRequestAttribute, PrintJobAttribute {
constructor(arg0: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class CopiesSupported extends SetOfIntegerSyntax implements SupportedValuesAttribute {
constructor(arg0: number);
constructor(arg0: number, arg1: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class DateTimeAtCompleted extends DateTimeSyntax implements PrintJobAttribute {
constructor(arg0: Date);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class DateTimeAtCreation extends DateTimeSyntax implements PrintJobAttribute {
constructor(arg0: Date);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class DateTimeAtProcessing extends DateTimeSyntax implements PrintJobAttribute {
constructor(arg0: Date);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class Destination extends URISyntax implements PrintJobAttribute, PrintRequestAttribute {
constructor(arg0: URI);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class DialogOwner implements PrintRequestAttribute {
constructor();
constructor(arg0: Window);

getOwner(): Window;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class DialogTypeSelection extends EnumSyntax implements PrintRequestAttribute {
static NATIVE:DialogTypeSelection
static COMMON:DialogTypeSelection

getCategory(): Class<Attribute>;

getName(): String;
 }

export class DocumentName extends TextSyntax implements DocAttribute {
constructor(arg0: String, arg1: Locale);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class Fidelity extends EnumSyntax implements PrintJobAttribute, PrintRequestAttribute {
static FIDELITY_TRUE:Fidelity
static FIDELITY_FALSE:Fidelity

getCategory(): Class<Attribute>;

getName(): String;
 }

export class Finishings extends EnumSyntax implements DocAttribute, PrintRequestAttribute, PrintJobAttribute {
static NONE:Finishings
static STAPLE:Finishings
static COVER:Finishings
static BIND:Finishings
static SADDLE_STITCH:Finishings
static EDGE_STITCH:Finishings
static STAPLE_TOP_LEFT:Finishings
static STAPLE_BOTTOM_LEFT:Finishings
static STAPLE_TOP_RIGHT:Finishings
static STAPLE_BOTTOM_RIGHT:Finishings
static EDGE_STITCH_LEFT:Finishings
static EDGE_STITCH_TOP:Finishings
static EDGE_STITCH_RIGHT:Finishings
static EDGE_STITCH_BOTTOM:Finishings
static STAPLE_DUAL_LEFT:Finishings
static STAPLE_DUAL_TOP:Finishings
static STAPLE_DUAL_RIGHT:Finishings
static STAPLE_DUAL_BOTTOM:Finishings

getCategory(): Class<Attribute>;

getName(): String;
 }

export class JobHoldUntil extends DateTimeSyntax implements PrintRequestAttribute, PrintJobAttribute {
constructor(arg0: Date);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class JobImpressions extends IntegerSyntax implements PrintRequestAttribute, PrintJobAttribute {
constructor(arg0: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class JobImpressionsCompleted extends IntegerSyntax implements PrintJobAttribute {
constructor(arg0: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class JobImpressionsSupported extends SetOfIntegerSyntax implements SupportedValuesAttribute {
constructor(arg0: number, arg1: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class JobKOctets extends IntegerSyntax implements PrintRequestAttribute, PrintJobAttribute {
constructor(arg0: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class JobKOctetsProcessed extends IntegerSyntax implements PrintJobAttribute {
constructor(arg0: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class JobKOctetsSupported extends SetOfIntegerSyntax implements SupportedValuesAttribute {
constructor(arg0: number, arg1: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class JobMediaSheets extends IntegerSyntax implements PrintRequestAttribute, PrintJobAttribute {
constructor(arg0: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class JobMediaSheetsCompleted extends IntegerSyntax implements PrintJobAttribute {
constructor(arg0: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class JobMediaSheetsSupported extends SetOfIntegerSyntax implements SupportedValuesAttribute {
constructor(arg0: number, arg1: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class JobMessageFromOperator extends TextSyntax implements PrintJobAttribute {
constructor(arg0: String, arg1: Locale);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class JobName extends TextSyntax implements PrintRequestAttribute, PrintJobAttribute {
constructor(arg0: String, arg1: Locale);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class JobOriginatingUserName extends TextSyntax implements PrintJobAttribute {
constructor(arg0: String, arg1: Locale);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class JobPriority extends IntegerSyntax implements PrintRequestAttribute, PrintJobAttribute {
constructor(arg0: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class JobPrioritySupported extends IntegerSyntax implements SupportedValuesAttribute {
constructor(arg0: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class JobSheets extends EnumSyntax implements PrintRequestAttribute, PrintJobAttribute {
static NONE:JobSheets
static STANDARD:JobSheets

getCategory(): Class<Attribute>;

getName(): String;
 }

export class JobState extends EnumSyntax implements PrintJobAttribute {
static UNKNOWN:JobState
static PENDING:JobState
static PENDING_HELD:JobState
static PROCESSING:JobState
static PROCESSING_STOPPED:JobState
static CANCELED:JobState
static ABORTED:JobState
static COMPLETED:JobState

getCategory(): Class<Attribute>;

getName(): String;
 }

export class JobStateReason extends EnumSyntax implements Attribute {
static JOB_INCOMING:JobStateReason
static JOB_DATA_INSUFFICIENT:JobStateReason
static DOCUMENT_ACCESS_ERROR:JobStateReason
static SUBMISSION_INTERRUPTED:JobStateReason
static JOB_OUTGOING:JobStateReason
static JOB_HOLD_UNTIL_SPECIFIED:JobStateReason
static RESOURCES_ARE_NOT_READY:JobStateReason
static PRINTER_STOPPED_PARTLY:JobStateReason
static PRINTER_STOPPED:JobStateReason
static JOB_INTERPRETING:JobStateReason
static JOB_QUEUED:JobStateReason
static JOB_TRANSFORMING:JobStateReason
static JOB_QUEUED_FOR_MARKER:JobStateReason
static JOB_PRINTING:JobStateReason
static JOB_CANCELED_BY_USER:JobStateReason
static JOB_CANCELED_BY_OPERATOR:JobStateReason
static JOB_CANCELED_AT_DEVICE:JobStateReason
static ABORTED_BY_SYSTEM:JobStateReason
static UNSUPPORTED_COMPRESSION:JobStateReason
static COMPRESSION_ERROR:JobStateReason
static UNSUPPORTED_DOCUMENT_FORMAT:JobStateReason
static DOCUMENT_FORMAT_ERROR:JobStateReason
static PROCESSING_TO_STOP_POINT:JobStateReason
static SERVICE_OFF_LINE:JobStateReason
static JOB_COMPLETED_SUCCESSFULLY:JobStateReason
static JOB_COMPLETED_WITH_WARNINGS:JobStateReason
static JOB_COMPLETED_WITH_ERRORS:JobStateReason
static JOB_RESTARTABLE:JobStateReason
static QUEUED_IN_DEVICE:JobStateReason

getCategory(): Class<Attribute>;

getName(): String;
 }

export interface JobStateReasons extends PrintJobAttribute { }
export class JobStateReasons extends HashSet<JobStateReason> implements PrintJobAttribute {
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: number);
constructor(arg0: Collection<JobStateReason>);

add(arg0: JobStateReason): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export abstract class Media extends EnumSyntax implements DocAttribute, PrintRequestAttribute, PrintJobAttribute {

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class MediaName extends Media implements Attribute {
static NA_LETTER_WHITE:MediaName
static NA_LETTER_TRANSPARENT:MediaName
static ISO_A4_WHITE:MediaName
static ISO_A4_TRANSPARENT:MediaName
 }

export class MediaPrintableArea implements DocAttribute, PrintRequestAttribute, PrintJobAttribute {
static INCH:number
static MM:number
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);

getPrintableArea(arg0: number): number[];

getX(arg0: number): number;

getY(arg0: number): number;

getWidth(arg0: number): number;

getHeight(arg0: number): number;

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;

toString(arg0: number, arg1: String): String;
toString(): string;

hashCode(): number;
 }

export class MediaSize extends Size2DSyntax implements Attribute {
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: MediaSizeName);
constructor(arg0: number, arg1: number, arg2: number, arg3: MediaSizeName);

getMediaSizeName(): MediaSizeName;

static getMediaSizeForName(arg0: MediaSizeName): MediaSize;

static findMedia(arg0: number, arg1: number, arg2: number): MediaSizeName;

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }
export namespace MediaSize { 
export class Engineering {
static A:MediaSize
static B:MediaSize
static C:MediaSize
static D:MediaSize
static E:MediaSize
 }

export class ISO {
static A0:MediaSize
static A1:MediaSize
static A2:MediaSize
static A3:MediaSize
static A4:MediaSize
static A5:MediaSize
static A6:MediaSize
static A7:MediaSize
static A8:MediaSize
static A9:MediaSize
static A10:MediaSize
static B0:MediaSize
static B1:MediaSize
static B2:MediaSize
static B3:MediaSize
static B4:MediaSize
static B5:MediaSize
static B6:MediaSize
static B7:MediaSize
static B8:MediaSize
static B9:MediaSize
static B10:MediaSize
static C3:MediaSize
static C4:MediaSize
static C5:MediaSize
static C6:MediaSize
static DESIGNATED_LONG:MediaSize
 }

export class JIS {
static B0:MediaSize
static B1:MediaSize
static B2:MediaSize
static B3:MediaSize
static B4:MediaSize
static B5:MediaSize
static B6:MediaSize
static B7:MediaSize
static B8:MediaSize
static B9:MediaSize
static B10:MediaSize
static CHOU_1:MediaSize
static CHOU_2:MediaSize
static CHOU_3:MediaSize
static CHOU_4:MediaSize
static CHOU_30:MediaSize
static CHOU_40:MediaSize
static KAKU_0:MediaSize
static KAKU_1:MediaSize
static KAKU_2:MediaSize
static KAKU_3:MediaSize
static KAKU_4:MediaSize
static KAKU_5:MediaSize
static KAKU_6:MediaSize
static KAKU_7:MediaSize
static KAKU_8:MediaSize
static KAKU_20:MediaSize
static KAKU_A4:MediaSize
static YOU_1:MediaSize
static YOU_2:MediaSize
static YOU_3:MediaSize
static YOU_4:MediaSize
static YOU_5:MediaSize
static YOU_6:MediaSize
static YOU_7:MediaSize
 }

export class NA {
static LETTER:MediaSize
static LEGAL:MediaSize
static NA_5X7:MediaSize
static NA_8X10:MediaSize
static NA_NUMBER_9_ENVELOPE:MediaSize
static NA_NUMBER_10_ENVELOPE:MediaSize
static NA_NUMBER_11_ENVELOPE:MediaSize
static NA_NUMBER_12_ENVELOPE:MediaSize
static NA_NUMBER_14_ENVELOPE:MediaSize
static NA_6X9_ENVELOPE:MediaSize
static NA_7X9_ENVELOPE:MediaSize
static NA_9x11_ENVELOPE:MediaSize
static NA_9x12_ENVELOPE:MediaSize
static NA_10x13_ENVELOPE:MediaSize
static NA_10x14_ENVELOPE:MediaSize
static NA_10X15_ENVELOPE:MediaSize
 }

export class Other {
static EXECUTIVE:MediaSize
static LEDGER:MediaSize
static TABLOID:MediaSize
static INVOICE:MediaSize
static FOLIO:MediaSize
static QUARTO:MediaSize
static ITALY_ENVELOPE:MediaSize
static MONARCH_ENVELOPE:MediaSize
static PERSONAL_ENVELOPE:MediaSize
static JAPANESE_POSTCARD:MediaSize
static JAPANESE_DOUBLE_POSTCARD:MediaSize
 }

}

export class MediaSizeName extends Media {
static ISO_A0:MediaSizeName
static ISO_A1:MediaSizeName
static ISO_A2:MediaSizeName
static ISO_A3:MediaSizeName
static ISO_A4:MediaSizeName
static ISO_A5:MediaSizeName
static ISO_A6:MediaSizeName
static ISO_A7:MediaSizeName
static ISO_A8:MediaSizeName
static ISO_A9:MediaSizeName
static ISO_A10:MediaSizeName
static ISO_B0:MediaSizeName
static ISO_B1:MediaSizeName
static ISO_B2:MediaSizeName
static ISO_B3:MediaSizeName
static ISO_B4:MediaSizeName
static ISO_B5:MediaSizeName
static ISO_B6:MediaSizeName
static ISO_B7:MediaSizeName
static ISO_B8:MediaSizeName
static ISO_B9:MediaSizeName
static ISO_B10:MediaSizeName
static JIS_B0:MediaSizeName
static JIS_B1:MediaSizeName
static JIS_B2:MediaSizeName
static JIS_B3:MediaSizeName
static JIS_B4:MediaSizeName
static JIS_B5:MediaSizeName
static JIS_B6:MediaSizeName
static JIS_B7:MediaSizeName
static JIS_B8:MediaSizeName
static JIS_B9:MediaSizeName
static JIS_B10:MediaSizeName
static ISO_C0:MediaSizeName
static ISO_C1:MediaSizeName
static ISO_C2:MediaSizeName
static ISO_C3:MediaSizeName
static ISO_C4:MediaSizeName
static ISO_C5:MediaSizeName
static ISO_C6:MediaSizeName
static NA_LETTER:MediaSizeName
static NA_LEGAL:MediaSizeName
static EXECUTIVE:MediaSizeName
static LEDGER:MediaSizeName
static TABLOID:MediaSizeName
static INVOICE:MediaSizeName
static FOLIO:MediaSizeName
static QUARTO:MediaSizeName
static JAPANESE_POSTCARD:MediaSizeName
static JAPANESE_DOUBLE_POSTCARD:MediaSizeName
static A:MediaSizeName
static B:MediaSizeName
static C:MediaSizeName
static D:MediaSizeName
static E:MediaSizeName
static ISO_DESIGNATED_LONG:MediaSizeName
static ITALY_ENVELOPE:MediaSizeName
static MONARCH_ENVELOPE:MediaSizeName
static PERSONAL_ENVELOPE:MediaSizeName
static NA_NUMBER_9_ENVELOPE:MediaSizeName
static NA_NUMBER_10_ENVELOPE:MediaSizeName
static NA_NUMBER_11_ENVELOPE:MediaSizeName
static NA_NUMBER_12_ENVELOPE:MediaSizeName
static NA_NUMBER_14_ENVELOPE:MediaSizeName
static NA_6X9_ENVELOPE:MediaSizeName
static NA_7X9_ENVELOPE:MediaSizeName
static NA_9X11_ENVELOPE:MediaSizeName
static NA_9X12_ENVELOPE:MediaSizeName
static NA_10X13_ENVELOPE:MediaSizeName
static NA_10X14_ENVELOPE:MediaSizeName
static NA_10X15_ENVELOPE:MediaSizeName
static NA_5X7:MediaSizeName
static NA_8X10:MediaSizeName
 }

export class MediaTray extends Media implements Attribute {
static TOP:MediaTray
static MIDDLE:MediaTray
static BOTTOM:MediaTray
static ENVELOPE:MediaTray
static MANUAL:MediaTray
static LARGE_CAPACITY:MediaTray
static MAIN:MediaTray
static SIDE:MediaTray
 }

export class MultipleDocumentHandling extends EnumSyntax implements PrintRequestAttribute, PrintJobAttribute {
static SINGLE_DOCUMENT:MultipleDocumentHandling
static SEPARATE_DOCUMENTS_UNCOLLATED_COPIES:MultipleDocumentHandling
static SEPARATE_DOCUMENTS_COLLATED_COPIES:MultipleDocumentHandling
static SINGLE_DOCUMENT_NEW_SHEET:MultipleDocumentHandling

getCategory(): Class<Attribute>;

getName(): String;
 }

export class NumberOfDocuments extends IntegerSyntax implements PrintJobAttribute {
constructor(arg0: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class NumberOfInterveningJobs extends IntegerSyntax implements PrintJobAttribute {
constructor(arg0: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class NumberUp extends IntegerSyntax implements DocAttribute, PrintRequestAttribute, PrintJobAttribute {
constructor(arg0: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class NumberUpSupported extends SetOfIntegerSyntax implements SupportedValuesAttribute {
constructor(arg0: Array<Array<number>>);
constructor(arg0: number);
constructor(arg0: number, arg1: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class OrientationRequested extends EnumSyntax implements DocAttribute, PrintRequestAttribute, PrintJobAttribute {
static PORTRAIT:OrientationRequested
static LANDSCAPE:OrientationRequested
static REVERSE_LANDSCAPE:OrientationRequested
static REVERSE_PORTRAIT:OrientationRequested

getCategory(): Class<Attribute>;

getName(): String;
 }

export class OutputDeviceAssigned extends TextSyntax implements PrintJobAttribute {
constructor(arg0: String, arg1: Locale);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class PDLOverrideSupported extends EnumSyntax implements PrintServiceAttribute {
static NOT_ATTEMPTED:PDLOverrideSupported
static ATTEMPTED:PDLOverrideSupported

getCategory(): Class<Attribute>;

getName(): String;
 }

export class PageRanges extends SetOfIntegerSyntax implements DocAttribute, PrintRequestAttribute, PrintJobAttribute {
constructor(arg0: Array<Array<number>>);
constructor(arg0: String);
constructor(arg0: number);
constructor(arg0: number, arg1: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class PagesPerMinute extends IntegerSyntax implements PrintServiceAttribute {
constructor(arg0: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class PagesPerMinuteColor extends IntegerSyntax implements PrintServiceAttribute {
constructor(arg0: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class PresentationDirection extends EnumSyntax implements PrintJobAttribute, PrintRequestAttribute {
static TOBOTTOM_TORIGHT:PresentationDirection
static TOBOTTOM_TOLEFT:PresentationDirection
static TOTOP_TORIGHT:PresentationDirection
static TOTOP_TOLEFT:PresentationDirection
static TORIGHT_TOBOTTOM:PresentationDirection
static TORIGHT_TOTOP:PresentationDirection
static TOLEFT_TOBOTTOM:PresentationDirection
static TOLEFT_TOTOP:PresentationDirection

getCategory(): Class<Attribute>;

getName(): String;
 }

export class PrintQuality extends EnumSyntax implements DocAttribute, PrintRequestAttribute, PrintJobAttribute {
static DRAFT:PrintQuality
static NORMAL:PrintQuality
static HIGH:PrintQuality

getCategory(): Class<Attribute>;

getName(): String;
 }

export class PrinterInfo extends TextSyntax implements PrintServiceAttribute {
constructor(arg0: String, arg1: Locale);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class PrinterIsAcceptingJobs extends EnumSyntax implements PrintServiceAttribute {
static NOT_ACCEPTING_JOBS:PrinterIsAcceptingJobs
static ACCEPTING_JOBS:PrinterIsAcceptingJobs

getCategory(): Class<Attribute>;

getName(): String;
 }

export class PrinterLocation extends TextSyntax implements PrintServiceAttribute {
constructor(arg0: String, arg1: Locale);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class PrinterMakeAndModel extends TextSyntax implements PrintServiceAttribute {
constructor(arg0: String, arg1: Locale);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class PrinterMessageFromOperator extends TextSyntax implements PrintServiceAttribute {
constructor(arg0: String, arg1: Locale);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class PrinterMoreInfo extends URISyntax implements PrintServiceAttribute {
constructor(arg0: URI);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class PrinterMoreInfoManufacturer extends URISyntax implements PrintServiceAttribute {
constructor(arg0: URI);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class PrinterName extends TextSyntax implements PrintServiceAttribute {
constructor(arg0: String, arg1: Locale);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class PrinterResolution extends ResolutionSyntax implements DocAttribute, PrintRequestAttribute, PrintJobAttribute {
constructor(arg0: number, arg1: number, arg2: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class PrinterState extends EnumSyntax implements PrintServiceAttribute {
static UNKNOWN:PrinterState
static IDLE:PrinterState
static PROCESSING:PrinterState
static STOPPED:PrinterState

getCategory(): Class<Attribute>;

getName(): String;
 }

export class PrinterStateReason extends EnumSyntax implements Attribute {
static OTHER:PrinterStateReason
static MEDIA_NEEDED:PrinterStateReason
static MEDIA_JAM:PrinterStateReason
static MOVING_TO_PAUSED:PrinterStateReason
static PAUSED:PrinterStateReason
static SHUTDOWN:PrinterStateReason
static CONNECTING_TO_DEVICE:PrinterStateReason
static TIMED_OUT:PrinterStateReason
static STOPPING:PrinterStateReason
static STOPPED_PARTLY:PrinterStateReason
static TONER_LOW:PrinterStateReason
static TONER_EMPTY:PrinterStateReason
static SPOOL_AREA_FULL:PrinterStateReason
static COVER_OPEN:PrinterStateReason
static INTERLOCK_OPEN:PrinterStateReason
static DOOR_OPEN:PrinterStateReason
static INPUT_TRAY_MISSING:PrinterStateReason
static MEDIA_LOW:PrinterStateReason
static MEDIA_EMPTY:PrinterStateReason
static OUTPUT_TRAY_MISSING:PrinterStateReason
static OUTPUT_AREA_ALMOST_FULL:PrinterStateReason
static OUTPUT_AREA_FULL:PrinterStateReason
static MARKER_SUPPLY_LOW:PrinterStateReason
static MARKER_SUPPLY_EMPTY:PrinterStateReason
static MARKER_WASTE_ALMOST_FULL:PrinterStateReason
static MARKER_WASTE_FULL:PrinterStateReason
static FUSER_OVER_TEMP:PrinterStateReason
static FUSER_UNDER_TEMP:PrinterStateReason
static OPC_NEAR_EOL:PrinterStateReason
static OPC_LIFE_OVER:PrinterStateReason
static DEVELOPER_LOW:PrinterStateReason
static DEVELOPER_EMPTY:PrinterStateReason
static INTERPRETER_RESOURCE_UNAVAILABLE:PrinterStateReason

getCategory(): Class<Attribute>;

getName(): String;
 }

export interface PrinterStateReasons extends PrintServiceAttribute { }
export class PrinterStateReasons extends HashMap<PrinterStateReason, Severity> implements PrintServiceAttribute {
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: number);
constructor(arg0: Map<PrinterStateReason, Severity>);

put(arg0: PrinterStateReason, arg1: Severity): Severity;

getCategory(): Class<Attribute>;

getName(): String;

printerStateReasonSet(arg0: Severity): Set<PrinterStateReason>;
 }

export class PrinterURI extends URISyntax implements PrintServiceAttribute {
constructor(arg0: URI);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class QueuedJobCount extends IntegerSyntax implements PrintServiceAttribute {
constructor(arg0: number);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class ReferenceUriSchemesSupported extends EnumSyntax implements Attribute {
static FTP:ReferenceUriSchemesSupported
static HTTP:ReferenceUriSchemesSupported
static HTTPS:ReferenceUriSchemesSupported
static GOPHER:ReferenceUriSchemesSupported
static NEWS:ReferenceUriSchemesSupported
static NNTP:ReferenceUriSchemesSupported
static WAIS:ReferenceUriSchemesSupported
static FILE:ReferenceUriSchemesSupported

getCategory(): Class<Attribute>;

getName(): String;
 }

export class RequestingUserName extends TextSyntax implements PrintRequestAttribute {
constructor(arg0: String, arg1: Locale);

equals(arg0: Object): boolean;

getCategory(): Class<Attribute>;

getName(): String;
 }

export class Severity extends EnumSyntax implements Attribute {
static REPORT:Severity
static WARNING:Severity
static ERROR:Severity

getCategory(): Class<Attribute>;

getName(): String;
 }

export class SheetCollate extends EnumSyntax implements DocAttribute, PrintRequestAttribute, PrintJobAttribute {
static UNCOLLATED:SheetCollate
static COLLATED:SheetCollate

getCategory(): Class<Attribute>;

getName(): String;
 }

export class Sides extends EnumSyntax implements DocAttribute, PrintRequestAttribute, PrintJobAttribute {
static ONE_SIDED:Sides
static TWO_SIDED_LONG_EDGE:Sides
static TWO_SIDED_SHORT_EDGE:Sides
static DUPLEX:Sides
static TUMBLE:Sides

getCategory(): Class<Attribute>;

getName(): String;
 }

}
