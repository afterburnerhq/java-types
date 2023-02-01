/// <reference path="java.awt.d.ts" />
/// <reference path="java.awt.image.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.awt.geom.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/java.awt.image.renderable' { 
import { RenderingHints, Shape } from '@afterburnerhq/java.awt'
import { RenderedImage, ImageConsumer, ImageProducer } from '@afterburnerhq/java.awt.image'
import { Cloneable, Class, String, Runnable } from '@afterburnerhq/java.lang'
import { Vector } from '@afterburnerhq/java.util'
import { Rectangle2D, AffineTransform } from '@afterburnerhq/java.awt.geom'
import { Serializable } from '@afterburnerhq/java.io'
export interface ContextualRenderedImageFactory extends RenderedImageFactory {

mapRenderContext(arg0: number, arg1: RenderContext, arg2: ParameterBlock, arg3: RenderableImage): RenderContext;

create(arg0: RenderContext, arg1: ParameterBlock): RenderedImage;

getBounds2D(arg0: ParameterBlock): Rectangle2D;

getProperty(arg0: ParameterBlock, arg1: String): Object;

getPropertyNames(): String[];

isDynamic(): boolean;
 }

export class ParameterBlock implements Cloneable, Serializable {
constructor();
constructor(arg0: Vector<Object>);
constructor(arg0: Vector<Object>, arg1: Vector<Object>);

shallowClone(): Object;

clone(): Object;

addSource(arg0: Object): ParameterBlock;

getSource(arg0: number): Object;

setSource(arg0: Object, arg1: number): ParameterBlock;

getRenderedSource(arg0: number): RenderedImage;

getRenderableSource(arg0: number): RenderableImage;

getNumSources(): number;

getSources(): Vector<Object>;

setSources(arg0: Vector<Object>): void;

removeSources(): void;

getNumParameters(): number;

getParameters(): Vector<Object>;

setParameters(arg0: Vector<Object>): void;

removeParameters(): void;

add(arg0: Object): ParameterBlock;

add(arg0: number): ParameterBlock;

add(arg0: String): ParameterBlock;

add(arg0: number): ParameterBlock;

add(arg0: number): ParameterBlock;

add(arg0: number): ParameterBlock;

add(arg0: number): ParameterBlock;

add(arg0: number): ParameterBlock;

set(arg0: Object, arg1: number): ParameterBlock;

set(arg0: number, arg1: number): ParameterBlock;

set(arg0: String, arg1: number): ParameterBlock;

set(arg0: number, arg1: number): ParameterBlock;

set(arg0: number, arg1: number): ParameterBlock;

set(arg0: number, arg1: number): ParameterBlock;

set(arg0: number, arg1: number): ParameterBlock;

set(arg0: number, arg1: number): ParameterBlock;

getObjectParameter(arg0: number): Object;

getByteParameter(arg0: number): number;

getCharParameter(arg0: number): String;

getShortParameter(arg0: number): number;

getIntParameter(arg0: number): number;

getLongParameter(arg0: number): number;

getFloatParameter(arg0: number): number;

getDoubleParameter(arg0: number): number;

getParamClasses(): Class<any>[];
 }

export class RenderContext implements Cloneable {
constructor(arg0: AffineTransform, arg1: Shape, arg2: RenderingHints);
constructor(arg0: AffineTransform);
constructor(arg0: AffineTransform, arg1: RenderingHints);
constructor(arg0: AffineTransform, arg1: Shape);

getRenderingHints(): RenderingHints;

setRenderingHints(arg0: RenderingHints): void;

setTransform(arg0: AffineTransform): void;

preConcatenateTransform(arg0: AffineTransform): void;

preConcetenateTransform(arg0: AffineTransform): void;

concatenateTransform(arg0: AffineTransform): void;

concetenateTransform(arg0: AffineTransform): void;

getTransform(): AffineTransform;

setAreaOfInterest(arg0: Shape): void;

getAreaOfInterest(): Shape;

clone(): Object;
 }

export namespace RenderableImage { 
const HINTS_OBSERVED:String
}

export interface RenderableImage {
HINTS_OBSERVED:String

getSources(): Vector<RenderableImage>;

getProperty(arg0: String): Object;

getPropertyNames(): String[];

isDynamic(): boolean;

getWidth(): number;

getHeight(): number;

getMinX(): number;

getMinY(): number;

createScaledRendering(arg0: number, arg1: number, arg2: RenderingHints): RenderedImage;

createDefaultRendering(): RenderedImage;

createRendering(arg0: RenderContext): RenderedImage;
 }

export class RenderableImageOp implements RenderableImage {
constructor(arg0: ContextualRenderedImageFactory, arg1: ParameterBlock);

getSources(): Vector<RenderableImage>;

getProperty(arg0: String): Object;

getPropertyNames(): String[];

isDynamic(): boolean;

getWidth(): number;

getHeight(): number;

getMinX(): number;

getMinY(): number;

setParameterBlock(arg0: ParameterBlock): ParameterBlock;

getParameterBlock(): ParameterBlock;

createScaledRendering(arg0: number, arg1: number, arg2: RenderingHints): RenderedImage;

createDefaultRendering(): RenderedImage;

createRendering(arg0: RenderContext): RenderedImage;
 }

export class RenderableImageProducer implements ImageProducer, Runnable {
constructor(arg0: RenderableImage, arg1: RenderContext);

setRenderContext(arg0: RenderContext): void;

addConsumer(arg0: ImageConsumer): void;

isConsumer(arg0: ImageConsumer): boolean;

removeConsumer(arg0: ImageConsumer): void;

startProduction(arg0: ImageConsumer): void;

requestTopDownLeftRightResend(arg0: ImageConsumer): void;

run(): void;
 }

export interface RenderedImageFactory {

create(arg0: ParameterBlock, arg1: RenderingHints): RenderedImage;
 }

}
