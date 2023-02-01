/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.swing.d.ts" />
declare module '@afterburnerhq/javax.swing.border' { 
import { Graphics, BasicStroke, Insets, Color, Rectangle, Paint, Dimension, Component, Font } from '@afterburnerhq/java.awt'
import { String } from '@afterburnerhq/java.lang'
import { Serializable } from '@afterburnerhq/java.io'
import { Icon } from '@afterburnerhq/javax.swing'
export abstract class AbstractBorder implements Border, Serializable {

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component): Insets;

getBorderInsets(arg0: Component, arg1: Insets): Insets;

isBorderOpaque(): boolean;

getInteriorRectangle(arg0: Component, arg1: number, arg2: number, arg3: number, arg4: number): Rectangle;

static getInteriorRectangle(arg0: Component, arg1: Border, arg2: number, arg3: number, arg4: number, arg5: number): Rectangle;

getBaseline(arg0: Component, arg1: number, arg2: number): number;

getBaselineResizeBehavior(arg0: Component): Component.BaselineResizeBehavior;
 }

export class BevelBorder extends AbstractBorder {
static RAISED:number
static LOWERED:number
constructor(arg0: number);
constructor(arg0: number, arg1: Color, arg2: Color);
constructor(arg0: number, arg1: Color, arg2: Color, arg3: Color, arg4: Color);

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;

getHighlightOuterColor(arg0: Component): Color;

getHighlightInnerColor(arg0: Component): Color;

getShadowInnerColor(arg0: Component): Color;

getShadowOuterColor(arg0: Component): Color;

getHighlightOuterColor(): Color;

getHighlightInnerColor(): Color;

getShadowInnerColor(): Color;

getShadowOuterColor(): Color;

getBevelType(): number;

isBorderOpaque(): boolean;
 }

export interface Border {

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component): Insets;

isBorderOpaque(): boolean;
 }

export class CompoundBorder extends AbstractBorder {
constructor();
constructor(arg0: Border, arg1: Border);

isBorderOpaque(): boolean;

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;

getOutsideBorder(): Border;

getInsideBorder(): Border;
 }

export class EmptyBorder extends AbstractBorder implements Serializable {
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
constructor(arg0: Insets);

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;

getBorderInsets(): Insets;

isBorderOpaque(): boolean;
 }

export class EtchedBorder extends AbstractBorder {
static RAISED:number
static LOWERED:number
constructor();
constructor(arg0: number);
constructor(arg0: Color, arg1: Color);
constructor(arg0: number, arg1: Color, arg2: Color);

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;

isBorderOpaque(): boolean;

getEtchType(): number;

getHighlightColor(arg0: Component): Color;

getHighlightColor(): Color;

getShadowColor(arg0: Component): Color;

getShadowColor(): Color;
 }

export class LineBorder extends AbstractBorder {
constructor(arg0: Color);
constructor(arg0: Color, arg1: number);
constructor(arg0: Color, arg1: number, arg2: boolean);

static createBlackLineBorder(): Border;

static createGrayLineBorder(): Border;

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;

getLineColor(): Color;

getThickness(): number;

getRoundedCorners(): boolean;

isBorderOpaque(): boolean;
 }

export class MatteBorder extends EmptyBorder {
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Color);
constructor(arg0: Insets, arg1: Color);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Icon);
constructor(arg0: Insets, arg1: Icon);
constructor(arg0: Icon);

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;

getBorderInsets(): Insets;

getMatteColor(): Color;

getTileIcon(): Icon;

isBorderOpaque(): boolean;
 }

export class SoftBevelBorder extends BevelBorder {
constructor(arg0: number);
constructor(arg0: number, arg1: Color, arg2: Color);
constructor(arg0: number, arg1: Color, arg2: Color, arg3: Color, arg4: Color);

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;

isBorderOpaque(): boolean;
 }

export class StrokeBorder extends AbstractBorder {
constructor(arg0: BasicStroke);
constructor(arg0: BasicStroke, arg1: Paint);

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;

getStroke(): BasicStroke;

getPaint(): Paint;
 }

export class TitledBorder extends AbstractBorder {
static DEFAULT_POSITION:number
static ABOVE_TOP:number
static TOP:number
static BELOW_TOP:number
static ABOVE_BOTTOM:number
static BOTTOM:number
static BELOW_BOTTOM:number
static DEFAULT_JUSTIFICATION:number
static LEFT:number
static CENTER:number
static RIGHT:number
static LEADING:number
static TRAILING:number
constructor(arg0: String);
constructor(arg0: Border);
constructor(arg0: Border, arg1: String);
constructor(arg0: Border, arg1: String, arg2: number, arg3: number);
constructor(arg0: Border, arg1: String, arg2: number, arg3: number, arg4: Font);
constructor(arg0: Border, arg1: String, arg2: number, arg3: number, arg4: Font, arg5: Color);

paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBorderInsets(arg0: Component, arg1: Insets): Insets;

isBorderOpaque(): boolean;

getTitle(): String;

getBorder(): Border;

getTitlePosition(): number;

getTitleJustification(): number;

getTitleFont(): Font;

getTitleColor(): Color;

setTitle(arg0: String): void;

setBorder(arg0: Border): void;

setTitlePosition(arg0: number): void;

setTitleJustification(arg0: number): void;

setTitleFont(arg0: Font): void;

setTitleColor(arg0: Color): void;

getMinimumSize(arg0: Component): Dimension;

getBaseline(arg0: Component, arg1: number, arg2: number): number;

getBaselineResizeBehavior(arg0: Component): Component.BaselineResizeBehavior;
 }

}
