// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/lang","dijit/_WidgetBase","dijit/_TemplatedMixin"],function(b,c,d,e){return b([d,e],{templateString:"\x3cdiv\x3ePlease create a sub class\x3c/div\x3e",type:"BaseDijit",config:null,dijit:null,constructor:function(a){this.config=c.clone(a.config);this.dijit=a.dijit},setDataSource:function(a){this.dataSource=a},getConfig:function(){return this.config},updateDijit:function(){this.dijit.setConfig(this.config)}})});