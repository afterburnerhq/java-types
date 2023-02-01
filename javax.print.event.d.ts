/// <reference path="java.util.d.ts" />
/// <reference path="javax.print.d.ts" />
/// <reference path="javax.print.attribute.d.ts" />
declare module '@afterburnerhq/javax.print.event' { 
import { EventObject } from '@afterburnerhq/java.util'
import { DocPrintJob, PrintService } from '@afterburnerhq/javax.print'
import { PrintServiceAttributeSet, PrintJobAttributeSet } from '@afterburnerhq/javax.print.attribute'
export class PrintEvent extends EventObject {
constructor(arg0: Object);
toString(): string;
 }

export abstract class PrintJobAdapter implements PrintJobListener {

printDataTransferCompleted(arg0: PrintJobEvent): void;

printJobCompleted(arg0: PrintJobEvent): void;

printJobFailed(arg0: PrintJobEvent): void;

printJobCanceled(arg0: PrintJobEvent): void;

printJobNoMoreEvents(arg0: PrintJobEvent): void;

printJobRequiresAttention(arg0: PrintJobEvent): void;
 }

export class PrintJobAttributeEvent extends PrintEvent {
constructor(arg0: DocPrintJob, arg1: PrintJobAttributeSet);

getPrintJob(): DocPrintJob;

getAttributes(): PrintJobAttributeSet;
 }

export interface PrintJobAttributeListener {

attributeUpdate(arg0: PrintJobAttributeEvent): void;
 }

export class PrintJobEvent extends PrintEvent {
static JOB_CANCELED:number
static JOB_COMPLETE:number
static JOB_FAILED:number
static REQUIRES_ATTENTION:number
static NO_MORE_EVENTS:number
static DATA_TRANSFER_COMPLETE:number
constructor(arg0: DocPrintJob, arg1: number);

getPrintEventType(): number;

getPrintJob(): DocPrintJob;
 }

export interface PrintJobListener {

printDataTransferCompleted(arg0: PrintJobEvent): void;

printJobCompleted(arg0: PrintJobEvent): void;

printJobFailed(arg0: PrintJobEvent): void;

printJobCanceled(arg0: PrintJobEvent): void;

printJobNoMoreEvents(arg0: PrintJobEvent): void;

printJobRequiresAttention(arg0: PrintJobEvent): void;
 }

export class PrintServiceAttributeEvent extends PrintEvent {
constructor(arg0: PrintService, arg1: PrintServiceAttributeSet);

getPrintService(): PrintService;

getAttributes(): PrintServiceAttributeSet;
 }

export interface PrintServiceAttributeListener {

attributeUpdate(arg0: PrintServiceAttributeEvent): void;
 }

}
