/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.awt.datatransfer.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.beans.d.ts" />
/// <reference path="java.awt.event.d.ts" />
/// <reference path="javax.swing.text.d.ts" />
declare module '@afterburnerhq/javax.accessibility' { 
import { FontMetrics, Color, Rectangle, Point, Dimension, Cursor, Font } from '@afterburnerhq/java.awt'
import { Number, String } from '@afterburnerhq/java.lang'
import { Locale, ListResourceBundle } from '@afterburnerhq/java.util'
import { DataFlavor } from '@afterburnerhq/java.awt.datatransfer'
import { InputStream } from '@afterburnerhq/java.io'
import { PropertyChangeListener } from '@afterburnerhq/java.beans'
import { FocusListener } from '@afterburnerhq/java.awt.event'
import { AttributeSet } from '@afterburnerhq/javax.swing.text'
export abstract class AccessibilityProvider {

abstract getName(): String;

abstract activate(): void;
 }

export interface Accessible {

getAccessibleContext(): AccessibleContext;
 }

export namespace AccessibleAction { 
const TOGGLE_EXPAND:String
const INCREMENT:String
const DECREMENT:String
const CLICK:String
const TOGGLE_POPUP:String
}

export interface AccessibleAction {
TOGGLE_EXPAND:String
INCREMENT:String
DECREMENT:String
CLICK:String
TOGGLE_POPUP:String

getAccessibleActionCount(): number;

getAccessibleActionDescription(arg0: number): String;

doAccessibleAction(arg0: number): boolean;
 }

export class AccessibleAttributeSequence {
startIndex:number
endIndex:number
attributes:AttributeSet
constructor(arg0: number, arg1: number, arg2: AttributeSet);
 }

export abstract class AccessibleBundle {
constructor();

toDisplayString(arg0: Locale): String;

toDisplayString(): String;
toString(): string;
 }

export interface AccessibleComponent {

getBackground(): Color;

setBackground(arg0: Color): void;

getForeground(): Color;

setForeground(arg0: Color): void;

getCursor(): Cursor;

setCursor(arg0: Cursor): void;

getFont(): Font;

setFont(arg0: Font): void;

getFontMetrics(arg0: Font): FontMetrics;

isEnabled(): boolean;

setEnabled(arg0: boolean): void;

isVisible(): boolean;

setVisible(arg0: boolean): void;

isShowing(): boolean;

contains(arg0: Point): boolean;

getLocationOnScreen(): Point;

getLocation(): Point;

setLocation(arg0: Point): void;

getBounds(): Rectangle;

setBounds(arg0: Rectangle): void;

getSize(): Dimension;

setSize(arg0: Dimension): void;

getAccessibleAt(arg0: Point): Accessible;

isFocusTraversable(): boolean;

requestFocus(): void;

addFocusListener(arg0: FocusListener): void;

removeFocusListener(arg0: FocusListener): void;
 }

export abstract class AccessibleContext {
static ACCESSIBLE_NAME_PROPERTY:String
static ACCESSIBLE_DESCRIPTION_PROPERTY:String
static ACCESSIBLE_STATE_PROPERTY:String
static ACCESSIBLE_VALUE_PROPERTY:String
static ACCESSIBLE_SELECTION_PROPERTY:String
static ACCESSIBLE_CARET_PROPERTY:String
static ACCESSIBLE_VISIBLE_DATA_PROPERTY:String
static ACCESSIBLE_CHILD_PROPERTY:String
static ACCESSIBLE_ACTIVE_DESCENDANT_PROPERTY:String
static ACCESSIBLE_TABLE_CAPTION_CHANGED:String
static ACCESSIBLE_TABLE_SUMMARY_CHANGED:String
static ACCESSIBLE_TABLE_MODEL_CHANGED:String
static ACCESSIBLE_TABLE_ROW_HEADER_CHANGED:String
static ACCESSIBLE_TABLE_ROW_DESCRIPTION_CHANGED:String
static ACCESSIBLE_TABLE_COLUMN_HEADER_CHANGED:String
static ACCESSIBLE_TABLE_COLUMN_DESCRIPTION_CHANGED:String
static ACCESSIBLE_ACTION_PROPERTY:String
static ACCESSIBLE_HYPERTEXT_OFFSET:String
static ACCESSIBLE_TEXT_PROPERTY:String
static ACCESSIBLE_INVALIDATE_CHILDREN:String
static ACCESSIBLE_TEXT_ATTRIBUTES_CHANGED:String
static ACCESSIBLE_COMPONENT_BOUNDS_CHANGED:String

getAccessibleName(): String;

setAccessibleName(arg0: String): void;

getAccessibleDescription(): String;

setAccessibleDescription(arg0: String): void;

abstract getAccessibleRole(): AccessibleRole;

abstract getAccessibleStateSet(): AccessibleStateSet;

getAccessibleParent(): Accessible;

setAccessibleParent(arg0: Accessible): void;

abstract getAccessibleIndexInParent(): number;

abstract getAccessibleChildrenCount(): number;

abstract getAccessibleChild(arg0: number): Accessible;

abstract getLocale(): Locale;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

getAccessibleAction(): AccessibleAction;

getAccessibleComponent(): AccessibleComponent;

getAccessibleSelection(): AccessibleSelection;

getAccessibleText(): AccessibleText;

getAccessibleEditableText(): AccessibleEditableText;

getAccessibleValue(): AccessibleValue;

getAccessibleIcon(): AccessibleIcon[];

getAccessibleRelationSet(): AccessibleRelationSet;

getAccessibleTable(): AccessibleTable;

firePropertyChange(arg0: String, arg1: Object, arg2: Object): void;
 }

export interface AccessibleEditableText extends AccessibleText {

setTextContents(arg0: String): void;

insertTextAtIndex(arg0: number, arg1: String): void;

getTextRange(arg0: number, arg1: number): String;

delete(arg0: number, arg1: number): void;

cut(arg0: number, arg1: number): void;

paste(arg0: number): void;

replaceText(arg0: number, arg1: number, arg2: String): void;

selectText(arg0: number, arg1: number): void;

setAttributes(arg0: number, arg1: number, arg2: AttributeSet): void;
 }

export interface AccessibleExtendedComponent extends AccessibleComponent {

getToolTipText(): String;

getTitledBorderText(): String;

getAccessibleKeyBinding(): AccessibleKeyBinding;
 }

export interface AccessibleExtendedTable extends AccessibleTable {

getAccessibleRow(arg0: number): number;

getAccessibleColumn(arg0: number): number;

getAccessibleIndex(arg0: number, arg1: number): number;
 }

export namespace AccessibleExtendedText { 
const LINE:number
const ATTRIBUTE_RUN:number
}

export interface AccessibleExtendedText {
LINE:number
ATTRIBUTE_RUN:number

getTextRange(arg0: number, arg1: number): String;

getTextSequenceAt(arg0: number, arg1: number): AccessibleTextSequence;

getTextSequenceAfter(arg0: number, arg1: number): AccessibleTextSequence;

getTextSequenceBefore(arg0: number, arg1: number): AccessibleTextSequence;

getTextBounds(arg0: number, arg1: number): Rectangle;
 }

export abstract class AccessibleHyperlink implements AccessibleAction {

abstract isValid(): boolean;

abstract getAccessibleActionCount(): number;

abstract doAccessibleAction(arg0: number): boolean;

abstract getAccessibleActionDescription(arg0: number): String;

abstract getAccessibleActionObject(arg0: number): Object;

abstract getAccessibleActionAnchor(arg0: number): Object;

abstract getStartIndex(): number;

abstract getEndIndex(): number;
 }

export interface AccessibleHypertext extends AccessibleText {

getLinkCount(): number;

getLink(arg0: number): AccessibleHyperlink;

getLinkIndex(arg0: number): number;
 }

export interface AccessibleIcon {

getAccessibleIconDescription(): String;

setAccessibleIconDescription(arg0: String): void;

getAccessibleIconWidth(): number;

getAccessibleIconHeight(): number;
 }

export interface AccessibleKeyBinding {

getAccessibleKeyBindingCount(): number;

getAccessibleKeyBinding(arg0: number): Object;
 }

export class AccessibleRelation extends AccessibleBundle {
static LABEL_FOR:String
static LABELED_BY:String
static MEMBER_OF:String
static CONTROLLER_FOR:String
static CONTROLLED_BY:String
static FLOWS_TO:String
static FLOWS_FROM:String
static SUBWINDOW_OF:String
static PARENT_WINDOW_OF:String
static EMBEDS:String
static EMBEDDED_BY:String
static CHILD_NODE_OF:String
static LABEL_FOR_PROPERTY:String
static LABELED_BY_PROPERTY:String
static MEMBER_OF_PROPERTY:String
static CONTROLLER_FOR_PROPERTY:String
static CONTROLLED_BY_PROPERTY:String
static FLOWS_TO_PROPERTY:String
static FLOWS_FROM_PROPERTY:String
static SUBWINDOW_OF_PROPERTY:String
static PARENT_WINDOW_OF_PROPERTY:String
static EMBEDS_PROPERTY:String
static EMBEDDED_BY_PROPERTY:String
static CHILD_NODE_OF_PROPERTY:String
constructor(arg0: String);
constructor(arg0: String, arg1: Object);
constructor(arg0: String, arg1: Object[]);

getKey(): String;

getTarget(): Object[];

setTarget(arg0: Object): void;

setTarget(arg0: Object[]): void;
 }

export class AccessibleRelationSet {
constructor();
constructor(arg0: AccessibleRelation[]);

add(arg0: AccessibleRelation): boolean;

addAll(arg0: AccessibleRelation[]): void;

remove(arg0: AccessibleRelation): boolean;

clear(): void;

size(): number;

contains(arg0: String): boolean;

get(arg0: String): AccessibleRelation;

toArray(): AccessibleRelation[];
toString(): string;
 }

export class AccessibleResourceBundle extends ListResourceBundle {
constructor();

getContents(): Array<Array<Object>>;
 }

export class AccessibleRole extends AccessibleBundle {
static ALERT:AccessibleRole
static COLUMN_HEADER:AccessibleRole
static CANVAS:AccessibleRole
static COMBO_BOX:AccessibleRole
static DESKTOP_ICON:AccessibleRole
static HTML_CONTAINER:AccessibleRole
static INTERNAL_FRAME:AccessibleRole
static DESKTOP_PANE:AccessibleRole
static OPTION_PANE:AccessibleRole
static WINDOW:AccessibleRole
static FRAME:AccessibleRole
static DIALOG:AccessibleRole
static COLOR_CHOOSER:AccessibleRole
static DIRECTORY_PANE:AccessibleRole
static FILE_CHOOSER:AccessibleRole
static FILLER:AccessibleRole
static HYPERLINK:AccessibleRole
static ICON:AccessibleRole
static LABEL:AccessibleRole
static ROOT_PANE:AccessibleRole
static GLASS_PANE:AccessibleRole
static LAYERED_PANE:AccessibleRole
static LIST:AccessibleRole
static LIST_ITEM:AccessibleRole
static MENU_BAR:AccessibleRole
static POPUP_MENU:AccessibleRole
static MENU:AccessibleRole
static MENU_ITEM:AccessibleRole
static SEPARATOR:AccessibleRole
static PAGE_TAB_LIST:AccessibleRole
static PAGE_TAB:AccessibleRole
static PANEL:AccessibleRole
static PROGRESS_BAR:AccessibleRole
static PASSWORD_TEXT:AccessibleRole
static PUSH_BUTTON:AccessibleRole
static TOGGLE_BUTTON:AccessibleRole
static CHECK_BOX:AccessibleRole
static RADIO_BUTTON:AccessibleRole
static ROW_HEADER:AccessibleRole
static SCROLL_PANE:AccessibleRole
static SCROLL_BAR:AccessibleRole
static VIEWPORT:AccessibleRole
static SLIDER:AccessibleRole
static SPLIT_PANE:AccessibleRole
static TABLE:AccessibleRole
static TEXT:AccessibleRole
static TREE:AccessibleRole
static TOOL_BAR:AccessibleRole
static TOOL_TIP:AccessibleRole
static AWT_COMPONENT:AccessibleRole
static SWING_COMPONENT:AccessibleRole
static UNKNOWN:AccessibleRole
static STATUS_BAR:AccessibleRole
static DATE_EDITOR:AccessibleRole
static SPIN_BOX:AccessibleRole
static FONT_CHOOSER:AccessibleRole
static GROUP_BOX:AccessibleRole
static HEADER:AccessibleRole
static FOOTER:AccessibleRole
static PARAGRAPH:AccessibleRole
static RULER:AccessibleRole
static EDITBAR:AccessibleRole
static PROGRESS_MONITOR:AccessibleRole
 }

export interface AccessibleSelection {

getAccessibleSelectionCount(): number;

getAccessibleSelection(arg0: number): Accessible;

isAccessibleChildSelected(arg0: number): boolean;

addAccessibleSelection(arg0: number): void;

removeAccessibleSelection(arg0: number): void;

clearAccessibleSelection(): void;

selectAllAccessibleSelection(): void;
 }

export class AccessibleState extends AccessibleBundle {
static ACTIVE:AccessibleState
static PRESSED:AccessibleState
static ARMED:AccessibleState
static BUSY:AccessibleState
static CHECKED:AccessibleState
static EDITABLE:AccessibleState
static EXPANDABLE:AccessibleState
static COLLAPSED:AccessibleState
static EXPANDED:AccessibleState
static ENABLED:AccessibleState
static FOCUSABLE:AccessibleState
static FOCUSED:AccessibleState
static ICONIFIED:AccessibleState
static MODAL:AccessibleState
static OPAQUE:AccessibleState
static RESIZABLE:AccessibleState
static MULTISELECTABLE:AccessibleState
static SELECTABLE:AccessibleState
static SELECTED:AccessibleState
static SHOWING:AccessibleState
static VISIBLE:AccessibleState
static VERTICAL:AccessibleState
static HORIZONTAL:AccessibleState
static SINGLE_LINE:AccessibleState
static MULTI_LINE:AccessibleState
static TRANSIENT:AccessibleState
static MANAGES_DESCENDANTS:AccessibleState
static INDETERMINATE:AccessibleState
static TRUNCATED:AccessibleState
 }

export class AccessibleStateSet {
constructor();
constructor(arg0: AccessibleState[]);

add(arg0: AccessibleState): boolean;

addAll(arg0: AccessibleState[]): void;

remove(arg0: AccessibleState): boolean;

clear(): void;

contains(arg0: AccessibleState): boolean;

toArray(): AccessibleState[];
toString(): string;
 }

export interface AccessibleStreamable {

getMimeTypes(): DataFlavor[];

getStream(arg0: DataFlavor): InputStream;
 }

export interface AccessibleTable {

getAccessibleCaption(): Accessible;

setAccessibleCaption(arg0: Accessible): void;

getAccessibleSummary(): Accessible;

setAccessibleSummary(arg0: Accessible): void;

getAccessibleRowCount(): number;

getAccessibleColumnCount(): number;

getAccessibleAt(arg0: number, arg1: number): Accessible;

getAccessibleRowExtentAt(arg0: number, arg1: number): number;

getAccessibleColumnExtentAt(arg0: number, arg1: number): number;

getAccessibleRowHeader(): AccessibleTable;

setAccessibleRowHeader(arg0: AccessibleTable): void;

getAccessibleColumnHeader(): AccessibleTable;

setAccessibleColumnHeader(arg0: AccessibleTable): void;

getAccessibleRowDescription(arg0: number): Accessible;

setAccessibleRowDescription(arg0: number, arg1: Accessible): void;

getAccessibleColumnDescription(arg0: number): Accessible;

setAccessibleColumnDescription(arg0: number, arg1: Accessible): void;

isAccessibleSelected(arg0: number, arg1: number): boolean;

isAccessibleRowSelected(arg0: number): boolean;

isAccessibleColumnSelected(arg0: number): boolean;

getSelectedAccessibleRows(): number[];

getSelectedAccessibleColumns(): number[];
 }

export namespace AccessibleTableModelChange { 
const INSERT:number
const UPDATE:number
const DELETE:number
}

export interface AccessibleTableModelChange {
INSERT:number
UPDATE:number
DELETE:number

getType(): number;

getFirstRow(): number;

getLastRow(): number;

getFirstColumn(): number;

getLastColumn(): number;
 }

export namespace AccessibleText { 
const CHARACTER:number
const WORD:number
const SENTENCE:number
}

export interface AccessibleText {
CHARACTER:number
WORD:number
SENTENCE:number

getIndexAtPoint(arg0: Point): number;

getCharacterBounds(arg0: number): Rectangle;

getCharCount(): number;

getCaretPosition(): number;

getAtIndex(arg0: number, arg1: number): String;

getAfterIndex(arg0: number, arg1: number): String;

getBeforeIndex(arg0: number, arg1: number): String;

getCharacterAttribute(arg0: number): AttributeSet;

getSelectionStart(): number;

getSelectionEnd(): number;

getSelectedText(): String;
 }

export class AccessibleTextSequence {
startIndex:number
endIndex:number
text:String
constructor(arg0: number, arg1: number, arg2: String);
 }

export interface AccessibleValue {

getCurrentAccessibleValue(): Number;

setCurrentAccessibleValue(arg0: Number): boolean;

getMinimumAccessibleValue(): Number;

getMaximumAccessibleValue(): Number;
 }

}
