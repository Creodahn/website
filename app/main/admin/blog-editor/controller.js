import Ember from 'ember';

export default Ember.Controller.extend({
  value: 'test',
  froalaEditor: {
    params: {
      toolbarInline: true,
      placeholderText: 'Enter..'
        // For more params refer: 'https://www.froala.com/wysiwyg-editor/docs/options'
    },
  },

  actions: {
  // For more events refer: 'https://www.froala.com/wysiwyg-editor/docs/events'
    contentChanged(e, editor) {
      console.log("Content Changed");
      console.log(e);
      console.log(editor);
    },
    focus(e, editor) {
      console.log("Focus");
      console.log(e);
      console.log(editor);
    }
  },
});
