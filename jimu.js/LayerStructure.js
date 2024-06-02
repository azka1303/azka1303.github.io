// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/on dojo/Evented ./LayerInfos/LayerInfos".split(" "),function(l,k,d,e,m,g){var c=l([m],{declaredClass:"jimu.LayerStructure",map:null,_layerInfos:null,_eventHandles:null,constructor:function(a){this._layerInfos=a;this.map=this._layerInfos.map;this._eventHandles=[];this._bindEvents()},getLayerNodes:function(){return this._getNodesArrayFromInfosArray(this._layerInfos.getLayerInfoArray())},getTableNodes:function(){return this._getNodesArrayFromInfosArray(this._layerInfos.getTableInfoArray())},
getBasemapLayerNodes:function(){return this._getNodesArrayFromInfosArray(this._layerInfos.getBasemapLayerInfoArray())},getWebmapLayerNodes:function(){return this._getNodesArrayFromInfosArray(this._layerInfos.getLayerInfoArrayOfWebmap())},getWebmapTableNodes:function(){return this._getNodesArrayFromInfosArray(this._layerInfos.getTableInfoArrayOfWebmap())},addTable:function(a){var b=null;if(a=this._layerInfos.addTable(a))b=a._adaptor;return b},removeTable:function(a){(a=this.getNodeById(a))&&this._layerInfos.removeTable(a._layerInfo)},
_traversal:function(a,b){for(var f=0;f<b.length;f++)if(b[f].traversal(a))return!0;return!1},traversal:function(a){return this._traversal(a,this.getLayerNodes().concat(this.getBasemapLayerNodes().concat(this.getTableNodes())))},traversalWithNodes:function(a,b){return this._traversal(a,b)},getNodeById:function(a){var b=null;this.traversal(function(f){if(f.id===a)return b=f,!0});return b},getBasemapLayerObjects:function(){return this._layerInfos.getBasemapLayers()},restoreState:function(a){this._layerInfos.restoreState(a)},
destroy:function(){k.forEach(this._eventHandles,function(a){a.remove()});this.inherited(arguments)},_getNodesArrayFromInfosArray:function(a){var b=[];k.forEach(a,function(f){b.push(f._adaptor)},this);return b},_emitEvent:function(){try{this.emit.apply(this,arguments)}catch(a){console.warn(a)}},_bindEvents:function(){var a=e(this._layerInfos,"layerInfosChanged",d.hitch(this,this._onLayerNodesStructureChanged));this._eventHandles.push(a);a=e(this._layerInfos,"basemapLayerInfosChanged",d.hitch(this,
this._onLayerNodesStructureChanged));this._eventHandles.push(a);a=e(this._layerInfos,"tableInfosChanged",d.hitch(this,this._onTableNdoesStructureChanged));this._eventHandles.push(a);a=e(this._layerInfos,"layerInfosReorder",d.hitch(this,this._onLayerReordered));this._eventHandles.push(a);a=e(this._layerInfos,"layerInfosIsShowInMapChanged",d.hitch(this,this._onVisibilityChanged));this._eventHandles.push(a);a=e(this._layerInfos,"layerInfosIsVisibleChanged",d.hitch(this,this._onToggleChanged));this._eventHandles.push(a);
a=e(this._layerInfos,"layerInfosFilterChanged",d.hitch(this,this._onFilterChanged));this._eventHandles.push(a);a=e(this._layerInfos,"layerInfosRendererChanged",d.hitch(this,this._onRendererChanged));this._eventHandles.push(a);a=e(this._layerInfos,"layerInfosOpacityChanged",d.hitch(this,this._onOpacityChanged));this._eventHandles.push(a);a=e(this._layerInfos,"layerInfosTimeExtentChanged",d.hitch(this,this._onTimeExtentChanged));this._eventHandles.push(a)},_onLayerNodesStructureChanged:function(a,b,
f){this._emitEvent(c.EVENT_STRUCTURE_CHANGE,{type:b,layerNodes:[f._adaptor],rootLayerNodes:[a._adaptor]})},_onTableNdoesStructureChanged:function(a,b){a=this._getNodesArrayFromInfosArray(a);this._emitEvent(c.EVENT_STRUCTURE_CHANGE,{type:b,layerNodes:a,rootLayerNodes:a})},_onLayerReordered:function(a,b){a=a?[a._adaptor]:[];this._emitEvent(c.EVENT_STRUCTURE_CHANGE,{type:b,layerNodes:a,rootLayerNodes:a})},_onVisibilityChanged:function(a){a={layerNodes:this._getNodesArrayFromInfosArray(a)};this._emitEvent(c.EVENT_VISIBILITY_CHANGE,
a)},_onToggleChanged:function(a){a={layerNodes:this._getNodesArrayFromInfosArray(a)};this._emitEvent(c.EVENT_TOOGLE_CHANGE,a)},_onFilterChanged:function(a){a={layerNodes:this._getNodesArrayFromInfosArray(a)};this._emitEvent(c.EVENT_FILTER_CHANGE,a)},_onRendererChanged:function(a){a={layerNodes:this._getNodesArrayFromInfosArray(a)};this._emitEvent(c.EVENT_RENDERER_CHANGE,a)},_onOpacityChanged:function(a){a={layerNodes:this._getNodesArrayFromInfosArray(a)};this._emitEvent(c.EVENT_OPACITY_CHANGE,a)},
_onTimeExtentChanged:function(a){a={layerNodes:this._getNodesArrayFromInfosArray(a)};this._emitEvent(c.EVENT_TIME_EXTENT_CHANGE,a)}}),h=null;c.getInstance=function(){h&&h._layerInfos._objectId===g.getInstanceSync()._objectId||(h&&h.destroy(),h=new c(g.getInstanceSync()));return h};c.createInstance=function(a){return new c(g.createInstance(a))};d.mixin(c,{STRUCTURE_CHANGE_ADD:g.ADDED,STRUCTURE_CHANGE_REMOVE:g.REMOVED,STRUCTURE_CHANGE_SUBNODE_ADD:g.SUBLAYER_ADDED,STRUCTURE_CHANGE_SUBNODE_REMOVE:g.SUBLAYER_REMOVED,
STRUCTURE_CHANGE_NODE_UPDATE:g.UPDATED,STRUCTURE_CHANGE_REORDER:g.REORDERED,EVENT_STRUCTURE_CHANGE:"structure-change",EVENT_TOOGLE_CHANGE:"toggle-change",EVENT_VISIBILITY_CHANGE:"visibility-change",EVENT_FILTER_CHANGE:"filter-change",EVENT_RENDERER_CHANGE:"renderer-change",EVENT_OPACITY_CHANGE:"opacity-change",EVENT_TIME_EXTENT_CHANGE:"time-extent-change"});return c});