/// <reference path="java.lang.reflect.d.ts" />
/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.constant.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.util.stream.d.ts" />
/// <reference path="java.util.concurrent.d.ts" />
/// <reference path="java.lang.annotation.d.ts" />
/// <reference path="java.nio.d.ts" />
/// <reference path="java.nio.channels.d.ts" />
/// <reference path="java.lang.module.d.ts" />
/// <reference path="java.nio.charset.d.ts" />
/// <reference path="java.time.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.lang.invoke.d.ts" />
/// <reference path="java.util.function.d.ts" />
declare module '@afterburnerhq/java.lang' { 
import { Field, Type, AnnotatedType, TypeVariable, Constructor, AnnotatedElement, Method, GenericDeclaration, RecordComponent } from '@afterburnerhq/java.lang.reflect'
import { Permission, ProtectionDomain, BasicPermission } from '@afterburnerhq/java.security'
import { Constable, DynamicConstantDesc, ConstantDesc, ClassDesc } from '@afterburnerhq/java.lang.constant'
import { Locale, Enumeration, Set, Optional, Iterator, List, ResourceBundle, Properties, Map, Spliterator, Comparator } from '@afterburnerhq/java.util'
import { IntStream, Stream } from '@afterburnerhq/java.util.stream'
import { TimeUnit, CompletableFuture } from '@afterburnerhq/java.util.concurrent'
import { Annotation } from '@afterburnerhq/java.lang.annotation'
import { CharBuffer } from '@afterburnerhq/java.nio'
import { Channel } from '@afterburnerhq/java.nio.channels'
import { Configuration, ModuleDescriptor } from '@afterburnerhq/java.lang.module'
import { Charset } from '@afterburnerhq/java.nio.charset'
import { Duration, Instant } from '@afterburnerhq/java.time'
import { InetAddress, URL } from '@afterburnerhq/java.net'
import { PrintStream, Serializable, InputStream, OutputStream, BufferedReader, Console, File, FileDescriptor, BufferedWriter, PrintWriter } from '@afterburnerhq/java.io'
import { TypeDescriptor, MethodType, Lookup } from '@afterburnerhq/java.lang.invoke'
import { Consumer, Function, Supplier } from '@afterburnerhq/java.util.function'
export class AbstractMethodError extends IncompatibleClassChangeError {
constructor();
constructor(arg0: String);
 }

export interface Appendable {

append(arg0: CharSequence): Appendable;

append(arg0: CharSequence, arg1: number, arg2: number): Appendable;

append(arg0: String): Appendable;
 }

export class ArithmeticException extends RuntimeException {
constructor();
constructor(arg0: String);
 }

export class ArrayIndexOutOfBoundsException extends IndexOutOfBoundsException {
constructor();
constructor(arg0: String);
constructor(arg0: number);
 }

export class ArrayStoreException extends RuntimeException {
constructor();
constructor(arg0: String);
 }

export class AssertionError extends Error {
constructor();
constructor(arg0: Object);
constructor(arg0: boolean);
constructor(arg0: String);
constructor(arg0: number);
constructor(arg0: number);
constructor(arg0: number);
constructor(arg0: number);
constructor(arg0: String, arg1: Throwable);
 }

export interface AutoCloseable {

close(): void;
 }

export class Boolean extends Object implements Serializable, Comparable<Boolean>, Constable {
static TRUE:Boolean
static FALSE:Boolean
static TYPE:Class<Boolean>
constructor(arg0: boolean);
constructor(arg0: String);

static parseBoolean(arg0: String): boolean;

booleanValue(): boolean;

static valueOf(arg0: boolean): Boolean;

static valueOf(arg0: String): Boolean;

static toString(arg0: boolean): String;
toString(): string;

hashCode(): number;

static hashCode(arg0: boolean): number;

equals(arg0: Object): boolean;

static getBoolean(arg0: String): boolean;

compareTo(arg0: Boolean): number;

static compare(arg0: boolean, arg1: boolean): number;

static logicalAnd(arg0: boolean, arg1: boolean): boolean;

static logicalOr(arg0: boolean, arg1: boolean): boolean;

static logicalXor(arg0: boolean, arg1: boolean): boolean;

describeConstable(): Optional<DynamicConstantDesc<Boolean>>;
 }

export class BootstrapMethodError extends LinkageError {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class Byte extends Number implements Comparable<Number>, Constable {
static MIN_VALUE:number
static MAX_VALUE:number
static TYPE:Class<Number>
static SIZE:number
static BYTES:number
constructor(arg0: number);
constructor(arg0: String);

static toString(arg0: number): String;

describeConstable(): Optional<DynamicConstantDesc<Number>>;

static valueOf(arg0: number): Number;

static parseByte(arg0: String, arg1: number): number;

static parseByte(arg0: String): number;

static valueOf(arg0: String, arg1: number): Number;

static valueOf(arg0: String): Number;

static decode(arg0: String): Number;

byteValue(): number;

shortValue(): number;

intValue(): number;

longValue(): number;

floatValue(): number;

doubleValue(): number;
toString(): string;

hashCode(): number;

static hashCode(arg0: number): number;

equals(arg0: Object): boolean;

compareTo(arg0: Number): number;

static compare(arg0: number, arg1: number): number;

static compareUnsigned(arg0: number, arg1: number): number;

static toUnsignedInt(arg0: number): number;

static toUnsignedLong(arg0: number): number;
 }

export namespace CharSequence { 
function 
/* default */ compare(arg0: CharSequence, arg1: CharSequence): number;
}

export interface CharSequence {

length(): number;

charAt(arg0: number): String;

/* default */ isEmpty(): boolean;

subSequence(arg0: number, arg1: number): CharSequence;
toString(): string;

/* default */ chars(): IntStream;

/* default */ codePoints(): IntStream;
 }

export class Character extends Object implements Serializable, Comparable<String>, Constable {
static MIN_RADIX:number
static MAX_RADIX:number
static MIN_VALUE:String
static MAX_VALUE:String
static TYPE:Class<String>
static UNASSIGNED:number
static UPPERCASE_LETTER:number
static LOWERCASE_LETTER:number
static TITLECASE_LETTER:number
static MODIFIER_LETTER:number
static OTHER_LETTER:number
static NON_SPACING_MARK:number
static ENCLOSING_MARK:number
static COMBINING_SPACING_MARK:number
static DECIMAL_DIGIT_NUMBER:number
static LETTER_NUMBER:number
static OTHER_NUMBER:number
static SPACE_SEPARATOR:number
static LINE_SEPARATOR:number
static PARAGRAPH_SEPARATOR:number
static CONTROL:number
static FORMAT:number
static PRIVATE_USE:number
static SURROGATE:number
static DASH_PUNCTUATION:number
static START_PUNCTUATION:number
static END_PUNCTUATION:number
static CONNECTOR_PUNCTUATION:number
static OTHER_PUNCTUATION:number
static MATH_SYMBOL:number
static CURRENCY_SYMBOL:number
static MODIFIER_SYMBOL:number
static OTHER_SYMBOL:number
static INITIAL_QUOTE_PUNCTUATION:number
static FINAL_QUOTE_PUNCTUATION:number
static DIRECTIONALITY_UNDEFINED:number
static DIRECTIONALITY_LEFT_TO_RIGHT:number
static DIRECTIONALITY_RIGHT_TO_LEFT:number
static DIRECTIONALITY_RIGHT_TO_LEFT_ARABIC:number
static DIRECTIONALITY_EUROPEAN_NUMBER:number
static DIRECTIONALITY_EUROPEAN_NUMBER_SEPARATOR:number
static DIRECTIONALITY_EUROPEAN_NUMBER_TERMINATOR:number
static DIRECTIONALITY_ARABIC_NUMBER:number
static DIRECTIONALITY_COMMON_NUMBER_SEPARATOR:number
static DIRECTIONALITY_NONSPACING_MARK:number
static DIRECTIONALITY_BOUNDARY_NEUTRAL:number
static DIRECTIONALITY_PARAGRAPH_SEPARATOR:number
static DIRECTIONALITY_SEGMENT_SEPARATOR:number
static DIRECTIONALITY_WHITESPACE:number
static DIRECTIONALITY_OTHER_NEUTRALS:number
static DIRECTIONALITY_LEFT_TO_RIGHT_EMBEDDING:number
static DIRECTIONALITY_LEFT_TO_RIGHT_OVERRIDE:number
static DIRECTIONALITY_RIGHT_TO_LEFT_EMBEDDING:number
static DIRECTIONALITY_RIGHT_TO_LEFT_OVERRIDE:number
static DIRECTIONALITY_POP_DIRECTIONAL_FORMAT:number
static DIRECTIONALITY_LEFT_TO_RIGHT_ISOLATE:number
static DIRECTIONALITY_RIGHT_TO_LEFT_ISOLATE:number
static DIRECTIONALITY_FIRST_STRONG_ISOLATE:number
static DIRECTIONALITY_POP_DIRECTIONAL_ISOLATE:number
static MIN_HIGH_SURROGATE:String
static MAX_HIGH_SURROGATE:String
static MIN_LOW_SURROGATE:String
static MAX_LOW_SURROGATE:String
static MIN_SURROGATE:String
static MAX_SURROGATE:String
static MIN_SUPPLEMENTARY_CODE_POINT:number
static MIN_CODE_POINT:number
static MAX_CODE_POINT:number
static SIZE:number
static BYTES:number
constructor(arg0: String);

describeConstable(): Optional<DynamicConstantDesc<String>>;

static valueOf(arg0: String): String;

charValue(): String;

hashCode(): number;

static hashCode(arg0: String): number;

equals(arg0: Object): boolean;
toString(): string;

static toString(arg0: String): String;

static toString(arg0: number): String;

static isValidCodePoint(arg0: number): boolean;

static isBmpCodePoint(arg0: number): boolean;

static isSupplementaryCodePoint(arg0: number): boolean;

static isHighSurrogate(arg0: String): boolean;

static isLowSurrogate(arg0: String): boolean;

static isSurrogate(arg0: String): boolean;

static isSurrogatePair(arg0: String, arg1: String): boolean;

static charCount(arg0: number): number;

static toCodePoint(arg0: String, arg1: String): number;

static codePointAt(arg0: CharSequence, arg1: number): number;

static codePointAt(arg0: String[], arg1: number): number;

static codePointAt(arg0: String[], arg1: number, arg2: number): number;

static codePointBefore(arg0: CharSequence, arg1: number): number;

static codePointBefore(arg0: String[], arg1: number): number;

static codePointBefore(arg0: String[], arg1: number, arg2: number): number;

static highSurrogate(arg0: number): String;

static lowSurrogate(arg0: number): String;

static toChars(arg0: number, arg1: String[], arg2: number): number;

static toChars(arg0: number): String[];

static codePointCount(arg0: CharSequence, arg1: number, arg2: number): number;

static codePointCount(arg0: String[], arg1: number, arg2: number): number;

static offsetByCodePoints(arg0: CharSequence, arg1: number, arg2: number): number;

static offsetByCodePoints(arg0: String[], arg1: number, arg2: number, arg3: number, arg4: number): number;

static isLowerCase(arg0: String): boolean;

static isLowerCase(arg0: number): boolean;

static isUpperCase(arg0: String): boolean;

static isUpperCase(arg0: number): boolean;

static isTitleCase(arg0: String): boolean;

static isTitleCase(arg0: number): boolean;

static isDigit(arg0: String): boolean;

static isDigit(arg0: number): boolean;

static isDefined(arg0: String): boolean;

static isDefined(arg0: number): boolean;

static isLetter(arg0: String): boolean;

static isLetter(arg0: number): boolean;

static isLetterOrDigit(arg0: String): boolean;

static isLetterOrDigit(arg0: number): boolean;

static isJavaLetter(arg0: String): boolean;

static isJavaLetterOrDigit(arg0: String): boolean;

static isAlphabetic(arg0: number): boolean;

static isIdeographic(arg0: number): boolean;

static isJavaIdentifierStart(arg0: String): boolean;

static isJavaIdentifierStart(arg0: number): boolean;

static isJavaIdentifierPart(arg0: String): boolean;

static isJavaIdentifierPart(arg0: number): boolean;

static isUnicodeIdentifierStart(arg0: String): boolean;

static isUnicodeIdentifierStart(arg0: number): boolean;

static isUnicodeIdentifierPart(arg0: String): boolean;

static isUnicodeIdentifierPart(arg0: number): boolean;

static isIdentifierIgnorable(arg0: String): boolean;

static isIdentifierIgnorable(arg0: number): boolean;

static toLowerCase(arg0: String): String;

static toLowerCase(arg0: number): number;

static toUpperCase(arg0: String): String;

static toUpperCase(arg0: number): number;

static toTitleCase(arg0: String): String;

static toTitleCase(arg0: number): number;

static digit(arg0: String, arg1: number): number;

static digit(arg0: number, arg1: number): number;

static getNumericValue(arg0: String): number;

static getNumericValue(arg0: number): number;

static isSpace(arg0: String): boolean;

static isSpaceChar(arg0: String): boolean;

static isSpaceChar(arg0: number): boolean;

static isWhitespace(arg0: String): boolean;

static isWhitespace(arg0: number): boolean;

static isISOControl(arg0: String): boolean;

static isISOControl(arg0: number): boolean;

static getType(arg0: String): number;

static getType(arg0: number): number;

static forDigit(arg0: number, arg1: number): String;

static getDirectionality(arg0: String): number;

static getDirectionality(arg0: number): number;

static isMirrored(arg0: String): boolean;

static isMirrored(arg0: number): boolean;

compareTo(arg0: String): number;

static compare(arg0: String, arg1: String): number;

static reverseBytes(arg0: String): String;

static getName(arg0: number): String;

static codePointOf(arg0: String): number;
 }
export namespace Character { 
export class Subset {

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class UnicodeBlock extends Character.Subset {
static BASIC_LATIN:Character.UnicodeBlock
static LATIN_1_SUPPLEMENT:Character.UnicodeBlock
static LATIN_EXTENDED_A:Character.UnicodeBlock
static LATIN_EXTENDED_B:Character.UnicodeBlock
static IPA_EXTENSIONS:Character.UnicodeBlock
static SPACING_MODIFIER_LETTERS:Character.UnicodeBlock
static COMBINING_DIACRITICAL_MARKS:Character.UnicodeBlock
static GREEK:Character.UnicodeBlock
static CYRILLIC:Character.UnicodeBlock
static ARMENIAN:Character.UnicodeBlock
static HEBREW:Character.UnicodeBlock
static ARABIC:Character.UnicodeBlock
static DEVANAGARI:Character.UnicodeBlock
static BENGALI:Character.UnicodeBlock
static GURMUKHI:Character.UnicodeBlock
static GUJARATI:Character.UnicodeBlock
static ORIYA:Character.UnicodeBlock
static TAMIL:Character.UnicodeBlock
static TELUGU:Character.UnicodeBlock
static KANNADA:Character.UnicodeBlock
static MALAYALAM:Character.UnicodeBlock
static THAI:Character.UnicodeBlock
static LAO:Character.UnicodeBlock
static TIBETAN:Character.UnicodeBlock
static GEORGIAN:Character.UnicodeBlock
static HANGUL_JAMO:Character.UnicodeBlock
static LATIN_EXTENDED_ADDITIONAL:Character.UnicodeBlock
static GREEK_EXTENDED:Character.UnicodeBlock
static GENERAL_PUNCTUATION:Character.UnicodeBlock
static SUPERSCRIPTS_AND_SUBSCRIPTS:Character.UnicodeBlock
static CURRENCY_SYMBOLS:Character.UnicodeBlock
static COMBINING_MARKS_FOR_SYMBOLS:Character.UnicodeBlock
static LETTERLIKE_SYMBOLS:Character.UnicodeBlock
static NUMBER_FORMS:Character.UnicodeBlock
static ARROWS:Character.UnicodeBlock
static MATHEMATICAL_OPERATORS:Character.UnicodeBlock
static MISCELLANEOUS_TECHNICAL:Character.UnicodeBlock
static CONTROL_PICTURES:Character.UnicodeBlock
static OPTICAL_CHARACTER_RECOGNITION:Character.UnicodeBlock
static ENCLOSED_ALPHANUMERICS:Character.UnicodeBlock
static BOX_DRAWING:Character.UnicodeBlock
static BLOCK_ELEMENTS:Character.UnicodeBlock
static GEOMETRIC_SHAPES:Character.UnicodeBlock
static MISCELLANEOUS_SYMBOLS:Character.UnicodeBlock
static DINGBATS:Character.UnicodeBlock
static CJK_SYMBOLS_AND_PUNCTUATION:Character.UnicodeBlock
static HIRAGANA:Character.UnicodeBlock
static KATAKANA:Character.UnicodeBlock
static BOPOMOFO:Character.UnicodeBlock
static HANGUL_COMPATIBILITY_JAMO:Character.UnicodeBlock
static KANBUN:Character.UnicodeBlock
static ENCLOSED_CJK_LETTERS_AND_MONTHS:Character.UnicodeBlock
static CJK_COMPATIBILITY:Character.UnicodeBlock
static CJK_UNIFIED_IDEOGRAPHS:Character.UnicodeBlock
static HANGUL_SYLLABLES:Character.UnicodeBlock
static PRIVATE_USE_AREA:Character.UnicodeBlock
static CJK_COMPATIBILITY_IDEOGRAPHS:Character.UnicodeBlock
static ALPHABETIC_PRESENTATION_FORMS:Character.UnicodeBlock
static ARABIC_PRESENTATION_FORMS_A:Character.UnicodeBlock
static COMBINING_HALF_MARKS:Character.UnicodeBlock
static CJK_COMPATIBILITY_FORMS:Character.UnicodeBlock
static SMALL_FORM_VARIANTS:Character.UnicodeBlock
static ARABIC_PRESENTATION_FORMS_B:Character.UnicodeBlock
static HALFWIDTH_AND_FULLWIDTH_FORMS:Character.UnicodeBlock
static SPECIALS:Character.UnicodeBlock
static SURROGATES_AREA:Character.UnicodeBlock
static SYRIAC:Character.UnicodeBlock
static THAANA:Character.UnicodeBlock
static SINHALA:Character.UnicodeBlock
static MYANMAR:Character.UnicodeBlock
static ETHIOPIC:Character.UnicodeBlock
static CHEROKEE:Character.UnicodeBlock
static UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS:Character.UnicodeBlock
static OGHAM:Character.UnicodeBlock
static RUNIC:Character.UnicodeBlock
static KHMER:Character.UnicodeBlock
static MONGOLIAN:Character.UnicodeBlock
static BRAILLE_PATTERNS:Character.UnicodeBlock
static CJK_RADICALS_SUPPLEMENT:Character.UnicodeBlock
static KANGXI_RADICALS:Character.UnicodeBlock
static IDEOGRAPHIC_DESCRIPTION_CHARACTERS:Character.UnicodeBlock
static BOPOMOFO_EXTENDED:Character.UnicodeBlock
static CJK_UNIFIED_IDEOGRAPHS_EXTENSION_A:Character.UnicodeBlock
static YI_SYLLABLES:Character.UnicodeBlock
static YI_RADICALS:Character.UnicodeBlock
static CYRILLIC_SUPPLEMENTARY:Character.UnicodeBlock
static TAGALOG:Character.UnicodeBlock
static HANUNOO:Character.UnicodeBlock
static BUHID:Character.UnicodeBlock
static TAGBANWA:Character.UnicodeBlock
static LIMBU:Character.UnicodeBlock
static TAI_LE:Character.UnicodeBlock
static KHMER_SYMBOLS:Character.UnicodeBlock
static PHONETIC_EXTENSIONS:Character.UnicodeBlock
static MISCELLANEOUS_MATHEMATICAL_SYMBOLS_A:Character.UnicodeBlock
static SUPPLEMENTAL_ARROWS_A:Character.UnicodeBlock
static SUPPLEMENTAL_ARROWS_B:Character.UnicodeBlock
static MISCELLANEOUS_MATHEMATICAL_SYMBOLS_B:Character.UnicodeBlock
static SUPPLEMENTAL_MATHEMATICAL_OPERATORS:Character.UnicodeBlock
static MISCELLANEOUS_SYMBOLS_AND_ARROWS:Character.UnicodeBlock
static KATAKANA_PHONETIC_EXTENSIONS:Character.UnicodeBlock
static YIJING_HEXAGRAM_SYMBOLS:Character.UnicodeBlock
static VARIATION_SELECTORS:Character.UnicodeBlock
static LINEAR_B_SYLLABARY:Character.UnicodeBlock
static LINEAR_B_IDEOGRAMS:Character.UnicodeBlock
static AEGEAN_NUMBERS:Character.UnicodeBlock
static OLD_ITALIC:Character.UnicodeBlock
static GOTHIC:Character.UnicodeBlock
static UGARITIC:Character.UnicodeBlock
static DESERET:Character.UnicodeBlock
static SHAVIAN:Character.UnicodeBlock
static OSMANYA:Character.UnicodeBlock
static CYPRIOT_SYLLABARY:Character.UnicodeBlock
static BYZANTINE_MUSICAL_SYMBOLS:Character.UnicodeBlock
static MUSICAL_SYMBOLS:Character.UnicodeBlock
static TAI_XUAN_JING_SYMBOLS:Character.UnicodeBlock
static MATHEMATICAL_ALPHANUMERIC_SYMBOLS:Character.UnicodeBlock
static CJK_UNIFIED_IDEOGRAPHS_EXTENSION_B:Character.UnicodeBlock
static CJK_COMPATIBILITY_IDEOGRAPHS_SUPPLEMENT:Character.UnicodeBlock
static TAGS:Character.UnicodeBlock
static VARIATION_SELECTORS_SUPPLEMENT:Character.UnicodeBlock
static SUPPLEMENTARY_PRIVATE_USE_AREA_A:Character.UnicodeBlock
static SUPPLEMENTARY_PRIVATE_USE_AREA_B:Character.UnicodeBlock
static HIGH_SURROGATES:Character.UnicodeBlock
static HIGH_PRIVATE_USE_SURROGATES:Character.UnicodeBlock
static LOW_SURROGATES:Character.UnicodeBlock
static ARABIC_SUPPLEMENT:Character.UnicodeBlock
static NKO:Character.UnicodeBlock
static SAMARITAN:Character.UnicodeBlock
static MANDAIC:Character.UnicodeBlock
static ETHIOPIC_SUPPLEMENT:Character.UnicodeBlock
static UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS_EXTENDED:Character.UnicodeBlock
static NEW_TAI_LUE:Character.UnicodeBlock
static BUGINESE:Character.UnicodeBlock
static TAI_THAM:Character.UnicodeBlock
static BALINESE:Character.UnicodeBlock
static SUNDANESE:Character.UnicodeBlock
static BATAK:Character.UnicodeBlock
static LEPCHA:Character.UnicodeBlock
static OL_CHIKI:Character.UnicodeBlock
static VEDIC_EXTENSIONS:Character.UnicodeBlock
static PHONETIC_EXTENSIONS_SUPPLEMENT:Character.UnicodeBlock
static COMBINING_DIACRITICAL_MARKS_SUPPLEMENT:Character.UnicodeBlock
static GLAGOLITIC:Character.UnicodeBlock
static LATIN_EXTENDED_C:Character.UnicodeBlock
static COPTIC:Character.UnicodeBlock
static GEORGIAN_SUPPLEMENT:Character.UnicodeBlock
static TIFINAGH:Character.UnicodeBlock
static ETHIOPIC_EXTENDED:Character.UnicodeBlock
static CYRILLIC_EXTENDED_A:Character.UnicodeBlock
static SUPPLEMENTAL_PUNCTUATION:Character.UnicodeBlock
static CJK_STROKES:Character.UnicodeBlock
static LISU:Character.UnicodeBlock
static VAI:Character.UnicodeBlock
static CYRILLIC_EXTENDED_B:Character.UnicodeBlock
static BAMUM:Character.UnicodeBlock
static MODIFIER_TONE_LETTERS:Character.UnicodeBlock
static LATIN_EXTENDED_D:Character.UnicodeBlock
static SYLOTI_NAGRI:Character.UnicodeBlock
static COMMON_INDIC_NUMBER_FORMS:Character.UnicodeBlock
static PHAGS_PA:Character.UnicodeBlock
static SAURASHTRA:Character.UnicodeBlock
static DEVANAGARI_EXTENDED:Character.UnicodeBlock
static KAYAH_LI:Character.UnicodeBlock
static REJANG:Character.UnicodeBlock
static HANGUL_JAMO_EXTENDED_A:Character.UnicodeBlock
static JAVANESE:Character.UnicodeBlock
static CHAM:Character.UnicodeBlock
static MYANMAR_EXTENDED_A:Character.UnicodeBlock
static TAI_VIET:Character.UnicodeBlock
static ETHIOPIC_EXTENDED_A:Character.UnicodeBlock
static MEETEI_MAYEK:Character.UnicodeBlock
static HANGUL_JAMO_EXTENDED_B:Character.UnicodeBlock
static VERTICAL_FORMS:Character.UnicodeBlock
static ANCIENT_GREEK_NUMBERS:Character.UnicodeBlock
static ANCIENT_SYMBOLS:Character.UnicodeBlock
static PHAISTOS_DISC:Character.UnicodeBlock
static LYCIAN:Character.UnicodeBlock
static CARIAN:Character.UnicodeBlock
static OLD_PERSIAN:Character.UnicodeBlock
static IMPERIAL_ARAMAIC:Character.UnicodeBlock
static PHOENICIAN:Character.UnicodeBlock
static LYDIAN:Character.UnicodeBlock
static KHAROSHTHI:Character.UnicodeBlock
static OLD_SOUTH_ARABIAN:Character.UnicodeBlock
static AVESTAN:Character.UnicodeBlock
static INSCRIPTIONAL_PARTHIAN:Character.UnicodeBlock
static INSCRIPTIONAL_PAHLAVI:Character.UnicodeBlock
static OLD_TURKIC:Character.UnicodeBlock
static RUMI_NUMERAL_SYMBOLS:Character.UnicodeBlock
static BRAHMI:Character.UnicodeBlock
static KAITHI:Character.UnicodeBlock
static CUNEIFORM:Character.UnicodeBlock
static CUNEIFORM_NUMBERS_AND_PUNCTUATION:Character.UnicodeBlock
static EGYPTIAN_HIEROGLYPHS:Character.UnicodeBlock
static BAMUM_SUPPLEMENT:Character.UnicodeBlock
static KANA_SUPPLEMENT:Character.UnicodeBlock
static ANCIENT_GREEK_MUSICAL_NOTATION:Character.UnicodeBlock
static COUNTING_ROD_NUMERALS:Character.UnicodeBlock
static MAHJONG_TILES:Character.UnicodeBlock
static DOMINO_TILES:Character.UnicodeBlock
static PLAYING_CARDS:Character.UnicodeBlock
static ENCLOSED_ALPHANUMERIC_SUPPLEMENT:Character.UnicodeBlock
static ENCLOSED_IDEOGRAPHIC_SUPPLEMENT:Character.UnicodeBlock
static MISCELLANEOUS_SYMBOLS_AND_PICTOGRAPHS:Character.UnicodeBlock
static EMOTICONS:Character.UnicodeBlock
static TRANSPORT_AND_MAP_SYMBOLS:Character.UnicodeBlock
static ALCHEMICAL_SYMBOLS:Character.UnicodeBlock
static CJK_UNIFIED_IDEOGRAPHS_EXTENSION_C:Character.UnicodeBlock
static CJK_UNIFIED_IDEOGRAPHS_EXTENSION_D:Character.UnicodeBlock
static ARABIC_EXTENDED_A:Character.UnicodeBlock
static SUNDANESE_SUPPLEMENT:Character.UnicodeBlock
static MEETEI_MAYEK_EXTENSIONS:Character.UnicodeBlock
static MEROITIC_HIEROGLYPHS:Character.UnicodeBlock
static MEROITIC_CURSIVE:Character.UnicodeBlock
static SORA_SOMPENG:Character.UnicodeBlock
static CHAKMA:Character.UnicodeBlock
static SHARADA:Character.UnicodeBlock
static TAKRI:Character.UnicodeBlock
static MIAO:Character.UnicodeBlock
static ARABIC_MATHEMATICAL_ALPHABETIC_SYMBOLS:Character.UnicodeBlock
static COMBINING_DIACRITICAL_MARKS_EXTENDED:Character.UnicodeBlock
static MYANMAR_EXTENDED_B:Character.UnicodeBlock
static LATIN_EXTENDED_E:Character.UnicodeBlock
static COPTIC_EPACT_NUMBERS:Character.UnicodeBlock
static OLD_PERMIC:Character.UnicodeBlock
static ELBASAN:Character.UnicodeBlock
static CAUCASIAN_ALBANIAN:Character.UnicodeBlock
static LINEAR_A:Character.UnicodeBlock
static PALMYRENE:Character.UnicodeBlock
static NABATAEAN:Character.UnicodeBlock
static OLD_NORTH_ARABIAN:Character.UnicodeBlock
static MANICHAEAN:Character.UnicodeBlock
static PSALTER_PAHLAVI:Character.UnicodeBlock
static MAHAJANI:Character.UnicodeBlock
static SINHALA_ARCHAIC_NUMBERS:Character.UnicodeBlock
static KHOJKI:Character.UnicodeBlock
static KHUDAWADI:Character.UnicodeBlock
static GRANTHA:Character.UnicodeBlock
static TIRHUTA:Character.UnicodeBlock
static SIDDHAM:Character.UnicodeBlock
static MODI:Character.UnicodeBlock
static WARANG_CITI:Character.UnicodeBlock
static PAU_CIN_HAU:Character.UnicodeBlock
static MRO:Character.UnicodeBlock
static BASSA_VAH:Character.UnicodeBlock
static PAHAWH_HMONG:Character.UnicodeBlock
static DUPLOYAN:Character.UnicodeBlock
static SHORTHAND_FORMAT_CONTROLS:Character.UnicodeBlock
static MENDE_KIKAKUI:Character.UnicodeBlock
static ORNAMENTAL_DINGBATS:Character.UnicodeBlock
static GEOMETRIC_SHAPES_EXTENDED:Character.UnicodeBlock
static SUPPLEMENTAL_ARROWS_C:Character.UnicodeBlock
static CHEROKEE_SUPPLEMENT:Character.UnicodeBlock
static HATRAN:Character.UnicodeBlock
static OLD_HUNGARIAN:Character.UnicodeBlock
static MULTANI:Character.UnicodeBlock
static AHOM:Character.UnicodeBlock
static EARLY_DYNASTIC_CUNEIFORM:Character.UnicodeBlock
static ANATOLIAN_HIEROGLYPHS:Character.UnicodeBlock
static SUTTON_SIGNWRITING:Character.UnicodeBlock
static SUPPLEMENTAL_SYMBOLS_AND_PICTOGRAPHS:Character.UnicodeBlock
static CJK_UNIFIED_IDEOGRAPHS_EXTENSION_E:Character.UnicodeBlock
static SYRIAC_SUPPLEMENT:Character.UnicodeBlock
static CYRILLIC_EXTENDED_C:Character.UnicodeBlock
static OSAGE:Character.UnicodeBlock
static NEWA:Character.UnicodeBlock
static MONGOLIAN_SUPPLEMENT:Character.UnicodeBlock
static MARCHEN:Character.UnicodeBlock
static IDEOGRAPHIC_SYMBOLS_AND_PUNCTUATION:Character.UnicodeBlock
static TANGUT:Character.UnicodeBlock
static TANGUT_COMPONENTS:Character.UnicodeBlock
static KANA_EXTENDED_A:Character.UnicodeBlock
static GLAGOLITIC_SUPPLEMENT:Character.UnicodeBlock
static ADLAM:Character.UnicodeBlock
static MASARAM_GONDI:Character.UnicodeBlock
static ZANABAZAR_SQUARE:Character.UnicodeBlock
static NUSHU:Character.UnicodeBlock
static SOYOMBO:Character.UnicodeBlock
static BHAIKSUKI:Character.UnicodeBlock
static CJK_UNIFIED_IDEOGRAPHS_EXTENSION_F:Character.UnicodeBlock
static GEORGIAN_EXTENDED:Character.UnicodeBlock
static HANIFI_ROHINGYA:Character.UnicodeBlock
static OLD_SOGDIAN:Character.UnicodeBlock
static SOGDIAN:Character.UnicodeBlock
static DOGRA:Character.UnicodeBlock
static GUNJALA_GONDI:Character.UnicodeBlock
static MAKASAR:Character.UnicodeBlock
static MEDEFAIDRIN:Character.UnicodeBlock
static MAYAN_NUMERALS:Character.UnicodeBlock
static INDIC_SIYAQ_NUMBERS:Character.UnicodeBlock
static CHESS_SYMBOLS:Character.UnicodeBlock
static ELYMAIC:Character.UnicodeBlock
static NANDINAGARI:Character.UnicodeBlock
static TAMIL_SUPPLEMENT:Character.UnicodeBlock
static EGYPTIAN_HIEROGLYPH_FORMAT_CONTROLS:Character.UnicodeBlock
static SMALL_KANA_EXTENSION:Character.UnicodeBlock
static NYIAKENG_PUACHUE_HMONG:Character.UnicodeBlock
static WANCHO:Character.UnicodeBlock
static OTTOMAN_SIYAQ_NUMBERS:Character.UnicodeBlock
static SYMBOLS_AND_PICTOGRAPHS_EXTENDED_A:Character.UnicodeBlock
static YEZIDI:Character.UnicodeBlock
static CHORASMIAN:Character.UnicodeBlock
static DIVES_AKURU:Character.UnicodeBlock
static LISU_SUPPLEMENT:Character.UnicodeBlock
static KHITAN_SMALL_SCRIPT:Character.UnicodeBlock
static TANGUT_SUPPLEMENT:Character.UnicodeBlock
static SYMBOLS_FOR_LEGACY_COMPUTING:Character.UnicodeBlock
static CJK_UNIFIED_IDEOGRAPHS_EXTENSION_G:Character.UnicodeBlock

static of(arg0: String): Character.UnicodeBlock;

static of(arg0: number): Character.UnicodeBlock;

static forName(arg0: String): Character.UnicodeBlock;
 }

export class UnicodeScript extends Enum<Character.UnicodeScript> {
static COMMON:Character.UnicodeScript
static LATIN:Character.UnicodeScript
static GREEK:Character.UnicodeScript
static CYRILLIC:Character.UnicodeScript
static ARMENIAN:Character.UnicodeScript
static HEBREW:Character.UnicodeScript
static ARABIC:Character.UnicodeScript
static SYRIAC:Character.UnicodeScript
static THAANA:Character.UnicodeScript
static DEVANAGARI:Character.UnicodeScript
static BENGALI:Character.UnicodeScript
static GURMUKHI:Character.UnicodeScript
static GUJARATI:Character.UnicodeScript
static ORIYA:Character.UnicodeScript
static TAMIL:Character.UnicodeScript
static TELUGU:Character.UnicodeScript
static KANNADA:Character.UnicodeScript
static MALAYALAM:Character.UnicodeScript
static SINHALA:Character.UnicodeScript
static THAI:Character.UnicodeScript
static LAO:Character.UnicodeScript
static TIBETAN:Character.UnicodeScript
static MYANMAR:Character.UnicodeScript
static GEORGIAN:Character.UnicodeScript
static HANGUL:Character.UnicodeScript
static ETHIOPIC:Character.UnicodeScript
static CHEROKEE:Character.UnicodeScript
static CANADIAN_ABORIGINAL:Character.UnicodeScript
static OGHAM:Character.UnicodeScript
static RUNIC:Character.UnicodeScript
static KHMER:Character.UnicodeScript
static MONGOLIAN:Character.UnicodeScript
static HIRAGANA:Character.UnicodeScript
static KATAKANA:Character.UnicodeScript
static BOPOMOFO:Character.UnicodeScript
static HAN:Character.UnicodeScript
static YI:Character.UnicodeScript
static OLD_ITALIC:Character.UnicodeScript
static GOTHIC:Character.UnicodeScript
static DESERET:Character.UnicodeScript
static INHERITED:Character.UnicodeScript
static TAGALOG:Character.UnicodeScript
static HANUNOO:Character.UnicodeScript
static BUHID:Character.UnicodeScript
static TAGBANWA:Character.UnicodeScript
static LIMBU:Character.UnicodeScript
static TAI_LE:Character.UnicodeScript
static LINEAR_B:Character.UnicodeScript
static UGARITIC:Character.UnicodeScript
static SHAVIAN:Character.UnicodeScript
static OSMANYA:Character.UnicodeScript
static CYPRIOT:Character.UnicodeScript
static BRAILLE:Character.UnicodeScript
static BUGINESE:Character.UnicodeScript
static COPTIC:Character.UnicodeScript
static NEW_TAI_LUE:Character.UnicodeScript
static GLAGOLITIC:Character.UnicodeScript
static TIFINAGH:Character.UnicodeScript
static SYLOTI_NAGRI:Character.UnicodeScript
static OLD_PERSIAN:Character.UnicodeScript
static KHAROSHTHI:Character.UnicodeScript
static BALINESE:Character.UnicodeScript
static CUNEIFORM:Character.UnicodeScript
static PHOENICIAN:Character.UnicodeScript
static PHAGS_PA:Character.UnicodeScript
static NKO:Character.UnicodeScript
static SUNDANESE:Character.UnicodeScript
static BATAK:Character.UnicodeScript
static LEPCHA:Character.UnicodeScript
static OL_CHIKI:Character.UnicodeScript
static VAI:Character.UnicodeScript
static SAURASHTRA:Character.UnicodeScript
static KAYAH_LI:Character.UnicodeScript
static REJANG:Character.UnicodeScript
static LYCIAN:Character.UnicodeScript
static CARIAN:Character.UnicodeScript
static LYDIAN:Character.UnicodeScript
static CHAM:Character.UnicodeScript
static TAI_THAM:Character.UnicodeScript
static TAI_VIET:Character.UnicodeScript
static AVESTAN:Character.UnicodeScript
static EGYPTIAN_HIEROGLYPHS:Character.UnicodeScript
static SAMARITAN:Character.UnicodeScript
static MANDAIC:Character.UnicodeScript
static LISU:Character.UnicodeScript
static BAMUM:Character.UnicodeScript
static JAVANESE:Character.UnicodeScript
static MEETEI_MAYEK:Character.UnicodeScript
static IMPERIAL_ARAMAIC:Character.UnicodeScript
static OLD_SOUTH_ARABIAN:Character.UnicodeScript
static INSCRIPTIONAL_PARTHIAN:Character.UnicodeScript
static INSCRIPTIONAL_PAHLAVI:Character.UnicodeScript
static OLD_TURKIC:Character.UnicodeScript
static BRAHMI:Character.UnicodeScript
static KAITHI:Character.UnicodeScript
static MEROITIC_HIEROGLYPHS:Character.UnicodeScript
static MEROITIC_CURSIVE:Character.UnicodeScript
static SORA_SOMPENG:Character.UnicodeScript
static CHAKMA:Character.UnicodeScript
static SHARADA:Character.UnicodeScript
static TAKRI:Character.UnicodeScript
static MIAO:Character.UnicodeScript
static CAUCASIAN_ALBANIAN:Character.UnicodeScript
static BASSA_VAH:Character.UnicodeScript
static DUPLOYAN:Character.UnicodeScript
static ELBASAN:Character.UnicodeScript
static GRANTHA:Character.UnicodeScript
static PAHAWH_HMONG:Character.UnicodeScript
static KHOJKI:Character.UnicodeScript
static LINEAR_A:Character.UnicodeScript
static MAHAJANI:Character.UnicodeScript
static MANICHAEAN:Character.UnicodeScript
static MENDE_KIKAKUI:Character.UnicodeScript
static MODI:Character.UnicodeScript
static MRO:Character.UnicodeScript
static OLD_NORTH_ARABIAN:Character.UnicodeScript
static NABATAEAN:Character.UnicodeScript
static PALMYRENE:Character.UnicodeScript
static PAU_CIN_HAU:Character.UnicodeScript
static OLD_PERMIC:Character.UnicodeScript
static PSALTER_PAHLAVI:Character.UnicodeScript
static SIDDHAM:Character.UnicodeScript
static KHUDAWADI:Character.UnicodeScript
static TIRHUTA:Character.UnicodeScript
static WARANG_CITI:Character.UnicodeScript
static AHOM:Character.UnicodeScript
static ANATOLIAN_HIEROGLYPHS:Character.UnicodeScript
static HATRAN:Character.UnicodeScript
static MULTANI:Character.UnicodeScript
static OLD_HUNGARIAN:Character.UnicodeScript
static SIGNWRITING:Character.UnicodeScript
static ADLAM:Character.UnicodeScript
static BHAIKSUKI:Character.UnicodeScript
static MARCHEN:Character.UnicodeScript
static NEWA:Character.UnicodeScript
static OSAGE:Character.UnicodeScript
static TANGUT:Character.UnicodeScript
static MASARAM_GONDI:Character.UnicodeScript
static NUSHU:Character.UnicodeScript
static SOYOMBO:Character.UnicodeScript
static ZANABAZAR_SQUARE:Character.UnicodeScript
static HANIFI_ROHINGYA:Character.UnicodeScript
static OLD_SOGDIAN:Character.UnicodeScript
static SOGDIAN:Character.UnicodeScript
static DOGRA:Character.UnicodeScript
static GUNJALA_GONDI:Character.UnicodeScript
static MAKASAR:Character.UnicodeScript
static MEDEFAIDRIN:Character.UnicodeScript
static ELYMAIC:Character.UnicodeScript
static NANDINAGARI:Character.UnicodeScript
static NYIAKENG_PUACHUE_HMONG:Character.UnicodeScript
static WANCHO:Character.UnicodeScript
static YEZIDI:Character.UnicodeScript
static CHORASMIAN:Character.UnicodeScript
static DIVES_AKURU:Character.UnicodeScript
static KHITAN_SMALL_SCRIPT:Character.UnicodeScript
static UNKNOWN:Character.UnicodeScript

static values(): Character.UnicodeScript[];

static valueOf(arg0: String): Character.UnicodeScript;

static of(arg0: number): Character.UnicodeScript;

static forName(arg0: String): Character.UnicodeScript;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class Class<T extends Object> extends Object implements Serializable, GenericDeclaration, Type, AnnotatedElement, TypeDescriptor.OfField<Class<any>>, Constable {
toString(): string;

toGenericString(): String;

static forName(arg0: String): Class<any>;

static forName(arg0: String, arg1: boolean, arg2: ClassLoader): Class<any>;

static forName(arg0: Module, arg1: String): Class<any>;

newInstance(): T;

isInstance(arg0: Object): boolean;

isAssignableFrom(arg0: Class<any>): boolean;

isInterface(): boolean;

isArray(): boolean;

isPrimitive(): boolean;

isAnnotation(): boolean;

isSynthetic(): boolean;

getName(): String;

getClassLoader(): ClassLoader;

getModule(): Module;

getTypeParameters(): TypeVariable<Class<T>>[];

getSuperclass(): Class<T>;

getGenericSuperclass(): Type;

getPackage(): Package;

getPackageName(): String;

getInterfaces(): Class<any>[];

getGenericInterfaces(): Type[];

getComponentType(): Class<any>;

getModifiers(): number;

getSigners(): Object[];

getEnclosingMethod(): Method;

getEnclosingConstructor(): Constructor<any>;

getDeclaringClass(): Class<any>;

getEnclosingClass(): Class<any>;

getSimpleName(): String;

getTypeName(): String;

getCanonicalName(): String;

isAnonymousClass(): boolean;

isLocalClass(): boolean;

isMemberClass(): boolean;

getClasses(): Class<any>[];

getFields(): Field[];

getMethods(): Method[];

getConstructors(): Constructor<any>[];

getField(arg0: String): Field;

getMethod(arg0: String, arg1: Class<any>[]): Method;

getConstructor(arg0: Class<any>[]): Constructor<T>;

getDeclaredClasses(): Class<any>[];

getDeclaredFields(): Field[];

getRecordComponents(): RecordComponent[];

getDeclaredMethods(): Method[];

getDeclaredConstructors(): Constructor<any>[];

getDeclaredField(arg0: String): Field;

getDeclaredMethod(arg0: String, arg1: Class<any>[]): Method;

getDeclaredConstructor(arg0: Class<any>[]): Constructor<T>;

getResourceAsStream(arg0: String): InputStream;

getResource(arg0: String): URL;

getProtectionDomain(): ProtectionDomain;

desiredAssertionStatus(): boolean;

isEnum(): boolean;

isRecord(): boolean;

getEnumConstants(): T[];

cast(arg0: Object): T;

asSubclass<U extends Object>(arg0: Class<U>): Class<U>;

getAnnotation<A extends Annotation>(arg0: Class<A>): A;

isAnnotationPresent(arg0: Class<Annotation>): boolean;

getAnnotationsByType<A extends Annotation>(arg0: Class<A>): A[];

getAnnotations(): Annotation[];

getDeclaredAnnotation<A extends Annotation>(arg0: Class<A>): A;

getDeclaredAnnotationsByType<A extends Annotation>(arg0: Class<A>): A[];

getDeclaredAnnotations(): Annotation[];

getAnnotatedSuperclass(): AnnotatedType;

getAnnotatedInterfaces(): AnnotatedType[];

getNestHost(): Class<any>;

isNestmateOf(arg0: Class<any>): boolean;

getNestMembers(): Class<any>[];

descriptorString(): String;

componentType(): Class<any>;

arrayType(): Class<any>;

describeConstable(): Optional<ClassDesc>;

isHidden(): boolean;

getPermittedSubclasses(): Class<any>[];

isSealed(): boolean;
 }

export class ClassCastException extends RuntimeException {
constructor();
constructor(arg0: String);
 }

export class ClassCircularityError extends LinkageError {
constructor();
constructor(arg0: String);
 }

export class ClassFormatError extends LinkageError {
constructor();
constructor(arg0: String);
 }

export abstract class ClassLoader {

getName(): String;

loadClass(arg0: String): Class<any>;

getResource(arg0: String): URL;

getResources(arg0: String): Enumeration<URL>;

resources(arg0: String): Stream<URL>;

isRegisteredAsParallelCapable(): boolean;

static getSystemResource(arg0: String): URL;

static getSystemResources(arg0: String): Enumeration<URL>;

getResourceAsStream(arg0: String): InputStream;

static getSystemResourceAsStream(arg0: String): InputStream;

getParent(): ClassLoader;

getUnnamedModule(): Module;

static getPlatformClassLoader(): ClassLoader;

static getSystemClassLoader(): ClassLoader;

getDefinedPackage(arg0: String): Package;

getDefinedPackages(): Package[];

setDefaultAssertionStatus(arg0: boolean): void;

setPackageAssertionStatus(arg0: String, arg1: boolean): void;

setClassAssertionStatus(arg0: String, arg1: boolean): void;

clearAssertionStatus(): void;
 }

export class ClassNotFoundException extends ReflectiveOperationException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);

getException(): Throwable;
 }

export abstract class ClassValue<T extends Object> extends Object {

get(arg0: Class<any>): T;

remove(arg0: Class<any>): void;
 }

export class CloneNotSupportedException extends Exception {
constructor();
constructor(arg0: String);
 }

export interface Cloneable {
 }

export interface Comparable<T extends Object> extends Object {

compareTo(arg0: T): number;
 }

export class Compiler {

static compileClass(arg0: Class<any>): boolean;

static compileClasses(arg0: String): boolean;

static command(arg0: Object): Object;

static enable(): void;

static disable(): void;
 }


export class Double extends Number implements Comparable<Number>, Constable, ConstantDesc {
static POSITIVE_INFINITY:number
static NEGATIVE_INFINITY:number
static NaN:number
static MAX_VALUE:number
static MIN_NORMAL:number
static MIN_VALUE:number
static MAX_EXPONENT:number
static MIN_EXPONENT:number
static SIZE:number
static BYTES:number
static TYPE:Class<Number>
constructor(arg0: number);
constructor(arg0: String);

static toString(arg0: number): String;

static toHexString(arg0: number): String;

static valueOf(arg0: String): Number;

static valueOf(arg0: number): Number;

static parseDouble(arg0: String): number;

static isNaN(arg0: number): boolean;

static isInfinite(arg0: number): boolean;

static isFinite(arg0: number): boolean;

isNaN(): boolean;

isInfinite(): boolean;
toString(): string;

byteValue(): number;

shortValue(): number;

intValue(): number;

longValue(): number;

floatValue(): number;

doubleValue(): number;

hashCode(): number;

static hashCode(arg0: number): number;

equals(arg0: Object): boolean;

static doubleToLongBits(arg0: number): number;

static doubleToRawLongBits(arg0: number): number;

static longBitsToDouble(arg0: number): number;

compareTo(arg0: Number): number;

static compare(arg0: number, arg1: number): number;

static sum(arg0: number, arg1: number): number;

static max(arg0: number, arg1: number): number;

static min(arg0: number, arg1: number): number;

describeConstable(): Optional<Number>;

resolveConstantDesc(arg0: Lookup): Number;
 }

export abstract class Enum<E extends Enum<E>> extends Object implements Constable, Comparable<E>, Serializable {

name(): String;

ordinal(): number;
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;

compareTo(arg0: E): number;

getDeclaringClass(): Class<E>;

describeConstable(): Optional<Enum.EnumDesc<E>>;

static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }
export namespace Enum { 
export class EnumDesc<E extends Enum<E>> extends DynamicConstantDesc<E> {

static of<E extends Enum<E>>(arg0: ClassDesc, arg1: String): Enum.EnumDesc<E>;

resolveConstantDesc(arg0: Lookup): E;
toString(): string;
 }

}

export class EnumConstantNotPresentException extends RuntimeException {
constructor(arg0: Class<Enum>, arg1: String);

enumType(): Class<Enum>;

constantName(): String;
 }

export class Error extends Throwable {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class Exception extends Throwable {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class ExceptionInInitializerError extends LinkageError {
constructor();
constructor(arg0: Throwable);
constructor(arg0: String);

getException(): Throwable;
 }

export class Float extends Number implements Comparable<Number>, Constable, ConstantDesc {
static POSITIVE_INFINITY:number
static NEGATIVE_INFINITY:number
static NaN:number
static MAX_VALUE:number
static MIN_NORMAL:number
static MIN_VALUE:number
static MAX_EXPONENT:number
static MIN_EXPONENT:number
static SIZE:number
static BYTES:number
static TYPE:Class<Number>
constructor(arg0: number);
constructor(arg0: number);
constructor(arg0: String);

static toString(arg0: number): String;

static toHexString(arg0: number): String;

static valueOf(arg0: String): Number;

static valueOf(arg0: number): Number;

static parseFloat(arg0: String): number;

static isNaN(arg0: number): boolean;

static isInfinite(arg0: number): boolean;

static isFinite(arg0: number): boolean;

isNaN(): boolean;

isInfinite(): boolean;
toString(): string;

byteValue(): number;

shortValue(): number;

intValue(): number;

longValue(): number;

floatValue(): number;

doubleValue(): number;

hashCode(): number;

static hashCode(arg0: number): number;

equals(arg0: Object): boolean;

static floatToIntBits(arg0: number): number;

static floatToRawIntBits(arg0: number): number;

static intBitsToFloat(arg0: number): number;

compareTo(arg0: Number): number;

static compare(arg0: number, arg1: number): number;

static sum(arg0: number, arg1: number): number;

static max(arg0: number, arg1: number): number;

static min(arg0: number, arg1: number): number;

describeConstable(): Optional<Number>;

resolveConstantDesc(arg0: Lookup): Number;
 }


export class IllegalAccessError extends IncompatibleClassChangeError {
constructor();
constructor(arg0: String);
 }

export class IllegalAccessException extends ReflectiveOperationException {
constructor();
constructor(arg0: String);
 }

export class IllegalArgumentException extends RuntimeException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class IllegalCallerException extends RuntimeException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class IllegalMonitorStateException extends RuntimeException {
constructor();
constructor(arg0: String);
 }

export class IllegalStateException extends RuntimeException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class IllegalThreadStateException extends IllegalArgumentException {
constructor();
constructor(arg0: String);
 }

export class IncompatibleClassChangeError extends LinkageError {
constructor();
constructor(arg0: String);
 }

export class IndexOutOfBoundsException extends RuntimeException {
constructor();
constructor(arg0: String);
constructor(arg0: number);
constructor(arg0: number);
 }

export class InheritableThreadLocal<T extends Object> extends ThreadLocal<T> {
constructor();
 }

export class InstantiationError extends IncompatibleClassChangeError {
constructor();
constructor(arg0: String);
 }

export class InstantiationException extends ReflectiveOperationException {
constructor();
constructor(arg0: String);
 }

export class Integer extends Number implements Comparable<Number>, Constable, ConstantDesc {
static MIN_VALUE:number
static MAX_VALUE:number
static TYPE:Class<Number>
static SIZE:number
static BYTES:number
constructor(arg0: number);
constructor(arg0: String);

static toString(arg0: number, arg1: number): String;

static toUnsignedString(arg0: number, arg1: number): String;

static toHexString(arg0: number): String;

static toOctalString(arg0: number): String;

static toBinaryString(arg0: number): String;

static toString(arg0: number): String;

static toUnsignedString(arg0: number): String;

static parseInt(arg0: String, arg1: number): number;

static parseInt(arg0: CharSequence, arg1: number, arg2: number, arg3: number): number;

static parseInt(arg0: String): number;

static parseUnsignedInt(arg0: String, arg1: number): number;

static parseUnsignedInt(arg0: CharSequence, arg1: number, arg2: number, arg3: number): number;

static parseUnsignedInt(arg0: String): number;

static valueOf(arg0: String, arg1: number): Number;

static valueOf(arg0: String): Number;

static valueOf(arg0: number): Number;

byteValue(): number;

shortValue(): number;

intValue(): number;

longValue(): number;

floatValue(): number;

doubleValue(): number;
toString(): string;

hashCode(): number;

static hashCode(arg0: number): number;

equals(arg0: Object): boolean;

static getInteger(arg0: String): Number;

static getInteger(arg0: String, arg1: number): Number;

static getInteger(arg0: String, arg1: Number): Number;

static decode(arg0: String): Number;

compareTo(arg0: Number): number;

static compare(arg0: number, arg1: number): number;

static compareUnsigned(arg0: number, arg1: number): number;

static toUnsignedLong(arg0: number): number;

static divideUnsigned(arg0: number, arg1: number): number;

static remainderUnsigned(arg0: number, arg1: number): number;

static highestOneBit(arg0: number): number;

static lowestOneBit(arg0: number): number;

static numberOfLeadingZeros(arg0: number): number;

static numberOfTrailingZeros(arg0: number): number;

static bitCount(arg0: number): number;

static rotateLeft(arg0: number, arg1: number): number;

static rotateRight(arg0: number, arg1: number): number;

static reverse(arg0: number): number;

static signum(arg0: number): number;

static reverseBytes(arg0: number): number;

static sum(arg0: number, arg1: number): number;

static max(arg0: number, arg1: number): number;

static min(arg0: number, arg1: number): number;

describeConstable(): Optional<Number>;

resolveConstantDesc(arg0: Lookup): Number;
 }

export class InternalError extends VirtualMachineError {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class InterruptedException extends Exception {
constructor();
constructor(arg0: String);
 }

// @ts-ignore
export interface Iterable<T extends Object> extends Object, globalThis.Array<T> {

    [Symbol.iterator](): globalThis.Iterator<T>

iterator(): Iterator<T>;

/* default */ forEach(arg0: Consumer<T>): void;

/* default */ spliterator(): Spliterator<T>;

 }

export class LayerInstantiationException extends RuntimeException {
constructor();
constructor(arg0: String);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
 }

export class LinkageError extends Error {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
 }

export class Long extends Number implements Comparable<Number>, Constable, ConstantDesc {
static MIN_VALUE:number
static MAX_VALUE:number
static TYPE:Class<Number>
static SIZE:number
static BYTES:number
constructor(arg0: number);
constructor(arg0: String);

static toString(arg0: number, arg1: number): String;

static toUnsignedString(arg0: number, arg1: number): String;

static toHexString(arg0: number): String;

static toOctalString(arg0: number): String;

static toBinaryString(arg0: number): String;

static toString(arg0: number): String;

static toUnsignedString(arg0: number): String;

static parseLong(arg0: String, arg1: number): number;

static parseLong(arg0: CharSequence, arg1: number, arg2: number, arg3: number): number;

static parseLong(arg0: String): number;

static parseUnsignedLong(arg0: String, arg1: number): number;

static parseUnsignedLong(arg0: CharSequence, arg1: number, arg2: number, arg3: number): number;

static parseUnsignedLong(arg0: String): number;

static valueOf(arg0: String, arg1: number): Number;

static valueOf(arg0: String): Number;

static valueOf(arg0: number): Number;

static decode(arg0: String): Number;

byteValue(): number;

shortValue(): number;

intValue(): number;

longValue(): number;

floatValue(): number;

doubleValue(): number;
toString(): string;

hashCode(): number;

static hashCode(arg0: number): number;

equals(arg0: Object): boolean;

static getLong(arg0: String): Number;

static getLong(arg0: String, arg1: number): Number;

static getLong(arg0: String, arg1: Number): Number;

compareTo(arg0: Number): number;

static compare(arg0: number, arg1: number): number;

static compareUnsigned(arg0: number, arg1: number): number;

static divideUnsigned(arg0: number, arg1: number): number;

static remainderUnsigned(arg0: number, arg1: number): number;

static highestOneBit(arg0: number): number;

static lowestOneBit(arg0: number): number;

static numberOfLeadingZeros(arg0: number): number;

static numberOfTrailingZeros(arg0: number): number;

static bitCount(arg0: number): number;

static rotateLeft(arg0: number, arg1: number): number;

static rotateRight(arg0: number, arg1: number): number;

static reverse(arg0: number): number;

static signum(arg0: number): number;

static reverseBytes(arg0: number): number;

static sum(arg0: number, arg1: number): number;

static max(arg0: number, arg1: number): number;

static min(arg0: number, arg1: number): number;

describeConstable(): Optional<Number>;

resolveConstantDesc(arg0: Lookup): Number;
 }

export class Math {
static E:number
static PI:number

static sin(arg0: number): number;

static cos(arg0: number): number;

static tan(arg0: number): number;

static asin(arg0: number): number;

static acos(arg0: number): number;

static atan(arg0: number): number;

static toRadians(arg0: number): number;

static toDegrees(arg0: number): number;

static exp(arg0: number): number;

static log(arg0: number): number;

static log10(arg0: number): number;

static sqrt(arg0: number): number;

static cbrt(arg0: number): number;

static IEEEremainder(arg0: number, arg1: number): number;

static ceil(arg0: number): number;

static floor(arg0: number): number;

static rint(arg0: number): number;

static atan2(arg0: number, arg1: number): number;

static pow(arg0: number, arg1: number): number;

static round(arg0: number): number;

static round(arg0: number): number;

static random(): number;

static addExact(arg0: number, arg1: number): number;

static addExact(arg0: number, arg1: number): number;

static subtractExact(arg0: number, arg1: number): number;

static subtractExact(arg0: number, arg1: number): number;

static multiplyExact(arg0: number, arg1: number): number;

static multiplyExact(arg0: number, arg1: number): number;

static multiplyExact(arg0: number, arg1: number): number;

static incrementExact(arg0: number): number;

static incrementExact(arg0: number): number;

static decrementExact(arg0: number): number;

static decrementExact(arg0: number): number;

static negateExact(arg0: number): number;

static negateExact(arg0: number): number;

static toIntExact(arg0: number): number;

static multiplyFull(arg0: number, arg1: number): number;

static multiplyHigh(arg0: number, arg1: number): number;

static floorDiv(arg0: number, arg1: number): number;

static floorDiv(arg0: number, arg1: number): number;

static floorDiv(arg0: number, arg1: number): number;

static floorMod(arg0: number, arg1: number): number;

static floorMod(arg0: number, arg1: number): number;

static floorMod(arg0: number, arg1: number): number;

static abs(arg0: number): number;

static absExact(arg0: number): number;

static abs(arg0: number): number;

static absExact(arg0: number): number;

static abs(arg0: number): number;

static abs(arg0: number): number;

static max(arg0: number, arg1: number): number;

static max(arg0: number, arg1: number): number;

static max(arg0: number, arg1: number): number;

static max(arg0: number, arg1: number): number;

static min(arg0: number, arg1: number): number;

static min(arg0: number, arg1: number): number;

static min(arg0: number, arg1: number): number;

static min(arg0: number, arg1: number): number;

static fma(arg0: number, arg1: number, arg2: number): number;

static fma(arg0: number, arg1: number, arg2: number): number;

static ulp(arg0: number): number;

static ulp(arg0: number): number;

static signum(arg0: number): number;

static signum(arg0: number): number;

static sinh(arg0: number): number;

static cosh(arg0: number): number;

static tanh(arg0: number): number;

static hypot(arg0: number, arg1: number): number;

static expm1(arg0: number): number;

static log1p(arg0: number): number;

static copySign(arg0: number, arg1: number): number;

static copySign(arg0: number, arg1: number): number;

static getExponent(arg0: number): number;

static getExponent(arg0: number): number;

static nextAfter(arg0: number, arg1: number): number;

static nextAfter(arg0: number, arg1: number): number;

static nextUp(arg0: number): number;

static nextUp(arg0: number): number;

static nextDown(arg0: number): number;

static nextDown(arg0: number): number;

static scalb(arg0: number, arg1: number): number;

static scalb(arg0: number, arg1: number): number;
 }

export interface Module extends AnnotatedElement { }
export class Module implements AnnotatedElement {

isNamed(): boolean;

getName(): String;

getClassLoader(): ClassLoader;

getDescriptor(): ModuleDescriptor;

getLayer(): ModuleLayer;

canRead(arg0: Module): boolean;

addReads(arg0: Module): Module;

isExported(arg0: String, arg1: Module): boolean;

isOpen(arg0: String, arg1: Module): boolean;

isExported(arg0: String): boolean;

isOpen(arg0: String): boolean;

addExports(arg0: String, arg1: Module): Module;

addOpens(arg0: String, arg1: Module): Module;

addUses(arg0: Class<any>): Module;

canUse(arg0: Class<any>): boolean;

getPackages(): Set<String>;

getAnnotation<T extends Annotation>(arg0: Class<T>): T;

getAnnotations(): Annotation[];

getDeclaredAnnotations(): Annotation[];

getResourceAsStream(arg0: String): InputStream;
toString(): string;
 }

export class ModuleLayer {

defineModulesWithOneLoader(arg0: Configuration, arg1: ClassLoader): ModuleLayer;

defineModulesWithManyLoaders(arg0: Configuration, arg1: ClassLoader): ModuleLayer;

defineModules(arg0: Configuration, arg1: Function<String, ClassLoader>): ModuleLayer;

static defineModulesWithOneLoader(arg0: Configuration, arg1: List<ModuleLayer>, arg2: ClassLoader): ModuleLayer.Controller;

static defineModulesWithManyLoaders(arg0: Configuration, arg1: List<ModuleLayer>, arg2: ClassLoader): ModuleLayer.Controller;

static defineModules(arg0: Configuration, arg1: List<ModuleLayer>, arg2: Function<String, ClassLoader>): ModuleLayer.Controller;

configuration(): Configuration;

parents(): List<ModuleLayer>;

modules(): Set<Module>;

findModule(arg0: String): Optional<Module>;

findLoader(arg0: String): ClassLoader;
toString(): string;

static empty(): ModuleLayer;

static boot(): ModuleLayer;
 }
export namespace ModuleLayer { 
export class Controller {

layer(): ModuleLayer;

addReads(arg0: Module, arg1: Module): ModuleLayer.Controller;

addExports(arg0: Module, arg1: String, arg2: Module): ModuleLayer.Controller;

addOpens(arg0: Module, arg1: String, arg2: Module): ModuleLayer.Controller;
 }

}

export class NegativeArraySizeException extends RuntimeException {
constructor();
constructor(arg0: String);
 }

export class NoClassDefFoundError extends LinkageError {
constructor();
constructor(arg0: String);
 }

export class NoSuchFieldError extends IncompatibleClassChangeError {
constructor();
constructor(arg0: String);
 }

export class NoSuchFieldException extends ReflectiveOperationException {
constructor();
constructor(arg0: String);
 }

export class NoSuchMethodError extends IncompatibleClassChangeError {
constructor();
constructor(arg0: String);
 }

export class NoSuchMethodException extends ReflectiveOperationException {
constructor();
constructor(arg0: String);
 }

export class NullPointerException extends RuntimeException {
constructor();
constructor(arg0: String);

fillInStackTrace(): Throwable;

getMessage(): String;
 }

export abstract class Number implements Serializable {
constructor();

abstract intValue(): number;

abstract longValue(): number;

abstract floatValue(): number;

abstract doubleValue(): number;

byteValue(): number;

shortValue(): number;
 }

export class NumberFormatException extends IllegalArgumentException {
constructor();
constructor(arg0: String);
 }

export class OutOfMemoryError extends VirtualMachineError {
constructor();
constructor(arg0: String);
 }


export class Package extends NamedPackage implements AnnotatedElement {

getName(): String;

getSpecificationTitle(): String;

getSpecificationVersion(): String;

getSpecificationVendor(): String;

getImplementationTitle(): String;

getImplementationVersion(): String;

getImplementationVendor(): String;

isSealed(): boolean;

isSealed(arg0: URL): boolean;

isCompatibleWith(arg0: String): boolean;

static getPackage(arg0: String): Package;

static getPackages(): Package[];

hashCode(): number;
toString(): string;

getAnnotation<A extends Annotation>(arg0: Class<A>): A;

isAnnotationPresent(arg0: Class<Annotation>): boolean;

getAnnotationsByType<A extends Annotation>(arg0: Class<A>): A[];

getAnnotations(): Annotation[];

getDeclaredAnnotation<A extends Annotation>(arg0: Class<A>): A;

getDeclaredAnnotationsByType<A extends Annotation>(arg0: Class<A>): A[];

getDeclaredAnnotations(): Annotation[];
 }

export abstract class Process {
constructor();

abstract getOutputStream(): OutputStream;

abstract getInputStream(): InputStream;

abstract getErrorStream(): InputStream;

inputReader(): BufferedReader;

inputReader(arg0: Charset): BufferedReader;

errorReader(): BufferedReader;

errorReader(arg0: Charset): BufferedReader;

outputWriter(): BufferedWriter;

outputWriter(arg0: Charset): BufferedWriter;

abstract waitFor(): number;

waitFor(arg0: number, arg1: TimeUnit): boolean;

abstract exitValue(): number;

abstract destroy(): void;

destroyForcibly(): Process;

supportsNormalTermination(): boolean;

isAlive(): boolean;

pid(): number;

onExit(): CompletableFuture<Process>;

toHandle(): ProcessHandle;

info(): ProcessHandle.Info;

children(): Stream<ProcessHandle>;

descendants(): Stream<ProcessHandle>;
 }

export class ProcessBuilder {
constructor(arg0: List<String>);
constructor(arg0: String[]);

command(arg0: List<String>): ProcessBuilder;

command(arg0: String[]): ProcessBuilder;

command(): List<String>;

environment(): Map<String, String>;

directory(): File;

directory(arg0: File): ProcessBuilder;

redirectInput(arg0: ProcessBuilder.Redirect): ProcessBuilder;

redirectOutput(arg0: ProcessBuilder.Redirect): ProcessBuilder;

redirectError(arg0: ProcessBuilder.Redirect): ProcessBuilder;

redirectInput(arg0: File): ProcessBuilder;

redirectOutput(arg0: File): ProcessBuilder;

redirectError(arg0: File): ProcessBuilder;

redirectInput(): ProcessBuilder.Redirect;

redirectOutput(): ProcessBuilder.Redirect;

redirectError(): ProcessBuilder.Redirect;

inheritIO(): ProcessBuilder;

redirectErrorStream(): boolean;

redirectErrorStream(arg0: boolean): ProcessBuilder;

start(): Process;

static startPipeline(arg0: List<ProcessBuilder>): List<Process>;
 }
export namespace ProcessBuilder { 
export abstract class Redirect {
static PIPE:ProcessBuilder.Redirect
static INHERIT:ProcessBuilder.Redirect
static DISCARD:ProcessBuilder.Redirect

abstract type(): ProcessBuilder.Redirect.Type;

file(): File;

static from(arg0: File): ProcessBuilder.Redirect;

static to(arg0: File): ProcessBuilder.Redirect;

static appendTo(arg0: File): ProcessBuilder.Redirect;

equals(arg0: Object): boolean;

hashCode(): number;
 }
export namespace Redirect { 
export class Type extends Enum<ProcessBuilder.Redirect.Type> {
static PIPE:ProcessBuilder.Redirect.Type
static INHERIT:ProcessBuilder.Redirect.Type
static READ:ProcessBuilder.Redirect.Type
static WRITE:ProcessBuilder.Redirect.Type
static APPEND:ProcessBuilder.Redirect.Type

static values(): ProcessBuilder.Redirect.Type[];

static valueOf(arg0: String): ProcessBuilder.Redirect.Type;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class Type extends Enum<ProcessBuilder.Redirect.Type> {
static PIPE:ProcessBuilder.Redirect.Type
static INHERIT:ProcessBuilder.Redirect.Type
static READ:ProcessBuilder.Redirect.Type
static WRITE:ProcessBuilder.Redirect.Type
static APPEND:ProcessBuilder.Redirect.Type

static values(): ProcessBuilder.Redirect.Type[];

static valueOf(arg0: String): ProcessBuilder.Redirect.Type;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export namespace ProcessHandle { 
function 
/* default */ of(arg0: number): Optional<ProcessHandle>;
function 
/* default */ current(): ProcessHandle;
function 
/* default */ allProcesses(): Stream<ProcessHandle>;
}

export interface ProcessHandle extends Comparable<ProcessHandle>, Object {

pid(): number;

parent(): Optional<ProcessHandle>;

children(): Stream<ProcessHandle>;

descendants(): Stream<ProcessHandle>;

info(): ProcessHandle.Info;

onExit(): CompletableFuture<ProcessHandle>;

supportsNormalTermination(): boolean;

destroy(): boolean;

destroyForcibly(): boolean;

isAlive(): boolean;

hashCode(): number;

equals(arg0: Object): boolean;

compareTo(arg0: ProcessHandle): number;
 }
export namespace ProcessHandle { 
export interface Info {

command(): Optional<String>;

commandLine(): Optional<String>;

arguments(): Optional<String[]>;

startInstant(): Optional<Instant>;

totalCpuDuration(): Optional<Duration>;

user(): Optional<String>;
 }

}

export interface Readable {

read(arg0: CharBuffer): number;
 }

export abstract class Record {

abstract equals(arg0: Object): boolean;

abstract hashCode(): number;
toString(): string;
 }

export class ReflectiveOperationException extends Exception {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export interface Runnable {

run(): void;
 }

export class Runtime {

static getRuntime(): Runtime;

exit(arg0: number): void;

addShutdownHook(arg0: Thread): void;

removeShutdownHook(arg0: Thread): boolean;

halt(arg0: number): void;

exec(arg0: String): Process;

exec(arg0: String, arg1: String[]): Process;

exec(arg0: String, arg1: String[], arg2: File): Process;

exec(arg0: String[]): Process;

exec(arg0: String[], arg1: String[]): Process;

exec(arg0: String[], arg1: String[], arg2: File): Process;

availableProcessors(): number;

freeMemory(): number;

totalMemory(): number;

maxMemory(): number;

gc(): void;

runFinalization(): void;

load(arg0: String): void;

loadLibrary(arg0: String): void;

static version(): Runtime.Version;
 }
export namespace Runtime { 
export class Version extends Object implements Comparable<Runtime.Version> {

static parse(arg0: String): Runtime.Version;

feature(): number;

interim(): number;

update(): number;

patch(): number;

major(): number;

minor(): number;

security(): number;

version(): List<Number>;

pre(): Optional<String>;

build(): Optional<Number>;

optional(): Optional<String>;

compareTo(arg0: Runtime.Version): number;

compareToIgnoreOptional(arg0: Runtime.Version): number;
toString(): string;

equals(arg0: Object): boolean;

equalsIgnoreOptional(arg0: Object): boolean;

hashCode(): number;
 }

}

export class RuntimeException extends Exception {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class RuntimePermission extends BasicPermission {
constructor(arg0: String);
constructor(arg0: String, arg1: String);
 }


export class SecurityException extends RuntimeException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class SecurityManager {
constructor();

getSecurityContext(): Object;

checkPermission(arg0: Permission): void;

checkPermission(arg0: Permission, arg1: Object): void;

checkCreateClassLoader(): void;

checkAccess(arg0: Thread): void;

checkAccess(arg0: ThreadGroup): void;

checkExit(arg0: number): void;

checkExec(arg0: String): void;

checkLink(arg0: String): void;

checkRead(arg0: FileDescriptor): void;

checkRead(arg0: String): void;

checkRead(arg0: String, arg1: Object): void;

checkWrite(arg0: FileDescriptor): void;

checkWrite(arg0: String): void;

checkDelete(arg0: String): void;

checkConnect(arg0: String, arg1: number): void;

checkConnect(arg0: String, arg1: number, arg2: Object): void;

checkListen(arg0: number): void;

checkAccept(arg0: String, arg1: number): void;

checkMulticast(arg0: InetAddress): void;

checkMulticast(arg0: InetAddress, arg1: number): void;

checkPropertiesAccess(): void;

checkPropertyAccess(arg0: String): void;

checkPrintJobAccess(): void;

checkPackageAccess(arg0: String): void;

checkPackageDefinition(arg0: String): void;

checkSetFactory(): void;

checkSecurityAccess(arg0: String): void;

getThreadGroup(): ThreadGroup;
 }

export class Short extends Number implements Comparable<Number>, Constable {
static MIN_VALUE:number
static MAX_VALUE:number
static TYPE:Class<Number>
static SIZE:number
static BYTES:number
constructor(arg0: number);
constructor(arg0: String);

static toString(arg0: number): String;

static parseShort(arg0: String, arg1: number): number;

static parseShort(arg0: String): number;

static valueOf(arg0: String, arg1: number): Number;

static valueOf(arg0: String): Number;

describeConstable(): Optional<DynamicConstantDesc<Number>>;

static valueOf(arg0: number): Number;

static decode(arg0: String): Number;

byteValue(): number;

shortValue(): number;

intValue(): number;

longValue(): number;

floatValue(): number;

doubleValue(): number;
toString(): string;

hashCode(): number;

static hashCode(arg0: number): number;

equals(arg0: Object): boolean;

compareTo(arg0: Number): number;

static compare(arg0: number, arg1: number): number;

static compareUnsigned(arg0: number, arg1: number): number;

static reverseBytes(arg0: number): number;

static toUnsignedInt(arg0: number): number;

static toUnsignedLong(arg0: number): number;
 }

export class StackOverflowError extends VirtualMachineError {
constructor();
constructor(arg0: String);
 }

export class StackTraceElement implements Serializable {
constructor(arg0: String, arg1: String, arg2: String, arg3: number);
constructor(arg0: String, arg1: String, arg2: String, arg3: String, arg4: String, arg5: String, arg6: number);

getFileName(): String;

getLineNumber(): number;

getModuleName(): String;

getModuleVersion(): String;

getClassLoaderName(): String;

getClassName(): String;

getMethodName(): String;

isNativeMethod(): boolean;
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class StackWalker {

static getInstance(): StackWalker;

static getInstance(arg0: StackWalker.Option): StackWalker;

static getInstance(arg0: Set<StackWalker.Option>): StackWalker;

static getInstance(arg0: Set<StackWalker.Option>, arg1: number): StackWalker;

walk<T extends Object>(arg0: Function<Stream<StackWalker.StackFrame>, T>): T;

forEach(arg0: Consumer<StackWalker.StackFrame>): void;

getCallerClass(): Class<any>;
 }
export namespace StackWalker { 
export class Option extends Enum<StackWalker.Option> {
static RETAIN_CLASS_REFERENCE:StackWalker.Option
static SHOW_REFLECT_FRAMES:StackWalker.Option
static SHOW_HIDDEN_FRAMES:StackWalker.Option

static values(): StackWalker.Option[];

static valueOf(arg0: String): StackWalker.Option;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export interface StackFrame {

getClassName(): String;

getMethodName(): String;

getDeclaringClass(): Class<any>;

/* default */ getMethodType(): MethodType;

/* default */ getDescriptor(): String;

getByteCodeIndex(): number;

getFileName(): String;

getLineNumber(): number;

isNativeMethod(): boolean;

toStackTraceElement(): StackTraceElement;
 }

}

export class StrictMath {
static E:number
static PI:number

static sin(arg0: number): number;

static cos(arg0: number): number;

static tan(arg0: number): number;

static asin(arg0: number): number;

static acos(arg0: number): number;

static atan(arg0: number): number;

static toRadians(arg0: number): number;

static toDegrees(arg0: number): number;

static exp(arg0: number): number;

static log(arg0: number): number;

static log10(arg0: number): number;

static sqrt(arg0: number): number;

static cbrt(arg0: number): number;

static IEEEremainder(arg0: number, arg1: number): number;

static ceil(arg0: number): number;

static floor(arg0: number): number;

static rint(arg0: number): number;

static atan2(arg0: number, arg1: number): number;

static pow(arg0: number, arg1: number): number;

static round(arg0: number): number;

static round(arg0: number): number;

static random(): number;

static addExact(arg0: number, arg1: number): number;

static addExact(arg0: number, arg1: number): number;

static subtractExact(arg0: number, arg1: number): number;

static subtractExact(arg0: number, arg1: number): number;

static multiplyExact(arg0: number, arg1: number): number;

static multiplyExact(arg0: number, arg1: number): number;

static multiplyExact(arg0: number, arg1: number): number;

static incrementExact(arg0: number): number;

static incrementExact(arg0: number): number;

static decrementExact(arg0: number): number;

static decrementExact(arg0: number): number;

static negateExact(arg0: number): number;

static negateExact(arg0: number): number;

static toIntExact(arg0: number): number;

static multiplyFull(arg0: number, arg1: number): number;

static multiplyHigh(arg0: number, arg1: number): number;

static floorDiv(arg0: number, arg1: number): number;

static floorDiv(arg0: number, arg1: number): number;

static floorDiv(arg0: number, arg1: number): number;

static floorMod(arg0: number, arg1: number): number;

static floorMod(arg0: number, arg1: number): number;

static floorMod(arg0: number, arg1: number): number;

static abs(arg0: number): number;

static absExact(arg0: number): number;

static abs(arg0: number): number;

static absExact(arg0: number): number;

static abs(arg0: number): number;

static abs(arg0: number): number;

static max(arg0: number, arg1: number): number;

static max(arg0: number, arg1: number): number;

static max(arg0: number, arg1: number): number;

static max(arg0: number, arg1: number): number;

static min(arg0: number, arg1: number): number;

static min(arg0: number, arg1: number): number;

static min(arg0: number, arg1: number): number;

static min(arg0: number, arg1: number): number;

static fma(arg0: number, arg1: number, arg2: number): number;

static fma(arg0: number, arg1: number, arg2: number): number;

static ulp(arg0: number): number;

static ulp(arg0: number): number;

static signum(arg0: number): number;

static signum(arg0: number): number;

static sinh(arg0: number): number;

static cosh(arg0: number): number;

static tanh(arg0: number): number;

static hypot(arg0: number, arg1: number): number;

static expm1(arg0: number): number;

static log1p(arg0: number): number;

static copySign(arg0: number, arg1: number): number;

static copySign(arg0: number, arg1: number): number;

static getExponent(arg0: number): number;

static getExponent(arg0: number): number;

static nextAfter(arg0: number, arg1: number): number;

static nextAfter(arg0: number, arg1: number): number;

static nextUp(arg0: number): number;

static nextUp(arg0: number): number;

static nextDown(arg0: number): number;

static nextDown(arg0: number): number;

static scalb(arg0: number, arg1: number): number;

static scalb(arg0: number, arg1: number): number;
 }

export class String extends Object implements Serializable, Comparable<String>, CharSequence, Constable, ConstantDesc {
static CASE_INSENSITIVE_ORDER:Comparator<String>
constructor();
constructor(arg0: String);
constructor(arg0: String[]);
constructor(arg0: String[], arg1: number, arg2: number);
constructor(arg0: number[], arg1: number, arg2: number);
constructor(arg0: number[], arg1: number, arg2: number, arg3: number);
constructor(arg0: number[], arg1: number);
constructor(arg0: number[], arg1: number, arg2: number, arg3: String);
constructor(arg0: number[], arg1: number, arg2: number, arg3: Charset);
constructor(arg0: number[], arg1: String);
constructor(arg0: number[], arg1: Charset);
constructor(arg0: number[], arg1: number, arg2: number);
constructor(arg0: number[]);
constructor(arg0: StringBuffer);
constructor(arg0: StringBuilder);

length(): number;

isEmpty(): boolean;

charAt(arg0: number): String;

codePointAt(arg0: number): number;

codePointBefore(arg0: number): number;

codePointCount(arg0: number, arg1: number): number;

offsetByCodePoints(arg0: number, arg1: number): number;

getChars(arg0: number, arg1: number, arg2: String[], arg3: number): void;

getBytes(arg0: number, arg1: number, arg2: number[], arg3: number): void;

getBytes(arg0: String): number[];

getBytes(arg0: Charset): number[];

getBytes(): number[];

equals(arg0: Object): boolean;

contentEquals(arg0: StringBuffer): boolean;

contentEquals(arg0: CharSequence): boolean;

equalsIgnoreCase(arg0: String): boolean;

compareTo(arg0: String): number;

compareToIgnoreCase(arg0: String): number;

regionMatches(arg0: number, arg1: String, arg2: number, arg3: number): boolean;

regionMatches(arg0: boolean, arg1: number, arg2: String, arg3: number, arg4: number): boolean;

startsWith(arg0: String, arg1: number): boolean;

startsWith(arg0: String): boolean;

endsWith(arg0: String): boolean;

hashCode(): number;

indexOf(arg0: number): number;

indexOf(arg0: number, arg1: number): number;

lastIndexOf(arg0: number): number;

lastIndexOf(arg0: number, arg1: number): number;

indexOf(arg0: String): number;

indexOf(arg0: String, arg1: number): number;

lastIndexOf(arg0: String): number;

lastIndexOf(arg0: String, arg1: number): number;

substring(arg0: number): String;

substring(arg0: number, arg1: number): String;

subSequence(arg0: number, arg1: number): CharSequence;

concat(arg0: String): String;

replace(arg0: String, arg1: String): String;

matches(arg0: String): boolean;

contains(arg0: CharSequence): boolean;

replaceFirst(arg0: String, arg1: String): String;

replaceAll(arg0: String, arg1: String): String;

replace(arg0: CharSequence, arg1: CharSequence): String;

split(arg0: String, arg1: number): String[];

split(arg0: String): String[];

static join(arg0: CharSequence, arg1: CharSequence[]): String;

static join(arg0: CharSequence, arg1: Iterable<CharSequence>): String;

toLowerCase(arg0: Locale): String;

toLowerCase(): String;

toUpperCase(arg0: Locale): String;

toUpperCase(): String;

trim(): String;

strip(): String;

stripLeading(): String;

stripTrailing(): String;

isBlank(): boolean;

lines(): Stream<String>;

indent(arg0: number): String;

stripIndent(): String;

translateEscapes(): String;

transform<R extends Object>(arg0: Function<String, R>): R;
toString(): string;

chars(): IntStream;

codePoints(): IntStream;

toCharArray(): String[];

static format(arg0: String, arg1: Object[]): String;

static format(arg0: Locale, arg1: String, arg2: Object[]): String;

formatted(arg0: Object[]): String;

static valueOf(arg0: Object): String;

static valueOf(arg0: String[]): String;

static valueOf(arg0: String[], arg1: number, arg2: number): String;

static copyValueOf(arg0: String[], arg1: number, arg2: number): String;

static copyValueOf(arg0: String[]): String;

static valueOf(arg0: boolean): String;

static valueOf(arg0: String): String;

static valueOf(arg0: number): String;

static valueOf(arg0: number): String;

static valueOf(arg0: number): String;

static valueOf(arg0: number): String;

intern(): String;

repeat(arg0: number): String;

describeConstable(): Optional<String>;

resolveConstantDesc(arg0: Lookup): String;
 }

export interface StringBuffer extends Serializable, Comparable<StringBuffer>, CharSequence { }
export class StringBuffer extends AbstractStringBuilder implements Serializable, Comparable<StringBuffer>, CharSequence {
constructor();
constructor(arg0: number);
constructor(arg0: String);
constructor(arg0: CharSequence);

compareTo(arg0: StringBuffer): number;

length(): number;

capacity(): number;

ensureCapacity(arg0: number): void;

trimToSize(): void;

setLength(arg0: number): void;

charAt(arg0: number): String;

codePointAt(arg0: number): number;

codePointBefore(arg0: number): number;

codePointCount(arg0: number, arg1: number): number;

offsetByCodePoints(arg0: number, arg1: number): number;

getChars(arg0: number, arg1: number, arg2: String[], arg3: number): void;

setCharAt(arg0: number, arg1: String): void;

append(arg0: Object): StringBuffer;

append(arg0: String): StringBuffer;

append(arg0: StringBuffer): StringBuffer;

append(arg0: CharSequence): StringBuffer;

append(arg0: CharSequence, arg1: number, arg2: number): StringBuffer;

append(arg0: String[]): StringBuffer;

append(arg0: String[], arg1: number, arg2: number): StringBuffer;

append(arg0: boolean): StringBuffer;

append(arg0: String): StringBuffer;

append(arg0: number): StringBuffer;

appendCodePoint(arg0: number): StringBuffer;

append(arg0: number): StringBuffer;

append(arg0: number): StringBuffer;

append(arg0: number): StringBuffer;

delete(arg0: number, arg1: number): StringBuffer;

deleteCharAt(arg0: number): StringBuffer;

replace(arg0: number, arg1: number, arg2: String): StringBuffer;

substring(arg0: number): String;

subSequence(arg0: number, arg1: number): CharSequence;

substring(arg0: number, arg1: number): String;

insert(arg0: number, arg1: String[], arg2: number, arg3: number): StringBuffer;

insert(arg0: number, arg1: Object): StringBuffer;

insert(arg0: number, arg1: String): StringBuffer;

insert(arg0: number, arg1: String[]): StringBuffer;

insert(arg0: number, arg1: CharSequence): StringBuffer;

insert(arg0: number, arg1: CharSequence, arg2: number, arg3: number): StringBuffer;

insert(arg0: number, arg1: boolean): StringBuffer;

insert(arg0: number, arg1: String): StringBuffer;

insert(arg0: number, arg1: number): StringBuffer;

insert(arg0: number, arg1: number): StringBuffer;

insert(arg0: number, arg1: number): StringBuffer;

insert(arg0: number, arg1: number): StringBuffer;

indexOf(arg0: String): number;

indexOf(arg0: String, arg1: number): number;

lastIndexOf(arg0: String): number;

lastIndexOf(arg0: String, arg1: number): number;

reverse(): StringBuffer;
toString(): string;
 }

export interface StringBuilder extends Serializable, Comparable<StringBuilder>, CharSequence { }
export class StringBuilder extends AbstractStringBuilder implements Serializable, Comparable<StringBuilder>, CharSequence {
constructor();
constructor(arg0: number);
constructor(arg0: String);
constructor(arg0: CharSequence);

compareTo(arg0: StringBuilder): number;

append(arg0: Object): StringBuilder;

append(arg0: String): StringBuilder;

append(arg0: StringBuffer): StringBuilder;

append(arg0: CharSequence): StringBuilder;

append(arg0: CharSequence, arg1: number, arg2: number): StringBuilder;

append(arg0: String[]): StringBuilder;

append(arg0: String[], arg1: number, arg2: number): StringBuilder;

append(arg0: boolean): StringBuilder;

append(arg0: String): StringBuilder;

append(arg0: number): StringBuilder;

append(arg0: number): StringBuilder;

append(arg0: number): StringBuilder;

append(arg0: number): StringBuilder;

appendCodePoint(arg0: number): StringBuilder;

delete(arg0: number, arg1: number): StringBuilder;

deleteCharAt(arg0: number): StringBuilder;

replace(arg0: number, arg1: number, arg2: String): StringBuilder;

insert(arg0: number, arg1: String[], arg2: number, arg3: number): StringBuilder;

insert(arg0: number, arg1: Object): StringBuilder;

insert(arg0: number, arg1: String): StringBuilder;

insert(arg0: number, arg1: String[]): StringBuilder;

insert(arg0: number, arg1: CharSequence): StringBuilder;

insert(arg0: number, arg1: CharSequence, arg2: number, arg3: number): StringBuilder;

insert(arg0: number, arg1: boolean): StringBuilder;

insert(arg0: number, arg1: String): StringBuilder;

insert(arg0: number, arg1: number): StringBuilder;

insert(arg0: number, arg1: number): StringBuilder;

insert(arg0: number, arg1: number): StringBuilder;

insert(arg0: number, arg1: number): StringBuilder;

indexOf(arg0: String): number;

indexOf(arg0: String, arg1: number): number;

lastIndexOf(arg0: String): number;

lastIndexOf(arg0: String, arg1: number): number;

reverse(): StringBuilder;
toString(): string;
 }

export class StringIndexOutOfBoundsException extends IndexOutOfBoundsException {
constructor();
constructor(arg0: String);
constructor(arg0: number);
 }


export class System {
static in:InputStream
static out:PrintStream
static err:PrintStream

static setIn(arg0: InputStream): void;

static setOut(arg0: PrintStream): void;

static setErr(arg0: PrintStream): void;

static console(): Console;

static inheritedChannel(): Channel;

static setSecurityManager(arg0: SecurityManager): void;

static getSecurityManager(): SecurityManager;

static currentTimeMillis(): number;

static nanoTime(): number;

static arraycopy(arg0: Object, arg1: number, arg2: Object, arg3: number, arg4: number): void;

static identityHashCode(arg0: Object): number;

static getProperties(): Properties;

static lineSeparator(): String;

static setProperties(arg0: Properties): void;

static getProperty(arg0: String): String;

static getProperty(arg0: String, arg1: String): String;

static setProperty(arg0: String, arg1: String): String;

static clearProperty(arg0: String): String;

static getenv(arg0: String): String;

static getenv(): Map<String, String>;

static getLogger(arg0: String): System.Logger;

static getLogger(arg0: String, arg1: ResourceBundle): System.Logger;

static exit(arg0: number): void;

static gc(): void;

static runFinalization(): void;

static load(arg0: String): void;

static loadLibrary(arg0: String): void;

static mapLibraryName(arg0: String): String;
 }
export namespace System { 
export interface Logger {

getName(): String;

isLoggable(arg0: System.Logger.Level): boolean;

/* default */ log(arg0: System.Logger.Level, arg1: String): void;

/* default */ log(arg0: System.Logger.Level, arg1: Supplier<String>): void;

/* default */ log(arg0: System.Logger.Level, arg1: Object): void;

/* default */ log(arg0: System.Logger.Level, arg1: String, arg2: Throwable): void;

/* default */ log(arg0: System.Logger.Level, arg1: Supplier<String>, arg2: Throwable): void;

/* default */ log(arg0: System.Logger.Level, arg1: String, arg2: Object[]): void;

log(arg0: System.Logger.Level, arg1: ResourceBundle, arg2: String, arg3: Throwable): void;

log(arg0: System.Logger.Level, arg1: ResourceBundle, arg2: String, arg3: Object[]): void;
 }
export namespace Logger { 
export class Level extends Enum<System.Logger.Level> {
static ALL:System.Logger.Level
static TRACE:System.Logger.Level
static DEBUG:System.Logger.Level
static INFO:System.Logger.Level
static WARNING:System.Logger.Level
static ERROR:System.Logger.Level
static OFF:System.Logger.Level

static values(): System.Logger.Level[];

static valueOf(arg0: String): System.Logger.Level;

getName(): String;

getSeverity(): number;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class Level extends Enum<System.Logger.Level> {
static ALL:System.Logger.Level
static TRACE:System.Logger.Level
static DEBUG:System.Logger.Level
static INFO:System.Logger.Level
static WARNING:System.Logger.Level
static ERROR:System.Logger.Level
static OFF:System.Logger.Level

static values(): System.Logger.Level[];

static valueOf(arg0: String): System.Logger.Level;

getName(): String;

getSeverity(): number;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export abstract class LoggerFinder {

abstract getLogger(arg0: String, arg1: Module): System.Logger;

getLocalizedLogger(arg0: String, arg1: ResourceBundle, arg2: Module): System.Logger;

static getLoggerFinder(): System.LoggerFinder;
 }

}

export class Thread implements Runnable {
static MIN_PRIORITY:number
static NORM_PRIORITY:number
static MAX_PRIORITY:number
constructor();
constructor(arg0: Runnable);
constructor(arg0: ThreadGroup, arg1: Runnable);
constructor(arg0: String);
constructor(arg0: ThreadGroup, arg1: String);
constructor(arg0: Runnable, arg1: String);
constructor(arg0: ThreadGroup, arg1: Runnable, arg2: String);
constructor(arg0: ThreadGroup, arg1: Runnable, arg2: String, arg3: number);
constructor(arg0: ThreadGroup, arg1: Runnable, arg2: String, arg3: number, arg4: boolean);

static currentThread(): Thread;

static yield(): void;

static sleep(arg0: number): void;

static sleep(arg0: number, arg1: number): void;

static onSpinWait(): void;

start(): void;

run(): void;

stop(): void;

interrupt(): void;

static interrupted(): boolean;

isInterrupted(): boolean;

isAlive(): boolean;

suspend(): void;

resume(): void;

setPriority(arg0: number): void;

getPriority(): number;

setName(arg0: String): void;

getName(): String;

getThreadGroup(): ThreadGroup;

static activeCount(): number;

static enumerate(arg0: Thread[]): number;

countStackFrames(): number;

join(arg0: number): void;

join(arg0: number, arg1: number): void;

join(): void;

static dumpStack(): void;

setDaemon(arg0: boolean): void;

isDaemon(): boolean;

checkAccess(): void;
toString(): string;

getContextClassLoader(): ClassLoader;

setContextClassLoader(arg0: ClassLoader): void;

static holdsLock(arg0: Object): boolean;

getStackTrace(): StackTraceElement[];

static getAllStackTraces(): Map<Thread, StackTraceElement[]>;

getId(): number;

getState(): Thread.State;

static setDefaultUncaughtExceptionHandler(arg0: Thread.UncaughtExceptionHandler): void;

static getDefaultUncaughtExceptionHandler(): Thread.UncaughtExceptionHandler;

getUncaughtExceptionHandler(): Thread.UncaughtExceptionHandler;

setUncaughtExceptionHandler(arg0: Thread.UncaughtExceptionHandler): void;
 }
export namespace Thread { 
export class State extends Enum<Thread.State> {
static NEW:Thread.State
static RUNNABLE:Thread.State
static BLOCKED:Thread.State
static WAITING:Thread.State
static TIMED_WAITING:Thread.State
static TERMINATED:Thread.State

static values(): Thread.State[];

static valueOf(arg0: String): Thread.State;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export interface UncaughtExceptionHandler {

uncaughtException(arg0: Thread, arg1: Throwable): void;
 }

}

export class ThreadDeath extends Error {
constructor();
 }

export class ThreadGroup implements Thread.UncaughtExceptionHandler {
constructor(arg0: String);
constructor(arg0: ThreadGroup, arg1: String);

getName(): String;

getParent(): ThreadGroup;

getMaxPriority(): number;

isDaemon(): boolean;

isDestroyed(): boolean;

setDaemon(arg0: boolean): void;

setMaxPriority(arg0: number): void;

parentOf(arg0: ThreadGroup): boolean;

checkAccess(): void;

activeCount(): number;

enumerate(arg0: Thread[]): number;

enumerate(arg0: Thread[], arg1: boolean): number;

activeGroupCount(): number;

enumerate(arg0: ThreadGroup[]): number;

enumerate(arg0: ThreadGroup[], arg1: boolean): number;

stop(): void;

interrupt(): void;

suspend(): void;

resume(): void;

destroy(): void;

list(): void;

uncaughtException(arg0: Thread, arg1: Throwable): void;

allowThreadSuspension(arg0: boolean): boolean;
toString(): string;
 }

export class ThreadLocal<T extends Object> extends Object {
constructor();

static withInitial<S extends Object>(arg0: Supplier<S>): ThreadLocal<S>;

get(): T;

set(arg0: T): void;

remove(): void;
 }

export class Throwable implements Serializable {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);

getMessage(): String;

getLocalizedMessage(): String;

getCause(): Throwable;

initCause(arg0: Throwable): Throwable;
toString(): string;

printStackTrace(): void;

printStackTrace(arg0: PrintStream): void;

printStackTrace(arg0: PrintWriter): void;

fillInStackTrace(): Throwable;

getStackTrace(): StackTraceElement[];

setStackTrace(arg0: StackTraceElement[]): void;

addSuppressed(arg0: Throwable): void;

getSuppressed(): Throwable[];
 }

export class TypeNotPresentException extends RuntimeException {
constructor(arg0: String, arg1: Throwable);

typeName(): String;
 }

export class UnknownError extends VirtualMachineError {
constructor();
constructor(arg0: String);
 }

export class UnsatisfiedLinkError extends LinkageError {
constructor();
constructor(arg0: String);
 }

export class UnsupportedClassVersionError extends ClassFormatError {
constructor();
constructor(arg0: String);
 }

export class UnsupportedOperationException extends RuntimeException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class VerifyError extends LinkageError {
constructor();
constructor(arg0: String);
 }

export abstract class VirtualMachineError extends Error {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class Void {
static TYPE:Class<Void>
 }

}
