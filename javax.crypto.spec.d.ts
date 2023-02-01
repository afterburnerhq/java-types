/// <reference path="javax.crypto.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.math.d.ts" />
/// <reference path="java.security.spec.d.ts" />
declare module '@afterburnerhq/javax.crypto.spec' { 
import { SecretKey } from '@afterburnerhq/javax.crypto'
import { String } from '@afterburnerhq/java.lang'
import { BigInteger } from '@afterburnerhq/java.math'
import { AlgorithmParameterSpec, KeySpec } from '@afterburnerhq/java.security.spec'
export class ChaCha20ParameterSpec implements AlgorithmParameterSpec {
constructor(arg0: number[], arg1: number);

getNonce(): number[];

getCounter(): number;
 }

export class DESKeySpec implements KeySpec {
static DES_KEY_LEN:number
constructor(arg0: number[]);
constructor(arg0: number[], arg1: number);

getKey(): number[];

static isParityAdjusted(arg0: number[], arg1: number): boolean;

static isWeak(arg0: number[], arg1: number): boolean;
 }

export class DESedeKeySpec implements KeySpec {
static DES_EDE_KEY_LEN:number
constructor(arg0: number[]);
constructor(arg0: number[], arg1: number);

getKey(): number[];

static isParityAdjusted(arg0: number[], arg1: number): boolean;
 }

export class DHGenParameterSpec implements AlgorithmParameterSpec {
constructor(arg0: number, arg1: number);

getPrimeSize(): number;

getExponentSize(): number;
 }

export class DHParameterSpec implements AlgorithmParameterSpec {
constructor(arg0: BigInteger, arg1: BigInteger);
constructor(arg0: BigInteger, arg1: BigInteger, arg2: number);

getP(): BigInteger;

getG(): BigInteger;

getL(): number;
 }

export class DHPrivateKeySpec implements KeySpec {
constructor(arg0: BigInteger, arg1: BigInteger, arg2: BigInteger);

getX(): BigInteger;

getP(): BigInteger;

getG(): BigInteger;
 }

export class DHPublicKeySpec implements KeySpec {
constructor(arg0: BigInteger, arg1: BigInteger, arg2: BigInteger);

getY(): BigInteger;

getP(): BigInteger;

getG(): BigInteger;
 }

export class GCMParameterSpec implements AlgorithmParameterSpec {
constructor(arg0: number, arg1: number[]);
constructor(arg0: number, arg1: number[], arg2: number, arg3: number);

getTLen(): number;

getIV(): number[];
 }

export class IvParameterSpec implements AlgorithmParameterSpec {
constructor(arg0: number[]);
constructor(arg0: number[], arg1: number, arg2: number);

getIV(): number[];
 }

export class OAEPParameterSpec implements AlgorithmParameterSpec {
static DEFAULT:OAEPParameterSpec
constructor(arg0: String, arg1: String, arg2: AlgorithmParameterSpec, arg3: PSource);

getDigestAlgorithm(): String;

getMGFAlgorithm(): String;

getMGFParameters(): AlgorithmParameterSpec;

getPSource(): PSource;
 }

export class PBEKeySpec implements KeySpec {
constructor(arg0: String[]);
constructor(arg0: String[], arg1: number[], arg2: number, arg3: number);
constructor(arg0: String[], arg1: number[], arg2: number);

clearPassword(): void;

getPassword(): String[];

getSalt(): number[];

getIterationCount(): number;

getKeyLength(): number;
 }

export class PBEParameterSpec implements AlgorithmParameterSpec {
constructor(arg0: number[], arg1: number);
constructor(arg0: number[], arg1: number, arg2: AlgorithmParameterSpec);

getSalt(): number[];

getIterationCount(): number;

getParameterSpec(): AlgorithmParameterSpec;
 }

export class PSource {

getAlgorithm(): String;
 }
export namespace PSource { 
export class PSpecified extends PSource {
static DEFAULT:PSource.PSpecified
constructor(arg0: number[]);

getValue(): number[];
 }

}

export class RC2ParameterSpec implements AlgorithmParameterSpec {
constructor(arg0: number);
constructor(arg0: number, arg1: number[]);
constructor(arg0: number, arg1: number[], arg2: number);

getEffectiveKeyBits(): number;

getIV(): number[];

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class RC5ParameterSpec implements AlgorithmParameterSpec {
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number[]);
constructor(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: number);

getVersion(): number;

getRounds(): number;

getWordSize(): number;

getIV(): number[];

equals(arg0: Object): boolean;

hashCode(): number;
 }

export interface SecretKeySpec extends KeySpec, SecretKey { }
export class SecretKeySpec implements KeySpec, SecretKey {
constructor(arg0: number[], arg1: String);
constructor(arg0: number[], arg1: number, arg2: number, arg3: String);

getAlgorithm(): String;

getFormat(): String;

getEncoded(): number[];

hashCode(): number;

equals(arg0: Object): boolean;
 }

}
