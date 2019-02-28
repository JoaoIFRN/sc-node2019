// Compiled using marko@4.15.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/testes$1.0.0/view/lista.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    hello_template = marko_loadTemplate(require.resolve("../components/hello.marko")),
    hello_tag = marko_loadTag(hello_template),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head></head><body>");

  component_globals_tag({}, out);

  out.w("<table><th><td>Id</td><td>Nome</td></th>");

  var for__7 = 0;

  marko_forEach(data.livros, function(livro) {
    var keyscope__8 = "[" + ((for__7++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(livro.id) +
      "</td><td>" +
      marko_escapeXml(livro.nome) +
      "</td></tr>");
  });

  out.w("</table>");

  hello_tag({}, out, __component, "12");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "13");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/testes$1.0.0/view/lista.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "../components/hello.marko",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/core/await/reorderer-renderer"
    ]
  };
