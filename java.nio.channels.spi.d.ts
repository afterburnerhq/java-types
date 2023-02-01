/// <reference path="java.net.d.ts" />
/// <reference path="java.util.concurrent.d.ts" />
/// <reference path="java.nio.channels.d.ts" />
declare module '@afterburnerhq/java.nio.channels.spi' { 
import { ProtocolFamily } from '@afterburnerhq/java.net'
import { ExecutorService, ThreadFactory } from '@afterburnerhq/java.util.concurrent'
import { SelectionKey, SocketChannel, SelectableChannel, AsynchronousSocketChannel, InterruptibleChannel, Channel, AsynchronousChannelGroup, AsynchronousServerSocketChannel, DatagramChannel, Pipe, ServerSocketChannel, Selector } from '@afterburnerhq/java.nio.channels'
export abstract class AbstractInterruptibleChannel implements Channel, InterruptibleChannel {

close(): void;

isOpen(): boolean;
 }

export abstract class AbstractSelectableChannel extends SelectableChannel {

provider(): SelectorProvider;

isRegistered(): boolean;

keyFor(arg0: Selector): SelectionKey;

register(arg0: Selector, arg1: number, arg2: Object): SelectionKey;

isBlocking(): boolean;

blockingLock(): Object;

configureBlocking(arg0: boolean): SelectableChannel;
 }

export abstract class AbstractSelectionKey extends SelectionKey {

isValid(): boolean;

cancel(): void;
 }

export abstract class AbstractSelector extends Selector {

close(): void;

isOpen(): boolean;

provider(): SelectorProvider;
 }

export abstract class AsynchronousChannelProvider {

static provider(): AsynchronousChannelProvider;

abstract openAsynchronousChannelGroup(arg0: number, arg1: ThreadFactory): AsynchronousChannelGroup;

abstract openAsynchronousChannelGroup(arg0: ExecutorService, arg1: number): AsynchronousChannelGroup;

abstract openAsynchronousServerSocketChannel(arg0: AsynchronousChannelGroup): AsynchronousServerSocketChannel;

abstract openAsynchronousSocketChannel(arg0: AsynchronousChannelGroup): AsynchronousSocketChannel;
 }

export abstract class SelectorProvider {

static provider(): SelectorProvider;

abstract openDatagramChannel(): DatagramChannel;

abstract openDatagramChannel(arg0: ProtocolFamily): DatagramChannel;

abstract openPipe(): Pipe;

abstract openSelector(): AbstractSelector;

abstract openServerSocketChannel(): ServerSocketChannel;

abstract openSocketChannel(): SocketChannel;

inheritedChannel(): Channel;

openSocketChannel(arg0: ProtocolFamily): SocketChannel;

openServerSocketChannel(arg0: ProtocolFamily): ServerSocketChannel;
 }

}
