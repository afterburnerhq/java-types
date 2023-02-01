/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.management.d.ts" />
declare module '@afterburnerhq/javax.management.loading' { 
import { ClassLoader, Class, String, Boolean } from '@afterburnerhq/java.lang'
import { List, Set, Enumeration, Map } from '@afterburnerhq/java.util'
import { URLStreamHandlerFactory, URL, URLClassLoader } from '@afterburnerhq/java.net'
import { Externalizable, ObjectInput, ObjectOutput, InputStream } from '@afterburnerhq/java.io'
import { MBeanRegistration, MBeanServer, ObjectName } from '@afterburnerhq/javax.management'
export interface ClassLoaderRepository {

loadClass(arg0: String): Class<any>;

loadClassWithout(arg0: ClassLoader, arg1: String): Class<any>;

loadClassBefore(arg0: ClassLoader, arg1: String): Class<any>;
 }

export class DefaultLoaderRepository {
constructor();

static loadClass(arg0: String): Class<any>;

static loadClassWithout(arg0: ClassLoader, arg1: String): Class<any>;
 }

export class MLet extends URLClassLoader implements MLetMBean, MBeanRegistration, Externalizable {
constructor();
constructor(arg0: URL[]);
constructor(arg0: URL[], arg1: ClassLoader);
constructor(arg0: URL[], arg1: ClassLoader, arg2: URLStreamHandlerFactory);
constructor(arg0: URL[], arg1: boolean);
constructor(arg0: URL[], arg1: ClassLoader, arg2: boolean);
constructor(arg0: URL[], arg1: ClassLoader, arg2: URLStreamHandlerFactory, arg3: boolean);

addURL(arg0: URL): void;

addURL(arg0: String): void;

getURLs(): URL[];

getMBeansFromURL(arg0: URL): Set<Object>;

getMBeansFromURL(arg0: String): Set<Object>;

getLibraryDirectory(): String;

setLibraryDirectory(arg0: String): void;

preRegister(arg0: MBeanServer, arg1: ObjectName): ObjectName;

postRegister(arg0: Boolean): void;

preDeregister(): void;

postDeregister(): void;

writeExternal(arg0: ObjectOutput): void;

readExternal(arg0: ObjectInput): void;

loadClass(arg0: String, arg1: ClassLoaderRepository): Class<any>;
 }

export class MLetContent {
constructor(arg0: URL, arg1: Map<String, String>, arg2: List<String>, arg3: List<String>);

getAttributes(): Map<String, String>;

getDocumentBase(): URL;

getCodeBase(): URL;

getJarFiles(): String;

getCode(): String;

getSerializedObject(): String;

getName(): String;

getVersion(): String;

getParameterTypes(): List<String>;

getParameterValues(): List<String>;
 }

export interface MLetMBean {

getMBeansFromURL(arg0: String): Set<Object>;

getMBeansFromURL(arg0: URL): Set<Object>;

addURL(arg0: URL): void;

addURL(arg0: String): void;

getURLs(): URL[];

getResource(arg0: String): URL;

getResourceAsStream(arg0: String): InputStream;

getResources(arg0: String): Enumeration<URL>;

getLibraryDirectory(): String;

setLibraryDirectory(arg0: String): void;
 }

export interface PrivateClassLoader {
 }

export class PrivateMLet extends MLet implements PrivateClassLoader {
constructor(arg0: URL[], arg1: boolean);
constructor(arg0: URL[], arg1: ClassLoader, arg2: boolean);
constructor(arg0: URL[], arg1: ClassLoader, arg2: URLStreamHandlerFactory, arg3: boolean);
 }

}
