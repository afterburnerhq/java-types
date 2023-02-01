/// <reference path="java.lang.d.ts" />
/// <reference path="java.lang.invoke.d.ts" />
declare module '@afterburnerhq/java.lang.runtime' { 
import { Class, String } from '@afterburnerhq/java.lang'
import { MethodType, Lookup, CallSite, TypeDescriptor, MethodHandle } from '@afterburnerhq/java.lang.invoke'
export class ObjectMethods {

static bootstrap(arg0: Lookup, arg1: String, arg2: TypeDescriptor, arg3: Class<any>, arg4: String, arg5: MethodHandle[]): Object;
 }

export class SwitchBootstraps {

static typeSwitch(arg0: Lookup, arg1: String, arg2: MethodType, arg3: Object[]): CallSite;

static enumSwitch(arg0: Lookup, arg1: String, arg2: MethodType, arg3: Object[]): CallSite;
 }

}
