/**
 * flare.js
 */
describe('flare', function () {

  beforeEach(function () {
    (function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-XXXXXXXX-XX', 'test.com');
    ga('send', 'pageview');
  });

  describe('flare.emit', function () {

    var gaMock = {
      hitType : 'event',
      eventCategory : 'CATEGORY',
      eventAction : 'ACTION',
      eventLabel : 'LABEL',
      eventValue : 1
    };

    beforeEach(function () {
      spyOn(window, 'ga');
    });

    it('should emit and construct an Object that matches gaMock and call ga() with it', function () {
      flare.emit({
        category: "CATEGORY",
        action: "ACTION",
        label: "LABEL",
        value: 1
      });
      expect(ga).toHaveBeenCalledWith('send', gaMock);
    });

  });

});
