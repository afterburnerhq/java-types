/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="javax.security.auth.callback.d.ts" />
/// <reference path="javax.security.auth.d.ts" />
declare module '@afterburnerhq/javax.security.auth.login' { 
import { Provider, GeneralSecurityException } from '@afterburnerhq/java.security'
import { String } from '@afterburnerhq/java.lang'
import { Map } from '@afterburnerhq/java.util'
import { CallbackHandler } from '@afterburnerhq/javax.security.auth.callback'
import { Subject } from '@afterburnerhq/javax.security.auth'
export class AccountException extends LoginException {
constructor();
constructor(arg0: String);
 }

export class AccountExpiredException extends AccountException {
constructor();
constructor(arg0: String);
 }

export class AccountLockedException extends AccountException {
constructor();
constructor(arg0: String);
 }

export class AccountNotFoundException extends AccountException {
constructor();
constructor(arg0: String);
 }

export class AppConfigurationEntry {
constructor(arg0: String, arg1: AppConfigurationEntry.LoginModuleControlFlag, arg2: Map<String, any>);

getLoginModuleName(): String;

getControlFlag(): AppConfigurationEntry.LoginModuleControlFlag;

getOptions(): Map<String, any>;
 }
export namespace AppConfigurationEntry { 
export class LoginModuleControlFlag {
static REQUIRED:AppConfigurationEntry.LoginModuleControlFlag
static REQUISITE:AppConfigurationEntry.LoginModuleControlFlag
static SUFFICIENT:AppConfigurationEntry.LoginModuleControlFlag
static OPTIONAL:AppConfigurationEntry.LoginModuleControlFlag
toString(): string;
 }

}

export abstract class Configuration {

static getConfiguration(): Configuration;

static setConfiguration(arg0: Configuration): void;

static getInstance(arg0: String, arg1: Configuration.Parameters): Configuration;

static getInstance(arg0: String, arg1: Configuration.Parameters, arg2: String): Configuration;

static getInstance(arg0: String, arg1: Configuration.Parameters, arg2: Provider): Configuration;

getProvider(): Provider;

getType(): String;

getParameters(): Configuration.Parameters;

abstract getAppConfigurationEntry(arg0: String): AppConfigurationEntry[];

refresh(): void;
 }
export namespace Configuration { 
export interface Parameters {
 }

}

export abstract class ConfigurationSpi {
constructor();
 }

export class CredentialException extends LoginException {
constructor();
constructor(arg0: String);
 }

export class CredentialExpiredException extends CredentialException {
constructor();
constructor(arg0: String);
 }

export class CredentialNotFoundException extends CredentialException {
constructor();
constructor(arg0: String);
 }

export class FailedLoginException extends LoginException {
constructor();
constructor(arg0: String);
 }

export class LoginContext {
constructor(arg0: String);
constructor(arg0: String, arg1: Subject);
constructor(arg0: String, arg1: CallbackHandler);
constructor(arg0: String, arg1: Subject, arg2: CallbackHandler);
constructor(arg0: String, arg1: Subject, arg2: CallbackHandler, arg3: Configuration);

login(): void;

logout(): void;

getSubject(): Subject;
 }

export class LoginException extends GeneralSecurityException {
constructor();
constructor(arg0: String);
 }

}
