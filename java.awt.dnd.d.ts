/// <reference path="java.awt.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.awt.datatransfer.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.awt.event.d.ts" />
declare module '@afterburnerhq/java.awt.dnd' { 
import { Insets, Point, Component, Cursor, Image } from '@afterburnerhq/java.awt'
import { Iterator, List, EventListener, EventObject } from '@afterburnerhq/java.util'
import { IllegalStateException, Class, String } from '@afterburnerhq/java.lang'
import { Transferable, FlavorMap, DataFlavor } from '@afterburnerhq/java.awt.datatransfer'
import { Serializable } from '@afterburnerhq/java.io'
import { InputEvent, MouseListener, MouseEvent, ActionListener, MouseMotionListener, ActionEvent } from '@afterburnerhq/java.awt.event'
export interface Autoscroll {

getAutoscrollInsets(): Insets;

autoscroll(arg0: Point): void;
 }

export class DnDConstants {
static ACTION_NONE:number
static ACTION_COPY:number
static ACTION_MOVE:number
static ACTION_COPY_OR_MOVE:number
static ACTION_LINK:number
static ACTION_REFERENCE:number
 }

export class DragGestureEvent extends EventObject {
constructor(arg0: DragGestureRecognizer, arg1: number, arg2: Point, arg3: List<InputEvent>);

getSourceAsDragGestureRecognizer(): DragGestureRecognizer;

getComponent(): Component;

getDragSource(): DragSource;

getDragOrigin(): Point;

iterator(): Iterator<InputEvent>;

toArray(): Object[];

toArray(arg0: Object[]): Object[];

getDragAction(): number;

getTriggerEvent(): InputEvent;

startDrag(arg0: Cursor, arg1: Transferable): void;

startDrag(arg0: Cursor, arg1: Transferable, arg2: DragSourceListener): void;

startDrag(arg0: Cursor, arg1: Image, arg2: Point, arg3: Transferable, arg4: DragSourceListener): void;
 }

export interface DragGestureListener extends EventListener {

dragGestureRecognized(arg0: DragGestureEvent): void;
 }

export abstract class DragGestureRecognizer implements Serializable {

getDragSource(): DragSource;

getComponent(): Component;

setComponent(arg0: Component): void;

getSourceActions(): number;

setSourceActions(arg0: number): void;

getTriggerEvent(): InputEvent;

resetRecognizer(): void;

addDragGestureListener(arg0: DragGestureListener): void;

removeDragGestureListener(arg0: DragGestureListener): void;
 }

export class DragSource implements Serializable {
static DefaultCopyDrop:Cursor
static DefaultMoveDrop:Cursor
static DefaultLinkDrop:Cursor
static DefaultCopyNoDrop:Cursor
static DefaultMoveNoDrop:Cursor
static DefaultLinkNoDrop:Cursor
constructor();

static getDefaultDragSource(): DragSource;

static isDragImageSupported(): boolean;

startDrag(arg0: DragGestureEvent, arg1: Cursor, arg2: Image, arg3: Point, arg4: Transferable, arg5: DragSourceListener, arg6: FlavorMap): void;

startDrag(arg0: DragGestureEvent, arg1: Cursor, arg2: Transferable, arg3: DragSourceListener, arg4: FlavorMap): void;

startDrag(arg0: DragGestureEvent, arg1: Cursor, arg2: Image, arg3: Point, arg4: Transferable, arg5: DragSourceListener): void;

startDrag(arg0: DragGestureEvent, arg1: Cursor, arg2: Transferable, arg3: DragSourceListener): void;

getFlavorMap(): FlavorMap;

createDragGestureRecognizer<T extends DragGestureRecognizer>(arg0: Class<T>, arg1: Component, arg2: number, arg3: DragGestureListener): T;

createDefaultDragGestureRecognizer(arg0: Component, arg1: number, arg2: DragGestureListener): DragGestureRecognizer;

addDragSourceListener(arg0: DragSourceListener): void;

removeDragSourceListener(arg0: DragSourceListener): void;

getDragSourceListeners(): DragSourceListener[];

addDragSourceMotionListener(arg0: DragSourceMotionListener): void;

removeDragSourceMotionListener(arg0: DragSourceMotionListener): void;

getDragSourceMotionListeners(): DragSourceMotionListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

static getDragThreshold(): number;
 }

export abstract class DragSourceAdapter implements DragSourceListener, DragSourceMotionListener {

dragEnter(arg0: DragSourceDragEvent): void;

dragOver(arg0: DragSourceDragEvent): void;

dragMouseMoved(arg0: DragSourceDragEvent): void;

dropActionChanged(arg0: DragSourceDragEvent): void;

dragExit(arg0: DragSourceEvent): void;

dragDropEnd(arg0: DragSourceDropEvent): void;
 }

export class DragSourceContext implements DragSourceListener, DragSourceMotionListener, Serializable {
constructor(arg0: DragGestureEvent, arg1: Cursor, arg2: Image, arg3: Point, arg4: Transferable, arg5: DragSourceListener);

getDragSource(): DragSource;

getComponent(): Component;

getTrigger(): DragGestureEvent;

getSourceActions(): number;

setCursor(arg0: Cursor): void;

getCursor(): Cursor;

addDragSourceListener(arg0: DragSourceListener): void;

removeDragSourceListener(arg0: DragSourceListener): void;

transferablesFlavorsChanged(): void;

dragEnter(arg0: DragSourceDragEvent): void;

dragOver(arg0: DragSourceDragEvent): void;

dragExit(arg0: DragSourceEvent): void;

dropActionChanged(arg0: DragSourceDragEvent): void;

dragDropEnd(arg0: DragSourceDropEvent): void;

dragMouseMoved(arg0: DragSourceDragEvent): void;

getTransferable(): Transferable;
 }

export class DragSourceDragEvent extends DragSourceEvent {
constructor(arg0: DragSourceContext, arg1: number, arg2: number, arg3: number);
constructor(arg0: DragSourceContext, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);

getTargetActions(): number;

getGestureModifiers(): number;

getGestureModifiersEx(): number;

getUserAction(): number;

getDropAction(): number;
 }

export class DragSourceDropEvent extends DragSourceEvent {
constructor(arg0: DragSourceContext, arg1: number, arg2: boolean);
constructor(arg0: DragSourceContext, arg1: number, arg2: boolean, arg3: number, arg4: number);
constructor(arg0: DragSourceContext);

getDropSuccess(): boolean;

getDropAction(): number;
 }

export class DragSourceEvent extends EventObject {
constructor(arg0: DragSourceContext);
constructor(arg0: DragSourceContext, arg1: number, arg2: number);

getDragSourceContext(): DragSourceContext;

getLocation(): Point;

getX(): number;

getY(): number;
 }

export interface DragSourceListener extends EventListener {

dragEnter(arg0: DragSourceDragEvent): void;

dragOver(arg0: DragSourceDragEvent): void;

dropActionChanged(arg0: DragSourceDragEvent): void;

dragExit(arg0: DragSourceEvent): void;

dragDropEnd(arg0: DragSourceDropEvent): void;
 }

export interface DragSourceMotionListener extends EventListener {

dragMouseMoved(arg0: DragSourceDragEvent): void;
 }

export class DropTarget implements DropTargetListener, Serializable {
constructor(arg0: Component, arg1: number, arg2: DropTargetListener, arg3: boolean, arg4: FlavorMap);
constructor(arg0: Component, arg1: number, arg2: DropTargetListener, arg3: boolean);
constructor();
constructor(arg0: Component, arg1: DropTargetListener);
constructor(arg0: Component, arg1: number, arg2: DropTargetListener);

setComponent(arg0: Component): void;

getComponent(): Component;

setDefaultActions(arg0: number): void;

getDefaultActions(): number;

setActive(arg0: boolean): void;

isActive(): boolean;

addDropTargetListener(arg0: DropTargetListener): void;

removeDropTargetListener(arg0: DropTargetListener): void;

dragEnter(arg0: DropTargetDragEvent): void;

dragOver(arg0: DropTargetDragEvent): void;

dropActionChanged(arg0: DropTargetDragEvent): void;

dragExit(arg0: DropTargetEvent): void;

drop(arg0: DropTargetDropEvent): void;

getFlavorMap(): FlavorMap;

setFlavorMap(arg0: FlavorMap): void;

addNotify(): void;

removeNotify(): void;

getDropTargetContext(): DropTargetContext;
 }
export namespace DropTarget { 
export class DropTargetAutoScroller implements ActionListener {

actionPerformed(arg0: ActionEvent): void;
 }

}

export abstract class DropTargetAdapter implements DropTargetListener {

dragEnter(arg0: DropTargetDragEvent): void;

dragOver(arg0: DropTargetDragEvent): void;

dropActionChanged(arg0: DropTargetDragEvent): void;

dragExit(arg0: DropTargetEvent): void;
 }

export class DropTargetContext implements Serializable {

getDropTarget(): DropTarget;

getComponent(): Component;

dropComplete(arg0: boolean): void;
 }
export namespace DropTargetContext { 
export class TransferableProxy implements Transferable {

getTransferDataFlavors(): DataFlavor[];

isDataFlavorSupported(arg0: DataFlavor): boolean;

getTransferData(arg0: DataFlavor): Object;
 }

}

export class DropTargetDragEvent extends DropTargetEvent {
constructor(arg0: DropTargetContext, arg1: Point, arg2: number, arg3: number);

getLocation(): Point;

getCurrentDataFlavors(): DataFlavor[];

getCurrentDataFlavorsAsList(): List<DataFlavor>;

isDataFlavorSupported(arg0: DataFlavor): boolean;

getSourceActions(): number;

getDropAction(): number;

getTransferable(): Transferable;

acceptDrag(arg0: number): void;

rejectDrag(): void;
 }

export class DropTargetDropEvent extends DropTargetEvent {
constructor(arg0: DropTargetContext, arg1: Point, arg2: number, arg3: number);
constructor(arg0: DropTargetContext, arg1: Point, arg2: number, arg3: number, arg4: boolean);

getLocation(): Point;

getCurrentDataFlavors(): DataFlavor[];

getCurrentDataFlavorsAsList(): List<DataFlavor>;

isDataFlavorSupported(arg0: DataFlavor): boolean;

getSourceActions(): number;

getDropAction(): number;

getTransferable(): Transferable;

acceptDrop(arg0: number): void;

rejectDrop(): void;

dropComplete(arg0: boolean): void;

isLocalTransfer(): boolean;
 }

export class DropTargetEvent extends EventObject {
constructor(arg0: DropTargetContext);

getDropTargetContext(): DropTargetContext;
 }

export interface DropTargetListener extends EventListener {

dragEnter(arg0: DropTargetDragEvent): void;

dragOver(arg0: DropTargetDragEvent): void;

dropActionChanged(arg0: DropTargetDragEvent): void;

dragExit(arg0: DropTargetEvent): void;

drop(arg0: DropTargetDropEvent): void;
 }

export class InvalidDnDOperationException extends IllegalStateException {
constructor();
constructor(arg0: String);
 }

export abstract class MouseDragGestureRecognizer extends DragGestureRecognizer implements MouseListener, MouseMotionListener {

mouseClicked(arg0: MouseEvent): void;

mousePressed(arg0: MouseEvent): void;

mouseReleased(arg0: MouseEvent): void;

mouseEntered(arg0: MouseEvent): void;

mouseExited(arg0: MouseEvent): void;

mouseDragged(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;
 }

}
