/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="javax.accessibility.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/java.applet' { 
import { Image, Panel, Dimension } from '@afterburnerhq/java.awt'
import { String } from '@afterburnerhq/java.lang'
import { Locale, Iterator, Enumeration } from '@afterburnerhq/java.util'
import { AccessibleContext, AccessibleRole, AccessibleStateSet } from '@afterburnerhq/javax.accessibility'
import { URL } from '@afterburnerhq/java.net'
import { InputStream } from '@afterburnerhq/java.io'
export class Applet extends Panel {
constructor();

setStub(arg0: AppletStub): void;

isActive(): boolean;

getDocumentBase(): URL;

getCodeBase(): URL;

getParameter(arg0: String): String;

getAppletContext(): AppletContext;

resize(arg0: number, arg1: number): void;

resize(arg0: Dimension): void;

isValidateRoot(): boolean;

showStatus(arg0: String): void;

getImage(arg0: URL): Image;

getImage(arg0: URL, arg1: String): Image;

static newAudioClip(arg0: URL): AudioClip;

getAudioClip(arg0: URL): AudioClip;

getAudioClip(arg0: URL, arg1: String): AudioClip;

getAppletInfo(): String;

getLocale(): Locale;

getParameterInfo(): Array<Array<String>>;

play(arg0: URL): void;

play(arg0: URL, arg1: String): void;

init(): void;

start(): void;

stop(): void;

destroy(): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace Applet { 
export class AccessibleApplet extends Panel.AccessibleAWTPanel {

getAccessibleRole(): AccessibleRole;

getAccessibleStateSet(): AccessibleStateSet;
 }

}

export interface AppletContext {

getAudioClip(arg0: URL): AudioClip;

getImage(arg0: URL): Image;

getApplet(arg0: String): Applet;

getApplets(): Enumeration<Applet>;

showDocument(arg0: URL): void;

showDocument(arg0: URL, arg1: String): void;

showStatus(arg0: String): void;

setStream(arg0: String, arg1: InputStream): void;

getStream(arg0: String): InputStream;

getStreamKeys(): Iterator<String>;
 }

export interface AppletStub {

isActive(): boolean;

getDocumentBase(): URL;

getCodeBase(): URL;

getParameter(arg0: String): String;

getAppletContext(): AppletContext;

appletResize(arg0: number, arg1: number): void;
 }

export interface AudioClip {

play(): void;

loop(): void;

stop(): void;
 }

}
