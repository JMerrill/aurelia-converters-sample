/* */ 
(function(process) {
  Ext.data.JsonP.Autolinker_AnchorTagBuilder({
    "tagname": "class",
    "name": "Autolinker.AnchorTagBuilder",
    "autodetected": {},
    "files": [{
      "filename": "AnchorTagBuilder.js",
      "href": "AnchorTagBuilder.html#Autolinker-AnchorTagBuilder"
    }],
    "protected": true,
    "extends": null,
    "members": [{
      "name": "className",
      "tagname": "cfg",
      "owner": "Autolinker.AnchorTagBuilder",
      "id": "cfg-className",
      "meta": {}
    }, {
      "name": "newWindow",
      "tagname": "cfg",
      "owner": "Autolinker.AnchorTagBuilder",
      "id": "cfg-newWindow",
      "meta": {}
    }, {
      "name": "truncate",
      "tagname": "cfg",
      "owner": "Autolinker.AnchorTagBuilder",
      "id": "cfg-truncate",
      "meta": {}
    }, {
      "name": "constructor",
      "tagname": "method",
      "owner": "Autolinker.AnchorTagBuilder",
      "id": "method-constructor",
      "meta": {}
    }, {
      "name": "build",
      "tagname": "method",
      "owner": "Autolinker.AnchorTagBuilder",
      "id": "method-build",
      "meta": {}
    }, {
      "name": "createAttrs",
      "tagname": "method",
      "owner": "Autolinker.AnchorTagBuilder",
      "id": "method-createAttrs",
      "meta": {"protected": true}
    }, {
      "name": "createCssClass",
      "tagname": "method",
      "owner": "Autolinker.AnchorTagBuilder",
      "id": "method-createCssClass",
      "meta": {"private": true}
    }, {
      "name": "doTruncate",
      "tagname": "method",
      "owner": "Autolinker.AnchorTagBuilder",
      "id": "method-doTruncate",
      "meta": {"private": true}
    }, {
      "name": "processAnchorText",
      "tagname": "method",
      "owner": "Autolinker.AnchorTagBuilder",
      "id": "method-processAnchorText",
      "meta": {"private": true}
    }],
    "alternateClassNames": [],
    "aliases": {},
    "id": "class-Autolinker.AnchorTagBuilder",
    "short_doc": "Builds anchor (&lt;a&gt;) tags for the Autolinker utility when a match is found. ...",
    "component": false,
    "superclasses": [],
    "subclasses": [],
    "mixedInto": [],
    "mixins": [],
    "parentMixins": [],
    "requires": [],
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/AnchorTagBuilder.html#Autolinker-AnchorTagBuilder' target='_blank'>AnchorTagBuilder.js</a></div></pre><div class='doc-contents'><p>Builds anchor (&lt;a&gt;) tags for the Autolinker utility when a match is found.</p>\n\n<p>Normally this class is instantiated, configured, and used internally by an <a href=\"#!/api/Autolinker\" rel=\"Autolinker\" class=\"docClass\">Autolinker</a> instance, but may\nactually be retrieved in a <a href=\"#!/api/Autolinker-cfg-replaceFn\" rel=\"Autolinker-cfg-replaceFn\" class=\"docClass\">replaceFn</a> to create <a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">HtmlTag</a> instances\nwhich may be modified before returning from the <a href=\"#!/api/Autolinker-cfg-replaceFn\" rel=\"Autolinker-cfg-replaceFn\" class=\"docClass\">replaceFn</a>. For example:</p>\n\n<pre><code>var html = <a href=\"#!/api/Autolinker-method-link\" rel=\"Autolinker-method-link\" class=\"docClass\">Autolinker.link</a>( \"Test google.com\", {\n    replaceFn : function( autolinker, match ) {\n        var tag = autolinker.getTagBuilder().build( match );  // returns an <a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a> instance\n        tag.setAttr( 'rel', 'nofollow' );\n\n        return tag;\n    }\n} );\n\n// generated html:\n//   Test &lt;a href=\"http://google.com\" target=\"_blank\" rel=\"nofollow\"&gt;google.com&lt;/a&gt;\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-className' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.AnchorTagBuilder'>Autolinker.AnchorTagBuilder</span><br/><a href='source/AnchorTagBuilder.html#Autolinker-AnchorTagBuilder-cfg-className' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.AnchorTagBuilder-cfg-className' class='name expandable'>className</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A CSS class name to add to the generated links. ...</div><div class='long'><p>A CSS class name to add to the generated links. This class will be added to all links, as well as this class\nplus url/email/twitter suffixes for styling url/email/twitter links differently.</p>\n\n<p>For example, if this config is provided as \"myLink\", then:</p>\n\n<ul>\n<li>URL links will have the CSS classes: \"myLink myLink-url\"</li>\n<li>Email links will have the CSS classes: \"myLink myLink-email\", and</li>\n<li>Twitter links will have the CSS classes: \"myLink myLink-twitter\"</li>\n</ul>\n\n</div></div></div><div id='cfg-newWindow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.AnchorTagBuilder'>Autolinker.AnchorTagBuilder</span><br/><a href='source/AnchorTagBuilder.html#Autolinker-AnchorTagBuilder-cfg-newWindow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.AnchorTagBuilder-cfg-newWindow' class='name expandable'>newWindow</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'><p><code>true</code> if the links should open in a new window, <code>false</code> otherwise.</p>\n</div><div class='long'><p><code>true</code> if the links should open in a new window, <code>false</code> otherwise.</p>\n</div></div></div><div id='cfg-truncate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.AnchorTagBuilder'>Autolinker.AnchorTagBuilder</span><br/><a href='source/AnchorTagBuilder.html#Autolinker-AnchorTagBuilder-cfg-truncate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.AnchorTagBuilder-cfg-truncate' class='name expandable'>truncate</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>A number for how many characters long URLs/emails/twitter handles should be truncated to inside the text of\na link. ...</div><div class='long'><p>A number for how many characters long URLs/emails/twitter handles should be truncated to inside the text of\na link. If the URL/email/twitter is over this number of characters, it will be truncated to this length by\nadding a two period ellipsis ('..') to the end of the string.</p>\n\n<p>For example: A url like 'http://www.yahoo.com/some/long/path/to/a/file' truncated to 25 characters might look\nsomething like this: 'yahoo.com/some/long/pat..'</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.AnchorTagBuilder'>Autolinker.AnchorTagBuilder</span><br/><a href='source/AnchorTagBuilder.html#Autolinker-AnchorTagBuilder-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Autolinker.AnchorTagBuilder-method-constructor' class='name expandable'>Autolinker.AnchorTagBuilder</a>( <span class='pre'>[cfg]</span> ) : <a href=\"#!/api/Autolinker.AnchorTagBuilder\" rel=\"Autolinker.AnchorTagBuilder\" class=\"docClass\">Autolinker.AnchorTagBuilder</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Object (optional)<div class='sub-desc'><p>The configuration options for the AnchorTagBuilder instance, specified in an Object (map).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.AnchorTagBuilder\" rel=\"Autolinker.AnchorTagBuilder\" class=\"docClass\">Autolinker.AnchorTagBuilder</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-build' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.AnchorTagBuilder'>Autolinker.AnchorTagBuilder</span><br/><a href='source/AnchorTagBuilder.html#Autolinker-AnchorTagBuilder-method-build' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.AnchorTagBuilder-method-build' class='name expandable'>build</a>( <span class='pre'>match</span> ) : <a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Generates the actual anchor (&lt;a&gt;) tag to use in place of the matched URL/email/Twitter text,\nvia its match object. ...</div><div class='long'><p>Generates the actual anchor (&lt;a&gt;) tag to use in place of the matched URL/email/Twitter text,\nvia its <code>match</code> object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>match</span> : <a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a><div class='sub-desc'><p>The Match instance to generate an anchor tag from.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a></span><div class='sub-desc'><p>The HtmlTag instance for the anchor tag.</p>\n</div></li></ul></div></div></div><div id='method-createAttrs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.AnchorTagBuilder'>Autolinker.AnchorTagBuilder</span><br/><a href='source/AnchorTagBuilder.html#Autolinker-AnchorTagBuilder-method-createAttrs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.AnchorTagBuilder-method-createAttrs' class='name expandable'>createAttrs</a>( <span class='pre'>matchType, href</span> ) : Object<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Creates the Object (map) of the HTML attributes for the anchor (&lt;a&gt;) tag being generated. ...</div><div class='long'><p>Creates the Object (map) of the HTML attributes for the anchor (&lt;a&gt;) tag being generated.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>matchType</span> : \"url\"/\"email\"/\"twitter\"<div class='sub-desc'><p>The type of match that an anchor tag is being generated for.</p>\n</div></li><li><span class='pre'>href</span> : String<div class='sub-desc'><p>The href for the anchor tag.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>A key/value Object (map) of the anchor tag's attributes.</p>\n</div></li></ul></div></div></div><div id='method-createCssClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.AnchorTagBuilder'>Autolinker.AnchorTagBuilder</span><br/><a href='source/AnchorTagBuilder.html#Autolinker-AnchorTagBuilder-method-createCssClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.AnchorTagBuilder-method-createCssClass' class='name expandable'>createCssClass</a>( <span class='pre'>matchType</span> ) : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Creates the CSS class that will be used for a given anchor tag, based on the matchType and the className\nconfig. ...</div><div class='long'><p>Creates the CSS class that will be used for a given anchor tag, based on the <code>matchType</code> and the <a href=\"#!/api/Autolinker.AnchorTagBuilder-cfg-className\" rel=\"Autolinker.AnchorTagBuilder-cfg-className\" class=\"docClass\">className</a>\nconfig.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>matchType</span> : \"url\"/\"email\"/\"twitter\"<div class='sub-desc'><p>The type of match that an anchor tag is being generated for.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The CSS class string for the link. Example return: \"myLink myLink-url\". If no <a href=\"#!/api/Autolinker.AnchorTagBuilder-cfg-className\" rel=\"Autolinker.AnchorTagBuilder-cfg-className\" class=\"docClass\">className</a>\n  was configured, returns an empty string.</p>\n</div></li></ul></div></div></div><div id='method-doTruncate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.AnchorTagBuilder'>Autolinker.AnchorTagBuilder</span><br/><a href='source/AnchorTagBuilder.html#Autolinker-AnchorTagBuilder-method-doTruncate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.AnchorTagBuilder-method-doTruncate' class='name expandable'>doTruncate</a>( <span class='pre'>text</span> ) : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Performs the truncation of the anchorText, if the anchorText is longer than the truncate option. ...</div><div class='long'><p>Performs the truncation of the <code>anchorText</code>, if the <code>anchorText</code> is longer than the <a href=\"#!/api/Autolinker.AnchorTagBuilder-cfg-truncate\" rel=\"Autolinker.AnchorTagBuilder-cfg-truncate\" class=\"docClass\">truncate</a> option.\nTruncates the text to 2 characters fewer than the <a href=\"#!/api/Autolinker.AnchorTagBuilder-cfg-truncate\" rel=\"Autolinker.AnchorTagBuilder-cfg-truncate\" class=\"docClass\">truncate</a> option, and adds \"..\" to the end.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>The anchor tag's text (i.e. what will be displayed).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The truncated anchor text.</p>\n</div></li></ul></div></div></div><div id='method-processAnchorText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.AnchorTagBuilder'>Autolinker.AnchorTagBuilder</span><br/><a href='source/AnchorTagBuilder.html#Autolinker-AnchorTagBuilder-method-processAnchorText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.AnchorTagBuilder-method-processAnchorText' class='name expandable'>processAnchorText</a>( <span class='pre'>anchorText</span> ) : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Processes the anchorText by truncating the text according to the truncate config. ...</div><div class='long'><p>Processes the <code>anchorText</code> by truncating the text according to the <a href=\"#!/api/Autolinker.AnchorTagBuilder-cfg-truncate\" rel=\"Autolinker.AnchorTagBuilder-cfg-truncate\" class=\"docClass\">truncate</a> config.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>anchorText</span> : String<div class='sub-desc'><p>The anchor tag's text (i.e. what will be displayed).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The processed <code>anchorText</code>.</p>\n</div></li></ul></div></div></div></div></div></div></div>",
    "meta": {"protected": true}
  });
})(require("process"));
