/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="javax.swing.plaf.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.beans.d.ts" />
/// <reference path="javax.swing.plaf.basic.d.ts" />
/// <reference path="java.awt.event.d.ts" />
/// <reference path="javax.swing.border.d.ts" />
/// <reference path="javax.swing.event.d.ts" />
/// <reference path="javax.swing.d.ts" />
declare module '@afterburnerhq/javax.swing.plaf.metal' { 
import { Graphics, Rectangle, Container, Insets, Dimension, Component } from '@afterburnerhq/java.awt'
import { String } from '@afterburnerhq/java.lang'
import { ComponentUI, ColorUIResource, FontUIResource, UIResource } from '@afterburnerhq/javax.swing.plaf'
import { File, Serializable } from '@afterburnerhq/java.io'
import { PropertyChangeListener, PropertyChangeEvent } from '@afterburnerhq/java.beans'
import { BasicInternalFrameUI, BasicSliderUI, BasicFileChooserUI, BasicScrollPaneUI, BasicTabbedPaneUI, BasicButtonUI, BasicRadioButtonUI, BasicToolTipUI, BasicArrowButton, BasicLabelUI, BasicRootPaneUI, BasicScrollBarUI, BasicTreeUI, BasicToolBarUI, BasicComboPopup, BasicProgressBarUI, BasicSeparatorUI, BasicComboBoxEditor, BasicTextFieldUI, BasicToggleButtonUI, BasicSplitPaneDivider, BasicComboBoxUI, BasicLookAndFeel, BasicDesktopIconUI, BasicSplitPaneUI, BasicInternalFrameTitlePane, BasicMenuBarUI } from '@afterburnerhq/javax.swing.plaf.basic'
import { MouseAdapter, ActionEvent, MouseEvent } from '@afterburnerhq/java.awt.event'
import { Border, AbstractBorder } from '@afterburnerhq/javax.swing.border'
import { ListSelectionEvent, ListSelectionListener } from '@afterburnerhq/javax.swing.event'
import { LayoutStyle, JScrollPane, UIDefaults, AbstractButton, JComboBox, JComponent, JButton, CellRendererPane, JToolBar, AbstractListModel, SwingConstants, JFileChooser, DefaultListCellRenderer, Icon, AbstractAction, JInternalFrame, JList, ComboBoxModel } from '@afterburnerhq/javax.swing'
export class DefaultMetalTheme extends MetalTheme {
constructor();

getName(): String;

getControlTextFont(): FontUIResource;

getSystemTextFont(): FontUIResource;

getUserTextFont(): FontUIResource;

getMenuTextFont(): FontUIResource;

getWindowTitleFont(): FontUIResource;

getSubTextFont(): FontUIResource;
 }

export class MetalBorders {
constructor();

static getButtonBorder(): Border;

static getTextBorder(): Border;

static getTextFieldBorder(): Border;

static getToggleButtonBorder(): Border;

static getDesktopIconBorder(): Border;
 }
export namespace MetalBorders { 
export class ButtonBorder extends AbstractBorder implements UIResource {
constructor();

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;
 }

export class Flush3DBorder extends AbstractBorder implements UIResource {
constructor();

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;
 }

export class InternalFrameBorder extends AbstractBorder implements UIResource {
constructor();

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;
 }

export class MenuBarBorder extends AbstractBorder implements UIResource {
constructor();

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;
 }

export class MenuItemBorder extends AbstractBorder implements UIResource {
constructor();

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;
 }

export class OptionDialogBorder extends AbstractBorder implements UIResource {
constructor();

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;
 }

export class PaletteBorder extends AbstractBorder implements UIResource {
constructor();

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;
 }

export class PopupMenuBorder extends AbstractBorder implements UIResource {
constructor();

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;
 }

export class RolloverButtonBorder extends MetalBorders.ButtonBorder {
constructor();

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;
 }

export class ScrollPaneBorder extends AbstractBorder implements UIResource {
constructor();

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;
 }

export class TableHeaderBorder extends AbstractBorder {
constructor();

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;
 }

export class TextFieldBorder extends MetalBorders.Flush3DBorder {
constructor();

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;
 }

export class ToggleButtonBorder extends MetalBorders.ButtonBorder {
constructor();

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;
 }

export class ToolBarBorder extends AbstractBorder implements UIResource, SwingConstants {
constructor();

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;
 }

}

export class MetalButtonUI extends BasicButtonUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installDefaults(arg0: AbstractButton): void;

uninstallDefaults(arg0: AbstractButton): void;

update(arg0: Graphics, arg1: JComponent): void;
 }

export class MetalCheckBoxIcon implements Icon, UIResource, Serializable {
constructor();

paintIcon(arg0: Component, arg1: Graphics, arg2: number, arg3: number): void;

getIconWidth(): number;

getIconHeight(): number;
 }

export class MetalCheckBoxUI extends MetalRadioButtonUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getPropertyPrefix(): String;

installDefaults(arg0: AbstractButton): void;
 }

export class MetalComboBoxButton extends JButton {
constructor(arg0: JComboBox<Object>, arg1: Icon, arg2: CellRendererPane, arg3: JList<Object>);
constructor(arg0: JComboBox<Object>, arg1: Icon, arg2: boolean, arg3: CellRendererPane, arg4: JList<Object>);

getComboBox(): JComboBox<Object>;

setComboBox(arg0: JComboBox<Object>): void;

getComboIcon(): Icon;

setComboIcon(arg0: Icon): void;

isIconOnly(): boolean;

setIconOnly(arg0: boolean): void;

isFocusTraversable(): boolean;

setEnabled(arg0: boolean): void;

paintComponent(arg0: Graphics): void;

getMinimumSize(): Dimension;
 }

export class MetalComboBoxEditor extends BasicComboBoxEditor {
constructor();
 }
export namespace MetalComboBoxEditor { 
export class UIResource extends MetalComboBoxEditor implements UIResource {
constructor();
 }

}

export class MetalComboBoxIcon implements Icon, Serializable {
constructor();

paintIcon(arg0: Component, arg1: Graphics, arg2: number, arg3: number): void;

getIconWidth(): number;

getIconHeight(): number;
 }

export class MetalComboBoxUI extends BasicComboBoxUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

paint(arg0: Graphics, arg1: JComponent): void;

paintCurrentValue(arg0: Graphics, arg1: Rectangle, arg2: boolean): void;

paintCurrentValueBackground(arg0: Graphics, arg1: Rectangle, arg2: boolean): void;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

createPropertyChangeListener(): PropertyChangeListener;

layoutComboBox(arg0: Container, arg1: MetalComboBoxUI.MetalComboBoxLayoutManager): void;

configureEditor(): void;

unconfigureEditor(): void;

getMinimumSize(arg0: JComponent): Dimension;
 }
export namespace MetalComboBoxUI { 
export class MetalComboBoxLayoutManager extends BasicComboBoxUI.ComboBoxLayoutManager {
constructor(arg0: MetalComboBoxUI);

layoutContainer(arg0: Container): void;

superLayout(arg0: Container): void;
 }

export class MetalComboPopup extends BasicComboPopup {
constructor(arg0: MetalComboBoxUI, arg1: JComboBox<Object>);

delegateFocus(arg0: MouseEvent): void;
 }

export class MetalPropertyChangeListener extends BasicComboBoxUI.PropertyChangeHandler {
constructor(arg0: MetalComboBoxUI);

propertyChange(arg0: PropertyChangeEvent): void;
 }

}

export class MetalDesktopIconUI extends BasicDesktopIconUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;
 }

export class MetalFileChooserUI extends BasicFileChooserUI {
constructor(arg0: JFileChooser);

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallComponents(arg0: JFileChooser): void;

installComponents(arg0: JFileChooser): void;

createListSelectionListener(arg0: JFileChooser): ListSelectionListener;

uninstallUI(arg0: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

createPropertyChangeListener(arg0: JFileChooser): PropertyChangeListener;

ensureFileIsVisible(arg0: JFileChooser, arg1: File): void;

rescanCurrentDirectory(arg0: JFileChooser): void;

getFileName(): String;

setFileName(arg0: String): void;

getDirectoryName(): String;

setDirectoryName(arg0: String): void;

valueChanged(arg0: ListSelectionEvent): void;
 }
export namespace MetalFileChooserUI { 
export interface DirectoryComboBoxAction { }
export class DirectoryComboBoxAction extends AbstractAction {

actionPerformed(arg0: ActionEvent): void;
 }

export class DirectoryComboBoxModel extends AbstractListModel<Object> implements ComboBoxModel<Object> {
constructor(arg0: MetalFileChooserUI);

getDepth(arg0: number): number;

setSelectedItem(arg0: Object): void;

getSelectedItem(): Object;

getSize(): number;

getElementAt(arg0: number): Object;
 }

export class FileRenderer extends DefaultListCellRenderer {
 }

export class FilterComboBoxModel extends AbstractListModel<Object> implements ComboBoxModel<Object>, PropertyChangeListener {

propertyChange(arg0: PropertyChangeEvent): void;

setSelectedItem(arg0: Object): void;

getSelectedItem(): Object;

getSize(): number;

getElementAt(arg0: number): Object;
 }

export class FilterComboBoxRenderer extends DefaultListCellRenderer {
constructor(arg0: MetalFileChooserUI);

getListCellRendererComponent(arg0: JList<any>, arg1: Object, arg2: number, arg3: boolean, arg4: boolean): Component;
 }

export class SingleClickListener extends MouseAdapter {
constructor(arg0: MetalFileChooserUI, arg1: JList<any>);
 }

}

export class MetalIconFactory implements Serializable {
static DARK:boolean
static LIGHT:boolean
constructor();

static getFileChooserDetailViewIcon(): Icon;

static getFileChooserHomeFolderIcon(): Icon;

static getFileChooserListViewIcon(): Icon;

static getFileChooserNewFolderIcon(): Icon;

static getFileChooserUpFolderIcon(): Icon;

static getInternalFrameAltMaximizeIcon(arg0: number): Icon;

static getInternalFrameCloseIcon(arg0: number): Icon;

static getInternalFrameDefaultMenuIcon(): Icon;

static getInternalFrameMaximizeIcon(arg0: number): Icon;

static getInternalFrameMinimizeIcon(arg0: number): Icon;

static getRadioButtonIcon(): Icon;

static getCheckBoxIcon(): Icon;

static getTreeComputerIcon(): Icon;

static getTreeFloppyDriveIcon(): Icon;

static getTreeFolderIcon(): Icon;

static getTreeHardDriveIcon(): Icon;

static getTreeLeafIcon(): Icon;

static getTreeControlIcon(arg0: boolean): Icon;

static getMenuArrowIcon(): Icon;

static getMenuItemCheckIcon(): Icon;

static getMenuItemArrowIcon(): Icon;

static getCheckBoxMenuItemIcon(): Icon;

static getRadioButtonMenuItemIcon(): Icon;

static getHorizontalSliderThumbIcon(): Icon;

static getVerticalSliderThumbIcon(): Icon;
 }
export namespace MetalIconFactory { 
export class FileIcon16 implements Icon, Serializable {
constructor();

paintIcon(arg0: Component, arg1: Graphics, arg2: number, arg3: number): void;

getShift(): number;

getAdditionalHeight(): number;

getIconWidth(): number;

getIconHeight(): number;
 }

export class FolderIcon16 implements Icon, Serializable {
constructor();

paintIcon(arg0: Component, arg1: Graphics, arg2: number, arg3: number): void;

getShift(): number;

getAdditionalHeight(): number;

getIconWidth(): number;

getIconHeight(): number;
 }

export class PaletteCloseIcon implements Icon, UIResource, Serializable {
constructor();

paintIcon(arg0: Component, arg1: Graphics, arg2: number, arg3: number): void;

getIconWidth(): number;

getIconHeight(): number;
 }

export class TreeControlIcon implements Icon, Serializable {
constructor(arg0: boolean);

paintIcon(arg0: Component, arg1: Graphics, arg2: number, arg3: number): void;

paintMe(arg0: Component, arg1: Graphics, arg2: number, arg3: number): void;

getIconWidth(): number;

getIconHeight(): number;
 }

export class TreeFolderIcon extends MetalIconFactory.FolderIcon16 {
constructor();

getShift(): number;

getAdditionalHeight(): number;
 }

export class TreeLeafIcon extends MetalIconFactory.FileIcon16 {
constructor();

getShift(): number;

getAdditionalHeight(): number;
 }

}

export class MetalInternalFrameTitlePane extends BasicInternalFrameTitlePane {
constructor(arg0: JInternalFrame);

addNotify(): void;

paintPalette(arg0: Graphics): void;

paintComponent(arg0: Graphics): void;

setPalette(arg0: boolean): void;
 }

export class MetalInternalFrameUI extends BasicInternalFrameUI {
constructor(arg0: JInternalFrame);

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

setPalette(arg0: boolean): void;
 }

export class MetalLabelUI extends BasicLabelUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;
 }

export class MetalLookAndFeel extends BasicLookAndFeel {
constructor();

getName(): String;

getID(): String;

getDescription(): String;

isNativeLookAndFeel(): boolean;

isSupportedLookAndFeel(): boolean;

getSupportsWindowDecorations(): boolean;

getDefaults(): UIDefaults;

provideErrorFeedback(arg0: Component): void;

static setCurrentTheme(arg0: MetalTheme): void;

static getCurrentTheme(): MetalTheme;

getDisabledIcon(arg0: JComponent, arg1: Icon): Icon;

getDisabledSelectedIcon(arg0: JComponent, arg1: Icon): Icon;

static getControlTextFont(): FontUIResource;

static getSystemTextFont(): FontUIResource;

static getUserTextFont(): FontUIResource;

static getMenuTextFont(): FontUIResource;

static getWindowTitleFont(): FontUIResource;

static getSubTextFont(): FontUIResource;

static getDesktopColor(): ColorUIResource;

static getFocusColor(): ColorUIResource;

static getWhite(): ColorUIResource;

static getBlack(): ColorUIResource;

static getControl(): ColorUIResource;

static getControlShadow(): ColorUIResource;

static getControlDarkShadow(): ColorUIResource;

static getControlInfo(): ColorUIResource;

static getControlHighlight(): ColorUIResource;

static getControlDisabled(): ColorUIResource;

static getPrimaryControl(): ColorUIResource;

static getPrimaryControlShadow(): ColorUIResource;

static getPrimaryControlDarkShadow(): ColorUIResource;

static getPrimaryControlInfo(): ColorUIResource;

static getPrimaryControlHighlight(): ColorUIResource;

static getSystemTextColor(): ColorUIResource;

static getControlTextColor(): ColorUIResource;

static getInactiveControlTextColor(): ColorUIResource;

static getInactiveSystemTextColor(): ColorUIResource;

static getUserTextColor(): ColorUIResource;

static getTextHighlightColor(): ColorUIResource;

static getHighlightedTextColor(): ColorUIResource;

static getWindowBackground(): ColorUIResource;

static getWindowTitleBackground(): ColorUIResource;

static getWindowTitleForeground(): ColorUIResource;

static getWindowTitleInactiveBackground(): ColorUIResource;

static getWindowTitleInactiveForeground(): ColorUIResource;

static getMenuBackground(): ColorUIResource;

static getMenuForeground(): ColorUIResource;

static getMenuSelectedBackground(): ColorUIResource;

static getMenuSelectedForeground(): ColorUIResource;

static getMenuDisabledForeground(): ColorUIResource;

static getSeparatorBackground(): ColorUIResource;

static getSeparatorForeground(): ColorUIResource;

static getAcceleratorForeground(): ColorUIResource;

static getAcceleratorSelectedForeground(): ColorUIResource;

getLayoutStyle(): LayoutStyle;
 }

export class MetalMenuBarUI extends BasicMenuBarUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

update(arg0: Graphics, arg1: JComponent): void;
 }

export class MetalPopupMenuSeparatorUI extends MetalSeparatorUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;
 }

export class MetalProgressBarUI extends BasicProgressBarUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

paintDeterminate(arg0: Graphics, arg1: JComponent): void;

paintIndeterminate(arg0: Graphics, arg1: JComponent): void;
 }

export class MetalRadioButtonUI extends BasicRadioButtonUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installDefaults(arg0: AbstractButton): void;

paint(arg0: Graphics, arg1: JComponent): void;
 }

export class MetalRootPaneUI extends BasicRootPaneUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class MetalScrollBarUI extends BasicScrollBarUI {
static FREE_STANDING_PROP:String
constructor();

static createUI(arg0: JComponent): ComponentUI;

getPreferredSize(arg0: JComponent): Dimension;
 }

export class MetalScrollButton extends BasicArrowButton {
constructor(arg0: number, arg1: number, arg2: boolean);

setFreeStanding(arg0: boolean): void;

paint(arg0: Graphics): void;

getPreferredSize(): Dimension;

getMinimumSize(): Dimension;

getMaximumSize(): Dimension;

getButtonWidth(): number;
 }

export class MetalScrollPaneUI extends BasicScrollPaneUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

installListeners(arg0: JScrollPane): void;

uninstallListeners(arg0: JScrollPane): void;
 }

export class MetalSeparatorUI extends BasicSeparatorUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;
 }

export class MetalSliderUI extends BasicSliderUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

paintThumb(arg0: Graphics): void;

paintTrack(arg0: Graphics): void;

paintFocus(arg0: Graphics): void;

getTickLength(): number;
 }
export namespace MetalSliderUI { 
export class MetalPropertyListener extends BasicSliderUI.PropertyChangeHandler {

propertyChange(arg0: PropertyChangeEvent): void;
 }

}

export class MetalSplitPaneUI extends BasicSplitPaneUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

createDefaultDivider(): BasicSplitPaneDivider;
 }

export class MetalTabbedPaneUI extends BasicTabbedPaneUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;
 }
export namespace MetalTabbedPaneUI { 
export class TabbedPaneLayout extends BasicTabbedPaneUI.TabbedPaneLayout {
constructor(arg0: MetalTabbedPaneUI);
 }

}

export class MetalTextFieldUI extends BasicTextFieldUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export abstract class MetalTheme {

abstract getName(): String;

abstract getControlTextFont(): FontUIResource;

abstract getSystemTextFont(): FontUIResource;

abstract getUserTextFont(): FontUIResource;

abstract getMenuTextFont(): FontUIResource;

abstract getWindowTitleFont(): FontUIResource;

abstract getSubTextFont(): FontUIResource;

getFocusColor(): ColorUIResource;

getDesktopColor(): ColorUIResource;

getControl(): ColorUIResource;

getControlShadow(): ColorUIResource;

getControlDarkShadow(): ColorUIResource;

getControlInfo(): ColorUIResource;

getControlHighlight(): ColorUIResource;

getControlDisabled(): ColorUIResource;

getPrimaryControl(): ColorUIResource;

getPrimaryControlShadow(): ColorUIResource;

getPrimaryControlDarkShadow(): ColorUIResource;

getPrimaryControlInfo(): ColorUIResource;

getPrimaryControlHighlight(): ColorUIResource;

getSystemTextColor(): ColorUIResource;

getControlTextColor(): ColorUIResource;

getInactiveControlTextColor(): ColorUIResource;

getInactiveSystemTextColor(): ColorUIResource;

getUserTextColor(): ColorUIResource;

getTextHighlightColor(): ColorUIResource;

getHighlightedTextColor(): ColorUIResource;

getWindowBackground(): ColorUIResource;

getWindowTitleBackground(): ColorUIResource;

getWindowTitleForeground(): ColorUIResource;

getWindowTitleInactiveBackground(): ColorUIResource;

getWindowTitleInactiveForeground(): ColorUIResource;

getMenuBackground(): ColorUIResource;

getMenuForeground(): ColorUIResource;

getMenuSelectedBackground(): ColorUIResource;

getMenuSelectedForeground(): ColorUIResource;

getMenuDisabledForeground(): ColorUIResource;

getSeparatorBackground(): ColorUIResource;

getSeparatorForeground(): ColorUIResource;

getAcceleratorForeground(): ColorUIResource;

getAcceleratorSelectedForeground(): ColorUIResource;

addCustomEntriesToTable(arg0: UIDefaults): void;
 }

export class MetalToggleButtonUI extends BasicToggleButtonUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installDefaults(arg0: AbstractButton): void;

update(arg0: Graphics, arg1: JComponent): void;
 }

export class MetalToolBarUI extends BasicToolBarUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

update(arg0: Graphics, arg1: JComponent): void;
 }
export namespace MetalToolBarUI { 
export class MetalContainerListener extends BasicToolBarUI.ToolBarContListener {
 }

export class MetalDockingListener extends BasicToolBarUI.DockingListener {
constructor(arg0: MetalToolBarUI, arg1: JToolBar);

mousePressed(arg0: MouseEvent): void;

mouseDragged(arg0: MouseEvent): void;
 }

export class MetalRolloverListener extends BasicToolBarUI.PropertyListener {
 }

}

export class MetalToolTipUI extends BasicToolTipUI {
static padSpaceBetweenStrings:number
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

getAcceleratorString(): String;
 }

export class MetalTreeUI extends BasicTreeUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;
 }

export class OceanTheme extends DefaultMetalTheme {
constructor();

addCustomEntriesToTable(arg0: UIDefaults): void;

getName(): String;

getDesktopColor(): ColorUIResource;

getInactiveControlTextColor(): ColorUIResource;

getControlTextColor(): ColorUIResource;

getMenuDisabledForeground(): ColorUIResource;
 }

}
