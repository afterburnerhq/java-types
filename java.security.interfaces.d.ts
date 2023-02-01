/// <reference path="java.security.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.math.d.ts" />
/// <reference path="java.security.spec.d.ts" />
declare module '@afterburnerhq/java.security.interfaces' { 
import { SecureRandom, PublicKey, PrivateKey } from '@afterburnerhq/java.security'
import { Optional } from '@afterburnerhq/java.util'
import { BigInteger } from '@afterburnerhq/java.math'
import { RSAOtherPrimeInfo, NamedParameterSpec, ECPoint, AlgorithmParameterSpec, ECParameterSpec, EdECPoint } from '@afterburnerhq/java.security.spec'
export interface DSAKey {

getParams(): DSAParams;
 }

export interface DSAKeyPairGenerator {

initialize(arg0: DSAParams, arg1: SecureRandom): void;

initialize(arg0: number, arg1: boolean, arg2: SecureRandom): void;
 }

export interface DSAParams {

getP(): BigInteger;

getQ(): BigInteger;

getG(): BigInteger;
 }

export namespace DSAPrivateKey { 
const serialVersionUID:number
}

export interface DSAPrivateKey extends DSAKey, PrivateKey {
serialVersionUID:number

getX(): BigInteger;
 }

export namespace DSAPublicKey { 
const serialVersionUID:number
}

export interface DSAPublicKey extends DSAKey, PublicKey {
serialVersionUID:number

getY(): BigInteger;
 }

export interface ECKey {

getParams(): ECParameterSpec;
 }

export namespace ECPrivateKey { 
const serialVersionUID:number
}

export interface ECPrivateKey extends PrivateKey, ECKey {
serialVersionUID:number

getS(): BigInteger;
 }

export namespace ECPublicKey { 
const serialVersionUID:number
}

export interface ECPublicKey extends PublicKey, ECKey {
serialVersionUID:number

getW(): ECPoint;
 }

export interface EdECKey {

getParams(): NamedParameterSpec;
 }

export interface EdECPrivateKey extends EdECKey, PrivateKey {

getBytes(): Optional<number[]>;
 }

export interface EdECPublicKey extends EdECKey, PublicKey {

getPoint(): EdECPoint;
 }

export interface RSAKey {

getModulus(): BigInteger;

/* default */ getParams(): AlgorithmParameterSpec;
 }

export namespace RSAMultiPrimePrivateCrtKey { 
const serialVersionUID:number
}

export interface RSAMultiPrimePrivateCrtKey extends RSAPrivateKey {
serialVersionUID:number

getPublicExponent(): BigInteger;

getPrimeP(): BigInteger;

getPrimeQ(): BigInteger;

getPrimeExponentP(): BigInteger;

getPrimeExponentQ(): BigInteger;

getCrtCoefficient(): BigInteger;

getOtherPrimeInfo(): RSAOtherPrimeInfo[];
 }

export namespace RSAPrivateCrtKey { 
const serialVersionUID:number
}

export interface RSAPrivateCrtKey extends RSAPrivateKey {
serialVersionUID:number

getPublicExponent(): BigInteger;

getPrimeP(): BigInteger;

getPrimeQ(): BigInteger;

getPrimeExponentP(): BigInteger;

getPrimeExponentQ(): BigInteger;

getCrtCoefficient(): BigInteger;
 }

export namespace RSAPrivateKey { 
const serialVersionUID:number
}

export interface RSAPrivateKey extends PrivateKey, RSAKey {
serialVersionUID:number

getPrivateExponent(): BigInteger;
 }

export namespace RSAPublicKey { 
const serialVersionUID:number
}

export interface RSAPublicKey extends PublicKey, RSAKey {
serialVersionUID:number

getPublicExponent(): BigInteger;
 }

export interface XECKey {

getParams(): AlgorithmParameterSpec;
 }

export interface XECPrivateKey extends XECKey, PrivateKey {

getScalar(): Optional<number[]>;
 }

export interface XECPublicKey extends XECKey, PublicKey {

getU(): BigInteger;
 }

}
