/// <reference path="java.applet.d.ts" />
/// <reference path="javax.swing.colorchooser.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.awt.image.d.ts" />
/// <reference path="java.beans.d.ts" />
/// <reference path="java.util.concurrent.d.ts" />
/// <reference path="javax.swing.table.d.ts" />
/// <reference path="javax.swing.event.d.ts" />
/// <reference path="javax.swing.text.d.ts" />
/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="javax.accessibility.d.ts" />
/// <reference path="java.text.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.awt.print.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.swing.plaf.d.ts" />
/// <reference path="java.awt.datatransfer.d.ts" />
/// <reference path="java.awt.event.d.ts" />
/// <reference path="javax.print.d.ts" />
/// <reference path="javax.swing.border.d.ts" />
/// <reference path="javax.swing.tree.d.ts" />
/// <reference path="javax.swing.filechooser.d.ts" />
/// <reference path="javax.print.attribute.d.ts" />
declare module '@afterburnerhq/javax.swing' { 
import { Applet } from '@afterburnerhq/java.applet'
import { AbstractColorChooserPanel, ColorSelectionModel } from '@afterburnerhq/javax.swing.colorchooser'
import { Locale, Dictionary, Enumeration, Set, Hashtable, Collection, List, EventListener, Vector, EventObject, Date, Comparator } from '@afterburnerhq/java.util'
import { RGBImageFilter, ImageObserver } from '@afterburnerhq/java.awt.image'
import { PropertyChangeSupport, VetoableChangeListener, PropertyChangeEvent, PropertyChangeListener } from '@afterburnerhq/java.beans'
import { TimeUnit, RunnableFuture } from '@afterburnerhq/java.util.concurrent'
import { TableColumnModel, JTableHeader, TableCellRenderer, TableCellEditor, TableColumn, TableModel } from '@afterburnerhq/javax.swing.table'
import { InternalFrameListener, TableColumnModelListener, TreeExpansionListener, HyperlinkEvent, TreeModelEvent, MenuListener, TableModelEvent, PopupMenuListener, ListSelectionEvent, CellEditorListener, TreeSelectionListener, MenuDragMouseEvent, ListDataEvent, MenuKeyEvent, MenuKeyListener, HyperlinkListener, AncestorListener, ChangeListener, RowSorterListener, MenuDragMouseListener, TreeExpansionEvent, TreeWillExpandListener, TableColumnModelEvent, TreeModelListener, ListDataListener, ListSelectionListener, ChangeEvent, TableModelListener, RowSorterEvent, TreeSelectionEvent } from '@afterburnerhq/javax.swing.event'
import { EditorKit, MutableAttributeSet, AttributeSet, Position, Element, StyledDocument, Style, JTextComponent, Document } from '@afterburnerhq/javax.swing.text'
import { BasicStroke, Frame, Insets, Shape, Rectangle, FocusTraversalPolicy, Image, Cursor, Font, GraphicsConfiguration, Container, FontMetrics, Dialog, Component, ItemSelectable, Window, AWTKeyStroke, Color, ComponentOrientation, Point, Paint, Dimension, LayoutManager2, Adjustable, Graphics2D, Graphics, LayoutManager, DefaultKeyboardFocusManager } from '@afterburnerhq/java.awt'
import { Enum, Comparable, Character, Iterable, String, Exception, Integer, Number, Runnable, ClassLoader, Cloneable, Class, Boolean } from '@afterburnerhq/java.lang'
import { AccessibleRelationSet, AccessibleEditableText, AccessibleValue, AccessibleStateSet, AccessibleContext, AccessibleText, AccessibleRole, AccessibleSelection, AccessibleHypertext, AccessibleIcon, AccessibleTextSequence, AccessibleTableModelChange, AccessibleAction, AccessibleExtendedTable, AccessibleComponent, AccessibleExtendedComponent, AccessibleKeyBinding, AccessibleHyperlink, AccessibleTable, Accessible } from '@afterburnerhq/javax.accessibility'
import { Format, MessageFormat, SimpleDateFormat, AttributedCharacterIterator, DecimalFormat } from '@afterburnerhq/java.text'
import { URL } from '@afterburnerhq/java.net'
import { Printable } from '@afterburnerhq/java.awt.print'
import { PrintStream, Serializable, FilterInputStream, File, InputStream } from '@afterburnerhq/java.io'
import { DesktopIconUI, InternalFrameUI, ToolBarUI, PanelUI, ToolTipUI, ViewportUI, ScrollPaneUI, PopupMenuUI, ComponentUI, SliderUI, ProgressBarUI, FileChooserUI, SpinnerUI, ColorChooserUI, LabelUI, SeparatorUI, TabbedPaneUI, ScrollBarUI, TreeUI, OptionPaneUI, DesktopPaneUI, ButtonUI, RootPaneUI, TableUI, UIResource, MenuItemUI, SplitPaneUI, ComboBoxUI, MenuBarUI, LayerUI, ListUI } from '@afterburnerhq/javax.swing.plaf'
import { Transferable, Clipboard, DataFlavor } from '@afterburnerhq/java.awt.datatransfer'
import { ContainerEvent, ItemEvent, MouseEvent, ActionEvent, MouseAdapter, WindowAdapter, MouseMotionListener, FocusEvent, KeyEvent, ActionListener, WindowEvent, AdjustmentListener, ContainerListener, ItemListener, ComponentEvent, InputEvent, FocusListener, ComponentAdapter } from '@afterburnerhq/java.awt.event'
import { PrintService } from '@afterburnerhq/javax.print'
import { CompoundBorder, MatteBorder, TitledBorder, Border } from '@afterburnerhq/javax.swing.border'
import { TreeCellRenderer, TreeModel, TreeCellEditor, TreePath, DefaultMutableTreeNode, DefaultTreeSelectionModel, TreeNode, TreeSelectionModel, RowMapper } from '@afterburnerhq/javax.swing.tree'
import { FileFilter, FileView, FileSystemView } from '@afterburnerhq/javax.swing.filechooser'
import { PrintRequestAttributeSet } from '@afterburnerhq/javax.print.attribute'
export interface AbstractAction extends Action, Cloneable, Serializable { }
export abstract class AbstractAction implements Action, Cloneable, Serializable {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Icon);

getValue(arg0: String): Object;

putValue(arg0: String, arg1: Object): void;

isEnabled(): boolean;

setEnabled(arg0: boolean): void;

getKeys(): Object[];

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

getPropertyChangeListeners(): PropertyChangeListener[];
 }

export abstract class AbstractButton extends JComponent implements ItemSelectable, SwingConstants {
static MODEL_CHANGED_PROPERTY:String
static TEXT_CHANGED_PROPERTY:String
static MNEMONIC_CHANGED_PROPERTY:String
static MARGIN_CHANGED_PROPERTY:String
static VERTICAL_ALIGNMENT_CHANGED_PROPERTY:String
static HORIZONTAL_ALIGNMENT_CHANGED_PROPERTY:String
static VERTICAL_TEXT_POSITION_CHANGED_PROPERTY:String
static HORIZONTAL_TEXT_POSITION_CHANGED_PROPERTY:String
static BORDER_PAINTED_CHANGED_PROPERTY:String
static FOCUS_PAINTED_CHANGED_PROPERTY:String
static ROLLOVER_ENABLED_CHANGED_PROPERTY:String
static CONTENT_AREA_FILLED_CHANGED_PROPERTY:String
static ICON_CHANGED_PROPERTY:String
static PRESSED_ICON_CHANGED_PROPERTY:String
static SELECTED_ICON_CHANGED_PROPERTY:String
static ROLLOVER_ICON_CHANGED_PROPERTY:String
static ROLLOVER_SELECTED_ICON_CHANGED_PROPERTY:String
static DISABLED_ICON_CHANGED_PROPERTY:String
static DISABLED_SELECTED_ICON_CHANGED_PROPERTY:String

setHideActionText(arg0: boolean): void;

getHideActionText(): boolean;

getText(): String;

setText(arg0: String): void;

isSelected(): boolean;

setSelected(arg0: boolean): void;

doClick(): void;

doClick(arg0: number): void;

setMargin(arg0: Insets): void;

getMargin(): Insets;

getIcon(): Icon;

setIcon(arg0: Icon): void;

getPressedIcon(): Icon;

setPressedIcon(arg0: Icon): void;

getSelectedIcon(): Icon;

setSelectedIcon(arg0: Icon): void;

getRolloverIcon(): Icon;

setRolloverIcon(arg0: Icon): void;

getRolloverSelectedIcon(): Icon;

setRolloverSelectedIcon(arg0: Icon): void;

getDisabledIcon(): Icon;

setDisabledIcon(arg0: Icon): void;

getDisabledSelectedIcon(): Icon;

setDisabledSelectedIcon(arg0: Icon): void;

getVerticalAlignment(): number;

setVerticalAlignment(arg0: number): void;

getHorizontalAlignment(): number;

setHorizontalAlignment(arg0: number): void;

getVerticalTextPosition(): number;

setVerticalTextPosition(arg0: number): void;

getHorizontalTextPosition(): number;

setHorizontalTextPosition(arg0: number): void;

getIconTextGap(): number;

setIconTextGap(arg0: number): void;

removeNotify(): void;

setActionCommand(arg0: String): void;

getActionCommand(): String;

setAction(arg0: Action): void;

getAction(): Action;

isBorderPainted(): boolean;

setBorderPainted(arg0: boolean): void;

isFocusPainted(): boolean;

setFocusPainted(arg0: boolean): void;

isContentAreaFilled(): boolean;

setContentAreaFilled(arg0: boolean): void;

isRolloverEnabled(): boolean;

setRolloverEnabled(arg0: boolean): void;

getMnemonic(): number;

setMnemonic(arg0: number): void;

setMnemonic(arg0: String): void;

setDisplayedMnemonicIndex(arg0: number): void;

getDisplayedMnemonicIndex(): number;

setMultiClickThreshhold(arg0: number): void;

getMultiClickThreshhold(): number;

getModel(): ButtonModel;

setModel(arg0: ButtonModel): void;

getUI(): ButtonUI;

setUI(arg0: ButtonUI): void;

updateUI(): void;

setLayout(arg0: LayoutManager): void;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;

getChangeListeners(): ChangeListener[];

addActionListener(arg0: ActionListener): void;

removeActionListener(arg0: ActionListener): void;

getActionListeners(): ActionListener[];

setEnabled(arg0: boolean): void;

getLabel(): String;

setLabel(arg0: String): void;

addItemListener(arg0: ItemListener): void;

removeItemListener(arg0: ItemListener): void;

getItemListeners(): ItemListener[];

getSelectedObjects(): Object[];

imageUpdate(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
 }
export namespace AbstractButton { 
export abstract class AccessibleAbstractButton extends JComponent.AccessibleJComponent implements AccessibleAction, AccessibleValue, AccessibleText, AccessibleExtendedComponent {

getAccessibleName(): String;

getAccessibleIcon(): AccessibleIcon[];

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleRelationSet(): AccessibleRelationSet;

getAccessibleAction(): AccessibleAction;

getAccessibleValue(): AccessibleValue;

getAccessibleActionCount(): number;

getAccessibleActionDescription(arg0: number): String;

doAccessibleAction(arg0: number): boolean;

getCurrentAccessibleValue(): Number;

setCurrentAccessibleValue(arg0: Number): boolean;

getMinimumAccessibleValue(): Number;

getMaximumAccessibleValue(): Number;

getAccessibleText(): AccessibleText;

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

getToolTipText(): String;

getTitledBorderText(): String;

getAccessibleKeyBinding(): AccessibleKeyBinding;
 }

export class ButtonChangeListener implements ChangeListener, Serializable {

stateChanged(arg0: ChangeEvent): void;
 }

}

export abstract class AbstractCellEditor implements CellEditor, Serializable {

isCellEditable(arg0: EventObject): boolean;

shouldSelectCell(arg0: EventObject): boolean;

stopCellEditing(): boolean;

cancelCellEditing(): void;

addCellEditorListener(arg0: CellEditorListener): void;

removeCellEditorListener(arg0: CellEditorListener): void;

getCellEditorListeners(): CellEditorListener[];
 }

export abstract class AbstractListModel<E extends Object> extends Object implements ListModel<E>, Serializable {

addListDataListener(arg0: ListDataListener): void;

removeListDataListener(arg0: ListDataListener): void;

getListDataListeners(): ListDataListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];
 }

export abstract class AbstractSpinnerModel implements SpinnerModel, Serializable {

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;

getChangeListeners(): ChangeListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];
 }

export namespace Action { 
const DEFAULT:String
const NAME:String
const SHORT_DESCRIPTION:String
const LONG_DESCRIPTION:String
const SMALL_ICON:String
const ACTION_COMMAND_KEY:String
const ACCELERATOR_KEY:String
const MNEMONIC_KEY:String
const SELECTED_KEY:String
const DISPLAYED_MNEMONIC_INDEX_KEY:String
const LARGE_ICON_KEY:String
}

export interface Action extends ActionListener {
DEFAULT:String
NAME:String
SHORT_DESCRIPTION:String
LONG_DESCRIPTION:String
SMALL_ICON:String
ACTION_COMMAND_KEY:String
ACCELERATOR_KEY:String
MNEMONIC_KEY:String
SELECTED_KEY:String
DISPLAYED_MNEMONIC_INDEX_KEY:String
LARGE_ICON_KEY:String

getValue(arg0: String): Object;

putValue(arg0: String, arg1: Object): void;

setEnabled(arg0: boolean): void;

isEnabled(): boolean;

/* default */ accept(arg0: Object): boolean;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;
 }

export class ActionMap implements Serializable {
constructor();

setParent(arg0: ActionMap): void;

getParent(): ActionMap;

put(arg0: Object, arg1: Action): void;

get(arg0: Object): Action;

remove(arg0: Object): void;

clear(): void;

keys(): Object[];

size(): number;

allKeys(): Object[];
 }

export class BorderFactory {

static createLineBorder(arg0: Color): Border;

static createLineBorder(arg0: Color, arg1: number): Border;

static createLineBorder(arg0: Color, arg1: number, arg2: boolean): Border;

static createRaisedBevelBorder(): Border;

static createLoweredBevelBorder(): Border;

static createBevelBorder(arg0: number): Border;

static createBevelBorder(arg0: number, arg1: Color, arg2: Color): Border;

static createBevelBorder(arg0: number, arg1: Color, arg2: Color, arg3: Color, arg4: Color): Border;

static createRaisedSoftBevelBorder(): Border;

static createLoweredSoftBevelBorder(): Border;

static createSoftBevelBorder(arg0: number): Border;

static createSoftBevelBorder(arg0: number, arg1: Color, arg2: Color): Border;

static createSoftBevelBorder(arg0: number, arg1: Color, arg2: Color, arg3: Color, arg4: Color): Border;

static createEtchedBorder(): Border;

static createEtchedBorder(arg0: Color, arg1: Color): Border;

static createEtchedBorder(arg0: number): Border;

static createEtchedBorder(arg0: number, arg1: Color, arg2: Color): Border;

static createTitledBorder(arg0: String): TitledBorder;

static createTitledBorder(arg0: Border): TitledBorder;

static createTitledBorder(arg0: Border, arg1: String): TitledBorder;

static createTitledBorder(arg0: Border, arg1: String, arg2: number, arg3: number): TitledBorder;

static createTitledBorder(arg0: Border, arg1: String, arg2: number, arg3: number, arg4: Font): TitledBorder;

static createTitledBorder(arg0: Border, arg1: String, arg2: number, arg3: number, arg4: Font, arg5: Color): TitledBorder;

static createEmptyBorder(): Border;

static createEmptyBorder(arg0: number, arg1: number, arg2: number, arg3: number): Border;

static createCompoundBorder(): CompoundBorder;

static createCompoundBorder(arg0: Border, arg1: Border): CompoundBorder;

static createMatteBorder(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Color): MatteBorder;

static createMatteBorder(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Icon): MatteBorder;

static createStrokeBorder(arg0: BasicStroke): Border;

static createStrokeBorder(arg0: BasicStroke, arg1: Paint): Border;

static createDashedBorder(arg0: Paint): Border;

static createDashedBorder(arg0: Paint, arg1: number, arg2: number): Border;

static createDashedBorder(arg0: Paint, arg1: number, arg2: number, arg3: number, arg4: boolean): Border;
 }

export interface BoundedRangeModel {

getMinimum(): number;

setMinimum(arg0: number): void;

getMaximum(): number;

setMaximum(arg0: number): void;

getValue(): number;

setValue(arg0: number): void;

setValueIsAdjusting(arg0: boolean): void;

getValueIsAdjusting(): boolean;

getExtent(): number;

setExtent(arg0: number): void;

setRangeProperties(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;
 }

export class Box extends JComponent implements Accessible {
constructor(arg0: number);

static createHorizontalBox(): Box;

static createVerticalBox(): Box;

static createRigidArea(arg0: Dimension): Component;

static createHorizontalStrut(arg0: number): Component;

static createVerticalStrut(arg0: number): Component;

static createGlue(): Component;

static createHorizontalGlue(): Component;

static createVerticalGlue(): Component;

setLayout(arg0: LayoutManager): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace Box { 
export class AccessibleBox extends Container.AccessibleAWTContainer {

getAccessibleRole(): AccessibleRole;
 }

export class Filler extends JComponent implements Accessible {
constructor(arg0: Dimension, arg1: Dimension, arg2: Dimension);

changeShape(arg0: Dimension, arg1: Dimension, arg2: Dimension): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace Filler { 
export class AccessibleBoxFiller extends Component.AccessibleAWTComponent {

getAccessibleRole(): AccessibleRole;
 }

}

export class AccessibleBoxFiller extends Component.AccessibleAWTComponent {

getAccessibleRole(): AccessibleRole;
 }

}

export class BoxLayout implements LayoutManager2, Serializable {
static X_AXIS:number
static Y_AXIS:number
static LINE_AXIS:number
static PAGE_AXIS:number
constructor(arg0: Container, arg1: number);

getTarget(): Container;

getAxis(): number;

invalidateLayout(arg0: Container): void;

addLayoutComponent(arg0: String, arg1: Component): void;

removeLayoutComponent(arg0: Component): void;

addLayoutComponent(arg0: Component, arg1: Object): void;

preferredLayoutSize(arg0: Container): Dimension;

minimumLayoutSize(arg0: Container): Dimension;

maximumLayoutSize(arg0: Container): Dimension;

getLayoutAlignmentX(arg0: Container): number;

getLayoutAlignmentY(arg0: Container): number;

layoutContainer(arg0: Container): void;
 }

export class ButtonGroup implements Serializable {
constructor();

add(arg0: AbstractButton): void;

remove(arg0: AbstractButton): void;

clearSelection(): void;

getElements(): Enumeration<AbstractButton>;

getSelection(): ButtonModel;

setSelected(arg0: ButtonModel, arg1: boolean): void;

isSelected(arg0: ButtonModel): boolean;

getButtonCount(): number;
 }

export interface ButtonModel extends ItemSelectable {

isArmed(): boolean;

isSelected(): boolean;

isEnabled(): boolean;

isPressed(): boolean;

isRollover(): boolean;

setArmed(arg0: boolean): void;

setSelected(arg0: boolean): void;

setEnabled(arg0: boolean): void;

setPressed(arg0: boolean): void;

setRollover(arg0: boolean): void;

setMnemonic(arg0: number): void;

getMnemonic(): number;

setActionCommand(arg0: String): void;

getActionCommand(): String;

setGroup(arg0: ButtonGroup): void;

/* default */ getGroup(): ButtonGroup;

addActionListener(arg0: ActionListener): void;

removeActionListener(arg0: ActionListener): void;

addItemListener(arg0: ItemListener): void;

removeItemListener(arg0: ItemListener): void;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;
 }

export interface CellEditor {

getCellEditorValue(): Object;

isCellEditable(arg0: EventObject): boolean;

shouldSelectCell(arg0: EventObject): boolean;

stopCellEditing(): boolean;

cancelCellEditing(): void;

addCellEditorListener(arg0: CellEditorListener): void;

removeCellEditorListener(arg0: CellEditorListener): void;
 }

export class CellRendererPane extends Container implements Accessible {
constructor();

invalidate(): void;

paint(arg0: Graphics): void;

update(arg0: Graphics): void;

paintComponent(arg0: Graphics, arg1: Component, arg2: Container, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean): void;

paintComponent(arg0: Graphics, arg1: Component, arg2: Container, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintComponent(arg0: Graphics, arg1: Component, arg2: Container, arg3: Rectangle): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace CellRendererPane { 
export class AccessibleCellRendererPane extends Container.AccessibleAWTContainer {

getAccessibleRole(): AccessibleRole;
 }

}

export interface ComboBoxEditor {

getEditorComponent(): Component;

setItem(arg0: Object): void;

getItem(): Object;

selectAll(): void;

addActionListener(arg0: ActionListener): void;

removeActionListener(arg0: ActionListener): void;
 }

export interface ComboBoxModel<E extends Object> extends ListModel<E>, Object {

setSelectedItem(arg0: Object): void;

getSelectedItem(): Object;
 }

export class ComponentInputMap extends InputMap {
constructor(arg0: JComponent);

setParent(arg0: InputMap): void;

getComponent(): JComponent;

put(arg0: KeyStroke, arg1: Object): void;

remove(arg0: KeyStroke): void;

clear(): void;
 }

export class DebugGraphics extends Graphics {
static LOG_OPTION:number
static FLASH_OPTION:number
static BUFFERED_OPTION:number
static NONE_OPTION:number
constructor();
constructor(arg0: Graphics, arg1: JComponent);
constructor(arg0: Graphics);

create(): Graphics;

create(arg0: number, arg1: number, arg2: number, arg3: number): Graphics;

static setFlashColor(arg0: Color): void;

static flashColor(): Color;

static setFlashTime(arg0: number): void;

static flashTime(): number;

static setFlashCount(arg0: number): void;

static flashCount(): number;

static setLogStream(arg0: PrintStream): void;

static logStream(): PrintStream;

setFont(arg0: Font): void;

getFont(): Font;

setColor(arg0: Color): void;

getColor(): Color;

getFontMetrics(): FontMetrics;

getFontMetrics(arg0: Font): FontMetrics;

translate(arg0: number, arg1: number): void;

setPaintMode(): void;

setXORMode(arg0: Color): void;

getClipBounds(): Rectangle;

clipRect(arg0: number, arg1: number, arg2: number, arg3: number): void;

setClip(arg0: number, arg1: number, arg2: number, arg3: number): void;

getClip(): Shape;

setClip(arg0: Shape): void;

drawRect(arg0: number, arg1: number, arg2: number, arg3: number): void;

fillRect(arg0: number, arg1: number, arg2: number, arg3: number): void;

clearRect(arg0: number, arg1: number, arg2: number, arg3: number): void;

drawRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

fillRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

drawLine(arg0: number, arg1: number, arg2: number, arg3: number): void;

draw3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;

fill3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;

drawOval(arg0: number, arg1: number, arg2: number, arg3: number): void;

fillOval(arg0: number, arg1: number, arg2: number, arg3: number): void;

drawArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

fillArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

drawPolyline(arg0: number[], arg1: number[], arg2: number): void;

drawPolygon(arg0: number[], arg1: number[], arg2: number): void;

fillPolygon(arg0: number[], arg1: number[], arg2: number): void;

drawString(arg0: String, arg1: number, arg2: number): void;

drawString(arg0: AttributedCharacterIterator, arg1: number, arg2: number): void;

drawBytes(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: number): void;

drawChars(arg0: String[], arg1: number, arg2: number, arg3: number, arg4: number): void;

drawImage(arg0: Image, arg1: number, arg2: number, arg3: ImageObserver): boolean;

drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: ImageObserver): boolean;

drawImage(arg0: Image, arg1: number, arg2: number, arg3: Color, arg4: ImageObserver): boolean;

drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Color, arg6: ImageObserver): boolean;

drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: ImageObserver): boolean;

drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Color, arg10: ImageObserver): boolean;

copyArea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

dispose(): void;

isDrawingBuffer(): boolean;

setDebugOptions(arg0: number): void;

getDebugOptions(): number;
 }

export class DefaultBoundedRangeModel implements BoundedRangeModel, Serializable {
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number);

getValue(): number;

getExtent(): number;

getMinimum(): number;

getMaximum(): number;

setValue(arg0: number): void;

setExtent(arg0: number): void;

setMinimum(arg0: number): void;

setMaximum(arg0: number): void;

setValueIsAdjusting(arg0: boolean): void;

getValueIsAdjusting(): boolean;

setRangeProperties(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;

getChangeListeners(): ChangeListener[];
toString(): string;

getListeners<T extends EventListener>(arg0: Class<T>): T[];
 }

export class DefaultButtonModel implements ButtonModel, Serializable {
static ARMED:number
static SELECTED:number
static PRESSED:number
static ENABLED:number
static ROLLOVER:number
constructor();

setActionCommand(arg0: String): void;

getActionCommand(): String;

isArmed(): boolean;

isSelected(): boolean;

isEnabled(): boolean;

isPressed(): boolean;

isRollover(): boolean;

setArmed(arg0: boolean): void;

setEnabled(arg0: boolean): void;

setSelected(arg0: boolean): void;

setPressed(arg0: boolean): void;

setRollover(arg0: boolean): void;

setMnemonic(arg0: number): void;

getMnemonic(): number;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;

getChangeListeners(): ChangeListener[];

addActionListener(arg0: ActionListener): void;

removeActionListener(arg0: ActionListener): void;

getActionListeners(): ActionListener[];

addItemListener(arg0: ItemListener): void;

removeItemListener(arg0: ItemListener): void;

getItemListeners(): ItemListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

getSelectedObjects(): Object[];

setGroup(arg0: ButtonGroup): void;

getGroup(): ButtonGroup;
 }

export class DefaultCellEditor extends AbstractCellEditor implements TableCellEditor, TreeCellEditor {
constructor(arg0: JTextField);
constructor(arg0: JCheckBox);
constructor(arg0: JComboBox<any>);

getComponent(): Component;

setClickCountToStart(arg0: number): void;

getClickCountToStart(): number;

getCellEditorValue(): Object;

isCellEditable(arg0: EventObject): boolean;

shouldSelectCell(arg0: EventObject): boolean;

stopCellEditing(): boolean;

cancelCellEditing(): void;

getTreeCellEditorComponent(arg0: JTree, arg1: Object, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number): Component;

getTableCellEditorComponent(arg0: JTable, arg1: Object, arg2: boolean, arg3: number, arg4: number): Component;
 }
export namespace DefaultCellEditor { 
export class EditorDelegate implements ActionListener, ItemListener, Serializable {

getCellEditorValue(): Object;

setValue(arg0: Object): void;

isCellEditable(arg0: EventObject): boolean;

shouldSelectCell(arg0: EventObject): boolean;

startCellEditing(arg0: EventObject): boolean;

stopCellEditing(): boolean;

cancelCellEditing(): void;

actionPerformed(arg0: ActionEvent): void;

itemStateChanged(arg0: ItemEvent): void;
 }

}

export class DefaultComboBoxModel<E extends Object> extends AbstractListModel<E> implements MutableComboBoxModel<E>, Serializable {
constructor();
constructor(arg0: E[]);
constructor(arg0: Vector<E>);

setSelectedItem(arg0: Object): void;

getSelectedItem(): Object;

getSize(): number;

getElementAt(arg0: number): E;

getIndexOf(arg0: Object): number;

addElement(arg0: E): void;

insertElementAt(arg0: E, arg1: number): void;

removeElementAt(arg0: number): void;

removeElement(arg0: Object): void;

removeAllElements(): void;

addAll(arg0: Collection<E>): void;

addAll(arg0: number, arg1: Collection<E>): void;
 }

export class DefaultDesktopManager implements DesktopManager, Serializable {
constructor();

openFrame(arg0: JInternalFrame): void;

closeFrame(arg0: JInternalFrame): void;

maximizeFrame(arg0: JInternalFrame): void;

minimizeFrame(arg0: JInternalFrame): void;

iconifyFrame(arg0: JInternalFrame): void;

deiconifyFrame(arg0: JInternalFrame): void;

activateFrame(arg0: JInternalFrame): void;

deactivateFrame(arg0: JInternalFrame): void;

beginDraggingFrame(arg0: JComponent): void;

dragFrame(arg0: JComponent, arg1: number, arg2: number): void;

endDraggingFrame(arg0: JComponent): void;

beginResizingFrame(arg0: JComponent, arg1: number): void;

resizeFrame(arg0: JComponent, arg1: number, arg2: number, arg3: number, arg4: number): void;

endResizingFrame(arg0: JComponent): void;

setBoundsForFrame(arg0: JComponent, arg1: number, arg2: number, arg3: number, arg4: number): void;
 }

export class DefaultFocusManager extends FocusManager {
constructor();

getComponentAfter(arg0: Container, arg1: Component): Component;

getComponentBefore(arg0: Container, arg1: Component): Component;

getFirstComponent(arg0: Container): Component;

getLastComponent(arg0: Container): Component;

compareTabOrder(arg0: Component, arg1: Component): boolean;
 }

export class DefaultListCellRenderer extends JLabel implements ListCellRenderer<Object>, Serializable {
constructor();

getListCellRendererComponent(arg0: JList<any>, arg1: Object, arg2: number, arg3: boolean, arg4: boolean): Component;

isOpaque(): boolean;

validate(): void;

invalidate(): void;

repaint(): void;

revalidate(): void;

repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;

repaint(arg0: Rectangle): void;

firePropertyChange(arg0: String, arg1: number, arg2: number): void;

firePropertyChange(arg0: String, arg1: String, arg2: String): void;

firePropertyChange(arg0: String, arg1: number, arg2: number): void;

firePropertyChange(arg0: String, arg1: number, arg2: number): void;

firePropertyChange(arg0: String, arg1: number, arg2: number): void;

firePropertyChange(arg0: String, arg1: number, arg2: number): void;

firePropertyChange(arg0: String, arg1: number, arg2: number): void;

firePropertyChange(arg0: String, arg1: boolean, arg2: boolean): void;
 }
export namespace DefaultListCellRenderer { 
export class UIResource extends DefaultListCellRenderer implements UIResource {
constructor();
 }

}

export class DefaultListModel<E extends Object> extends AbstractListModel<E> {
constructor();

getSize(): number;

getElementAt(arg0: number): E;

copyInto(arg0: Object[]): void;

trimToSize(): void;

ensureCapacity(arg0: number): void;

setSize(arg0: number): void;

capacity(): number;

size(): number;

isEmpty(): boolean;

elements(): Enumeration<E>;

contains(arg0: Object): boolean;

indexOf(arg0: Object): number;

indexOf(arg0: Object, arg1: number): number;

lastIndexOf(arg0: Object): number;

lastIndexOf(arg0: Object, arg1: number): number;

elementAt(arg0: number): E;

firstElement(): E;

lastElement(): E;

setElementAt(arg0: E, arg1: number): void;

removeElementAt(arg0: number): void;

insertElementAt(arg0: E, arg1: number): void;

addElement(arg0: E): void;

removeElement(arg0: Object): boolean;

removeAllElements(): void;
toString(): string;

toArray(): Object[];

get(arg0: number): E;

set(arg0: number, arg1: E): E;

add(arg0: number, arg1: E): void;

remove(arg0: number): E;

clear(): void;

removeRange(arg0: number, arg1: number): void;

addAll(arg0: Collection<E>): void;

addAll(arg0: number, arg1: Collection<E>): void;
 }

export interface DefaultListSelectionModel extends ListSelectionModel, Cloneable, Serializable { }
export class DefaultListSelectionModel implements ListSelectionModel, Cloneable, Serializable {
constructor();

getMinSelectionIndex(): number;

getMaxSelectionIndex(): number;

getValueIsAdjusting(): boolean;

getSelectionMode(): number;

setSelectionMode(arg0: number): void;

isSelectedIndex(arg0: number): boolean;

isSelectionEmpty(): boolean;

addListSelectionListener(arg0: ListSelectionListener): void;

removeListSelectionListener(arg0: ListSelectionListener): void;

getListSelectionListeners(): ListSelectionListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

setLeadAnchorNotificationEnabled(arg0: boolean): void;

isLeadAnchorNotificationEnabled(): boolean;

clearSelection(): void;

setSelectionInterval(arg0: number, arg1: number): void;

addSelectionInterval(arg0: number, arg1: number): void;

removeSelectionInterval(arg0: number, arg1: number): void;

insertIndexInterval(arg0: number, arg1: number, arg2: boolean): void;

removeIndexInterval(arg0: number, arg1: number): void;

setValueIsAdjusting(arg0: boolean): void;
toString(): string;

clone(): Object;

getAnchorSelectionIndex(): number;

getLeadSelectionIndex(): number;

setAnchorSelectionIndex(arg0: number): void;

moveLeadSelectionIndex(arg0: number): void;

setLeadSelectionIndex(arg0: number): void;
 }

export abstract class DefaultRowSorter<M extends Object, I extends Object> extends RowSorter<M> {
constructor();

getModel(): M;

setSortable(arg0: number, arg1: boolean): void;

isSortable(arg0: number): boolean;

setSortKeys(arg0: List<RowSorter.SortKey>): void;

getSortKeys(): List<RowSorter.SortKey>;

setMaxSortKeys(arg0: number): void;

getMaxSortKeys(): number;

setSortsOnUpdates(arg0: boolean): void;

getSortsOnUpdates(): boolean;

setRowFilter(arg0: RowFilter<M, I>): void;

getRowFilter(): RowFilter<M, I>;

toggleSortOrder(arg0: number): void;

convertRowIndexToView(arg0: number): number;

convertRowIndexToModel(arg0: number): number;

sort(): void;

setComparator(arg0: number, arg1: Comparator<any>): void;

getComparator(arg0: number): Comparator<any>;

getViewRowCount(): number;

getModelRowCount(): number;

modelStructureChanged(): void;

allRowsChanged(): void;

rowsInserted(arg0: number, arg1: number): void;

rowsDeleted(arg0: number, arg1: number): void;

rowsUpdated(arg0: number, arg1: number): void;

rowsUpdated(arg0: number, arg1: number, arg2: number): void;
 }
export namespace DefaultRowSorter { 
export abstract class ModelWrapper<M extends Object, I extends Object> extends Object {

abstract getModel(): M;

abstract getColumnCount(): number;

abstract getRowCount(): number;

abstract getValueAt(arg0: number, arg1: number): Object;

getStringValueAt(arg0: number, arg1: number): String;

abstract getIdentifier(arg0: number): I;
 }

}

export class DefaultSingleSelectionModel implements SingleSelectionModel, Serializable {
constructor();

getSelectedIndex(): number;

setSelectedIndex(arg0: number): void;

clearSelection(): void;

isSelected(): boolean;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;

getChangeListeners(): ChangeListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];
 }

export interface DesktopManager {

openFrame(arg0: JInternalFrame): void;

closeFrame(arg0: JInternalFrame): void;

maximizeFrame(arg0: JInternalFrame): void;

minimizeFrame(arg0: JInternalFrame): void;

iconifyFrame(arg0: JInternalFrame): void;

deiconifyFrame(arg0: JInternalFrame): void;

activateFrame(arg0: JInternalFrame): void;

deactivateFrame(arg0: JInternalFrame): void;

beginDraggingFrame(arg0: JComponent): void;

dragFrame(arg0: JComponent, arg1: number, arg2: number): void;

endDraggingFrame(arg0: JComponent): void;

beginResizingFrame(arg0: JComponent, arg1: number): void;

resizeFrame(arg0: JComponent, arg1: number, arg2: number, arg3: number, arg4: number): void;

endResizingFrame(arg0: JComponent): void;

setBoundsForFrame(arg0: JComponent, arg1: number, arg2: number, arg3: number, arg4: number): void;
 }

export class DropMode extends Enum<DropMode> {
static USE_SELECTION:DropMode
static ON:DropMode
static INSERT:DropMode
static INSERT_ROWS:DropMode
static INSERT_COLS:DropMode
static ON_OR_INSERT:DropMode
static ON_OR_INSERT_ROWS:DropMode
static ON_OR_INSERT_COLS:DropMode

static values(): DropMode[];

static valueOf(arg0: String): DropMode;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export abstract class FocusManager extends DefaultKeyboardFocusManager {
static FOCUS_MANAGER_CLASS_PROPERTY:String

static getCurrentManager(): FocusManager;

static setCurrentManager(arg0: FocusManager): void;

static disableSwingFocusManager(): void;

static isFocusManagerEnabled(): boolean;
 }

export class GrayFilter extends RGBImageFilter {
constructor(arg0: boolean, arg1: number);

static createDisabledImage(arg0: Image): Image;

filterRGB(arg0: number, arg1: number, arg2: number): number;
 }

export class GroupLayout implements LayoutManager2 {
static DEFAULT_SIZE:number
static PREFERRED_SIZE:number
constructor(arg0: Container);

setHonorsVisibility(arg0: boolean): void;

getHonorsVisibility(): boolean;

setHonorsVisibility(arg0: Component, arg1: Boolean): void;

setAutoCreateGaps(arg0: boolean): void;

getAutoCreateGaps(): boolean;

setAutoCreateContainerGaps(arg0: boolean): void;

getAutoCreateContainerGaps(): boolean;

setHorizontalGroup(arg0: GroupLayout.Group): void;

setVerticalGroup(arg0: GroupLayout.Group): void;

createSequentialGroup(): GroupLayout.SequentialGroup;

createParallelGroup(): GroupLayout.ParallelGroup;

createParallelGroup(arg0: GroupLayout.Alignment): GroupLayout.ParallelGroup;

createParallelGroup(arg0: GroupLayout.Alignment, arg1: boolean): GroupLayout.ParallelGroup;

createBaselineGroup(arg0: boolean, arg1: boolean): GroupLayout.ParallelGroup;

linkSize(arg0: Component[]): void;

linkSize(arg0: number, arg1: Component[]): void;

replace(arg0: Component, arg1: Component): void;

setLayoutStyle(arg0: LayoutStyle): void;

getLayoutStyle(): LayoutStyle;

addLayoutComponent(arg0: String, arg1: Component): void;

removeLayoutComponent(arg0: Component): void;

preferredLayoutSize(arg0: Container): Dimension;

minimumLayoutSize(arg0: Container): Dimension;

layoutContainer(arg0: Container): void;

addLayoutComponent(arg0: Component, arg1: Object): void;

maximumLayoutSize(arg0: Container): Dimension;

getLayoutAlignmentX(arg0: Container): number;

getLayoutAlignmentY(arg0: Container): number;

invalidateLayout(arg0: Container): void;
toString(): string;
 }
export namespace GroupLayout { 
export class Alignment extends Enum<GroupLayout.Alignment> {
static LEADING:GroupLayout.Alignment
static TRAILING:GroupLayout.Alignment
static CENTER:GroupLayout.Alignment
static BASELINE:GroupLayout.Alignment

static values(): GroupLayout.Alignment[];

static valueOf(arg0: String): GroupLayout.Alignment;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export abstract class Group extends GroupLayout.Spring {

addGroup(arg0: GroupLayout.Group): GroupLayout.Group;

addComponent(arg0: Component): GroupLayout.Group;

addComponent(arg0: Component, arg1: number, arg2: number, arg3: number): GroupLayout.Group;

addGap(arg0: number): GroupLayout.Group;

addGap(arg0: number, arg1: number, arg2: number): GroupLayout.Group;
 }

export class ParallelGroup extends GroupLayout.Group {

addGroup(arg0: GroupLayout.Group): GroupLayout.ParallelGroup;

addComponent(arg0: Component): GroupLayout.ParallelGroup;

addComponent(arg0: Component, arg1: number, arg2: number, arg3: number): GroupLayout.ParallelGroup;

addGap(arg0: number): GroupLayout.ParallelGroup;

addGap(arg0: number, arg1: number, arg2: number): GroupLayout.ParallelGroup;

addGroup(arg0: GroupLayout.Alignment, arg1: GroupLayout.Group): GroupLayout.ParallelGroup;

addComponent(arg0: Component, arg1: GroupLayout.Alignment): GroupLayout.ParallelGroup;

addComponent(arg0: Component, arg1: GroupLayout.Alignment, arg2: number, arg3: number, arg4: number): GroupLayout.ParallelGroup;
 }

export class SequentialGroup extends GroupLayout.Group {

addGroup(arg0: GroupLayout.Group): GroupLayout.SequentialGroup;

addGroup(arg0: boolean, arg1: GroupLayout.Group): GroupLayout.SequentialGroup;

addComponent(arg0: Component): GroupLayout.SequentialGroup;

addComponent(arg0: boolean, arg1: Component): GroupLayout.SequentialGroup;

addComponent(arg0: Component, arg1: number, arg2: number, arg3: number): GroupLayout.SequentialGroup;

addComponent(arg0: boolean, arg1: Component, arg2: number, arg3: number, arg4: number): GroupLayout.SequentialGroup;

addGap(arg0: number): GroupLayout.SequentialGroup;

addGap(arg0: number, arg1: number, arg2: number): GroupLayout.SequentialGroup;

addPreferredGap(arg0: JComponent, arg1: JComponent, arg2: LayoutStyle.ComponentPlacement): GroupLayout.SequentialGroup;

addPreferredGap(arg0: JComponent, arg1: JComponent, arg2: LayoutStyle.ComponentPlacement, arg3: number, arg4: number): GroupLayout.SequentialGroup;

addPreferredGap(arg0: LayoutStyle.ComponentPlacement): GroupLayout.SequentialGroup;

addPreferredGap(arg0: LayoutStyle.ComponentPlacement, arg1: number, arg2: number): GroupLayout.SequentialGroup;

addContainerGap(): GroupLayout.SequentialGroup;

addContainerGap(arg0: number, arg1: number): GroupLayout.SequentialGroup;
 }

}

export interface Icon {

paintIcon(arg0: Component, arg1: Graphics, arg2: number, arg3: number): void;

getIconWidth(): number;

getIconHeight(): number;
 }

export class ImageIcon implements Icon, Serializable, Accessible {
constructor(arg0: String, arg1: String);
constructor(arg0: String);
constructor(arg0: URL, arg1: String);
constructor(arg0: URL);
constructor(arg0: Image, arg1: String);
constructor(arg0: Image);
constructor(arg0: number[], arg1: String);
constructor(arg0: number[]);
constructor();

getImageLoadStatus(): number;

getImage(): Image;

setImage(arg0: Image): void;

getDescription(): String;

setDescription(arg0: String): void;

paintIcon(arg0: Component, arg1: Graphics, arg2: number, arg3: number): void;

getIconWidth(): number;

getIconHeight(): number;

setImageObserver(arg0: ImageObserver): void;

getImageObserver(): ImageObserver;
toString(): string;

getAccessibleContext(): AccessibleContext;
 }
export namespace ImageIcon { 
export class AccessibleImageIcon extends AccessibleContext implements AccessibleIcon, Serializable {

getAccessibleRole(): AccessibleRole;

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleParent(): Accessible;

getAccessibleIndexInParent(): number;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

getLocale(): Locale;

getAccessibleIconDescription(): String;

setAccessibleIconDescription(arg0: String): void;

getAccessibleIconHeight(): number;

getAccessibleIconWidth(): number;
 }

}

export class InputMap implements Serializable {
constructor();

setParent(arg0: InputMap): void;

getParent(): InputMap;

put(arg0: KeyStroke, arg1: Object): void;

get(arg0: KeyStroke): Object;

remove(arg0: KeyStroke): void;

clear(): void;

keys(): KeyStroke[];

size(): number;

allKeys(): KeyStroke[];
 }

export abstract class InputVerifier {

abstract verify(arg0: JComponent): boolean;

shouldYieldFocus(arg0: JComponent): boolean;

verifyTarget(arg0: JComponent): boolean;

shouldYieldFocus(arg0: JComponent, arg1: JComponent): boolean;
 }

export abstract class InternalFrameFocusTraversalPolicy extends FocusTraversalPolicy {

getInitialComponent(arg0: JInternalFrame): Component;
 }

export class JApplet extends Applet implements Accessible, RootPaneContainer, TransferHandler.HasGetTransferHandler {
constructor();

setTransferHandler(arg0: TransferHandler): void;

getTransferHandler(): TransferHandler;

update(arg0: Graphics): void;

setJMenuBar(arg0: JMenuBar): void;

getJMenuBar(): JMenuBar;

remove(arg0: Component): void;

setLayout(arg0: LayoutManager): void;

getRootPane(): JRootPane;

getContentPane(): Container;

setContentPane(arg0: Container): void;

getLayeredPane(): JLayeredPane;

setLayeredPane(arg0: JLayeredPane): void;

getGlassPane(): Component;

setGlassPane(arg0: Component): void;

getGraphics(): Graphics;

repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace JApplet { 
export class AccessibleJApplet extends Applet.AccessibleApplet {
 }

}

export class JButton extends AbstractButton implements Accessible {
constructor();
constructor(arg0: Icon);
constructor(arg0: String);
constructor(arg0: Action);
constructor(arg0: String, arg1: Icon);

updateUI(): void;

getUIClassID(): String;

isDefaultButton(): boolean;

isDefaultCapable(): boolean;

setDefaultCapable(arg0: boolean): void;

removeNotify(): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace JButton { 
export class AccessibleJButton extends AbstractButton.AccessibleAbstractButton {

getAccessibleRole(): AccessibleRole;
 }

}

export class JCheckBox extends JToggleButton implements Accessible {
static BORDER_PAINTED_FLAT_CHANGED_PROPERTY:String
constructor();
constructor(arg0: Icon);
constructor(arg0: Icon, arg1: boolean);
constructor(arg0: String);
constructor(arg0: Action);
constructor(arg0: String, arg1: boolean);
constructor(arg0: String, arg1: Icon);
constructor(arg0: String, arg1: Icon, arg2: boolean);

setBorderPaintedFlat(arg0: boolean): void;

isBorderPaintedFlat(): boolean;

updateUI(): void;

getUIClassID(): String;

getAccessibleContext(): AccessibleContext;
 }
export namespace JCheckBox { 
export class AccessibleJCheckBox extends JToggleButton.AccessibleJToggleButton {

getAccessibleRole(): AccessibleRole;
 }

}

export class JCheckBoxMenuItem extends JMenuItem implements SwingConstants, Accessible {
constructor();
constructor(arg0: Icon);
constructor(arg0: String);
constructor(arg0: Action);
constructor(arg0: String, arg1: Icon);
constructor(arg0: String, arg1: boolean);
constructor(arg0: String, arg1: Icon, arg2: boolean);

getUIClassID(): String;

getState(): boolean;

setState(arg0: boolean): void;

getSelectedObjects(): Object[];

getAccessibleContext(): AccessibleContext;
 }
export namespace JCheckBoxMenuItem { 
export class AccessibleJCheckBoxMenuItem extends JMenuItem.AccessibleJMenuItem {

getAccessibleRole(): AccessibleRole;
 }

}

export class JColorChooser extends JComponent implements Accessible {
static SELECTION_MODEL_PROPERTY:String
static PREVIEW_PANEL_PROPERTY:String
static CHOOSER_PANELS_PROPERTY:String
constructor();
constructor(arg0: Color);
constructor(arg0: ColorSelectionModel);

static showDialog(arg0: Component, arg1: String, arg2: Color): Color;

static showDialog(arg0: Component, arg1: String, arg2: Color, arg3: boolean): Color;

static createDialog(arg0: Component, arg1: String, arg2: boolean, arg3: JColorChooser, arg4: ActionListener, arg5: ActionListener): JDialog;

getUI(): ColorChooserUI;

setUI(arg0: ColorChooserUI): void;

updateUI(): void;

getUIClassID(): String;

getColor(): Color;

setColor(arg0: Color): void;

setColor(arg0: number, arg1: number, arg2: number): void;

setColor(arg0: number): void;

setDragEnabled(arg0: boolean): void;

getDragEnabled(): boolean;

setPreviewPanel(arg0: JComponent): void;

getPreviewPanel(): JComponent;

addChooserPanel(arg0: AbstractColorChooserPanel): void;

removeChooserPanel(arg0: AbstractColorChooserPanel): AbstractColorChooserPanel;

setChooserPanels(arg0: AbstractColorChooserPanel[]): void;

getChooserPanels(): AbstractColorChooserPanel[];

getSelectionModel(): ColorSelectionModel;

setSelectionModel(arg0: ColorSelectionModel): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace JColorChooser { 
export class AccessibleJColorChooser extends JComponent.AccessibleJComponent {

getAccessibleRole(): AccessibleRole;
 }

}

export class JComboBox<E extends Object> extends JComponent implements ItemSelectable, ListDataListener, ActionListener, Accessible {
constructor(arg0: ComboBoxModel<E>);
constructor(arg0: E[]);
constructor(arg0: Vector<E>);
constructor();

setUI(arg0: ComboBoxUI): void;

updateUI(): void;

getUIClassID(): String;

getUI(): ComboBoxUI;

setModel(arg0: ComboBoxModel<E>): void;

getModel(): ComboBoxModel<E>;

setLightWeightPopupEnabled(arg0: boolean): void;

isLightWeightPopupEnabled(): boolean;

setEditable(arg0: boolean): void;

isEditable(): boolean;

setMaximumRowCount(arg0: number): void;

getMaximumRowCount(): number;

setRenderer(arg0: ListCellRenderer<E>): void;

getRenderer(): ListCellRenderer<E>;

setEditor(arg0: ComboBoxEditor): void;

getEditor(): ComboBoxEditor;

setSelectedItem(arg0: Object): void;

getSelectedItem(): Object;

setSelectedIndex(arg0: number): void;

getSelectedIndex(): number;

getPrototypeDisplayValue(): E;

setPrototypeDisplayValue(arg0: E): void;

addItem(arg0: E): void;

insertItemAt(arg0: E, arg1: number): void;

removeItem(arg0: Object): void;

removeItemAt(arg0: number): void;

removeAllItems(): void;

showPopup(): void;

hidePopup(): void;

setPopupVisible(arg0: boolean): void;

isPopupVisible(): boolean;

addItemListener(arg0: ItemListener): void;

removeItemListener(arg0: ItemListener): void;

getItemListeners(): ItemListener[];

addActionListener(arg0: ActionListener): void;

removeActionListener(arg0: ActionListener): void;

getActionListeners(): ActionListener[];

addPopupMenuListener(arg0: PopupMenuListener): void;

removePopupMenuListener(arg0: PopupMenuListener): void;

getPopupMenuListeners(): PopupMenuListener[];

firePopupMenuWillBecomeVisible(): void;

firePopupMenuWillBecomeInvisible(): void;

firePopupMenuCanceled(): void;

setActionCommand(arg0: String): void;

getActionCommand(): String;

setAction(arg0: Action): void;

getAction(): Action;

getSelectedObjects(): Object[];

actionPerformed(arg0: ActionEvent): void;

contentsChanged(arg0: ListDataEvent): void;

intervalAdded(arg0: ListDataEvent): void;

intervalRemoved(arg0: ListDataEvent): void;

selectWithKeyChar(arg0: String): boolean;

setEnabled(arg0: boolean): void;

configureEditor(arg0: ComboBoxEditor, arg1: Object): void;

processKeyEvent(arg0: KeyEvent): void;

setKeySelectionManager(arg0: JComboBox.KeySelectionManager): void;

getKeySelectionManager(): JComboBox.KeySelectionManager;

getItemCount(): number;

getItemAt(arg0: number): E;

getAccessibleContext(): AccessibleContext;
 }
export namespace JComboBox { 
export class AccessibleJComboBox extends JComponent.AccessibleJComponent implements AccessibleAction, AccessibleSelection {
constructor(arg0: JComboBox);

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

getAccessibleRole(): AccessibleRole;

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleAction(): AccessibleAction;

getAccessibleActionDescription(arg0: number): String;

getAccessibleActionCount(): number;

doAccessibleAction(arg0: number): boolean;

getAccessibleSelection(): AccessibleSelection;

getAccessibleSelectionCount(): number;

getAccessibleSelection(arg0: number): Accessible;

isAccessibleChildSelected(arg0: number): boolean;

addAccessibleSelection(arg0: number): void;

removeAccessibleSelection(arg0: number): void;

clearAccessibleSelection(): void;

selectAllAccessibleSelection(): void;
 }

export interface KeySelectionManager {

selectionForKey(arg0: String, arg1: ComboBoxModel<any>): number;
 }

}

export abstract class JComponent extends Container implements Serializable, TransferHandler.HasGetTransferHandler {
static WHEN_FOCUSED:number
static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT:number
static WHEN_IN_FOCUSED_WINDOW:number
static UNDEFINED_CONDITION:number
static TOOL_TIP_TEXT_KEY:String
constructor();

setInheritsPopupMenu(arg0: boolean): void;

getInheritsPopupMenu(): boolean;

setComponentPopupMenu(arg0: JPopupMenu): void;

getComponentPopupMenu(): JPopupMenu;

updateUI(): void;

getUI(): ComponentUI;

getUIClassID(): String;

update(arg0: Graphics): void;

paint(arg0: Graphics): void;

printAll(arg0: Graphics): void;

print(arg0: Graphics): void;

isPaintingTile(): boolean;

isPaintingForPrint(): boolean;

isManagingFocus(): boolean;

setNextFocusableComponent(arg0: Component): void;

getNextFocusableComponent(): Component;

setRequestFocusEnabled(arg0: boolean): void;

isRequestFocusEnabled(): boolean;

requestFocus(): void;

requestFocus(arg0: boolean): boolean;

requestFocusInWindow(): boolean;

grabFocus(): void;

setVerifyInputWhenFocusTarget(arg0: boolean): void;

getVerifyInputWhenFocusTarget(): boolean;

getFontMetrics(arg0: Font): FontMetrics;

setPreferredSize(arg0: Dimension): void;

getPreferredSize(): Dimension;

setMaximumSize(arg0: Dimension): void;

getMaximumSize(): Dimension;

setMinimumSize(arg0: Dimension): void;

getMinimumSize(): Dimension;

contains(arg0: number, arg1: number): boolean;

setBorder(arg0: Border): void;

getBorder(): Border;

getInsets(): Insets;

getInsets(arg0: Insets): Insets;

getAlignmentY(): number;

setAlignmentY(arg0: number): void;

getAlignmentX(): number;

setAlignmentX(arg0: number): void;

setInputVerifier(arg0: InputVerifier): void;

getInputVerifier(): InputVerifier;

getGraphics(): Graphics;

setDebugGraphicsOptions(arg0: number): void;

getDebugGraphicsOptions(): number;

registerKeyboardAction(arg0: ActionListener, arg1: String, arg2: KeyStroke, arg3: number): void;

registerKeyboardAction(arg0: ActionListener, arg1: KeyStroke, arg2: number): void;

unregisterKeyboardAction(arg0: KeyStroke): void;

getRegisteredKeyStrokes(): KeyStroke[];

getConditionForKeyStroke(arg0: KeyStroke): number;

getActionForKeyStroke(arg0: KeyStroke): ActionListener;

resetKeyboardActions(): void;

setInputMap(arg0: number, arg1: InputMap): void;

getInputMap(arg0: number): InputMap;

getInputMap(): InputMap;

setActionMap(arg0: ActionMap): void;

getActionMap(): ActionMap;

getBaseline(arg0: number, arg1: number): number;

getBaselineResizeBehavior(): Component.BaselineResizeBehavior;

requestDefaultFocus(): boolean;

setVisible(arg0: boolean): void;

setEnabled(arg0: boolean): void;

setForeground(arg0: Color): void;

setBackground(arg0: Color): void;

setFont(arg0: Font): void;

static getDefaultLocale(): Locale;

static setDefaultLocale(arg0: Locale): void;

setToolTipText(arg0: String): void;

getToolTipText(): String;

getToolTipText(arg0: MouseEvent): String;

getToolTipLocation(arg0: MouseEvent): Point;

getPopupLocation(arg0: MouseEvent): Point;

createToolTip(): JToolTip;

scrollRectToVisible(arg0: Rectangle): void;

setAutoscrolls(arg0: boolean): void;

getAutoscrolls(): boolean;

setTransferHandler(arg0: TransferHandler): void;

getTransferHandler(): TransferHandler;

enable(): void;

disable(): void;

getClientProperty(arg0: Object): Object;

putClientProperty(arg0: Object, arg1: Object): void;

setFocusTraversalKeys(arg0: number, arg1: Set<AWTKeyStroke>): void;

static isLightweightComponent(arg0: Component): boolean;

reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;

getBounds(arg0: Rectangle): Rectangle;

getSize(arg0: Dimension): Dimension;

getLocation(arg0: Point): Point;

getX(): number;

getY(): number;

getWidth(): number;

getHeight(): number;

isOpaque(): boolean;

setOpaque(arg0: boolean): void;

computeVisibleRect(arg0: Rectangle): void;

getVisibleRect(): Rectangle;

firePropertyChange(arg0: String, arg1: boolean, arg2: boolean): void;

firePropertyChange(arg0: String, arg1: number, arg2: number): void;

firePropertyChange(arg0: String, arg1: String, arg2: String): void;

addVetoableChangeListener(arg0: VetoableChangeListener): void;

removeVetoableChangeListener(arg0: VetoableChangeListener): void;

getVetoableChangeListeners(): VetoableChangeListener[];

getTopLevelAncestor(): Container;

addAncestorListener(arg0: AncestorListener): void;

removeAncestorListener(arg0: AncestorListener): void;

getAncestorListeners(): AncestorListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

addNotify(): void;

removeNotify(): void;

repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;

repaint(arg0: Rectangle): void;

revalidate(): void;

isValidateRoot(): boolean;

isOptimizedDrawingEnabled(): boolean;

paintImmediately(arg0: number, arg1: number, arg2: number, arg3: number): void;

paintImmediately(arg0: Rectangle): void;

setDoubleBuffered(arg0: boolean): void;

isDoubleBuffered(): boolean;

getRootPane(): JRootPane;

hide(): void;
 }
export namespace JComponent { 
export abstract class AccessibleJComponent extends Container.AccessibleAWTContainer implements AccessibleExtendedComponent {

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

getAccessibleName(): String;

getAccessibleDescription(): String;

getAccessibleRole(): AccessibleRole;

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

getToolTipText(): String;

getTitledBorderText(): String;

getAccessibleKeyBinding(): AccessibleKeyBinding;
 }
export namespace AccessibleJComponent { 
export class AccessibleContainerHandler implements ContainerListener {

componentAdded(arg0: ContainerEvent): void;

componentRemoved(arg0: ContainerEvent): void;
 }

export class AccessibleFocusHandler implements FocusListener {

focusGained(arg0: FocusEvent): void;

focusLost(arg0: FocusEvent): void;
 }

}

export class AccessibleContainerHandler implements ContainerListener {

componentAdded(arg0: ContainerEvent): void;

componentRemoved(arg0: ContainerEvent): void;
 }

export class AccessibleFocusHandler implements FocusListener {

focusGained(arg0: FocusEvent): void;

focusLost(arg0: FocusEvent): void;
 }

}

export class JDesktopPane extends JLayeredPane implements Accessible {
static LIVE_DRAG_MODE:number
static OUTLINE_DRAG_MODE:number
constructor();

getUI(): DesktopPaneUI;

setUI(arg0: DesktopPaneUI): void;

setDragMode(arg0: number): void;

getDragMode(): number;

getDesktopManager(): DesktopManager;

setDesktopManager(arg0: DesktopManager): void;

updateUI(): void;

getUIClassID(): String;

getAllFrames(): JInternalFrame[];

getSelectedFrame(): JInternalFrame;

setSelectedFrame(arg0: JInternalFrame): void;

getAllFramesInLayer(arg0: number): JInternalFrame[];

remove(arg0: Component): void;

selectFrame(arg0: boolean): JInternalFrame;

remove(arg0: number): void;

removeAll(): void;

setComponentZOrder(arg0: Component, arg1: number): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace JDesktopPane { 
export class AccessibleJDesktopPane extends JComponent.AccessibleJComponent {

getAccessibleRole(): AccessibleRole;
 }

}

export class JDialog extends Dialog implements WindowConstants, Accessible, RootPaneContainer, TransferHandler.HasGetTransferHandler {
constructor();
constructor(arg0: Frame);
constructor(arg0: Frame, arg1: boolean);
constructor(arg0: Frame, arg1: String);
constructor(arg0: Frame, arg1: String, arg2: boolean);
constructor(arg0: Frame, arg1: String, arg2: boolean, arg3: GraphicsConfiguration);
constructor(arg0: Dialog);
constructor(arg0: Dialog, arg1: boolean);
constructor(arg0: Dialog, arg1: String);
constructor(arg0: Dialog, arg1: String, arg2: boolean);
constructor(arg0: Dialog, arg1: String, arg2: boolean, arg3: GraphicsConfiguration);
constructor(arg0: Window);
constructor(arg0: Window, arg1: Dialog.ModalityType);
constructor(arg0: Window, arg1: String);
constructor(arg0: Window, arg1: String, arg2: Dialog.ModalityType);
constructor(arg0: Window, arg1: String, arg2: Dialog.ModalityType, arg3: GraphicsConfiguration);

setDefaultCloseOperation(arg0: number): void;

getDefaultCloseOperation(): number;

setTransferHandler(arg0: TransferHandler): void;

getTransferHandler(): TransferHandler;

update(arg0: Graphics): void;

setJMenuBar(arg0: JMenuBar): void;

getJMenuBar(): JMenuBar;

remove(arg0: Component): void;

setLayout(arg0: LayoutManager): void;

getRootPane(): JRootPane;

getContentPane(): Container;

setContentPane(arg0: Container): void;

getLayeredPane(): JLayeredPane;

setLayeredPane(arg0: JLayeredPane): void;

getGlassPane(): Component;

setGlassPane(arg0: Component): void;

getGraphics(): Graphics;

repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;

static setDefaultLookAndFeelDecorated(arg0: boolean): void;

static isDefaultLookAndFeelDecorated(): boolean;

getAccessibleContext(): AccessibleContext;
 }
export namespace JDialog { 
export class AccessibleJDialog extends Dialog.AccessibleAWTDialog {

getAccessibleName(): String;

getAccessibleStateSet(): AccessibleStateSet;
 }

}

export class JEditorPane extends JTextComponent {
static W3C_LENGTH_UNITS:String
static HONOR_DISPLAY_PROPERTIES:String
constructor();
constructor(arg0: URL);
constructor(arg0: String);
constructor(arg0: String, arg1: String);

addHyperlinkListener(arg0: HyperlinkListener): void;

removeHyperlinkListener(arg0: HyperlinkListener): void;

getHyperlinkListeners(): HyperlinkListener[];

fireHyperlinkUpdate(arg0: HyperlinkEvent): void;

setPage(arg0: URL): void;

read(arg0: InputStream, arg1: Object): void;

scrollToReference(arg0: String): void;

getPage(): URL;

setPage(arg0: String): void;

getUIClassID(): String;

getEditorKit(): EditorKit;

getContentType(): String;

setContentType(arg0: String): void;

setEditorKit(arg0: EditorKit): void;

getEditorKitForContentType(arg0: String): EditorKit;

setEditorKitForContentType(arg0: String, arg1: EditorKit): void;

replaceSelection(arg0: String): void;

static createEditorKitForContentType(arg0: String): EditorKit;

static registerEditorKitForContentType(arg0: String, arg1: String): void;

static registerEditorKitForContentType(arg0: String, arg1: String, arg2: ClassLoader): void;

static getEditorKitClassNameForContentType(arg0: String): String;

getPreferredSize(): Dimension;

setText(arg0: String): void;

getText(): String;

getScrollableTracksViewportWidth(): boolean;

getScrollableTracksViewportHeight(): boolean;

getAccessibleContext(): AccessibleContext;
 }
export namespace JEditorPane { 
export class AccessibleJEditorPane extends JTextComponent.AccessibleJTextComponent {

getAccessibleDescription(): String;

getAccessibleStateSet(): AccessibleStateSet;
 }

export class AccessibleJEditorPaneHTML extends JEditorPane.AccessibleJEditorPane {

getAccessibleText(): AccessibleText;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

getAccessibleAt(arg0: Point): Accessible;
 }

export class JEditorPaneAccessibleHypertextSupport extends JEditorPane.AccessibleJEditorPane implements AccessibleHypertext {
constructor(arg0: JEditorPane);

getLinkCount(): number;

getLinkIndex(arg0: number): number;

getLink(arg0: number): AccessibleHyperlink;

getLinkText(arg0: number): String;
 }
export namespace JEditorPaneAccessibleHypertextSupport { 
export class HTMLLink extends AccessibleHyperlink {
constructor(arg0: JEditorPane.JEditorPaneAccessibleHypertextSupport, arg1: Element);

isValid(): boolean;

getAccessibleActionCount(): number;

doAccessibleAction(arg0: number): boolean;

getAccessibleActionDescription(arg0: number): String;

getAccessibleActionObject(arg0: number): Object;

getAccessibleActionAnchor(arg0: number): Object;

getStartIndex(): number;

getEndIndex(): number;
 }

}

export class HTMLLink extends AccessibleHyperlink {
constructor(arg0: JEditorPane.JEditorPaneAccessibleHypertextSupport, arg1: Element);

isValid(): boolean;

getAccessibleActionCount(): number;

doAccessibleAction(arg0: number): boolean;

getAccessibleActionDescription(arg0: number): String;

getAccessibleActionObject(arg0: number): Object;

getAccessibleActionAnchor(arg0: number): Object;

getStartIndex(): number;

getEndIndex(): number;
 }

}

export class JFileChooser extends JComponent implements Accessible {
static OPEN_DIALOG:number
static SAVE_DIALOG:number
static CUSTOM_DIALOG:number
static CANCEL_OPTION:number
static APPROVE_OPTION:number
static ERROR_OPTION:number
static FILES_ONLY:number
static DIRECTORIES_ONLY:number
static FILES_AND_DIRECTORIES:number
static CANCEL_SELECTION:String
static APPROVE_SELECTION:String
static APPROVE_BUTTON_TEXT_CHANGED_PROPERTY:String
static APPROVE_BUTTON_TOOL_TIP_TEXT_CHANGED_PROPERTY:String
static APPROVE_BUTTON_MNEMONIC_CHANGED_PROPERTY:String
static CONTROL_BUTTONS_ARE_SHOWN_CHANGED_PROPERTY:String
static DIRECTORY_CHANGED_PROPERTY:String
static SELECTED_FILE_CHANGED_PROPERTY:String
static SELECTED_FILES_CHANGED_PROPERTY:String
static MULTI_SELECTION_ENABLED_CHANGED_PROPERTY:String
static FILE_SYSTEM_VIEW_CHANGED_PROPERTY:String
static FILE_VIEW_CHANGED_PROPERTY:String
static FILE_HIDING_CHANGED_PROPERTY:String
static FILE_FILTER_CHANGED_PROPERTY:String
static FILE_SELECTION_MODE_CHANGED_PROPERTY:String
static ACCESSORY_CHANGED_PROPERTY:String
static ACCEPT_ALL_FILE_FILTER_USED_CHANGED_PROPERTY:String
static DIALOG_TITLE_CHANGED_PROPERTY:String
static DIALOG_TYPE_CHANGED_PROPERTY:String
static CHOOSABLE_FILE_FILTER_CHANGED_PROPERTY:String
constructor();
constructor(arg0: String);
constructor(arg0: File);
constructor(arg0: FileSystemView);
constructor(arg0: File, arg1: FileSystemView);
constructor(arg0: String, arg1: FileSystemView);

setDragEnabled(arg0: boolean): void;

getDragEnabled(): boolean;

getSelectedFile(): File;

setSelectedFile(arg0: File): void;

getSelectedFiles(): File[];

setSelectedFiles(arg0: File[]): void;

getCurrentDirectory(): File;

setCurrentDirectory(arg0: File): void;

changeToParentDirectory(): void;

rescanCurrentDirectory(): void;

ensureFileIsVisible(arg0: File): void;

showOpenDialog(arg0: Component): number;

showSaveDialog(arg0: Component): number;

showDialog(arg0: Component, arg1: String): number;

getControlButtonsAreShown(): boolean;

setControlButtonsAreShown(arg0: boolean): void;

getDialogType(): number;

setDialogType(arg0: number): void;

setDialogTitle(arg0: String): void;

getDialogTitle(): String;

setApproveButtonToolTipText(arg0: String): void;

getApproveButtonToolTipText(): String;

getApproveButtonMnemonic(): number;

setApproveButtonMnemonic(arg0: number): void;

setApproveButtonMnemonic(arg0: String): void;

setApproveButtonText(arg0: String): void;

getApproveButtonText(): String;

getChoosableFileFilters(): FileFilter[];

addChoosableFileFilter(arg0: FileFilter): void;

removeChoosableFileFilter(arg0: FileFilter): boolean;

resetChoosableFileFilters(): void;

getAcceptAllFileFilter(): FileFilter;

isAcceptAllFileFilterUsed(): boolean;

setAcceptAllFileFilterUsed(arg0: boolean): void;

getAccessory(): JComponent;

setAccessory(arg0: JComponent): void;

setFileSelectionMode(arg0: number): void;

getFileSelectionMode(): number;

isFileSelectionEnabled(): boolean;

isDirectorySelectionEnabled(): boolean;

setMultiSelectionEnabled(arg0: boolean): void;

isMultiSelectionEnabled(): boolean;

isFileHidingEnabled(): boolean;

setFileHidingEnabled(arg0: boolean): void;

setFileFilter(arg0: FileFilter): void;

getFileFilter(): FileFilter;

setFileView(arg0: FileView): void;

getFileView(): FileView;

getName(arg0: File): String;

getDescription(arg0: File): String;

getTypeDescription(arg0: File): String;

getIcon(arg0: File): Icon;

isTraversable(arg0: File): boolean;

accept(arg0: File): boolean;

setFileSystemView(arg0: FileSystemView): void;

getFileSystemView(): FileSystemView;

approveSelection(): void;

cancelSelection(): void;

addActionListener(arg0: ActionListener): void;

removeActionListener(arg0: ActionListener): void;

getActionListeners(): ActionListener[];

updateUI(): void;

getUIClassID(): String;

getUI(): FileChooserUI;

getAccessibleContext(): AccessibleContext;
 }
export namespace JFileChooser { 
export class AccessibleJFileChooser extends JComponent.AccessibleJComponent {

getAccessibleRole(): AccessibleRole;
 }

}

export class JFormattedTextField extends JTextField {
static COMMIT:number
static COMMIT_OR_REVERT:number
static REVERT:number
static PERSIST:number
constructor();
constructor(arg0: Object);
constructor(arg0: Format);
constructor(arg0: JFormattedTextField.AbstractFormatter);
constructor(arg0: JFormattedTextField.AbstractFormatterFactory);
constructor(arg0: JFormattedTextField.AbstractFormatterFactory, arg1: Object);

setFocusLostBehavior(arg0: number): void;

getFocusLostBehavior(): number;

setFormatterFactory(arg0: JFormattedTextField.AbstractFormatterFactory): void;

getFormatterFactory(): JFormattedTextField.AbstractFormatterFactory;

getFormatter(): JFormattedTextField.AbstractFormatter;

setValue(arg0: Object): void;

getValue(): Object;

commitEdit(): void;

isEditValid(): boolean;

getActions(): Action[];

getUIClassID(): String;

setDocument(arg0: Document): void;
 }
export namespace JFormattedTextField { 
export abstract class AbstractFormatter implements Serializable {

install(arg0: JFormattedTextField): void;

uninstall(): void;

abstract stringToValue(arg0: String): Object;

abstract valueToString(arg0: Object): String;
 }

export abstract class AbstractFormatterFactory {

abstract getFormatter(arg0: JFormattedTextField): JFormattedTextField.AbstractFormatter;
 }

}

export class JFrame extends Frame implements WindowConstants, Accessible, RootPaneContainer, TransferHandler.HasGetTransferHandler {
constructor();
constructor(arg0: GraphicsConfiguration);
constructor(arg0: String);
constructor(arg0: String, arg1: GraphicsConfiguration);

setDefaultCloseOperation(arg0: number): void;

getDefaultCloseOperation(): number;

setTransferHandler(arg0: TransferHandler): void;

getTransferHandler(): TransferHandler;

update(arg0: Graphics): void;

setJMenuBar(arg0: JMenuBar): void;

getJMenuBar(): JMenuBar;

remove(arg0: Component): void;

setLayout(arg0: LayoutManager): void;

getRootPane(): JRootPane;

setIconImage(arg0: Image): void;

getContentPane(): Container;

setContentPane(arg0: Container): void;

getLayeredPane(): JLayeredPane;

setLayeredPane(arg0: JLayeredPane): void;

getGlassPane(): Component;

setGlassPane(arg0: Component): void;

getGraphics(): Graphics;

repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;

static setDefaultLookAndFeelDecorated(arg0: boolean): void;

static isDefaultLookAndFeelDecorated(): boolean;

getAccessibleContext(): AccessibleContext;
 }
export namespace JFrame { 
export class AccessibleJFrame extends Frame.AccessibleAWTFrame {

getAccessibleName(): String;

getAccessibleStateSet(): AccessibleStateSet;
 }

}

export class JInternalFrame extends JComponent implements Accessible, WindowConstants, RootPaneContainer {
static CONTENT_PANE_PROPERTY:String
static MENU_BAR_PROPERTY:String
static TITLE_PROPERTY:String
static LAYERED_PANE_PROPERTY:String
static ROOT_PANE_PROPERTY:String
static GLASS_PANE_PROPERTY:String
static FRAME_ICON_PROPERTY:String
static IS_SELECTED_PROPERTY:String
static IS_CLOSED_PROPERTY:String
static IS_MAXIMUM_PROPERTY:String
static IS_ICON_PROPERTY:String
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: boolean);
constructor(arg0: String, arg1: boolean, arg2: boolean);
constructor(arg0: String, arg1: boolean, arg2: boolean, arg3: boolean);
constructor(arg0: String, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean);

getUI(): InternalFrameUI;

setUI(arg0: InternalFrameUI): void;

updateUI(): void;

getUIClassID(): String;

remove(arg0: Component): void;

setLayout(arg0: LayoutManager): void;

getMenuBar(): JMenuBar;

getJMenuBar(): JMenuBar;

setMenuBar(arg0: JMenuBar): void;

setJMenuBar(arg0: JMenuBar): void;

getContentPane(): Container;

setContentPane(arg0: Container): void;

getLayeredPane(): JLayeredPane;

setLayeredPane(arg0: JLayeredPane): void;

getGlassPane(): Component;

setGlassPane(arg0: Component): void;

getRootPane(): JRootPane;

setClosable(arg0: boolean): void;

isClosable(): boolean;

isClosed(): boolean;

setClosed(arg0: boolean): void;

setResizable(arg0: boolean): void;

isResizable(): boolean;

setIconifiable(arg0: boolean): void;

isIconifiable(): boolean;

isIcon(): boolean;

setIcon(arg0: boolean): void;

setMaximizable(arg0: boolean): void;

isMaximizable(): boolean;

isMaximum(): boolean;

setMaximum(arg0: boolean): void;

getTitle(): String;

setTitle(arg0: String): void;

setSelected(arg0: boolean): void;

isSelected(): boolean;

setFrameIcon(arg0: Icon): void;

getFrameIcon(): Icon;

moveToFront(): void;

moveToBack(): void;

getLastCursor(): Cursor;

setCursor(arg0: Cursor): void;

setLayer(arg0: Number): void;

setLayer(arg0: number): void;

getLayer(): number;

getDesktopPane(): JDesktopPane;

setDesktopIcon(arg0: JInternalFrame.JDesktopIcon): void;

getDesktopIcon(): JInternalFrame.JDesktopIcon;

getNormalBounds(): Rectangle;

setNormalBounds(arg0: Rectangle): void;

getFocusOwner(): Component;

getMostRecentFocusOwner(): Component;

restoreSubcomponentFocus(): void;

reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;

addInternalFrameListener(arg0: InternalFrameListener): void;

removeInternalFrameListener(arg0: InternalFrameListener): void;

getInternalFrameListeners(): InternalFrameListener[];

doDefaultCloseAction(): void;

setDefaultCloseOperation(arg0: number): void;

getDefaultCloseOperation(): number;

pack(): void;

show(): void;

hide(): void;

dispose(): void;

toFront(): void;

toBack(): void;

setFocusCycleRoot(arg0: boolean): void;

isFocusCycleRoot(): boolean;

getFocusCycleRootAncestor(): Container;

getWarningString(): String;

getAccessibleContext(): AccessibleContext;
 }
export namespace JInternalFrame { 
export class AccessibleJInternalFrame extends JComponent.AccessibleJComponent implements AccessibleValue {

getAccessibleName(): String;

getAccessibleRole(): AccessibleRole;

getAccessibleValue(): AccessibleValue;

getCurrentAccessibleValue(): Number;

setCurrentAccessibleValue(arg0: Number): boolean;

getMinimumAccessibleValue(): Number;

getMaximumAccessibleValue(): Number;
 }

export class JDesktopIcon extends JComponent implements Accessible {
constructor(arg0: JInternalFrame);

getUI(): DesktopIconUI;

setUI(arg0: DesktopIconUI): void;

getInternalFrame(): JInternalFrame;

setInternalFrame(arg0: JInternalFrame): void;

getDesktopPane(): JDesktopPane;

updateUI(): void;

getUIClassID(): String;

getAccessibleContext(): AccessibleContext;
 }
export namespace JDesktopIcon { 
export class AccessibleJDesktopIcon extends JComponent.AccessibleJComponent implements AccessibleValue {

getAccessibleRole(): AccessibleRole;

getAccessibleValue(): AccessibleValue;

getCurrentAccessibleValue(): Number;

setCurrentAccessibleValue(arg0: Number): boolean;

getMinimumAccessibleValue(): Number;

getMaximumAccessibleValue(): Number;
 }

}

export class AccessibleJDesktopIcon extends JComponent.AccessibleJComponent implements AccessibleValue {

getAccessibleRole(): AccessibleRole;

getAccessibleValue(): AccessibleValue;

getCurrentAccessibleValue(): Number;

setCurrentAccessibleValue(arg0: Number): boolean;

getMinimumAccessibleValue(): Number;

getMaximumAccessibleValue(): Number;
 }

}

export class JLabel extends JComponent implements SwingConstants, Accessible {
constructor(arg0: String, arg1: Icon, arg2: number);
constructor(arg0: String, arg1: number);
constructor(arg0: String);
constructor(arg0: Icon, arg1: number);
constructor(arg0: Icon);
constructor();

getUI(): LabelUI;

setUI(arg0: LabelUI): void;

updateUI(): void;

getUIClassID(): String;

getText(): String;

setText(arg0: String): void;

getIcon(): Icon;

setIcon(arg0: Icon): void;

getDisabledIcon(): Icon;

setDisabledIcon(arg0: Icon): void;

setDisplayedMnemonic(arg0: number): void;

setDisplayedMnemonic(arg0: String): void;

getDisplayedMnemonic(): number;

setDisplayedMnemonicIndex(arg0: number): void;

getDisplayedMnemonicIndex(): number;

getIconTextGap(): number;

setIconTextGap(arg0: number): void;

getVerticalAlignment(): number;

setVerticalAlignment(arg0: number): void;

getHorizontalAlignment(): number;

setHorizontalAlignment(arg0: number): void;

getVerticalTextPosition(): number;

setVerticalTextPosition(arg0: number): void;

getHorizontalTextPosition(): number;

setHorizontalTextPosition(arg0: number): void;

imageUpdate(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;

getLabelFor(): Component;

setLabelFor(arg0: Component): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace JLabel { 
export class AccessibleJLabel extends JComponent.AccessibleJComponent implements AccessibleText, AccessibleExtendedComponent {

getAccessibleName(): String;

getAccessibleRole(): AccessibleRole;

getAccessibleIcon(): AccessibleIcon[];

getAccessibleRelationSet(): AccessibleRelationSet;

getAccessibleText(): AccessibleText;

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

getToolTipText(): String;

getTitledBorderText(): String;

getAccessibleKeyBinding(): AccessibleKeyBinding;
 }

}

export class JLayer<V extends Component> extends JComponent implements Scrollable, PropertyChangeListener, Accessible {
constructor();
constructor(arg0: V);
constructor(arg0: V, arg1: LayerUI<V>);

getView(): V;

setView(arg0: V): void;

setUI(arg0: LayerUI<V>): void;

getUI(): LayerUI<V>;

getGlassPane(): JPanel;

setGlassPane(arg0: JPanel): void;

createGlassPane(): JPanel;

setLayout(arg0: LayoutManager): void;

setBorder(arg0: Border): void;

getBorder(): Border;

remove(arg0: Component): void;

removeAll(): void;

paintImmediately(arg0: number, arg1: number, arg2: number, arg3: number): void;

imageUpdate(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;

paint(arg0: Graphics): void;

isOptimizedDrawingEnabled(): boolean;

propertyChange(arg0: PropertyChangeEvent): void;

setLayerEventMask(arg0: number): void;

getLayerEventMask(): number;

updateUI(): void;

getPreferredScrollableViewportSize(): Dimension;

getScrollableBlockIncrement(arg0: Rectangle, arg1: number, arg2: number): number;

getScrollableTracksViewportHeight(): boolean;

getScrollableTracksViewportWidth(): boolean;

getScrollableUnitIncrement(arg0: Rectangle, arg1: number, arg2: number): number;

addNotify(): void;

removeNotify(): void;

doLayout(): void;

getAccessibleContext(): AccessibleContext;
 }

export class JLayeredPane extends JComponent implements Accessible {
static DEFAULT_LAYER:Number
static PALETTE_LAYER:Number
static MODAL_LAYER:Number
static POPUP_LAYER:Number
static DRAG_LAYER:Number
static FRAME_CONTENT_LAYER:Number
static LAYER_PROPERTY:String
constructor();

remove(arg0: number): void;

removeAll(): void;

isOptimizedDrawingEnabled(): boolean;

static putLayer(arg0: JComponent, arg1: number): void;

static getLayer(arg0: JComponent): number;

static getLayeredPaneAbove(arg0: Component): JLayeredPane;

setLayer(arg0: Component, arg1: number): void;

setLayer(arg0: Component, arg1: number, arg2: number): void;

getLayer(arg0: Component): number;

getIndexOf(arg0: Component): number;

moveToFront(arg0: Component): void;

moveToBack(arg0: Component): void;

setPosition(arg0: Component, arg1: number): void;

getPosition(arg0: Component): number;

highestLayer(): number;

lowestLayer(): number;

getComponentCountInLayer(arg0: number): number;

getComponentsInLayer(arg0: number): Component[];

paint(arg0: Graphics): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace JLayeredPane { 
export class AccessibleJLayeredPane extends JComponent.AccessibleJComponent {

getAccessibleRole(): AccessibleRole;
 }

}

export class JList<E extends Object> extends JComponent implements Scrollable, Accessible {
static VERTICAL:number
static VERTICAL_WRAP:number
static HORIZONTAL_WRAP:number
constructor(arg0: ListModel<E>);
constructor(arg0: E[]);
constructor(arg0: Vector<E>);
constructor();

getUI(): ListUI;

setUI(arg0: ListUI): void;

updateUI(): void;

getUIClassID(): String;

getPrototypeCellValue(): E;

setPrototypeCellValue(arg0: E): void;

getFixedCellWidth(): number;

setFixedCellWidth(arg0: number): void;

getFixedCellHeight(): number;

setFixedCellHeight(arg0: number): void;

getCellRenderer(): ListCellRenderer<E>;

setCellRenderer(arg0: ListCellRenderer<E>): void;

getSelectionForeground(): Color;

setSelectionForeground(arg0: Color): void;

getSelectionBackground(): Color;

setSelectionBackground(arg0: Color): void;

getVisibleRowCount(): number;

setVisibleRowCount(arg0: number): void;

getLayoutOrientation(): number;

setLayoutOrientation(arg0: number): void;

getFirstVisibleIndex(): number;

getLastVisibleIndex(): number;

ensureIndexIsVisible(arg0: number): void;

setDragEnabled(arg0: boolean): void;

getDragEnabled(): boolean;

setDropMode(arg0: DropMode): void;

getDropMode(): DropMode;

getDropLocation(): JList.DropLocation;

getNextMatch(arg0: String, arg1: number, arg2: Position.Bias): number;

getToolTipText(arg0: MouseEvent): String;

locationToIndex(arg0: Point): number;

indexToLocation(arg0: number): Point;

getCellBounds(arg0: number, arg1: number): Rectangle;

getModel(): ListModel<E>;

setModel(arg0: ListModel<E>): void;

setListData(arg0: E[]): void;

setListData(arg0: Vector<E>): void;

getSelectionModel(): ListSelectionModel;

addListSelectionListener(arg0: ListSelectionListener): void;

removeListSelectionListener(arg0: ListSelectionListener): void;

getListSelectionListeners(): ListSelectionListener[];

setSelectionModel(arg0: ListSelectionModel): void;

setSelectionMode(arg0: number): void;

getSelectionMode(): number;

getAnchorSelectionIndex(): number;

getLeadSelectionIndex(): number;

getMinSelectionIndex(): number;

getMaxSelectionIndex(): number;

isSelectedIndex(arg0: number): boolean;

isSelectionEmpty(): boolean;

clearSelection(): void;

setSelectionInterval(arg0: number, arg1: number): void;

addSelectionInterval(arg0: number, arg1: number): void;

removeSelectionInterval(arg0: number, arg1: number): void;

setValueIsAdjusting(arg0: boolean): void;

getValueIsAdjusting(): boolean;

getSelectedIndices(): number[];

setSelectedIndex(arg0: number): void;

setSelectedIndices(arg0: number[]): void;

getSelectedValues(): Object[];

getSelectedValuesList(): List<E>;

getSelectedIndex(): number;

getSelectedValue(): E;

setSelectedValue(arg0: Object, arg1: boolean): void;

getPreferredScrollableViewportSize(): Dimension;

getScrollableUnitIncrement(arg0: Rectangle, arg1: number, arg2: number): number;

getScrollableBlockIncrement(arg0: Rectangle, arg1: number, arg2: number): number;

getScrollableTracksViewportWidth(): boolean;

getScrollableTracksViewportHeight(): boolean;

getAccessibleContext(): AccessibleContext;
 }
export namespace JList { 
export class AccessibleJList extends JComponent.AccessibleJComponent implements AccessibleSelection, PropertyChangeListener, ListSelectionListener, ListDataListener {
constructor(arg0: JList);

propertyChange(arg0: PropertyChangeEvent): void;

valueChanged(arg0: ListSelectionEvent): void;

intervalAdded(arg0: ListDataEvent): void;

intervalRemoved(arg0: ListDataEvent): void;

contentsChanged(arg0: ListDataEvent): void;

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleRole(): AccessibleRole;

getAccessibleAt(arg0: Point): Accessible;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

getAccessibleSelection(): AccessibleSelection;

getAccessibleSelectionCount(): number;

getAccessibleSelection(arg0: number): Accessible;

isAccessibleChildSelected(arg0: number): boolean;

addAccessibleSelection(arg0: number): void;

removeAccessibleSelection(arg0: number): void;

clearAccessibleSelection(): void;

selectAllAccessibleSelection(): void;
 }
export namespace AccessibleJList { 
export class AccessibleJListChild extends AccessibleContext implements Accessible, AccessibleComponent, AccessibleAction {
constructor(arg0: JList.AccessibleJList, arg1: JList<E>, arg2: number);

getAccessibleContext(): AccessibleContext;

getAccessibleName(): String;

setAccessibleName(arg0: String): void;

getAccessibleDescription(): String;

setAccessibleDescription(arg0: String): void;

getAccessibleRole(): AccessibleRole;

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleIndexInParent(): number;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

getLocale(): Locale;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

getAccessibleComponent(): AccessibleComponent;

getAccessibleSelection(): AccessibleSelection;

getAccessibleText(): AccessibleText;

getAccessibleValue(): AccessibleValue;

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

getAccessibleIcon(): AccessibleIcon[];

getAccessibleAction(): AccessibleAction;

doAccessibleAction(arg0: number): boolean;

getAccessibleActionDescription(arg0: number): String;

getAccessibleActionCount(): number;
 }

}

export class AccessibleJListChild extends AccessibleContext implements Accessible, AccessibleComponent, AccessibleAction {
constructor(arg0: JList.AccessibleJList, arg1: JList<E>, arg2: number);

getAccessibleContext(): AccessibleContext;

getAccessibleName(): String;

setAccessibleName(arg0: String): void;

getAccessibleDescription(): String;

setAccessibleDescription(arg0: String): void;

getAccessibleRole(): AccessibleRole;

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleIndexInParent(): number;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

getLocale(): Locale;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

getAccessibleComponent(): AccessibleComponent;

getAccessibleSelection(): AccessibleSelection;

getAccessibleText(): AccessibleText;

getAccessibleValue(): AccessibleValue;

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

getAccessibleIcon(): AccessibleIcon[];

getAccessibleAction(): AccessibleAction;

doAccessibleAction(arg0: number): boolean;

getAccessibleActionDescription(arg0: number): String;

getAccessibleActionCount(): number;
 }

export class DropLocation extends TransferHandler.DropLocation {

getIndex(): number;

isInsert(): boolean;
toString(): string;
 }

}

export class JMenu extends JMenuItem implements Accessible, MenuElement {
constructor();
constructor(arg0: String);
constructor(arg0: Action);
constructor(arg0: String, arg1: boolean);

updateUI(): void;

getUIClassID(): String;

setModel(arg0: ButtonModel): void;

isSelected(): boolean;

setSelected(arg0: boolean): void;

isPopupMenuVisible(): boolean;

setPopupMenuVisible(arg0: boolean): void;

getDelay(): number;

setDelay(arg0: number): void;

setMenuLocation(arg0: number, arg1: number): void;

add(arg0: JMenuItem): JMenuItem;

add(arg0: Component): Component;

add(arg0: Component, arg1: number): Component;

add(arg0: String): JMenuItem;

add(arg0: Action): JMenuItem;

addSeparator(): void;

insert(arg0: String, arg1: number): void;

insert(arg0: JMenuItem, arg1: number): JMenuItem;

insert(arg0: Action, arg1: number): JMenuItem;

insertSeparator(arg0: number): void;

getItem(arg0: number): JMenuItem;

getItemCount(): number;

isTearOff(): boolean;

remove(arg0: JMenuItem): void;

remove(arg0: number): void;

remove(arg0: Component): void;

removeAll(): void;

getMenuComponentCount(): number;

getMenuComponent(arg0: number): Component;

getMenuComponents(): Component[];

isTopLevelMenu(): boolean;

isMenuComponent(arg0: Component): boolean;

getPopupMenu(): JPopupMenu;

addMenuListener(arg0: MenuListener): void;

removeMenuListener(arg0: MenuListener): void;

getMenuListeners(): MenuListener[];

menuSelectionChanged(arg0: boolean): void;

getSubElements(): MenuElement[];

getComponent(): Component;

applyComponentOrientation(arg0: ComponentOrientation): void;

setComponentOrientation(arg0: ComponentOrientation): void;

setAccelerator(arg0: KeyStroke): void;

doClick(arg0: number): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace JMenu { 
export class AccessibleJMenu extends JMenuItem.AccessibleJMenuItem implements AccessibleSelection {

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

getAccessibleRole(): AccessibleRole;

getAccessibleSelection(): AccessibleSelection;

getAccessibleSelectionCount(): number;

getAccessibleSelection(arg0: number): Accessible;

isAccessibleChildSelected(arg0: number): boolean;

addAccessibleSelection(arg0: number): void;

removeAccessibleSelection(arg0: number): void;

clearAccessibleSelection(): void;

selectAllAccessibleSelection(): void;
 }

export class WinListener extends WindowAdapter implements Serializable {
constructor(arg0: JMenu, arg1: JPopupMenu);

windowClosing(arg0: WindowEvent): void;
 }

}

export class JMenuBar extends JComponent implements Accessible, MenuElement {
constructor();

getUI(): MenuBarUI;

setUI(arg0: MenuBarUI): void;

updateUI(): void;

getUIClassID(): String;

getSelectionModel(): SingleSelectionModel;

setSelectionModel(arg0: SingleSelectionModel): void;

add(arg0: JMenu): JMenu;

getMenu(arg0: number): JMenu;

getMenuCount(): number;

setHelpMenu(arg0: JMenu): void;

getHelpMenu(): JMenu;

getComponentAtIndex(arg0: number): Component;

getComponentIndex(arg0: Component): number;

setSelected(arg0: Component): void;

isSelected(): boolean;

isBorderPainted(): boolean;

setBorderPainted(arg0: boolean): void;

setMargin(arg0: Insets): void;

getMargin(): Insets;

processMouseEvent(arg0: MouseEvent, arg1: MenuElement[], arg2: MenuSelectionManager): void;

processKeyEvent(arg0: KeyEvent, arg1: MenuElement[], arg2: MenuSelectionManager): void;

menuSelectionChanged(arg0: boolean): void;

getSubElements(): MenuElement[];

getComponent(): Component;

getAccessibleContext(): AccessibleContext;

addNotify(): void;

removeNotify(): void;
 }
export namespace JMenuBar { 
export class AccessibleJMenuBar extends JComponent.AccessibleJComponent implements AccessibleSelection {

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleRole(): AccessibleRole;

getAccessibleSelection(): AccessibleSelection;

getAccessibleSelectionCount(): number;

getAccessibleSelection(arg0: number): Accessible;

isAccessibleChildSelected(arg0: number): boolean;

addAccessibleSelection(arg0: number): void;

removeAccessibleSelection(arg0: number): void;

clearAccessibleSelection(): void;

selectAllAccessibleSelection(): void;
 }

}

export class JMenuItem extends AbstractButton implements Accessible, MenuElement {
constructor();
constructor(arg0: Icon);
constructor(arg0: String);
constructor(arg0: Action);
constructor(arg0: String, arg1: Icon);
constructor(arg0: String, arg1: number);

setModel(arg0: ButtonModel): void;

setUI(arg0: MenuItemUI): void;

updateUI(): void;

getUIClassID(): String;

setArmed(arg0: boolean): void;

isArmed(): boolean;

setEnabled(arg0: boolean): void;

setAccelerator(arg0: KeyStroke): void;

getAccelerator(): KeyStroke;

processMouseEvent(arg0: MouseEvent, arg1: MenuElement[], arg2: MenuSelectionManager): void;

processKeyEvent(arg0: KeyEvent, arg1: MenuElement[], arg2: MenuSelectionManager): void;

processMenuDragMouseEvent(arg0: MenuDragMouseEvent): void;

processMenuKeyEvent(arg0: MenuKeyEvent): void;

menuSelectionChanged(arg0: boolean): void;

getSubElements(): MenuElement[];

getComponent(): Component;

addMenuDragMouseListener(arg0: MenuDragMouseListener): void;

removeMenuDragMouseListener(arg0: MenuDragMouseListener): void;

getMenuDragMouseListeners(): MenuDragMouseListener[];

addMenuKeyListener(arg0: MenuKeyListener): void;

removeMenuKeyListener(arg0: MenuKeyListener): void;

getMenuKeyListeners(): MenuKeyListener[];

getAccessibleContext(): AccessibleContext;
 }
export namespace JMenuItem { 
export class AccessibleJMenuItem extends AbstractButton.AccessibleAbstractButton implements ChangeListener {

getAccessibleRole(): AccessibleRole;

stateChanged(arg0: ChangeEvent): void;
 }

}

export class JOptionPane extends JComponent implements Accessible {
static UNINITIALIZED_VALUE:Object
static DEFAULT_OPTION:number
static YES_NO_OPTION:number
static YES_NO_CANCEL_OPTION:number
static OK_CANCEL_OPTION:number
static YES_OPTION:number
static NO_OPTION:number
static CANCEL_OPTION:number
static OK_OPTION:number
static CLOSED_OPTION:number
static ERROR_MESSAGE:number
static INFORMATION_MESSAGE:number
static WARNING_MESSAGE:number
static QUESTION_MESSAGE:number
static PLAIN_MESSAGE:number
static ICON_PROPERTY:String
static MESSAGE_PROPERTY:String
static VALUE_PROPERTY:String
static OPTIONS_PROPERTY:String
static INITIAL_VALUE_PROPERTY:String
static MESSAGE_TYPE_PROPERTY:String
static OPTION_TYPE_PROPERTY:String
static SELECTION_VALUES_PROPERTY:String
static INITIAL_SELECTION_VALUE_PROPERTY:String
static INPUT_VALUE_PROPERTY:String
static WANTS_INPUT_PROPERTY:String
constructor();
constructor(arg0: Object);
constructor(arg0: Object, arg1: number);
constructor(arg0: Object, arg1: number, arg2: number);
constructor(arg0: Object, arg1: number, arg2: number, arg3: Icon);
constructor(arg0: Object, arg1: number, arg2: number, arg3: Icon, arg4: Object[]);
constructor(arg0: Object, arg1: number, arg2: number, arg3: Icon, arg4: Object[], arg5: Object);

static showInputDialog(arg0: Object): String;

static showInputDialog(arg0: Object, arg1: Object): String;

static showInputDialog(arg0: Component, arg1: Object): String;

static showInputDialog(arg0: Component, arg1: Object, arg2: Object): String;

static showInputDialog(arg0: Component, arg1: Object, arg2: String, arg3: number): String;

static showInputDialog(arg0: Component, arg1: Object, arg2: String, arg3: number, arg4: Icon, arg5: Object[], arg6: Object): Object;

static showMessageDialog(arg0: Component, arg1: Object): void;

static showMessageDialog(arg0: Component, arg1: Object, arg2: String, arg3: number): void;

static showMessageDialog(arg0: Component, arg1: Object, arg2: String, arg3: number, arg4: Icon): void;

static showConfirmDialog(arg0: Component, arg1: Object): number;

static showConfirmDialog(arg0: Component, arg1: Object, arg2: String, arg3: number): number;

static showConfirmDialog(arg0: Component, arg1: Object, arg2: String, arg3: number, arg4: number): number;

static showConfirmDialog(arg0: Component, arg1: Object, arg2: String, arg3: number, arg4: number, arg5: Icon): number;

static showOptionDialog(arg0: Component, arg1: Object, arg2: String, arg3: number, arg4: number, arg5: Icon, arg6: Object[], arg7: Object): number;

createDialog(arg0: Component, arg1: String): JDialog;

createDialog(arg0: String): JDialog;

static showInternalMessageDialog(arg0: Component, arg1: Object): void;

static showInternalMessageDialog(arg0: Component, arg1: Object, arg2: String, arg3: number): void;

static showInternalMessageDialog(arg0: Component, arg1: Object, arg2: String, arg3: number, arg4: Icon): void;

static showInternalConfirmDialog(arg0: Component, arg1: Object): number;

static showInternalConfirmDialog(arg0: Component, arg1: Object, arg2: String, arg3: number): number;

static showInternalConfirmDialog(arg0: Component, arg1: Object, arg2: String, arg3: number, arg4: number): number;

static showInternalConfirmDialog(arg0: Component, arg1: Object, arg2: String, arg3: number, arg4: number, arg5: Icon): number;

static showInternalOptionDialog(arg0: Component, arg1: Object, arg2: String, arg3: number, arg4: number, arg5: Icon, arg6: Object[], arg7: Object): number;

static showInternalInputDialog(arg0: Component, arg1: Object): String;

static showInternalInputDialog(arg0: Component, arg1: Object, arg2: String, arg3: number): String;

static showInternalInputDialog(arg0: Component, arg1: Object, arg2: String, arg3: number, arg4: Icon, arg5: Object[], arg6: Object): Object;

createInternalFrame(arg0: Component, arg1: String): JInternalFrame;

static getFrameForComponent(arg0: Component): Frame;

static getDesktopPaneForComponent(arg0: Component): JDesktopPane;

static setRootFrame(arg0: Frame): void;

static getRootFrame(): Frame;

setUI(arg0: OptionPaneUI): void;

getUI(): OptionPaneUI;

updateUI(): void;

getUIClassID(): String;

setMessage(arg0: Object): void;

getMessage(): Object;

setIcon(arg0: Icon): void;

getIcon(): Icon;

setValue(arg0: Object): void;

getValue(): Object;

setOptions(arg0: Object[]): void;

getOptions(): Object[];

setInitialValue(arg0: Object): void;

getInitialValue(): Object;

setMessageType(arg0: number): void;

getMessageType(): number;

setOptionType(arg0: number): void;

getOptionType(): number;

setSelectionValues(arg0: Object[]): void;

getSelectionValues(): Object[];

setInitialSelectionValue(arg0: Object): void;

getInitialSelectionValue(): Object;

setInputValue(arg0: Object): void;

getInputValue(): Object;

getMaxCharactersPerLineCount(): number;

setWantsInput(arg0: boolean): void;

getWantsInput(): boolean;

selectInitialValue(): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace JOptionPane { 
export class AccessibleJOptionPane extends JComponent.AccessibleJComponent {

getAccessibleRole(): AccessibleRole;
 }

}

export class JPanel extends JComponent implements Accessible {
constructor(arg0: LayoutManager, arg1: boolean);
constructor(arg0: LayoutManager);
constructor(arg0: boolean);
constructor();

updateUI(): void;

getUI(): PanelUI;

setUI(arg0: PanelUI): void;

getUIClassID(): String;

getAccessibleContext(): AccessibleContext;
 }
export namespace JPanel { 
export class AccessibleJPanel extends JComponent.AccessibleJComponent {

getAccessibleRole(): AccessibleRole;
 }

}

export class JPasswordField extends JTextField {
constructor();
constructor(arg0: String);
constructor(arg0: number);
constructor(arg0: String, arg1: number);
constructor(arg0: Document, arg1: String, arg2: number);

getUIClassID(): String;

updateUI(): void;

getEchoChar(): String;

setEchoChar(arg0: String): void;

echoCharIsSet(): boolean;

cut(): void;

copy(): void;

getText(): String;

getText(arg0: number, arg1: number): String;

setText(arg0: String): void;

getPassword(): String[];

getAccessibleContext(): AccessibleContext;
 }
export namespace JPasswordField { 
export class AccessibleJPasswordField extends JTextField.AccessibleJTextField {

getAccessibleRole(): AccessibleRole;

getAccessibleText(): AccessibleText;

getAtIndex(arg0: number, arg1: number): String;

getAfterIndex(arg0: number, arg1: number): String;

getBeforeIndex(arg0: number, arg1: number): String;

getTextRange(arg0: number, arg1: number): String;

getTextSequenceAt(arg0: number, arg1: number): AccessibleTextSequence;

getTextSequenceAfter(arg0: number, arg1: number): AccessibleTextSequence;

getTextSequenceBefore(arg0: number, arg1: number): AccessibleTextSequence;
 }

}

export class JPopupMenu extends JComponent implements Accessible, MenuElement {
constructor();
constructor(arg0: String);

static setDefaultLightWeightPopupEnabled(arg0: boolean): void;

static getDefaultLightWeightPopupEnabled(): boolean;

getUI(): PopupMenuUI;

setUI(arg0: PopupMenuUI): void;

updateUI(): void;

getUIClassID(): String;

getSelectionModel(): SingleSelectionModel;

setSelectionModel(arg0: SingleSelectionModel): void;

add(arg0: JMenuItem): JMenuItem;

add(arg0: String): JMenuItem;

add(arg0: Action): JMenuItem;

remove(arg0: number): void;

setLightWeightPopupEnabled(arg0: boolean): void;

isLightWeightPopupEnabled(): boolean;

getLabel(): String;

setLabel(arg0: String): void;

addSeparator(): void;

insert(arg0: Action, arg1: number): void;

insert(arg0: Component, arg1: number): void;

addPopupMenuListener(arg0: PopupMenuListener): void;

removePopupMenuListener(arg0: PopupMenuListener): void;

getPopupMenuListeners(): PopupMenuListener[];

addMenuKeyListener(arg0: MenuKeyListener): void;

removeMenuKeyListener(arg0: MenuKeyListener): void;

getMenuKeyListeners(): MenuKeyListener[];

pack(): void;

setVisible(arg0: boolean): void;

isVisible(): boolean;

setLocation(arg0: number, arg1: number): void;

getInvoker(): Component;

setInvoker(arg0: Component): void;

show(arg0: Component, arg1: number, arg2: number): void;

getComponentAtIndex(arg0: number): Component;

getComponentIndex(arg0: Component): number;

setPopupSize(arg0: Dimension): void;

setPopupSize(arg0: number, arg1: number): void;

setSelected(arg0: Component): void;

isBorderPainted(): boolean;

setBorderPainted(arg0: boolean): void;

getMargin(): Insets;

getAccessibleContext(): AccessibleContext;

processMouseEvent(arg0: MouseEvent, arg1: MenuElement[], arg2: MenuSelectionManager): void;

processKeyEvent(arg0: KeyEvent, arg1: MenuElement[], arg2: MenuSelectionManager): void;

menuSelectionChanged(arg0: boolean): void;

getSubElements(): MenuElement[];

getComponent(): Component;

isPopupTrigger(arg0: MouseEvent): boolean;
 }
export namespace JPopupMenu { 
export class AccessibleJPopupMenu extends JComponent.AccessibleJComponent implements PropertyChangeListener {

getAccessibleRole(): AccessibleRole;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class Separator extends JSeparator {
constructor();

getUIClassID(): String;
 }

}

export class JProgressBar extends JComponent implements SwingConstants, Accessible {
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: number);
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: BoundedRangeModel);

getOrientation(): number;

setOrientation(arg0: number): void;

isStringPainted(): boolean;

setStringPainted(arg0: boolean): void;

getString(): String;

setString(arg0: String): void;

getPercentComplete(): number;

isBorderPainted(): boolean;

setBorderPainted(arg0: boolean): void;

getUI(): ProgressBarUI;

setUI(arg0: ProgressBarUI): void;

updateUI(): void;

getUIClassID(): String;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;

getChangeListeners(): ChangeListener[];

getModel(): BoundedRangeModel;

setModel(arg0: BoundedRangeModel): void;

getValue(): number;

getMinimum(): number;

getMaximum(): number;

setValue(arg0: number): void;

setMinimum(arg0: number): void;

setMaximum(arg0: number): void;

setIndeterminate(arg0: boolean): void;

isIndeterminate(): boolean;

getAccessibleContext(): AccessibleContext;
 }
export namespace JProgressBar { 
export class AccessibleJProgressBar extends JComponent.AccessibleJComponent implements AccessibleValue {

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleRole(): AccessibleRole;

getAccessibleValue(): AccessibleValue;

getCurrentAccessibleValue(): Number;

setCurrentAccessibleValue(arg0: Number): boolean;

getMinimumAccessibleValue(): Number;

getMaximumAccessibleValue(): Number;
 }

}

export class JRadioButton extends JToggleButton implements Accessible {
constructor();
constructor(arg0: Icon);
constructor(arg0: Action);
constructor(arg0: Icon, arg1: boolean);
constructor(arg0: String);
constructor(arg0: String, arg1: boolean);
constructor(arg0: String, arg1: Icon);
constructor(arg0: String, arg1: Icon, arg2: boolean);

updateUI(): void;

getUIClassID(): String;

getAccessibleContext(): AccessibleContext;
 }
export namespace JRadioButton { 
export class AccessibleJRadioButton extends JToggleButton.AccessibleJToggleButton {

getAccessibleRole(): AccessibleRole;
 }

}

export class JRadioButtonMenuItem extends JMenuItem implements Accessible {
constructor();
constructor(arg0: Icon);
constructor(arg0: String);
constructor(arg0: Action);
constructor(arg0: String, arg1: Icon);
constructor(arg0: String, arg1: boolean);
constructor(arg0: Icon, arg1: boolean);
constructor(arg0: String, arg1: Icon, arg2: boolean);

getUIClassID(): String;

getAccessibleContext(): AccessibleContext;
 }
export namespace JRadioButtonMenuItem { 
export class AccessibleJRadioButtonMenuItem extends JMenuItem.AccessibleJMenuItem {

getAccessibleRole(): AccessibleRole;
 }

}

export class JRootPane extends JComponent implements Accessible {
static NONE:number
static FRAME:number
static PLAIN_DIALOG:number
static INFORMATION_DIALOG:number
static ERROR_DIALOG:number
static COLOR_CHOOSER_DIALOG:number
static FILE_CHOOSER_DIALOG:number
static QUESTION_DIALOG:number
static WARNING_DIALOG:number
constructor();

setDoubleBuffered(arg0: boolean): void;

getWindowDecorationStyle(): number;

setWindowDecorationStyle(arg0: number): void;

getUI(): RootPaneUI;

setUI(arg0: RootPaneUI): void;

updateUI(): void;

getUIClassID(): String;

setJMenuBar(arg0: JMenuBar): void;

setMenuBar(arg0: JMenuBar): void;

getJMenuBar(): JMenuBar;

getMenuBar(): JMenuBar;

setContentPane(arg0: Container): void;

getContentPane(): Container;

setLayeredPane(arg0: JLayeredPane): void;

getLayeredPane(): JLayeredPane;

setGlassPane(arg0: Component): void;

getGlassPane(): Component;

isValidateRoot(): boolean;

isOptimizedDrawingEnabled(): boolean;

addNotify(): void;

removeNotify(): void;

setDefaultButton(arg0: JButton): void;

getDefaultButton(): JButton;

getAccessibleContext(): AccessibleContext;
 }
export namespace JRootPane { 
export class AccessibleJRootPane extends JComponent.AccessibleJComponent {

getAccessibleRole(): AccessibleRole;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;
 }

export class RootLayout implements LayoutManager2, Serializable {

preferredLayoutSize(arg0: Container): Dimension;

minimumLayoutSize(arg0: Container): Dimension;

maximumLayoutSize(arg0: Container): Dimension;

layoutContainer(arg0: Container): void;

addLayoutComponent(arg0: String, arg1: Component): void;

removeLayoutComponent(arg0: Component): void;

addLayoutComponent(arg0: Component, arg1: Object): void;

getLayoutAlignmentX(arg0: Container): number;

getLayoutAlignmentY(arg0: Container): number;

invalidateLayout(arg0: Container): void;
 }

}

export class JScrollBar extends JComponent implements Adjustable, Accessible {
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
constructor(arg0: number);
constructor();

setUI(arg0: ScrollBarUI): void;

getUI(): ScrollBarUI;

updateUI(): void;

getUIClassID(): String;

getOrientation(): number;

setOrientation(arg0: number): void;

getModel(): BoundedRangeModel;

setModel(arg0: BoundedRangeModel): void;

getUnitIncrement(arg0: number): number;

setUnitIncrement(arg0: number): void;

getBlockIncrement(arg0: number): number;

setBlockIncrement(arg0: number): void;

getUnitIncrement(): number;

getBlockIncrement(): number;

getValue(): number;

setValue(arg0: number): void;

getVisibleAmount(): number;

setVisibleAmount(arg0: number): void;

getMinimum(): number;

setMinimum(arg0: number): void;

getMaximum(): number;

setMaximum(arg0: number): void;

getValueIsAdjusting(): boolean;

setValueIsAdjusting(arg0: boolean): void;

setValues(arg0: number, arg1: number, arg2: number, arg3: number): void;

addAdjustmentListener(arg0: AdjustmentListener): void;

removeAdjustmentListener(arg0: AdjustmentListener): void;

getAdjustmentListeners(): AdjustmentListener[];

getMinimumSize(): Dimension;

getMaximumSize(): Dimension;

setEnabled(arg0: boolean): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace JScrollBar { 
export class AccessibleJScrollBar extends JComponent.AccessibleJComponent implements AccessibleValue {

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleRole(): AccessibleRole;

getAccessibleValue(): AccessibleValue;

getCurrentAccessibleValue(): Number;

setCurrentAccessibleValue(arg0: Number): boolean;

getMinimumAccessibleValue(): Number;

getMaximumAccessibleValue(): Number;
 }

}

export class JScrollPane extends JComponent implements ScrollPaneConstants, Accessible {
constructor(arg0: Component, arg1: number, arg2: number);
constructor(arg0: Component);
constructor(arg0: number, arg1: number);
constructor();

getUI(): ScrollPaneUI;

setUI(arg0: ScrollPaneUI): void;

updateUI(): void;

getUIClassID(): String;

setLayout(arg0: LayoutManager): void;

isValidateRoot(): boolean;

getVerticalScrollBarPolicy(): number;

setVerticalScrollBarPolicy(arg0: number): void;

getHorizontalScrollBarPolicy(): number;

setHorizontalScrollBarPolicy(arg0: number): void;

getViewportBorder(): Border;

setViewportBorder(arg0: Border): void;

getViewportBorderBounds(): Rectangle;

createHorizontalScrollBar(): JScrollBar;

getHorizontalScrollBar(): JScrollBar;

setHorizontalScrollBar(arg0: JScrollBar): void;

createVerticalScrollBar(): JScrollBar;

getVerticalScrollBar(): JScrollBar;

setVerticalScrollBar(arg0: JScrollBar): void;

getViewport(): JViewport;

setViewport(arg0: JViewport): void;

setViewportView(arg0: Component): void;

getRowHeader(): JViewport;

setRowHeader(arg0: JViewport): void;

setRowHeaderView(arg0: Component): void;

getColumnHeader(): JViewport;

setColumnHeader(arg0: JViewport): void;

setColumnHeaderView(arg0: Component): void;

getCorner(arg0: String): Component;

setCorner(arg0: String, arg1: Component): void;

setComponentOrientation(arg0: ComponentOrientation): void;

isWheelScrollingEnabled(): boolean;

setWheelScrollingEnabled(arg0: boolean): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace JScrollPane { 
export class AccessibleJScrollPane extends JComponent.AccessibleJComponent implements ChangeListener, PropertyChangeListener {
constructor(arg0: JScrollPane);

resetViewPort(): void;

getAccessibleRole(): AccessibleRole;

stateChanged(arg0: ChangeEvent): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class ScrollBar extends JScrollBar implements UIResource {
constructor(arg0: JScrollPane, arg1: number);

setUnitIncrement(arg0: number): void;

getUnitIncrement(arg0: number): number;

setBlockIncrement(arg0: number): void;

getBlockIncrement(arg0: number): number;
 }

}

export class JSeparator extends JComponent implements SwingConstants, Accessible {
constructor();
constructor(arg0: number);

getUI(): SeparatorUI;

setUI(arg0: SeparatorUI): void;

updateUI(): void;

getUIClassID(): String;

getOrientation(): number;

setOrientation(arg0: number): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace JSeparator { 
export class AccessibleJSeparator extends JComponent.AccessibleJComponent {

getAccessibleRole(): AccessibleRole;
 }

}

export class JSlider extends JComponent implements SwingConstants, Accessible {
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: number);
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
constructor(arg0: BoundedRangeModel);

getUI(): SliderUI;

setUI(arg0: SliderUI): void;

updateUI(): void;

getUIClassID(): String;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;

getChangeListeners(): ChangeListener[];

getModel(): BoundedRangeModel;

setModel(arg0: BoundedRangeModel): void;

getValue(): number;

setValue(arg0: number): void;

getMinimum(): number;

setMinimum(arg0: number): void;

getMaximum(): number;

setMaximum(arg0: number): void;

getValueIsAdjusting(): boolean;

setValueIsAdjusting(arg0: boolean): void;

getExtent(): number;

setExtent(arg0: number): void;

getOrientation(): number;

setOrientation(arg0: number): void;

setFont(arg0: Font): void;

imageUpdate(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;

getLabelTable(): Dictionary;

setLabelTable(arg0: Dictionary): void;

createStandardLabels(arg0: number): Hashtable<Number, JComponent>;

createStandardLabels(arg0: number, arg1: number): Hashtable<Number, JComponent>;

getInverted(): boolean;

setInverted(arg0: boolean): void;

getMajorTickSpacing(): number;

setMajorTickSpacing(arg0: number): void;

getMinorTickSpacing(): number;

setMinorTickSpacing(arg0: number): void;

getSnapToTicks(): boolean;

setSnapToTicks(arg0: boolean): void;

getPaintTicks(): boolean;

setPaintTicks(arg0: boolean): void;

getPaintTrack(): boolean;

setPaintTrack(arg0: boolean): void;

getPaintLabels(): boolean;

setPaintLabels(arg0: boolean): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace JSlider { 
export class AccessibleJSlider extends JComponent.AccessibleJComponent implements AccessibleValue, ChangeListener, AccessibleAction {

getAccessibleStateSet(): AccessibleStateSet;

stateChanged(arg0: ChangeEvent): void;

getAccessibleRole(): AccessibleRole;

getAccessibleValue(): AccessibleValue;

getCurrentAccessibleValue(): Number;

setCurrentAccessibleValue(arg0: Number): boolean;

getMinimumAccessibleValue(): Number;

getMaximumAccessibleValue(): Number;

getAccessibleAction(): AccessibleAction;

getAccessibleActionCount(): number;

getAccessibleActionDescription(arg0: number): String;

doAccessibleAction(arg0: number): boolean;
 }

}

export class JSpinner extends JComponent implements Accessible {
constructor(arg0: SpinnerModel);
constructor();

getUI(): SpinnerUI;

setUI(arg0: SpinnerUI): void;

getUIClassID(): String;

updateUI(): void;

setModel(arg0: SpinnerModel): void;

getModel(): SpinnerModel;

getValue(): Object;

setValue(arg0: Object): void;

getNextValue(): Object;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;

getChangeListeners(): ChangeListener[];

getPreviousValue(): Object;

setEditor(arg0: JComponent): void;

getEditor(): JComponent;

commitEdit(): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace JSpinner { 
export class AccessibleJSpinner extends JComponent.AccessibleJComponent implements AccessibleValue, AccessibleAction, AccessibleText, AccessibleEditableText, ChangeListener {

stateChanged(arg0: ChangeEvent): void;

getAccessibleRole(): AccessibleRole;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

getAccessibleAction(): AccessibleAction;

getAccessibleText(): AccessibleText;

getAccessibleValue(): AccessibleValue;

getCurrentAccessibleValue(): Number;

setCurrentAccessibleValue(arg0: Number): boolean;

getMinimumAccessibleValue(): Number;

getMaximumAccessibleValue(): Number;

getAccessibleActionCount(): number;

getAccessibleActionDescription(arg0: number): String;

doAccessibleAction(arg0: number): boolean;

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

export class DateEditor extends JSpinner.DefaultEditor {
constructor(arg0: JSpinner);
constructor(arg0: JSpinner, arg1: String);

getFormat(): SimpleDateFormat;

getModel(): SpinnerDateModel;
 }

export class DefaultEditor extends JPanel implements ChangeListener, PropertyChangeListener, LayoutManager {
constructor(arg0: JSpinner);

dismiss(arg0: JSpinner): void;

getSpinner(): JSpinner;

getTextField(): JFormattedTextField;

stateChanged(arg0: ChangeEvent): void;

propertyChange(arg0: PropertyChangeEvent): void;

addLayoutComponent(arg0: String, arg1: Component): void;

removeLayoutComponent(arg0: Component): void;

preferredLayoutSize(arg0: Container): Dimension;

minimumLayoutSize(arg0: Container): Dimension;

layoutContainer(arg0: Container): void;

commitEdit(): void;

getBaseline(arg0: number, arg1: number): number;

getBaselineResizeBehavior(): Component.BaselineResizeBehavior;
 }

export class ListEditor extends JSpinner.DefaultEditor {
constructor(arg0: JSpinner);

getModel(): SpinnerListModel;
 }

export class NumberEditor extends JSpinner.DefaultEditor {
constructor(arg0: JSpinner);
constructor(arg0: JSpinner, arg1: String);

getFormat(): DecimalFormat;

getModel(): SpinnerNumberModel;

setComponentOrientation(arg0: ComponentOrientation): void;
 }

}

export class JSplitPane extends JComponent implements Accessible {
static VERTICAL_SPLIT:number
static HORIZONTAL_SPLIT:number
static LEFT:String
static RIGHT:String
static TOP:String
static BOTTOM:String
static DIVIDER:String
static ORIENTATION_PROPERTY:String
static CONTINUOUS_LAYOUT_PROPERTY:String
static DIVIDER_SIZE_PROPERTY:String
static ONE_TOUCH_EXPANDABLE_PROPERTY:String
static LAST_DIVIDER_LOCATION_PROPERTY:String
static DIVIDER_LOCATION_PROPERTY:String
static RESIZE_WEIGHT_PROPERTY:String
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: boolean);
constructor(arg0: number, arg1: Component, arg2: Component);
constructor(arg0: number, arg1: boolean, arg2: Component, arg3: Component);

setUI(arg0: SplitPaneUI): void;

getUI(): SplitPaneUI;

updateUI(): void;

getUIClassID(): String;

setDividerSize(arg0: number): void;

getDividerSize(): number;

setLeftComponent(arg0: Component): void;

getLeftComponent(): Component;

setTopComponent(arg0: Component): void;

getTopComponent(): Component;

setRightComponent(arg0: Component): void;

getRightComponent(): Component;

setBottomComponent(arg0: Component): void;

getBottomComponent(): Component;

setOneTouchExpandable(arg0: boolean): void;

isOneTouchExpandable(): boolean;

setLastDividerLocation(arg0: number): void;

getLastDividerLocation(): number;

setOrientation(arg0: number): void;

getOrientation(): number;

setContinuousLayout(arg0: boolean): void;

isContinuousLayout(): boolean;

setResizeWeight(arg0: number): void;

getResizeWeight(): number;

resetToPreferredSizes(): void;

setDividerLocation(arg0: number): void;

setDividerLocation(arg0: number): void;

getDividerLocation(): number;

getMinimumDividerLocation(): number;

getMaximumDividerLocation(): number;

remove(arg0: Component): void;

remove(arg0: number): void;

removeAll(): void;

isValidateRoot(): boolean;

getAccessibleContext(): AccessibleContext;
 }
export namespace JSplitPane { 
export class AccessibleJSplitPane extends JComponent.AccessibleJComponent implements AccessibleValue {

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleValue(): AccessibleValue;

getCurrentAccessibleValue(): Number;

setCurrentAccessibleValue(arg0: Number): boolean;

getMinimumAccessibleValue(): Number;

getMaximumAccessibleValue(): Number;

getAccessibleRole(): AccessibleRole;
 }

}

export class JTabbedPane extends JComponent implements Serializable, Accessible, SwingConstants {
static WRAP_TAB_LAYOUT:number
static SCROLL_TAB_LAYOUT:number
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: number);

getUI(): TabbedPaneUI;

setUI(arg0: TabbedPaneUI): void;

updateUI(): void;

getUIClassID(): String;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;

getChangeListeners(): ChangeListener[];

getModel(): SingleSelectionModel;

setModel(arg0: SingleSelectionModel): void;

getTabPlacement(): number;

setTabPlacement(arg0: number): void;

getTabLayoutPolicy(): number;

setTabLayoutPolicy(arg0: number): void;

getSelectedIndex(): number;

setSelectedIndex(arg0: number): void;

getSelectedComponent(): Component;

setSelectedComponent(arg0: Component): void;

insertTab(arg0: String, arg1: Icon, arg2: Component, arg3: String, arg4: number): void;

addTab(arg0: String, arg1: Icon, arg2: Component, arg3: String): void;

addTab(arg0: String, arg1: Icon, arg2: Component): void;

addTab(arg0: String, arg1: Component): void;

add(arg0: Component): Component;

add(arg0: String, arg1: Component): Component;

add(arg0: Component, arg1: number): Component;

add(arg0: Component, arg1: Object): void;

add(arg0: Component, arg1: Object, arg2: number): void;

removeTabAt(arg0: number): void;

remove(arg0: Component): void;

remove(arg0: number): void;

removeAll(): void;

getTabCount(): number;

getTabRunCount(): number;

getTitleAt(arg0: number): String;

getIconAt(arg0: number): Icon;

getDisabledIconAt(arg0: number): Icon;

getToolTipTextAt(arg0: number): String;

getBackgroundAt(arg0: number): Color;

getForegroundAt(arg0: number): Color;

isEnabledAt(arg0: number): boolean;

getComponentAt(arg0: number): Component;

getMnemonicAt(arg0: number): number;

getDisplayedMnemonicIndexAt(arg0: number): number;

getBoundsAt(arg0: number): Rectangle;

setTitleAt(arg0: number, arg1: String): void;

setIconAt(arg0: number, arg1: Icon): void;

setDisabledIconAt(arg0: number, arg1: Icon): void;

setToolTipTextAt(arg0: number, arg1: String): void;

setBackgroundAt(arg0: number, arg1: Color): void;

setForegroundAt(arg0: number, arg1: Color): void;

setEnabledAt(arg0: number, arg1: boolean): void;

setComponentAt(arg0: number, arg1: Component): void;

setDisplayedMnemonicIndexAt(arg0: number, arg1: number): void;

setMnemonicAt(arg0: number, arg1: number): void;

indexOfTab(arg0: String): number;

indexOfTab(arg0: Icon): number;

indexOfComponent(arg0: Component): number;

indexAtLocation(arg0: number, arg1: number): number;

getToolTipText(arg0: MouseEvent): String;

getAccessibleContext(): AccessibleContext;

setTabComponentAt(arg0: number, arg1: Component): void;

getTabComponentAt(arg0: number): Component;

indexOfTabComponent(arg0: Component): number;
 }
export namespace JTabbedPane { 
export class AccessibleJTabbedPane extends JComponent.AccessibleJComponent implements AccessibleSelection, ChangeListener {
constructor(arg0: JTabbedPane);

getAccessibleName(): String;

stateChanged(arg0: ChangeEvent): void;

getAccessibleRole(): AccessibleRole;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

getAccessibleSelection(): AccessibleSelection;

getAccessibleAt(arg0: Point): Accessible;

getAccessibleSelectionCount(): number;

getAccessibleSelection(arg0: number): Accessible;

isAccessibleChildSelected(arg0: number): boolean;

addAccessibleSelection(arg0: number): void;

removeAccessibleSelection(arg0: number): void;

clearAccessibleSelection(): void;

selectAllAccessibleSelection(): void;
 }

export class ModelListener implements ChangeListener, Serializable {

stateChanged(arg0: ChangeEvent): void;
 }

}

export class JTable extends JComponent implements TableModelListener, Scrollable, TableColumnModelListener, ListSelectionListener, CellEditorListener, Accessible, RowSorterListener {
static AUTO_RESIZE_OFF:number
static AUTO_RESIZE_NEXT_COLUMN:number
static AUTO_RESIZE_SUBSEQUENT_COLUMNS:number
static AUTO_RESIZE_LAST_COLUMN:number
static AUTO_RESIZE_ALL_COLUMNS:number
constructor();
constructor(arg0: TableModel);
constructor(arg0: TableModel, arg1: TableColumnModel);
constructor(arg0: TableModel, arg1: TableColumnModel, arg2: ListSelectionModel);
constructor(arg0: number, arg1: number);
constructor(arg0: Vector<Vector>, arg1: Vector<any>);
constructor(arg0: Array<Array<Object>>, arg1: Object[]);

addNotify(): void;

removeNotify(): void;

static createScrollPaneForTable(arg0: JTable): JScrollPane;

setTableHeader(arg0: JTableHeader): void;

getTableHeader(): JTableHeader;

setRowHeight(arg0: number): void;

getRowHeight(): number;

setRowHeight(arg0: number, arg1: number): void;

getRowHeight(arg0: number): number;

setRowMargin(arg0: number): void;

getRowMargin(): number;

setIntercellSpacing(arg0: Dimension): void;

getIntercellSpacing(): Dimension;

setGridColor(arg0: Color): void;

getGridColor(): Color;

setShowGrid(arg0: boolean): void;

setShowHorizontalLines(arg0: boolean): void;

setShowVerticalLines(arg0: boolean): void;

getShowHorizontalLines(): boolean;

getShowVerticalLines(): boolean;

setAutoResizeMode(arg0: number): void;

getAutoResizeMode(): number;

setAutoCreateColumnsFromModel(arg0: boolean): void;

getAutoCreateColumnsFromModel(): boolean;

createDefaultColumnsFromModel(): void;

setDefaultRenderer(arg0: Class<any>, arg1: TableCellRenderer): void;

getDefaultRenderer(arg0: Class<any>): TableCellRenderer;

setDefaultEditor(arg0: Class<any>, arg1: TableCellEditor): void;

getDefaultEditor(arg0: Class<any>): TableCellEditor;

setDragEnabled(arg0: boolean): void;

getDragEnabled(): boolean;

setDropMode(arg0: DropMode): void;

getDropMode(): DropMode;

getDropLocation(): JTable.DropLocation;

setAutoCreateRowSorter(arg0: boolean): void;

getAutoCreateRowSorter(): boolean;

setUpdateSelectionOnSort(arg0: boolean): void;

getUpdateSelectionOnSort(): boolean;

setRowSorter(arg0: RowSorter<TableModel>): void;

getRowSorter(): RowSorter<TableModel>;

setSelectionMode(arg0: number): void;

setRowSelectionAllowed(arg0: boolean): void;

getRowSelectionAllowed(): boolean;

setColumnSelectionAllowed(arg0: boolean): void;

getColumnSelectionAllowed(): boolean;

setCellSelectionEnabled(arg0: boolean): void;

getCellSelectionEnabled(): boolean;

selectAll(): void;

clearSelection(): void;

setRowSelectionInterval(arg0: number, arg1: number): void;

setColumnSelectionInterval(arg0: number, arg1: number): void;

addRowSelectionInterval(arg0: number, arg1: number): void;

addColumnSelectionInterval(arg0: number, arg1: number): void;

removeRowSelectionInterval(arg0: number, arg1: number): void;

removeColumnSelectionInterval(arg0: number, arg1: number): void;

getSelectedRow(): number;

getSelectedColumn(): number;

getSelectedRows(): number[];

getSelectedColumns(): number[];

getSelectedRowCount(): number;

getSelectedColumnCount(): number;

isRowSelected(arg0: number): boolean;

isColumnSelected(arg0: number): boolean;

isCellSelected(arg0: number, arg1: number): boolean;

changeSelection(arg0: number, arg1: number, arg2: boolean, arg3: boolean): void;

getSelectionForeground(): Color;

setSelectionForeground(arg0: Color): void;

getSelectionBackground(): Color;

setSelectionBackground(arg0: Color): void;

getColumn(arg0: Object): TableColumn;

convertColumnIndexToModel(arg0: number): number;

convertColumnIndexToView(arg0: number): number;

convertRowIndexToView(arg0: number): number;

convertRowIndexToModel(arg0: number): number;

getRowCount(): number;

getColumnCount(): number;

getColumnName(arg0: number): String;

getColumnClass(arg0: number): Class<any>;

getValueAt(arg0: number, arg1: number): Object;

setValueAt(arg0: Object, arg1: number, arg2: number): void;

isCellEditable(arg0: number, arg1: number): boolean;

addColumn(arg0: TableColumn): void;

removeColumn(arg0: TableColumn): void;

moveColumn(arg0: number, arg1: number): void;

columnAtPoint(arg0: Point): number;

rowAtPoint(arg0: Point): number;

getCellRect(arg0: number, arg1: number, arg2: boolean): Rectangle;

doLayout(): void;

sizeColumnsToFit(arg0: boolean): void;

sizeColumnsToFit(arg0: number): void;

getToolTipText(arg0: MouseEvent): String;

setSurrendersFocusOnKeystroke(arg0: boolean): void;

getSurrendersFocusOnKeystroke(): boolean;

editCellAt(arg0: number, arg1: number): boolean;

editCellAt(arg0: number, arg1: number, arg2: EventObject): boolean;

isEditing(): boolean;

getEditorComponent(): Component;

getEditingColumn(): number;

getEditingRow(): number;

getUI(): TableUI;

setUI(arg0: TableUI): void;

updateUI(): void;

getUIClassID(): String;

setModel(arg0: TableModel): void;

getModel(): TableModel;

setColumnModel(arg0: TableColumnModel): void;

getColumnModel(): TableColumnModel;

setSelectionModel(arg0: ListSelectionModel): void;

getSelectionModel(): ListSelectionModel;

sorterChanged(arg0: RowSorterEvent): void;

tableChanged(arg0: TableModelEvent): void;

columnAdded(arg0: TableColumnModelEvent): void;

columnRemoved(arg0: TableColumnModelEvent): void;

columnMoved(arg0: TableColumnModelEvent): void;

columnMarginChanged(arg0: ChangeEvent): void;

columnSelectionChanged(arg0: ListSelectionEvent): void;

valueChanged(arg0: ListSelectionEvent): void;

editingStopped(arg0: ChangeEvent): void;

editingCanceled(arg0: ChangeEvent): void;

setPreferredScrollableViewportSize(arg0: Dimension): void;

getPreferredScrollableViewportSize(): Dimension;

getScrollableUnitIncrement(arg0: Rectangle, arg1: number, arg2: number): number;

getScrollableBlockIncrement(arg0: Rectangle, arg1: number, arg2: number): number;

getScrollableTracksViewportWidth(): boolean;

getScrollableTracksViewportHeight(): boolean;

setFillsViewportHeight(arg0: boolean): void;

getFillsViewportHeight(): boolean;

getCellEditor(): TableCellEditor;

setCellEditor(arg0: TableCellEditor): void;

setEditingColumn(arg0: number): void;

setEditingRow(arg0: number): void;

getCellRenderer(arg0: number, arg1: number): TableCellRenderer;

prepareRenderer(arg0: TableCellRenderer, arg1: number, arg2: number): Component;

getCellEditor(arg0: number, arg1: number): TableCellEditor;

prepareEditor(arg0: TableCellEditor, arg1: number, arg2: number): Component;

removeEditor(): void;

print(): boolean;

print(arg0: JTable.PrintMode): boolean;

print(arg0: JTable.PrintMode, arg1: MessageFormat, arg2: MessageFormat): boolean;

print(arg0: JTable.PrintMode, arg1: MessageFormat, arg2: MessageFormat, arg3: boolean, arg4: PrintRequestAttributeSet, arg5: boolean): boolean;

print(arg0: JTable.PrintMode, arg1: MessageFormat, arg2: MessageFormat, arg3: boolean, arg4: PrintRequestAttributeSet, arg5: boolean, arg6: PrintService): boolean;

getPrintable(arg0: JTable.PrintMode, arg1: MessageFormat, arg2: MessageFormat): Printable;

getAccessibleContext(): AccessibleContext;
 }
export namespace JTable { 
export class AccessibleJTable extends JComponent.AccessibleJComponent implements AccessibleSelection, ListSelectionListener, TableModelListener, TableColumnModelListener, CellEditorListener, PropertyChangeListener, AccessibleExtendedTable {

propertyChange(arg0: PropertyChangeEvent): void;

tableChanged(arg0: TableModelEvent): void;

tableRowsInserted(arg0: TableModelEvent): void;

tableRowsDeleted(arg0: TableModelEvent): void;

columnAdded(arg0: TableColumnModelEvent): void;

columnRemoved(arg0: TableColumnModelEvent): void;

columnMoved(arg0: TableColumnModelEvent): void;

columnMarginChanged(arg0: ChangeEvent): void;

columnSelectionChanged(arg0: ListSelectionEvent): void;

editingStopped(arg0: ChangeEvent): void;

editingCanceled(arg0: ChangeEvent): void;

valueChanged(arg0: ListSelectionEvent): void;

getAccessibleSelection(): AccessibleSelection;

getAccessibleRole(): AccessibleRole;

getAccessibleAt(arg0: Point): Accessible;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

getAccessibleSelectionCount(): number;

getAccessibleSelection(arg0: number): Accessible;

isAccessibleChildSelected(arg0: number): boolean;

addAccessibleSelection(arg0: number): void;

removeAccessibleSelection(arg0: number): void;

clearAccessibleSelection(): void;

selectAllAccessibleSelection(): void;

getAccessibleRow(arg0: number): number;

getAccessibleColumn(arg0: number): number;

getAccessibleIndex(arg0: number, arg1: number): number;

getAccessibleTable(): AccessibleTable;

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

getAccessibleRowAtIndex(arg0: number): number;

getAccessibleColumnAtIndex(arg0: number): number;

getAccessibleIndexAt(arg0: number, arg1: number): number;
 }
export namespace AccessibleJTable { 
export class AccessibleJTableCell extends AccessibleContext implements Accessible, AccessibleComponent {
constructor(arg0: JTable.AccessibleJTable, arg1: JTable, arg2: number, arg3: number, arg4: number);

getAccessibleContext(): AccessibleContext;

getAccessibleName(): String;

setAccessibleName(arg0: String): void;

getAccessibleDescription(): String;

setAccessibleDescription(arg0: String): void;

getAccessibleRole(): AccessibleRole;

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleParent(): Accessible;

getAccessibleIndexInParent(): number;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

getLocale(): Locale;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

getAccessibleAction(): AccessibleAction;

getAccessibleComponent(): AccessibleComponent;

getAccessibleSelection(): AccessibleSelection;

getAccessibleText(): AccessibleText;

getAccessibleValue(): AccessibleValue;

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

export class AccessibleJTableModelChange implements AccessibleTableModelChange {

getType(): number;

getFirstRow(): number;

getLastRow(): number;

getFirstColumn(): number;

getLastColumn(): number;
 }

}

export class AccessibleJTableCell extends AccessibleContext implements Accessible, AccessibleComponent {
constructor(arg0: JTable.AccessibleJTable, arg1: JTable, arg2: number, arg3: number, arg4: number);

getAccessibleContext(): AccessibleContext;

getAccessibleName(): String;

setAccessibleName(arg0: String): void;

getAccessibleDescription(): String;

setAccessibleDescription(arg0: String): void;

getAccessibleRole(): AccessibleRole;

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleParent(): Accessible;

getAccessibleIndexInParent(): number;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

getLocale(): Locale;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

getAccessibleAction(): AccessibleAction;

getAccessibleComponent(): AccessibleComponent;

getAccessibleSelection(): AccessibleSelection;

getAccessibleText(): AccessibleText;

getAccessibleValue(): AccessibleValue;

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

export class AccessibleJTableModelChange implements AccessibleTableModelChange {

getType(): number;

getFirstRow(): number;

getLastRow(): number;

getFirstColumn(): number;

getLastColumn(): number;
 }

export class DropLocation extends TransferHandler.DropLocation {

getRow(): number;

getColumn(): number;

isInsertRow(): boolean;

isInsertColumn(): boolean;
toString(): string;
 }

export class PrintMode extends Enum<JTable.PrintMode> {
static NORMAL:JTable.PrintMode
static FIT_WIDTH:JTable.PrintMode

static values(): JTable.PrintMode[];

static valueOf(arg0: String): JTable.PrintMode;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class JTextArea extends JTextComponent {
constructor();
constructor(arg0: String);
constructor(arg0: number, arg1: number);
constructor(arg0: String, arg1: number, arg2: number);
constructor(arg0: Document);
constructor(arg0: Document, arg1: String, arg2: number, arg3: number);

getUIClassID(): String;

setTabSize(arg0: number): void;

getTabSize(): number;

setLineWrap(arg0: boolean): void;

getLineWrap(): boolean;

setWrapStyleWord(arg0: boolean): void;

getWrapStyleWord(): boolean;

getLineOfOffset(arg0: number): number;

getLineCount(): number;

getLineStartOffset(arg0: number): number;

getLineEndOffset(arg0: number): number;

insert(arg0: String, arg1: number): void;

append(arg0: String): void;

replaceRange(arg0: String, arg1: number, arg2: number): void;

getRows(): number;

setRows(arg0: number): void;

getColumns(): number;

setColumns(arg0: number): void;

getPreferredSize(): Dimension;

setFont(arg0: Font): void;

getScrollableTracksViewportWidth(): boolean;

getPreferredScrollableViewportSize(): Dimension;

getScrollableUnitIncrement(arg0: Rectangle, arg1: number, arg2: number): number;

getAccessibleContext(): AccessibleContext;
 }
export namespace JTextArea { 
export class AccessibleJTextArea extends JTextComponent.AccessibleJTextComponent {

getAccessibleStateSet(): AccessibleStateSet;
 }

}

export class JTextField extends JTextComponent implements SwingConstants {
static notifyAction:String
constructor();
constructor(arg0: String);
constructor(arg0: number);
constructor(arg0: String, arg1: number);
constructor(arg0: Document, arg1: String, arg2: number);

getUIClassID(): String;

setDocument(arg0: Document): void;

isValidateRoot(): boolean;

getHorizontalAlignment(): number;

setHorizontalAlignment(arg0: number): void;

getColumns(): number;

setColumns(arg0: number): void;

getPreferredSize(): Dimension;

setFont(arg0: Font): void;

addActionListener(arg0: ActionListener): void;

removeActionListener(arg0: ActionListener): void;

getActionListeners(): ActionListener[];

setActionCommand(arg0: String): void;

setAction(arg0: Action): void;

getAction(): Action;

getActions(): Action[];

postActionEvent(): void;

getHorizontalVisibility(): BoundedRangeModel;

getScrollOffset(): number;

setScrollOffset(arg0: number): void;

scrollRectToVisible(arg0: Rectangle): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace JTextField { 
export class AccessibleJTextField extends JTextComponent.AccessibleJTextComponent {

getAccessibleStateSet(): AccessibleStateSet;
 }

}

export class JTextPane extends JEditorPane {
constructor();
constructor(arg0: StyledDocument);

getUIClassID(): String;

setDocument(arg0: Document): void;

setStyledDocument(arg0: StyledDocument): void;

getStyledDocument(): StyledDocument;

replaceSelection(arg0: String): void;

insertComponent(arg0: Component): void;

insertIcon(arg0: Icon): void;

addStyle(arg0: String, arg1: Style): Style;

removeStyle(arg0: String): void;

getStyle(arg0: String): Style;

setLogicalStyle(arg0: Style): void;

getLogicalStyle(): Style;

getCharacterAttributes(): AttributeSet;

setCharacterAttributes(arg0: AttributeSet, arg1: boolean): void;

getParagraphAttributes(): AttributeSet;

setParagraphAttributes(arg0: AttributeSet, arg1: boolean): void;

getInputAttributes(): MutableAttributeSet;

setEditorKit(arg0: EditorKit): void;
 }

export class JToggleButton extends AbstractButton implements Accessible {
constructor();
constructor(arg0: Icon);
constructor(arg0: Icon, arg1: boolean);
constructor(arg0: String);
constructor(arg0: String, arg1: boolean);
constructor(arg0: Action);
constructor(arg0: String, arg1: Icon);
constructor(arg0: String, arg1: Icon, arg2: boolean);

updateUI(): void;

getUIClassID(): String;

requestFocus(arg0: FocusEvent.Cause): void;

requestFocusInWindow(arg0: FocusEvent.Cause): boolean;

getAccessibleContext(): AccessibleContext;
 }
export namespace JToggleButton { 
export class AccessibleJToggleButton extends AbstractButton.AccessibleAbstractButton implements ItemListener {
constructor(arg0: JToggleButton);

itemStateChanged(arg0: ItemEvent): void;

getAccessibleRole(): AccessibleRole;
 }

export interface ToggleButtonModel { }
export class ToggleButtonModel extends DefaultButtonModel {
constructor();

isSelected(): boolean;

setSelected(arg0: boolean): void;

setPressed(arg0: boolean): void;
 }

}

export class JToolBar extends JComponent implements SwingConstants, Accessible {
constructor();
constructor(arg0: number);
constructor(arg0: String);
constructor(arg0: String, arg1: number);

getUI(): ToolBarUI;

setUI(arg0: ToolBarUI): void;

updateUI(): void;

getUIClassID(): String;

getComponentIndex(arg0: Component): number;

getComponentAtIndex(arg0: number): Component;

setMargin(arg0: Insets): void;

getMargin(): Insets;

isBorderPainted(): boolean;

setBorderPainted(arg0: boolean): void;

isFloatable(): boolean;

setFloatable(arg0: boolean): void;

getOrientation(): number;

setOrientation(arg0: number): void;

setRollover(arg0: boolean): void;

isRollover(): boolean;

addSeparator(): void;

addSeparator(arg0: Dimension): void;

add(arg0: Action): JButton;

setLayout(arg0: LayoutManager): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace JToolBar { 
export class AccessibleJToolBar extends JComponent.AccessibleJComponent {

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleRole(): AccessibleRole;
 }

export class Separator extends JSeparator {
constructor();
constructor(arg0: Dimension);

getUIClassID(): String;

setSeparatorSize(arg0: Dimension): void;

getSeparatorSize(): Dimension;

getMinimumSize(): Dimension;

getMaximumSize(): Dimension;

getPreferredSize(): Dimension;
 }

}

export class JToolTip extends JComponent implements Accessible {
constructor();

getUI(): ToolTipUI;

updateUI(): void;

getUIClassID(): String;

setTipText(arg0: String): void;

getTipText(): String;

setComponent(arg0: JComponent): void;

getComponent(): JComponent;

getAccessibleContext(): AccessibleContext;
 }
export namespace JToolTip { 
export class AccessibleJToolTip extends JComponent.AccessibleJComponent {

getAccessibleDescription(): String;

getAccessibleRole(): AccessibleRole;
 }

}

export class JTree extends JComponent implements Scrollable, Accessible {
static CELL_RENDERER_PROPERTY:String
static TREE_MODEL_PROPERTY:String
static ROOT_VISIBLE_PROPERTY:String
static SHOWS_ROOT_HANDLES_PROPERTY:String
static ROW_HEIGHT_PROPERTY:String
static CELL_EDITOR_PROPERTY:String
static EDITABLE_PROPERTY:String
static LARGE_MODEL_PROPERTY:String
static SELECTION_MODEL_PROPERTY:String
static VISIBLE_ROW_COUNT_PROPERTY:String
static INVOKES_STOP_CELL_EDITING_PROPERTY:String
static SCROLLS_ON_EXPAND_PROPERTY:String
static TOGGLE_CLICK_COUNT_PROPERTY:String
static LEAD_SELECTION_PATH_PROPERTY:String
static ANCHOR_SELECTION_PATH_PROPERTY:String
static EXPANDS_SELECTED_PATHS_PROPERTY:String
constructor();
constructor(arg0: Object[]);
constructor(arg0: Vector<any>);
constructor(arg0: Hashtable<any, any>);
constructor(arg0: TreeNode);
constructor(arg0: TreeNode, arg1: boolean);
constructor(arg0: TreeModel);

getUI(): TreeUI;

setUI(arg0: TreeUI): void;

updateUI(): void;

getUIClassID(): String;

getCellRenderer(): TreeCellRenderer;

setCellRenderer(arg0: TreeCellRenderer): void;

setEditable(arg0: boolean): void;

isEditable(): boolean;

setCellEditor(arg0: TreeCellEditor): void;

getCellEditor(): TreeCellEditor;

getModel(): TreeModel;

setModel(arg0: TreeModel): void;

isRootVisible(): boolean;

setRootVisible(arg0: boolean): void;

setShowsRootHandles(arg0: boolean): void;

getShowsRootHandles(): boolean;

setRowHeight(arg0: number): void;

getRowHeight(): number;

isFixedRowHeight(): boolean;

setLargeModel(arg0: boolean): void;

isLargeModel(): boolean;

setInvokesStopCellEditing(arg0: boolean): void;

getInvokesStopCellEditing(): boolean;

setScrollsOnExpand(arg0: boolean): void;

getScrollsOnExpand(): boolean;

setToggleClickCount(arg0: number): void;

getToggleClickCount(): number;

setExpandsSelectedPaths(arg0: boolean): void;

getExpandsSelectedPaths(): boolean;

setDragEnabled(arg0: boolean): void;

getDragEnabled(): boolean;

setDropMode(arg0: DropMode): void;

getDropMode(): DropMode;

getDropLocation(): JTree.DropLocation;

isPathEditable(arg0: TreePath): boolean;

getToolTipText(arg0: MouseEvent): String;

convertValueToText(arg0: Object, arg1: boolean, arg2: boolean, arg3: boolean, arg4: number, arg5: boolean): String;

getRowCount(): number;

setSelectionPath(arg0: TreePath): void;

setSelectionPaths(arg0: TreePath[]): void;

setLeadSelectionPath(arg0: TreePath): void;

setAnchorSelectionPath(arg0: TreePath): void;

setSelectionRow(arg0: number): void;

setSelectionRows(arg0: number[]): void;

addSelectionPath(arg0: TreePath): void;

addSelectionPaths(arg0: TreePath[]): void;

addSelectionRow(arg0: number): void;

addSelectionRows(arg0: number[]): void;

getLastSelectedPathComponent(): Object;

getLeadSelectionPath(): TreePath;

getAnchorSelectionPath(): TreePath;

getSelectionPath(): TreePath;

getSelectionPaths(): TreePath[];

getSelectionRows(): number[];

getSelectionCount(): number;

getMinSelectionRow(): number;

getMaxSelectionRow(): number;

getLeadSelectionRow(): number;

isPathSelected(arg0: TreePath): boolean;

isRowSelected(arg0: number): boolean;

getExpandedDescendants(arg0: TreePath): Enumeration<TreePath>;

hasBeenExpanded(arg0: TreePath): boolean;

isExpanded(arg0: TreePath): boolean;

isExpanded(arg0: number): boolean;

isCollapsed(arg0: TreePath): boolean;

isCollapsed(arg0: number): boolean;

makeVisible(arg0: TreePath): void;

isVisible(arg0: TreePath): boolean;

getPathBounds(arg0: TreePath): Rectangle;

getRowBounds(arg0: number): Rectangle;

scrollPathToVisible(arg0: TreePath): void;

scrollRowToVisible(arg0: number): void;

getPathForRow(arg0: number): TreePath;

getRowForPath(arg0: TreePath): number;

expandPath(arg0: TreePath): void;

expandRow(arg0: number): void;

collapsePath(arg0: TreePath): void;

collapseRow(arg0: number): void;

getPathForLocation(arg0: number, arg1: number): TreePath;

getRowForLocation(arg0: number, arg1: number): number;

getClosestPathForLocation(arg0: number, arg1: number): TreePath;

getClosestRowForLocation(arg0: number, arg1: number): number;

isEditing(): boolean;

stopEditing(): boolean;

cancelEditing(): void;

startEditingAtPath(arg0: TreePath): void;

getEditingPath(): TreePath;

setSelectionModel(arg0: TreeSelectionModel): void;

getSelectionModel(): TreeSelectionModel;

setSelectionInterval(arg0: number, arg1: number): void;

addSelectionInterval(arg0: number, arg1: number): void;

removeSelectionInterval(arg0: number, arg1: number): void;

removeSelectionPath(arg0: TreePath): void;

removeSelectionPaths(arg0: TreePath[]): void;

removeSelectionRow(arg0: number): void;

removeSelectionRows(arg0: number[]): void;

clearSelection(): void;

isSelectionEmpty(): boolean;

addTreeExpansionListener(arg0: TreeExpansionListener): void;

removeTreeExpansionListener(arg0: TreeExpansionListener): void;

getTreeExpansionListeners(): TreeExpansionListener[];

addTreeWillExpandListener(arg0: TreeWillExpandListener): void;

removeTreeWillExpandListener(arg0: TreeWillExpandListener): void;

getTreeWillExpandListeners(): TreeWillExpandListener[];

fireTreeExpanded(arg0: TreePath): void;

fireTreeCollapsed(arg0: TreePath): void;

fireTreeWillExpand(arg0: TreePath): void;

fireTreeWillCollapse(arg0: TreePath): void;

addTreeSelectionListener(arg0: TreeSelectionListener): void;

removeTreeSelectionListener(arg0: TreeSelectionListener): void;

getTreeSelectionListeners(): TreeSelectionListener[];

treeDidChange(): void;

setVisibleRowCount(arg0: number): void;

getVisibleRowCount(): number;

getNextMatch(arg0: String, arg1: number, arg2: Position.Bias): TreePath;

getPreferredScrollableViewportSize(): Dimension;

getScrollableUnitIncrement(arg0: Rectangle, arg1: number, arg2: number): number;

getScrollableBlockIncrement(arg0: Rectangle, arg1: number, arg2: number): number;

getScrollableTracksViewportWidth(): boolean;

getScrollableTracksViewportHeight(): boolean;

getAccessibleContext(): AccessibleContext;
 }
export namespace JTree { 
export class AccessibleJTree extends JComponent.AccessibleJComponent implements AccessibleSelection, TreeSelectionListener, TreeModelListener, TreeExpansionListener {
constructor(arg0: JTree);

valueChanged(arg0: TreeSelectionEvent): void;

fireVisibleDataPropertyChange(): void;

treeNodesChanged(arg0: TreeModelEvent): void;

treeNodesInserted(arg0: TreeModelEvent): void;

treeNodesRemoved(arg0: TreeModelEvent): void;

treeStructureChanged(arg0: TreeModelEvent): void;

treeCollapsed(arg0: TreeExpansionEvent): void;

treeExpanded(arg0: TreeExpansionEvent): void;

getAccessibleRole(): AccessibleRole;

getAccessibleAt(arg0: Point): Accessible;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

getAccessibleIndexInParent(): number;

getAccessibleSelection(): AccessibleSelection;

getAccessibleSelectionCount(): number;

getAccessibleSelection(arg0: number): Accessible;

isAccessibleChildSelected(arg0: number): boolean;

addAccessibleSelection(arg0: number): void;

removeAccessibleSelection(arg0: number): void;

clearAccessibleSelection(): void;

selectAllAccessibleSelection(): void;
 }
export namespace AccessibleJTree { 
export class AccessibleJTreeNode extends AccessibleContext implements Accessible, AccessibleComponent, AccessibleSelection, AccessibleAction {
constructor(arg0: JTree.AccessibleJTree, arg1: JTree, arg2: TreePath, arg3: Accessible);

getAccessibleContext(): AccessibleContext;

getAccessibleName(): String;

setAccessibleName(arg0: String): void;

getAccessibleDescription(): String;

setAccessibleDescription(arg0: String): void;

getAccessibleRole(): AccessibleRole;

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleParent(): Accessible;

getAccessibleIndexInParent(): number;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

getLocale(): Locale;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

getAccessibleAction(): AccessibleAction;

getAccessibleComponent(): AccessibleComponent;

getAccessibleSelection(): AccessibleSelection;

getAccessibleText(): AccessibleText;

getAccessibleValue(): AccessibleValue;

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

getAccessibleSelectionCount(): number;

getAccessibleSelection(arg0: number): Accessible;

isAccessibleChildSelected(arg0: number): boolean;

addAccessibleSelection(arg0: number): void;

removeAccessibleSelection(arg0: number): void;

clearAccessibleSelection(): void;

selectAllAccessibleSelection(): void;

getAccessibleActionCount(): number;

getAccessibleActionDescription(arg0: number): String;

doAccessibleAction(arg0: number): boolean;
 }

}

export class AccessibleJTreeNode extends AccessibleContext implements Accessible, AccessibleComponent, AccessibleSelection, AccessibleAction {
constructor(arg0: JTree.AccessibleJTree, arg1: JTree, arg2: TreePath, arg3: Accessible);

getAccessibleContext(): AccessibleContext;

getAccessibleName(): String;

setAccessibleName(arg0: String): void;

getAccessibleDescription(): String;

setAccessibleDescription(arg0: String): void;

getAccessibleRole(): AccessibleRole;

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleParent(): Accessible;

getAccessibleIndexInParent(): number;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

getLocale(): Locale;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

getAccessibleAction(): AccessibleAction;

getAccessibleComponent(): AccessibleComponent;

getAccessibleSelection(): AccessibleSelection;

getAccessibleText(): AccessibleText;

getAccessibleValue(): AccessibleValue;

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

getAccessibleSelectionCount(): number;

getAccessibleSelection(arg0: number): Accessible;

isAccessibleChildSelected(arg0: number): boolean;

addAccessibleSelection(arg0: number): void;

removeAccessibleSelection(arg0: number): void;

clearAccessibleSelection(): void;

selectAllAccessibleSelection(): void;

getAccessibleActionCount(): number;

getAccessibleActionDescription(arg0: number): String;

doAccessibleAction(arg0: number): boolean;
 }

export class DropLocation extends TransferHandler.DropLocation {

getChildIndex(): number;

getPath(): TreePath;
toString(): string;
 }

export class DynamicUtilTreeNode extends DefaultMutableTreeNode {
constructor(arg0: Object, arg1: Object);

static createChildren(arg0: DefaultMutableTreeNode, arg1: Object): void;

isLeaf(): boolean;

getChildCount(): number;

getChildAt(arg0: number): TreeNode;

children(): Enumeration<TreeNode>;
 }

export class EmptySelectionModel extends DefaultTreeSelectionModel {

static sharedInstance(): JTree.EmptySelectionModel;

setSelectionPaths(arg0: TreePath[]): void;

addSelectionPaths(arg0: TreePath[]): void;

removeSelectionPaths(arg0: TreePath[]): void;

setSelectionMode(arg0: number): void;

setRowMapper(arg0: RowMapper): void;

addTreeSelectionListener(arg0: TreeSelectionListener): void;

removeTreeSelectionListener(arg0: TreeSelectionListener): void;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;
 }

export class TreeModelHandler implements TreeModelListener {

treeNodesChanged(arg0: TreeModelEvent): void;

treeNodesInserted(arg0: TreeModelEvent): void;

treeStructureChanged(arg0: TreeModelEvent): void;

treeNodesRemoved(arg0: TreeModelEvent): void;
 }

export class TreeSelectionRedirector implements Serializable, TreeSelectionListener {

valueChanged(arg0: TreeSelectionEvent): void;
 }

}

export class JViewport extends JComponent implements Accessible {
static BLIT_SCROLL_MODE:number
static BACKINGSTORE_SCROLL_MODE:number
static SIMPLE_SCROLL_MODE:number
constructor();

getUI(): ViewportUI;

setUI(arg0: ViewportUI): void;

updateUI(): void;

getUIClassID(): String;

remove(arg0: Component): void;

scrollRectToVisible(arg0: Rectangle): void;

setBorder(arg0: Border): void;

getInsets(): Insets;

getInsets(arg0: Insets): Insets;

isOptimizedDrawingEnabled(): boolean;

paint(arg0: Graphics): void;

reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;

setScrollMode(arg0: number): void;

getScrollMode(): number;

isBackingStoreEnabled(): boolean;

setBackingStoreEnabled(arg0: boolean): void;

getView(): Component;

setView(arg0: Component): void;

getViewSize(): Dimension;

setViewSize(arg0: Dimension): void;

getViewPosition(): Point;

setViewPosition(arg0: Point): void;

getViewRect(): Rectangle;

getExtentSize(): Dimension;

toViewCoordinates(arg0: Dimension): Dimension;

toViewCoordinates(arg0: Point): Point;

setExtentSize(arg0: Dimension): void;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;

getChangeListeners(): ChangeListener[];

repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace JViewport { 
export class AccessibleJViewport extends JComponent.AccessibleJComponent {

getAccessibleRole(): AccessibleRole;
 }

export class ViewListener extends ComponentAdapter implements Serializable {

componentResized(arg0: ComponentEvent): void;
 }

}

export class JWindow extends Window implements Accessible, RootPaneContainer, TransferHandler.HasGetTransferHandler {
constructor();
constructor(arg0: GraphicsConfiguration);
constructor(arg0: Frame);
constructor(arg0: Window);
constructor(arg0: Window, arg1: GraphicsConfiguration);

setTransferHandler(arg0: TransferHandler): void;

getTransferHandler(): TransferHandler;

update(arg0: Graphics): void;

remove(arg0: Component): void;

setLayout(arg0: LayoutManager): void;

getRootPane(): JRootPane;

getContentPane(): Container;

setContentPane(arg0: Container): void;

getLayeredPane(): JLayeredPane;

setLayeredPane(arg0: JLayeredPane): void;

getGlassPane(): Component;

setGlassPane(arg0: Component): void;

getGraphics(): Graphics;

repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace JWindow { 
export class AccessibleJWindow extends Window.AccessibleAWTWindow {
 }

}

export class KeyStroke extends AWTKeyStroke {

static getKeyStroke(arg0: String): KeyStroke;

static getKeyStroke(arg0: String, arg1: boolean): KeyStroke;

static getKeyStroke(arg0: String, arg1: number): KeyStroke;

static getKeyStroke(arg0: number, arg1: number, arg2: boolean): KeyStroke;

static getKeyStroke(arg0: number, arg1: number): KeyStroke;

static getKeyStrokeForEvent(arg0: KeyEvent): KeyStroke;

static getKeyStroke(arg0: String): KeyStroke;
 }

export class LayoutFocusTraversalPolicy extends SortingFocusTraversalPolicy implements Serializable {
constructor();

getComponentAfter(arg0: Container, arg1: Component): Component;

getComponentBefore(arg0: Container, arg1: Component): Component;

getFirstComponent(arg0: Container): Component;

getLastComponent(arg0: Container): Component;
 }

export abstract class LayoutStyle {
constructor();

static setInstance(arg0: LayoutStyle): void;

static getInstance(): LayoutStyle;

abstract getPreferredGap(arg0: JComponent, arg1: JComponent, arg2: LayoutStyle.ComponentPlacement, arg3: number, arg4: Container): number;

abstract getContainerGap(arg0: JComponent, arg1: number, arg2: Container): number;
 }
export namespace LayoutStyle { 
export class ComponentPlacement extends Enum<LayoutStyle.ComponentPlacement> {
static RELATED:LayoutStyle.ComponentPlacement
static UNRELATED:LayoutStyle.ComponentPlacement
static INDENT:LayoutStyle.ComponentPlacement

static values(): LayoutStyle.ComponentPlacement[];

static valueOf(arg0: String): LayoutStyle.ComponentPlacement;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export interface ListCellRenderer<E extends Object> extends Object {

getListCellRendererComponent(arg0: JList<E>, arg1: E, arg2: number, arg3: boolean, arg4: boolean): Component;
 }

export interface ListModel<E extends Object> extends Object {

getSize(): number;

getElementAt(arg0: number): E;

addListDataListener(arg0: ListDataListener): void;

removeListDataListener(arg0: ListDataListener): void;
 }

export namespace ListSelectionModel { 
const SINGLE_SELECTION:number
const SINGLE_INTERVAL_SELECTION:number
const MULTIPLE_INTERVAL_SELECTION:number
}

export interface ListSelectionModel {
SINGLE_SELECTION:number
SINGLE_INTERVAL_SELECTION:number
MULTIPLE_INTERVAL_SELECTION:number

setSelectionInterval(arg0: number, arg1: number): void;

addSelectionInterval(arg0: number, arg1: number): void;

removeSelectionInterval(arg0: number, arg1: number): void;

getMinSelectionIndex(): number;

getMaxSelectionIndex(): number;

isSelectedIndex(arg0: number): boolean;

getAnchorSelectionIndex(): number;

setAnchorSelectionIndex(arg0: number): void;

getLeadSelectionIndex(): number;

setLeadSelectionIndex(arg0: number): void;

clearSelection(): void;

isSelectionEmpty(): boolean;

insertIndexInterval(arg0: number, arg1: number, arg2: boolean): void;

removeIndexInterval(arg0: number, arg1: number): void;

setValueIsAdjusting(arg0: boolean): void;

getValueIsAdjusting(): boolean;

setSelectionMode(arg0: number): void;

getSelectionMode(): number;

addListSelectionListener(arg0: ListSelectionListener): void;

removeListSelectionListener(arg0: ListSelectionListener): void;

/* default */ getSelectedIndices(): number[];

/* default */ getSelectedItemsCount(): number;
 }

export abstract class LookAndFeel {

static installColors(arg0: JComponent, arg1: String, arg2: String): void;

static installColorsAndFont(arg0: JComponent, arg1: String, arg2: String, arg3: String): void;

static installBorder(arg0: JComponent, arg1: String): void;

static uninstallBorder(arg0: JComponent): void;

static installProperty(arg0: JComponent, arg1: String, arg2: Object): void;

static makeKeyBindings(arg0: Object[]): JTextComponent.KeyBinding[];

static makeInputMap(arg0: Object[]): InputMap;

static makeComponentInputMap(arg0: JComponent, arg1: Object[]): ComponentInputMap;

static loadKeyBindings(arg0: InputMap, arg1: Object[]): void;

static makeIcon(arg0: Class<any>, arg1: String): Object;

getLayoutStyle(): LayoutStyle;

provideErrorFeedback(arg0: Component): void;

static getDesktopPropertyValue(arg0: String, arg1: Object): Object;

getDisabledIcon(arg0: JComponent, arg1: Icon): Icon;

getDisabledSelectedIcon(arg0: JComponent, arg1: Icon): Icon;

abstract getName(): String;

abstract getID(): String;

abstract getDescription(): String;

getSupportsWindowDecorations(): boolean;

abstract isNativeLookAndFeel(): boolean;

abstract isSupportedLookAndFeel(): boolean;

initialize(): void;

uninitialize(): void;

getDefaults(): UIDefaults;
toString(): string;
 }

export interface MenuElement {

processMouseEvent(arg0: MouseEvent, arg1: MenuElement[], arg2: MenuSelectionManager): void;

processKeyEvent(arg0: KeyEvent, arg1: MenuElement[], arg2: MenuSelectionManager): void;

menuSelectionChanged(arg0: boolean): void;

getSubElements(): MenuElement[];

getComponent(): Component;
 }

export class MenuSelectionManager {
constructor();

static defaultManager(): MenuSelectionManager;

setSelectedPath(arg0: MenuElement[]): void;

getSelectedPath(): MenuElement[];

clearSelectedPath(): void;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;

getChangeListeners(): ChangeListener[];

processMouseEvent(arg0: MouseEvent): void;

componentForPoint(arg0: Component, arg1: Point): Component;

processKeyEvent(arg0: KeyEvent): void;

isComponentPartOfCurrentMenu(arg0: Component): boolean;
 }

export interface MutableComboBoxModel<E extends Object> extends ComboBoxModel<E>, Object {

addElement(arg0: E): void;

removeElement(arg0: Object): void;

insertElementAt(arg0: E, arg1: number): void;

removeElementAt(arg0: number): void;
 }

export class OverlayLayout implements LayoutManager2, Serializable {
constructor(arg0: Container);

getTarget(): Container;

invalidateLayout(arg0: Container): void;

addLayoutComponent(arg0: String, arg1: Component): void;

removeLayoutComponent(arg0: Component): void;

addLayoutComponent(arg0: Component, arg1: Object): void;

preferredLayoutSize(arg0: Container): Dimension;

minimumLayoutSize(arg0: Container): Dimension;

maximumLayoutSize(arg0: Container): Dimension;

getLayoutAlignmentX(arg0: Container): number;

getLayoutAlignmentY(arg0: Container): number;

layoutContainer(arg0: Container): void;
 }

export interface Painter<T extends Object> extends Object {

paint(arg0: Graphics2D, arg1: T, arg2: number, arg3: number): void;
 }

export class Popup {

show(): void;

hide(): void;
 }

export class PopupFactory {
constructor();

static setSharedInstance(arg0: PopupFactory): void;

static getSharedInstance(): PopupFactory;

getPopup(arg0: Component, arg1: Component, arg2: number, arg3: number): Popup;
 }

export class ProgressMonitor implements Accessible {
constructor(arg0: Component, arg1: Object, arg2: String, arg3: number, arg4: number);

setProgress(arg0: number): void;

close(): void;

getMinimum(): number;

setMinimum(arg0: number): void;

getMaximum(): number;

setMaximum(arg0: number): void;

isCanceled(): boolean;

setMillisToDecideToPopup(arg0: number): void;

getMillisToDecideToPopup(): number;

setMillisToPopup(arg0: number): void;

getMillisToPopup(): number;

setNote(arg0: String): void;

getNote(): String;

getAccessibleContext(): AccessibleContext;
 }
export namespace ProgressMonitor { 
export class AccessibleProgressMonitor extends AccessibleContext implements AccessibleText, ChangeListener, PropertyChangeListener {

stateChanged(arg0: ChangeEvent): void;

propertyChange(arg0: PropertyChangeEvent): void;

getAccessibleName(): String;

getAccessibleDescription(): String;

getAccessibleRole(): AccessibleRole;

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleParent(): Accessible;

getAccessibleIndexInParent(): number;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

getLocale(): Locale;

getAccessibleComponent(): AccessibleComponent;

getAccessibleValue(): AccessibleValue;

getAccessibleText(): AccessibleText;

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

}

export class ProgressMonitorInputStream extends FilterInputStream {
constructor(arg0: Component, arg1: Object, arg2: InputStream);

getProgressMonitor(): ProgressMonitor;

read(): number;

read(arg0: number[]): number;

read(arg0: number[], arg1: number, arg2: number): number;

skip(arg0: number): number;

close(): void;

reset(): void;
 }

export interface Renderer {

setValue(arg0: Object, arg1: boolean): void;

getComponent(): Component;
 }

export class RepaintManager {
constructor();

static currentManager(arg0: Component): RepaintManager;

static currentManager(arg0: JComponent): RepaintManager;

static setCurrentManager(arg0: RepaintManager): void;

addInvalidComponent(arg0: JComponent): void;

removeInvalidComponent(arg0: JComponent): void;

addDirtyRegion(arg0: JComponent, arg1: number, arg2: number, arg3: number, arg4: number): void;

addDirtyRegion(arg0: Window, arg1: number, arg2: number, arg3: number, arg4: number): void;

addDirtyRegion(arg0: Applet, arg1: number, arg2: number, arg3: number, arg4: number): void;

getDirtyRegion(arg0: JComponent): Rectangle;

markCompletelyDirty(arg0: JComponent): void;

markCompletelyClean(arg0: JComponent): void;

isCompletelyDirty(arg0: JComponent): boolean;

validateInvalidComponents(): void;

paintDirtyRegions(): void;
toString(): string;

getOffscreenBuffer(arg0: Component, arg1: number, arg2: number): Image;

getVolatileOffscreenBuffer(arg0: Component, arg1: number, arg2: number): Image;

setDoubleBufferMaximumSize(arg0: Dimension): void;

getDoubleBufferMaximumSize(): Dimension;

setDoubleBufferingEnabled(arg0: boolean): void;

isDoubleBufferingEnabled(): boolean;
 }

export interface RootPaneContainer {

getRootPane(): JRootPane;

setContentPane(arg0: Container): void;

getContentPane(): Container;

setLayeredPane(arg0: JLayeredPane): void;

getLayeredPane(): JLayeredPane;

setGlassPane(arg0: Component): void;

getGlassPane(): Component;
 }

export abstract class RowFilter<M extends Object, I extends Object> extends Object {

static regexFilter<M extends Object, I extends Object>(arg0: String, arg1: number[]): RowFilter<M, I>;

static dateFilter<M extends Object, I extends Object>(arg0: RowFilter.ComparisonType, arg1: Date, arg2: number[]): RowFilter<M, I>;

static numberFilter<M extends Object, I extends Object>(arg0: RowFilter.ComparisonType, arg1: Number, arg2: number[]): RowFilter<M, I>;

static orFilter<M extends Object, I extends Object>(arg0: Iterable<RowFilter<M, I>>): RowFilter<M, I>;

static andFilter<M extends Object, I extends Object>(arg0: Iterable<RowFilter<M, I>>): RowFilter<M, I>;

static notFilter<M extends Object, I extends Object>(arg0: RowFilter<M, I>): RowFilter<M, I>;

abstract include(arg0: RowFilter.Entry<M, I>): boolean;
 }
export namespace RowFilter { 
export class ComparisonType extends Enum<RowFilter.ComparisonType> {
static BEFORE:RowFilter.ComparisonType
static AFTER:RowFilter.ComparisonType
static EQUAL:RowFilter.ComparisonType
static NOT_EQUAL:RowFilter.ComparisonType

static values(): RowFilter.ComparisonType[];

static valueOf(arg0: String): RowFilter.ComparisonType;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export abstract class Entry<M extends Object, I extends Object> extends Object {
constructor();

abstract getModel(): M;

abstract getValueCount(): number;

abstract getValue(arg0: number): Object;

getStringValue(arg0: number): String;

abstract getIdentifier(): I;
 }

}

export abstract class RowSorter<M extends Object> extends Object {
constructor();

abstract getModel(): M;

abstract toggleSortOrder(arg0: number): void;

abstract convertRowIndexToModel(arg0: number): number;

abstract convertRowIndexToView(arg0: number): number;

abstract setSortKeys(arg0: List<RowSorter.SortKey>): void;

abstract getSortKeys(): List<RowSorter.SortKey>;

abstract getViewRowCount(): number;

abstract getModelRowCount(): number;

abstract modelStructureChanged(): void;

abstract allRowsChanged(): void;

abstract rowsInserted(arg0: number, arg1: number): void;

abstract rowsDeleted(arg0: number, arg1: number): void;

abstract rowsUpdated(arg0: number, arg1: number): void;

abstract rowsUpdated(arg0: number, arg1: number, arg2: number): void;

addRowSorterListener(arg0: RowSorterListener): void;

removeRowSorterListener(arg0: RowSorterListener): void;
 }
export namespace RowSorter { 
export class SortKey {
constructor(arg0: number, arg1: SortOrder);

getColumn(): number;

getSortOrder(): SortOrder;

hashCode(): number;

equals(arg0: Object): boolean;
 }

}

export namespace ScrollPaneConstants { 
const VIEWPORT:String
const VERTICAL_SCROLLBAR:String
const HORIZONTAL_SCROLLBAR:String
const ROW_HEADER:String
const COLUMN_HEADER:String
const LOWER_LEFT_CORNER:String
const LOWER_RIGHT_CORNER:String
const UPPER_LEFT_CORNER:String
const UPPER_RIGHT_CORNER:String
const LOWER_LEADING_CORNER:String
const LOWER_TRAILING_CORNER:String
const UPPER_LEADING_CORNER:String
const UPPER_TRAILING_CORNER:String
const VERTICAL_SCROLLBAR_POLICY:String
const HORIZONTAL_SCROLLBAR_POLICY:String
const VERTICAL_SCROLLBAR_AS_NEEDED:number
const VERTICAL_SCROLLBAR_NEVER:number
const VERTICAL_SCROLLBAR_ALWAYS:number
const HORIZONTAL_SCROLLBAR_AS_NEEDED:number
const HORIZONTAL_SCROLLBAR_NEVER:number
const HORIZONTAL_SCROLLBAR_ALWAYS:number
}

export interface ScrollPaneConstants {
VIEWPORT:String
VERTICAL_SCROLLBAR:String
HORIZONTAL_SCROLLBAR:String
ROW_HEADER:String
COLUMN_HEADER:String
LOWER_LEFT_CORNER:String
LOWER_RIGHT_CORNER:String
UPPER_LEFT_CORNER:String
UPPER_RIGHT_CORNER:String
LOWER_LEADING_CORNER:String
LOWER_TRAILING_CORNER:String
UPPER_LEADING_CORNER:String
UPPER_TRAILING_CORNER:String
VERTICAL_SCROLLBAR_POLICY:String
HORIZONTAL_SCROLLBAR_POLICY:String
VERTICAL_SCROLLBAR_AS_NEEDED:number
VERTICAL_SCROLLBAR_NEVER:number
VERTICAL_SCROLLBAR_ALWAYS:number
HORIZONTAL_SCROLLBAR_AS_NEEDED:number
HORIZONTAL_SCROLLBAR_NEVER:number
HORIZONTAL_SCROLLBAR_ALWAYS:number
 }

export class ScrollPaneLayout implements LayoutManager, ScrollPaneConstants, Serializable {
constructor();

syncWithScrollPane(arg0: JScrollPane): void;

addLayoutComponent(arg0: String, arg1: Component): void;

removeLayoutComponent(arg0: Component): void;

getVerticalScrollBarPolicy(): number;

setVerticalScrollBarPolicy(arg0: number): void;

getHorizontalScrollBarPolicy(): number;

setHorizontalScrollBarPolicy(arg0: number): void;

getViewport(): JViewport;

getHorizontalScrollBar(): JScrollBar;

getVerticalScrollBar(): JScrollBar;

getRowHeader(): JViewport;

getColumnHeader(): JViewport;

getCorner(arg0: String): Component;

preferredLayoutSize(arg0: Container): Dimension;

minimumLayoutSize(arg0: Container): Dimension;

layoutContainer(arg0: Container): void;

getViewportBorderBounds(arg0: JScrollPane): Rectangle;
 }
export namespace ScrollPaneLayout { 
export class UIResource extends ScrollPaneLayout implements UIResource {
constructor();
 }

}

export interface Scrollable {

getPreferredScrollableViewportSize(): Dimension;

getScrollableUnitIncrement(arg0: Rectangle, arg1: number, arg2: number): number;

getScrollableBlockIncrement(arg0: Rectangle, arg1: number, arg2: number): number;

getScrollableTracksViewportWidth(): boolean;

getScrollableTracksViewportHeight(): boolean;
 }

export interface SingleSelectionModel {

getSelectedIndex(): number;

setSelectedIndex(arg0: number): void;

clearSelection(): void;

isSelected(): boolean;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;
 }

export class SizeRequirements implements Serializable {
minimum:number
preferred:number
maximum:number
alignment:number
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
toString(): string;

static getTiledSizeRequirements(arg0: SizeRequirements[]): SizeRequirements;

static getAlignedSizeRequirements(arg0: SizeRequirements[]): SizeRequirements;

static calculateTiledPositions(arg0: number, arg1: SizeRequirements, arg2: SizeRequirements[], arg3: number[], arg4: number[]): void;

static calculateTiledPositions(arg0: number, arg1: SizeRequirements, arg2: SizeRequirements[], arg3: number[], arg4: number[], arg5: boolean): void;

static calculateAlignedPositions(arg0: number, arg1: SizeRequirements, arg2: SizeRequirements[], arg3: number[], arg4: number[]): void;

static calculateAlignedPositions(arg0: number, arg1: SizeRequirements, arg2: SizeRequirements[], arg3: number[], arg4: number[], arg5: boolean): void;

static adjustSizes(arg0: number, arg1: SizeRequirements[]): number[];
 }

export class SizeSequence {
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: number);
constructor(arg0: number[]);

setSizes(arg0: number[]): void;

getSizes(): number[];

getPosition(arg0: number): number;

getIndex(arg0: number): number;

getSize(arg0: number): number;

setSize(arg0: number, arg1: number): void;

insertEntries(arg0: number, arg1: number, arg2: number): void;

removeEntries(arg0: number, arg1: number): void;
 }

export class SortOrder extends Enum<SortOrder> {
static ASCENDING:SortOrder
static DESCENDING:SortOrder
static UNSORTED:SortOrder

static values(): SortOrder[];

static valueOf(arg0: String): SortOrder;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class SortingFocusTraversalPolicy extends InternalFrameFocusTraversalPolicy {
constructor(arg0: Comparator<Component>);

getComponentAfter(arg0: Container, arg1: Component): Component;

getComponentBefore(arg0: Container, arg1: Component): Component;

getFirstComponent(arg0: Container): Component;

getLastComponent(arg0: Container): Component;

getDefaultComponent(arg0: Container): Component;

setImplicitDownCycleTraversal(arg0: boolean): void;

getImplicitDownCycleTraversal(): boolean;
 }

export class SpinnerDateModel extends AbstractSpinnerModel implements Serializable {
constructor(arg0: Date, arg1: Comparable<Date>, arg2: Comparable<Date>, arg3: number);
constructor();

setStart(arg0: Comparable<Date>): void;

getStart(): Comparable<Date>;

setEnd(arg0: Comparable<Date>): void;

getEnd(): Comparable<Date>;

setCalendarField(arg0: number): void;

getCalendarField(): number;

getNextValue(): Object;

getPreviousValue(): Object;

getDate(): Date;

getValue(): Object;

setValue(arg0: Object): void;
 }

export class SpinnerListModel extends AbstractSpinnerModel implements Serializable {
constructor(arg0: List<any>);
constructor(arg0: Object[]);
constructor();

getList(): List<any>;

setList(arg0: List<any>): void;

getValue(): Object;

setValue(arg0: Object): void;

getNextValue(): Object;

getPreviousValue(): Object;
 }

export interface SpinnerModel {

getValue(): Object;

setValue(arg0: Object): void;

getNextValue(): Object;

getPreviousValue(): Object;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;
 }

export class SpinnerNumberModel extends AbstractSpinnerModel implements Serializable {
constructor(arg0: Number, arg1: Comparable<any>, arg2: Comparable<any>, arg3: Number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
constructor();

setMinimum(arg0: Comparable<any>): void;

getMinimum(): Comparable<any>;

setMaximum(arg0: Comparable<any>): void;

getMaximum(): Comparable<any>;

setStepSize(arg0: Number): void;

getStepSize(): Number;

getNextValue(): Object;

getPreviousValue(): Object;

getNumber(): Number;

getValue(): Object;

setValue(arg0: Object): void;
 }

export abstract class Spring {
static UNSET:number

abstract getMinimumValue(): number;

abstract getPreferredValue(): number;

abstract getMaximumValue(): number;

abstract getValue(): number;

abstract setValue(arg0: number): void;

static constant(arg0: number): Spring;

static constant(arg0: number, arg1: number, arg2: number): Spring;

static minus(arg0: Spring): Spring;

static sum(arg0: Spring, arg1: Spring): Spring;

static max(arg0: Spring, arg1: Spring): Spring;

static scale(arg0: Spring, arg1: number): Spring;

static width(arg0: Component): Spring;

static height(arg0: Component): Spring;
 }

export class SpringLayout implements LayoutManager2 {
static NORTH:String
static SOUTH:String
static EAST:String
static WEST:String
static HORIZONTAL_CENTER:String
static VERTICAL_CENTER:String
static BASELINE:String
static WIDTH:String
static HEIGHT:String
constructor();

addLayoutComponent(arg0: String, arg1: Component): void;

removeLayoutComponent(arg0: Component): void;

minimumLayoutSize(arg0: Container): Dimension;

preferredLayoutSize(arg0: Container): Dimension;

maximumLayoutSize(arg0: Container): Dimension;

addLayoutComponent(arg0: Component, arg1: Object): void;

getLayoutAlignmentX(arg0: Container): number;

getLayoutAlignmentY(arg0: Container): number;

invalidateLayout(arg0: Container): void;

putConstraint(arg0: String, arg1: Component, arg2: number, arg3: String, arg4: Component): void;

putConstraint(arg0: String, arg1: Component, arg2: Spring, arg3: String, arg4: Component): void;

getConstraints(arg0: Component): SpringLayout.Constraints;

getConstraint(arg0: String, arg1: Component): Spring;

layoutContainer(arg0: Container): void;
 }
export namespace SpringLayout { 
export class Constraints {
constructor();
constructor(arg0: Spring, arg1: Spring);
constructor(arg0: Spring, arg1: Spring, arg2: Spring, arg3: Spring);
constructor(arg0: Component);

setX(arg0: Spring): void;

getX(): Spring;

setY(arg0: Spring): void;

getY(): Spring;

setWidth(arg0: Spring): void;

getWidth(): Spring;

setHeight(arg0: Spring): void;

getHeight(): Spring;

setConstraint(arg0: String, arg1: Spring): void;

getConstraint(arg0: String): Spring;
 }

}

export namespace SwingConstants { 
const CENTER:number
const TOP:number
const LEFT:number
const BOTTOM:number
const RIGHT:number
const NORTH:number
const NORTH_EAST:number
const EAST:number
const SOUTH_EAST:number
const SOUTH:number
const SOUTH_WEST:number
const WEST:number
const NORTH_WEST:number
const HORIZONTAL:number
const VERTICAL:number
const LEADING:number
const TRAILING:number
const NEXT:number
const PREVIOUS:number
}

export interface SwingConstants {
CENTER:number
TOP:number
LEFT:number
BOTTOM:number
RIGHT:number
NORTH:number
NORTH_EAST:number
EAST:number
SOUTH_EAST:number
SOUTH:number
SOUTH_WEST:number
WEST:number
NORTH_WEST:number
HORIZONTAL:number
VERTICAL:number
LEADING:number
TRAILING:number
NEXT:number
PREVIOUS:number
 }


export class SwingUtilities implements SwingConstants {

static isRectangleContainingRectangle(arg0: Rectangle, arg1: Rectangle): boolean;

static getLocalBounds(arg0: Component): Rectangle;

static getWindowAncestor(arg0: Component): Window;

static convertPoint(arg0: Component, arg1: Point, arg2: Component): Point;

static convertPoint(arg0: Component, arg1: number, arg2: number, arg3: Component): Point;

static convertRectangle(arg0: Component, arg1: Rectangle, arg2: Component): Rectangle;

static getAncestorOfClass(arg0: Class<any>, arg1: Component): Container;

static getAncestorNamed(arg0: String, arg1: Component): Container;

static getDeepestComponentAt(arg0: Component, arg1: number, arg2: number): Component;

static convertMouseEvent(arg0: Component, arg1: MouseEvent, arg2: Component): MouseEvent;

static convertPointToScreen(arg0: Point, arg1: Component): void;

static convertPointFromScreen(arg0: Point, arg1: Component): void;

static windowForComponent(arg0: Component): Window;

static isDescendingFrom(arg0: Component, arg1: Component): boolean;

static computeIntersection(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Rectangle): Rectangle;

static computeUnion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Rectangle): Rectangle;

static computeDifference(arg0: Rectangle, arg1: Rectangle): Rectangle[];

static isLeftMouseButton(arg0: MouseEvent): boolean;

static isMiddleMouseButton(arg0: MouseEvent): boolean;

static isRightMouseButton(arg0: MouseEvent): boolean;

static computeStringWidth(arg0: FontMetrics, arg1: String): number;

static layoutCompoundLabel(arg0: JComponent, arg1: FontMetrics, arg2: String, arg3: Icon, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Rectangle, arg9: Rectangle, arg10: Rectangle, arg11: number): String;

static layoutCompoundLabel(arg0: FontMetrics, arg1: String, arg2: Icon, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Rectangle, arg8: Rectangle, arg9: Rectangle, arg10: number): String;

static paintComponent(arg0: Graphics, arg1: Component, arg2: Container, arg3: number, arg4: number, arg5: number, arg6: number): void;

static paintComponent(arg0: Graphics, arg1: Component, arg2: Container, arg3: Rectangle): void;

static updateComponentTreeUI(arg0: Component): void;

static invokeLater(arg0: Runnable): void;

static invokeAndWait(arg0: Runnable): void;

static isEventDispatchThread(): boolean;

static getAccessibleIndexInParent(arg0: Component): number;

static getAccessibleAt(arg0: Component, arg1: Point): Accessible;

static getAccessibleStateSet(arg0: Component): AccessibleStateSet;

static getAccessibleChildrenCount(arg0: Component): number;

static getAccessibleChild(arg0: Component, arg1: number): Accessible;

static findFocusOwner(arg0: Component): Component;

static getRootPane(arg0: Component): JRootPane;

static getRoot(arg0: Component): Component;

static processKeyBindings(arg0: KeyEvent): boolean;

static notifyAction(arg0: Action, arg1: KeyStroke, arg2: KeyEvent, arg3: Object, arg4: number): boolean;

static replaceUIInputMap(arg0: JComponent, arg1: number, arg2: InputMap): void;

static replaceUIActionMap(arg0: JComponent, arg1: ActionMap): void;

static getUIInputMap(arg0: JComponent, arg1: number): InputMap;

static getUIActionMap(arg0: JComponent): ActionMap;

static calculateInnerArea(arg0: JComponent, arg1: Rectangle): Rectangle;

static getUnwrappedParent(arg0: Component): Container;

static getUnwrappedView(arg0: JViewport): Component;
 }

export abstract class SwingWorker<T extends Object, V extends Object> extends Object implements RunnableFuture<T> {
constructor();

run(): void;

getProgress(): number;

execute(): void;

cancel(arg0: boolean): boolean;

isCancelled(): boolean;

isDone(): boolean;

get(): T;

get(arg0: number, arg1: TimeUnit): T;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

firePropertyChange(arg0: String, arg1: Object, arg2: Object): void;

getPropertyChangeSupport(): PropertyChangeSupport;

getState(): SwingWorker.StateValue;
 }
export namespace SwingWorker { 
export class StateValue extends Enum<SwingWorker.StateValue> {
static PENDING:SwingWorker.StateValue
static STARTED:SwingWorker.StateValue
static DONE:SwingWorker.StateValue

static values(): SwingWorker.StateValue[];

static valueOf(arg0: String): SwingWorker.StateValue;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class Timer implements Serializable {
constructor(arg0: number, arg1: ActionListener);

addActionListener(arg0: ActionListener): void;

removeActionListener(arg0: ActionListener): void;

getActionListeners(): ActionListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

static setLogTimers(arg0: boolean): void;

static getLogTimers(): boolean;

setDelay(arg0: number): void;

getDelay(): number;

setInitialDelay(arg0: number): void;

getInitialDelay(): number;

setRepeats(arg0: boolean): void;

isRepeats(): boolean;

setCoalesce(arg0: boolean): void;

isCoalesce(): boolean;

setActionCommand(arg0: String): void;

getActionCommand(): String;

start(): void;

isRunning(): boolean;

stop(): void;

restart(): void;
 }

export class ToolTipManager extends MouseAdapter implements MouseMotionListener {

setEnabled(arg0: boolean): void;

isEnabled(): boolean;

setLightWeightPopupEnabled(arg0: boolean): void;

isLightWeightPopupEnabled(): boolean;

setInitialDelay(arg0: number): void;

getInitialDelay(): number;

setDismissDelay(arg0: number): void;

getDismissDelay(): number;

setReshowDelay(arg0: number): void;

getReshowDelay(): number;

static sharedInstance(): ToolTipManager;

registerComponent(arg0: JComponent): void;

unregisterComponent(arg0: JComponent): void;

mouseEntered(arg0: MouseEvent): void;

mouseExited(arg0: MouseEvent): void;

mousePressed(arg0: MouseEvent): void;

mouseDragged(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;
 }
export namespace ToolTipManager { 
export class insideTimerAction implements ActionListener {

actionPerformed(arg0: ActionEvent): void;
 }

export class outsideTimerAction implements ActionListener {

actionPerformed(arg0: ActionEvent): void;
 }

export class stillInsideTimerAction implements ActionListener {

actionPerformed(arg0: ActionEvent): void;
 }

}

export class TransferHandler implements Serializable {
static NONE:number
static COPY:number
static MOVE:number
static COPY_OR_MOVE:number
static LINK:number
constructor(arg0: String);

static getCutAction(): Action;

static getCopyAction(): Action;

static getPasteAction(): Action;

setDragImage(arg0: Image): void;

getDragImage(): Image;

setDragImageOffset(arg0: Point): void;

getDragImageOffset(): Point;

exportAsDrag(arg0: JComponent, arg1: InputEvent, arg2: number): void;

exportToClipboard(arg0: JComponent, arg1: Clipboard, arg2: number): void;

importData(arg0: TransferHandler.TransferSupport): boolean;

importData(arg0: JComponent, arg1: Transferable): boolean;

canImport(arg0: TransferHandler.TransferSupport): boolean;

canImport(arg0: JComponent, arg1: DataFlavor[]): boolean;

getSourceActions(arg0: JComponent): number;

getVisualRepresentation(arg0: Transferable): Icon;
 }
export namespace TransferHandler { 
export class DropLocation {

getDropPoint(): Point;
toString(): string;
 }

export class TransferSupport {
constructor(arg0: Component, arg1: Transferable);

isDrop(): boolean;

getComponent(): Component;

getDropLocation(): TransferHandler.DropLocation;

setShowDropLocation(arg0: boolean): void;

setDropAction(arg0: number): void;

getDropAction(): number;

getUserDropAction(): number;

getSourceDropActions(): number;

getDataFlavors(): DataFlavor[];

isDataFlavorSupported(arg0: DataFlavor): boolean;

getTransferable(): Transferable;
 }

}

export interface UIClientPropertyKey {
 }

export interface UIDefaults { }
export class UIDefaults extends Hashtable<Object, Object> {
constructor();
constructor(arg0: number, arg1: number);
constructor(arg0: Object[]);

get(arg0: Object): Object;

get(arg0: Object, arg1: Locale): Object;

put(arg0: Object, arg1: Object): Object;

putDefaults(arg0: Object[]): void;

getFont(arg0: Object): Font;

getFont(arg0: Object, arg1: Locale): Font;

getColor(arg0: Object): Color;

getColor(arg0: Object, arg1: Locale): Color;

getIcon(arg0: Object): Icon;

getIcon(arg0: Object, arg1: Locale): Icon;

getBorder(arg0: Object): Border;

getBorder(arg0: Object, arg1: Locale): Border;

getString(arg0: Object): String;

getString(arg0: Object, arg1: Locale): String;

getInt(arg0: Object): number;

getInt(arg0: Object, arg1: Locale): number;

getBoolean(arg0: Object): boolean;

getBoolean(arg0: Object, arg1: Locale): boolean;

getInsets(arg0: Object): Insets;

getInsets(arg0: Object, arg1: Locale): Insets;

getDimension(arg0: Object): Dimension;

getDimension(arg0: Object, arg1: Locale): Dimension;

getUIClass(arg0: String, arg1: ClassLoader): Class<ComponentUI>;

getUIClass(arg0: String): Class<ComponentUI>;

getUI(arg0: JComponent): ComponentUI;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

getPropertyChangeListeners(): PropertyChangeListener[];

addResourceBundle(arg0: String): void;

removeResourceBundle(arg0: String): void;

setDefaultLocale(arg0: Locale): void;

getDefaultLocale(): Locale;
 }
export namespace UIDefaults { 
export interface ActiveValue {

createValue(arg0: UIDefaults): Object;
 }

export class LazyInputMap implements UIDefaults.LazyValue {
constructor(arg0: Object[]);

createValue(arg0: UIDefaults): Object;
 }

export interface LazyValue {

createValue(arg0: UIDefaults): Object;
 }

export class ProxyLazyValue implements UIDefaults.LazyValue {
constructor(arg0: String);
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: Object[]);
constructor(arg0: String, arg1: String, arg2: Object[]);

createValue(arg0: UIDefaults): Object;
 }

}

export class UIManager implements Serializable {
constructor();

static getInstalledLookAndFeels(): UIManager.LookAndFeelInfo[];

static setInstalledLookAndFeels(arg0: UIManager.LookAndFeelInfo[]): void;

static installLookAndFeel(arg0: UIManager.LookAndFeelInfo): void;

static installLookAndFeel(arg0: String, arg1: String): void;

static getLookAndFeel(): LookAndFeel;

static createLookAndFeel(arg0: String): LookAndFeel;

static setLookAndFeel(arg0: LookAndFeel): void;

static setLookAndFeel(arg0: String): void;

static getSystemLookAndFeelClassName(): String;

static getCrossPlatformLookAndFeelClassName(): String;

static getDefaults(): UIDefaults;

static getFont(arg0: Object): Font;

static getFont(arg0: Object, arg1: Locale): Font;

static getColor(arg0: Object): Color;

static getColor(arg0: Object, arg1: Locale): Color;

static getIcon(arg0: Object): Icon;

static getIcon(arg0: Object, arg1: Locale): Icon;

static getBorder(arg0: Object): Border;

static getBorder(arg0: Object, arg1: Locale): Border;

static getString(arg0: Object): String;

static getString(arg0: Object, arg1: Locale): String;

static getInt(arg0: Object): number;

static getInt(arg0: Object, arg1: Locale): number;

static getBoolean(arg0: Object): boolean;

static getBoolean(arg0: Object, arg1: Locale): boolean;

static getInsets(arg0: Object): Insets;

static getInsets(arg0: Object, arg1: Locale): Insets;

static getDimension(arg0: Object): Dimension;

static getDimension(arg0: Object, arg1: Locale): Dimension;

static get(arg0: Object): Object;

static get(arg0: Object, arg1: Locale): Object;

static put(arg0: Object, arg1: Object): Object;

static getUI(arg0: JComponent): ComponentUI;

static getLookAndFeelDefaults(): UIDefaults;

static addAuxiliaryLookAndFeel(arg0: LookAndFeel): void;

static removeAuxiliaryLookAndFeel(arg0: LookAndFeel): boolean;

static getAuxiliaryLookAndFeels(): LookAndFeel[];

static addPropertyChangeListener(arg0: PropertyChangeListener): void;

static removePropertyChangeListener(arg0: PropertyChangeListener): void;

static getPropertyChangeListeners(): PropertyChangeListener[];
 }
export namespace UIManager { 
export class LookAndFeelInfo {
constructor(arg0: String, arg1: String);

getName(): String;

getClassName(): String;
toString(): string;
 }

}

export class UnsupportedLookAndFeelException extends Exception {
constructor(arg0: String);
 }

export class ViewportLayout implements LayoutManager, Serializable {
constructor();

addLayoutComponent(arg0: String, arg1: Component): void;

removeLayoutComponent(arg0: Component): void;

preferredLayoutSize(arg0: Container): Dimension;

minimumLayoutSize(arg0: Container): Dimension;

layoutContainer(arg0: Container): void;
 }

export namespace WindowConstants { 
const DO_NOTHING_ON_CLOSE:number
const HIDE_ON_CLOSE:number
const DISPOSE_ON_CLOSE:number
const EXIT_ON_CLOSE:number
}

export interface WindowConstants {
DO_NOTHING_ON_CLOSE:number
HIDE_ON_CLOSE:number
DISPOSE_ON_CLOSE:number
EXIT_ON_CLOSE:number
 }

}
