/* */ 
(function(process) {
  Ext.data.JsonP.Autolinker_HtmlParser({
    "tagname": "class",
    "name": "Autolinker.HtmlParser",
    "autodetected": {},
    "files": [{
      "filename": "HtmlParser.js",
      "href": "HtmlParser.html#Autolinker-HtmlParser"
    }],
    "private": true,
    "extends": null,
    "members": [{
      "name": "htmlRegex",
      "tagname": "property",
      "owner": "Autolinker.HtmlParser",
      "id": "property-htmlRegex",
      "meta": {"private": true}
    }, {
      "name": "parse",
      "tagname": "method",
      "owner": "Autolinker.HtmlParser",
      "id": "method-parse",
      "meta": {}
    }],
    "alternateClassNames": [],
    "aliases": {},
    "id": "class-Autolinker.HtmlParser",
    "short_doc": "An HTML parser implementation which simply walks an HTML string and calls the provided visitor functions to process\nH...",
    "component": false,
    "superclasses": [],
    "subclasses": [],
    "mixedInto": [],
    "mixins": [],
    "parentMixins": [],
    "requires": [],
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/HtmlParser.html#Autolinker-HtmlParser' target='_blank'>HtmlParser.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>An HTML parser implementation which simply walks an HTML string and calls the provided visitor functions to process\nHTML and text nodes.</p>\n\n<p>Autolinker uses this to only link URLs/emails/Twitter handles within text nodes, basically ignoring HTML tags.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-htmlRegex' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlParser'>Autolinker.HtmlParser</span><br/><a href='source/HtmlParser.html#Autolinker-HtmlParser-property-htmlRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlParser-property-htmlRegex' class='name expandable'>htmlRegex</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The regular expression used to pull out HTML tags from a string. ...</div><div class='long'><p>The regular expression used to pull out HTML tags from a string. Handles namespaced HTML tags and\nattribute names, as specified by http://www.w3.org/TR/html-markup/syntax.html.</p>\n\n<p>Capturing groups:</p>\n\n<ol>\n<li>The \"!DOCTYPE\" tag name, if a tag is a &lt;!DOCTYPE&gt; tag.</li>\n<li>If it is an end tag, this group will have the '/'.</li>\n<li>The tag name for all tags (other than the &lt;!DOCTYPE&gt; tag)</li>\n</ol>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-parse' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlParser'>Autolinker.HtmlParser</span><br/><a href='source/HtmlParser.html#Autolinker-HtmlParser-method-parse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlParser-method-parse' class='name expandable'>parse</a>( <span class='pre'>html, [options]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Walks an HTML string, calling the options.processHtmlNode function for each HTML tag that is encountered, and calling...</div><div class='long'><p>Walks an HTML string, calling the <code>options.processHtmlNode</code> function for each HTML tag that is encountered, and calling\nthe <code>options.processTextNode</code> function when each text around HTML tags is encountered.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>html</span> : String<div class='sub-desc'><p>The HTML to parse.</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>An Object (map) which may contain the following properties:</p>\n<ul><li><span class='pre'>processHtmlNode</span> : Function (optional)<div class='sub-desc'><p>A visitor function which allows processing of an encountered HTML node.\n  This function is called with the following arguments:</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tagText</span> : String (optional)<div class='sub-desc'><p>The HTML tag text that was found.</p>\n</div></li><li><span class='pre'>tagName</span> : String (optional)<div class='sub-desc'><p>The tag name for the HTML tag that was found. Ex: 'a' for an anchor tag.</p>\n</div></li><li><span class='pre'>isClosingTag</span> : String (optional)<div class='sub-desc'><p><code>true</code> if the tag is a closing tag (ex: &lt;/a&gt;), <code>false</code> otherwise.</p>\n</div></li></ul></div></li><li><span class='pre'>processTextNode</span> : Function (optional)<div class='sub-desc'><p>A visitor function which allows processing of an encountered text node.\n  This function is called with the following arguments:</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String (optional)<div class='sub-desc'><p>The text node that was matched.</p>\n</div></li></ul></div></li></ul></div></li></ul></div></div></div></div></div></div></div>",
    "meta": {"private": true}
  });
})(require("process"));
