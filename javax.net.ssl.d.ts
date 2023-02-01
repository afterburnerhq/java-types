/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.nio.d.ts" />
/// <reference path="java.util.function.d.ts" />
/// <reference path="javax.net.d.ts" />
/// <reference path="java.security.cert.d.ts" />
/// <reference path="javax.security.cert.d.ts" />
declare module '@afterburnerhq/javax.net.ssl' { 
import { BasicPermission, PrivateKey, SecureRandom, KeyStore, Principal, Provider, AlgorithmConstraints } from '@afterburnerhq/java.security'
import { Enum, Throwable, Class, String, Runnable } from '@afterburnerhq/java.lang'
import { Collection, List, EventListener, Enumeration, Optional, EventObject } from '@afterburnerhq/java.util'
import { ServerSocket, Socket, HttpURLConnection } from '@afterburnerhq/java.net'
import { InputStream, IOException } from '@afterburnerhq/java.io'
import { ByteBuffer } from '@afterburnerhq/java.nio'
import { BiFunction } from '@afterburnerhq/java.util.function'
import { ServerSocketFactory, SocketFactory } from '@afterburnerhq/javax.net'
import { CertPathParameters, X509Certificate, Certificate } from '@afterburnerhq/java.security.cert'
import { X509Certificate } from '@afterburnerhq/javax.security.cert'
export class CertPathTrustManagerParameters implements ManagerFactoryParameters {
constructor(arg0: CertPathParameters);

getParameters(): CertPathParameters;
 }

export interface ExtendedSSLSession extends SSLSession { }
export abstract class ExtendedSSLSession implements SSLSession {
constructor();

abstract getLocalSupportedSignatureAlgorithms(): String[];

abstract getPeerSupportedSignatureAlgorithms(): String[];

getRequestedServerNames(): List<SNIServerName>;

getStatusResponses(): List<number[]>;
 }

export class HandshakeCompletedEvent extends EventObject {
constructor(arg0: SSLSocket, arg1: SSLSession);

getSession(): SSLSession;

getCipherSuite(): String;

getLocalCertificates(): Certificate[];

getPeerCertificates(): Certificate[];

getPeerCertificateChain(): X509Certificate[];

getPeerPrincipal(): Principal;

getLocalPrincipal(): Principal;

getSocket(): SSLSocket;
 }

export interface HandshakeCompletedListener extends EventListener {

handshakeCompleted(arg0: HandshakeCompletedEvent): void;
 }

export interface HostnameVerifier {

verify(arg0: String, arg1: SSLSession): boolean;
 }

export abstract class HttpsURLConnection extends HttpURLConnection {

abstract getCipherSuite(): String;

abstract getLocalCertificates(): Certificate[];

abstract getServerCertificates(): Certificate[];

getPeerPrincipal(): Principal;

getLocalPrincipal(): Principal;

static setDefaultHostnameVerifier(arg0: HostnameVerifier): void;

static getDefaultHostnameVerifier(): HostnameVerifier;

setHostnameVerifier(arg0: HostnameVerifier): void;

getHostnameVerifier(): HostnameVerifier;

static setDefaultSSLSocketFactory(arg0: SSLSocketFactory): void;

static getDefaultSSLSocketFactory(): SSLSocketFactory;

setSSLSocketFactory(arg0: SSLSocketFactory): void;

getSSLSocketFactory(): SSLSocketFactory;

getSSLSession(): Optional<SSLSession>;
 }

export interface KeyManager {
 }

export class KeyManagerFactory {

static getDefaultAlgorithm(): String;

getAlgorithm(): String;

static getInstance(arg0: String): KeyManagerFactory;

static getInstance(arg0: String, arg1: String): KeyManagerFactory;

static getInstance(arg0: String, arg1: Provider): KeyManagerFactory;

getProvider(): Provider;

init(arg0: KeyStore, arg1: String[]): void;

init(arg0: ManagerFactoryParameters): void;

getKeyManagers(): KeyManager[];
 }

export abstract class KeyManagerFactorySpi {
constructor();
 }

export class KeyStoreBuilderParameters implements ManagerFactoryParameters {
constructor(arg0: KeyStore.Builder);
constructor(arg0: List<KeyStore.Builder>);

getParameters(): List<KeyStore.Builder>;
 }

export interface ManagerFactoryParameters {
 }

export class SNIHostName extends SNIServerName {
constructor(arg0: String);
constructor(arg0: number[]);

getAsciiName(): String;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;

static createSNIMatcher(arg0: String): SNIMatcher;
 }

export abstract class SNIMatcher {

getType(): number;

abstract matches(arg0: SNIServerName): boolean;
 }

export abstract class SNIServerName {

getType(): number;

getEncoded(): number[];

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class SSLContext {

static getDefault(): SSLContext;

static setDefault(arg0: SSLContext): void;

static getInstance(arg0: String): SSLContext;

static getInstance(arg0: String, arg1: String): SSLContext;

static getInstance(arg0: String, arg1: Provider): SSLContext;

getProtocol(): String;

getProvider(): Provider;

init(arg0: KeyManager[], arg1: TrustManager[], arg2: SecureRandom): void;

getSocketFactory(): SSLSocketFactory;

getServerSocketFactory(): SSLServerSocketFactory;

createSSLEngine(): SSLEngine;

createSSLEngine(arg0: String, arg1: number): SSLEngine;

getServerSessionContext(): SSLSessionContext;

getClientSessionContext(): SSLSessionContext;

getDefaultSSLParameters(): SSLParameters;

getSupportedSSLParameters(): SSLParameters;
 }

export abstract class SSLContextSpi {
constructor();
 }

export abstract class SSLEngine {

getPeerHost(): String;

getPeerPort(): number;

wrap(arg0: ByteBuffer, arg1: ByteBuffer): SSLEngineResult;

wrap(arg0: ByteBuffer[], arg1: ByteBuffer): SSLEngineResult;

abstract wrap(arg0: ByteBuffer[], arg1: number, arg2: number, arg3: ByteBuffer): SSLEngineResult;

unwrap(arg0: ByteBuffer, arg1: ByteBuffer): SSLEngineResult;

unwrap(arg0: ByteBuffer, arg1: ByteBuffer[]): SSLEngineResult;

abstract unwrap(arg0: ByteBuffer, arg1: ByteBuffer[], arg2: number, arg3: number): SSLEngineResult;

abstract getDelegatedTask(): Runnable;

abstract closeInbound(): void;

abstract isInboundDone(): boolean;

abstract closeOutbound(): void;

abstract isOutboundDone(): boolean;

abstract getSupportedCipherSuites(): String[];

abstract getEnabledCipherSuites(): String[];

abstract setEnabledCipherSuites(arg0: String[]): void;

abstract getSupportedProtocols(): String[];

abstract getEnabledProtocols(): String[];

abstract setEnabledProtocols(arg0: String[]): void;

abstract getSession(): SSLSession;

getHandshakeSession(): SSLSession;

abstract beginHandshake(): void;

abstract getHandshakeStatus(): SSLEngineResult.HandshakeStatus;

abstract setUseClientMode(arg0: boolean): void;

abstract getUseClientMode(): boolean;

abstract setNeedClientAuth(arg0: boolean): void;

abstract getNeedClientAuth(): boolean;

abstract setWantClientAuth(arg0: boolean): void;

abstract getWantClientAuth(): boolean;

abstract setEnableSessionCreation(arg0: boolean): void;

abstract getEnableSessionCreation(): boolean;

getSSLParameters(): SSLParameters;

setSSLParameters(arg0: SSLParameters): void;

getApplicationProtocol(): String;

getHandshakeApplicationProtocol(): String;

setHandshakeApplicationProtocolSelector(arg0: BiFunction<SSLEngine, List<String>, String>): void;

getHandshakeApplicationProtocolSelector(): BiFunction<SSLEngine, List<String>, String>;
 }

export class SSLEngineResult {
constructor(arg0: SSLEngineResult.Status, arg1: SSLEngineResult.HandshakeStatus, arg2: number, arg3: number);
constructor(arg0: SSLEngineResult.Status, arg1: SSLEngineResult.HandshakeStatus, arg2: number, arg3: number, arg4: number);

getStatus(): SSLEngineResult.Status;

getHandshakeStatus(): SSLEngineResult.HandshakeStatus;

bytesConsumed(): number;

bytesProduced(): number;

sequenceNumber(): number;
toString(): string;
 }
export namespace SSLEngineResult { 
export class HandshakeStatus extends Enum<SSLEngineResult.HandshakeStatus> {
static NOT_HANDSHAKING:SSLEngineResult.HandshakeStatus
static FINISHED:SSLEngineResult.HandshakeStatus
static NEED_TASK:SSLEngineResult.HandshakeStatus
static NEED_WRAP:SSLEngineResult.HandshakeStatus
static NEED_UNWRAP:SSLEngineResult.HandshakeStatus
static NEED_UNWRAP_AGAIN:SSLEngineResult.HandshakeStatus

static values(): SSLEngineResult.HandshakeStatus[];

static valueOf(arg0: String): SSLEngineResult.HandshakeStatus;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class Status extends Enum<SSLEngineResult.Status> {
static BUFFER_UNDERFLOW:SSLEngineResult.Status
static BUFFER_OVERFLOW:SSLEngineResult.Status
static OK:SSLEngineResult.Status
static CLOSED:SSLEngineResult.Status

static values(): SSLEngineResult.Status[];

static valueOf(arg0: String): SSLEngineResult.Status;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class SSLException extends IOException {
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: Throwable);
 }

export class SSLHandshakeException extends SSLException {
constructor(arg0: String);
 }

export class SSLKeyException extends SSLException {
constructor(arg0: String);
 }

export class SSLParameters {
constructor();
constructor(arg0: String[]);
constructor(arg0: String[], arg1: String[]);

getCipherSuites(): String[];

setCipherSuites(arg0: String[]): void;

getProtocols(): String[];

setProtocols(arg0: String[]): void;

getWantClientAuth(): boolean;

setWantClientAuth(arg0: boolean): void;

getNeedClientAuth(): boolean;

setNeedClientAuth(arg0: boolean): void;

getAlgorithmConstraints(): AlgorithmConstraints;

setAlgorithmConstraints(arg0: AlgorithmConstraints): void;

getEndpointIdentificationAlgorithm(): String;

setEndpointIdentificationAlgorithm(arg0: String): void;

setServerNames(arg0: List<SNIServerName>): void;

getServerNames(): List<SNIServerName>;

setSNIMatchers(arg0: Collection<SNIMatcher>): void;

getSNIMatchers(): Collection<SNIMatcher>;

setUseCipherSuitesOrder(arg0: boolean): void;

getUseCipherSuitesOrder(): boolean;

setEnableRetransmissions(arg0: boolean): void;

getEnableRetransmissions(): boolean;

setMaximumPacketSize(arg0: number): void;

getMaximumPacketSize(): number;

getApplicationProtocols(): String[];

setApplicationProtocols(arg0: String[]): void;
 }

export class SSLPeerUnverifiedException extends SSLException {
constructor(arg0: String);
 }

export class SSLPermission extends BasicPermission {
constructor(arg0: String);
constructor(arg0: String, arg1: String);
 }

export class SSLProtocolException extends SSLException {
constructor(arg0: String);
 }

export abstract class SSLServerSocket extends ServerSocket {

abstract getEnabledCipherSuites(): String[];

abstract setEnabledCipherSuites(arg0: String[]): void;

abstract getSupportedCipherSuites(): String[];

abstract getSupportedProtocols(): String[];

abstract getEnabledProtocols(): String[];

abstract setEnabledProtocols(arg0: String[]): void;

abstract setNeedClientAuth(arg0: boolean): void;

abstract getNeedClientAuth(): boolean;

abstract setWantClientAuth(arg0: boolean): void;

abstract getWantClientAuth(): boolean;

abstract setUseClientMode(arg0: boolean): void;

abstract getUseClientMode(): boolean;

abstract setEnableSessionCreation(arg0: boolean): void;

abstract getEnableSessionCreation(): boolean;

getSSLParameters(): SSLParameters;

setSSLParameters(arg0: SSLParameters): void;
 }

export abstract class SSLServerSocketFactory extends ServerSocketFactory {

static getDefault(): ServerSocketFactory;

abstract getDefaultCipherSuites(): String[];

abstract getSupportedCipherSuites(): String[];
 }

export interface SSLSession {

getId(): number[];

getSessionContext(): SSLSessionContext;

getCreationTime(): number;

getLastAccessedTime(): number;

invalidate(): void;

isValid(): boolean;

putValue(arg0: String, arg1: Object): void;

getValue(arg0: String): Object;

removeValue(arg0: String): void;

getValueNames(): String[];

getPeerCertificates(): Certificate[];

getLocalCertificates(): Certificate[];

/* default */ getPeerCertificateChain(): X509Certificate[];

getPeerPrincipal(): Principal;

getLocalPrincipal(): Principal;

getCipherSuite(): String;

getProtocol(): String;

getPeerHost(): String;

getPeerPort(): number;

getPacketBufferSize(): number;

getApplicationBufferSize(): number;
 }

export class SSLSessionBindingEvent extends EventObject {
constructor(arg0: SSLSession, arg1: String);

getName(): String;

getSession(): SSLSession;
 }

export interface SSLSessionBindingListener extends EventListener {

valueBound(arg0: SSLSessionBindingEvent): void;

valueUnbound(arg0: SSLSessionBindingEvent): void;
 }

export interface SSLSessionContext {

getSession(arg0: number[]): SSLSession;

getIds(): Enumeration<number[]>;

setSessionTimeout(arg0: number): void;

getSessionTimeout(): number;

setSessionCacheSize(arg0: number): void;

getSessionCacheSize(): number;
 }

export abstract class SSLSocket extends Socket {

abstract getSupportedCipherSuites(): String[];

abstract getEnabledCipherSuites(): String[];

abstract setEnabledCipherSuites(arg0: String[]): void;

abstract getSupportedProtocols(): String[];

abstract getEnabledProtocols(): String[];

abstract setEnabledProtocols(arg0: String[]): void;

abstract getSession(): SSLSession;

getHandshakeSession(): SSLSession;

abstract addHandshakeCompletedListener(arg0: HandshakeCompletedListener): void;

abstract removeHandshakeCompletedListener(arg0: HandshakeCompletedListener): void;

abstract startHandshake(): void;

abstract setUseClientMode(arg0: boolean): void;

abstract getUseClientMode(): boolean;

abstract setNeedClientAuth(arg0: boolean): void;

abstract getNeedClientAuth(): boolean;

abstract setWantClientAuth(arg0: boolean): void;

abstract getWantClientAuth(): boolean;

abstract setEnableSessionCreation(arg0: boolean): void;

abstract getEnableSessionCreation(): boolean;

getSSLParameters(): SSLParameters;

setSSLParameters(arg0: SSLParameters): void;

getApplicationProtocol(): String;

getHandshakeApplicationProtocol(): String;

setHandshakeApplicationProtocolSelector(arg0: BiFunction<SSLSocket, List<String>, String>): void;

getHandshakeApplicationProtocolSelector(): BiFunction<SSLSocket, List<String>, String>;
 }

export abstract class SSLSocketFactory extends SocketFactory {
constructor();

static getDefault(): SocketFactory;

abstract getDefaultCipherSuites(): String[];

abstract getSupportedCipherSuites(): String[];

abstract createSocket(arg0: Socket, arg1: String, arg2: number, arg3: boolean): Socket;

createSocket(arg0: Socket, arg1: InputStream, arg2: boolean): Socket;
 }

export class StandardConstants {
static SNI_HOST_NAME:number
 }

export interface TrustManager {
 }

export class TrustManagerFactory {

static getDefaultAlgorithm(): String;

getAlgorithm(): String;

static getInstance(arg0: String): TrustManagerFactory;

static getInstance(arg0: String, arg1: String): TrustManagerFactory;

static getInstance(arg0: String, arg1: Provider): TrustManagerFactory;

getProvider(): Provider;

init(arg0: KeyStore): void;

init(arg0: ManagerFactoryParameters): void;

getTrustManagers(): TrustManager[];
 }

export abstract class TrustManagerFactorySpi {
constructor();
 }

export abstract class X509ExtendedKeyManager implements X509KeyManager {

chooseEngineClientAlias(arg0: String[], arg1: Principal[], arg2: SSLEngine): String;

chooseEngineServerAlias(arg0: String, arg1: Principal[], arg2: SSLEngine): String;
 }

export abstract class X509ExtendedTrustManager implements X509TrustManager {
constructor();

abstract checkClientTrusted(arg0: X509Certificate[], arg1: String, arg2: Socket): void;

abstract checkServerTrusted(arg0: X509Certificate[], arg1: String, arg2: Socket): void;

abstract checkClientTrusted(arg0: X509Certificate[], arg1: String, arg2: SSLEngine): void;

abstract checkServerTrusted(arg0: X509Certificate[], arg1: String, arg2: SSLEngine): void;
 }

export interface X509KeyManager extends KeyManager {

getClientAliases(arg0: String, arg1: Principal[]): String[];

chooseClientAlias(arg0: String[], arg1: Principal[], arg2: Socket): String;

getServerAliases(arg0: String, arg1: Principal[]): String[];

chooseServerAlias(arg0: String, arg1: Principal[], arg2: Socket): String;

getCertificateChain(arg0: String): X509Certificate[];

getPrivateKey(arg0: String): PrivateKey;
 }

export interface X509TrustManager extends TrustManager {

checkClientTrusted(arg0: X509Certificate[], arg1: String): void;

checkServerTrusted(arg0: X509Certificate[], arg1: String): void;

getAcceptedIssuers(): X509Certificate[];
 }

}
