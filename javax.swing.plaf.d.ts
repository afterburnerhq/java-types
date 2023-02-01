/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="javax.accessibility.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.awt.geom.d.ts" />
/// <reference path="java.beans.d.ts" />
/// <reference path="java.awt.event.d.ts" />
/// <reference path="javax.swing.border.d.ts" />
/// <reference path="javax.swing.tree.d.ts" />
/// <reference path="javax.swing.filechooser.d.ts" />
/// <reference path="javax.swing.text.d.ts" />
/// <reference path="javax.swing.d.ts" />
declare module '@afterburnerhq/javax.swing.plaf' { 
import { Graphics, Insets, Color, Rectangle, AWTEvent, Dimension, Point, Component, Image, Font } from '@afterburnerhq/java.awt'
import { String } from '@afterburnerhq/java.lang'
import { Accessible } from '@afterburnerhq/javax.accessibility'
import { File, Serializable } from '@afterburnerhq/java.io'
import { Rectangle2D, Point2D } from '@afterburnerhq/java.awt.geom'
import { PropertyChangeListener, PropertyChangeEvent } from '@afterburnerhq/java.beans'
import { MouseEvent } from '@afterburnerhq/java.awt.event'
import { EtchedBorder, MatteBorder, BevelBorder, LineBorder, CompoundBorder, EmptyBorder, TitledBorder, Border } from '@afterburnerhq/javax.swing.border'
import { TreePath } from '@afterburnerhq/javax.swing.tree'
import { FileFilter, FileView } from '@afterburnerhq/javax.swing.filechooser'
import { EditorKit, JTextComponent, Position, View } from '@afterburnerhq/javax.swing.text'
import { JComboBox, JLayer, ActionMap, JTabbedPane, JComponent, JButton, JOptionPane, ComponentInputMap, JPopupMenu, JTree, JFileChooser, Popup, InputMap, Icon, JSplitPane, JList } from '@afterburnerhq/javax.swing'
export class ActionMapUIResource extends ActionMap implements UIResource {
constructor();
 }

export class BorderUIResource implements Border, UIResource, Serializable {
constructor(arg0: Border);

static getEtchedBorderUIResource(): Border;

static getLoweredBevelBorderUIResource(): Border;

static getRaisedBevelBorderUIResource(): Border;

static getBlackLineBorderUIResource(): Border;

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component): Insets;

isBorderOpaque(): boolean;
 }
export namespace BorderUIResource { 
export class BevelBorderUIResource extends BevelBorder implements UIResource {
constructor(arg0: number);
constructor(arg0: number, arg1: Color, arg2: Color);
constructor(arg0: number, arg1: Color, arg2: Color, arg3: Color, arg4: Color);
 }

export class CompoundBorderUIResource extends CompoundBorder implements UIResource {
constructor(arg0: Border, arg1: Border);
 }

export class EmptyBorderUIResource extends EmptyBorder implements UIResource {
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
constructor(arg0: Insets);
 }

export class EtchedBorderUIResource extends EtchedBorder implements UIResource {
constructor();
constructor(arg0: number);
constructor(arg0: Color, arg1: Color);
constructor(arg0: number, arg1: Color, arg2: Color);
 }

export class LineBorderUIResource extends LineBorder implements UIResource {
constructor(arg0: Color);
constructor(arg0: Color, arg1: number);
 }

export class MatteBorderUIResource extends MatteBorder implements UIResource {
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Color);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Icon);
constructor(arg0: Icon);
 }

export class TitledBorderUIResource extends TitledBorder implements UIResource {
constructor(arg0: String);
constructor(arg0: Border);
constructor(arg0: Border, arg1: String);
constructor(arg0: Border, arg1: String, arg2: number, arg3: number);
constructor(arg0: Border, arg1: String, arg2: number, arg3: number, arg4: Font);
constructor(arg0: Border, arg1: String, arg2: number, arg3: number, arg4: Font, arg5: Color);
 }

}

export abstract class ButtonUI extends ComponentUI {
 }

export abstract class ColorChooserUI extends ComponentUI {
 }

export class ColorUIResource extends Color implements UIResource {
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number);
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: Color);
 }

export abstract class ComboBoxUI extends ComponentUI {

abstract setPopupVisible(arg0: JComboBox<any>, arg1: boolean): void;

abstract isPopupVisible(arg0: JComboBox<any>): boolean;

abstract isFocusTraversable(arg0: JComboBox<any>): boolean;
 }

export class ComponentInputMapUIResource extends ComponentInputMap implements UIResource {
constructor(arg0: JComponent);
 }

export abstract class ComponentUI {
constructor();

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

update(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

static createUI(arg0: JComponent): ComponentUI;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

getBaselineResizeBehavior(arg0: JComponent): Component.BaselineResizeBehavior;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export abstract class DesktopIconUI extends ComponentUI {
 }

export abstract class DesktopPaneUI extends ComponentUI {
 }

export class DimensionUIResource extends Dimension implements UIResource {
constructor(arg0: number, arg1: number);
 }

export abstract class FileChooserUI extends ComponentUI {

abstract getAcceptAllFileFilter(arg0: JFileChooser): FileFilter;

abstract getFileView(arg0: JFileChooser): FileView;

abstract getApproveButtonText(arg0: JFileChooser): String;

abstract getDialogTitle(arg0: JFileChooser): String;

abstract rescanCurrentDirectory(arg0: JFileChooser): void;

abstract ensureFileIsVisible(arg0: JFileChooser, arg1: File): void;

getDefaultButton(arg0: JFileChooser): JButton;
 }

export class FontUIResource extends Font implements UIResource {
constructor(arg0: String, arg1: number, arg2: number);
constructor(arg0: Font);
 }

export class IconUIResource implements Icon, UIResource, Serializable {
constructor(arg0: Icon);

paintIcon(arg0: Component, arg1: Graphics, arg2: number, arg3: number): void;

getIconWidth(): number;

getIconHeight(): number;
 }

export class InputMapUIResource extends InputMap implements UIResource {
constructor();
 }

export class InsetsUIResource extends Insets implements UIResource {
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
 }

export abstract class InternalFrameUI extends ComponentUI {
 }

export abstract class LabelUI extends ComponentUI {
 }

export class LayerUI<V extends Component> extends ComponentUI implements Serializable {
constructor();

paint(arg0: Graphics, arg1: JComponent): void;

eventDispatched(arg0: AWTEvent, arg1: JLayer<V>): void;

updateUI(arg0: JLayer<V>): void;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

getPropertyChangeListeners(): PropertyChangeListener[];

addPropertyChangeListener(arg0: String, arg1: PropertyChangeListener): void;

removePropertyChangeListener(arg0: String, arg1: PropertyChangeListener): void;

getPropertyChangeListeners(arg0: String): PropertyChangeListener[];

applyPropertyChange(arg0: PropertyChangeEvent, arg1: JLayer<V>): void;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

getBaselineResizeBehavior(arg0: JComponent): Component.BaselineResizeBehavior;

doLayout(arg0: JLayer<V>): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

paintImmediately(arg0: number, arg1: number, arg2: number, arg3: number, arg4: JLayer<V>): void;

imageUpdate(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: JLayer<V>): boolean;
 }

export abstract class ListUI extends ComponentUI {

abstract locationToIndex(arg0: JList<any>, arg1: Point): number;

abstract indexToLocation(arg0: JList<any>, arg1: number): Point;

abstract getCellBounds(arg0: JList<any>, arg1: number, arg2: number): Rectangle;
 }

export abstract class MenuBarUI extends ComponentUI {
 }

export abstract class MenuItemUI extends ButtonUI {
 }

export abstract class OptionPaneUI extends ComponentUI {

abstract selectInitialValue(arg0: JOptionPane): void;

abstract containsCustomComponents(arg0: JOptionPane): boolean;
 }

export abstract class PanelUI extends ComponentUI {
 }

export abstract class PopupMenuUI extends ComponentUI {

isPopupTrigger(arg0: MouseEvent): boolean;

getPopup(arg0: JPopupMenu, arg1: number, arg2: number): Popup;
 }

export abstract class ProgressBarUI extends ComponentUI {
 }

export abstract class RootPaneUI extends ComponentUI {
 }

export abstract class ScrollBarUI extends ComponentUI {
 }

export abstract class ScrollPaneUI extends ComponentUI {
 }

export abstract class SeparatorUI extends ComponentUI {
 }

export abstract class SliderUI extends ComponentUI {
 }

export abstract class SpinnerUI extends ComponentUI {
 }

export abstract class SplitPaneUI extends ComponentUI {

abstract resetToPreferredSizes(arg0: JSplitPane): void;

abstract setDividerLocation(arg0: JSplitPane, arg1: number): void;

abstract getDividerLocation(arg0: JSplitPane): number;

abstract getMinimumDividerLocation(arg0: JSplitPane): number;

abstract getMaximumDividerLocation(arg0: JSplitPane): number;

abstract finishedPaintingChildren(arg0: JSplitPane, arg1: Graphics): void;
 }

export abstract class TabbedPaneUI extends ComponentUI {

abstract tabForCoordinate(arg0: JTabbedPane, arg1: number, arg2: number): number;

abstract getTabBounds(arg0: JTabbedPane, arg1: number): Rectangle;

abstract getTabRunCount(arg0: JTabbedPane): number;
 }

export abstract class TableHeaderUI extends ComponentUI {
 }

export abstract class TableUI extends ComponentUI {
 }

export abstract class TextUI extends ComponentUI {

abstract modelToView(arg0: JTextComponent, arg1: number): Rectangle;

abstract modelToView(arg0: JTextComponent, arg1: number, arg2: Position.Bias): Rectangle;

modelToView2D(arg0: JTextComponent, arg1: number, arg2: Position.Bias): Rectangle2D;

abstract viewToModel(arg0: JTextComponent, arg1: Point): number;

abstract viewToModel(arg0: JTextComponent, arg1: Point, arg2: Position.Bias[]): number;

viewToModel2D(arg0: JTextComponent, arg1: Point2D, arg2: Position.Bias[]): number;

abstract getNextVisualPositionFrom(arg0: JTextComponent, arg1: number, arg2: Position.Bias, arg3: number, arg4: Position.Bias[]): number;

abstract damageRange(arg0: JTextComponent, arg1: number, arg2: number): void;

abstract damageRange(arg0: JTextComponent, arg1: number, arg2: number, arg3: Position.Bias, arg4: Position.Bias): void;

abstract getEditorKit(arg0: JTextComponent): EditorKit;

abstract getRootView(arg0: JTextComponent): View;

getToolTipText(arg0: JTextComponent, arg1: Point): String;

getToolTipText2D(arg0: JTextComponent, arg1: Point2D): String;
 }

export abstract class ToolBarUI extends ComponentUI {
 }

export abstract class ToolTipUI extends ComponentUI {
 }

export abstract class TreeUI extends ComponentUI {

abstract getPathBounds(arg0: JTree, arg1: TreePath): Rectangle;

abstract getPathForRow(arg0: JTree, arg1: number): TreePath;

abstract getRowForPath(arg0: JTree, arg1: TreePath): number;

abstract getRowCount(arg0: JTree): number;

abstract getClosestPathForLocation(arg0: JTree, arg1: number, arg2: number): TreePath;

abstract isEditing(arg0: JTree): boolean;

abstract stopEditing(arg0: JTree): boolean;

abstract cancelEditing(arg0: JTree): void;

abstract startEditingAtPath(arg0: JTree, arg1: TreePath): void;

abstract getEditingPath(arg0: JTree): TreePath;
 }

export interface UIResource {
 }

export abstract class ViewportUI extends ComponentUI {
 }

}
