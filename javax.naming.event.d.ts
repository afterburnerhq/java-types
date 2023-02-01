/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="javax.naming.directory.d.ts" />
/// <reference path="javax.naming.d.ts" />
declare module '@afterburnerhq/javax.naming.event' { 
import { String } from '@afterburnerhq/java.lang'
import { EventObject, EventListener } from '@afterburnerhq/java.util'
import { SearchControls, DirContext } from '@afterburnerhq/javax.naming.directory'
import { Context, Binding, NamingException, Name } from '@afterburnerhq/javax.naming'
export namespace EventContext { 
const OBJECT_SCOPE:number
const ONELEVEL_SCOPE:number
const SUBTREE_SCOPE:number
}

export interface EventContext extends Context {
OBJECT_SCOPE:number
ONELEVEL_SCOPE:number
SUBTREE_SCOPE:number

addNamingListener(arg0: Name, arg1: number, arg2: NamingListener): void;

addNamingListener(arg0: String, arg1: number, arg2: NamingListener): void;

removeNamingListener(arg0: NamingListener): void;

targetMustExist(): boolean;
 }

export interface EventDirContext extends EventContext, DirContext {

addNamingListener(arg0: Name, arg1: String, arg2: SearchControls, arg3: NamingListener): void;

addNamingListener(arg0: String, arg1: String, arg2: SearchControls, arg3: NamingListener): void;

addNamingListener(arg0: Name, arg1: String, arg2: Object[], arg3: SearchControls, arg4: NamingListener): void;

addNamingListener(arg0: String, arg1: String, arg2: Object[], arg3: SearchControls, arg4: NamingListener): void;
 }

export interface NamespaceChangeListener extends NamingListener {

objectAdded(arg0: NamingEvent): void;

objectRemoved(arg0: NamingEvent): void;

objectRenamed(arg0: NamingEvent): void;
 }

export class NamingEvent extends EventObject {
static OBJECT_ADDED:number
static OBJECT_REMOVED:number
static OBJECT_RENAMED:number
static OBJECT_CHANGED:number
constructor(arg0: EventContext, arg1: number, arg2: Binding, arg3: Binding, arg4: Object);

getType(): number;

getEventContext(): EventContext;

getOldBinding(): Binding;

getNewBinding(): Binding;

getChangeInfo(): Object;

dispatch(arg0: NamingListener): void;
 }

export class NamingExceptionEvent extends EventObject {
constructor(arg0: EventContext, arg1: NamingException);

getException(): NamingException;

getEventContext(): EventContext;

dispatch(arg0: NamingListener): void;
 }

export interface NamingListener extends EventListener {

namingExceptionThrown(arg0: NamingExceptionEvent): void;
 }

export interface ObjectChangeListener extends NamingListener {

objectChanged(arg0: NamingEvent): void;
 }

}
