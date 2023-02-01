/// <reference path="java.awt.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.text.d.ts" />
/// <reference path="java.awt.font.d.ts" />
declare module '@afterburnerhq/java.awt.event' { 
import { Window, Container, ActiveEvent, Rectangle, AWTEvent, Point, Component, Adjustable, ItemSelectable } from '@afterburnerhq/java.awt'
import { EventListener, EventListenerProxy } from '@afterburnerhq/java.util'
import { Enum, Throwable, Class, String, Exception, Runnable } from '@afterburnerhq/java.lang'
import { AttributedCharacterIterator } from '@afterburnerhq/java.text'
import { TextHitInfo } from '@afterburnerhq/java.awt.font'
export interface AWTEventListener extends EventListener {

eventDispatched(arg0: AWTEvent): void;
 }

export class AWTEventListenerProxy extends EventListenerProxy<AWTEventListener> implements AWTEventListener {
constructor(arg0: number, arg1: AWTEventListener);

eventDispatched(arg0: AWTEvent): void;

getEventMask(): number;
 }

export class ActionEvent extends AWTEvent {
static SHIFT_MASK:number
static CTRL_MASK:number
static META_MASK:number
static ALT_MASK:number
static ACTION_FIRST:number
static ACTION_LAST:number
static ACTION_PERFORMED:number
constructor(arg0: Object, arg1: number, arg2: String);
constructor(arg0: Object, arg1: number, arg2: String, arg3: number);
constructor(arg0: Object, arg1: number, arg2: String, arg3: number, arg4: number);

getActionCommand(): String;

getWhen(): number;

getModifiers(): number;

paramString(): String;
 }

export interface ActionListener extends EventListener {

actionPerformed(arg0: ActionEvent): void;
 }

export class AdjustmentEvent extends AWTEvent {
static ADJUSTMENT_FIRST:number
static ADJUSTMENT_LAST:number
static ADJUSTMENT_VALUE_CHANGED:number
static UNIT_INCREMENT:number
static UNIT_DECREMENT:number
static BLOCK_DECREMENT:number
static BLOCK_INCREMENT:number
static TRACK:number
constructor(arg0: Adjustable, arg1: number, arg2: number, arg3: number);
constructor(arg0: Adjustable, arg1: number, arg2: number, arg3: number, arg4: boolean);

getAdjustable(): Adjustable;

getValue(): number;

getAdjustmentType(): number;

getValueIsAdjusting(): boolean;

paramString(): String;
 }

export interface AdjustmentListener extends EventListener {

adjustmentValueChanged(arg0: AdjustmentEvent): void;
 }

export abstract class ComponentAdapter implements ComponentListener {

componentResized(arg0: ComponentEvent): void;

componentMoved(arg0: ComponentEvent): void;

componentShown(arg0: ComponentEvent): void;

componentHidden(arg0: ComponentEvent): void;
 }

export class ComponentEvent extends AWTEvent {
static COMPONENT_FIRST:number
static COMPONENT_LAST:number
static COMPONENT_MOVED:number
static COMPONENT_RESIZED:number
static COMPONENT_SHOWN:number
static COMPONENT_HIDDEN:number
constructor(arg0: Component, arg1: number);

getComponent(): Component;

paramString(): String;
 }

export interface ComponentListener extends EventListener {

componentResized(arg0: ComponentEvent): void;

componentMoved(arg0: ComponentEvent): void;

componentShown(arg0: ComponentEvent): void;

componentHidden(arg0: ComponentEvent): void;
 }

export abstract class ContainerAdapter implements ContainerListener {

componentAdded(arg0: ContainerEvent): void;

componentRemoved(arg0: ContainerEvent): void;
 }

export class ContainerEvent extends ComponentEvent {
static CONTAINER_FIRST:number
static CONTAINER_LAST:number
static COMPONENT_ADDED:number
static COMPONENT_REMOVED:number
constructor(arg0: Component, arg1: number, arg2: Component);

getContainer(): Container;

getChild(): Component;

paramString(): String;
 }

export interface ContainerListener extends EventListener {

componentAdded(arg0: ContainerEvent): void;

componentRemoved(arg0: ContainerEvent): void;
 }

export abstract class FocusAdapter implements FocusListener {

focusGained(arg0: FocusEvent): void;

focusLost(arg0: FocusEvent): void;
 }

export class FocusEvent extends ComponentEvent {
static FOCUS_FIRST:number
static FOCUS_LAST:number
static FOCUS_GAINED:number
static FOCUS_LOST:number
constructor(arg0: Component, arg1: number, arg2: boolean, arg3: Component);
constructor(arg0: Component, arg1: number, arg2: boolean, arg3: Component, arg4: FocusEvent.Cause);
constructor(arg0: Component, arg1: number, arg2: boolean);
constructor(arg0: Component, arg1: number);

isTemporary(): boolean;

getOppositeComponent(): Component;

paramString(): String;

getCause(): FocusEvent.Cause;
 }
export namespace FocusEvent { 
export class Cause extends Enum<FocusEvent.Cause> {
static UNKNOWN:FocusEvent.Cause
static MOUSE_EVENT:FocusEvent.Cause
static TRAVERSAL:FocusEvent.Cause
static TRAVERSAL_UP:FocusEvent.Cause
static TRAVERSAL_DOWN:FocusEvent.Cause
static TRAVERSAL_FORWARD:FocusEvent.Cause
static TRAVERSAL_BACKWARD:FocusEvent.Cause
static ROLLBACK:FocusEvent.Cause
static UNEXPECTED:FocusEvent.Cause
static ACTIVATION:FocusEvent.Cause
static CLEAR_GLOBAL_FOCUS_OWNER:FocusEvent.Cause

static values(): FocusEvent.Cause[];

static valueOf(arg0: String): FocusEvent.Cause;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export interface FocusListener extends EventListener {

focusGained(arg0: FocusEvent): void;

focusLost(arg0: FocusEvent): void;
 }

export abstract class HierarchyBoundsAdapter implements HierarchyBoundsListener {

ancestorMoved(arg0: HierarchyEvent): void;

ancestorResized(arg0: HierarchyEvent): void;
 }

export interface HierarchyBoundsListener extends EventListener {

ancestorMoved(arg0: HierarchyEvent): void;

ancestorResized(arg0: HierarchyEvent): void;
 }

export class HierarchyEvent extends AWTEvent {
static HIERARCHY_FIRST:number
static HIERARCHY_CHANGED:number
static ANCESTOR_MOVED:number
static ANCESTOR_RESIZED:number
static HIERARCHY_LAST:number
static PARENT_CHANGED:number
static DISPLAYABILITY_CHANGED:number
static SHOWING_CHANGED:number
constructor(arg0: Component, arg1: number, arg2: Component, arg3: Container);
constructor(arg0: Component, arg1: number, arg2: Component, arg3: Container, arg4: number);

getComponent(): Component;

getChanged(): Component;

getChangedParent(): Container;

getChangeFlags(): number;

paramString(): String;
 }

export interface HierarchyListener extends EventListener {

hierarchyChanged(arg0: HierarchyEvent): void;
 }

export abstract class InputEvent extends ComponentEvent {
static SHIFT_MASK:number
static CTRL_MASK:number
static META_MASK:number
static ALT_MASK:number
static ALT_GRAPH_MASK:number
static BUTTON1_MASK:number
static BUTTON2_MASK:number
static BUTTON3_MASK:number
static SHIFT_DOWN_MASK:number
static CTRL_DOWN_MASK:number
static META_DOWN_MASK:number
static ALT_DOWN_MASK:number
static BUTTON1_DOWN_MASK:number
static BUTTON2_DOWN_MASK:number
static BUTTON3_DOWN_MASK:number
static ALT_GRAPH_DOWN_MASK:number

static getMaskForButton(arg0: number): number;

isShiftDown(): boolean;

isControlDown(): boolean;

isMetaDown(): boolean;

isAltDown(): boolean;

isAltGraphDown(): boolean;

getWhen(): number;

getModifiers(): number;

getModifiersEx(): number;

consume(): void;

isConsumed(): boolean;

static getModifiersExText(arg0: number): String;
 }

export class InputMethodEvent extends AWTEvent {
static INPUT_METHOD_FIRST:number
static INPUT_METHOD_TEXT_CHANGED:number
static CARET_POSITION_CHANGED:number
static INPUT_METHOD_LAST:number
constructor(arg0: Component, arg1: number, arg2: number, arg3: AttributedCharacterIterator, arg4: number, arg5: TextHitInfo, arg6: TextHitInfo);
constructor(arg0: Component, arg1: number, arg2: AttributedCharacterIterator, arg3: number, arg4: TextHitInfo, arg5: TextHitInfo);
constructor(arg0: Component, arg1: number, arg2: TextHitInfo, arg3: TextHitInfo);

getText(): AttributedCharacterIterator;

getCommittedCharacterCount(): number;

getCaret(): TextHitInfo;

getVisiblePosition(): TextHitInfo;

consume(): void;

isConsumed(): boolean;

getWhen(): number;

paramString(): String;
 }

export interface InputMethodListener extends EventListener {

inputMethodTextChanged(arg0: InputMethodEvent): void;

caretPositionChanged(arg0: InputMethodEvent): void;
 }

export class InvocationEvent extends AWTEvent implements ActiveEvent {
static INVOCATION_FIRST:number
static INVOCATION_DEFAULT:number
static INVOCATION_LAST:number
constructor(arg0: Object, arg1: Runnable);
constructor(arg0: Object, arg1: Runnable, arg2: Object, arg3: boolean);
constructor(arg0: Object, arg1: Runnable, arg2: Runnable, arg3: boolean);

dispatch(): void;

getException(): Exception;

getThrowable(): Throwable;

getWhen(): number;

isDispatched(): boolean;

paramString(): String;
 }

export class ItemEvent extends AWTEvent {
static ITEM_FIRST:number
static ITEM_LAST:number
static ITEM_STATE_CHANGED:number
static SELECTED:number
static DESELECTED:number
constructor(arg0: ItemSelectable, arg1: number, arg2: Object, arg3: number);

getItemSelectable(): ItemSelectable;

getItem(): Object;

getStateChange(): number;

paramString(): String;
 }

export interface ItemListener extends EventListener {

itemStateChanged(arg0: ItemEvent): void;
 }

export abstract class KeyAdapter implements KeyListener {

keyTyped(arg0: KeyEvent): void;

keyPressed(arg0: KeyEvent): void;

keyReleased(arg0: KeyEvent): void;
 }

export class KeyEvent extends InputEvent {
static KEY_FIRST:number
static KEY_LAST:number
static KEY_TYPED:number
static KEY_PRESSED:number
static KEY_RELEASED:number
static VK_ENTER:number
static VK_BACK_SPACE:number
static VK_TAB:number
static VK_CANCEL:number
static VK_CLEAR:number
static VK_SHIFT:number
static VK_CONTROL:number
static VK_ALT:number
static VK_PAUSE:number
static VK_CAPS_LOCK:number
static VK_ESCAPE:number
static VK_SPACE:number
static VK_PAGE_UP:number
static VK_PAGE_DOWN:number
static VK_END:number
static VK_HOME:number
static VK_LEFT:number
static VK_UP:number
static VK_RIGHT:number
static VK_DOWN:number
static VK_COMMA:number
static VK_MINUS:number
static VK_PERIOD:number
static VK_SLASH:number
static VK_0:number
static VK_1:number
static VK_2:number
static VK_3:number
static VK_4:number
static VK_5:number
static VK_6:number
static VK_7:number
static VK_8:number
static VK_9:number
static VK_SEMICOLON:number
static VK_EQUALS:number
static VK_A:number
static VK_B:number
static VK_C:number
static VK_D:number
static VK_E:number
static VK_F:number
static VK_G:number
static VK_H:number
static VK_I:number
static VK_J:number
static VK_K:number
static VK_L:number
static VK_M:number
static VK_N:number
static VK_O:number
static VK_P:number
static VK_Q:number
static VK_R:number
static VK_S:number
static VK_T:number
static VK_U:number
static VK_V:number
static VK_W:number
static VK_X:number
static VK_Y:number
static VK_Z:number
static VK_OPEN_BRACKET:number
static VK_BACK_SLASH:number
static VK_CLOSE_BRACKET:number
static VK_NUMPAD0:number
static VK_NUMPAD1:number
static VK_NUMPAD2:number
static VK_NUMPAD3:number
static VK_NUMPAD4:number
static VK_NUMPAD5:number
static VK_NUMPAD6:number
static VK_NUMPAD7:number
static VK_NUMPAD8:number
static VK_NUMPAD9:number
static VK_MULTIPLY:number
static VK_ADD:number
static VK_SEPARATER:number
static VK_SEPARATOR:number
static VK_SUBTRACT:number
static VK_DECIMAL:number
static VK_DIVIDE:number
static VK_DELETE:number
static VK_NUM_LOCK:number
static VK_SCROLL_LOCK:number
static VK_F1:number
static VK_F2:number
static VK_F3:number
static VK_F4:number
static VK_F5:number
static VK_F6:number
static VK_F7:number
static VK_F8:number
static VK_F9:number
static VK_F10:number
static VK_F11:number
static VK_F12:number
static VK_F13:number
static VK_F14:number
static VK_F15:number
static VK_F16:number
static VK_F17:number
static VK_F18:number
static VK_F19:number
static VK_F20:number
static VK_F21:number
static VK_F22:number
static VK_F23:number
static VK_F24:number
static VK_PRINTSCREEN:number
static VK_INSERT:number
static VK_HELP:number
static VK_META:number
static VK_BACK_QUOTE:number
static VK_QUOTE:number
static VK_KP_UP:number
static VK_KP_DOWN:number
static VK_KP_LEFT:number
static VK_KP_RIGHT:number
static VK_DEAD_GRAVE:number
static VK_DEAD_ACUTE:number
static VK_DEAD_CIRCUMFLEX:number
static VK_DEAD_TILDE:number
static VK_DEAD_MACRON:number
static VK_DEAD_BREVE:number
static VK_DEAD_ABOVEDOT:number
static VK_DEAD_DIAERESIS:number
static VK_DEAD_ABOVERING:number
static VK_DEAD_DOUBLEACUTE:number
static VK_DEAD_CARON:number
static VK_DEAD_CEDILLA:number
static VK_DEAD_OGONEK:number
static VK_DEAD_IOTA:number
static VK_DEAD_VOICED_SOUND:number
static VK_DEAD_SEMIVOICED_SOUND:number
static VK_AMPERSAND:number
static VK_ASTERISK:number
static VK_QUOTEDBL:number
static VK_LESS:number
static VK_GREATER:number
static VK_BRACELEFT:number
static VK_BRACERIGHT:number
static VK_AT:number
static VK_COLON:number
static VK_CIRCUMFLEX:number
static VK_DOLLAR:number
static VK_EURO_SIGN:number
static VK_EXCLAMATION_MARK:number
static VK_INVERTED_EXCLAMATION_MARK:number
static VK_LEFT_PARENTHESIS:number
static VK_NUMBER_SIGN:number
static VK_PLUS:number
static VK_RIGHT_PARENTHESIS:number
static VK_UNDERSCORE:number
static VK_WINDOWS:number
static VK_CONTEXT_MENU:number
static VK_FINAL:number
static VK_CONVERT:number
static VK_NONCONVERT:number
static VK_ACCEPT:number
static VK_MODECHANGE:number
static VK_KANA:number
static VK_KANJI:number
static VK_ALPHANUMERIC:number
static VK_KATAKANA:number
static VK_HIRAGANA:number
static VK_FULL_WIDTH:number
static VK_HALF_WIDTH:number
static VK_ROMAN_CHARACTERS:number
static VK_ALL_CANDIDATES:number
static VK_PREVIOUS_CANDIDATE:number
static VK_CODE_INPUT:number
static VK_JAPANESE_KATAKANA:number
static VK_JAPANESE_HIRAGANA:number
static VK_JAPANESE_ROMAN:number
static VK_KANA_LOCK:number
static VK_INPUT_METHOD_ON_OFF:number
static VK_CUT:number
static VK_COPY:number
static VK_PASTE:number
static VK_UNDO:number
static VK_AGAIN:number
static VK_FIND:number
static VK_PROPS:number
static VK_STOP:number
static VK_COMPOSE:number
static VK_ALT_GRAPH:number
static VK_BEGIN:number
static VK_UNDEFINED:number
static CHAR_UNDEFINED:String
static KEY_LOCATION_UNKNOWN:number
static KEY_LOCATION_STANDARD:number
static KEY_LOCATION_LEFT:number
static KEY_LOCATION_RIGHT:number
static KEY_LOCATION_NUMPAD:number
constructor(arg0: Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: String, arg6: number);
constructor(arg0: Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: String);
constructor(arg0: Component, arg1: number, arg2: number, arg3: number, arg4: number);

getKeyCode(): number;

setKeyCode(arg0: number): void;

getKeyChar(): String;

setKeyChar(arg0: String): void;

setModifiers(arg0: number): void;

getKeyLocation(): number;

static getKeyText(arg0: number): String;

static getKeyModifiersText(arg0: number): String;

isActionKey(): boolean;

paramString(): String;

getExtendedKeyCode(): number;

static getExtendedKeyCodeForChar(arg0: number): number;
 }

export interface KeyListener extends EventListener {

keyTyped(arg0: KeyEvent): void;

keyPressed(arg0: KeyEvent): void;

keyReleased(arg0: KeyEvent): void;
 }

export abstract class MouseAdapter implements MouseListener, MouseWheelListener, MouseMotionListener {

mouseClicked(arg0: MouseEvent): void;

mousePressed(arg0: MouseEvent): void;

mouseReleased(arg0: MouseEvent): void;

mouseEntered(arg0: MouseEvent): void;

mouseExited(arg0: MouseEvent): void;

mouseWheelMoved(arg0: MouseWheelEvent): void;

mouseDragged(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;
 }

export class MouseEvent extends InputEvent {
static MOUSE_FIRST:number
static MOUSE_LAST:number
static MOUSE_CLICKED:number
static MOUSE_PRESSED:number
static MOUSE_RELEASED:number
static MOUSE_MOVED:number
static MOUSE_ENTERED:number
static MOUSE_EXITED:number
static MOUSE_DRAGGED:number
static MOUSE_WHEEL:number
static NOBUTTON:number
static BUTTON1:number
static BUTTON2:number
static BUTTON3:number
constructor(arg0: Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number);
constructor(arg0: Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean);
constructor(arg0: Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number);

getLocationOnScreen(): Point;

getXOnScreen(): number;

getYOnScreen(): number;

getModifiersEx(): number;

getX(): number;

getY(): number;

getPoint(): Point;

translatePoint(arg0: number, arg1: number): void;

getClickCount(): number;

getButton(): number;

isPopupTrigger(): boolean;

static getMouseModifiersText(arg0: number): String;

paramString(): String;
 }

export interface MouseListener extends EventListener {

mouseClicked(arg0: MouseEvent): void;

mousePressed(arg0: MouseEvent): void;

mouseReleased(arg0: MouseEvent): void;

mouseEntered(arg0: MouseEvent): void;

mouseExited(arg0: MouseEvent): void;
 }

export abstract class MouseMotionAdapter implements MouseMotionListener {

mouseDragged(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;
 }

export interface MouseMotionListener extends EventListener {

mouseDragged(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;
 }

export class MouseWheelEvent extends MouseEvent {
static WHEEL_UNIT_SCROLL:number
static WHEEL_BLOCK_SCROLL:number
constructor(arg0: Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number, arg9: number, arg10: number);
constructor(arg0: Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number, arg11: number, arg12: number);
constructor(arg0: Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number, arg11: number, arg12: number, arg13: number);

getScrollType(): number;

getScrollAmount(): number;

getWheelRotation(): number;

getPreciseWheelRotation(): number;

getUnitsToScroll(): number;

paramString(): String;
 }

export interface MouseWheelListener extends EventListener {

mouseWheelMoved(arg0: MouseWheelEvent): void;
 }

export class PaintEvent extends ComponentEvent {
static PAINT_FIRST:number
static PAINT_LAST:number
static PAINT:number
static UPDATE:number
constructor(arg0: Component, arg1: number, arg2: Rectangle);

getUpdateRect(): Rectangle;

setUpdateRect(arg0: Rectangle): void;

paramString(): String;
 }

export class TextEvent extends AWTEvent {
static TEXT_FIRST:number
static TEXT_LAST:number
static TEXT_VALUE_CHANGED:number
constructor(arg0: Object, arg1: number);

paramString(): String;
 }

export interface TextListener extends EventListener {

textValueChanged(arg0: TextEvent): void;
 }

export abstract class WindowAdapter implements WindowListener, WindowStateListener, WindowFocusListener {

windowOpened(arg0: WindowEvent): void;

windowClosing(arg0: WindowEvent): void;

windowClosed(arg0: WindowEvent): void;

windowIconified(arg0: WindowEvent): void;

windowDeiconified(arg0: WindowEvent): void;

windowActivated(arg0: WindowEvent): void;

windowDeactivated(arg0: WindowEvent): void;

windowStateChanged(arg0: WindowEvent): void;

windowGainedFocus(arg0: WindowEvent): void;

windowLostFocus(arg0: WindowEvent): void;
 }

export class WindowEvent extends ComponentEvent {
static WINDOW_FIRST:number
static WINDOW_OPENED:number
static WINDOW_CLOSING:number
static WINDOW_CLOSED:number
static WINDOW_ICONIFIED:number
static WINDOW_DEICONIFIED:number
static WINDOW_ACTIVATED:number
static WINDOW_DEACTIVATED:number
static WINDOW_GAINED_FOCUS:number
static WINDOW_LOST_FOCUS:number
static WINDOW_STATE_CHANGED:number
static WINDOW_LAST:number
constructor(arg0: Window, arg1: number, arg2: Window, arg3: number, arg4: number);
constructor(arg0: Window, arg1: number, arg2: Window);
constructor(arg0: Window, arg1: number, arg2: number, arg3: number);
constructor(arg0: Window, arg1: number);

getWindow(): Window;

getOppositeWindow(): Window;

getOldState(): number;

getNewState(): number;

paramString(): String;
 }

export interface WindowFocusListener extends EventListener {

windowGainedFocus(arg0: WindowEvent): void;

windowLostFocus(arg0: WindowEvent): void;
 }

export interface WindowListener extends EventListener {

windowOpened(arg0: WindowEvent): void;

windowClosing(arg0: WindowEvent): void;

windowClosed(arg0: WindowEvent): void;

windowIconified(arg0: WindowEvent): void;

windowDeiconified(arg0: WindowEvent): void;

windowActivated(arg0: WindowEvent): void;

windowDeactivated(arg0: WindowEvent): void;
 }

export interface WindowStateListener extends EventListener {

windowStateChanged(arg0: WindowEvent): void;
 }

}
