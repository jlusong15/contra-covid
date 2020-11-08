'use strict';

describe('view about', function() {

  browser.get('index.html#!/about');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/about");
  });

});
