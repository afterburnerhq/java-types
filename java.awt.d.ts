/// <reference path="java.security.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.awt.image.d.ts" />
/// <reference path="java.awt.geom.d.ts" />
/// <reference path="java.awt.dnd.d.ts" />
/// <reference path="java.beans.d.ts" />
/// <reference path="java.awt.desktop.d.ts" />
/// <reference path="java.awt.im.d.ts" />
/// <reference path="javax.swing.text.d.ts" />
/// <reference path="java.awt.color.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="javax.accessibility.d.ts" />
/// <reference path="java.text.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.awt.datatransfer.d.ts" />
/// <reference path="java.awt.event.d.ts" />
/// <reference path="java.awt.font.d.ts" />
/// <reference path="java.awt.image.renderable.d.ts" />
/// <reference path="javax.swing.d.ts" />
declare module '@afterburnerhq/java.awt' { 
import { BasicPermission } from '@afterburnerhq/java.security'
import { Locale, Set, Enumeration, Collection, ResourceBundle, List, EventListener, Properties, Map, EventObject } from '@afterburnerhq/java.util'
import { BufferedImageOp, VolatileImage, ColorModel, WritableRaster, BufferStrategy, ImageObserver, ImageProducer, Raster, RenderedImage, BufferedImage, MultiResolutionImage } from '@afterburnerhq/java.awt.image'
import { Rectangle2D, AffineTransform, Point2D, PathIterator, Dimension2D } from '@afterburnerhq/java.awt.geom'
import { DropTarget, DragSource, DragGestureRecognizer, DragGestureListener } from '@afterburnerhq/java.awt.dnd'
import { PropertyChangeListener, VetoableChangeListener } from '@afterburnerhq/java.beans'
import { QuitHandler, SystemEventListener, QuitStrategy, PreferencesHandler, OpenFilesHandler, PrintFilesHandler, OpenURIHandler, AboutHandler } from '@afterburnerhq/java.awt.desktop'
import { InputContext, InputMethodHighlight, InputMethodRequests } from '@afterburnerhq/java.awt.im'
import { AttributeSet } from '@afterburnerhq/javax.swing.text'
import { ColorSpace } from '@afterburnerhq/java.awt.color'
import { Enum, IllegalStateException, Character, Number, Runnable, Error, Class, Cloneable, String, Exception, UnsupportedOperationException } from '@afterburnerhq/java.lang'
import { AccessibleAction, AccessibleContext, AccessibleValue, AccessibleStateSet, AccessibleComponent, AccessibleText, AccessibleRole, AccessibleSelection, Accessible } from '@afterburnerhq/javax.accessibility'
import { CharacterIterator, AttributedCharacterIterator } from '@afterburnerhq/java.text'
import { URI, URL } from '@afterburnerhq/java.net'
import { PrintStream, FilenameFilter, Serializable, File, InputStream, PrintWriter } from '@afterburnerhq/java.io'
import { Clipboard } from '@afterburnerhq/java.awt.datatransfer'
import { ComponentListener, ItemEvent, WindowStateListener, ActionEvent, AWTEventListener, MouseWheelListener, MouseMotionListener, FocusEvent, HierarchyListener, KeyEvent, MouseListener, InputMethodListener, WindowFocusListener, ContainerEvent, TextEvent, WindowListener, HierarchyBoundsListener, MouseEvent, AdjustmentEvent, TextListener, InputMethodEvent, ActionListener, MouseWheelEvent, HierarchyEvent, WindowEvent, AdjustmentListener, ContainerListener, KeyListener, ItemListener, ComponentEvent, FocusListener } from '@afterburnerhq/java.awt.event'
import { FontRenderContext, LineMetrics, GlyphVector, TextAttribute } from '@afterburnerhq/java.awt.font'
import { RenderableImage } from '@afterburnerhq/java.awt.image.renderable'
import { JMenuBar } from '@afterburnerhq/javax.swing'
export class AWTError extends Error {
constructor(arg0: String);
 }

export abstract class AWTEvent extends EventObject {
static COMPONENT_EVENT_MASK:number
static CONTAINER_EVENT_MASK:number
static FOCUS_EVENT_MASK:number
static KEY_EVENT_MASK:number
static MOUSE_EVENT_MASK:number
static MOUSE_MOTION_EVENT_MASK:number
static WINDOW_EVENT_MASK:number
static ACTION_EVENT_MASK:number
static ADJUSTMENT_EVENT_MASK:number
static ITEM_EVENT_MASK:number
static TEXT_EVENT_MASK:number
static INPUT_METHOD_EVENT_MASK:number
static PAINT_EVENT_MASK:number
static INVOCATION_EVENT_MASK:number
static HIERARCHY_EVENT_MASK:number
static HIERARCHY_BOUNDS_EVENT_MASK:number
static MOUSE_WHEEL_EVENT_MASK:number
static WINDOW_STATE_EVENT_MASK:number
static WINDOW_FOCUS_EVENT_MASK:number
static RESERVED_ID_MAX:number
constructor(arg0: Event);
constructor(arg0: Object, arg1: number);

setSource(arg0: Object): void;

getID(): number;
toString(): string;

paramString(): String;
 }

export class AWTEventMulticaster implements ComponentListener, ContainerListener, FocusListener, KeyListener, MouseListener, MouseMotionListener, WindowListener, WindowFocusListener, WindowStateListener, ActionListener, ItemListener, AdjustmentListener, TextListener, InputMethodListener, HierarchyListener, HierarchyBoundsListener, MouseWheelListener {

componentResized(arg0: ComponentEvent): void;

componentMoved(arg0: ComponentEvent): void;

componentShown(arg0: ComponentEvent): void;

componentHidden(arg0: ComponentEvent): void;

componentAdded(arg0: ContainerEvent): void;

componentRemoved(arg0: ContainerEvent): void;

focusGained(arg0: FocusEvent): void;

focusLost(arg0: FocusEvent): void;

keyTyped(arg0: KeyEvent): void;

keyPressed(arg0: KeyEvent): void;

keyReleased(arg0: KeyEvent): void;

mouseClicked(arg0: MouseEvent): void;

mousePressed(arg0: MouseEvent): void;

mouseReleased(arg0: MouseEvent): void;

mouseEntered(arg0: MouseEvent): void;

mouseExited(arg0: MouseEvent): void;

mouseDragged(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;

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

actionPerformed(arg0: ActionEvent): void;

itemStateChanged(arg0: ItemEvent): void;

adjustmentValueChanged(arg0: AdjustmentEvent): void;

textValueChanged(arg0: TextEvent): void;

inputMethodTextChanged(arg0: InputMethodEvent): void;

caretPositionChanged(arg0: InputMethodEvent): void;

hierarchyChanged(arg0: HierarchyEvent): void;

ancestorMoved(arg0: HierarchyEvent): void;

ancestorResized(arg0: HierarchyEvent): void;

mouseWheelMoved(arg0: MouseWheelEvent): void;

static add(arg0: ComponentListener, arg1: ComponentListener): ComponentListener;

static add(arg0: ContainerListener, arg1: ContainerListener): ContainerListener;

static add(arg0: FocusListener, arg1: FocusListener): FocusListener;

static add(arg0: KeyListener, arg1: KeyListener): KeyListener;

static add(arg0: MouseListener, arg1: MouseListener): MouseListener;

static add(arg0: MouseMotionListener, arg1: MouseMotionListener): MouseMotionListener;

static add(arg0: WindowListener, arg1: WindowListener): WindowListener;

static add(arg0: WindowStateListener, arg1: WindowStateListener): WindowStateListener;

static add(arg0: WindowFocusListener, arg1: WindowFocusListener): WindowFocusListener;

static add(arg0: ActionListener, arg1: ActionListener): ActionListener;

static add(arg0: ItemListener, arg1: ItemListener): ItemListener;

static add(arg0: AdjustmentListener, arg1: AdjustmentListener): AdjustmentListener;

static add(arg0: TextListener, arg1: TextListener): TextListener;

static add(arg0: InputMethodListener, arg1: InputMethodListener): InputMethodListener;

static add(arg0: HierarchyListener, arg1: HierarchyListener): HierarchyListener;

static add(arg0: HierarchyBoundsListener, arg1: HierarchyBoundsListener): HierarchyBoundsListener;

static add(arg0: MouseWheelListener, arg1: MouseWheelListener): MouseWheelListener;

static remove(arg0: ComponentListener, arg1: ComponentListener): ComponentListener;

static remove(arg0: ContainerListener, arg1: ContainerListener): ContainerListener;

static remove(arg0: FocusListener, arg1: FocusListener): FocusListener;

static remove(arg0: KeyListener, arg1: KeyListener): KeyListener;

static remove(arg0: MouseListener, arg1: MouseListener): MouseListener;

static remove(arg0: MouseMotionListener, arg1: MouseMotionListener): MouseMotionListener;

static remove(arg0: WindowListener, arg1: WindowListener): WindowListener;

static remove(arg0: WindowStateListener, arg1: WindowStateListener): WindowStateListener;

static remove(arg0: WindowFocusListener, arg1: WindowFocusListener): WindowFocusListener;

static remove(arg0: ActionListener, arg1: ActionListener): ActionListener;

static remove(arg0: ItemListener, arg1: ItemListener): ItemListener;

static remove(arg0: AdjustmentListener, arg1: AdjustmentListener): AdjustmentListener;

static remove(arg0: TextListener, arg1: TextListener): TextListener;

static remove(arg0: InputMethodListener, arg1: InputMethodListener): InputMethodListener;

static remove(arg0: HierarchyListener, arg1: HierarchyListener): HierarchyListener;

static remove(arg0: HierarchyBoundsListener, arg1: HierarchyBoundsListener): HierarchyBoundsListener;

static remove(arg0: MouseWheelListener, arg1: MouseWheelListener): MouseWheelListener;

static getListeners<T extends EventListener>(arg0: EventListener, arg1: Class<T>): T[];
 }

export class AWTException extends Exception {
constructor(arg0: String);
 }

export class AWTKeyStroke implements Serializable {

static getAWTKeyStroke(arg0: String): AWTKeyStroke;

static getAWTKeyStroke(arg0: String, arg1: number): AWTKeyStroke;

static getAWTKeyStroke(arg0: number, arg1: number, arg2: boolean): AWTKeyStroke;

static getAWTKeyStroke(arg0: number, arg1: number): AWTKeyStroke;

static getAWTKeyStrokeForEvent(arg0: KeyEvent): AWTKeyStroke;

static getAWTKeyStroke(arg0: String): AWTKeyStroke;

getKeyChar(): String;

getKeyCode(): number;

getModifiers(): number;

isOnKeyRelease(): boolean;

getKeyEventType(): number;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;
 }

export class AWTPermission extends BasicPermission {
constructor(arg0: String);
constructor(arg0: String, arg1: String);
 }

export interface ActiveEvent {

dispatch(): void;
 }

export namespace Adjustable { 
const HORIZONTAL:number
const VERTICAL:number
const NO_ORIENTATION:number
}

export interface Adjustable {
HORIZONTAL:number
VERTICAL:number
NO_ORIENTATION:number

getOrientation(): number;

setMinimum(arg0: number): void;

getMinimum(): number;

setMaximum(arg0: number): void;

getMaximum(): number;

setUnitIncrement(arg0: number): void;

getUnitIncrement(): number;

setBlockIncrement(arg0: number): void;

getBlockIncrement(): number;

setVisibleAmount(arg0: number): void;

getVisibleAmount(): number;

setValue(arg0: number): void;

getValue(): number;

addAdjustmentListener(arg0: AdjustmentListener): void;

removeAdjustmentListener(arg0: AdjustmentListener): void;
 }

export class AlphaComposite implements Composite {
static CLEAR:number
static SRC:number
static DST:number
static SRC_OVER:number
static DST_OVER:number
static SRC_IN:number
static DST_IN:number
static SRC_OUT:number
static DST_OUT:number
static SRC_ATOP:number
static DST_ATOP:number
static XOR:number
static Clear:AlphaComposite
static Src:AlphaComposite
static Dst:AlphaComposite
static SrcOver:AlphaComposite
static DstOver:AlphaComposite
static SrcIn:AlphaComposite
static DstIn:AlphaComposite
static SrcOut:AlphaComposite
static DstOut:AlphaComposite
static SrcAtop:AlphaComposite
static DstAtop:AlphaComposite
static Xor:AlphaComposite

static getInstance(arg0: number): AlphaComposite;

static getInstance(arg0: number, arg1: number): AlphaComposite;

createContext(arg0: ColorModel, arg1: ColorModel, arg2: RenderingHints): CompositeContext;

getAlpha(): number;

getRule(): number;

derive(arg0: number): AlphaComposite;

derive(arg0: number): AlphaComposite;

hashCode(): number;

equals(arg0: Object): boolean;
 }

export class BasicStroke implements Stroke {
static JOIN_MITER:number
static JOIN_ROUND:number
static JOIN_BEVEL:number
static CAP_BUTT:number
static CAP_ROUND:number
static CAP_SQUARE:number
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number);
constructor();

createStrokedShape(arg0: Shape): Shape;

getLineWidth(): number;

getEndCap(): number;

getLineJoin(): number;

getMiterLimit(): number;

getDashArray(): number[];

getDashPhase(): number;

hashCode(): number;

equals(arg0: Object): boolean;
 }

export class BorderLayout implements LayoutManager2, Serializable {
static NORTH:String
static SOUTH:String
static EAST:String
static WEST:String
static CENTER:String
static BEFORE_FIRST_LINE:String
static AFTER_LAST_LINE:String
static BEFORE_LINE_BEGINS:String
static AFTER_LINE_ENDS:String
static PAGE_START:String
static PAGE_END:String
static LINE_START:String
static LINE_END:String
constructor();
constructor(arg0: number, arg1: number);

getHgap(): number;

setHgap(arg0: number): void;

getVgap(): number;

setVgap(arg0: number): void;

addLayoutComponent(arg0: Component, arg1: Object): void;

addLayoutComponent(arg0: String, arg1: Component): void;

removeLayoutComponent(arg0: Component): void;

getLayoutComponent(arg0: Object): Component;

getLayoutComponent(arg0: Container, arg1: Object): Component;

getConstraints(arg0: Component): Object;

minimumLayoutSize(arg0: Container): Dimension;

preferredLayoutSize(arg0: Container): Dimension;

maximumLayoutSize(arg0: Container): Dimension;

getLayoutAlignmentX(arg0: Container): number;

getLayoutAlignmentY(arg0: Container): number;

invalidateLayout(arg0: Container): void;

layoutContainer(arg0: Container): void;
toString(): string;
 }

export class BufferCapabilities implements Cloneable {
constructor(arg0: ImageCapabilities, arg1: ImageCapabilities, arg2: BufferCapabilities.FlipContents);

getFrontBufferCapabilities(): ImageCapabilities;

getBackBufferCapabilities(): ImageCapabilities;

isPageFlipping(): boolean;

getFlipContents(): BufferCapabilities.FlipContents;

isFullScreenRequired(): boolean;

isMultiBufferAvailable(): boolean;

clone(): Object;
 }
export namespace BufferCapabilities { 
export class FlipContents extends AttributeValue {
static UNDEFINED:BufferCapabilities.FlipContents
static BACKGROUND:BufferCapabilities.FlipContents
static PRIOR:BufferCapabilities.FlipContents
static COPIED:BufferCapabilities.FlipContents
 }

}

export class Button extends Component implements Accessible {
constructor();
constructor(arg0: String);

addNotify(): void;

getLabel(): String;

setLabel(arg0: String): void;

setActionCommand(arg0: String): void;

getActionCommand(): String;

addActionListener(arg0: ActionListener): void;

removeActionListener(arg0: ActionListener): void;

getActionListeners(): ActionListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

getAccessibleContext(): AccessibleContext;
 }
export namespace Button { 
export class AccessibleAWTButton extends Component.AccessibleAWTComponent implements AccessibleAction, AccessibleValue {

getAccessibleName(): String;

getAccessibleAction(): AccessibleAction;

getAccessibleValue(): AccessibleValue;

getAccessibleActionCount(): number;

getAccessibleActionDescription(arg0: number): String;

doAccessibleAction(arg0: number): boolean;

getCurrentAccessibleValue(): Number;

setCurrentAccessibleValue(arg0: Number): boolean;

getMinimumAccessibleValue(): Number;

getMaximumAccessibleValue(): Number;

getAccessibleRole(): AccessibleRole;
 }

}

export class Canvas extends Component implements Accessible {
constructor();
constructor(arg0: GraphicsConfiguration);

addNotify(): void;

paint(arg0: Graphics): void;

update(arg0: Graphics): void;

createBufferStrategy(arg0: number): void;

createBufferStrategy(arg0: number, arg1: BufferCapabilities): void;

getBufferStrategy(): BufferStrategy;

getAccessibleContext(): AccessibleContext;
 }
export namespace Canvas { 
export class AccessibleAWTCanvas extends Component.AccessibleAWTComponent {

getAccessibleRole(): AccessibleRole;
 }

}

export class CardLayout implements LayoutManager2, Serializable {
constructor();
constructor(arg0: number, arg1: number);

getHgap(): number;

setHgap(arg0: number): void;

getVgap(): number;

setVgap(arg0: number): void;

addLayoutComponent(arg0: Component, arg1: Object): void;

addLayoutComponent(arg0: String, arg1: Component): void;

removeLayoutComponent(arg0: Component): void;

preferredLayoutSize(arg0: Container): Dimension;

minimumLayoutSize(arg0: Container): Dimension;

maximumLayoutSize(arg0: Container): Dimension;

getLayoutAlignmentX(arg0: Container): number;

getLayoutAlignmentY(arg0: Container): number;

invalidateLayout(arg0: Container): void;

layoutContainer(arg0: Container): void;

first(arg0: Container): void;

next(arg0: Container): void;

previous(arg0: Container): void;

last(arg0: Container): void;

show(arg0: Container, arg1: String): void;
toString(): string;
 }

export class Checkbox extends Component implements ItemSelectable, Accessible {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: boolean);
constructor(arg0: String, arg1: boolean, arg2: CheckboxGroup);
constructor(arg0: String, arg1: CheckboxGroup, arg2: boolean);

addNotify(): void;

getLabel(): String;

setLabel(arg0: String): void;

getState(): boolean;

setState(arg0: boolean): void;

getSelectedObjects(): Object[];

getCheckboxGroup(): CheckboxGroup;

setCheckboxGroup(arg0: CheckboxGroup): void;

addItemListener(arg0: ItemListener): void;

removeItemListener(arg0: ItemListener): void;

getItemListeners(): ItemListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

getAccessibleContext(): AccessibleContext;
 }
export namespace Checkbox { 
export class AccessibleAWTCheckbox extends Component.AccessibleAWTComponent implements ItemListener, AccessibleAction, AccessibleValue {
constructor(arg0: Checkbox);

itemStateChanged(arg0: ItemEvent): void;

getAccessibleAction(): AccessibleAction;

getAccessibleValue(): AccessibleValue;

getAccessibleActionCount(): number;

getAccessibleActionDescription(arg0: number): String;

doAccessibleAction(arg0: number): boolean;

getCurrentAccessibleValue(): Number;

setCurrentAccessibleValue(arg0: Number): boolean;

getMinimumAccessibleValue(): Number;

getMaximumAccessibleValue(): Number;

getAccessibleRole(): AccessibleRole;

getAccessibleStateSet(): AccessibleStateSet;
 }

}

export class CheckboxGroup implements Serializable {
constructor();

getSelectedCheckbox(): Checkbox;

getCurrent(): Checkbox;

setSelectedCheckbox(arg0: Checkbox): void;

setCurrent(arg0: Checkbox): void;
toString(): string;
 }

export class CheckboxMenuItem extends MenuItem implements ItemSelectable, Accessible {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: boolean);

addNotify(): void;

getState(): boolean;

setState(arg0: boolean): void;

getSelectedObjects(): Object[];

addItemListener(arg0: ItemListener): void;

removeItemListener(arg0: ItemListener): void;

getItemListeners(): ItemListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

paramString(): String;

getAccessibleContext(): AccessibleContext;
 }
export namespace CheckboxMenuItem { 
export class AccessibleAWTCheckboxMenuItem extends MenuItem.AccessibleAWTMenuItem implements AccessibleAction, AccessibleValue {

getAccessibleAction(): AccessibleAction;

getAccessibleValue(): AccessibleValue;

getAccessibleActionCount(): number;

getAccessibleActionDescription(arg0: number): String;

doAccessibleAction(arg0: number): boolean;

getCurrentAccessibleValue(): Number;

setCurrentAccessibleValue(arg0: Number): boolean;

getMinimumAccessibleValue(): Number;

getMaximumAccessibleValue(): Number;

getAccessibleRole(): AccessibleRole;
 }

}

export class Choice extends Component implements ItemSelectable, Accessible {
constructor();

addNotify(): void;

getItemCount(): number;

countItems(): number;

getItem(arg0: number): String;

add(arg0: String): void;

addItem(arg0: String): void;

insert(arg0: String, arg1: number): void;

remove(arg0: String): void;

remove(arg0: number): void;

removeAll(): void;

getSelectedItem(): String;

getSelectedObjects(): Object[];

getSelectedIndex(): number;

select(arg0: number): void;

select(arg0: String): void;

addItemListener(arg0: ItemListener): void;

removeItemListener(arg0: ItemListener): void;

getItemListeners(): ItemListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

getAccessibleContext(): AccessibleContext;
 }
export namespace Choice { 
export class AccessibleAWTChoice extends Component.AccessibleAWTComponent implements AccessibleAction {
constructor(arg0: Choice);

getAccessibleAction(): AccessibleAction;

getAccessibleRole(): AccessibleRole;

getAccessibleActionCount(): number;

getAccessibleActionDescription(arg0: number): String;

doAccessibleAction(arg0: number): boolean;
 }

}

export class Color implements Paint, Serializable {
static white:Color
static WHITE:Color
static lightGray:Color
static LIGHT_GRAY:Color
static gray:Color
static GRAY:Color
static darkGray:Color
static DARK_GRAY:Color
static black:Color
static BLACK:Color
static red:Color
static RED:Color
static pink:Color
static PINK:Color
static orange:Color
static ORANGE:Color
static yellow:Color
static YELLOW:Color
static green:Color
static GREEN:Color
static magenta:Color
static MAGENTA:Color
static cyan:Color
static CYAN:Color
static blue:Color
static BLUE:Color
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
constructor(arg0: number);
constructor(arg0: number, arg1: boolean);
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
constructor(arg0: ColorSpace, arg1: number[], arg2: number);

getRed(): number;

getGreen(): number;

getBlue(): number;

getAlpha(): number;

getRGB(): number;

brighter(): Color;

darker(): Color;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;

static decode(arg0: String): Color;

static getColor(arg0: String): Color;

static getColor(arg0: String, arg1: Color): Color;

static getColor(arg0: String, arg1: number): Color;

static HSBtoRGB(arg0: number, arg1: number, arg2: number): number;

static RGBtoHSB(arg0: number, arg1: number, arg2: number, arg3: number[]): number[];

static getHSBColor(arg0: number, arg1: number, arg2: number): Color;

getRGBComponents(arg0: number[]): number[];

getRGBColorComponents(arg0: number[]): number[];

getComponents(arg0: number[]): number[];

getColorComponents(arg0: number[]): number[];

getComponents(arg0: ColorSpace, arg1: number[]): number[];

getColorComponents(arg0: ColorSpace, arg1: number[]): number[];

getColorSpace(): ColorSpace;

createContext(arg0: ColorModel, arg1: Rectangle, arg2: Rectangle2D, arg3: AffineTransform, arg4: RenderingHints): PaintContext;

getTransparency(): number;
 }

export abstract class Component implements ImageObserver, MenuContainer, Serializable {
static TOP_ALIGNMENT:number
static CENTER_ALIGNMENT:number
static BOTTOM_ALIGNMENT:number
static LEFT_ALIGNMENT:number
static RIGHT_ALIGNMENT:number

getName(): String;

setName(arg0: String): void;

getParent(): Container;

setDropTarget(arg0: DropTarget): void;

getDropTarget(): DropTarget;

getGraphicsConfiguration(): GraphicsConfiguration;

getTreeLock(): Object;

getToolkit(): Toolkit;

isValid(): boolean;

isDisplayable(): boolean;

isVisible(): boolean;

getMousePosition(): Point;

isShowing(): boolean;

isEnabled(): boolean;

setEnabled(arg0: boolean): void;

enable(): void;

enable(arg0: boolean): void;

disable(): void;

isDoubleBuffered(): boolean;

enableInputMethods(arg0: boolean): void;

setVisible(arg0: boolean): void;

show(): void;

show(arg0: boolean): void;

hide(): void;

getForeground(): Color;

setForeground(arg0: Color): void;

isForegroundSet(): boolean;

getBackground(): Color;

setBackground(arg0: Color): void;

isBackgroundSet(): boolean;

getFont(): Font;

setFont(arg0: Font): void;

isFontSet(): boolean;

getLocale(): Locale;

setLocale(arg0: Locale): void;

getColorModel(): ColorModel;

getLocation(): Point;

getLocationOnScreen(): Point;

location(): Point;

setLocation(arg0: number, arg1: number): void;

move(arg0: number, arg1: number): void;

setLocation(arg0: Point): void;

getSize(): Dimension;

size(): Dimension;

setSize(arg0: number, arg1: number): void;

resize(arg0: number, arg1: number): void;

setSize(arg0: Dimension): void;

resize(arg0: Dimension): void;

getBounds(): Rectangle;

bounds(): Rectangle;

setBounds(arg0: number, arg1: number, arg2: number, arg3: number): void;

reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;

setBounds(arg0: Rectangle): void;

getX(): number;

getY(): number;

getWidth(): number;

getHeight(): number;

getBounds(arg0: Rectangle): Rectangle;

getSize(arg0: Dimension): Dimension;

getLocation(arg0: Point): Point;

isOpaque(): boolean;

isLightweight(): boolean;

setPreferredSize(arg0: Dimension): void;

isPreferredSizeSet(): boolean;

getPreferredSize(): Dimension;

preferredSize(): Dimension;

setMinimumSize(arg0: Dimension): void;

isMinimumSizeSet(): boolean;

getMinimumSize(): Dimension;

minimumSize(): Dimension;

setMaximumSize(arg0: Dimension): void;

isMaximumSizeSet(): boolean;

getMaximumSize(): Dimension;

getAlignmentX(): number;

getAlignmentY(): number;

getBaseline(arg0: number, arg1: number): number;

getBaselineResizeBehavior(): Component.BaselineResizeBehavior;

doLayout(): void;

layout(): void;

validate(): void;

invalidate(): void;

revalidate(): void;

getGraphics(): Graphics;

getFontMetrics(arg0: Font): FontMetrics;

setCursor(arg0: Cursor): void;

getCursor(): Cursor;

isCursorSet(): boolean;

paint(arg0: Graphics): void;

update(arg0: Graphics): void;

paintAll(arg0: Graphics): void;

repaint(): void;

repaint(arg0: number): void;

repaint(arg0: number, arg1: number, arg2: number, arg3: number): void;

repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;

print(arg0: Graphics): void;

printAll(arg0: Graphics): void;

imageUpdate(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;

createImage(arg0: ImageProducer): Image;

createImage(arg0: number, arg1: number): Image;

createVolatileImage(arg0: number, arg1: number): VolatileImage;

createVolatileImage(arg0: number, arg1: number, arg2: ImageCapabilities): VolatileImage;

prepareImage(arg0: Image, arg1: ImageObserver): boolean;

prepareImage(arg0: Image, arg1: number, arg2: number, arg3: ImageObserver): boolean;

checkImage(arg0: Image, arg1: ImageObserver): number;

checkImage(arg0: Image, arg1: number, arg2: number, arg3: ImageObserver): number;

setIgnoreRepaint(arg0: boolean): void;

getIgnoreRepaint(): boolean;

contains(arg0: number, arg1: number): boolean;

inside(arg0: number, arg1: number): boolean;

contains(arg0: Point): boolean;

getComponentAt(arg0: number, arg1: number): Component;

locate(arg0: number, arg1: number): Component;

getComponentAt(arg0: Point): Component;

deliverEvent(arg0: Event): void;

dispatchEvent(arg0: AWTEvent): void;

postEvent(arg0: Event): boolean;

addComponentListener(arg0: ComponentListener): void;

removeComponentListener(arg0: ComponentListener): void;

getComponentListeners(): ComponentListener[];

addFocusListener(arg0: FocusListener): void;

removeFocusListener(arg0: FocusListener): void;

getFocusListeners(): FocusListener[];

addHierarchyListener(arg0: HierarchyListener): void;

removeHierarchyListener(arg0: HierarchyListener): void;

getHierarchyListeners(): HierarchyListener[];

addHierarchyBoundsListener(arg0: HierarchyBoundsListener): void;

removeHierarchyBoundsListener(arg0: HierarchyBoundsListener): void;

getHierarchyBoundsListeners(): HierarchyBoundsListener[];

addKeyListener(arg0: KeyListener): void;

removeKeyListener(arg0: KeyListener): void;

getKeyListeners(): KeyListener[];

addMouseListener(arg0: MouseListener): void;

removeMouseListener(arg0: MouseListener): void;

getMouseListeners(): MouseListener[];

addMouseMotionListener(arg0: MouseMotionListener): void;

removeMouseMotionListener(arg0: MouseMotionListener): void;

getMouseMotionListeners(): MouseMotionListener[];

addMouseWheelListener(arg0: MouseWheelListener): void;

removeMouseWheelListener(arg0: MouseWheelListener): void;

getMouseWheelListeners(): MouseWheelListener[];

addInputMethodListener(arg0: InputMethodListener): void;

removeInputMethodListener(arg0: InputMethodListener): void;

getInputMethodListeners(): InputMethodListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

getInputMethodRequests(): InputMethodRequests;

getInputContext(): InputContext;

handleEvent(arg0: Event): boolean;

mouseDown(arg0: Event, arg1: number, arg2: number): boolean;

mouseDrag(arg0: Event, arg1: number, arg2: number): boolean;

mouseUp(arg0: Event, arg1: number, arg2: number): boolean;

mouseMove(arg0: Event, arg1: number, arg2: number): boolean;

mouseEnter(arg0: Event, arg1: number, arg2: number): boolean;

mouseExit(arg0: Event, arg1: number, arg2: number): boolean;

keyDown(arg0: Event, arg1: number): boolean;

keyUp(arg0: Event, arg1: number): boolean;

action(arg0: Event, arg1: Object): boolean;

addNotify(): void;

removeNotify(): void;

gotFocus(arg0: Event, arg1: Object): boolean;

lostFocus(arg0: Event, arg1: Object): boolean;

isFocusTraversable(): boolean;

isFocusable(): boolean;

setFocusable(arg0: boolean): void;

setFocusTraversalKeys(arg0: number, arg1: Set<AWTKeyStroke>): void;

getFocusTraversalKeys(arg0: number): Set<AWTKeyStroke>;

areFocusTraversalKeysSet(arg0: number): boolean;

setFocusTraversalKeysEnabled(arg0: boolean): void;

getFocusTraversalKeysEnabled(): boolean;

requestFocus(): void;

requestFocus(arg0: FocusEvent.Cause): void;

requestFocusInWindow(): boolean;

requestFocusInWindow(arg0: FocusEvent.Cause): boolean;

getFocusCycleRootAncestor(): Container;

isFocusCycleRoot(arg0: Container): boolean;

transferFocus(): void;

nextFocus(): void;

transferFocusBackward(): void;

transferFocusUpCycle(): void;

hasFocus(): boolean;

isFocusOwner(): boolean;

add(arg0: PopupMenu): void;

remove(arg0: MenuComponent): void;
toString(): string;

list(): void;

list(arg0: PrintStream): void;

list(arg0: PrintStream, arg1: number): void;

list(arg0: PrintWriter): void;

list(arg0: PrintWriter, arg1: number): void;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

getPropertyChangeListeners(): PropertyChangeListener[];

addPropertyChangeListener(arg0: String, arg1: PropertyChangeListener): void;

removePropertyChangeListener(arg0: String, arg1: PropertyChangeListener): void;

getPropertyChangeListeners(arg0: String): PropertyChangeListener[];

firePropertyChange(arg0: String, arg1: number, arg2: number): void;

firePropertyChange(arg0: String, arg1: String, arg2: String): void;

firePropertyChange(arg0: String, arg1: number, arg2: number): void;

firePropertyChange(arg0: String, arg1: number, arg2: number): void;

firePropertyChange(arg0: String, arg1: number, arg2: number): void;

firePropertyChange(arg0: String, arg1: number, arg2: number): void;

setComponentOrientation(arg0: ComponentOrientation): void;

getComponentOrientation(): ComponentOrientation;

applyComponentOrientation(arg0: ComponentOrientation): void;

getAccessibleContext(): AccessibleContext;

setMixingCutoutShape(arg0: Shape): void;
 }
export namespace Component { 
export abstract class AccessibleAWTComponent extends AccessibleContext implements Serializable, AccessibleComponent {

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

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
export namespace AccessibleAWTComponent { 
export class AccessibleAWTComponentHandler implements ComponentListener, Serializable {

componentHidden(arg0: ComponentEvent): void;

componentShown(arg0: ComponentEvent): void;

componentMoved(arg0: ComponentEvent): void;

componentResized(arg0: ComponentEvent): void;
 }

export class AccessibleAWTFocusHandler implements FocusListener, Serializable {

focusGained(arg0: FocusEvent): void;

focusLost(arg0: FocusEvent): void;
 }

}

export class AccessibleAWTComponentHandler implements ComponentListener, Serializable {

componentHidden(arg0: ComponentEvent): void;

componentShown(arg0: ComponentEvent): void;

componentMoved(arg0: ComponentEvent): void;

componentResized(arg0: ComponentEvent): void;
 }

export class AccessibleAWTFocusHandler implements FocusListener, Serializable {

focusGained(arg0: FocusEvent): void;

focusLost(arg0: FocusEvent): void;
 }

export class BaselineResizeBehavior extends Enum<Component.BaselineResizeBehavior> {
static CONSTANT_ASCENT:Component.BaselineResizeBehavior
static CONSTANT_DESCENT:Component.BaselineResizeBehavior
static CENTER_OFFSET:Component.BaselineResizeBehavior
static OTHER:Component.BaselineResizeBehavior

static values(): Component.BaselineResizeBehavior[];

static valueOf(arg0: String): Component.BaselineResizeBehavior;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class BltBufferStrategy extends BufferStrategy {

dispose(): void;

getCapabilities(): BufferCapabilities;

getDrawGraphics(): Graphics;

show(): void;

contentsLost(): boolean;

contentsRestored(): boolean;
 }

export class FlipBufferStrategy extends BufferStrategy {

getCapabilities(): BufferCapabilities;

getDrawGraphics(): Graphics;

contentsLost(): boolean;

contentsRestored(): boolean;

show(): void;

dispose(): void;
 }

}

export class ComponentOrientation implements Serializable {
static LEFT_TO_RIGHT:ComponentOrientation
static RIGHT_TO_LEFT:ComponentOrientation
static UNKNOWN:ComponentOrientation

isHorizontal(): boolean;

isLeftToRight(): boolean;

static getOrientation(arg0: Locale): ComponentOrientation;

static getOrientation(arg0: ResourceBundle): ComponentOrientation;
 }

export interface Composite {

createContext(arg0: ColorModel, arg1: ColorModel, arg2: RenderingHints): CompositeContext;
 }

export interface CompositeContext {

dispose(): void;

compose(arg0: Raster, arg1: Raster, arg2: WritableRaster): void;
 }

export class Container extends Component {
constructor();

getComponentCount(): number;

countComponents(): number;

getComponent(arg0: number): Component;

getComponents(): Component[];

getInsets(): Insets;

insets(): Insets;

add(arg0: Component): Component;

add(arg0: String, arg1: Component): Component;

add(arg0: Component, arg1: number): Component;

setComponentZOrder(arg0: Component, arg1: number): void;

getComponentZOrder(arg0: Component): number;

add(arg0: Component, arg1: Object): void;

add(arg0: Component, arg1: Object, arg2: number): void;

remove(arg0: number): void;

remove(arg0: Component): void;

removeAll(): void;

getLayout(): LayoutManager;

setLayout(arg0: LayoutManager): void;

doLayout(): void;

layout(): void;

isValidateRoot(): boolean;

invalidate(): void;

validate(): void;

setFont(arg0: Font): void;

getPreferredSize(): Dimension;

preferredSize(): Dimension;

getMinimumSize(): Dimension;

minimumSize(): Dimension;

getMaximumSize(): Dimension;

getAlignmentX(): number;

getAlignmentY(): number;

paint(arg0: Graphics): void;

update(arg0: Graphics): void;

print(arg0: Graphics): void;

paintComponents(arg0: Graphics): void;

printComponents(arg0: Graphics): void;

addContainerListener(arg0: ContainerListener): void;

removeContainerListener(arg0: ContainerListener): void;

getContainerListeners(): ContainerListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

deliverEvent(arg0: Event): void;

getComponentAt(arg0: number, arg1: number): Component;

locate(arg0: number, arg1: number): Component;

getComponentAt(arg0: Point): Component;

getMousePosition(arg0: boolean): Point;

findComponentAt(arg0: number, arg1: number): Component;

findComponentAt(arg0: Point): Component;

addNotify(): void;

removeNotify(): void;

isAncestorOf(arg0: Component): boolean;

list(arg0: PrintStream, arg1: number): void;

list(arg0: PrintWriter, arg1: number): void;

setFocusTraversalKeys(arg0: number, arg1: Set<AWTKeyStroke>): void;

getFocusTraversalKeys(arg0: number): Set<AWTKeyStroke>;

areFocusTraversalKeysSet(arg0: number): boolean;

isFocusCycleRoot(arg0: Container): boolean;

setFocusTraversalPolicy(arg0: FocusTraversalPolicy): void;

getFocusTraversalPolicy(): FocusTraversalPolicy;

isFocusTraversalPolicySet(): boolean;

setFocusCycleRoot(arg0: boolean): void;

isFocusCycleRoot(): boolean;

setFocusTraversalPolicyProvider(arg0: boolean): void;

isFocusTraversalPolicyProvider(): boolean;

transferFocusDownCycle(): void;

applyComponentOrientation(arg0: ComponentOrientation): void;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

addPropertyChangeListener(arg0: String, arg1: PropertyChangeListener): void;
 }
export namespace Container { 
export class AccessibleAWTContainer extends Component.AccessibleAWTComponent {

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

getAccessibleAt(arg0: Point): Accessible;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;
 }
export namespace AccessibleAWTContainer { 
export class AccessibleContainerHandler implements ContainerListener, Serializable {

componentAdded(arg0: ContainerEvent): void;

componentRemoved(arg0: ContainerEvent): void;
 }

}

export class AccessibleContainerHandler implements ContainerListener, Serializable {

componentAdded(arg0: ContainerEvent): void;

componentRemoved(arg0: ContainerEvent): void;
 }

}

export class ContainerOrderFocusTraversalPolicy extends FocusTraversalPolicy implements Serializable {
constructor();

getComponentAfter(arg0: Container, arg1: Component): Component;

getComponentBefore(arg0: Container, arg1: Component): Component;

getFirstComponent(arg0: Container): Component;

getLastComponent(arg0: Container): Component;

getDefaultComponent(arg0: Container): Component;

setImplicitDownCycleTraversal(arg0: boolean): void;

getImplicitDownCycleTraversal(): boolean;
 }

export class Cursor implements Serializable {
static DEFAULT_CURSOR:number
static CROSSHAIR_CURSOR:number
static TEXT_CURSOR:number
static WAIT_CURSOR:number
static SW_RESIZE_CURSOR:number
static SE_RESIZE_CURSOR:number
static NW_RESIZE_CURSOR:number
static NE_RESIZE_CURSOR:number
static N_RESIZE_CURSOR:number
static S_RESIZE_CURSOR:number
static W_RESIZE_CURSOR:number
static E_RESIZE_CURSOR:number
static HAND_CURSOR:number
static MOVE_CURSOR:number
static CUSTOM_CURSOR:number
constructor(arg0: number);

static getPredefinedCursor(arg0: number): Cursor;

static getSystemCustomCursor(arg0: String): Cursor;

static getDefaultCursor(): Cursor;

getType(): number;

getName(): String;
toString(): string;
 }

export class DefaultFocusTraversalPolicy extends ContainerOrderFocusTraversalPolicy {
constructor();
 }

export class DefaultKeyboardFocusManager extends KeyboardFocusManager {
constructor();

dispatchEvent(arg0: AWTEvent): boolean;

dispatchKeyEvent(arg0: KeyEvent): boolean;

postProcessKeyEvent(arg0: KeyEvent): boolean;

processKeyEvent(arg0: Component, arg1: KeyEvent): void;

focusPreviousComponent(arg0: Component): void;

focusNextComponent(arg0: Component): void;

upFocusCycle(arg0: Component): void;

downFocusCycle(arg0: Container): void;
 }

export class Desktop {

static getDesktop(): Desktop;

static isDesktopSupported(): boolean;

isSupported(arg0: Desktop.Action): boolean;

open(arg0: File): void;

edit(arg0: File): void;

print(arg0: File): void;

browse(arg0: URI): void;

mail(): void;

mail(arg0: URI): void;

addAppEventListener(arg0: SystemEventListener): void;

removeAppEventListener(arg0: SystemEventListener): void;

setAboutHandler(arg0: AboutHandler): void;

setPreferencesHandler(arg0: PreferencesHandler): void;

setOpenFileHandler(arg0: OpenFilesHandler): void;

setPrintFileHandler(arg0: PrintFilesHandler): void;

setOpenURIHandler(arg0: OpenURIHandler): void;

setQuitHandler(arg0: QuitHandler): void;

setQuitStrategy(arg0: QuitStrategy): void;

enableSuddenTermination(): void;

disableSuddenTermination(): void;

requestForeground(arg0: boolean): void;

openHelpViewer(): void;

setDefaultMenuBar(arg0: JMenuBar): void;

browseFileDirectory(arg0: File): void;

moveToTrash(arg0: File): boolean;
 }
export namespace Desktop { 
export class Action extends Enum<Desktop.Action> {
static OPEN:Desktop.Action
static EDIT:Desktop.Action
static PRINT:Desktop.Action
static MAIL:Desktop.Action
static BROWSE:Desktop.Action
static APP_EVENT_FOREGROUND:Desktop.Action
static APP_EVENT_HIDDEN:Desktop.Action
static APP_EVENT_REOPENED:Desktop.Action
static APP_EVENT_SCREEN_SLEEP:Desktop.Action
static APP_EVENT_SYSTEM_SLEEP:Desktop.Action
static APP_EVENT_USER_SESSION:Desktop.Action
static APP_ABOUT:Desktop.Action
static APP_PREFERENCES:Desktop.Action
static APP_OPEN_FILE:Desktop.Action
static APP_PRINT_FILE:Desktop.Action
static APP_OPEN_URI:Desktop.Action
static APP_QUIT_HANDLER:Desktop.Action
static APP_QUIT_STRATEGY:Desktop.Action
static APP_SUDDEN_TERMINATION:Desktop.Action
static APP_REQUEST_FOREGROUND:Desktop.Action
static APP_HELP_VIEWER:Desktop.Action
static APP_MENU_BAR:Desktop.Action
static BROWSE_FILE_DIR:Desktop.Action
static MOVE_TO_TRASH:Desktop.Action

static values(): Desktop.Action[];

static valueOf(arg0: String): Desktop.Action;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class Dialog extends Window {
static DEFAULT_MODALITY_TYPE:Dialog.ModalityType
constructor(arg0: Frame);
constructor(arg0: Frame, arg1: boolean);
constructor(arg0: Frame, arg1: String);
constructor(arg0: Frame, arg1: String, arg2: boolean);
constructor(arg0: Frame, arg1: String, arg2: boolean, arg3: GraphicsConfiguration);
constructor(arg0: Dialog);
constructor(arg0: Dialog, arg1: String);
constructor(arg0: Dialog, arg1: String, arg2: boolean);
constructor(arg0: Dialog, arg1: String, arg2: boolean, arg3: GraphicsConfiguration);
constructor(arg0: Window);
constructor(arg0: Window, arg1: String);
constructor(arg0: Window, arg1: Dialog.ModalityType);
constructor(arg0: Window, arg1: String, arg2: Dialog.ModalityType);
constructor(arg0: Window, arg1: String, arg2: Dialog.ModalityType, arg3: GraphicsConfiguration);

addNotify(): void;

isModal(): boolean;

setModal(arg0: boolean): void;

getModalityType(): Dialog.ModalityType;

setModalityType(arg0: Dialog.ModalityType): void;

getTitle(): String;

setTitle(arg0: String): void;

setVisible(arg0: boolean): void;

show(): void;

hide(): void;

toBack(): void;

isResizable(): boolean;

setResizable(arg0: boolean): void;

setUndecorated(arg0: boolean): void;

isUndecorated(): boolean;

setOpacity(arg0: number): void;

setShape(arg0: Shape): void;

setBackground(arg0: Color): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace Dialog { 
export class AccessibleAWTDialog extends Window.AccessibleAWTWindow {

getAccessibleRole(): AccessibleRole;

getAccessibleStateSet(): AccessibleStateSet;
 }

export class ModalExclusionType extends Enum<Dialog.ModalExclusionType> {
static NO_EXCLUDE:Dialog.ModalExclusionType
static APPLICATION_EXCLUDE:Dialog.ModalExclusionType
static TOOLKIT_EXCLUDE:Dialog.ModalExclusionType

static values(): Dialog.ModalExclusionType[];

static valueOf(arg0: String): Dialog.ModalExclusionType;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class ModalityType extends Enum<Dialog.ModalityType> {
static MODELESS:Dialog.ModalityType
static DOCUMENT_MODAL:Dialog.ModalityType
static APPLICATION_MODAL:Dialog.ModalityType
static TOOLKIT_MODAL:Dialog.ModalityType

static values(): Dialog.ModalityType[];

static valueOf(arg0: String): Dialog.ModalityType;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class Dimension extends Dimension2D implements Serializable {
width:number
height:number
constructor();
constructor(arg0: Dimension);
constructor(arg0: number, arg1: number);

getWidth(): number;

getHeight(): number;

setSize(arg0: number, arg1: number): void;

getSize(): Dimension;

setSize(arg0: Dimension): void;

setSize(arg0: number, arg1: number): void;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class DisplayMode {
static BIT_DEPTH_MULTI:number
static REFRESH_RATE_UNKNOWN:number
constructor(arg0: number, arg1: number, arg2: number, arg3: number);

getHeight(): number;

getWidth(): number;

getBitDepth(): number;

getRefreshRate(): number;

equals(arg0: DisplayMode): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class Event implements Serializable {
static SHIFT_MASK:number
static CTRL_MASK:number
static META_MASK:number
static ALT_MASK:number
static HOME:number
static END:number
static PGUP:number
static PGDN:number
static UP:number
static DOWN:number
static LEFT:number
static RIGHT:number
static F1:number
static F2:number
static F3:number
static F4:number
static F5:number
static F6:number
static F7:number
static F8:number
static F9:number
static F10:number
static F11:number
static F12:number
static PRINT_SCREEN:number
static SCROLL_LOCK:number
static CAPS_LOCK:number
static NUM_LOCK:number
static PAUSE:number
static INSERT:number
static ENTER:number
static BACK_SPACE:number
static TAB:number
static ESCAPE:number
static DELETE:number
static WINDOW_DESTROY:number
static WINDOW_EXPOSE:number
static WINDOW_ICONIFY:number
static WINDOW_DEICONIFY:number
static WINDOW_MOVED:number
static KEY_PRESS:number
static KEY_RELEASE:number
static KEY_ACTION:number
static KEY_ACTION_RELEASE:number
static MOUSE_DOWN:number
static MOUSE_UP:number
static MOUSE_MOVE:number
static MOUSE_ENTER:number
static MOUSE_EXIT:number
static MOUSE_DRAG:number
static SCROLL_LINE_UP:number
static SCROLL_LINE_DOWN:number
static SCROLL_PAGE_UP:number
static SCROLL_PAGE_DOWN:number
static SCROLL_ABSOLUTE:number
static SCROLL_BEGIN:number
static SCROLL_END:number
static LIST_SELECT:number
static LIST_DESELECT:number
static ACTION_EVENT:number
static LOAD_FILE:number
static SAVE_FILE:number
static GOT_FOCUS:number
static LOST_FOCUS:number
target:Object
when:number
id:number
x:number
y:number
key:number
modifiers:number
clickCount:number
arg:Object
evt:Event
constructor(arg0: Object, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Object);
constructor(arg0: Object, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
constructor(arg0: Object, arg1: number, arg2: Object);

translate(arg0: number, arg1: number): void;

shiftDown(): boolean;

controlDown(): boolean;

metaDown(): boolean;
toString(): string;
 }

export class EventQueue {
constructor();

postEvent(arg0: AWTEvent): void;

getNextEvent(): AWTEvent;

peekEvent(): AWTEvent;

peekEvent(arg0: number): AWTEvent;

static getMostRecentEventTime(): number;

static getCurrentEvent(): AWTEvent;

push(arg0: EventQueue): void;

createSecondaryLoop(): SecondaryLoop;

static isDispatchThread(): boolean;

static invokeLater(arg0: Runnable): void;

static invokeAndWait(arg0: Runnable): void;
 }

export class FileDialog extends Dialog {
static LOAD:number
static SAVE:number
constructor(arg0: Frame);
constructor(arg0: Frame, arg1: String);
constructor(arg0: Frame, arg1: String, arg2: number);
constructor(arg0: Dialog);
constructor(arg0: Dialog, arg1: String);
constructor(arg0: Dialog, arg1: String, arg2: number);

setTitle(arg0: String): void;

addNotify(): void;

getMode(): number;

setMode(arg0: number): void;

getDirectory(): String;

setDirectory(arg0: String): void;

getFile(): String;

getFiles(): File[];

setFile(arg0: String): void;

setMultipleMode(arg0: boolean): void;

isMultipleMode(): boolean;

getFilenameFilter(): FilenameFilter;

setFilenameFilter(arg0: FilenameFilter): void;
 }

export class FlowLayout implements LayoutManager, Serializable {
static LEFT:number
static CENTER:number
static RIGHT:number
static LEADING:number
static TRAILING:number
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: number, arg2: number);

getAlignment(): number;

setAlignment(arg0: number): void;

getHgap(): number;

setHgap(arg0: number): void;

getVgap(): number;

setVgap(arg0: number): void;

setAlignOnBaseline(arg0: boolean): void;

getAlignOnBaseline(): boolean;

addLayoutComponent(arg0: String, arg1: Component): void;

removeLayoutComponent(arg0: Component): void;

preferredLayoutSize(arg0: Container): Dimension;

minimumLayoutSize(arg0: Container): Dimension;

layoutContainer(arg0: Container): void;
toString(): string;
 }

export abstract class FocusTraversalPolicy {

abstract getComponentAfter(arg0: Container, arg1: Component): Component;

abstract getComponentBefore(arg0: Container, arg1: Component): Component;

abstract getFirstComponent(arg0: Container): Component;

abstract getLastComponent(arg0: Container): Component;

abstract getDefaultComponent(arg0: Container): Component;

getInitialComponent(arg0: Window): Component;
 }

export class Font implements Serializable {
static DIALOG:String
static DIALOG_INPUT:String
static SANS_SERIF:String
static SERIF:String
static MONOSPACED:String
static PLAIN:number
static BOLD:number
static ITALIC:number
static ROMAN_BASELINE:number
static CENTER_BASELINE:number
static HANGING_BASELINE:number
static TRUETYPE_FONT:number
static TYPE1_FONT:number
static LAYOUT_LEFT_TO_RIGHT:number
static LAYOUT_RIGHT_TO_LEFT:number
static LAYOUT_NO_START_CONTEXT:number
static LAYOUT_NO_LIMIT_CONTEXT:number
constructor(arg0: String, arg1: number, arg2: number);
constructor(arg0: Map<AttributedCharacterIterator.Attribute, any>);

static textRequiresLayout(arg0: String[], arg1: number, arg2: number): boolean;

static getFont(arg0: Map<AttributedCharacterIterator.Attribute, any>): Font;

static createFonts(arg0: InputStream): Font[];

static createFonts(arg0: File): Font[];

static createFont(arg0: number, arg1: InputStream): Font;

static createFont(arg0: number, arg1: File): Font;

getTransform(): AffineTransform;

getFamily(): String;

getFamily(arg0: Locale): String;

getPSName(): String;

getName(): String;

getFontName(): String;

getFontName(arg0: Locale): String;

getStyle(): number;

getSize(): number;

getSize2D(): number;

isPlain(): boolean;

isBold(): boolean;

isItalic(): boolean;

isTransformed(): boolean;

hasLayoutAttributes(): boolean;

static getFont(arg0: String): Font;

static decode(arg0: String): Font;

static getFont(arg0: String, arg1: Font): Font;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;

getNumGlyphs(): number;

getMissingGlyphCode(): number;

getBaselineFor(arg0: String): number;

getAttributes(): Map<TextAttribute, any>;

getAvailableAttributes(): AttributedCharacterIterator.Attribute[];

deriveFont(arg0: number, arg1: number): Font;

deriveFont(arg0: number, arg1: AffineTransform): Font;

deriveFont(arg0: number): Font;

deriveFont(arg0: AffineTransform): Font;

deriveFont(arg0: number): Font;

deriveFont(arg0: Map<AttributedCharacterIterator.Attribute, any>): Font;

canDisplay(arg0: String): boolean;

canDisplay(arg0: number): boolean;

canDisplayUpTo(arg0: String): number;

canDisplayUpTo(arg0: String[], arg1: number, arg2: number): number;

canDisplayUpTo(arg0: CharacterIterator, arg1: number, arg2: number): number;

getItalicAngle(): number;

hasUniformLineMetrics(): boolean;

getLineMetrics(arg0: String, arg1: FontRenderContext): LineMetrics;

getLineMetrics(arg0: String, arg1: number, arg2: number, arg3: FontRenderContext): LineMetrics;

getLineMetrics(arg0: String[], arg1: number, arg2: number, arg3: FontRenderContext): LineMetrics;

getLineMetrics(arg0: CharacterIterator, arg1: number, arg2: number, arg3: FontRenderContext): LineMetrics;

getStringBounds(arg0: String, arg1: FontRenderContext): Rectangle2D;

getStringBounds(arg0: String, arg1: number, arg2: number, arg3: FontRenderContext): Rectangle2D;

getStringBounds(arg0: String[], arg1: number, arg2: number, arg3: FontRenderContext): Rectangle2D;

getStringBounds(arg0: CharacterIterator, arg1: number, arg2: number, arg3: FontRenderContext): Rectangle2D;

getMaxCharBounds(arg0: FontRenderContext): Rectangle2D;

createGlyphVector(arg0: FontRenderContext, arg1: String): GlyphVector;

createGlyphVector(arg0: FontRenderContext, arg1: String[]): GlyphVector;

createGlyphVector(arg0: FontRenderContext, arg1: CharacterIterator): GlyphVector;

createGlyphVector(arg0: FontRenderContext, arg1: number[]): GlyphVector;

layoutGlyphVector(arg0: FontRenderContext, arg1: String[], arg2: number, arg3: number, arg4: number): GlyphVector;
 }

export class FontFormatException extends Exception {
constructor(arg0: String);
 }

export abstract class FontMetrics implements Serializable {

getFont(): Font;

getFontRenderContext(): FontRenderContext;

getLeading(): number;

getAscent(): number;

getDescent(): number;

getHeight(): number;

getMaxAscent(): number;

getMaxDescent(): number;

getMaxDecent(): number;

getMaxAdvance(): number;

charWidth(arg0: number): number;

charWidth(arg0: String): number;

stringWidth(arg0: String): number;

charsWidth(arg0: String[], arg1: number, arg2: number): number;

bytesWidth(arg0: number[], arg1: number, arg2: number): number;

getWidths(): number[];

hasUniformLineMetrics(): boolean;

getLineMetrics(arg0: String, arg1: Graphics): LineMetrics;

getLineMetrics(arg0: String, arg1: number, arg2: number, arg3: Graphics): LineMetrics;

getLineMetrics(arg0: String[], arg1: number, arg2: number, arg3: Graphics): LineMetrics;

getLineMetrics(arg0: CharacterIterator, arg1: number, arg2: number, arg3: Graphics): LineMetrics;

getStringBounds(arg0: String, arg1: Graphics): Rectangle2D;

getStringBounds(arg0: String, arg1: number, arg2: number, arg3: Graphics): Rectangle2D;

getStringBounds(arg0: String[], arg1: number, arg2: number, arg3: Graphics): Rectangle2D;

getStringBounds(arg0: CharacterIterator, arg1: number, arg2: number, arg3: Graphics): Rectangle2D;

getMaxCharBounds(arg0: Graphics): Rectangle2D;
toString(): string;
 }

export class Frame extends Window implements MenuContainer {
static DEFAULT_CURSOR:number
static CROSSHAIR_CURSOR:number
static TEXT_CURSOR:number
static WAIT_CURSOR:number
static SW_RESIZE_CURSOR:number
static SE_RESIZE_CURSOR:number
static NW_RESIZE_CURSOR:number
static NE_RESIZE_CURSOR:number
static N_RESIZE_CURSOR:number
static S_RESIZE_CURSOR:number
static W_RESIZE_CURSOR:number
static E_RESIZE_CURSOR:number
static HAND_CURSOR:number
static MOVE_CURSOR:number
static NORMAL:number
static ICONIFIED:number
static MAXIMIZED_HORIZ:number
static MAXIMIZED_VERT:number
static MAXIMIZED_BOTH:number
constructor();
constructor(arg0: GraphicsConfiguration);
constructor(arg0: String);
constructor(arg0: String, arg1: GraphicsConfiguration);

addNotify(): void;

getTitle(): String;

setTitle(arg0: String): void;

getIconImage(): Image;

setIconImage(arg0: Image): void;

getMenuBar(): MenuBar;

setMenuBar(arg0: MenuBar): void;

isResizable(): boolean;

setResizable(arg0: boolean): void;

setState(arg0: number): void;

setExtendedState(arg0: number): void;

getState(): number;

getExtendedState(): number;

setMaximizedBounds(arg0: Rectangle): void;

getMaximizedBounds(): Rectangle;

setUndecorated(arg0: boolean): void;

isUndecorated(): boolean;

setOpacity(arg0: number): void;

setShape(arg0: Shape): void;

setBackground(arg0: Color): void;

remove(arg0: MenuComponent): void;

removeNotify(): void;

setCursor(arg0: number): void;

getCursorType(): number;

static getFrames(): Frame[];

getAccessibleContext(): AccessibleContext;
 }
export namespace Frame { 
export class AccessibleAWTFrame extends Window.AccessibleAWTWindow {

getAccessibleRole(): AccessibleRole;

getAccessibleStateSet(): AccessibleStateSet;
 }

}

export class GradientPaint implements Paint {
constructor(arg0: number, arg1: number, arg2: Color, arg3: number, arg4: number, arg5: Color);
constructor(arg0: Point2D, arg1: Color, arg2: Point2D, arg3: Color);
constructor(arg0: number, arg1: number, arg2: Color, arg3: number, arg4: number, arg5: Color, arg6: boolean);
constructor(arg0: Point2D, arg1: Color, arg2: Point2D, arg3: Color, arg4: boolean);

getPoint1(): Point2D;

getColor1(): Color;

getPoint2(): Point2D;

getColor2(): Color;

isCyclic(): boolean;

createContext(arg0: ColorModel, arg1: Rectangle, arg2: Rectangle2D, arg3: AffineTransform, arg4: RenderingHints): PaintContext;

getTransparency(): number;
 }

export abstract class Graphics {

abstract create(): Graphics;

create(arg0: number, arg1: number, arg2: number, arg3: number): Graphics;

abstract translate(arg0: number, arg1: number): void;

abstract getColor(): Color;

abstract setColor(arg0: Color): void;

abstract setPaintMode(): void;

abstract setXORMode(arg0: Color): void;

abstract getFont(): Font;

abstract setFont(arg0: Font): void;

getFontMetrics(): FontMetrics;

abstract getFontMetrics(arg0: Font): FontMetrics;

abstract getClipBounds(): Rectangle;

abstract clipRect(arg0: number, arg1: number, arg2: number, arg3: number): void;

abstract setClip(arg0: number, arg1: number, arg2: number, arg3: number): void;

abstract getClip(): Shape;

abstract setClip(arg0: Shape): void;

abstract copyArea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

abstract drawLine(arg0: number, arg1: number, arg2: number, arg3: number): void;

abstract fillRect(arg0: number, arg1: number, arg2: number, arg3: number): void;

drawRect(arg0: number, arg1: number, arg2: number, arg3: number): void;

abstract clearRect(arg0: number, arg1: number, arg2: number, arg3: number): void;

abstract drawRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

abstract fillRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

draw3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;

fill3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;

abstract drawOval(arg0: number, arg1: number, arg2: number, arg3: number): void;

abstract fillOval(arg0: number, arg1: number, arg2: number, arg3: number): void;

abstract drawArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

abstract fillArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

abstract drawPolyline(arg0: number[], arg1: number[], arg2: number): void;

abstract drawPolygon(arg0: number[], arg1: number[], arg2: number): void;

drawPolygon(arg0: Polygon): void;

abstract fillPolygon(arg0: number[], arg1: number[], arg2: number): void;

fillPolygon(arg0: Polygon): void;

abstract drawString(arg0: String, arg1: number, arg2: number): void;

abstract drawString(arg0: AttributedCharacterIterator, arg1: number, arg2: number): void;

drawChars(arg0: String[], arg1: number, arg2: number, arg3: number, arg4: number): void;

drawBytes(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: number): void;

abstract drawImage(arg0: Image, arg1: number, arg2: number, arg3: ImageObserver): boolean;

abstract drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: ImageObserver): boolean;

abstract drawImage(arg0: Image, arg1: number, arg2: number, arg3: Color, arg4: ImageObserver): boolean;

abstract drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Color, arg6: ImageObserver): boolean;

abstract drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: ImageObserver): boolean;

abstract drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Color, arg10: ImageObserver): boolean;

abstract dispose(): void;

finalize(): void;
toString(): string;

getClipRect(): Rectangle;

hitClip(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

getClipBounds(arg0: Rectangle): Rectangle;
 }

export abstract class Graphics2D extends Graphics {

draw3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;

fill3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;

abstract draw(arg0: Shape): void;

abstract drawImage(arg0: Image, arg1: AffineTransform, arg2: ImageObserver): boolean;

abstract drawImage(arg0: BufferedImage, arg1: BufferedImageOp, arg2: number, arg3: number): void;

abstract drawRenderedImage(arg0: RenderedImage, arg1: AffineTransform): void;

abstract drawRenderableImage(arg0: RenderableImage, arg1: AffineTransform): void;

abstract drawString(arg0: String, arg1: number, arg2: number): void;

abstract drawString(arg0: String, arg1: number, arg2: number): void;

abstract drawString(arg0: AttributedCharacterIterator, arg1: number, arg2: number): void;

abstract drawString(arg0: AttributedCharacterIterator, arg1: number, arg2: number): void;

abstract drawGlyphVector(arg0: GlyphVector, arg1: number, arg2: number): void;

abstract fill(arg0: Shape): void;

abstract hit(arg0: Rectangle, arg1: Shape, arg2: boolean): boolean;

abstract getDeviceConfiguration(): GraphicsConfiguration;

abstract setComposite(arg0: Composite): void;

abstract setPaint(arg0: Paint): void;

abstract setStroke(arg0: Stroke): void;

abstract setRenderingHint(arg0: RenderingHints.Key, arg1: Object): void;

abstract getRenderingHint(arg0: RenderingHints.Key): Object;

abstract setRenderingHints(arg0: Map<any, any>): void;

abstract addRenderingHints(arg0: Map<any, any>): void;

abstract getRenderingHints(): RenderingHints;

abstract translate(arg0: number, arg1: number): void;

abstract translate(arg0: number, arg1: number): void;

abstract rotate(arg0: number): void;

abstract rotate(arg0: number, arg1: number, arg2: number): void;

abstract scale(arg0: number, arg1: number): void;

abstract shear(arg0: number, arg1: number): void;

abstract transform(arg0: AffineTransform): void;

abstract setTransform(arg0: AffineTransform): void;

abstract getTransform(): AffineTransform;

abstract getPaint(): Paint;

abstract getComposite(): Composite;

abstract setBackground(arg0: Color): void;

abstract getBackground(): Color;

abstract getStroke(): Stroke;

abstract clip(arg0: Shape): void;

abstract getFontRenderContext(): FontRenderContext;
 }

export abstract class GraphicsConfigTemplate implements Serializable {
static REQUIRED:number
static PREFERRED:number
static UNNECESSARY:number
constructor();

abstract getBestConfiguration(arg0: GraphicsConfiguration[]): GraphicsConfiguration;

abstract isGraphicsConfigSupported(arg0: GraphicsConfiguration): boolean;
 }

export abstract class GraphicsConfiguration {

abstract getDevice(): GraphicsDevice;

createCompatibleImage(arg0: number, arg1: number): BufferedImage;

createCompatibleImage(arg0: number, arg1: number, arg2: number): BufferedImage;

createCompatibleVolatileImage(arg0: number, arg1: number): VolatileImage;

createCompatibleVolatileImage(arg0: number, arg1: number, arg2: number): VolatileImage;

createCompatibleVolatileImage(arg0: number, arg1: number, arg2: ImageCapabilities): VolatileImage;

createCompatibleVolatileImage(arg0: number, arg1: number, arg2: ImageCapabilities, arg3: number): VolatileImage;

abstract getColorModel(): ColorModel;

abstract getColorModel(arg0: number): ColorModel;

abstract getDefaultTransform(): AffineTransform;

abstract getNormalizingTransform(): AffineTransform;

abstract getBounds(): Rectangle;

getBufferCapabilities(): BufferCapabilities;

getImageCapabilities(): ImageCapabilities;

isTranslucencyCapable(): boolean;
 }

export abstract class GraphicsDevice {
static TYPE_RASTER_SCREEN:number
static TYPE_PRINTER:number
static TYPE_IMAGE_BUFFER:number

abstract getType(): number;

abstract getIDstring(): String;

abstract getConfigurations(): GraphicsConfiguration[];

abstract getDefaultConfiguration(): GraphicsConfiguration;

getBestConfiguration(arg0: GraphicsConfigTemplate): GraphicsConfiguration;

isFullScreenSupported(): boolean;

setFullScreenWindow(arg0: Window): void;

getFullScreenWindow(): Window;

isDisplayChangeSupported(): boolean;

setDisplayMode(arg0: DisplayMode): void;

getDisplayMode(): DisplayMode;

getDisplayModes(): DisplayMode[];

getAvailableAcceleratedMemory(): number;

isWindowTranslucencySupported(arg0: GraphicsDevice.WindowTranslucency): boolean;
 }
export namespace GraphicsDevice { 
export class WindowTranslucency extends Enum<GraphicsDevice.WindowTranslucency> {
static PERPIXEL_TRANSPARENT:GraphicsDevice.WindowTranslucency
static TRANSLUCENT:GraphicsDevice.WindowTranslucency
static PERPIXEL_TRANSLUCENT:GraphicsDevice.WindowTranslucency

static values(): GraphicsDevice.WindowTranslucency[];

static valueOf(arg0: String): GraphicsDevice.WindowTranslucency;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export abstract class GraphicsEnvironment {

static getLocalGraphicsEnvironment(): GraphicsEnvironment;

static isHeadless(): boolean;

isHeadlessInstance(): boolean;

abstract getScreenDevices(): GraphicsDevice[];

abstract getDefaultScreenDevice(): GraphicsDevice;

abstract createGraphics(arg0: BufferedImage): Graphics2D;

abstract getAllFonts(): Font[];

abstract getAvailableFontFamilyNames(): String[];

abstract getAvailableFontFamilyNames(arg0: Locale): String[];

registerFont(arg0: Font): boolean;

preferLocaleFonts(): void;

preferProportionalFonts(): void;

getCenterPoint(): Point;

getMaximumWindowBounds(): Rectangle;
 }

export class GridBagConstraints implements Cloneable, Serializable {
static RELATIVE:number
static REMAINDER:number
static NONE:number
static BOTH:number
static HORIZONTAL:number
static VERTICAL:number
static CENTER:number
static NORTH:number
static NORTHEAST:number
static EAST:number
static SOUTHEAST:number
static SOUTH:number
static SOUTHWEST:number
static WEST:number
static NORTHWEST:number
static PAGE_START:number
static PAGE_END:number
static LINE_START:number
static LINE_END:number
static FIRST_LINE_START:number
static FIRST_LINE_END:number
static LAST_LINE_START:number
static LAST_LINE_END:number
static BASELINE:number
static BASELINE_LEADING:number
static BASELINE_TRAILING:number
static ABOVE_BASELINE:number
static ABOVE_BASELINE_LEADING:number
static ABOVE_BASELINE_TRAILING:number
static BELOW_BASELINE:number
static BELOW_BASELINE_LEADING:number
static BELOW_BASELINE_TRAILING:number
gridx:number
gridy:number
gridwidth:number
gridheight:number
weightx:number
weighty:number
anchor:number
fill:number
insets:Insets
ipadx:number
ipady:number
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Insets, arg9: number, arg10: number);

clone(): Object;
 }

export class GridBagLayout implements LayoutManager2, Serializable {
columnWidths:number[]
rowHeights:number[]
columnWeights:number[]
rowWeights:number[]
constructor();

setConstraints(arg0: Component, arg1: GridBagConstraints): void;

getConstraints(arg0: Component): GridBagConstraints;

getLayoutOrigin(): Point;

getLayoutDimensions(): Array<Array<number>>;

getLayoutWeights(): Array<Array<number>>;

location(arg0: number, arg1: number): Point;

addLayoutComponent(arg0: String, arg1: Component): void;

addLayoutComponent(arg0: Component, arg1: Object): void;

removeLayoutComponent(arg0: Component): void;

preferredLayoutSize(arg0: Container): Dimension;

minimumLayoutSize(arg0: Container): Dimension;

maximumLayoutSize(arg0: Container): Dimension;

getLayoutAlignmentX(arg0: Container): number;

getLayoutAlignmentY(arg0: Container): number;

invalidateLayout(arg0: Container): void;

layoutContainer(arg0: Container): void;
toString(): string;
 }

export class GridBagLayoutInfo implements Serializable {
 }

export class GridLayout implements LayoutManager, Serializable {
constructor();
constructor(arg0: number, arg1: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number);

getRows(): number;

setRows(arg0: number): void;

getColumns(): number;

setColumns(arg0: number): void;

getHgap(): number;

setHgap(arg0: number): void;

getVgap(): number;

setVgap(arg0: number): void;

addLayoutComponent(arg0: String, arg1: Component): void;

removeLayoutComponent(arg0: Component): void;

preferredLayoutSize(arg0: Container): Dimension;

minimumLayoutSize(arg0: Container): Dimension;

layoutContainer(arg0: Container): void;
toString(): string;
 }

export class HeadlessException extends UnsupportedOperationException {
constructor();
constructor(arg0: String);

getMessage(): String;
 }

export class IllegalComponentStateException extends IllegalStateException {
constructor();
constructor(arg0: String);
 }

export abstract class Image {
static UndefinedProperty:Object
static SCALE_DEFAULT:number
static SCALE_FAST:number
static SCALE_SMOOTH:number
static SCALE_REPLICATE:number
static SCALE_AREA_AVERAGING:number

abstract getWidth(arg0: ImageObserver): number;

abstract getHeight(arg0: ImageObserver): number;

abstract getSource(): ImageProducer;

abstract getGraphics(): Graphics;

abstract getProperty(arg0: String, arg1: ImageObserver): Object;

getScaledInstance(arg0: number, arg1: number, arg2: number): Image;

flush(): void;

getCapabilities(arg0: GraphicsConfiguration): ImageCapabilities;

setAccelerationPriority(arg0: number): void;

getAccelerationPriority(): number;
 }

export class ImageCapabilities implements Cloneable {
constructor(arg0: boolean);

isAccelerated(): boolean;

isTrueVolatile(): boolean;

clone(): Object;
 }

export class Insets implements Cloneable, Serializable {
top:number
left:number
bottom:number
right:number
constructor(arg0: number, arg1: number, arg2: number, arg3: number);

set(arg0: number, arg1: number, arg2: number, arg3: number): void;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;

clone(): Object;
 }

export interface ItemSelectable {

getSelectedObjects(): Object[];

addItemListener(arg0: ItemListener): void;

removeItemListener(arg0: ItemListener): void;
 }

export class JobAttributes implements Cloneable {
constructor();
constructor(arg0: JobAttributes);
constructor(arg0: number, arg1: JobAttributes.DefaultSelectionType, arg2: JobAttributes.DestinationType, arg3: JobAttributes.DialogType, arg4: String, arg5: number, arg6: number, arg7: JobAttributes.MultipleDocumentHandlingType, arg8: Array<Array<number>>, arg9: String, arg10: JobAttributes.SidesType);

clone(): Object;

set(arg0: JobAttributes): void;

getCopies(): number;

setCopies(arg0: number): void;

setCopiesToDefault(): void;

getDefaultSelection(): JobAttributes.DefaultSelectionType;

setDefaultSelection(arg0: JobAttributes.DefaultSelectionType): void;

getDestination(): JobAttributes.DestinationType;

setDestination(arg0: JobAttributes.DestinationType): void;

getDialog(): JobAttributes.DialogType;

setDialog(arg0: JobAttributes.DialogType): void;

getFileName(): String;

setFileName(arg0: String): void;

getFromPage(): number;

setFromPage(arg0: number): void;

getMaxPage(): number;

setMaxPage(arg0: number): void;

getMinPage(): number;

setMinPage(arg0: number): void;

getMultipleDocumentHandling(): JobAttributes.MultipleDocumentHandlingType;

setMultipleDocumentHandling(arg0: JobAttributes.MultipleDocumentHandlingType): void;

setMultipleDocumentHandlingToDefault(): void;

getPageRanges(): Array<Array<number>>;

setPageRanges(arg0: Array<Array<number>>): void;

getPrinter(): String;

setPrinter(arg0: String): void;

getSides(): JobAttributes.SidesType;

setSides(arg0: JobAttributes.SidesType): void;

setSidesToDefault(): void;

getToPage(): number;

setToPage(arg0: number): void;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }
export namespace JobAttributes { 
export class DefaultSelectionType extends AttributeValue {
static ALL:JobAttributes.DefaultSelectionType
static RANGE:JobAttributes.DefaultSelectionType
static SELECTION:JobAttributes.DefaultSelectionType
 }

export class DestinationType extends AttributeValue {
static FILE:JobAttributes.DestinationType
static PRINTER:JobAttributes.DestinationType
 }

export class DialogType extends AttributeValue {
static COMMON:JobAttributes.DialogType
static NATIVE:JobAttributes.DialogType
static NONE:JobAttributes.DialogType
 }

export class MultipleDocumentHandlingType extends AttributeValue {
static SEPARATE_DOCUMENTS_COLLATED_COPIES:JobAttributes.MultipleDocumentHandlingType
static SEPARATE_DOCUMENTS_UNCOLLATED_COPIES:JobAttributes.MultipleDocumentHandlingType
 }

export class SidesType extends AttributeValue {
static ONE_SIDED:JobAttributes.SidesType
static TWO_SIDED_LONG_EDGE:JobAttributes.SidesType
static TWO_SIDED_SHORT_EDGE:JobAttributes.SidesType
 }

}

export interface KeyEventDispatcher {

dispatchKeyEvent(arg0: KeyEvent): boolean;
 }

export interface KeyEventPostProcessor {

postProcessKeyEvent(arg0: KeyEvent): boolean;
 }

export abstract class KeyboardFocusManager implements KeyEventDispatcher, KeyEventPostProcessor {
static FORWARD_TRAVERSAL_KEYS:number
static BACKWARD_TRAVERSAL_KEYS:number
static UP_CYCLE_TRAVERSAL_KEYS:number
static DOWN_CYCLE_TRAVERSAL_KEYS:number
constructor();

static getCurrentKeyboardFocusManager(): KeyboardFocusManager;

static setCurrentKeyboardFocusManager(arg0: KeyboardFocusManager): void;

getFocusOwner(): Component;

clearFocusOwner(): void;

clearGlobalFocusOwner(): void;

getPermanentFocusOwner(): Component;

getFocusedWindow(): Window;

getActiveWindow(): Window;

getDefaultFocusTraversalPolicy(): FocusTraversalPolicy;

setDefaultFocusTraversalPolicy(arg0: FocusTraversalPolicy): void;

setDefaultFocusTraversalKeys(arg0: number, arg1: Set<AWTKeyStroke>): void;

getDefaultFocusTraversalKeys(arg0: number): Set<AWTKeyStroke>;

getCurrentFocusCycleRoot(): Container;

setGlobalCurrentFocusCycleRoot(arg0: Container): void;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

getPropertyChangeListeners(): PropertyChangeListener[];

addPropertyChangeListener(arg0: String, arg1: PropertyChangeListener): void;

removePropertyChangeListener(arg0: String, arg1: PropertyChangeListener): void;

getPropertyChangeListeners(arg0: String): PropertyChangeListener[];

addVetoableChangeListener(arg0: VetoableChangeListener): void;

removeVetoableChangeListener(arg0: VetoableChangeListener): void;

getVetoableChangeListeners(): VetoableChangeListener[];

addVetoableChangeListener(arg0: String, arg1: VetoableChangeListener): void;

removeVetoableChangeListener(arg0: String, arg1: VetoableChangeListener): void;

getVetoableChangeListeners(arg0: String): VetoableChangeListener[];

addKeyEventDispatcher(arg0: KeyEventDispatcher): void;

removeKeyEventDispatcher(arg0: KeyEventDispatcher): void;

addKeyEventPostProcessor(arg0: KeyEventPostProcessor): void;

removeKeyEventPostProcessor(arg0: KeyEventPostProcessor): void;

abstract dispatchEvent(arg0: AWTEvent): boolean;

redispatchEvent(arg0: Component, arg1: AWTEvent): void;

abstract dispatchKeyEvent(arg0: KeyEvent): boolean;

abstract postProcessKeyEvent(arg0: KeyEvent): boolean;

abstract processKeyEvent(arg0: Component, arg1: KeyEvent): void;

abstract focusNextComponent(arg0: Component): void;

abstract focusPreviousComponent(arg0: Component): void;

abstract upFocusCycle(arg0: Component): void;

abstract downFocusCycle(arg0: Container): void;

focusNextComponent(): void;

focusPreviousComponent(): void;

upFocusCycle(): void;

downFocusCycle(): void;
 }

export class Label extends Component implements Accessible {
static LEFT:number
static CENTER:number
static RIGHT:number
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: number);

addNotify(): void;

getAlignment(): number;

setAlignment(arg0: number): void;

getText(): String;

setText(arg0: String): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace Label { 
export class AccessibleAWTLabel extends Component.AccessibleAWTComponent {
constructor(arg0: Label);

getAccessibleName(): String;

getAccessibleRole(): AccessibleRole;
 }

}

export interface LayoutManager {

addLayoutComponent(arg0: String, arg1: Component): void;

removeLayoutComponent(arg0: Component): void;

preferredLayoutSize(arg0: Container): Dimension;

minimumLayoutSize(arg0: Container): Dimension;

layoutContainer(arg0: Container): void;
 }

export interface LayoutManager2 extends LayoutManager {

addLayoutComponent(arg0: Component, arg1: Object): void;

maximumLayoutSize(arg0: Container): Dimension;

getLayoutAlignmentX(arg0: Container): number;

getLayoutAlignmentY(arg0: Container): number;

invalidateLayout(arg0: Container): void;
 }

export class LinearGradientPaint extends MultipleGradientPaint {
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: Color[]);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: Color[], arg6: MultipleGradientPaint.CycleMethod);
constructor(arg0: Point2D, arg1: Point2D, arg2: number[], arg3: Color[]);
constructor(arg0: Point2D, arg1: Point2D, arg2: number[], arg3: Color[], arg4: MultipleGradientPaint.CycleMethod);
constructor(arg0: Point2D, arg1: Point2D, arg2: number[], arg3: Color[], arg4: MultipleGradientPaint.CycleMethod, arg5: MultipleGradientPaint.ColorSpaceType, arg6: AffineTransform);

createContext(arg0: ColorModel, arg1: Rectangle, arg2: Rectangle2D, arg3: AffineTransform, arg4: RenderingHints): PaintContext;

getStartPoint(): Point2D;

getEndPoint(): Point2D;
 }

export class List extends Component implements ItemSelectable, Accessible {
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: boolean);

addNotify(): void;

removeNotify(): void;

getItemCount(): number;

countItems(): number;

getItem(arg0: number): String;

getItems(): String[];

add(arg0: String): void;

addItem(arg0: String): void;

add(arg0: String, arg1: number): void;

addItem(arg0: String, arg1: number): void;

replaceItem(arg0: String, arg1: number): void;

removeAll(): void;

clear(): void;

remove(arg0: String): void;

remove(arg0: number): void;

delItem(arg0: number): void;

getSelectedIndex(): number;

getSelectedIndexes(): number[];

getSelectedItem(): String;

getSelectedItems(): String[];

getSelectedObjects(): Object[];

select(arg0: number): void;

deselect(arg0: number): void;

isIndexSelected(arg0: number): boolean;

isSelected(arg0: number): boolean;

getRows(): number;

isMultipleMode(): boolean;

allowsMultipleSelections(): boolean;

setMultipleMode(arg0: boolean): void;

setMultipleSelections(arg0: boolean): void;

getVisibleIndex(): number;

makeVisible(arg0: number): void;

getPreferredSize(arg0: number): Dimension;

preferredSize(arg0: number): Dimension;

getPreferredSize(): Dimension;

preferredSize(): Dimension;

getMinimumSize(arg0: number): Dimension;

minimumSize(arg0: number): Dimension;

getMinimumSize(): Dimension;

minimumSize(): Dimension;

addItemListener(arg0: ItemListener): void;

removeItemListener(arg0: ItemListener): void;

getItemListeners(): ItemListener[];

addActionListener(arg0: ActionListener): void;

removeActionListener(arg0: ActionListener): void;

getActionListeners(): ActionListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

delItems(arg0: number, arg1: number): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace List { 
export class AccessibleAWTList extends Component.AccessibleAWTComponent implements AccessibleSelection, ItemListener, ActionListener {
constructor(arg0: List);

actionPerformed(arg0: ActionEvent): void;

itemStateChanged(arg0: ItemEvent): void;

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
export namespace AccessibleAWTList { 
export class AccessibleAWTListChild extends Component.AccessibleAWTComponent implements Accessible {
constructor(arg0: List.AccessibleAWTList, arg1: List, arg2: number);

getAccessibleContext(): AccessibleContext;

getAccessibleRole(): AccessibleRole;

getAccessibleStateSet(): AccessibleStateSet;

getLocale(): Locale;

getAccessibleIndexInParent(): number;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

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

}

export class AccessibleAWTListChild extends Component.AccessibleAWTComponent implements Accessible {
constructor(arg0: List.AccessibleAWTList, arg1: List, arg2: number);

getAccessibleContext(): AccessibleContext;

getAccessibleRole(): AccessibleRole;

getAccessibleStateSet(): AccessibleStateSet;

getLocale(): Locale;

getAccessibleIndexInParent(): number;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

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

}

export class MediaTracker implements Serializable {
static LOADING:number
static ABORTED:number
static ERRORED:number
static COMPLETE:number
constructor(arg0: Component);

addImage(arg0: Image, arg1: number): void;

addImage(arg0: Image, arg1: number, arg2: number, arg3: number): void;

checkAll(): boolean;

checkAll(arg0: boolean): boolean;

isErrorAny(): boolean;

getErrorsAny(): Object[];

waitForAll(): void;

waitForAll(arg0: number): boolean;

statusAll(arg0: boolean): number;

checkID(arg0: number): boolean;

checkID(arg0: number, arg1: boolean): boolean;

isErrorID(arg0: number): boolean;

getErrorsID(arg0: number): Object[];

waitForID(arg0: number): void;

waitForID(arg0: number, arg1: number): boolean;

statusID(arg0: number, arg1: boolean): number;

removeImage(arg0: Image): void;

removeImage(arg0: Image, arg1: number): void;

removeImage(arg0: Image, arg1: number, arg2: number, arg3: number): void;
 }

export class Menu extends MenuItem implements MenuContainer, Accessible {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: boolean);

addNotify(): void;

removeNotify(): void;

isTearOff(): boolean;

getItemCount(): number;

countItems(): number;

getItem(arg0: number): MenuItem;

add(arg0: MenuItem): MenuItem;

add(arg0: String): void;

insert(arg0: MenuItem, arg1: number): void;

insert(arg0: String, arg1: number): void;

addSeparator(): void;

insertSeparator(arg0: number): void;

remove(arg0: number): void;

remove(arg0: MenuComponent): void;

removeAll(): void;

paramString(): String;

getAccessibleContext(): AccessibleContext;
 }
export namespace Menu { 
export class AccessibleAWTMenu extends MenuItem.AccessibleAWTMenuItem {

getAccessibleRole(): AccessibleRole;
 }

}

export class MenuBar extends MenuComponent implements MenuContainer, Accessible {
constructor();

addNotify(): void;

removeNotify(): void;

getHelpMenu(): Menu;

setHelpMenu(arg0: Menu): void;

add(arg0: Menu): Menu;

remove(arg0: number): void;

remove(arg0: MenuComponent): void;

getMenuCount(): number;

countMenus(): number;

getMenu(arg0: number): Menu;

shortcuts(): Enumeration<MenuShortcut>;

getShortcutMenuItem(arg0: MenuShortcut): MenuItem;

deleteShortcut(arg0: MenuShortcut): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace MenuBar { 
export class AccessibleAWTMenuBar extends MenuComponent.AccessibleAWTMenuComponent {

getAccessibleRole(): AccessibleRole;
 }

}

export abstract class MenuComponent implements Serializable {
constructor();

getName(): String;

setName(arg0: String): void;

getParent(): MenuContainer;

getFont(): Font;

setFont(arg0: Font): void;

removeNotify(): void;

postEvent(arg0: Event): boolean;

dispatchEvent(arg0: AWTEvent): void;
toString(): string;

getAccessibleContext(): AccessibleContext;
 }
export namespace MenuComponent { 
export abstract class AccessibleAWTMenuComponent extends AccessibleContext implements Serializable, AccessibleComponent, AccessibleSelection {

getAccessibleSelection(): AccessibleSelection;

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
 }

}

export interface MenuContainer {

getFont(): Font;

remove(arg0: MenuComponent): void;

postEvent(arg0: Event): boolean;
 }

export class MenuItem extends MenuComponent implements Accessible {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: MenuShortcut);

addNotify(): void;

getLabel(): String;

setLabel(arg0: String): void;

isEnabled(): boolean;

setEnabled(arg0: boolean): void;

enable(): void;

enable(arg0: boolean): void;

disable(): void;

getShortcut(): MenuShortcut;

setShortcut(arg0: MenuShortcut): void;

deleteShortcut(): void;

setActionCommand(arg0: String): void;

getActionCommand(): String;

addActionListener(arg0: ActionListener): void;

removeActionListener(arg0: ActionListener): void;

getActionListeners(): ActionListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

paramString(): String;

getAccessibleContext(): AccessibleContext;
 }
export namespace MenuItem { 
export class AccessibleAWTMenuItem extends MenuComponent.AccessibleAWTMenuComponent implements AccessibleAction, AccessibleValue {

getAccessibleName(): String;

getAccessibleRole(): AccessibleRole;

getAccessibleAction(): AccessibleAction;

getAccessibleValue(): AccessibleValue;

getAccessibleActionCount(): number;

getAccessibleActionDescription(arg0: number): String;

doAccessibleAction(arg0: number): boolean;

getCurrentAccessibleValue(): Number;

setCurrentAccessibleValue(arg0: Number): boolean;

getMinimumAccessibleValue(): Number;

getMaximumAccessibleValue(): Number;
 }

}

export class MenuShortcut implements Serializable {
constructor(arg0: number);
constructor(arg0: number, arg1: boolean);

getKey(): number;

usesShiftModifier(): boolean;

equals(arg0: MenuShortcut): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class MouseInfo {

static getPointerInfo(): PointerInfo;

static getNumberOfButtons(): number;
 }

export abstract class MultipleGradientPaint implements Paint {

getFractions(): number[];

getColors(): Color[];

getCycleMethod(): MultipleGradientPaint.CycleMethod;

getColorSpace(): MultipleGradientPaint.ColorSpaceType;

getTransform(): AffineTransform;

getTransparency(): number;
 }
export namespace MultipleGradientPaint { 
export class ColorSpaceType extends Enum<MultipleGradientPaint.ColorSpaceType> {
static SRGB:MultipleGradientPaint.ColorSpaceType
static LINEAR_RGB:MultipleGradientPaint.ColorSpaceType

static values(): MultipleGradientPaint.ColorSpaceType[];

static valueOf(arg0: String): MultipleGradientPaint.ColorSpaceType;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class CycleMethod extends Enum<MultipleGradientPaint.CycleMethod> {
static NO_CYCLE:MultipleGradientPaint.CycleMethod
static REFLECT:MultipleGradientPaint.CycleMethod
static REPEAT:MultipleGradientPaint.CycleMethod

static values(): MultipleGradientPaint.CycleMethod[];

static valueOf(arg0: String): MultipleGradientPaint.CycleMethod;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class PageAttributes implements Cloneable {
constructor();
constructor(arg0: PageAttributes);
constructor(arg0: PageAttributes.ColorType, arg1: PageAttributes.MediaType, arg2: PageAttributes.OrientationRequestedType, arg3: PageAttributes.OriginType, arg4: PageAttributes.PrintQualityType, arg5: number[]);

clone(): Object;

set(arg0: PageAttributes): void;

getColor(): PageAttributes.ColorType;

setColor(arg0: PageAttributes.ColorType): void;

getMedia(): PageAttributes.MediaType;

setMedia(arg0: PageAttributes.MediaType): void;

setMediaToDefault(): void;

getOrientationRequested(): PageAttributes.OrientationRequestedType;

setOrientationRequested(arg0: PageAttributes.OrientationRequestedType): void;

setOrientationRequested(arg0: number): void;

setOrientationRequestedToDefault(): void;

getOrigin(): PageAttributes.OriginType;

setOrigin(arg0: PageAttributes.OriginType): void;

getPrintQuality(): PageAttributes.PrintQualityType;

setPrintQuality(arg0: PageAttributes.PrintQualityType): void;

setPrintQuality(arg0: number): void;

setPrintQualityToDefault(): void;

getPrinterResolution(): number[];

setPrinterResolution(arg0: number[]): void;

setPrinterResolution(arg0: number): void;

setPrinterResolutionToDefault(): void;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }
export namespace PageAttributes { 
export class ColorType extends AttributeValue {
static COLOR:PageAttributes.ColorType
static MONOCHROME:PageAttributes.ColorType
 }

export class MediaType extends AttributeValue {
static ISO_4A0:PageAttributes.MediaType
static ISO_2A0:PageAttributes.MediaType
static ISO_A0:PageAttributes.MediaType
static ISO_A1:PageAttributes.MediaType
static ISO_A2:PageAttributes.MediaType
static ISO_A3:PageAttributes.MediaType
static ISO_A4:PageAttributes.MediaType
static ISO_A5:PageAttributes.MediaType
static ISO_A6:PageAttributes.MediaType
static ISO_A7:PageAttributes.MediaType
static ISO_A8:PageAttributes.MediaType
static ISO_A9:PageAttributes.MediaType
static ISO_A10:PageAttributes.MediaType
static ISO_B0:PageAttributes.MediaType
static ISO_B1:PageAttributes.MediaType
static ISO_B2:PageAttributes.MediaType
static ISO_B3:PageAttributes.MediaType
static ISO_B4:PageAttributes.MediaType
static ISO_B5:PageAttributes.MediaType
static ISO_B6:PageAttributes.MediaType
static ISO_B7:PageAttributes.MediaType
static ISO_B8:PageAttributes.MediaType
static ISO_B9:PageAttributes.MediaType
static ISO_B10:PageAttributes.MediaType
static JIS_B0:PageAttributes.MediaType
static JIS_B1:PageAttributes.MediaType
static JIS_B2:PageAttributes.MediaType
static JIS_B3:PageAttributes.MediaType
static JIS_B4:PageAttributes.MediaType
static JIS_B5:PageAttributes.MediaType
static JIS_B6:PageAttributes.MediaType
static JIS_B7:PageAttributes.MediaType
static JIS_B8:PageAttributes.MediaType
static JIS_B9:PageAttributes.MediaType
static JIS_B10:PageAttributes.MediaType
static ISO_C0:PageAttributes.MediaType
static ISO_C1:PageAttributes.MediaType
static ISO_C2:PageAttributes.MediaType
static ISO_C3:PageAttributes.MediaType
static ISO_C4:PageAttributes.MediaType
static ISO_C5:PageAttributes.MediaType
static ISO_C6:PageAttributes.MediaType
static ISO_C7:PageAttributes.MediaType
static ISO_C8:PageAttributes.MediaType
static ISO_C9:PageAttributes.MediaType
static ISO_C10:PageAttributes.MediaType
static ISO_DESIGNATED_LONG:PageAttributes.MediaType
static EXECUTIVE:PageAttributes.MediaType
static FOLIO:PageAttributes.MediaType
static INVOICE:PageAttributes.MediaType
static LEDGER:PageAttributes.MediaType
static NA_LETTER:PageAttributes.MediaType
static NA_LEGAL:PageAttributes.MediaType
static QUARTO:PageAttributes.MediaType
static A:PageAttributes.MediaType
static B:PageAttributes.MediaType
static C:PageAttributes.MediaType
static D:PageAttributes.MediaType
static E:PageAttributes.MediaType
static NA_10X15_ENVELOPE:PageAttributes.MediaType
static NA_10X14_ENVELOPE:PageAttributes.MediaType
static NA_10X13_ENVELOPE:PageAttributes.MediaType
static NA_9X12_ENVELOPE:PageAttributes.MediaType
static NA_9X11_ENVELOPE:PageAttributes.MediaType
static NA_7X9_ENVELOPE:PageAttributes.MediaType
static NA_6X9_ENVELOPE:PageAttributes.MediaType
static NA_NUMBER_9_ENVELOPE:PageAttributes.MediaType
static NA_NUMBER_10_ENVELOPE:PageAttributes.MediaType
static NA_NUMBER_11_ENVELOPE:PageAttributes.MediaType
static NA_NUMBER_12_ENVELOPE:PageAttributes.MediaType
static NA_NUMBER_14_ENVELOPE:PageAttributes.MediaType
static INVITE_ENVELOPE:PageAttributes.MediaType
static ITALY_ENVELOPE:PageAttributes.MediaType
static MONARCH_ENVELOPE:PageAttributes.MediaType
static PERSONAL_ENVELOPE:PageAttributes.MediaType
static A0:PageAttributes.MediaType
static A1:PageAttributes.MediaType
static A2:PageAttributes.MediaType
static A3:PageAttributes.MediaType
static A4:PageAttributes.MediaType
static A5:PageAttributes.MediaType
static A6:PageAttributes.MediaType
static A7:PageAttributes.MediaType
static A8:PageAttributes.MediaType
static A9:PageAttributes.MediaType
static A10:PageAttributes.MediaType
static B0:PageAttributes.MediaType
static B1:PageAttributes.MediaType
static B2:PageAttributes.MediaType
static B3:PageAttributes.MediaType
static B4:PageAttributes.MediaType
static ISO_B4_ENVELOPE:PageAttributes.MediaType
static B5:PageAttributes.MediaType
static ISO_B5_ENVELOPE:PageAttributes.MediaType
static B6:PageAttributes.MediaType
static B7:PageAttributes.MediaType
static B8:PageAttributes.MediaType
static B9:PageAttributes.MediaType
static B10:PageAttributes.MediaType
static C0:PageAttributes.MediaType
static ISO_C0_ENVELOPE:PageAttributes.MediaType
static C1:PageAttributes.MediaType
static ISO_C1_ENVELOPE:PageAttributes.MediaType
static C2:PageAttributes.MediaType
static ISO_C2_ENVELOPE:PageAttributes.MediaType
static C3:PageAttributes.MediaType
static ISO_C3_ENVELOPE:PageAttributes.MediaType
static C4:PageAttributes.MediaType
static ISO_C4_ENVELOPE:PageAttributes.MediaType
static C5:PageAttributes.MediaType
static ISO_C5_ENVELOPE:PageAttributes.MediaType
static C6:PageAttributes.MediaType
static ISO_C6_ENVELOPE:PageAttributes.MediaType
static C7:PageAttributes.MediaType
static ISO_C7_ENVELOPE:PageAttributes.MediaType
static C8:PageAttributes.MediaType
static ISO_C8_ENVELOPE:PageAttributes.MediaType
static C9:PageAttributes.MediaType
static ISO_C9_ENVELOPE:PageAttributes.MediaType
static C10:PageAttributes.MediaType
static ISO_C10_ENVELOPE:PageAttributes.MediaType
static ISO_DESIGNATED_LONG_ENVELOPE:PageAttributes.MediaType
static STATEMENT:PageAttributes.MediaType
static TABLOID:PageAttributes.MediaType
static LETTER:PageAttributes.MediaType
static NOTE:PageAttributes.MediaType
static LEGAL:PageAttributes.MediaType
static ENV_10X15:PageAttributes.MediaType
static ENV_10X14:PageAttributes.MediaType
static ENV_10X13:PageAttributes.MediaType
static ENV_9X12:PageAttributes.MediaType
static ENV_9X11:PageAttributes.MediaType
static ENV_7X9:PageAttributes.MediaType
static ENV_6X9:PageAttributes.MediaType
static ENV_9:PageAttributes.MediaType
static ENV_10:PageAttributes.MediaType
static ENV_11:PageAttributes.MediaType
static ENV_12:PageAttributes.MediaType
static ENV_14:PageAttributes.MediaType
static ENV_INVITE:PageAttributes.MediaType
static ENV_ITALY:PageAttributes.MediaType
static ENV_MONARCH:PageAttributes.MediaType
static ENV_PERSONAL:PageAttributes.MediaType
static INVITE:PageAttributes.MediaType
static ITALY:PageAttributes.MediaType
static MONARCH:PageAttributes.MediaType
static PERSONAL:PageAttributes.MediaType
 }

export class OrientationRequestedType extends AttributeValue {
static PORTRAIT:PageAttributes.OrientationRequestedType
static LANDSCAPE:PageAttributes.OrientationRequestedType
 }

export class OriginType extends AttributeValue {
static PHYSICAL:PageAttributes.OriginType
static PRINTABLE:PageAttributes.OriginType
 }

export class PrintQualityType extends AttributeValue {
static HIGH:PageAttributes.PrintQualityType
static NORMAL:PageAttributes.PrintQualityType
static DRAFT:PageAttributes.PrintQualityType
 }

}

export interface Paint extends Transparency {

createContext(arg0: ColorModel, arg1: Rectangle, arg2: Rectangle2D, arg3: AffineTransform, arg4: RenderingHints): PaintContext;
 }

export interface PaintContext {

dispose(): void;

getColorModel(): ColorModel;

getRaster(arg0: number, arg1: number, arg2: number, arg3: number): Raster;
 }

export class Panel extends Container implements Accessible {
constructor();
constructor(arg0: LayoutManager);

addNotify(): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace Panel { 
export class AccessibleAWTPanel extends Container.AccessibleAWTContainer {

getAccessibleRole(): AccessibleRole;
 }

}

export class Point extends Point2D implements Serializable {
x:number
y:number
constructor();
constructor(arg0: Point);
constructor(arg0: number, arg1: number);

getX(): number;

getY(): number;

getLocation(): Point;

setLocation(arg0: Point): void;

setLocation(arg0: number, arg1: number): void;

setLocation(arg0: number, arg1: number): void;

move(arg0: number, arg1: number): void;

translate(arg0: number, arg1: number): void;

equals(arg0: Object): boolean;
toString(): string;
 }

export class PointerInfo {

getDevice(): GraphicsDevice;

getLocation(): Point;
 }

export class Polygon implements Shape, Serializable {
npoints:number
xpoints:number[]
ypoints:number[]
constructor();
constructor(arg0: number[], arg1: number[], arg2: number);

reset(): void;

invalidate(): void;

translate(arg0: number, arg1: number): void;

addPoint(arg0: number, arg1: number): void;

getBounds(): Rectangle;

getBoundingBox(): Rectangle;

contains(arg0: Point): boolean;

contains(arg0: number, arg1: number): boolean;

inside(arg0: number, arg1: number): boolean;

getBounds2D(): Rectangle2D;

contains(arg0: number, arg1: number): boolean;

contains(arg0: Point2D): boolean;

intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

intersects(arg0: Rectangle2D): boolean;

contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

contains(arg0: Rectangle2D): boolean;

getPathIterator(arg0: AffineTransform): PathIterator;

getPathIterator(arg0: AffineTransform, arg1: number): PathIterator;
 }

export class PopupMenu extends Menu {
constructor();
constructor(arg0: String);

getParent(): MenuContainer;

addNotify(): void;

show(arg0: Component, arg1: number, arg2: number): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace PopupMenu { 
export class AccessibleAWTPopupMenu extends Menu.AccessibleAWTMenu {

getAccessibleRole(): AccessibleRole;
 }

}

export interface PrintGraphics {

getPrintJob(): PrintJob;
 }

export abstract class PrintJob {

abstract getGraphics(): Graphics;

abstract getPageDimension(): Dimension;

abstract getPageResolution(): number;

abstract lastPageFirst(): boolean;

abstract end(): void;

finalize(): void;
 }

export class RadialGradientPaint extends MultipleGradientPaint {
constructor(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Color[]);
constructor(arg0: Point2D, arg1: number, arg2: number[], arg3: Color[]);
constructor(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Color[], arg5: MultipleGradientPaint.CycleMethod);
constructor(arg0: Point2D, arg1: number, arg2: number[], arg3: Color[], arg4: MultipleGradientPaint.CycleMethod);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: Color[], arg7: MultipleGradientPaint.CycleMethod);
constructor(arg0: Point2D, arg1: number, arg2: Point2D, arg3: number[], arg4: Color[], arg5: MultipleGradientPaint.CycleMethod);
constructor(arg0: Point2D, arg1: number, arg2: Point2D, arg3: number[], arg4: Color[], arg5: MultipleGradientPaint.CycleMethod, arg6: MultipleGradientPaint.ColorSpaceType, arg7: AffineTransform);
constructor(arg0: Rectangle2D, arg1: number[], arg2: Color[], arg3: MultipleGradientPaint.CycleMethod);

createContext(arg0: ColorModel, arg1: Rectangle, arg2: Rectangle2D, arg3: AffineTransform, arg4: RenderingHints): PaintContext;

getCenterPoint(): Point2D;

getFocusPoint(): Point2D;

getRadius(): number;
 }

export class Rectangle extends Rectangle2D implements Shape, Serializable {
x:number
y:number
width:number
height:number
constructor();
constructor(arg0: Rectangle);
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
constructor(arg0: number, arg1: number);
constructor(arg0: Point, arg1: Dimension);
constructor(arg0: Point);
constructor(arg0: Dimension);

getX(): number;

getY(): number;

getWidth(): number;

getHeight(): number;

getBounds(): Rectangle;

getBounds2D(): Rectangle2D;

setBounds(arg0: Rectangle): void;

setBounds(arg0: number, arg1: number, arg2: number, arg3: number): void;

setRect(arg0: number, arg1: number, arg2: number, arg3: number): void;

reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;

getLocation(): Point;

setLocation(arg0: Point): void;

setLocation(arg0: number, arg1: number): void;

move(arg0: number, arg1: number): void;

translate(arg0: number, arg1: number): void;

getSize(): Dimension;

setSize(arg0: Dimension): void;

setSize(arg0: number, arg1: number): void;

resize(arg0: number, arg1: number): void;

contains(arg0: Point): boolean;

contains(arg0: number, arg1: number): boolean;

contains(arg0: Rectangle): boolean;

contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

inside(arg0: number, arg1: number): boolean;

intersects(arg0: Rectangle): boolean;

intersection(arg0: Rectangle): Rectangle;

union(arg0: Rectangle): Rectangle;

add(arg0: number, arg1: number): void;

add(arg0: Point): void;

add(arg0: Rectangle): void;

grow(arg0: number, arg1: number): void;

isEmpty(): boolean;

outcode(arg0: number, arg1: number): number;

createIntersection(arg0: Rectangle2D): Rectangle2D;

createUnion(arg0: Rectangle2D): Rectangle2D;

equals(arg0: Object): boolean;
toString(): string;
 }

export interface RenderingHints extends Map<Object, Object>, Cloneable { }
export class RenderingHints extends Object implements Map<Object, Object>, Cloneable {
static KEY_ANTIALIASING:RenderingHints.Key
static VALUE_ANTIALIAS_ON:Object
static VALUE_ANTIALIAS_OFF:Object
static VALUE_ANTIALIAS_DEFAULT:Object
static KEY_RENDERING:RenderingHints.Key
static VALUE_RENDER_SPEED:Object
static VALUE_RENDER_QUALITY:Object
static VALUE_RENDER_DEFAULT:Object
static KEY_DITHERING:RenderingHints.Key
static VALUE_DITHER_DISABLE:Object
static VALUE_DITHER_ENABLE:Object
static VALUE_DITHER_DEFAULT:Object
static KEY_TEXT_ANTIALIASING:RenderingHints.Key
static VALUE_TEXT_ANTIALIAS_ON:Object
static VALUE_TEXT_ANTIALIAS_OFF:Object
static VALUE_TEXT_ANTIALIAS_DEFAULT:Object
static VALUE_TEXT_ANTIALIAS_GASP:Object
static VALUE_TEXT_ANTIALIAS_LCD_HRGB:Object
static VALUE_TEXT_ANTIALIAS_LCD_HBGR:Object
static VALUE_TEXT_ANTIALIAS_LCD_VRGB:Object
static VALUE_TEXT_ANTIALIAS_LCD_VBGR:Object
static KEY_TEXT_LCD_CONTRAST:RenderingHints.Key
static KEY_FRACTIONALMETRICS:RenderingHints.Key
static VALUE_FRACTIONALMETRICS_OFF:Object
static VALUE_FRACTIONALMETRICS_ON:Object
static VALUE_FRACTIONALMETRICS_DEFAULT:Object
static KEY_INTERPOLATION:RenderingHints.Key
static VALUE_INTERPOLATION_NEAREST_NEIGHBOR:Object
static VALUE_INTERPOLATION_BILINEAR:Object
static VALUE_INTERPOLATION_BICUBIC:Object
static KEY_ALPHA_INTERPOLATION:RenderingHints.Key
static VALUE_ALPHA_INTERPOLATION_SPEED:Object
static VALUE_ALPHA_INTERPOLATION_QUALITY:Object
static VALUE_ALPHA_INTERPOLATION_DEFAULT:Object
static KEY_COLOR_RENDERING:RenderingHints.Key
static VALUE_COLOR_RENDER_SPEED:Object
static VALUE_COLOR_RENDER_QUALITY:Object
static VALUE_COLOR_RENDER_DEFAULT:Object
static KEY_STROKE_CONTROL:RenderingHints.Key
static VALUE_STROKE_DEFAULT:Object
static VALUE_STROKE_NORMALIZE:Object
static VALUE_STROKE_PURE:Object
static KEY_RESOLUTION_VARIANT:RenderingHints.Key
static VALUE_RESOLUTION_VARIANT_DEFAULT:Object
static VALUE_RESOLUTION_VARIANT_BASE:Object
static VALUE_RESOLUTION_VARIANT_SIZE_FIT:Object
static VALUE_RESOLUTION_VARIANT_DPI_FIT:Object
constructor(arg0: Map<RenderingHints.Key, any>);
constructor(arg0: RenderingHints.Key, arg1: Object);

size(): number;

isEmpty(): boolean;

containsKey(arg0: Object): boolean;

containsValue(arg0: Object): boolean;

get(arg0: Object): Object;

put(arg0: Object, arg1: Object): Object;

add(arg0: RenderingHints): void;

clear(): void;

remove(arg0: Object): Object;

putAll(arg0: Map<any, any>): void;

keySet(): Set<Object>;

values(): Collection<Object>;

entrySet(): Set<Map.Entry<Object, Object>>;

equals(arg0: Object): boolean;

hashCode(): number;

clone(): Object;
toString(): string;
 }
export namespace RenderingHints { 
export abstract class Key {

abstract isCompatibleValue(arg0: Object): boolean;

hashCode(): number;

equals(arg0: Object): boolean;
 }

}

export class Robot {
constructor();
constructor(arg0: GraphicsDevice);

mouseMove(arg0: number, arg1: number): void;

mousePress(arg0: number): void;

mouseRelease(arg0: number): void;

mouseWheel(arg0: number): void;

keyPress(arg0: number): void;

keyRelease(arg0: number): void;

getPixelColor(arg0: number, arg1: number): Color;

createScreenCapture(arg0: Rectangle): BufferedImage;

createMultiResolutionScreenCapture(arg0: Rectangle): MultiResolutionImage;

isAutoWaitForIdle(): boolean;

setAutoWaitForIdle(arg0: boolean): void;

getAutoDelay(): number;

setAutoDelay(arg0: number): void;

delay(arg0: number): void;

waitForIdle(): void;
toString(): string;
 }

export class ScrollPane extends Container implements Accessible {
static SCROLLBARS_AS_NEEDED:number
static SCROLLBARS_ALWAYS:number
static SCROLLBARS_NEVER:number
constructor();
constructor(arg0: number);

getScrollbarDisplayPolicy(): number;

getViewportSize(): Dimension;

getHScrollbarHeight(): number;

getVScrollbarWidth(): number;

getVAdjustable(): Adjustable;

getHAdjustable(): Adjustable;

setScrollPosition(arg0: number, arg1: number): void;

setScrollPosition(arg0: Point): void;

getScrollPosition(): Point;

setLayout(arg0: LayoutManager): void;

doLayout(): void;

layout(): void;

printComponents(arg0: Graphics): void;

addNotify(): void;

paramString(): String;

setWheelScrollingEnabled(arg0: boolean): void;

isWheelScrollingEnabled(): boolean;

getAccessibleContext(): AccessibleContext;
 }
export namespace ScrollPane { 
export class AccessibleAWTScrollPane extends Container.AccessibleAWTContainer {

getAccessibleRole(): AccessibleRole;
 }

}

export class ScrollPaneAdjustable implements Adjustable, Serializable {

getOrientation(): number;

setMinimum(arg0: number): void;

getMinimum(): number;

setMaximum(arg0: number): void;

getMaximum(): number;

setUnitIncrement(arg0: number): void;

getUnitIncrement(): number;

setBlockIncrement(arg0: number): void;

getBlockIncrement(): number;

setVisibleAmount(arg0: number): void;

getVisibleAmount(): number;

setValueIsAdjusting(arg0: boolean): void;

getValueIsAdjusting(): boolean;

setValue(arg0: number): void;

getValue(): number;

addAdjustmentListener(arg0: AdjustmentListener): void;

removeAdjustmentListener(arg0: AdjustmentListener): void;

getAdjustmentListeners(): AdjustmentListener[];
toString(): string;

paramString(): String;
 }

export class Scrollbar extends Component implements Adjustable, Accessible {
static HORIZONTAL:number
static VERTICAL:number
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);

addNotify(): void;

getOrientation(): number;

setOrientation(arg0: number): void;

getValue(): number;

setValue(arg0: number): void;

getMinimum(): number;

setMinimum(arg0: number): void;

getMaximum(): number;

setMaximum(arg0: number): void;

getVisibleAmount(): number;

getVisible(): number;

setVisibleAmount(arg0: number): void;

setUnitIncrement(arg0: number): void;

setLineIncrement(arg0: number): void;

getUnitIncrement(): number;

getLineIncrement(): number;

setBlockIncrement(arg0: number): void;

setPageIncrement(arg0: number): void;

getBlockIncrement(): number;

getPageIncrement(): number;

setValues(arg0: number, arg1: number, arg2: number, arg3: number): void;

getValueIsAdjusting(): boolean;

setValueIsAdjusting(arg0: boolean): void;

addAdjustmentListener(arg0: AdjustmentListener): void;

removeAdjustmentListener(arg0: AdjustmentListener): void;

getAdjustmentListeners(): AdjustmentListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

getAccessibleContext(): AccessibleContext;
 }
export namespace Scrollbar { 
export class AccessibleAWTScrollBar extends Component.AccessibleAWTComponent implements AccessibleValue {

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleRole(): AccessibleRole;

getAccessibleValue(): AccessibleValue;

getCurrentAccessibleValue(): Number;

setCurrentAccessibleValue(arg0: Number): boolean;

getMinimumAccessibleValue(): Number;

getMaximumAccessibleValue(): Number;
 }

}

export interface SecondaryLoop {

enter(): boolean;

exit(): boolean;
 }

export interface Shape {

getBounds(): Rectangle;

getBounds2D(): Rectangle2D;

contains(arg0: number, arg1: number): boolean;

contains(arg0: Point2D): boolean;

intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

intersects(arg0: Rectangle2D): boolean;

contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

contains(arg0: Rectangle2D): boolean;

getPathIterator(arg0: AffineTransform): PathIterator;

getPathIterator(arg0: AffineTransform, arg1: number): PathIterator;
 }

export class SplashScreen {

static getSplashScreen(): SplashScreen;

setImageURL(arg0: URL): void;

getImageURL(): URL;

getBounds(): Rectangle;

getSize(): Dimension;

createGraphics(): Graphics2D;

update(): void;

close(): void;

isVisible(): boolean;
 }

export interface Stroke {

createStrokedShape(arg0: Shape): Shape;
 }

export class SystemColor extends Color implements Serializable {
static DESKTOP:number
static ACTIVE_CAPTION:number
static ACTIVE_CAPTION_TEXT:number
static ACTIVE_CAPTION_BORDER:number
static INACTIVE_CAPTION:number
static INACTIVE_CAPTION_TEXT:number
static INACTIVE_CAPTION_BORDER:number
static WINDOW:number
static WINDOW_BORDER:number
static WINDOW_TEXT:number
static MENU:number
static MENU_TEXT:number
static TEXT:number
static TEXT_TEXT:number
static TEXT_HIGHLIGHT:number
static TEXT_HIGHLIGHT_TEXT:number
static TEXT_INACTIVE_TEXT:number
static CONTROL:number
static CONTROL_TEXT:number
static CONTROL_HIGHLIGHT:number
static CONTROL_LT_HIGHLIGHT:number
static CONTROL_SHADOW:number
static CONTROL_DK_SHADOW:number
static SCROLLBAR:number
static INFO:number
static INFO_TEXT:number
static NUM_COLORS:number
static desktop:SystemColor
static activeCaption:SystemColor
static activeCaptionText:SystemColor
static activeCaptionBorder:SystemColor
static inactiveCaption:SystemColor
static inactiveCaptionText:SystemColor
static inactiveCaptionBorder:SystemColor
static window:SystemColor
static windowBorder:SystemColor
static windowText:SystemColor
static menu:SystemColor
static menuText:SystemColor
static text:SystemColor
static textText:SystemColor
static textHighlight:SystemColor
static textHighlightText:SystemColor
static textInactiveText:SystemColor
static control:SystemColor
static controlText:SystemColor
static controlHighlight:SystemColor
static controlLtHighlight:SystemColor
static controlShadow:SystemColor
static controlDkShadow:SystemColor
static scrollbar:SystemColor
static info:SystemColor
static infoText:SystemColor
toString(): string;
 }

export class SystemTray {

static getSystemTray(): SystemTray;

static isSupported(): boolean;

add(arg0: TrayIcon): void;

remove(arg0: TrayIcon): void;

getTrayIcons(): TrayIcon[];

getTrayIconSize(): Dimension;

addPropertyChangeListener(arg0: String, arg1: PropertyChangeListener): void;

removePropertyChangeListener(arg0: String, arg1: PropertyChangeListener): void;

getPropertyChangeListeners(arg0: String): PropertyChangeListener[];
 }

export class Taskbar {

isSupported(arg0: Taskbar.Feature): boolean;

static getTaskbar(): Taskbar;

static isTaskbarSupported(): boolean;

requestUserAttention(arg0: boolean, arg1: boolean): void;

requestWindowUserAttention(arg0: Window): void;

setMenu(arg0: PopupMenu): void;

getMenu(): PopupMenu;

setIconImage(arg0: Image): void;

getIconImage(): Image;

setIconBadge(arg0: String): void;

setWindowIconBadge(arg0: Window, arg1: Image): void;

setProgressValue(arg0: number): void;

setWindowProgressValue(arg0: Window, arg1: number): void;

setWindowProgressState(arg0: Window, arg1: Taskbar.State): void;
 }
export namespace Taskbar { 
export class Feature extends Enum<Taskbar.Feature> {
static ICON_BADGE_TEXT:Taskbar.Feature
static ICON_BADGE_NUMBER:Taskbar.Feature
static ICON_BADGE_IMAGE_WINDOW:Taskbar.Feature
static ICON_IMAGE:Taskbar.Feature
static MENU:Taskbar.Feature
static PROGRESS_STATE_WINDOW:Taskbar.Feature
static PROGRESS_VALUE:Taskbar.Feature
static PROGRESS_VALUE_WINDOW:Taskbar.Feature
static USER_ATTENTION:Taskbar.Feature
static USER_ATTENTION_WINDOW:Taskbar.Feature

static values(): Taskbar.Feature[];

static valueOf(arg0: String): Taskbar.Feature;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class State extends Enum<Taskbar.State> {
static OFF:Taskbar.State
static NORMAL:Taskbar.State
static PAUSED:Taskbar.State
static INDETERMINATE:Taskbar.State
static ERROR:Taskbar.State

static values(): Taskbar.State[];

static valueOf(arg0: String): Taskbar.State;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class TextArea extends TextComponent {
static SCROLLBARS_BOTH:number
static SCROLLBARS_VERTICAL_ONLY:number
static SCROLLBARS_HORIZONTAL_ONLY:number
static SCROLLBARS_NONE:number
constructor();
constructor(arg0: String);
constructor(arg0: number, arg1: number);
constructor(arg0: String, arg1: number, arg2: number);
constructor(arg0: String, arg1: number, arg2: number, arg3: number);

addNotify(): void;

insert(arg0: String, arg1: number): void;

insertText(arg0: String, arg1: number): void;

append(arg0: String): void;

appendText(arg0: String): void;

replaceRange(arg0: String, arg1: number, arg2: number): void;

replaceText(arg0: String, arg1: number, arg2: number): void;

getRows(): number;

setRows(arg0: number): void;

getColumns(): number;

setColumns(arg0: number): void;

getScrollbarVisibility(): number;

getPreferredSize(arg0: number, arg1: number): Dimension;

preferredSize(arg0: number, arg1: number): Dimension;

getPreferredSize(): Dimension;

preferredSize(): Dimension;

getMinimumSize(arg0: number, arg1: number): Dimension;

minimumSize(arg0: number, arg1: number): Dimension;

getMinimumSize(): Dimension;

minimumSize(): Dimension;

getAccessibleContext(): AccessibleContext;
 }
export namespace TextArea { 
export class AccessibleAWTTextArea extends TextComponent.AccessibleAWTTextComponent {

getAccessibleStateSet(): AccessibleStateSet;
 }

}

export class TextComponent extends Component implements Accessible {

enableInputMethods(arg0: boolean): void;

getInputMethodRequests(): InputMethodRequests;

addNotify(): void;

removeNotify(): void;

setText(arg0: String): void;

getText(): String;

getSelectedText(): String;

isEditable(): boolean;

setEditable(arg0: boolean): void;

getBackground(): Color;

setBackground(arg0: Color): void;

getSelectionStart(): number;

setSelectionStart(arg0: number): void;

getSelectionEnd(): number;

setSelectionEnd(arg0: number): void;

select(arg0: number, arg1: number): void;

selectAll(): void;

setCaretPosition(arg0: number): void;

getCaretPosition(): number;

addTextListener(arg0: TextListener): void;

removeTextListener(arg0: TextListener): void;

getTextListeners(): TextListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

getAccessibleContext(): AccessibleContext;
 }
export namespace TextComponent { 
export class AccessibleAWTTextComponent extends Component.AccessibleAWTComponent implements AccessibleText, TextListener {
constructor(arg0: TextComponent);

textValueChanged(arg0: TextEvent): void;

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
 }

}

export class TextField extends TextComponent {
constructor();
constructor(arg0: String);
constructor(arg0: number);
constructor(arg0: String, arg1: number);

addNotify(): void;

getEchoChar(): String;

setEchoChar(arg0: String): void;

setEchoCharacter(arg0: String): void;

setText(arg0: String): void;

echoCharIsSet(): boolean;

getColumns(): number;

setColumns(arg0: number): void;

getPreferredSize(arg0: number): Dimension;

preferredSize(arg0: number): Dimension;

getPreferredSize(): Dimension;

preferredSize(): Dimension;

getMinimumSize(arg0: number): Dimension;

minimumSize(arg0: number): Dimension;

getMinimumSize(): Dimension;

minimumSize(): Dimension;

addActionListener(arg0: ActionListener): void;

removeActionListener(arg0: ActionListener): void;

getActionListeners(): ActionListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

getAccessibleContext(): AccessibleContext;
 }
export namespace TextField { 
export class AccessibleAWTTextField extends TextComponent.AccessibleAWTTextComponent {

getAccessibleStateSet(): AccessibleStateSet;
 }

}

export class TexturePaint implements Paint {
constructor(arg0: BufferedImage, arg1: Rectangle2D);

getImage(): BufferedImage;

getAnchorRect(): Rectangle2D;

createContext(arg0: ColorModel, arg1: Rectangle, arg2: Rectangle2D, arg3: AffineTransform, arg4: RenderingHints): PaintContext;

getTransparency(): number;
 }

export abstract class Toolkit {

setDynamicLayout(arg0: boolean): void;

isDynamicLayoutActive(): boolean;

abstract getScreenSize(): Dimension;

abstract getScreenResolution(): number;

getScreenInsets(arg0: GraphicsConfiguration): Insets;

abstract getColorModel(): ColorModel;

abstract getFontList(): String[];

abstract getFontMetrics(arg0: Font): FontMetrics;

abstract sync(): void;

static getDefaultToolkit(): Toolkit;

abstract getImage(arg0: String): Image;

abstract getImage(arg0: URL): Image;

abstract createImage(arg0: String): Image;

abstract createImage(arg0: URL): Image;

abstract prepareImage(arg0: Image, arg1: number, arg2: number, arg3: ImageObserver): boolean;

abstract checkImage(arg0: Image, arg1: number, arg2: number, arg3: ImageObserver): number;

abstract createImage(arg0: ImageProducer): Image;

createImage(arg0: number[]): Image;

abstract createImage(arg0: number[], arg1: number, arg2: number): Image;

abstract getPrintJob(arg0: Frame, arg1: String, arg2: Properties): PrintJob;

getPrintJob(arg0: Frame, arg1: String, arg2: JobAttributes, arg3: PageAttributes): PrintJob;

abstract beep(): void;

abstract getSystemClipboard(): Clipboard;

getSystemSelection(): Clipboard;

getMenuShortcutKeyMask(): number;

getMenuShortcutKeyMaskEx(): number;

getLockingKeyState(arg0: number): boolean;

setLockingKeyState(arg0: number, arg1: boolean): void;

createCustomCursor(arg0: Image, arg1: Point, arg2: String): Cursor;

getBestCursorSize(arg0: number, arg1: number): Dimension;

getMaximumCursorColors(): number;

isFrameStateSupported(arg0: number): boolean;

static getProperty(arg0: String, arg1: String): String;

getSystemEventQueue(): EventQueue;

createDragGestureRecognizer<T extends DragGestureRecognizer>(arg0: Class<T>, arg1: DragSource, arg2: Component, arg3: number, arg4: DragGestureListener): T;

getDesktopProperty(arg0: String): Object;

addPropertyChangeListener(arg0: String, arg1: PropertyChangeListener): void;

removePropertyChangeListener(arg0: String, arg1: PropertyChangeListener): void;

getPropertyChangeListeners(): PropertyChangeListener[];

getPropertyChangeListeners(arg0: String): PropertyChangeListener[];

isAlwaysOnTopSupported(): boolean;

abstract isModalityTypeSupported(arg0: Dialog.ModalityType): boolean;

abstract isModalExclusionTypeSupported(arg0: Dialog.ModalExclusionType): boolean;

addAWTEventListener(arg0: AWTEventListener, arg1: number): void;

removeAWTEventListener(arg0: AWTEventListener): void;

getAWTEventListeners(): AWTEventListener[];

getAWTEventListeners(arg0: number): AWTEventListener[];

abstract mapInputMethodHighlight(arg0: InputMethodHighlight): Map<TextAttribute, any>;

areExtraMouseButtonsEnabled(): boolean;
 }

export namespace Transparency { 
const OPAQUE:number
const BITMASK:number
const TRANSLUCENT:number
}

export interface Transparency {
OPAQUE:number
BITMASK:number
TRANSLUCENT:number

getTransparency(): number;
 }

export class TrayIcon {
constructor(arg0: Image);
constructor(arg0: Image, arg1: String);
constructor(arg0: Image, arg1: String, arg2: PopupMenu);

setImage(arg0: Image): void;

getImage(): Image;

setPopupMenu(arg0: PopupMenu): void;

getPopupMenu(): PopupMenu;

setToolTip(arg0: String): void;

getToolTip(): String;

setImageAutoSize(arg0: boolean): void;

isImageAutoSize(): boolean;

addMouseListener(arg0: MouseListener): void;

removeMouseListener(arg0: MouseListener): void;

getMouseListeners(): MouseListener[];

addMouseMotionListener(arg0: MouseMotionListener): void;

removeMouseMotionListener(arg0: MouseMotionListener): void;

getMouseMotionListeners(): MouseMotionListener[];

getActionCommand(): String;

setActionCommand(arg0: String): void;

addActionListener(arg0: ActionListener): void;

removeActionListener(arg0: ActionListener): void;

getActionListeners(): ActionListener[];

displayMessage(arg0: String, arg1: String, arg2: TrayIcon.MessageType): void;

getSize(): Dimension;
 }
export namespace TrayIcon { 
export class MessageType extends Enum<TrayIcon.MessageType> {
static ERROR:TrayIcon.MessageType
static WARNING:TrayIcon.MessageType
static INFO:TrayIcon.MessageType
static NONE:TrayIcon.MessageType

static values(): TrayIcon.MessageType[];

static valueOf(arg0: String): TrayIcon.MessageType;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class Window extends Container implements Accessible {
constructor(arg0: Frame);
constructor(arg0: Window);
constructor(arg0: Window, arg1: GraphicsConfiguration);

getIconImages(): List<Image>;

setIconImages(arg0: List<Image>): void;

setIconImage(arg0: Image): void;

addNotify(): void;

removeNotify(): void;

pack(): void;

setMinimumSize(arg0: Dimension): void;

setSize(arg0: Dimension): void;

setSize(arg0: number, arg1: number): void;

setLocation(arg0: number, arg1: number): void;

setLocation(arg0: Point): void;

reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;

setVisible(arg0: boolean): void;

show(): void;

hide(): void;

dispose(): void;

toFront(): void;

toBack(): void;

getToolkit(): Toolkit;

getWarningString(): String;

getLocale(): Locale;

getInputContext(): InputContext;

setCursor(arg0: Cursor): void;

getOwner(): Window;

getOwnedWindows(): Window[];

static getWindows(): Window[];

static getOwnerlessWindows(): Window[];

setModalExclusionType(arg0: Dialog.ModalExclusionType): void;

getModalExclusionType(): Dialog.ModalExclusionType;

addWindowListener(arg0: WindowListener): void;

addWindowStateListener(arg0: WindowStateListener): void;

addWindowFocusListener(arg0: WindowFocusListener): void;

removeWindowListener(arg0: WindowListener): void;

removeWindowStateListener(arg0: WindowStateListener): void;

removeWindowFocusListener(arg0: WindowFocusListener): void;

getWindowListeners(): WindowListener[];

getWindowFocusListeners(): WindowFocusListener[];

getWindowStateListeners(): WindowStateListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

setAlwaysOnTop(arg0: boolean): void;

isAlwaysOnTopSupported(): boolean;

isAlwaysOnTop(): boolean;

getFocusOwner(): Component;

getMostRecentFocusOwner(): Component;

isActive(): boolean;

isFocused(): boolean;

getFocusTraversalKeys(arg0: number): Set<AWTKeyStroke>;

setFocusCycleRoot(arg0: boolean): void;

isFocusCycleRoot(): boolean;

getFocusCycleRootAncestor(): Container;

isFocusableWindow(): boolean;

getFocusableWindowState(): boolean;

setFocusableWindowState(arg0: boolean): void;

setAutoRequestFocus(arg0: boolean): void;

isAutoRequestFocus(): boolean;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

addPropertyChangeListener(arg0: String, arg1: PropertyChangeListener): void;

isValidateRoot(): boolean;

postEvent(arg0: Event): boolean;

isShowing(): boolean;

applyResourceBundle(arg0: ResourceBundle): void;

applyResourceBundle(arg0: String): void;

setType(arg0: Window.Type): void;

getType(): Window.Type;

getAccessibleContext(): AccessibleContext;

setLocationRelativeTo(arg0: Component): void;

createBufferStrategy(arg0: number): void;

createBufferStrategy(arg0: number, arg1: BufferCapabilities): void;

getBufferStrategy(): BufferStrategy;

setLocationByPlatform(arg0: boolean): void;

isLocationByPlatform(): boolean;

setBounds(arg0: number, arg1: number, arg2: number, arg3: number): void;

setBounds(arg0: Rectangle): void;

getOpacity(): number;

setOpacity(arg0: number): void;

getShape(): Shape;

setShape(arg0: Shape): void;

getBackground(): Color;

setBackground(arg0: Color): void;

isOpaque(): boolean;

paint(arg0: Graphics): void;
 }
export namespace Window { 
export class AccessibleAWTWindow extends Container.AccessibleAWTContainer {

getAccessibleRole(): AccessibleRole;

getAccessibleStateSet(): AccessibleStateSet;
 }

export class Type extends Enum<Window.Type> {
static NORMAL:Window.Type
static UTILITY:Window.Type
static POPUP:Window.Type

static values(): Window.Type[];

static valueOf(arg0: String): Window.Type;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

}
