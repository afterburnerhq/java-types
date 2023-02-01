/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="org.w3c.dom.d.ts" />
/// <reference path="javax.imageio.d.ts" />
/// <reference path="javax.imageio.metadata.d.ts" />
declare module '@afterburnerhq/javax.imageio.plugins.tiff' { 
import { Integer, Cloneable, String } from '@afterburnerhq/java.lang'
import { SortedSet, List } from '@afterburnerhq/java.util'
import { Node } from '@afterburnerhq/org.w3c.dom'
import { ImageReadParam } from '@afterburnerhq/javax.imageio'
import { IIOMetadata } from '@afterburnerhq/javax.imageio.metadata'
export class BaselineTIFFTagSet extends TIFFTagSet {
static TAG_NEW_SUBFILE_TYPE:number
static NEW_SUBFILE_TYPE_REDUCED_RESOLUTION:number
static NEW_SUBFILE_TYPE_SINGLE_PAGE:number
static NEW_SUBFILE_TYPE_TRANSPARENCY:number
static TAG_SUBFILE_TYPE:number
static SUBFILE_TYPE_FULL_RESOLUTION:number
static SUBFILE_TYPE_REDUCED_RESOLUTION:number
static SUBFILE_TYPE_SINGLE_PAGE:number
static TAG_IMAGE_WIDTH:number
static TAG_IMAGE_LENGTH:number
static TAG_BITS_PER_SAMPLE:number
static TAG_COMPRESSION:number
static COMPRESSION_NONE:number
static COMPRESSION_CCITT_RLE:number
static COMPRESSION_CCITT_T_4:number
static COMPRESSION_CCITT_T_6:number
static COMPRESSION_LZW:number
static COMPRESSION_OLD_JPEG:number
static COMPRESSION_JPEG:number
static COMPRESSION_ZLIB:number
static COMPRESSION_PACKBITS:number
static COMPRESSION_DEFLATE:number
static TAG_PHOTOMETRIC_INTERPRETATION:number
static PHOTOMETRIC_INTERPRETATION_WHITE_IS_ZERO:number
static PHOTOMETRIC_INTERPRETATION_BLACK_IS_ZERO:number
static PHOTOMETRIC_INTERPRETATION_RGB:number
static PHOTOMETRIC_INTERPRETATION_PALETTE_COLOR:number
static PHOTOMETRIC_INTERPRETATION_TRANSPARENCY_MASK:number
static PHOTOMETRIC_INTERPRETATION_CMYK:number
static PHOTOMETRIC_INTERPRETATION_Y_CB_CR:number
static PHOTOMETRIC_INTERPRETATION_CIELAB:number
static PHOTOMETRIC_INTERPRETATION_ICCLAB:number
static TAG_THRESHHOLDING:number
static THRESHHOLDING_NONE:number
static THRESHHOLDING_ORDERED_DITHER:number
static THRESHHOLDING_RANDOMIZED_DITHER:number
static TAG_CELL_WIDTH:number
static TAG_CELL_LENGTH:number
static TAG_FILL_ORDER:number
static FILL_ORDER_LEFT_TO_RIGHT:number
static FILL_ORDER_RIGHT_TO_LEFT:number
static TAG_DOCUMENT_NAME:number
static TAG_IMAGE_DESCRIPTION:number
static TAG_MAKE:number
static TAG_MODEL:number
static TAG_STRIP_OFFSETS:number
static TAG_ORIENTATION:number
static ORIENTATION_ROW_0_TOP_COLUMN_0_LEFT:number
static ORIENTATION_ROW_0_TOP_COLUMN_0_RIGHT:number
static ORIENTATION_ROW_0_BOTTOM_COLUMN_0_RIGHT:number
static ORIENTATION_ROW_0_BOTTOM_COLUMN_0_LEFT:number
static ORIENTATION_ROW_0_LEFT_COLUMN_0_TOP:number
static ORIENTATION_ROW_0_RIGHT_COLUMN_0_TOP:number
static ORIENTATION_ROW_0_RIGHT_COLUMN_0_BOTTOM:number
static ORIENTATION_ROW_0_LEFT_COLUMN_0_BOTTOM:number
static TAG_SAMPLES_PER_PIXEL:number
static TAG_ROWS_PER_STRIP:number
static TAG_STRIP_BYTE_COUNTS:number
static TAG_MIN_SAMPLE_VALUE:number
static TAG_MAX_SAMPLE_VALUE:number
static TAG_X_RESOLUTION:number
static TAG_Y_RESOLUTION:number
static TAG_PLANAR_CONFIGURATION:number
static PLANAR_CONFIGURATION_CHUNKY:number
static PLANAR_CONFIGURATION_PLANAR:number
static TAG_PAGE_NAME:number
static TAG_X_POSITION:number
static TAG_Y_POSITION:number
static TAG_FREE_OFFSETS:number
static TAG_FREE_BYTE_COUNTS:number
static TAG_GRAY_RESPONSE_UNIT:number
static GRAY_RESPONSE_UNIT_TENTHS:number
static GRAY_RESPONSE_UNIT_HUNDREDTHS:number
static GRAY_RESPONSE_UNIT_THOUSANDTHS:number
static GRAY_RESPONSE_UNIT_TEN_THOUSANDTHS:number
static GRAY_RESPONSE_UNIT_HUNDRED_THOUSANDTHS:number
static TAG_GRAY_RESPONSE_CURVE:number
static TAG_T4_OPTIONS:number
static T4_OPTIONS_2D_CODING:number
static T4_OPTIONS_UNCOMPRESSED:number
static T4_OPTIONS_EOL_BYTE_ALIGNED:number
static TAG_T6_OPTIONS:number
static T6_OPTIONS_UNCOMPRESSED:number
static TAG_RESOLUTION_UNIT:number
static RESOLUTION_UNIT_NONE:number
static RESOLUTION_UNIT_INCH:number
static RESOLUTION_UNIT_CENTIMETER:number
static TAG_PAGE_NUMBER:number
static TAG_TRANSFER_FUNCTION:number
static TAG_SOFTWARE:number
static TAG_DATE_TIME:number
static TAG_ARTIST:number
static TAG_HOST_COMPUTER:number
static TAG_PREDICTOR:number
static PREDICTOR_NONE:number
static PREDICTOR_HORIZONTAL_DIFFERENCING:number
static TAG_WHITE_POINT:number
static TAG_PRIMARY_CHROMATICITES:number
static TAG_COLOR_MAP:number
static TAG_HALFTONE_HINTS:number
static TAG_TILE_WIDTH:number
static TAG_TILE_LENGTH:number
static TAG_TILE_OFFSETS:number
static TAG_TILE_BYTE_COUNTS:number
static TAG_INK_SET:number
static INK_SET_CMYK:number
static INK_SET_NOT_CMYK:number
static TAG_INK_NAMES:number
static TAG_NUMBER_OF_INKS:number
static TAG_DOT_RANGE:number
static TAG_TARGET_PRINTER:number
static TAG_EXTRA_SAMPLES:number
static EXTRA_SAMPLES_UNSPECIFIED:number
static EXTRA_SAMPLES_ASSOCIATED_ALPHA:number
static EXTRA_SAMPLES_UNASSOCIATED_ALPHA:number
static TAG_SAMPLE_FORMAT:number
static SAMPLE_FORMAT_UNSIGNED_INTEGER:number
static SAMPLE_FORMAT_SIGNED_INTEGER:number
static SAMPLE_FORMAT_FLOATING_POINT:number
static SAMPLE_FORMAT_UNDEFINED:number
static TAG_S_MIN_SAMPLE_VALUE:number
static TAG_S_MAX_SAMPLE_VALUE:number
static TAG_TRANSFER_RANGE:number
static TAG_JPEG_TABLES:number
static TAG_JPEG_PROC:number
static JPEG_PROC_BASELINE:number
static JPEG_PROC_LOSSLESS:number
static TAG_JPEG_INTERCHANGE_FORMAT:number
static TAG_JPEG_INTERCHANGE_FORMAT_LENGTH:number
static TAG_JPEG_RESTART_INTERVAL:number
static TAG_JPEG_LOSSLESS_PREDICTORS:number
static TAG_JPEG_POINT_TRANSFORMS:number
static TAG_JPEG_Q_TABLES:number
static TAG_JPEG_DC_TABLES:number
static TAG_JPEG_AC_TABLES:number
static TAG_Y_CB_CR_COEFFICIENTS:number
static TAG_Y_CB_CR_SUBSAMPLING:number
static TAG_Y_CB_CR_POSITIONING:number
static Y_CB_CR_POSITIONING_CENTERED:number
static Y_CB_CR_POSITIONING_COSITED:number
static TAG_REFERENCE_BLACK_WHITE:number
static TAG_COPYRIGHT:number
static TAG_ICC_PROFILE:number

static getInstance(): BaselineTIFFTagSet;
 }

export class ExifGPSTagSet extends TIFFTagSet {
static TAG_GPS_VERSION_ID:number
static GPS_VERSION_2_2:String
static TAG_GPS_LATITUDE_REF:number
static TAG_GPS_LATITUDE:number
static TAG_GPS_LONGITUDE_REF:number
static TAG_GPS_LONGITUDE:number
static TAG_GPS_ALTITUDE_REF:number
static TAG_GPS_ALTITUDE:number
static TAG_GPS_TIME_STAMP:number
static TAG_GPS_SATELLITES:number
static TAG_GPS_STATUS:number
static TAG_GPS_MEASURE_MODE:number
static TAG_GPS_DOP:number
static TAG_GPS_SPEED_REF:number
static TAG_GPS_SPEED:number
static TAG_GPS_TRACK_REF:number
static TAG_GPS_TRACK:number
static TAG_GPS_IMG_DIRECTION_REF:number
static TAG_GPS_IMG_DIRECTION:number
static TAG_GPS_MAP_DATUM:number
static TAG_GPS_DEST_LATITUDE_REF:number
static TAG_GPS_DEST_LATITUDE:number
static TAG_GPS_DEST_LONGITUDE_REF:number
static TAG_GPS_DEST_LONGITUDE:number
static TAG_GPS_DEST_BEARING_REF:number
static TAG_GPS_DEST_BEARING:number
static TAG_GPS_DEST_DISTANCE_REF:number
static TAG_GPS_DEST_DISTANCE:number
static TAG_GPS_PROCESSING_METHOD:number
static TAG_GPS_AREA_INFORMATION:number
static TAG_GPS_DATE_STAMP:number
static TAG_GPS_DIFFERENTIAL:number
static LATITUDE_REF_NORTH:String
static LATITUDE_REF_SOUTH:String
static LONGITUDE_REF_EAST:String
static LONGITUDE_REF_WEST:String
static ALTITUDE_REF_SEA_LEVEL:number
static ALTITUDE_REF_SEA_LEVEL_REFERENCE:number
static STATUS_MEASUREMENT_IN_PROGRESS:String
static STATUS_MEASUREMENT_INTEROPERABILITY:String
static MEASURE_MODE_2D:String
static MEASURE_MODE_3D:String
static SPEED_REF_KILOMETERS_PER_HOUR:String
static SPEED_REF_MILES_PER_HOUR:String
static SPEED_REF_KNOTS:String
static DIRECTION_REF_TRUE:String
static DIRECTION_REF_MAGNETIC:String
static DEST_DISTANCE_REF_KILOMETERS:String
static DEST_DISTANCE_REF_MILES:String
static DEST_DISTANCE_REF_KNOTS:String
static DIFFERENTIAL_CORRECTION_NONE:number
static DIFFERENTIAL_CORRECTION_APPLIED:number

static getInstance(): ExifGPSTagSet;
 }

export class ExifInteroperabilityTagSet extends TIFFTagSet {
static TAG_INTEROPERABILITY_INDEX:number
static INTEROPERABILITY_INDEX_R98:String
static INTEROPERABILITY_INDEX_THM:String

static getInstance(): ExifInteroperabilityTagSet;
 }

export class ExifParentTIFFTagSet extends TIFFTagSet {
static TAG_EXIF_IFD_POINTER:number
static TAG_GPS_INFO_IFD_POINTER:number

static getInstance(): ExifParentTIFFTagSet;
 }

export class ExifTIFFTagSet extends TIFFTagSet {
static TAG_GPS_INFO_IFD_POINTER:number
static TAG_INTEROPERABILITY_IFD_POINTER:number
static TAG_EXIF_VERSION:number
static EXIF_VERSION_2_1:String
static EXIF_VERSION_2_2:String
static TAG_FLASHPIX_VERSION:number
static TAG_COLOR_SPACE:number
static COLOR_SPACE_SRGB:number
static COLOR_SPACE_UNCALIBRATED:number
static TAG_COMPONENTS_CONFIGURATION:number
static COMPONENTS_CONFIGURATION_DOES_NOT_EXIST:number
static COMPONENTS_CONFIGURATION_Y:number
static COMPONENTS_CONFIGURATION_CB:number
static COMPONENTS_CONFIGURATION_CR:number
static COMPONENTS_CONFIGURATION_R:number
static COMPONENTS_CONFIGURATION_G:number
static COMPONENTS_CONFIGURATION_B:number
static TAG_COMPRESSED_BITS_PER_PIXEL:number
static TAG_PIXEL_X_DIMENSION:number
static TAG_PIXEL_Y_DIMENSION:number
static TAG_MAKER_NOTE:number
static TAG_MARKER_NOTE:number
static TAG_USER_COMMENT:number
static TAG_RELATED_SOUND_FILE:number
static TAG_DATE_TIME_ORIGINAL:number
static TAG_DATE_TIME_DIGITIZED:number
static TAG_SUB_SEC_TIME:number
static TAG_SUB_SEC_TIME_ORIGINAL:number
static TAG_SUB_SEC_TIME_DIGITIZED:number
static TAG_EXPOSURE_TIME:number
static TAG_F_NUMBER:number
static TAG_EXPOSURE_PROGRAM:number
static EXPOSURE_PROGRAM_NOT_DEFINED:number
static EXPOSURE_PROGRAM_MANUAL:number
static EXPOSURE_PROGRAM_NORMAL_PROGRAM:number
static EXPOSURE_PROGRAM_APERTURE_PRIORITY:number
static EXPOSURE_PROGRAM_SHUTTER_PRIORITY:number
static EXPOSURE_PROGRAM_CREATIVE_PROGRAM:number
static EXPOSURE_PROGRAM_ACTION_PROGRAM:number
static EXPOSURE_PROGRAM_PORTRAIT_MODE:number
static EXPOSURE_PROGRAM_LANDSCAPE_MODE:number
static EXPOSURE_PROGRAM_MAX_RESERVED:number
static TAG_SPECTRAL_SENSITIVITY:number
static TAG_ISO_SPEED_RATINGS:number
static TAG_OECF:number
static TAG_SHUTTER_SPEED_VALUE:number
static TAG_APERTURE_VALUE:number
static TAG_BRIGHTNESS_VALUE:number
static TAG_EXPOSURE_BIAS_VALUE:number
static TAG_MAX_APERTURE_VALUE:number
static TAG_SUBJECT_DISTANCE:number
static TAG_METERING_MODE:number
static METERING_MODE_UNKNOWN:number
static METERING_MODE_AVERAGE:number
static METERING_MODE_CENTER_WEIGHTED_AVERAGE:number
static METERING_MODE_SPOT:number
static METERING_MODE_MULTI_SPOT:number
static METERING_MODE_PATTERN:number
static METERING_MODE_PARTIAL:number
static METERING_MODE_MIN_RESERVED:number
static METERING_MODE_MAX_RESERVED:number
static METERING_MODE_OTHER:number
static TAG_LIGHT_SOURCE:number
static LIGHT_SOURCE_UNKNOWN:number
static LIGHT_SOURCE_DAYLIGHT:number
static LIGHT_SOURCE_FLUORESCENT:number
static LIGHT_SOURCE_TUNGSTEN:number
static LIGHT_SOURCE_FLASH:number
static LIGHT_SOURCE_FINE_WEATHER:number
static LIGHT_SOURCE_CLOUDY_WEATHER:number
static LIGHT_SOURCE_SHADE:number
static LIGHT_SOURCE_DAYLIGHT_FLUORESCENT:number
static LIGHT_SOURCE_DAY_WHITE_FLUORESCENT:number
static LIGHT_SOURCE_COOL_WHITE_FLUORESCENT:number
static LIGHT_SOURCE_WHITE_FLUORESCENT:number
static LIGHT_SOURCE_STANDARD_LIGHT_A:number
static LIGHT_SOURCE_STANDARD_LIGHT_B:number
static LIGHT_SOURCE_STANDARD_LIGHT_C:number
static LIGHT_SOURCE_D55:number
static LIGHT_SOURCE_D65:number
static LIGHT_SOURCE_D75:number
static LIGHT_SOURCE_D50:number
static LIGHT_SOURCE_ISO_STUDIO_TUNGSTEN:number
static LIGHT_SOURCE_OTHER:number
static TAG_FLASH:number
static FLASH_DID_NOT_FIRE:number
static FLASH_FIRED:number
static FLASH_STROBE_RETURN_LIGHT_NOT_DETECTED:number
static FLASH_STROBE_RETURN_LIGHT_DETECTED:number
static FLASH_MASK_FIRED:number
static FLASH_MASK_RETURN_NOT_DETECTED:number
static FLASH_MASK_RETURN_DETECTED:number
static FLASH_MASK_MODE_FLASH_FIRING:number
static FLASH_MASK_MODE_FLASH_SUPPRESSION:number
static FLASH_MASK_MODE_AUTO:number
static FLASH_MASK_FUNCTION_NOT_PRESENT:number
static FLASH_MASK_RED_EYE_REDUCTION:number
static TAG_FOCAL_LENGTH:number
static TAG_SUBJECT_AREA:number
static TAG_FLASH_ENERGY:number
static TAG_SPATIAL_FREQUENCY_RESPONSE:number
static TAG_FOCAL_PLANE_X_RESOLUTION:number
static TAG_FOCAL_PLANE_Y_RESOLUTION:number
static TAG_FOCAL_PLANE_RESOLUTION_UNIT:number
static FOCAL_PLANE_RESOLUTION_UNIT_NONE:number
static FOCAL_PLANE_RESOLUTION_UNIT_INCH:number
static FOCAL_PLANE_RESOLUTION_UNIT_CENTIMETER:number
static TAG_SUBJECT_LOCATION:number
static TAG_EXPOSURE_INDEX:number
static TAG_SENSING_METHOD:number
static SENSING_METHOD_NOT_DEFINED:number
static SENSING_METHOD_ONE_CHIP_COLOR_AREA_SENSOR:number
static SENSING_METHOD_TWO_CHIP_COLOR_AREA_SENSOR:number
static SENSING_METHOD_THREE_CHIP_COLOR_AREA_SENSOR:number
static SENSING_METHOD_COLOR_SEQUENTIAL_AREA_SENSOR:number
static SENSING_METHOD_TRILINEAR_SENSOR:number
static SENSING_METHOD_COLOR_SEQUENTIAL_LINEAR_SENSOR:number
static TAG_FILE_SOURCE:number
static FILE_SOURCE_DSC:number
static TAG_SCENE_TYPE:number
static SCENE_TYPE_DSC:number
static TAG_CFA_PATTERN:number
static TAG_CUSTOM_RENDERED:number
static CUSTOM_RENDERED_NORMAL:number
static CUSTOM_RENDERED_CUSTOM:number
static TAG_EXPOSURE_MODE:number
static EXPOSURE_MODE_AUTO_EXPOSURE:number
static EXPOSURE_MODE_MANUAL_EXPOSURE:number
static EXPOSURE_MODE_AUTO_BRACKET:number
static TAG_WHITE_BALANCE:number
static WHITE_BALANCE_AUTO:number
static WHITE_BALANCE_MANUAL:number
static TAG_DIGITAL_ZOOM_RATIO:number
static TAG_FOCAL_LENGTH_IN_35MM_FILM:number
static TAG_SCENE_CAPTURE_TYPE:number
static SCENE_CAPTURE_TYPE_STANDARD:number
static SCENE_CAPTURE_TYPE_LANDSCAPE:number
static SCENE_CAPTURE_TYPE_PORTRAIT:number
static SCENE_CAPTURE_TYPE_NIGHT_SCENE:number
static TAG_GAIN_CONTROL:number
static GAIN_CONTROL_NONE:number
static GAIN_CONTROL_LOW_GAIN_UP:number
static GAIN_CONTROL_HIGH_GAIN_UP:number
static GAIN_CONTROL_LOW_GAIN_DOWN:number
static GAIN_CONTROL_HIGH_GAIN_DOWN:number
static TAG_CONTRAST:number
static CONTRAST_NORMAL:number
static CONTRAST_SOFT:number
static CONTRAST_HARD:number
static TAG_SATURATION:number
static SATURATION_NORMAL:number
static SATURATION_LOW:number
static SATURATION_HIGH:number
static TAG_SHARPNESS:number
static SHARPNESS_NORMAL:number
static SHARPNESS_SOFT:number
static SHARPNESS_HARD:number
static TAG_DEVICE_SETTING_DESCRIPTION:number
static TAG_SUBJECT_DISTANCE_RANGE:number
static SUBJECT_DISTANCE_RANGE_UNKNOWN:number
static SUBJECT_DISTANCE_RANGE_MACRO:number
static SUBJECT_DISTANCE_RANGE_CLOSE_VIEW:number
static SUBJECT_DISTANCE_RANGE_DISTANT_VIEW:number
static TAG_IMAGE_UNIQUE_ID:number

static getInstance(): ExifTIFFTagSet;
 }

export class FaxTIFFTagSet extends TIFFTagSet {
static TAG_BAD_FAX_LINES:number
static TAG_CLEAN_FAX_DATA:number
static CLEAN_FAX_DATA_NO_ERRORS:number
static CLEAN_FAX_DATA_ERRORS_CORRECTED:number
static CLEAN_FAX_DATA_ERRORS_UNCORRECTED:number
static TAG_CONSECUTIVE_BAD_LINES:number

static getInstance(): FaxTIFFTagSet;
 }

export class GeoTIFFTagSet extends TIFFTagSet {
static TAG_MODEL_PIXEL_SCALE:number
static TAG_MODEL_TRANSFORMATION:number
static TAG_MODEL_TIE_POINT:number
static TAG_GEO_KEY_DIRECTORY:number
static TAG_GEO_DOUBLE_PARAMS:number
static TAG_GEO_ASCII_PARAMS:number

static getInstance(): GeoTIFFTagSet;
 }

export class TIFFDirectory implements Cloneable {
constructor(arg0: TIFFTagSet[], arg1: TIFFTag);

static createFromMetadata(arg0: IIOMetadata): TIFFDirectory;

getTagSets(): TIFFTagSet[];

addTagSet(arg0: TIFFTagSet): void;

removeTagSet(arg0: TIFFTagSet): void;

getParentTag(): TIFFTag;

getTag(arg0: number): TIFFTag;

getNumTIFFFields(): number;

containsTIFFField(arg0: number): boolean;

addTIFFField(arg0: TIFFField): void;

getTIFFField(arg0: number): TIFFField;

removeTIFFField(arg0: number): void;

getTIFFFields(): TIFFField[];

removeTIFFFields(): void;

getAsMetadata(): IIOMetadata;

clone(): TIFFDirectory;
 }

export class TIFFField implements Cloneable {
constructor(arg0: TIFFTag, arg1: number, arg2: number, arg3: Object);
constructor(arg0: TIFFTag, arg1: number, arg2: number);
constructor(arg0: TIFFTag, arg1: number);
constructor(arg0: TIFFTag, arg1: number, arg2: number, arg3: TIFFDirectory);

static createFromMetadataNode(arg0: TIFFTagSet, arg1: Node): TIFFField;

getTag(): TIFFTag;

getTagNumber(): number;

getType(): number;

static getTypeName(arg0: number): String;

static getTypeByName(arg0: String): number;

static createArrayForType(arg0: number, arg1: number): Object;

getAsNativeNode(): Node;

isIntegral(): boolean;

getCount(): number;

getData(): Object;

getAsBytes(): number[];

getAsChars(): String[];

getAsShorts(): number[];

getAsInts(): number[];

getAsLongs(): number[];

getAsFloats(): number[];

getAsDoubles(): number[];

getAsSRationals(): Array<Array<number>>;

getAsRationals(): Array<Array<number>>;

getAsInt(arg0: number): number;

getAsLong(arg0: number): number;

getAsFloat(arg0: number): number;

getAsDouble(arg0: number): number;

getAsString(arg0: number): String;

getAsSRational(arg0: number): number[];

getAsRational(arg0: number): number[];

getValueAsString(arg0: number): String;

hasDirectory(): boolean;

getDirectory(): TIFFDirectory;

clone(): TIFFField;
 }

export class TIFFImageReadParam extends ImageReadParam {
constructor();

addAllowedTagSet(arg0: TIFFTagSet): void;

removeAllowedTagSet(arg0: TIFFTagSet): void;

getAllowedTagSets(): List<TIFFTagSet>;

setReadUnknownTags(arg0: boolean): void;

getReadUnknownTags(): boolean;
 }

export class TIFFTag {
static TIFF_BYTE:number
static TIFF_ASCII:number
static TIFF_SHORT:number
static TIFF_LONG:number
static TIFF_RATIONAL:number
static TIFF_SBYTE:number
static TIFF_UNDEFINED:number
static TIFF_SSHORT:number
static TIFF_SLONG:number
static TIFF_SRATIONAL:number
static TIFF_FLOAT:number
static TIFF_DOUBLE:number
static TIFF_IFD_POINTER:number
static MIN_DATATYPE:number
static MAX_DATATYPE:number
static UNKNOWN_TAG_NAME:String
constructor(arg0: String, arg1: number, arg2: number, arg3: number);
constructor(arg0: String, arg1: number, arg2: TIFFTagSet);
constructor(arg0: String, arg1: number, arg2: number);

static getSizeOfType(arg0: number): number;

getName(): String;

getNumber(): number;

getDataTypes(): number;

getCount(): number;

isDataTypeOK(arg0: number): boolean;

getTagSet(): TIFFTagSet;

isIFDPointer(): boolean;

hasValueNames(): boolean;

getValueName(arg0: number): String;

getNamedValues(): number[];
 }

export class TIFFTagSet {
constructor(arg0: List<TIFFTag>);

getTag(arg0: number): TIFFTag;

getTag(arg0: String): TIFFTag;

getTagNumbers(): SortedSet<Number>;

getTagNames(): SortedSet<String>;
 }

}
