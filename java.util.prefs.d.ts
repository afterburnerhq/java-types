/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/java.util.prefs' { 
import { Throwable, Class, String, Exception } from '@afterburnerhq/java.lang'
import { EventObject, EventListener } from '@afterburnerhq/java.util'
import { InputStream, OutputStream } from '@afterburnerhq/java.io'
export abstract class AbstractPreferences extends Preferences {

put(arg0: String, arg1: String): void;

get(arg0: String, arg1: String): String;

remove(arg0: String): void;

clear(): void;

putInt(arg0: String, arg1: number): void;

getInt(arg0: String, arg1: number): number;

putLong(arg0: String, arg1: number): void;

getLong(arg0: String, arg1: number): number;

putBoolean(arg0: String, arg1: boolean): void;

getBoolean(arg0: String, arg1: boolean): boolean;

putFloat(arg0: String, arg1: number): void;

getFloat(arg0: String, arg1: number): number;

putDouble(arg0: String, arg1: number): void;

getDouble(arg0: String, arg1: number): number;

putByteArray(arg0: String, arg1: number[]): void;

getByteArray(arg0: String, arg1: number[]): number[];

keys(): String[];

childrenNames(): String[];

parent(): Preferences;

node(arg0: String): Preferences;

nodeExists(arg0: String): boolean;

removeNode(): void;

name(): String;

absolutePath(): String;

isUserNode(): boolean;

addPreferenceChangeListener(arg0: PreferenceChangeListener): void;

removePreferenceChangeListener(arg0: PreferenceChangeListener): void;

addNodeChangeListener(arg0: NodeChangeListener): void;

removeNodeChangeListener(arg0: NodeChangeListener): void;
toString(): string;

sync(): void;

flush(): void;

exportNode(arg0: OutputStream): void;

exportSubtree(arg0: OutputStream): void;
 }

export class BackingStoreException extends Exception {
constructor(arg0: String);
constructor(arg0: Throwable);
 }

export class InvalidPreferencesFormatException extends Exception {
constructor(arg0: Throwable);
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
 }

export class NodeChangeEvent extends EventObject {
constructor(arg0: Preferences, arg1: Preferences);

getParent(): Preferences;

getChild(): Preferences;
 }

export interface NodeChangeListener extends EventListener {

childAdded(arg0: NodeChangeEvent): void;

childRemoved(arg0: NodeChangeEvent): void;
 }

export class PreferenceChangeEvent extends EventObject {
constructor(arg0: Preferences, arg1: String, arg2: String);

getNode(): Preferences;

getKey(): String;

getNewValue(): String;
 }

export interface PreferenceChangeListener extends EventListener {

preferenceChange(arg0: PreferenceChangeEvent): void;
 }

export abstract class Preferences {
static MAX_KEY_LENGTH:number
static MAX_VALUE_LENGTH:number
static MAX_NAME_LENGTH:number

static userNodeForPackage(arg0: Class<any>): Preferences;

static systemNodeForPackage(arg0: Class<any>): Preferences;

static userRoot(): Preferences;

static systemRoot(): Preferences;

abstract put(arg0: String, arg1: String): void;

abstract get(arg0: String, arg1: String): String;

abstract remove(arg0: String): void;

abstract clear(): void;

abstract putInt(arg0: String, arg1: number): void;

abstract getInt(arg0: String, arg1: number): number;

abstract putLong(arg0: String, arg1: number): void;

abstract getLong(arg0: String, arg1: number): number;

abstract putBoolean(arg0: String, arg1: boolean): void;

abstract getBoolean(arg0: String, arg1: boolean): boolean;

abstract putFloat(arg0: String, arg1: number): void;

abstract getFloat(arg0: String, arg1: number): number;

abstract putDouble(arg0: String, arg1: number): void;

abstract getDouble(arg0: String, arg1: number): number;

abstract putByteArray(arg0: String, arg1: number[]): void;

abstract getByteArray(arg0: String, arg1: number[]): number[];

abstract keys(): String[];

abstract childrenNames(): String[];

abstract parent(): Preferences;

abstract node(arg0: String): Preferences;

abstract nodeExists(arg0: String): boolean;

abstract removeNode(): void;

abstract name(): String;

abstract absolutePath(): String;

abstract isUserNode(): boolean;
toString(): string;

abstract flush(): void;

abstract sync(): void;

abstract addPreferenceChangeListener(arg0: PreferenceChangeListener): void;

abstract removePreferenceChangeListener(arg0: PreferenceChangeListener): void;

abstract addNodeChangeListener(arg0: NodeChangeListener): void;

abstract removeNodeChangeListener(arg0: NodeChangeListener): void;

abstract exportNode(arg0: OutputStream): void;

abstract exportSubtree(arg0: OutputStream): void;

static importPreferences(arg0: InputStream): void;
 }

export interface PreferencesFactory {

systemRoot(): Preferences;

userRoot(): Preferences;
 }

}
