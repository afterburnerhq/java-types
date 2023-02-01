/// <reference path="java.sql.d.ts" />
/// <reference path="java.lang.reflect.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.math.d.ts" />
declare module '@afterburnerhq/javax.sql.rowset.serial' { 
import { NClob, Blob, RowId, SQLException, Time, Timestamp, Date, Struct, Array, SQLOutput, Ref, SQLXML, SQLData, ResultSet, Clob, SQLInput } from '@afterburnerhq/java.sql'
import { Field } from '@afterburnerhq/java.lang.reflect'
import { Map, Vector } from '@afterburnerhq/java.util'
import { Class, Cloneable, String } from '@afterburnerhq/java.lang'
import { URL } from '@afterburnerhq/java.net'
import { Reader, Serializable, InputStream, Writer, OutputStream } from '@afterburnerhq/java.io'
import { BigDecimal } from '@afterburnerhq/java.math'
export interface SQLInputImpl extends SQLInput { }
export class SQLInputImpl implements SQLInput {
constructor(arg0: Object[], arg1: Map<String, Class<any>>);

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
 }

export interface SQLOutputImpl extends SQLOutput { }
export class SQLOutputImpl implements SQLOutput {
constructor(arg0: Vector<any>, arg1: Map<String, any>);

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
 }

export class SerialArray implements Array, Serializable, Cloneable {
constructor(arg0: Array, arg1: Map<String, Class<any>>);
constructor(arg0: Array);

free(): void;

getArray(): Object;

getArray(arg0: Map<String, Class<any>>): Object;

getArray(arg0: number, arg1: number): Object;

getArray(arg0: number, arg1: number, arg2: Map<String, Class<any>>): Object;

getBaseType(): number;

getBaseTypeName(): String;

getResultSet(arg0: number, arg1: number): ResultSet;

getResultSet(arg0: Map<String, Class<any>>): ResultSet;

getResultSet(): ResultSet;

getResultSet(arg0: number, arg1: number, arg2: Map<String, Class<any>>): ResultSet;

equals(arg0: Object): boolean;

hashCode(): number;

clone(): Object;
 }

export class SerialBlob implements Blob, Serializable, Cloneable {
constructor(arg0: number[]);
constructor(arg0: Blob);

getBytes(arg0: number, arg1: number): number[];

length(): number;

getBinaryStream(): InputStream;

position(arg0: number[], arg1: number): number;

position(arg0: Blob, arg1: number): number;

setBytes(arg0: number, arg1: number[]): number;

setBytes(arg0: number, arg1: number[], arg2: number, arg3: number): number;

setBinaryStream(arg0: number): OutputStream;

truncate(arg0: number): void;

getBinaryStream(arg0: number, arg1: number): InputStream;

free(): void;

equals(arg0: Object): boolean;

hashCode(): number;

clone(): Object;
 }

export class SerialClob implements Clob, Serializable, Cloneable {
constructor(arg0: String[]);
constructor(arg0: Clob);

length(): number;

getCharacterStream(): Reader;

getAsciiStream(): InputStream;

getSubString(arg0: number, arg1: number): String;

position(arg0: String, arg1: number): number;

position(arg0: Clob, arg1: number): number;

setString(arg0: number, arg1: String): number;

setString(arg0: number, arg1: String, arg2: number, arg3: number): number;

setAsciiStream(arg0: number): OutputStream;

setCharacterStream(arg0: number): Writer;

truncate(arg0: number): void;

getCharacterStream(arg0: number, arg1: number): Reader;

free(): void;

equals(arg0: Object): boolean;

hashCode(): number;

clone(): Object;
 }

export class SerialDatalink implements Serializable, Cloneable {
constructor(arg0: URL);

getDatalink(): URL;

equals(arg0: Object): boolean;

hashCode(): number;

clone(): Object;
 }

export interface SerialException { }
export class SerialException extends SQLException {
constructor();
constructor(arg0: String);
 }

export class SerialJavaObject implements Serializable, Cloneable {
constructor(arg0: Object);

getObject(): Object;

getFields(): Field[];

equals(arg0: Object): boolean;

hashCode(): number;

clone(): Object;
 }

export class SerialRef implements Ref, Serializable, Cloneable {
constructor(arg0: Ref);

getBaseTypeName(): String;

getObject(arg0: Map<String, Class<any>>): Object;

getObject(): Object;

setObject(arg0: Object): void;

equals(arg0: Object): boolean;

hashCode(): number;

clone(): Object;
 }

export class SerialStruct implements Struct, Serializable, Cloneable {
constructor(arg0: Struct, arg1: Map<String, Class<any>>);
constructor(arg0: SQLData, arg1: Map<String, Class<any>>);

getSQLTypeName(): String;

getAttributes(): Object[];

getAttributes(arg0: Map<String, Class<any>>): Object[];

equals(arg0: Object): boolean;

hashCode(): number;

clone(): Object;
 }

}
