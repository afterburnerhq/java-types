/// <reference path="java.security.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="javax.xml.crypto.d.ts" />
/// <reference path="javax.xml.crypto.dsig.d.ts" />
/// <reference path="java.math.d.ts" />
declare module '@afterburnerhq/javax.xml.crypto.dsig.keyinfo' { 
import { PublicKey, Provider } from '@afterburnerhq/java.security'
import { List } from '@afterburnerhq/java.util'
import { String } from '@afterburnerhq/java.lang'
import { XMLCryptoContext, Data, XMLStructure, URIDereferencer, URIReference } from '@afterburnerhq/javax.xml.crypto'
import { Transform } from '@afterburnerhq/javax.xml.crypto.dsig'
import { BigInteger } from '@afterburnerhq/java.math'
export interface KeyInfo extends XMLStructure {

getContent(): List<XMLStructure>;

getId(): String;

marshal(arg0: XMLStructure, arg1: XMLCryptoContext): void;
 }

export abstract class KeyInfoFactory {

static getInstance(arg0: String): KeyInfoFactory;

static getInstance(arg0: String, arg1: Provider): KeyInfoFactory;

static getInstance(arg0: String, arg1: String): KeyInfoFactory;

static getInstance(): KeyInfoFactory;

getMechanismType(): String;

getProvider(): Provider;

abstract newKeyInfo(arg0: List<XMLStructure>): KeyInfo;

abstract newKeyInfo(arg0: List<XMLStructure>, arg1: String): KeyInfo;

abstract newKeyName(arg0: String): KeyName;

abstract newKeyValue(arg0: PublicKey): KeyValue;

abstract newPGPData(arg0: number[]): PGPData;

abstract newPGPData(arg0: number[], arg1: number[], arg2: List<XMLStructure>): PGPData;

abstract newPGPData(arg0: number[], arg1: List<XMLStructure>): PGPData;

abstract newRetrievalMethod(arg0: String): RetrievalMethod;

abstract newRetrievalMethod(arg0: String, arg1: String, arg2: List<Transform>): RetrievalMethod;

abstract newX509Data(arg0: List<any>): X509Data;

abstract newX509IssuerSerial(arg0: String, arg1: BigInteger): X509IssuerSerial;

abstract isFeatureSupported(arg0: String): boolean;

abstract getURIDereferencer(): URIDereferencer;

abstract unmarshalKeyInfo(arg0: XMLStructure): KeyInfo;
 }

export interface KeyName extends XMLStructure {

getName(): String;
 }

export namespace KeyValue { 
const DSA_TYPE:String
const RSA_TYPE:String
const EC_TYPE:String
}

export interface KeyValue extends XMLStructure {
DSA_TYPE:String
RSA_TYPE:String
EC_TYPE:String

getPublicKey(): PublicKey;
 }

export namespace PGPData { 
const TYPE:String
}

export interface PGPData extends XMLStructure {
TYPE:String

getKeyId(): number[];

getKeyPacket(): number[];

getExternalElements(): List<XMLStructure>;
 }

export interface RetrievalMethod extends URIReference, XMLStructure {

getTransforms(): List<Transform>;

getURI(): String;

dereference(arg0: XMLCryptoContext): Data;
 }

export namespace X509Data { 
const TYPE:String
const RAW_X509_CERTIFICATE_TYPE:String
}

export interface X509Data extends XMLStructure {
TYPE:String
RAW_X509_CERTIFICATE_TYPE:String

getContent(): List<any>;
 }

export interface X509IssuerSerial extends XMLStructure {

getIssuerName(): String;

getSerialNumber(): BigInteger;
 }

}
