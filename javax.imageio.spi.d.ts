/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.awt.image.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.imageio.stream.d.ts" />
/// <reference path="javax.imageio.d.ts" />
/// <reference path="javax.imageio.metadata.d.ts" />
declare module '@afterburnerhq/javax.imageio.spi' { 
import { ClassLoader, Class, String } from '@afterburnerhq/java.lang'
import { Locale, Iterator } from '@afterburnerhq/java.util'
import { RenderedImage } from '@afterburnerhq/java.awt.image'
import { File } from '@afterburnerhq/java.io'
import { ImageOutputStream, ImageInputStream } from '@afterburnerhq/javax.imageio.stream'
import { ImageTranscoder, ImageWriter, ImageReader, ImageTypeSpecifier } from '@afterburnerhq/javax.imageio'
import { IIOMetadataFormat } from '@afterburnerhq/javax.imageio.metadata'
export class IIORegistry extends ServiceRegistry {

static getDefaultInstance(): IIORegistry;

registerApplicationClasspathSpis(): void;
 }

export abstract class IIOServiceProvider implements RegisterableService {
constructor(arg0: String, arg1: String);
constructor();

onRegistration(arg0: ServiceRegistry, arg1: Class<any>): void;

onDeregistration(arg0: ServiceRegistry, arg1: Class<any>): void;

getVendorName(): String;

getVersion(): String;

abstract getDescription(arg0: Locale): String;
 }

export abstract class ImageInputStreamSpi extends IIOServiceProvider {
constructor(arg0: String, arg1: String, arg2: Class<any>);

getInputClass(): Class<any>;

canUseCacheFile(): boolean;

needsCacheFile(): boolean;

abstract createInputStreamInstance(arg0: Object, arg1: boolean, arg2: File): ImageInputStream;

createInputStreamInstance(arg0: Object): ImageInputStream;
 }

export abstract class ImageOutputStreamSpi extends IIOServiceProvider {
constructor(arg0: String, arg1: String, arg2: Class<any>);

getOutputClass(): Class<any>;

canUseCacheFile(): boolean;

needsCacheFile(): boolean;

abstract createOutputStreamInstance(arg0: Object, arg1: boolean, arg2: File): ImageOutputStream;

createOutputStreamInstance(arg0: Object): ImageOutputStream;
 }

export abstract class ImageReaderSpi extends ImageReaderWriterSpi {
static STANDARD_INPUT_TYPE:Class<any>[]
constructor(arg0: String, arg1: String, arg2: String[], arg3: String[], arg4: String[], arg5: String, arg6: Class<any>[], arg7: String[], arg8: boolean, arg9: String, arg10: String, arg11: String[], arg12: String[], arg13: boolean, arg14: String, arg15: String, arg16: String[], arg17: String[]);

getInputTypes(): Class<any>[];

abstract canDecodeInput(arg0: Object): boolean;

createReaderInstance(): ImageReader;

abstract createReaderInstance(arg0: Object): ImageReader;

isOwnReader(arg0: ImageReader): boolean;

getImageWriterSpiNames(): String[];
 }

export abstract class ImageReaderWriterSpi extends IIOServiceProvider {
constructor(arg0: String, arg1: String, arg2: String[], arg3: String[], arg4: String[], arg5: String, arg6: boolean, arg7: String, arg8: String, arg9: String[], arg10: String[], arg11: boolean, arg12: String, arg13: String, arg14: String[], arg15: String[]);
constructor();

getFormatNames(): String[];

getFileSuffixes(): String[];

getMIMETypes(): String[];

getPluginClassName(): String;

isStandardStreamMetadataFormatSupported(): boolean;

getNativeStreamMetadataFormatName(): String;

getExtraStreamMetadataFormatNames(): String[];

isStandardImageMetadataFormatSupported(): boolean;

getNativeImageMetadataFormatName(): String;

getExtraImageMetadataFormatNames(): String[];

getStreamMetadataFormat(arg0: String): IIOMetadataFormat;

getImageMetadataFormat(arg0: String): IIOMetadataFormat;
 }

export abstract class ImageTranscoderSpi extends IIOServiceProvider {
constructor(arg0: String, arg1: String);

abstract getReaderServiceProviderName(): String;

abstract getWriterServiceProviderName(): String;

abstract createTranscoderInstance(): ImageTranscoder;
 }

export abstract class ImageWriterSpi extends ImageReaderWriterSpi {
static STANDARD_OUTPUT_TYPE:Class<any>[]
constructor(arg0: String, arg1: String, arg2: String[], arg3: String[], arg4: String[], arg5: String, arg6: Class<any>[], arg7: String[], arg8: boolean, arg9: String, arg10: String, arg11: String[], arg12: String[], arg13: boolean, arg14: String, arg15: String, arg16: String[], arg17: String[]);

isFormatLossless(): boolean;

getOutputTypes(): Class<any>[];

abstract canEncodeImage(arg0: ImageTypeSpecifier): boolean;

canEncodeImage(arg0: RenderedImage): boolean;

createWriterInstance(): ImageWriter;

abstract createWriterInstance(arg0: Object): ImageWriter;

isOwnWriter(arg0: ImageWriter): boolean;

getImageReaderSpiNames(): String[];
 }

export interface RegisterableService {

onRegistration(arg0: ServiceRegistry, arg1: Class<any>): void;

onDeregistration(arg0: ServiceRegistry, arg1: Class<any>): void;
 }

export class ServiceRegistry {
constructor(arg0: Iterator<Class<any>>);

static lookupProviders<T extends Object>(arg0: Class<T>, arg1: ClassLoader): Iterator<T>;

static lookupProviders<T extends Object>(arg0: Class<T>): Iterator<T>;

getCategories(): Iterator<Class<any>>;

registerServiceProvider<T extends Object>(arg0: T, arg1: Class<T>): boolean;

registerServiceProvider(arg0: Object): void;

registerServiceProviders(arg0: Iterator<any>): void;

deregisterServiceProvider<T extends Object>(arg0: T, arg1: Class<T>): boolean;

deregisterServiceProvider(arg0: Object): void;

contains(arg0: Object): boolean;

getServiceProviders<T extends Object>(arg0: Class<T>, arg1: boolean): Iterator<T>;

getServiceProviders<T extends Object>(arg0: Class<T>, arg1: ServiceRegistry.Filter, arg2: boolean): Iterator<T>;

getServiceProviderByClass<T extends Object>(arg0: Class<T>): T;

setOrdering<T extends Object>(arg0: Class<T>, arg1: T, arg2: T): boolean;

unsetOrdering<T extends Object>(arg0: Class<T>, arg1: T, arg2: T): boolean;

deregisterAll(arg0: Class<any>): void;

deregisterAll(): void;

finalize(): void;
 }
export namespace ServiceRegistry { 
export interface Filter {

filter(arg0: Object): boolean;
 }

}

}
