/// <reference path="java.awt.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="javax.accessibility.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.swing.plaf.d.ts" />
/// <reference path="java.beans.d.ts" />
/// <reference path="java.awt.event.d.ts" />
/// <reference path="javax.swing.event.d.ts" />
/// <reference path="javax.swing.d.ts" />
declare module '@afterburnerhq/javax.swing.table' { 
import { FontMetrics, Color, Rectangle, Point, Dimension, Component, Cursor, Font } from '@afterburnerhq/java.awt'
import { Integer, Class, String } from '@afterburnerhq/java.lang'
import { Locale, EventListener, Enumeration, Vector, Comparator } from '@afterburnerhq/java.util'
import { AccessibleAction, AccessibleContext, AccessibleStateSet, AccessibleValue, AccessibleComponent, AccessibleText, AccessibleRole, AccessibleSelection, Accessible } from '@afterburnerhq/javax.accessibility'
import { Serializable } from '@afterburnerhq/java.io'
import { TableHeaderUI, UIResource } from '@afterburnerhq/javax.swing.plaf'
import { PropertyChangeListener, PropertyChangeEvent } from '@afterburnerhq/java.beans'
import { FocusListener, MouseEvent } from '@afterburnerhq/java.awt.event'
import { TableColumnModelEvent, TableColumnModelListener, ChangeEvent, TableModelEvent, TableModelListener, ListSelectionEvent, ListSelectionListener } from '@afterburnerhq/javax.swing.event'
import { JComponent, JLabel, ListSelectionModel, DefaultRowSorter, CellEditor, JTable } from '@afterburnerhq/javax.swing'
export abstract class AbstractTableModel implements TableModel, Serializable {

getColumnName(arg0: number): String;

findColumn(arg0: String): number;

getColumnClass(arg0: number): Class<any>;

isCellEditable(arg0: number, arg1: number): boolean;

setValueAt(arg0: Object, arg1: number, arg2: number): void;

addTableModelListener(arg0: TableModelListener): void;

removeTableModelListener(arg0: TableModelListener): void;

getTableModelListeners(): TableModelListener[];

fireTableDataChanged(): void;

fireTableStructureChanged(): void;

fireTableRowsInserted(arg0: number, arg1: number): void;

fireTableRowsUpdated(arg0: number, arg1: number): void;

fireTableRowsDeleted(arg0: number, arg1: number): void;

fireTableCellUpdated(arg0: number, arg1: number): void;

fireTableChanged(arg0: TableModelEvent): void;

getListeners<T extends EventListener>(arg0: Class<T>): T[];
 }

export class DefaultTableCellRenderer extends JLabel implements TableCellRenderer, Serializable {
constructor();

setForeground(arg0: Color): void;

setBackground(arg0: Color): void;

updateUI(): void;

getTableCellRendererComponent(arg0: JTable, arg1: Object, arg2: boolean, arg3: boolean, arg4: number, arg5: number): Component;

isOpaque(): boolean;

invalidate(): void;

validate(): void;

revalidate(): void;

repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;

repaint(arg0: Rectangle): void;

repaint(): void;

firePropertyChange(arg0: String, arg1: boolean, arg2: boolean): void;
 }
export namespace DefaultTableCellRenderer { 
export class UIResource extends DefaultTableCellRenderer implements UIResource {
constructor();
 }

}

export class DefaultTableColumnModel implements TableColumnModel, PropertyChangeListener, ListSelectionListener, Serializable {
constructor();

addColumn(arg0: TableColumn): void;

removeColumn(arg0: TableColumn): void;

moveColumn(arg0: number, arg1: number): void;

setColumnMargin(arg0: number): void;

getColumnCount(): number;

getColumns(): Enumeration<TableColumn>;

getColumnIndex(arg0: Object): number;

getColumn(arg0: number): TableColumn;

getColumnMargin(): number;

getColumnIndexAtX(arg0: number): number;

getTotalColumnWidth(): number;

setSelectionModel(arg0: ListSelectionModel): void;

getSelectionModel(): ListSelectionModel;

setColumnSelectionAllowed(arg0: boolean): void;

getColumnSelectionAllowed(): boolean;

getSelectedColumns(): number[];

getSelectedColumnCount(): number;

addColumnModelListener(arg0: TableColumnModelListener): void;

removeColumnModelListener(arg0: TableColumnModelListener): void;

getColumnModelListeners(): TableColumnModelListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

propertyChange(arg0: PropertyChangeEvent): void;

valueChanged(arg0: ListSelectionEvent): void;
 }

export class DefaultTableModel extends AbstractTableModel implements Serializable {
constructor();
constructor(arg0: number, arg1: number);
constructor(arg0: Vector<any>, arg1: number);
constructor(arg0: Object[], arg1: number);
constructor(arg0: Vector<Vector>, arg1: Vector<any>);
constructor(arg0: Array<Array<Object>>, arg1: Object[]);

getDataVector(): Vector<Vector>;

setDataVector(arg0: Vector<Vector>, arg1: Vector<any>): void;

setDataVector(arg0: Array<Array<Object>>, arg1: Object[]): void;

newDataAvailable(arg0: TableModelEvent): void;

newRowsAdded(arg0: TableModelEvent): void;

rowsRemoved(arg0: TableModelEvent): void;

setNumRows(arg0: number): void;

setRowCount(arg0: number): void;

addRow(arg0: Vector<any>): void;

addRow(arg0: Object[]): void;

insertRow(arg0: number, arg1: Vector<any>): void;

insertRow(arg0: number, arg1: Object[]): void;

moveRow(arg0: number, arg1: number, arg2: number): void;

removeRow(arg0: number): void;

setColumnIdentifiers(arg0: Vector<any>): void;

setColumnIdentifiers(arg0: Object[]): void;

setColumnCount(arg0: number): void;

addColumn(arg0: Object): void;

addColumn(arg0: Object, arg1: Vector<any>): void;

addColumn(arg0: Object, arg1: Object[]): void;

getRowCount(): number;

getColumnCount(): number;

getColumnName(arg0: number): String;

isCellEditable(arg0: number, arg1: number): boolean;

getValueAt(arg0: number, arg1: number): Object;

setValueAt(arg0: Object, arg1: number, arg2: number): void;
 }

export class JTableHeader extends JComponent implements TableColumnModelListener, Accessible {
constructor();
constructor(arg0: TableColumnModel);

setTable(arg0: JTable): void;

getTable(): JTable;

setReorderingAllowed(arg0: boolean): void;

getReorderingAllowed(): boolean;

setResizingAllowed(arg0: boolean): void;

getResizingAllowed(): boolean;

getDraggedColumn(): TableColumn;

getDraggedDistance(): number;

getResizingColumn(): TableColumn;

setUpdateTableInRealTime(arg0: boolean): void;

getUpdateTableInRealTime(): boolean;

setDefaultRenderer(arg0: TableCellRenderer): void;

getDefaultRenderer(): TableCellRenderer;

columnAtPoint(arg0: Point): number;

getHeaderRect(arg0: number): Rectangle;

getToolTipText(arg0: MouseEvent): String;

getPreferredSize(): Dimension;

getUI(): TableHeaderUI;

setUI(arg0: TableHeaderUI): void;

updateUI(): void;

getUIClassID(): String;

setColumnModel(arg0: TableColumnModel): void;

getColumnModel(): TableColumnModel;

columnAdded(arg0: TableColumnModelEvent): void;

columnRemoved(arg0: TableColumnModelEvent): void;

columnMoved(arg0: TableColumnModelEvent): void;

columnMarginChanged(arg0: ChangeEvent): void;

columnSelectionChanged(arg0: ListSelectionEvent): void;

resizeAndRepaint(): void;

setDraggedColumn(arg0: TableColumn): void;

setDraggedDistance(arg0: number): void;

setResizingColumn(arg0: TableColumn): void;

getAccessibleContext(): AccessibleContext;
 }
export namespace JTableHeader { 
export class AccessibleJTableHeader extends JComponent.AccessibleJComponent {

getAccessibleRole(): AccessibleRole;

getAccessibleAt(arg0: Point): Accessible;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;
 }
export namespace AccessibleJTableHeader { 
export class AccessibleJTableHeaderEntry extends AccessibleContext implements Accessible, AccessibleComponent {
constructor(arg0: JTableHeader.AccessibleJTableHeader, arg1: number, arg2: JTableHeader, arg3: JTable);

getAccessibleContext(): AccessibleContext;

getAccessibleName(): String;

setAccessibleName(arg0: String): void;

getAccessibleDescription(): String;

setAccessibleDescription(arg0: String): void;

getAccessibleRole(): AccessibleRole;

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleIndexInParent(): number;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

getLocale(): Locale;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

getAccessibleAction(): AccessibleAction;

getAccessibleComponent(): AccessibleComponent;

getAccessibleSelection(): AccessibleSelection;

getAccessibleText(): AccessibleText;

getAccessibleValue(): AccessibleValue;

getBackground(): Color;

setBackground(arg0: Color): void;

getForeground(): Color;

setForeground(arg0: Color): void;

getCursor(): Cursor;

setCursor(arg0: Cursor): void;

getFont(): Font;

setFont(arg0: Font): void;

getFontMetrics(arg0: Font): FontMetrics;

isEnabled(): boolean;

setEnabled(arg0: boolean): void;

isVisible(): boolean;

setVisible(arg0: boolean): void;

isShowing(): boolean;

contains(arg0: Point): boolean;

getLocationOnScreen(): Point;

getLocation(): Point;

setLocation(arg0: Point): void;

getBounds(): Rectangle;

setBounds(arg0: Rectangle): void;

getSize(): Dimension;

setSize(arg0: Dimension): void;

getAccessibleAt(arg0: Point): Accessible;

isFocusTraversable(): boolean;

requestFocus(): void;

addFocusListener(arg0: FocusListener): void;

removeFocusListener(arg0: FocusListener): void;
 }

}

export class AccessibleJTableHeaderEntry extends AccessibleContext implements Accessible, AccessibleComponent {
constructor(arg0: JTableHeader.AccessibleJTableHeader, arg1: number, arg2: JTableHeader, arg3: JTable);

getAccessibleContext(): AccessibleContext;

getAccessibleName(): String;

setAccessibleName(arg0: String): void;

getAccessibleDescription(): String;

setAccessibleDescription(arg0: String): void;

getAccessibleRole(): AccessibleRole;

getAccessibleStateSet(): AccessibleStateSet;

getAccessibleIndexInParent(): number;

getAccessibleChildrenCount(): number;

getAccessibleChild(arg0: number): Accessible;

getLocale(): Locale;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

getAccessibleAction(): AccessibleAction;

getAccessibleComponent(): AccessibleComponent;

getAccessibleSelection(): AccessibleSelection;

getAccessibleText(): AccessibleText;

getAccessibleValue(): AccessibleValue;

getBackground(): Color;

setBackground(arg0: Color): void;

getForeground(): Color;

setForeground(arg0: Color): void;

getCursor(): Cursor;

setCursor(arg0: Cursor): void;

getFont(): Font;

setFont(arg0: Font): void;

getFontMetrics(arg0: Font): FontMetrics;

isEnabled(): boolean;

setEnabled(arg0: boolean): void;

isVisible(): boolean;

setVisible(arg0: boolean): void;

isShowing(): boolean;

contains(arg0: Point): boolean;

getLocationOnScreen(): Point;

getLocation(): Point;

setLocation(arg0: Point): void;

getBounds(): Rectangle;

setBounds(arg0: Rectangle): void;

getSize(): Dimension;

setSize(arg0: Dimension): void;

getAccessibleAt(arg0: Point): Accessible;

isFocusTraversable(): boolean;

requestFocus(): void;

addFocusListener(arg0: FocusListener): void;

removeFocusListener(arg0: FocusListener): void;
 }

}

export interface TableCellEditor extends CellEditor {

getTableCellEditorComponent(arg0: JTable, arg1: Object, arg2: boolean, arg3: number, arg4: number): Component;
 }

export interface TableCellRenderer {

getTableCellRendererComponent(arg0: JTable, arg1: Object, arg2: boolean, arg3: boolean, arg4: number, arg5: number): Component;
 }

export class TableColumn implements Serializable {
static COLUMN_WIDTH_PROPERTY:String
static HEADER_VALUE_PROPERTY:String
static HEADER_RENDERER_PROPERTY:String
static CELL_RENDERER_PROPERTY:String
constructor();
constructor(arg0: number);
constructor(arg0: number, arg1: number);
constructor(arg0: number, arg1: number, arg2: TableCellRenderer, arg3: TableCellEditor);

setModelIndex(arg0: number): void;

getModelIndex(): number;

setIdentifier(arg0: Object): void;

getIdentifier(): Object;

setHeaderValue(arg0: Object): void;

getHeaderValue(): Object;

setHeaderRenderer(arg0: TableCellRenderer): void;

getHeaderRenderer(): TableCellRenderer;

setCellRenderer(arg0: TableCellRenderer): void;

getCellRenderer(): TableCellRenderer;

setCellEditor(arg0: TableCellEditor): void;

getCellEditor(): TableCellEditor;

setWidth(arg0: number): void;

getWidth(): number;

setPreferredWidth(arg0: number): void;

getPreferredWidth(): number;

setMinWidth(arg0: number): void;

getMinWidth(): number;

setMaxWidth(arg0: number): void;

getMaxWidth(): number;

setResizable(arg0: boolean): void;

getResizable(): boolean;

sizeWidthToFit(): void;

disableResizedPosting(): void;

enableResizedPosting(): void;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

getPropertyChangeListeners(): PropertyChangeListener[];
 }

export interface TableColumnModel {

addColumn(arg0: TableColumn): void;

removeColumn(arg0: TableColumn): void;

moveColumn(arg0: number, arg1: number): void;

setColumnMargin(arg0: number): void;

getColumnCount(): number;

getColumns(): Enumeration<TableColumn>;

getColumnIndex(arg0: Object): number;

getColumn(arg0: number): TableColumn;

getColumnMargin(): number;

getColumnIndexAtX(arg0: number): number;

getTotalColumnWidth(): number;

setColumnSelectionAllowed(arg0: boolean): void;

getColumnSelectionAllowed(): boolean;

getSelectedColumns(): number[];

getSelectedColumnCount(): number;

setSelectionModel(arg0: ListSelectionModel): void;

getSelectionModel(): ListSelectionModel;

addColumnModelListener(arg0: TableColumnModelListener): void;

removeColumnModelListener(arg0: TableColumnModelListener): void;
 }

export interface TableModel {

getRowCount(): number;

getColumnCount(): number;

getColumnName(arg0: number): String;

getColumnClass(arg0: number): Class<any>;

isCellEditable(arg0: number, arg1: number): boolean;

getValueAt(arg0: number, arg1: number): Object;

setValueAt(arg0: Object, arg1: number, arg2: number): void;

addTableModelListener(arg0: TableModelListener): void;

removeTableModelListener(arg0: TableModelListener): void;
 }

export class TableRowSorter<M extends TableModel> extends DefaultRowSorter<M, Number> {
constructor();
constructor(arg0: M);

setModel(arg0: M): void;

setStringConverter(arg0: TableStringConverter): void;

getStringConverter(): TableStringConverter;

getComparator(arg0: number): Comparator<any>;
 }

export abstract class TableStringConverter {

abstract toString(arg0: TableModel, arg1: number, arg2: number): String;
 }

}
