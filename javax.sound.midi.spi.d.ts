/// <reference path="javax.sound.midi.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/javax.sound.midi.spi' { 
import { MidiFileFormat, MidiDevice, Sequence, Soundbank } from '@afterburnerhq/javax.sound.midi'
import { URL } from '@afterburnerhq/java.net'
import { File, InputStream, OutputStream } from '@afterburnerhq/java.io'
export abstract class MidiDeviceProvider {

isDeviceSupported(arg0: MidiDevice.Info): boolean;

abstract getDeviceInfo(): MidiDevice.Info[];

abstract getDevice(arg0: MidiDevice.Info): MidiDevice;
 }

export abstract class MidiFileReader {

abstract getMidiFileFormat(arg0: InputStream): MidiFileFormat;

abstract getMidiFileFormat(arg0: URL): MidiFileFormat;

abstract getMidiFileFormat(arg0: File): MidiFileFormat;

abstract getSequence(arg0: InputStream): Sequence;

abstract getSequence(arg0: URL): Sequence;

abstract getSequence(arg0: File): Sequence;
 }

export abstract class MidiFileWriter {

abstract getMidiFileTypes(): number[];

abstract getMidiFileTypes(arg0: Sequence): number[];

isFileTypeSupported(arg0: number): boolean;

isFileTypeSupported(arg0: number, arg1: Sequence): boolean;

abstract write(arg0: Sequence, arg1: number, arg2: OutputStream): number;

abstract write(arg0: Sequence, arg1: number, arg2: File): number;
 }

export abstract class SoundbankReader {

abstract getSoundbank(arg0: URL): Soundbank;

abstract getSoundbank(arg0: InputStream): Soundbank;

abstract getSoundbank(arg0: File): Soundbank;
 }

}
