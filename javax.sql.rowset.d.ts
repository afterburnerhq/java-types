/// <reference path="java.sql.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.sql.d.ts" />
/// <reference path="javax.sql.rowset.spi.d.ts" />
/// <reference path="java.math.d.ts" />
declare module '@afterburnerhq/javax.sql.rowset' { 
import { NClob, Blob, RowId, SQLException, Connection, Time, Savepoint, Timestamp, Date, Array, Ref, SQLXML, ResultSet, Clob } from '@afterburnerhq/java.sql'
import { ClassLoader, Cloneable, Class, String } from '@afterburnerhq/java.lang'
import { Map, Collection, Calendar } from '@afterburnerhq/java.util'
import { URL } from '@afterburnerhq/java.net'
import { Reader, Serializable, InputStream, Writer, OutputStream } from '@afterburnerhq/java.io'
import { RowSet, RowSetListener, RowSetMetaData, RowSetEvent } from '@afterburnerhq/javax.sql'
import { SyncProvider } from '@afterburnerhq/javax.sql.rowset.spi'
import { BigDecimal } from '@afterburnerhq/java.math'
export abstract class BaseRowSet implements Serializable, Cloneable {
static UNICODE_STREAM_PARAM:number
static BINARY_STREAM_PARAM:number
static ASCII_STREAM_PARAM:number
constructor();

addRowSetListener(arg0: RowSetListener): void;

removeRowSetListener(arg0: RowSetListener): void;

getCommand(): String;

setCommand(arg0: String): void;

getUrl(): String;

setUrl(arg0: String): void;

getDataSourceName(): String;

setDataSourceName(arg0: String): void;

getUsername(): String;

setUsername(arg0: String): void;

getPassword(): String;

setPassword(arg0: String): void;

setType(arg0: number): void;

getType(): number;

setConcurrency(arg0: number): void;

isReadOnly(): boolean;

setReadOnly(arg0: boolean): void;

getTransactionIsolation(): number;

setTransactionIsolation(arg0: number): void;

getTypeMap(): Map<String, Class<any>>;

setTypeMap(arg0: Map<String, Class<any>>): void;

getMaxFieldSize(): number;

setMaxFieldSize(arg0: number): void;

getMaxRows(): number;

setMaxRows(arg0: number): void;

setEscapeProcessing(arg0: boolean): void;

getQueryTimeout(): number;

setQueryTimeout(arg0: number): void;

getShowDeleted(): boolean;

setShowDeleted(arg0: boolean): void;

getEscapeProcessing(): boolean;

setFetchDirection(arg0: number): void;

getFetchDirection(): number;

setFetchSize(arg0: number): void;

getFetchSize(): number;

getConcurrency(): number;

setNull(arg0: number, arg1: number): void;

setNull(arg0: number, arg1: number, arg2: String): void;

setBoolean(arg0: number, arg1: boolean): void;

setByte(arg0: number, arg1: number): void;

setShort(arg0: number, arg1: number): void;

setInt(arg0: number, arg1: number): void;

setLong(arg0: number, arg1: number): void;

setFloat(arg0: number, arg1: number): void;

setDouble(arg0: number, arg1: number): void;

setBigDecimal(arg0: number, arg1: BigDecimal): void;

setString(arg0: number, arg1: String): void;

setBytes(arg0: number, arg1: number[]): void;

setDate(arg0: number, arg1: Date): void;

setTime(arg0: number, arg1: Time): void;

setTimestamp(arg0: number, arg1: Timestamp): void;

setAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;

setAsciiStream(arg0: number, arg1: InputStream): void;

setBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;

setBinaryStream(arg0: number, arg1: InputStream): void;

setUnicodeStream(arg0: number, arg1: InputStream, arg2: number): void;

setCharacterStream(arg0: number, arg1: Reader, arg2: number): void;

setCharacterStream(arg0: number, arg1: Reader): void;

setObject(arg0: number, arg1: Object, arg2: number, arg3: number): void;

setObject(arg0: number, arg1: Object, arg2: number): void;

setObject(arg0: number, arg1: Object): void;

setRef(arg0: number, arg1: Ref): void;

setBlob(arg0: number, arg1: Blob): void;

setClob(arg0: number, arg1: Clob): void;

setArray(arg0: number, arg1: Array): void;

setDate(arg0: number, arg1: Date, arg2: Calendar): void;

setTime(arg0: number, arg1: Time, arg2: Calendar): void;

setTimestamp(arg0: number, arg1: Timestamp, arg2: Calendar): void;

clearParameters(): void;

getParams(): Object[];

setNull(arg0: String, arg1: number): void;

setNull(arg0: String, arg1: number, arg2: String): void;

setBoolean(arg0: String, arg1: boolean): void;

setByte(arg0: String, arg1: number): void;

setShort(arg0: String, arg1: number): void;

setInt(arg0: String, arg1: number): void;

setLong(arg0: String, arg1: number): void;

setFloat(arg0: String, arg1: number): void;

setDouble(arg0: String, arg1: number): void;

setBigDecimal(arg0: String, arg1: BigDecimal): void;

setString(arg0: String, arg1: String): void;

setBytes(arg0: String, arg1: number[]): void;

setTimestamp(arg0: String, arg1: Timestamp): void;

setAsciiStream(arg0: String, arg1: InputStream, arg2: number): void;

setBinaryStream(arg0: String, arg1: InputStream, arg2: number): void;

setCharacterStream(arg0: String, arg1: Reader, arg2: number): void;

setAsciiStream(arg0: String, arg1: InputStream): void;

setBinaryStream(arg0: String, arg1: InputStream): void;

setCharacterStream(arg0: String, arg1: Reader): void;

setNCharacterStream(arg0: number, arg1: Reader): void;

setObject(arg0: String, arg1: Object, arg2: number, arg3: number): void;

setObject(arg0: String, arg1: Object, arg2: number): void;

setObject(arg0: String, arg1: Object): void;

setBlob(arg0: number, arg1: InputStream, arg2: number): void;

setBlob(arg0: number, arg1: InputStream): void;

setBlob(arg0: String, arg1: InputStream, arg2: number): void;

setBlob(arg0: String, arg1: Blob): void;

setBlob(arg0: String, arg1: InputStream): void;

setClob(arg0: number, arg1: Reader, arg2: number): void;

setClob(arg0: number, arg1: Reader): void;

setClob(arg0: String, arg1: Reader, arg2: number): void;

setClob(arg0: String, arg1: Clob): void;

setClob(arg0: String, arg1: Reader): void;

setDate(arg0: String, arg1: Date): void;

setDate(arg0: String, arg1: Date, arg2: Calendar): void;

setTime(arg0: String, arg1: Time): void;

setTime(arg0: String, arg1: Time, arg2: Calendar): void;

setTimestamp(arg0: String, arg1: Timestamp, arg2: Calendar): void;

setSQLXML(arg0: number, arg1: SQLXML): void;

setSQLXML(arg0: String, arg1: SQLXML): void;

setRowId(arg0: number, arg1: RowId): void;

setRowId(arg0: String, arg1: RowId): void;

setNString(arg0: number, arg1: String): void;

setNString(arg0: String, arg1: String): void;

setNCharacterStream(arg0: number, arg1: Reader, arg2: number): void;

setNCharacterStream(arg0: String, arg1: Reader, arg2: number): void;

setNCharacterStream(arg0: String, arg1: Reader): void;

setNClob(arg0: String, arg1: NClob): void;

setNClob(arg0: String, arg1: Reader, arg2: number): void;

setNClob(arg0: String, arg1: Reader): void;

setNClob(arg0: number, arg1: Reader, arg2: number): void;

setNClob(arg0: number, arg1: NClob): void;

setNClob(arg0: number, arg1: Reader): void;

setURL(arg0: number, arg1: URL): void;
 }

export namespace CachedRowSet { 
const COMMIT_ON_ACCEPT_CHANGES:boolean
}

export interface CachedRowSet extends RowSet, Joinable {
COMMIT_ON_ACCEPT_CHANGES:boolean

populate(arg0: ResultSet): void;

execute(arg0: Connection): void;

acceptChanges(): void;

acceptChanges(arg0: Connection): void;

restoreOriginal(): void;

release(): void;

undoDelete(): void;

undoInsert(): void;

undoUpdate(): void;

columnUpdated(arg0: number): boolean;

columnUpdated(arg0: String): boolean;

toCollection(): Collection<any>;

toCollection(arg0: number): Collection<any>;

toCollection(arg0: String): Collection<any>;

getSyncProvider(): SyncProvider;

setSyncProvider(arg0: String): void;

size(): number;

setMetaData(arg0: RowSetMetaData): void;

getOriginal(): ResultSet;

getOriginalRow(): ResultSet;

setOriginalRow(): void;

getTableName(): String;

setTableName(arg0: String): void;

getKeyColumns(): number[];

setKeyColumns(arg0: number[]): void;

createShared(): RowSet;

createCopy(): CachedRowSet;

createCopySchema(): CachedRowSet;

createCopyNoConstraints(): CachedRowSet;

getRowSetWarnings(): RowSetWarning;

getShowDeleted(): boolean;

setShowDeleted(arg0: boolean): void;

commit(): void;

rollback(): void;

rollback(arg0: Savepoint): void;

rowSetPopulated(arg0: RowSetEvent, arg1: number): void;

populate(arg0: ResultSet, arg1: number): void;

setPageSize(arg0: number): void;

getPageSize(): number;

nextPage(): boolean;

previousPage(): boolean;
 }

export interface FilteredRowSet extends WebRowSet {

setFilter(arg0: Predicate): void;

getFilter(): Predicate;
 }

export interface JdbcRowSet extends RowSet, Joinable {

getShowDeleted(): boolean;

setShowDeleted(arg0: boolean): void;

getRowSetWarnings(): RowSetWarning;

commit(): void;

getAutoCommit(): boolean;

setAutoCommit(arg0: boolean): void;

rollback(): void;

rollback(arg0: Savepoint): void;
 }

export namespace JoinRowSet { 
const CROSS_JOIN:number
const INNER_JOIN:number
const LEFT_OUTER_JOIN:number
const RIGHT_OUTER_JOIN:number
const FULL_JOIN:number
}

export interface JoinRowSet extends WebRowSet {
CROSS_JOIN:number
INNER_JOIN:number
LEFT_OUTER_JOIN:number
RIGHT_OUTER_JOIN:number
FULL_JOIN:number

addRowSet(arg0: Joinable): void;

addRowSet(arg0: RowSet, arg1: number): void;

addRowSet(arg0: RowSet, arg1: String): void;

addRowSet(arg0: RowSet[], arg1: number[]): void;

addRowSet(arg0: RowSet[], arg1: String[]): void;

getRowSets(): Collection<any>;

getRowSetNames(): String[];

toCachedRowSet(): CachedRowSet;

supportsCrossJoin(): boolean;

supportsInnerJoin(): boolean;

supportsLeftOuterJoin(): boolean;

supportsRightOuterJoin(): boolean;

supportsFullJoin(): boolean;

setJoinType(arg0: number): void;

getWhereClause(): String;

getJoinType(): number;
 }

export interface Joinable {

setMatchColumn(arg0: number): void;

setMatchColumn(arg0: number[]): void;

setMatchColumn(arg0: String): void;

setMatchColumn(arg0: String[]): void;

getMatchColumnIndexes(): number[];

getMatchColumnNames(): String[];

unsetMatchColumn(arg0: number): void;

unsetMatchColumn(arg0: number[]): void;

unsetMatchColumn(arg0: String): void;

unsetMatchColumn(arg0: String[]): void;
 }

export interface Predicate {

evaluate(arg0: RowSet): boolean;

evaluate(arg0: Object, arg1: number): boolean;

evaluate(arg0: Object, arg1: String): boolean;
 }

export interface RowSetFactory {

createCachedRowSet(): CachedRowSet;

createFilteredRowSet(): FilteredRowSet;

createJdbcRowSet(): JdbcRowSet;

createJoinRowSet(): JoinRowSet;

createWebRowSet(): WebRowSet;
 }

export class RowSetMetaDataImpl implements RowSetMetaData, Serializable {
constructor();

setColumnCount(arg0: number): void;

setAutoIncrement(arg0: number, arg1: boolean): void;

setCaseSensitive(arg0: number, arg1: boolean): void;

setSearchable(arg0: number, arg1: boolean): void;

setCurrency(arg0: number, arg1: boolean): void;

setNullable(arg0: number, arg1: number): void;

setSigned(arg0: number, arg1: boolean): void;

setColumnDisplaySize(arg0: number, arg1: number): void;

setColumnLabel(arg0: number, arg1: String): void;

setColumnName(arg0: number, arg1: String): void;

setSchemaName(arg0: number, arg1: String): void;

setPrecision(arg0: number, arg1: number): void;

setScale(arg0: number, arg1: number): void;

setTableName(arg0: number, arg1: String): void;

setCatalogName(arg0: number, arg1: String): void;

setColumnType(arg0: number, arg1: number): void;

setColumnTypeName(arg0: number, arg1: String): void;

getColumnCount(): number;

isAutoIncrement(arg0: number): boolean;

isCaseSensitive(arg0: number): boolean;

isSearchable(arg0: number): boolean;

isCurrency(arg0: number): boolean;

isNullable(arg0: number): number;

isSigned(arg0: number): boolean;

getColumnDisplaySize(arg0: number): number;

getColumnLabel(arg0: number): String;

getColumnName(arg0: number): String;

getSchemaName(arg0: number): String;

getPrecision(arg0: number): number;

getScale(arg0: number): number;

getTableName(arg0: number): String;

getCatalogName(arg0: number): String;

getColumnType(arg0: number): number;

getColumnTypeName(arg0: number): String;

isReadOnly(arg0: number): boolean;

isWritable(arg0: number): boolean;

isDefinitelyWritable(arg0: number): boolean;

getColumnClassName(arg0: number): String;

unwrap<T extends Object>(arg0: Class<T>): T;

isWrapperFor(arg0: Class<any>): boolean;
 }

export class RowSetProvider {

static newFactory(): RowSetFactory;

static newFactory(arg0: String, arg1: ClassLoader): RowSetFactory;
 }

export interface RowSetWarning { }
export class RowSetWarning extends SQLException {
constructor(arg0: String);
constructor();
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: String, arg2: number);

getNextWarning(): RowSetWarning;

setNextWarning(arg0: RowSetWarning): void;
 }

export namespace WebRowSet { 
const PUBLIC_XML_SCHEMA:String
const SCHEMA_SYSTEM_ID:String
}

export interface WebRowSet extends CachedRowSet {
PUBLIC_XML_SCHEMA:String
SCHEMA_SYSTEM_ID:String

readXml(arg0: Reader): void;

readXml(arg0: InputStream): void;

writeXml(arg0: ResultSet, arg1: Writer): void;

writeXml(arg0: ResultSet, arg1: OutputStream): void;

writeXml(arg0: Writer): void;

writeXml(arg0: OutputStream): void;
 }

}
