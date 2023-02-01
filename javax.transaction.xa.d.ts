/// <reference path="java.lang.d.ts" />
declare module '@afterburnerhq/javax.transaction.xa' { 
import { Exception, String } from '@afterburnerhq/java.lang'
export class XAException extends Exception {
errorCode:number
static XA_RBBASE:number
static XA_RBROLLBACK:number
static XA_RBCOMMFAIL:number
static XA_RBDEADLOCK:number
static XA_RBINTEGRITY:number
static XA_RBOTHER:number
static XA_RBPROTO:number
static XA_RBTIMEOUT:number
static XA_RBTRANSIENT:number
static XA_RBEND:number
static XA_NOMIGRATE:number
static XA_HEURHAZ:number
static XA_HEURCOM:number
static XA_HEURRB:number
static XA_HEURMIX:number
static XA_RETRY:number
static XA_RDONLY:number
static XAER_ASYNC:number
static XAER_RMERR:number
static XAER_NOTA:number
static XAER_INVAL:number
static XAER_PROTO:number
static XAER_RMFAIL:number
static XAER_DUPID:number
static XAER_OUTSIDE:number
constructor();
constructor(arg0: String);
constructor(arg0: number);
 }

export namespace XAResource { 
const TMENDRSCAN:number
const TMFAIL:number
const TMJOIN:number
const TMNOFLAGS:number
const TMONEPHASE:number
const TMRESUME:number
const TMSTARTRSCAN:number
const TMSUCCESS:number
const TMSUSPEND:number
const XA_RDONLY:number
const XA_OK:number
}

export interface XAResource {
TMENDRSCAN:number
TMFAIL:number
TMJOIN:number
TMNOFLAGS:number
TMONEPHASE:number
TMRESUME:number
TMSTARTRSCAN:number
TMSUCCESS:number
TMSUSPEND:number
XA_RDONLY:number
XA_OK:number

commit(arg0: Xid, arg1: boolean): void;

end(arg0: Xid, arg1: number): void;

forget(arg0: Xid): void;

getTransactionTimeout(): number;

isSameRM(arg0: XAResource): boolean;

prepare(arg0: Xid): number;

recover(arg0: number): Xid[];

rollback(arg0: Xid): void;

setTransactionTimeout(arg0: number): boolean;

start(arg0: Xid, arg1: number): void;
 }

export namespace Xid { 
const MAXGTRIDSIZE:number
const MAXBQUALSIZE:number
}

export interface Xid {
MAXGTRIDSIZE:number
MAXBQUALSIZE:number

getFormatId(): number;

getGlobalTransactionId(): number[];

getBranchQualifier(): number[];
 }

}
