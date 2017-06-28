import Ember from 'ember';

export default Ember.Component.extend({
  froalaEditor: {
    params: {
      toolbarInline: true,
      placeholderText: 'Enter..'
        //  For more params refer: 'https:// www.froala.com/wysiwyg-editor/docs/options'
    },
  },
  tagName: ''
});
