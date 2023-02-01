/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.security.auth.d.ts" />
/// <reference path="java.security.cert.d.ts" />
declare module '@afterburnerhq/javax.security.auth.x500' { 
import { Principal, PrivateKey } from '@afterburnerhq/java.security'
import { String } from '@afterburnerhq/java.lang'
import { Map } from '@afterburnerhq/java.util'
import { Serializable, InputStream } from '@afterburnerhq/java.io'
import { Destroyable } from '@afterburnerhq/javax.security.auth'
import { X509Certificate } from '@afterburnerhq/java.security.cert'
export interface X500Principal extends Principal, Serializable { }
export class X500Principal implements Principal, Serializable {
static RFC1779:String
static RFC2253:String
static CANONICAL:String
constructor(arg0: String);
constructor(arg0: String, arg1: Map<String, String>);
constructor(arg0: number[]);
constructor(arg0: InputStream);

getName(): String;

getName(arg0: String): String;

getName(arg0: String, arg1: Map<String, String>): String;

getEncoded(): number[];
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class X500PrivateCredential implements Destroyable {
constructor(arg0: X509Certificate, arg1: PrivateKey);
constructor(arg0: X509Certificate, arg1: PrivateKey, arg2: String);

getCertificate(): X509Certificate;

getPrivateKey(): PrivateKey;

getAlias(): String;

destroy(): void;

isDestroyed(): boolean;
 }

}
