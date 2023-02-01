/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="javax.security.auth.callback.d.ts" />
/// <reference path="javax.security.auth.d.ts" />
declare module '@afterburnerhq/javax.security.auth.spi' { 
import { Map } from '@afterburnerhq/java.util'
import { String } from '@afterburnerhq/java.lang'
import { CallbackHandler } from '@afterburnerhq/javax.security.auth.callback'
import { Subject } from '@afterburnerhq/javax.security.auth'
export interface LoginModule {

initialize(arg0: Subject, arg1: CallbackHandler, arg2: Map<String, any>, arg3: Map<String, any>): void;

login(): boolean;

commit(): boolean;

abort(): boolean;

logout(): boolean;
 }

}
