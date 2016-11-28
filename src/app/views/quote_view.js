import Backbone from 'backbone';

var QuoteView = Backbone.View.extend({
  initialize: function(options) {
    this.quote = options.quote;
    // this.template = options.template;
    this.template = options.template;
  },

  render: function() {
    var html = this.template({quote: this.quote});
    this.$el.html(html);
    // Enable chained calls
    return this;
  }
});

export default QuoteView;
