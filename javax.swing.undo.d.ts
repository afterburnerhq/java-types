/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.swing.event.d.ts" />
declare module '@afterburnerhq/javax.swing.undo' { 
import { String, RuntimeException } from '@afterburnerhq/java.lang'
import { Hashtable } from '@afterburnerhq/java.util'
import { Serializable } from '@afterburnerhq/java.io'
import { UndoableEditListener, UndoableEditEvent } from '@afterburnerhq/javax.swing.event'
export class AbstractUndoableEdit implements UndoableEdit, Serializable {
constructor();

die(): void;

undo(): void;

canUndo(): boolean;

redo(): void;

canRedo(): boolean;

addEdit(arg0: UndoableEdit): boolean;

replaceEdit(arg0: UndoableEdit): boolean;

isSignificant(): boolean;

getPresentationName(): String;

getUndoPresentationName(): String;

getRedoPresentationName(): String;
toString(): string;
 }

export class CannotRedoException extends RuntimeException {
constructor();
 }

export class CannotUndoException extends RuntimeException {
constructor();
 }

export class CompoundEdit extends AbstractUndoableEdit {
constructor();

undo(): void;

redo(): void;

die(): void;

addEdit(arg0: UndoableEdit): boolean;

end(): void;

canUndo(): boolean;

canRedo(): boolean;

isInProgress(): boolean;

isSignificant(): boolean;

getPresentationName(): String;

getUndoPresentationName(): String;

getRedoPresentationName(): String;
toString(): string;
 }

export class StateEdit extends AbstractUndoableEdit {
constructor(arg0: StateEditable);
constructor(arg0: StateEditable, arg1: String);

end(): void;

undo(): void;

redo(): void;

getPresentationName(): String;
 }

export namespace StateEditable { 
const RCSID:String
}

export interface StateEditable {
RCSID:String

storeState(arg0: Hashtable<Object, Object>): void;

restoreState(arg0: Hashtable<any, any>): void;
 }

export class UndoManager extends CompoundEdit implements UndoableEditListener {
constructor();

getLimit(): number;

discardAllEdits(): void;

setLimit(arg0: number): void;

undoOrRedo(): void;

canUndoOrRedo(): boolean;

undo(): void;

canUndo(): boolean;

redo(): void;

canRedo(): boolean;

addEdit(arg0: UndoableEdit): boolean;

end(): void;

getUndoOrRedoPresentationName(): String;

getUndoPresentationName(): String;

getRedoPresentationName(): String;

undoableEditHappened(arg0: UndoableEditEvent): void;
toString(): string;
 }

export interface UndoableEdit {

undo(): void;

canUndo(): boolean;

redo(): void;

canRedo(): boolean;

die(): void;

addEdit(arg0: UndoableEdit): boolean;

replaceEdit(arg0: UndoableEdit): boolean;

isSignificant(): boolean;

getPresentationName(): String;

getUndoPresentationName(): String;

getRedoPresentationName(): String;
 }

export class UndoableEditSupport {
constructor();
constructor(arg0: Object);

addUndoableEditListener(arg0: UndoableEditListener): void;

removeUndoableEditListener(arg0: UndoableEditListener): void;

getUndoableEditListeners(): UndoableEditListener[];

postEdit(arg0: UndoableEdit): void;

getUpdateLevel(): number;

beginUpdate(): void;

endUpdate(): void;
toString(): string;
 }

}
