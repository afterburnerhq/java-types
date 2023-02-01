/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/java.awt.geom' { 
import { Rectangle, Shape } from '@afterburnerhq/java.awt'
import { Cloneable, RuntimeException, String, Exception } from '@afterburnerhq/java.lang'
import { Serializable } from '@afterburnerhq/java.io'
export class AffineTransform implements Cloneable, Serializable {
static TYPE_IDENTITY:number
static TYPE_TRANSLATION:number
static TYPE_UNIFORM_SCALE:number
static TYPE_GENERAL_SCALE:number
static TYPE_MASK_SCALE:number
static TYPE_FLIP:number
static TYPE_QUADRANT_ROTATION:number
static TYPE_GENERAL_ROTATION:number
static TYPE_MASK_ROTATION:number
static TYPE_GENERAL_TRANSFORM:number
constructor();
constructor(arg0: AffineTransform);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
constructor(arg0: number[]);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
constructor(arg0: number[]);

static getTranslateInstance(arg0: number, arg1: number): AffineTransform;

static getRotateInstance(arg0: number): AffineTransform;

static getRotateInstance(arg0: number, arg1: number, arg2: number): AffineTransform;

static getRotateInstance(arg0: number, arg1: number): AffineTransform;

static getRotateInstance(arg0: number, arg1: number, arg2: number, arg3: number): AffineTransform;

static getQuadrantRotateInstance(arg0: number): AffineTransform;

static getQuadrantRotateInstance(arg0: number, arg1: number, arg2: number): AffineTransform;

static getScaleInstance(arg0: number, arg1: number): AffineTransform;

static getShearInstance(arg0: number, arg1: number): AffineTransform;

getType(): number;

getDeterminant(): number;

getMatrix(arg0: number[]): void;

getScaleX(): number;

getScaleY(): number;

getShearX(): number;

getShearY(): number;

getTranslateX(): number;

getTranslateY(): number;

translate(arg0: number, arg1: number): void;

rotate(arg0: number): void;

rotate(arg0: number, arg1: number, arg2: number): void;

rotate(arg0: number, arg1: number): void;

rotate(arg0: number, arg1: number, arg2: number, arg3: number): void;

quadrantRotate(arg0: number): void;

quadrantRotate(arg0: number, arg1: number, arg2: number): void;

scale(arg0: number, arg1: number): void;

shear(arg0: number, arg1: number): void;

setToIdentity(): void;

setToTranslation(arg0: number, arg1: number): void;

setToRotation(arg0: number): void;

setToRotation(arg0: number, arg1: number, arg2: number): void;

setToRotation(arg0: number, arg1: number): void;

setToRotation(arg0: number, arg1: number, arg2: number, arg3: number): void;

setToQuadrantRotation(arg0: number): void;

setToQuadrantRotation(arg0: number, arg1: number, arg2: number): void;

setToScale(arg0: number, arg1: number): void;

setToShear(arg0: number, arg1: number): void;

setTransform(arg0: AffineTransform): void;

setTransform(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

concatenate(arg0: AffineTransform): void;

preConcatenate(arg0: AffineTransform): void;

createInverse(): AffineTransform;

invert(): void;

transform(arg0: Point2D, arg1: Point2D): Point2D;

transform(arg0: Point2D[], arg1: number, arg2: Point2D[], arg3: number, arg4: number): void;

transform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;

transform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;

transform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;

transform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;

inverseTransform(arg0: Point2D, arg1: Point2D): Point2D;

inverseTransform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;

deltaTransform(arg0: Point2D, arg1: Point2D): Point2D;

deltaTransform(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): void;

createTransformedShape(arg0: Shape): Shape;
toString(): string;

isIdentity(): boolean;

clone(): Object;

hashCode(): number;

equals(arg0: Object): boolean;
 }

export abstract class Arc2D extends RectangularShape {
static OPEN:number
static CHORD:number
static PIE:number

abstract getAngleStart(): number;

abstract getAngleExtent(): number;

getArcType(): number;

getStartPoint(): Point2D;

getEndPoint(): Point2D;

abstract setArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

setArc(arg0: Point2D, arg1: Dimension2D, arg2: number, arg3: number, arg4: number): void;

setArc(arg0: Rectangle2D, arg1: number, arg2: number, arg3: number): void;

setArc(arg0: Arc2D): void;

setArcByCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

setArcByTangent(arg0: Point2D, arg1: Point2D, arg2: Point2D, arg3: number): void;

abstract setAngleStart(arg0: number): void;

abstract setAngleExtent(arg0: number): void;

setAngleStart(arg0: Point2D): void;

setAngles(arg0: number, arg1: number, arg2: number, arg3: number): void;

setAngles(arg0: Point2D, arg1: Point2D): void;

setArcType(arg0: number): void;

setFrame(arg0: number, arg1: number, arg2: number, arg3: number): void;

getBounds2D(): Rectangle2D;

containsAngle(arg0: number): boolean;

contains(arg0: number, arg1: number): boolean;

intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

contains(arg0: Rectangle2D): boolean;

getPathIterator(arg0: AffineTransform): PathIterator;

hashCode(): number;

equals(arg0: Object): boolean;
 }
export namespace Arc2D { 
export class Double extends Arc2D implements Serializable {
x:number
y:number
width:number
height:number
start:number
extent:number
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
constructor(arg0: Rectangle2D, arg1: number, arg2: number, arg3: number);

getX(): number;

getY(): number;

getWidth(): number;

getHeight(): number;

getAngleStart(): number;

getAngleExtent(): number;

isEmpty(): boolean;

setArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

setAngleStart(arg0: number): void;

setAngleExtent(arg0: number): void;
 }

export class Float extends Arc2D implements Serializable {
x:number
y:number
width:number
height:number
start:number
extent:number
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
constructor(arg0: Rectangle2D, arg1: number, arg2: number, arg3: number);

getX(): number;

getY(): number;

getWidth(): number;

getHeight(): number;

getAngleStart(): number;

getAngleExtent(): number;

isEmpty(): boolean;

setArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;

setAngleStart(arg0: number): void;

setAngleExtent(arg0: number): void;
 }

}

export class Area implements Shape, Cloneable {
constructor();
constructor(arg0: Shape);

add(arg0: Area): void;

subtract(arg0: Area): void;

intersect(arg0: Area): void;

exclusiveOr(arg0: Area): void;

reset(): void;

isEmpty(): boolean;

isPolygonal(): boolean;

isRectangular(): boolean;

isSingular(): boolean;

getBounds2D(): Rectangle2D;

getBounds(): Rectangle;

clone(): Object;

equals(arg0: Area): boolean;

transform(arg0: AffineTransform): void;

createTransformedArea(arg0: AffineTransform): Area;

contains(arg0: number, arg1: number): boolean;

contains(arg0: Point2D): boolean;

contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

contains(arg0: Rectangle2D): boolean;

intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

intersects(arg0: Rectangle2D): boolean;

getPathIterator(arg0: AffineTransform): PathIterator;

getPathIterator(arg0: AffineTransform, arg1: number): PathIterator;
 }

export abstract class CubicCurve2D implements Shape, Cloneable {

abstract getX1(): number;

abstract getY1(): number;

abstract getP1(): Point2D;

abstract getCtrlX1(): number;

abstract getCtrlY1(): number;

abstract getCtrlP1(): Point2D;

abstract getCtrlX2(): number;

abstract getCtrlY2(): number;

abstract getCtrlP2(): Point2D;

abstract getX2(): number;

abstract getY2(): number;

abstract getP2(): Point2D;

abstract setCurve(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;

setCurve(arg0: number[], arg1: number): void;

setCurve(arg0: Point2D, arg1: Point2D, arg2: Point2D, arg3: Point2D): void;

setCurve(arg0: Point2D[], arg1: number): void;

setCurve(arg0: CubicCurve2D): void;

static getFlatnessSq(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): number;

static getFlatness(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): number;

static getFlatnessSq(arg0: number[], arg1: number): number;

static getFlatness(arg0: number[], arg1: number): number;

getFlatnessSq(): number;

getFlatness(): number;

subdivide(arg0: CubicCurve2D, arg1: CubicCurve2D): void;

static subdivide(arg0: CubicCurve2D, arg1: CubicCurve2D, arg2: CubicCurve2D): void;

static subdivide(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number[], arg5: number): void;

static solveCubic(arg0: number[]): number;

static solveCubic(arg0: number[], arg1: number[]): number;

contains(arg0: number, arg1: number): boolean;

contains(arg0: Point2D): boolean;

intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

intersects(arg0: Rectangle2D): boolean;

contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

contains(arg0: Rectangle2D): boolean;

getBounds(): Rectangle;

getPathIterator(arg0: AffineTransform): PathIterator;

getPathIterator(arg0: AffineTransform, arg1: number): PathIterator;

clone(): Object;
 }
export namespace CubicCurve2D { 
export class Double extends CubicCurve2D implements Serializable {
x1:number
y1:number
ctrlx1:number
ctrly1:number
ctrlx2:number
ctrly2:number
x2:number
y2:number
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number);

getX1(): number;

getY1(): number;

getP1(): Point2D;

getCtrlX1(): number;

getCtrlY1(): number;

getCtrlP1(): Point2D;

getCtrlX2(): number;

getCtrlY2(): number;

getCtrlP2(): Point2D;

getX2(): number;

getY2(): number;

getP2(): Point2D;

setCurve(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;

getBounds2D(): Rectangle2D;
 }

export class Float extends CubicCurve2D implements Serializable {
x1:number
y1:number
ctrlx1:number
ctrly1:number
ctrlx2:number
ctrly2:number
x2:number
y2:number
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number);

getX1(): number;

getY1(): number;

getP1(): Point2D;

getCtrlX1(): number;

getCtrlY1(): number;

getCtrlP1(): Point2D;

getCtrlX2(): number;

getCtrlY2(): number;

getCtrlP2(): Point2D;

getX2(): number;

getY2(): number;

getP2(): Point2D;

setCurve(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;

setCurve(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;

getBounds2D(): Rectangle2D;
 }

}

export abstract class Dimension2D implements Cloneable {

abstract getWidth(): number;

abstract getHeight(): number;

abstract setSize(arg0: number, arg1: number): void;

setSize(arg0: Dimension2D): void;

clone(): Object;
 }

export abstract class Ellipse2D extends RectangularShape {

contains(arg0: number, arg1: number): boolean;

intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

getPathIterator(arg0: AffineTransform): PathIterator;

hashCode(): number;

equals(arg0: Object): boolean;
 }
export namespace Ellipse2D { 
export class Double extends Ellipse2D implements Serializable {
x:number
y:number
width:number
height:number
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number);

getX(): number;

getY(): number;

getWidth(): number;

getHeight(): number;

isEmpty(): boolean;

setFrame(arg0: number, arg1: number, arg2: number, arg3: number): void;

getBounds2D(): Rectangle2D;
 }

export class Float extends Ellipse2D implements Serializable {
x:number
y:number
width:number
height:number
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number);

getX(): number;

getY(): number;

getWidth(): number;

getHeight(): number;

isEmpty(): boolean;

setFrame(arg0: number, arg1: number, arg2: number, arg3: number): void;

setFrame(arg0: number, arg1: number, arg2: number, arg3: number): void;

getBounds2D(): Rectangle2D;
 }

}

export class FlatteningPathIterator implements PathIterator {
constructor(arg0: PathIterator, arg1: number);
constructor(arg0: PathIterator, arg1: number, arg2: number);

getFlatness(): number;

getRecursionLimit(): number;

getWindingRule(): number;

isDone(): boolean;

next(): void;

currentSegment(arg0: number[]): number;

currentSegment(arg0: number[]): number;
 }

export class GeneralPath extends Path2D.Float {
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: number);
constructor(arg0: Shape);
 }

export class IllegalPathStateException extends RuntimeException {
constructor();
constructor(arg0: String);
 }

export abstract class Line2D implements Shape, Cloneable {

abstract getX1(): number;

abstract getY1(): number;

abstract getP1(): Point2D;

abstract getX2(): number;

abstract getY2(): number;

abstract getP2(): Point2D;

abstract setLine(arg0: number, arg1: number, arg2: number, arg3: number): void;

setLine(arg0: Point2D, arg1: Point2D): void;

setLine(arg0: Line2D): void;

static relativeCCW(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;

relativeCCW(arg0: number, arg1: number): number;

relativeCCW(arg0: Point2D): number;

static linesIntersect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): boolean;

intersectsLine(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

intersectsLine(arg0: Line2D): boolean;

static ptSegDistSq(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;

static ptSegDist(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;

ptSegDistSq(arg0: number, arg1: number): number;

ptSegDistSq(arg0: Point2D): number;

ptSegDist(arg0: number, arg1: number): number;

ptSegDist(arg0: Point2D): number;

static ptLineDistSq(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;

static ptLineDist(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;

ptLineDistSq(arg0: number, arg1: number): number;

ptLineDistSq(arg0: Point2D): number;

ptLineDist(arg0: number, arg1: number): number;

ptLineDist(arg0: Point2D): number;

contains(arg0: number, arg1: number): boolean;

contains(arg0: Point2D): boolean;

intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

intersects(arg0: Rectangle2D): boolean;

contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

contains(arg0: Rectangle2D): boolean;

getBounds(): Rectangle;

getPathIterator(arg0: AffineTransform): PathIterator;

getPathIterator(arg0: AffineTransform, arg1: number): PathIterator;

clone(): Object;
 }
export namespace Line2D { 
export class Double extends Line2D implements Serializable {
x1:number
y1:number
x2:number
y2:number
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
constructor(arg0: Point2D, arg1: Point2D);

getX1(): number;

getY1(): number;

getP1(): Point2D;

getX2(): number;

getY2(): number;

getP2(): Point2D;

setLine(arg0: number, arg1: number, arg2: number, arg3: number): void;

getBounds2D(): Rectangle2D;
 }

export class Float extends Line2D implements Serializable {
x1:number
y1:number
x2:number
y2:number
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
constructor(arg0: Point2D, arg1: Point2D);

getX1(): number;

getY1(): number;

getP1(): Point2D;

getX2(): number;

getY2(): number;

getP2(): Point2D;

setLine(arg0: number, arg1: number, arg2: number, arg3: number): void;

setLine(arg0: number, arg1: number, arg2: number, arg3: number): void;

getBounds2D(): Rectangle2D;
 }

}

export class NoninvertibleTransformException extends Exception {
constructor(arg0: String);
 }

export abstract class Path2D implements Shape, Cloneable {
static WIND_EVEN_ODD:number
static WIND_NON_ZERO:number

abstract moveTo(arg0: number, arg1: number): void;

abstract lineTo(arg0: number, arg1: number): void;

abstract quadTo(arg0: number, arg1: number, arg2: number, arg3: number): void;

abstract curveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

closePath(): void;

append(arg0: Shape, arg1: boolean): void;

abstract append(arg0: PathIterator, arg1: boolean): void;

getWindingRule(): number;

setWindingRule(arg0: number): void;

getCurrentPoint(): Point2D;

reset(): void;

abstract transform(arg0: AffineTransform): void;

createTransformedShape(arg0: AffineTransform): Shape;

getBounds(): Rectangle;

static contains(arg0: PathIterator, arg1: number, arg2: number): boolean;

static contains(arg0: PathIterator, arg1: Point2D): boolean;

contains(arg0: number, arg1: number): boolean;

contains(arg0: Point2D): boolean;

static contains(arg0: PathIterator, arg1: number, arg2: number, arg3: number, arg4: number): boolean;

static contains(arg0: PathIterator, arg1: Rectangle2D): boolean;

contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

contains(arg0: Rectangle2D): boolean;

static intersects(arg0: PathIterator, arg1: number, arg2: number, arg3: number, arg4: number): boolean;

static intersects(arg0: PathIterator, arg1: Rectangle2D): boolean;

intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

intersects(arg0: Rectangle2D): boolean;

getPathIterator(arg0: AffineTransform, arg1: number): PathIterator;

abstract clone(): Object;

abstract trimToSize(): void;
 }
export namespace Path2D { 
export class Double extends Path2D implements Serializable {
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: number);
constructor(arg0: Shape);
constructor(arg0: Shape, arg1: AffineTransform);

trimToSize(): void;

moveTo(arg0: number, arg1: number): void;

lineTo(arg0: number, arg1: number): void;

quadTo(arg0: number, arg1: number, arg2: number, arg3: number): void;

curveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

append(arg0: PathIterator, arg1: boolean): void;

transform(arg0: AffineTransform): void;

getBounds2D(): Rectangle2D;

getPathIterator(arg0: AffineTransform): PathIterator;

clone(): Object;
 }

export class Float extends Path2D implements Serializable {
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: number);
constructor(arg0: Shape);
constructor(arg0: Shape, arg1: AffineTransform);

trimToSize(): void;

moveTo(arg0: number, arg1: number): void;

moveTo(arg0: number, arg1: number): void;

lineTo(arg0: number, arg1: number): void;

lineTo(arg0: number, arg1: number): void;

quadTo(arg0: number, arg1: number, arg2: number, arg3: number): void;

quadTo(arg0: number, arg1: number, arg2: number, arg3: number): void;

curveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

curveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

append(arg0: PathIterator, arg1: boolean): void;

transform(arg0: AffineTransform): void;

getBounds2D(): Rectangle2D;

getPathIterator(arg0: AffineTransform): PathIterator;

clone(): Object;
 }

}

export namespace PathIterator { 
const WIND_EVEN_ODD:number
const WIND_NON_ZERO:number
const SEG_MOVETO:number
const SEG_LINETO:number
const SEG_QUADTO:number
const SEG_CUBICTO:number
const SEG_CLOSE:number
}

export interface PathIterator {
WIND_EVEN_ODD:number
WIND_NON_ZERO:number
SEG_MOVETO:number
SEG_LINETO:number
SEG_QUADTO:number
SEG_CUBICTO:number
SEG_CLOSE:number

getWindingRule(): number;

isDone(): boolean;

next(): void;

currentSegment(arg0: number[]): number;

currentSegment(arg0: number[]): number;
 }

export abstract class Point2D implements Cloneable {

abstract getX(): number;

abstract getY(): number;

abstract setLocation(arg0: number, arg1: number): void;

setLocation(arg0: Point2D): void;

static distanceSq(arg0: number, arg1: number, arg2: number, arg3: number): number;

static distance(arg0: number, arg1: number, arg2: number, arg3: number): number;

distanceSq(arg0: number, arg1: number): number;

distanceSq(arg0: Point2D): number;

distance(arg0: number, arg1: number): number;

distance(arg0: Point2D): number;

clone(): Object;

hashCode(): number;

equals(arg0: Object): boolean;
 }
export namespace Point2D { 
export class Double extends Point2D implements Serializable {
x:number
y:number
constructor();
constructor(arg0: number, arg1: number);

getX(): number;

getY(): number;

setLocation(arg0: number, arg1: number): void;
toString(): string;
 }

export class Float extends Point2D implements Serializable {
x:number
y:number
constructor();
constructor(arg0: number, arg1: number);

getX(): number;

getY(): number;

setLocation(arg0: number, arg1: number): void;

setLocation(arg0: number, arg1: number): void;
toString(): string;
 }

}

export abstract class QuadCurve2D implements Shape, Cloneable {

abstract getX1(): number;

abstract getY1(): number;

abstract getP1(): Point2D;

abstract getCtrlX(): number;

abstract getCtrlY(): number;

abstract getCtrlPt(): Point2D;

abstract getX2(): number;

abstract getY2(): number;

abstract getP2(): Point2D;

abstract setCurve(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

setCurve(arg0: number[], arg1: number): void;

setCurve(arg0: Point2D, arg1: Point2D, arg2: Point2D): void;

setCurve(arg0: Point2D[], arg1: number): void;

setCurve(arg0: QuadCurve2D): void;

static getFlatnessSq(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;

static getFlatness(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;

static getFlatnessSq(arg0: number[], arg1: number): number;

static getFlatness(arg0: number[], arg1: number): number;

getFlatnessSq(): number;

getFlatness(): number;

subdivide(arg0: QuadCurve2D, arg1: QuadCurve2D): void;

static subdivide(arg0: QuadCurve2D, arg1: QuadCurve2D, arg2: QuadCurve2D): void;

static subdivide(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number[], arg5: number): void;

static solveQuadratic(arg0: number[]): number;

static solveQuadratic(arg0: number[], arg1: number[]): number;

contains(arg0: number, arg1: number): boolean;

contains(arg0: Point2D): boolean;

intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

intersects(arg0: Rectangle2D): boolean;

contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

contains(arg0: Rectangle2D): boolean;

getBounds(): Rectangle;

getPathIterator(arg0: AffineTransform): PathIterator;

getPathIterator(arg0: AffineTransform, arg1: number): PathIterator;

clone(): Object;
 }
export namespace QuadCurve2D { 
export class Double extends QuadCurve2D implements Serializable {
x1:number
y1:number
ctrlx:number
ctrly:number
x2:number
y2:number
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);

getX1(): number;

getY1(): number;

getP1(): Point2D;

getCtrlX(): number;

getCtrlY(): number;

getCtrlPt(): Point2D;

getX2(): number;

getY2(): number;

getP2(): Point2D;

setCurve(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBounds2D(): Rectangle2D;
 }

export class Float extends QuadCurve2D implements Serializable {
x1:number
y1:number
ctrlx:number
ctrly:number
x2:number
y2:number
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);

getX1(): number;

getY1(): number;

getP1(): Point2D;

getCtrlX(): number;

getCtrlY(): number;

getCtrlPt(): Point2D;

getX2(): number;

getY2(): number;

getP2(): Point2D;

setCurve(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

setCurve(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

getBounds2D(): Rectangle2D;
 }

}

export abstract class Rectangle2D extends RectangularShape {
static OUT_LEFT:number
static OUT_TOP:number
static OUT_RIGHT:number
static OUT_BOTTOM:number

abstract setRect(arg0: number, arg1: number, arg2: number, arg3: number): void;

setRect(arg0: Rectangle2D): void;

intersectsLine(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

intersectsLine(arg0: Line2D): boolean;

abstract outcode(arg0: number, arg1: number): number;

outcode(arg0: Point2D): number;

setFrame(arg0: number, arg1: number, arg2: number, arg3: number): void;

getBounds2D(): Rectangle2D;

contains(arg0: number, arg1: number): boolean;

intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

abstract createIntersection(arg0: Rectangle2D): Rectangle2D;

static intersect(arg0: Rectangle2D, arg1: Rectangle2D, arg2: Rectangle2D): void;

abstract createUnion(arg0: Rectangle2D): Rectangle2D;

static union(arg0: Rectangle2D, arg1: Rectangle2D, arg2: Rectangle2D): void;

add(arg0: number, arg1: number): void;

add(arg0: Point2D): void;

add(arg0: Rectangle2D): void;

getPathIterator(arg0: AffineTransform): PathIterator;

getPathIterator(arg0: AffineTransform, arg1: number): PathIterator;

hashCode(): number;

equals(arg0: Object): boolean;
 }
export namespace Rectangle2D { 
export class Double extends Rectangle2D implements Serializable {
x:number
y:number
width:number
height:number
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number);

getX(): number;

getY(): number;

getWidth(): number;

getHeight(): number;

isEmpty(): boolean;

setRect(arg0: number, arg1: number, arg2: number, arg3: number): void;

setRect(arg0: Rectangle2D): void;

outcode(arg0: number, arg1: number): number;

getBounds2D(): Rectangle2D;

createIntersection(arg0: Rectangle2D): Rectangle2D;

createUnion(arg0: Rectangle2D): Rectangle2D;
toString(): string;
 }

export class Float extends Rectangle2D implements Serializable {
x:number
y:number
width:number
height:number
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number);

getX(): number;

getY(): number;

getWidth(): number;

getHeight(): number;

isEmpty(): boolean;

setRect(arg0: number, arg1: number, arg2: number, arg3: number): void;

setRect(arg0: number, arg1: number, arg2: number, arg3: number): void;

setRect(arg0: Rectangle2D): void;

outcode(arg0: number, arg1: number): number;

getBounds2D(): Rectangle2D;

createIntersection(arg0: Rectangle2D): Rectangle2D;

createUnion(arg0: Rectangle2D): Rectangle2D;
toString(): string;
 }

}

export abstract class RectangularShape implements Shape, Cloneable {

abstract getX(): number;

abstract getY(): number;

abstract getWidth(): number;

abstract getHeight(): number;

getMinX(): number;

getMinY(): number;

getMaxX(): number;

getMaxY(): number;

getCenterX(): number;

getCenterY(): number;

getFrame(): Rectangle2D;

abstract isEmpty(): boolean;

abstract setFrame(arg0: number, arg1: number, arg2: number, arg3: number): void;

setFrame(arg0: Point2D, arg1: Dimension2D): void;

setFrame(arg0: Rectangle2D): void;

setFrameFromDiagonal(arg0: number, arg1: number, arg2: number, arg3: number): void;

setFrameFromDiagonal(arg0: Point2D, arg1: Point2D): void;

setFrameFromCenter(arg0: number, arg1: number, arg2: number, arg3: number): void;

setFrameFromCenter(arg0: Point2D, arg1: Point2D): void;

contains(arg0: Point2D): boolean;

intersects(arg0: Rectangle2D): boolean;

contains(arg0: Rectangle2D): boolean;

getBounds(): Rectangle;

getPathIterator(arg0: AffineTransform, arg1: number): PathIterator;

clone(): Object;
 }

export abstract class RoundRectangle2D extends RectangularShape {

abstract getArcWidth(): number;

abstract getArcHeight(): number;

abstract setRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

setRoundRect(arg0: RoundRectangle2D): void;

setFrame(arg0: number, arg1: number, arg2: number, arg3: number): void;

contains(arg0: number, arg1: number): boolean;

intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;

getPathIterator(arg0: AffineTransform): PathIterator;

hashCode(): number;

equals(arg0: Object): boolean;
 }
export namespace RoundRectangle2D { 
export class Double extends RoundRectangle2D implements Serializable {
x:number
y:number
width:number
height:number
arcwidth:number
archeight:number
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);

getX(): number;

getY(): number;

getWidth(): number;

getHeight(): number;

getArcWidth(): number;

getArcHeight(): number;

isEmpty(): boolean;

setRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

setRoundRect(arg0: RoundRectangle2D): void;

getBounds2D(): Rectangle2D;
 }

export class Float extends RoundRectangle2D implements Serializable {
x:number
y:number
width:number
height:number
arcwidth:number
archeight:number
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);

getX(): number;

getY(): number;

getWidth(): number;

getHeight(): number;

getArcWidth(): number;

getArcHeight(): number;

isEmpty(): boolean;

setRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

setRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;

setRoundRect(arg0: RoundRectangle2D): void;

getBounds2D(): Rectangle2D;
 }

}

}
