/// <reference path="java.awt.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.text.d.ts" />
/// <reference path="java.awt.font.d.ts" />
declare module '@afterburnerhq/java.awt.im' { 
import { Component, Rectangle, AWTEvent } from '@afterburnerhq/java.awt'
import { Locale, Map } from '@afterburnerhq/java.util'
import { Character } from '@afterburnerhq/java.lang'
import { AttributedCharacterIterator } from '@afterburnerhq/java.text'
import { TextAttribute, TextHitInfo } from '@afterburnerhq/java.awt.font'
export class InputContext {

static getInstance(): InputContext;

selectInputMethod(arg0: Locale): boolean;

getLocale(): Locale;

setCharacterSubsets(arg0: Character.Subset[]): void;

setCompositionEnabled(arg0: boolean): void;

isCompositionEnabled(): boolean;

reconvert(): void;

dispatchEvent(arg0: AWTEvent): void;

removeNotify(arg0: Component): void;

endComposition(): void;

dispose(): void;

getInputMethodControlObject(): Object;
 }

export class InputMethodHighlight {
static RAW_TEXT:number
static CONVERTED_TEXT:number
static UNSELECTED_RAW_TEXT_HIGHLIGHT:InputMethodHighlight
static SELECTED_RAW_TEXT_HIGHLIGHT:InputMethodHighlight
static UNSELECTED_CONVERTED_TEXT_HIGHLIGHT:InputMethodHighlight
static SELECTED_CONVERTED_TEXT_HIGHLIGHT:InputMethodHighlight
constructor(arg0: boolean, arg1: number);
constructor(arg0: boolean, arg1: number, arg2: number);
constructor(arg0: boolean, arg1: number, arg2: number, arg3: Map<TextAttribute, any>);

isSelected(): boolean;

getState(): number;

getVariation(): number;

getStyle(): Map<TextAttribute, any>;
 }

export interface InputMethodRequests {

getTextLocation(arg0: TextHitInfo): Rectangle;

getLocationOffset(arg0: number, arg1: number): TextHitInfo;

getInsertPositionOffset(): number;

getCommittedText(arg0: number, arg1: number, arg2: AttributedCharacterIterator.Attribute[]): AttributedCharacterIterator;

getCommittedTextLength(): number;

cancelLatestCommittedText(arg0: AttributedCharacterIterator.Attribute[]): AttributedCharacterIterator;

getSelectedText(arg0: AttributedCharacterIterator.Attribute[]): AttributedCharacterIterator;
 }

export class InputSubset extends Character.Subset {
static LATIN:InputSubset
static LATIN_DIGITS:InputSubset
static TRADITIONAL_HANZI:InputSubset
static SIMPLIFIED_HANZI:InputSubset
static KANJI:InputSubset
static HANJA:InputSubset
static HALFWIDTH_KATAKANA:InputSubset
static FULLWIDTH_LATIN:InputSubset
static FULLWIDTH_DIGITS:InputSubset
 }

}
