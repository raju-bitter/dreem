Ext.data.JsonP.dr_text({"tagname":"class","name":"dr.text","autodetected":{},"files":[{"filename":"layout.js","href":"layout.html#dr-text"}],"extends":"dr.view","members":[{"name":"bgcolor","tagname":"cfg","owner":"dr.view","id":"cfg-bgcolor","meta":{}},{"name":"clickable","tagname":"cfg","owner":"dr.view","id":"cfg-clickable","meta":{}},{"name":"clip","tagname":"cfg","owner":"dr.view","id":"cfg-clip","meta":{}},{"name":"height","tagname":"cfg","owner":"dr.view","id":"cfg-height","meta":{}},{"name":"id","tagname":"cfg","owner":"dr.node","id":"cfg-id","meta":{}},{"name":"multiline","tagname":"cfg","owner":"dr.text","id":"cfg-multiline","meta":{}},{"name":"name","tagname":"cfg","owner":"dr.node","id":"cfg-name","meta":{}},{"name":"resize","tagname":"cfg","owner":"dr.text","id":"cfg-resize","meta":{}},{"name":"scriptincludes","tagname":"cfg","owner":"dr.node","id":"cfg-scriptincludes","meta":{}},{"name":"scriptincludeserror","tagname":"cfg","owner":"dr.node","id":"cfg-scriptincludeserror","meta":{}},{"name":"scrollable","tagname":"cfg","owner":"dr.view","id":"cfg-scrollable","meta":{}},{"name":"text","tagname":"cfg","owner":"dr.text","id":"cfg-text","meta":{}},{"name":"visible","tagname":"cfg","owner":"dr.view","id":"cfg-visible","meta":{}},{"name":"width","tagname":"cfg","owner":"dr.view","id":"cfg-width","meta":{}},{"name":"x","tagname":"cfg","owner":"dr.view","id":"cfg-x","meta":{}},{"name":"y","tagname":"cfg","owner":"dr.view","id":"cfg-y","meta":{}},{"name":"ignorelayout","tagname":"property","owner":"dr.view","id":"property-ignorelayout","meta":{}},{"name":"inited","tagname":"property","owner":"dr.node","id":"property-inited","meta":{"readonly":true}},{"name":"layouts","tagname":"property","owner":"dr.view","id":"property-layouts","meta":{"readonly":true}},{"name":"subnodes","tagname":"property","owner":"dr.node","id":"property-subnodes","meta":{"readonly":true}},{"name":"subviews","tagname":"property","owner":"dr.view","id":"property-subviews","meta":{"readonly":true}},{"name":"animate","tagname":"method","owner":"dr.view","id":"method-animate","meta":{"chainable":true}},{"name":"destroy","tagname":"method","owner":"dr.node","id":"method-destroy","meta":{}},{"name":"format","tagname":"method","owner":"dr.text","id":"method-format","meta":{}},{"name":"sendEvent","tagname":"method","owner":"Eventable","id":"method-sendEvent","meta":{"chainable":true}},{"name":"setAttribute","tagname":"method","owner":"Eventable","id":"method-setAttribute","meta":{"chainable":true}},{"name":"setAttributes","tagname":"method","owner":"Eventable","id":"method-setAttributes","meta":{"chainable":true}},{"name":"onclick","tagname":"event","owner":"dr.view","id":"event-onclick","meta":{}},{"name":"ondestroy","tagname":"event","owner":"dr.node","id":"event-ondestroy","meta":{}},{"name":"oninit","tagname":"event","owner":"dr.node","id":"event-oninit","meta":{}},{"name":"onlayouts","tagname":"event","owner":"dr.view","id":"event-onlayouts","meta":{}},{"name":"onmousedown","tagname":"event","owner":"dr.view","id":"event-onmousedown","meta":{}},{"name":"onmouseout","tagname":"event","owner":"dr.view","id":"event-onmouseout","meta":{}},{"name":"onmouseover","tagname":"event","owner":"dr.view","id":"event-onmouseover","meta":{}},{"name":"onmouseup","tagname":"event","owner":"dr.view","id":"event-onmouseup","meta":{}},{"name":"onsubnodes","tagname":"event","owner":"dr.node","id":"event-onsubnodes","meta":{}},{"name":"onsubviews","tagname":"event","owner":"dr.view","id":"event-onsubviews","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-dr.text","short_doc":"Text component that supports single and multi-line text. ...","component":false,"superclasses":["Module","Eventable","dr.node","dr.view"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Module' rel='Module' class='docClass'>Module</a><div class='subclass '><a href='#!/api/Eventable' rel='Eventable' class='docClass'>Eventable</a><div class='subclass '><a href='#!/api/dr.node' rel='dr.node' class='docClass'>dr.node</a><div class='subclass '><a href='#!/api/dr.view' rel='dr.view' class='docClass'>dr.view</a><div class='subclass '><strong>dr.text</strong></div></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/layout.html#dr-text' target='_blank'>layout.js</a></div></pre><div class='doc-contents'><p>Text component that supports single and multi-line text.</p>\n\n<p>The text component can be fixed size, or sized to fit the size of the text.</p>\n\n<pre class='inline-example '><code>&lt;text text=\"Hello World!\" bgcolor=\"red\"&gt;&lt;/text&gt;\n</code></pre>\n\n<p>Here is a multiline text</p>\n\n<pre class='inline-example '><code>&lt;text multiline=\"true\" text=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit\"&gt;&lt;/text&gt;\n</code></pre>\n\n<p>You might want to set the value of a text element based on the value of other attributes via a constraint. Here we set the value by concatenating three attributes together.</p>\n\n<pre class='inline-example '><code>&lt;attribute name=\"firstName\" type=\"string\" value=\"Lumpy\"&gt;&lt;/attribute&gt;\n&lt;attribute name=\"middleName\" type=\"string\" value=\"Space\"&gt;&lt;/attribute&gt;\n&lt;attribute name=\"lastName\" type=\"string\" value=\"Princess\"&gt;&lt;/attribute&gt;\n\n&lt;text text=\"${this.parent.firstName + ' ' + this.parent.middleName + ' ' + this.parent.lastName}\" color=\"hotpink\"&gt;&lt;/text&gt;\n</code></pre>\n\n<p>Constraints can contain more complex JavaScript code</p>\n\n<pre class='inline-example '><code>&lt;attribute name=\"firstName\" type=\"string\" value=\"Lumpy\"&gt;&lt;/attribute&gt;\n&lt;attribute name=\"middleName\" type=\"string\" value=\"Space\"&gt;&lt;/attribute&gt;\n&lt;attribute name=\"lastName\" type=\"string\" value=\"Princess\"&gt;&lt;/attribute&gt;\n\n&lt;text text=\"${this.parent.firstName.charAt(0) + ' ' + this.parent.middleName.charAt(0) + ' ' + this.parent.lastName.charAt(0)}\" color=\"hotpink\"&gt;&lt;/text&gt;\n</code></pre>\n\n<p>We can simplify this by using a method to return the concatenation and constraining the text value to the return value of the method</p>\n\n<pre class='inline-example '><code>&lt;attribute name=\"firstName\" type=\"string\" value=\"Lumpy\"&gt;&lt;/attribute&gt;\n&lt;attribute name=\"middleName\" type=\"string\" value=\"Space\"&gt;&lt;/attribute&gt;\n&lt;attribute name=\"lastName\" type=\"string\" value=\"Princess\"&gt;&lt;/attribute&gt;\n\n&lt;method name=\"initials\"&gt;\n  return this.firstName.charAt(0) + ' ' + this.middleName.charAt(0) + ' ' + this.lastName.charAt(0);\n&lt;/method&gt;\n\n&lt;text text=\"${this.parent.initials()}\" color=\"hotpink\"&gt;&lt;/text&gt;\n</code></pre>\n\n<p>You can override the format method to provide custom formatting for text elements. Here is a subclass of text, timetext, with the format method overridden to convert the text given in seconds into a formatted string.</p>\n\n<pre class='inline-example '><code>&lt;class name=\"timetext\" extends=\"text\"&gt;\n  &lt;method name=\"format\" args=\"seconds\"&gt;\n    var minutes = Math.floor(seconds / 60);\n    var seconds = Math.floor(seconds) - minutes * 60;\n    if (seconds &lt; 10) {\n      seconds = '0' + seconds;\n    }\n    return minutes + ':' + seconds;\n  &lt;/method&gt;\n&lt;/class&gt;\n\n&lt;timetext text=\"240\"&gt;&lt;/timetext&gt;\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-bgcolor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.view' rel='dr.view' class='defined-in docClass'>dr.view</a><br/><a href='source/layout.html#dr-view-cfg-bgcolor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-cfg-bgcolor' class='name expandable'>bgcolor</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Sets this view's background color</p>\n</div><div class='long'><p>Sets this view's background color</p>\n</div></div></div><div id='cfg-clickable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.view' rel='dr.view' class='defined-in docClass'>dr.view</a><br/><a href='source/layout.html#dr-view-cfg-clickable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-cfg-clickable' class='name expandable'>clickable</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If true, this view recieves mouse events. ...</div><div class='long'><p>If true, this view recieves mouse events. Automatically set to true when an onclick/mouse* event is registered for this view.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-clip' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.view' rel='dr.view' class='defined-in docClass'>dr.view</a><br/><a href='source/layout.html#dr-view-cfg-clip' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-cfg-clip' class='name expandable'>clip</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If true, this view clips to its bounds ...</div><div class='long'><p>If true, this view clips to its bounds</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-height' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.view' rel='dr.view' class='defined-in docClass'>dr.view</a><br/><a href='source/layout.html#dr-view-cfg-height' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-cfg-height' class='name expandable'>height</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>This view's height ...</div><div class='long'><p>This view's height</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-id' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-cfg-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-cfg-id' class='name expandable'>id</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Gives this node a global ID, which can be looked up in the global window object. ...</div><div class='long'><p>Gives this node a global ID, which can be looked up in the global window object.\nTake care to not override builtin globals, or override your own instances!</p>\n</div></div></div><div id='cfg-multiline' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.text'>dr.text</span><br/><a href='source/layout.html#dr-text-cfg-multiline' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.text-cfg-multiline' class='name expandable'>multiline</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Set to true to show multi-line text. ...</div><div class='long'><p>Set to true to show multi-line text.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-name' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-cfg-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-cfg-name' class='name expandable'>name</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Names this node in its parent scope so it can be referred to later.</p>\n</div><div class='long'><p>Names this node in its parent scope so it can be referred to later.</p>\n</div></div></div><div id='cfg-resize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.text'>dr.text</span><br/><a href='source/layout.html#dr-text-cfg-resize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.text-cfg-resize' class='name expandable'>resize</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>By default, the text component is sized to the size of the text. ...</div><div class='long'><p>By default, the text component is sized to the size of the text.\nBy setting resize=false, the component size is not modified\nwhen the text changes.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-scriptincludes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-cfg-scriptincludes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-cfg-scriptincludes' class='name expandable'>scriptincludes</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A comma separated list of URLs to javascript includes required as dependencies. ...</div><div class='long'><p>A comma separated list of URLs to javascript includes required as dependencies. Useful if you need to ensure a third party library is available.</p>\n</div></div></div><div id='cfg-scriptincludeserror' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-cfg-scriptincludeserror' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-cfg-scriptincludeserror' class='name expandable'>scriptincludeserror</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>An error to show if scriptincludes fail to load</p>\n</div><div class='long'><p>An error to show if scriptincludes fail to load</p>\n</div></div></div><div id='cfg-scrollable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.view' rel='dr.view' class='defined-in docClass'>dr.view</a><br/><a href='source/layout.html#dr-view-cfg-scrollable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-cfg-scrollable' class='name expandable'>scrollable</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If true, this view clips to its bounds and provides scrolling to see content that overflows the bounds ...</div><div class='long'><p>If true, this view clips to its bounds and provides scrolling to see content that overflows the bounds</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-text' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.text'>dr.text</span><br/><a href='source/layout.html#dr-text-cfg-text' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.text-cfg-text' class='name expandable'>text</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Component text. ...</div><div class='long'><p>Component text.</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div><div id='cfg-visible' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.view' rel='dr.view' class='defined-in docClass'>dr.view</a><br/><a href='source/layout.html#dr-view-cfg-visible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-cfg-visible' class='name expandable'>visible</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If false, this view is invisible ...</div><div class='long'><p>If false, this view is invisible</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-width' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.view' rel='dr.view' class='defined-in docClass'>dr.view</a><br/><a href='source/layout.html#dr-view-cfg-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-cfg-width' class='name expandable'>width</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>This view's width ...</div><div class='long'><p>This view's width</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-x' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.view' rel='dr.view' class='defined-in docClass'>dr.view</a><br/><a href='source/layout.html#dr-view-cfg-x' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-cfg-x' class='name expandable'>x</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>This view's x position ...</div><div class='long'><p>This view's x position</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-y' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.view' rel='dr.view' class='defined-in docClass'>dr.view</a><br/><a href='source/layout.html#dr-view-cfg-y' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-cfg-y' class='name expandable'>y</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>This view's y position ...</div><div class='long'><p>This view's y position</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-ignorelayout' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.view' rel='dr.view' class='defined-in docClass'>dr.view</a><br/><a href='source/layout.html#dr-view-property-ignorelayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-property-ignorelayout' class='name expandable'>ignorelayout</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'><p>If true, layouts should ignore this view</p>\n</div><div class='long'><p>If true, layouts should ignore this view</p>\n</div></div></div><div id='property-inited' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-property-inited' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-property-inited' class='name expandable'>inited</a> : Boolean<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>True when this node and all its children are completely initialized</p>\n</div><div class='long'><p>True when this node and all its children are completely initialized</p>\n</div></div></div><div id='property-layouts' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.view' rel='dr.view' class='defined-in docClass'>dr.view</a><br/><a href='source/layout.html#dr-view-property-layouts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-property-layouts' class='name expandable'>layouts</a> : <a href=\"#!/api/dr.layout\" rel=\"dr.layout\" class=\"docClass\">dr.layout</a>[]<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>An array of this views's layouts. ...</div><div class='long'><p>An array of this views's layouts. Only defined when needed.</p>\n</div></div></div><div id='property-subnodes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-property-subnodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-property-subnodes' class='name expandable'>subnodes</a> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a>[]<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>An array of this node's child nodes ...</div><div class='long'><p>An array of this node's child nodes</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-subviews' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.view' rel='dr.view' class='defined-in docClass'>dr.view</a><br/><a href='source/layout.html#dr-view-property-subviews' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-property-subviews' class='name expandable'>subviews</a> : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a>[]<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>An array of this views's child views</p>\n</div><div class='long'><p>An array of this views's child views</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-animate' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.view' rel='dr.view' class='defined-in docClass'>dr.view</a><br/><a href='source/layout.html#dr-view-method-animate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-method-animate' class='name expandable'>animate</a>( <span class='pre'>obj, Number</span> ) : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Animates this view's attribute(s) ...</div><div class='long'><p>Animates this view's attribute(s)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'><p>A hash of attribute names and values to animate to</p>\n</div></li><li><span class='pre'>Number</span> : Object<div class='sub-desc'><p>duration The duration of the animation in milliseconds</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Destroys this node ...</div><div class='long'><p>Destroys this node</p>\n</div></div></div><div id='method-format' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.text'>dr.text</span><br/><a href='source/layout.html#dr-text-method-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.text-method-format' class='name expandable'>format</a>( <span class='pre'>str</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Format the text to be displayed. ...</div><div class='long'><p>Format the text to be displayed. The default behavior is to\nreturn the text intact. Override to change formatting.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>str</span> : String<div class='sub-desc'><p>The current value of the text component.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The formated string to display in the component.</p>\n</div></li></ul></div></div></div><div id='method-sendEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-sendEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-sendEvent' class='name expandable'>sendEvent</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sends an event ...</div><div class='long'><p>Sends an event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the event to send</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>the value to send with the event</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setAttribute' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-setAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-setAttribute' class='name expandable'>setAttribute</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sets an attribute, calls a setter if there is one, then sends an event with the new value ...</div><div class='long'><p>Sets an attribute, calls a setter if there is one, then sends an event with the new value</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the attribute to set</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>the value to set to</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setAttributes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-setAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-setAttributes' class='name expandable'>setAttributes</a>( <span class='pre'>attributes</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Calls setAttribute for each name/value pair in the attributes object ...</div><div class='long'><p>Calls setAttribute for each name/value pair in the attributes object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attributes</span> : Object<div class='sub-desc'><p>An object of name/value pairs to be set</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-onclick' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.view' rel='dr.view' class='defined-in docClass'>dr.view</a><br/><a href='source/layout.html#dr-view-event-onclick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-event-onclick' class='name expandable'>onclick</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this view is clicked ...</div><div class='long'><p>Fired when this view is clicked</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-ondestroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-event-ondestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-event-ondestroy' class='name expandable'>ondestroy</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node and all its children are about to be destroyed ...</div><div class='long'><p>Fired when this node and all its children are about to be destroyed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-oninit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-event-oninit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-event-oninit' class='name expandable'>oninit</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node and all its children are completely initialized ...</div><div class='long'><p>Fired when this node and all its children are completely initialized</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onlayouts' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.view' rel='dr.view' class='defined-in docClass'>dr.view</a><br/><a href='source/layout.html#dr-view-event-onlayouts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-event-onlayouts' class='name expandable'>onlayouts</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this views's layouts array has changed ...</div><div class='long'><p>Fired when this views's layouts array has changed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.layout\" rel=\"dr.layout\" class=\"docClass\">dr.layout</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.layout\" rel=\"dr.layout\" class=\"docClass\">dr.layout</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onmousedown' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.view' rel='dr.view' class='defined-in docClass'>dr.view</a><br/><a href='source/layout.html#dr-view-event-onmousedown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-event-onmousedown' class='name expandable'>onmousedown</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the mouse goes down on this view ...</div><div class='long'><p>Fired when the mouse goes down on this view</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onmouseout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.view' rel='dr.view' class='defined-in docClass'>dr.view</a><br/><a href='source/layout.html#dr-view-event-onmouseout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-event-onmouseout' class='name expandable'>onmouseout</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the mouse moves off this view ...</div><div class='long'><p>Fired when the mouse moves off this view</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onmouseover' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.view' rel='dr.view' class='defined-in docClass'>dr.view</a><br/><a href='source/layout.html#dr-view-event-onmouseover' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-event-onmouseover' class='name expandable'>onmouseover</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the mouse moves over this view ...</div><div class='long'><p>Fired when the mouse moves over this view</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onmouseup' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.view' rel='dr.view' class='defined-in docClass'>dr.view</a><br/><a href='source/layout.html#dr-view-event-onmouseup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-event-onmouseup' class='name expandable'>onmouseup</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the mouse goes up on this view ...</div><div class='long'><p>Fired when the mouse goes up on this view</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onsubnodes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-event-onsubnodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-event-onsubnodes' class='name expandable'>onsubnodes</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node's subnodes array has changed ...</div><div class='long'><p>Fired when this node's subnodes array has changed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onsubviews' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.view' rel='dr.view' class='defined-in docClass'>dr.view</a><br/><a href='source/layout.html#dr-view-event-onsubviews' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.view-event-onsubviews' class='name expandable'>onsubviews</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this views's subviews array has changed ...</div><div class='long'><p>Fired when this views's subviews array has changed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a> that fired the event</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});