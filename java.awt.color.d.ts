/// <reference path="java.lang.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/java.awt.color' { 
import { RuntimeException, String } from '@afterburnerhq/java.lang'
import { Serializable, InputStream, OutputStream } from '@afterburnerhq/java.io'
export class CMMException extends RuntimeException {
constructor(arg0: String);
 }

export abstract class ColorSpace implements Serializable {
static TYPE_XYZ:number
static TYPE_Lab:number
static TYPE_Luv:number
static TYPE_YCbCr:number
static TYPE_Yxy:number
static TYPE_RGB:number
static TYPE_GRAY:number
static TYPE_HSV:number
static TYPE_HLS:number
static TYPE_CMYK:number
static TYPE_CMY:number
static TYPE_2CLR:number
static TYPE_3CLR:number
static TYPE_4CLR:number
static TYPE_5CLR:number
static TYPE_6CLR:number
static TYPE_7CLR:number
static TYPE_8CLR:number
static TYPE_9CLR:number
static TYPE_ACLR:number
static TYPE_BCLR:number
static TYPE_CCLR:number
static TYPE_DCLR:number
static TYPE_ECLR:number
static TYPE_FCLR:number
static CS_sRGB:number
static CS_LINEAR_RGB:number
static CS_CIEXYZ:number
static CS_PYCC:number
static CS_GRAY:number

static getInstance(arg0: number): ColorSpace;

isCS_sRGB(): boolean;

abstract toRGB(arg0: number[]): number[];

abstract fromRGB(arg0: number[]): number[];

abstract toCIEXYZ(arg0: number[]): number[];

abstract fromCIEXYZ(arg0: number[]): number[];

getType(): number;

getNumComponents(): number;

getName(arg0: number): String;

getMinValue(arg0: number): number;

getMaxValue(arg0: number): number;
 }

export class ICC_ColorSpace extends ColorSpace {
constructor(arg0: ICC_Profile);

getProfile(): ICC_Profile;

toRGB(arg0: number[]): number[];

fromRGB(arg0: number[]): number[];

toCIEXYZ(arg0: number[]): number[];

fromCIEXYZ(arg0: number[]): number[];

getMinValue(arg0: number): number;

getMaxValue(arg0: number): number;
 }

export class ICC_Profile implements Serializable {
static CLASS_INPUT:number
static CLASS_DISPLAY:number
static CLASS_OUTPUT:number
static CLASS_DEVICELINK:number
static CLASS_COLORSPACECONVERSION:number
static CLASS_ABSTRACT:number
static CLASS_NAMEDCOLOR:number
static icSigXYZData:number
static icSigLabData:number
static icSigLuvData:number
static icSigYCbCrData:number
static icSigYxyData:number
static icSigRgbData:number
static icSigGrayData:number
static icSigHsvData:number
static icSigHlsData:number
static icSigCmykData:number
static icSigCmyData:number
static icSigSpace2CLR:number
static icSigSpace3CLR:number
static icSigSpace4CLR:number
static icSigSpace5CLR:number
static icSigSpace6CLR:number
static icSigSpace7CLR:number
static icSigSpace8CLR:number
static icSigSpace9CLR:number
static icSigSpaceACLR:number
static icSigSpaceBCLR:number
static icSigSpaceCCLR:number
static icSigSpaceDCLR:number
static icSigSpaceECLR:number
static icSigSpaceFCLR:number
static icSigInputClass:number
static icSigDisplayClass:number
static icSigOutputClass:number
static icSigLinkClass:number
static icSigAbstractClass:number
static icSigColorSpaceClass:number
static icSigNamedColorClass:number
static icPerceptual:number
static icRelativeColorimetric:number
static icMediaRelativeColorimetric:number
static icSaturation:number
static icAbsoluteColorimetric:number
static icICCAbsoluteColorimetric:number
static icSigHead:number
static icSigAToB0Tag:number
static icSigAToB1Tag:number
static icSigAToB2Tag:number
static icSigBlueColorantTag:number
static icSigBlueMatrixColumnTag:number
static icSigBlueTRCTag:number
static icSigBToA0Tag:number
static icSigBToA1Tag:number
static icSigBToA2Tag:number
static icSigCalibrationDateTimeTag:number
static icSigCharTargetTag:number
static icSigCopyrightTag:number
static icSigCrdInfoTag:number
static icSigDeviceMfgDescTag:number
static icSigDeviceModelDescTag:number
static icSigDeviceSettingsTag:number
static icSigGamutTag:number
static icSigGrayTRCTag:number
static icSigGreenColorantTag:number
static icSigGreenMatrixColumnTag:number
static icSigGreenTRCTag:number
static icSigLuminanceTag:number
static icSigMeasurementTag:number
static icSigMediaBlackPointTag:number
static icSigMediaWhitePointTag:number
static icSigNamedColor2Tag:number
static icSigOutputResponseTag:number
static icSigPreview0Tag:number
static icSigPreview1Tag:number
static icSigPreview2Tag:number
static icSigProfileDescriptionTag:number
static icSigProfileSequenceDescTag:number
static icSigPs2CRD0Tag:number
static icSigPs2CRD1Tag:number
static icSigPs2CRD2Tag:number
static icSigPs2CRD3Tag:number
static icSigPs2CSATag:number
static icSigPs2RenderingIntentTag:number
static icSigRedColorantTag:number
static icSigRedMatrixColumnTag:number
static icSigRedTRCTag:number
static icSigScreeningDescTag:number
static icSigScreeningTag:number
static icSigTechnologyTag:number
static icSigUcrBgTag:number
static icSigViewingCondDescTag:number
static icSigViewingConditionsTag:number
static icSigChromaticityTag:number
static icSigChromaticAdaptationTag:number
static icSigColorantOrderTag:number
static icSigColorantTableTag:number
static icHdrSize:number
static icHdrCmmId:number
static icHdrVersion:number
static icHdrDeviceClass:number
static icHdrColorSpace:number
static icHdrPcs:number
static icHdrDate:number
static icHdrMagic:number
static icHdrPlatform:number
static icHdrFlags:number
static icHdrManufacturer:number
static icHdrModel:number
static icHdrAttributes:number
static icHdrRenderingIntent:number
static icHdrIlluminant:number
static icHdrCreator:number
static icHdrProfileID:number
static icTagType:number
static icTagReserved:number
static icCurveCount:number
static icCurveData:number
static icXYZNumberX:number

static getInstance(arg0: number[]): ICC_Profile;

static getInstance(arg0: number): ICC_Profile;

static getInstance(arg0: String): ICC_Profile;

static getInstance(arg0: InputStream): ICC_Profile;

getMajorVersion(): number;

getMinorVersion(): number;

getProfileClass(): number;

getColorSpaceType(): number;

getPCSType(): number;

write(arg0: String): void;

write(arg0: OutputStream): void;

getData(): number[];

getData(arg0: number): number[];

setData(arg0: number, arg1: number[]): void;

getNumComponents(): number;
 }

export class ICC_ProfileGray extends ICC_Profile {

getMediaWhitePoint(): number[];

getGamma(): number;

getTRC(): number[];
 }

export class ICC_ProfileRGB extends ICC_Profile {
static REDCOMPONENT:number
static GREENCOMPONENT:number
static BLUECOMPONENT:number

getMediaWhitePoint(): number[];

getMatrix(): Array<Array<number>>;

getGamma(arg0: number): number;

getTRC(arg0: number): number[];
 }

export class ProfileDataException extends RuntimeException {
constructor(arg0: String);
 }

}
