/// <reference path="java.lang.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.swing.d.ts" />
declare module '@afterburnerhq/javax.swing.filechooser' { 
import { Boolean, String } from '@afterburnerhq/java.lang'
import { File } from '@afterburnerhq/java.io'
import { Icon } from '@afterburnerhq/javax.swing'
export abstract class FileFilter {

abstract accept(arg0: File): boolean;

abstract getDescription(): String;
 }

export class FileNameExtensionFilter extends FileFilter {
constructor(arg0: String, arg1: String[]);

accept(arg0: File): boolean;

getDescription(): String;

getExtensions(): String[];
toString(): string;
 }

export abstract class FileSystemView {
constructor();

static getFileSystemView(): FileSystemView;

isRoot(arg0: File): boolean;

isTraversable(arg0: File): Boolean;

getSystemDisplayName(arg0: File): String;

getSystemTypeDescription(arg0: File): String;

getSystemIcon(arg0: File): Icon;

getSystemIcon(arg0: File, arg1: number, arg2: number): Icon;

isParent(arg0: File, arg1: File): boolean;

getChild(arg0: File, arg1: String): File;

isFileSystem(arg0: File): boolean;

abstract createNewFolder(arg0: File): File;

isHiddenFile(arg0: File): boolean;

isFileSystemRoot(arg0: File): boolean;

isDrive(arg0: File): boolean;

isFloppyDrive(arg0: File): boolean;

isComputerNode(arg0: File): boolean;

getRoots(): File[];

getHomeDirectory(): File;

getDefaultDirectory(): File;

createFileObject(arg0: File, arg1: String): File;

createFileObject(arg0: String): File;

getFiles(arg0: File, arg1: boolean): File[];

getParentDirectory(arg0: File): File;

getChooserComboBoxFiles(): File[];

getChooserShortcutPanelFiles(): File[];

isLink(arg0: File): boolean;

getLinkLocation(arg0: File): File;
 }

export abstract class FileView {

getName(arg0: File): String;

getDescription(arg0: File): String;

getTypeDescription(arg0: File): String;

getIcon(arg0: File): Icon;

isTraversable(arg0: File): Boolean;
 }

}
