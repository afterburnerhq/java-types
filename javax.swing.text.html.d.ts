/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="javax.accessibility.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.awt.event.d.ts" />
/// <reference path="javax.swing.text.d.ts" />
/// <reference path="javax.swing.event.d.ts" />
/// <reference path="javax.swing.d.ts" />
declare module '@afterburnerhq/javax.swing.text.html' { 
import { Graphics, Shape, Cursor, Image, Font, Color } from '@afterburnerhq/java.awt'
import { Enum, Class, String } from '@afterburnerhq/java.lang'
import { AccessibleContext, Accessible } from '@afterburnerhq/javax.accessibility'
import { Enumeration } from '@afterburnerhq/java.util'
import { URL } from '@afterburnerhq/java.net'
import { Reader, Serializable, Writer } from '@afterburnerhq/java.io'
import { MouseAdapter, MouseEvent, InputEvent, ActionListener, MouseMotionListener, ActionEvent } from '@afterburnerhq/java.awt.event'
import { LabelView, Position, Element, ViewFactory, StyledDocument, ParagraphView, AbstractWriter, StyleContext, Document, View, DefaultStyledDocument, StyledEditorKit, AbstractDocument, MutableAttributeSet, ComponentView, AttributeSet, BoxView, Style } from '@afterburnerhq/javax.swing.text'
import { DocumentEvent, HyperlinkEvent } from '@afterburnerhq/javax.swing.event'
import { JEditorPane, Action, Icon } from '@afterburnerhq/javax.swing'
export class BlockView extends BoxView {
constructor(arg0: Element, arg1: number);

setParent(arg0: View): void;

paint(arg0: Graphics, arg1: Shape): void;

getAttributes(): AttributeSet;

getResizeWeight(arg0: number): number;

getAlignment(arg0: number): number;

changedUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;

getPreferredSpan(arg0: number): number;

getMinimumSpan(arg0: number): number;

getMaximumSpan(arg0: number): number;
 }

export class CSS implements Serializable {
constructor();

static getAllAttributeKeys(): CSS.Attribute[];

static getAttribute(arg0: String): CSS.Attribute;
 }
export namespace CSS { 
export class Attribute {
static BACKGROUND:CSS.Attribute
static BACKGROUND_ATTACHMENT:CSS.Attribute
static BACKGROUND_COLOR:CSS.Attribute
static BACKGROUND_IMAGE:CSS.Attribute
static BACKGROUND_POSITION:CSS.Attribute
static BACKGROUND_REPEAT:CSS.Attribute
static BORDER:CSS.Attribute
static BORDER_BOTTOM:CSS.Attribute
static BORDER_BOTTOM_COLOR:CSS.Attribute
static BORDER_BOTTOM_STYLE:CSS.Attribute
static BORDER_BOTTOM_WIDTH:CSS.Attribute
static BORDER_COLOR:CSS.Attribute
static BORDER_LEFT:CSS.Attribute
static BORDER_LEFT_COLOR:CSS.Attribute
static BORDER_LEFT_STYLE:CSS.Attribute
static BORDER_LEFT_WIDTH:CSS.Attribute
static BORDER_RIGHT:CSS.Attribute
static BORDER_RIGHT_COLOR:CSS.Attribute
static BORDER_RIGHT_STYLE:CSS.Attribute
static BORDER_RIGHT_WIDTH:CSS.Attribute
static BORDER_STYLE:CSS.Attribute
static BORDER_TOP:CSS.Attribute
static BORDER_TOP_COLOR:CSS.Attribute
static BORDER_TOP_STYLE:CSS.Attribute
static BORDER_TOP_WIDTH:CSS.Attribute
static BORDER_WIDTH:CSS.Attribute
static CLEAR:CSS.Attribute
static COLOR:CSS.Attribute
static DISPLAY:CSS.Attribute
static FLOAT:CSS.Attribute
static FONT:CSS.Attribute
static FONT_FAMILY:CSS.Attribute
static FONT_SIZE:CSS.Attribute
static FONT_STYLE:CSS.Attribute
static FONT_VARIANT:CSS.Attribute
static FONT_WEIGHT:CSS.Attribute
static HEIGHT:CSS.Attribute
static LETTER_SPACING:CSS.Attribute
static LINE_HEIGHT:CSS.Attribute
static LIST_STYLE:CSS.Attribute
static LIST_STYLE_IMAGE:CSS.Attribute
static LIST_STYLE_POSITION:CSS.Attribute
static LIST_STYLE_TYPE:CSS.Attribute
static MARGIN:CSS.Attribute
static MARGIN_BOTTOM:CSS.Attribute
static MARGIN_LEFT:CSS.Attribute
static MARGIN_RIGHT:CSS.Attribute
static MARGIN_TOP:CSS.Attribute
static PADDING:CSS.Attribute
static PADDING_BOTTOM:CSS.Attribute
static PADDING_LEFT:CSS.Attribute
static PADDING_RIGHT:CSS.Attribute
static PADDING_TOP:CSS.Attribute
static TEXT_ALIGN:CSS.Attribute
static TEXT_DECORATION:CSS.Attribute
static TEXT_INDENT:CSS.Attribute
static TEXT_TRANSFORM:CSS.Attribute
static VERTICAL_ALIGN:CSS.Attribute
static WORD_SPACING:CSS.Attribute
static WHITE_SPACE:CSS.Attribute
static WIDTH:CSS.Attribute
toString(): string;

getDefaultValue(): String;

isInherited(): boolean;
 }

}

export class FormSubmitEvent extends HTMLFrameHyperlinkEvent {

getMethod(): FormSubmitEvent.MethodType;

getData(): String;
 }
export namespace FormSubmitEvent { 
export class MethodType extends Enum<FormSubmitEvent.MethodType> {
static GET:FormSubmitEvent.MethodType
static POST:FormSubmitEvent.MethodType

static values(): FormSubmitEvent.MethodType[];

static valueOf(arg0: String): FormSubmitEvent.MethodType;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class FormView extends ComponentView implements ActionListener {
static SUBMIT:String
static RESET:String
constructor(arg0: Element);

getMaximumSpan(arg0: number): number;

actionPerformed(arg0: ActionEvent): void;
 }
export namespace FormView { 
export class MouseEventListener extends MouseAdapter {

mouseReleased(arg0: MouseEvent): void;
 }

}

export class HTML {
static NULL_ATTRIBUTE_VALUE:String
constructor();

static getAllTags(): HTML.Tag[];

static getTag(arg0: String): HTML.Tag;

static getIntegerAttributeValue(arg0: AttributeSet, arg1: HTML.Attribute, arg2: number): number;

static getAllAttributeKeys(): HTML.Attribute[];

static getAttributeKey(arg0: String): HTML.Attribute;
 }
export namespace HTML { 
export class Attribute {
static SIZE:HTML.Attribute
static COLOR:HTML.Attribute
static CLEAR:HTML.Attribute
static BACKGROUND:HTML.Attribute
static BGCOLOR:HTML.Attribute
static TEXT:HTML.Attribute
static LINK:HTML.Attribute
static VLINK:HTML.Attribute
static ALINK:HTML.Attribute
static WIDTH:HTML.Attribute
static HEIGHT:HTML.Attribute
static ALIGN:HTML.Attribute
static NAME:HTML.Attribute
static HREF:HTML.Attribute
static REL:HTML.Attribute
static REV:HTML.Attribute
static TITLE:HTML.Attribute
static TARGET:HTML.Attribute
static SHAPE:HTML.Attribute
static COORDS:HTML.Attribute
static ISMAP:HTML.Attribute
static NOHREF:HTML.Attribute
static ALT:HTML.Attribute
static ID:HTML.Attribute
static SRC:HTML.Attribute
static HSPACE:HTML.Attribute
static VSPACE:HTML.Attribute
static USEMAP:HTML.Attribute
static LOWSRC:HTML.Attribute
static CODEBASE:HTML.Attribute
static CODE:HTML.Attribute
static ARCHIVE:HTML.Attribute
static VALUE:HTML.Attribute
static VALUETYPE:HTML.Attribute
static TYPE:HTML.Attribute
static CLASS:HTML.Attribute
static STYLE:HTML.Attribute
static LANG:HTML.Attribute
static FACE:HTML.Attribute
static DIR:HTML.Attribute
static DECLARE:HTML.Attribute
static CLASSID:HTML.Attribute
static DATA:HTML.Attribute
static CODETYPE:HTML.Attribute
static STANDBY:HTML.Attribute
static BORDER:HTML.Attribute
static SHAPES:HTML.Attribute
static NOSHADE:HTML.Attribute
static COMPACT:HTML.Attribute
static START:HTML.Attribute
static ACTION:HTML.Attribute
static METHOD:HTML.Attribute
static ENCTYPE:HTML.Attribute
static CHECKED:HTML.Attribute
static MAXLENGTH:HTML.Attribute
static MULTIPLE:HTML.Attribute
static SELECTED:HTML.Attribute
static ROWS:HTML.Attribute
static COLS:HTML.Attribute
static DUMMY:HTML.Attribute
static CELLSPACING:HTML.Attribute
static CELLPADDING:HTML.Attribute
static VALIGN:HTML.Attribute
static HALIGN:HTML.Attribute
static NOWRAP:HTML.Attribute
static ROWSPAN:HTML.Attribute
static COLSPAN:HTML.Attribute
static PROMPT:HTML.Attribute
static HTTPEQUIV:HTML.Attribute
static CONTENT:HTML.Attribute
static LANGUAGE:HTML.Attribute
static VERSION:HTML.Attribute
static N:HTML.Attribute
static FRAMEBORDER:HTML.Attribute
static MARGINWIDTH:HTML.Attribute
static MARGINHEIGHT:HTML.Attribute
static SCROLLING:HTML.Attribute
static NORESIZE:HTML.Attribute
static ENDTAG:HTML.Attribute
static COMMENT:HTML.Attribute
toString(): string;
 }

export class Tag {
static A:HTML.Tag
static ADDRESS:HTML.Tag
static APPLET:HTML.Tag
static AREA:HTML.Tag
static B:HTML.Tag
static BASE:HTML.Tag
static BASEFONT:HTML.Tag
static BIG:HTML.Tag
static BLOCKQUOTE:HTML.Tag
static BODY:HTML.Tag
static BR:HTML.Tag
static CAPTION:HTML.Tag
static CENTER:HTML.Tag
static CITE:HTML.Tag
static CODE:HTML.Tag
static DD:HTML.Tag
static DFN:HTML.Tag
static DIR:HTML.Tag
static DIV:HTML.Tag
static DL:HTML.Tag
static DT:HTML.Tag
static EM:HTML.Tag
static FONT:HTML.Tag
static FORM:HTML.Tag
static FRAME:HTML.Tag
static FRAMESET:HTML.Tag
static H1:HTML.Tag
static H2:HTML.Tag
static H3:HTML.Tag
static H4:HTML.Tag
static H5:HTML.Tag
static H6:HTML.Tag
static HEAD:HTML.Tag
static HR:HTML.Tag
static HTML:HTML.Tag
static I:HTML.Tag
static IMG:HTML.Tag
static INPUT:HTML.Tag
static ISINDEX:HTML.Tag
static KBD:HTML.Tag
static LI:HTML.Tag
static LINK:HTML.Tag
static MAP:HTML.Tag
static MENU:HTML.Tag
static META:HTML.Tag
static NOFRAMES:HTML.Tag
static OBJECT:HTML.Tag
static OL:HTML.Tag
static OPTION:HTML.Tag
static P:HTML.Tag
static PARAM:HTML.Tag
static PRE:HTML.Tag
static SAMP:HTML.Tag
static SCRIPT:HTML.Tag
static SELECT:HTML.Tag
static SMALL:HTML.Tag
static SPAN:HTML.Tag
static STRIKE:HTML.Tag
static S:HTML.Tag
static STRONG:HTML.Tag
static STYLE:HTML.Tag
static SUB:HTML.Tag
static SUP:HTML.Tag
static TABLE:HTML.Tag
static TD:HTML.Tag
static TEXTAREA:HTML.Tag
static TH:HTML.Tag
static TITLE:HTML.Tag
static TR:HTML.Tag
static TT:HTML.Tag
static U:HTML.Tag
static UL:HTML.Tag
static VAR:HTML.Tag
static IMPLIED:HTML.Tag
static CONTENT:HTML.Tag
static COMMENT:HTML.Tag
constructor();

isBlock(): boolean;

breaksFlow(): boolean;

isPreformatted(): boolean;
toString(): string;
 }

export class UnknownTag extends HTML.Tag implements Serializable {
constructor(arg0: String);

hashCode(): number;

equals(arg0: Object): boolean;
 }

}

export class HTMLDocument extends DefaultStyledDocument {
static AdditionalComments:String
constructor();
constructor(arg0: StyleSheet);
constructor(arg0: AbstractDocument.Content, arg1: StyleSheet);

getReader(arg0: number): HTMLEditorKit.ParserCallback;

getReader(arg0: number, arg1: number, arg2: number, arg3: HTML.Tag): HTMLEditorKit.ParserCallback;

getBase(): URL;

setBase(arg0: URL): void;

setParagraphAttributes(arg0: number, arg1: number, arg2: AttributeSet, arg3: boolean): void;

getStyleSheet(): StyleSheet;

getIterator(arg0: HTML.Tag): HTMLDocument.Iterator;

setTokenThreshold(arg0: number): void;

getTokenThreshold(): number;

setPreservesUnknownTags(arg0: boolean): void;

getPreservesUnknownTags(): boolean;

processHTMLFrameHyperlinkEvent(arg0: HTMLFrameHyperlinkEvent): void;

setParser(arg0: HTMLEditorKit.Parser): void;

getParser(): HTMLEditorKit.Parser;

setInnerHTML(arg0: Element, arg1: String): void;

setOuterHTML(arg0: Element, arg1: String): void;

insertAfterStart(arg0: Element, arg1: String): void;

insertBeforeEnd(arg0: Element, arg1: String): void;

insertBeforeStart(arg0: Element, arg1: String): void;

insertAfterEnd(arg0: Element, arg1: String): void;

getElement(arg0: String): Element;

getElement(arg0: Element, arg1: Object, arg2: Object): Element;
 }
export namespace HTMLDocument { 
export class BlockElement extends AbstractDocument.BranchElement {
constructor(arg0: HTMLDocument, arg1: Element, arg2: AttributeSet);

getName(): String;

getResolveParent(): AttributeSet;
 }

export class HTMLReader extends HTMLEditorKit.ParserCallback {
constructor(arg0: HTMLDocument, arg1: number);
constructor(arg0: HTMLDocument, arg1: number, arg2: number, arg3: number, arg4: HTML.Tag);

flush(): void;

handleText(arg0: String[], arg1: number): void;

handleStartTag(arg0: HTML.Tag, arg1: MutableAttributeSet, arg2: number): void;

handleComment(arg0: String[], arg1: number): void;

handleEndTag(arg0: HTML.Tag, arg1: number): void;

handleSimpleTag(arg0: HTML.Tag, arg1: MutableAttributeSet, arg2: number): void;

handleEndOfLineString(arg0: String): void;
 }
export namespace HTMLReader { 
export class BlockAction extends HTMLDocument.HTMLReader.TagAction {
constructor(arg0: HTMLDocument.HTMLReader);

start(arg0: HTML.Tag, arg1: MutableAttributeSet): void;

end(arg0: HTML.Tag): void;
 }

export class CharacterAction extends HTMLDocument.HTMLReader.TagAction {
constructor(arg0: HTMLDocument.HTMLReader);

start(arg0: HTML.Tag, arg1: MutableAttributeSet): void;

end(arg0: HTML.Tag): void;
 }

export class FormAction extends HTMLDocument.HTMLReader.SpecialAction {
constructor(arg0: HTMLDocument.HTMLReader);

start(arg0: HTML.Tag, arg1: MutableAttributeSet): void;

end(arg0: HTML.Tag): void;
 }

export class HiddenAction extends HTMLDocument.HTMLReader.TagAction {
constructor(arg0: HTMLDocument.HTMLReader);

start(arg0: HTML.Tag, arg1: MutableAttributeSet): void;

end(arg0: HTML.Tag): void;
 }

export class IsindexAction extends HTMLDocument.HTMLReader.TagAction {
constructor(arg0: HTMLDocument.HTMLReader);

start(arg0: HTML.Tag, arg1: MutableAttributeSet): void;
 }

export class ParagraphAction extends HTMLDocument.HTMLReader.BlockAction {
constructor(arg0: HTMLDocument.HTMLReader);

start(arg0: HTML.Tag, arg1: MutableAttributeSet): void;

end(arg0: HTML.Tag): void;
 }

export class PreAction extends HTMLDocument.HTMLReader.BlockAction {
constructor(arg0: HTMLDocument.HTMLReader);

start(arg0: HTML.Tag, arg1: MutableAttributeSet): void;

end(arg0: HTML.Tag): void;
 }

export class SpecialAction extends HTMLDocument.HTMLReader.TagAction {
constructor(arg0: HTMLDocument.HTMLReader);

start(arg0: HTML.Tag, arg1: MutableAttributeSet): void;
 }

export class TagAction {
constructor(arg0: HTMLDocument.HTMLReader);

start(arg0: HTML.Tag, arg1: MutableAttributeSet): void;

end(arg0: HTML.Tag): void;
 }

}

export class BlockAction extends HTMLDocument.HTMLReader.TagAction {
constructor(arg0: HTMLDocument.HTMLReader);

start(arg0: HTML.Tag, arg1: MutableAttributeSet): void;

end(arg0: HTML.Tag): void;
 }

export class CharacterAction extends HTMLDocument.HTMLReader.TagAction {
constructor(arg0: HTMLDocument.HTMLReader);

start(arg0: HTML.Tag, arg1: MutableAttributeSet): void;

end(arg0: HTML.Tag): void;
 }

export class FormAction extends HTMLDocument.HTMLReader.SpecialAction {
constructor(arg0: HTMLDocument.HTMLReader);

start(arg0: HTML.Tag, arg1: MutableAttributeSet): void;

end(arg0: HTML.Tag): void;
 }

export class HiddenAction extends HTMLDocument.HTMLReader.TagAction {
constructor(arg0: HTMLDocument.HTMLReader);

start(arg0: HTML.Tag, arg1: MutableAttributeSet): void;

end(arg0: HTML.Tag): void;
 }

export class IsindexAction extends HTMLDocument.HTMLReader.TagAction {
constructor(arg0: HTMLDocument.HTMLReader);

start(arg0: HTML.Tag, arg1: MutableAttributeSet): void;
 }

export class ParagraphAction extends HTMLDocument.HTMLReader.BlockAction {
constructor(arg0: HTMLDocument.HTMLReader);

start(arg0: HTML.Tag, arg1: MutableAttributeSet): void;

end(arg0: HTML.Tag): void;
 }

export class PreAction extends HTMLDocument.HTMLReader.BlockAction {
constructor(arg0: HTMLDocument.HTMLReader);

start(arg0: HTML.Tag, arg1: MutableAttributeSet): void;

end(arg0: HTML.Tag): void;
 }

export class SpecialAction extends HTMLDocument.HTMLReader.TagAction {
constructor(arg0: HTMLDocument.HTMLReader);

start(arg0: HTML.Tag, arg1: MutableAttributeSet): void;
 }

export class TagAction {
constructor(arg0: HTMLDocument.HTMLReader);

start(arg0: HTML.Tag, arg1: MutableAttributeSet): void;

end(arg0: HTML.Tag): void;
 }

export abstract class Iterator {

abstract getAttributes(): AttributeSet;

abstract getStartOffset(): number;

abstract getEndOffset(): number;

abstract next(): void;

abstract isValid(): boolean;

abstract getTag(): HTML.Tag;
 }

export class RunElement extends AbstractDocument.LeafElement {
constructor(arg0: HTMLDocument, arg1: Element, arg2: AttributeSet, arg3: number, arg4: number);

getName(): String;

getResolveParent(): AttributeSet;
 }

}

export class HTMLEditorKit extends StyledEditorKit implements Accessible {
static DEFAULT_CSS:String
static BOLD_ACTION:String
static ITALIC_ACTION:String
static PARA_INDENT_LEFT:String
static PARA_INDENT_RIGHT:String
static FONT_CHANGE_BIGGER:String
static FONT_CHANGE_SMALLER:String
static COLOR_ACTION:String
static LOGICAL_STYLE_ACTION:String
static IMG_ALIGN_TOP:String
static IMG_ALIGN_MIDDLE:String
static IMG_ALIGN_BOTTOM:String
static IMG_BORDER:String
constructor();

getContentType(): String;

getViewFactory(): ViewFactory;

createDefaultDocument(): Document;

read(arg0: Reader, arg1: Document, arg2: number): void;

insertHTML(arg0: HTMLDocument, arg1: number, arg2: String, arg3: number, arg4: number, arg5: HTML.Tag): void;

write(arg0: Writer, arg1: Document, arg2: number, arg3: number): void;

install(arg0: JEditorPane): void;

deinstall(arg0: JEditorPane): void;

setStyleSheet(arg0: StyleSheet): void;

getStyleSheet(): StyleSheet;

getActions(): Action[];

getInputAttributes(): MutableAttributeSet;

setDefaultCursor(arg0: Cursor): void;

getDefaultCursor(): Cursor;

setLinkCursor(arg0: Cursor): void;

getLinkCursor(): Cursor;

isAutoFormSubmission(): boolean;

setAutoFormSubmission(arg0: boolean): void;

clone(): Object;

getAccessibleContext(): AccessibleContext;
 }
export namespace HTMLEditorKit { 
export class HTMLFactory implements ViewFactory {
constructor();

create(arg0: Element): View;
 }

export interface HTMLTextAction { }
export abstract class HTMLTextAction extends StyledEditorKit.StyledTextAction {
constructor(arg0: String);
 }

export interface InsertHTMLTextAction { }
export class InsertHTMLTextAction extends HTMLEditorKit.HTMLTextAction {
constructor(arg0: String, arg1: String, arg2: HTML.Tag, arg3: HTML.Tag);
constructor(arg0: String, arg1: String, arg2: HTML.Tag, arg3: HTML.Tag, arg4: HTML.Tag, arg5: HTML.Tag);

actionPerformed(arg0: ActionEvent): void;
 }

export class LinkController extends MouseAdapter implements MouseMotionListener, Serializable {
constructor();

mouseClicked(arg0: MouseEvent): void;

mouseDragged(arg0: MouseEvent): void;

mouseMoved(arg0: MouseEvent): void;
 }

export abstract class Parser {

abstract parse(arg0: Reader, arg1: HTMLEditorKit.ParserCallback, arg2: boolean): void;
 }

export class ParserCallback {
static IMPLIED:Object
constructor();

flush(): void;

handleText(arg0: String[], arg1: number): void;

handleComment(arg0: String[], arg1: number): void;

handleStartTag(arg0: HTML.Tag, arg1: MutableAttributeSet, arg2: number): void;

handleEndTag(arg0: HTML.Tag, arg1: number): void;

handleSimpleTag(arg0: HTML.Tag, arg1: MutableAttributeSet, arg2: number): void;

handleError(arg0: String, arg1: number): void;

handleEndOfLineString(arg0: String): void;
 }

}

export class HTMLFrameHyperlinkEvent extends HyperlinkEvent {
constructor(arg0: Object, arg1: HyperlinkEvent.EventType, arg2: URL, arg3: String);
constructor(arg0: Object, arg1: HyperlinkEvent.EventType, arg2: URL, arg3: String, arg4: String);
constructor(arg0: Object, arg1: HyperlinkEvent.EventType, arg2: URL, arg3: Element, arg4: String);
constructor(arg0: Object, arg1: HyperlinkEvent.EventType, arg2: URL, arg3: String, arg4: Element, arg5: String);
constructor(arg0: Object, arg1: HyperlinkEvent.EventType, arg2: URL, arg3: String, arg4: Element, arg5: InputEvent, arg6: String);

getTarget(): String;
 }

export class HTMLWriter extends AbstractWriter {
constructor(arg0: Writer, arg1: HTMLDocument);
constructor(arg0: Writer, arg1: HTMLDocument, arg2: number, arg3: number);

write(): void;
 }

export class ImageView extends View {
constructor(arg0: Element);

getAltText(): String;

getImageURL(): URL;

getNoImageIcon(): Icon;

getLoadingImageIcon(): Icon;

getImage(): Image;

setLoadsSynchronously(arg0: boolean): void;

getLoadsSynchronously(): boolean;

getAttributes(): AttributeSet;

getToolTipText(arg0: number, arg1: number, arg2: Shape): String;

setParent(arg0: View): void;

changedUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;

paint(arg0: Graphics, arg1: Shape): void;

getPreferredSpan(arg0: number): number;

getAlignment(arg0: number): number;

modelToView(arg0: number, arg1: Shape, arg2: Position.Bias): Shape;

viewToModel(arg0: number, arg1: number, arg2: Shape, arg3: Position.Bias[]): number;

setSize(arg0: number, arg1: number): void;
 }

export class InlineView extends LabelView {
constructor(arg0: Element);

insertUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;

removeUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;

changedUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;

getAttributes(): AttributeSet;

getBreakWeight(arg0: number, arg1: number, arg2: number): number;

breakView(arg0: number, arg1: number, arg2: number, arg3: number): View;
 }

export class ListView extends BlockView {
constructor(arg0: Element);

getAlignment(arg0: number): number;

paint(arg0: Graphics, arg1: Shape): void;
 }

export class MinimalHTMLWriter extends AbstractWriter {
constructor(arg0: Writer, arg1: StyledDocument);
constructor(arg0: Writer, arg1: StyledDocument, arg2: number, arg3: number);

write(): void;
 }

export class ObjectView extends ComponentView {
constructor(arg0: Element);
 }

export class Option implements Serializable {
constructor(arg0: AttributeSet);

setLabel(arg0: String): void;

getLabel(): String;

getAttributes(): AttributeSet;
toString(): string;

isSelected(): boolean;

getValue(): String;
 }

export class ParagraphView extends ParagraphView {
constructor(arg0: Element);

setParent(arg0: View): void;

getAttributes(): AttributeSet;

isVisible(): boolean;

paint(arg0: Graphics, arg1: Shape): void;

getPreferredSpan(arg0: number): number;

getMinimumSpan(arg0: number): number;

getMaximumSpan(arg0: number): number;
 }

export class StyleSheet extends StyleContext {
constructor();

getRule(arg0: HTML.Tag, arg1: Element): Style;

getRule(arg0: String): Style;

addRule(arg0: String): void;

getDeclaration(arg0: String): AttributeSet;

loadRules(arg0: Reader, arg1: URL): void;

getViewAttributes(arg0: View): AttributeSet;

removeStyle(arg0: String): void;

addStyleSheet(arg0: StyleSheet): void;

removeStyleSheet(arg0: StyleSheet): void;

getStyleSheets(): StyleSheet[];

importStyleSheet(arg0: URL): void;

setBase(arg0: URL): void;

getBase(): URL;

addCSSAttribute(arg0: MutableAttributeSet, arg1: CSS.Attribute, arg2: String): void;

addCSSAttributeFromHTML(arg0: MutableAttributeSet, arg1: CSS.Attribute, arg2: String): boolean;

translateHTMLToCSS(arg0: AttributeSet): AttributeSet;

addAttribute(arg0: AttributeSet, arg1: Object, arg2: Object): AttributeSet;

addAttributes(arg0: AttributeSet, arg1: AttributeSet): AttributeSet;

removeAttribute(arg0: AttributeSet, arg1: Object): AttributeSet;

removeAttributes(arg0: AttributeSet, arg1: Enumeration<any>): AttributeSet;

removeAttributes(arg0: AttributeSet, arg1: AttributeSet): AttributeSet;

getFont(arg0: AttributeSet): Font;

getForeground(arg0: AttributeSet): Color;

getBackground(arg0: AttributeSet): Color;

getBoxPainter(arg0: AttributeSet): StyleSheet.BoxPainter;

getListPainter(arg0: AttributeSet): StyleSheet.ListPainter;

setBaseFontSize(arg0: number): void;

setBaseFontSize(arg0: String): void;

static getIndexOfSize(arg0: number): number;

getPointSize(arg0: number): number;

getPointSize(arg0: String): number;

stringToColor(arg0: String): Color;
 }
export namespace StyleSheet { 
export class BoxPainter implements Serializable {

getInset(arg0: number, arg1: View): number;

paint(arg0: Graphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: View): void;
 }

export class ListPainter implements Serializable {

paint(arg0: Graphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: View, arg6: number): void;
 }

}

}
