/// <reference path="java.security.d.ts" />
/// <reference path="javax.xml.crypto.dsig.keyinfo.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="javax.xml.crypto.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.xml.crypto.dsig.spec.d.ts" />
/// <reference path="java.security.spec.d.ts" />
declare module '@afterburnerhq/javax.xml.crypto.dsig' { 
import { Provider } from '@afterburnerhq/java.security'
import { KeyInfo, KeyInfoFactory } from '@afterburnerhq/javax.xml.crypto.dsig.keyinfo'
import { Throwable, Exception, String } from '@afterburnerhq/java.lang'
import { List } from '@afterburnerhq/java.util'
import { URIReference, XMLCryptoContext, AlgorithmMethod, Data, XMLStructure, KeySelectorResult, URIDereferencer } from '@afterburnerhq/javax.xml.crypto'
import { PrintStream, InputStream, OutputStream, PrintWriter } from '@afterburnerhq/java.io'
import { TransformParameterSpec, DigestMethodParameterSpec, SignatureMethodParameterSpec, C14NMethodParameterSpec } from '@afterburnerhq/javax.xml.crypto.dsig.spec'
import { AlgorithmParameterSpec } from '@afterburnerhq/java.security.spec'
export namespace CanonicalizationMethod { 
const INCLUSIVE:String
const INCLUSIVE_WITH_COMMENTS:String
const EXCLUSIVE:String
const EXCLUSIVE_WITH_COMMENTS:String
const INCLUSIVE_11:String
const INCLUSIVE_11_WITH_COMMENTS:String
}

export interface CanonicalizationMethod extends Transform {
INCLUSIVE:String
INCLUSIVE_WITH_COMMENTS:String
EXCLUSIVE:String
EXCLUSIVE_WITH_COMMENTS:String
INCLUSIVE_11:String
INCLUSIVE_11_WITH_COMMENTS:String

getParameterSpec(): AlgorithmParameterSpec;
 }

export namespace DigestMethod { 
const SHA1:String
const SHA224:String
const SHA256:String
const SHA384:String
const SHA512:String
const RIPEMD160:String
const SHA3_224:String
const SHA3_256:String
const SHA3_384:String
const SHA3_512:String
}

export interface DigestMethod extends XMLStructure, AlgorithmMethod {
SHA1:String
SHA224:String
SHA256:String
SHA384:String
SHA512:String
RIPEMD160:String
SHA3_224:String
SHA3_256:String
SHA3_384:String
SHA3_512:String

getParameterSpec(): AlgorithmParameterSpec;
 }

export namespace Manifest { 
const TYPE:String
}

export interface Manifest extends XMLStructure {
TYPE:String

getId(): String;

getReferences(): List<Reference>;
 }

export interface Reference extends URIReference, XMLStructure {

getTransforms(): List<Transform>;

getDigestMethod(): DigestMethod;

getId(): String;

getDigestValue(): number[];

getCalculatedDigestValue(): number[];

validate(arg0: XMLValidateContext): boolean;

getDereferencedData(): Data;

getDigestInputStream(): InputStream;
 }

export namespace SignatureMethod { 
const DSA_SHA1:String
const DSA_SHA256:String
const RSA_SHA1:String
const RSA_SHA224:String
const RSA_SHA256:String
const RSA_SHA384:String
const RSA_SHA512:String
const SHA1_RSA_MGF1:String
const SHA224_RSA_MGF1:String
const SHA256_RSA_MGF1:String
const SHA384_RSA_MGF1:String
const SHA512_RSA_MGF1:String
const ECDSA_SHA1:String
const ECDSA_SHA224:String
const ECDSA_SHA256:String
const ECDSA_SHA384:String
const ECDSA_SHA512:String
const HMAC_SHA1:String
const HMAC_SHA224:String
const HMAC_SHA256:String
const HMAC_SHA384:String
const HMAC_SHA512:String
const RSA_PSS:String
}

export interface SignatureMethod extends XMLStructure, AlgorithmMethod {
DSA_SHA1:String
DSA_SHA256:String
RSA_SHA1:String
RSA_SHA224:String
RSA_SHA256:String
RSA_SHA384:String
RSA_SHA512:String
SHA1_RSA_MGF1:String
SHA224_RSA_MGF1:String
SHA256_RSA_MGF1:String
SHA384_RSA_MGF1:String
SHA512_RSA_MGF1:String
ECDSA_SHA1:String
ECDSA_SHA224:String
ECDSA_SHA256:String
ECDSA_SHA384:String
ECDSA_SHA512:String
HMAC_SHA1:String
HMAC_SHA224:String
HMAC_SHA256:String
HMAC_SHA384:String
HMAC_SHA512:String
RSA_PSS:String

getParameterSpec(): AlgorithmParameterSpec;
 }

export namespace SignatureProperties { 
const TYPE:String
}

export interface SignatureProperties extends XMLStructure {
TYPE:String

getId(): String;

getProperties(): List<SignatureProperty>;
 }

export interface SignatureProperty extends XMLStructure {

getTarget(): String;

getId(): String;

getContent(): List<XMLStructure>;
 }

export interface SignedInfo extends XMLStructure {

getCanonicalizationMethod(): CanonicalizationMethod;

getSignatureMethod(): SignatureMethod;

getReferences(): List<Reference>;

getId(): String;

getCanonicalizedData(): InputStream;
 }

export namespace Transform { 
const BASE64:String
const ENVELOPED:String
const XPATH:String
const XPATH2:String
const XSLT:String
}

export interface Transform extends XMLStructure, AlgorithmMethod {
BASE64:String
ENVELOPED:String
XPATH:String
XPATH2:String
XSLT:String

getParameterSpec(): AlgorithmParameterSpec;

transform(arg0: Data, arg1: XMLCryptoContext): Data;

transform(arg0: Data, arg1: XMLCryptoContext, arg2: OutputStream): Data;
 }

export class TransformException extends Exception {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);

getCause(): Throwable;

printStackTrace(): void;

printStackTrace(arg0: PrintStream): void;

printStackTrace(arg0: PrintWriter): void;
 }

export abstract class TransformService implements Transform {

static getInstance(arg0: String, arg1: String): TransformService;

static getInstance(arg0: String, arg1: String, arg2: Provider): TransformService;

static getInstance(arg0: String, arg1: String, arg2: String): TransformService;

getMechanismType(): String;

getAlgorithm(): String;

getProvider(): Provider;

abstract init(arg0: TransformParameterSpec): void;

abstract marshalParams(arg0: XMLStructure, arg1: XMLCryptoContext): void;

abstract init(arg0: XMLStructure, arg1: XMLCryptoContext): void;
 }

export namespace XMLObject { 
const TYPE:String
}

export interface XMLObject extends XMLStructure {
TYPE:String

getContent(): List<XMLStructure>;

getId(): String;

getMimeType(): String;

getEncoding(): String;
 }

export interface XMLSignContext extends XMLCryptoContext {
 }

export namespace XMLSignature { 
const XMLNS:String
}

export interface XMLSignature extends XMLStructure {
XMLNS:String

validate(arg0: XMLValidateContext): boolean;

getKeyInfo(): KeyInfo;

getSignedInfo(): SignedInfo;

getObjects(): List<XMLObject>;

getId(): String;

getSignatureValue(): XMLSignature.SignatureValue;

sign(arg0: XMLSignContext): void;

getKeySelectorResult(): KeySelectorResult;
 }
export namespace XMLSignature { 
export interface SignatureValue extends XMLStructure {

getId(): String;

getValue(): number[];

validate(arg0: XMLValidateContext): boolean;
 }

}

export class XMLSignatureException extends Exception {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);

getCause(): Throwable;

printStackTrace(): void;

printStackTrace(arg0: PrintStream): void;

printStackTrace(arg0: PrintWriter): void;
 }

export abstract class XMLSignatureFactory {

static getInstance(arg0: String): XMLSignatureFactory;

static getInstance(arg0: String, arg1: Provider): XMLSignatureFactory;

static getInstance(arg0: String, arg1: String): XMLSignatureFactory;

static getInstance(): XMLSignatureFactory;

getMechanismType(): String;

getProvider(): Provider;

abstract newXMLSignature(arg0: SignedInfo, arg1: KeyInfo): XMLSignature;

abstract newXMLSignature(arg0: SignedInfo, arg1: KeyInfo, arg2: List<XMLObject>, arg3: String, arg4: String): XMLSignature;

abstract newReference(arg0: String, arg1: DigestMethod): Reference;

abstract newReference(arg0: String, arg1: DigestMethod, arg2: List<Transform>, arg3: String, arg4: String): Reference;

abstract newReference(arg0: String, arg1: DigestMethod, arg2: List<Transform>, arg3: String, arg4: String, arg5: number[]): Reference;

abstract newReference(arg0: String, arg1: DigestMethod, arg2: List<Transform>, arg3: Data, arg4: List<Transform>, arg5: String, arg6: String): Reference;

abstract newSignedInfo(arg0: CanonicalizationMethod, arg1: SignatureMethod, arg2: List<Reference>): SignedInfo;

abstract newSignedInfo(arg0: CanonicalizationMethod, arg1: SignatureMethod, arg2: List<Reference>, arg3: String): SignedInfo;

abstract newXMLObject(arg0: List<XMLStructure>, arg1: String, arg2: String, arg3: String): XMLObject;

abstract newManifest(arg0: List<Reference>): Manifest;

abstract newManifest(arg0: List<Reference>, arg1: String): Manifest;

abstract newSignatureProperty(arg0: List<XMLStructure>, arg1: String, arg2: String): SignatureProperty;

abstract newSignatureProperties(arg0: List<SignatureProperty>, arg1: String): SignatureProperties;

abstract newDigestMethod(arg0: String, arg1: DigestMethodParameterSpec): DigestMethod;

abstract newSignatureMethod(arg0: String, arg1: SignatureMethodParameterSpec): SignatureMethod;

abstract newTransform(arg0: String, arg1: TransformParameterSpec): Transform;

abstract newTransform(arg0: String, arg1: XMLStructure): Transform;

abstract newCanonicalizationMethod(arg0: String, arg1: C14NMethodParameterSpec): CanonicalizationMethod;

abstract newCanonicalizationMethod(arg0: String, arg1: XMLStructure): CanonicalizationMethod;

getKeyInfoFactory(): KeyInfoFactory;

abstract unmarshalXMLSignature(arg0: XMLValidateContext): XMLSignature;

abstract unmarshalXMLSignature(arg0: XMLStructure): XMLSignature;

abstract isFeatureSupported(arg0: String): boolean;

abstract getURIDereferencer(): URIDereferencer;
 }

export interface XMLValidateContext extends XMLCryptoContext {
 }

}
