/// <reference path="java.util.d.ts" />
/// <reference path="java.awt.geom.d.ts" />
/// <reference path="javax.swing.event.d.ts" />
/// <reference path="java.awt.im.d.ts" />
/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.text.d.ts" />
/// <reference path="javax.accessibility.d.ts" />
/// <reference path="javax.swing.undo.d.ts" />
/// <reference path="java.awt.print.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.swing.plaf.d.ts" />
/// <reference path="java.awt.event.d.ts" />
/// <reference path="javax.swing.plaf.basic.d.ts" />
/// <reference path="javax.print.d.ts" />
/// <reference path="javax.swing.tree.d.ts" />
/// <reference path="javax.print.attribute.d.ts" />
/// <reference path="javax.swing.d.ts" />
declare module '@afterburnerhq/javax.swing.text' { 
import { Dictionary, EventListener, Enumeration } from '@afterburnerhq/java.util'
import { Rectangle2D, Point2D } from '@afterburnerhq/java.awt.geom'
import { UndoableEditListener, CaretEvent, DocumentListener, ChangeListener, CaretListener, DocumentEvent } from '@afterburnerhq/javax.swing.event'
import { InputMethodRequests } from '@afterburnerhq/java.awt.im'
import { Shape, Insets, Color, Rectangle, ComponentOrientation, Point, Dimension, Font, Graphics2D, Graphics, Container, FontMetrics, Component } from '@afterburnerhq/java.awt'
import { Comparable, Runnable, CharSequence, Class, Cloneable, String, Exception } from '@afterburnerhq/java.lang'
import { Format, MessageFormat, CharacterIterator, DateFormat, NumberFormat } from '@afterburnerhq/java.text'
import { AccessibleEditableText, AccessibleTextSequence, AccessibleAction, AccessibleContext, AccessibleStateSet, AccessibleText, AccessibleRole, AccessibleExtendedText, Accessible } from '@afterburnerhq/javax.accessibility'
import { UndoableEdit, CompoundEdit, AbstractUndoableEdit } from '@afterburnerhq/javax.swing.undo'
import { Printable } from '@afterburnerhq/java.awt.print'
import { PrintStream, Serializable, InputStream, OutputStream, Reader, IOException, ObjectOutputStream, Writer, ObjectInputStream } from '@afterburnerhq/java.io'
import { TextUI } from '@afterburnerhq/javax.swing.plaf'
import { MouseListener, MouseEvent, ActionEvent, InputMethodListener, MouseMotionListener, FocusListener, FocusEvent } from '@afterburnerhq/java.awt.event'
import { BasicTextUI } from '@afterburnerhq/javax.swing.plaf.basic'
import { PrintService } from '@afterburnerhq/javax.print'
import { TreeNode } from '@afterburnerhq/javax.swing.tree'
import { PrintRequestAttributeSet } from '@afterburnerhq/javax.print.attribute'
import { Action, SwingConstants, JFormattedTextField, JEditorPane, JComponent, KeyStroke, TransferHandler, Icon, Scrollable, DropMode, AbstractAction } from '@afterburnerhq/javax.swing'
export abstract class AbstractDocument implements Document, Serializable {
static ParagraphElementName:String
static ContentElementName:String
static SectionElementName:String
static BidiElementName:String
static ElementNameAttribute:String

getDocumentProperties(): Dictionary<Object, Object>;

setDocumentProperties(arg0: Dictionary<Object, Object>): void;

getListeners<T extends EventListener>(arg0: Class<T>): T[];

getAsynchronousLoadPriority(): number;

setAsynchronousLoadPriority(arg0: number): void;

setDocumentFilter(arg0: DocumentFilter): void;

getDocumentFilter(): DocumentFilter;

render(arg0: Runnable): void;

getLength(): number;

addDocumentListener(arg0: DocumentListener): void;

removeDocumentListener(arg0: DocumentListener): void;

getDocumentListeners(): DocumentListener[];

addUndoableEditListener(arg0: UndoableEditListener): void;

removeUndoableEditListener(arg0: UndoableEditListener): void;

getUndoableEditListeners(): UndoableEditListener[];

getProperty(arg0: Object): Object;

putProperty(arg0: Object, arg1: Object): void;

remove(arg0: number, arg1: number): void;

replace(arg0: number, arg1: number, arg2: String, arg3: AttributeSet): void;

insertString(arg0: number, arg1: String, arg2: AttributeSet): void;

getText(arg0: number, arg1: number): String;

getText(arg0: number, arg1: number, arg2: Segment): void;

createPosition(arg0: number): Position;

getStartPosition(): Position;

getEndPosition(): Position;

getRootElements(): Element[];

abstract getDefaultRootElement(): Element;

getBidiRootElement(): Element;

abstract getParagraphElement(arg0: number): Element;

dump(arg0: PrintStream): void;

readLock(): void;

readUnlock(): void;
 }
export namespace AbstractDocument { 
export abstract class AbstractElement implements Element, MutableAttributeSet, Serializable, TreeNode {
constructor(arg0: AbstractDocument, arg1: Element, arg2: AttributeSet);

dump(arg0: PrintStream, arg1: number): void;

getAttributeCount(): number;

isDefined(arg0: Object): boolean;

isEqual(arg0: AttributeSet): boolean;

copyAttributes(): AttributeSet;

getAttribute(arg0: Object): Object;

getAttributeNames(): Enumeration<any>;

containsAttribute(arg0: Object, arg1: Object): boolean;

containsAttributes(arg0: AttributeSet): boolean;

getResolveParent(): AttributeSet;

addAttribute(arg0: Object, arg1: Object): void;

addAttributes(arg0: AttributeSet): void;

removeAttribute(arg0: Object): void;

removeAttributes(arg0: Enumeration<any>): void;

removeAttributes(arg0: AttributeSet): void;

setResolveParent(arg0: AttributeSet): void;

getDocument(): Document;

getParentElement(): Element;

getAttributes(): AttributeSet;

getName(): String;

abstract getStartOffset(): number;

abstract getEndOffset(): number;

abstract getElement(arg0: number): Element;

abstract getElementCount(): number;

abstract getElementIndex(arg0: number): number;

abstract isLeaf(): boolean;

getChildAt(arg0: number): TreeNode;

getChildCount(): number;

getParent(): TreeNode;

getIndex(arg0: TreeNode): number;

abstract getAllowsChildren(): boolean;

abstract children(): Enumeration<TreeNode>;
 }

export interface AttributeContext {

addAttribute(arg0: AttributeSet, arg1: Object, arg2: Object): AttributeSet;

addAttributes(arg0: AttributeSet, arg1: AttributeSet): AttributeSet;

removeAttribute(arg0: AttributeSet, arg1: Object): AttributeSet;

removeAttributes(arg0: AttributeSet, arg1: Enumeration<any>): AttributeSet;

removeAttributes(arg0: AttributeSet, arg1: AttributeSet): AttributeSet;

getEmptySet(): AttributeSet;

reclaim(arg0: AttributeSet): void;
 }

export class BranchElement extends AbstractDocument.AbstractElement {
constructor(arg0: AbstractDocument, arg1: Element, arg2: AttributeSet);

positionToElement(arg0: number): Element;

replace(arg0: number, arg1: number, arg2: Element[]): void;
toString(): string;

getName(): String;

getStartOffset(): number;

getEndOffset(): number;

getElement(arg0: number): Element;

getElementCount(): number;

getElementIndex(arg0: number): number;

isLeaf(): boolean;

getAllowsChildren(): boolean;

children(): Enumeration<TreeNode>;
 }

export interface Content {

createPosition(arg0: number): Position;

length(): number;

insertString(arg0: number, arg1: String): UndoableEdit;

remove(arg0: number, arg1: number): UndoableEdit;

getString(arg0: number, arg1: number): String;

getChars(arg0: number, arg1: number, arg2: Segment): void;
 }

export class DefaultDocumentEvent extends CompoundEdit implements DocumentEvent {
constructor(arg0: AbstractDocument, arg1: number, arg2: number, arg3: DocumentEvent.EventType);
toString(): string;

addEdit(arg0: UndoableEdit): boolean;

redo(): void;

undo(): void;

isSignificant(): boolean;

getPresentationName(): String;

getUndoPresentationName(): String;

getRedoPresentationName(): String;

getType(): DocumentEvent.EventType;

getOffset(): number;

getLength(): number;

getDocument(): Document;

getChange(arg0: Element): DocumentEvent.ElementChange;
 }

export class ElementEdit extends AbstractUndoableEdit implements DocumentEvent.ElementChange {
constructor(arg0: Element, arg1: number, arg2: Element[], arg3: Element[]);

getElement(): Element;

getIndex(): number;

getChildrenRemoved(): Element[];

getChildrenAdded(): Element[];

redo(): void;

undo(): void;
 }

export class LeafElement extends AbstractDocument.AbstractElement {
constructor(arg0: AbstractDocument, arg1: Element, arg2: AttributeSet, arg3: number, arg4: number);
toString(): string;

getStartOffset(): number;

getEndOffset(): number;

getName(): String;

getElementIndex(arg0: number): number;

getElement(arg0: number): Element;

getElementCount(): number;

isLeaf(): boolean;

getAllowsChildren(): boolean;

children(): Enumeration<TreeNode>;
 }

}

export abstract class AbstractWriter {

getStartOffset(): number;

getEndOffset(): number;

setLineSeparator(arg0: String): void;

getLineSeparator(): String;
 }

export class AsyncBoxView extends View {
constructor(arg0: Element, arg1: number);

getMajorAxis(): number;

getMinorAxis(): number;

getTopInset(): number;

setTopInset(arg0: number): void;

getBottomInset(): number;

setBottomInset(arg0: number): void;

getLeftInset(): number;

setLeftInset(arg0: number): void;

getRightInset(): number;

setRightInset(arg0: number): void;

replace(arg0: number, arg1: number, arg2: View[]): void;

setParent(arg0: View): void;

preferenceChanged(arg0: View, arg1: boolean, arg2: boolean): void;

setSize(arg0: number, arg1: number): void;

paint(arg0: Graphics, arg1: Shape): void;

getPreferredSpan(arg0: number): number;

getMinimumSpan(arg0: number): number;

getMaximumSpan(arg0: number): number;

getViewCount(): number;

getView(arg0: number): View;

getChildAllocation(arg0: number, arg1: Shape): Shape;

getViewIndex(arg0: number, arg1: Position.Bias): number;

modelToView(arg0: number, arg1: Shape, arg2: Position.Bias): Shape;

viewToModel(arg0: number, arg1: number, arg2: Shape, arg3: Position.Bias[]): number;

getNextVisualPositionFrom(arg0: number, arg1: Position.Bias, arg2: Shape, arg3: number, arg4: Position.Bias[]): number;
 }
export namespace AsyncBoxView { 
export class ChildLocator {
constructor(arg0: AsyncBoxView);

childChanged(arg0: AsyncBoxView.ChildState): void;

paintChildren(arg0: Graphics): void;

getChildAllocation(arg0: number, arg1: Shape): Shape;

getViewIndexAtPoint(arg0: number, arg1: number, arg2: Shape): number;
 }

export class ChildState implements Runnable {
constructor(arg0: AsyncBoxView, arg1: View);

getChildView(): View;

run(): void;

getMinorSpan(): number;

getMinorOffset(): number;

getMajorSpan(): number;

getMajorOffset(): number;

setMajorOffset(arg0: number): void;

preferenceChanged(arg0: boolean, arg1: boolean): void;

isLayoutValid(): boolean;
 }

}

export namespace AttributeSet { 
const NameAttribute:Object
const ResolveAttribute:Object
}

export interface AttributeSet {
NameAttribute:Object
ResolveAttribute:Object

getAttributeCount(): number;

isDefined(arg0: Object): boolean;

isEqual(arg0: AttributeSet): boolean;

copyAttributes(): AttributeSet;

getAttribute(arg0: Object): Object;

getAttributeNames(): Enumeration<any>;

containsAttribute(arg0: Object, arg1: Object): boolean;

containsAttributes(arg0: AttributeSet): boolean;

getResolveParent(): AttributeSet;
 }
export namespace AttributeSet { 
export interface CharacterAttribute {
 }

export interface ColorAttribute {
 }

export interface FontAttribute {
 }

export interface ParagraphAttribute {
 }

}

export class BadLocationException extends Exception {
constructor(arg0: String, arg1: number);

offsetRequested(): number;
 }

export class BoxView extends CompositeView {
constructor(arg0: Element, arg1: number);

getAxis(): number;

setAxis(arg0: number): void;

layoutChanged(arg0: number): void;

replace(arg0: number, arg1: number, arg2: View[]): void;

preferenceChanged(arg0: View, arg1: boolean, arg2: boolean): void;

getResizeWeight(arg0: number): number;

setSize(arg0: number, arg1: number): void;

paint(arg0: Graphics, arg1: Shape): void;

getChildAllocation(arg0: number, arg1: Shape): Shape;

modelToView(arg0: number, arg1: Shape, arg2: Position.Bias): Shape;

viewToModel(arg0: number, arg1: number, arg2: Shape, arg3: Position.Bias[]): number;

getAlignment(arg0: number): number;

getPreferredSpan(arg0: number): number;

getMinimumSpan(arg0: number): number;

getMaximumSpan(arg0: number): number;

getWidth(): number;

getHeight(): number;
 }

export interface Caret {

install(arg0: JTextComponent): void;

deinstall(arg0: JTextComponent): void;

paint(arg0: Graphics): void;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;

isVisible(): boolean;

setVisible(arg0: boolean): void;

isSelectionVisible(): boolean;

setSelectionVisible(arg0: boolean): void;

setMagicCaretPosition(arg0: Point): void;

getMagicCaretPosition(): Point;

setBlinkRate(arg0: number): void;

getBlinkRate(): number;

getDot(): number;

getMark(): number;

setDot(arg0: number): void;

moveDot(arg0: number): void;
 }

export class ChangedCharSetException extends IOException {
constructor(arg0: String, arg1: boolean);

getCharSetSpec(): String;

keyEqualsCharSet(): boolean;
 }

export class ComponentView extends View {
constructor(arg0: Element);

getComponent(): Component;

paint(arg0: Graphics, arg1: Shape): void;

getPreferredSpan(arg0: number): number;

getMinimumSpan(arg0: number): number;

getMaximumSpan(arg0: number): number;

getAlignment(arg0: number): number;

setParent(arg0: View): void;

modelToView(arg0: number, arg1: Shape, arg2: Position.Bias): Shape;

viewToModel(arg0: number, arg1: number, arg2: Shape, arg3: Position.Bias[]): number;
 }

export abstract class CompositeView extends View {
constructor(arg0: Element);

setParent(arg0: View): void;

getViewCount(): number;

getView(arg0: number): View;

replace(arg0: number, arg1: number, arg2: View[]): void;

getChildAllocation(arg0: number, arg1: Shape): Shape;

modelToView(arg0: number, arg1: Shape, arg2: Position.Bias): Shape;

modelToView(arg0: number, arg1: Position.Bias, arg2: number, arg3: Position.Bias, arg4: Shape): Shape;

viewToModel(arg0: number, arg1: number, arg2: Shape, arg3: Position.Bias[]): number;

getNextVisualPositionFrom(arg0: number, arg1: Position.Bias, arg2: Shape, arg3: number, arg4: Position.Bias[]): number;

getViewIndex(arg0: number, arg1: Position.Bias): number;
 }

export class DateFormatter extends InternationalFormatter {
constructor();
constructor(arg0: DateFormat);

setFormat(arg0: DateFormat): void;
 }

export class DefaultCaret extends Rectangle implements Caret, FocusListener, MouseListener, MouseMotionListener {
static UPDATE_WHEN_ON_EDT:number
static NEVER_UPDATE:number
static ALWAYS_UPDATE:number
constructor();

setUpdatePolicy(arg0: number): void;

getUpdatePolicy(): number;

focusGained(arg0: FocusEvent): void;

focusLost(arg0: FocusEvent): void;

mouseClicked(arg0: MouseEvent): void;

mousePressed(arg0: MouseEvent): void;

mouseReleased(arg0: MouseEvent): void;

mouseEntered(arg0: MouseEvent): void;

mouseExited(arg0: MouseEvent): void;

mouseDragged(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;

paint(arg0: Graphics): void;

install(arg0: JTextComponent): void;

deinstall(arg0: JTextComponent): void;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;

getChangeListeners(): ChangeListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

setSelectionVisible(arg0: boolean): void;

isSelectionVisible(): boolean;

isActive(): boolean;

isVisible(): boolean;

setVisible(arg0: boolean): void;

setBlinkRate(arg0: number): void;

getBlinkRate(): number;

getDot(): number;

getMark(): number;

setDot(arg0: number): void;

moveDot(arg0: number): void;

moveDot(arg0: number, arg1: Position.Bias): void;

setDot(arg0: number, arg1: Position.Bias): void;

getDotBias(): Position.Bias;

getMarkBias(): Position.Bias;

setMagicCaretPosition(arg0: Point): void;

getMagicCaretPosition(): Point;

equals(arg0: Object): boolean;
toString(): string;
 }

export class DefaultEditorKit extends EditorKit {
static EndOfLineStringProperty:String
static insertContentAction:String
static insertBreakAction:String
static insertTabAction:String
static deletePrevCharAction:String
static deleteNextCharAction:String
static deleteNextWordAction:String
static deletePrevWordAction:String
static readOnlyAction:String
static writableAction:String
static cutAction:String
static copyAction:String
static pasteAction:String
static beepAction:String
static pageUpAction:String
static pageDownAction:String
static forwardAction:String
static backwardAction:String
static selectionForwardAction:String
static selectionBackwardAction:String
static upAction:String
static downAction:String
static selectionUpAction:String
static selectionDownAction:String
static beginWordAction:String
static endWordAction:String
static selectionBeginWordAction:String
static selectionEndWordAction:String
static previousWordAction:String
static nextWordAction:String
static selectionPreviousWordAction:String
static selectionNextWordAction:String
static beginLineAction:String
static endLineAction:String
static selectionBeginLineAction:String
static selectionEndLineAction:String
static beginParagraphAction:String
static endParagraphAction:String
static selectionBeginParagraphAction:String
static selectionEndParagraphAction:String
static beginAction:String
static endAction:String
static selectionBeginAction:String
static selectionEndAction:String
static selectWordAction:String
static selectLineAction:String
static selectParagraphAction:String
static selectAllAction:String
static defaultKeyTypedAction:String
constructor();

getContentType(): String;

getViewFactory(): ViewFactory;

getActions(): Action[];

createCaret(): Caret;

createDefaultDocument(): Document;

read(arg0: InputStream, arg1: Document, arg2: number): void;

write(arg0: OutputStream, arg1: Document, arg2: number, arg3: number): void;

read(arg0: Reader, arg1: Document, arg2: number): void;

write(arg0: Writer, arg1: Document, arg2: number, arg3: number): void;
 }
export namespace DefaultEditorKit { 
export interface BeepAction { }
export class BeepAction extends TextAction {
constructor();

actionPerformed(arg0: ActionEvent): void;
 }

export interface CopyAction { }
export class CopyAction extends TextAction {
constructor();

actionPerformed(arg0: ActionEvent): void;
 }

export interface CutAction { }
export class CutAction extends TextAction {
constructor();

actionPerformed(arg0: ActionEvent): void;
 }

export interface DefaultKeyTypedAction { }
export class DefaultKeyTypedAction extends TextAction {
constructor();

actionPerformed(arg0: ActionEvent): void;
 }

export interface InsertBreakAction { }
export class InsertBreakAction extends TextAction {
constructor();

actionPerformed(arg0: ActionEvent): void;
 }

export interface InsertContentAction { }
export class InsertContentAction extends TextAction {
constructor();

actionPerformed(arg0: ActionEvent): void;
 }

export interface InsertTabAction { }
export class InsertTabAction extends TextAction {
constructor();

actionPerformed(arg0: ActionEvent): void;
 }

export interface PasteAction { }
export class PasteAction extends TextAction {
constructor();

actionPerformed(arg0: ActionEvent): void;
 }

}

export class DefaultFormatter extends JFormattedTextField.AbstractFormatter implements Cloneable, Serializable {
constructor();

install(arg0: JFormattedTextField): void;

setCommitsOnValidEdit(arg0: boolean): void;

getCommitsOnValidEdit(): boolean;

setOverwriteMode(arg0: boolean): void;

getOverwriteMode(): boolean;

setAllowsInvalid(arg0: boolean): void;

getAllowsInvalid(): boolean;

setValueClass(arg0: Class<any>): void;

getValueClass(): Class<any>;

stringToValue(arg0: String): Object;

valueToString(arg0: Object): String;

clone(): Object;
 }

export class DefaultFormatterFactory extends JFormattedTextField.AbstractFormatterFactory implements Serializable {
constructor();
constructor(arg0: JFormattedTextField.AbstractFormatter);
constructor(arg0: JFormattedTextField.AbstractFormatter, arg1: JFormattedTextField.AbstractFormatter);
constructor(arg0: JFormattedTextField.AbstractFormatter, arg1: JFormattedTextField.AbstractFormatter, arg2: JFormattedTextField.AbstractFormatter);
constructor(arg0: JFormattedTextField.AbstractFormatter, arg1: JFormattedTextField.AbstractFormatter, arg2: JFormattedTextField.AbstractFormatter, arg3: JFormattedTextField.AbstractFormatter);

setDefaultFormatter(arg0: JFormattedTextField.AbstractFormatter): void;

getDefaultFormatter(): JFormattedTextField.AbstractFormatter;

setDisplayFormatter(arg0: JFormattedTextField.AbstractFormatter): void;

getDisplayFormatter(): JFormattedTextField.AbstractFormatter;

setEditFormatter(arg0: JFormattedTextField.AbstractFormatter): void;

getEditFormatter(): JFormattedTextField.AbstractFormatter;

setNullFormatter(arg0: JFormattedTextField.AbstractFormatter): void;

getNullFormatter(): JFormattedTextField.AbstractFormatter;

getFormatter(arg0: JFormattedTextField): JFormattedTextField.AbstractFormatter;
 }

export class DefaultHighlighter extends LayeredHighlighter {
static DefaultPainter:LayeredHighlighter.LayerPainter
constructor();

paint(arg0: Graphics): void;

install(arg0: JTextComponent): void;

deinstall(arg0: JTextComponent): void;

addHighlight(arg0: number, arg1: number, arg2: Highlighter.HighlightPainter): Object;

removeHighlight(arg0: Object): void;

removeAllHighlights(): void;

changeHighlight(arg0: Object, arg1: number, arg2: number): void;

getHighlights(): Highlighter.Highlight[];

paintLayeredHighlights(arg0: Graphics, arg1: number, arg2: number, arg3: Shape, arg4: JTextComponent, arg5: View): void;

setDrawsLayeredHighlights(arg0: boolean): void;

getDrawsLayeredHighlights(): boolean;
 }
export namespace DefaultHighlighter { 
export class DefaultHighlightPainter extends LayeredHighlighter.LayerPainter {
constructor(arg0: Color);

getColor(): Color;

paint(arg0: Graphics, arg1: number, arg2: number, arg3: Shape, arg4: JTextComponent): void;

paintLayer(arg0: Graphics, arg1: number, arg2: number, arg3: Shape, arg4: JTextComponent, arg5: View): Shape;
 }

}

export class DefaultStyledDocument extends AbstractDocument implements StyledDocument {
static BUFFER_SIZE_DEFAULT:number
constructor(arg0: AbstractDocument.Content, arg1: StyleContext);
constructor(arg0: StyleContext);
constructor();

getDefaultRootElement(): Element;

removeElement(arg0: Element): void;

addStyle(arg0: String, arg1: Style): Style;

removeStyle(arg0: String): void;

getStyle(arg0: String): Style;

getStyleNames(): Enumeration<any>;

setLogicalStyle(arg0: number, arg1: Style): void;

getLogicalStyle(arg0: number): Style;

setCharacterAttributes(arg0: number, arg1: number, arg2: AttributeSet, arg3: boolean): void;

setParagraphAttributes(arg0: number, arg1: number, arg2: AttributeSet, arg3: boolean): void;

getParagraphElement(arg0: number): Element;

getCharacterElement(arg0: number): Element;

getForeground(arg0: AttributeSet): Color;

getBackground(arg0: AttributeSet): Color;

getFont(arg0: AttributeSet): Font;

addDocumentListener(arg0: DocumentListener): void;

removeDocumentListener(arg0: DocumentListener): void;
 }
export namespace DefaultStyledDocument { 
export class AttributeUndoableEdit extends AbstractUndoableEdit {
constructor(arg0: Element, arg1: AttributeSet, arg2: boolean);

redo(): void;

undo(): void;
 }

export class ElementBuffer implements Serializable {
constructor(arg0: DefaultStyledDocument, arg1: Element);

getRootElement(): Element;

insert(arg0: number, arg1: number, arg2: DefaultStyledDocument.ElementSpec[], arg3: AbstractDocument.DefaultDocumentEvent): void;

remove(arg0: number, arg1: number, arg2: AbstractDocument.DefaultDocumentEvent): void;

change(arg0: number, arg1: number, arg2: AbstractDocument.DefaultDocumentEvent): void;

clone(arg0: Element, arg1: Element): Element;
 }

export class ElementSpec {
static StartTagType:number
static EndTagType:number
static ContentType:number
static JoinPreviousDirection:number
static JoinNextDirection:number
static OriginateDirection:number
static JoinFractureDirection:number
constructor(arg0: AttributeSet, arg1: number);
constructor(arg0: AttributeSet, arg1: number, arg2: number);
constructor(arg0: AttributeSet, arg1: number, arg2: String[], arg3: number, arg4: number);

setType(arg0: number): void;

getType(): number;

setDirection(arg0: number): void;

getDirection(): number;

getAttributes(): AttributeSet;

getArray(): String[];

getOffset(): number;

getLength(): number;
toString(): string;
 }

export class SectionElement extends AbstractDocument.BranchElement {
constructor(arg0: DefaultStyledDocument);

getName(): String;
 }

}

export abstract class DefaultTextUI extends BasicTextUI {
 }

export namespace Document { 
const StreamDescriptionProperty:String
const TitleProperty:String
}

export interface Document {
StreamDescriptionProperty:String
TitleProperty:String

getLength(): number;

addDocumentListener(arg0: DocumentListener): void;

removeDocumentListener(arg0: DocumentListener): void;

addUndoableEditListener(arg0: UndoableEditListener): void;

removeUndoableEditListener(arg0: UndoableEditListener): void;

getProperty(arg0: Object): Object;

putProperty(arg0: Object, arg1: Object): void;

remove(arg0: number, arg1: number): void;

insertString(arg0: number, arg1: String, arg2: AttributeSet): void;

getText(arg0: number, arg1: number): String;

getText(arg0: number, arg1: number, arg2: Segment): void;

getStartPosition(): Position;

getEndPosition(): Position;

createPosition(arg0: number): Position;

getRootElements(): Element[];

getDefaultRootElement(): Element;

render(arg0: Runnable): void;
 }

export class DocumentFilter {
constructor();

remove(arg0: DocumentFilter.FilterBypass, arg1: number, arg2: number): void;

insertString(arg0: DocumentFilter.FilterBypass, arg1: number, arg2: String, arg3: AttributeSet): void;

replace(arg0: DocumentFilter.FilterBypass, arg1: number, arg2: number, arg3: String, arg4: AttributeSet): void;
 }
export namespace DocumentFilter { 
export abstract class FilterBypass {

abstract getDocument(): Document;

abstract remove(arg0: number, arg1: number): void;

abstract insertString(arg0: number, arg1: String, arg2: AttributeSet): void;

abstract replace(arg0: number, arg1: number, arg2: String, arg3: AttributeSet): void;
 }

}

export abstract class EditorKit implements Cloneable, Serializable {
constructor();

clone(): Object;

install(arg0: JEditorPane): void;

deinstall(arg0: JEditorPane): void;

abstract getContentType(): String;

abstract getViewFactory(): ViewFactory;

abstract getActions(): Action[];

abstract createCaret(): Caret;

abstract createDefaultDocument(): Document;

abstract read(arg0: InputStream, arg1: Document, arg2: number): void;

abstract write(arg0: OutputStream, arg1: Document, arg2: number, arg3: number): void;

abstract read(arg0: Reader, arg1: Document, arg2: number): void;

abstract write(arg0: Writer, arg1: Document, arg2: number, arg3: number): void;
 }

export interface Element {

getDocument(): Document;

getParentElement(): Element;

getName(): String;

getAttributes(): AttributeSet;

getStartOffset(): number;

getEndOffset(): number;

getElementIndex(arg0: number): number;

getElementCount(): number;

getElement(arg0: number): Element;

isLeaf(): boolean;
 }

export class ElementIterator implements Cloneable {
constructor(arg0: Document);
constructor(arg0: Element);

clone(): Object;

first(): Element;

depth(): number;

current(): Element;

next(): Element;

previous(): Element;
 }

export class FieldView extends PlainView {
constructor(arg0: Element);

paint(arg0: Graphics, arg1: Shape): void;

getPreferredSpan(arg0: number): number;

getResizeWeight(arg0: number): number;

modelToView(arg0: number, arg1: Shape, arg2: Position.Bias): Shape;

viewToModel(arg0: number, arg1: number, arg2: Shape, arg3: Position.Bias[]): number;

insertUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;

removeUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;
 }

export abstract class FlowView extends BoxView {
constructor(arg0: Element, arg1: number);

getFlowAxis(): number;

getFlowSpan(arg0: number): number;

getFlowStart(arg0: number): number;

insertUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;

removeUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;

changedUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;

setParent(arg0: View): void;
 }
export namespace FlowView { 
export class FlowStrategy {
constructor();

insertUpdate(arg0: FlowView, arg1: DocumentEvent, arg2: Rectangle): void;

removeUpdate(arg0: FlowView, arg1: DocumentEvent, arg2: Rectangle): void;

changedUpdate(arg0: FlowView, arg1: DocumentEvent, arg2: Rectangle): void;

layout(arg0: FlowView): void;
 }

}

export class GapContent extends GapVector implements AbstractDocument.Content, Serializable {
constructor();
constructor(arg0: number);

length(): number;

insertString(arg0: number, arg1: String): UndoableEdit;

remove(arg0: number, arg1: number): UndoableEdit;

getString(arg0: number, arg1: number): String;

getChars(arg0: number, arg1: number, arg2: Segment): void;

createPosition(arg0: number): Position;
 }

export class GlyphView extends View implements TabableView, Cloneable {
constructor(arg0: Element);

getGlyphPainter(): GlyphView.GlyphPainter;

setGlyphPainter(arg0: GlyphView.GlyphPainter): void;

getText(arg0: number, arg1: number): Segment;

getBackground(): Color;

getForeground(): Color;

getFont(): Font;

isUnderline(): boolean;

isStrikeThrough(): boolean;

isSubscript(): boolean;

isSuperscript(): boolean;

getTabExpander(): TabExpander;

getTabbedSpan(arg0: number, arg1: TabExpander): number;

getPartialSpan(arg0: number, arg1: number): number;

getStartOffset(): number;

getEndOffset(): number;

paint(arg0: Graphics, arg1: Shape): void;

getMinimumSpan(arg0: number): number;

getPreferredSpan(arg0: number): number;

getAlignment(arg0: number): number;

modelToView(arg0: number, arg1: Shape, arg2: Position.Bias): Shape;

viewToModel(arg0: number, arg1: number, arg2: Shape, arg3: Position.Bias[]): number;

getBreakWeight(arg0: number, arg1: number, arg2: number): number;

breakView(arg0: number, arg1: number, arg2: number, arg3: number): View;

createFragment(arg0: number, arg1: number): View;

getNextVisualPositionFrom(arg0: number, arg1: Position.Bias, arg2: Shape, arg3: number, arg4: Position.Bias[]): number;

insertUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;

removeUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;

changedUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;
 }
export namespace GlyphView { 
export abstract class GlyphPainter {

abstract getSpan(arg0: GlyphView, arg1: number, arg2: number, arg3: TabExpander, arg4: number): number;

abstract getHeight(arg0: GlyphView): number;

abstract getAscent(arg0: GlyphView): number;

abstract getDescent(arg0: GlyphView): number;

abstract paint(arg0: GlyphView, arg1: Graphics, arg2: Shape, arg3: number, arg4: number): void;

abstract modelToView(arg0: GlyphView, arg1: number, arg2: Position.Bias, arg3: Shape): Shape;

abstract viewToModel(arg0: GlyphView, arg1: number, arg2: number, arg3: Shape, arg4: Position.Bias[]): number;

abstract getBoundedPosition(arg0: GlyphView, arg1: number, arg2: number, arg3: number): number;

getPainter(arg0: GlyphView, arg1: number, arg2: number): GlyphView.GlyphPainter;

getNextVisualPositionFrom(arg0: GlyphView, arg1: number, arg2: Position.Bias, arg3: Shape, arg4: number, arg5: Position.Bias[]): number;
 }

}

export interface Highlighter {

install(arg0: JTextComponent): void;

deinstall(arg0: JTextComponent): void;

paint(arg0: Graphics): void;

addHighlight(arg0: number, arg1: number, arg2: Highlighter.HighlightPainter): Object;

removeHighlight(arg0: Object): void;

removeAllHighlights(): void;

changeHighlight(arg0: Object, arg1: number, arg2: number): void;

getHighlights(): Highlighter.Highlight[];
 }
export namespace Highlighter { 
export interface Highlight {

getStartOffset(): number;

getEndOffset(): number;

getPainter(): Highlighter.HighlightPainter;
 }

export interface HighlightPainter {

paint(arg0: Graphics, arg1: number, arg2: number, arg3: Shape, arg4: JTextComponent): void;
 }

}

export class IconView extends View {
constructor(arg0: Element);

paint(arg0: Graphics, arg1: Shape): void;

getPreferredSpan(arg0: number): number;

getAlignment(arg0: number): number;

modelToView(arg0: number, arg1: Shape, arg2: Position.Bias): Shape;

viewToModel(arg0: number, arg1: number, arg2: Shape, arg3: Position.Bias[]): number;
 }

export class InternationalFormatter extends DefaultFormatter {
constructor();
constructor(arg0: Format);

setFormat(arg0: Format): void;

getFormat(): Format;

setMinimum(arg0: Comparable<any>): void;

getMinimum(): Comparable<any>;

setMaximum(arg0: Comparable<any>): void;

getMaximum(): Comparable<any>;

install(arg0: JFormattedTextField): void;

valueToString(arg0: Object): String;

stringToValue(arg0: String): Object;

getFields(arg0: number): Format.Field[];

clone(): Object;
 }

export abstract class JTextComponent extends JComponent implements Scrollable, Accessible {
static FOCUS_ACCELERATOR_KEY:String
static DEFAULT_KEYMAP:String
constructor();

getUI(): TextUI;

setUI(arg0: TextUI): void;

updateUI(): void;

addCaretListener(arg0: CaretListener): void;

removeCaretListener(arg0: CaretListener): void;

getCaretListeners(): CaretListener[];

setDocument(arg0: Document): void;

getDocument(): Document;

setComponentOrientation(arg0: ComponentOrientation): void;

getActions(): Action[];

setMargin(arg0: Insets): void;

getMargin(): Insets;

setNavigationFilter(arg0: NavigationFilter): void;

getNavigationFilter(): NavigationFilter;

getCaret(): Caret;

setCaret(arg0: Caret): void;

getHighlighter(): Highlighter;

setHighlighter(arg0: Highlighter): void;

setKeymap(arg0: Keymap): void;

setDragEnabled(arg0: boolean): void;

getDragEnabled(): boolean;

setDropMode(arg0: DropMode): void;

getDropMode(): DropMode;

getDropLocation(): JTextComponent.DropLocation;

getKeymap(): Keymap;

static addKeymap(arg0: String, arg1: Keymap): Keymap;

static removeKeymap(arg0: String): Keymap;

static getKeymap(arg0: String): Keymap;

static loadKeymap(arg0: Keymap, arg1: JTextComponent.KeyBinding[], arg2: Action[]): void;

getCaretColor(): Color;

setCaretColor(arg0: Color): void;

getSelectionColor(): Color;

setSelectionColor(arg0: Color): void;

getSelectedTextColor(): Color;

setSelectedTextColor(arg0: Color): void;

getDisabledTextColor(): Color;

setDisabledTextColor(arg0: Color): void;

replaceSelection(arg0: String): void;

getText(arg0: number, arg1: number): String;

modelToView(arg0: number): Rectangle;

modelToView2D(arg0: number): Rectangle2D;

viewToModel(arg0: Point): number;

viewToModel2D(arg0: Point2D): number;

cut(): void;

copy(): void;

paste(): void;

moveCaretPosition(arg0: number): void;

setFocusAccelerator(arg0: String): void;

getFocusAccelerator(): String;

read(arg0: Reader, arg1: Object): void;

write(arg0: Writer): void;

removeNotify(): void;

setCaretPosition(arg0: number): void;

getCaretPosition(): number;

setText(arg0: String): void;

getText(): String;

getSelectedText(): String;

isEditable(): boolean;

setEditable(arg0: boolean): void;

getSelectionStart(): number;

setSelectionStart(arg0: number): void;

getSelectionEnd(): number;

setSelectionEnd(arg0: number): void;

select(arg0: number, arg1: number): void;

selectAll(): void;

getToolTipText(arg0: MouseEvent): String;

getPreferredScrollableViewportSize(): Dimension;

getScrollableUnitIncrement(arg0: Rectangle, arg1: number, arg2: number): number;

getScrollableBlockIncrement(arg0: Rectangle, arg1: number, arg2: number): number;

getScrollableTracksViewportWidth(): boolean;

getScrollableTracksViewportHeight(): boolean;

print(): boolean;

print(arg0: MessageFormat, arg1: MessageFormat): boolean;

print(arg0: MessageFormat, arg1: MessageFormat, arg2: boolean, arg3: PrintService, arg4: PrintRequestAttributeSet, arg5: boolean): boolean;

getPrintable(arg0: MessageFormat, arg1: MessageFormat): Printable;

getAccessibleContext(): AccessibleContext;

getInputMethodRequests(): InputMethodRequests;

addInputMethodListener(arg0: InputMethodListener): void;
 }
export namespace JTextComponent { 
export class AccessibleJTextComponent extends JComponent.AccessibleJComponent implements AccessibleText, CaretListener, DocumentListener, AccessibleAction, AccessibleEditableText, AccessibleExtendedText {
constructor(arg0: JTextComponent);

caretUpdate(arg0: CaretEvent): void;

insertUpdate(arg0: DocumentEvent): void;

removeUpdate(arg0: DocumentEvent): void;

changedUpdate(arg0: DocumentEvent): void;

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleRole(): AccessibleRole;

getAccessibleText(): AccessibleText;

getIndexAtPoint(arg0: Point): number;

getCharacterBounds(arg0: number): Rectangle;

getCharCount(): number;

getCaretPosition(): number;

getCharacterAttribute(arg0: number): AttributeSet;

getSelectionStart(): number;

getSelectionEnd(): number;

getSelectedText(): String;

getAtIndex(arg0: number, arg1: number): String;

getAfterIndex(arg0: number, arg1: number): String;

getBeforeIndex(arg0: number, arg1: number): String;

getAccessibleEditableText(): AccessibleEditableText;

setTextContents(arg0: String): void;

insertTextAtIndex(arg0: number, arg1: String): void;

getTextRange(arg0: number, arg1: number): String;

delete(arg0: number, arg1: number): void;

cut(arg0: number, arg1: number): void;

paste(arg0: number): void;

replaceText(arg0: number, arg1: number, arg2: String): void;

selectText(arg0: number, arg1: number): void;

setAttributes(arg0: number, arg1: number, arg2: AttributeSet): void;

getTextSequenceAt(arg0: number, arg1: number): AccessibleTextSequence;

getTextSequenceAfter(arg0: number, arg1: number): AccessibleTextSequence;

getTextSequenceBefore(arg0: number, arg1: number): AccessibleTextSequence;

getTextBounds(arg0: number, arg1: number): Rectangle;

getAccessibleAction(): AccessibleAction;

getAccessibleActionCount(): number;

getAccessibleActionDescription(arg0: number): String;

doAccessibleAction(arg0: number): boolean;
 }

export class DropLocation extends TransferHandler.DropLocation {

getIndex(): number;

getBias(): Position.Bias;
toString(): string;
 }

export class KeyBinding {
key:KeyStroke
actionName:String
constructor(arg0: KeyStroke, arg1: String);
 }

}

export interface Keymap {

getName(): String;

getDefaultAction(): Action;

setDefaultAction(arg0: Action): void;

getAction(arg0: KeyStroke): Action;

getBoundKeyStrokes(): KeyStroke[];

getBoundActions(): Action[];

getKeyStrokesForAction(arg0: Action): KeyStroke[];

isLocallyDefined(arg0: KeyStroke): boolean;

addActionForKeyStroke(arg0: KeyStroke, arg1: Action): void;

removeKeyStrokeBinding(arg0: KeyStroke): void;

removeBindings(): void;

getResolveParent(): Keymap;

setResolveParent(arg0: Keymap): void;
 }

export class LabelView extends GlyphView implements TabableView {
constructor(arg0: Element);

getBackground(): Color;

getForeground(): Color;

getFont(): Font;

isUnderline(): boolean;

isStrikeThrough(): boolean;

isSubscript(): boolean;

isSuperscript(): boolean;

changedUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;
 }

export abstract class LayeredHighlighter implements Highlighter {

abstract paintLayeredHighlights(arg0: Graphics, arg1: number, arg2: number, arg3: Shape, arg4: JTextComponent, arg5: View): void;
 }
export namespace LayeredHighlighter { 
export abstract class LayerPainter implements Highlighter.HighlightPainter {

abstract paintLayer(arg0: Graphics, arg1: number, arg2: number, arg3: Shape, arg4: JTextComponent, arg5: View): Shape;
 }

}

export class LayoutQueue {
constructor();

static getDefaultQueue(): LayoutQueue;

static setDefaultQueue(arg0: LayoutQueue): void;

addTask(arg0: Runnable): void;
 }

export class MaskFormatter extends DefaultFormatter {
constructor();
constructor(arg0: String);

setMask(arg0: String): void;

getMask(): String;

setValidCharacters(arg0: String): void;

getValidCharacters(): String;

setInvalidCharacters(arg0: String): void;

getInvalidCharacters(): String;

setPlaceholder(arg0: String): void;

getPlaceholder(): String;

setPlaceholderCharacter(arg0: String): void;

getPlaceholderCharacter(): String;

setValueContainsLiteralCharacters(arg0: boolean): void;

getValueContainsLiteralCharacters(): boolean;

stringToValue(arg0: String): Object;

valueToString(arg0: Object): String;

install(arg0: JFormattedTextField): void;
 }

export interface MutableAttributeSet extends AttributeSet {

addAttribute(arg0: Object, arg1: Object): void;

addAttributes(arg0: AttributeSet): void;

removeAttribute(arg0: Object): void;

removeAttributes(arg0: Enumeration<any>): void;

removeAttributes(arg0: AttributeSet): void;

setResolveParent(arg0: AttributeSet): void;
 }

export class NavigationFilter {
constructor();

setDot(arg0: NavigationFilter.FilterBypass, arg1: number, arg2: Position.Bias): void;

moveDot(arg0: NavigationFilter.FilterBypass, arg1: number, arg2: Position.Bias): void;

getNextVisualPositionFrom(arg0: JTextComponent, arg1: number, arg2: Position.Bias, arg3: number, arg4: Position.Bias[]): number;
 }
export namespace NavigationFilter { 
export abstract class FilterBypass {

abstract getCaret(): Caret;

abstract setDot(arg0: number, arg1: Position.Bias): void;

abstract moveDot(arg0: number, arg1: Position.Bias): void;
 }

}

export class NumberFormatter extends InternationalFormatter {
constructor();
constructor(arg0: NumberFormat);

setFormat(arg0: Format): void;
 }

export class ParagraphView extends FlowView implements TabExpander {
constructor(arg0: Element);

getFlowSpan(arg0: number): number;

getFlowStart(arg0: number): number;

nextTabStop(arg0: number, arg1: number): number;

paint(arg0: Graphics, arg1: Shape): void;

getAlignment(arg0: number): number;

breakView(arg0: number, arg1: number, arg2: Shape): View;

getBreakWeight(arg0: number, arg1: number): number;

changedUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;
 }

export class PasswordView extends FieldView {
constructor(arg0: Element);

modelToView(arg0: number, arg1: Shape, arg2: Position.Bias): Shape;

viewToModel(arg0: number, arg1: number, arg2: Shape, arg3: Position.Bias[]): number;

getPreferredSpan(arg0: number): number;
 }

export class PlainDocument extends AbstractDocument {
static tabSizeAttribute:String
static lineLimitAttribute:String
constructor();
constructor(arg0: AbstractDocument.Content);

insertString(arg0: number, arg1: String, arg2: AttributeSet): void;

getDefaultRootElement(): Element;

getParagraphElement(arg0: number): Element;
 }

export class PlainView extends View implements TabExpander {
constructor(arg0: Element);

getPreferredSpan(arg0: number): number;

paint(arg0: Graphics, arg1: Shape): void;

modelToView(arg0: number, arg1: Shape, arg2: Position.Bias): Shape;

viewToModel(arg0: number, arg1: number, arg2: Shape, arg3: Position.Bias[]): number;

insertUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;

removeUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;

changedUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;

setSize(arg0: number, arg1: number): void;

nextTabStop(arg0: number, arg1: number): number;
 }

export interface Position {

getOffset(): number;
 }
export namespace Position { 
export class Bias {
static Forward:Position.Bias
static Backward:Position.Bias
toString(): string;
 }

}

export interface Segment extends Cloneable, CharacterIterator, CharSequence { }
export class Segment implements Cloneable, CharacterIterator, CharSequence {
array:String[]
offset:number
count:number
constructor();
constructor(arg0: String[], arg1: number, arg2: number);

setPartialReturn(arg0: boolean): void;

isPartialReturn(): boolean;
toString(): string;

first(): String;

last(): String;

current(): String;

next(): String;

previous(): String;

setIndex(arg0: number): String;

getBeginIndex(): number;

getEndIndex(): number;

getIndex(): number;

charAt(arg0: number): String;

length(): number;

subSequence(arg0: number, arg1: number): CharSequence;

clone(): Object;
 }

export class SimpleAttributeSet implements MutableAttributeSet, Serializable, Cloneable {
static EMPTY:AttributeSet
constructor();
constructor(arg0: AttributeSet);

isEmpty(): boolean;

getAttributeCount(): number;

isDefined(arg0: Object): boolean;

isEqual(arg0: AttributeSet): boolean;

copyAttributes(): AttributeSet;

getAttributeNames(): Enumeration<any>;

getAttribute(arg0: Object): Object;

containsAttribute(arg0: Object, arg1: Object): boolean;

containsAttributes(arg0: AttributeSet): boolean;

addAttribute(arg0: Object, arg1: Object): void;

addAttributes(arg0: AttributeSet): void;

removeAttribute(arg0: Object): void;

removeAttributes(arg0: Enumeration<any>): void;

removeAttributes(arg0: AttributeSet): void;

getResolveParent(): AttributeSet;

setResolveParent(arg0: AttributeSet): void;

clone(): Object;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;
 }

export class StringContent implements AbstractDocument.Content, Serializable {
constructor();
constructor(arg0: number);

length(): number;

insertString(arg0: number, arg1: String): UndoableEdit;

remove(arg0: number, arg1: number): UndoableEdit;

getString(arg0: number, arg1: number): String;

getChars(arg0: number, arg1: number, arg2: Segment): void;

createPosition(arg0: number): Position;
 }

export interface Style extends MutableAttributeSet {

getName(): String;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;
 }

export class StyleConstants {
static ComponentElementName:String
static IconElementName:String
static NameAttribute:Object
static ResolveAttribute:Object
static ModelAttribute:Object
static BidiLevel:Object
static FontFamily:Object
static Family:Object
static FontSize:Object
static Size:Object
static Bold:Object
static Italic:Object
static Underline:Object
static StrikeThrough:Object
static Superscript:Object
static Subscript:Object
static Foreground:Object
static Background:Object
static ComponentAttribute:Object
static IconAttribute:Object
static ComposedTextAttribute:Object
static FirstLineIndent:Object
static LeftIndent:Object
static RightIndent:Object
static LineSpacing:Object
static SpaceAbove:Object
static SpaceBelow:Object
static Alignment:Object
static TabSet:Object
static Orientation:Object
static ALIGN_LEFT:number
static ALIGN_CENTER:number
static ALIGN_RIGHT:number
static ALIGN_JUSTIFIED:number
toString(): string;

static getBidiLevel(arg0: AttributeSet): number;

static setBidiLevel(arg0: MutableAttributeSet, arg1: number): void;

static getComponent(arg0: AttributeSet): Component;

static setComponent(arg0: MutableAttributeSet, arg1: Component): void;

static getIcon(arg0: AttributeSet): Icon;

static setIcon(arg0: MutableAttributeSet, arg1: Icon): void;

static getFontFamily(arg0: AttributeSet): String;

static setFontFamily(arg0: MutableAttributeSet, arg1: String): void;

static getFontSize(arg0: AttributeSet): number;

static setFontSize(arg0: MutableAttributeSet, arg1: number): void;

static isBold(arg0: AttributeSet): boolean;

static setBold(arg0: MutableAttributeSet, arg1: boolean): void;

static isItalic(arg0: AttributeSet): boolean;

static setItalic(arg0: MutableAttributeSet, arg1: boolean): void;

static isUnderline(arg0: AttributeSet): boolean;

static isStrikeThrough(arg0: AttributeSet): boolean;

static isSuperscript(arg0: AttributeSet): boolean;

static isSubscript(arg0: AttributeSet): boolean;

static setUnderline(arg0: MutableAttributeSet, arg1: boolean): void;

static setStrikeThrough(arg0: MutableAttributeSet, arg1: boolean): void;

static setSuperscript(arg0: MutableAttributeSet, arg1: boolean): void;

static setSubscript(arg0: MutableAttributeSet, arg1: boolean): void;

static getForeground(arg0: AttributeSet): Color;

static setForeground(arg0: MutableAttributeSet, arg1: Color): void;

static getBackground(arg0: AttributeSet): Color;

static setBackground(arg0: MutableAttributeSet, arg1: Color): void;

static getFirstLineIndent(arg0: AttributeSet): number;

static setFirstLineIndent(arg0: MutableAttributeSet, arg1: number): void;

static getRightIndent(arg0: AttributeSet): number;

static setRightIndent(arg0: MutableAttributeSet, arg1: number): void;

static getLeftIndent(arg0: AttributeSet): number;

static setLeftIndent(arg0: MutableAttributeSet, arg1: number): void;

static getLineSpacing(arg0: AttributeSet): number;

static setLineSpacing(arg0: MutableAttributeSet, arg1: number): void;

static getSpaceAbove(arg0: AttributeSet): number;

static setSpaceAbove(arg0: MutableAttributeSet, arg1: number): void;

static getSpaceBelow(arg0: AttributeSet): number;

static setSpaceBelow(arg0: MutableAttributeSet, arg1: number): void;

static getAlignment(arg0: AttributeSet): number;

static setAlignment(arg0: MutableAttributeSet, arg1: number): void;

static getTabSet(arg0: AttributeSet): TabSet;

static setTabSet(arg0: MutableAttributeSet, arg1: TabSet): void;
 }
export namespace StyleConstants { 
export class CharacterConstants extends StyleConstants implements AttributeSet.CharacterAttribute {
 }

export class ColorConstants extends StyleConstants implements AttributeSet.ColorAttribute, AttributeSet.CharacterAttribute {
 }

export class FontConstants extends StyleConstants implements AttributeSet.FontAttribute, AttributeSet.CharacterAttribute {
 }

export class ParagraphConstants extends StyleConstants implements AttributeSet.ParagraphAttribute {
 }

}

export class StyleContext implements Serializable, AbstractDocument.AttributeContext {
static DEFAULT_STYLE:String
constructor();

static getDefaultStyleContext(): StyleContext;

addStyle(arg0: String, arg1: Style): Style;

removeStyle(arg0: String): void;

getStyle(arg0: String): Style;

getStyleNames(): Enumeration<any>;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;

getChangeListeners(): ChangeListener[];

getFont(arg0: AttributeSet): Font;

getForeground(arg0: AttributeSet): Color;

getBackground(arg0: AttributeSet): Color;

getFont(arg0: String, arg1: number, arg2: number): Font;

getFontMetrics(arg0: Font): FontMetrics;

addAttribute(arg0: AttributeSet, arg1: Object, arg2: Object): AttributeSet;

addAttributes(arg0: AttributeSet, arg1: AttributeSet): AttributeSet;

removeAttribute(arg0: AttributeSet, arg1: Object): AttributeSet;

removeAttributes(arg0: AttributeSet, arg1: Enumeration<any>): AttributeSet;

removeAttributes(arg0: AttributeSet, arg1: AttributeSet): AttributeSet;

getEmptySet(): AttributeSet;

reclaim(arg0: AttributeSet): void;
toString(): string;

writeAttributes(arg0: ObjectOutputStream, arg1: AttributeSet): void;

readAttributes(arg0: ObjectInputStream, arg1: MutableAttributeSet): void;

static writeAttributeSet(arg0: ObjectOutputStream, arg1: AttributeSet): void;

static readAttributeSet(arg0: ObjectInputStream, arg1: MutableAttributeSet): void;

static registerStaticAttributeKey(arg0: Object): void;

static getStaticAttribute(arg0: Object): Object;

static getStaticAttributeKey(arg0: Object): Object;
 }
export namespace StyleContext { 
export class NamedStyle implements Style, Serializable {
constructor(arg0: StyleContext, arg1: String, arg2: Style);
constructor(arg0: StyleContext, arg1: Style);
constructor(arg0: StyleContext);
toString(): string;

getName(): String;

setName(arg0: String): void;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;

getChangeListeners(): ChangeListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

getAttributeCount(): number;

isDefined(arg0: Object): boolean;

isEqual(arg0: AttributeSet): boolean;

copyAttributes(): AttributeSet;

getAttribute(arg0: Object): Object;

getAttributeNames(): Enumeration<any>;

containsAttribute(arg0: Object, arg1: Object): boolean;

containsAttributes(arg0: AttributeSet): boolean;

getResolveParent(): AttributeSet;

addAttribute(arg0: Object, arg1: Object): void;

addAttributes(arg0: AttributeSet): void;

removeAttribute(arg0: Object): void;

removeAttributes(arg0: Enumeration<any>): void;

removeAttributes(arg0: AttributeSet): void;

setResolveParent(arg0: AttributeSet): void;
 }

export class SmallAttributeSet implements AttributeSet {
constructor(arg0: StyleContext, arg1: Object[]);
constructor(arg0: StyleContext, arg1: AttributeSet);
toString(): string;

hashCode(): number;

equals(arg0: Object): boolean;

clone(): Object;

getAttributeCount(): number;

isDefined(arg0: Object): boolean;

isEqual(arg0: AttributeSet): boolean;

copyAttributes(): AttributeSet;

getAttribute(arg0: Object): Object;

getAttributeNames(): Enumeration<any>;

containsAttribute(arg0: Object, arg1: Object): boolean;

containsAttributes(arg0: AttributeSet): boolean;

getResolveParent(): AttributeSet;
 }

}

export interface StyledDocument extends Document {

addStyle(arg0: String, arg1: Style): Style;

removeStyle(arg0: String): void;

getStyle(arg0: String): Style;

setCharacterAttributes(arg0: number, arg1: number, arg2: AttributeSet, arg3: boolean): void;

setParagraphAttributes(arg0: number, arg1: number, arg2: AttributeSet, arg3: boolean): void;

setLogicalStyle(arg0: number, arg1: Style): void;

getLogicalStyle(arg0: number): Style;

getParagraphElement(arg0: number): Element;

getCharacterElement(arg0: number): Element;

getForeground(arg0: AttributeSet): Color;

getBackground(arg0: AttributeSet): Color;

getFont(arg0: AttributeSet): Font;
 }

export class StyledEditorKit extends DefaultEditorKit {
constructor();

getInputAttributes(): MutableAttributeSet;

getCharacterAttributeRun(): Element;

getActions(): Action[];

createDefaultDocument(): Document;

install(arg0: JEditorPane): void;

deinstall(arg0: JEditorPane): void;

getViewFactory(): ViewFactory;

clone(): Object;
 }
export namespace StyledEditorKit { 
export interface AlignmentAction { }
export class AlignmentAction extends StyledEditorKit.StyledTextAction {
constructor(arg0: String, arg1: number);

actionPerformed(arg0: ActionEvent): void;
 }

export interface BoldAction { }
export class BoldAction extends StyledEditorKit.StyledTextAction {
constructor();

actionPerformed(arg0: ActionEvent): void;
 }

export interface FontFamilyAction { }
export class FontFamilyAction extends StyledEditorKit.StyledTextAction {
constructor(arg0: String, arg1: String);

actionPerformed(arg0: ActionEvent): void;
 }

export interface FontSizeAction { }
export class FontSizeAction extends StyledEditorKit.StyledTextAction {
constructor(arg0: String, arg1: number);

actionPerformed(arg0: ActionEvent): void;
 }

export interface ForegroundAction { }
export class ForegroundAction extends StyledEditorKit.StyledTextAction {
constructor(arg0: String, arg1: Color);

actionPerformed(arg0: ActionEvent): void;
 }

export interface ItalicAction { }
export class ItalicAction extends StyledEditorKit.StyledTextAction {
constructor();

actionPerformed(arg0: ActionEvent): void;
 }

export interface StyledTextAction { }
export abstract class StyledTextAction extends TextAction {
constructor(arg0: String);
 }

export interface UnderlineAction { }
export class UnderlineAction extends StyledEditorKit.StyledTextAction {
constructor();

actionPerformed(arg0: ActionEvent): void;
 }

}

export interface TabExpander {

nextTabStop(arg0: number, arg1: number): number;
 }

export class TabSet implements Serializable {
constructor(arg0: TabStop[]);

getTabCount(): number;

getTab(arg0: number): TabStop;

getTabAfter(arg0: number): TabStop;

getTabIndex(arg0: TabStop): number;

getTabIndexAfter(arg0: number): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class TabStop implements Serializable {
static ALIGN_LEFT:number
static ALIGN_RIGHT:number
static ALIGN_CENTER:number
static ALIGN_DECIMAL:number
static ALIGN_BAR:number
static LEAD_NONE:number
static LEAD_DOTS:number
static LEAD_HYPHENS:number
static LEAD_UNDERLINE:number
static LEAD_THICKLINE:number
static LEAD_EQUALS:number
constructor(arg0: number);
constructor(arg0: number, arg1: number, arg2: number);

getPosition(): number;

getAlignment(): number;

getLeader(): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export interface TabableView {

getTabbedSpan(arg0: number, arg1: TabExpander): number;

getPartialSpan(arg0: number, arg1: number): number;
 }

export abstract class TableView extends BoxView {
constructor(arg0: Element);

replace(arg0: number, arg1: number, arg2: View[]): void;
 }
export namespace TableView { 
export class TableCell extends BoxView implements TableView.GridCell {
constructor(arg0: TableView, arg1: Element);

getColumnCount(): number;

getRowCount(): number;

setGridLocation(arg0: number, arg1: number): void;

getGridRow(): number;

getGridColumn(): number;
 }

export class TableRow extends BoxView {
constructor(arg0: TableView, arg1: Element);

replace(arg0: number, arg1: number, arg2: View[]): void;

getMinimumSpan(arg0: number): number;

getMaximumSpan(arg0: number): number;

getPreferredSpan(arg0: number): number;

getResizeWeight(arg0: number): number;
 }

}

export interface TextAction { }
export abstract class TextAction extends AbstractAction {
constructor(arg0: String);

static augmentList(arg0: Action[], arg1: Action[]): Action[];
 }

export class Utilities {
constructor();

static drawTabbedText(arg0: Segment, arg1: number, arg2: number, arg3: Graphics, arg4: TabExpander, arg5: number): number;

static drawTabbedText(arg0: Segment, arg1: number, arg2: number, arg3: Graphics2D, arg4: TabExpander, arg5: number): number;

static getTabbedTextWidth(arg0: Segment, arg1: FontMetrics, arg2: number, arg3: TabExpander, arg4: number): number;

static getTabbedTextWidth(arg0: Segment, arg1: FontMetrics, arg2: number, arg3: TabExpander, arg4: number): number;

static getTabbedTextOffset(arg0: Segment, arg1: FontMetrics, arg2: number, arg3: number, arg4: TabExpander, arg5: number): number;

static getTabbedTextOffset(arg0: Segment, arg1: FontMetrics, arg2: number, arg3: number, arg4: TabExpander, arg5: number, arg6: boolean): number;

static getTabbedTextOffset(arg0: Segment, arg1: FontMetrics, arg2: number, arg3: number, arg4: TabExpander, arg5: number, arg6: boolean): number;

static getBreakLocation(arg0: Segment, arg1: FontMetrics, arg2: number, arg3: number, arg4: TabExpander, arg5: number): number;

static getBreakLocation(arg0: Segment, arg1: FontMetrics, arg2: number, arg3: number, arg4: TabExpander, arg5: number): number;

static getRowStart(arg0: JTextComponent, arg1: number): number;

static getRowEnd(arg0: JTextComponent, arg1: number): number;

static getPositionAbove(arg0: JTextComponent, arg1: number, arg2: number): number;

static getPositionAbove(arg0: JTextComponent, arg1: number, arg2: number): number;

static getPositionBelow(arg0: JTextComponent, arg1: number, arg2: number): number;

static getPositionBelow(arg0: JTextComponent, arg1: number, arg2: number): number;

static getWordStart(arg0: JTextComponent, arg1: number): number;

static getWordEnd(arg0: JTextComponent, arg1: number): number;

static getNextWord(arg0: JTextComponent, arg1: number): number;

static getPreviousWord(arg0: JTextComponent, arg1: number): number;

static getParagraphElement(arg0: JTextComponent, arg1: number): Element;
 }

export abstract class View implements SwingConstants {
static BadBreakWeight:number
static GoodBreakWeight:number
static ExcellentBreakWeight:number
static ForcedBreakWeight:number
static X_AXIS:number
static Y_AXIS:number
constructor(arg0: Element);

getParent(): View;

isVisible(): boolean;

abstract getPreferredSpan(arg0: number): number;

getMinimumSpan(arg0: number): number;

getMaximumSpan(arg0: number): number;

preferenceChanged(arg0: View, arg1: boolean, arg2: boolean): void;

getAlignment(arg0: number): number;

abstract paint(arg0: Graphics, arg1: Shape): void;

setParent(arg0: View): void;

getViewCount(): number;

getView(arg0: number): View;

removeAll(): void;

remove(arg0: number): void;

insert(arg0: number, arg1: View): void;

append(arg0: View): void;

replace(arg0: number, arg1: number, arg2: View[]): void;

getViewIndex(arg0: number, arg1: Position.Bias): number;

getChildAllocation(arg0: number, arg1: Shape): Shape;

getNextVisualPositionFrom(arg0: number, arg1: Position.Bias, arg2: Shape, arg3: number, arg4: Position.Bias[]): number;

abstract modelToView(arg0: number, arg1: Shape, arg2: Position.Bias): Shape;

modelToView(arg0: number, arg1: Position.Bias, arg2: number, arg3: Position.Bias, arg4: Shape): Shape;

abstract viewToModel(arg0: number, arg1: number, arg2: Shape, arg3: Position.Bias[]): number;

insertUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;

removeUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;

changedUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;

getDocument(): Document;

getStartOffset(): number;

getEndOffset(): number;

getElement(): Element;

getGraphics(): Graphics;

getAttributes(): AttributeSet;

breakView(arg0: number, arg1: number, arg2: number, arg3: number): View;

createFragment(arg0: number, arg1: number): View;

getBreakWeight(arg0: number, arg1: number, arg2: number): number;

getResizeWeight(arg0: number): number;

setSize(arg0: number, arg1: number): void;

getContainer(): Container;

getViewFactory(): ViewFactory;

getToolTipText(arg0: number, arg1: number, arg2: Shape): String;

getViewIndex(arg0: number, arg1: number, arg2: Shape): number;

modelToView(arg0: number, arg1: Shape): Shape;

viewToModel(arg0: number, arg1: number, arg2: Shape): number;
 }

export interface ViewFactory {

create(arg0: Element): View;
 }

export class WrappedPlainView extends BoxView implements TabExpander {
constructor(arg0: Element);
constructor(arg0: Element, arg1: boolean);

nextTabStop(arg0: number, arg1: number): number;

paint(arg0: Graphics, arg1: Shape): void;

setSize(arg0: number, arg1: number): void;

getPreferredSpan(arg0: number): number;

getMinimumSpan(arg0: number): number;

getMaximumSpan(arg0: number): number;

insertUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;

removeUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;

changedUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;
 }

export class ZoneView extends BoxView {
constructor(arg0: Element, arg1: number);

getMaximumZoneSize(): number;

setMaximumZoneSize(arg0: number): void;

getMaxZonesLoaded(): number;

setMaxZonesLoaded(arg0: number): void;

insertUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;

removeUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;
 }

}
