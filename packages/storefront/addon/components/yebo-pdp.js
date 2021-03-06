import Ember from 'ember';
import layout from '../templates/components/yebo-pdp';
/**
  The Yebo Product Display Page.

  **To Override:** You'll need to run the components generator:

  ```bash
  ember g yebo-ember-storefront-components
  ```

  This will install all of the Yebo Ember Storefront component files into your
  host application at `app/components/yebo-*.js`, ready to be extended or
  overriden.

  @class YeboPdp
  @namespace Component
  @extends Ember.Component
*/
export default Ember.Component.extend({
  layout: layout,
  variantSelection: null,
  quantity: 1,
  action: 'addToCart',

  selectedVariant: Ember.computed('product.variants', function() {
    var selection = this.get('variantSelection');

    if (selection && selection.get("images").any()) {
      return selection;
    } else {
      return this.get('product.master');
    }
  }),

  actions: {
    addToCart: function() {
      this.sendAction('action', this.get('selectedVariant'), this.get('quantity'));
    }
  }
});
