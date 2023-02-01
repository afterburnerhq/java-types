/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.management.d.ts" />
declare module '@afterburnerhq/javax.management.relation' { 
import { Integer, Boolean, String } from '@afterburnerhq/java.lang'
import { ArrayList, Collection, List, Vector, Map } from '@afterburnerhq/java.util'
import { Serializable } from '@afterburnerhq/java.io'
import { MBeanNotificationInfo, JMException, NotificationFilterSupport, NotificationBroadcasterSupport, Notification, ObjectName, MBeanRegistration, NotificationListener, MBeanServer } from '@afterburnerhq/javax.management'
export class InvalidRelationIdException extends RelationException {
constructor();
constructor(arg0: String);
 }

export class InvalidRelationServiceException extends RelationException {
constructor();
constructor(arg0: String);
 }

export class InvalidRelationTypeException extends RelationException {
constructor();
constructor(arg0: String);
 }

export class InvalidRoleInfoException extends RelationException {
constructor();
constructor(arg0: String);
 }

export class InvalidRoleValueException extends RelationException {
constructor();
constructor(arg0: String);
 }

export class MBeanServerNotificationFilter extends NotificationFilterSupport {
constructor();

disableAllObjectNames(): void;

disableObjectName(arg0: ObjectName): void;

enableAllObjectNames(): void;

enableObjectName(arg0: ObjectName): void;

getEnabledObjectNames(): Vector<ObjectName>;

getDisabledObjectNames(): Vector<ObjectName>;

isNotificationEnabled(arg0: Notification): boolean;
 }

export interface Relation {

getRole(arg0: String): List<ObjectName>;

getRoles(arg0: String[]): RoleResult;

getRoleCardinality(arg0: String): Number;

getAllRoles(): RoleResult;

retrieveAllRoles(): RoleList;

setRole(arg0: Role): void;

setRoles(arg0: RoleList): RoleResult;

handleMBeanUnregistration(arg0: ObjectName, arg1: String): void;

getReferencedMBeans(): Map<ObjectName, List<String>>;

getRelationTypeName(): String;

getRelationServiceName(): ObjectName;

getRelationId(): String;
 }

export class RelationException extends JMException {
constructor();
constructor(arg0: String);
 }

export class RelationNotFoundException extends RelationException {
constructor();
constructor(arg0: String);
 }

export class RelationNotification extends Notification {
static RELATION_BASIC_CREATION:String
static RELATION_MBEAN_CREATION:String
static RELATION_BASIC_UPDATE:String
static RELATION_MBEAN_UPDATE:String
static RELATION_BASIC_REMOVAL:String
static RELATION_MBEAN_REMOVAL:String
constructor(arg0: String, arg1: Object, arg2: number, arg3: number, arg4: String, arg5: String, arg6: String, arg7: ObjectName, arg8: List<ObjectName>);
constructor(arg0: String, arg1: Object, arg2: number, arg3: number, arg4: String, arg5: String, arg6: String, arg7: ObjectName, arg8: String, arg9: List<ObjectName>, arg10: List<ObjectName>);

getRelationId(): String;

getRelationTypeName(): String;

getObjectName(): ObjectName;

getMBeansToUnregister(): List<ObjectName>;

getRoleName(): String;

getOldRoleValue(): List<ObjectName>;

getNewRoleValue(): List<ObjectName>;
 }

export class RelationService extends NotificationBroadcasterSupport implements RelationServiceMBean, MBeanRegistration, NotificationListener {
constructor(arg0: boolean);

isActive(): void;

preRegister(arg0: MBeanServer, arg1: ObjectName): ObjectName;

postRegister(arg0: Boolean): void;

preDeregister(): void;

postDeregister(): void;

getPurgeFlag(): boolean;

setPurgeFlag(arg0: boolean): void;

createRelationType(arg0: String, arg1: RoleInfo[]): void;

addRelationType(arg0: RelationType): void;

getAllRelationTypeNames(): List<String>;

getRoleInfos(arg0: String): List<RoleInfo>;

getRoleInfo(arg0: String, arg1: String): RoleInfo;

removeRelationType(arg0: String): void;

createRelation(arg0: String, arg1: String, arg2: RoleList): void;

addRelation(arg0: ObjectName): void;

isRelationMBean(arg0: String): ObjectName;

isRelation(arg0: ObjectName): String;

hasRelation(arg0: String): Boolean;

getAllRelationIds(): List<String>;

checkRoleReading(arg0: String, arg1: String): Number;

checkRoleWriting(arg0: Role, arg1: String, arg2: Boolean): Number;

sendRelationCreationNotification(arg0: String): void;

sendRoleUpdateNotification(arg0: String, arg1: Role, arg2: List<ObjectName>): void;

sendRelationRemovalNotification(arg0: String, arg1: List<ObjectName>): void;

updateRoleMap(arg0: String, arg1: Role, arg2: List<ObjectName>): void;

removeRelation(arg0: String): void;

purgeRelations(): void;

findReferencingRelations(arg0: ObjectName, arg1: String, arg2: String): Map<String, List<String>>;

findAssociatedMBeans(arg0: ObjectName, arg1: String, arg2: String): Map<ObjectName, List<String>>;

findRelationsOfType(arg0: String): List<String>;

getRole(arg0: String, arg1: String): List<ObjectName>;

getRoles(arg0: String, arg1: String[]): RoleResult;

getAllRoles(arg0: String): RoleResult;

getRoleCardinality(arg0: String, arg1: String): Number;

setRole(arg0: String, arg1: Role): void;

setRoles(arg0: String, arg1: RoleList): RoleResult;

getReferencedMBeans(arg0: String): Map<ObjectName, List<String>>;

getRelationTypeName(arg0: String): String;

handleNotification(arg0: Notification, arg1: Object): void;

getNotificationInfo(): MBeanNotificationInfo[];
 }

export interface RelationServiceMBean {

isActive(): void;

getPurgeFlag(): boolean;

setPurgeFlag(arg0: boolean): void;

createRelationType(arg0: String, arg1: RoleInfo[]): void;

addRelationType(arg0: RelationType): void;

getAllRelationTypeNames(): List<String>;

getRoleInfos(arg0: String): List<RoleInfo>;

getRoleInfo(arg0: String, arg1: String): RoleInfo;

removeRelationType(arg0: String): void;

createRelation(arg0: String, arg1: String, arg2: RoleList): void;

addRelation(arg0: ObjectName): void;

isRelationMBean(arg0: String): ObjectName;

isRelation(arg0: ObjectName): String;

hasRelation(arg0: String): Boolean;

getAllRelationIds(): List<String>;

checkRoleReading(arg0: String, arg1: String): Number;

checkRoleWriting(arg0: Role, arg1: String, arg2: Boolean): Number;

sendRelationCreationNotification(arg0: String): void;

sendRoleUpdateNotification(arg0: String, arg1: Role, arg2: List<ObjectName>): void;

sendRelationRemovalNotification(arg0: String, arg1: List<ObjectName>): void;

updateRoleMap(arg0: String, arg1: Role, arg2: List<ObjectName>): void;

removeRelation(arg0: String): void;

purgeRelations(): void;

findReferencingRelations(arg0: ObjectName, arg1: String, arg2: String): Map<String, List<String>>;

findAssociatedMBeans(arg0: ObjectName, arg1: String, arg2: String): Map<ObjectName, List<String>>;

findRelationsOfType(arg0: String): List<String>;

getRole(arg0: String, arg1: String): List<ObjectName>;

getRoles(arg0: String, arg1: String[]): RoleResult;

getAllRoles(arg0: String): RoleResult;

getRoleCardinality(arg0: String, arg1: String): Number;

setRole(arg0: String, arg1: Role): void;

setRoles(arg0: String, arg1: RoleList): RoleResult;

getReferencedMBeans(arg0: String): Map<ObjectName, List<String>>;

getRelationTypeName(arg0: String): String;
 }

export class RelationServiceNotRegisteredException extends RelationException {
constructor();
constructor(arg0: String);
 }

export class RelationSupport implements RelationSupportMBean, MBeanRegistration {
constructor(arg0: String, arg1: ObjectName, arg2: String, arg3: RoleList);
constructor(arg0: String, arg1: ObjectName, arg2: MBeanServer, arg3: String, arg4: RoleList);

getRole(arg0: String): List<ObjectName>;

getRoles(arg0: String[]): RoleResult;

getAllRoles(): RoleResult;

retrieveAllRoles(): RoleList;

getRoleCardinality(arg0: String): Number;

setRole(arg0: Role): void;

setRoles(arg0: RoleList): RoleResult;

handleMBeanUnregistration(arg0: ObjectName, arg1: String): void;

getReferencedMBeans(): Map<ObjectName, List<String>>;

getRelationTypeName(): String;

getRelationServiceName(): ObjectName;

getRelationId(): String;

preRegister(arg0: MBeanServer, arg1: ObjectName): ObjectName;

postRegister(arg0: Boolean): void;

preDeregister(): void;

postDeregister(): void;

isInRelationService(): Boolean;

setRelationServiceManagementFlag(arg0: Boolean): void;
 }

export interface RelationSupportMBean extends Relation {

isInRelationService(): Boolean;

setRelationServiceManagementFlag(arg0: Boolean): void;
 }

export interface RelationType extends Serializable {

getRelationTypeName(): String;

getRoleInfos(): List<RoleInfo>;

getRoleInfo(arg0: String): RoleInfo;
 }

export class RelationTypeNotFoundException extends RelationException {
constructor();
constructor(arg0: String);
 }

export class RelationTypeSupport implements RelationType {
constructor(arg0: String, arg1: RoleInfo[]);

getRelationTypeName(): String;

getRoleInfos(): List<RoleInfo>;

getRoleInfo(arg0: String): RoleInfo;
 }

export class Role implements Serializable {
constructor(arg0: String, arg1: List<ObjectName>);

getRoleName(): String;

getRoleValue(): List<ObjectName>;

setRoleName(arg0: String): void;

setRoleValue(arg0: List<ObjectName>): void;
toString(): string;

clone(): Object;

static roleValueToString(arg0: List<ObjectName>): String;
 }

export class RoleInfo implements Serializable {
static ROLE_CARDINALITY_INFINITY:number
constructor(arg0: String, arg1: String, arg2: boolean, arg3: boolean, arg4: number, arg5: number, arg6: String);
constructor(arg0: String, arg1: String, arg2: boolean, arg3: boolean);
constructor(arg0: String, arg1: String);
constructor(arg0: RoleInfo);

getName(): String;

isReadable(): boolean;

isWritable(): boolean;

getDescription(): String;

getMinDegree(): number;

getMaxDegree(): number;

getRefMBeanClassName(): String;

checkMinDegree(arg0: number): boolean;

checkMaxDegree(arg0: number): boolean;
toString(): string;
 }

export class RoleInfoNotFoundException extends RelationException {
constructor();
constructor(arg0: String);
 }

export interface RoleList { }
export class RoleList extends ArrayList<Object> {
constructor();
constructor(arg0: number);
constructor(arg0: List<Role>);

asList(): List<Role>;

add(arg0: Role): void;

add(arg0: number, arg1: Role): void;

set(arg0: number, arg1: Role): void;

addAll(arg0: RoleList): boolean;

addAll(arg0: number, arg1: RoleList): boolean;

add(arg0: Object): boolean;

add(arg0: number, arg1: Object): void;

addAll(arg0: Collection<any>): boolean;

addAll(arg0: number, arg1: Collection<any>): boolean;

set(arg0: number, arg1: Object): Object;
 }

export class RoleNotFoundException extends RelationException {
constructor();
constructor(arg0: String);
 }

export class RoleResult implements Serializable {
constructor(arg0: RoleList, arg1: RoleUnresolvedList);

getRoles(): RoleList;

getRolesUnresolved(): RoleUnresolvedList;

setRoles(arg0: RoleList): void;

setRolesUnresolved(arg0: RoleUnresolvedList): void;
 }

export class RoleStatus {
static NO_ROLE_WITH_NAME:number
static ROLE_NOT_READABLE:number
static ROLE_NOT_WRITABLE:number
static LESS_THAN_MIN_ROLE_DEGREE:number
static MORE_THAN_MAX_ROLE_DEGREE:number
static REF_MBEAN_OF_INCORRECT_CLASS:number
static REF_MBEAN_NOT_REGISTERED:number
constructor();

static isRoleStatus(arg0: number): boolean;
 }

export class RoleUnresolved implements Serializable {
constructor(arg0: String, arg1: List<ObjectName>, arg2: number);

getRoleName(): String;

getRoleValue(): List<ObjectName>;

getProblemType(): number;

setRoleName(arg0: String): void;

setRoleValue(arg0: List<ObjectName>): void;

setProblemType(arg0: number): void;

clone(): Object;
toString(): string;
 }

export interface RoleUnresolvedList { }
export class RoleUnresolvedList extends ArrayList<Object> {
constructor();
constructor(arg0: number);
constructor(arg0: List<RoleUnresolved>);

asList(): List<RoleUnresolved>;

add(arg0: RoleUnresolved): void;

add(arg0: number, arg1: RoleUnresolved): void;

set(arg0: number, arg1: RoleUnresolved): void;

addAll(arg0: RoleUnresolvedList): boolean;

addAll(arg0: number, arg1: RoleUnresolvedList): boolean;

add(arg0: Object): boolean;

add(arg0: number, arg1: Object): void;

addAll(arg0: Collection<any>): boolean;

addAll(arg0: number, arg1: Collection<any>): boolean;

set(arg0: number, arg1: Object): Object;
 }

}
