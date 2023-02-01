/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.swing.event.d.ts" />
/// <reference path="javax.swing.d.ts" />
declare module '@afterburnerhq/javax.swing.colorchooser' { 
import { Graphics, Color } from '@afterburnerhq/java.awt'
import { String } from '@afterburnerhq/java.lang'
import { Serializable } from '@afterburnerhq/java.io'
import { ChangeListener } from '@afterburnerhq/javax.swing.event'
import { JComponent, JPanel, Icon, JColorChooser } from '@afterburnerhq/javax.swing'
export abstract class AbstractColorChooserPanel extends JPanel {
static TRANSPARENCY_ENABLED_PROPERTY:String

abstract updateChooser(): void;

abstract getDisplayName(): String;

getMnemonic(): number;

getDisplayedMnemonicIndex(): number;

abstract getSmallDisplayIcon(): Icon;

abstract getLargeDisplayIcon(): Icon;

installChooserPanel(arg0: JColorChooser): void;

uninstallChooserPanel(arg0: JColorChooser): void;

getColorSelectionModel(): ColorSelectionModel;

setColorTransparencySelectionEnabled(arg0: boolean): void;

isColorTransparencySelectionEnabled(): boolean;

paint(arg0: Graphics): void;
 }

export class ColorChooserComponentFactory {

static getDefaultChooserPanels(): AbstractColorChooserPanel[];

static getPreviewPanel(): JComponent;
 }

export interface ColorSelectionModel {

getSelectedColor(): Color;

setSelectedColor(arg0: Color): void;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;
 }

export class DefaultColorSelectionModel implements ColorSelectionModel, Serializable {
constructor();
constructor(arg0: Color);

getSelectedColor(): Color;

setSelectedColor(arg0: Color): void;

addChangeListener(arg0: ChangeListener): void;

removeChangeListener(arg0: ChangeListener): void;

getChangeListeners(): ChangeListener[];
 }

}
