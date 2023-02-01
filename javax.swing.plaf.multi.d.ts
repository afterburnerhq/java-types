/// <reference path="java.awt.d.ts" />
/// <reference path="javax.accessibility.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="javax.swing.plaf.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.awt.geom.d.ts" />
/// <reference path="java.awt.event.d.ts" />
/// <reference path="javax.swing.tree.d.ts" />
/// <reference path="javax.swing.filechooser.d.ts" />
/// <reference path="javax.swing.text.d.ts" />
/// <reference path="javax.swing.d.ts" />
declare module '@afterburnerhq/javax.swing.plaf.multi' { 
import { Graphics, Rectangle, Dimension, Point } from '@afterburnerhq/java.awt'
import { Accessible } from '@afterburnerhq/javax.accessibility'
import { String } from '@afterburnerhq/java.lang'
import { Vector } from '@afterburnerhq/java.util'
import { DesktopIconUI, InternalFrameUI, ToolBarUI, PanelUI, ToolTipUI, ViewportUI, ScrollPaneUI, PopupMenuUI, ComponentUI, SliderUI, ProgressBarUI, FileChooserUI, SpinnerUI, TableHeaderUI, ColorChooserUI, LabelUI, SeparatorUI, TabbedPaneUI, ScrollBarUI, TreeUI, OptionPaneUI, DesktopPaneUI, ButtonUI, RootPaneUI, TableUI, MenuItemUI, SplitPaneUI, ComboBoxUI, MenuBarUI, ListUI, TextUI } from '@afterburnerhq/javax.swing.plaf'
import { File } from '@afterburnerhq/java.io'
import { Rectangle2D, Point2D } from '@afterburnerhq/java.awt.geom'
import { MouseEvent } from '@afterburnerhq/java.awt.event'
import { TreePath } from '@afterburnerhq/javax.swing.tree'
import { FileFilter, FileView } from '@afterburnerhq/javax.swing.filechooser'
import { EditorKit, JTextComponent, Position, View } from '@afterburnerhq/javax.swing.text'
import { UIDefaults, JTree, JComboBox, JFileChooser, Popup, JTabbedPane, JComponent, JSplitPane, LookAndFeel, JOptionPane, JList, JPopupMenu } from '@afterburnerhq/javax.swing'
export class MultiButtonUI extends ButtonUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiColorChooserUI extends ColorChooserUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiComboBoxUI extends ComboBoxUI {
constructor();

getUIs(): ComponentUI[];

isFocusTraversable(arg0: JComboBox<any>): boolean;

setPopupVisible(arg0: JComboBox<any>, arg1: boolean): void;

isPopupVisible(arg0: JComboBox<any>): boolean;

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiDesktopIconUI extends DesktopIconUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiDesktopPaneUI extends DesktopPaneUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiFileChooserUI extends FileChooserUI {
constructor();

getUIs(): ComponentUI[];

getAcceptAllFileFilter(arg0: JFileChooser): FileFilter;

getFileView(arg0: JFileChooser): FileView;

getApproveButtonText(arg0: JFileChooser): String;

getDialogTitle(arg0: JFileChooser): String;

rescanCurrentDirectory(arg0: JFileChooser): void;

ensureFileIsVisible(arg0: JFileChooser, arg1: File): void;

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiInternalFrameUI extends InternalFrameUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiLabelUI extends LabelUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiListUI extends ListUI {
constructor();

getUIs(): ComponentUI[];

locationToIndex(arg0: JList<any>, arg1: Point): number;

indexToLocation(arg0: JList<any>, arg1: number): Point;

getCellBounds(arg0: JList<any>, arg1: number, arg2: number): Rectangle;

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiLookAndFeel extends LookAndFeel {
constructor();

getName(): String;

getID(): String;

getDescription(): String;

isNativeLookAndFeel(): boolean;

isSupportedLookAndFeel(): boolean;

getDefaults(): UIDefaults;

static createUIs(arg0: ComponentUI, arg1: Vector<ComponentUI>, arg2: JComponent): ComponentUI;
 }

export class MultiMenuBarUI extends MenuBarUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiMenuItemUI extends MenuItemUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiOptionPaneUI extends OptionPaneUI {
constructor();

getUIs(): ComponentUI[];

selectInitialValue(arg0: JOptionPane): void;

containsCustomComponents(arg0: JOptionPane): boolean;

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiPanelUI extends PanelUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiPopupMenuUI extends PopupMenuUI {
constructor();

getUIs(): ComponentUI[];

isPopupTrigger(arg0: MouseEvent): boolean;

getPopup(arg0: JPopupMenu, arg1: number, arg2: number): Popup;

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiProgressBarUI extends ProgressBarUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiRootPaneUI extends RootPaneUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiScrollBarUI extends ScrollBarUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiScrollPaneUI extends ScrollPaneUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiSeparatorUI extends SeparatorUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiSliderUI extends SliderUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiSpinnerUI extends SpinnerUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiSplitPaneUI extends SplitPaneUI {
constructor();

getUIs(): ComponentUI[];

resetToPreferredSizes(arg0: JSplitPane): void;

setDividerLocation(arg0: JSplitPane, arg1: number): void;

getDividerLocation(arg0: JSplitPane): number;

getMinimumDividerLocation(arg0: JSplitPane): number;

getMaximumDividerLocation(arg0: JSplitPane): number;

finishedPaintingChildren(arg0: JSplitPane, arg1: Graphics): void;

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiTabbedPaneUI extends TabbedPaneUI {
constructor();

getUIs(): ComponentUI[];

tabForCoordinate(arg0: JTabbedPane, arg1: number, arg2: number): number;

getTabBounds(arg0: JTabbedPane, arg1: number): Rectangle;

getTabRunCount(arg0: JTabbedPane): number;

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiTableHeaderUI extends TableHeaderUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiTableUI extends TableUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiTextUI extends TextUI {
constructor();

getUIs(): ComponentUI[];

getToolTipText(arg0: JTextComponent, arg1: Point): String;

modelToView(arg0: JTextComponent, arg1: number): Rectangle;

modelToView(arg0: JTextComponent, arg1: number, arg2: Position.Bias): Rectangle;

modelToView2D(arg0: JTextComponent, arg1: number, arg2: Position.Bias): Rectangle2D;

viewToModel(arg0: JTextComponent, arg1: Point): number;

viewToModel(arg0: JTextComponent, arg1: Point, arg2: Position.Bias[]): number;

viewToModel2D(arg0: JTextComponent, arg1: Point2D, arg2: Position.Bias[]): number;

getNextVisualPositionFrom(arg0: JTextComponent, arg1: number, arg2: Position.Bias, arg3: number, arg4: Position.Bias[]): number;

damageRange(arg0: JTextComponent, arg1: number, arg2: number): void;

damageRange(arg0: JTextComponent, arg1: number, arg2: number, arg3: Position.Bias, arg4: Position.Bias): void;

getEditorKit(arg0: JTextComponent): EditorKit;

getRootView(arg0: JTextComponent): View;

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiToolBarUI extends ToolBarUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiToolTipUI extends ToolTipUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiTreeUI extends TreeUI {
constructor();

getUIs(): ComponentUI[];

getPathBounds(arg0: JTree, arg1: TreePath): Rectangle;

getPathForRow(arg0: JTree, arg1: number): TreePath;

getRowForPath(arg0: JTree, arg1: TreePath): number;

getRowCount(arg0: JTree): number;

getClosestPathForLocation(arg0: JTree, arg1: number, arg2: number): TreePath;

isEditing(arg0: JTree): boolean;

stopEditing(arg0: JTree): boolean;

cancelEditing(arg0: JTree): void;

startEditingAtPath(arg0: JTree, arg1: TreePath): void;

getEditingPath(arg0: JTree): TreePath;

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

export class MultiViewportUI extends ViewportUI {
constructor();

getUIs(): ComponentUI[];

contains(arg0: JComponent, arg1: number, arg2: number): boolean;

update(arg0: Graphics, arg1: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;
 }

}
