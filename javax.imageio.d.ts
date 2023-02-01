/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.awt.image.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.imageio.stream.d.ts" />
/// <reference path="javax.imageio.event.d.ts" />
/// <reference path="javax.imageio.spi.d.ts" />
/// <reference path="java.awt.color.d.ts" />
/// <reference path="javax.imageio.metadata.d.ts" />
declare module '@afterburnerhq/javax.imageio' { 
import { Rectangle, Point, Dimension } from '@afterburnerhq/java.awt'
import { Throwable, String } from '@afterburnerhq/java.lang'
import { SampleModel, RenderedImage, BufferedImage, ColorModel, Raster } from '@afterburnerhq/java.awt.image'
import { Iterator, Locale, List, Set } from '@afterburnerhq/java.util'
import { URL } from '@afterburnerhq/java.net'
import { IOException, File, InputStream, OutputStream } from '@afterburnerhq/java.io'
import { ImageOutputStream, ImageInputStream } from '@afterburnerhq/javax.imageio.stream'
import { IIOReadUpdateListener, IIOWriteWarningListener, IIOReadWarningListener, IIOReadProgressListener, IIOWriteProgressListener } from '@afterburnerhq/javax.imageio.event'
import { ImageWriterSpi, ImageReaderSpi } from '@afterburnerhq/javax.imageio.spi'
import { ColorSpace } from '@afterburnerhq/java.awt.color'
import { IIOMetadata } from '@afterburnerhq/javax.imageio.metadata'
export class IIOException extends IOException {
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
 }

export class IIOImage {
constructor(arg0: RenderedImage, arg1: List<BufferedImage>, arg2: IIOMetadata);
constructor(arg0: Raster, arg1: List<BufferedImage>, arg2: IIOMetadata);

getRenderedImage(): RenderedImage;

setRenderedImage(arg0: RenderedImage): void;

hasRaster(): boolean;

getRaster(): Raster;

setRaster(arg0: Raster): void;

getNumThumbnails(): number;

getThumbnail(arg0: number): BufferedImage;

getThumbnails(): List<BufferedImage>;

setThumbnails(arg0: List<BufferedImage>): void;

getMetadata(): IIOMetadata;

setMetadata(arg0: IIOMetadata): void;
 }

export abstract class IIOParam {

setSourceRegion(arg0: Rectangle): void;

getSourceRegion(): Rectangle;

setSourceSubsampling(arg0: number, arg1: number, arg2: number, arg3: number): void;

getSourceXSubsampling(): number;

getSourceYSubsampling(): number;

getSubsamplingXOffset(): number;

getSubsamplingYOffset(): number;

setSourceBands(arg0: number[]): void;

getSourceBands(): number[];

setDestinationType(arg0: ImageTypeSpecifier): void;

getDestinationType(): ImageTypeSpecifier;

setDestinationOffset(arg0: Point): void;

getDestinationOffset(): Point;

setController(arg0: IIOParamController): void;

getController(): IIOParamController;

getDefaultController(): IIOParamController;

hasController(): boolean;

activateController(): boolean;
 }

export interface IIOParamController {

activate(arg0: IIOParam): boolean;
 }

export class ImageIO {

static scanForPlugins(): void;

static setUseCache(arg0: boolean): void;

static getUseCache(): boolean;

static setCacheDirectory(arg0: File): void;

static getCacheDirectory(): File;

static createImageInputStream(arg0: Object): ImageInputStream;

static createImageOutputStream(arg0: Object): ImageOutputStream;

static getReaderFormatNames(): String[];

static getReaderMIMETypes(): String[];

static getReaderFileSuffixes(): String[];

static getImageReaders(arg0: Object): Iterator<ImageReader>;

static getImageReadersByFormatName(arg0: String): Iterator<ImageReader>;

static getImageReadersBySuffix(arg0: String): Iterator<ImageReader>;

static getImageReadersByMIMEType(arg0: String): Iterator<ImageReader>;

static getWriterFormatNames(): String[];

static getWriterMIMETypes(): String[];

static getWriterFileSuffixes(): String[];

static getImageWritersByFormatName(arg0: String): Iterator<ImageWriter>;

static getImageWritersBySuffix(arg0: String): Iterator<ImageWriter>;

static getImageWritersByMIMEType(arg0: String): Iterator<ImageWriter>;

static getImageWriter(arg0: ImageReader): ImageWriter;

static getImageReader(arg0: ImageWriter): ImageReader;

static getImageWriters(arg0: ImageTypeSpecifier, arg1: String): Iterator<ImageWriter>;

static getImageTranscoders(arg0: ImageReader, arg1: ImageWriter): Iterator<ImageTranscoder>;

static read(arg0: File): BufferedImage;

static read(arg0: InputStream): BufferedImage;

static read(arg0: URL): BufferedImage;

static read(arg0: ImageInputStream): BufferedImage;

static write(arg0: RenderedImage, arg1: String, arg2: ImageOutputStream): boolean;

static write(arg0: RenderedImage, arg1: String, arg2: File): boolean;

static write(arg0: RenderedImage, arg1: String, arg2: OutputStream): boolean;
 }

export class ImageReadParam extends IIOParam {
constructor();

setDestinationType(arg0: ImageTypeSpecifier): void;

setDestination(arg0: BufferedImage): void;

getDestination(): BufferedImage;

setDestinationBands(arg0: number[]): void;

getDestinationBands(): number[];

canSetSourceRenderSize(): boolean;

setSourceRenderSize(arg0: Dimension): void;

getSourceRenderSize(): Dimension;

setSourceProgressivePasses(arg0: number, arg1: number): void;

getSourceMinProgressivePass(): number;

getSourceMaxProgressivePass(): number;

getSourceNumProgressivePasses(): number;
 }

export abstract class ImageReader {

getFormatName(): String;

getOriginatingProvider(): ImageReaderSpi;

setInput(arg0: Object, arg1: boolean, arg2: boolean): void;

setInput(arg0: Object, arg1: boolean): void;

setInput(arg0: Object): void;

getInput(): Object;

isSeekForwardOnly(): boolean;

isIgnoringMetadata(): boolean;

getMinIndex(): number;

getAvailableLocales(): Locale[];

setLocale(arg0: Locale): void;

getLocale(): Locale;

abstract getNumImages(arg0: boolean): number;

abstract getWidth(arg0: number): number;

abstract getHeight(arg0: number): number;

isRandomAccessEasy(arg0: number): boolean;

getAspectRatio(arg0: number): number;

getRawImageType(arg0: number): ImageTypeSpecifier;

abstract getImageTypes(arg0: number): Iterator<ImageTypeSpecifier>;

getDefaultReadParam(): ImageReadParam;

abstract getStreamMetadata(): IIOMetadata;

getStreamMetadata(arg0: String, arg1: Set<String>): IIOMetadata;

abstract getImageMetadata(arg0: number): IIOMetadata;

getImageMetadata(arg0: number, arg1: String, arg2: Set<String>): IIOMetadata;

read(arg0: number): BufferedImage;

abstract read(arg0: number, arg1: ImageReadParam): BufferedImage;

readAll(arg0: number, arg1: ImageReadParam): IIOImage;

readAll(arg0: Iterator<ImageReadParam>): Iterator<IIOImage>;

canReadRaster(): boolean;

readRaster(arg0: number, arg1: ImageReadParam): Raster;

isImageTiled(arg0: number): boolean;

getTileWidth(arg0: number): number;

getTileHeight(arg0: number): number;

getTileGridXOffset(arg0: number): number;

getTileGridYOffset(arg0: number): number;

readTile(arg0: number, arg1: number, arg2: number): BufferedImage;

readTileRaster(arg0: number, arg1: number, arg2: number): Raster;

readAsRenderedImage(arg0: number, arg1: ImageReadParam): RenderedImage;

readerSupportsThumbnails(): boolean;

hasThumbnails(arg0: number): boolean;

getNumThumbnails(arg0: number): number;

getThumbnailWidth(arg0: number, arg1: number): number;

getThumbnailHeight(arg0: number, arg1: number): number;

readThumbnail(arg0: number, arg1: number): BufferedImage;

abort(): void;

addIIOReadWarningListener(arg0: IIOReadWarningListener): void;

removeIIOReadWarningListener(arg0: IIOReadWarningListener): void;

removeAllIIOReadWarningListeners(): void;

addIIOReadProgressListener(arg0: IIOReadProgressListener): void;

removeIIOReadProgressListener(arg0: IIOReadProgressListener): void;

removeAllIIOReadProgressListeners(): void;

addIIOReadUpdateListener(arg0: IIOReadUpdateListener): void;

removeIIOReadUpdateListener(arg0: IIOReadUpdateListener): void;

removeAllIIOReadUpdateListeners(): void;

reset(): void;

dispose(): void;
 }

export interface ImageTranscoder {

convertStreamMetadata(arg0: IIOMetadata, arg1: ImageWriteParam): IIOMetadata;

convertImageMetadata(arg0: IIOMetadata, arg1: ImageTypeSpecifier, arg2: ImageWriteParam): IIOMetadata;
 }

export class ImageTypeSpecifier {
constructor(arg0: ColorModel, arg1: SampleModel);
constructor(arg0: RenderedImage);

static createPacked(arg0: ColorSpace, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): ImageTypeSpecifier;

static createInterleaved(arg0: ColorSpace, arg1: number[], arg2: number, arg3: boolean, arg4: boolean): ImageTypeSpecifier;

static createBanded(arg0: ColorSpace, arg1: number[], arg2: number[], arg3: number, arg4: boolean, arg5: boolean): ImageTypeSpecifier;

static createGrayscale(arg0: number, arg1: number, arg2: boolean): ImageTypeSpecifier;

static createGrayscale(arg0: number, arg1: number, arg2: boolean, arg3: boolean): ImageTypeSpecifier;

static createIndexed(arg0: number[], arg1: number[], arg2: number[], arg3: number[], arg4: number, arg5: number): ImageTypeSpecifier;

static createFromBufferedImageType(arg0: number): ImageTypeSpecifier;

static createFromRenderedImage(arg0: RenderedImage): ImageTypeSpecifier;

getBufferedImageType(): number;

getNumComponents(): number;

getNumBands(): number;

getBitsPerBand(arg0: number): number;

getSampleModel(): SampleModel;

getSampleModel(arg0: number, arg1: number): SampleModel;

getColorModel(): ColorModel;

createBufferedImage(arg0: number, arg1: number): BufferedImage;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class ImageWriteParam extends IIOParam {
static MODE_DISABLED:number
static MODE_DEFAULT:number
static MODE_EXPLICIT:number
static MODE_COPY_FROM_METADATA:number
constructor(arg0: Locale);

getLocale(): Locale;

canWriteTiles(): boolean;

canOffsetTiles(): boolean;

setTilingMode(arg0: number): void;

getTilingMode(): number;

getPreferredTileSizes(): Dimension[];

setTiling(arg0: number, arg1: number, arg2: number, arg3: number): void;

unsetTiling(): void;

getTileWidth(): number;

getTileHeight(): number;

getTileGridXOffset(): number;

getTileGridYOffset(): number;

canWriteProgressive(): boolean;

setProgressiveMode(arg0: number): void;

getProgressiveMode(): number;

canWriteCompressed(): boolean;

setCompressionMode(arg0: number): void;

getCompressionMode(): number;

getCompressionTypes(): String[];

setCompressionType(arg0: String): void;

getCompressionType(): String;

unsetCompression(): void;

getLocalizedCompressionTypeName(): String;

isCompressionLossless(): boolean;

setCompressionQuality(arg0: number): void;

getCompressionQuality(): number;

getBitRate(arg0: number): number;

getCompressionQualityDescriptions(): String[];

getCompressionQualityValues(): number[];
 }

export abstract class ImageWriter implements ImageTranscoder {

getOriginatingProvider(): ImageWriterSpi;

setOutput(arg0: Object): void;

getOutput(): Object;

getAvailableLocales(): Locale[];

setLocale(arg0: Locale): void;

getLocale(): Locale;

getDefaultWriteParam(): ImageWriteParam;

abstract getDefaultStreamMetadata(arg0: ImageWriteParam): IIOMetadata;

abstract getDefaultImageMetadata(arg0: ImageTypeSpecifier, arg1: ImageWriteParam): IIOMetadata;

abstract convertStreamMetadata(arg0: IIOMetadata, arg1: ImageWriteParam): IIOMetadata;

abstract convertImageMetadata(arg0: IIOMetadata, arg1: ImageTypeSpecifier, arg2: ImageWriteParam): IIOMetadata;

getNumThumbnailsSupported(arg0: ImageTypeSpecifier, arg1: ImageWriteParam, arg2: IIOMetadata, arg3: IIOMetadata): number;

getPreferredThumbnailSizes(arg0: ImageTypeSpecifier, arg1: ImageWriteParam, arg2: IIOMetadata, arg3: IIOMetadata): Dimension[];

canWriteRasters(): boolean;

abstract write(arg0: IIOMetadata, arg1: IIOImage, arg2: ImageWriteParam): void;

write(arg0: IIOImage): void;

write(arg0: RenderedImage): void;

canWriteSequence(): boolean;

prepareWriteSequence(arg0: IIOMetadata): void;

writeToSequence(arg0: IIOImage, arg1: ImageWriteParam): void;

endWriteSequence(): void;

canReplaceStreamMetadata(): boolean;

replaceStreamMetadata(arg0: IIOMetadata): void;

canReplaceImageMetadata(arg0: number): boolean;

replaceImageMetadata(arg0: number, arg1: IIOMetadata): void;

canInsertImage(arg0: number): boolean;

writeInsert(arg0: number, arg1: IIOImage, arg2: ImageWriteParam): void;

canRemoveImage(arg0: number): boolean;

removeImage(arg0: number): void;

canWriteEmpty(): boolean;

prepareWriteEmpty(arg0: IIOMetadata, arg1: ImageTypeSpecifier, arg2: number, arg3: number, arg4: IIOMetadata, arg5: List<BufferedImage>, arg6: ImageWriteParam): void;

endWriteEmpty(): void;

canInsertEmpty(arg0: number): boolean;

prepareInsertEmpty(arg0: number, arg1: ImageTypeSpecifier, arg2: number, arg3: number, arg4: IIOMetadata, arg5: List<BufferedImage>, arg6: ImageWriteParam): void;

endInsertEmpty(): void;

canReplacePixels(arg0: number): boolean;

prepareReplacePixels(arg0: number, arg1: Rectangle): void;

replacePixels(arg0: RenderedImage, arg1: ImageWriteParam): void;

replacePixels(arg0: Raster, arg1: ImageWriteParam): void;

endReplacePixels(): void;

abort(): void;

addIIOWriteWarningListener(arg0: IIOWriteWarningListener): void;

removeIIOWriteWarningListener(arg0: IIOWriteWarningListener): void;

removeAllIIOWriteWarningListeners(): void;

addIIOWriteProgressListener(arg0: IIOWriteProgressListener): void;

removeIIOWriteProgressListener(arg0: IIOWriteProgressListener): void;

removeAllIIOWriteProgressListeners(): void;

reset(): void;

dispose(): void;
 }

}
