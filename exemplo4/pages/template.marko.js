// Compiled using marko@4.15.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/exemplo4$1.0.0/pages/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    primeiro_template = marko_loadTemplate(require.resolve("../components/primeiro.marko")),
    primeiro_tag = marko_loadTag(primeiro_template),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"><title>Document</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>" +
    marko_escapeXml(data.nome) +
    "</h1> <table><th><td>Id</td><td>Nome</td></th>");

  var for__12 = 0;

  marko_forEach(data.alunos, function(aluno) {
    var keyscope__13 = "[" + ((for__12++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(aluno.id) +
      "</td><td>" +
      marko_escapeXml(aluno.nome) +
      "</td></tr>");
  });

  out.w("</table>");

  primeiro_tag({
      nome: data.nome
    }, out, __component, "17");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "18");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/exemplo4$1.0.0/pages/template.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "../components/primeiro.marko",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/core/await/reorderer-renderer"
    ]
  };
