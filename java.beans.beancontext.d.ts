/// <reference path="java.awt.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.beans.d.ts" />
declare module '@afterburnerhq/java.beans.beancontext' { 
import { Component, Container } from '@afterburnerhq/java.awt'
import { Iterator, Locale, Collection, EventListener, EventObject } from '@afterburnerhq/java.util'
import { Class, String } from '@afterburnerhq/java.lang'
import { URL } from '@afterburnerhq/java.net'
import { Serializable, ObjectOutputStream, InputStream, ObjectInputStream } from '@afterburnerhq/java.io'
import { VetoableChangeListener, Visibility, PropertyChangeEvent, DesignMode, PropertyChangeListener, BeanInfo } from '@afterburnerhq/java.beans'
export namespace BeanContext { 
const globalHierarchyLock:Object
}

export interface BeanContext extends BeanContextChild, Collection, DesignMode, Visibility {
globalHierarchyLock:Object

instantiateChild(arg0: String): Object;

getResourceAsStream(arg0: String, arg1: BeanContextChild): InputStream;

getResource(arg0: String, arg1: BeanContextChild): URL;

addBeanContextMembershipListener(arg0: BeanContextMembershipListener): void;

removeBeanContextMembershipListener(arg0: BeanContextMembershipListener): void;
 }

export interface BeanContextChild {

setBeanContext(arg0: BeanContext): void;

getBeanContext(): BeanContext;

addPropertyChangeListener(arg0: String, arg1: PropertyChangeListener): void;

removePropertyChangeListener(arg0: String, arg1: PropertyChangeListener): void;

addVetoableChangeListener(arg0: String, arg1: VetoableChangeListener): void;

removeVetoableChangeListener(arg0: String, arg1: VetoableChangeListener): void;
 }

export interface BeanContextChildComponentProxy {

getComponent(): Component;
 }

export class BeanContextChildSupport implements BeanContextChild, BeanContextServicesListener, Serializable {
beanContextChildPeer:BeanContextChild
constructor();
constructor(arg0: BeanContextChild);

setBeanContext(arg0: BeanContext): void;

getBeanContext(): BeanContext;

addPropertyChangeListener(arg0: String, arg1: PropertyChangeListener): void;

removePropertyChangeListener(arg0: String, arg1: PropertyChangeListener): void;

addVetoableChangeListener(arg0: String, arg1: VetoableChangeListener): void;

removeVetoableChangeListener(arg0: String, arg1: VetoableChangeListener): void;

serviceRevoked(arg0: BeanContextServiceRevokedEvent): void;

serviceAvailable(arg0: BeanContextServiceAvailableEvent): void;

getBeanContextChildPeer(): BeanContextChild;

isDelegated(): boolean;

firePropertyChange(arg0: String, arg1: Object, arg2: Object): void;

fireVetoableChange(arg0: String, arg1: Object, arg2: Object): void;

validatePendingSetBeanContext(arg0: BeanContext): boolean;
 }

export interface BeanContextContainerProxy {

getContainer(): Container;
 }

export abstract class BeanContextEvent extends EventObject {

getBeanContext(): BeanContext;

setPropagatedFrom(arg0: BeanContext): void;

getPropagatedFrom(): BeanContext;

isPropagated(): boolean;
 }

export class BeanContextMembershipEvent extends BeanContextEvent {
constructor(arg0: BeanContext, arg1: Collection);
constructor(arg0: BeanContext, arg1: Object[]);

size(): number;

contains(arg0: Object): boolean;

toArray(): Object[];

iterator(): Iterator;
 }

export interface BeanContextMembershipListener extends EventListener {

childrenAdded(arg0: BeanContextMembershipEvent): void;

childrenRemoved(arg0: BeanContextMembershipEvent): void;
 }

export interface BeanContextProxy {

getBeanContextProxy(): BeanContextChild;
 }

export class BeanContextServiceAvailableEvent extends BeanContextEvent {
constructor(arg0: BeanContextServices, arg1: Class<any>);

getSourceAsBeanContextServices(): BeanContextServices;

getServiceClass(): Class<any>;

getCurrentServiceSelectors(): Iterator<any>;
 }

export interface BeanContextServiceProvider {

getService(arg0: BeanContextServices, arg1: Object, arg2: Class<any>, arg3: Object): Object;

releaseService(arg0: BeanContextServices, arg1: Object, arg2: Object): void;

getCurrentServiceSelectors(arg0: BeanContextServices, arg1: Class<any>): Iterator<any>;
 }

export interface BeanContextServiceProviderBeanInfo extends BeanInfo {

getServicesBeanInfo(): BeanInfo[];
 }

export class BeanContextServiceRevokedEvent extends BeanContextEvent {
constructor(arg0: BeanContextServices, arg1: Class<any>, arg2: boolean);

getSourceAsBeanContextServices(): BeanContextServices;

getServiceClass(): Class<any>;

isServiceClass(arg0: Class<any>): boolean;

isCurrentServiceInvalidNow(): boolean;
 }

export interface BeanContextServiceRevokedListener extends EventListener {

serviceRevoked(arg0: BeanContextServiceRevokedEvent): void;
 }

export interface BeanContextServices extends BeanContext, BeanContextServicesListener {

addService(arg0: Class<any>, arg1: BeanContextServiceProvider): boolean;

revokeService(arg0: Class<any>, arg1: BeanContextServiceProvider, arg2: boolean): void;

hasService(arg0: Class<any>): boolean;

getService(arg0: BeanContextChild, arg1: Object, arg2: Class<any>, arg3: Object, arg4: BeanContextServiceRevokedListener): Object;

releaseService(arg0: BeanContextChild, arg1: Object, arg2: Object): void;

getCurrentServiceClasses(): Iterator<any>;

getCurrentServiceSelectors(arg0: Class<any>): Iterator<any>;

addBeanContextServicesListener(arg0: BeanContextServicesListener): void;

removeBeanContextServicesListener(arg0: BeanContextServicesListener): void;
 }

export interface BeanContextServicesListener extends BeanContextServiceRevokedListener {

serviceAvailable(arg0: BeanContextServiceAvailableEvent): void;
 }

export interface BeanContextServicesSupport extends BeanContextServices { }
export class BeanContextServicesSupport extends BeanContextSupport implements BeanContextServices {
constructor(arg0: BeanContextServices, arg1: Locale, arg2: boolean, arg3: boolean);
constructor(arg0: BeanContextServices, arg1: Locale, arg2: boolean);
constructor(arg0: BeanContextServices, arg1: Locale);
constructor(arg0: BeanContextServices);
constructor();

initialize(): void;

getBeanContextServicesPeer(): BeanContextServices;

addBeanContextServicesListener(arg0: BeanContextServicesListener): void;

removeBeanContextServicesListener(arg0: BeanContextServicesListener): void;

addService(arg0: Class<any>, arg1: BeanContextServiceProvider): boolean;

revokeService(arg0: Class<any>, arg1: BeanContextServiceProvider, arg2: boolean): void;

hasService(arg0: Class<any>): boolean;

getService(arg0: BeanContextChild, arg1: Object, arg2: Class<any>, arg3: Object, arg4: BeanContextServiceRevokedListener): Object;

releaseService(arg0: BeanContextChild, arg1: Object, arg2: Object): void;

getCurrentServiceClasses(): Iterator<Object>;

getCurrentServiceSelectors(arg0: Class<any>): Iterator<any>;

serviceAvailable(arg0: BeanContextServiceAvailableEvent): void;

serviceRevoked(arg0: BeanContextServiceRevokedEvent): void;
 }
export namespace BeanContextServicesSupport { 
export class BCSSChild extends BeanContextSupport.BCSChild {
 }

export class BCSSProxyServiceProvider implements BeanContextServiceProvider, BeanContextServiceRevokedListener {

getService(arg0: BeanContextServices, arg1: Object, arg2: Class<any>, arg3: Object): Object;

releaseService(arg0: BeanContextServices, arg1: Object, arg2: Object): void;

getCurrentServiceSelectors(arg0: BeanContextServices, arg1: Class<any>): Iterator<any>;

serviceRevoked(arg0: BeanContextServiceRevokedEvent): void;
 }

export class BCSSServiceProvider implements Serializable {
 }

}

export interface BeanContextSupport extends BeanContext, Serializable, PropertyChangeListener, VetoableChangeListener { }
export class BeanContextSupport extends BeanContextChildSupport implements BeanContext, Serializable, PropertyChangeListener, VetoableChangeListener {
constructor(arg0: BeanContext, arg1: Locale, arg2: boolean, arg3: boolean);
constructor(arg0: BeanContext, arg1: Locale, arg2: boolean);
constructor(arg0: BeanContext, arg1: Locale);
constructor(arg0: BeanContext);
constructor();

getBeanContextPeer(): BeanContext;

instantiateChild(arg0: String): Object;

size(): number;

isEmpty(): boolean;

contains(arg0: Object): boolean;

containsKey(arg0: Object): boolean;

iterator(): Iterator<Object>;

toArray(): Object[];

toArray(arg0: Object[]): Object[];

add(arg0: Object): boolean;

remove(arg0: Object): boolean;

containsAll(arg0: Collection): boolean;

addAll(arg0: Collection): boolean;

removeAll(arg0: Collection): boolean;

retainAll(arg0: Collection): boolean;

clear(): void;

addBeanContextMembershipListener(arg0: BeanContextMembershipListener): void;

removeBeanContextMembershipListener(arg0: BeanContextMembershipListener): void;

getResourceAsStream(arg0: String, arg1: BeanContextChild): InputStream;

getResource(arg0: String, arg1: BeanContextChild): URL;

setDesignTime(arg0: boolean): void;

isDesignTime(): boolean;

setLocale(arg0: Locale): void;

getLocale(): Locale;

needsGui(): boolean;

dontUseGui(): void;

okToUseGui(): void;

avoidingGui(): boolean;

isSerializing(): boolean;

writeChildren(arg0: ObjectOutputStream): void;

readChildren(arg0: ObjectInputStream): void;

vetoableChange(arg0: PropertyChangeEvent): void;

propertyChange(arg0: PropertyChangeEvent): void;
 }
export namespace BeanContextSupport { 
export class BCSChild implements Serializable {
 }

export interface BCSIterator extends Iterator<Object> { }
export class BCSIterator extends Object implements Iterator<Object> {

hasNext(): boolean;

next(): Object;

remove(): void;
 }

}

}
