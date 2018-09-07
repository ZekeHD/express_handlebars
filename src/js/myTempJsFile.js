(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['myTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div id=\"info\">\n    <h4>Coming from my template!!</h4>\n    <h1>Name: "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n    <h2>Title: "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n    <span>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.roles : depth0)) != null ? stack1.official : stack1), depth0))
    + "</span> <br/>\n    <span>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.roles : depth0)) != null ? stack1.unofficial : stack1), depth0))
    + "</span>\n</div>";
},"useData":true});
})();