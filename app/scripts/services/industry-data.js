'use strict';

/**
 * @service industryData
 * Data service for industry data. Provides
 * an interface for utility methods and data
 * submission.
 */

angular.module('surveyApp')
  .factory('industryData', function ($http) {

    // Hypothetical submission endpoint for POST request.
    var SUBMIT_ENDPOINT = 'api/submit';

    // Main data store
    var DATA = [
      {slug: 'clothing-apparel', title: 'Clothing & Apparel'},
      {slug: 'jewelry-accessories', title: 'Jewelry & Accessories'},
      {slug: 'bags-shoes', title: 'Bags & Shoes'},
      {slug: 'health-beauty', title: 'Health & Beauty'},
      {slug: 'food-drink', title: 'Food & Drink'},
      {slug: 'home-garden', title: 'Home & Garden'},
      {slug: 'electronics', title: 'Electronics'},
      {slug: 'random', title: 'Random', random: true}
    ];

    /**
     * Chunk array into array-of-arrays.
     * @param  {array} array
     * @param  {number} chunkSize
     * @return {array}
     */
    function chunk(array, chunkSize) {
      if (!chunkSize) {
        return array;
      }
      var result = [];
      for (var i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
      }
      return result;
    }

    /**
     * Get a random integer from an input range.
     * @param  {number} min
     * @param  {number} max
     * @return {number}
     */
    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Submit data to submission endpoint using
     * HTTP post. Payload is serialized as
     * form-urlencoded. Angular's default $http
     * post method submits data as json.
     * @param  {object} payload
     * @return {promise}
     */
    function submitData(payload) {
      return $http.post(SUBMIT_ENDPOINT, payload, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      });
    }

    /**
     * Public API
     */
    return {
      /**
       * Get industry data
       * @return {array}
       */
      get: function () {
        return DATA;
      },
      /**
       * Get selected industries based on `selected`
       * object property. Ensures that 'random' is not
       * treated as an industry.
       * @return {array}
       */
      getSelected: function() {
        return _.filter(this.get(), function(item) {
          return !item.random && item.selected;
        });
      },
      chunk: chunk,
      randomInt: randomInt,
      submitData: submitData
    };
  });
