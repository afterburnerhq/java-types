/// <reference path="java.net.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.sound.sampled.d.ts" />
declare module '@afterburnerhq/javax.sound.sampled.spi' { 
import { URL } from '@afterburnerhq/java.net'
import { File, InputStream, OutputStream } from '@afterburnerhq/java.io'
import { AudioInputStream, AudioFormat, AudioFileFormat, Mixer } from '@afterburnerhq/javax.sound.sampled'
export abstract class AudioFileReader {

abstract getAudioFileFormat(arg0: InputStream): AudioFileFormat;

abstract getAudioFileFormat(arg0: URL): AudioFileFormat;

abstract getAudioFileFormat(arg0: File): AudioFileFormat;

abstract getAudioInputStream(arg0: InputStream): AudioInputStream;

abstract getAudioInputStream(arg0: URL): AudioInputStream;

abstract getAudioInputStream(arg0: File): AudioInputStream;
 }

export abstract class AudioFileWriter {

abstract getAudioFileTypes(): AudioFileFormat.Type[];

isFileTypeSupported(arg0: AudioFileFormat.Type): boolean;

abstract getAudioFileTypes(arg0: AudioInputStream): AudioFileFormat.Type[];

isFileTypeSupported(arg0: AudioFileFormat.Type, arg1: AudioInputStream): boolean;

abstract write(arg0: AudioInputStream, arg1: AudioFileFormat.Type, arg2: OutputStream): number;

abstract write(arg0: AudioInputStream, arg1: AudioFileFormat.Type, arg2: File): number;
 }

export abstract class FormatConversionProvider {

abstract getSourceEncodings(): AudioFormat.Encoding[];

abstract getTargetEncodings(): AudioFormat.Encoding[];

isSourceEncodingSupported(arg0: AudioFormat.Encoding): boolean;

isTargetEncodingSupported(arg0: AudioFormat.Encoding): boolean;

abstract getTargetEncodings(arg0: AudioFormat): AudioFormat.Encoding[];

isConversionSupported(arg0: AudioFormat.Encoding, arg1: AudioFormat): boolean;

abstract getTargetFormats(arg0: AudioFormat.Encoding, arg1: AudioFormat): AudioFormat[];

isConversionSupported(arg0: AudioFormat, arg1: AudioFormat): boolean;

abstract getAudioInputStream(arg0: AudioFormat.Encoding, arg1: AudioInputStream): AudioInputStream;

abstract getAudioInputStream(arg0: AudioFormat, arg1: AudioInputStream): AudioInputStream;
 }

export abstract class MixerProvider {

isMixerSupported(arg0: Mixer.Info): boolean;

abstract getMixerInfo(): Mixer.Info[];

abstract getMixer(arg0: Mixer.Info): Mixer;
 }

}
