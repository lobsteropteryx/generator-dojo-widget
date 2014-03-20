define([
    'dojo/text!./templates/<%=widgetName%>.html',

    'dojo/_base/declare',

    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin'

], function(
    template,

    declare,

    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin
) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        // description:
        //      <%= description %>

        templateString: template,
        baseClass: '<%= _.dasherize(widgetName).slice(1) %>',
        widgetsInTemplate: <%= widgetsInTemplate %>,

        // Properties to be sent into constructor

        postCreate: function() {
            // summary:
            //    Overrides method of same name in dijit._Widget.
            // tags:
            //    private
            console.log('<%= consoleLog %>::postCreate', arguments);

            this.setupConnections();
        },
        setupConnections: function() {
            // summary:
            //      wire events, and such
            //
            console.log('<%= consoleLog %>::setupConnections', arguments);

        }
    });
});
