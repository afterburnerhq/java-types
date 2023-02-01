/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.math.d.ts" />
declare module '@afterburnerhq/javax.security.cert' { 
import { PublicKey, Principal } from '@afterburnerhq/java.security'
import { Exception, String } from '@afterburnerhq/java.lang'
import { Date } from '@afterburnerhq/java.util'
import { InputStream } from '@afterburnerhq/java.io'
import { BigInteger } from '@afterburnerhq/java.math'
export abstract class Certificate {
constructor();

equals(arg0: Object): boolean;

hashCode(): number;

abstract getEncoded(): number[];

abstract verify(arg0: PublicKey): void;

abstract verify(arg0: PublicKey, arg1: String): void;
toString(): string;

abstract getPublicKey(): PublicKey;
 }

export class CertificateEncodingException extends CertificateException {
constructor();
constructor(arg0: String);
 }

export class CertificateException extends Exception {
constructor();
constructor(arg0: String);
 }

export class CertificateExpiredException extends CertificateException {
constructor();
constructor(arg0: String);
 }

export class CertificateNotYetValidException extends CertificateException {
constructor();
constructor(arg0: String);
 }

export class CertificateParsingException extends CertificateException {
constructor();
constructor(arg0: String);
 }

export abstract class X509Certificate extends Certificate {
constructor();

static getInstance(arg0: InputStream): X509Certificate;

static getInstance(arg0: number[]): X509Certificate;

abstract checkValidity(): void;

abstract checkValidity(arg0: Date): void;

abstract getVersion(): number;

abstract getSerialNumber(): BigInteger;

abstract getIssuerDN(): Principal;

abstract getSubjectDN(): Principal;

abstract getNotBefore(): Date;

abstract getNotAfter(): Date;

abstract getSigAlgName(): String;

abstract getSigAlgOID(): String;

abstract getSigAlgParams(): number[];
 }

}
