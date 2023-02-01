/// <reference path="java.util.d.ts" />
/// <reference path="java.awt.geom.d.ts" />
/// <reference path="java.beans.d.ts" />
/// <reference path="javax.swing.event.d.ts" />
/// <reference path="javax.swing.text.d.ts" />
/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="javax.accessibility.d.ts" />
/// <reference path="javax.swing.plaf.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.awt.event.d.ts" />
/// <reference path="javax.swing.border.d.ts" />
/// <reference path="javax.swing.tree.d.ts" />
/// <reference path="javax.swing.filechooser.d.ts" />
/// <reference path="javax.swing.d.ts" />
declare module '@afterburnerhq/javax.swing.plaf.basic' { 
import { Vector } from '@afterburnerhq/java.util'
import { Rectangle2D, Point2D } from '@afterburnerhq/java.awt.geom'
import { PropertyChangeListener, PropertyChangeEvent } from '@afterburnerhq/java.beans'
import { InternalFrameListener, TreeExpansionListener, TreeModelEvent, TreeModelListener, ListSelectionEvent, InternalFrameEvent, CellEditorListener, TreeSelectionListener, ListDataListener, ListSelectionListener, ListDataEvent, ChangeEvent, MouseInputListener, ChangeListener, TreeSelectionEvent, MouseInputAdapter, TreeExpansionEvent } from '@afterburnerhq/javax.swing.event'
import { EditorKit, DefaultCaret, Position, Element, ViewFactory, DefaultHighlighter, JTextComponent, View } from '@afterburnerhq/javax.swing.text'
import { Window, Insets, Color, Rectangle, Dimension, Point, LayoutManager2, Graphics2D, Graphics, Container, LayoutManager, FontMetrics, Component } from '@afterburnerhq/java.awt'
import { Boolean, String } from '@afterburnerhq/java.lang'
import { AccessibleContext, Accessible } from '@afterburnerhq/javax.accessibility'
import { DesktopIconUI, InternalFrameUI, ToolBarUI, PanelUI, ToolTipUI, ViewportUI, ScrollPaneUI, PopupMenuUI, ComponentUI, SliderUI, ProgressBarUI, FileChooserUI, SpinnerUI, TableHeaderUI, ColorChooserUI, LabelUI, SeparatorUI, TabbedPaneUI, ScrollBarUI, TreeUI, OptionPaneUI, DesktopPaneUI, ButtonUI, RootPaneUI, TableUI, UIResource, MenuItemUI, SplitPaneUI, ComboBoxUI, MenuBarUI, ListUI, TextUI } from '@afterburnerhq/javax.swing.plaf'
import { File, Serializable } from '@afterburnerhq/java.io'
import { ContainerEvent, ComponentListener, FocusAdapter, ItemEvent, MouseEvent, ActionEvent, KeyAdapter, MouseAdapter, WindowAdapter, MouseWheelListener, MouseMotionListener, FocusEvent, KeyEvent, MouseMotionAdapter, MouseListener, ActionListener, MouseWheelEvent, WindowEvent, ContainerListener, ItemListener, KeyListener, ComponentEvent, FocusListener, ComponentAdapter } from '@afterburnerhq/java.awt.event'
import { Border, AbstractBorder } from '@afterburnerhq/javax.swing.border'
import { TreePath, AbstractLayoutCache } from '@afterburnerhq/javax.swing.tree'
import { FileFilter, FileView } from '@afterburnerhq/javax.swing.filechooser'
import { JPanel, Action, JTabbedPane, BoxLayout, JButton, MenuElement, ComboBoxEditor, LookAndFeel, SwingConstants, MenuSelectionManager, ListCellRenderer, JSlider, JMenuItem, AbstractAction, UIDefaults, AbstractButton, JComboBox, JComponent, JLabel, JToolBar, AbstractListModel, JOptionPane, JPopupMenu, ScrollPaneConstants, JTree, JFileChooser, Icon, JSplitPane, JInternalFrame, JList, JMenuBar, JMenu } from '@afterburnerhq/javax.swing'
export class BasicArrowButton extends JButton implements SwingConstants {
constructor(arg0: number, arg1: Color, arg2: Color, arg3: Color, arg4: Color);
constructor(arg0: number);

getDirection(): number;

setDirection(arg0: number): void;

paint(arg0: Graphics): void;

getPreferredSize(): Dimension;

getMinimumSize(): Dimension;

getMaximumSize(): Dimension;

isFocusTraversable(): boolean;

paintTriangle(arg0: Graphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): void;
 }

export class BasicBorders {
constructor();

static getButtonBorder(): Border;

static getRadioButtonBorder(): Border;

static getToggleButtonBorder(): Border;

static getMenuBarBorder(): Border;

static getSplitPaneBorder(): Border;

static getSplitPaneDividerBorder(): Border;

static getTextFieldBorder(): Border;

static getProgressBarBorder(): Border;

static getInternalFrameBorder(): Border;
 }
export namespace BasicBorders { 
export class ButtonBorder extends AbstractBorder implements UIResource {
constructor(arg0: Color, arg1: Color, arg2: Color, arg3: Color);

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;
 }

export class FieldBorder extends AbstractBorder implements UIResource {
constructor(arg0: Color, arg1: Color, arg2: Color, arg3: Color);

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;
 }

export class MarginBorder extends AbstractBorder implements UIResource {
constructor();

getBorderInsets(arg0: Component, arg1: Insets): Insets;
 }

export class MenuBarBorder extends AbstractBorder implements UIResource {
constructor(arg0: Color, arg1: Color);

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;
 }

export class RadioButtonBorder extends BasicBorders.ButtonBorder {
constructor(arg0: Color, arg1: Color, arg2: Color, arg3: Color);

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;
 }

export class RolloverButtonBorder extends BasicBorders.ButtonBorder {
constructor(arg0: Color, arg1: Color, arg2: Color, arg3: Color);

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;
 }

export class SplitPaneBorder implements Border, UIResource {
constructor(arg0: Color, arg1: Color);

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component): Insets;

isBorderOpaque(): boolean;
 }

export class ToggleButtonBorder extends BasicBorders.ButtonBorder {
constructor(arg0: Color, arg1: Color, arg2: Color, arg3: Color);

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;
 }

}

export class BasicButtonListener implements MouseListener, MouseMotionListener, FocusListener, ChangeListener, PropertyChangeListener {
constructor(arg0: AbstractButton);

propertyChange(arg0: PropertyChangeEvent): void;

installKeyboardActions(arg0: JComponent): void;

uninstallKeyboardActions(arg0: JComponent): void;

stateChanged(arg0: ChangeEvent): void;

focusGained(arg0: FocusEvent): void;

focusLost(arg0: FocusEvent): void;

mouseMoved(arg0: MouseEvent): void;

mouseDragged(arg0: MouseEvent): void;

mouseClicked(arg0: MouseEvent): void;

mousePressed(arg0: MouseEvent): void;

mouseReleased(arg0: MouseEvent): void;

mouseEntered(arg0: MouseEvent): void;

mouseExited(arg0: MouseEvent): void;
 }

export class BasicButtonUI extends ButtonUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

getDefaultTextIconGap(arg0: AbstractButton): number;

paint(arg0: Graphics, arg1: JComponent): void;

getMinimumSize(arg0: JComponent): Dimension;

getPreferredSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

getBaselineResizeBehavior(arg0: JComponent): Component.BaselineResizeBehavior;
 }

export class BasicCheckBoxMenuItemUI extends BasicMenuItemUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

processMouseEvent(arg0: JMenuItem, arg1: MouseEvent, arg2: MenuElement[], arg3: MenuSelectionManager): void;
 }

export class BasicCheckBoxUI extends BasicRadioButtonUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getPropertyPrefix(): String;
 }

export class BasicColorChooserUI extends ColorChooserUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;
 }
export namespace BasicColorChooserUI { 
export class PropertyHandler implements PropertyChangeListener {
constructor(arg0: BasicColorChooserUI);

propertyChange(arg0: PropertyChangeEvent): void;
 }

}

export class BasicComboBoxEditor implements ComboBoxEditor, FocusListener {
constructor();

getEditorComponent(): Component;

setItem(arg0: Object): void;

getItem(): Object;

selectAll(): void;

focusGained(arg0: FocusEvent): void;

focusLost(arg0: FocusEvent): void;

addActionListener(arg0: ActionListener): void;

removeActionListener(arg0: ActionListener): void;
 }
export namespace BasicComboBoxEditor { 
export class UIResource extends BasicComboBoxEditor implements UIResource {
constructor();
 }

}

export class BasicComboBoxRenderer extends JLabel implements ListCellRenderer<Object>, Serializable {
constructor();

getPreferredSize(): Dimension;

getListCellRendererComponent(arg0: JList<any>, arg1: Object, arg2: number, arg3: boolean, arg4: boolean): Component;
 }
export namespace BasicComboBoxRenderer { 
export class UIResource extends BasicComboBoxRenderer implements UIResource {
constructor();
 }

}

export class BasicComboBoxUI extends ComboBoxUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

addEditor(): void;

removeEditor(): void;

configureArrowButton(): void;

unconfigureArrowButton(): void;

isPopupVisible(arg0: JComboBox<any>): boolean;

setPopupVisible(arg0: JComboBox<any>, arg1: boolean): void;

isFocusTraversable(arg0: JComboBox<any>): boolean;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

getBaselineResizeBehavior(arg0: JComponent): Component.BaselineResizeBehavior;

getAccessibleChildrenCount(arg0: JComponent): number;

getAccessibleChild(arg0: JComponent, arg1: number): Accessible;

paintCurrentValue(arg0: Graphics, arg1: Rectangle, arg2: boolean): void;

paintCurrentValueBackground(arg0: Graphics, arg1: Rectangle, arg2: boolean): void;
 }
export namespace BasicComboBoxUI { 
export class ComboBoxLayoutManager implements LayoutManager {
constructor(arg0: BasicComboBoxUI);

addLayoutComponent(arg0: String, arg1: Component): void;

removeLayoutComponent(arg0: Component): void;

preferredLayoutSize(arg0: Container): Dimension;

minimumLayoutSize(arg0: Container): Dimension;

layoutContainer(arg0: Container): void;
 }

export class FocusHandler implements FocusListener {
constructor(arg0: BasicComboBoxUI);

focusGained(arg0: FocusEvent): void;

focusLost(arg0: FocusEvent): void;
 }

export class ItemHandler implements ItemListener {
constructor(arg0: BasicComboBoxUI);

itemStateChanged(arg0: ItemEvent): void;
 }

export class KeyHandler extends KeyAdapter {
constructor(arg0: BasicComboBoxUI);

keyPressed(arg0: KeyEvent): void;
 }

export class ListDataHandler implements ListDataListener {
constructor(arg0: BasicComboBoxUI);

contentsChanged(arg0: ListDataEvent): void;

intervalAdded(arg0: ListDataEvent): void;

intervalRemoved(arg0: ListDataEvent): void;
 }

export class PropertyChangeHandler implements PropertyChangeListener {
constructor(arg0: BasicComboBoxUI);

propertyChange(arg0: PropertyChangeEvent): void;
 }

}

export class BasicComboPopup extends JPopupMenu implements ComboPopup {
constructor(arg0: JComboBox<Object>);

show(): void;

hide(): void;

getList(): JList<Object>;

getMouseListener(): MouseListener;

getMouseMotionListener(): MouseMotionListener;

getKeyListener(): KeyListener;

uninstallingUI(): void;

isFocusTraversable(): boolean;

getAccessibleContext(): AccessibleContext;
 }
export namespace BasicComboPopup { 
export class InvocationKeyHandler extends KeyAdapter {
constructor(arg0: BasicComboPopup);

keyReleased(arg0: KeyEvent): void;
 }

export class InvocationMouseHandler extends MouseAdapter {

mousePressed(arg0: MouseEvent): void;

mouseReleased(arg0: MouseEvent): void;
 }

export class InvocationMouseMotionHandler extends MouseMotionAdapter {

mouseDragged(arg0: MouseEvent): void;
 }

export class ItemHandler implements ItemListener {

itemStateChanged(arg0: ItemEvent): void;
 }

export class ListDataHandler implements ListDataListener {
constructor(arg0: BasicComboPopup);

contentsChanged(arg0: ListDataEvent): void;

intervalAdded(arg0: ListDataEvent): void;

intervalRemoved(arg0: ListDataEvent): void;
 }

export class ListMouseHandler extends MouseAdapter {

mousePressed(arg0: MouseEvent): void;

mouseReleased(arg0: MouseEvent): void;
 }

export class ListMouseMotionHandler extends MouseMotionAdapter {

mouseMoved(arg0: MouseEvent): void;
 }

export class ListSelectionHandler implements ListSelectionListener {

valueChanged(arg0: ListSelectionEvent): void;
 }

export class PropertyChangeHandler implements PropertyChangeListener {

propertyChange(arg0: PropertyChangeEvent): void;
 }

}

export class BasicDesktopIconUI extends DesktopIconUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getInsets(arg0: JComponent): Insets;

deiconize(): void;
 }
export namespace BasicDesktopIconUI { 
export class MouseInputHandler extends MouseInputAdapter {
constructor(arg0: BasicDesktopIconUI);

mouseReleased(arg0: MouseEvent): void;

mousePressed(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;

mouseDragged(arg0: MouseEvent): void;

moveAndRepaint(arg0: JComponent, arg1: number, arg2: number, arg3: number, arg4: number): void;
 }

}

export class BasicDesktopPaneUI extends DesktopPaneUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;
 }
export namespace BasicDesktopPaneUI { 
export interface CloseAction { }
export class CloseAction extends AbstractAction {

actionPerformed(arg0: ActionEvent): void;

isEnabled(): boolean;
 }

export interface MaximizeAction { }
export class MaximizeAction extends AbstractAction {

actionPerformed(arg0: ActionEvent): void;

isEnabled(): boolean;
 }

export interface MinimizeAction { }
export class MinimizeAction extends AbstractAction {

actionPerformed(arg0: ActionEvent): void;

isEnabled(): boolean;
 }

export interface NavigateAction { }
export class NavigateAction extends AbstractAction {

actionPerformed(arg0: ActionEvent): void;

isEnabled(): boolean;
 }

export interface OpenAction { }
export class OpenAction extends AbstractAction {

actionPerformed(arg0: ActionEvent): void;

isEnabled(): boolean;
 }

}

export class BasicDirectoryModel extends AbstractListModel<Object> implements PropertyChangeListener {
constructor(arg0: JFileChooser);

propertyChange(arg0: PropertyChangeEvent): void;

invalidateFileCache(): void;

getDirectories(): Vector<File>;

getFiles(): Vector<File>;

validateFileCache(): void;

renameFile(arg0: File, arg1: File): boolean;

fireContentsChanged(): void;

getSize(): number;

contains(arg0: Object): boolean;

indexOf(arg0: Object): number;

getElementAt(arg0: number): Object;

intervalAdded(arg0: ListDataEvent): void;

intervalRemoved(arg0: ListDataEvent): void;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

getPropertyChangeListeners(): PropertyChangeListener[];
 }

export class BasicEditorPaneUI extends BasicTextUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

getEditorKit(arg0: JTextComponent): EditorKit;
 }

export class BasicFileChooserUI extends FileChooserUI {
constructor(arg0: JFileChooser);

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

installComponents(arg0: JFileChooser): void;

uninstallComponents(arg0: JFileChooser): void;

getModel(): BasicDirectoryModel;

createPropertyChangeListener(arg0: JFileChooser): PropertyChangeListener;

getFileName(): String;

getDirectoryName(): String;

setFileName(arg0: String): void;

setDirectoryName(arg0: String): void;

rescanCurrentDirectory(arg0: JFileChooser): void;

ensureFileIsVisible(arg0: JFileChooser, arg1: File): void;

getFileChooser(): JFileChooser;

getAccessoryPanel(): JPanel;

getDefaultButton(arg0: JFileChooser): JButton;

getApproveButtonToolTipText(arg0: JFileChooser): String;

clearIconCache(): void;

createListSelectionListener(arg0: JFileChooser): ListSelectionListener;

getAcceptAllFileFilter(arg0: JFileChooser): FileFilter;

getFileView(arg0: JFileChooser): FileView;

getDialogTitle(arg0: JFileChooser): String;

getApproveButtonMnemonic(arg0: JFileChooser): number;

getApproveButtonText(arg0: JFileChooser): String;

getNewFolderAction(): Action;

getGoHomeAction(): Action;

getChangeToParentDirectoryAction(): Action;

getApproveSelectionAction(): Action;

getCancelSelectionAction(): Action;

getUpdateAction(): Action;
 }
export namespace BasicFileChooserUI { 
export class AcceptAllFileFilter extends FileFilter {
constructor(arg0: BasicFileChooserUI);

accept(arg0: File): boolean;

getDescription(): String;
 }

export interface ApproveSelectionAction { }
export class ApproveSelectionAction extends AbstractAction {

actionPerformed(arg0: ActionEvent): void;
 }

export class BasicFileView extends FileView {
constructor(arg0: BasicFileChooserUI);

clearIconCache(): void;

getName(arg0: File): String;

getDescription(arg0: File): String;

getTypeDescription(arg0: File): String;

getCachedIcon(arg0: File): Icon;

cacheIcon(arg0: File, arg1: Icon): void;

getIcon(arg0: File): Icon;

isHidden(arg0: File): Boolean;
 }

export interface CancelSelectionAction { }
export class CancelSelectionAction extends AbstractAction {

actionPerformed(arg0: ActionEvent): void;
 }

export interface ChangeToParentDirectoryAction { }
export class ChangeToParentDirectoryAction extends AbstractAction {

actionPerformed(arg0: ActionEvent): void;
 }

export class DoubleClickListener extends MouseAdapter {
constructor(arg0: BasicFileChooserUI, arg1: JList<any>);

mouseEntered(arg0: MouseEvent): void;

mouseClicked(arg0: MouseEvent): void;
 }

export interface GoHomeAction { }
export class GoHomeAction extends AbstractAction {

actionPerformed(arg0: ActionEvent): void;
 }

export interface NewFolderAction { }
export class NewFolderAction extends AbstractAction {

actionPerformed(arg0: ActionEvent): void;
 }

export class SelectionListener implements ListSelectionListener {

valueChanged(arg0: ListSelectionEvent): void;
 }

export interface UpdateAction { }
export class UpdateAction extends AbstractAction {

actionPerformed(arg0: ActionEvent): void;
 }

}

export class BasicFormattedTextFieldUI extends BasicTextFieldUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;
 }

export class BasicGraphicsUtils {
constructor();

static drawEtchedRect(arg0: Graphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Color, arg6: Color, arg7: Color, arg8: Color): void;

static getEtchedInsets(): Insets;

static drawGroove(arg0: Graphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Color, arg6: Color): void;

static getGrooveInsets(): Insets;

static drawBezel(arg0: Graphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: boolean, arg7: Color, arg8: Color, arg9: Color, arg10: Color): void;

static drawLoweredBezel(arg0: Graphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Color, arg6: Color, arg7: Color, arg8: Color): void;

static drawString(arg0: Graphics, arg1: String, arg2: number, arg3: number, arg4: number): void;

static drawStringUnderlineCharAt(arg0: Graphics, arg1: String, arg2: number, arg3: number, arg4: number): void;

static drawDashedRect(arg0: Graphics, arg1: number, arg2: number, arg3: number, arg4: number): void;

static getPreferredButtonSize(arg0: AbstractButton, arg1: number): Dimension;

static drawString(arg0: JComponent, arg1: Graphics2D, arg2: String, arg3: number, arg4: number): void;

static drawStringUnderlineCharAt(arg0: JComponent, arg1: Graphics2D, arg2: String, arg3: number, arg4: number, arg5: number): void;

static getClippedString(arg0: JComponent, arg1: FontMetrics, arg2: String, arg3: number): String;

static getStringWidth(arg0: JComponent, arg1: FontMetrics, arg2: String): number;
 }

export class BasicHTML {
static propertyKey:String
static documentBaseKey:String
constructor();

static createHTMLView(arg0: JComponent, arg1: String): View;

static getHTMLBaseline(arg0: View, arg1: number, arg2: number): number;

static isHTMLString(arg0: String): boolean;

static updateRenderer(arg0: JComponent, arg1: String): void;
 }

export class BasicIconFactory implements Serializable {
constructor();

static getMenuItemCheckIcon(): Icon;

static getMenuItemArrowIcon(): Icon;

static getMenuArrowIcon(): Icon;

static getCheckBoxIcon(): Icon;

static getRadioButtonIcon(): Icon;

static getCheckBoxMenuItemIcon(): Icon;

static getRadioButtonMenuItemIcon(): Icon;

static createEmptyFrameIcon(): Icon;
 }

export class BasicInternalFrameTitlePane extends JComponent {
constructor(arg0: JInternalFrame);

paintComponent(arg0: Graphics): void;
 }
export namespace BasicInternalFrameTitlePane { 
export interface CloseAction { }
export class CloseAction extends AbstractAction {
constructor(arg0: BasicInternalFrameTitlePane);

actionPerformed(arg0: ActionEvent): void;
 }

export interface IconifyAction { }
export class IconifyAction extends AbstractAction {
constructor(arg0: BasicInternalFrameTitlePane);

actionPerformed(arg0: ActionEvent): void;
 }

export interface MaximizeAction { }
export class MaximizeAction extends AbstractAction {
constructor(arg0: BasicInternalFrameTitlePane);

actionPerformed(arg0: ActionEvent): void;
 }

export interface MoveAction { }
export class MoveAction extends AbstractAction {
constructor(arg0: BasicInternalFrameTitlePane);

actionPerformed(arg0: ActionEvent): void;
 }

export class PropertyChangeHandler implements PropertyChangeListener {
constructor(arg0: BasicInternalFrameTitlePane);

propertyChange(arg0: PropertyChangeEvent): void;
 }

export interface RestoreAction { }
export class RestoreAction extends AbstractAction {
constructor(arg0: BasicInternalFrameTitlePane);

actionPerformed(arg0: ActionEvent): void;
 }

export interface SizeAction { }
export class SizeAction extends AbstractAction {
constructor(arg0: BasicInternalFrameTitlePane);

actionPerformed(arg0: ActionEvent): void;
 }

export class SystemMenuBar extends JMenuBar {
constructor(arg0: BasicInternalFrameTitlePane);

isFocusTraversable(): boolean;

requestFocus(): void;

paint(arg0: Graphics): void;

isOpaque(): boolean;
 }

export class TitlePaneLayout implements LayoutManager {
constructor(arg0: BasicInternalFrameTitlePane);

addLayoutComponent(arg0: String, arg1: Component): void;

removeLayoutComponent(arg0: Component): void;

preferredLayoutSize(arg0: Container): Dimension;

minimumLayoutSize(arg0: Container): Dimension;

layoutContainer(arg0: Container): void;
 }

}

export class BasicInternalFrameUI extends InternalFrameUI {
constructor(arg0: JInternalFrame);

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

isKeyBindingActive(): boolean;

getNorthPane(): JComponent;

setNorthPane(arg0: JComponent): void;

getSouthPane(): JComponent;

setSouthPane(arg0: JComponent): void;

getWestPane(): JComponent;

setWestPane(arg0: JComponent): void;

getEastPane(): JComponent;

setEastPane(arg0: JComponent): void;
 }
export namespace BasicInternalFrameUI { 
export class BasicInternalFrameListener implements InternalFrameListener {

internalFrameClosing(arg0: InternalFrameEvent): void;

internalFrameClosed(arg0: InternalFrameEvent): void;

internalFrameOpened(arg0: InternalFrameEvent): void;

internalFrameIconified(arg0: InternalFrameEvent): void;

internalFrameDeiconified(arg0: InternalFrameEvent): void;

internalFrameActivated(arg0: InternalFrameEvent): void;

internalFrameDeactivated(arg0: InternalFrameEvent): void;
 }

export class BorderListener extends MouseInputAdapter implements SwingConstants {

mouseClicked(arg0: MouseEvent): void;

mouseReleased(arg0: MouseEvent): void;

mousePressed(arg0: MouseEvent): void;

mouseDragged(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;

mouseEntered(arg0: MouseEvent): void;

mouseExited(arg0: MouseEvent): void;
 }

export class ComponentHandler implements ComponentListener {

componentResized(arg0: ComponentEvent): void;

componentMoved(arg0: ComponentEvent): void;

componentShown(arg0: ComponentEvent): void;

componentHidden(arg0: ComponentEvent): void;
 }

export class GlassPaneDispatcher implements MouseInputListener {

mousePressed(arg0: MouseEvent): void;

mouseEntered(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;

mouseExited(arg0: MouseEvent): void;

mouseClicked(arg0: MouseEvent): void;

mouseReleased(arg0: MouseEvent): void;

mouseDragged(arg0: MouseEvent): void;
 }

export class InternalFrameLayout implements LayoutManager {
constructor(arg0: BasicInternalFrameUI);

addLayoutComponent(arg0: String, arg1: Component): void;

removeLayoutComponent(arg0: Component): void;

preferredLayoutSize(arg0: Container): Dimension;

minimumLayoutSize(arg0: Container): Dimension;

layoutContainer(arg0: Container): void;
 }

export class InternalFramePropertyChangeListener implements PropertyChangeListener {
constructor(arg0: BasicInternalFrameUI);

propertyChange(arg0: PropertyChangeEvent): void;
 }

}

export class BasicLabelUI extends LabelUI implements PropertyChangeListener {
constructor();

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

getBaselineResizeBehavior(arg0: JComponent): Component.BaselineResizeBehavior;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class BasicListUI extends ListUI {
constructor();

paint(arg0: Graphics, arg1: JComponent): void;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

getBaselineResizeBehavior(arg0: JComponent): Component.BaselineResizeBehavior;

getPreferredSize(arg0: JComponent): Dimension;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

static createUI(arg0: JComponent): ComponentUI;

locationToIndex(arg0: JList<any>, arg1: Point): number;

indexToLocation(arg0: JList<any>, arg1: number): Point;

getCellBounds(arg0: JList<any>, arg1: number, arg2: number): Rectangle;
 }
export namespace BasicListUI { 
export class FocusHandler implements FocusListener {
constructor(arg0: BasicListUI);

focusGained(arg0: FocusEvent): void;

focusLost(arg0: FocusEvent): void;
 }

export class ListDataHandler implements ListDataListener {
constructor(arg0: BasicListUI);

intervalAdded(arg0: ListDataEvent): void;

intervalRemoved(arg0: ListDataEvent): void;

contentsChanged(arg0: ListDataEvent): void;
 }

export class ListSelectionHandler implements ListSelectionListener {
constructor(arg0: BasicListUI);

valueChanged(arg0: ListSelectionEvent): void;
 }

export class MouseInputHandler implements MouseInputListener {
constructor(arg0: BasicListUI);

mouseClicked(arg0: MouseEvent): void;

mouseEntered(arg0: MouseEvent): void;

mouseExited(arg0: MouseEvent): void;

mousePressed(arg0: MouseEvent): void;

mouseDragged(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;

mouseReleased(arg0: MouseEvent): void;
 }

export class PropertyChangeHandler implements PropertyChangeListener {
constructor(arg0: BasicListUI);

propertyChange(arg0: PropertyChangeEvent): void;
 }

}

export abstract class BasicLookAndFeel extends LookAndFeel implements Serializable {

getDefaults(): UIDefaults;

initialize(): void;

uninitialize(): void;
 }

export class BasicMenuBarUI extends MenuBarUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;
 }

export class BasicMenuItemUI extends MenuItemUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

getMinimumSize(arg0: JComponent): Dimension;

getPreferredSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPath(): MenuElement[];
 }
export namespace BasicMenuItemUI { 
export class MouseInputHandler implements MouseInputListener {

mouseClicked(arg0: MouseEvent): void;

mousePressed(arg0: MouseEvent): void;

mouseReleased(arg0: MouseEvent): void;

mouseEntered(arg0: MouseEvent): void;

mouseExited(arg0: MouseEvent): void;

mouseDragged(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;
 }

}

export class BasicMenuUI extends BasicMenuItemUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;
 }
export namespace BasicMenuUI { 
export class ChangeHandler implements ChangeListener {
menu:JMenu
ui:BasicMenuUI
isSelected:boolean
wasFocused:Component
constructor(arg0: BasicMenuUI, arg1: JMenu, arg2: BasicMenuUI);

stateChanged(arg0: ChangeEvent): void;
 }

export class MouseInputHandler implements MouseInputListener {

mouseClicked(arg0: MouseEvent): void;

mousePressed(arg0: MouseEvent): void;

mouseReleased(arg0: MouseEvent): void;

mouseEntered(arg0: MouseEvent): void;

mouseExited(arg0: MouseEvent): void;

mouseDragged(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;
 }

}

export class BasicOptionPaneUI extends OptionPaneUI {
static MinimumWidth:number
static MinimumHeight:number
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

getMinimumOptionPaneSize(): Dimension;

getPreferredSize(arg0: JComponent): Dimension;

selectInitialValue(arg0: JOptionPane): void;

containsCustomComponents(arg0: JOptionPane): boolean;
 }
export namespace BasicOptionPaneUI { 
export class ButtonActionListener implements ActionListener {
constructor(arg0: BasicOptionPaneUI, arg1: number);

actionPerformed(arg0: ActionEvent): void;
 }

export class ButtonAreaLayout implements LayoutManager {
constructor(arg0: boolean, arg1: number);

setSyncAllWidths(arg0: boolean): void;

getSyncAllWidths(): boolean;

setPadding(arg0: number): void;

getPadding(): number;

setCentersChildren(arg0: boolean): void;

getCentersChildren(): boolean;

addLayoutComponent(arg0: String, arg1: Component): void;

layoutContainer(arg0: Container): void;

minimumLayoutSize(arg0: Container): Dimension;

preferredLayoutSize(arg0: Container): Dimension;

removeLayoutComponent(arg0: Component): void;
 }

export class PropertyChangeHandler implements PropertyChangeListener {
constructor(arg0: BasicOptionPaneUI);

propertyChange(arg0: PropertyChangeEvent): void;
 }

}

export class BasicPanelUI extends PanelUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

getBaselineResizeBehavior(arg0: JComponent): Component.BaselineResizeBehavior;
 }

export class BasicPasswordFieldUI extends BasicTextFieldUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

create(arg0: Element): View;
 }

export class BasicPopupMenuSeparatorUI extends BasicSeparatorUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;
 }

export class BasicPopupMenuUI extends PopupMenuUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

installDefaults(): void;

uninstallUI(arg0: JComponent): void;

isPopupTrigger(arg0: MouseEvent): boolean;
 }

export class BasicProgressBarUI extends ProgressBarUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

getBaselineResizeBehavior(arg0: JComponent): Component.BaselineResizeBehavior;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;
 }
export namespace BasicProgressBarUI { 
export class ChangeHandler implements ChangeListener {
constructor(arg0: BasicProgressBarUI);

stateChanged(arg0: ChangeEvent): void;
 }

}

export class BasicRadioButtonMenuItemUI extends BasicMenuItemUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

processMouseEvent(arg0: JMenuItem, arg1: MouseEvent, arg2: MenuElement[], arg3: MenuSelectionManager): void;
 }

export class BasicRadioButtonUI extends BasicToggleButtonUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getDefaultIcon(): Icon;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;
 }

export class BasicRootPaneUI extends RootPaneUI implements PropertyChangeListener {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class BasicScrollBarUI extends ScrollBarUI implements LayoutManager, SwingConstants {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

isThumbRollover(): boolean;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

addLayoutComponent(arg0: String, arg1: Component): void;

removeLayoutComponent(arg0: Component): void;

preferredLayoutSize(arg0: Container): Dimension;

minimumLayoutSize(arg0: Container): Dimension;

layoutContainer(arg0: Container): void;

getSupportsAbsolutePositioning(): boolean;
 }
export namespace BasicScrollBarUI { 
export class ArrowButtonListener extends MouseAdapter {

mousePressed(arg0: MouseEvent): void;

mouseReleased(arg0: MouseEvent): void;
 }

export class ModelListener implements ChangeListener {

stateChanged(arg0: ChangeEvent): void;
 }

export class PropertyChangeHandler implements PropertyChangeListener {
constructor(arg0: BasicScrollBarUI);

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class ScrollListener implements ActionListener {
constructor(arg0: BasicScrollBarUI);
constructor(arg0: BasicScrollBarUI, arg1: number, arg2: boolean);

setDirection(arg0: number): void;

setScrollByBlock(arg0: boolean): void;

actionPerformed(arg0: ActionEvent): void;
 }

export class TrackListener extends MouseAdapter implements MouseMotionListener {

mouseReleased(arg0: MouseEvent): void;

mousePressed(arg0: MouseEvent): void;

mouseDragged(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;

mouseExited(arg0: MouseEvent): void;
 }

}

export class BasicScrollPaneUI extends ScrollPaneUI implements ScrollPaneConstants {
constructor();

static createUI(arg0: JComponent): ComponentUI;

paint(arg0: Graphics, arg1: JComponent): void;

getMaximumSize(arg0: JComponent): Dimension;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

getBaselineResizeBehavior(arg0: JComponent): Component.BaselineResizeBehavior;
 }
export namespace BasicScrollPaneUI { 
export class HSBChangeListener implements ChangeListener {
constructor(arg0: BasicScrollPaneUI);

stateChanged(arg0: ChangeEvent): void;
 }

export class MouseWheelHandler implements MouseWheelListener {

mouseWheelMoved(arg0: MouseWheelEvent): void;
 }

export class PropertyChangeHandler implements PropertyChangeListener {
constructor(arg0: BasicScrollPaneUI);

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class VSBChangeListener implements ChangeListener {
constructor(arg0: BasicScrollPaneUI);

stateChanged(arg0: ChangeEvent): void;
 }

export class ViewportChangeHandler implements ChangeListener {
constructor(arg0: BasicScrollPaneUI);

stateChanged(arg0: ChangeEvent): void;
 }

}

export class BasicSeparatorUI extends SeparatorUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;
 }

export class BasicSliderUI extends SliderUI {
static POSITIVE_SCROLL:number
static NEGATIVE_SCROLL:number
static MIN_SCROLL:number
static MAX_SCROLL:number
constructor();
constructor(arg0: JSlider);

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

getBaselineResizeBehavior(arg0: JComponent): Component.BaselineResizeBehavior;

getPreferredHorizontalSize(): Dimension;

getPreferredVerticalSize(): Dimension;

getMinimumHorizontalSize(): Dimension;

getMinimumVerticalSize(): Dimension;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

paint(arg0: Graphics, arg1: JComponent): void;

paintFocus(arg0: Graphics): void;

paintTrack(arg0: Graphics): void;

paintTicks(arg0: Graphics): void;

paintLabels(arg0: Graphics): void;

paintThumb(arg0: Graphics): void;

setThumbLocation(arg0: number, arg1: number): void;

scrollByBlock(arg0: number): void;

scrollByUnit(arg0: number): void;

valueForYPosition(arg0: number): number;

valueForXPosition(arg0: number): number;
 }
export namespace BasicSliderUI { 
export interface ActionScroller { }
export class ActionScroller extends AbstractAction {
constructor(arg0: BasicSliderUI, arg1: JSlider, arg2: number, arg3: boolean);

actionPerformed(arg0: ActionEvent): void;

isEnabled(): boolean;
 }

export class ChangeHandler implements ChangeListener {
constructor(arg0: BasicSliderUI);

stateChanged(arg0: ChangeEvent): void;
 }

export class ComponentHandler extends ComponentAdapter {
constructor(arg0: BasicSliderUI);

componentResized(arg0: ComponentEvent): void;
 }

export class FocusHandler implements FocusListener {
constructor(arg0: BasicSliderUI);

focusGained(arg0: FocusEvent): void;

focusLost(arg0: FocusEvent): void;
 }

export class PropertyChangeHandler implements PropertyChangeListener {
constructor(arg0: BasicSliderUI);

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class ScrollListener implements ActionListener {
constructor(arg0: BasicSliderUI);
constructor(arg0: BasicSliderUI, arg1: number, arg2: boolean);

setDirection(arg0: number): void;

setScrollByBlock(arg0: boolean): void;

actionPerformed(arg0: ActionEvent): void;
 }

export class TrackListener extends MouseInputAdapter {
constructor(arg0: BasicSliderUI);

mouseReleased(arg0: MouseEvent): void;

mousePressed(arg0: MouseEvent): void;

shouldScroll(arg0: number): boolean;

mouseDragged(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;
 }

}

export class BasicSpinnerUI extends SpinnerUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

getBaselineResizeBehavior(arg0: JComponent): Component.BaselineResizeBehavior;
 }

export class BasicSplitPaneDivider extends Container implements PropertyChangeListener {
constructor(arg0: BasicSplitPaneUI);

setBasicSplitPaneUI(arg0: BasicSplitPaneUI): void;

getBasicSplitPaneUI(): BasicSplitPaneUI;

setDividerSize(arg0: number): void;

getDividerSize(): number;

setBorder(arg0: Border): void;

getBorder(): Border;

getInsets(): Insets;

isMouseOver(): boolean;

getPreferredSize(): Dimension;

getMinimumSize(): Dimension;

propertyChange(arg0: PropertyChangeEvent): void;

paint(arg0: Graphics): void;
 }
export namespace BasicSplitPaneDivider { 
export class DividerLayout implements LayoutManager {

layoutContainer(arg0: Container): void;

minimumLayoutSize(arg0: Container): Dimension;

preferredLayoutSize(arg0: Container): Dimension;

removeLayoutComponent(arg0: Component): void;

addLayoutComponent(arg0: String, arg1: Component): void;
 }

export class DragController {
 }

export class MouseHandler extends MouseAdapter implements MouseMotionListener {

mousePressed(arg0: MouseEvent): void;

mouseReleased(arg0: MouseEvent): void;

mouseDragged(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;

mouseEntered(arg0: MouseEvent): void;

mouseExited(arg0: MouseEvent): void;
 }

export class VerticalDragController extends BasicSplitPaneDivider.DragController {
 }

}

export class BasicSplitPaneUI extends SplitPaneUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

getOrientation(): number;

setOrientation(arg0: number): void;

isContinuousLayout(): boolean;

setContinuousLayout(arg0: boolean): void;

getLastDragLocation(): number;

setLastDragLocation(arg0: number): void;

getDivider(): BasicSplitPaneDivider;

getNonContinuousLayoutDivider(): Component;

getSplitPane(): JSplitPane;

createDefaultDivider(): BasicSplitPaneDivider;

resetToPreferredSizes(arg0: JSplitPane): void;

setDividerLocation(arg0: JSplitPane, arg1: number): void;

getDividerLocation(arg0: JSplitPane): number;

getMinimumDividerLocation(arg0: JSplitPane): number;

getMaximumDividerLocation(arg0: JSplitPane): number;

finishedPaintingChildren(arg0: JSplitPane, arg1: Graphics): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getInsets(arg0: JComponent): Insets;
 }
export namespace BasicSplitPaneUI { 
export class BasicHorizontalLayoutManager implements LayoutManager2 {

layoutContainer(arg0: Container): void;

addLayoutComponent(arg0: String, arg1: Component): void;

minimumLayoutSize(arg0: Container): Dimension;

preferredLayoutSize(arg0: Container): Dimension;

removeLayoutComponent(arg0: Component): void;

addLayoutComponent(arg0: Component, arg1: Object): void;

getLayoutAlignmentX(arg0: Container): number;

getLayoutAlignmentY(arg0: Container): number;

invalidateLayout(arg0: Container): void;

maximumLayoutSize(arg0: Container): Dimension;

resetToPreferredSizes(): void;
 }

export class BasicVerticalLayoutManager extends BasicSplitPaneUI.BasicHorizontalLayoutManager {
constructor(arg0: BasicSplitPaneUI);
 }

export class FocusHandler extends FocusAdapter {
constructor(arg0: BasicSplitPaneUI);

focusGained(arg0: FocusEvent): void;

focusLost(arg0: FocusEvent): void;
 }

export class KeyboardDownRightHandler implements ActionListener {
constructor(arg0: BasicSplitPaneUI);

actionPerformed(arg0: ActionEvent): void;
 }

export class KeyboardEndHandler implements ActionListener {
constructor(arg0: BasicSplitPaneUI);

actionPerformed(arg0: ActionEvent): void;
 }

export class KeyboardHomeHandler implements ActionListener {
constructor(arg0: BasicSplitPaneUI);

actionPerformed(arg0: ActionEvent): void;
 }

export class KeyboardResizeToggleHandler implements ActionListener {
constructor(arg0: BasicSplitPaneUI);

actionPerformed(arg0: ActionEvent): void;
 }

export class KeyboardUpLeftHandler implements ActionListener {
constructor(arg0: BasicSplitPaneUI);

actionPerformed(arg0: ActionEvent): void;
 }

export class PropertyHandler implements PropertyChangeListener {
constructor(arg0: BasicSplitPaneUI);

propertyChange(arg0: PropertyChangeEvent): void;
 }

}

export class BasicTabbedPaneUI extends TabbedPaneUI implements SwingConstants {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

getBaselineResizeBehavior(arg0: JComponent): Component.BaselineResizeBehavior;

paint(arg0: Graphics, arg1: JComponent): void;

getTabBounds(arg0: JTabbedPane, arg1: number): Rectangle;

getTabRunCount(arg0: JTabbedPane): number;

tabForCoordinate(arg0: JTabbedPane, arg1: number, arg2: number): number;
 }
export namespace BasicTabbedPaneUI { 
export class FocusHandler extends FocusAdapter {
constructor(arg0: BasicTabbedPaneUI);

focusGained(arg0: FocusEvent): void;

focusLost(arg0: FocusEvent): void;
 }

export class MouseHandler extends MouseAdapter {
constructor(arg0: BasicTabbedPaneUI);

mousePressed(arg0: MouseEvent): void;
 }

export class PropertyChangeHandler implements PropertyChangeListener {
constructor(arg0: BasicTabbedPaneUI);

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class TabSelectionHandler implements ChangeListener {
constructor(arg0: BasicTabbedPaneUI);

stateChanged(arg0: ChangeEvent): void;
 }

export class TabbedPaneLayout implements LayoutManager {
constructor(arg0: BasicTabbedPaneUI);

addLayoutComponent(arg0: String, arg1: Component): void;

removeLayoutComponent(arg0: Component): void;

preferredLayoutSize(arg0: Container): Dimension;

minimumLayoutSize(arg0: Container): Dimension;

layoutContainer(arg0: Container): void;

calculateLayoutInfo(): void;
 }

}

export class BasicTableHeaderUI extends TableHeaderUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

paint(arg0: Graphics, arg1: JComponent): void;

getMinimumSize(arg0: JComponent): Dimension;

getPreferredSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;
 }
export namespace BasicTableHeaderUI { 
export class MouseInputHandler implements MouseInputListener {
constructor(arg0: BasicTableHeaderUI);

mouseClicked(arg0: MouseEvent): void;

mousePressed(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;

mouseDragged(arg0: MouseEvent): void;

mouseReleased(arg0: MouseEvent): void;

mouseEntered(arg0: MouseEvent): void;

mouseExited(arg0: MouseEvent): void;
 }

}

export class BasicTableUI extends TableUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

getBaselineResizeBehavior(arg0: JComponent): Component.BaselineResizeBehavior;

getMinimumSize(arg0: JComponent): Dimension;

getPreferredSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

paint(arg0: Graphics, arg1: JComponent): void;
 }
export namespace BasicTableUI { 
export class FocusHandler implements FocusListener {
constructor(arg0: BasicTableUI);

focusGained(arg0: FocusEvent): void;

focusLost(arg0: FocusEvent): void;
 }

export class KeyHandler implements KeyListener {
constructor(arg0: BasicTableUI);

keyPressed(arg0: KeyEvent): void;

keyReleased(arg0: KeyEvent): void;

keyTyped(arg0: KeyEvent): void;
 }

export class MouseInputHandler implements MouseInputListener {
constructor(arg0: BasicTableUI);

mouseClicked(arg0: MouseEvent): void;

mousePressed(arg0: MouseEvent): void;

mouseReleased(arg0: MouseEvent): void;

mouseEntered(arg0: MouseEvent): void;

mouseExited(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;

mouseDragged(arg0: MouseEvent): void;
 }

}

export class BasicTextAreaUI extends BasicTextUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

create(arg0: Element): View;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

getBaselineResizeBehavior(arg0: JComponent): Component.BaselineResizeBehavior;
 }

export class BasicTextFieldUI extends BasicTextUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

create(arg0: Element): View;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

getBaselineResizeBehavior(arg0: JComponent): Component.BaselineResizeBehavior;
 }

export class BasicTextPaneUI extends BasicEditorPaneUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;
 }

export abstract class BasicTextUI extends TextUI implements ViewFactory {
constructor();

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

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

getToolTipText(arg0: JTextComponent, arg1: Point): String;

create(arg0: Element): View;

create(arg0: Element, arg1: number, arg2: number): View;
 }
export namespace BasicTextUI { 
export class BasicCaret extends DefaultCaret implements UIResource {
constructor();
 }

export class BasicHighlighter extends DefaultHighlighter implements UIResource {
constructor();
 }

}

export class BasicToggleButtonUI extends BasicButtonUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

paint(arg0: Graphics, arg1: JComponent): void;
 }

export class BasicToolBarSeparatorUI extends BasicSeparatorUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;
 }

export class BasicToolBarUI extends ToolBarUI implements SwingConstants {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

isRolloverBorders(): boolean;

setRolloverBorders(arg0: boolean): void;

setFloatingLocation(arg0: number, arg1: number): void;

isFloating(): boolean;

setFloating(arg0: boolean, arg1: Point): void;

setOrientation(arg0: number): void;

getDockingColor(): Color;

setDockingColor(arg0: Color): void;

getFloatingColor(): Color;

setFloatingColor(arg0: Color): void;

canDock(arg0: Component, arg1: Point): boolean;
 }
export namespace BasicToolBarUI { 
export class DockingListener implements MouseInputListener {
constructor(arg0: BasicToolBarUI, arg1: JToolBar);

mouseClicked(arg0: MouseEvent): void;

mousePressed(arg0: MouseEvent): void;

mouseReleased(arg0: MouseEvent): void;

mouseEntered(arg0: MouseEvent): void;

mouseExited(arg0: MouseEvent): void;

mouseDragged(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;
 }

export class DragWindow extends Window {

getOrientation(): number;

setOrientation(arg0: number): void;

getOffset(): Point;

setOffset(arg0: Point): void;

setBorderColor(arg0: Color): void;

getBorderColor(): Color;

paint(arg0: Graphics): void;

getInsets(): Insets;
 }

export class FrameListener extends WindowAdapter {

windowClosing(arg0: WindowEvent): void;
 }

export class PropertyListener implements PropertyChangeListener {

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class ToolBarContListener implements ContainerListener {

componentAdded(arg0: ContainerEvent): void;

componentRemoved(arg0: ContainerEvent): void;
 }

export class ToolBarFocusListener implements FocusListener {

focusGained(arg0: FocusEvent): void;

focusLost(arg0: FocusEvent): void;
 }

}

export class BasicToolTipUI extends ToolTipUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;
 }

export class BasicTreeUI extends TreeUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

setLeftChildIndent(arg0: number): void;

getLeftChildIndent(): number;

setRightChildIndent(arg0: number): void;

getRightChildIndent(): number;

setExpandedIcon(arg0: Icon): void;

getExpandedIcon(): Icon;

setCollapsedIcon(arg0: Icon): void;

getCollapsedIcon(): Icon;

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

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

getBaselineResizeBehavior(arg0: JComponent): Component.BaselineResizeBehavior;

paint(arg0: Graphics, arg1: JComponent): void;

setPreferredMinSize(arg0: Dimension): void;

getPreferredMinSize(): Dimension;

getPreferredSize(arg0: JComponent): Dimension;

getPreferredSize(arg0: JComponent, arg1: boolean): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;
 }
export namespace BasicTreeUI { 
export class CellEditorHandler implements CellEditorListener {
constructor(arg0: BasicTreeUI);

editingStopped(arg0: ChangeEvent): void;

editingCanceled(arg0: ChangeEvent): void;
 }

export class ComponentHandler extends ComponentAdapter implements ActionListener {
constructor(arg0: BasicTreeUI);

componentMoved(arg0: ComponentEvent): void;

actionPerformed(arg0: ActionEvent): void;
 }

export class FocusHandler implements FocusListener {
constructor(arg0: BasicTreeUI);

focusGained(arg0: FocusEvent): void;

focusLost(arg0: FocusEvent): void;
 }

export class KeyHandler extends KeyAdapter {
constructor(arg0: BasicTreeUI);

keyTyped(arg0: KeyEvent): void;

keyPressed(arg0: KeyEvent): void;

keyReleased(arg0: KeyEvent): void;
 }

export class MouseHandler extends MouseAdapter implements MouseMotionListener {
constructor(arg0: BasicTreeUI);

mousePressed(arg0: MouseEvent): void;

mouseDragged(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;

mouseReleased(arg0: MouseEvent): void;
 }

export class MouseInputHandler implements MouseInputListener {
constructor(arg0: BasicTreeUI, arg1: Component, arg2: Component, arg3: MouseEvent);

mouseClicked(arg0: MouseEvent): void;

mousePressed(arg0: MouseEvent): void;

mouseReleased(arg0: MouseEvent): void;

mouseEntered(arg0: MouseEvent): void;

mouseExited(arg0: MouseEvent): void;

mouseDragged(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;
 }

export class NodeDimensionsHandler extends AbstractLayoutCache.NodeDimensions {
constructor(arg0: BasicTreeUI);

getNodeDimensions(arg0: Object, arg1: number, arg2: number, arg3: boolean, arg4: Rectangle): Rectangle;
 }

export class PropertyChangeHandler implements PropertyChangeListener {
constructor(arg0: BasicTreeUI);

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SelectionModelPropertyChangeHandler implements PropertyChangeListener {
constructor(arg0: BasicTreeUI);

propertyChange(arg0: PropertyChangeEvent): void;
 }

export interface TreeCancelEditingAction { }
export class TreeCancelEditingAction extends AbstractAction {
constructor(arg0: BasicTreeUI, arg1: String);

actionPerformed(arg0: ActionEvent): void;

isEnabled(): boolean;
 }

export class TreeExpansionHandler implements TreeExpansionListener {
constructor(arg0: BasicTreeUI);

treeExpanded(arg0: TreeExpansionEvent): void;

treeCollapsed(arg0: TreeExpansionEvent): void;
 }

export interface TreeHomeAction { }
export class TreeHomeAction extends AbstractAction {
constructor(arg0: BasicTreeUI, arg1: number, arg2: String);

actionPerformed(arg0: ActionEvent): void;

isEnabled(): boolean;
 }

export interface TreeIncrementAction { }
export class TreeIncrementAction extends AbstractAction {
constructor(arg0: BasicTreeUI, arg1: number, arg2: String);

actionPerformed(arg0: ActionEvent): void;

isEnabled(): boolean;
 }

export class TreeModelHandler implements TreeModelListener {
constructor(arg0: BasicTreeUI);

treeNodesChanged(arg0: TreeModelEvent): void;

treeNodesInserted(arg0: TreeModelEvent): void;

treeNodesRemoved(arg0: TreeModelEvent): void;

treeStructureChanged(arg0: TreeModelEvent): void;
 }

export interface TreePageAction { }
export class TreePageAction extends AbstractAction {
constructor(arg0: BasicTreeUI, arg1: number, arg2: String);

actionPerformed(arg0: ActionEvent): void;

isEnabled(): boolean;
 }

export class TreeSelectionHandler implements TreeSelectionListener {
constructor(arg0: BasicTreeUI);

valueChanged(arg0: TreeSelectionEvent): void;
 }

export interface TreeToggleAction { }
export class TreeToggleAction extends AbstractAction {
constructor(arg0: BasicTreeUI, arg1: String);

actionPerformed(arg0: ActionEvent): void;

isEnabled(): boolean;
 }

export interface TreeTraverseAction { }
export class TreeTraverseAction extends AbstractAction {
constructor(arg0: BasicTreeUI, arg1: number, arg2: String);

actionPerformed(arg0: ActionEvent): void;

isEnabled(): boolean;
 }

}

export class BasicViewportUI extends ViewportUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;
 }

export interface ComboPopup {

show(): void;

hide(): void;

isVisible(): boolean;

getList(): JList<Object>;

getMouseListener(): MouseListener;

getMouseMotionListener(): MouseMotionListener;

getKeyListener(): KeyListener;

uninstallingUI(): void;
 }

export class DefaultMenuLayout extends BoxLayout implements UIResource {
constructor(arg0: Container, arg1: number);

preferredLayoutSize(arg0: Container): Dimension;
 }

}
