/// <reference path="java.security.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.nio.d.ts" />
declare module '@afterburnerhq/javax.smartcardio' { 
import { Permission, Provider } from '@afterburnerhq/java.security'
import { Enum, Throwable, Class, String, Exception } from '@afterburnerhq/java.lang'
import { List } from '@afterburnerhq/java.util'
import { Serializable } from '@afterburnerhq/java.io'
import { ByteBuffer } from '@afterburnerhq/java.nio'
export class ATR implements Serializable {
constructor(arg0: number[]);

getBytes(): number[];

getHistoricalBytes(): number[];
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export abstract class Card {

abstract getATR(): ATR;

abstract getProtocol(): String;

abstract getBasicChannel(): CardChannel;

abstract openLogicalChannel(): CardChannel;

abstract beginExclusive(): void;

abstract endExclusive(): void;

abstract transmitControlCommand(arg0: number, arg1: number[]): number[];

abstract disconnect(arg0: boolean): void;
 }

export abstract class CardChannel {

abstract getCard(): Card;

abstract getChannelNumber(): number;

abstract transmit(arg0: CommandAPDU): ResponseAPDU;

abstract transmit(arg0: ByteBuffer, arg1: ByteBuffer): number;

abstract close(): void;
 }

export class CardException extends Exception {
constructor(arg0: String);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
 }

export class CardNotPresentException extends CardException {
constructor(arg0: String);
constructor(arg0: Throwable);
constructor(arg0: String, arg1: Throwable);
 }

export class CardPermission extends Permission {
constructor(arg0: String, arg1: String);

getActions(): String;

implies(arg0: Permission): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export abstract class CardTerminal {

abstract getName(): String;

abstract connect(arg0: String): Card;

abstract isCardPresent(): boolean;

abstract waitForCardPresent(arg0: number): boolean;

abstract waitForCardAbsent(arg0: number): boolean;
 }

export abstract class CardTerminals {

list(): List<CardTerminal>;

abstract list(arg0: CardTerminals.State): List<CardTerminal>;

getTerminal(arg0: String): CardTerminal;

waitForChange(): void;

abstract waitForChange(arg0: number): boolean;
 }
export namespace CardTerminals { 
export class State extends Enum<CardTerminals.State> {
static ALL:CardTerminals.State
static CARD_PRESENT:CardTerminals.State
static CARD_ABSENT:CardTerminals.State
static CARD_INSERTION:CardTerminals.State
static CARD_REMOVAL:CardTerminals.State

static values(): CardTerminals.State[];

static valueOf(arg0: String): CardTerminals.State;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class CommandAPDU implements Serializable {
constructor(arg0: number[]);
constructor(arg0: number[], arg1: number, arg2: number);
constructor(arg0: ByteBuffer);
constructor(arg0: number, arg1: number, arg2: number, arg3: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number, arg7: number);

getCLA(): number;

getINS(): number;

getP1(): number;

getP2(): number;

getNc(): number;

getData(): number[];

getNe(): number;

getBytes(): number[];
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class ResponseAPDU implements Serializable {
constructor(arg0: number[]);

getNr(): number;

getData(): number[];

getSW1(): number;

getSW2(): number;

getSW(): number;

getBytes(): number[];
toString(): string;

equals(arg0: Object): boolean;

hashCode(): number;
 }

export class TerminalFactory {

static getDefaultType(): String;

static getDefault(): TerminalFactory;

static getInstance(arg0: String, arg1: Object): TerminalFactory;

static getInstance(arg0: String, arg1: Object, arg2: String): TerminalFactory;

static getInstance(arg0: String, arg1: Object, arg2: Provider): TerminalFactory;

getProvider(): Provider;

getType(): String;

terminals(): CardTerminals;
toString(): string;
 }

export abstract class TerminalFactorySpi {
 }

}
