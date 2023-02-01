/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/java.awt.desktop' { 
import { EventObject, List, EventListener } from '@afterburnerhq/java.util'
import { Enum, Class, String } from '@afterburnerhq/java.lang'
import { URI } from '@afterburnerhq/java.net'
import { File } from '@afterburnerhq/java.io'
export class AboutEvent extends AppEvent {
constructor();
 }

export interface AboutHandler {

handleAbout(arg0: AboutEvent): void;
 }

export class AppEvent extends EventObject {
 }

export class AppForegroundEvent extends AppEvent {
constructor();
 }

export interface AppForegroundListener extends SystemEventListener {

appRaisedToForeground(arg0: AppForegroundEvent): void;

appMovedToBackground(arg0: AppForegroundEvent): void;
 }

export class AppHiddenEvent extends AppEvent {
constructor();
 }

export interface AppHiddenListener extends SystemEventListener {

appHidden(arg0: AppHiddenEvent): void;

appUnhidden(arg0: AppHiddenEvent): void;
 }

export class AppReopenedEvent extends AppEvent {
constructor();
 }

export interface AppReopenedListener extends SystemEventListener {

appReopened(arg0: AppReopenedEvent): void;
 }

export class FilesEvent extends AppEvent {

getFiles(): List<File>;
 }

export class OpenFilesEvent extends FilesEvent {
constructor(arg0: List<File>, arg1: String);

getSearchTerm(): String;
 }

export interface OpenFilesHandler {

openFiles(arg0: OpenFilesEvent): void;
 }

export class OpenURIEvent extends AppEvent {
constructor(arg0: URI);

getURI(): URI;
 }

export interface OpenURIHandler {

openURI(arg0: OpenURIEvent): void;
 }

export class PreferencesEvent extends AppEvent {
constructor();
 }

export interface PreferencesHandler {

handlePreferences(arg0: PreferencesEvent): void;
 }

export class PrintFilesEvent extends FilesEvent {
constructor(arg0: List<File>);
 }

export interface PrintFilesHandler {

printFiles(arg0: PrintFilesEvent): void;
 }

export class QuitEvent extends AppEvent {
constructor();
 }

export interface QuitHandler {

handleQuitRequestWith(arg0: QuitEvent, arg1: QuitResponse): void;
 }

export interface QuitResponse {

performQuit(): void;

cancelQuit(): void;
 }

export class QuitStrategy extends Enum<QuitStrategy> {
static NORMAL_EXIT:QuitStrategy
static CLOSE_ALL_WINDOWS:QuitStrategy

static values(): QuitStrategy[];

static valueOf(arg0: String): QuitStrategy;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

export class ScreenSleepEvent extends AppEvent {
constructor();
 }

export interface ScreenSleepListener extends SystemEventListener {

screenAboutToSleep(arg0: ScreenSleepEvent): void;

screenAwoke(arg0: ScreenSleepEvent): void;
 }

export interface SystemEventListener extends EventListener {
 }

export class SystemSleepEvent extends AppEvent {
constructor();
 }

export interface SystemSleepListener extends SystemEventListener {

systemAboutToSleep(arg0: SystemSleepEvent): void;

systemAwoke(arg0: SystemSleepEvent): void;
 }

export class UserSessionEvent extends AppEvent {
constructor(arg0: UserSessionEvent.Reason);

getReason(): UserSessionEvent.Reason;
 }
export namespace UserSessionEvent { 
export class Reason extends Enum<UserSessionEvent.Reason> {
static UNSPECIFIED:UserSessionEvent.Reason
static CONSOLE:UserSessionEvent.Reason
static REMOTE:UserSessionEvent.Reason
static LOCK:UserSessionEvent.Reason

static values(): UserSessionEvent.Reason[];

static valueOf(arg0: String): UserSessionEvent.Reason;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export interface UserSessionListener extends SystemEventListener {

userSessionDeactivated(arg0: UserSessionEvent): void;

userSessionActivated(arg0: UserSessionEvent): void;
 }

}
