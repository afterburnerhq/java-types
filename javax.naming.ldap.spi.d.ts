/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
declare module '@afterburnerhq/javax.naming.ldap.spi' { 
import { String } from '@afterburnerhq/java.lang'
import { Optional, Map, List } from '@afterburnerhq/java.util'
export abstract class LdapDnsProvider {

abstract lookupEndpoints(arg0: String, arg1: Map<any, any>): Optional<LdapDnsProviderResult>;
 }

export class LdapDnsProviderResult {
constructor(arg0: String, arg1: List<String>);

getDomainName(): String;

getEndpoints(): List<String>;
 }

}
