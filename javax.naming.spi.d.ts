/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="javax.naming.directory.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.naming.d.ts" />
declare module '@afterburnerhq/javax.naming.spi' { 
import { Hashtable } from '@afterburnerhq/java.util'
import { Class, String } from '@afterburnerhq/java.lang'
import { Attributes, DirContext } from '@afterburnerhq/javax.naming.directory'
import { Serializable } from '@afterburnerhq/java.io'
import { Context, CannotProceedException, Name } from '@afterburnerhq/javax.naming'
export interface DirObjectFactory extends ObjectFactory {

getObjectInstance(arg0: Object, arg1: Name, arg2: Context, arg3: Hashtable<any, any>, arg4: Attributes): Object;
 }

export interface DirStateFactory extends StateFactory {

getStateToBind(arg0: Object, arg1: Name, arg2: Context, arg3: Hashtable<any, any>, arg4: Attributes): DirStateFactory.Result;
 }
export namespace DirStateFactory { 
export class Result {
constructor(arg0: Object, arg1: Attributes);

getObject(): Object;

getAttributes(): Attributes;
 }

}

export class DirectoryManager extends NamingManager {

static getContinuationDirContext(arg0: CannotProceedException): DirContext;

static getObjectInstance(arg0: Object, arg1: Name, arg2: Context, arg3: Hashtable<any, any>, arg4: Attributes): Object;

static getStateToBind(arg0: Object, arg1: Name, arg2: Context, arg3: Hashtable<any, any>, arg4: Attributes): DirStateFactory.Result;
 }

export interface InitialContextFactory {

getInitialContext(arg0: Hashtable<any, any>): Context;
 }

export interface InitialContextFactoryBuilder {

createInitialContextFactory(arg0: Hashtable<any, any>): InitialContextFactory;
 }

export class NamingManager {
static CPE:String

static setObjectFactoryBuilder(arg0: ObjectFactoryBuilder): void;

static getObjectInstance(arg0: Object, arg1: Name, arg2: Context, arg3: Hashtable<any, any>): Object;

static getURLContext(arg0: String, arg1: Hashtable<any, any>): Context;

static getInitialContext(arg0: Hashtable<any, any>): Context;

static setInitialContextFactoryBuilder(arg0: InitialContextFactoryBuilder): void;

static hasInitialContextFactoryBuilder(): boolean;

static getContinuationContext(arg0: CannotProceedException): Context;

static getStateToBind(arg0: Object, arg1: Name, arg2: Context, arg3: Hashtable<any, any>): Object;
 }

export interface ObjectFactory {

getObjectInstance(arg0: Object, arg1: Name, arg2: Context, arg3: Hashtable<any, any>): Object;
 }

export interface ObjectFactoryBuilder {

createObjectFactory(arg0: Object, arg1: Hashtable<any, any>): ObjectFactory;
 }

export class ResolveResult implements Serializable {
constructor(arg0: Object, arg1: String);
constructor(arg0: Object, arg1: Name);

getRemainingName(): Name;

getResolvedObj(): Object;

setRemainingName(arg0: Name): void;

appendRemainingName(arg0: Name): void;

appendRemainingComponent(arg0: String): void;

setResolvedObj(arg0: Object): void;
 }

export interface Resolver {

resolveToClass(arg0: Name, arg1: Class<Context>): ResolveResult;

resolveToClass(arg0: String, arg1: Class<Context>): ResolveResult;
 }

export interface StateFactory {

getStateToBind(arg0: Object, arg1: Name, arg2: Context, arg3: Hashtable<any, any>): Object;
 }

}
