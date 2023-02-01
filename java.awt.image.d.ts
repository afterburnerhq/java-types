/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.awt.geom.d.ts" />
/// <reference path="java.math.d.ts" />
/// <reference path="java.awt.color.d.ts" />
declare module '@afterburnerhq/java.awt.image' { 
import { Graphics, Transparency, BufferCapabilities, Rectangle, Point, Image, ImageCapabilities, RenderingHints, Graphics2D, GraphicsConfiguration } from '@afterburnerhq/java.awt'
import { Cloneable, String, RuntimeException } from '@afterburnerhq/java.lang'
import { Vector, List, Hashtable } from '@afterburnerhq/java.util'
import { Rectangle2D, AffineTransform, Point2D } from '@afterburnerhq/java.awt.geom'
import { BigInteger } from '@afterburnerhq/java.math'
import { ICC_Profile, ColorSpace } from '@afterburnerhq/java.awt.color'
export abstract class AbstractMultiResolutionImage extends Image implements MultiResolutionImage {

getWidth(arg0: ImageObserver): number;

getHeight(arg0: ImageObserver): number;

getSource(): ImageProducer;

getGraphics(): Graphics;

getProperty(arg0: String, arg1: ImageObserver): Object;
 }

export class AffineTransformOp implements BufferedImageOp, RasterOp {
static TYPE_NEAREST_NEIGHBOR:number
static TYPE_BILINEAR:number
static TYPE_BICUBIC:number
constructor(arg0: AffineTransform, arg1: RenderingHints);
constructor(arg0: AffineTransform, arg1: number);

getInterpolationType(): number;

filter(arg0: BufferedImage, arg1: BufferedImage): BufferedImage;

filter(arg0: Raster, arg1: WritableRaster): WritableRaster;

getBounds2D(arg0: BufferedImage): Rectangle2D;

getBounds2D(arg0: Raster): Rectangle2D;

createCompatibleDestImage(arg0: BufferedImage, arg1: ColorModel): BufferedImage;

createCompatibleDestRaster(arg0: Raster): WritableRaster;

getPoint2D(arg0: Point2D, arg1: Point2D): Point2D;

getTransform(): AffineTransform;

getRenderingHints(): RenderingHints;
 }

export class AreaAveragingScaleFilter extends ReplicateScaleFilter {
constructor(arg0: number, arg1: number);

setHints(arg0: number): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ColorModel, arg5: number[], arg6: number, arg7: number): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ColorModel, arg5: number[], arg6: number, arg7: number): void;
 }

export class BandCombineOp implements RasterOp {
constructor(arg0: Array<Array<number>>, arg1: RenderingHints);

getMatrix(): Array<Array<number>>;

filter(arg0: Raster, arg1: WritableRaster): WritableRaster;

getBounds2D(arg0: Raster): Rectangle2D;

createCompatibleDestRaster(arg0: Raster): WritableRaster;

getPoint2D(arg0: Point2D, arg1: Point2D): Point2D;

getRenderingHints(): RenderingHints;
 }

export class BandedSampleModel extends ComponentSampleModel {
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number[]);

createCompatibleSampleModel(arg0: number, arg1: number): SampleModel;

createSubsetSampleModel(arg0: number[]): SampleModel;

createDataBuffer(): DataBuffer;

getDataElements(arg0: number, arg1: number, arg2: Object, arg3: DataBuffer): Object;

getPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): number[];

getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): number[];

getSample(arg0: number, arg1: number, arg2: number, arg3: DataBuffer): number;

getSampleFloat(arg0: number, arg1: number, arg2: number, arg3: DataBuffer): number;

getSampleDouble(arg0: number, arg1: number, arg2: number, arg3: DataBuffer): number;

getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): number[];

setDataElements(arg0: number, arg1: number, arg2: Object, arg3: DataBuffer): void;

setPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): void;

setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: DataBuffer): void;

setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: DataBuffer): void;

setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: DataBuffer): void;

setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): void;

hashCode(): number;
 }

export class BaseMultiResolutionImage extends AbstractMultiResolutionImage {
constructor(arg0: Image[]);
constructor(arg0: number, arg1: Image[]);

getResolutionVariant(arg0: number, arg1: number): Image;

getResolutionVariants(): List<Image>;
 }

export abstract class BufferStrategy {

abstract getCapabilities(): BufferCapabilities;

abstract getDrawGraphics(): Graphics;

abstract contentsLost(): boolean;

abstract contentsRestored(): boolean;

abstract show(): void;

dispose(): void;
 }

export class BufferedImage extends Image implements WritableRenderedImage, Transparency {
static TYPE_CUSTOM:number
static TYPE_INT_RGB:number
static TYPE_INT_ARGB:number
static TYPE_INT_ARGB_PRE:number
static TYPE_INT_BGR:number
static TYPE_3BYTE_BGR:number
static TYPE_4BYTE_ABGR:number
static TYPE_4BYTE_ABGR_PRE:number
static TYPE_USHORT_565_RGB:number
static TYPE_USHORT_555_RGB:number
static TYPE_BYTE_GRAY:number
static TYPE_USHORT_GRAY:number
static TYPE_BYTE_BINARY:number
static TYPE_BYTE_INDEXED:number
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: IndexColorModel);
constructor(arg0: ColorModel, arg1: WritableRaster, arg2: boolean, arg3: Hashtable<any, any>);

getType(): number;

getColorModel(): ColorModel;

getRaster(): WritableRaster;

getAlphaRaster(): WritableRaster;

getRGB(arg0: number, arg1: number): number;

getRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): number[];

setRGB(arg0: number, arg1: number, arg2: number): void;

setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): void;

getWidth(): number;

getHeight(): number;

getWidth(arg0: ImageObserver): number;

getHeight(arg0: ImageObserver): number;

getSource(): ImageProducer;

getProperty(arg0: String, arg1: ImageObserver): Object;

getProperty(arg0: String): Object;

getGraphics(): Graphics;

createGraphics(): Graphics2D;

getSubimage(arg0: number, arg1: number, arg2: number, arg3: number): BufferedImage;

isAlphaPremultiplied(): boolean;

coerceData(arg0: boolean): void;
toString(): string;

getSources(): Vector<RenderedImage>;

getPropertyNames(): String[];

getMinX(): number;

getMinY(): number;

getSampleModel(): SampleModel;

getNumXTiles(): number;

getNumYTiles(): number;

getMinTileX(): number;

getMinTileY(): number;

getTileWidth(): number;

getTileHeight(): number;

getTileGridXOffset(): number;

getTileGridYOffset(): number;

getTile(arg0: number, arg1: number): Raster;

getData(): Raster;

getData(arg0: Rectangle): Raster;

copyData(arg0: WritableRaster): WritableRaster;

setData(arg0: Raster): void;

addTileObserver(arg0: TileObserver): void;

removeTileObserver(arg0: TileObserver): void;

isTileWritable(arg0: number, arg1: number): boolean;

getWritableTileIndices(): Point[];

hasTileWriters(): boolean;

getWritableTile(arg0: number, arg1: number): WritableRaster;

releaseWritableTile(arg0: number, arg1: number): void;

getTransparency(): number;
 }

export class BufferedImageFilter extends ImageFilter implements Cloneable {
constructor(arg0: BufferedImageOp);

getBufferedImageOp(): BufferedImageOp;

setDimensions(arg0: number, arg1: number): void;

setColorModel(arg0: ColorModel): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ColorModel, arg5: number[], arg6: number, arg7: number): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ColorModel, arg5: number[], arg6: number, arg7: number): void;

imageComplete(arg0: number): void;
 }

export interface BufferedImageOp {

filter(arg0: BufferedImage, arg1: BufferedImage): BufferedImage;

getBounds2D(arg0: BufferedImage): Rectangle2D;

createCompatibleDestImage(arg0: BufferedImage, arg1: ColorModel): BufferedImage;

getPoint2D(arg0: Point2D, arg1: Point2D): Point2D;

getRenderingHints(): RenderingHints;
 }

export class ByteLookupTable extends LookupTable {
constructor(arg0: number, arg1: Array<Array<number>>);
constructor(arg0: number, arg1: number[]);

getTable(): Array<Array<number>>;

lookupPixel(arg0: number[], arg1: number[]): number[];

lookupPixel(arg0: number[], arg1: number[]): number[];
 }

export class ColorConvertOp implements BufferedImageOp, RasterOp {
constructor(arg0: RenderingHints);
constructor(arg0: ColorSpace, arg1: RenderingHints);
constructor(arg0: ColorSpace, arg1: ColorSpace, arg2: RenderingHints);
constructor(arg0: ICC_Profile[], arg1: RenderingHints);

getICC_Profiles(): ICC_Profile[];

filter(arg0: BufferedImage, arg1: BufferedImage): BufferedImage;

filter(arg0: Raster, arg1: WritableRaster): WritableRaster;

getBounds2D(arg0: BufferedImage): Rectangle2D;

getBounds2D(arg0: Raster): Rectangle2D;

createCompatibleDestImage(arg0: BufferedImage, arg1: ColorModel): BufferedImage;

createCompatibleDestRaster(arg0: Raster): WritableRaster;

getPoint2D(arg0: Point2D, arg1: Point2D): Point2D;

getRenderingHints(): RenderingHints;
 }

export abstract class ColorModel implements Transparency {
constructor(arg0: number);

static getRGBdefault(): ColorModel;

hasAlpha(): boolean;

isAlphaPremultiplied(): boolean;

getTransferType(): number;

getPixelSize(): number;

getComponentSize(arg0: number): number;

getComponentSize(): number[];

getTransparency(): number;

getNumComponents(): number;

getNumColorComponents(): number;

abstract getRed(arg0: number): number;

abstract getGreen(arg0: number): number;

abstract getBlue(arg0: number): number;

abstract getAlpha(arg0: number): number;

getRGB(arg0: number): number;

getRed(arg0: Object): number;

getGreen(arg0: Object): number;

getBlue(arg0: Object): number;

getAlpha(arg0: Object): number;

getRGB(arg0: Object): number;

getDataElements(arg0: number, arg1: Object): Object;

getComponents(arg0: number, arg1: number[], arg2: number): number[];

getComponents(arg0: Object, arg1: number[], arg2: number): number[];

getUnnormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];

getNormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];

getDataElement(arg0: number[], arg1: number): number;

getDataElements(arg0: number[], arg1: number, arg2: Object): Object;

getDataElement(arg0: number[], arg1: number): number;

getDataElements(arg0: number[], arg1: number, arg2: Object): Object;

getNormalizedComponents(arg0: Object, arg1: number[], arg2: number): number[];

equals(arg0: Object): boolean;

hashCode(): number;

getColorSpace(): ColorSpace;

coerceData(arg0: WritableRaster, arg1: boolean): ColorModel;

isCompatibleRaster(arg0: Raster): boolean;

createCompatibleWritableRaster(arg0: number, arg1: number): WritableRaster;

createCompatibleSampleModel(arg0: number, arg1: number): SampleModel;

isCompatibleSampleModel(arg0: SampleModel): boolean;

finalize(): void;

getAlphaRaster(arg0: WritableRaster): WritableRaster;
toString(): string;
 }

export class ComponentColorModel extends ColorModel {
constructor(arg0: ColorSpace, arg1: number[], arg2: boolean, arg3: boolean, arg4: number, arg5: number);
constructor(arg0: ColorSpace, arg1: boolean, arg2: boolean, arg3: number, arg4: number);

getRed(arg0: number): number;

getGreen(arg0: number): number;

getBlue(arg0: number): number;

getAlpha(arg0: number): number;

getRGB(arg0: number): number;

getRed(arg0: Object): number;

getGreen(arg0: Object): number;

getBlue(arg0: Object): number;

getAlpha(arg0: Object): number;

getRGB(arg0: Object): number;

getDataElements(arg0: number, arg1: Object): Object;

getComponents(arg0: number, arg1: number[], arg2: number): number[];

getComponents(arg0: Object, arg1: number[], arg2: number): number[];

getUnnormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];

getNormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];

getDataElement(arg0: number[], arg1: number): number;

getDataElements(arg0: number[], arg1: number, arg2: Object): Object;

getDataElement(arg0: number[], arg1: number): number;

getDataElements(arg0: number[], arg1: number, arg2: Object): Object;

getNormalizedComponents(arg0: Object, arg1: number[], arg2: number): number[];

coerceData(arg0: WritableRaster, arg1: boolean): ColorModel;

isCompatibleRaster(arg0: Raster): boolean;

createCompatibleWritableRaster(arg0: number, arg1: number): WritableRaster;

createCompatibleSampleModel(arg0: number, arg1: number): SampleModel;

isCompatibleSampleModel(arg0: SampleModel): boolean;

getAlphaRaster(arg0: WritableRaster): WritableRaster;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class ComponentSampleModel extends SampleModel {
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number[]);

createCompatibleSampleModel(arg0: number, arg1: number): SampleModel;

createSubsetSampleModel(arg0: number[]): SampleModel;

createDataBuffer(): DataBuffer;

getOffset(arg0: number, arg1: number): number;

getOffset(arg0: number, arg1: number, arg2: number): number;

getSampleSize(): number[];

getSampleSize(arg0: number): number;

getBankIndices(): number[];

getBandOffsets(): number[];

getScanlineStride(): number;

getPixelStride(): number;

getNumDataElements(): number;

getDataElements(arg0: number, arg1: number, arg2: Object, arg3: DataBuffer): Object;

getPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): number[];

getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): number[];

getSample(arg0: number, arg1: number, arg2: number, arg3: DataBuffer): number;

getSampleFloat(arg0: number, arg1: number, arg2: number, arg3: DataBuffer): number;

getSampleDouble(arg0: number, arg1: number, arg2: number, arg3: DataBuffer): number;

getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): number[];

setDataElements(arg0: number, arg1: number, arg2: Object, arg3: DataBuffer): void;

setPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): void;

setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: DataBuffer): void;

setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: DataBuffer): void;

setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: DataBuffer): void;

setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): void;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class ConvolveOp implements BufferedImageOp, RasterOp {
static EDGE_ZERO_FILL:number
static EDGE_NO_OP:number
constructor(arg0: Kernel, arg1: number, arg2: RenderingHints);
constructor(arg0: Kernel);

getEdgeCondition(): number;

getKernel(): Kernel;

filter(arg0: BufferedImage, arg1: BufferedImage): BufferedImage;

filter(arg0: Raster, arg1: WritableRaster): WritableRaster;

createCompatibleDestImage(arg0: BufferedImage, arg1: ColorModel): BufferedImage;

createCompatibleDestRaster(arg0: Raster): WritableRaster;

getBounds2D(arg0: BufferedImage): Rectangle2D;

getBounds2D(arg0: Raster): Rectangle2D;

getPoint2D(arg0: Point2D, arg1: Point2D): Point2D;

getRenderingHints(): RenderingHints;
 }

export class CropImageFilter extends ImageFilter {
constructor(arg0: number, arg1: number, arg2: number, arg3: number);

setProperties(arg0: Hashtable<any, any>): void;

setDimensions(arg0: number, arg1: number): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ColorModel, arg5: number[], arg6: number, arg7: number): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ColorModel, arg5: number[], arg6: number, arg7: number): void;
 }

export abstract class DataBuffer {
static TYPE_BYTE:number
static TYPE_USHORT:number
static TYPE_SHORT:number
static TYPE_INT:number
static TYPE_FLOAT:number
static TYPE_DOUBLE:number
static TYPE_UNDEFINED:number

static getDataTypeSize(arg0: number): number;

getDataType(): number;

getSize(): number;

getOffset(): number;

getOffsets(): number[];

getNumBanks(): number;

getElem(arg0: number): number;

abstract getElem(arg0: number, arg1: number): number;

setElem(arg0: number, arg1: number): void;

abstract setElem(arg0: number, arg1: number, arg2: number): void;

getElemFloat(arg0: number): number;

getElemFloat(arg0: number, arg1: number): number;

setElemFloat(arg0: number, arg1: number): void;

setElemFloat(arg0: number, arg1: number, arg2: number): void;

getElemDouble(arg0: number): number;

getElemDouble(arg0: number, arg1: number): number;

setElemDouble(arg0: number, arg1: number): void;

setElemDouble(arg0: number, arg1: number, arg2: number): void;
 }

export class DataBufferByte extends DataBuffer {
constructor(arg0: number);
constructor(arg0: number, arg1: number);
constructor(arg0: number[], arg1: number);
constructor(arg0: number[], arg1: number, arg2: number);
constructor(arg0: Array<Array<number>>, arg1: number);
constructor(arg0: Array<Array<number>>, arg1: number, arg2: number[]);

getData(): number[];

getData(arg0: number): number[];

getBankData(): Array<Array<number>>;

getElem(arg0: number): number;

getElem(arg0: number, arg1: number): number;

setElem(arg0: number, arg1: number): void;

setElem(arg0: number, arg1: number, arg2: number): void;
 }

export class DataBufferDouble extends DataBuffer {
constructor(arg0: number);
constructor(arg0: number, arg1: number);
constructor(arg0: number[], arg1: number);
constructor(arg0: number[], arg1: number, arg2: number);
constructor(arg0: Array<Array<number>>, arg1: number);
constructor(arg0: Array<Array<number>>, arg1: number, arg2: number[]);

getData(): number[];

getData(arg0: number): number[];

getBankData(): Array<Array<number>>;

getElem(arg0: number): number;

getElem(arg0: number, arg1: number): number;

setElem(arg0: number, arg1: number): void;

setElem(arg0: number, arg1: number, arg2: number): void;

getElemFloat(arg0: number): number;

getElemFloat(arg0: number, arg1: number): number;

setElemFloat(arg0: number, arg1: number): void;

setElemFloat(arg0: number, arg1: number, arg2: number): void;

getElemDouble(arg0: number): number;

getElemDouble(arg0: number, arg1: number): number;

setElemDouble(arg0: number, arg1: number): void;

setElemDouble(arg0: number, arg1: number, arg2: number): void;
 }

export class DataBufferFloat extends DataBuffer {
constructor(arg0: number);
constructor(arg0: number, arg1: number);
constructor(arg0: number[], arg1: number);
constructor(arg0: number[], arg1: number, arg2: number);
constructor(arg0: Array<Array<number>>, arg1: number);
constructor(arg0: Array<Array<number>>, arg1: number, arg2: number[]);

getData(): number[];

getData(arg0: number): number[];

getBankData(): Array<Array<number>>;

getElem(arg0: number): number;

getElem(arg0: number, arg1: number): number;

setElem(arg0: number, arg1: number): void;

setElem(arg0: number, arg1: number, arg2: number): void;

getElemFloat(arg0: number): number;

getElemFloat(arg0: number, arg1: number): number;

setElemFloat(arg0: number, arg1: number): void;

setElemFloat(arg0: number, arg1: number, arg2: number): void;

getElemDouble(arg0: number): number;

getElemDouble(arg0: number, arg1: number): number;

setElemDouble(arg0: number, arg1: number): void;

setElemDouble(arg0: number, arg1: number, arg2: number): void;
 }

export class DataBufferInt extends DataBuffer {
constructor(arg0: number);
constructor(arg0: number, arg1: number);
constructor(arg0: number[], arg1: number);
constructor(arg0: number[], arg1: number, arg2: number);
constructor(arg0: Array<Array<number>>, arg1: number);
constructor(arg0: Array<Array<number>>, arg1: number, arg2: number[]);

getData(): number[];

getData(arg0: number): number[];

getBankData(): Array<Array<number>>;

getElem(arg0: number): number;

getElem(arg0: number, arg1: number): number;

setElem(arg0: number, arg1: number): void;

setElem(arg0: number, arg1: number, arg2: number): void;
 }

export class DataBufferShort extends DataBuffer {
constructor(arg0: number);
constructor(arg0: number, arg1: number);
constructor(arg0: number[], arg1: number);
constructor(arg0: number[], arg1: number, arg2: number);
constructor(arg0: Array<Array<number>>, arg1: number);
constructor(arg0: Array<Array<number>>, arg1: number, arg2: number[]);

getData(): number[];

getData(arg0: number): number[];

getBankData(): Array<Array<number>>;

getElem(arg0: number): number;

getElem(arg0: number, arg1: number): number;

setElem(arg0: number, arg1: number): void;

setElem(arg0: number, arg1: number, arg2: number): void;
 }

export class DataBufferUShort extends DataBuffer {
constructor(arg0: number);
constructor(arg0: number, arg1: number);
constructor(arg0: number[], arg1: number);
constructor(arg0: number[], arg1: number, arg2: number);
constructor(arg0: Array<Array<number>>, arg1: number);
constructor(arg0: Array<Array<number>>, arg1: number, arg2: number[]);

getData(): number[];

getData(arg0: number): number[];

getBankData(): Array<Array<number>>;

getElem(arg0: number): number;

getElem(arg0: number, arg1: number): number;

setElem(arg0: number, arg1: number): void;

setElem(arg0: number, arg1: number, arg2: number): void;
 }

export class DirectColorModel extends PackedColorModel {
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
constructor(arg0: ColorSpace, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: number);

getRedMask(): number;

getGreenMask(): number;

getBlueMask(): number;

getAlphaMask(): number;

getRed(arg0: number): number;

getGreen(arg0: number): number;

getBlue(arg0: number): number;

getAlpha(arg0: number): number;

getRGB(arg0: number): number;

getRed(arg0: Object): number;

getGreen(arg0: Object): number;

getBlue(arg0: Object): number;

getAlpha(arg0: Object): number;

getRGB(arg0: Object): number;

getDataElements(arg0: number, arg1: Object): Object;

getComponents(arg0: number, arg1: number[], arg2: number): number[];

getComponents(arg0: Object, arg1: number[], arg2: number): number[];

createCompatibleWritableRaster(arg0: number, arg1: number): WritableRaster;

getDataElement(arg0: number[], arg1: number): number;

getDataElements(arg0: number[], arg1: number, arg2: Object): Object;

coerceData(arg0: WritableRaster, arg1: boolean): ColorModel;

isCompatibleRaster(arg0: Raster): boolean;
toString(): string;
 }

export class FilteredImageSource implements ImageProducer {
constructor(arg0: ImageProducer, arg1: ImageFilter);

addConsumer(arg0: ImageConsumer): void;

isConsumer(arg0: ImageConsumer): boolean;

removeConsumer(arg0: ImageConsumer): void;

startProduction(arg0: ImageConsumer): void;

requestTopDownLeftRightResend(arg0: ImageConsumer): void;
 }

export namespace ImageConsumer { 
const RANDOMPIXELORDER:number
const TOPDOWNLEFTRIGHT:number
const COMPLETESCANLINES:number
const SINGLEPASS:number
const SINGLEFRAME:number
const IMAGEERROR:number
const SINGLEFRAMEDONE:number
const STATICIMAGEDONE:number
const IMAGEABORTED:number
}

export interface ImageConsumer {
RANDOMPIXELORDER:number
TOPDOWNLEFTRIGHT:number
COMPLETESCANLINES:number
SINGLEPASS:number
SINGLEFRAME:number
IMAGEERROR:number
SINGLEFRAMEDONE:number
STATICIMAGEDONE:number
IMAGEABORTED:number

setDimensions(arg0: number, arg1: number): void;

setProperties(arg0: Hashtable<any, any>): void;

setColorModel(arg0: ColorModel): void;

setHints(arg0: number): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ColorModel, arg5: number[], arg6: number, arg7: number): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ColorModel, arg5: number[], arg6: number, arg7: number): void;

imageComplete(arg0: number): void;
 }

export class ImageFilter implements ImageConsumer, Cloneable {
constructor();

getFilterInstance(arg0: ImageConsumer): ImageFilter;

setDimensions(arg0: number, arg1: number): void;

setProperties(arg0: Hashtable<any, any>): void;

setColorModel(arg0: ColorModel): void;

setHints(arg0: number): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ColorModel, arg5: number[], arg6: number, arg7: number): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ColorModel, arg5: number[], arg6: number, arg7: number): void;

imageComplete(arg0: number): void;

resendTopDownLeftRight(arg0: ImageProducer): void;

clone(): Object;
 }

export namespace ImageObserver { 
const WIDTH:number
const HEIGHT:number
const PROPERTIES:number
const SOMEBITS:number
const FRAMEBITS:number
const ALLBITS:number
const ERROR:number
const ABORT:number
}

export interface ImageObserver {
WIDTH:number
HEIGHT:number
PROPERTIES:number
SOMEBITS:number
FRAMEBITS:number
ALLBITS:number
ERROR:number
ABORT:number

imageUpdate(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
 }

export interface ImageProducer {

addConsumer(arg0: ImageConsumer): void;

isConsumer(arg0: ImageConsumer): boolean;

removeConsumer(arg0: ImageConsumer): void;

startProduction(arg0: ImageConsumer): void;

requestTopDownLeftRightResend(arg0: ImageConsumer): void;
 }

export class ImagingOpException extends RuntimeException {
constructor(arg0: String);
 }

export class IndexColorModel extends ColorModel {
constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[]);
constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[], arg5: number);
constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[], arg5: number[]);
constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean);
constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean, arg5: number);
constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean, arg5: number, arg6: number);
constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: number, arg5: BigInteger);

getTransparency(): number;

getComponentSize(): number[];

getMapSize(): number;

getTransparentPixel(): number;

getReds(arg0: number[]): void;

getGreens(arg0: number[]): void;

getBlues(arg0: number[]): void;

getAlphas(arg0: number[]): void;

getRGBs(arg0: number[]): void;

getRed(arg0: number): number;

getGreen(arg0: number): number;

getBlue(arg0: number): number;

getAlpha(arg0: number): number;

getRGB(arg0: number): number;

getDataElements(arg0: number, arg1: Object): Object;

getComponents(arg0: number, arg1: number[], arg2: number): number[];

getComponents(arg0: Object, arg1: number[], arg2: number): number[];

getDataElement(arg0: number[], arg1: number): number;

getDataElements(arg0: number[], arg1: number, arg2: Object): Object;

createCompatibleWritableRaster(arg0: number, arg1: number): WritableRaster;

isCompatibleRaster(arg0: Raster): boolean;

createCompatibleSampleModel(arg0: number, arg1: number): SampleModel;

isCompatibleSampleModel(arg0: SampleModel): boolean;

convertToIntDiscrete(arg0: Raster, arg1: boolean): BufferedImage;

isValid(arg0: number): boolean;

isValid(): boolean;

getValidPixels(): BigInteger;

finalize(): void;
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class Kernel implements Cloneable {
constructor(arg0: number, arg1: number, arg2: number[]);

getXOrigin(): number;

getYOrigin(): number;

getWidth(): number;

getHeight(): number;

getKernelData(arg0: number[]): number[];

clone(): Object;
 }

export class LookupOp implements BufferedImageOp, RasterOp {
constructor(arg0: LookupTable, arg1: RenderingHints);

getTable(): LookupTable;

filter(arg0: BufferedImage, arg1: BufferedImage): BufferedImage;

filter(arg0: Raster, arg1: WritableRaster): WritableRaster;

getBounds2D(arg0: BufferedImage): Rectangle2D;

getBounds2D(arg0: Raster): Rectangle2D;

createCompatibleDestImage(arg0: BufferedImage, arg1: ColorModel): BufferedImage;

createCompatibleDestRaster(arg0: Raster): WritableRaster;

getPoint2D(arg0: Point2D, arg1: Point2D): Point2D;

getRenderingHints(): RenderingHints;
 }

export abstract class LookupTable {

getNumComponents(): number;

getOffset(): number;

abstract lookupPixel(arg0: number[], arg1: number[]): number[];
 }

export class MemoryImageSource implements ImageProducer {
constructor(arg0: number, arg1: number, arg2: ColorModel, arg3: number[], arg4: number, arg5: number);
constructor(arg0: number, arg1: number, arg2: ColorModel, arg3: number[], arg4: number, arg5: number, arg6: Hashtable<any, any>);
constructor(arg0: number, arg1: number, arg2: ColorModel, arg3: number[], arg4: number, arg5: number);
constructor(arg0: number, arg1: number, arg2: ColorModel, arg3: number[], arg4: number, arg5: number, arg6: Hashtable<any, any>);
constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: number);
constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: number, arg5: Hashtable<any, any>);

addConsumer(arg0: ImageConsumer): void;

isConsumer(arg0: ImageConsumer): boolean;

removeConsumer(arg0: ImageConsumer): void;

startProduction(arg0: ImageConsumer): void;

requestTopDownLeftRightResend(arg0: ImageConsumer): void;

setAnimated(arg0: boolean): void;

setFullBufferUpdates(arg0: boolean): void;

newPixels(): void;

newPixels(arg0: number, arg1: number, arg2: number, arg3: number): void;

newPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;

newPixels(arg0: number[], arg1: ColorModel, arg2: number, arg3: number): void;

newPixels(arg0: number[], arg1: ColorModel, arg2: number, arg3: number): void;
 }

export class MultiPixelPackedSampleModel extends SampleModel {
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);

createCompatibleSampleModel(arg0: number, arg1: number): SampleModel;

createDataBuffer(): DataBuffer;

getNumDataElements(): number;

getSampleSize(): number[];

getSampleSize(arg0: number): number;

getOffset(arg0: number, arg1: number): number;

getBitOffset(arg0: number): number;

getScanlineStride(): number;

getPixelBitStride(): number;

getDataBitOffset(): number;

getTransferType(): number;

createSubsetSampleModel(arg0: number[]): SampleModel;

getSample(arg0: number, arg1: number, arg2: number, arg3: DataBuffer): number;

setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: DataBuffer): void;

getDataElements(arg0: number, arg1: number, arg2: Object, arg3: DataBuffer): Object;

getPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): number[];

setDataElements(arg0: number, arg1: number, arg2: Object, arg3: DataBuffer): void;

setPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): void;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export interface MultiResolutionImage {

getResolutionVariant(arg0: number, arg1: number): Image;

getResolutionVariants(): List<Image>;
 }

export abstract class PackedColorModel extends ColorModel {
constructor(arg0: ColorSpace, arg1: number, arg2: number[], arg3: number, arg4: boolean, arg5: number, arg6: number);
constructor(arg0: ColorSpace, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: number, arg8: number);

getMask(arg0: number): number;

getMasks(): number[];

createCompatibleSampleModel(arg0: number, arg1: number): SampleModel;

isCompatibleSampleModel(arg0: SampleModel): boolean;

getAlphaRaster(arg0: WritableRaster): WritableRaster;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class PixelGrabber implements ImageConsumer {
constructor(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number, arg7: number);
constructor(arg0: ImageProducer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number, arg7: number);
constructor(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean);

startGrabbing(): void;

abortGrabbing(): void;

grabPixels(): boolean;

grabPixels(arg0: number): boolean;

getStatus(): number;

getWidth(): number;

getHeight(): number;

getPixels(): Object;

getColorModel(): ColorModel;

setDimensions(arg0: number, arg1: number): void;

setHints(arg0: number): void;

setProperties(arg0: Hashtable<any, any>): void;

setColorModel(arg0: ColorModel): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ColorModel, arg5: number[], arg6: number, arg7: number): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ColorModel, arg5: number[], arg6: number, arg7: number): void;

imageComplete(arg0: number): void;

status(): number;
 }

export class PixelInterleavedSampleModel extends ComponentSampleModel {
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]);

createCompatibleSampleModel(arg0: number, arg1: number): SampleModel;

createSubsetSampleModel(arg0: number[]): SampleModel;

hashCode(): number;
 }

export abstract class RGBImageFilter extends ImageFilter {

setColorModel(arg0: ColorModel): void;

substituteColorModel(arg0: ColorModel, arg1: ColorModel): void;

filterIndexColorModel(arg0: IndexColorModel): IndexColorModel;

filterRGBPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ColorModel, arg5: number[], arg6: number, arg7: number): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ColorModel, arg5: number[], arg6: number, arg7: number): void;

abstract filterRGB(arg0: number, arg1: number, arg2: number): number;
 }

export class Raster {

static createInterleavedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Point): WritableRaster;

static createInterleavedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: Point): WritableRaster;

static createBandedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Point): WritableRaster;

static createBandedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number[], arg6: Point): WritableRaster;

static createPackedRaster(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Point): WritableRaster;

static createPackedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Point): WritableRaster;

static createInterleavedRaster(arg0: DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: Point): WritableRaster;

static createBandedRaster(arg0: DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number[], arg6: Point): WritableRaster;

static createPackedRaster(arg0: DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: Point): WritableRaster;

static createPackedRaster(arg0: DataBuffer, arg1: number, arg2: number, arg3: number, arg4: Point): WritableRaster;

static createRaster(arg0: SampleModel, arg1: DataBuffer, arg2: Point): Raster;

static createWritableRaster(arg0: SampleModel, arg1: Point): WritableRaster;

static createWritableRaster(arg0: SampleModel, arg1: DataBuffer, arg2: Point): WritableRaster;

getParent(): Raster;

getSampleModelTranslateX(): number;

getSampleModelTranslateY(): number;

createCompatibleWritableRaster(): WritableRaster;

createCompatibleWritableRaster(arg0: number, arg1: number): WritableRaster;

createCompatibleWritableRaster(arg0: Rectangle): WritableRaster;

createCompatibleWritableRaster(arg0: number, arg1: number, arg2: number, arg3: number): WritableRaster;

createTranslatedChild(arg0: number, arg1: number): Raster;

createChild(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): Raster;

getBounds(): Rectangle;

getMinX(): number;

getMinY(): number;

getWidth(): number;

getHeight(): number;

getNumBands(): number;

getNumDataElements(): number;

getTransferType(): number;

getDataBuffer(): DataBuffer;

getSampleModel(): SampleModel;

getDataElements(arg0: number, arg1: number, arg2: Object): Object;

getDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Object): Object;

getPixel(arg0: number, arg1: number, arg2: number[]): number[];

getPixel(arg0: number, arg1: number, arg2: number[]): number[];

getPixel(arg0: number, arg1: number, arg2: number[]): number[];

getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];

getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];

getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];

getSample(arg0: number, arg1: number, arg2: number): number;

getSampleFloat(arg0: number, arg1: number, arg2: number): number;

getSampleDouble(arg0: number, arg1: number, arg2: number): number;

getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];

getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];

getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
 }

export class RasterFormatException extends RuntimeException {
constructor(arg0: String);
 }

export interface RasterOp {

filter(arg0: Raster, arg1: WritableRaster): WritableRaster;

getBounds2D(arg0: Raster): Rectangle2D;

createCompatibleDestRaster(arg0: Raster): WritableRaster;

getPoint2D(arg0: Point2D, arg1: Point2D): Point2D;

getRenderingHints(): RenderingHints;
 }

export interface RenderedImage {

getSources(): Vector<RenderedImage>;

getProperty(arg0: String): Object;

getPropertyNames(): String[];

getColorModel(): ColorModel;

getSampleModel(): SampleModel;

getWidth(): number;

getHeight(): number;

getMinX(): number;

getMinY(): number;

getNumXTiles(): number;

getNumYTiles(): number;

getMinTileX(): number;

getMinTileY(): number;

getTileWidth(): number;

getTileHeight(): number;

getTileGridXOffset(): number;

getTileGridYOffset(): number;

getTile(arg0: number, arg1: number): Raster;

getData(): Raster;

getData(arg0: Rectangle): Raster;

copyData(arg0: WritableRaster): WritableRaster;
 }

export class ReplicateScaleFilter extends ImageFilter {
constructor(arg0: number, arg1: number);

setProperties(arg0: Hashtable<any, any>): void;

setDimensions(arg0: number, arg1: number): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ColorModel, arg5: number[], arg6: number, arg7: number): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ColorModel, arg5: number[], arg6: number, arg7: number): void;
 }

export class RescaleOp implements BufferedImageOp, RasterOp {
constructor(arg0: number[], arg1: number[], arg2: RenderingHints);
constructor(arg0: number, arg1: number, arg2: RenderingHints);

getScaleFactors(arg0: number[]): number[];

getOffsets(arg0: number[]): number[];

getNumFactors(): number;

filter(arg0: BufferedImage, arg1: BufferedImage): BufferedImage;

filter(arg0: Raster, arg1: WritableRaster): WritableRaster;

getBounds2D(arg0: BufferedImage): Rectangle2D;

getBounds2D(arg0: Raster): Rectangle2D;

createCompatibleDestImage(arg0: BufferedImage, arg1: ColorModel): BufferedImage;

createCompatibleDestRaster(arg0: Raster): WritableRaster;

getPoint2D(arg0: Point2D, arg1: Point2D): Point2D;

getRenderingHints(): RenderingHints;
 }

export abstract class SampleModel {
constructor(arg0: number, arg1: number, arg2: number, arg3: number);

getWidth(): number;

getHeight(): number;

getNumBands(): number;

abstract getNumDataElements(): number;

getDataType(): number;

getTransferType(): number;

getPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): number[];

abstract getDataElements(arg0: number, arg1: number, arg2: Object, arg3: DataBuffer): Object;

getDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Object, arg5: DataBuffer): Object;

abstract setDataElements(arg0: number, arg1: number, arg2: Object, arg3: DataBuffer): void;

setDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Object, arg5: DataBuffer): void;

getPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): number[];

getPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): number[];

getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): number[];

getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): number[];

getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): number[];

abstract getSample(arg0: number, arg1: number, arg2: number, arg3: DataBuffer): number;

getSampleFloat(arg0: number, arg1: number, arg2: number, arg3: DataBuffer): number;

getSampleDouble(arg0: number, arg1: number, arg2: number, arg3: DataBuffer): number;

getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): number[];

getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): number[];

getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): number[];

setPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): void;

setPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): void;

setPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): void;

abstract setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: DataBuffer): void;

setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: DataBuffer): void;

setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: DataBuffer): void;

setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): void;

setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): void;

setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): void;

abstract createCompatibleSampleModel(arg0: number, arg1: number): SampleModel;

abstract createSubsetSampleModel(arg0: number[]): SampleModel;

abstract createDataBuffer(): DataBuffer;

abstract getSampleSize(): number[];

abstract getSampleSize(arg0: number): number;
 }

export class ShortLookupTable extends LookupTable {
constructor(arg0: number, arg1: Array<Array<number>>);
constructor(arg0: number, arg1: number[]);

getTable(): Array<Array<number>>;

lookupPixel(arg0: number[], arg1: number[]): number[];

lookupPixel(arg0: number[], arg1: number[]): number[];
 }

export class SinglePixelPackedSampleModel extends SampleModel {
constructor(arg0: number, arg1: number, arg2: number, arg3: number[]);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]);

getNumDataElements(): number;

createCompatibleSampleModel(arg0: number, arg1: number): SampleModel;

createDataBuffer(): DataBuffer;

getSampleSize(): number[];

getSampleSize(arg0: number): number;

getOffset(arg0: number, arg1: number): number;

getBitOffsets(): number[];

getBitMasks(): number[];

getScanlineStride(): number;

createSubsetSampleModel(arg0: number[]): SampleModel;

getDataElements(arg0: number, arg1: number, arg2: Object, arg3: DataBuffer): Object;

getPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): number[];

getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): number[];

getSample(arg0: number, arg1: number, arg2: number, arg3: DataBuffer): number;

getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): number[];

setDataElements(arg0: number, arg1: number, arg2: Object, arg3: DataBuffer): void;

setPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): void;

setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: DataBuffer): void;

setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): void;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export interface TileObserver {

tileUpdate(arg0: WritableRenderedImage, arg1: number, arg2: number, arg3: boolean): void;
 }

export abstract class VolatileImage extends Image implements Transparency {
static IMAGE_OK:number
static IMAGE_RESTORED:number
static IMAGE_INCOMPATIBLE:number

abstract getSnapshot(): BufferedImage;

abstract getWidth(): number;

abstract getHeight(): number;

getSource(): ImageProducer;

getGraphics(): Graphics;

abstract createGraphics(): Graphics2D;

abstract validate(arg0: GraphicsConfiguration): number;

abstract contentsLost(): boolean;

abstract getCapabilities(): ImageCapabilities;

getTransparency(): number;
 }

export class WritableRaster extends Raster {

getWritableParent(): WritableRaster;

createWritableTranslatedChild(arg0: number, arg1: number): WritableRaster;

createWritableChild(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): WritableRaster;

setDataElements(arg0: number, arg1: number, arg2: Object): void;

setDataElements(arg0: number, arg1: number, arg2: Raster): void;

setDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Object): void;

setRect(arg0: Raster): void;

setRect(arg0: number, arg1: number, arg2: Raster): void;

setPixel(arg0: number, arg1: number, arg2: number[]): void;

setPixel(arg0: number, arg1: number, arg2: number[]): void;

setPixel(arg0: number, arg1: number, arg2: number[]): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;

setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;

setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;

setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;

setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;

setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;

setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;

setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
 }

export interface WritableRenderedImage extends RenderedImage {

addTileObserver(arg0: TileObserver): void;

removeTileObserver(arg0: TileObserver): void;

getWritableTile(arg0: number, arg1: number): WritableRaster;

releaseWritableTile(arg0: number, arg1: number): void;

isTileWritable(arg0: number, arg1: number): boolean;

getWritableTileIndices(): Point[];

hasTileWriters(): boolean;

setData(arg0: Raster): void;
 }

}
