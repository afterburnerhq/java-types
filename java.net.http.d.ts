/// <reference path="java.util.d.ts" />
/// <reference path="java.time.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.util.concurrent.d.ts" />
/// <reference path="java.util.stream.d.ts" />
/// <reference path="java.nio.d.ts" />
/// <reference path="javax.net.ssl.d.ts" />
/// <reference path="java.util.function.d.ts" />
/// <reference path="java.nio.file.d.ts" />
/// <reference path="java.nio.charset.d.ts" />
declare module '@afterburnerhq/java.net.http' { 
import { OptionalLong, List, Optional, Map } from '@afterburnerhq/java.util'
import { Duration } from '@afterburnerhq/java.time'
import { Enum, Iterable, CharSequence, Throwable, Class, String, Void } from '@afterburnerhq/java.lang'
import { ProxySelector, URI, Authenticator, CookieHandler } from '@afterburnerhq/java.net'
import { InputStream, IOException } from '@afterburnerhq/java.io'
import { ConcurrentMap, CompletableFuture, Executor, CompletionStage, Flow } from '@afterburnerhq/java.util.concurrent'
import { Stream } from '@afterburnerhq/java.util.stream'
import { ByteBuffer } from '@afterburnerhq/java.nio'
import { SSLParameters, SSLSession, SSLContext } from '@afterburnerhq/javax.net.ssl'
import { Function, Supplier, Consumer, BiPredicate } from '@afterburnerhq/java.util.function'
import { Path, OpenOption } from '@afterburnerhq/java.nio.file'
import { Charset } from '@afterburnerhq/java.nio.charset'
export abstract class HttpClient {

static newHttpClient(): HttpClient;

static newBuilder(): HttpClient.Builder;

abstract cookieHandler(): Optional<CookieHandler>;

abstract connectTimeout(): Optional<Duration>;

abstract followRedirects(): HttpClient.Redirect;

abstract proxy(): Optional<ProxySelector>;

abstract sslContext(): SSLContext;

abstract sslParameters(): SSLParameters;

abstract authenticator(): Optional<Authenticator>;

abstract version(): HttpClient.Version;

abstract executor(): Optional<Executor>;

abstract send<T extends Object>(arg0: HttpRequest, arg1: HttpResponse.BodyHandler<T>): HttpResponse<T>;

abstract sendAsync<T extends Object>(arg0: HttpRequest, arg1: HttpResponse.BodyHandler<T>): CompletableFuture<HttpResponse<T>>;

abstract sendAsync<T extends Object>(arg0: HttpRequest, arg1: HttpResponse.BodyHandler<T>, arg2: HttpResponse.PushPromiseHandler<T>): CompletableFuture<HttpResponse<T>>;

newWebSocketBuilder(): WebSocket.Builder;
 }
export namespace HttpClient { 
export namespace Builder { 
const NO_PROXY:ProxySelector
}

export interface Builder {
NO_PROXY:ProxySelector

cookieHandler(arg0: CookieHandler): HttpClient.Builder;

connectTimeout(arg0: Duration): HttpClient.Builder;

sslContext(arg0: SSLContext): HttpClient.Builder;

sslParameters(arg0: SSLParameters): HttpClient.Builder;

executor(arg0: Executor): HttpClient.Builder;

followRedirects(arg0: HttpClient.Redirect): HttpClient.Builder;

version(arg0: HttpClient.Version): HttpClient.Builder;

priority(arg0: number): HttpClient.Builder;

proxy(arg0: ProxySelector): HttpClient.Builder;

authenticator(arg0: Authenticator): HttpClient.Builder;

build(): HttpClient;
 }

export class Redirect extends Enum<HttpClient.Redirect> {
static NEVER:HttpClient.Redirect
static ALWAYS:HttpClient.Redirect
static NORMAL:HttpClient.Redirect

static values(): HttpClient.Redirect[];

static valueOf(arg0: String): HttpClient.Redirect;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class Version extends Enum<HttpClient.Version> {
static HTTP_1_1:HttpClient.Version
static HTTP_2:HttpClient.Version

static values(): HttpClient.Version[];

static valueOf(arg0: String): HttpClient.Version;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class HttpConnectTimeoutException extends HttpTimeoutException {
constructor(arg0: String);
 }

export class HttpHeaders {

firstValue(arg0: String): Optional<String>;

firstValueAsLong(arg0: String): OptionalLong;

allValues(arg0: String): List<String>;

map(): Map<String, List<String>>;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;

static of(arg0: Map<String, List<String>>, arg1: BiPredicate<String, String>): HttpHeaders;
 }

export abstract class HttpRequest {

static newBuilder(arg0: URI): HttpRequest.Builder;

static newBuilder(arg0: HttpRequest, arg1: BiPredicate<String, String>): HttpRequest.Builder;

static newBuilder(): HttpRequest.Builder;

abstract bodyPublisher(): Optional<HttpRequest.BodyPublisher>;

abstract method(): String;

abstract timeout(): Optional<Duration>;

abstract expectContinue(): boolean;

abstract uri(): URI;

abstract version(): Optional<HttpClient.Version>;

abstract headers(): HttpHeaders;

equals(arg0: Object): boolean;

hashCode(): number;
 }
export namespace HttpRequest { 
export interface BodyPublisher extends Flow.Publisher<ByteBuffer>, Object {

contentLength(): number;
 }

export class BodyPublishers {

static fromPublisher(arg0: Flow.Publisher<ByteBuffer>): HttpRequest.BodyPublisher;

static fromPublisher(arg0: Flow.Publisher<ByteBuffer>, arg1: number): HttpRequest.BodyPublisher;

static ofString(arg0: String): HttpRequest.BodyPublisher;

static ofString(arg0: String, arg1: Charset): HttpRequest.BodyPublisher;

static ofInputStream(arg0: Supplier<InputStream>): HttpRequest.BodyPublisher;

static ofByteArray(arg0: number[]): HttpRequest.BodyPublisher;

static ofByteArray(arg0: number[], arg1: number, arg2: number): HttpRequest.BodyPublisher;

static ofFile(arg0: Path): HttpRequest.BodyPublisher;

static ofByteArrays(arg0: Iterable<number[]>): HttpRequest.BodyPublisher;

static noBody(): HttpRequest.BodyPublisher;

static concat(arg0: HttpRequest.BodyPublisher[]): HttpRequest.BodyPublisher;
 }

export interface Builder {

uri(arg0: URI): HttpRequest.Builder;

expectContinue(arg0: boolean): HttpRequest.Builder;

version(arg0: HttpClient.Version): HttpRequest.Builder;

header(arg0: String, arg1: String): HttpRequest.Builder;

headers(arg0: String[]): HttpRequest.Builder;

timeout(arg0: Duration): HttpRequest.Builder;

setHeader(arg0: String, arg1: String): HttpRequest.Builder;

GET(): HttpRequest.Builder;

POST(arg0: HttpRequest.BodyPublisher): HttpRequest.Builder;

PUT(arg0: HttpRequest.BodyPublisher): HttpRequest.Builder;

DELETE(): HttpRequest.Builder;

method(arg0: String, arg1: HttpRequest.BodyPublisher): HttpRequest.Builder;

build(): HttpRequest;

copy(): HttpRequest.Builder;
 }

}

export interface HttpResponse<T extends Object> extends Object {

statusCode(): number;

request(): HttpRequest;

previousResponse(): Optional<HttpResponse<T>>;

headers(): HttpHeaders;

body(): T;

sslSession(): Optional<SSLSession>;

uri(): URI;

version(): HttpClient.Version;
 }
export namespace HttpResponse { 
export interface BodyHandler<T extends Object> extends Object {

apply(arg0: HttpResponse.ResponseInfo): HttpResponse.BodySubscriber<T>;
 }

export class BodyHandlers {

static fromSubscriber(arg0: Flow.Subscriber<List<ByteBuffer>>): HttpResponse.BodyHandler<Void>;

static fromSubscriber<S extends Flow.Subscriber<List<ByteBuffer>>, T extends Object>(arg0: S, arg1: Function<S, T>): HttpResponse.BodyHandler<T>;

static fromLineSubscriber(arg0: Flow.Subscriber<String>): HttpResponse.BodyHandler<Void>;

static fromLineSubscriber<S extends Flow.Subscriber<String>, T extends Object>(arg0: S, arg1: Function<S, T>, arg2: String): HttpResponse.BodyHandler<T>;

static discarding(): HttpResponse.BodyHandler<Void>;

static replacing<U extends Object>(arg0: U): HttpResponse.BodyHandler<U>;

static ofString(arg0: Charset): HttpResponse.BodyHandler<String>;

static ofFile(arg0: Path, arg1: OpenOption[]): HttpResponse.BodyHandler<Path>;

static ofFile(arg0: Path): HttpResponse.BodyHandler<Path>;

static ofFileDownload(arg0: Path, arg1: OpenOption[]): HttpResponse.BodyHandler<Path>;

static ofInputStream(): HttpResponse.BodyHandler<InputStream>;

static ofLines(): HttpResponse.BodyHandler<Stream<String>>;

static ofByteArrayConsumer(arg0: Consumer<Optional<number[]>>): HttpResponse.BodyHandler<Void>;

static ofByteArray(): HttpResponse.BodyHandler<number[]>;

static ofString(): HttpResponse.BodyHandler<String>;

static ofPublisher(): HttpResponse.BodyHandler<Flow.Publisher<List<ByteBuffer>>>;

static buffering<T extends Object>(arg0: HttpResponse.BodyHandler<T>, arg1: number): HttpResponse.BodyHandler<T>;
 }

export interface BodySubscriber<T extends Object> extends Flow.Subscriber<List<ByteBuffer>>, Object {

getBody(): CompletionStage<T>;
 }

export class BodySubscribers {

static fromSubscriber(arg0: Flow.Subscriber<List<ByteBuffer>>): HttpResponse.BodySubscriber<Void>;

static fromSubscriber<S extends Flow.Subscriber<List<ByteBuffer>>, T extends Object>(arg0: S, arg1: Function<S, T>): HttpResponse.BodySubscriber<T>;

static fromLineSubscriber(arg0: Flow.Subscriber<String>): HttpResponse.BodySubscriber<Void>;

static fromLineSubscriber<S extends Flow.Subscriber<String>, T extends Object>(arg0: S, arg1: Function<S, T>, arg2: Charset, arg3: String): HttpResponse.BodySubscriber<T>;

static ofString(arg0: Charset): HttpResponse.BodySubscriber<String>;

static ofByteArray(): HttpResponse.BodySubscriber<number[]>;

static ofFile(arg0: Path, arg1: OpenOption[]): HttpResponse.BodySubscriber<Path>;

static ofFile(arg0: Path): HttpResponse.BodySubscriber<Path>;

static ofByteArrayConsumer(arg0: Consumer<Optional<number[]>>): HttpResponse.BodySubscriber<Void>;

static ofInputStream(): HttpResponse.BodySubscriber<InputStream>;

static ofLines(arg0: Charset): HttpResponse.BodySubscriber<Stream<String>>;

static ofPublisher(): HttpResponse.BodySubscriber<Flow.Publisher<List<ByteBuffer>>>;

static replacing<U extends Object>(arg0: U): HttpResponse.BodySubscriber<U>;

static discarding(): HttpResponse.BodySubscriber<Void>;

static buffering<T extends Object>(arg0: HttpResponse.BodySubscriber<T>, arg1: number): HttpResponse.BodySubscriber<T>;

static mapping<T extends Object, U extends Object>(arg0: HttpResponse.BodySubscriber<T>, arg1: Function<T, U>): HttpResponse.BodySubscriber<U>;
 }

export namespace PushPromiseHandler { 
function 
/* default */ of<T extends Object>(arg0: Function<HttpRequest, HttpResponse.BodyHandler<T>>, arg1: ConcurrentMap<HttpRequest, CompletableFuture<HttpResponse<T>>>): HttpResponse.PushPromiseHandler<T>;
}

export interface PushPromiseHandler<T extends Object> extends Object {

applyPushPromise(arg0: HttpRequest, arg1: HttpRequest, arg2: Function<HttpResponse.BodyHandler<T>, CompletableFuture<HttpResponse<T>>>): void;
 }

export interface ResponseInfo {

statusCode(): number;

headers(): HttpHeaders;

version(): HttpClient.Version;
 }

}

export class HttpTimeoutException extends IOException {
constructor(arg0: String);
 }

export namespace WebSocket { 
const NORMAL_CLOSURE:number
}

export interface WebSocket {
NORMAL_CLOSURE:number

sendText(arg0: CharSequence, arg1: boolean): CompletableFuture<WebSocket>;

sendBinary(arg0: ByteBuffer, arg1: boolean): CompletableFuture<WebSocket>;

sendPing(arg0: ByteBuffer): CompletableFuture<WebSocket>;

sendPong(arg0: ByteBuffer): CompletableFuture<WebSocket>;

sendClose(arg0: number, arg1: String): CompletableFuture<WebSocket>;

request(arg0: number): void;

getSubprotocol(): String;

isOutputClosed(): boolean;

isInputClosed(): boolean;

abort(): void;
 }
export namespace WebSocket { 
export interface Builder {

header(arg0: String, arg1: String): WebSocket.Builder;

connectTimeout(arg0: Duration): WebSocket.Builder;

subprotocols(arg0: String, arg1: String[]): WebSocket.Builder;

buildAsync(arg0: URI, arg1: WebSocket.Listener): CompletableFuture<WebSocket>;
 }

export interface Listener {

/* default */ onOpen(arg0: WebSocket): void;

/* default */ onText(arg0: WebSocket, arg1: CharSequence, arg2: boolean): CompletionStage<any>;

/* default */ onBinary(arg0: WebSocket, arg1: ByteBuffer, arg2: boolean): CompletionStage<any>;

/* default */ onPing(arg0: WebSocket, arg1: ByteBuffer): CompletionStage<any>;

/* default */ onPong(arg0: WebSocket, arg1: ByteBuffer): CompletionStage<any>;

/* default */ onClose(arg0: WebSocket, arg1: number, arg2: String): CompletionStage<any>;

/* default */ onError(arg0: WebSocket, arg1: Throwable): void;
 }

}

export class WebSocketHandshakeException extends IOException {
constructor(arg0: HttpResponse<any>);

getResponse(): HttpResponse<any>;

initCause(arg0: Throwable): WebSocketHandshakeException;
 }

}
