/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/javax.sound.midi' { 
import { Map, List, EventListener } from '@afterburnerhq/java.util'
import { Cloneable, Class, String, Exception, AutoCloseable } from '@afterburnerhq/java.lang'
import { URL } from '@afterburnerhq/java.net'
import { File, InputStream, OutputStream } from '@afterburnerhq/java.io'
export interface ControllerEventListener extends EventListener {

controlChange(arg0: ShortMessage): void;
 }

export abstract class Instrument extends SoundbankResource {

getPatch(): Patch;
 }

export class InvalidMidiDataException extends Exception {
constructor();
constructor(arg0: String);
 }

export interface MetaEventListener extends EventListener {

meta(arg0: MetaMessage): void;
 }

export class MetaMessage extends MidiMessage {
static META:number
constructor();
constructor(arg0: number, arg1: number[], arg2: number);

setMessage(arg0: number, arg1: number[], arg2: number): void;

getType(): number;

getData(): number[];

clone(): Object;
 }

export interface MidiChannel {

noteOn(arg0: number, arg1: number): void;

noteOff(arg0: number, arg1: number): void;

noteOff(arg0: number): void;

setPolyPressure(arg0: number, arg1: number): void;

getPolyPressure(arg0: number): number;

setChannelPressure(arg0: number): void;

getChannelPressure(): number;

controlChange(arg0: number, arg1: number): void;

getController(arg0: number): number;

programChange(arg0: number): void;

programChange(arg0: number, arg1: number): void;

getProgram(): number;

setPitchBend(arg0: number): void;

getPitchBend(): number;

resetAllControllers(): void;

allNotesOff(): void;

allSoundOff(): void;

localControl(arg0: boolean): boolean;

setMono(arg0: boolean): void;

getMono(): boolean;

setOmni(arg0: boolean): void;

getOmni(): boolean;

setMute(arg0: boolean): void;

getMute(): boolean;

setSolo(arg0: boolean): void;

getSolo(): boolean;
 }

export interface MidiDevice extends AutoCloseable {

getDeviceInfo(): MidiDevice.Info;

open(): void;

close(): void;

isOpen(): boolean;

getMicrosecondPosition(): number;

getMaxReceivers(): number;

getMaxTransmitters(): number;

getReceiver(): Receiver;

getReceivers(): List<Receiver>;

getTransmitter(): Transmitter;

getTransmitters(): List<Transmitter>;
 }
export namespace MidiDevice { 
export class Info {

equals(arg0: Object): boolean;

hashCode(): number;

getName(): String;

getVendor(): String;

getDescription(): String;

getVersion(): String;
toString(): string;
 }

}

export interface MidiDeviceReceiver extends Receiver {

getMidiDevice(): MidiDevice;
 }

export interface MidiDeviceTransmitter extends Transmitter {

getMidiDevice(): MidiDevice;
 }

export class MidiEvent {
constructor(arg0: MidiMessage, arg1: number);

getMessage(): MidiMessage;

setTick(arg0: number): void;

getTick(): number;
 }

export class MidiFileFormat {
static UNKNOWN_LENGTH:number
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Map<String, Object>);

getType(): number;

getDivisionType(): number;

getResolution(): number;

getByteLength(): number;

getMicrosecondLength(): number;

properties(): Map<String, Object>;

getProperty(arg0: String): Object;
 }

export abstract class MidiMessage implements Cloneable {

getMessage(): number[];

getStatus(): number;

getLength(): number;

abstract clone(): Object;
 }

export class MidiSystem {

static getMidiDeviceInfo(): MidiDevice.Info[];

static getMidiDevice(arg0: MidiDevice.Info): MidiDevice;

static getReceiver(): Receiver;

static getTransmitter(): Transmitter;

static getSynthesizer(): Synthesizer;

static getSequencer(): Sequencer;

static getSequencer(arg0: boolean): Sequencer;

static getSoundbank(arg0: InputStream): Soundbank;

static getSoundbank(arg0: URL): Soundbank;

static getSoundbank(arg0: File): Soundbank;

static getMidiFileFormat(arg0: InputStream): MidiFileFormat;

static getMidiFileFormat(arg0: URL): MidiFileFormat;

static getMidiFileFormat(arg0: File): MidiFileFormat;

static getSequence(arg0: InputStream): Sequence;

static getSequence(arg0: URL): Sequence;

static getSequence(arg0: File): Sequence;

static getMidiFileTypes(): number[];

static isFileTypeSupported(arg0: number): boolean;

static getMidiFileTypes(arg0: Sequence): number[];

static isFileTypeSupported(arg0: number, arg1: Sequence): boolean;

static write(arg0: Sequence, arg1: number, arg2: OutputStream): number;

static write(arg0: Sequence, arg1: number, arg2: File): number;
 }

export class MidiUnavailableException extends Exception {
constructor();
constructor(arg0: String);
 }

export class Patch {
constructor(arg0: number, arg1: number);

getBank(): number;

getProgram(): number;
 }

export interface Receiver extends AutoCloseable {

send(arg0: MidiMessage, arg1: number): void;

close(): void;
 }

export class Sequence {
static PPQ:number
static SMPTE_24:number
static SMPTE_25:number
static SMPTE_30DROP:number
static SMPTE_30:number
constructor(arg0: number, arg1: number);
constructor(arg0: number, arg1: number, arg2: number);

getDivisionType(): number;

getResolution(): number;

createTrack(): Track;

deleteTrack(arg0: Track): boolean;

getTracks(): Track[];

getMicrosecondLength(): number;

getTickLength(): number;

getPatchList(): Patch[];
 }

export namespace Sequencer { 
const LOOP_CONTINUOUSLY:number
}

export interface Sequencer extends MidiDevice {
LOOP_CONTINUOUSLY:number

setSequence(arg0: Sequence): void;

setSequence(arg0: InputStream): void;

getSequence(): Sequence;

start(): void;

stop(): void;

isRunning(): boolean;

startRecording(): void;

stopRecording(): void;

isRecording(): boolean;

recordEnable(arg0: Track, arg1: number): void;

recordDisable(arg0: Track): void;

getTempoInBPM(): number;

setTempoInBPM(arg0: number): void;

getTempoInMPQ(): number;

setTempoInMPQ(arg0: number): void;

setTempoFactor(arg0: number): void;

getTempoFactor(): number;

getTickLength(): number;

getTickPosition(): number;

setTickPosition(arg0: number): void;

getMicrosecondLength(): number;

getMicrosecondPosition(): number;

setMicrosecondPosition(arg0: number): void;

setMasterSyncMode(arg0: Sequencer.SyncMode): void;

getMasterSyncMode(): Sequencer.SyncMode;

getMasterSyncModes(): Sequencer.SyncMode[];

setSlaveSyncMode(arg0: Sequencer.SyncMode): void;

getSlaveSyncMode(): Sequencer.SyncMode;

getSlaveSyncModes(): Sequencer.SyncMode[];

setTrackMute(arg0: number, arg1: boolean): void;

getTrackMute(arg0: number): boolean;

setTrackSolo(arg0: number, arg1: boolean): void;

getTrackSolo(arg0: number): boolean;

addMetaEventListener(arg0: MetaEventListener): boolean;

removeMetaEventListener(arg0: MetaEventListener): void;

addControllerEventListener(arg0: ControllerEventListener, arg1: number[]): number[];

removeControllerEventListener(arg0: ControllerEventListener, arg1: number[]): number[];

setLoopStartPoint(arg0: number): void;

getLoopStartPoint(): number;

setLoopEndPoint(arg0: number): void;

getLoopEndPoint(): number;

setLoopCount(arg0: number): void;

getLoopCount(): number;
 }
export namespace Sequencer { 
export class SyncMode {
static INTERNAL_CLOCK:Sequencer.SyncMode
static MIDI_SYNC:Sequencer.SyncMode
static MIDI_TIME_CODE:Sequencer.SyncMode
static NO_SYNC:Sequencer.SyncMode

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

}

export class ShortMessage extends MidiMessage {
static MIDI_TIME_CODE:number
static SONG_POSITION_POINTER:number
static SONG_SELECT:number
static TUNE_REQUEST:number
static END_OF_EXCLUSIVE:number
static TIMING_CLOCK:number
static START:number
static CONTINUE:number
static STOP:number
static ACTIVE_SENSING:number
static SYSTEM_RESET:number
static NOTE_OFF:number
static NOTE_ON:number
static POLY_PRESSURE:number
static CONTROL_CHANGE:number
static PROGRAM_CHANGE:number
static CHANNEL_PRESSURE:number
static PITCH_BEND:number
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: number, arg2: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number);

setMessage(arg0: number): void;

setMessage(arg0: number, arg1: number, arg2: number): void;

setMessage(arg0: number, arg1: number, arg2: number, arg3: number): void;

getChannel(): number;

getCommand(): number;

getData1(): number;

getData2(): number;

clone(): Object;
 }

export interface Soundbank {

getName(): String;

getVersion(): String;

getVendor(): String;

getDescription(): String;

getResources(): SoundbankResource[];

getInstruments(): Instrument[];

getInstrument(arg0: Patch): Instrument;
 }

export abstract class SoundbankResource {

getSoundbank(): Soundbank;

getName(): String;

getDataClass(): Class<any>;

abstract getData(): Object;
 }

export interface Synthesizer extends MidiDevice {

getMaxPolyphony(): number;

getLatency(): number;

getChannels(): MidiChannel[];

getVoiceStatus(): VoiceStatus[];

isSoundbankSupported(arg0: Soundbank): boolean;

loadInstrument(arg0: Instrument): boolean;

unloadInstrument(arg0: Instrument): void;

remapInstrument(arg0: Instrument, arg1: Instrument): boolean;

getDefaultSoundbank(): Soundbank;

getAvailableInstruments(): Instrument[];

getLoadedInstruments(): Instrument[];

loadAllInstruments(arg0: Soundbank): boolean;

unloadAllInstruments(arg0: Soundbank): void;

loadInstruments(arg0: Soundbank, arg1: Patch[]): boolean;

unloadInstruments(arg0: Soundbank, arg1: Patch[]): void;
 }

export class SysexMessage extends MidiMessage {
static SYSTEM_EXCLUSIVE:number
static SPECIAL_SYSTEM_EXCLUSIVE:number
constructor();
constructor(arg0: number[], arg1: number);
constructor(arg0: number, arg1: number[], arg2: number);

setMessage(arg0: number[], arg1: number): void;

setMessage(arg0: number, arg1: number[], arg2: number): void;

getData(): number[];

clone(): Object;
 }

export class Track {

add(arg0: MidiEvent): boolean;

remove(arg0: MidiEvent): boolean;

get(arg0: number): MidiEvent;

size(): number;

ticks(): number;
 }

export interface Transmitter extends AutoCloseable {

setReceiver(arg0: Receiver): void;

getReceiver(): Receiver;

close(): void;
 }

export class VoiceStatus {
active:boolean
channel:number
bank:number
program:number
note:number
volume:number
constructor();
 }

}
