/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="javax.swing.plaf.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.beans.d.ts" />
/// <reference path="javax.swing.plaf.basic.d.ts" />
/// <reference path="javax.swing.text.d.ts" />
/// <reference path="javax.swing.d.ts" />
declare module '@afterburnerhq/javax.swing.plaf.synth' { 
import { Graphics, Insets, FontMetrics, Color, Rectangle, Dimension, Component, Font } from '@afterburnerhq/java.awt'
import { Class, String } from '@afterburnerhq/java.lang'
import { URL } from '@afterburnerhq/java.net'
import { ComponentUI, SeparatorUI, ViewportUI } from '@afterburnerhq/javax.swing.plaf'
import { InputStream } from '@afterburnerhq/java.io'
import { PropertyChangeListener, PropertyChangeEvent } from '@afterburnerhq/java.beans'
import { BasicTextAreaUI, BasicInternalFrameUI, BasicDesktopPaneUI, BasicSliderUI, BasicScrollPaneUI, BasicTabbedPaneUI, BasicButtonUI, BasicPopupMenuUI, BasicToolTipUI, BasicLabelUI, BasicRootPaneUI, BasicSpinnerUI, BasicScrollBarUI, BasicTreeUI, BasicColorChooserUI, BasicTableHeaderUI, BasicToolBarUI, BasicProgressBarUI, BasicEditorPaneUI, BasicOptionPaneUI, BasicPanelUI, BasicTextFieldUI, BasicMenuItemUI, BasicSplitPaneDivider, BasicComboBoxUI, BasicLookAndFeel, BasicMenuUI, BasicTableUI, BasicDesktopIconUI, BasicListUI, BasicSplitPaneUI, BasicMenuBarUI } from '@afterburnerhq/javax.swing.plaf.basic'
import { View, Element } from '@afterburnerhq/javax.swing.text'
import { JComponent, UIDefaults, Icon, JSplitPane, JSeparator } from '@afterburnerhq/javax.swing'
export class ColorType {
static FOREGROUND:ColorType
static BACKGROUND:ColorType
static TEXT_FOREGROUND:ColorType
static TEXT_BACKGROUND:ColorType
static FOCUS:ColorType
static MAX_COUNT:number

getID(): number;
toString(): string;
 }

export class Region {
static ARROW_BUTTON:Region
static BUTTON:Region
static CHECK_BOX:Region
static CHECK_BOX_MENU_ITEM:Region
static COLOR_CHOOSER:Region
static COMBO_BOX:Region
static DESKTOP_PANE:Region
static DESKTOP_ICON:Region
static EDITOR_PANE:Region
static FILE_CHOOSER:Region
static FORMATTED_TEXT_FIELD:Region
static INTERNAL_FRAME:Region
static INTERNAL_FRAME_TITLE_PANE:Region
static LABEL:Region
static LIST:Region
static MENU:Region
static MENU_BAR:Region
static MENU_ITEM:Region
static MENU_ITEM_ACCELERATOR:Region
static OPTION_PANE:Region
static PANEL:Region
static PASSWORD_FIELD:Region
static POPUP_MENU:Region
static POPUP_MENU_SEPARATOR:Region
static PROGRESS_BAR:Region
static RADIO_BUTTON:Region
static RADIO_BUTTON_MENU_ITEM:Region
static ROOT_PANE:Region
static SCROLL_BAR:Region
static SCROLL_BAR_TRACK:Region
static SCROLL_BAR_THUMB:Region
static SCROLL_PANE:Region
static SEPARATOR:Region
static SLIDER:Region
static SLIDER_TRACK:Region
static SLIDER_THUMB:Region
static SPINNER:Region
static SPLIT_PANE:Region
static SPLIT_PANE_DIVIDER:Region
static TABBED_PANE:Region
static TABBED_PANE_TAB:Region
static TABBED_PANE_TAB_AREA:Region
static TABBED_PANE_CONTENT:Region
static TABLE:Region
static TABLE_HEADER:Region
static TEXT_AREA:Region
static TEXT_FIELD:Region
static TEXT_PANE:Region
static TOGGLE_BUTTON:Region
static TOOL_BAR:Region
static TOOL_BAR_CONTENT:Region
static TOOL_BAR_DRAG_WINDOW:Region
static TOOL_TIP:Region
static TOOL_BAR_SEPARATOR:Region
static TREE:Region
static TREE_CELL:Region
static VIEWPORT:Region

isSubregion(): boolean;

getName(): String;
toString(): string;
 }

export class SynthButtonUI extends BasicButtonUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getContext(arg0: JComponent): SynthContext;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getMinimumSize(arg0: JComponent): Dimension;

getPreferredSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthCheckBoxMenuItemUI extends SynthMenuItemUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;
 }

export class SynthCheckBoxUI extends SynthRadioButtonUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;
 }

export class SynthColorChooserUI extends BasicColorChooserUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthComboBoxUI extends BasicComboBoxUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

getContext(arg0: JComponent): SynthContext;

propertyChange(arg0: PropertyChangeEvent): void;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintCurrentValue(arg0: Graphics, arg1: Rectangle, arg2: boolean): void;
 }

export namespace SynthConstants { 
const ENABLED:number
const MOUSE_OVER:number
const PRESSED:number
const DISABLED:number
const FOCUSED:number
const SELECTED:number
const DEFAULT:number
}

export interface SynthConstants {
ENABLED:number
MOUSE_OVER:number
PRESSED:number
DISABLED:number
FOCUSED:number
SELECTED:number
DEFAULT:number
 }

export class SynthContext {
constructor(arg0: JComponent, arg1: Region, arg2: SynthStyle, arg3: number);

getComponent(): JComponent;

getRegion(): Region;

getStyle(): SynthStyle;

getComponentState(): number;
 }

export class SynthDesktopIconUI extends BasicDesktopIconUI implements SynthUI, PropertyChangeListener {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthDesktopPaneUI extends BasicDesktopPaneUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthEditorPaneUI extends BasicEditorPaneUI implements SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;
 }

export class SynthFormattedTextFieldUI extends SynthTextFieldUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;
 }

export class SynthGraphicsUtils {
constructor();

drawLine(arg0: SynthContext, arg1: Object, arg2: Graphics, arg3: number, arg4: number, arg5: number, arg6: number): void;

drawLine(arg0: SynthContext, arg1: Object, arg2: Graphics, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Object): void;

layoutText(arg0: SynthContext, arg1: FontMetrics, arg2: String, arg3: Icon, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Rectangle, arg9: Rectangle, arg10: Rectangle, arg11: number): String;

computeStringWidth(arg0: SynthContext, arg1: Font, arg2: FontMetrics, arg3: String): number;

getMinimumSize(arg0: SynthContext, arg1: Font, arg2: String, arg3: Icon, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): Dimension;

getMaximumSize(arg0: SynthContext, arg1: Font, arg2: String, arg3: Icon, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): Dimension;

getMaximumCharHeight(arg0: SynthContext): number;

getPreferredSize(arg0: SynthContext, arg1: Font, arg2: String, arg3: Icon, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): Dimension;

paintText(arg0: SynthContext, arg1: Graphics, arg2: String, arg3: Rectangle, arg4: number): void;

paintText(arg0: SynthContext, arg1: Graphics, arg2: String, arg3: number, arg4: number, arg5: number): void;

paintText(arg0: SynthContext, arg1: Graphics, arg2: String, arg3: Icon, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;

static getIconWidth(arg0: Icon, arg1: SynthContext): number;

static getIconHeight(arg0: Icon, arg1: SynthContext): number;

static paintIcon(arg0: Icon, arg1: SynthContext, arg2: Graphics, arg3: number, arg4: number, arg5: number, arg6: number): void;
 }

export interface SynthIcon extends Icon {

paintIcon(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getIconWidth(arg0: SynthContext): number;

getIconHeight(arg0: SynthContext): number;

/* default */ paintIcon(arg0: Component, arg1: Graphics, arg2: number, arg3: number): void;

/* default */ getIconWidth(): number;

/* default */ getIconHeight(): number;
 }

export class SynthInternalFrameUI extends BasicInternalFrameUI implements SynthUI, PropertyChangeListener {

static createUI(arg0: JComponent): ComponentUI;

installDefaults(): void;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthLabelUI extends BasicLabelUI implements SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getContext(arg0: JComponent): SynthContext;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthListUI extends BasicListUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

update(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

propertyChange(arg0: PropertyChangeEvent): void;

getContext(arg0: JComponent): SynthContext;
 }

export class SynthLookAndFeel extends BasicLookAndFeel {
constructor();

static setStyleFactory(arg0: SynthStyleFactory): void;

static getStyleFactory(): SynthStyleFactory;

static getStyle(arg0: JComponent, arg1: Region): SynthStyle;

static updateStyles(arg0: Component): void;

static getRegion(arg0: JComponent): Region;

static createUI(arg0: JComponent): ComponentUI;

load(arg0: InputStream, arg1: Class<any>): void;

load(arg0: URL): void;

initialize(): void;

uninitialize(): void;

getDefaults(): UIDefaults;

isSupportedLookAndFeel(): boolean;

isNativeLookAndFeel(): boolean;

getDescription(): String;

getName(): String;

getID(): String;

shouldUpdateStyleOnAncestorChanged(): boolean;
 }

export class SynthMenuBarUI extends BasicMenuBarUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthMenuItemUI extends BasicMenuItemUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

uninstallUI(arg0: JComponent): void;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthMenuUI extends BasicMenuUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

uninstallUI(arg0: JComponent): void;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthOptionPaneUI extends BasicOptionPaneUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export abstract class SynthPainter {

paintArrowButtonBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintArrowButtonBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintArrowButtonForeground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintButtonBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintButtonBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintCheckBoxMenuItemBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintCheckBoxMenuItemBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintCheckBoxBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintCheckBoxBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintColorChooserBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintColorChooserBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintComboBoxBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintComboBoxBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintDesktopIconBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintDesktopIconBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintDesktopPaneBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintDesktopPaneBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintEditorPaneBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintEditorPaneBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintFileChooserBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintFileChooserBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintFormattedTextFieldBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintFormattedTextFieldBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintInternalFrameTitlePaneBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintInternalFrameTitlePaneBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintInternalFrameBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintInternalFrameBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintLabelBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintLabelBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintListBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintListBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintMenuBarBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintMenuBarBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintMenuItemBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintMenuItemBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintMenuBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintMenuBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintOptionPaneBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintOptionPaneBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintPanelBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintPanelBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintPasswordFieldBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintPasswordFieldBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintPopupMenuBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintPopupMenuBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintProgressBarBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintProgressBarBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintProgressBarBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintProgressBarBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintProgressBarForeground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintRadioButtonMenuItemBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintRadioButtonMenuItemBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintRadioButtonBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintRadioButtonBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintRootPaneBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintRootPaneBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintScrollBarBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintScrollBarBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintScrollBarBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintScrollBarBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintScrollBarThumbBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintScrollBarThumbBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintScrollBarTrackBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintScrollBarTrackBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintScrollBarTrackBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintScrollBarTrackBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintScrollPaneBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintScrollPaneBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintSeparatorBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintSeparatorBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintSeparatorBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintSeparatorBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintSeparatorForeground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintSliderBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintSliderBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintSliderBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintSliderBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintSliderThumbBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintSliderThumbBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintSliderTrackBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintSliderTrackBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintSliderTrackBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintSliderTrackBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintSpinnerBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintSpinnerBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintSplitPaneDividerBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintSplitPaneDividerBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintSplitPaneDividerForeground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintSplitPaneDragDivider(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintSplitPaneBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintSplitPaneBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTabbedPaneBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTabbedPaneBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTabbedPaneTabAreaBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTabbedPaneTabAreaBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintTabbedPaneTabAreaBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTabbedPaneTabAreaBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintTabbedPaneTabBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintTabbedPaneTabBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;

paintTabbedPaneTabBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintTabbedPaneTabBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;

paintTabbedPaneContentBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTabbedPaneContentBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTableHeaderBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTableHeaderBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTableBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTableBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTextAreaBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTextAreaBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTextPaneBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTextPaneBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTextFieldBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTextFieldBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintToggleButtonBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintToggleButtonBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintToolBarBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintToolBarBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintToolBarBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintToolBarBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintToolBarContentBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintToolBarContentBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintToolBarContentBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintToolBarContentBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintToolBarDragWindowBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintToolBarDragWindowBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintToolBarDragWindowBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintToolBarDragWindowBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

paintToolTipBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintToolTipBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTreeBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTreeBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTreeCellBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTreeCellBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintTreeCellFocus(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintViewportBackground(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paintViewportBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;
 }

export class SynthPanelUI extends BasicPanelUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthPasswordFieldUI extends SynthTextFieldUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

create(arg0: Element): View;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;
 }

export class SynthPopupMenuUI extends BasicPopupMenuUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installDefaults(): void;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthProgressBarUI extends BasicProgressBarUI implements SynthUI, PropertyChangeListener {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getContext(arg0: JComponent): SynthContext;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

propertyChange(arg0: PropertyChangeEvent): void;

getPreferredSize(arg0: JComponent): Dimension;
 }

export class SynthRadioButtonMenuItemUI extends SynthMenuItemUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;
 }

export class SynthRadioButtonUI extends SynthToggleButtonUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;
 }

export class SynthRootPaneUI extends BasicRootPaneUI implements SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthScrollBarUI extends BasicScrollBarUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getContext(arg0: JComponent): SynthContext;

getSupportsAbsolutePositioning(): boolean;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getPreferredSize(arg0: JComponent): Dimension;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthScrollPaneUI extends BasicScrollPaneUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getContext(arg0: JComponent): SynthContext;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthSeparatorUI extends SeparatorUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

installDefaults(arg0: JSeparator): void;

uninstallDefaults(arg0: JSeparator): void;

installListeners(arg0: JSeparator): void;

uninstallListeners(arg0: JSeparator): void;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

getMaximumSize(arg0: JComponent): Dimension;

getContext(arg0: JComponent): SynthContext;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthSliderUI extends BasicSliderUI implements PropertyChangeListener, SynthUI {

static createUI(arg0: JComponent): ComponentUI;

getBaseline(arg0: JComponent, arg1: number, arg2: number): number;

getPreferredSize(arg0: JComponent): Dimension;

getMinimumSize(arg0: JComponent): Dimension;

setThumbLocation(arg0: number, arg1: number): void;

valueForYPosition(arg0: number): number;

valueForXPosition(arg0: number): number;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthSpinnerUI extends BasicSpinnerUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthSplitPaneUI extends BasicSplitPaneUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getContext(arg0: JComponent): SynthContext;

propertyChange(arg0: PropertyChangeEvent): void;

createDefaultDivider(): BasicSplitPaneDivider;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

finishedPaintingChildren(arg0: JSplitPane, arg1: Graphics): void;
 }

export abstract class SynthStyle {
constructor();

getGraphicsUtils(arg0: SynthContext): SynthGraphicsUtils;

getColor(arg0: SynthContext, arg1: ColorType): Color;

getFont(arg0: SynthContext): Font;

getInsets(arg0: SynthContext, arg1: Insets): Insets;

getPainter(arg0: SynthContext): SynthPainter;

isOpaque(arg0: SynthContext): boolean;

get(arg0: SynthContext, arg1: Object): Object;

installDefaults(arg0: SynthContext): void;

uninstallDefaults(arg0: SynthContext): void;

getInt(arg0: SynthContext, arg1: Object, arg2: number): number;

getBoolean(arg0: SynthContext, arg1: Object, arg2: boolean): boolean;

getIcon(arg0: SynthContext, arg1: Object): Icon;

getString(arg0: SynthContext, arg1: Object, arg2: String): String;
 }

export abstract class SynthStyleFactory {
constructor();

abstract getStyle(arg0: JComponent, arg1: Region): SynthStyle;
 }

export class SynthTabbedPaneUI extends BasicTabbedPaneUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getContext(arg0: JComponent): SynthContext;

propertyChange(arg0: PropertyChangeEvent): void;

update(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paint(arg0: Graphics, arg1: JComponent): void;
 }

export class SynthTableHeaderUI extends BasicTableHeaderUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getContext(arg0: JComponent): SynthContext;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthTableUI extends BasicTableUI implements SynthUI, PropertyChangeListener {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paint(arg0: Graphics, arg1: JComponent): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthTextAreaUI extends BasicTextAreaUI implements SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;
 }

export class SynthTextFieldUI extends BasicTextFieldUI implements SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;
 }

export class SynthTextPaneUI extends SynthEditorPaneUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;
 }

export class SynthToggleButtonUI extends SynthButtonUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;
 }

export class SynthToolBarUI extends BasicToolBarUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paint(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthToolTipUI extends BasicToolTipUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paint(arg0: Graphics, arg1: JComponent): void;

getPreferredSize(arg0: JComponent): Dimension;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export class SynthTreeUI extends BasicTreeUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

getExpandedIcon(): Icon;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paint(arg0: Graphics, arg1: JComponent): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }

export interface SynthUI extends SynthConstants {

getContext(arg0: JComponent): SynthContext;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;
 }

export class SynthViewportUI extends ViewportUI implements PropertyChangeListener, SynthUI {
constructor();

static createUI(arg0: JComponent): ComponentUI;

installUI(arg0: JComponent): void;

uninstallUI(arg0: JComponent): void;

getContext(arg0: JComponent): SynthContext;

update(arg0: Graphics, arg1: JComponent): void;

paintBorder(arg0: SynthContext, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

paint(arg0: Graphics, arg1: JComponent): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }

}
