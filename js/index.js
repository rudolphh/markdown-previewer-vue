"use strict";

var renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return "<a target=\"_blank\" href=\"" + href + "\">" + text + '</a>';
};

marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: true
});

var initialInput = "# Markdown Previewer in Vue!\n\n## This is an h2 sub-heading.\n### Yada, yada h3, but wait... there's more!\n  \nYou can put a single line of code (e.g  `<div></div>`) between 2 backticks.\n\n```\n// use 3 backticks for multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... keanu matrix woah!\nOr _italic_.\nOr **_both!_**\n\nYou can even go apeshit ~~crossing stuff out~~.\n\nThere's also [links](http://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want a little spice, tables:\n\nHeader 1 | Header 2 | Header 3\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://i.imgsafe.org/d2653a853e.jpg)\n";

new Vue({
  el: "#app",
  data: {
    editorMarkdown: initialInput
  },
  methods: {},
  computed: {
    markupText: function markupText() {
      return marked(this.editorMarkdown);
    }
  }
});