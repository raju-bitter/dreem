Ext.data.JsonP.dr_shrinktofit({"tagname":"class","name":"dr.shrinktofit","autodetected":{},"files":[{"filename":"classdocs.js","href":"classdocs.html#dr-shrinktofit"}],"extends":"dr.layoot","members":[{"name":"axis","tagname":"attribute","owner":"dr.shrinktofit","id":"attribute-axis","meta":{}},{"name":"id","tagname":"attribute","owner":"dr.node","id":"attribute-id","meta":{}},{"name":"name","tagname":"attribute","owner":"dr.node","id":"attribute-name","meta":{}},{"name":"scriptincludes","tagname":"attribute","owner":"dr.node","id":"attribute-scriptincludes","meta":{}},{"name":"scriptincludeserror","tagname":"attribute","owner":"dr.node","id":"attribute-scriptincludeserror","meta":{}},{"name":"xpad","tagname":"attribute","owner":"dr.shrinktofit","id":"attribute-xpad","meta":{}},{"name":"ypad","tagname":"attribute","owner":"dr.shrinktofit","id":"attribute-ypad","meta":{}},{"name":"inited","tagname":"property","owner":"dr.node","id":"property-inited","meta":{"readonly":true}},{"name":"subnodes","tagname":"property","owner":"dr.node","id":"property-subnodes","meta":{"readonly":true}},{"name":"__updateMonitoringSubview","tagname":"method","owner":"dr.shrinktofit","id":"method-__updateMonitoringSubview","meta":{"private":true}},{"name":"addSubview","tagname":"method","owner":"dr.layoot","id":"method-addSubview","meta":{}},{"name":"canUpdate","tagname":"method","owner":"dr.layoot","id":"method-canUpdate","meta":{}},{"name":"destroy","tagname":"method","owner":"dr.node","id":"method-destroy","meta":{}},{"name":"doSubnodeAdded","tagname":"method","owner":"dr.node","id":"method-doSubnodeAdded","meta":{}},{"name":"doSubnodeRemoved","tagname":"method","owner":"dr.node","id":"method-doSubnodeRemoved","meta":{}},{"name":"ignore","tagname":"method","owner":"dr.layoot","id":"method-ignore","meta":{}},{"name":"removeSubview","tagname":"method","owner":"dr.layoot","id":"method-removeSubview","meta":{}},{"name":"sendEvent","tagname":"method","owner":"Eventable","id":"method-sendEvent","meta":{"chainable":true}},{"name":"setAttribute","tagname":"method","owner":"Eventable","id":"method-setAttribute","meta":{"chainable":true}},{"name":"setAttributes","tagname":"method","owner":"Eventable","id":"method-setAttributes","meta":{"chainable":true}},{"name":"startMonitoringAllSubviews","tagname":"method","owner":"dr.layoot","id":"method-startMonitoringAllSubviews","meta":{}},{"name":"startMonitoringSubview","tagname":"method","owner":"dr.layoot","id":"method-startMonitoringSubview","meta":{}},{"name":"stopMonitoringAllSubviews","tagname":"method","owner":"dr.layoot","id":"method-stopMonitoringAllSubviews","meta":{}},{"name":"stopMonitoringSubview","tagname":"method","owner":"dr.layoot","id":"method-stopMonitoringSubview","meta":{}},{"name":"update","tagname":"method","owner":"dr.layoot","id":"method-update","meta":{}},{"name":"ondestroy","tagname":"event","owner":"dr.node","id":"event-ondestroy","meta":{}},{"name":"oninit","tagname":"event","owner":"dr.node","id":"event-oninit","meta":{}},{"name":"onsubnodes","tagname":"event","owner":"dr.node","id":"event-onsubnodes","meta":{}},{"name":"subnodeAdded","tagname":"event","owner":"dr.node","id":"event-subnodeAdded","meta":{}},{"name":"subnodeRemoved","tagname":"event","owner":"dr.node","id":"event-subnodeRemoved","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-dr.shrinktofit","short_doc":"A special \"layout\" that resizes the parent to fit the children\nrather than laying out the children. ...","component":false,"superclasses":["Module","Eventable","dr.node","dr.layoot"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Module' rel='Module' class='docClass'>Module</a><div class='subclass '><a href='#!/api/Eventable' rel='Eventable' class='docClass'>Eventable</a><div class='subclass '><a href='#!/api/dr.node' rel='dr.node' class='docClass'>dr.node</a><div class='subclass '><a href='#!/api/dr.layoot' rel='dr.layoot' class='docClass'>dr.layoot</a><div class='subclass '><strong>dr.shrinktofit</strong></div></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/classdocs.html#dr-shrinktofit' target='_blank'>classdocs.js</a></div></pre><div class='doc-contents'><p>A special \"layout\" that resizes the parent to fit the children\nrather than laying out the children.</p>\n\n<p>Here is a view that contains three sub views that are positioned with a spacedlayout. The parent view has a grey background color. Notice that the subviews are visible because they overflow the parent view, but the parent view itself takes up no space.</p>\n\n<pre class='inline-example '><code>&lt;view bgcolor=\"darkgrey\"&gt;\n  &lt;spacedlayout axis=\"y\"&gt;&lt;/spacedlayout&gt;\n\n  &lt;view width=\"100\" height=\"25\" bgcolor=\"lightpink\" opacity=\".3\"&gt;&lt;/view&gt;\n  &lt;view width=\"100\" height=\"25\" bgcolor=\"plum\" opacity=\".3\"&gt;&lt;/view&gt;\n  &lt;view width=\"100\" height=\"25\" bgcolor=\"lightblue\" opacity=\".3\"&gt;&lt;/view&gt;\n&lt;/view&gt;\n</code></pre>\n\n<p>Now we'll add a shrinktofit to the parent view. Notice that now the parent view does take up space, and you can see it through the semi-transparent subviews.</p>\n\n<pre class='inline-example '><code>&lt;view bgcolor=\"darkgrey\"&gt;\n  &lt;shrinktofit axis=\"both\" xpad=\"5\" ypad=\"10\"&gt;&lt;/shrinktofit&gt;\n\n  &lt;spacedlayout axis=\"y\"&gt;&lt;/spacedlayout&gt;\n\n  &lt;view width=\"100\" height=\"25\" bgcolor=\"lightpink\" opacity=\".3\"&gt;&lt;/view&gt;\n  &lt;view width=\"100\" height=\"25\" bgcolor=\"plum\" opacity=\".3\"&gt;&lt;/view&gt;\n  &lt;view width=\"100\" height=\"25\" bgcolor=\"lightblue\" opacity=\".3\"&gt;&lt;/view&gt;\n&lt;/view&gt;\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-attribute'>Attributes</h3><div class='subsection'><div id='attribute-axis' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.shrinktofit'>dr.shrinktofit</span><br/><a href='source/classdocs.html#dr-shrinktofit-attribute-axis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.shrinktofit-attribute-axis' class='name expandable'>axis</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The axis along which to resize this view to fit its children. ...</div><div class='long'><p>The axis along which to resize this view to fit its children.\nSupported values are 'x', 'y' and 'both'.</p>\n<p>Defaults to: <code>x</code></p></div></div></div><div id='attribute-id' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-id' class='name expandable'>id</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Gives this node a global ID, which can be looked up in the global window object. ...</div><div class='long'><p>Gives this node a global ID, which can be looked up in the global window object.\nTake care to not override builtin globals, or override your own instances!</p>\n</div></div></div><div id='attribute-name' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-name' class='name expandable'>name</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Names this node in its parent scope so it can be referred to later.</p>\n</div><div class='long'><p>Names this node in its parent scope so it can be referred to later.</p>\n</div></div></div><div id='attribute-scriptincludes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-scriptincludes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-scriptincludes' class='name expandable'>scriptincludes</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A comma separated list of URLs to javascript includes required as dependencies. ...</div><div class='long'><p>A comma separated list of URLs to javascript includes required as dependencies. Useful if you need to ensure a third party library is available.</p>\n</div></div></div><div id='attribute-scriptincludeserror' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-scriptincludeserror' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-scriptincludeserror' class='name expandable'>scriptincludeserror</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>An error to show if scriptincludes fail to load</p>\n</div><div class='long'><p>An error to show if scriptincludes fail to load</p>\n</div></div></div><div id='attribute-xpad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.shrinktofit'>dr.shrinktofit</span><br/><a href='source/classdocs.html#dr-shrinktofit-attribute-xpad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.shrinktofit-attribute-xpad' class='name expandable'>xpad</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Additional space added on the child extent along the x-axis. ...</div><div class='long'><p>Additional space added on the child extent along the x-axis.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='attribute-ypad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.shrinktofit'>dr.shrinktofit</span><br/><a href='source/classdocs.html#dr-shrinktofit-attribute-ypad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.shrinktofit-attribute-ypad' class='name expandable'>ypad</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Additional space added on the child extent along the y-axis. ...</div><div class='long'><p>Additional space added on the child extent along the y-axis.</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-inited' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-property-inited' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-property-inited' class='name expandable'>inited</a> : Boolean<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>True when this node and all its children are completely initialized</p>\n</div><div class='long'><p>True when this node and all its children are completely initialized</p>\n</div></div></div><div id='property-subnodes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-property-subnodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-property-subnodes' class='name expandable'>subnodes</a> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a>[]<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>An array of this node's child nodes ...</div><div class='long'><p>An array of this node's child nodes</p>\n<p>Defaults to: <code>[]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-__updateMonitoringSubview' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.shrinktofit'>dr.shrinktofit</span><br/><a href='source/classdocs.html#dr-shrinktofit-method-__updateMonitoringSubview' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.shrinktofit-method-__updateMonitoringSubview' class='name expandable'>__updateMonitoringSubview</a>( <span class='pre'>view, func</span> ) : void<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Wrapped by startMonitoringSubview and stopMonitoringSubview. ...</div><div class='long'><p>Wrapped by startMonitoringSubview and stopMonitoringSubview.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><div class='sub-desc'>\n</div></li><li><span class='pre'>func</span> : Function<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addSubview' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.layoot' rel='dr.layoot' class='defined-in docClass'>dr.layoot</a><br/><a href='source/layout.html#dr-layoot-method-addSubview' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.layoot-method-addSubview' class='name expandable'>addSubview</a>( <span class='pre'>view</span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds the provided view to the subviews array of this layout. ...</div><div class='long'><p>Adds the provided view to the subviews array of this layout.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><div class='sub-desc'><p>The view to add to this layout.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-canUpdate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.layoot' rel='dr.layoot' class='defined-in docClass'>dr.layoot</a><br/><a href='source/layout.html#dr-layoot-method-canUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.layoot-method-canUpdate' class='name expandable'>canUpdate</a>( <span class='pre'></span> ) : boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Checks if the layout is locked or not. ...</div><div class='long'><p>Checks if the layout is locked or not. Should be called by the\n\"update\" method of each layout to check if it is OK to do the update.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>true if not locked, false otherwise.</p>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Destroys this node ...</div><div class='long'><p>Destroys this node</p>\n</div></div></div><div id='method-doSubnodeAdded' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-method-doSubnodeAdded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-method-doSubnodeAdded' class='name expandable'>doSubnodeAdded</a>( <span class='pre'>node</span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when a subnode is added to this node. ...</div><div class='long'><p>Called when a subnode is added to this node. Provides a hook for\nsubclasses. No need for subclasses to call super. Do not call this\nmethod to add a subnode. Instead call setParent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The subnode that was added.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-doSubnodeRemoved' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-method-doSubnodeRemoved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-method-doSubnodeRemoved' class='name expandable'>doSubnodeRemoved</a>( <span class='pre'>node</span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when a subnode is removed from this node. ...</div><div class='long'><p>Called when a subnode is removed from this node. Provides a hook for\nsubclasses. No need for subclasses to call super. Do not call this\nmethod to remove a subnode. Instead call _removeFromParent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The subnode that was removed.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-ignore' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.layoot' rel='dr.layoot' class='defined-in docClass'>dr.layoot</a><br/><a href='source/layout.html#dr-layoot-method-ignore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.layoot-method-ignore' class='name expandable'>ignore</a>( <span class='pre'>view</span> ) : boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Checks if a subview can be added to this Layout or not. ...</div><div class='long'><p>Checks if a subview can be added to this Layout or not. The default\nimplementation returns the 'ignorelayout' attributes of the subview.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><div class='sub-desc'><p>The view to check.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>True means the subview will be skipped, false otherwise.</p>\n</div></li></ul></div></div></div><div id='method-removeSubview' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.layoot' rel='dr.layoot' class='defined-in docClass'>dr.layoot</a><br/><a href='source/layout.html#dr-layoot-method-removeSubview' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.layoot-method-removeSubview' class='name expandable'>removeSubview</a>( <span class='pre'>view</span> ) : number<span class=\"signature\"></span></div><div class='description'><div class='short'>Removes the provided View from the subviews array of this Layout. ...</div><div class='long'><p>Removes the provided View from the subviews array of this Layout.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><div class='sub-desc'><p>The view to remove from this layout.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>number</span><div class='sub-desc'><p>the index of the removed subview or -1 if not removed.</p>\n</div></li></ul></div></div></div><div id='method-sendEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-sendEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-sendEvent' class='name expandable'>sendEvent</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sends an event ...</div><div class='long'><p>Sends an event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the event to send</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>the value to send with the event</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setAttribute' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-setAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-setAttribute' class='name expandable'>setAttribute</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sets an attribute, calls a setter if there is one, then sends an event with the new value ...</div><div class='long'><p>Sets an attribute, calls a setter if there is one, then sends an event with the new value</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the attribute to set</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>the value to set to</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setAttributes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-setAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-setAttributes' class='name expandable'>setAttributes</a>( <span class='pre'>attributes</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Calls setAttribute for each name/value pair in the attributes object ...</div><div class='long'><p>Calls setAttribute for each name/value pair in the attributes object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attributes</span> : Object<div class='sub-desc'><p>An object of name/value pairs to be set</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-startMonitoringAllSubviews' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.layoot' rel='dr.layoot' class='defined-in docClass'>dr.layoot</a><br/><a href='source/layout.html#dr-layoot-method-startMonitoringAllSubviews' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.layoot-method-startMonitoringAllSubviews' class='name expandable'>startMonitoringAllSubviews</a>( <span class='pre'></span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Calls startMonitoringSubview for all views. ...</div><div class='long'><p>Calls startMonitoringSubview for all views. Used by layout\nimplementations when a change occurs to the layout that requires\nrefreshing all the subview monitoring.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-startMonitoringSubview' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.layoot' rel='dr.layoot' class='defined-in docClass'>dr.layoot</a><br/><a href='source/layout.html#dr-layoot-method-startMonitoringSubview' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.layoot-method-startMonitoringSubview' class='name expandable'>startMonitoringSubview</a>( <span class='pre'>view</span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Subclasses should implement this method to start listening to\nevents from the subview that should trigger the update ...</div><div class='long'><p>Subclasses should implement this method to start listening to\nevents from the subview that should trigger the update method.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><div class='sub-desc'><p>The view to start monitoring for changes.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-stopMonitoringAllSubviews' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.layoot' rel='dr.layoot' class='defined-in docClass'>dr.layoot</a><br/><a href='source/layout.html#dr-layoot-method-stopMonitoringAllSubviews' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.layoot-method-stopMonitoringAllSubviews' class='name expandable'>stopMonitoringAllSubviews</a>( <span class='pre'></span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Calls stopMonitoringSubview for all views. ...</div><div class='long'><p>Calls stopMonitoringSubview for all views. Used by Layout\nimplementations when a change occurs to the layout that requires\nrefreshing all the subview monitoring.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-stopMonitoringSubview' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.layoot' rel='dr.layoot' class='defined-in docClass'>dr.layoot</a><br/><a href='source/layout.html#dr-layoot-method-stopMonitoringSubview' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.layoot-method-stopMonitoringSubview' class='name expandable'>stopMonitoringSubview</a>( <span class='pre'>view</span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Subclasses should implement this method to stop listening to\nevents from the subview that would trigger the update me...</div><div class='long'><p>Subclasses should implement this method to stop listening to\nevents from the subview that would trigger the update method. This\nshould remove all listeners that were setup in startMonitoringSubview.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><div class='sub-desc'><p>The view to stop monitoring for changes.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-update' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.layoot' rel='dr.layoot' class='defined-in docClass'>dr.layoot</a><br/><a href='source/layout.html#dr-layoot-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.layoot-method-update' class='name expandable'>update</a>( <span class='pre'></span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Updates the layout. ...</div><div class='long'><p>Updates the layout. Subclasses should call canUpdate to check lock state\nbefore doing anything.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-ondestroy' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-event-ondestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-event-ondestroy' class='name expandable'>ondestroy</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node and all its children are about to be destroyed ...</div><div class='long'><p>Fired when this node and all its children are about to be destroyed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-oninit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-event-oninit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-event-oninit' class='name expandable'>oninit</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node and all its children are completely initialized ...</div><div class='long'><p>Fired when this node and all its children are completely initialized</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onsubnodes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-event-onsubnodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-event-onsubnodes' class='name expandable'>onsubnodes</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node's subnodes array has changed ...</div><div class='long'><p>Fired when this node's subnodes array has changed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-subnodeAdded' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-event-subnodeAdded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-event-subnodeAdded' class='name expandable'>subnodeAdded</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when a subnode is added to this node. ...</div><div class='long'><p>Fired when a subnode is added to this node.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> that was added</p>\n</div></li></ul></div></div></div><div id='event-subnodeRemoved' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-event-subnodeRemoved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-event-subnodeRemoved' class='name expandable'>subnodeRemoved</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when a subnode is removed from this node. ...</div><div class='long'><p>Fired when a subnode is removed from this node.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> that was removed</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});