import Ember from 'ember';

export default Ember.Component.extend({
  // attributes
  chart: null,
  classNames: [],
  tagName: 'section',
  // computed properties
  colors: Ember.computed('model', function() {
    return this.get('model').map(function(item) {
      return item.get('color');
    });
  }),
  data: Ember.computed('model', function() {
    return this.get('model').map(function(item) {
      return item.get('years');
    });
  }),
  hoverColors: Ember.computed('model', function() {
    return this.get('model').map(function(item) {
      return item.get('hoverColor');
    });
  }),
  labels: Ember.computed('model', function() {
    return this.get('model').map(function(item) {
      return item.get('name');
    });
  }),
  // functions
  createChart: function() {
    const ctx = $(`#${this['chart-id']}`).get(0).getContext('2d'),
          data = {
            labels: this.get('labels'),
            datasets: [
              {
                data: this.get('data'),
                backgroundColor: '#8b0000',
                hoverBackgroundColor: '#bf0000',
                label: ''
              }
            ]
          },
          options = {
            scales: {
              yAxes: [{
                ticks: {
                  max: 5,
                  min: 0,
                  stepSize: 0.5
                }
              }]
            },
            legend: {
              display: false
            }
          },
          chart = new Chart(ctx, {
            type: 'bar',
            data,
            options
          });

    this.set('chart', chart);
  },
  didInsertElement: function() {
    this._super();
    this.createChart();
  }
});
