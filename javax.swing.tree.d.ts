/// <reference path="java.awt.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.lang.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="java.beans.d.ts" />
/// <reference path="java.awt.event.d.ts" />
/// <reference path="javax.swing.border.d.ts" />
/// <reference path="javax.swing.event.d.ts" />
/// <reference path="javax.swing.d.ts" />
declare module '@afterburnerhq/javax.swing.tree' { 
import { Graphics, Container, Color, Rectangle, Dimension, Component, Font } from '@afterburnerhq/java.awt'
import { EventObject, Enumeration, EventListener } from '@afterburnerhq/java.util'
import { Cloneable, Class, String, Exception } from '@afterburnerhq/java.lang'
import { Serializable } from '@afterburnerhq/java.io'
import { PropertyChangeListener } from '@afterburnerhq/java.beans'
import { ActionListener, ActionEvent } from '@afterburnerhq/java.awt.event'
import { Border } from '@afterburnerhq/javax.swing.border'
import { TreeSelectionListener, CellEditorListener, TreeModelEvent, TreeSelectionEvent, TreeExpansionEvent, TreeModelListener } from '@afterburnerhq/javax.swing.event'
import { JLabel, JTree, Icon, JTextField, CellEditor } from '@afterburnerhq/javax.swing'
export abstract class AbstractLayoutCache implements RowMapper {

setNodeDimensions(arg0: AbstractLayoutCache.NodeDimensions): void;

getNodeDimensions(): AbstractLayoutCache.NodeDimensions;

setModel(arg0: TreeModel): void;

getModel(): TreeModel;

setRootVisible(arg0: boolean): void;

isRootVisible(): boolean;

setRowHeight(arg0: number): void;

getRowHeight(): number;

setSelectionModel(arg0: TreeSelectionModel): void;

getSelectionModel(): TreeSelectionModel;

getPreferredHeight(): number;

getPreferredWidth(arg0: Rectangle): number;

abstract isExpanded(arg0: TreePath): boolean;

abstract getBounds(arg0: TreePath, arg1: Rectangle): Rectangle;

abstract getPathForRow(arg0: number): TreePath;

abstract getRowForPath(arg0: TreePath): number;

abstract getPathClosestTo(arg0: number, arg1: number): TreePath;

abstract getVisiblePathsFrom(arg0: TreePath): Enumeration<TreePath>;

abstract getVisibleChildCount(arg0: TreePath): number;

abstract setExpandedState(arg0: TreePath, arg1: boolean): void;

abstract getExpandedState(arg0: TreePath): boolean;

abstract getRowCount(): number;

abstract invalidateSizes(): void;

abstract invalidatePathBounds(arg0: TreePath): void;

abstract treeNodesChanged(arg0: TreeModelEvent): void;

abstract treeNodesInserted(arg0: TreeModelEvent): void;

abstract treeNodesRemoved(arg0: TreeModelEvent): void;

abstract treeStructureChanged(arg0: TreeModelEvent): void;

getRowsForPaths(arg0: TreePath[]): number[];
 }
export namespace AbstractLayoutCache { 
export abstract class NodeDimensions {

abstract getNodeDimensions(arg0: Object, arg1: number, arg2: number, arg3: boolean, arg4: Rectangle): Rectangle;
 }

}

export class DefaultMutableTreeNode implements Cloneable, MutableTreeNode, Serializable {
static EMPTY_ENUMERATION:Enumeration<TreeNode>
constructor();
constructor(arg0: Object);
constructor(arg0: Object, arg1: boolean);

insert(arg0: MutableTreeNode, arg1: number): void;

remove(arg0: number): void;

setParent(arg0: MutableTreeNode): void;

getParent(): TreeNode;

getChildAt(arg0: number): TreeNode;

getChildCount(): number;

getIndex(arg0: TreeNode): number;

children(): Enumeration<TreeNode>;

setAllowsChildren(arg0: boolean): void;

getAllowsChildren(): boolean;

setUserObject(arg0: Object): void;

getUserObject(): Object;

removeFromParent(): void;

remove(arg0: MutableTreeNode): void;

removeAllChildren(): void;

add(arg0: MutableTreeNode): void;

isNodeAncestor(arg0: TreeNode): boolean;

isNodeDescendant(arg0: DefaultMutableTreeNode): boolean;

getSharedAncestor(arg0: DefaultMutableTreeNode): TreeNode;

isNodeRelated(arg0: DefaultMutableTreeNode): boolean;

getDepth(): number;

getLevel(): number;

getPath(): TreeNode[];

getUserObjectPath(): Object[];

getRoot(): TreeNode;

isRoot(): boolean;

getNextNode(): DefaultMutableTreeNode;

getPreviousNode(): DefaultMutableTreeNode;

preorderEnumeration(): Enumeration<TreeNode>;

postorderEnumeration(): Enumeration<TreeNode>;

breadthFirstEnumeration(): Enumeration<TreeNode>;

depthFirstEnumeration(): Enumeration<TreeNode>;

pathFromAncestorEnumeration(arg0: TreeNode): Enumeration<TreeNode>;

isNodeChild(arg0: TreeNode): boolean;

getFirstChild(): TreeNode;

getLastChild(): TreeNode;

getChildAfter(arg0: TreeNode): TreeNode;

getChildBefore(arg0: TreeNode): TreeNode;

isNodeSibling(arg0: TreeNode): boolean;

getSiblingCount(): number;

getNextSibling(): DefaultMutableTreeNode;

getPreviousSibling(): DefaultMutableTreeNode;

isLeaf(): boolean;

getFirstLeaf(): DefaultMutableTreeNode;

getLastLeaf(): DefaultMutableTreeNode;

getNextLeaf(): DefaultMutableTreeNode;

getPreviousLeaf(): DefaultMutableTreeNode;

getLeafCount(): number;
toString(): string;

clone(): Object;
 }

export class DefaultTreeCellEditor implements ActionListener, TreeCellEditor, TreeSelectionListener {
constructor(arg0: JTree, arg1: DefaultTreeCellRenderer);
constructor(arg0: JTree, arg1: DefaultTreeCellRenderer, arg2: TreeCellEditor);

setBorderSelectionColor(arg0: Color): void;

getBorderSelectionColor(): Color;

setFont(arg0: Font): void;

getFont(): Font;

getTreeCellEditorComponent(arg0: JTree, arg1: Object, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number): Component;

getCellEditorValue(): Object;

isCellEditable(arg0: EventObject): boolean;

shouldSelectCell(arg0: EventObject): boolean;

stopCellEditing(): boolean;

cancelCellEditing(): void;

addCellEditorListener(arg0: CellEditorListener): void;

removeCellEditorListener(arg0: CellEditorListener): void;

getCellEditorListeners(): CellEditorListener[];

valueChanged(arg0: TreeSelectionEvent): void;

actionPerformed(arg0: ActionEvent): void;
 }
export namespace DefaultTreeCellEditor { 
export class DefaultTextField extends JTextField {
constructor(arg0: DefaultTreeCellEditor, arg1: Border);

setBorder(arg0: Border): void;

getBorder(): Border;

getFont(): Font;

getPreferredSize(): Dimension;
 }

export class EditorContainer extends Container {
constructor(arg0: DefaultTreeCellEditor);

EditorContainer(): void;

paint(arg0: Graphics): void;

doLayout(): void;

getPreferredSize(): Dimension;
 }

}

export class DefaultTreeCellRenderer extends JLabel implements TreeCellRenderer {
constructor();

updateUI(): void;

getDefaultOpenIcon(): Icon;

getDefaultClosedIcon(): Icon;

getDefaultLeafIcon(): Icon;

setOpenIcon(arg0: Icon): void;

getOpenIcon(): Icon;

setClosedIcon(arg0: Icon): void;

getClosedIcon(): Icon;

setLeafIcon(arg0: Icon): void;

getLeafIcon(): Icon;

setTextSelectionColor(arg0: Color): void;

getTextSelectionColor(): Color;

setTextNonSelectionColor(arg0: Color): void;

getTextNonSelectionColor(): Color;

setBackgroundSelectionColor(arg0: Color): void;

getBackgroundSelectionColor(): Color;

setBackgroundNonSelectionColor(arg0: Color): void;

getBackgroundNonSelectionColor(): Color;

setBorderSelectionColor(arg0: Color): void;

getBorderSelectionColor(): Color;

setFont(arg0: Font): void;

getFont(): Font;

setBackground(arg0: Color): void;

getTreeCellRendererComponent(arg0: JTree, arg1: Object, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: boolean): Component;

paint(arg0: Graphics): void;

getPreferredSize(): Dimension;

validate(): void;

invalidate(): void;

revalidate(): void;

repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;

repaint(arg0: Rectangle): void;

repaint(): void;

firePropertyChange(arg0: String, arg1: number, arg2: number): void;

firePropertyChange(arg0: String, arg1: String, arg2: String): void;

firePropertyChange(arg0: String, arg1: number, arg2: number): void;

firePropertyChange(arg0: String, arg1: number, arg2: number): void;

firePropertyChange(arg0: String, arg1: number, arg2: number): void;

firePropertyChange(arg0: String, arg1: number, arg2: number): void;

firePropertyChange(arg0: String, arg1: number, arg2: number): void;

firePropertyChange(arg0: String, arg1: boolean, arg2: boolean): void;
 }

export class DefaultTreeModel implements Serializable, TreeModel {
constructor(arg0: TreeNode);
constructor(arg0: TreeNode, arg1: boolean);

setAsksAllowsChildren(arg0: boolean): void;

asksAllowsChildren(): boolean;

setRoot(arg0: TreeNode): void;

getRoot(): Object;

getIndexOfChild(arg0: Object, arg1: Object): number;

getChild(arg0: Object, arg1: number): Object;

getChildCount(arg0: Object): number;

isLeaf(arg0: Object): boolean;

reload(): void;

valueForPathChanged(arg0: TreePath, arg1: Object): void;

insertNodeInto(arg0: MutableTreeNode, arg1: MutableTreeNode, arg2: number): void;

removeNodeFromParent(arg0: MutableTreeNode): void;

nodeChanged(arg0: TreeNode): void;

reload(arg0: TreeNode): void;

nodesWereInserted(arg0: TreeNode, arg1: number[]): void;

nodesWereRemoved(arg0: TreeNode, arg1: number[], arg2: Object[]): void;

nodesChanged(arg0: TreeNode, arg1: number[]): void;

nodeStructureChanged(arg0: TreeNode): void;

getPathToRoot(arg0: TreeNode): TreeNode[];

addTreeModelListener(arg0: TreeModelListener): void;

removeTreeModelListener(arg0: TreeModelListener): void;

getTreeModelListeners(): TreeModelListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];
 }

export class DefaultTreeSelectionModel implements Cloneable, Serializable, TreeSelectionModel {
static SELECTION_MODE_PROPERTY:String
constructor();

setRowMapper(arg0: RowMapper): void;

getRowMapper(): RowMapper;

setSelectionMode(arg0: number): void;

getSelectionMode(): number;

setSelectionPath(arg0: TreePath): void;

setSelectionPaths(arg0: TreePath[]): void;

addSelectionPath(arg0: TreePath): void;

addSelectionPaths(arg0: TreePath[]): void;

removeSelectionPath(arg0: TreePath): void;

removeSelectionPaths(arg0: TreePath[]): void;

getSelectionPath(): TreePath;

getSelectionPaths(): TreePath[];

getSelectionCount(): number;

isPathSelected(arg0: TreePath): boolean;

isSelectionEmpty(): boolean;

clearSelection(): void;

addTreeSelectionListener(arg0: TreeSelectionListener): void;

removeTreeSelectionListener(arg0: TreeSelectionListener): void;

getTreeSelectionListeners(): TreeSelectionListener[];

getListeners<T extends EventListener>(arg0: Class<T>): T[];

getSelectionRows(): number[];

getMinSelectionRow(): number;

getMaxSelectionRow(): number;

isRowSelected(arg0: number): boolean;

resetRowSelection(): void;

getLeadSelectionRow(): number;

getLeadSelectionPath(): TreePath;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

getPropertyChangeListeners(): PropertyChangeListener[];
toString(): string;

clone(): Object;
 }

export class ExpandVetoException extends Exception {
constructor(arg0: TreeExpansionEvent);
constructor(arg0: TreeExpansionEvent, arg1: String);
 }

export class FixedHeightLayoutCache extends AbstractLayoutCache {
constructor();

setModel(arg0: TreeModel): void;

setRootVisible(arg0: boolean): void;

setRowHeight(arg0: number): void;

getRowCount(): number;

invalidatePathBounds(arg0: TreePath): void;

invalidateSizes(): void;

isExpanded(arg0: TreePath): boolean;

getBounds(arg0: TreePath, arg1: Rectangle): Rectangle;

getPathForRow(arg0: number): TreePath;

getRowForPath(arg0: TreePath): number;

getPathClosestTo(arg0: number, arg1: number): TreePath;

getVisibleChildCount(arg0: TreePath): number;

getVisiblePathsFrom(arg0: TreePath): Enumeration<TreePath>;

setExpandedState(arg0: TreePath, arg1: boolean): void;

getExpandedState(arg0: TreePath): boolean;

treeNodesChanged(arg0: TreeModelEvent): void;

treeNodesInserted(arg0: TreeModelEvent): void;

treeNodesRemoved(arg0: TreeModelEvent): void;

treeStructureChanged(arg0: TreeModelEvent): void;
 }

export interface MutableTreeNode extends TreeNode {

insert(arg0: MutableTreeNode, arg1: number): void;

remove(arg0: number): void;

remove(arg0: MutableTreeNode): void;

setUserObject(arg0: Object): void;

removeFromParent(): void;

setParent(arg0: MutableTreeNode): void;
 }

export interface RowMapper {

getRowsForPaths(arg0: TreePath[]): number[];
 }

export interface TreeCellEditor extends CellEditor {

getTreeCellEditorComponent(arg0: JTree, arg1: Object, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number): Component;
 }

export interface TreeCellRenderer {

getTreeCellRendererComponent(arg0: JTree, arg1: Object, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: boolean): Component;
 }

export interface TreeModel {

getRoot(): Object;

getChild(arg0: Object, arg1: number): Object;

getChildCount(arg0: Object): number;

isLeaf(arg0: Object): boolean;

valueForPathChanged(arg0: TreePath, arg1: Object): void;

getIndexOfChild(arg0: Object, arg1: Object): number;

addTreeModelListener(arg0: TreeModelListener): void;

removeTreeModelListener(arg0: TreeModelListener): void;
 }

export interface TreeNode {

getChildAt(arg0: number): TreeNode;

getChildCount(): number;

getParent(): TreeNode;

getIndex(arg0: TreeNode): number;

getAllowsChildren(): boolean;

isLeaf(): boolean;

children(): Enumeration<TreeNode>;
 }

export class TreePath implements Serializable {
constructor(arg0: Object[]);
constructor(arg0: Object);

getPath(): Object[];

getLastPathComponent(): Object;

getPathCount(): number;

getPathComponent(arg0: number): Object;

equals(arg0: Object): boolean;

hashCode(): number;

isDescendant(arg0: TreePath): boolean;

pathByAddingChild(arg0: Object): TreePath;

getParentPath(): TreePath;
toString(): string;
 }

export namespace TreeSelectionModel { 
const SINGLE_TREE_SELECTION:number
const CONTIGUOUS_TREE_SELECTION:number
const DISCONTIGUOUS_TREE_SELECTION:number
}

export interface TreeSelectionModel {
SINGLE_TREE_SELECTION:number
CONTIGUOUS_TREE_SELECTION:number
DISCONTIGUOUS_TREE_SELECTION:number

setSelectionMode(arg0: number): void;

getSelectionMode(): number;

setSelectionPath(arg0: TreePath): void;

setSelectionPaths(arg0: TreePath[]): void;

addSelectionPath(arg0: TreePath): void;

addSelectionPaths(arg0: TreePath[]): void;

removeSelectionPath(arg0: TreePath): void;

removeSelectionPaths(arg0: TreePath[]): void;

getSelectionPath(): TreePath;

getSelectionPaths(): TreePath[];

getSelectionCount(): number;

isPathSelected(arg0: TreePath): boolean;

isSelectionEmpty(): boolean;

clearSelection(): void;

setRowMapper(arg0: RowMapper): void;

getRowMapper(): RowMapper;

getSelectionRows(): number[];

getMinSelectionRow(): number;

getMaxSelectionRow(): number;

isRowSelected(arg0: number): boolean;

resetRowSelection(): void;

getLeadSelectionRow(): number;

getLeadSelectionPath(): TreePath;

addPropertyChangeListener(arg0: PropertyChangeListener): void;

removePropertyChangeListener(arg0: PropertyChangeListener): void;

addTreeSelectionListener(arg0: TreeSelectionListener): void;

removeTreeSelectionListener(arg0: TreeSelectionListener): void;
 }

export class VariableHeightLayoutCache extends AbstractLayoutCache {
constructor();

setModel(arg0: TreeModel): void;

setRootVisible(arg0: boolean): void;

setRowHeight(arg0: number): void;

setNodeDimensions(arg0: AbstractLayoutCache.NodeDimensions): void;

setExpandedState(arg0: TreePath, arg1: boolean): void;

getExpandedState(arg0: TreePath): boolean;

getBounds(arg0: TreePath, arg1: Rectangle): Rectangle;

getPathForRow(arg0: number): TreePath;

getRowForPath(arg0: TreePath): number;

getRowCount(): number;

invalidatePathBounds(arg0: TreePath): void;

getPreferredHeight(): number;

getPreferredWidth(arg0: Rectangle): number;

getPathClosestTo(arg0: number, arg1: number): TreePath;

getVisiblePathsFrom(arg0: TreePath): Enumeration<TreePath>;

getVisibleChildCount(arg0: TreePath): number;

invalidateSizes(): void;

isExpanded(arg0: TreePath): boolean;

treeNodesChanged(arg0: TreeModelEvent): void;

treeNodesInserted(arg0: TreeModelEvent): void;

treeNodesRemoved(arg0: TreeModelEvent): void;

treeStructureChanged(arg0: TreeModelEvent): void;
 }

}
