/// <reference path="java.util.logging.d.ts" />
/// <reference path="java.sql.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="javax.sql.rowset.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.naming.d.ts" />
/// <reference path="javax.sql.d.ts" />
declare module '@afterburnerhq/javax.sql.rowset.spi' { 
import { Logger, Level } from '@afterburnerhq/java.util.logging'
import { SQLException, Savepoint } from '@afterburnerhq/java.sql'
import { String } from '@afterburnerhq/java.lang'
import { Enumeration } from '@afterburnerhq/java.util'
import { WebRowSet } from '@afterburnerhq/javax.sql.rowset'
import { Reader, Writer } from '@afterburnerhq/java.io'
import { Context } from '@afterburnerhq/javax.naming'
import { RowSetReader, RowSetWriter, RowSet } from '@afterburnerhq/javax.sql'
export class SyncFactory {
static ROWSET_SYNC_PROVIDER:String
static ROWSET_SYNC_VENDOR:String
static ROWSET_SYNC_PROVIDER_VERSION:String

static registerProvider(arg0: String): void;

static getSyncFactory(): SyncFactory;

static unregisterProvider(arg0: String): void;

static getInstance(arg0: String): SyncProvider;

static getRegisteredProviders(): Enumeration<SyncProvider>;

static setLogger(arg0: Logger): void;

static setLogger(arg0: Logger, arg1: Level): void;

static getLogger(): Logger;

static setJNDIContext(arg0: Context): void;
 }

export interface SyncFactoryException { }
export class SyncFactoryException extends SQLException {
constructor();
constructor(arg0: String);
 }

export abstract class SyncProvider {
static GRADE_NONE:number
static GRADE_CHECK_MODIFIED_AT_COMMIT:number
static GRADE_CHECK_ALL_AT_COMMIT:number
static GRADE_LOCK_WHEN_MODIFIED:number
static GRADE_LOCK_WHEN_LOADED:number
static DATASOURCE_NO_LOCK:number
static DATASOURCE_ROW_LOCK:number
static DATASOURCE_TABLE_LOCK:number
static DATASOURCE_DB_LOCK:number
static UPDATABLE_VIEW_SYNC:number
static NONUPDATABLE_VIEW_SYNC:number
constructor();

abstract getProviderID(): String;

abstract getRowSetReader(): RowSetReader;

abstract getRowSetWriter(): RowSetWriter;

abstract getProviderGrade(): number;

abstract setDataSourceLock(arg0: number): void;

abstract getDataSourceLock(): number;

abstract supportsUpdatableView(): number;

abstract getVersion(): String;

abstract getVendor(): String;
 }

export interface SyncProviderException { }
export class SyncProviderException extends SQLException {
constructor();
constructor(arg0: String);
constructor(arg0: SyncResolver);

getSyncResolver(): SyncResolver;

setSyncResolver(arg0: SyncResolver): void;
 }

export namespace SyncResolver { 
const UPDATE_ROW_CONFLICT:number
const DELETE_ROW_CONFLICT:number
const INSERT_ROW_CONFLICT:number
const NO_ROW_CONFLICT:number
}

export interface SyncResolver extends RowSet {
UPDATE_ROW_CONFLICT:number
DELETE_ROW_CONFLICT:number
INSERT_ROW_CONFLICT:number
NO_ROW_CONFLICT:number

getStatus(): number;

getConflictValue(arg0: number): Object;

getConflictValue(arg0: String): Object;

setResolvedValue(arg0: number, arg1: Object): void;

setResolvedValue(arg0: String, arg1: Object): void;

nextConflict(): boolean;

previousConflict(): boolean;
 }

export interface TransactionalWriter extends RowSetWriter {

commit(): void;

rollback(): void;

rollback(arg0: Savepoint): void;
 }

export interface XmlReader extends RowSetReader {

readXML(arg0: WebRowSet, arg1: Reader): void;
 }

export interface XmlWriter extends RowSetWriter {

writeXML(arg0: WebRowSet, arg1: Writer): void;
 }

}
