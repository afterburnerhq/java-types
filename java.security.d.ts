/// <reference path="javax.crypto.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.util.stream.d.ts" />
/// <reference path="java.nio.d.ts" />
/// <reference path="java.security.cert.d.ts" />
/// <reference path="java.security.spec.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.security.auth.callback.d.ts" />
/// <reference path="javax.security.auth.d.ts" />
/// <reference path="java.util.function.d.ts" />
/// <reference path="javax.security.auth.login.d.ts" />
declare module '@afterburnerhq/java.security' { 
import { SecretKey } from '@afterburnerhq/javax.crypto'
import { Set, Enumeration, Random, Collection, List, Properties, Map, Date } from '@afterburnerhq/java.util'
import { Stream } from '@afterburnerhq/java.util.stream'
import { ByteBuffer } from '@afterburnerhq/java.nio'
import { CertPath, Certificate } from '@afterburnerhq/java.security.cert'
import { AlgorithmParameterSpec, KeySpec } from '@afterburnerhq/java.security.spec'
import { Enum, RuntimeException, Throwable, ClassLoader, SecurityException, Class, String, Exception, IllegalArgumentException } from '@afterburnerhq/java.lang'
import { URI, URL } from '@afterburnerhq/java.net'
import { Serializable, FilterInputStream, FilterOutputStream, File, InputStream, OutputStream } from '@afterburnerhq/java.io'
import { CallbackHandler } from '@afterburnerhq/javax.security.auth.callback'
import { Subject, Destroyable } from '@afterburnerhq/javax.security.auth'
import { BiFunction, Function, BiConsumer } from '@afterburnerhq/java.util.function'
import { Configuration } from '@afterburnerhq/javax.security.auth.login'
export class AccessControlContext {
constructor(arg0: ProtectionDomain[]);
constructor(arg0: AccessControlContext, arg1: DomainCombiner);

getDomainCombiner(): DomainCombiner;

checkPermission(arg0: Permission): void;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class AccessControlException extends SecurityException {
constructor(arg0: String);
constructor(arg0: String, arg1: Permission);

getPermission(): Permission;
 }

export class AccessController {

static doPrivileged<T extends Object>(arg0: PrivilegedAction<T>): T;

static doPrivilegedWithCombiner<T extends Object>(arg0: PrivilegedAction<T>): T;

static doPrivileged<T extends Object>(arg0: PrivilegedAction<T>, arg1: AccessControlContext): T;

static doPrivileged<T extends Object>(arg0: PrivilegedAction<T>, arg1: AccessControlContext, arg2: Permission[]): T;

static doPrivilegedWithCombiner<T extends Object>(arg0: PrivilegedAction<T>, arg1: AccessControlContext, arg2: Permission[]): T;

static doPrivileged<T extends Object>(arg0: PrivilegedExceptionAction<T>): T;

static doPrivilegedWithCombiner<T extends Object>(arg0: PrivilegedExceptionAction<T>): T;

static doPrivileged<T extends Object>(arg0: PrivilegedExceptionAction<T>, arg1: AccessControlContext): T;

static doPrivileged<T extends Object>(arg0: PrivilegedExceptionAction<T>, arg1: AccessControlContext, arg2: Permission[]): T;

static doPrivilegedWithCombiner<T extends Object>(arg0: PrivilegedExceptionAction<T>, arg1: AccessControlContext, arg2: Permission[]): T;

static getContext(): AccessControlContext;

static checkPermission(arg0: Permission): void;
 }

export interface AlgorithmConstraints {

permits(arg0: Set<CryptoPrimitive>, arg1: String, arg2: AlgorithmParameters): boolean;

permits(arg0: Set<CryptoPrimitive>, arg1: Key): boolean;

permits(arg0: Set<CryptoPrimitive>, arg1: String, arg2: Key, arg3: AlgorithmParameters): boolean;
 }

export class AlgorithmParameterGenerator {

getAlgorithm(): String;

static getInstance(arg0: String): AlgorithmParameterGenerator;

static getInstance(arg0: String, arg1: String): AlgorithmParameterGenerator;

static getInstance(arg0: String, arg1: Provider): AlgorithmParameterGenerator;

getProvider(): Provider;

init(arg0: number): void;

init(arg0: number, arg1: SecureRandom): void;

init(arg0: AlgorithmParameterSpec): void;

init(arg0: AlgorithmParameterSpec, arg1: SecureRandom): void;

generateParameters(): AlgorithmParameters;
 }

export abstract class AlgorithmParameterGeneratorSpi {
constructor();
 }

export class AlgorithmParameters {

getAlgorithm(): String;

static getInstance(arg0: String): AlgorithmParameters;

static getInstance(arg0: String, arg1: String): AlgorithmParameters;

static getInstance(arg0: String, arg1: Provider): AlgorithmParameters;

getProvider(): Provider;

init(arg0: AlgorithmParameterSpec): void;

init(arg0: number[]): void;

init(arg0: number[], arg1: String): void;

getParameterSpec<T extends AlgorithmParameterSpec>(arg0: Class<T>): T;

getEncoded(): number[];

getEncoded(arg0: String): number[];
toString(): string;
 }

export abstract class AlgorithmParametersSpi {
constructor();
 }

export class AllPermission extends Permission {
constructor();
constructor(arg0: String, arg1: String);

implies(arg0: Permission): boolean;

equals(arg0: Object): boolean;

hashCode(): number;

getActions(): String;

newPermissionCollection(): PermissionCollection;
 }

export interface AuthProvider { }
export abstract class AuthProvider extends Provider {

abstract login(arg0: Subject, arg1: CallbackHandler): void;

abstract logout(): void;

abstract setCallbackHandler(arg0: CallbackHandler): void;
 }

export abstract class BasicPermission extends Permission implements Serializable {
constructor(arg0: String);
constructor(arg0: String, arg1: String);

implies(arg0: Permission): boolean;

equals(arg0: Object): boolean;

hashCode(): number;

getActions(): String;

newPermissionCollection(): PermissionCollection;
 }

export interface Certificate {

getGuarantor(): Principal;

getPrincipal(): Principal;

getPublicKey(): PublicKey;

encode(arg0: OutputStream): void;

decode(arg0: InputStream): void;

getFormat(): String;

toString(arg0: boolean): String;
 }

export class CodeSigner implements Serializable {
constructor(arg0: CertPath, arg1: Timestamp);

getSignerCertPath(): CertPath;

getTimestamp(): Timestamp;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;
 }

export class CodeSource implements Serializable {
constructor(arg0: URL, arg1: Certificate[]);
constructor(arg0: URL, arg1: CodeSigner[]);

hashCode(): number;

equals(arg0: Object): boolean;

getLocation(): URL;

getCertificates(): Certificate[];

getCodeSigners(): CodeSigner[];

implies(arg0: CodeSource): boolean;
toString(): string;
 }

export class CryptoPrimitive extends Enum<CryptoPrimitive> {
static MESSAGE_DIGEST:CryptoPrimitive
static SECURE_RANDOM:CryptoPrimitive
static BLOCK_CIPHER:CryptoPrimitive
static STREAM_CIPHER:CryptoPrimitive
static MAC:CryptoPrimitive
static KEY_WRAP:CryptoPrimitive
static PUBLIC_KEY_ENCRYPTION:CryptoPrimitive
static SIGNATURE:CryptoPrimitive
static KEY_ENCAPSULATION:CryptoPrimitive
static KEY_AGREEMENT:CryptoPrimitive

static values(): CryptoPrimitive[];

static valueOf(arg0: String): CryptoPrimitive;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class DigestException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class DigestInputStream extends FilterInputStream {
constructor(arg0: InputStream, arg1: MessageDigest);

getMessageDigest(): MessageDigest;

setMessageDigest(arg0: MessageDigest): void;

read(): number;

read(arg0: number[], arg1: number, arg2: number): number;

on(arg0: boolean): void;
toString(): string;
 }

export class DigestOutputStream extends FilterOutputStream {
constructor(arg0: OutputStream, arg1: MessageDigest);

getMessageDigest(): MessageDigest;

setMessageDigest(arg0: MessageDigest): void;

write(arg0: number): void;

write(arg0: number[], arg1: number, arg2: number): void;

on(arg0: boolean): void;
toString(): string;
 }

export interface DomainCombiner {

combine(arg0: ProtectionDomain[], arg1: ProtectionDomain[]): ProtectionDomain[];
 }

export class DomainLoadStoreParameter implements KeyStore.LoadStoreParameter {
constructor(arg0: URI, arg1: Map<String, KeyStore.ProtectionParameter>);

getConfiguration(): URI;

getProtectionParams(): Map<String, KeyStore.ProtectionParameter>;

getProtectionParameter(): KeyStore.ProtectionParameter;
 }

export class DrbgParameters {

static instantiation(arg0: number, arg1: DrbgParameters.Capability, arg2: number[]): DrbgParameters.Instantiation;

static nextBytes(arg0: number, arg1: boolean, arg2: number[]): DrbgParameters.NextBytes;

static reseed(arg0: boolean, arg1: number[]): DrbgParameters.Reseed;
 }
export namespace DrbgParameters { 
export class Capability extends Enum<DrbgParameters.Capability> {
static PR_AND_RESEED:DrbgParameters.Capability
static RESEED_ONLY:DrbgParameters.Capability
static NONE:DrbgParameters.Capability

static values(): DrbgParameters.Capability[];

static valueOf(arg0: String): DrbgParameters.Capability;
toString(): string;

supportsReseeding(): boolean;

supportsPredictionResistance(): boolean;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class Instantiation implements SecureRandomParameters {

getStrength(): number;

getCapability(): DrbgParameters.Capability;

getPersonalizationString(): number[];
toString(): string;
 }

export class NextBytes implements SecureRandomParameters {

getStrength(): number;

getPredictionResistance(): boolean;

getAdditionalInput(): number[];
 }

export class Reseed implements SecureRandomParameters {

getPredictionResistance(): boolean;

getAdditionalInput(): number[];
 }

}

export class GeneralSecurityException extends Exception {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export interface Guard {

checkGuard(arg0: Object): void;
 }

export class GuardedObject implements Serializable {
constructor(arg0: Object, arg1: Guard);

getObject(): Object;
 }

export interface Identity extends Principal, Serializable { }
export abstract class Identity implements Principal, Serializable {
constructor(arg0: String, arg1: IdentityScope);
constructor(arg0: String);

getName(): String;

getScope(): IdentityScope;

getPublicKey(): PublicKey;

setPublicKey(arg0: PublicKey): void;

setInfo(arg0: String): void;

getInfo(): String;

addCertificate(arg0: Certificate): void;

removeCertificate(arg0: Certificate): void;

certificates(): Certificate[];

equals(arg0: Object): boolean;
toString(): string;

toString(arg0: boolean): String;

hashCode(): number;
 }

export interface IdentityScope { }
export abstract class IdentityScope extends Identity {
constructor(arg0: String);
constructor(arg0: String, arg1: IdentityScope);

static getSystemScope(): IdentityScope;

abstract size(): number;

abstract getIdentity(arg0: String): Identity;

getIdentity(arg0: Principal): Identity;

abstract getIdentity(arg0: PublicKey): Identity;

abstract addIdentity(arg0: Identity): void;

abstract removeIdentity(arg0: Identity): void;

abstract identities(): Enumeration<Identity>;
toString(): string;
 }

export class InvalidAlgorithmParameterException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class InvalidKeyException extends KeyException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class InvalidParameterException extends IllegalArgumentException {
constructor();
constructor(arg0: String);
 }

export namespace Key { 
const serialVersionUID:number
}

export interface Key extends Serializable {
serialVersionUID:number

getAlgorithm(): String;

getFormat(): String;

getEncoded(): number[];
 }

export class KeyException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class KeyFactory {

static getInstance(arg0: String): KeyFactory;

static getInstance(arg0: String, arg1: String): KeyFactory;

static getInstance(arg0: String, arg1: Provider): KeyFactory;

getProvider(): Provider;

getAlgorithm(): String;

generatePublic(arg0: KeySpec): PublicKey;

generatePrivate(arg0: KeySpec): PrivateKey;

getKeySpec<T extends KeySpec>(arg0: Key, arg1: Class<T>): T;

translateKey(arg0: Key): Key;
 }

export abstract class KeyFactorySpi {
constructor();
 }

export class KeyManagementException extends KeyException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class KeyPair implements Serializable {
constructor(arg0: PublicKey, arg1: PrivateKey);

getPublic(): PublicKey;

getPrivate(): PrivateKey;
 }

export abstract class KeyPairGenerator extends KeyPairGeneratorSpi {

getAlgorithm(): String;

static getInstance(arg0: String): KeyPairGenerator;

static getInstance(arg0: String, arg1: String): KeyPairGenerator;

static getInstance(arg0: String, arg1: Provider): KeyPairGenerator;

getProvider(): Provider;

initialize(arg0: number): void;

initialize(arg0: number, arg1: SecureRandom): void;

initialize(arg0: AlgorithmParameterSpec): void;

initialize(arg0: AlgorithmParameterSpec, arg1: SecureRandom): void;

genKeyPair(): KeyPair;

generateKeyPair(): KeyPair;
 }

export abstract class KeyPairGeneratorSpi {
constructor();

abstract initialize(arg0: number, arg1: SecureRandom): void;

initialize(arg0: AlgorithmParameterSpec, arg1: SecureRandom): void;

abstract generateKeyPair(): KeyPair;
 }

export class KeyRep implements Serializable {
constructor(arg0: KeyRep.Type, arg1: String, arg2: String, arg3: number[]);
 }
export namespace KeyRep { 
export class Type extends Enum<KeyRep.Type> {
static SECRET:KeyRep.Type
static PUBLIC:KeyRep.Type
static PRIVATE:KeyRep.Type

static values(): KeyRep.Type[];

static valueOf(arg0: String): KeyRep.Type;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class KeyStore {

static getInstance(arg0: String): KeyStore;

static getInstance(arg0: String, arg1: String): KeyStore;

static getInstance(arg0: String, arg1: Provider): KeyStore;

static getDefaultType(): String;

getProvider(): Provider;

getType(): String;

getKey(arg0: String, arg1: String[]): Key;

getCertificateChain(arg0: String): Certificate[];

getCertificate(arg0: String): Certificate;

getCreationDate(arg0: String): Date;

setKeyEntry(arg0: String, arg1: Key, arg2: String[], arg3: Certificate[]): void;

setKeyEntry(arg0: String, arg1: number[], arg2: Certificate[]): void;

setCertificateEntry(arg0: String, arg1: Certificate): void;

deleteEntry(arg0: String): void;

aliases(): Enumeration<String>;

containsAlias(arg0: String): boolean;

size(): number;

isKeyEntry(arg0: String): boolean;

isCertificateEntry(arg0: String): boolean;

getCertificateAlias(arg0: Certificate): String;

store(arg0: OutputStream, arg1: String[]): void;

store(arg0: KeyStore.LoadStoreParameter): void;

load(arg0: InputStream, arg1: String[]): void;

load(arg0: KeyStore.LoadStoreParameter): void;

getEntry(arg0: String, arg1: KeyStore.ProtectionParameter): KeyStore.Entry;

setEntry(arg0: String, arg1: KeyStore.Entry, arg2: KeyStore.ProtectionParameter): void;

entryInstanceOf(arg0: String, arg1: Class<KeyStore.Entry>): boolean;

static getInstance(arg0: File, arg1: String[]): KeyStore;

static getInstance(arg0: File, arg1: KeyStore.LoadStoreParameter): KeyStore;
 }
export namespace KeyStore { 
export abstract class Builder {

abstract getKeyStore(): KeyStore;

abstract getProtectionParameter(arg0: String): KeyStore.ProtectionParameter;

static newInstance(arg0: KeyStore, arg1: KeyStore.ProtectionParameter): KeyStore.Builder;

static newInstance(arg0: String, arg1: Provider, arg2: File, arg3: KeyStore.ProtectionParameter): KeyStore.Builder;

static newInstance(arg0: File, arg1: KeyStore.ProtectionParameter): KeyStore.Builder;

static newInstance(arg0: String, arg1: Provider, arg2: KeyStore.ProtectionParameter): KeyStore.Builder;
 }

export class CallbackHandlerProtection implements KeyStore.ProtectionParameter {
constructor(arg0: CallbackHandler);

getCallbackHandler(): CallbackHandler;
 }

export interface Entry {

/* default */ getAttributes(): Set<KeyStore.Entry.Attribute>;
 }
export namespace Entry { 
export interface Attribute {

getName(): String;

getValue(): String;
 }

}

export interface Attribute {

getName(): String;

getValue(): String;
 }

export interface LoadStoreParameter {

getProtectionParameter(): KeyStore.ProtectionParameter;
 }

export class PasswordProtection implements KeyStore.ProtectionParameter, Destroyable {
constructor(arg0: String[]);
constructor(arg0: String[], arg1: String, arg2: AlgorithmParameterSpec);

getProtectionAlgorithm(): String;

getProtectionParameters(): AlgorithmParameterSpec;

getPassword(): String[];

destroy(): void;

isDestroyed(): boolean;
 }

export class PrivateKeyEntry implements KeyStore.Entry {
constructor(arg0: PrivateKey, arg1: Certificate[]);
constructor(arg0: PrivateKey, arg1: Certificate[], arg2: Set<KeyStore.Entry.Attribute>);

getPrivateKey(): PrivateKey;

getCertificateChain(): Certificate[];

getCertificate(): Certificate;

getAttributes(): Set<KeyStore.Entry.Attribute>;
toString(): string;
 }

export interface ProtectionParameter {
 }

export class SecretKeyEntry implements KeyStore.Entry {
constructor(arg0: SecretKey);
constructor(arg0: SecretKey, arg1: Set<KeyStore.Entry.Attribute>);

getSecretKey(): SecretKey;

getAttributes(): Set<KeyStore.Entry.Attribute>;
toString(): string;
 }

export class TrustedCertificateEntry implements KeyStore.Entry {
constructor(arg0: Certificate);
constructor(arg0: Certificate, arg1: Set<KeyStore.Entry.Attribute>);

getTrustedCertificate(): Certificate;

getAttributes(): Set<KeyStore.Entry.Attribute>;
toString(): string;
 }

}

export class KeyStoreException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export abstract class KeyStoreSpi {
constructor();

abstract engineGetKey(arg0: String, arg1: String[]): Key;

abstract engineGetCertificateChain(arg0: String): Certificate[];

abstract engineGetCertificate(arg0: String): Certificate;

abstract engineGetCreationDate(arg0: String): Date;

abstract engineSetKeyEntry(arg0: String, arg1: Key, arg2: String[], arg3: Certificate[]): void;

abstract engineSetKeyEntry(arg0: String, arg1: number[], arg2: Certificate[]): void;

abstract engineSetCertificateEntry(arg0: String, arg1: Certificate): void;

abstract engineDeleteEntry(arg0: String): void;

abstract engineAliases(): Enumeration<String>;

abstract engineContainsAlias(arg0: String): boolean;

abstract engineSize(): number;

abstract engineIsKeyEntry(arg0: String): boolean;

abstract engineIsCertificateEntry(arg0: String): boolean;

abstract engineGetCertificateAlias(arg0: Certificate): String;

abstract engineStore(arg0: OutputStream, arg1: String[]): void;

engineStore(arg0: KeyStore.LoadStoreParameter): void;

abstract engineLoad(arg0: InputStream, arg1: String[]): void;

engineLoad(arg0: KeyStore.LoadStoreParameter): void;

engineGetEntry(arg0: String, arg1: KeyStore.ProtectionParameter): KeyStore.Entry;

engineSetEntry(arg0: String, arg1: KeyStore.Entry, arg2: KeyStore.ProtectionParameter): void;

engineEntryInstanceOf(arg0: String, arg1: Class<KeyStore.Entry>): boolean;

engineProbe(arg0: InputStream): boolean;
 }

export abstract class MessageDigest extends MessageDigestSpi {

static getInstance(arg0: String): MessageDigest;

static getInstance(arg0: String, arg1: String): MessageDigest;

static getInstance(arg0: String, arg1: Provider): MessageDigest;

getProvider(): Provider;

update(arg0: number): void;

update(arg0: number[], arg1: number, arg2: number): void;

update(arg0: number[]): void;

update(arg0: ByteBuffer): void;

digest(): number[];

digest(arg0: number[], arg1: number, arg2: number): number;

digest(arg0: number[]): number[];
toString(): string;

static isEqual(arg0: number[], arg1: number[]): boolean;

reset(): void;

getAlgorithm(): String;

getDigestLength(): number;

clone(): Object;
 }

export abstract class MessageDigestSpi {
constructor();

clone(): Object;
 }

export class NoSuchAlgorithmException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class NoSuchProviderException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
 }

export class PKCS12Attribute implements KeyStore.Entry.Attribute {
constructor(arg0: String, arg1: String);
constructor(arg0: number[]);

getName(): String;

getValue(): String;

getEncoded(): number[];

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export abstract class Permission implements Guard, Serializable {
constructor(arg0: String);

checkGuard(arg0: Object): void;

abstract implies(arg0: Permission): boolean;

abstract equals(arg0: Object): boolean;

abstract hashCode(): number;

getName(): String;

abstract getActions(): String;

newPermissionCollection(): PermissionCollection;
toString(): string;
 }

export abstract class PermissionCollection implements Serializable {
constructor();

abstract add(arg0: Permission): void;

abstract implies(arg0: Permission): boolean;

abstract elements(): Enumeration<Permission>;

elementsAsStream(): Stream<Permission>;

setReadOnly(): void;

isReadOnly(): boolean;
toString(): string;
 }

export class Permissions extends PermissionCollection implements Serializable {
constructor();

add(arg0: Permission): void;

implies(arg0: Permission): boolean;

elements(): Enumeration<Permission>;
 }

export abstract class Policy {
static UNSUPPORTED_EMPTY_COLLECTION:PermissionCollection
constructor();

static getPolicy(): Policy;

static setPolicy(arg0: Policy): void;

static getInstance(arg0: String, arg1: Policy.Parameters): Policy;

static getInstance(arg0: String, arg1: Policy.Parameters, arg2: String): Policy;

static getInstance(arg0: String, arg1: Policy.Parameters, arg2: Provider): Policy;

getProvider(): Provider;

getType(): String;

getParameters(): Policy.Parameters;

getPermissions(arg0: CodeSource): PermissionCollection;

getPermissions(arg0: ProtectionDomain): PermissionCollection;

implies(arg0: ProtectionDomain, arg1: Permission): boolean;

refresh(): void;
 }
export namespace Policy { 
export interface Parameters {
 }

}

export abstract class PolicySpi {
constructor();
 }

export interface Principal {

equals(arg0: Object): boolean;
toString(): string;

hashCode(): number;

getName(): String;

/* default */ implies(arg0: Subject): boolean;
 }

export namespace PrivateKey { 
const serialVersionUID:number
}

export interface PrivateKey extends Key, Destroyable {
serialVersionUID:number
 }

export interface PrivilegedAction<T extends Object> extends Object {

run(): T;
 }

export class PrivilegedActionException extends Exception {
constructor(arg0: Exception);

getException(): Exception;
toString(): string;
 }

export interface PrivilegedExceptionAction<T extends Object> extends Object {

run(): T;
 }

export class ProtectionDomain {
constructor(arg0: CodeSource, arg1: PermissionCollection);
constructor(arg0: CodeSource, arg1: PermissionCollection, arg2: ClassLoader, arg3: Principal[]);

getCodeSource(): CodeSource;

getClassLoader(): ClassLoader;

getPrincipals(): Principal[];

getPermissions(): PermissionCollection;

staticPermissionsOnly(): boolean;

implies(arg0: Permission): boolean;
toString(): string;
 }

export abstract class Provider extends Properties {

configure(arg0: String): Provider;

isConfigured(): boolean;

getName(): String;

getVersion(): number;

getVersionStr(): String;

getInfo(): String;
toString(): string;

clear(): void;

load(arg0: InputStream): void;

putAll(arg0: Map<any, any>): void;

entrySet(): Set<Map.Entry<Object, Object>>;

keySet(): Set<Object>;

values(): Collection<Object>;

put(arg0: Object, arg1: Object): Object;

putIfAbsent(arg0: Object, arg1: Object): Object;

remove(arg0: Object): Object;

remove(arg0: Object, arg1: Object): boolean;

replace(arg0: Object, arg1: Object, arg2: Object): boolean;

replace(arg0: Object, arg1: Object): Object;

replaceAll(arg0: BiFunction<Object, Object, Object>): void;

compute(arg0: Object, arg1: BiFunction<Object, Object, Object>): Object;

computeIfAbsent(arg0: Object, arg1: Function<Object, Object>): Object;

computeIfPresent(arg0: Object, arg1: BiFunction<Object, Object, Object>): Object;

merge(arg0: Object, arg1: Object, arg2: BiFunction<Object, Object, Object>): Object;

get(arg0: Object): Object;

getOrDefault(arg0: Object, arg1: Object): Object;

forEach(arg0: BiConsumer<Object, Object>): void;

keys(): Enumeration<Object>;

elements(): Enumeration<Object>;

getProperty(arg0: String): String;

getService(arg0: String, arg1: String): Provider.Service;

getServices(): Set<Provider.Service>;
 }
export namespace Provider { 
export class Service {
constructor(arg0: Provider, arg1: String, arg2: String, arg3: String, arg4: List<String>, arg5: Map<String, String>);

getType(): String;

getAlgorithm(): String;

getProvider(): Provider;

getClassName(): String;

getAttribute(arg0: String): String;

newInstance(arg0: Object): Object;

supportsParameter(arg0: Object): boolean;
toString(): string;
 }

}

export class ProviderException extends RuntimeException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export namespace PublicKey { 
const serialVersionUID:number
}

export interface PublicKey extends Key {
serialVersionUID:number
 }

export class SecureClassLoader extends ClassLoader {
 }

export interface SecureRandom { }
export class SecureRandom extends Random {
constructor();
constructor(arg0: number[]);

static getInstance(arg0: String): SecureRandom;

static getInstance(arg0: String, arg1: String): SecureRandom;

static getInstance(arg0: String, arg1: Provider): SecureRandom;

static getInstance(arg0: String, arg1: SecureRandomParameters): SecureRandom;

static getInstance(arg0: String, arg1: SecureRandomParameters, arg2: String): SecureRandom;

static getInstance(arg0: String, arg1: SecureRandomParameters, arg2: Provider): SecureRandom;

getProvider(): Provider;

getAlgorithm(): String;
toString(): string;

getParameters(): SecureRandomParameters;

setSeed(arg0: number[]): void;

setSeed(arg0: number): void;

nextBytes(arg0: number[]): void;

nextBytes(arg0: number[], arg1: SecureRandomParameters): void;

static getSeed(arg0: number): number[];

generateSeed(arg0: number): number[];

static getInstanceStrong(): SecureRandom;

reseed(): void;

reseed(arg0: SecureRandomParameters): void;
 }

export interface SecureRandomParameters {
 }

export abstract class SecureRandomSpi implements Serializable {
constructor();
toString(): string;
 }

export class Security {

static getAlgorithmProperty(arg0: String, arg1: String): String;

static insertProviderAt(arg0: Provider, arg1: number): number;

static addProvider(arg0: Provider): number;

static removeProvider(arg0: String): void;

static getProviders(): Provider[];

static getProvider(arg0: String): Provider;

static getProviders(arg0: String): Provider[];

static getProviders(arg0: Map<String, String>): Provider[];

static getProperty(arg0: String): String;

static setProperty(arg0: String, arg1: String): void;

static getAlgorithms(arg0: String): Set<String>;
 }

export class SecurityPermission extends BasicPermission {
constructor(arg0: String);
constructor(arg0: String, arg1: String);
 }

export abstract class Signature extends SignatureSpi {

static getInstance(arg0: String): Signature;

static getInstance(arg0: String, arg1: String): Signature;

static getInstance(arg0: String, arg1: Provider): Signature;

getProvider(): Provider;

initVerify(arg0: PublicKey): void;

initVerify(arg0: Certificate): void;

initSign(arg0: PrivateKey): void;

initSign(arg0: PrivateKey, arg1: SecureRandom): void;

sign(): number[];

sign(arg0: number[], arg1: number, arg2: number): number;

verify(arg0: number[]): boolean;

verify(arg0: number[], arg1: number, arg2: number): boolean;

update(arg0: number): void;

update(arg0: number[]): void;

update(arg0: number[], arg1: number, arg2: number): void;

update(arg0: ByteBuffer): void;

getAlgorithm(): String;
toString(): string;

setParameter(arg0: String, arg1: Object): void;

setParameter(arg0: AlgorithmParameterSpec): void;

getParameters(): AlgorithmParameters;

getParameter(arg0: String): Object;

clone(): Object;
 }

export class SignatureException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export abstract class SignatureSpi {
constructor();

clone(): Object;
 }

export class SignedObject implements Serializable {
constructor(arg0: Serializable, arg1: PrivateKey, arg2: Signature);

getObject(): Object;

getSignature(): number[];

getAlgorithm(): String;

verify(arg0: PublicKey, arg1: Signature): boolean;
 }

export interface Signer { }
export abstract class Signer extends Identity {
constructor(arg0: String);
constructor(arg0: String, arg1: IdentityScope);

getPrivateKey(): PrivateKey;

setKeyPair(arg0: KeyPair): void;
toString(): string;
 }

export class Timestamp implements Serializable {
constructor(arg0: Date, arg1: CertPath);

getTimestamp(): Date;

getSignerCertPath(): CertPath;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;
 }

export class URIParameter implements Policy.Parameters, Configuration.Parameters {
constructor(arg0: URI);

getURI(): URI;
 }

export class UnrecoverableEntryException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
 }

export class UnrecoverableKeyException extends UnrecoverableEntryException {
constructor();
constructor(arg0: String);
 }

export class UnresolvedPermission extends Permission implements Serializable {
constructor(arg0: String, arg1: String, arg2: String, arg3: Certificate[]);

implies(arg0: Permission): boolean;

equals(arg0: Object): boolean;

hashCode(): number;

getActions(): String;

getUnresolvedType(): String;

getUnresolvedName(): String;

getUnresolvedActions(): String;

getUnresolvedCerts(): Certificate[];
toString(): string;

newPermissionCollection(): PermissionCollection;
 }

}
