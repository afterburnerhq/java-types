/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="javax.security.auth.x500.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.math.d.ts" />
declare module '@afterburnerhq/java.security.cert' { 
import { KeyStore, PublicKey, Principal, GeneralSecurityException, Provider } from '@afterburnerhq/java.security'
import { Enum, Throwable, Class, Cloneable, String } from '@afterburnerhq/java.lang'
import { Iterator, Collection, List, Set, Map, Date } from '@afterburnerhq/java.util'
import { X500Principal } from '@afterburnerhq/javax.security.auth.x500'
import { URI } from '@afterburnerhq/java.net'
import { Serializable, InputStream, OutputStream } from '@afterburnerhq/java.io'
import { BigInteger } from '@afterburnerhq/java.math'
export abstract class CRL {

getType(): String;
toString(): string;

abstract isRevoked(arg0: Certificate): boolean;
 }

export class CRLException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class CRLReason extends Enum<CRLReason> {
static UNSPECIFIED:CRLReason
static KEY_COMPROMISE:CRLReason
static CA_COMPROMISE:CRLReason
static AFFILIATION_CHANGED:CRLReason
static SUPERSEDED:CRLReason
static CESSATION_OF_OPERATION:CRLReason
static CERTIFICATE_HOLD:CRLReason
static UNUSED:CRLReason
static REMOVE_FROM_CRL:CRLReason
static PRIVILEGE_WITHDRAWN:CRLReason
static AA_COMPROMISE:CRLReason

static values(): CRLReason[];

static valueOf(arg0: String): CRLReason;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export interface CRLSelector extends Cloneable {

match(arg0: CRL): boolean;

clone(): Object;
 }

export abstract class CertPath implements Serializable {

getType(): String;

abstract getEncodings(): Iterator<String>;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;

abstract getEncoded(): number[];

abstract getEncoded(arg0: String): number[];

abstract getCertificates(): List<Certificate>;
 }
export namespace CertPath { 
export class CertPathRep implements Serializable {
 }

}

export class CertPathBuilder {

static getInstance(arg0: String): CertPathBuilder;

static getInstance(arg0: String, arg1: String): CertPathBuilder;

static getInstance(arg0: String, arg1: Provider): CertPathBuilder;

getProvider(): Provider;

getAlgorithm(): String;

build(arg0: CertPathParameters): CertPathBuilderResult;

static getDefaultType(): String;

getRevocationChecker(): CertPathChecker;
 }

export class CertPathBuilderException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
 }

export interface CertPathBuilderResult extends Cloneable {

getCertPath(): CertPath;

clone(): Object;
 }

export abstract class CertPathBuilderSpi {
constructor();

abstract engineBuild(arg0: CertPathParameters): CertPathBuilderResult;

engineGetRevocationChecker(): CertPathChecker;
 }

export interface CertPathChecker {

init(arg0: boolean): void;

isForwardCheckingSupported(): boolean;

check(arg0: Certificate): void;
 }

export interface CertPathParameters extends Cloneable {

clone(): Object;
 }

export class CertPathValidator {

static getInstance(arg0: String): CertPathValidator;

static getInstance(arg0: String, arg1: String): CertPathValidator;

static getInstance(arg0: String, arg1: Provider): CertPathValidator;

getProvider(): Provider;

getAlgorithm(): String;

validate(arg0: CertPath, arg1: CertPathParameters): CertPathValidatorResult;

static getDefaultType(): String;

getRevocationChecker(): CertPathChecker;
 }

export class CertPathValidatorException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: String, arg1: Throwable, arg2: CertPath, arg3: number);
constructor(arg0: String, arg1: Throwable, arg2: CertPath, arg3: number, arg4: CertPathValidatorException.Reason);

getCertPath(): CertPath;

getIndex(): number;

getReason(): CertPathValidatorException.Reason;
 }
export namespace CertPathValidatorException { 
export class BasicReason extends Enum<CertPathValidatorException.BasicReason> implements CertPathValidatorException.Reason {
static UNSPECIFIED:CertPathValidatorException.BasicReason
static EXPIRED:CertPathValidatorException.BasicReason
static NOT_YET_VALID:CertPathValidatorException.BasicReason
static REVOKED:CertPathValidatorException.BasicReason
static UNDETERMINED_REVOCATION_STATUS:CertPathValidatorException.BasicReason
static INVALID_SIGNATURE:CertPathValidatorException.BasicReason
static ALGORITHM_CONSTRAINED:CertPathValidatorException.BasicReason

static values(): CertPathValidatorException.BasicReason[];

static valueOf(arg0: String): CertPathValidatorException.BasicReason;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export interface Reason extends Serializable {
 }

}

export interface CertPathValidatorResult extends Cloneable {

clone(): Object;
 }

export abstract class CertPathValidatorSpi {
constructor();

abstract engineValidate(arg0: CertPath, arg1: CertPathParameters): CertPathValidatorResult;

engineGetRevocationChecker(): CertPathChecker;
 }

export interface CertSelector extends Cloneable {

match(arg0: Certificate): boolean;

clone(): Object;
 }

export class CertStore {

getCertificates(arg0: CertSelector): Collection<Certificate>;

getCRLs(arg0: CRLSelector): Collection<CRL>;

static getInstance(arg0: String, arg1: CertStoreParameters): CertStore;

static getInstance(arg0: String, arg1: CertStoreParameters, arg2: String): CertStore;

static getInstance(arg0: String, arg1: CertStoreParameters, arg2: Provider): CertStore;

getCertStoreParameters(): CertStoreParameters;

getType(): String;

getProvider(): Provider;

static getDefaultType(): String;
 }

export class CertStoreException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
 }

export interface CertStoreParameters extends Cloneable {

clone(): Object;
 }

export abstract class CertStoreSpi {
constructor(arg0: CertStoreParameters);

abstract engineGetCertificates(arg0: CertSelector): Collection<Certificate>;

abstract engineGetCRLs(arg0: CRLSelector): Collection<CRL>;
 }

export abstract class Certificate implements Serializable {

getType(): String;

equals(arg0: Object): boolean;

hashCode(): number;

abstract getEncoded(): number[];

abstract verify(arg0: PublicKey): void;

abstract verify(arg0: PublicKey, arg1: String): void;

verify(arg0: PublicKey, arg1: Provider): void;
toString(): string;

abstract getPublicKey(): PublicKey;
 }
export namespace Certificate { 
export class CertificateRep implements Serializable {
 }

}

export class CertificateEncodingException extends CertificateException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class CertificateException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class CertificateExpiredException extends CertificateException {
constructor();
constructor(arg0: String);
 }

export class CertificateFactory {

static getInstance(arg0: String): CertificateFactory;

static getInstance(arg0: String, arg1: String): CertificateFactory;

static getInstance(arg0: String, arg1: Provider): CertificateFactory;

getProvider(): Provider;

getType(): String;

generateCertificate(arg0: InputStream): Certificate;

getCertPathEncodings(): Iterator<String>;

generateCertPath(arg0: InputStream): CertPath;

generateCertPath(arg0: InputStream, arg1: String): CertPath;

generateCertPath(arg0: List<Certificate>): CertPath;

generateCertificates(arg0: InputStream): Collection<Certificate>;

generateCRL(arg0: InputStream): CRL;

generateCRLs(arg0: InputStream): Collection<CRL>;
 }

export abstract class CertificateFactorySpi {
constructor();

abstract engineGenerateCertificate(arg0: InputStream): Certificate;

engineGenerateCertPath(arg0: InputStream): CertPath;

engineGenerateCertPath(arg0: InputStream, arg1: String): CertPath;

engineGenerateCertPath(arg0: List<Certificate>): CertPath;

engineGetCertPathEncodings(): Iterator<String>;

abstract engineGenerateCertificates(arg0: InputStream): Collection<Certificate>;

abstract engineGenerateCRL(arg0: InputStream): CRL;

abstract engineGenerateCRLs(arg0: InputStream): Collection<CRL>;
 }

export class CertificateNotYetValidException extends CertificateException {
constructor();
constructor(arg0: String);
 }

export class CertificateParsingException extends CertificateException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class CertificateRevokedException extends CertificateException {
constructor(arg0: Date, arg1: CRLReason, arg2: X500Principal, arg3: Map<String, Extension>);

getRevocationDate(): Date;

getRevocationReason(): CRLReason;

getAuthorityName(): X500Principal;

getInvalidityDate(): Date;

getExtensions(): Map<String, Extension>;

getMessage(): String;
 }

export class CollectionCertStoreParameters implements CertStoreParameters {
constructor(arg0: Collection<any>);
constructor();

getCollection(): Collection<any>;

clone(): Object;
toString(): string;
 }

export interface Extension {

getId(): String;

isCritical(): boolean;

getValue(): number[];

encode(arg0: OutputStream): void;
 }

export class LDAPCertStoreParameters implements CertStoreParameters {
constructor(arg0: String, arg1: number);
constructor(arg0: String);
constructor();

getServerName(): String;

getPort(): number;

clone(): Object;
toString(): string;
 }

export class PKIXBuilderParameters extends PKIXParameters {
constructor(arg0: Set<TrustAnchor>, arg1: CertSelector);
constructor(arg0: KeyStore, arg1: CertSelector);

setMaxPathLength(arg0: number): void;

getMaxPathLength(): number;
toString(): string;
 }

export class PKIXCertPathBuilderResult extends PKIXCertPathValidatorResult implements CertPathBuilderResult {
constructor(arg0: CertPath, arg1: TrustAnchor, arg2: PolicyNode, arg3: PublicKey);

getCertPath(): CertPath;
toString(): string;
 }

export abstract class PKIXCertPathChecker implements CertPathChecker, Cloneable {

abstract init(arg0: boolean): void;

abstract isForwardCheckingSupported(): boolean;

abstract getSupportedExtensions(): Set<String>;

abstract check(arg0: Certificate, arg1: Collection<String>): void;

check(arg0: Certificate): void;

clone(): Object;
 }

export class PKIXCertPathValidatorResult implements CertPathValidatorResult {
constructor(arg0: TrustAnchor, arg1: PolicyNode, arg2: PublicKey);

getTrustAnchor(): TrustAnchor;

getPolicyTree(): PolicyNode;

getPublicKey(): PublicKey;

clone(): Object;
toString(): string;
 }

export class PKIXParameters implements CertPathParameters {
constructor(arg0: Set<TrustAnchor>);
constructor(arg0: KeyStore);

getTrustAnchors(): Set<TrustAnchor>;

setTrustAnchors(arg0: Set<TrustAnchor>): void;

getInitialPolicies(): Set<String>;

setInitialPolicies(arg0: Set<String>): void;

setCertStores(arg0: List<CertStore>): void;

addCertStore(arg0: CertStore): void;

getCertStores(): List<CertStore>;

setRevocationEnabled(arg0: boolean): void;

isRevocationEnabled(): boolean;

setExplicitPolicyRequired(arg0: boolean): void;

isExplicitPolicyRequired(): boolean;

setPolicyMappingInhibited(arg0: boolean): void;

isPolicyMappingInhibited(): boolean;

setAnyPolicyInhibited(arg0: boolean): void;

isAnyPolicyInhibited(): boolean;

setPolicyQualifiersRejected(arg0: boolean): void;

getPolicyQualifiersRejected(): boolean;

getDate(): Date;

setDate(arg0: Date): void;

setCertPathCheckers(arg0: List<PKIXCertPathChecker>): void;

getCertPathCheckers(): List<PKIXCertPathChecker>;

addCertPathChecker(arg0: PKIXCertPathChecker): void;

getSigProvider(): String;

setSigProvider(arg0: String): void;

getTargetCertConstraints(): CertSelector;

setTargetCertConstraints(arg0: CertSelector): void;

clone(): Object;
toString(): string;
 }

export class PKIXReason extends Enum<PKIXReason> implements CertPathValidatorException.Reason {
static NAME_CHAINING:PKIXReason
static INVALID_KEY_USAGE:PKIXReason
static INVALID_POLICY:PKIXReason
static NO_TRUST_ANCHOR:PKIXReason
static UNRECOGNIZED_CRIT_EXT:PKIXReason
static NOT_CA_CERT:PKIXReason
static PATH_TOO_LONG:PKIXReason
static INVALID_NAME:PKIXReason

static values(): PKIXReason[];

static valueOf(arg0: String): PKIXReason;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export abstract class PKIXRevocationChecker extends PKIXCertPathChecker {

setOcspResponder(arg0: URI): void;

getOcspResponder(): URI;

setOcspResponderCert(arg0: X509Certificate): void;

getOcspResponderCert(): X509Certificate;

setOcspExtensions(arg0: List<Extension>): void;

getOcspExtensions(): List<Extension>;

setOcspResponses(arg0: Map<X509Certificate, number[]>): void;

getOcspResponses(): Map<X509Certificate, number[]>;

setOptions(arg0: Set<PKIXRevocationChecker.Option>): void;

getOptions(): Set<PKIXRevocationChecker.Option>;

abstract getSoftFailExceptions(): List<CertPathValidatorException>;

clone(): PKIXRevocationChecker;
 }
export namespace PKIXRevocationChecker { 
export class Option extends Enum<PKIXRevocationChecker.Option> {
static ONLY_END_ENTITY:PKIXRevocationChecker.Option
static PREFER_CRLS:PKIXRevocationChecker.Option
static NO_FALLBACK:PKIXRevocationChecker.Option
static SOFT_FAIL:PKIXRevocationChecker.Option

static values(): PKIXRevocationChecker.Option[];

static valueOf(arg0: String): PKIXRevocationChecker.Option;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export interface PolicyNode {

getParent(): PolicyNode;

getChildren(): Iterator<PolicyNode>;

getDepth(): number;

getValidPolicy(): String;

getPolicyQualifiers(): Set<PolicyQualifierInfo>;

getExpectedPolicies(): Set<String>;

isCritical(): boolean;
 }

export class PolicyQualifierInfo {
constructor(arg0: number[]);

getPolicyQualifierId(): String;

getEncoded(): number[];

getPolicyQualifier(): number[];
toString(): string;
 }

export class TrustAnchor {
constructor(arg0: X509Certificate, arg1: number[]);
constructor(arg0: X500Principal, arg1: PublicKey, arg2: number[]);
constructor(arg0: String, arg1: PublicKey, arg2: number[]);

getTrustedCert(): X509Certificate;

getCA(): X500Principal;

getCAName(): String;

getCAPublicKey(): PublicKey;

getNameConstraints(): number[];
toString(): string;
 }

export class URICertStoreParameters implements CertStoreParameters {
constructor(arg0: URI);

getURI(): URI;

clone(): URICertStoreParameters;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;
 }

export abstract class X509CRL extends CRL implements X509Extension {

equals(arg0: Object): boolean;

hashCode(): number;

abstract getEncoded(): number[];

abstract verify(arg0: PublicKey): void;

abstract verify(arg0: PublicKey, arg1: String): void;

verify(arg0: PublicKey, arg1: Provider): void;

abstract getVersion(): number;

abstract getIssuerDN(): Principal;

getIssuerX500Principal(): X500Principal;

abstract getThisUpdate(): Date;

abstract getNextUpdate(): Date;

abstract getRevokedCertificate(arg0: BigInteger): X509CRLEntry;

getRevokedCertificate(arg0: X509Certificate): X509CRLEntry;

abstract getRevokedCertificates(): Set<X509CRLEntry>;

abstract getTBSCertList(): number[];

abstract getSignature(): number[];

abstract getSigAlgName(): String;

abstract getSigAlgOID(): String;

abstract getSigAlgParams(): number[];
 }

export abstract class X509CRLEntry implements X509Extension {
constructor();

equals(arg0: Object): boolean;

hashCode(): number;

abstract getEncoded(): number[];

abstract getSerialNumber(): BigInteger;

getCertificateIssuer(): X500Principal;

abstract getRevocationDate(): Date;

abstract hasExtensions(): boolean;
toString(): string;

getRevocationReason(): CRLReason;
 }

export class X509CRLSelector implements CRLSelector {
constructor();

setIssuers(arg0: Collection<X500Principal>): void;

setIssuerNames(arg0: Collection<any>): void;

addIssuer(arg0: X500Principal): void;

addIssuerName(arg0: String): void;

addIssuerName(arg0: number[]): void;

setMinCRLNumber(arg0: BigInteger): void;

setMaxCRLNumber(arg0: BigInteger): void;

setDateAndTime(arg0: Date): void;

setCertificateChecking(arg0: X509Certificate): void;

getIssuers(): Collection<X500Principal>;

getIssuerNames(): Collection<Object>;

getMinCRL(): BigInteger;

getMaxCRL(): BigInteger;

getDateAndTime(): Date;

getCertificateChecking(): X509Certificate;
toString(): string;

match(arg0: CRL): boolean;

clone(): Object;
 }

export class X509CertSelector implements CertSelector {
constructor();

setCertificate(arg0: X509Certificate): void;

setSerialNumber(arg0: BigInteger): void;

setIssuer(arg0: X500Principal): void;

setIssuer(arg0: String): void;

setIssuer(arg0: number[]): void;

setSubject(arg0: X500Principal): void;

setSubject(arg0: String): void;

setSubject(arg0: number[]): void;

setSubjectKeyIdentifier(arg0: number[]): void;

setAuthorityKeyIdentifier(arg0: number[]): void;

setCertificateValid(arg0: Date): void;

setPrivateKeyValid(arg0: Date): void;

setSubjectPublicKeyAlgID(arg0: String): void;

setSubjectPublicKey(arg0: PublicKey): void;

setSubjectPublicKey(arg0: number[]): void;

setKeyUsage(arg0: boolean[]): void;

setExtendedKeyUsage(arg0: Set<String>): void;

setMatchAllSubjectAltNames(arg0: boolean): void;

setSubjectAlternativeNames(arg0: Collection<List<any>>): void;

addSubjectAlternativeName(arg0: number, arg1: String): void;

addSubjectAlternativeName(arg0: number, arg1: number[]): void;

setNameConstraints(arg0: number[]): void;

setBasicConstraints(arg0: number): void;

setPolicy(arg0: Set<String>): void;

setPathToNames(arg0: Collection<List<any>>): void;

addPathToName(arg0: number, arg1: String): void;

addPathToName(arg0: number, arg1: number[]): void;

getCertificate(): X509Certificate;

getSerialNumber(): BigInteger;

getIssuer(): X500Principal;

getIssuerAsString(): String;

getIssuerAsBytes(): number[];

getSubject(): X500Principal;

getSubjectAsString(): String;

getSubjectAsBytes(): number[];

getSubjectKeyIdentifier(): number[];

getAuthorityKeyIdentifier(): number[];

getCertificateValid(): Date;

getPrivateKeyValid(): Date;

getSubjectPublicKeyAlgID(): String;

getSubjectPublicKey(): PublicKey;

getKeyUsage(): boolean[];

getExtendedKeyUsage(): Set<String>;

getMatchAllSubjectAltNames(): boolean;

getSubjectAlternativeNames(): Collection<List<any>>;

getNameConstraints(): number[];

getBasicConstraints(): number;

getPolicy(): Set<String>;

getPathToNames(): Collection<List<any>>;
toString(): string;

match(arg0: Certificate): boolean;

clone(): Object;
 }

export abstract class X509Certificate extends Certificate implements X509Extension {

abstract checkValidity(): void;

abstract checkValidity(arg0: Date): void;

abstract getVersion(): number;

abstract getSerialNumber(): BigInteger;

abstract getIssuerDN(): Principal;

getIssuerX500Principal(): X500Principal;

abstract getSubjectDN(): Principal;

getSubjectX500Principal(): X500Principal;

abstract getNotBefore(): Date;

abstract getNotAfter(): Date;

abstract getTBSCertificate(): number[];

abstract getSignature(): number[];

abstract getSigAlgName(): String;

abstract getSigAlgOID(): String;

abstract getSigAlgParams(): number[];

abstract getIssuerUniqueID(): boolean[];

abstract getSubjectUniqueID(): boolean[];

abstract getKeyUsage(): boolean[];

getExtendedKeyUsage(): List<String>;

abstract getBasicConstraints(): number;

getSubjectAlternativeNames(): Collection<List<any>>;

getIssuerAlternativeNames(): Collection<List<any>>;

verify(arg0: PublicKey, arg1: Provider): void;
 }

export interface X509Extension {

hasUnsupportedCriticalExtension(): boolean;

getCriticalExtensionOIDs(): Set<String>;

getNonCriticalExtensionOIDs(): Set<String>;

getExtensionValue(arg0: String): number[];
 }

}
