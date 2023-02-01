/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="javax.swing.plaf.synth.d.ts" />
/// <reference path="javax.swing.d.ts" />
declare module '@afterburnerhq/javax.swing.plaf.nimbus' { 
import { Insets, Dimension, Graphics2D, Color } from '@afterburnerhq/java.awt'
import { Enum, Class, String } from '@afterburnerhq/java.lang'
import { SynthLookAndFeel, Region, SynthStyle, SynthContext, SynthPainter } from '@afterburnerhq/javax.swing.plaf.synth'
import { Painter, JComponent, UIDefaults, Icon } from '@afterburnerhq/javax.swing'
export abstract class AbstractRegionPainter extends Object implements Painter<JComponent> {

paint(arg0: Graphics2D, arg1: JComponent, arg2: number, arg3: number): void;
 }
export namespace AbstractRegionPainter { 
export class PaintContext {
constructor(arg0: Insets, arg1: Dimension, arg2: boolean);
constructor(arg0: Insets, arg1: Dimension, arg2: boolean, arg3: AbstractRegionPainter.PaintContext.CacheMode, arg4: number, arg5: number);
 }
export namespace PaintContext { 
export class CacheMode extends Enum<AbstractRegionPainter.PaintContext.CacheMode> {
static NO_CACHING:AbstractRegionPainter.PaintContext.CacheMode
static FIXED_SIZES:AbstractRegionPainter.PaintContext.CacheMode
static NINE_SQUARE_SCALE:AbstractRegionPainter.PaintContext.CacheMode

static values(): AbstractRegionPainter.PaintContext.CacheMode[];

static valueOf(arg0: String): AbstractRegionPainter.PaintContext.CacheMode;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class CacheMode extends Enum<AbstractRegionPainter.PaintContext.CacheMode> {
static NO_CACHING:AbstractRegionPainter.PaintContext.CacheMode
static FIXED_SIZES:AbstractRegionPainter.PaintContext.CacheMode
static NINE_SQUARE_SCALE:AbstractRegionPainter.PaintContext.CacheMode

static values(): AbstractRegionPainter.PaintContext.CacheMode[];

static valueOf(arg0: String): AbstractRegionPainter.PaintContext.CacheMode;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class NimbusLookAndFeel extends SynthLookAndFeel {
constructor();

initialize(): void;

uninitialize(): void;

getDefaults(): UIDefaults;

static getStyle(arg0: JComponent, arg1: Region): NimbusStyle;

getName(): String;

getID(): String;

getDescription(): String;

shouldUpdateStyleOnAncestorChanged(): boolean;

register(arg0: Region, arg1: String): void;

getDisabledIcon(arg0: JComponent, arg1: Icon): Icon;

getDerivedColor(arg0: String, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): Color;
 }

export class NimbusStyle extends SynthStyle {
static LARGE_KEY:String
static SMALL_KEY:String
static MINI_KEY:String
static LARGE_SCALE:number
static SMALL_SCALE:number
static MINI_SCALE:number

installDefaults(arg0: SynthContext): void;

getInsets(arg0: SynthContext, arg1: Insets): Insets;

getPainter(arg0: SynthContext): SynthPainter;

isOpaque(arg0: SynthContext): boolean;

get(arg0: SynthContext, arg1: Object): Object;

getBackgroundPainter(arg0: SynthContext): Painter<Object>;

getForegroundPainter(arg0: SynthContext): Painter<Object>;

getBorderPainter(arg0: SynthContext): Painter<Object>;
 }

export abstract class State<T extends JComponent> extends Object {
toString(): string;
 }

}
