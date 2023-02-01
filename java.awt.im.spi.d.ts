/// <reference path="java.awt.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.text.d.ts" />
/// <reference path="java.awt.font.d.ts" />
/// <reference path="java.awt.im.d.ts" />
/// <reference path="javax.swing.d.ts" />
declare module '@afterburnerhq/java.awt.im.spi' { 
import { Rectangle, Window, AWTEvent, Image } from '@afterburnerhq/java.awt'
import { Locale } from '@afterburnerhq/java.util'
import { Character, String } from '@afterburnerhq/java.lang'
import { AttributedCharacterIterator } from '@afterburnerhq/java.text'
import { TextHitInfo } from '@afterburnerhq/java.awt.font'
import { InputMethodRequests } from '@afterburnerhq/java.awt.im'
import { JFrame } from '@afterburnerhq/javax.swing'
export interface InputMethod {

setInputMethodContext(arg0: InputMethodContext): void;

setLocale(arg0: Locale): boolean;

getLocale(): Locale;

setCharacterSubsets(arg0: Character.Subset[]): void;

setCompositionEnabled(arg0: boolean): void;

isCompositionEnabled(): boolean;

reconvert(): void;

dispatchEvent(arg0: AWTEvent): void;

notifyClientWindowChange(arg0: Rectangle): void;

activate(): void;

deactivate(arg0: boolean): void;

hideWindows(): void;

removeNotify(): void;

endComposition(): void;

dispose(): void;

getControlObject(): Object;
 }

export interface InputMethodContext extends InputMethodRequests {

dispatchInputMethodEvent(arg0: number, arg1: AttributedCharacterIterator, arg2: number, arg3: TextHitInfo, arg4: TextHitInfo): void;

createInputMethodWindow(arg0: String, arg1: boolean): Window;

createInputMethodJFrame(arg0: String, arg1: boolean): JFrame;

enableClientWindowNotification(arg0: InputMethod, arg1: boolean): void;
 }

export interface InputMethodDescriptor {

getAvailableLocales(): Locale[];

hasDynamicLocaleList(): boolean;

getInputMethodDisplayName(arg0: Locale, arg1: Locale): String;

getInputMethodIcon(arg0: Locale): Image;

createInputMethod(): InputMethod;
 }

}
