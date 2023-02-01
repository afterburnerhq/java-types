/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/javax.security.auth.callback' { 
import { Exception, String } from '@afterburnerhq/java.lang'
import { Locale } from '@afterburnerhq/java.util'
import { Serializable } from '@afterburnerhq/java.io'
export interface Callback {
 }

export interface CallbackHandler {

handle(arg0: Callback[]): void;
 }

export class ChoiceCallback implements Callback, Serializable {
constructor(arg0: String, arg1: String[], arg2: number, arg3: boolean);

getPrompt(): String;

getChoices(): String[];

getDefaultChoice(): number;

allowMultipleSelections(): boolean;

setSelectedIndex(arg0: number): void;

setSelectedIndexes(arg0: number[]): void;

getSelectedIndexes(): number[];
 }

export class ConfirmationCallback implements Callback, Serializable {
static UNSPECIFIED_OPTION:number
static YES_NO_OPTION:number
static YES_NO_CANCEL_OPTION:number
static OK_CANCEL_OPTION:number
static YES:number
static NO:number
static CANCEL:number
static OK:number
static INFORMATION:number
static WARNING:number
static ERROR:number
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number, arg1: String[], arg2: number);
constructor(arg0: String, arg1: number, arg2: number, arg3: number);
constructor(arg0: String, arg1: number, arg2: String[], arg3: number);

getPrompt(): String;

getMessageType(): number;

getOptionType(): number;

getOptions(): String[];

getDefaultOption(): number;

setSelectedIndex(arg0: number): void;

getSelectedIndex(): number;
 }

export class LanguageCallback implements Callback, Serializable {
constructor();

setLocale(arg0: Locale): void;

getLocale(): Locale;
 }

export class NameCallback implements Callback, Serializable {
constructor(arg0: String);
constructor(arg0: String, arg1: String);

getPrompt(): String;

getDefaultName(): String;

setName(arg0: String): void;

getName(): String;
 }

export class PasswordCallback implements Callback, Serializable {
constructor(arg0: String, arg1: boolean);

getPrompt(): String;

isEchoOn(): boolean;

setPassword(arg0: String[]): void;

getPassword(): String[];

clearPassword(): void;
 }

export class TextInputCallback implements Callback, Serializable {
constructor(arg0: String);
constructor(arg0: String, arg1: String);

getPrompt(): String;

getDefaultText(): String;

setText(arg0: String): void;

getText(): String;
 }

export class TextOutputCallback implements Callback, Serializable {
static INFORMATION:number
static WARNING:number
static ERROR:number
constructor(arg0: number, arg1: String);

getMessageType(): number;

getMessage(): String;
 }

export class UnsupportedCallbackException extends Exception {
constructor(arg0: Callback);
constructor(arg0: Callback, arg1: String);

getCallback(): Callback;
 }

}
