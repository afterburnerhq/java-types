/// <reference path="java.security.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/javax.sound.sampled' { 
import { BasicPermission } from '@afterburnerhq/java.security'
import { Map, EventObject, EventListener } from '@afterburnerhq/java.util'
import { Class, String, Exception, AutoCloseable } from '@afterburnerhq/java.lang'
import { URL } from '@afterburnerhq/java.net'
import { File, InputStream, OutputStream } from '@afterburnerhq/java.io'
export class AudioFileFormat {
constructor(arg0: AudioFileFormat.Type, arg1: AudioFormat, arg2: number);
constructor(arg0: AudioFileFormat.Type, arg1: AudioFormat, arg2: number, arg3: Map<String, Object>);

getType(): AudioFileFormat.Type;

getByteLength(): number;

getFormat(): AudioFormat;

getFrameLength(): number;

properties(): Map<String, Object>;

getProperty(arg0: String): Object;
toString(): string;
 }
export namespace AudioFileFormat { 
export class Type {
static WAVE:AudioFileFormat.Type
static AU:AudioFileFormat.Type
static AIFF:AudioFileFormat.Type
static AIFC:AudioFileFormat.Type
static SND:AudioFileFormat.Type
constructor(arg0: String, arg1: String);

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;

getExtension(): String;
 }

}

export class AudioFormat {
constructor(arg0: AudioFormat.Encoding, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean);
constructor(arg0: AudioFormat.Encoding, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Map<String, Object>);
constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean);

getEncoding(): AudioFormat.Encoding;

getSampleRate(): number;

getSampleSizeInBits(): number;

getChannels(): number;

getFrameSize(): number;

getFrameRate(): number;

isBigEndian(): boolean;

properties(): Map<String, Object>;

getProperty(arg0: String): Object;

matches(arg0: AudioFormat): boolean;
toString(): string;
 }
export namespace AudioFormat { 
export class Encoding {
static PCM_SIGNED:AudioFormat.Encoding
static PCM_UNSIGNED:AudioFormat.Encoding
static PCM_FLOAT:AudioFormat.Encoding
static ULAW:AudioFormat.Encoding
static ALAW:AudioFormat.Encoding
constructor(arg0: String);

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

}

export class AudioInputStream extends InputStream {
constructor(arg0: InputStream, arg1: AudioFormat, arg2: number);
constructor(arg0: TargetDataLine);

getFormat(): AudioFormat;

getFrameLength(): number;

read(): number;

read(arg0: number[]): number;

read(arg0: number[], arg1: number, arg2: number): number;

skip(arg0: number): number;

available(): number;

close(): void;

mark(arg0: number): void;

reset(): void;

markSupported(): boolean;
 }

export class AudioPermission extends BasicPermission {
constructor(arg0: String);
constructor(arg0: String, arg1: String);
 }

export class AudioSystem {
static NOT_SPECIFIED:number

static getMixerInfo(): Mixer.Info[];

static getMixer(arg0: Mixer.Info): Mixer;

static getSourceLineInfo(arg0: Line.Info): Line.Info[];

static getTargetLineInfo(arg0: Line.Info): Line.Info[];

static isLineSupported(arg0: Line.Info): boolean;

static getLine(arg0: Line.Info): Line;

static getClip(): Clip;

static getClip(arg0: Mixer.Info): Clip;

static getSourceDataLine(arg0: AudioFormat): SourceDataLine;

static getSourceDataLine(arg0: AudioFormat, arg1: Mixer.Info): SourceDataLine;

static getTargetDataLine(arg0: AudioFormat): TargetDataLine;

static getTargetDataLine(arg0: AudioFormat, arg1: Mixer.Info): TargetDataLine;

static getTargetEncodings(arg0: AudioFormat.Encoding): AudioFormat.Encoding[];

static getTargetEncodings(arg0: AudioFormat): AudioFormat.Encoding[];

static isConversionSupported(arg0: AudioFormat.Encoding, arg1: AudioFormat): boolean;

static getAudioInputStream(arg0: AudioFormat.Encoding, arg1: AudioInputStream): AudioInputStream;

static getTargetFormats(arg0: AudioFormat.Encoding, arg1: AudioFormat): AudioFormat[];

static isConversionSupported(arg0: AudioFormat, arg1: AudioFormat): boolean;

static getAudioInputStream(arg0: AudioFormat, arg1: AudioInputStream): AudioInputStream;

static getAudioFileFormat(arg0: InputStream): AudioFileFormat;

static getAudioFileFormat(arg0: URL): AudioFileFormat;

static getAudioFileFormat(arg0: File): AudioFileFormat;

static getAudioInputStream(arg0: InputStream): AudioInputStream;

static getAudioInputStream(arg0: URL): AudioInputStream;

static getAudioInputStream(arg0: File): AudioInputStream;

static getAudioFileTypes(): AudioFileFormat.Type[];

static isFileTypeSupported(arg0: AudioFileFormat.Type): boolean;

static getAudioFileTypes(arg0: AudioInputStream): AudioFileFormat.Type[];

static isFileTypeSupported(arg0: AudioFileFormat.Type, arg1: AudioInputStream): boolean;

static write(arg0: AudioInputStream, arg1: AudioFileFormat.Type, arg2: OutputStream): number;

static write(arg0: AudioInputStream, arg1: AudioFileFormat.Type, arg2: File): number;
 }

export abstract class BooleanControl extends Control {

setValue(arg0: boolean): void;

getValue(): boolean;

getStateLabel(arg0: boolean): String;
toString(): string;
 }
export namespace BooleanControl { 
export class Type extends Control.Type {
static MUTE:BooleanControl.Type
static APPLY_REVERB:BooleanControl.Type
 }

}

export namespace Clip { 
const LOOP_CONTINUOUSLY:number
}

export interface Clip extends DataLine {
LOOP_CONTINUOUSLY:number

open(arg0: AudioFormat, arg1: number[], arg2: number, arg3: number): void;

open(arg0: AudioInputStream): void;

getFrameLength(): number;

getMicrosecondLength(): number;

setFramePosition(arg0: number): void;

setMicrosecondPosition(arg0: number): void;

setLoopPoints(arg0: number, arg1: number): void;

loop(arg0: number): void;
 }

export abstract class CompoundControl extends Control {

getMemberControls(): Control[];
toString(): string;
 }
export namespace CompoundControl { 
export class Type extends Control.Type {
 }

}

export abstract class Control {

getType(): Control.Type;
toString(): string;
 }
export namespace Control { 
export class Type {

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

}

export interface DataLine extends Line {

drain(): void;

flush(): void;

start(): void;

stop(): void;

isRunning(): boolean;

isActive(): boolean;

getFormat(): AudioFormat;

getBufferSize(): number;

available(): number;

getFramePosition(): number;

getLongFramePosition(): number;

getMicrosecondPosition(): number;

getLevel(): number;
 }
export namespace DataLine { 
export class Info extends Line.Info {
constructor(arg0: Class<any>, arg1: AudioFormat[], arg2: number, arg3: number);
constructor(arg0: Class<any>, arg1: AudioFormat, arg2: number);
constructor(arg0: Class<any>, arg1: AudioFormat);

getFormats(): AudioFormat[];

isFormatSupported(arg0: AudioFormat): boolean;

getMinBufferSize(): number;

getMaxBufferSize(): number;

matches(arg0: Line.Info): boolean;
toString(): string;
 }

}

export abstract class EnumControl extends Control {

setValue(arg0: Object): void;

getValue(): Object;

getValues(): Object[];
toString(): string;
 }
export namespace EnumControl { 
export class Type extends Control.Type {
static REVERB:EnumControl.Type
 }

}

export abstract class FloatControl extends Control {

setValue(arg0: number): void;

getValue(): number;

getMaximum(): number;

getMinimum(): number;

getUnits(): String;

getMinLabel(): String;

getMidLabel(): String;

getMaxLabel(): String;

getPrecision(): number;

getUpdatePeriod(): number;

shift(arg0: number, arg1: number, arg2: number): void;
toString(): string;
 }
export namespace FloatControl { 
export class Type extends Control.Type {
static MASTER_GAIN:FloatControl.Type
static AUX_SEND:FloatControl.Type
static AUX_RETURN:FloatControl.Type
static REVERB_SEND:FloatControl.Type
static REVERB_RETURN:FloatControl.Type
static VOLUME:FloatControl.Type
static PAN:FloatControl.Type
static BALANCE:FloatControl.Type
static SAMPLE_RATE:FloatControl.Type
 }

}

export interface Line extends AutoCloseable {

getLineInfo(): Line.Info;

open(): void;

close(): void;

isOpen(): boolean;

getControls(): Control[];

isControlSupported(arg0: Control.Type): boolean;

getControl(arg0: Control.Type): Control;

addLineListener(arg0: LineListener): void;

removeLineListener(arg0: LineListener): void;
 }
export namespace Line { 
export class Info {
constructor(arg0: Class<any>);

getLineClass(): Class<any>;

matches(arg0: Line.Info): boolean;
toString(): string;
 }

}

export class LineEvent extends EventObject {
constructor(arg0: Line, arg1: LineEvent.Type, arg2: number);

getLine(): Line;

getType(): LineEvent.Type;

getFramePosition(): number;
toString(): string;
 }
export namespace LineEvent { 
export class Type {
static OPEN:LineEvent.Type
static CLOSE:LineEvent.Type
static START:LineEvent.Type
static STOP:LineEvent.Type

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

}

export interface LineListener extends EventListener {

update(arg0: LineEvent): void;
 }

export class LineUnavailableException extends Exception {
constructor();
constructor(arg0: String);
 }

export interface Mixer extends Line {

getMixerInfo(): Mixer.Info;

getSourceLineInfo(): Line.Info[];

getTargetLineInfo(): Line.Info[];

getSourceLineInfo(arg0: Line.Info): Line.Info[];

getTargetLineInfo(arg0: Line.Info): Line.Info[];

isLineSupported(arg0: Line.Info): boolean;

getLine(arg0: Line.Info): Line;

getMaxLines(arg0: Line.Info): number;

getSourceLines(): Line[];

getTargetLines(): Line[];

synchronize(arg0: Line[], arg1: boolean): void;

unsynchronize(arg0: Line[]): void;

isSynchronizationSupported(arg0: Line[], arg1: boolean): boolean;
 }
export namespace Mixer { 
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

export interface Port extends Line {
 }
export namespace Port { 
export class Info extends Line.Info {
static MICROPHONE:Port.Info
static LINE_IN:Port.Info
static COMPACT_DISC:Port.Info
static SPEAKER:Port.Info
static HEADPHONE:Port.Info
static LINE_OUT:Port.Info
constructor(arg0: Class<any>, arg1: String, arg2: boolean);

getName(): String;

isSource(): boolean;

matches(arg0: Line.Info): boolean;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

}

export class ReverbType {

getName(): String;

getEarlyReflectionDelay(): number;

getEarlyReflectionIntensity(): number;

getLateReflectionDelay(): number;

getLateReflectionIntensity(): number;

getDecayTime(): number;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export interface SourceDataLine extends DataLine {

open(arg0: AudioFormat, arg1: number): void;

open(arg0: AudioFormat): void;

write(arg0: number[], arg1: number, arg2: number): number;
 }

export interface TargetDataLine extends DataLine {

open(arg0: AudioFormat, arg1: number): void;

open(arg0: AudioFormat): void;

read(arg0: number[], arg1: number, arg2: number): number;
 }

export class UnsupportedAudioFileException extends Exception {
constructor();
constructor(arg0: String);
 }

}
