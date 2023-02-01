/// <reference path="java.awt.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="javax.swing.undo.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.beans.d.ts" />
/// <reference path="java.awt.event.d.ts" />
/// <reference path="javax.swing.table.d.ts" />
/// <reference path="javax.swing.tree.d.ts" />
/// <reference path="javax.swing.text.d.ts" />
/// <reference path="javax.swing.d.ts" />
declare module '@afterburnerhq/javax.swing.event' { 
import { Component, AWTEvent, Container } from '@afterburnerhq/java.awt'
import { EventObject, EventListener } from '@afterburnerhq/java.util'
import { Enum, Class, String } from '@afterburnerhq/java.lang'
import { URL } from '@afterburnerhq/java.net'
import { UndoableEdit } from '@afterburnerhq/javax.swing.undo'
import { Serializable } from '@afterburnerhq/java.io'
import { PropertyChangeSupport, PropertyChangeEvent } from '@afterburnerhq/java.beans'
import { KeyEvent, MouseAdapter, InputEvent, MouseEvent, MouseListener, MouseMotionListener } from '@afterburnerhq/java.awt.event'
import { TableColumnModel, TableModel } from '@afterburnerhq/javax.swing.table'
import { TreePath } from '@afterburnerhq/javax.swing.tree'
import { Document, Element } from '@afterburnerhq/javax.swing.text'
import { JComponent, MenuSelectionManager, RowSorter, JInternalFrame, MenuElement } from '@afterburnerhq/javax.swing'
export class AncestorEvent extends AWTEvent {
static ANCESTOR_ADDED:number
static ANCESTOR_REMOVED:number
static ANCESTOR_MOVED:number
constructor(arg0: JComponent, arg1: number, arg2: Container, arg3: Container);

getAncestor(): Container;

getAncestorParent(): Container;

getComponent(): JComponent;
 }

export interface AncestorListener extends EventListener {

ancestorAdded(arg0: AncestorEvent): void;

ancestorRemoved(arg0: AncestorEvent): void;

ancestorMoved(arg0: AncestorEvent): void;
 }

export abstract class CaretEvent extends EventObject {
constructor(arg0: Object);

abstract getDot(): number;

abstract getMark(): number;
 }

export interface CaretListener extends EventListener {

caretUpdate(arg0: CaretEvent): void;
 }

export interface CellEditorListener extends EventListener {

editingStopped(arg0: ChangeEvent): void;

editingCanceled(arg0: ChangeEvent): void;
 }

export class ChangeEvent extends EventObject {
constructor(arg0: Object);
 }

export interface ChangeListener extends EventListener {

stateChanged(arg0: ChangeEvent): void;
 }

export interface DocumentEvent {

getOffset(): number;

getLength(): number;

getDocument(): Document;

getType(): DocumentEvent.EventType;

getChange(arg0: Element): DocumentEvent.ElementChange;
 }
export namespace DocumentEvent { 
export interface ElementChange {

getElement(): Element;

getIndex(): number;

getChildrenRemoved(): Element[];

getChildrenAdded(): Element[];
 }

export class EventType {
static INSERT:DocumentEvent.EventType
static REMOVE:DocumentEvent.EventType
static CHANGE:DocumentEvent.EventType
toString(): string;
 }

}

export interface DocumentListener extends EventListener {

insertUpdate(arg0: DocumentEvent): void;

removeUpdate(arg0: DocumentEvent): void;

changedUpdate(arg0: DocumentEvent): void;
 }

export class EventListenerList implements Serializable {
constructor();

getListenerList(): Object[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

getListenerCount(): number;

getListenerCount(arg0: Class<any>): number;

add<T extends EventListener>(arg0: Class<T>, arg1: T): void;

remove<T extends EventListener>(arg0: Class<T>, arg1: T): void;
toString(): string;
 }

export class HyperlinkEvent extends EventObject {
constructor(arg0: Object, arg1: HyperlinkEvent.EventType, arg2: URL);
constructor(arg0: Object, arg1: HyperlinkEvent.EventType, arg2: URL, arg3: String);
constructor(arg0: Object, arg1: HyperlinkEvent.EventType, arg2: URL, arg3: String, arg4: Element);
constructor(arg0: Object, arg1: HyperlinkEvent.EventType, arg2: URL, arg3: String, arg4: Element, arg5: InputEvent);

getEventType(): HyperlinkEvent.EventType;

getDescription(): String;

getURL(): URL;

getSourceElement(): Element;

getInputEvent(): InputEvent;
 }
export namespace HyperlinkEvent { 
export class EventType {
static ENTERED:HyperlinkEvent.EventType
static EXITED:HyperlinkEvent.EventType
static ACTIVATED:HyperlinkEvent.EventType
toString(): string;
 }

}

export interface HyperlinkListener extends EventListener {

hyperlinkUpdate(arg0: HyperlinkEvent): void;
 }

export abstract class InternalFrameAdapter implements InternalFrameListener {

internalFrameOpened(arg0: InternalFrameEvent): void;

internalFrameClosing(arg0: InternalFrameEvent): void;

internalFrameClosed(arg0: InternalFrameEvent): void;

internalFrameIconified(arg0: InternalFrameEvent): void;

internalFrameDeiconified(arg0: InternalFrameEvent): void;

internalFrameActivated(arg0: InternalFrameEvent): void;

internalFrameDeactivated(arg0: InternalFrameEvent): void;
 }

export class InternalFrameEvent extends AWTEvent {
static INTERNAL_FRAME_FIRST:number
static INTERNAL_FRAME_LAST:number
static INTERNAL_FRAME_OPENED:number
static INTERNAL_FRAME_CLOSING:number
static INTERNAL_FRAME_CLOSED:number
static INTERNAL_FRAME_ICONIFIED:number
static INTERNAL_FRAME_DEICONIFIED:number
static INTERNAL_FRAME_ACTIVATED:number
static INTERNAL_FRAME_DEACTIVATED:number
constructor(arg0: JInternalFrame, arg1: number);

paramString(): String;

getInternalFrame(): JInternalFrame;
 }

export interface InternalFrameListener extends EventListener {

internalFrameOpened(arg0: InternalFrameEvent): void;

internalFrameClosing(arg0: InternalFrameEvent): void;

internalFrameClosed(arg0: InternalFrameEvent): void;

internalFrameIconified(arg0: InternalFrameEvent): void;

internalFrameDeiconified(arg0: InternalFrameEvent): void;

internalFrameActivated(arg0: InternalFrameEvent): void;

internalFrameDeactivated(arg0: InternalFrameEvent): void;
 }

export class ListDataEvent extends EventObject {
static CONTENTS_CHANGED:number
static INTERVAL_ADDED:number
static INTERVAL_REMOVED:number
constructor(arg0: Object, arg1: number, arg2: number, arg3: number);

getType(): number;

getIndex0(): number;

getIndex1(): number;
toString(): string;
 }

export interface ListDataListener extends EventListener {

intervalAdded(arg0: ListDataEvent): void;

intervalRemoved(arg0: ListDataEvent): void;

contentsChanged(arg0: ListDataEvent): void;
 }

export class ListSelectionEvent extends EventObject {
constructor(arg0: Object, arg1: number, arg2: number, arg3: boolean);

getFirstIndex(): number;

getLastIndex(): number;

getValueIsAdjusting(): boolean;
toString(): string;
 }

export interface ListSelectionListener extends EventListener {

valueChanged(arg0: ListSelectionEvent): void;
 }

export class MenuDragMouseEvent extends MouseEvent {
constructor(arg0: Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: MenuElement[], arg9: MenuSelectionManager);
constructor(arg0: Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: MenuElement[], arg11: MenuSelectionManager);

getPath(): MenuElement[];

getMenuSelectionManager(): MenuSelectionManager;
 }

export interface MenuDragMouseListener extends EventListener {

menuDragMouseEntered(arg0: MenuDragMouseEvent): void;

menuDragMouseExited(arg0: MenuDragMouseEvent): void;

menuDragMouseDragged(arg0: MenuDragMouseEvent): void;

menuDragMouseReleased(arg0: MenuDragMouseEvent): void;
 }

export class MenuEvent extends EventObject {
constructor(arg0: Object);
 }

export class MenuKeyEvent extends KeyEvent {
constructor(arg0: Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: String, arg6: MenuElement[], arg7: MenuSelectionManager);

getPath(): MenuElement[];

getMenuSelectionManager(): MenuSelectionManager;
 }

export interface MenuKeyListener extends EventListener {

menuKeyTyped(arg0: MenuKeyEvent): void;

menuKeyPressed(arg0: MenuKeyEvent): void;

menuKeyReleased(arg0: MenuKeyEvent): void;
 }

export interface MenuListener extends EventListener {

menuSelected(arg0: MenuEvent): void;

menuDeselected(arg0: MenuEvent): void;

menuCanceled(arg0: MenuEvent): void;
 }

export abstract class MouseInputAdapter extends MouseAdapter implements MouseInputListener {
 }

export interface MouseInputListener extends MouseListener, MouseMotionListener {
 }

export class PopupMenuEvent extends EventObject {
constructor(arg0: Object);
 }

export interface PopupMenuListener extends EventListener {

popupMenuWillBecomeVisible(arg0: PopupMenuEvent): void;

popupMenuWillBecomeInvisible(arg0: PopupMenuEvent): void;

popupMenuCanceled(arg0: PopupMenuEvent): void;
 }

export class RowSorterEvent extends EventObject {
constructor(arg0: RowSorter<any>);
constructor(arg0: RowSorter<any>, arg1: RowSorterEvent.Type, arg2: number[]);

getSource(): RowSorter<any>;

getType(): RowSorterEvent.Type;

convertPreviousRowIndexToModel(arg0: number): number;

getPreviousRowCount(): number;
 }
export namespace RowSorterEvent { 
export class Type extends Enum<RowSorterEvent.Type> {
static SORT_ORDER_CHANGED:RowSorterEvent.Type
static SORTED:RowSorterEvent.Type

static values(): RowSorterEvent.Type[];

static valueOf(arg0: String): RowSorterEvent.Type;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export interface RowSorterListener extends EventListener {

sorterChanged(arg0: RowSorterEvent): void;
 }

export class SwingPropertyChangeSupport extends PropertyChangeSupport {
constructor(arg0: Object);
constructor(arg0: Object, arg1: boolean);

firePropertyChange(arg0: PropertyChangeEvent): void;

isNotifyOnEDT(): boolean;
 }

export class TableColumnModelEvent extends EventObject {
constructor(arg0: TableColumnModel, arg1: number, arg2: number);

getFromIndex(): number;

getToIndex(): number;
 }

export interface TableColumnModelListener extends EventListener {

columnAdded(arg0: TableColumnModelEvent): void;

columnRemoved(arg0: TableColumnModelEvent): void;

columnMoved(arg0: TableColumnModelEvent): void;

columnMarginChanged(arg0: ChangeEvent): void;

columnSelectionChanged(arg0: ListSelectionEvent): void;
 }

export class TableModelEvent extends EventObject {
static INSERT:number
static UPDATE:number
static DELETE:number
static HEADER_ROW:number
static ALL_COLUMNS:number
constructor(arg0: TableModel);
constructor(arg0: TableModel, arg1: number);
constructor(arg0: TableModel, arg1: number, arg2: number);
constructor(arg0: TableModel, arg1: number, arg2: number, arg3: number);
constructor(arg0: TableModel, arg1: number, arg2: number, arg3: number, arg4: number);

getFirstRow(): number;

getLastRow(): number;

getColumn(): number;

getType(): number;
 }

export interface TableModelListener extends EventListener {

tableChanged(arg0: TableModelEvent): void;
 }

export class TreeExpansionEvent extends EventObject {
constructor(arg0: Object, arg1: TreePath);

getPath(): TreePath;
 }

export interface TreeExpansionListener extends EventListener {

treeExpanded(arg0: TreeExpansionEvent): void;

treeCollapsed(arg0: TreeExpansionEvent): void;
 }

export class TreeModelEvent extends EventObject {
constructor(arg0: Object, arg1: Object[], arg2: number[], arg3: Object[]);
constructor(arg0: Object, arg1: TreePath, arg2: number[], arg3: Object[]);
constructor(arg0: Object, arg1: Object[]);
constructor(arg0: Object, arg1: TreePath);

getTreePath(): TreePath;

getPath(): Object[];

getChildren(): Object[];

getChildIndices(): number[];
toString(): string;
 }

export interface TreeModelListener extends EventListener {

treeNodesChanged(arg0: TreeModelEvent): void;

treeNodesInserted(arg0: TreeModelEvent): void;

treeNodesRemoved(arg0: TreeModelEvent): void;

treeStructureChanged(arg0: TreeModelEvent): void;
 }

export class TreeSelectionEvent extends EventObject {
constructor(arg0: Object, arg1: TreePath[], arg2: boolean[], arg3: TreePath, arg4: TreePath);
constructor(arg0: Object, arg1: TreePath, arg2: boolean, arg3: TreePath, arg4: TreePath);

getPaths(): TreePath[];

getPath(): TreePath;

isAddedPath(): boolean;

isAddedPath(arg0: TreePath): boolean;

isAddedPath(arg0: number): boolean;

getOldLeadSelectionPath(): TreePath;

getNewLeadSelectionPath(): TreePath;

cloneWithSource(arg0: Object): Object;
 }

export interface TreeSelectionListener extends EventListener {

valueChanged(arg0: TreeSelectionEvent): void;
 }

export interface TreeWillExpandListener extends EventListener {

treeWillExpand(arg0: TreeExpansionEvent): void;

treeWillCollapse(arg0: TreeExpansionEvent): void;
 }

export class UndoableEditEvent extends EventObject {
constructor(arg0: Object, arg1: UndoableEdit);

getEdit(): UndoableEdit;
 }

export interface UndoableEditListener extends EventListener {

undoableEditHappened(arg0: UndoableEditEvent): void;
 }

}
