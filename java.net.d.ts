/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.util.stream.d.ts" />
/// <reference path="java.util.jar.d.ts" />
/// <reference path="java.nio.channels.d.ts" />
/// <reference path="javax.net.ssl.d.ts" />
/// <reference path="java.security.cert.d.ts" />
/// <reference path="java.nio.file.d.ts" />
/// <reference path="java.nio.charset.d.ts" />
declare module '@afterburnerhq/java.net' { 
import { Permission, BasicPermission, PermissionCollection, SecureClassLoader, Principal } from '@afterburnerhq/java.security'
import { Enum, Integer, Comparable, ClassLoader, Class, Cloneable, String, Boolean, Exception } from '@afterburnerhq/java.lang'
import { List, Set, Enumeration, Optional, Map } from '@afterburnerhq/java.util'
import { InterruptedIOException, Serializable, IOException, InputStream, OutputStream, Closeable } from '@afterburnerhq/java.io'
import { Stream } from '@afterburnerhq/java.util.stream'
import { Attributes, JarFile, Manifest, JarEntry } from '@afterburnerhq/java.util.jar'
import { DatagramChannel, SocketChannel, ServerSocketChannel } from '@afterburnerhq/java.nio.channels'
import { SSLSession } from '@afterburnerhq/javax.net.ssl'
import { Certificate } from '@afterburnerhq/java.security.cert'
import { Path } from '@afterburnerhq/java.nio.file'
import { Charset } from '@afterburnerhq/java.nio.charset'
export abstract class Authenticator {
constructor();

static setDefault(arg0: Authenticator): void;

static getDefault(): Authenticator;

static requestPasswordAuthentication(arg0: InetAddress, arg1: number, arg2: String, arg3: String, arg4: String): PasswordAuthentication;

static requestPasswordAuthentication(arg0: String, arg1: InetAddress, arg2: number, arg3: String, arg4: String, arg5: String): PasswordAuthentication;

static requestPasswordAuthentication(arg0: String, arg1: InetAddress, arg2: number, arg3: String, arg4: String, arg5: String, arg6: URL, arg7: Authenticator.RequestorType): PasswordAuthentication;

static requestPasswordAuthentication(arg0: Authenticator, arg1: String, arg2: InetAddress, arg3: number, arg4: String, arg5: String, arg6: String, arg7: URL, arg8: Authenticator.RequestorType): PasswordAuthentication;

requestPasswordAuthenticationInstance(arg0: String, arg1: InetAddress, arg2: number, arg3: String, arg4: String, arg5: String, arg6: URL, arg7: Authenticator.RequestorType): PasswordAuthentication;
 }
export namespace Authenticator { 
export class RequestorType extends Enum<Authenticator.RequestorType> {
static PROXY:Authenticator.RequestorType
static SERVER:Authenticator.RequestorType

static values(): Authenticator.RequestorType[];

static valueOf(arg0: String): Authenticator.RequestorType;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class BindException extends SocketException {
constructor(arg0: String);
constructor();
 }

export abstract class CacheRequest {
constructor();

abstract getBody(): OutputStream;

abstract abort(): void;
 }

export abstract class CacheResponse {
constructor();

abstract getHeaders(): Map<String, List<String>>;

abstract getBody(): InputStream;
 }

export class ConnectException extends SocketException {
constructor(arg0: String);
constructor();
 }

export abstract class ContentHandler {
constructor();

abstract getContent(arg0: URLConnection): Object;

getContent(arg0: URLConnection, arg1: Class[]): Object;
 }

export interface ContentHandlerFactory {

createContentHandler(arg0: String): ContentHandler;
 }

export abstract class CookieHandler {
constructor();

static getDefault(): CookieHandler;

static setDefault(arg0: CookieHandler): void;

abstract get(arg0: URI, arg1: Map<String, List<String>>): Map<String, List<String>>;

abstract put(arg0: URI, arg1: Map<String, List<String>>): void;
 }

export class CookieManager extends CookieHandler {
constructor();
constructor(arg0: CookieStore, arg1: CookiePolicy);

setCookiePolicy(arg0: CookiePolicy): void;

getCookieStore(): CookieStore;

get(arg0: URI, arg1: Map<String, List<String>>): Map<String, List<String>>;

put(arg0: URI, arg1: Map<String, List<String>>): void;
 }

export namespace CookiePolicy { 
const ACCEPT_ALL:CookiePolicy
const ACCEPT_NONE:CookiePolicy
const ACCEPT_ORIGINAL_SERVER:CookiePolicy
}

export interface CookiePolicy {
ACCEPT_ALL:CookiePolicy
ACCEPT_NONE:CookiePolicy
ACCEPT_ORIGINAL_SERVER:CookiePolicy

shouldAccept(arg0: URI, arg1: HttpCookie): boolean;
 }

export interface CookieStore {

add(arg0: URI, arg1: HttpCookie): void;

get(arg0: URI): List<HttpCookie>;

getCookies(): List<HttpCookie>;

getURIs(): List<URI>;

remove(arg0: URI, arg1: HttpCookie): boolean;

removeAll(): boolean;
 }

export class DatagramPacket {
constructor(arg0: number[], arg1: number, arg2: number);
constructor(arg0: number[], arg1: number);
constructor(arg0: number[], arg1: number, arg2: number, arg3: InetAddress, arg4: number);
constructor(arg0: number[], arg1: number, arg2: number, arg3: SocketAddress);
constructor(arg0: number[], arg1: number, arg2: InetAddress, arg3: number);
constructor(arg0: number[], arg1: number, arg2: SocketAddress);

getAddress(): InetAddress;

getPort(): number;

getData(): number[];

getOffset(): number;

getLength(): number;

setData(arg0: number[], arg1: number, arg2: number): void;

setAddress(arg0: InetAddress): void;

setPort(arg0: number): void;

setSocketAddress(arg0: SocketAddress): void;

getSocketAddress(): SocketAddress;

setData(arg0: number[]): void;

setLength(arg0: number): void;
 }

export class DatagramSocket implements Closeable {
constructor();
constructor(arg0: SocketAddress);
constructor(arg0: number);
constructor(arg0: number, arg1: InetAddress);

bind(arg0: SocketAddress): void;

connect(arg0: InetAddress, arg1: number): void;

connect(arg0: SocketAddress): void;

disconnect(): void;

isBound(): boolean;

isConnected(): boolean;

getInetAddress(): InetAddress;

getPort(): number;

getRemoteSocketAddress(): SocketAddress;

getLocalSocketAddress(): SocketAddress;

send(arg0: DatagramPacket): void;

receive(arg0: DatagramPacket): void;

getLocalAddress(): InetAddress;

getLocalPort(): number;

setSoTimeout(arg0: number): void;

getSoTimeout(): number;

setSendBufferSize(arg0: number): void;

getSendBufferSize(): number;

setReceiveBufferSize(arg0: number): void;

getReceiveBufferSize(): number;

setReuseAddress(arg0: boolean): void;

getReuseAddress(): boolean;

setBroadcast(arg0: boolean): void;

getBroadcast(): boolean;

setTrafficClass(arg0: number): void;

getTrafficClass(): number;

close(): void;

isClosed(): boolean;

getChannel(): DatagramChannel;

static setDatagramSocketImplFactory(arg0: DatagramSocketImplFactory): void;

setOption<T extends Object>(arg0: SocketOption<T>, arg1: T): DatagramSocket;

getOption<T extends Object>(arg0: SocketOption<T>): T;

supportedOptions(): Set<SocketOption<any>>;

joinGroup(arg0: SocketAddress, arg1: NetworkInterface): void;

leaveGroup(arg0: SocketAddress, arg1: NetworkInterface): void;
 }

export abstract class DatagramSocketImpl implements SocketOptions {
constructor();
 }

export interface DatagramSocketImplFactory {

createDatagramSocketImpl(): DatagramSocketImpl;
 }

export interface FileNameMap {

getContentTypeFor(arg0: String): String;
 }

export class HttpCookie implements Cloneable {
constructor(arg0: String, arg1: String);

static parse(arg0: String): List<HttpCookie>;

hasExpired(): boolean;

setComment(arg0: String): void;

getComment(): String;

setCommentURL(arg0: String): void;

getCommentURL(): String;

setDiscard(arg0: boolean): void;

getDiscard(): boolean;

setPortlist(arg0: String): void;

getPortlist(): String;

setDomain(arg0: String): void;

getDomain(): String;

setMaxAge(arg0: number): void;

getMaxAge(): number;

setPath(arg0: String): void;

getPath(): String;

setSecure(arg0: boolean): void;

getSecure(): boolean;

getName(): String;

setValue(arg0: String): void;

getValue(): String;

getVersion(): number;

setVersion(arg0: number): void;

isHttpOnly(): boolean;

setHttpOnly(arg0: boolean): void;

static domainMatches(arg0: String, arg1: String): boolean;
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;

clone(): Object;
 }

export class HttpRetryException extends IOException {
constructor(arg0: String, arg1: number);
constructor(arg0: String, arg1: number, arg2: String);

responseCode(): number;

getReason(): String;

getLocation(): String;
 }

export abstract class HttpURLConnection extends URLConnection {
static HTTP_OK:number
static HTTP_CREATED:number
static HTTP_ACCEPTED:number
static HTTP_NOT_AUTHORITATIVE:number
static HTTP_NO_CONTENT:number
static HTTP_RESET:number
static HTTP_PARTIAL:number
static HTTP_MULT_CHOICE:number
static HTTP_MOVED_PERM:number
static HTTP_MOVED_TEMP:number
static HTTP_SEE_OTHER:number
static HTTP_NOT_MODIFIED:number
static HTTP_USE_PROXY:number
static HTTP_BAD_REQUEST:number
static HTTP_UNAUTHORIZED:number
static HTTP_PAYMENT_REQUIRED:number
static HTTP_FORBIDDEN:number
static HTTP_NOT_FOUND:number
static HTTP_BAD_METHOD:number
static HTTP_NOT_ACCEPTABLE:number
static HTTP_PROXY_AUTH:number
static HTTP_CLIENT_TIMEOUT:number
static HTTP_CONFLICT:number
static HTTP_GONE:number
static HTTP_LENGTH_REQUIRED:number
static HTTP_PRECON_FAILED:number
static HTTP_ENTITY_TOO_LARGE:number
static HTTP_REQ_TOO_LONG:number
static HTTP_UNSUPPORTED_TYPE:number
static HTTP_SERVER_ERROR:number
static HTTP_INTERNAL_ERROR:number
static HTTP_NOT_IMPLEMENTED:number
static HTTP_BAD_GATEWAY:number
static HTTP_UNAVAILABLE:number
static HTTP_GATEWAY_TIMEOUT:number
static HTTP_VERSION:number

setAuthenticator(arg0: Authenticator): void;

getHeaderFieldKey(arg0: number): String;

setFixedLengthStreamingMode(arg0: number): void;

setFixedLengthStreamingMode(arg0: number): void;

setChunkedStreamingMode(arg0: number): void;

getHeaderField(arg0: number): String;

static setFollowRedirects(arg0: boolean): void;

static getFollowRedirects(): boolean;

setInstanceFollowRedirects(arg0: boolean): void;

getInstanceFollowRedirects(): boolean;

setRequestMethod(arg0: String): void;

getRequestMethod(): String;

getResponseCode(): number;

getResponseMessage(): String;

getHeaderFieldDate(arg0: String, arg1: number): number;

abstract disconnect(): void;

abstract usingProxy(): boolean;

getPermission(): Permission;

getErrorStream(): InputStream;
 }

export class IDN {
static ALLOW_UNASSIGNED:number
static USE_STD3_ASCII_RULES:number

static toASCII(arg0: String, arg1: number): String;

static toASCII(arg0: String): String;

static toUnicode(arg0: String, arg1: number): String;

static toUnicode(arg0: String): String;
 }

export class Inet4Address extends InetAddress {

isMulticastAddress(): boolean;

isAnyLocalAddress(): boolean;

isLoopbackAddress(): boolean;

isLinkLocalAddress(): boolean;

isSiteLocalAddress(): boolean;

isMCGlobal(): boolean;

isMCNodeLocal(): boolean;

isMCLinkLocal(): boolean;

isMCSiteLocal(): boolean;

isMCOrgLocal(): boolean;

getAddress(): number[];

getHostAddress(): String;

hashCode(): number;

equals(arg0: Object): boolean;
 }

export class Inet6Address extends InetAddress {

static getByAddress(arg0: String, arg1: number[], arg2: NetworkInterface): Inet6Address;

static getByAddress(arg0: String, arg1: number[], arg2: number): Inet6Address;

isMulticastAddress(): boolean;

isAnyLocalAddress(): boolean;

isLoopbackAddress(): boolean;

isLinkLocalAddress(): boolean;

isSiteLocalAddress(): boolean;

isMCGlobal(): boolean;

isMCNodeLocal(): boolean;

isMCLinkLocal(): boolean;

isMCSiteLocal(): boolean;

isMCOrgLocal(): boolean;

getAddress(): number[];

getScopeId(): number;

getScopedInterface(): NetworkInterface;

getHostAddress(): String;

hashCode(): number;

equals(arg0: Object): boolean;

isIPv4CompatibleAddress(): boolean;
 }

export class InetAddress implements Serializable {

isMulticastAddress(): boolean;

isAnyLocalAddress(): boolean;

isLoopbackAddress(): boolean;

isLinkLocalAddress(): boolean;

isSiteLocalAddress(): boolean;

isMCGlobal(): boolean;

isMCNodeLocal(): boolean;

isMCLinkLocal(): boolean;

isMCSiteLocal(): boolean;

isMCOrgLocal(): boolean;

isReachable(arg0: number): boolean;

isReachable(arg0: NetworkInterface, arg1: number, arg2: number): boolean;

getHostName(): String;

getCanonicalHostName(): String;

getAddress(): number[];

getHostAddress(): String;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;

static getByAddress(arg0: String, arg1: number[]): InetAddress;

static getByName(arg0: String): InetAddress;

static getAllByName(arg0: String): InetAddress[];

static getLoopbackAddress(): InetAddress;

static getByAddress(arg0: number[]): InetAddress;

static getLocalHost(): InetAddress;
 }

export class InetSocketAddress extends SocketAddress {
constructor(arg0: number);
constructor(arg0: InetAddress, arg1: number);
constructor(arg0: String, arg1: number);

static createUnresolved(arg0: String, arg1: number): InetSocketAddress;

getPort(): number;

getAddress(): InetAddress;

getHostName(): String;

getHostString(): String;

isUnresolved(): boolean;
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class InterfaceAddress {

getAddress(): InetAddress;

getBroadcast(): InetAddress;

getNetworkPrefixLength(): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export abstract class JarURLConnection extends URLConnection {

getJarFileURL(): URL;

getEntryName(): String;

abstract getJarFile(): JarFile;

getManifest(): Manifest;

getJarEntry(): JarEntry;

getAttributes(): Attributes;

getMainAttributes(): Attributes;

getCertificates(): Certificate[];
 }

export class MalformedURLException extends IOException {
constructor();
constructor(arg0: String);
 }

export class MulticastSocket extends DatagramSocket {
constructor();
constructor(arg0: number);
constructor(arg0: SocketAddress);

setTTL(arg0: number): void;

setTimeToLive(arg0: number): void;

getTTL(): number;

getTimeToLive(): number;

joinGroup(arg0: InetAddress): void;

leaveGroup(arg0: InetAddress): void;

joinGroup(arg0: SocketAddress, arg1: NetworkInterface): void;

leaveGroup(arg0: SocketAddress, arg1: NetworkInterface): void;

setInterface(arg0: InetAddress): void;

getInterface(): InetAddress;

setNetworkInterface(arg0: NetworkInterface): void;

getNetworkInterface(): NetworkInterface;

setLoopbackMode(arg0: boolean): void;

getLoopbackMode(): boolean;

send(arg0: DatagramPacket, arg1: number): void;
 }

export class NetPermission extends BasicPermission {
constructor(arg0: String);
constructor(arg0: String, arg1: String);
 }

export class NetworkInterface {

getName(): String;

getInetAddresses(): Enumeration<InetAddress>;

inetAddresses(): Stream<InetAddress>;

getInterfaceAddresses(): List<InterfaceAddress>;

getSubInterfaces(): Enumeration<NetworkInterface>;

subInterfaces(): Stream<NetworkInterface>;

getParent(): NetworkInterface;

getIndex(): number;

getDisplayName(): String;

static getByName(arg0: String): NetworkInterface;

static getByIndex(arg0: number): NetworkInterface;

static getByInetAddress(arg0: InetAddress): NetworkInterface;

static getNetworkInterfaces(): Enumeration<NetworkInterface>;

static networkInterfaces(): Stream<NetworkInterface>;

isUp(): boolean;

isLoopback(): boolean;

isPointToPoint(): boolean;

supportsMulticast(): boolean;

getHardwareAddress(): number[];

getMTU(): number;

isVirtual(): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class NoRouteToHostException extends SocketException {
constructor(arg0: String);
constructor();
 }

export class PasswordAuthentication {
constructor(arg0: String, arg1: String[]);

getUserName(): String;

getPassword(): String[];
 }

export class PortUnreachableException extends SocketException {
constructor(arg0: String);
constructor();
 }

export class ProtocolException extends IOException {
constructor(arg0: String);
constructor();
 }

export interface ProtocolFamily {

name(): String;
 }

export class Proxy {
static NO_PROXY:Proxy
constructor(arg0: Proxy.Type, arg1: SocketAddress);

type(): Proxy.Type;

address(): SocketAddress;
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;
 }
export namespace Proxy { 
export class Type extends Enum<Proxy.Type> {
static DIRECT:Proxy.Type
static HTTP:Proxy.Type
static SOCKS:Proxy.Type

static values(): Proxy.Type[];

static valueOf(arg0: String): Proxy.Type;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export abstract class ProxySelector {
constructor();

static getDefault(): ProxySelector;

static setDefault(arg0: ProxySelector): void;

abstract select(arg0: URI): List<Proxy>;

abstract connectFailed(arg0: URI, arg1: SocketAddress, arg2: IOException): void;

static of(arg0: InetSocketAddress): ProxySelector;
 }

export abstract class ResponseCache {
constructor();

static getDefault(): ResponseCache;

static setDefault(arg0: ResponseCache): void;

abstract get(arg0: URI, arg1: String, arg2: Map<String, List<String>>): CacheResponse;

abstract put(arg0: URI, arg1: URLConnection): CacheRequest;
 }

export abstract class SecureCacheResponse extends CacheResponse {
constructor();

abstract getCipherSuite(): String;

abstract getLocalCertificateChain(): List<Certificate>;

abstract getServerCertificateChain(): List<Certificate>;

abstract getPeerPrincipal(): Principal;

abstract getLocalPrincipal(): Principal;

getSSLSession(): Optional<SSLSession>;
 }

export class ServerSocket implements Closeable {
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: number);
constructor(arg0: number, arg1: number, arg2: InetAddress);

bind(arg0: SocketAddress): void;

bind(arg0: SocketAddress, arg1: number): void;

getInetAddress(): InetAddress;

getLocalPort(): number;

getLocalSocketAddress(): SocketAddress;

accept(): Socket;

close(): void;

getChannel(): ServerSocketChannel;

isBound(): boolean;

isClosed(): boolean;

setSoTimeout(arg0: number): void;

getSoTimeout(): number;

setReuseAddress(arg0: boolean): void;

getReuseAddress(): boolean;
toString(): string;

static setSocketFactory(arg0: SocketImplFactory): void;

setReceiveBufferSize(arg0: number): void;

getReceiveBufferSize(): number;

setPerformancePreferences(arg0: number, arg1: number, arg2: number): void;

setOption<T extends Object>(arg0: SocketOption<T>, arg1: T): ServerSocket;

getOption<T extends Object>(arg0: SocketOption<T>): T;

supportedOptions(): Set<SocketOption<any>>;
 }

export class Socket implements Closeable {
constructor();
constructor(arg0: Proxy);
constructor(arg0: String, arg1: number);
constructor(arg0: InetAddress, arg1: number);
constructor(arg0: String, arg1: number, arg2: InetAddress, arg3: number);
constructor(arg0: InetAddress, arg1: number, arg2: InetAddress, arg3: number);
constructor(arg0: String, arg1: number, arg2: boolean);
constructor(arg0: InetAddress, arg1: number, arg2: boolean);

connect(arg0: SocketAddress): void;

connect(arg0: SocketAddress, arg1: number): void;

bind(arg0: SocketAddress): void;

getInetAddress(): InetAddress;

getLocalAddress(): InetAddress;

getPort(): number;

getLocalPort(): number;

getRemoteSocketAddress(): SocketAddress;

getLocalSocketAddress(): SocketAddress;

getChannel(): SocketChannel;

getInputStream(): InputStream;

getOutputStream(): OutputStream;

setTcpNoDelay(arg0: boolean): void;

getTcpNoDelay(): boolean;

setSoLinger(arg0: boolean, arg1: number): void;

getSoLinger(): number;

sendUrgentData(arg0: number): void;

setOOBInline(arg0: boolean): void;

getOOBInline(): boolean;

setSoTimeout(arg0: number): void;

getSoTimeout(): number;

setSendBufferSize(arg0: number): void;

getSendBufferSize(): number;

setReceiveBufferSize(arg0: number): void;

getReceiveBufferSize(): number;

setKeepAlive(arg0: boolean): void;

getKeepAlive(): boolean;

setTrafficClass(arg0: number): void;

getTrafficClass(): number;

setReuseAddress(arg0: boolean): void;

getReuseAddress(): boolean;

close(): void;

shutdownInput(): void;

shutdownOutput(): void;
toString(): string;

isConnected(): boolean;

isBound(): boolean;

isClosed(): boolean;

isInputShutdown(): boolean;

isOutputShutdown(): boolean;

static setSocketImplFactory(arg0: SocketImplFactory): void;

setPerformancePreferences(arg0: number, arg1: number, arg2: number): void;

setOption<T extends Object>(arg0: SocketOption<T>, arg1: T): Socket;

getOption<T extends Object>(arg0: SocketOption<T>): T;

supportedOptions(): Set<SocketOption<any>>;
 }

export abstract class SocketAddress implements Serializable {
constructor();
 }

export class SocketException extends IOException {
constructor(arg0: String);
constructor();
 }

export abstract class SocketImpl implements SocketOptions {
constructor();
toString(): string;
 }

export interface SocketImplFactory {

createSocketImpl(): SocketImpl;
 }

export interface SocketOption<T extends Object> extends Object {

name(): String;

type(): Class<T>;
 }

export namespace SocketOptions { 
const TCP_NODELAY:number
const SO_BINDADDR:number
const SO_REUSEADDR:number
const SO_REUSEPORT:number
const SO_BROADCAST:number
const IP_MULTICAST_IF:number
const IP_MULTICAST_IF2:number
const IP_MULTICAST_LOOP:number
const IP_TOS:number
const SO_LINGER:number
const SO_TIMEOUT:number
const SO_SNDBUF:number
const SO_RCVBUF:number
const SO_KEEPALIVE:number
const SO_OOBINLINE:number
}

export interface SocketOptions {
TCP_NODELAY:number
SO_BINDADDR:number
SO_REUSEADDR:number
SO_REUSEPORT:number
SO_BROADCAST:number
IP_MULTICAST_IF:number
IP_MULTICAST_IF2:number
IP_MULTICAST_LOOP:number
IP_TOS:number
SO_LINGER:number
SO_TIMEOUT:number
SO_SNDBUF:number
SO_RCVBUF:number
SO_KEEPALIVE:number
SO_OOBINLINE:number

setOption(arg0: number, arg1: Object): void;

getOption(arg0: number): Object;
 }

export class SocketPermission extends Permission implements Serializable {
constructor(arg0: String, arg1: String);

implies(arg0: Permission): boolean;

equals(arg0: Object): boolean;

hashCode(): number;

getActions(): String;

newPermissionCollection(): PermissionCollection;
 }

export class SocketTimeoutException extends InterruptedIOException {
constructor(arg0: String);
constructor();
 }

export class StandardProtocolFamily extends Enum<StandardProtocolFamily> implements ProtocolFamily {
static INET:StandardProtocolFamily
static INET6:StandardProtocolFamily
static UNIX:StandardProtocolFamily

static values(): StandardProtocolFamily[];

static valueOf(arg0: String): StandardProtocolFamily;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class StandardSocketOptions {
static SO_BROADCAST:SocketOption<Boolean>
static SO_KEEPALIVE:SocketOption<Boolean>
static SO_SNDBUF:SocketOption<Number>
static SO_RCVBUF:SocketOption<Number>
static SO_REUSEADDR:SocketOption<Boolean>
static SO_REUSEPORT:SocketOption<Boolean>
static SO_LINGER:SocketOption<Number>
static IP_TOS:SocketOption<Number>
static IP_MULTICAST_IF:SocketOption<NetworkInterface>
static IP_MULTICAST_TTL:SocketOption<Number>
static IP_MULTICAST_LOOP:SocketOption<Boolean>
static TCP_NODELAY:SocketOption<Boolean>
 }

export class URI extends Object implements Comparable<URI>, Serializable {
constructor(arg0: String);
constructor(arg0: String, arg1: String, arg2: String, arg3: number, arg4: String, arg5: String, arg6: String);
constructor(arg0: String, arg1: String, arg2: String, arg3: String, arg4: String);
constructor(arg0: String, arg1: String, arg2: String, arg3: String);
constructor(arg0: String, arg1: String, arg2: String);

static create(arg0: String): URI;

parseServerAuthority(): URI;

normalize(): URI;

resolve(arg0: URI): URI;

resolve(arg0: String): URI;

relativize(arg0: URI): URI;

toURL(): URL;

getScheme(): String;

isAbsolute(): boolean;

isOpaque(): boolean;

getRawSchemeSpecificPart(): String;

getSchemeSpecificPart(): String;

getRawAuthority(): String;

getAuthority(): String;

getRawUserInfo(): String;

getUserInfo(): String;

getHost(): String;

getPort(): number;

getRawPath(): String;

getPath(): String;

getRawQuery(): String;

getQuery(): String;

getRawFragment(): String;

getFragment(): String;

equals(arg0: Object): boolean;

hashCode(): number;

compareTo(arg0: URI): number;
toString(): string;

toASCIIString(): String;
 }

export class URISyntaxException extends Exception {
constructor(arg0: String, arg1: String, arg2: number);
constructor(arg0: String, arg1: String);

getInput(): String;

getReason(): String;

getIndex(): number;

getMessage(): String;
 }

export class URL implements Serializable {
constructor(arg0: String, arg1: String, arg2: number, arg3: String);
constructor(arg0: String, arg1: String, arg2: String);
constructor(arg0: String, arg1: String, arg2: number, arg3: String, arg4: URLStreamHandler);
constructor(arg0: String);
constructor(arg0: URL, arg1: String);
constructor(arg0: URL, arg1: String, arg2: URLStreamHandler);

getQuery(): String;

getPath(): String;

getUserInfo(): String;

getAuthority(): String;

getPort(): number;

getDefaultPort(): number;

getProtocol(): String;

getHost(): String;

getFile(): String;

getRef(): String;

equals(arg0: Object): boolean;

hashCode(): number;

sameFile(arg0: URL): boolean;
toString(): string;

toExternalForm(): String;

toURI(): URI;

openConnection(): URLConnection;

openConnection(arg0: Proxy): URLConnection;

openStream(): InputStream;

getContent(): Object;

getContent(arg0: Class<any>[]): Object;

static setURLStreamHandlerFactory(arg0: URLStreamHandlerFactory): void;
 }

export class URLClassLoader extends SecureClassLoader implements Closeable {
constructor(arg0: URL[], arg1: ClassLoader);
constructor(arg0: URL[]);
constructor(arg0: URL[], arg1: ClassLoader, arg2: URLStreamHandlerFactory);
constructor(arg0: String, arg1: URL[], arg2: ClassLoader);
constructor(arg0: String, arg1: URL[], arg2: ClassLoader, arg3: URLStreamHandlerFactory);

getResourceAsStream(arg0: String): InputStream;

close(): void;

getURLs(): URL[];

findResource(arg0: String): URL;

findResources(arg0: String): Enumeration<URL>;

static newInstance(arg0: URL[], arg1: ClassLoader): URLClassLoader;

static newInstance(arg0: URL[]): URLClassLoader;
 }

export abstract class URLConnection {

static getFileNameMap(): FileNameMap;

static setFileNameMap(arg0: FileNameMap): void;

abstract connect(): void;

setConnectTimeout(arg0: number): void;

getConnectTimeout(): number;

setReadTimeout(arg0: number): void;

getReadTimeout(): number;

getURL(): URL;

getContentLength(): number;

getContentLengthLong(): number;

getContentType(): String;

getContentEncoding(): String;

getExpiration(): number;

getDate(): number;

getLastModified(): number;

getHeaderField(arg0: String): String;

getHeaderFields(): Map<String, List<String>>;

getHeaderFieldInt(arg0: String, arg1: number): number;

getHeaderFieldLong(arg0: String, arg1: number): number;

getHeaderFieldDate(arg0: String, arg1: number): number;

getHeaderFieldKey(arg0: number): String;

getHeaderField(arg0: number): String;

getContent(): Object;

getContent(arg0: Class<any>[]): Object;

getPermission(): Permission;

getInputStream(): InputStream;

getOutputStream(): OutputStream;
toString(): string;

setDoInput(arg0: boolean): void;

getDoInput(): boolean;

setDoOutput(arg0: boolean): void;

getDoOutput(): boolean;

setAllowUserInteraction(arg0: boolean): void;

getAllowUserInteraction(): boolean;

static setDefaultAllowUserInteraction(arg0: boolean): void;

static getDefaultAllowUserInteraction(): boolean;

setUseCaches(arg0: boolean): void;

getUseCaches(): boolean;

setIfModifiedSince(arg0: number): void;

getIfModifiedSince(): number;

getDefaultUseCaches(): boolean;

setDefaultUseCaches(arg0: boolean): void;

static setDefaultUseCaches(arg0: String, arg1: boolean): void;

static getDefaultUseCaches(arg0: String): boolean;

setRequestProperty(arg0: String, arg1: String): void;

addRequestProperty(arg0: String, arg1: String): void;

getRequestProperty(arg0: String): String;

getRequestProperties(): Map<String, List<String>>;

static setDefaultRequestProperty(arg0: String, arg1: String): void;

static getDefaultRequestProperty(arg0: String): String;

static setContentHandlerFactory(arg0: ContentHandlerFactory): void;

static guessContentTypeFromName(arg0: String): String;

static guessContentTypeFromStream(arg0: InputStream): String;
 }

export class URLDecoder {

static decode(arg0: String): String;

static decode(arg0: String, arg1: String): String;

static decode(arg0: String, arg1: Charset): String;
 }

export class URLEncoder {

static encode(arg0: String): String;

static encode(arg0: String, arg1: String): String;

static encode(arg0: String, arg1: Charset): String;
 }

export class URLPermission extends Permission {
constructor(arg0: String, arg1: String);
constructor(arg0: String);

getActions(): String;

implies(arg0: Permission): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export abstract class URLStreamHandler {
constructor();
 }

export interface URLStreamHandlerFactory {

createURLStreamHandler(arg0: String): URLStreamHandler;
 }

export class UnixDomainSocketAddress extends SocketAddress {

static of(arg0: String): UnixDomainSocketAddress;

static of(arg0: Path): UnixDomainSocketAddress;

getPath(): Path;

hashCode(): number;

equals(arg0: Object): boolean;
toString(): string;
 }

export class UnknownHostException extends IOException {
constructor(arg0: String);
constructor();
 }

export class UnknownServiceException extends IOException {
constructor();
constructor(arg0: String);
 }

}
