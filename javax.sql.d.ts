/// <reference path="java.util.logging.d.ts" />
/// <reference path="java.sql.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.transaction.xa.d.ts" />
/// <reference path="java.math.d.ts" />
declare module '@afterburnerhq/javax.sql' { 
import { Logger } from '@afterburnerhq/java.util.logging'
import { Wrapper, NClob, Blob, RowId, SQLException, Connection, ConnectionBuilder, Time, PreparedStatement, Timestamp, Date, ShardingKeyBuilder, Array, ResultSetMetaData, ShardingKey, Ref, SQLXML, ResultSet, Clob } from '@afterburnerhq/java.sql'
import { EventListener, Map, EventObject, Calendar } from '@afterburnerhq/java.util'
import { Class, String } from '@afterburnerhq/java.lang'
import { URL } from '@afterburnerhq/java.net'
import { Reader, InputStream, PrintWriter } from '@afterburnerhq/java.io'
import { XAResource } from '@afterburnerhq/javax.transaction.xa'
import { BigDecimal } from '@afterburnerhq/java.math'
export interface CommonDataSource {

getLogWriter(): PrintWriter;

setLogWriter(arg0: PrintWriter): void;

setLoginTimeout(arg0: number): void;

getLoginTimeout(): number;

getParentLogger(): Logger;

/* default */ createShardingKeyBuilder(): ShardingKeyBuilder;
 }

export class ConnectionEvent extends EventObject {
constructor(arg0: PooledConnection);
constructor(arg0: PooledConnection, arg1: SQLException);

getSQLException(): SQLException;
 }

export interface ConnectionEventListener extends EventListener {

connectionClosed(arg0: ConnectionEvent): void;

connectionErrorOccurred(arg0: ConnectionEvent): void;
 }

export interface ConnectionPoolDataSource extends CommonDataSource {

getPooledConnection(): PooledConnection;

getPooledConnection(arg0: String, arg1: String): PooledConnection;

getLogWriter(): PrintWriter;

setLogWriter(arg0: PrintWriter): void;

setLoginTimeout(arg0: number): void;

getLoginTimeout(): number;

/* default */ createPooledConnectionBuilder(): PooledConnectionBuilder;
 }

export interface DataSource extends CommonDataSource, Wrapper {

getConnection(): Connection;

getConnection(arg0: String, arg1: String): Connection;

getLogWriter(): PrintWriter;

setLogWriter(arg0: PrintWriter): void;

setLoginTimeout(arg0: number): void;

getLoginTimeout(): number;

/* default */ createConnectionBuilder(): ConnectionBuilder;
 }

export interface PooledConnection {

getConnection(): Connection;

close(): void;

addConnectionEventListener(arg0: ConnectionEventListener): void;

removeConnectionEventListener(arg0: ConnectionEventListener): void;

addStatementEventListener(arg0: StatementEventListener): void;

removeStatementEventListener(arg0: StatementEventListener): void;
 }

export interface PooledConnectionBuilder {

user(arg0: String): PooledConnectionBuilder;

password(arg0: String): PooledConnectionBuilder;

shardingKey(arg0: ShardingKey): PooledConnectionBuilder;

superShardingKey(arg0: ShardingKey): PooledConnectionBuilder;

build(): PooledConnection;
 }

export interface RowSet extends ResultSet {

getUrl(): String;

setUrl(arg0: String): void;

getDataSourceName(): String;

setDataSourceName(arg0: String): void;

getUsername(): String;

setUsername(arg0: String): void;

getPassword(): String;

setPassword(arg0: String): void;

getTransactionIsolation(): number;

setTransactionIsolation(arg0: number): void;

getTypeMap(): Map<String, Class<any>>;

setTypeMap(arg0: Map<String, Class<any>>): void;

getCommand(): String;

setCommand(arg0: String): void;

isReadOnly(): boolean;

setReadOnly(arg0: boolean): void;

getMaxFieldSize(): number;

setMaxFieldSize(arg0: number): void;

getMaxRows(): number;

setMaxRows(arg0: number): void;

getEscapeProcessing(): boolean;

setEscapeProcessing(arg0: boolean): void;

getQueryTimeout(): number;

setQueryTimeout(arg0: number): void;

setType(arg0: number): void;

setConcurrency(arg0: number): void;

setNull(arg0: number, arg1: number): void;

setNull(arg0: String, arg1: number): void;

setNull(arg0: number, arg1: number, arg2: String): void;

setNull(arg0: String, arg1: number, arg2: String): void;

setBoolean(arg0: number, arg1: boolean): void;

setBoolean(arg0: String, arg1: boolean): void;

setByte(arg0: number, arg1: number): void;

setByte(arg0: String, arg1: number): void;

setShort(arg0: number, arg1: number): void;

setShort(arg0: String, arg1: number): void;

setInt(arg0: number, arg1: number): void;

setInt(arg0: String, arg1: number): void;

setLong(arg0: number, arg1: number): void;

setLong(arg0: String, arg1: number): void;

setFloat(arg0: number, arg1: number): void;

setFloat(arg0: String, arg1: number): void;

setDouble(arg0: number, arg1: number): void;

setDouble(arg0: String, arg1: number): void;

setBigDecimal(arg0: number, arg1: BigDecimal): void;

setBigDecimal(arg0: String, arg1: BigDecimal): void;

setString(arg0: number, arg1: String): void;

setString(arg0: String, arg1: String): void;

setBytes(arg0: number, arg1: number[]): void;

setBytes(arg0: String, arg1: number[]): void;

setDate(arg0: number, arg1: Date): void;

setTime(arg0: number, arg1: Time): void;

setTimestamp(arg0: number, arg1: Timestamp): void;

setTimestamp(arg0: String, arg1: Timestamp): void;

setAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;

setAsciiStream(arg0: String, arg1: InputStream, arg2: number): void;

setBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;

setBinaryStream(arg0: String, arg1: InputStream, arg2: number): void;

setCharacterStream(arg0: number, arg1: Reader, arg2: number): void;

setCharacterStream(arg0: String, arg1: Reader, arg2: number): void;

setAsciiStream(arg0: number, arg1: InputStream): void;

setAsciiStream(arg0: String, arg1: InputStream): void;

setBinaryStream(arg0: number, arg1: InputStream): void;

setBinaryStream(arg0: String, arg1: InputStream): void;

setCharacterStream(arg0: number, arg1: Reader): void;

setCharacterStream(arg0: String, arg1: Reader): void;

setNCharacterStream(arg0: number, arg1: Reader): void;

setObject(arg0: number, arg1: Object, arg2: number, arg3: number): void;

setObject(arg0: String, arg1: Object, arg2: number, arg3: number): void;

setObject(arg0: number, arg1: Object, arg2: number): void;

setObject(arg0: String, arg1: Object, arg2: number): void;

setObject(arg0: String, arg1: Object): void;

setObject(arg0: number, arg1: Object): void;

setRef(arg0: number, arg1: Ref): void;

setBlob(arg0: number, arg1: Blob): void;

setBlob(arg0: number, arg1: InputStream, arg2: number): void;

setBlob(arg0: number, arg1: InputStream): void;

setBlob(arg0: String, arg1: InputStream, arg2: number): void;

setBlob(arg0: String, arg1: Blob): void;

setBlob(arg0: String, arg1: InputStream): void;

setClob(arg0: number, arg1: Clob): void;

setClob(arg0: number, arg1: Reader, arg2: number): void;

setClob(arg0: number, arg1: Reader): void;

setClob(arg0: String, arg1: Reader, arg2: number): void;

setClob(arg0: String, arg1: Clob): void;

setClob(arg0: String, arg1: Reader): void;

setArray(arg0: number, arg1: Array): void;

setDate(arg0: number, arg1: Date, arg2: Calendar): void;

setDate(arg0: String, arg1: Date): void;

setDate(arg0: String, arg1: Date, arg2: Calendar): void;

setTime(arg0: number, arg1: Time, arg2: Calendar): void;

setTime(arg0: String, arg1: Time): void;

setTime(arg0: String, arg1: Time, arg2: Calendar): void;

setTimestamp(arg0: number, arg1: Timestamp, arg2: Calendar): void;

setTimestamp(arg0: String, arg1: Timestamp, arg2: Calendar): void;

clearParameters(): void;

execute(): void;

addRowSetListener(arg0: RowSetListener): void;

removeRowSetListener(arg0: RowSetListener): void;

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

export class RowSetEvent extends EventObject {
constructor(arg0: RowSet);
 }

export interface RowSetInternal {

getParams(): Object[];

getConnection(): Connection;

setMetaData(arg0: RowSetMetaData): void;

getOriginal(): ResultSet;

getOriginalRow(): ResultSet;
 }

export interface RowSetListener extends EventListener {

rowSetChanged(arg0: RowSetEvent): void;

rowChanged(arg0: RowSetEvent): void;

cursorMoved(arg0: RowSetEvent): void;
 }

export interface RowSetMetaData extends ResultSetMetaData {

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
 }

export interface RowSetReader {

readData(arg0: RowSetInternal): void;
 }

export interface RowSetWriter {

writeData(arg0: RowSetInternal): boolean;
 }

export class StatementEvent extends EventObject {
constructor(arg0: PooledConnection, arg1: PreparedStatement);
constructor(arg0: PooledConnection, arg1: PreparedStatement, arg2: SQLException);

getStatement(): PreparedStatement;

getSQLException(): SQLException;
 }

export interface StatementEventListener extends EventListener {

statementClosed(arg0: StatementEvent): void;

statementErrorOccurred(arg0: StatementEvent): void;
 }

export interface XAConnection extends PooledConnection {

getXAResource(): XAResource;
 }

export interface XAConnectionBuilder {

user(arg0: String): XAConnectionBuilder;

password(arg0: String): XAConnectionBuilder;

shardingKey(arg0: ShardingKey): XAConnectionBuilder;

superShardingKey(arg0: ShardingKey): XAConnectionBuilder;

build(): XAConnection;
 }

export interface XADataSource extends CommonDataSource {

getXAConnection(): XAConnection;

getXAConnection(arg0: String, arg1: String): XAConnection;

getLogWriter(): PrintWriter;

setLogWriter(arg0: PrintWriter): void;

setLoginTimeout(arg0: number): void;

getLoginTimeout(): number;

/* default */ createXAConnectionBuilder(): XAConnectionBuilder;
 }

}
