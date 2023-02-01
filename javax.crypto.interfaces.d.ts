/// <reference path="javax.crypto.d.ts" />
/// <reference path="java.security.d.ts" />
/// <reference path="javax.crypto.spec.d.ts" />
/// <reference path="java.math.d.ts" />
declare module '@afterburnerhq/javax.crypto.interfaces' { 
import { SecretKey } from '@afterburnerhq/javax.crypto'
import { PublicKey, PrivateKey } from '@afterburnerhq/java.security'
import { DHParameterSpec } from '@afterburnerhq/javax.crypto.spec'
import { BigInteger } from '@afterburnerhq/java.math'
export interface DHKey {

getParams(): DHParameterSpec;
 }

export namespace DHPrivateKey { 
const serialVersionUID:number
}

export interface DHPrivateKey extends DHKey, PrivateKey {
serialVersionUID:number

getX(): BigInteger;
 }

export namespace DHPublicKey { 
const serialVersionUID:number
}

export interface DHPublicKey extends DHKey, PublicKey {
serialVersionUID:number

getY(): BigInteger;
 }

export namespace PBEKey { 
const serialVersionUID:number
}

export interface PBEKey extends SecretKey {
serialVersionUID:number

getPassword(): String[];

getSalt(): number[];

getIterationCount(): number;
 }

}
