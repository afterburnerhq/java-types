/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.security.interfaces.d.ts" />
/// <reference path="java.math.d.ts" />
declare module '@afterburnerhq/java.security.spec' { 
import { GeneralSecurityException } from '@afterburnerhq/java.security'
import { Throwable, String } from '@afterburnerhq/java.lang'
import { Optional } from '@afterburnerhq/java.util'
import { DSAParams } from '@afterburnerhq/java.security.interfaces'
import { BigInteger } from '@afterburnerhq/java.math'
export interface AlgorithmParameterSpec {
 }

export class DSAGenParameterSpec implements AlgorithmParameterSpec {
constructor(arg0: number, arg1: number);
constructor(arg0: number, arg1: number, arg2: number);

getPrimePLength(): number;

getSubprimeQLength(): number;

getSeedLength(): number;
 }

export class DSAParameterSpec implements AlgorithmParameterSpec, DSAParams {
constructor(arg0: BigInteger, arg1: BigInteger, arg2: BigInteger);

getP(): BigInteger;

getQ(): BigInteger;

getG(): BigInteger;
 }

export class DSAPrivateKeySpec implements KeySpec {
constructor(arg0: BigInteger, arg1: BigInteger, arg2: BigInteger, arg3: BigInteger);

getX(): BigInteger;

getP(): BigInteger;

getQ(): BigInteger;

getG(): BigInteger;
 }

export class DSAPublicKeySpec implements KeySpec {
constructor(arg0: BigInteger, arg1: BigInteger, arg2: BigInteger, arg3: BigInteger);

getY(): BigInteger;

getP(): BigInteger;

getQ(): BigInteger;

getG(): BigInteger;
 }

export interface ECField {

getFieldSize(): number;
 }

export class ECFieldF2m implements ECField {
constructor(arg0: number);
constructor(arg0: number, arg1: BigInteger);
constructor(arg0: number, arg1: number[]);

getFieldSize(): number;

getM(): number;

getReductionPolynomial(): BigInteger;

getMidTermsOfReductionPolynomial(): number[];

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class ECFieldFp implements ECField {
constructor(arg0: BigInteger);

getFieldSize(): number;

getP(): BigInteger;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class ECGenParameterSpec extends NamedParameterSpec {
constructor(arg0: String);
 }

export class ECParameterSpec implements AlgorithmParameterSpec {
constructor(arg0: EllipticCurve, arg1: ECPoint, arg2: BigInteger, arg3: number);

getCurve(): EllipticCurve;

getGenerator(): ECPoint;

getOrder(): BigInteger;

getCofactor(): number;
 }

export class ECPoint {
static POINT_INFINITY:ECPoint
constructor(arg0: BigInteger, arg1: BigInteger);

getAffineX(): BigInteger;

getAffineY(): BigInteger;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class ECPrivateKeySpec implements KeySpec {
constructor(arg0: BigInteger, arg1: ECParameterSpec);

getS(): BigInteger;

getParams(): ECParameterSpec;
 }

export class ECPublicKeySpec implements KeySpec {
constructor(arg0: ECPoint, arg1: ECParameterSpec);

getW(): ECPoint;

getParams(): ECParameterSpec;
 }

export class EdDSAParameterSpec implements AlgorithmParameterSpec {
constructor(arg0: boolean);
constructor(arg0: boolean, arg1: number[]);

isPrehash(): boolean;

getContext(): Optional<number[]>;
 }

export class EdECPoint {
constructor(arg0: boolean, arg1: BigInteger);

isXOdd(): boolean;

getY(): BigInteger;
 }

export class EdECPrivateKeySpec implements KeySpec {
constructor(arg0: NamedParameterSpec, arg1: number[]);

getParams(): NamedParameterSpec;

getBytes(): number[];
 }

export class EdECPublicKeySpec implements KeySpec {
constructor(arg0: NamedParameterSpec, arg1: EdECPoint);

getParams(): NamedParameterSpec;

getPoint(): EdECPoint;
 }

export class EllipticCurve {
constructor(arg0: ECField, arg1: BigInteger, arg2: BigInteger);
constructor(arg0: ECField, arg1: BigInteger, arg2: BigInteger, arg3: number[]);

getField(): ECField;

getA(): BigInteger;

getB(): BigInteger;

getSeed(): number[];

equals(arg0: Object): boolean;

hashCode(): number;
 }

export abstract class EncodedKeySpec implements KeySpec {
constructor(arg0: number[]);

getAlgorithm(): String;

getEncoded(): number[];

abstract getFormat(): String;
 }

export class InvalidKeySpecException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class InvalidParameterSpecException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
 }

export interface KeySpec {
 }

export class MGF1ParameterSpec implements AlgorithmParameterSpec {
static SHA1:MGF1ParameterSpec
static SHA224:MGF1ParameterSpec
static SHA256:MGF1ParameterSpec
static SHA384:MGF1ParameterSpec
static SHA512:MGF1ParameterSpec
static SHA512_224:MGF1ParameterSpec
static SHA512_256:MGF1ParameterSpec
static SHA3_224:MGF1ParameterSpec
static SHA3_256:MGF1ParameterSpec
static SHA3_384:MGF1ParameterSpec
static SHA3_512:MGF1ParameterSpec
constructor(arg0: String);

getDigestAlgorithm(): String;
toString(): string;
 }

export class NamedParameterSpec implements AlgorithmParameterSpec {
static X25519:NamedParameterSpec
static X448:NamedParameterSpec
static ED25519:NamedParameterSpec
static ED448:NamedParameterSpec
constructor(arg0: String);

getName(): String;
 }

export class PKCS8EncodedKeySpec extends EncodedKeySpec {
constructor(arg0: number[]);
constructor(arg0: number[], arg1: String);

getEncoded(): number[];

getFormat(): String;
 }

export class PSSParameterSpec implements AlgorithmParameterSpec {
static TRAILER_FIELD_BC:number
static DEFAULT:PSSParameterSpec
constructor(arg0: String, arg1: String, arg2: AlgorithmParameterSpec, arg3: number, arg4: number);
constructor(arg0: number);

getDigestAlgorithm(): String;

getMGFAlgorithm(): String;

getMGFParameters(): AlgorithmParameterSpec;

getSaltLength(): number;

getTrailerField(): number;
toString(): string;
 }

export class RSAKeyGenParameterSpec implements AlgorithmParameterSpec {
static F0:BigInteger
static F4:BigInteger
constructor(arg0: number, arg1: BigInteger);
constructor(arg0: number, arg1: BigInteger, arg2: AlgorithmParameterSpec);

getKeysize(): number;

getPublicExponent(): BigInteger;

getKeyParams(): AlgorithmParameterSpec;
 }

export class RSAMultiPrimePrivateCrtKeySpec extends RSAPrivateKeySpec {
constructor(arg0: BigInteger, arg1: BigInteger, arg2: BigInteger, arg3: BigInteger, arg4: BigInteger, arg5: BigInteger, arg6: BigInteger, arg7: BigInteger, arg8: RSAOtherPrimeInfo[]);
constructor(arg0: BigInteger, arg1: BigInteger, arg2: BigInteger, arg3: BigInteger, arg4: BigInteger, arg5: BigInteger, arg6: BigInteger, arg7: BigInteger, arg8: RSAOtherPrimeInfo[], arg9: AlgorithmParameterSpec);

getPublicExponent(): BigInteger;

getPrimeP(): BigInteger;

getPrimeQ(): BigInteger;

getPrimeExponentP(): BigInteger;

getPrimeExponentQ(): BigInteger;

getCrtCoefficient(): BigInteger;

getOtherPrimeInfo(): RSAOtherPrimeInfo[];
 }

export class RSAOtherPrimeInfo {
constructor(arg0: BigInteger, arg1: BigInteger, arg2: BigInteger);

getPrime(): BigInteger;

getExponent(): BigInteger;

getCrtCoefficient(): BigInteger;
 }

export class RSAPrivateCrtKeySpec extends RSAPrivateKeySpec {
constructor(arg0: BigInteger, arg1: BigInteger, arg2: BigInteger, arg3: BigInteger, arg4: BigInteger, arg5: BigInteger, arg6: BigInteger, arg7: BigInteger);
constructor(arg0: BigInteger, arg1: BigInteger, arg2: BigInteger, arg3: BigInteger, arg4: BigInteger, arg5: BigInteger, arg6: BigInteger, arg7: BigInteger, arg8: AlgorithmParameterSpec);

getPublicExponent(): BigInteger;

getPrimeP(): BigInteger;

getPrimeQ(): BigInteger;

getPrimeExponentP(): BigInteger;

getPrimeExponentQ(): BigInteger;

getCrtCoefficient(): BigInteger;
 }

export class RSAPrivateKeySpec implements KeySpec {
constructor(arg0: BigInteger, arg1: BigInteger);
constructor(arg0: BigInteger, arg1: BigInteger, arg2: AlgorithmParameterSpec);

getModulus(): BigInteger;

getPrivateExponent(): BigInteger;

getParams(): AlgorithmParameterSpec;
 }

export class RSAPublicKeySpec implements KeySpec {
constructor(arg0: BigInteger, arg1: BigInteger);
constructor(arg0: BigInteger, arg1: BigInteger, arg2: AlgorithmParameterSpec);

getModulus(): BigInteger;

getPublicExponent(): BigInteger;

getParams(): AlgorithmParameterSpec;
 }

export class X509EncodedKeySpec extends EncodedKeySpec {
constructor(arg0: number[]);
constructor(arg0: number[], arg1: String);

getEncoded(): number[];

getFormat(): String;
 }

export class XECPrivateKeySpec implements KeySpec {
constructor(arg0: AlgorithmParameterSpec, arg1: number[]);

getParams(): AlgorithmParameterSpec;

getScalar(): number[];
 }

export class XECPublicKeySpec implements KeySpec {
constructor(arg0: AlgorithmParameterSpec, arg1: BigInteger);

getParams(): AlgorithmParameterSpec;

getU(): BigInteger;
 }

}
