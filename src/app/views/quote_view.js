import Backbone from 'backbone';

var QuoteView = Backbone.View.extend({
  initialize: function(options) {
    this.quote = options.quote;
    // this.template = options.template;
    this.template = options.template;
    this.on('change:price', function priceCallback(change) {
      this.quote.price += change;
      this.render();
    });
  },

  render: function() {
    var html = this.template({quote: this.quote});
    this.$el.html(html);
    // Enable chained calls
    return this;
  },

  events: {
    'click .btn-sell': 'sellStock',
    'click .btn-buy': 'buyStock'
  },

  buyStock: function(event) {
    console.log("=====buying stock====");
    this.quote.price += 1.00;

    this.render();
  },

  sellStock: function(event) {
    console.log("======selling stock======");
    this.quote.price -= 1.00;

    this.render();
  }
});

export default QuoteView;
