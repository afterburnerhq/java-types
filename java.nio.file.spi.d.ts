/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.util.concurrent.d.ts" />
/// <reference path="java.nio.channels.d.ts" />
/// <reference path="java.nio.file.d.ts" />
/// <reference path="java.nio.file.attribute.d.ts" />
declare module '@afterburnerhq/java.nio.file.spi' { 
import { Map, List, Set } from '@afterburnerhq/java.util'
import { Class, String } from '@afterburnerhq/java.lang'
import { URI } from '@afterburnerhq/java.net'
import { InputStream, OutputStream } from '@afterburnerhq/java.io'
import { ExecutorService } from '@afterburnerhq/java.util.concurrent'
import { AsynchronousFileChannel, SeekableByteChannel, FileChannel } from '@afterburnerhq/java.nio.channels'
import { Path, OpenOption, FileStore, CopyOption, LinkOption, FileSystem, DirectoryStream, AccessMode } from '@afterburnerhq/java.nio.file'
import { FileAttributeView, BasicFileAttributes, FileAttribute } from '@afterburnerhq/java.nio.file.attribute'
export abstract class FileSystemProvider {

static installedProviders(): List<FileSystemProvider>;

abstract getScheme(): String;

abstract newFileSystem(arg0: URI, arg1: Map<String, any>): FileSystem;

abstract getFileSystem(arg0: URI): FileSystem;

abstract getPath(arg0: URI): Path;

newFileSystem(arg0: Path, arg1: Map<String, any>): FileSystem;

newInputStream(arg0: Path, arg1: OpenOption[]): InputStream;

newOutputStream(arg0: Path, arg1: OpenOption[]): OutputStream;

newFileChannel(arg0: Path, arg1: Set<OpenOption>, arg2: FileAttribute<any>[]): FileChannel;

newAsynchronousFileChannel(arg0: Path, arg1: Set<OpenOption>, arg2: ExecutorService, arg3: FileAttribute<any>[]): AsynchronousFileChannel;

abstract newByteChannel(arg0: Path, arg1: Set<OpenOption>, arg2: FileAttribute<any>[]): SeekableByteChannel;

abstract newDirectoryStream(arg0: Path, arg1: DirectoryStream.Filter<Path>): DirectoryStream<Path>;

abstract createDirectory(arg0: Path, arg1: FileAttribute<any>[]): void;

createSymbolicLink(arg0: Path, arg1: Path, arg2: FileAttribute<any>[]): void;

createLink(arg0: Path, arg1: Path): void;

abstract delete(arg0: Path): void;

deleteIfExists(arg0: Path): boolean;

readSymbolicLink(arg0: Path): Path;

abstract copy(arg0: Path, arg1: Path, arg2: CopyOption[]): void;

abstract move(arg0: Path, arg1: Path, arg2: CopyOption[]): void;

abstract isSameFile(arg0: Path, arg1: Path): boolean;

abstract isHidden(arg0: Path): boolean;

abstract getFileStore(arg0: Path): FileStore;

abstract checkAccess(arg0: Path, arg1: AccessMode[]): void;

abstract getFileAttributeView<V extends FileAttributeView>(arg0: Path, arg1: Class<V>, arg2: LinkOption[]): V;

abstract readAttributes<A extends BasicFileAttributes>(arg0: Path, arg1: Class<A>, arg2: LinkOption[]): A;

abstract readAttributes(arg0: Path, arg1: String, arg2: LinkOption[]): Map<String, Object>;

abstract setAttribute(arg0: Path, arg1: String, arg2: Object, arg3: LinkOption[]): void;
 }

export abstract class FileTypeDetector {

abstract probeContentType(arg0: Path): String;
 }

}
