/// <reference path="java.util.logging.d.ts" />
/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.time.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.util.concurrent.d.ts" />
/// <reference path="java.util.stream.d.ts" />
/// <reference path="java.math.d.ts" />
/// <reference path="javax.xml.transform.d.ts" />
declare module '@afterburnerhq/java.sql' { 
import { Logger } from '@afterburnerhq/java.util.logging'
import { BasicPermission } from '@afterburnerhq/java.security'
import { Enum, Integer, Iterable, AutoCloseable, Throwable, Class, String, Exception } from '@afterburnerhq/java.lang'
import { Iterator, Enumeration, Properties, Map, Date, Calendar } from '@afterburnerhq/java.util'
import { LocalDateTime, LocalTime, LocalDate, Instant } from '@afterburnerhq/java.time'
import { URL } from '@afterburnerhq/java.net'
import { Reader, PrintStream, InputStream, Writer, OutputStream, PrintWriter } from '@afterburnerhq/java.io'
import { Executor } from '@afterburnerhq/java.util.concurrent'
import { Stream } from '@afterburnerhq/java.util.stream'
import { BigDecimal } from '@afterburnerhq/java.math'
import { Source, Result } from '@afterburnerhq/javax.xml.transform'
export interface Array {

getBaseTypeName(): String;

getBaseType(): number;

getArray(): Object;

getArray(arg0: Map<String, Class<any>>): Object;

getArray(arg0: number, arg1: number): Object;

getArray(arg0: number, arg1: number, arg2: Map<String, Class<any>>): Object;

getResultSet(): ResultSet;

getResultSet(arg0: Map<String, Class<any>>): ResultSet;

getResultSet(arg0: number, arg1: number): ResultSet;

getResultSet(arg0: number, arg1: number, arg2: Map<String, Class<any>>): ResultSet;

free(): void;
 }

export interface BatchUpdateException { }
export class BatchUpdateException extends SQLException {
constructor(arg0: String, arg1: String, arg2: number, arg3: number[]);
constructor(arg0: String, arg1: String, arg2: number[]);
constructor(arg0: String, arg1: number[]);
constructor(arg0: number[]);
constructor();
constructor(arg0: Throwable);
constructor(arg0: number[], arg1: Throwable);
constructor(arg0: String, arg1: number[], arg2: Throwable);
constructor(arg0: String, arg1: String, arg2: number[], arg3: Throwable);
constructor(arg0: String, arg1: String, arg2: number, arg3: number[], arg4: Throwable);
constructor(arg0: String, arg1: String, arg2: number, arg3: number[], arg4: Throwable);

getUpdateCounts(): number[];

getLargeUpdateCounts(): number[];
 }

export interface Blob {

length(): number;

getBytes(arg0: number, arg1: number): number[];

getBinaryStream(): InputStream;

position(arg0: number[], arg1: number): number;

position(arg0: Blob, arg1: number): number;

setBytes(arg0: number, arg1: number[]): number;

setBytes(arg0: number, arg1: number[], arg2: number, arg3: number): number;

setBinaryStream(arg0: number): OutputStream;

truncate(arg0: number): void;

free(): void;

getBinaryStream(arg0: number, arg1: number): InputStream;
 }

export interface CallableStatement extends PreparedStatement {

registerOutParameter(arg0: number, arg1: number): void;

registerOutParameter(arg0: number, arg1: number, arg2: number): void;

wasNull(): boolean;

getString(arg0: number): String;

getBoolean(arg0: number): boolean;

getByte(arg0: number): number;

getShort(arg0: number): number;

getInt(arg0: number): number;

getLong(arg0: number): number;

getFloat(arg0: number): number;

getDouble(arg0: number): number;

getBigDecimal(arg0: number, arg1: number): BigDecimal;

getBytes(arg0: number): number[];

getDate(arg0: number): Date;

getTime(arg0: number): Time;

getTimestamp(arg0: number): Timestamp;

getObject(arg0: number): Object;

getBigDecimal(arg0: number): BigDecimal;

getObject(arg0: number, arg1: Map<String, Class<any>>): Object;

getRef(arg0: number): Ref;

getBlob(arg0: number): Blob;

getClob(arg0: number): Clob;

getArray(arg0: number): Array;

getDate(arg0: number, arg1: Calendar): Date;

getTime(arg0: number, arg1: Calendar): Time;

getTimestamp(arg0: number, arg1: Calendar): Timestamp;

registerOutParameter(arg0: number, arg1: number, arg2: String): void;

registerOutParameter(arg0: String, arg1: number): void;

registerOutParameter(arg0: String, arg1: number, arg2: number): void;

registerOutParameter(arg0: String, arg1: number, arg2: String): void;

getURL(arg0: number): URL;

setURL(arg0: String, arg1: URL): void;

setNull(arg0: String, arg1: number): void;

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

setDate(arg0: String, arg1: Date): void;

setTime(arg0: String, arg1: Time): void;

setTimestamp(arg0: String, arg1: Timestamp): void;

setAsciiStream(arg0: String, arg1: InputStream, arg2: number): void;

setBinaryStream(arg0: String, arg1: InputStream, arg2: number): void;

setObject(arg0: String, arg1: Object, arg2: number, arg3: number): void;

setObject(arg0: String, arg1: Object, arg2: number): void;

setObject(arg0: String, arg1: Object): void;

setCharacterStream(arg0: String, arg1: Reader, arg2: number): void;

setDate(arg0: String, arg1: Date, arg2: Calendar): void;

setTime(arg0: String, arg1: Time, arg2: Calendar): void;

setTimestamp(arg0: String, arg1: Timestamp, arg2: Calendar): void;

setNull(arg0: String, arg1: number, arg2: String): void;

getString(arg0: String): String;

getBoolean(arg0: String): boolean;

getByte(arg0: String): number;

getShort(arg0: String): number;

getInt(arg0: String): number;

getLong(arg0: String): number;

getFloat(arg0: String): number;

getDouble(arg0: String): number;

getBytes(arg0: String): number[];

getDate(arg0: String): Date;

getTime(arg0: String): Time;

getTimestamp(arg0: String): Timestamp;

getObject(arg0: String): Object;

getBigDecimal(arg0: String): BigDecimal;

getObject(arg0: String, arg1: Map<String, Class<any>>): Object;

getRef(arg0: String): Ref;

getBlob(arg0: String): Blob;

getClob(arg0: String): Clob;

getArray(arg0: String): Array;

getDate(arg0: String, arg1: Calendar): Date;

getTime(arg0: String, arg1: Calendar): Time;

getTimestamp(arg0: String, arg1: Calendar): Timestamp;

getURL(arg0: String): URL;

getRowId(arg0: number): RowId;

getRowId(arg0: String): RowId;

setRowId(arg0: String, arg1: RowId): void;

setNString(arg0: String, arg1: String): void;

setNCharacterStream(arg0: String, arg1: Reader, arg2: number): void;

setNClob(arg0: String, arg1: NClob): void;

setClob(arg0: String, arg1: Reader, arg2: number): void;

setBlob(arg0: String, arg1: InputStream, arg2: number): void;

setNClob(arg0: String, arg1: Reader, arg2: number): void;

getNClob(arg0: number): NClob;

getNClob(arg0: String): NClob;

setSQLXML(arg0: String, arg1: SQLXML): void;

getSQLXML(arg0: number): SQLXML;

getSQLXML(arg0: String): SQLXML;

getNString(arg0: number): String;

getNString(arg0: String): String;

getNCharacterStream(arg0: number): Reader;

getNCharacterStream(arg0: String): Reader;

getCharacterStream(arg0: number): Reader;

getCharacterStream(arg0: String): Reader;

setBlob(arg0: String, arg1: Blob): void;

setClob(arg0: String, arg1: Clob): void;

setAsciiStream(arg0: String, arg1: InputStream, arg2: number): void;

setBinaryStream(arg0: String, arg1: InputStream, arg2: number): void;

setCharacterStream(arg0: String, arg1: Reader, arg2: number): void;

setAsciiStream(arg0: String, arg1: InputStream): void;

setBinaryStream(arg0: String, arg1: InputStream): void;

setCharacterStream(arg0: String, arg1: Reader): void;

setNCharacterStream(arg0: String, arg1: Reader): void;

setClob(arg0: String, arg1: Reader): void;

setBlob(arg0: String, arg1: InputStream): void;

setNClob(arg0: String, arg1: Reader): void;

getObject<T extends Object>(arg0: number, arg1: Class<T>): T;

getObject<T extends Object>(arg0: String, arg1: Class<T>): T;

/* default */ setObject(arg0: String, arg1: Object, arg2: SQLType, arg3: number): void;

/* default */ setObject(arg0: String, arg1: Object, arg2: SQLType): void;

/* default */ registerOutParameter(arg0: number, arg1: SQLType): void;

/* default */ registerOutParameter(arg0: number, arg1: SQLType, arg2: number): void;

/* default */ registerOutParameter(arg0: number, arg1: SQLType, arg2: String): void;

/* default */ registerOutParameter(arg0: String, arg1: SQLType): void;

/* default */ registerOutParameter(arg0: String, arg1: SQLType, arg2: number): void;

/* default */ registerOutParameter(arg0: String, arg1: SQLType, arg2: String): void;
 }

export class ClientInfoStatus extends Enum<ClientInfoStatus> {
static REASON_UNKNOWN:ClientInfoStatus
static REASON_UNKNOWN_PROPERTY:ClientInfoStatus
static REASON_VALUE_INVALID:ClientInfoStatus
static REASON_VALUE_TRUNCATED:ClientInfoStatus

static values(): ClientInfoStatus[];

static valueOf(arg0: String): ClientInfoStatus;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export interface Clob {

length(): number;

getSubString(arg0: number, arg1: number): String;

getCharacterStream(): Reader;

getAsciiStream(): InputStream;

position(arg0: String, arg1: number): number;

position(arg0: Clob, arg1: number): number;

setString(arg0: number, arg1: String): number;

setString(arg0: number, arg1: String, arg2: number, arg3: number): number;

setAsciiStream(arg0: number): OutputStream;

setCharacterStream(arg0: number): Writer;

truncate(arg0: number): void;

free(): void;

getCharacterStream(arg0: number, arg1: number): Reader;
 }

export namespace Connection { 
const TRANSACTION_NONE:number
const TRANSACTION_READ_UNCOMMITTED:number
const TRANSACTION_READ_COMMITTED:number
const TRANSACTION_REPEATABLE_READ:number
const TRANSACTION_SERIALIZABLE:number
}

export interface Connection extends Wrapper, AutoCloseable {
TRANSACTION_NONE:number
TRANSACTION_READ_UNCOMMITTED:number
TRANSACTION_READ_COMMITTED:number
TRANSACTION_REPEATABLE_READ:number
TRANSACTION_SERIALIZABLE:number

createStatement(): Statement;

prepareStatement(arg0: String): PreparedStatement;

prepareCall(arg0: String): CallableStatement;

nativeSQL(arg0: String): String;

setAutoCommit(arg0: boolean): void;

getAutoCommit(): boolean;

commit(): void;

rollback(): void;

close(): void;

isClosed(): boolean;

getMetaData(): DatabaseMetaData;

setReadOnly(arg0: boolean): void;

isReadOnly(): boolean;

setCatalog(arg0: String): void;

getCatalog(): String;

setTransactionIsolation(arg0: number): void;

getTransactionIsolation(): number;

getWarnings(): SQLWarning;

clearWarnings(): void;

createStatement(arg0: number, arg1: number): Statement;

prepareStatement(arg0: String, arg1: number, arg2: number): PreparedStatement;

prepareCall(arg0: String, arg1: number, arg2: number): CallableStatement;

getTypeMap(): Map<String, Class<any>>;

setTypeMap(arg0: Map<String, Class<any>>): void;

setHoldability(arg0: number): void;

getHoldability(): number;

setSavepoint(): Savepoint;

setSavepoint(arg0: String): Savepoint;

rollback(arg0: Savepoint): void;

releaseSavepoint(arg0: Savepoint): void;

createStatement(arg0: number, arg1: number, arg2: number): Statement;

prepareStatement(arg0: String, arg1: number, arg2: number, arg3: number): PreparedStatement;

prepareCall(arg0: String, arg1: number, arg2: number, arg3: number): CallableStatement;

prepareStatement(arg0: String, arg1: number): PreparedStatement;

prepareStatement(arg0: String, arg1: number[]): PreparedStatement;

prepareStatement(arg0: String, arg1: String[]): PreparedStatement;

createClob(): Clob;

createBlob(): Blob;

createNClob(): NClob;

createSQLXML(): SQLXML;

isValid(arg0: number): boolean;

setClientInfo(arg0: String, arg1: String): void;

setClientInfo(arg0: Properties): void;

getClientInfo(arg0: String): String;

getClientInfo(): Properties;

createArrayOf(arg0: String, arg1: Object[]): Array;

createStruct(arg0: String, arg1: Object[]): Struct;

setSchema(arg0: String): void;

getSchema(): String;

abort(arg0: Executor): void;

setNetworkTimeout(arg0: Executor, arg1: number): void;

getNetworkTimeout(): number;

/* default */ beginRequest(): void;

/* default */ endRequest(): void;

/* default */ setShardingKeyIfValid(arg0: ShardingKey, arg1: ShardingKey, arg2: number): boolean;

/* default */ setShardingKeyIfValid(arg0: ShardingKey, arg1: number): boolean;

/* default */ setShardingKey(arg0: ShardingKey, arg1: ShardingKey): void;

/* default */ setShardingKey(arg0: ShardingKey): void;
 }

export interface ConnectionBuilder {

user(arg0: String): ConnectionBuilder;

password(arg0: String): ConnectionBuilder;

shardingKey(arg0: ShardingKey): ConnectionBuilder;

superShardingKey(arg0: ShardingKey): ConnectionBuilder;

build(): Connection;
 }

export interface DataTruncation { }
export class DataTruncation extends SQLWarning {
constructor(arg0: number, arg1: boolean, arg2: boolean, arg3: number, arg4: number);
constructor(arg0: number, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: Throwable);

getIndex(): number;

getParameter(): boolean;

getRead(): boolean;

getDataSize(): number;

getTransferSize(): number;
 }

export namespace DatabaseMetaData { 
const procedureResultUnknown:number
const procedureNoResult:number
const procedureReturnsResult:number
const procedureColumnUnknown:number
const procedureColumnIn:number
const procedureColumnInOut:number
const procedureColumnOut:number
const procedureColumnReturn:number
const procedureColumnResult:number
const procedureNoNulls:number
const procedureNullable:number
const procedureNullableUnknown:number
const columnNoNulls:number
const columnNullable:number
const columnNullableUnknown:number
const bestRowTemporary:number
const bestRowTransaction:number
const bestRowSession:number
const bestRowUnknown:number
const bestRowNotPseudo:number
const bestRowPseudo:number
const versionColumnUnknown:number
const versionColumnNotPseudo:number
const versionColumnPseudo:number
const importedKeyCascade:number
const importedKeyRestrict:number
const importedKeySetNull:number
const importedKeyNoAction:number
const importedKeySetDefault:number
const importedKeyInitiallyDeferred:number
const importedKeyInitiallyImmediate:number
const importedKeyNotDeferrable:number
const typeNoNulls:number
const typeNullable:number
const typeNullableUnknown:number
const typePredNone:number
const typePredChar:number
const typePredBasic:number
const typeSearchable:number
const tableIndexStatistic:number
const tableIndexClustered:number
const tableIndexHashed:number
const tableIndexOther:number
const attributeNoNulls:number
const attributeNullable:number
const attributeNullableUnknown:number
const sqlStateXOpen:number
const sqlStateSQL:number
const sqlStateSQL99:number
const functionColumnUnknown:number
const functionColumnIn:number
const functionColumnInOut:number
const functionColumnOut:number
const functionReturn:number
const functionColumnResult:number
const functionNoNulls:number
const functionNullable:number
const functionNullableUnknown:number
const functionResultUnknown:number
const functionNoTable:number
const functionReturnsTable:number
}

export interface DatabaseMetaData extends Wrapper {
procedureResultUnknown:number
procedureNoResult:number
procedureReturnsResult:number
procedureColumnUnknown:number
procedureColumnIn:number
procedureColumnInOut:number
procedureColumnOut:number
procedureColumnReturn:number
procedureColumnResult:number
procedureNoNulls:number
procedureNullable:number
procedureNullableUnknown:number
columnNoNulls:number
columnNullable:number
columnNullableUnknown:number
bestRowTemporary:number
bestRowTransaction:number
bestRowSession:number
bestRowUnknown:number
bestRowNotPseudo:number
bestRowPseudo:number
versionColumnUnknown:number
versionColumnNotPseudo:number
versionColumnPseudo:number
importedKeyCascade:number
importedKeyRestrict:number
importedKeySetNull:number
importedKeyNoAction:number
importedKeySetDefault:number
importedKeyInitiallyDeferred:number
importedKeyInitiallyImmediate:number
importedKeyNotDeferrable:number
typeNoNulls:number
typeNullable:number
typeNullableUnknown:number
typePredNone:number
typePredChar:number
typePredBasic:number
typeSearchable:number
tableIndexStatistic:number
tableIndexClustered:number
tableIndexHashed:number
tableIndexOther:number
attributeNoNulls:number
attributeNullable:number
attributeNullableUnknown:number
sqlStateXOpen:number
sqlStateSQL:number
sqlStateSQL99:number
functionColumnUnknown:number
functionColumnIn:number
functionColumnInOut:number
functionColumnOut:number
functionReturn:number
functionColumnResult:number
functionNoNulls:number
functionNullable:number
functionNullableUnknown:number
functionResultUnknown:number
functionNoTable:number
functionReturnsTable:number

allProceduresAreCallable(): boolean;

allTablesAreSelectable(): boolean;

getURL(): String;

getUserName(): String;

isReadOnly(): boolean;

nullsAreSortedHigh(): boolean;

nullsAreSortedLow(): boolean;

nullsAreSortedAtStart(): boolean;

nullsAreSortedAtEnd(): boolean;

getDatabaseProductName(): String;

getDatabaseProductVersion(): String;

getDriverName(): String;

getDriverVersion(): String;

getDriverMajorVersion(): number;

getDriverMinorVersion(): number;

usesLocalFiles(): boolean;

usesLocalFilePerTable(): boolean;

supportsMixedCaseIdentifiers(): boolean;

storesUpperCaseIdentifiers(): boolean;

storesLowerCaseIdentifiers(): boolean;

storesMixedCaseIdentifiers(): boolean;

supportsMixedCaseQuotedIdentifiers(): boolean;

storesUpperCaseQuotedIdentifiers(): boolean;

storesLowerCaseQuotedIdentifiers(): boolean;

storesMixedCaseQuotedIdentifiers(): boolean;

getIdentifierQuoteString(): String;

getSQLKeywords(): String;

getNumericFunctions(): String;

getStringFunctions(): String;

getSystemFunctions(): String;

getTimeDateFunctions(): String;

getSearchStringEscape(): String;

getExtraNameCharacters(): String;

supportsAlterTableWithAddColumn(): boolean;

supportsAlterTableWithDropColumn(): boolean;

supportsColumnAliasing(): boolean;

nullPlusNonNullIsNull(): boolean;

supportsConvert(): boolean;

supportsConvert(arg0: number, arg1: number): boolean;

supportsTableCorrelationNames(): boolean;

supportsDifferentTableCorrelationNames(): boolean;

supportsExpressionsInOrderBy(): boolean;

supportsOrderByUnrelated(): boolean;

supportsGroupBy(): boolean;

supportsGroupByUnrelated(): boolean;

supportsGroupByBeyondSelect(): boolean;

supportsLikeEscapeClause(): boolean;

supportsMultipleResultSets(): boolean;

supportsMultipleTransactions(): boolean;

supportsNonNullableColumns(): boolean;

supportsMinimumSQLGrammar(): boolean;

supportsCoreSQLGrammar(): boolean;

supportsExtendedSQLGrammar(): boolean;

supportsANSI92EntryLevelSQL(): boolean;

supportsANSI92IntermediateSQL(): boolean;

supportsANSI92FullSQL(): boolean;

supportsIntegrityEnhancementFacility(): boolean;

supportsOuterJoins(): boolean;

supportsFullOuterJoins(): boolean;

supportsLimitedOuterJoins(): boolean;

getSchemaTerm(): String;

getProcedureTerm(): String;

getCatalogTerm(): String;

isCatalogAtStart(): boolean;

getCatalogSeparator(): String;

supportsSchemasInDataManipulation(): boolean;

supportsSchemasInProcedureCalls(): boolean;

supportsSchemasInTableDefinitions(): boolean;

supportsSchemasInIndexDefinitions(): boolean;

supportsSchemasInPrivilegeDefinitions(): boolean;

supportsCatalogsInDataManipulation(): boolean;

supportsCatalogsInProcedureCalls(): boolean;

supportsCatalogsInTableDefinitions(): boolean;

supportsCatalogsInIndexDefinitions(): boolean;

supportsCatalogsInPrivilegeDefinitions(): boolean;

supportsPositionedDelete(): boolean;

supportsPositionedUpdate(): boolean;

supportsSelectForUpdate(): boolean;

supportsStoredProcedures(): boolean;

supportsSubqueriesInComparisons(): boolean;

supportsSubqueriesInExists(): boolean;

supportsSubqueriesInIns(): boolean;

supportsSubqueriesInQuantifieds(): boolean;

supportsCorrelatedSubqueries(): boolean;

supportsUnion(): boolean;

supportsUnionAll(): boolean;

supportsOpenCursorsAcrossCommit(): boolean;

supportsOpenCursorsAcrossRollback(): boolean;

supportsOpenStatementsAcrossCommit(): boolean;

supportsOpenStatementsAcrossRollback(): boolean;

getMaxBinaryLiteralLength(): number;

getMaxCharLiteralLength(): number;

getMaxColumnNameLength(): number;

getMaxColumnsInGroupBy(): number;

getMaxColumnsInIndex(): number;

getMaxColumnsInOrderBy(): number;

getMaxColumnsInSelect(): number;

getMaxColumnsInTable(): number;

getMaxConnections(): number;

getMaxCursorNameLength(): number;

getMaxIndexLength(): number;

getMaxSchemaNameLength(): number;

getMaxProcedureNameLength(): number;

getMaxCatalogNameLength(): number;

getMaxRowSize(): number;

doesMaxRowSizeIncludeBlobs(): boolean;

getMaxStatementLength(): number;

getMaxStatements(): number;

getMaxTableNameLength(): number;

getMaxTablesInSelect(): number;

getMaxUserNameLength(): number;

getDefaultTransactionIsolation(): number;

supportsTransactions(): boolean;

supportsTransactionIsolationLevel(arg0: number): boolean;

supportsDataDefinitionAndDataManipulationTransactions(): boolean;

supportsDataManipulationTransactionsOnly(): boolean;

dataDefinitionCausesTransactionCommit(): boolean;

dataDefinitionIgnoredInTransactions(): boolean;

getProcedures(arg0: String, arg1: String, arg2: String): ResultSet;

getProcedureColumns(arg0: String, arg1: String, arg2: String, arg3: String): ResultSet;

getTables(arg0: String, arg1: String, arg2: String, arg3: String[]): ResultSet;

getSchemas(): ResultSet;

getCatalogs(): ResultSet;

getTableTypes(): ResultSet;

getColumns(arg0: String, arg1: String, arg2: String, arg3: String): ResultSet;

getColumnPrivileges(arg0: String, arg1: String, arg2: String, arg3: String): ResultSet;

getTablePrivileges(arg0: String, arg1: String, arg2: String): ResultSet;

getBestRowIdentifier(arg0: String, arg1: String, arg2: String, arg3: number, arg4: boolean): ResultSet;

getVersionColumns(arg0: String, arg1: String, arg2: String): ResultSet;

getPrimaryKeys(arg0: String, arg1: String, arg2: String): ResultSet;

getImportedKeys(arg0: String, arg1: String, arg2: String): ResultSet;

getExportedKeys(arg0: String, arg1: String, arg2: String): ResultSet;

getCrossReference(arg0: String, arg1: String, arg2: String, arg3: String, arg4: String, arg5: String): ResultSet;

getTypeInfo(): ResultSet;

getIndexInfo(arg0: String, arg1: String, arg2: String, arg3: boolean, arg4: boolean): ResultSet;

supportsResultSetType(arg0: number): boolean;

supportsResultSetConcurrency(arg0: number, arg1: number): boolean;

ownUpdatesAreVisible(arg0: number): boolean;

ownDeletesAreVisible(arg0: number): boolean;

ownInsertsAreVisible(arg0: number): boolean;

othersUpdatesAreVisible(arg0: number): boolean;

othersDeletesAreVisible(arg0: number): boolean;

othersInsertsAreVisible(arg0: number): boolean;

updatesAreDetected(arg0: number): boolean;

deletesAreDetected(arg0: number): boolean;

insertsAreDetected(arg0: number): boolean;

supportsBatchUpdates(): boolean;

getUDTs(arg0: String, arg1: String, arg2: String, arg3: number[]): ResultSet;

getConnection(): Connection;

supportsSavepoints(): boolean;

supportsNamedParameters(): boolean;

supportsMultipleOpenResults(): boolean;

supportsGetGeneratedKeys(): boolean;

getSuperTypes(arg0: String, arg1: String, arg2: String): ResultSet;

getSuperTables(arg0: String, arg1: String, arg2: String): ResultSet;

getAttributes(arg0: String, arg1: String, arg2: String, arg3: String): ResultSet;

supportsResultSetHoldability(arg0: number): boolean;

getResultSetHoldability(): number;

getDatabaseMajorVersion(): number;

getDatabaseMinorVersion(): number;

getJDBCMajorVersion(): number;

getJDBCMinorVersion(): number;

getSQLStateType(): number;

locatorsUpdateCopy(): boolean;

supportsStatementPooling(): boolean;

getRowIdLifetime(): RowIdLifetime;

getSchemas(arg0: String, arg1: String): ResultSet;

supportsStoredFunctionsUsingCallSyntax(): boolean;

autoCommitFailureClosesAllResultSets(): boolean;

getClientInfoProperties(): ResultSet;

getFunctions(arg0: String, arg1: String, arg2: String): ResultSet;

getFunctionColumns(arg0: String, arg1: String, arg2: String, arg3: String): ResultSet;

getPseudoColumns(arg0: String, arg1: String, arg2: String, arg3: String): ResultSet;

generatedKeyAlwaysReturned(): boolean;

/* default */ getMaxLogicalLobSize(): number;

/* default */ supportsRefCursors(): boolean;

/* default */ supportsSharding(): boolean;
 }

export class Date extends Date {
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number);

setTime(arg0: number): void;

static valueOf(arg0: String): Date;
toString(): string;

getHours(): number;

getMinutes(): number;

getSeconds(): number;

setHours(arg0: number): void;

setMinutes(arg0: number): void;

setSeconds(arg0: number): void;

static valueOf(arg0: LocalDate): Date;

toLocalDate(): LocalDate;

toInstant(): Instant;
 }

export interface Driver {

connect(arg0: String, arg1: Properties): Connection;

acceptsURL(arg0: String): boolean;

getPropertyInfo(arg0: String, arg1: Properties): DriverPropertyInfo[];

getMajorVersion(): number;

getMinorVersion(): number;

jdbcCompliant(): boolean;

getParentLogger(): Logger;
 }

export interface DriverAction {

deregister(): void;
 }

export class DriverManager {

static getLogWriter(): PrintWriter;

static setLogWriter(arg0: PrintWriter): void;

static getConnection(arg0: String, arg1: Properties): Connection;

static getConnection(arg0: String, arg1: String, arg2: String): Connection;

static getConnection(arg0: String): Connection;

static getDriver(arg0: String): Driver;

static registerDriver(arg0: Driver): void;

static registerDriver(arg0: Driver, arg1: DriverAction): void;

static deregisterDriver(arg0: Driver): void;

static getDrivers(): Enumeration<Driver>;

static drivers(): Stream<Driver>;

static setLoginTimeout(arg0: number): void;

static getLoginTimeout(): number;

static setLogStream(arg0: PrintStream): void;

static getLogStream(): PrintStream;

static println(arg0: String): void;
 }

export class DriverPropertyInfo {
name:String
description:String
required:boolean
value:String
choices:String[]
constructor(arg0: String, arg1: String);
 }

export class JDBCType extends Enum<JDBCType> implements SQLType {
static BIT:JDBCType
static TINYINT:JDBCType
static SMALLINT:JDBCType
static INTEGER:JDBCType
static BIGINT:JDBCType
static FLOAT:JDBCType
static REAL:JDBCType
static DOUBLE:JDBCType
static NUMERIC:JDBCType
static DECIMAL:JDBCType
static CHAR:JDBCType
static VARCHAR:JDBCType
static LONGVARCHAR:JDBCType
static DATE:JDBCType
static TIME:JDBCType
static TIMESTAMP:JDBCType
static BINARY:JDBCType
static VARBINARY:JDBCType
static LONGVARBINARY:JDBCType
static NULL:JDBCType
static OTHER:JDBCType
static JAVA_OBJECT:JDBCType
static DISTINCT:JDBCType
static STRUCT:JDBCType
static ARRAY:JDBCType
static BLOB:JDBCType
static CLOB:JDBCType
static REF:JDBCType
static DATALINK:JDBCType
static BOOLEAN:JDBCType
static ROWID:JDBCType
static NCHAR:JDBCType
static NVARCHAR:JDBCType
static LONGNVARCHAR:JDBCType
static NCLOB:JDBCType
static SQLXML:JDBCType
static REF_CURSOR:JDBCType
static TIME_WITH_TIMEZONE:JDBCType
static TIMESTAMP_WITH_TIMEZONE:JDBCType

static values(): JDBCType[];

static valueOf(arg0: String): JDBCType;

getName(): String;

getVendor(): String;

getVendorTypeNumber(): Number;

static valueOf(arg0: number): JDBCType;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export interface NClob extends Clob {
 }

export namespace ParameterMetaData { 
const parameterNoNulls:number
const parameterNullable:number
const parameterNullableUnknown:number
const parameterModeUnknown:number
const parameterModeIn:number
const parameterModeInOut:number
const parameterModeOut:number
}

export interface ParameterMetaData extends Wrapper {
parameterNoNulls:number
parameterNullable:number
parameterNullableUnknown:number
parameterModeUnknown:number
parameterModeIn:number
parameterModeInOut:number
parameterModeOut:number

getParameterCount(): number;

isNullable(arg0: number): number;

isSigned(arg0: number): boolean;

getPrecision(arg0: number): number;

getScale(arg0: number): number;

getParameterType(arg0: number): number;

getParameterTypeName(arg0: number): String;

getParameterClassName(arg0: number): String;

getParameterMode(arg0: number): number;
 }

export interface PreparedStatement extends Statement {

executeQuery(): ResultSet;

executeUpdate(): number;

setNull(arg0: number, arg1: number): void;

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

setUnicodeStream(arg0: number, arg1: InputStream, arg2: number): void;

setBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;

clearParameters(): void;

setObject(arg0: number, arg1: Object, arg2: number): void;

setObject(arg0: number, arg1: Object): void;

execute(): boolean;

addBatch(): void;

setCharacterStream(arg0: number, arg1: Reader, arg2: number): void;

setRef(arg0: number, arg1: Ref): void;

setBlob(arg0: number, arg1: Blob): void;

setClob(arg0: number, arg1: Clob): void;

setArray(arg0: number, arg1: Array): void;

getMetaData(): ResultSetMetaData;

setDate(arg0: number, arg1: Date, arg2: Calendar): void;

setTime(arg0: number, arg1: Time, arg2: Calendar): void;

setTimestamp(arg0: number, arg1: Timestamp, arg2: Calendar): void;

setNull(arg0: number, arg1: number, arg2: String): void;

setURL(arg0: number, arg1: URL): void;

getParameterMetaData(): ParameterMetaData;

setRowId(arg0: number, arg1: RowId): void;

setNString(arg0: number, arg1: String): void;

setNCharacterStream(arg0: number, arg1: Reader, arg2: number): void;

setNClob(arg0: number, arg1: NClob): void;

setClob(arg0: number, arg1: Reader, arg2: number): void;

setBlob(arg0: number, arg1: InputStream, arg2: number): void;

setNClob(arg0: number, arg1: Reader, arg2: number): void;

setSQLXML(arg0: number, arg1: SQLXML): void;

setObject(arg0: number, arg1: Object, arg2: number, arg3: number): void;

setAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;

setBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;

setCharacterStream(arg0: number, arg1: Reader, arg2: number): void;

setAsciiStream(arg0: number, arg1: InputStream): void;

setBinaryStream(arg0: number, arg1: InputStream): void;

setCharacterStream(arg0: number, arg1: Reader): void;

setNCharacterStream(arg0: number, arg1: Reader): void;

setClob(arg0: number, arg1: Reader): void;

setBlob(arg0: number, arg1: InputStream): void;

setNClob(arg0: number, arg1: Reader): void;

/* default */ setObject(arg0: number, arg1: Object, arg2: SQLType, arg3: number): void;

/* default */ setObject(arg0: number, arg1: Object, arg2: SQLType): void;

/* default */ executeLargeUpdate(): number;
 }

export class PseudoColumnUsage extends Enum<PseudoColumnUsage> {
static SELECT_LIST_ONLY:PseudoColumnUsage
static WHERE_CLAUSE_ONLY:PseudoColumnUsage
static NO_USAGE_RESTRICTIONS:PseudoColumnUsage
static USAGE_UNKNOWN:PseudoColumnUsage

static values(): PseudoColumnUsage[];

static valueOf(arg0: String): PseudoColumnUsage;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export interface Ref {

getBaseTypeName(): String;

getObject(arg0: Map<String, Class<any>>): Object;

getObject(): Object;

setObject(arg0: Object): void;
 }

export namespace ResultSet { 
const FETCH_FORWARD:number
const FETCH_REVERSE:number
const FETCH_UNKNOWN:number
const TYPE_FORWARD_ONLY:number
const TYPE_SCROLL_INSENSITIVE:number
const TYPE_SCROLL_SENSITIVE:number
const CONCUR_READ_ONLY:number
const CONCUR_UPDATABLE:number
const HOLD_CURSORS_OVER_COMMIT:number
const CLOSE_CURSORS_AT_COMMIT:number
}

export interface ResultSet extends Wrapper, AutoCloseable {
FETCH_FORWARD:number
FETCH_REVERSE:number
FETCH_UNKNOWN:number
TYPE_FORWARD_ONLY:number
TYPE_SCROLL_INSENSITIVE:number
TYPE_SCROLL_SENSITIVE:number
CONCUR_READ_ONLY:number
CONCUR_UPDATABLE:number
HOLD_CURSORS_OVER_COMMIT:number
CLOSE_CURSORS_AT_COMMIT:number

next(): boolean;

close(): void;

wasNull(): boolean;

getString(arg0: number): String;

getBoolean(arg0: number): boolean;

getByte(arg0: number): number;

getShort(arg0: number): number;

getInt(arg0: number): number;

getLong(arg0: number): number;

getFloat(arg0: number): number;

getDouble(arg0: number): number;

getBigDecimal(arg0: number, arg1: number): BigDecimal;

getBytes(arg0: number): number[];

getDate(arg0: number): Date;

getTime(arg0: number): Time;

getTimestamp(arg0: number): Timestamp;

getAsciiStream(arg0: number): InputStream;

getUnicodeStream(arg0: number): InputStream;

getBinaryStream(arg0: number): InputStream;

getString(arg0: String): String;

getBoolean(arg0: String): boolean;

getByte(arg0: String): number;

getShort(arg0: String): number;

getInt(arg0: String): number;

getLong(arg0: String): number;

getFloat(arg0: String): number;

getDouble(arg0: String): number;

getBigDecimal(arg0: String, arg1: number): BigDecimal;

getBytes(arg0: String): number[];

getDate(arg0: String): Date;

getTime(arg0: String): Time;

getTimestamp(arg0: String): Timestamp;

getAsciiStream(arg0: String): InputStream;

getUnicodeStream(arg0: String): InputStream;

getBinaryStream(arg0: String): InputStream;

getWarnings(): SQLWarning;

clearWarnings(): void;

getCursorName(): String;

getMetaData(): ResultSetMetaData;

getObject(arg0: number): Object;

getObject(arg0: String): Object;

findColumn(arg0: String): number;

getCharacterStream(arg0: number): Reader;

getCharacterStream(arg0: String): Reader;

getBigDecimal(arg0: number): BigDecimal;

getBigDecimal(arg0: String): BigDecimal;

isBeforeFirst(): boolean;

isAfterLast(): boolean;

isFirst(): boolean;

isLast(): boolean;

beforeFirst(): void;

afterLast(): void;

first(): boolean;

last(): boolean;

getRow(): number;

absolute(arg0: number): boolean;

relative(arg0: number): boolean;

previous(): boolean;

setFetchDirection(arg0: number): void;

getFetchDirection(): number;

setFetchSize(arg0: number): void;

getFetchSize(): number;

getType(): number;

getConcurrency(): number;

rowUpdated(): boolean;

rowInserted(): boolean;

rowDeleted(): boolean;

updateNull(arg0: number): void;

updateBoolean(arg0: number, arg1: boolean): void;

updateByte(arg0: number, arg1: number): void;

updateShort(arg0: number, arg1: number): void;

updateInt(arg0: number, arg1: number): void;

updateLong(arg0: number, arg1: number): void;

updateFloat(arg0: number, arg1: number): void;

updateDouble(arg0: number, arg1: number): void;

updateBigDecimal(arg0: number, arg1: BigDecimal): void;

updateString(arg0: number, arg1: String): void;

updateBytes(arg0: number, arg1: number[]): void;

updateDate(arg0: number, arg1: Date): void;

updateTime(arg0: number, arg1: Time): void;

updateTimestamp(arg0: number, arg1: Timestamp): void;

updateAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;

updateBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;

updateCharacterStream(arg0: number, arg1: Reader, arg2: number): void;

updateObject(arg0: number, arg1: Object, arg2: number): void;

updateObject(arg0: number, arg1: Object): void;

updateNull(arg0: String): void;

updateBoolean(arg0: String, arg1: boolean): void;

updateByte(arg0: String, arg1: number): void;

updateShort(arg0: String, arg1: number): void;

updateInt(arg0: String, arg1: number): void;

updateLong(arg0: String, arg1: number): void;

updateFloat(arg0: String, arg1: number): void;

updateDouble(arg0: String, arg1: number): void;

updateBigDecimal(arg0: String, arg1: BigDecimal): void;

updateString(arg0: String, arg1: String): void;

updateBytes(arg0: String, arg1: number[]): void;

updateDate(arg0: String, arg1: Date): void;

updateTime(arg0: String, arg1: Time): void;

updateTimestamp(arg0: String, arg1: Timestamp): void;

updateAsciiStream(arg0: String, arg1: InputStream, arg2: number): void;

updateBinaryStream(arg0: String, arg1: InputStream, arg2: number): void;

updateCharacterStream(arg0: String, arg1: Reader, arg2: number): void;

updateObject(arg0: String, arg1: Object, arg2: number): void;

updateObject(arg0: String, arg1: Object): void;

insertRow(): void;

updateRow(): void;

deleteRow(): void;

refreshRow(): void;

cancelRowUpdates(): void;

moveToInsertRow(): void;

moveToCurrentRow(): void;

getStatement(): Statement;

getObject(arg0: number, arg1: Map<String, Class<any>>): Object;

getRef(arg0: number): Ref;

getBlob(arg0: number): Blob;

getClob(arg0: number): Clob;

getArray(arg0: number): Array;

getObject(arg0: String, arg1: Map<String, Class<any>>): Object;

getRef(arg0: String): Ref;

getBlob(arg0: String): Blob;

getClob(arg0: String): Clob;

getArray(arg0: String): Array;

getDate(arg0: number, arg1: Calendar): Date;

getDate(arg0: String, arg1: Calendar): Date;

getTime(arg0: number, arg1: Calendar): Time;

getTime(arg0: String, arg1: Calendar): Time;

getTimestamp(arg0: number, arg1: Calendar): Timestamp;

getTimestamp(arg0: String, arg1: Calendar): Timestamp;

getURL(arg0: number): URL;

getURL(arg0: String): URL;

updateRef(arg0: number, arg1: Ref): void;

updateRef(arg0: String, arg1: Ref): void;

updateBlob(arg0: number, arg1: Blob): void;

updateBlob(arg0: String, arg1: Blob): void;

updateClob(arg0: number, arg1: Clob): void;

updateClob(arg0: String, arg1: Clob): void;

updateArray(arg0: number, arg1: Array): void;

updateArray(arg0: String, arg1: Array): void;

getRowId(arg0: number): RowId;

getRowId(arg0: String): RowId;

updateRowId(arg0: number, arg1: RowId): void;

updateRowId(arg0: String, arg1: RowId): void;

getHoldability(): number;

isClosed(): boolean;

updateNString(arg0: number, arg1: String): void;

updateNString(arg0: String, arg1: String): void;

updateNClob(arg0: number, arg1: NClob): void;

updateNClob(arg0: String, arg1: NClob): void;

getNClob(arg0: number): NClob;

getNClob(arg0: String): NClob;

getSQLXML(arg0: number): SQLXML;

getSQLXML(arg0: String): SQLXML;

updateSQLXML(arg0: number, arg1: SQLXML): void;

updateSQLXML(arg0: String, arg1: SQLXML): void;

getNString(arg0: number): String;

getNString(arg0: String): String;

getNCharacterStream(arg0: number): Reader;

getNCharacterStream(arg0: String): Reader;

updateNCharacterStream(arg0: number, arg1: Reader, arg2: number): void;

updateNCharacterStream(arg0: String, arg1: Reader, arg2: number): void;

updateAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;

updateBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;

updateCharacterStream(arg0: number, arg1: Reader, arg2: number): void;

updateAsciiStream(arg0: String, arg1: InputStream, arg2: number): void;

updateBinaryStream(arg0: String, arg1: InputStream, arg2: number): void;

updateCharacterStream(arg0: String, arg1: Reader, arg2: number): void;

updateBlob(arg0: number, arg1: InputStream, arg2: number): void;

updateBlob(arg0: String, arg1: InputStream, arg2: number): void;

updateClob(arg0: number, arg1: Reader, arg2: number): void;

updateClob(arg0: String, arg1: Reader, arg2: number): void;

updateNClob(arg0: number, arg1: Reader, arg2: number): void;

updateNClob(arg0: String, arg1: Reader, arg2: number): void;

updateNCharacterStream(arg0: number, arg1: Reader): void;

updateNCharacterStream(arg0: String, arg1: Reader): void;

updateAsciiStream(arg0: number, arg1: InputStream): void;

updateBinaryStream(arg0: number, arg1: InputStream): void;

updateCharacterStream(arg0: number, arg1: Reader): void;

updateAsciiStream(arg0: String, arg1: InputStream): void;

updateBinaryStream(arg0: String, arg1: InputStream): void;

updateCharacterStream(arg0: String, arg1: Reader): void;

updateBlob(arg0: number, arg1: InputStream): void;

updateBlob(arg0: String, arg1: InputStream): void;

updateClob(arg0: number, arg1: Reader): void;

updateClob(arg0: String, arg1: Reader): void;

updateNClob(arg0: number, arg1: Reader): void;

updateNClob(arg0: String, arg1: Reader): void;

getObject<T extends Object>(arg0: number, arg1: Class<T>): T;

getObject<T extends Object>(arg0: String, arg1: Class<T>): T;

/* default */ updateObject(arg0: number, arg1: Object, arg2: SQLType, arg3: number): void;

/* default */ updateObject(arg0: String, arg1: Object, arg2: SQLType, arg3: number): void;

/* default */ updateObject(arg0: number, arg1: Object, arg2: SQLType): void;

/* default */ updateObject(arg0: String, arg1: Object, arg2: SQLType): void;
 }

export namespace ResultSetMetaData { 
const columnNoNulls:number
const columnNullable:number
const columnNullableUnknown:number
}

export interface ResultSetMetaData extends Wrapper {
columnNoNulls:number
columnNullable:number
columnNullableUnknown:number

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
 }

export interface RowId {

equals(arg0: Object): boolean;

getBytes(): number[];
toString(): string;

hashCode(): number;
 }

export class RowIdLifetime extends Enum<RowIdLifetime> {
static ROWID_UNSUPPORTED:RowIdLifetime
static ROWID_VALID_OTHER:RowIdLifetime
static ROWID_VALID_SESSION:RowIdLifetime
static ROWID_VALID_TRANSACTION:RowIdLifetime
static ROWID_VALID_FOREVER:RowIdLifetime

static values(): RowIdLifetime[];

static valueOf(arg0: String): RowIdLifetime;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export interface SQLClientInfoException { }
export class SQLClientInfoException extends SQLException {
constructor();
constructor(arg0: Map<String, ClientInfoStatus>);
constructor(arg0: Map<String, ClientInfoStatus>, arg1: Throwable);
constructor(arg0: String, arg1: Map<String, ClientInfoStatus>);
constructor(arg0: String, arg1: Map<String, ClientInfoStatus>, arg2: Throwable);
constructor(arg0: String, arg1: String, arg2: Map<String, ClientInfoStatus>);
constructor(arg0: String, arg1: String, arg2: Map<String, ClientInfoStatus>, arg3: Throwable);
constructor(arg0: String, arg1: String, arg2: number, arg3: Map<String, ClientInfoStatus>);
constructor(arg0: String, arg1: String, arg2: number, arg3: Map<String, ClientInfoStatus>, arg4: Throwable);

getFailedProperties(): Map<String, ClientInfoStatus>;
 }

export interface SQLData {

getSQLTypeName(): String;

readSQL(arg0: SQLInput, arg1: String): void;

writeSQL(arg0: SQLOutput): void;
 }

export interface SQLDataException { }
export class SQLDataException extends SQLNonTransientException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: String, arg2: number);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: String, arg1: String, arg2: Throwable);
constructor(arg0: String, arg1: String, arg2: number, arg3: Throwable);
 }

export interface SQLException extends Iterable<Throwable> { }
export class SQLException extends Exception implements Iterable<Throwable> {
constructor(arg0: String, arg1: String, arg2: number);
constructor(arg0: String, arg1: String);
constructor(arg0: String);
constructor();
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: String, arg1: String, arg2: Throwable);
constructor(arg0: String, arg1: String, arg2: number, arg3: Throwable);

getSQLState(): String;

getErrorCode(): number;

getNextException(): SQLException;

setNextException(arg0: SQLException): void;

iterator(): Iterator<Throwable>;
 }

export interface SQLFeatureNotSupportedException { }
export class SQLFeatureNotSupportedException extends SQLNonTransientException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: String, arg2: number);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: String, arg1: String, arg2: Throwable);
constructor(arg0: String, arg1: String, arg2: number, arg3: Throwable);
 }

export interface SQLInput {

readString(): String;

readBoolean(): boolean;

readByte(): number;

readShort(): number;

readInt(): number;

readLong(): number;

readFloat(): number;

readDouble(): number;

readBigDecimal(): BigDecimal;

readBytes(): number[];

readDate(): Date;

readTime(): Time;

readTimestamp(): Timestamp;

readCharacterStream(): Reader;

readAsciiStream(): InputStream;

readBinaryStream(): InputStream;

readObject(): Object;

readRef(): Ref;

readBlob(): Blob;

readClob(): Clob;

readArray(): Array;

wasNull(): boolean;

readURL(): URL;

readNClob(): NClob;

readNString(): String;

readSQLXML(): SQLXML;

readRowId(): RowId;

/* default */ readObject<T extends Object>(arg0: Class<T>): T;
 }

export interface SQLIntegrityConstraintViolationException { }
export class SQLIntegrityConstraintViolationException extends SQLNonTransientException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: String, arg2: number);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: String, arg1: String, arg2: Throwable);
constructor(arg0: String, arg1: String, arg2: number, arg3: Throwable);
 }

export interface SQLInvalidAuthorizationSpecException { }
export class SQLInvalidAuthorizationSpecException extends SQLNonTransientException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: String, arg2: number);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: String, arg1: String, arg2: Throwable);
constructor(arg0: String, arg1: String, arg2: number, arg3: Throwable);
 }

export interface SQLNonTransientConnectionException { }
export class SQLNonTransientConnectionException extends SQLNonTransientException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: String, arg2: number);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: String, arg1: String, arg2: Throwable);
constructor(arg0: String, arg1: String, arg2: number, arg3: Throwable);
 }

export interface SQLNonTransientException { }
export class SQLNonTransientException extends SQLException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: String, arg2: number);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: String, arg1: String, arg2: Throwable);
constructor(arg0: String, arg1: String, arg2: number, arg3: Throwable);
 }

export interface SQLOutput {

writeString(arg0: String): void;

writeBoolean(arg0: boolean): void;

writeByte(arg0: number): void;

writeShort(arg0: number): void;

writeInt(arg0: number): void;

writeLong(arg0: number): void;

writeFloat(arg0: number): void;

writeDouble(arg0: number): void;

writeBigDecimal(arg0: BigDecimal): void;

writeBytes(arg0: number[]): void;

writeDate(arg0: Date): void;

writeTime(arg0: Time): void;

writeTimestamp(arg0: Timestamp): void;

writeCharacterStream(arg0: Reader): void;

writeAsciiStream(arg0: InputStream): void;

writeBinaryStream(arg0: InputStream): void;

writeObject(arg0: SQLData): void;

writeRef(arg0: Ref): void;

writeBlob(arg0: Blob): void;

writeClob(arg0: Clob): void;

writeStruct(arg0: Struct): void;

writeArray(arg0: Array): void;

writeURL(arg0: URL): void;

writeNString(arg0: String): void;

writeNClob(arg0: NClob): void;

writeRowId(arg0: RowId): void;

writeSQLXML(arg0: SQLXML): void;

/* default */ writeObject(arg0: Object, arg1: SQLType): void;
 }

export class SQLPermission extends BasicPermission {
constructor(arg0: String);
constructor(arg0: String, arg1: String);
 }

export interface SQLRecoverableException { }
export class SQLRecoverableException extends SQLException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: String, arg2: number);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: String, arg1: String, arg2: Throwable);
constructor(arg0: String, arg1: String, arg2: number, arg3: Throwable);
 }

export interface SQLSyntaxErrorException { }
export class SQLSyntaxErrorException extends SQLNonTransientException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: String, arg2: number);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: String, arg1: String, arg2: Throwable);
constructor(arg0: String, arg1: String, arg2: number, arg3: Throwable);
 }

export interface SQLTimeoutException { }
export class SQLTimeoutException extends SQLTransientException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: String, arg2: number);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: String, arg1: String, arg2: Throwable);
constructor(arg0: String, arg1: String, arg2: number, arg3: Throwable);
 }

export interface SQLTransactionRollbackException { }
export class SQLTransactionRollbackException extends SQLTransientException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: String, arg2: number);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: String, arg1: String, arg2: Throwable);
constructor(arg0: String, arg1: String, arg2: number, arg3: Throwable);
 }

export interface SQLTransientConnectionException { }
export class SQLTransientConnectionException extends SQLTransientException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: String, arg2: number);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: String, arg1: String, arg2: Throwable);
constructor(arg0: String, arg1: String, arg2: number, arg3: Throwable);
 }

export interface SQLTransientException { }
export class SQLTransientException extends SQLException {
constructor();
constructor(arg0: String);
constructor(arg0: String, arg1: String);
constructor(arg0: String, arg1: String, arg2: number);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: String, arg1: String, arg2: Throwable);
constructor(arg0: String, arg1: String, arg2: number, arg3: Throwable);
 }

export interface SQLType {

getName(): String;

getVendor(): String;

getVendorTypeNumber(): Number;
 }

export interface SQLWarning { }
export class SQLWarning extends SQLException {
constructor(arg0: String, arg1: String, arg2: number);
constructor(arg0: String, arg1: String);
constructor(arg0: String);
constructor();
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
constructor(arg0: String, arg1: String, arg2: Throwable);
constructor(arg0: String, arg1: String, arg2: number, arg3: Throwable);

getNextWarning(): SQLWarning;

setNextWarning(arg0: SQLWarning): void;
 }

export interface SQLXML {

free(): void;

getBinaryStream(): InputStream;

setBinaryStream(): OutputStream;

getCharacterStream(): Reader;

setCharacterStream(): Writer;

getString(): String;

setString(arg0: String): void;

getSource<T extends Source>(arg0: Class<T>): T;

setResult<T extends Result>(arg0: Class<T>): T;
 }

export interface Savepoint {

getSavepointId(): number;

getSavepointName(): String;
 }

export interface ShardingKey {
 }

export interface ShardingKeyBuilder {

subkey(arg0: Object, arg1: SQLType): ShardingKeyBuilder;

build(): ShardingKey;
 }

export namespace Statement { 
const CLOSE_CURRENT_RESULT:number
const KEEP_CURRENT_RESULT:number
const CLOSE_ALL_RESULTS:number
const SUCCESS_NO_INFO:number
const EXECUTE_FAILED:number
const RETURN_GENERATED_KEYS:number
const NO_GENERATED_KEYS:number
}

export interface Statement extends Wrapper, AutoCloseable {
CLOSE_CURRENT_RESULT:number
KEEP_CURRENT_RESULT:number
CLOSE_ALL_RESULTS:number
SUCCESS_NO_INFO:number
EXECUTE_FAILED:number
RETURN_GENERATED_KEYS:number
NO_GENERATED_KEYS:number

executeQuery(arg0: String): ResultSet;

executeUpdate(arg0: String): number;

close(): void;

getMaxFieldSize(): number;

setMaxFieldSize(arg0: number): void;

getMaxRows(): number;

setMaxRows(arg0: number): void;

setEscapeProcessing(arg0: boolean): void;

getQueryTimeout(): number;

setQueryTimeout(arg0: number): void;

cancel(): void;

getWarnings(): SQLWarning;

clearWarnings(): void;

setCursorName(arg0: String): void;

execute(arg0: String): boolean;

getResultSet(): ResultSet;

getUpdateCount(): number;

getMoreResults(): boolean;

setFetchDirection(arg0: number): void;

getFetchDirection(): number;

setFetchSize(arg0: number): void;

getFetchSize(): number;

getResultSetConcurrency(): number;

getResultSetType(): number;

addBatch(arg0: String): void;

clearBatch(): void;

executeBatch(): number[];

getConnection(): Connection;

getMoreResults(arg0: number): boolean;

getGeneratedKeys(): ResultSet;

executeUpdate(arg0: String, arg1: number): number;

executeUpdate(arg0: String, arg1: number[]): number;

executeUpdate(arg0: String, arg1: String[]): number;

execute(arg0: String, arg1: number): boolean;

execute(arg0: String, arg1: number[]): boolean;

execute(arg0: String, arg1: String[]): boolean;

getResultSetHoldability(): number;

isClosed(): boolean;

setPoolable(arg0: boolean): void;

isPoolable(): boolean;

closeOnCompletion(): void;

isCloseOnCompletion(): boolean;

/* default */ getLargeUpdateCount(): number;

/* default */ setLargeMaxRows(arg0: number): void;

/* default */ getLargeMaxRows(): number;

/* default */ executeLargeBatch(): number[];

/* default */ executeLargeUpdate(arg0: String): number;

/* default */ executeLargeUpdate(arg0: String, arg1: number): number;

/* default */ executeLargeUpdate(arg0: String, arg1: number[]): number;

/* default */ executeLargeUpdate(arg0: String, arg1: String[]): number;

/* default */ enquoteLiteral(arg0: String): String;

/* default */ enquoteIdentifier(arg0: String, arg1: boolean): String;

/* default */ isSimpleIdentifier(arg0: String): boolean;

/* default */ enquoteNCharLiteral(arg0: String): String;
 }

export interface Struct {

getSQLTypeName(): String;

getAttributes(): Object[];

getAttributes(arg0: Map<String, Class<any>>): Object[];
 }

export class Time extends Date {
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number);

setTime(arg0: number): void;

static valueOf(arg0: String): Time;
toString(): string;

getYear(): number;

getMonth(): number;

getDay(): number;

getDate(): number;

setYear(arg0: number): void;

setMonth(arg0: number): void;

setDate(arg0: number): void;

static valueOf(arg0: LocalTime): Time;

toLocalTime(): LocalTime;

toInstant(): Instant;
 }

export class Timestamp extends Date {
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
constructor(arg0: number);

setTime(arg0: number): void;

getTime(): number;

static valueOf(arg0: String): Timestamp;
toString(): string;

getNanos(): number;

setNanos(arg0: number): void;

equals(arg0: Timestamp): boolean;

equals(arg0: Object): boolean;

before(arg0: Timestamp): boolean;

after(arg0: Timestamp): boolean;

compareTo(arg0: Timestamp): number;

compareTo(arg0: Date): number;

hashCode(): number;

static valueOf(arg0: LocalDateTime): Timestamp;

toLocalDateTime(): LocalDateTime;

static from(arg0: Instant): Timestamp;

toInstant(): Instant;
 }

export class Types {
static BIT:number
static TINYINT:number
static SMALLINT:number
static INTEGER:number
static BIGINT:number
static FLOAT:number
static REAL:number
static DOUBLE:number
static NUMERIC:number
static DECIMAL:number
static CHAR:number
static VARCHAR:number
static LONGVARCHAR:number
static DATE:number
static TIME:number
static TIMESTAMP:number
static BINARY:number
static VARBINARY:number
static LONGVARBINARY:number
static NULL:number
static OTHER:number
static JAVA_OBJECT:number
static DISTINCT:number
static STRUCT:number
static ARRAY:number
static BLOB:number
static CLOB:number
static REF:number
static DATALINK:number
static BOOLEAN:number
static ROWID:number
static NCHAR:number
static NVARCHAR:number
static LONGNVARCHAR:number
static NCLOB:number
static SQLXML:number
static REF_CURSOR:number
static TIME_WITH_TIMEZONE:number
static TIMESTAMP_WITH_TIMEZONE:number
 }

export interface Wrapper {

unwrap<T extends Object>(arg0: Class<T>): T;

isWrapperFor(arg0: Class<any>): boolean;
 }

}
