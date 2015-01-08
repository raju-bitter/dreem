Ext.data.JsonP.dr_microphone({"tagname":"class","name":"dr.microphone","autodetected":{},"files":[{"filename":"classdocs.js","href":"classdocs.html#dr-microphone"}],"extends":"dr.node","members":[{"name":"fft","tagname":"attribute","owner":"dr.microphone","id":"attribute-fft","meta":{"readonly":true}},{"name":"fftsize","tagname":"attribute","owner":"dr.microphone","id":"attribute-fftsize","meta":{}},{"name":"fftsmoothing","tagname":"attribute","owner":"dr.microphone","id":"attribute-fftsmoothing","meta":{}},{"name":"id","tagname":"attribute","owner":"dr.node","id":"attribute-id","meta":{}},{"name":"inited","tagname":"attribute","owner":"dr.node","id":"attribute-inited","meta":{"readonly":true}},{"name":"mediastream","tagname":"attribute","owner":"dr.microphone","id":"attribute-mediastream","meta":{"readonly":true}},{"name":"name","tagname":"attribute","owner":"dr.node","id":"attribute-name","meta":{}},{"name":"permissiondenied","tagname":"attribute","owner":"dr.microphone","id":"attribute-permissiondenied","meta":{"readonly":true}},{"name":"playbackurl","tagname":"attribute","owner":"dr.microphone","id":"attribute-playbackurl","meta":{"readonly":true}},{"name":"record","tagname":"attribute","owner":"dr.microphone","id":"attribute-record","meta":{}},{"name":"recording","tagname":"attribute","owner":"dr.microphone","id":"attribute-recording","meta":{"readonly":true}},{"name":"recordingtime","tagname":"attribute","owner":"dr.microphone","id":"attribute-recordingtime","meta":{"readonly":true}},{"name":"scriptincludes","tagname":"attribute","owner":"dr.node","id":"attribute-scriptincludes","meta":{}},{"name":"scriptincludeserror","tagname":"attribute","owner":"dr.node","id":"attribute-scriptincludeserror","meta":{}},{"name":"stream","tagname":"attribute","owner":"dr.microphone","id":"attribute-stream","meta":{}},{"name":"streaming","tagname":"attribute","owner":"dr.microphone","id":"attribute-streaming","meta":{"readonly":true}},{"name":"subnodes","tagname":"attribute","owner":"dr.node","id":"attribute-subnodes","meta":{"readonly":true}},{"name":"supported","tagname":"attribute","owner":"dr.microphone","id":"attribute-supported","meta":{"readonly":true}},{"name":"animate","tagname":"method","owner":"dr.node","id":"method-animate","meta":{"chainable":true}},{"name":"createChild","tagname":"method","owner":"dr.node","id":"method-createChild","meta":{}},{"name":"destroy","tagname":"method","owner":"dr.node","id":"method-destroy","meta":{}},{"name":"doSubnodeAdded","tagname":"method","owner":"dr.node","id":"method-doSubnodeAdded","meta":{"private":true}},{"name":"doSubnodeRemoved","tagname":"method","owner":"dr.node","id":"method-doSubnodeRemoved","meta":{"private":true}},{"name":"sendEvent","tagname":"method","owner":"Eventable","id":"method-sendEvent","meta":{"chainable":true}},{"name":"setAttribute","tagname":"method","owner":"Eventable","id":"method-setAttribute","meta":{"chainable":true}},{"name":"setAttributes","tagname":"method","owner":"Eventable","id":"method-setAttributes","meta":{"chainable":true}},{"name":"ondestroy","tagname":"event","owner":"dr.node","id":"event-ondestroy","meta":{}},{"name":"oninit","tagname":"event","owner":"dr.node","id":"event-oninit","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-dr.microphone","component":false,"superclasses":["Module","Eventable","dr.node"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Module' rel='Module' class='docClass'>Module</a><div class='subclass '><a href='#!/api/Eventable' rel='Eventable' class='docClass'>Eventable</a><div class='subclass '><a href='#!/api/dr.node' rel='dr.node' class='docClass'>dr.node</a><div class='subclass '><strong>dr.microphone</strong></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/classdocs.html#dr-microphone' target='_blank'>classdocs.js</a></div></pre><div class='doc-contents'><p>Enables audio capture from the microphone device.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-attribute'>Attributes</h3><div class='subsection'><div id='attribute-fft' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.microphone'>dr.microphone</span><br/><a href='source/classdocs.html#dr-microphone-attribute-fft' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.microphone-attribute-fft' class='name expandable'>fft</a> : Number[]<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>An array of numbers representing the FFT analysis of the audio as it's playing.</p>\n</div><div class='long'><p>An array of numbers representing the FFT analysis of the audio as it's playing.</p>\n</div></div></div><div id='attribute-fftsize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.microphone'>dr.microphone</span><br/><a href='source/classdocs.html#dr-microphone-attribute-fftsize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.microphone-attribute-fftsize' class='name expandable'>fftsize</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>The number of fft frames to use when setting fft. ...</div><div class='long'><p>The number of fft frames to use when setting <a href=\"#!/api/dr.microphone-attribute-fft\" rel=\"dr.microphone-attribute-fft\" class=\"docClass\">fft</a>. Must be a non-zero power of two in the range 32 to 2048.</p>\n</div></div></div><div id='attribute-fftsmoothing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.microphone'>dr.microphone</span><br/><a href='source/classdocs.html#dr-microphone-attribute-fftsmoothing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.microphone-attribute-fftsmoothing' class='name expandable'>fftsmoothing</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>The amount of smoothing to apply to the FFT analysis. ...</div><div class='long'><p>The amount of smoothing to apply to the FFT analysis. A value from 0 -> 1 where 0 represents no time averaging with the last FFT analysis frame.</p>\n<p>Defaults to: <code>0.8</code></p></div></div></div><div id='attribute-id' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-id' class='name expandable'>id</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Gives this node a global ID, which can be looked up in the global window object. ...</div><div class='long'><p>Gives this node a global ID, which can be looked up in the global window object.\nTake care to not override builtin globals, or override your own instances!</p>\n</div></div></div><div id='attribute-inited' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-inited' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-inited' class='name expandable'>inited</a> : Boolean<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>True when this node and all its children are completely initialized</p>\n</div><div class='long'><p>True when this node and all its children are completely initialized</p>\n</div></div></div><div id='attribute-mediastream' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.microphone'>dr.microphone</span><br/><a href='source/classdocs.html#dr-microphone-attribute-mediastream' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.microphone-attribute-mediastream' class='name expandable'>mediastream</a> : LocalMediaStream<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>The input stream from the microphone.</p>\n</div><div class='long'><p>The input stream from the microphone.</p>\n</div></div></div><div id='attribute-name' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-name' class='name expandable'>name</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Names this node in its parent scope so it can be referred to later.</p>\n</div><div class='long'><p>Names this node in its parent scope so it can be referred to later.</p>\n</div></div></div><div id='attribute-permissiondenied' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.microphone'>dr.microphone</span><br/><a href='source/classdocs.html#dr-microphone-attribute-permissiondenied' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.microphone-attribute-permissiondenied' class='name expandable'>permissiondenied</a> : Boolean<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>True if the user has denied permission to access the device. ...</div><div class='long'><p>True if the user has denied permission to access the device.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='attribute-playbackurl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.microphone'>dr.microphone</span><br/><a href='source/classdocs.html#dr-microphone-attribute-playbackurl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.microphone-attribute-playbackurl' class='name expandable'>playbackurl</a> : String<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>Object URL of the latest recording, which can be used with an instance of <a href=\"#!/api/dr.audioplayer\" rel=\"dr.audioplayer\" class=\"docClass\">dr.audioplayer</a> to play back the recording.</p>\n</div><div class='long'><p>Object URL of the latest recording, which can be used with an instance of <a href=\"#!/api/dr.audioplayer\" rel=\"dr.audioplayer\" class=\"docClass\">dr.audioplayer</a> to play back the recording.</p>\n</div></div></div><div id='attribute-record' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.microphone'>dr.microphone</span><br/><a href='source/classdocs.html#dr-microphone-attribute-record' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.microphone-attribute-record' class='name expandable'>record</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Set this to true to started recording the input stream, set to false to stop. ...</div><div class='long'><p>Set this to true to started recording the input stream, set to false to stop. When recording is stopped the recording will be retained in memory until another recording is started. The URL to access the recording is saved in the playbackurl attribute. The <a href=\"#!/api/dr.microphone-attribute-recording\" rel=\"dr.microphone-attribute-recording\" class=\"docClass\">recording</a> attribute indicates when the device is actually recording.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='attribute-recording' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.microphone'>dr.microphone</span><br/><a href='source/classdocs.html#dr-microphone-attribute-recording' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.microphone-attribute-recording' class='name expandable'>recording</a> : Boolean<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>True when the stream is being recorded. ...</div><div class='long'><p>True when the stream is being recorded.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='attribute-recordingtime' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.microphone'>dr.microphone</span><br/><a href='source/classdocs.html#dr-microphone-attribute-recordingtime' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.microphone-attribute-recordingtime' class='name expandable'>recordingtime</a> : Number<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>The length of the recording in seconds.</p>\n</div><div class='long'><p>The length of the recording in seconds.</p>\n</div></div></div><div id='attribute-scriptincludes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-scriptincludes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-scriptincludes' class='name expandable'>scriptincludes</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A comma separated list of URLs to javascript includes required as dependencies. ...</div><div class='long'><p>A comma separated list of URLs to javascript includes required as dependencies. Useful if you need to ensure a third party library is available.</p>\n</div></div></div><div id='attribute-scriptincludeserror' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-scriptincludeserror' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-scriptincludeserror' class='name expandable'>scriptincludeserror</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>An error to show if scriptincludes fail to load</p>\n</div><div class='long'><p>An error to show if scriptincludes fail to load</p>\n</div></div></div><div id='attribute-stream' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.microphone'>dr.microphone</span><br/><a href='source/classdocs.html#dr-microphone-attribute-stream' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.microphone-attribute-stream' class='name expandable'>stream</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>When set to true the user will be asked permission to access the device, and if permission is granted the stream will...</div><div class='long'><p>When set to true the user will be asked permission to access the device, and if permission is granted the stream will be started. When set to false the stream will be stopped. The <a href=\"#!/api/dr.microphone-attribute-streaming\" rel=\"dr.microphone-attribute-streaming\" class=\"docClass\">streaming</a> attribute indicates when the device is actually streaming.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='attribute-streaming' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.microphone'>dr.microphone</span><br/><a href='source/classdocs.html#dr-microphone-attribute-streaming' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.microphone-attribute-streaming' class='name expandable'>streaming</a> : Boolean<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>True when input is streaming from the device. ...</div><div class='long'><p>True when input is streaming from the device. False when it has been stopped, or if the user has denied access to the device.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='attribute-subnodes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-subnodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-subnodes' class='name expandable'>subnodes</a> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a>[]<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>An array of this node's child nodes</p>\n</div><div class='long'><p>An array of this node's child nodes</p>\n</div></div></div><div id='attribute-supported' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.microphone'>dr.microphone</span><br/><a href='source/classdocs.html#dr-microphone-attribute-supported' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.microphone-attribute-supported' class='name expandable'>supported</a> : Boolean<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>False if the microphone component is not supported in the users browser. ...</div><div class='long'><p>False if the microphone component is not supported in the users browser.</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-animate' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-method-animate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-method-animate' class='name expandable'>animate</a>( <span class='pre'>obj, Number</span> ) : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Animates this node's attribute(s) ...</div><div class='long'><p>Animates this node's attribute(s)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'><p>A hash of attribute names and values to animate to</p>\n</div></li><li><span class='pre'>Number</span> : Object<div class='sub-desc'><p>duration The duration of the animation in milliseconds</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-createChild' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-method-createChild' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-method-createChild' class='name expandable'>createChild</a>( <span class='pre'>Object</span> ) : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Used to create child instances on a node. ...</div><div class='long'><p>Used to create child instances on a node.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>Object</span> : Object<div class='sub-desc'><p>options Should include a class attribute: 'class', e.g. {class: 'view'} unless a <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> is desired.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Destroys this node ...</div><div class='long'><p>Destroys this node</p>\n</div></div></div><div id='method-doSubnodeAdded' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-method-doSubnodeAdded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-method-doSubnodeAdded' class='name expandable'>doSubnodeAdded</a>( <span class='pre'>node</span> ) : void<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called when a subnode is added to this node. ...</div><div class='long'><p>Called when a subnode is added to this node. Provides a hook for\nsubclasses. No need for subclasses to call super. Do not call this\nmethod to add a subnode. Instead call setParent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The subnode that was added.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-doSubnodeRemoved' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-method-doSubnodeRemoved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-method-doSubnodeRemoved' class='name expandable'>doSubnodeRemoved</a>( <span class='pre'>node</span> ) : void<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called when a subnode is removed from this node. ...</div><div class='long'><p>Called when a subnode is removed from this node. Provides a hook for\nsubclasses. No need for subclasses to call super. Do not call this\nmethod to remove a subnode. Instead call _removeFromParent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The subnode that was removed.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-sendEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-sendEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-sendEvent' class='name expandable'>sendEvent</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sends an event ...</div><div class='long'><p>Sends an event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the event to send</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>the value to send with the event</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setAttribute' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-setAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-setAttribute' class='name expandable'>setAttribute</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sets an attribute, calls a setter if there is one, then sends an event with the new value ...</div><div class='long'><p>Sets an attribute, calls a setter if there is one, then sends an event with the new value</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the attribute to set</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>the value to set to</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setAttributes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-setAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-setAttributes' class='name expandable'>setAttributes</a>( <span class='pre'>attributes</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Calls setAttribute for each name/value pair in the attributes object ...</div><div class='long'><p>Calls setAttribute for each name/value pair in the attributes object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attributes</span> : Object<div class='sub-desc'><p>An object of name/value pairs to be set</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-ondestroy' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-event-ondestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-event-ondestroy' class='name expandable'>ondestroy</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node and all its children are about to be destroyed ...</div><div class='long'><p>Fired when this node and all its children are about to be destroyed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-oninit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-event-oninit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-event-oninit' class='name expandable'>oninit</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node and all its children are completely initialized ...</div><div class='long'><p>Fired when this node and all its children are completely initialized</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> that fired the event</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});