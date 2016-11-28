import Backbone from 'backbone';
import _ from 'underscore';

var QuoteView = Backbone.View.extend({
  initialize: function(options) {
    this.quote = options.quote;
    // this.template = options.template;
    this.template = _.template($('#tmpl-quote-view').html());
  },

  render: function() {
    var html = this.template({quote: this.quote});
    this.$el.html(html);
    // Enable chained calls
    return this;
  }
});
