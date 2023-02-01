/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.nio.d.ts" />
/// <reference path="javax.security.auth.d.ts" />
/// <reference path="java.security.cert.d.ts" />
/// <reference path="java.security.spec.d.ts" />
declare module '@afterburnerhq/javax.crypto' { 
import { SecureRandom, Key, GeneralSecurityException, Provider, AlgorithmParameters } from '@afterburnerhq/java.security'
import { Cloneable, Class, String } from '@afterburnerhq/java.lang'
import { FilterInputStream, Serializable, FilterOutputStream, InputStream, OutputStream } from '@afterburnerhq/java.io'
import { ByteBuffer } from '@afterburnerhq/java.nio'
import { Destroyable } from '@afterburnerhq/javax.security.auth'
import { Certificate } from '@afterburnerhq/java.security.cert'
import { AlgorithmParameterSpec, PKCS8EncodedKeySpec, KeySpec } from '@afterburnerhq/java.security.spec'
export class AEADBadTagException extends BadPaddingException {
constructor();
constructor(arg0: String);
 }

export class BadPaddingException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
 }

export class Cipher {
static ENCRYPT_MODE:number
static DECRYPT_MODE:number
static WRAP_MODE:number
static UNWRAP_MODE:number
static PUBLIC_KEY:number
static PRIVATE_KEY:number
static SECRET_KEY:number

static getInstance(arg0: String): Cipher;

static getInstance(arg0: String, arg1: String): Cipher;

static getInstance(arg0: String, arg1: Provider): Cipher;

getProvider(): Provider;

getAlgorithm(): String;

getBlockSize(): number;

getOutputSize(arg0: number): number;

getIV(): number[];

getParameters(): AlgorithmParameters;

getExemptionMechanism(): ExemptionMechanism;

init(arg0: number, arg1: Key): void;

init(arg0: number, arg1: Key, arg2: SecureRandom): void;

init(arg0: number, arg1: Key, arg2: AlgorithmParameterSpec): void;

init(arg0: number, arg1: Key, arg2: AlgorithmParameterSpec, arg3: SecureRandom): void;

init(arg0: number, arg1: Key, arg2: AlgorithmParameters): void;

init(arg0: number, arg1: Key, arg2: AlgorithmParameters, arg3: SecureRandom): void;

init(arg0: number, arg1: Certificate): void;

init(arg0: number, arg1: Certificate, arg2: SecureRandom): void;

update(arg0: number[]): number[];

update(arg0: number[], arg1: number, arg2: number): number[];

update(arg0: number[], arg1: number, arg2: number, arg3: number[]): number;

update(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number): number;

update(arg0: ByteBuffer, arg1: ByteBuffer): number;

doFinal(): number[];

doFinal(arg0: number[], arg1: number): number;

doFinal(arg0: number[]): number[];

doFinal(arg0: number[], arg1: number, arg2: number): number[];

doFinal(arg0: number[], arg1: number, arg2: number, arg3: number[]): number;

doFinal(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number): number;

doFinal(arg0: ByteBuffer, arg1: ByteBuffer): number;

wrap(arg0: Key): number[];

unwrap(arg0: number[], arg1: String, arg2: number): Key;

static getMaxAllowedKeyLength(arg0: String): number;

static getMaxAllowedParameterSpec(arg0: String): AlgorithmParameterSpec;

updateAAD(arg0: number[]): void;

updateAAD(arg0: number[], arg1: number, arg2: number): void;

updateAAD(arg0: ByteBuffer): void;
toString(): string;
 }

export class CipherInputStream extends FilterInputStream {
constructor(arg0: InputStream, arg1: Cipher);

read(): number;

read(arg0: number[]): number;

read(arg0: number[], arg1: number, arg2: number): number;

skip(arg0: number): number;

available(): number;

close(): void;

markSupported(): boolean;
 }

export class CipherOutputStream extends FilterOutputStream {
constructor(arg0: OutputStream, arg1: Cipher);

write(arg0: number): void;

write(arg0: number[]): void;

write(arg0: number[], arg1: number, arg2: number): void;

flush(): void;

close(): void;
 }

export abstract class CipherSpi {
constructor();
 }

export class EncryptedPrivateKeyInfo {
constructor(arg0: number[]);
constructor(arg0: String, arg1: number[]);
constructor(arg0: AlgorithmParameters, arg1: number[]);

getAlgName(): String;

getAlgParameters(): AlgorithmParameters;

getEncryptedData(): number[];

getKeySpec(arg0: Cipher): PKCS8EncodedKeySpec;

getKeySpec(arg0: Key): PKCS8EncodedKeySpec;

getKeySpec(arg0: Key, arg1: String): PKCS8EncodedKeySpec;

getKeySpec(arg0: Key, arg1: Provider): PKCS8EncodedKeySpec;

getEncoded(): number[];
 }

export class ExemptionMechanism {

getName(): String;

static getInstance(arg0: String): ExemptionMechanism;

static getInstance(arg0: String, arg1: String): ExemptionMechanism;

static getInstance(arg0: String, arg1: Provider): ExemptionMechanism;

getProvider(): Provider;

isCryptoAllowed(arg0: Key): boolean;

getOutputSize(arg0: number): number;

init(arg0: Key): void;

init(arg0: Key, arg1: AlgorithmParameterSpec): void;

init(arg0: Key, arg1: AlgorithmParameters): void;

genExemptionBlob(): number[];

genExemptionBlob(arg0: number[]): number;

genExemptionBlob(arg0: number[], arg1: number): number;
 }

export class ExemptionMechanismException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
 }

export abstract class ExemptionMechanismSpi {
constructor();
 }

export class IllegalBlockSizeException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
 }

export class KeyAgreement {

getAlgorithm(): String;

static getInstance(arg0: String): KeyAgreement;

static getInstance(arg0: String, arg1: String): KeyAgreement;

static getInstance(arg0: String, arg1: Provider): KeyAgreement;

getProvider(): Provider;

init(arg0: Key): void;

init(arg0: Key, arg1: SecureRandom): void;

init(arg0: Key, arg1: AlgorithmParameterSpec): void;

init(arg0: Key, arg1: AlgorithmParameterSpec, arg2: SecureRandom): void;

doPhase(arg0: Key, arg1: boolean): Key;

generateSecret(): number[];

generateSecret(arg0: number[], arg1: number): number;

generateSecret(arg0: String): SecretKey;
 }

export abstract class KeyAgreementSpi {
constructor();
 }

export class KeyGenerator {

getAlgorithm(): String;

static getInstance(arg0: String): KeyGenerator;

static getInstance(arg0: String, arg1: String): KeyGenerator;

static getInstance(arg0: String, arg1: Provider): KeyGenerator;

getProvider(): Provider;

init(arg0: SecureRandom): void;

init(arg0: AlgorithmParameterSpec): void;

init(arg0: AlgorithmParameterSpec, arg1: SecureRandom): void;

init(arg0: number): void;

init(arg0: number, arg1: SecureRandom): void;

generateKey(): SecretKey;
 }

export abstract class KeyGeneratorSpi {
constructor();
 }

export class Mac implements Cloneable {

getAlgorithm(): String;

static getInstance(arg0: String): Mac;

static getInstance(arg0: String, arg1: String): Mac;

static getInstance(arg0: String, arg1: Provider): Mac;

getProvider(): Provider;

getMacLength(): number;

init(arg0: Key): void;

init(arg0: Key, arg1: AlgorithmParameterSpec): void;

update(arg0: number): void;

update(arg0: number[]): void;

update(arg0: number[], arg1: number, arg2: number): void;

update(arg0: ByteBuffer): void;

doFinal(): number[];

doFinal(arg0: number[], arg1: number): void;

doFinal(arg0: number[]): number[];

reset(): void;

clone(): Object;
 }

export abstract class MacSpi {
constructor();

clone(): Object;
 }

export class NoSuchPaddingException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
 }

export class NullCipher extends Cipher {
constructor();
 }

export class SealedObject implements Serializable {
constructor(arg0: Serializable, arg1: Cipher);

getAlgorithm(): String;

getObject(arg0: Key): Object;

getObject(arg0: Cipher): Object;

getObject(arg0: Key, arg1: String): Object;
 }

export namespace SecretKey { 
const serialVersionUID:number
}

export interface SecretKey extends Key, Destroyable {
serialVersionUID:number
 }

export class SecretKeyFactory {

static getInstance(arg0: String): SecretKeyFactory;

static getInstance(arg0: String, arg1: String): SecretKeyFactory;

static getInstance(arg0: String, arg1: Provider): SecretKeyFactory;

getProvider(): Provider;

getAlgorithm(): String;

generateSecret(arg0: KeySpec): SecretKey;

getKeySpec(arg0: SecretKey, arg1: Class<any>): KeySpec;

translateKey(arg0: SecretKey): SecretKey;
 }

export abstract class SecretKeyFactorySpi {
constructor();
 }

export class ShortBufferException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
 }

}
