/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.util.concurrent.d.ts" />
/// <reference path="java.nio.channels.spi.d.ts" />
/// <reference path="java.nio.d.ts" />
/// <reference path="java.util.function.d.ts" />
/// <reference path="java.nio.file.d.ts" />
/// <reference path="java.nio.file.attribute.d.ts" />
/// <reference path="java.nio.charset.d.ts" />
declare module '@afterburnerhq/java.nio.channels' { 
import { Integer, IllegalStateException, AutoCloseable, Long, Throwable, String, Void, IllegalArgumentException } from '@afterburnerhq/java.lang'
import { Set } from '@afterburnerhq/java.util'
import { ProtocolFamily, SocketOption, DatagramSocket, NetworkInterface, ServerSocket, SocketAddress, InetAddress, Socket } from '@afterburnerhq/java.net'
import { Reader, IOException, InputStream, Writer, Closeable, OutputStream } from '@afterburnerhq/java.io'
import { ExecutorService, Future, ThreadFactory, TimeUnit } from '@afterburnerhq/java.util.concurrent'
import { AsynchronousChannelProvider, AbstractInterruptibleChannel, SelectorProvider, AbstractSelectableChannel } from '@afterburnerhq/java.nio.channels.spi'
import { MappedByteBuffer, ByteBuffer } from '@afterburnerhq/java.nio'
import { Consumer } from '@afterburnerhq/java.util.function'
import { Path, OpenOption } from '@afterburnerhq/java.nio.file'
import { FileAttribute } from '@afterburnerhq/java.nio.file.attribute'
import { Charset, CharsetEncoder, CharsetDecoder } from '@afterburnerhq/java.nio.charset'
export class AcceptPendingException extends IllegalStateException {
constructor();
 }

export class AlreadyBoundException extends IllegalStateException {
constructor();
 }

export class AlreadyConnectedException extends IllegalStateException {
constructor();
 }

export interface AsynchronousByteChannel extends AsynchronousChannel {

read<A extends Object>(arg0: ByteBuffer, arg1: A, arg2: CompletionHandler<Number, A>): void;

read(arg0: ByteBuffer): Future<Number>;

write<A extends Object>(arg0: ByteBuffer, arg1: A, arg2: CompletionHandler<Number, A>): void;

write(arg0: ByteBuffer): Future<Number>;
 }

export interface AsynchronousChannel extends Channel {

close(): void;
 }

export abstract class AsynchronousChannelGroup {

provider(): AsynchronousChannelProvider;

static withFixedThreadPool(arg0: number, arg1: ThreadFactory): AsynchronousChannelGroup;

static withCachedThreadPool(arg0: ExecutorService, arg1: number): AsynchronousChannelGroup;

static withThreadPool(arg0: ExecutorService): AsynchronousChannelGroup;

abstract isShutdown(): boolean;

abstract isTerminated(): boolean;

abstract shutdown(): void;

abstract shutdownNow(): void;

abstract awaitTermination(arg0: number, arg1: TimeUnit): boolean;
 }

export class AsynchronousCloseException extends ClosedChannelException {
constructor();
 }

export abstract class AsynchronousFileChannel implements AsynchronousChannel {

static open(arg0: Path, arg1: Set<OpenOption>, arg2: ExecutorService, arg3: FileAttribute<any>[]): AsynchronousFileChannel;

static open(arg0: Path, arg1: OpenOption[]): AsynchronousFileChannel;

abstract size(): number;

abstract truncate(arg0: number): AsynchronousFileChannel;

abstract force(arg0: boolean): void;

abstract lock<A extends Object>(arg0: number, arg1: number, arg2: boolean, arg3: A, arg4: CompletionHandler<FileLock, A>): void;

lock<A extends Object>(arg0: A, arg1: CompletionHandler<FileLock, A>): void;

abstract lock(arg0: number, arg1: number, arg2: boolean): Future<FileLock>;

lock(): Future<FileLock>;

abstract tryLock(arg0: number, arg1: number, arg2: boolean): FileLock;

tryLock(): FileLock;

abstract read<A extends Object>(arg0: ByteBuffer, arg1: number, arg2: A, arg3: CompletionHandler<Number, A>): void;

abstract read(arg0: ByteBuffer, arg1: number): Future<Number>;

abstract write<A extends Object>(arg0: ByteBuffer, arg1: number, arg2: A, arg3: CompletionHandler<Number, A>): void;

abstract write(arg0: ByteBuffer, arg1: number): Future<Number>;
 }

export abstract class AsynchronousServerSocketChannel implements AsynchronousChannel, NetworkChannel {

provider(): AsynchronousChannelProvider;

static open(arg0: AsynchronousChannelGroup): AsynchronousServerSocketChannel;

static open(): AsynchronousServerSocketChannel;

bind(arg0: SocketAddress): AsynchronousServerSocketChannel;

abstract bind(arg0: SocketAddress, arg1: number): AsynchronousServerSocketChannel;

abstract setOption<T extends Object>(arg0: SocketOption<T>, arg1: T): AsynchronousServerSocketChannel;

abstract accept<A extends Object>(arg0: A, arg1: CompletionHandler<AsynchronousSocketChannel, A>): void;

abstract accept(): Future<AsynchronousSocketChannel>;

abstract getLocalAddress(): SocketAddress;
 }

export abstract class AsynchronousSocketChannel implements AsynchronousByteChannel, NetworkChannel {

provider(): AsynchronousChannelProvider;

static open(arg0: AsynchronousChannelGroup): AsynchronousSocketChannel;

static open(): AsynchronousSocketChannel;

abstract bind(arg0: SocketAddress): AsynchronousSocketChannel;

abstract setOption<T extends Object>(arg0: SocketOption<T>, arg1: T): AsynchronousSocketChannel;

abstract shutdownInput(): AsynchronousSocketChannel;

abstract shutdownOutput(): AsynchronousSocketChannel;

abstract getRemoteAddress(): SocketAddress;

abstract connect<A extends Object>(arg0: SocketAddress, arg1: A, arg2: CompletionHandler<Void, A>): void;

abstract connect(arg0: SocketAddress): Future<Void>;

abstract read<A extends Object>(arg0: ByteBuffer, arg1: number, arg2: TimeUnit, arg3: A, arg4: CompletionHandler<Number, A>): void;

read<A extends Object>(arg0: ByteBuffer, arg1: A, arg2: CompletionHandler<Number, A>): void;

abstract read(arg0: ByteBuffer): Future<Number>;

abstract read<A extends Object>(arg0: ByteBuffer[], arg1: number, arg2: number, arg3: number, arg4: TimeUnit, arg5: A, arg6: CompletionHandler<Number, A>): void;

abstract write<A extends Object>(arg0: ByteBuffer, arg1: number, arg2: TimeUnit, arg3: A, arg4: CompletionHandler<Number, A>): void;

write<A extends Object>(arg0: ByteBuffer, arg1: A, arg2: CompletionHandler<Number, A>): void;

abstract write(arg0: ByteBuffer): Future<Number>;

abstract write<A extends Object>(arg0: ByteBuffer[], arg1: number, arg2: number, arg3: number, arg4: TimeUnit, arg5: A, arg6: CompletionHandler<Number, A>): void;

abstract getLocalAddress(): SocketAddress;
 }

export interface ByteChannel extends ReadableByteChannel, WritableByteChannel {
 }

export class CancelledKeyException extends IllegalStateException {
constructor();
 }

export interface Channel extends Closeable {

isOpen(): boolean;

close(): void;
 }

export class Channels {

static newInputStream(arg0: ReadableByteChannel): InputStream;

static newOutputStream(arg0: WritableByteChannel): OutputStream;

static newInputStream(arg0: AsynchronousByteChannel): InputStream;

static newOutputStream(arg0: AsynchronousByteChannel): OutputStream;

static newChannel(arg0: InputStream): ReadableByteChannel;

static newChannel(arg0: OutputStream): WritableByteChannel;

static newReader(arg0: ReadableByteChannel, arg1: CharsetDecoder, arg2: number): Reader;

static newReader(arg0: ReadableByteChannel, arg1: String): Reader;

static newReader(arg0: ReadableByteChannel, arg1: Charset): Reader;

static newWriter(arg0: WritableByteChannel, arg1: CharsetEncoder, arg2: number): Writer;

static newWriter(arg0: WritableByteChannel, arg1: String): Writer;

static newWriter(arg0: WritableByteChannel, arg1: Charset): Writer;
 }

export class ClosedByInterruptException extends AsynchronousCloseException {
constructor();
 }

export class ClosedChannelException extends IOException {
constructor();
 }

export class ClosedSelectorException extends IllegalStateException {
constructor();
 }

export interface CompletionHandler<V extends Object, A extends Object> extends Object {

completed(arg0: V, arg1: A): void;

failed(arg0: Throwable, arg1: A): void;
 }

export class ConnectionPendingException extends IllegalStateException {
constructor();
 }

export abstract class DatagramChannel extends AbstractSelectableChannel implements ByteChannel, ScatteringByteChannel, GatheringByteChannel, MulticastChannel {

static open(): DatagramChannel;

static open(arg0: ProtocolFamily): DatagramChannel;

validOps(): number;

abstract bind(arg0: SocketAddress): DatagramChannel;

abstract setOption<T extends Object>(arg0: SocketOption<T>, arg1: T): DatagramChannel;

abstract socket(): DatagramSocket;

abstract isConnected(): boolean;

abstract connect(arg0: SocketAddress): DatagramChannel;

abstract disconnect(): DatagramChannel;

abstract getRemoteAddress(): SocketAddress;

abstract receive(arg0: ByteBuffer): SocketAddress;

abstract send(arg0: ByteBuffer, arg1: SocketAddress): number;

abstract read(arg0: ByteBuffer): number;

abstract read(arg0: ByteBuffer[], arg1: number, arg2: number): number;

read(arg0: ByteBuffer[]): number;

abstract write(arg0: ByteBuffer): number;

abstract write(arg0: ByteBuffer[], arg1: number, arg2: number): number;

write(arg0: ByteBuffer[]): number;

abstract getLocalAddress(): SocketAddress;
 }

export abstract class FileChannel extends AbstractInterruptibleChannel implements SeekableByteChannel, GatheringByteChannel, ScatteringByteChannel {

static open(arg0: Path, arg1: Set<OpenOption>, arg2: FileAttribute<any>[]): FileChannel;

static open(arg0: Path, arg1: OpenOption[]): FileChannel;

abstract read(arg0: ByteBuffer): number;

abstract read(arg0: ByteBuffer[], arg1: number, arg2: number): number;

read(arg0: ByteBuffer[]): number;

abstract write(arg0: ByteBuffer): number;

abstract write(arg0: ByteBuffer[], arg1: number, arg2: number): number;

write(arg0: ByteBuffer[]): number;

abstract position(): number;

abstract position(arg0: number): FileChannel;

abstract size(): number;

abstract truncate(arg0: number): FileChannel;

abstract force(arg0: boolean): void;

abstract transferTo(arg0: number, arg1: number, arg2: WritableByteChannel): number;

abstract transferFrom(arg0: ReadableByteChannel, arg1: number, arg2: number): number;

abstract read(arg0: ByteBuffer, arg1: number): number;

abstract write(arg0: ByteBuffer, arg1: number): number;

abstract map(arg0: FileChannel.MapMode, arg1: number, arg2: number): MappedByteBuffer;

abstract lock(arg0: number, arg1: number, arg2: boolean): FileLock;

lock(): FileLock;

abstract tryLock(arg0: number, arg1: number, arg2: boolean): FileLock;

tryLock(): FileLock;
 }
export namespace FileChannel { 
export class MapMode {
static READ_ONLY:FileChannel.MapMode
static READ_WRITE:FileChannel.MapMode
static PRIVATE:FileChannel.MapMode
toString(): string;
 }

}

export abstract class FileLock implements AutoCloseable {

channel(): FileChannel;

acquiredBy(): Channel;

position(): number;

size(): number;

isShared(): boolean;

overlaps(arg0: number, arg1: number): boolean;

abstract isValid(): boolean;

abstract release(): void;

close(): void;
toString(): string;
 }

export class FileLockInterruptionException extends IOException {
constructor();
 }

export interface GatheringByteChannel extends WritableByteChannel {

write(arg0: ByteBuffer[], arg1: number, arg2: number): number;

write(arg0: ByteBuffer[]): number;
 }

export class IllegalBlockingModeException extends IllegalStateException {
constructor();
 }

export class IllegalChannelGroupException extends IllegalArgumentException {
constructor();
 }

export class IllegalSelectorException extends IllegalArgumentException {
constructor();
 }

export class InterruptedByTimeoutException extends IOException {
constructor();
 }

export interface InterruptibleChannel extends Channel {

close(): void;
 }

export abstract class MembershipKey {

abstract isValid(): boolean;

abstract drop(): void;

abstract block(arg0: InetAddress): MembershipKey;

abstract unblock(arg0: InetAddress): MembershipKey;

abstract channel(): MulticastChannel;

abstract group(): InetAddress;

abstract networkInterface(): NetworkInterface;

abstract sourceAddress(): InetAddress;
 }

export interface MulticastChannel extends NetworkChannel {

close(): void;

join(arg0: InetAddress, arg1: NetworkInterface): MembershipKey;

join(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress): MembershipKey;
 }

export interface NetworkChannel extends Channel {

bind(arg0: SocketAddress): NetworkChannel;

getLocalAddress(): SocketAddress;

setOption<T extends Object>(arg0: SocketOption<T>, arg1: T): NetworkChannel;

getOption<T extends Object>(arg0: SocketOption<T>): T;

supportedOptions(): Set<SocketOption<any>>;
 }

export class NoConnectionPendingException extends IllegalStateException {
constructor();
 }

export class NonReadableChannelException extends IllegalStateException {
constructor();
 }

export class NonWritableChannelException extends IllegalStateException {
constructor();
 }

export class NotYetBoundException extends IllegalStateException {
constructor();
 }

export class NotYetConnectedException extends IllegalStateException {
constructor();
 }

export class OverlappingFileLockException extends IllegalStateException {
constructor();
 }

export abstract class Pipe {

abstract source(): Pipe.SourceChannel;

abstract sink(): Pipe.SinkChannel;

static open(): Pipe;
 }
export namespace Pipe { 
export abstract class SinkChannel extends AbstractSelectableChannel implements WritableByteChannel, GatheringByteChannel {

validOps(): number;
 }

export abstract class SourceChannel extends AbstractSelectableChannel implements ReadableByteChannel, ScatteringByteChannel {

validOps(): number;
 }

}

export class ReadPendingException extends IllegalStateException {
constructor();
 }

export interface ReadableByteChannel extends Channel {

read(arg0: ByteBuffer): number;
 }

export interface ScatteringByteChannel extends ReadableByteChannel {

read(arg0: ByteBuffer[], arg1: number, arg2: number): number;

read(arg0: ByteBuffer[]): number;
 }

export interface SeekableByteChannel extends ByteChannel {

read(arg0: ByteBuffer): number;

write(arg0: ByteBuffer): number;

position(): number;

position(arg0: number): SeekableByteChannel;

size(): number;

truncate(arg0: number): SeekableByteChannel;
 }

export abstract class SelectableChannel extends AbstractInterruptibleChannel implements Channel {

abstract provider(): SelectorProvider;

abstract validOps(): number;

abstract isRegistered(): boolean;

abstract keyFor(arg0: Selector): SelectionKey;

abstract register(arg0: Selector, arg1: number, arg2: Object): SelectionKey;

register(arg0: Selector, arg1: number): SelectionKey;

abstract configureBlocking(arg0: boolean): SelectableChannel;

abstract isBlocking(): boolean;

abstract blockingLock(): Object;
 }

export abstract class SelectionKey {
static OP_READ:number
static OP_WRITE:number
static OP_CONNECT:number
static OP_ACCEPT:number

abstract channel(): SelectableChannel;

abstract selector(): Selector;

abstract isValid(): boolean;

abstract cancel(): void;

abstract interestOps(): number;

abstract interestOps(arg0: number): SelectionKey;

interestOpsOr(arg0: number): number;

interestOpsAnd(arg0: number): number;

abstract readyOps(): number;

isReadable(): boolean;

isWritable(): boolean;

isConnectable(): boolean;

isAcceptable(): boolean;

attach(arg0: Object): Object;

attachment(): Object;
 }

export abstract class Selector implements Closeable {

static open(): Selector;

abstract isOpen(): boolean;

abstract provider(): SelectorProvider;

abstract keys(): Set<SelectionKey>;

abstract selectedKeys(): Set<SelectionKey>;

abstract selectNow(): number;

abstract select(arg0: number): number;

abstract select(): number;

select(arg0: Consumer<SelectionKey>, arg1: number): number;

select(arg0: Consumer<SelectionKey>): number;

selectNow(arg0: Consumer<SelectionKey>): number;

abstract wakeup(): Selector;

abstract close(): void;
 }

export abstract class ServerSocketChannel extends AbstractSelectableChannel implements NetworkChannel {

static open(): ServerSocketChannel;

static open(arg0: ProtocolFamily): ServerSocketChannel;

validOps(): number;

bind(arg0: SocketAddress): ServerSocketChannel;

abstract bind(arg0: SocketAddress, arg1: number): ServerSocketChannel;

abstract setOption<T extends Object>(arg0: SocketOption<T>, arg1: T): ServerSocketChannel;

abstract socket(): ServerSocket;

abstract accept(): SocketChannel;

abstract getLocalAddress(): SocketAddress;
 }

export class ShutdownChannelGroupException extends IllegalStateException {
constructor();
 }

export abstract class SocketChannel extends AbstractSelectableChannel implements ByteChannel, ScatteringByteChannel, GatheringByteChannel, NetworkChannel {

static open(): SocketChannel;

static open(arg0: ProtocolFamily): SocketChannel;

static open(arg0: SocketAddress): SocketChannel;

validOps(): number;

abstract bind(arg0: SocketAddress): SocketChannel;

abstract setOption<T extends Object>(arg0: SocketOption<T>, arg1: T): SocketChannel;

abstract shutdownInput(): SocketChannel;

abstract shutdownOutput(): SocketChannel;

abstract socket(): Socket;

abstract isConnected(): boolean;

abstract isConnectionPending(): boolean;

abstract connect(arg0: SocketAddress): boolean;

abstract finishConnect(): boolean;

abstract getRemoteAddress(): SocketAddress;

abstract read(arg0: ByteBuffer): number;

abstract read(arg0: ByteBuffer[], arg1: number, arg2: number): number;

read(arg0: ByteBuffer[]): number;

abstract write(arg0: ByteBuffer): number;

abstract write(arg0: ByteBuffer[], arg1: number, arg2: number): number;

write(arg0: ByteBuffer[]): number;

abstract getLocalAddress(): SocketAddress;
 }

export class UnresolvedAddressException extends IllegalArgumentException {
constructor();
 }

export class UnsupportedAddressTypeException extends IllegalArgumentException {
constructor();
 }

export interface WritableByteChannel extends Channel {

write(arg0: ByteBuffer): number;
 }

export class WritePendingException extends IllegalStateException {
constructor();
 }

}
