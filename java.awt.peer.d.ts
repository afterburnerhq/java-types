/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.awt.image.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="sun.java2d.pipe.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.awt.event.d.ts" />
/// <reference path="java.awt.desktop.d.ts" />
/// <reference path="java.awt.im.d.ts" />
/// <reference path="javax.swing.d.ts" />
declare module '@afterburnerhq/java.awt.peer' { 
import { Window, Insets, CheckboxGroup, Color, Rectangle, MenuBar, MenuItem, Point, Dimension, Image, Adjustable, Font, GraphicsConfiguration, Graphics, Desktop, BufferCapabilities, FontMetrics, Taskbar, Dialog, AWTEvent, Event, Menu, Component, PopupMenu } from '@afterburnerhq/java.awt'
import { String } from '@afterburnerhq/java.lang'
import { VolatileImage, ColorModel } from '@afterburnerhq/java.awt.image'
import { List } from '@afterburnerhq/java.util'
import { URI } from '@afterburnerhq/java.net'
import { Region } from '@afterburnerhq/sun.java2d.pipe'
import { File, FilenameFilter } from '@afterburnerhq/java.io'
import { FocusEvent, PaintEvent } from '@afterburnerhq/java.awt.event'
import { QuitHandler, SystemEventListener, QuitStrategy, PreferencesHandler, OpenFilesHandler, PrintFilesHandler, OpenURIHandler, AboutHandler } from '@afterburnerhq/java.awt.desktop'
import { InputMethodRequests } from '@afterburnerhq/java.awt.im'
import { JMenuBar } from '@afterburnerhq/javax.swing'
export interface ButtonPeer extends ComponentPeer {

setLabel(arg0: String): void;
 }

export interface CanvasPeer extends ComponentPeer {

getAppropriateGraphicsConfiguration(arg0: GraphicsConfiguration): GraphicsConfiguration;
 }

export interface CheckboxMenuItemPeer extends MenuItemPeer {

setState(arg0: boolean): void;
 }

export interface CheckboxPeer extends ComponentPeer {

setState(arg0: boolean): void;

setCheckboxGroup(arg0: CheckboxGroup): void;

setLabel(arg0: String): void;
 }

export interface ChoicePeer extends ComponentPeer {

add(arg0: String, arg1: number): void;

remove(arg0: number): void;

removeAll(): void;

select(arg0: number): void;
 }

export namespace ComponentPeer { 
const SET_LOCATION:number
const SET_SIZE:number
const SET_BOUNDS:number
const SET_CLIENT_SIZE:number
const RESET_OPERATION:number
const NO_EMBEDDED_CHECK:number
const DEFAULT_OPERATION:number
}

export interface ComponentPeer {
SET_LOCATION:number
SET_SIZE:number
SET_BOUNDS:number
SET_CLIENT_SIZE:number
RESET_OPERATION:number
NO_EMBEDDED_CHECK:number
DEFAULT_OPERATION:number

isObscured(): boolean;

canDetermineObscurity(): boolean;

setVisible(arg0: boolean): void;

setEnabled(arg0: boolean): void;

paint(arg0: Graphics): void;

print(arg0: Graphics): void;

setBounds(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;

handleEvent(arg0: AWTEvent): void;

coalescePaintEvent(arg0: PaintEvent): void;

getLocationOnScreen(): Point;

getPreferredSize(): Dimension;

getMinimumSize(): Dimension;

getColorModel(): ColorModel;

getGraphics(): Graphics;

getFontMetrics(arg0: Font): FontMetrics;

dispose(): void;

setForeground(arg0: Color): void;

setBackground(arg0: Color): void;

setFont(arg0: Font): void;

updateCursorImmediately(): void;

requestFocus(arg0: Component, arg1: boolean, arg2: boolean, arg3: number, arg4: FocusEvent.Cause): boolean;

isFocusable(): boolean;

createImage(arg0: number, arg1: number): Image;

createVolatileImage(arg0: number, arg1: number): VolatileImage;

getGraphicsConfiguration(): GraphicsConfiguration;

handlesWheelScrolling(): boolean;

createBuffers(arg0: number, arg1: BufferCapabilities): void;

getBackBuffer(): Image;

flip(arg0: number, arg1: number, arg2: number, arg3: number, arg4: BufferCapabilities.FlipContents): void;

destroyBuffers(): void;

reparent(arg0: ContainerPeer): void;

isReparentSupported(): boolean;

layout(): void;

applyShape(arg0: Region): void;

setZOrder(arg0: ComponentPeer): void;

updateGraphicsData(arg0: GraphicsConfiguration): boolean;
 }

export interface ContainerPeer extends ComponentPeer {

getInsets(): Insets;

beginValidate(): void;

endValidate(): void;

beginLayout(): void;

endLayout(): void;
 }

export interface DesktopPeer {

isSupported(arg0: Desktop.Action): boolean;

open(arg0: File): void;

edit(arg0: File): void;

print(arg0: File): void;

mail(arg0: URI): void;

browse(arg0: URI): void;

/* default */ addAppEventListener(arg0: SystemEventListener): void;

/* default */ removeAppEventListener(arg0: SystemEventListener): void;

/* default */ setAboutHandler(arg0: AboutHandler): void;

/* default */ setPreferencesHandler(arg0: PreferencesHandler): void;

/* default */ setOpenFileHandler(arg0: OpenFilesHandler): void;

/* default */ setPrintFileHandler(arg0: PrintFilesHandler): void;

/* default */ setOpenURIHandler(arg0: OpenURIHandler): void;

/* default */ setQuitHandler(arg0: QuitHandler): void;

/* default */ setQuitStrategy(arg0: QuitStrategy): void;

/* default */ enableSuddenTermination(): void;

/* default */ disableSuddenTermination(): void;

/* default */ requestForeground(arg0: boolean): void;

/* default */ openHelpViewer(): void;

/* default */ setDefaultMenuBar(arg0: JMenuBar): void;

/* default */ browseFileDirectory(arg0: File): boolean;

/* default */ moveToTrash(arg0: File): boolean;
 }

export interface DialogPeer extends WindowPeer {

setTitle(arg0: String): void;

setResizable(arg0: boolean): void;

blockWindows(arg0: List<Window>): void;
 }

export interface FileDialogPeer extends DialogPeer {

setFile(arg0: String): void;

setDirectory(arg0: String): void;

setFilenameFilter(arg0: FilenameFilter): void;
 }

export interface FontPeer {
 }

export interface FramePeer extends WindowPeer {

setTitle(arg0: String): void;

setMenuBar(arg0: MenuBar): void;

setResizable(arg0: boolean): void;

setState(arg0: number): void;

getState(): number;

setMaximizedBounds(arg0: Rectangle): void;

setBoundsPrivate(arg0: number, arg1: number, arg2: number, arg3: number): void;

getBoundsPrivate(): Rectangle;

emulateActivation(arg0: boolean): void;
 }

export interface KeyboardFocusManagerPeer {

setCurrentFocusedWindow(arg0: Window): void;

getCurrentFocusedWindow(): Window;

setCurrentFocusOwner(arg0: Component): void;

getCurrentFocusOwner(): Component;

clearGlobalFocusOwner(arg0: Window): void;
 }

export interface LabelPeer extends ComponentPeer {

setText(arg0: String): void;

setAlignment(arg0: number): void;
 }

export interface LightweightPeer extends ComponentPeer {
 }

export interface ListPeer extends ComponentPeer {

getSelectedIndexes(): number[];

add(arg0: String, arg1: number): void;

delItems(arg0: number, arg1: number): void;

removeAll(): void;

select(arg0: number): void;

deselect(arg0: number): void;

makeVisible(arg0: number): void;

setMultipleMode(arg0: boolean): void;

getPreferredSize(arg0: number): Dimension;

getMinimumSize(arg0: number): Dimension;
 }

export interface MenuBarPeer extends MenuComponentPeer {

addMenu(arg0: Menu): void;

delMenu(arg0: number): void;

addHelpMenu(arg0: Menu): void;
 }

export interface MenuComponentPeer {

dispose(): void;

setFont(arg0: Font): void;
 }

export interface MenuItemPeer extends MenuComponentPeer {

setLabel(arg0: String): void;

setEnabled(arg0: boolean): void;
 }

export interface MenuPeer extends MenuItemPeer {

addItem(arg0: MenuItem): void;

delItem(arg0: number): void;
 }

export interface MouseInfoPeer {

fillPointWithCoords(arg0: Point): number;

isWindowUnderMouse(arg0: Window): boolean;
 }

export interface PanelPeer extends ContainerPeer {
 }

export interface PopupMenuPeer extends MenuPeer {

show(arg0: Event): void;
 }

export interface RobotPeer {

mouseMove(arg0: number, arg1: number): void;

mousePress(arg0: number): void;

mouseRelease(arg0: number): void;

mouseWheel(arg0: number): void;

keyPress(arg0: number): void;

keyRelease(arg0: number): void;

getRGBPixel(arg0: number, arg1: number): number;

getRGBPixels(arg0: Rectangle): number[];

/* default */ useAbsoluteCoordinates(): boolean;
 }

export interface ScrollPanePeer extends ContainerPeer {

getHScrollbarHeight(): number;

getVScrollbarWidth(): number;

setScrollPosition(arg0: number, arg1: number): void;

childResized(arg0: number, arg1: number): void;

setUnitIncrement(arg0: Adjustable, arg1: number): void;

setValue(arg0: Adjustable, arg1: number): void;
 }

export interface ScrollbarPeer extends ComponentPeer {

setValues(arg0: number, arg1: number, arg2: number, arg3: number): void;

setLineIncrement(arg0: number): void;

setPageIncrement(arg0: number): void;
 }

export interface SystemTrayPeer {

getTrayIconSize(): Dimension;
 }

export interface TaskbarPeer {

/* default */ requestUserAttention(arg0: boolean, arg1: boolean): void;

/* default */ requestWindowUserAttention(arg0: Window): void;

/* default */ setMenu(arg0: PopupMenu): void;

/* default */ getMenu(): PopupMenu;

/* default */ setIconImage(arg0: Image): void;

/* default */ getIconImage(): Image;

/* default */ setIconBadge(arg0: String): void;

/* default */ setWindowIconBadge(arg0: Window, arg1: Image): void;

/* default */ setWindowProgressValue(arg0: Window, arg1: number): void;

/* default */ setWindowProgressState(arg0: Window, arg1: Taskbar.State): void;

/* default */ setProgressValue(arg0: number): void;

/* default */ isSupported(arg0: Taskbar.Feature): boolean;
 }

export interface TextAreaPeer extends TextComponentPeer {

insert(arg0: String, arg1: number): void;

replaceRange(arg0: String, arg1: number, arg2: number): void;

getPreferredSize(arg0: number, arg1: number): Dimension;

getMinimumSize(arg0: number, arg1: number): Dimension;
 }

export interface TextComponentPeer extends ComponentPeer {

setEditable(arg0: boolean): void;

getText(): String;

setText(arg0: String): void;

getSelectionStart(): number;

getSelectionEnd(): number;

select(arg0: number, arg1: number): void;

setCaretPosition(arg0: number): void;

getCaretPosition(): number;

getInputMethodRequests(): InputMethodRequests;
 }

export interface TextFieldPeer extends TextComponentPeer {

setEchoChar(arg0: String): void;

getPreferredSize(arg0: number): Dimension;

getMinimumSize(arg0: number): Dimension;
 }

export interface TrayIconPeer {

dispose(): void;

setToolTip(arg0: String): void;

updateImage(): void;

displayMessage(arg0: String, arg1: String, arg2: String): void;

showPopupMenu(arg0: number, arg1: number): void;
 }

export interface WindowPeer extends ContainerPeer {

toFront(): void;

toBack(): void;

updateAlwaysOnTopState(): void;

updateFocusableWindowState(): void;

setModalBlocked(arg0: Dialog, arg1: boolean): void;

updateMinimumSize(): void;

updateIconImages(): void;

setOpacity(arg0: number): void;

setOpaque(arg0: boolean): void;

updateWindow(): void;

repositionSecurityWarning(): void;
 }

}
