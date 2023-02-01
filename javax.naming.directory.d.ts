/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.naming.d.ts" />
declare module '@afterburnerhq/javax.naming.directory' { 
import { Cloneable, String } from '@afterburnerhq/java.lang'
import { Hashtable } from '@afterburnerhq/java.util'
import { Serializable } from '@afterburnerhq/java.io'
import { Context, Binding, NamingEnumeration, NamingException, InitialContext, Name } from '@afterburnerhq/javax.naming'
export namespace Attribute { 
const serialVersionUID:number
}

export interface Attribute extends Cloneable, Serializable {
serialVersionUID:number

getAll(): NamingEnumeration<any>;

get(): Object;

size(): number;

getID(): String;

contains(arg0: Object): boolean;

add(arg0: Object): boolean;

remove(arg0: Object): boolean;

clear(): void;

getAttributeSyntaxDefinition(): DirContext;

getAttributeDefinition(): DirContext;

clone(): Object;

isOrdered(): boolean;

get(arg0: number): Object;

remove(arg0: number): Object;

add(arg0: number, arg1: Object): void;

set(arg0: number, arg1: Object): Object;
 }

export class AttributeInUseException extends NamingException {
constructor(arg0: String);
constructor();
 }

export class AttributeModificationException extends NamingException {
constructor(arg0: String);
constructor();

setUnexecutedModifications(arg0: ModificationItem[]): void;

getUnexecutedModifications(): ModificationItem[];
toString(): string;
 }

export interface Attributes extends Cloneable, Serializable {

isCaseIgnored(): boolean;

size(): number;

get(arg0: String): Attribute;

getAll(): NamingEnumeration<Attribute>;

getIDs(): NamingEnumeration<String>;

put(arg0: String, arg1: Object): Attribute;

put(arg0: Attribute): Attribute;

remove(arg0: String): Attribute;

clone(): Object;
 }

export class BasicAttribute implements Attribute {
constructor(arg0: String);
constructor(arg0: String, arg1: Object);
constructor(arg0: String, arg1: boolean);
constructor(arg0: String, arg1: Object, arg2: boolean);

clone(): Object;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;

getAll(): NamingEnumeration<any>;

get(): Object;

size(): number;

getID(): String;

contains(arg0: Object): boolean;

add(arg0: Object): boolean;

remove(arg0: Object): boolean;

clear(): void;

isOrdered(): boolean;

get(arg0: number): Object;

remove(arg0: number): Object;

add(arg0: number, arg1: Object): void;

set(arg0: number, arg1: Object): Object;

getAttributeSyntaxDefinition(): DirContext;

getAttributeDefinition(): DirContext;
 }

export class BasicAttributes implements Attributes {
constructor();
constructor(arg0: boolean);
constructor(arg0: String, arg1: Object);
constructor(arg0: String, arg1: Object, arg2: boolean);

clone(): Object;

isCaseIgnored(): boolean;

size(): number;

get(arg0: String): Attribute;

getAll(): NamingEnumeration<Attribute>;

getIDs(): NamingEnumeration<String>;

put(arg0: String, arg1: Object): Attribute;

put(arg0: Attribute): Attribute;

remove(arg0: String): Attribute;
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export namespace DirContext { 
const ADD_ATTRIBUTE:number
const REPLACE_ATTRIBUTE:number
const REMOVE_ATTRIBUTE:number
}

export interface DirContext extends Context {
ADD_ATTRIBUTE:number
REPLACE_ATTRIBUTE:number
REMOVE_ATTRIBUTE:number

getAttributes(arg0: Name): Attributes;

getAttributes(arg0: String): Attributes;

getAttributes(arg0: Name, arg1: String[]): Attributes;

getAttributes(arg0: String, arg1: String[]): Attributes;

modifyAttributes(arg0: Name, arg1: number, arg2: Attributes): void;

modifyAttributes(arg0: String, arg1: number, arg2: Attributes): void;

modifyAttributes(arg0: Name, arg1: ModificationItem[]): void;

modifyAttributes(arg0: String, arg1: ModificationItem[]): void;

bind(arg0: Name, arg1: Object, arg2: Attributes): void;

bind(arg0: String, arg1: Object, arg2: Attributes): void;

rebind(arg0: Name, arg1: Object, arg2: Attributes): void;

rebind(arg0: String, arg1: Object, arg2: Attributes): void;

createSubcontext(arg0: Name, arg1: Attributes): DirContext;

createSubcontext(arg0: String, arg1: Attributes): DirContext;

getSchema(arg0: Name): DirContext;

getSchema(arg0: String): DirContext;

getSchemaClassDefinition(arg0: Name): DirContext;

getSchemaClassDefinition(arg0: String): DirContext;

search(arg0: Name, arg1: Attributes, arg2: String[]): NamingEnumeration<SearchResult>;

search(arg0: String, arg1: Attributes, arg2: String[]): NamingEnumeration<SearchResult>;

search(arg0: Name, arg1: Attributes): NamingEnumeration<SearchResult>;

search(arg0: String, arg1: Attributes): NamingEnumeration<SearchResult>;

search(arg0: Name, arg1: String, arg2: SearchControls): NamingEnumeration<SearchResult>;

search(arg0: String, arg1: String, arg2: SearchControls): NamingEnumeration<SearchResult>;

search(arg0: Name, arg1: String, arg2: Object[], arg3: SearchControls): NamingEnumeration<SearchResult>;

search(arg0: String, arg1: String, arg2: Object[], arg3: SearchControls): NamingEnumeration<SearchResult>;
 }

export class InitialDirContext extends InitialContext implements DirContext {
constructor();
constructor(arg0: Hashtable<any, any>);

getAttributes(arg0: String): Attributes;

getAttributes(arg0: String, arg1: String[]): Attributes;

getAttributes(arg0: Name): Attributes;

getAttributes(arg0: Name, arg1: String[]): Attributes;

modifyAttributes(arg0: String, arg1: number, arg2: Attributes): void;

modifyAttributes(arg0: Name, arg1: number, arg2: Attributes): void;

modifyAttributes(arg0: String, arg1: ModificationItem[]): void;

modifyAttributes(arg0: Name, arg1: ModificationItem[]): void;

bind(arg0: String, arg1: Object, arg2: Attributes): void;

bind(arg0: Name, arg1: Object, arg2: Attributes): void;

rebind(arg0: String, arg1: Object, arg2: Attributes): void;

rebind(arg0: Name, arg1: Object, arg2: Attributes): void;

createSubcontext(arg0: String, arg1: Attributes): DirContext;

createSubcontext(arg0: Name, arg1: Attributes): DirContext;

getSchema(arg0: String): DirContext;

getSchema(arg0: Name): DirContext;

getSchemaClassDefinition(arg0: String): DirContext;

getSchemaClassDefinition(arg0: Name): DirContext;

search(arg0: String, arg1: Attributes): NamingEnumeration<SearchResult>;

search(arg0: Name, arg1: Attributes): NamingEnumeration<SearchResult>;

search(arg0: String, arg1: Attributes, arg2: String[]): NamingEnumeration<SearchResult>;

search(arg0: Name, arg1: Attributes, arg2: String[]): NamingEnumeration<SearchResult>;

search(arg0: String, arg1: String, arg2: SearchControls): NamingEnumeration<SearchResult>;

search(arg0: Name, arg1: String, arg2: SearchControls): NamingEnumeration<SearchResult>;

search(arg0: String, arg1: String, arg2: Object[], arg3: SearchControls): NamingEnumeration<SearchResult>;

search(arg0: Name, arg1: String, arg2: Object[], arg3: SearchControls): NamingEnumeration<SearchResult>;
 }

export class InvalidAttributeIdentifierException extends NamingException {
constructor(arg0: String);
constructor();
 }

export class InvalidAttributeValueException extends NamingException {
constructor(arg0: String);
constructor();
 }

export class InvalidAttributesException extends NamingException {
constructor(arg0: String);
constructor();
 }

export class InvalidSearchControlsException extends NamingException {
constructor();
constructor(arg0: String);
 }

export class InvalidSearchFilterException extends NamingException {
constructor();
constructor(arg0: String);
 }

export class ModificationItem implements Serializable {
constructor(arg0: number, arg1: Attribute);

getModificationOp(): number;

getAttribute(): Attribute;
toString(): string;
 }

export class NoSuchAttributeException extends NamingException {
constructor(arg0: String);
constructor();
 }

export class SchemaViolationException extends NamingException {
constructor();
constructor(arg0: String);
 }

export class SearchControls implements Serializable {
static OBJECT_SCOPE:number
static ONELEVEL_SCOPE:number
static SUBTREE_SCOPE:number
constructor();
constructor(arg0: number, arg1: number, arg2: number, arg3: String[], arg4: boolean, arg5: boolean);

getSearchScope(): number;

getTimeLimit(): number;

getDerefLinkFlag(): boolean;

getReturningObjFlag(): boolean;

getCountLimit(): number;

getReturningAttributes(): String[];

setSearchScope(arg0: number): void;

setTimeLimit(arg0: number): void;

setDerefLinkFlag(arg0: boolean): void;

setReturningObjFlag(arg0: boolean): void;

setCountLimit(arg0: number): void;

setReturningAttributes(arg0: String[]): void;
 }

export class SearchResult extends Binding {
constructor(arg0: String, arg1: Object, arg2: Attributes);
constructor(arg0: String, arg1: Object, arg2: Attributes, arg3: boolean);
constructor(arg0: String, arg1: String, arg2: Object, arg3: Attributes);
constructor(arg0: String, arg1: String, arg2: Object, arg3: Attributes, arg4: boolean);

getAttributes(): Attributes;

setAttributes(arg0: Attributes): void;
toString(): string;
 }

}
