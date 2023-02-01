/// <reference path="java.util.d.ts" />
/// <reference path="java.awt.image.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="javax.imageio.d.ts" />
declare module '@afterburnerhq/javax.imageio.event' { 
import { EventListener } from '@afterburnerhq/java.util'
import { BufferedImage } from '@afterburnerhq/java.awt.image'
import { String } from '@afterburnerhq/java.lang'
import { ImageReader, ImageWriter } from '@afterburnerhq/javax.imageio'
export interface IIOReadProgressListener extends EventListener {

sequenceStarted(arg0: ImageReader, arg1: number): void;

sequenceComplete(arg0: ImageReader): void;

imageStarted(arg0: ImageReader, arg1: number): void;

imageProgress(arg0: ImageReader, arg1: number): void;

imageComplete(arg0: ImageReader): void;

thumbnailStarted(arg0: ImageReader, arg1: number, arg2: number): void;

thumbnailProgress(arg0: ImageReader, arg1: number): void;

thumbnailComplete(arg0: ImageReader): void;

readAborted(arg0: ImageReader): void;
 }

export interface IIOReadUpdateListener extends EventListener {

passStarted(arg0: ImageReader, arg1: BufferedImage, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number[]): void;

imageUpdate(arg0: ImageReader, arg1: BufferedImage, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number[]): void;

passComplete(arg0: ImageReader, arg1: BufferedImage): void;

thumbnailPassStarted(arg0: ImageReader, arg1: BufferedImage, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number[]): void;

thumbnailUpdate(arg0: ImageReader, arg1: BufferedImage, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number[]): void;

thumbnailPassComplete(arg0: ImageReader, arg1: BufferedImage): void;
 }

export interface IIOReadWarningListener extends EventListener {

warningOccurred(arg0: ImageReader, arg1: String): void;
 }

export interface IIOWriteProgressListener extends EventListener {

imageStarted(arg0: ImageWriter, arg1: number): void;

imageProgress(arg0: ImageWriter, arg1: number): void;

imageComplete(arg0: ImageWriter): void;

thumbnailStarted(arg0: ImageWriter, arg1: number, arg2: number): void;

thumbnailProgress(arg0: ImageWriter, arg1: number): void;

thumbnailComplete(arg0: ImageWriter): void;

writeAborted(arg0: ImageWriter): void;
 }

export interface IIOWriteWarningListener extends EventListener {

warningOccurred(arg0: ImageWriter, arg1: number, arg2: String): void;
 }

}
