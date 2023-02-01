/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.text.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.awt.geom.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/java.awt.font' { 
import { Rectangle, Shape, Image, Font, Graphics2D } from '@afterburnerhq/java.awt'
import { Enum, Integer, Float, Cloneable, Class, String, Boolean } from '@afterburnerhq/java.lang'
import { AttributedCharacterIterator, BreakIterator } from '@afterburnerhq/java.text'
import { Map, Set } from '@afterburnerhq/java.util'
import { Rectangle2D, AffineTransform, Point2D } from '@afterburnerhq/java.awt.geom'
import { Serializable } from '@afterburnerhq/java.io'
export class FontRenderContext {
constructor(arg0: AffineTransform, arg1: boolean, arg2: boolean);
constructor(arg0: AffineTransform, arg1: Object, arg2: Object);

isTransformed(): boolean;

getTransformType(): number;

getTransform(): AffineTransform;

isAntiAliased(): boolean;

usesFractionalMetrics(): boolean;

getAntiAliasingHint(): Object;

getFractionalMetricsHint(): Object;

equals(arg0: Object): boolean;

equals(arg0: FontRenderContext): boolean;

hashCode(): number;
 }

export class GlyphJustificationInfo {
static PRIORITY_KASHIDA:number
static PRIORITY_WHITESPACE:number
static PRIORITY_INTERCHAR:number
static PRIORITY_NONE:number
weight:number
growPriority:number
growAbsorb:boolean
growLeftLimit:number
growRightLimit:number
shrinkPriority:number
shrinkAbsorb:boolean
shrinkLeftLimit:number
shrinkRightLimit:number
constructor(arg0: number, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: number, arg8: number);
 }

export class GlyphMetrics {
static STANDARD:number
static LIGATURE:number
static COMBINING:number
static COMPONENT:number
static WHITESPACE:number
constructor(arg0: number, arg1: Rectangle2D, arg2: number);
constructor(arg0: boolean, arg1: number, arg2: number, arg3: Rectangle2D, arg4: number);

getAdvance(): number;

getAdvanceX(): number;

getAdvanceY(): number;

getBounds2D(): Rectangle2D;

getLSB(): number;

getRSB(): number;

getType(): number;

isStandard(): boolean;

isLigature(): boolean;

isCombining(): boolean;

isComponent(): boolean;

isWhitespace(): boolean;
 }

export abstract class GlyphVector implements Cloneable {
static FLAG_HAS_TRANSFORMS:number
static FLAG_HAS_POSITION_ADJUSTMENTS:number
static FLAG_RUN_RTL:number
static FLAG_COMPLEX_GLYPHS:number
static FLAG_MASK:number

abstract getFont(): Font;

abstract getFontRenderContext(): FontRenderContext;

abstract performDefaultLayout(): void;

abstract getNumGlyphs(): number;

abstract getGlyphCode(arg0: number): number;

abstract getGlyphCodes(arg0: number, arg1: number, arg2: number[]): number[];

getGlyphCharIndex(arg0: number): number;

getGlyphCharIndices(arg0: number, arg1: number, arg2: number[]): number[];

abstract getLogicalBounds(): Rectangle2D;

abstract getVisualBounds(): Rectangle2D;

getPixelBounds(arg0: FontRenderContext, arg1: number, arg2: number): Rectangle;

abstract getOutline(): Shape;

abstract getOutline(arg0: number, arg1: number): Shape;

abstract getGlyphOutline(arg0: number): Shape;

getGlyphOutline(arg0: number, arg1: number, arg2: number): Shape;

abstract getGlyphPosition(arg0: number): Point2D;

abstract setGlyphPosition(arg0: number, arg1: Point2D): void;

abstract getGlyphTransform(arg0: number): AffineTransform;

abstract setGlyphTransform(arg0: number, arg1: AffineTransform): void;

getLayoutFlags(): number;

abstract getGlyphPositions(arg0: number, arg1: number, arg2: number[]): number[];

abstract getGlyphLogicalBounds(arg0: number): Shape;

abstract getGlyphVisualBounds(arg0: number): Shape;

getGlyphPixelBounds(arg0: number, arg1: FontRenderContext, arg2: number, arg3: number): Rectangle;

abstract getGlyphMetrics(arg0: number): GlyphMetrics;

abstract getGlyphJustificationInfo(arg0: number): GlyphJustificationInfo;

abstract equals(arg0: GlyphVector): boolean;
 }

export abstract class GraphicAttribute {
static TOP_ALIGNMENT:number
static BOTTOM_ALIGNMENT:number
static ROMAN_BASELINE:number
static CENTER_BASELINE:number
static HANGING_BASELINE:number

abstract getAscent(): number;

abstract getDescent(): number;

abstract getAdvance(): number;

getBounds(): Rectangle2D;

getOutline(arg0: AffineTransform): Shape;

abstract draw(arg0: Graphics2D, arg1: number, arg2: number): void;

getAlignment(): number;

getJustificationInfo(): GlyphJustificationInfo;
 }

export class ImageGraphicAttribute extends GraphicAttribute {
constructor(arg0: Image, arg1: number);
constructor(arg0: Image, arg1: number, arg2: number, arg3: number);

getAscent(): number;

getDescent(): number;

getAdvance(): number;

getBounds(): Rectangle2D;

draw(arg0: Graphics2D, arg1: number, arg2: number): void;

hashCode(): number;

equals(arg0: Object): boolean;

equals(arg0: ImageGraphicAttribute): boolean;
 }

export abstract class LayoutPath {

abstract pointToPath(arg0: Point2D, arg1: Point2D): boolean;

abstract pathToPoint(arg0: Point2D, arg1: boolean, arg2: Point2D): void;
 }

export class LineBreakMeasurer {
constructor(arg0: AttributedCharacterIterator, arg1: FontRenderContext);
constructor(arg0: AttributedCharacterIterator, arg1: BreakIterator, arg2: FontRenderContext);

nextOffset(arg0: number): number;

nextOffset(arg0: number, arg1: number, arg2: boolean): number;

nextLayout(arg0: number): TextLayout;

nextLayout(arg0: number, arg1: number, arg2: boolean): TextLayout;

getPosition(): number;

setPosition(arg0: number): void;

insertChar(arg0: AttributedCharacterIterator, arg1: number): void;

deleteChar(arg0: AttributedCharacterIterator, arg1: number): void;
 }

export abstract class LineMetrics {

abstract getNumChars(): number;

abstract getAscent(): number;

abstract getDescent(): number;

abstract getLeading(): number;

abstract getHeight(): number;

abstract getBaselineIndex(): number;

abstract getBaselineOffsets(): number[];

abstract getStrikethroughOffset(): number;

abstract getStrikethroughThickness(): number;

abstract getUnderlineOffset(): number;

abstract getUnderlineThickness(): number;
 }

export interface MultipleMaster {

getNumDesignAxes(): number;

getDesignAxisRanges(): number[];

getDesignAxisDefaults(): number[];

getDesignAxisNames(): String[];

deriveMMFont(arg0: number[]): Font;

deriveMMFont(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: number): Font;
 }

export class NumericShaper implements Serializable {
static EUROPEAN:number
static ARABIC:number
static EASTERN_ARABIC:number
static DEVANAGARI:number
static BENGALI:number
static GURMUKHI:number
static GUJARATI:number
static ORIYA:number
static TAMIL:number
static TELUGU:number
static KANNADA:number
static MALAYALAM:number
static THAI:number
static LAO:number
static TIBETAN:number
static MYANMAR:number
static ETHIOPIC:number
static KHMER:number
static MONGOLIAN:number
static ALL_RANGES:number

static getShaper(arg0: number): NumericShaper;

static getShaper(arg0: NumericShaper.Range): NumericShaper;

static getContextualShaper(arg0: number): NumericShaper;

static getContextualShaper(arg0: Set<NumericShaper.Range>): NumericShaper;

static getContextualShaper(arg0: number, arg1: number): NumericShaper;

static getContextualShaper(arg0: Set<NumericShaper.Range>, arg1: NumericShaper.Range): NumericShaper;

shape(arg0: String[], arg1: number, arg2: number): void;

shape(arg0: String[], arg1: number, arg2: number, arg3: number): void;

shape(arg0: String[], arg1: number, arg2: number, arg3: NumericShaper.Range): void;

isContextual(): boolean;

getRanges(): number;

getRangeSet(): Set<NumericShaper.Range>;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;
 }
export namespace NumericShaper { 
export class Range extends Enum<NumericShaper.Range> {
static EUROPEAN:NumericShaper.Range
static ARABIC:NumericShaper.Range
static EASTERN_ARABIC:NumericShaper.Range
static DEVANAGARI:NumericShaper.Range
static BENGALI:NumericShaper.Range
static GURMUKHI:NumericShaper.Range
static GUJARATI:NumericShaper.Range
static ORIYA:NumericShaper.Range
static TAMIL:NumericShaper.Range
static TELUGU:NumericShaper.Range
static KANNADA:NumericShaper.Range
static MALAYALAM:NumericShaper.Range
static THAI:NumericShaper.Range
static LAO:NumericShaper.Range
static TIBETAN:NumericShaper.Range
static MYANMAR:NumericShaper.Range
static ETHIOPIC:NumericShaper.Range
static KHMER:NumericShaper.Range
static MONGOLIAN:NumericShaper.Range
static NKO:NumericShaper.Range
static MYANMAR_SHAN:NumericShaper.Range
static LIMBU:NumericShaper.Range
static NEW_TAI_LUE:NumericShaper.Range
static BALINESE:NumericShaper.Range
static SUNDANESE:NumericShaper.Range
static LEPCHA:NumericShaper.Range
static OL_CHIKI:NumericShaper.Range
static VAI:NumericShaper.Range
static SAURASHTRA:NumericShaper.Range
static KAYAH_LI:NumericShaper.Range
static CHAM:NumericShaper.Range
static TAI_THAM_HORA:NumericShaper.Range
static TAI_THAM_THAM:NumericShaper.Range
static JAVANESE:NumericShaper.Range
static MEETEI_MAYEK:NumericShaper.Range
static SINHALA:NumericShaper.Range
static MYANMAR_TAI_LAING:NumericShaper.Range

static values(): NumericShaper.Range[];

static valueOf(arg0: String): NumericShaper.Range;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export namespace OpenType { 
const TAG_CMAP:number
const TAG_HEAD:number
const TAG_NAME:number
const TAG_GLYF:number
const TAG_MAXP:number
const TAG_PREP:number
const TAG_HMTX:number
const TAG_KERN:number
const TAG_HDMX:number
const TAG_LOCA:number
const TAG_POST:number
const TAG_OS2:number
const TAG_CVT:number
const TAG_GASP:number
const TAG_VDMX:number
const TAG_VMTX:number
const TAG_VHEA:number
const TAG_HHEA:number
const TAG_TYP1:number
const TAG_BSLN:number
const TAG_GSUB:number
const TAG_DSIG:number
const TAG_FPGM:number
const TAG_FVAR:number
const TAG_GVAR:number
const TAG_CFF:number
const TAG_MMSD:number
const TAG_MMFX:number
const TAG_BASE:number
const TAG_GDEF:number
const TAG_GPOS:number
const TAG_JSTF:number
const TAG_EBDT:number
const TAG_EBLC:number
const TAG_EBSC:number
const TAG_LTSH:number
const TAG_PCLT:number
const TAG_ACNT:number
const TAG_AVAR:number
const TAG_BDAT:number
const TAG_BLOC:number
const TAG_CVAR:number
const TAG_FEAT:number
const TAG_FDSC:number
const TAG_FMTX:number
const TAG_JUST:number
const TAG_LCAR:number
const TAG_MORT:number
const TAG_OPBD:number
const TAG_PROP:number
const TAG_TRAK:number
}

export interface OpenType {
TAG_CMAP:number
TAG_HEAD:number
TAG_NAME:number
TAG_GLYF:number
TAG_MAXP:number
TAG_PREP:number
TAG_HMTX:number
TAG_KERN:number
TAG_HDMX:number
TAG_LOCA:number
TAG_POST:number
TAG_OS2:number
TAG_CVT:number
TAG_GASP:number
TAG_VDMX:number
TAG_VMTX:number
TAG_VHEA:number
TAG_HHEA:number
TAG_TYP1:number
TAG_BSLN:number
TAG_GSUB:number
TAG_DSIG:number
TAG_FPGM:number
TAG_FVAR:number
TAG_GVAR:number
TAG_CFF:number
TAG_MMSD:number
TAG_MMFX:number
TAG_BASE:number
TAG_GDEF:number
TAG_GPOS:number
TAG_JSTF:number
TAG_EBDT:number
TAG_EBLC:number
TAG_EBSC:number
TAG_LTSH:number
TAG_PCLT:number
TAG_ACNT:number
TAG_AVAR:number
TAG_BDAT:number
TAG_BLOC:number
TAG_CVAR:number
TAG_FEAT:number
TAG_FDSC:number
TAG_FMTX:number
TAG_JUST:number
TAG_LCAR:number
TAG_MORT:number
TAG_OPBD:number
TAG_PROP:number
TAG_TRAK:number

getVersion(): number;

getFontTable(arg0: number): number[];

getFontTable(arg0: String): number[];

getFontTable(arg0: number, arg1: number, arg2: number): number[];

getFontTable(arg0: String, arg1: number, arg2: number): number[];

getFontTableSize(arg0: number): number;

getFontTableSize(arg0: String): number;
 }

export class ShapeGraphicAttribute extends GraphicAttribute {
static STROKE:boolean
static FILL:boolean
constructor(arg0: Shape, arg1: number, arg2: boolean);

getAscent(): number;

getDescent(): number;

getAdvance(): number;

draw(arg0: Graphics2D, arg1: number, arg2: number): void;

getBounds(): Rectangle2D;

getOutline(arg0: AffineTransform): Shape;

hashCode(): number;

equals(arg0: Object): boolean;

equals(arg0: ShapeGraphicAttribute): boolean;
 }

export class TextAttribute extends AttributedCharacterIterator.Attribute {
static FAMILY:TextAttribute
static WEIGHT:TextAttribute
static WEIGHT_EXTRA_LIGHT:Number
static WEIGHT_LIGHT:Number
static WEIGHT_DEMILIGHT:Number
static WEIGHT_REGULAR:Number
static WEIGHT_SEMIBOLD:Number
static WEIGHT_MEDIUM:Number
static WEIGHT_DEMIBOLD:Number
static WEIGHT_BOLD:Number
static WEIGHT_HEAVY:Number
static WEIGHT_EXTRABOLD:Number
static WEIGHT_ULTRABOLD:Number
static WIDTH:TextAttribute
static WIDTH_CONDENSED:Number
static WIDTH_SEMI_CONDENSED:Number
static WIDTH_REGULAR:Number
static WIDTH_SEMI_EXTENDED:Number
static WIDTH_EXTENDED:Number
static POSTURE:TextAttribute
static POSTURE_REGULAR:Number
static POSTURE_OBLIQUE:Number
static SIZE:TextAttribute
static TRANSFORM:TextAttribute
static SUPERSCRIPT:TextAttribute
static SUPERSCRIPT_SUPER:Number
static SUPERSCRIPT_SUB:Number
static FONT:TextAttribute
static CHAR_REPLACEMENT:TextAttribute
static FOREGROUND:TextAttribute
static BACKGROUND:TextAttribute
static UNDERLINE:TextAttribute
static UNDERLINE_ON:Number
static STRIKETHROUGH:TextAttribute
static STRIKETHROUGH_ON:Boolean
static RUN_DIRECTION:TextAttribute
static RUN_DIRECTION_LTR:Boolean
static RUN_DIRECTION_RTL:Boolean
static BIDI_EMBEDDING:TextAttribute
static JUSTIFICATION:TextAttribute
static JUSTIFICATION_FULL:Number
static JUSTIFICATION_NONE:Number
static INPUT_METHOD_HIGHLIGHT:TextAttribute
static INPUT_METHOD_UNDERLINE:TextAttribute
static UNDERLINE_LOW_ONE_PIXEL:Number
static UNDERLINE_LOW_TWO_PIXEL:Number
static UNDERLINE_LOW_DOTTED:Number
static UNDERLINE_LOW_GRAY:Number
static UNDERLINE_LOW_DASHED:Number
static SWAP_COLORS:TextAttribute
static SWAP_COLORS_ON:Boolean
static NUMERIC_SHAPING:TextAttribute
static KERNING:TextAttribute
static KERNING_ON:Number
static LIGATURES:TextAttribute
static LIGATURES_ON:Number
static TRACKING:TextAttribute
static TRACKING_TIGHT:Number
static TRACKING_LOOSE:Number
 }

export class TextHitInfo {

getCharIndex(): number;

isLeadingEdge(): boolean;

getInsertionIndex(): number;

hashCode(): number;

equals(arg0: Object): boolean;

equals(arg0: TextHitInfo): boolean;
toString(): string;

static leading(arg0: number): TextHitInfo;

static trailing(arg0: number): TextHitInfo;

static beforeOffset(arg0: number): TextHitInfo;

static afterOffset(arg0: number): TextHitInfo;

getOtherHit(): TextHitInfo;

getOffsetHit(arg0: number): TextHitInfo;
 }

export class TextLayout implements Cloneable {
static DEFAULT_CARET_POLICY:TextLayout.CaretPolicy
constructor(arg0: String, arg1: Font, arg2: FontRenderContext);
constructor(arg0: String, arg1: Map<AttributedCharacterIterator.Attribute, any>, arg2: FontRenderContext);
constructor(arg0: AttributedCharacterIterator, arg1: FontRenderContext);

getJustifiedLayout(arg0: number): TextLayout;

getBaseline(): number;

getBaselineOffsets(): number[];

getAdvance(): number;

getVisibleAdvance(): number;

getAscent(): number;

getDescent(): number;

getLeading(): number;

getBounds(): Rectangle2D;

getPixelBounds(arg0: FontRenderContext, arg1: number, arg2: number): Rectangle;

isLeftToRight(): boolean;

isVertical(): boolean;

getCharacterCount(): number;

getCaretInfo(arg0: TextHitInfo, arg1: Rectangle2D): number[];

getCaretInfo(arg0: TextHitInfo): number[];

getNextRightHit(arg0: TextHitInfo): TextHitInfo;

getNextRightHit(arg0: number, arg1: TextLayout.CaretPolicy): TextHitInfo;

getNextRightHit(arg0: number): TextHitInfo;

getNextLeftHit(arg0: TextHitInfo): TextHitInfo;

getNextLeftHit(arg0: number, arg1: TextLayout.CaretPolicy): TextHitInfo;

getNextLeftHit(arg0: number): TextHitInfo;

getVisualOtherHit(arg0: TextHitInfo): TextHitInfo;

getCaretShape(arg0: TextHitInfo, arg1: Rectangle2D): Shape;

getCaretShape(arg0: TextHitInfo): Shape;

getCharacterLevel(arg0: number): number;

getCaretShapes(arg0: number, arg1: Rectangle2D, arg2: TextLayout.CaretPolicy): Shape[];

getCaretShapes(arg0: number, arg1: Rectangle2D): Shape[];

getCaretShapes(arg0: number): Shape[];

getLogicalRangesForVisualSelection(arg0: TextHitInfo, arg1: TextHitInfo): number[];

getVisualHighlightShape(arg0: TextHitInfo, arg1: TextHitInfo, arg2: Rectangle2D): Shape;

getVisualHighlightShape(arg0: TextHitInfo, arg1: TextHitInfo): Shape;

getLogicalHighlightShape(arg0: number, arg1: number, arg2: Rectangle2D): Shape;

getLogicalHighlightShape(arg0: number, arg1: number): Shape;

getBlackBoxBounds(arg0: number, arg1: number): Shape;

hitTestChar(arg0: number, arg1: number, arg2: Rectangle2D): TextHitInfo;

hitTestChar(arg0: number, arg1: number): TextHitInfo;

equals(arg0: TextLayout): boolean;
toString(): string;

draw(arg0: Graphics2D, arg1: number, arg2: number): void;

getOutline(arg0: AffineTransform): Shape;

getLayoutPath(): LayoutPath;

hitToPoint(arg0: TextHitInfo, arg1: Point2D): void;
 }
export namespace TextLayout { 
export class CaretPolicy {
constructor();

getStrongCaret(arg0: TextHitInfo, arg1: TextHitInfo, arg2: TextLayout): TextHitInfo;
 }

}

export class TextMeasurer implements Cloneable {
constructor(arg0: AttributedCharacterIterator, arg1: FontRenderContext);

getLineBreakIndex(arg0: number, arg1: number): number;

getAdvanceBetween(arg0: number, arg1: number): number;

getLayout(arg0: number, arg1: number): TextLayout;

insertChar(arg0: AttributedCharacterIterator, arg1: number): void;

deleteChar(arg0: AttributedCharacterIterator, arg1: number): void;
 }

export class TransformAttribute implements Serializable {
static IDENTITY:TransformAttribute
constructor(arg0: AffineTransform);

getTransform(): AffineTransform;

isIdentity(): boolean;

hashCode(): number;

equals(arg0: Object): boolean;
 }

}
