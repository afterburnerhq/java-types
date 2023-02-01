/// <reference path="java.awt.d.ts" />
/// <reference path="java.awt.dnd.d.ts" />
/// <reference path="java.awt.datatransfer.d.ts" />
declare module '@afterburnerhq/java.awt.dnd.peer' { 
import { Cursor, Image, Point } from '@afterburnerhq/java.awt'
import { DragSourceContext, DropTarget } from '@afterburnerhq/java.awt.dnd'
import { Transferable, DataFlavor } from '@afterburnerhq/java.awt.datatransfer'
export interface DragSourceContextPeer {

startDrag(arg0: DragSourceContext, arg1: Cursor, arg2: Image, arg3: Point): void;

getCursor(): Cursor;

setCursor(arg0: Cursor): void;

transferablesFlavorsChanged(): void;
 }

export interface DropTargetContextPeer {

setTargetActions(arg0: number): void;

getTargetActions(): number;

getDropTarget(): DropTarget;

getTransferDataFlavors(): DataFlavor[];

getTransferable(): Transferable;

isTransferableJVMLocal(): boolean;

acceptDrag(arg0: number): void;

rejectDrag(): void;

acceptDrop(arg0: number): void;

rejectDrop(): void;

dropComplete(arg0: boolean): void;
 }

export interface DropTargetPeer {

addDropTarget(arg0: DropTarget): void;

removeDropTarget(arg0: DropTarget): void;
 }

}
