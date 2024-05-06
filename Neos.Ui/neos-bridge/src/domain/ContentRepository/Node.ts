import {Any} from 'ts-toolbelt';

import {selectors} from '@neos-project/neos-ui-redux-store';

import {useSelector} from '../Extensibility/Store';

import {ContextPath} from './ContextPath';
import {NodeTypeName} from './NodeType';


type NodeAggregateIdentifier = Any.Type<string, 'NodeAggregateIdentifier'>;

export interface INode {
    identifier: NodeAggregateIdentifier
    contextPath: ContextPath
    nodeType: NodeTypeName
    label: string
    depth: number
    children: {
        contextPath: ContextPath
        nodeType: NodeTypeName
    }[]
    properties: {
        _hidden: boolean
        _hiddenInIndex: boolean
    }
}

export interface INodePartialForTree {
    identifier: NodeAggregateIdentifier
    contextPath: ContextPath
    nodeType: NodeTypeName
    label: string
    depth: number
    children: {
        contextPath: ContextPath
        nodeType: NodeTypeName
    }[]
    properties: {
        _hidden: boolean
        _hiddenInIndex: boolean
    }
}

export interface INodeSummary {
    label: string
    breadcrumb: string
    nodeType: NodeTypeName
}

export function useHasNode(contextPath?: ContextPath) {
    const node: any = useSelector(selectors.CR.Nodes.byContextPathSelector(contextPath?.toString() ?? ''));
    return Boolean(node);
}
