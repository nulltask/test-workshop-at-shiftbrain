
/**
 * Bi-side test.
 */

describe('Math', function() {
  describe('.PI', function() {
    it('円周率 3.14', function() {
      Math.PI.should.be.equal(3.141592653589793);
    });
  });

  describe('.abs()', function() {
    it('正の整数: 5', function() {
      Math.abs(5).should.be.equal(5);
    });
    it('負の整数: -5', function() {
      Math.abs(-5).should.be.equal(5);
    });
    it('正の小数:  5.5', function() {
      Math.abs(5.5).should.be.equal(5.5);
    });
    it('負の小数: -5.5', function() {
      Math.abs(-5.5).should.be.equal(5.5);
    });
  });
  
  describe('.sum()', function() {
    it('a', function() {
      Math.sum(10, 20, 30, 40).should.be.equal(100);
    });
  });
  
  describe('.avg()', function() {
    it('a', function() {
      Math.avg(0, 10).should.be.equal(5);
    });
  });
});

/**
 * Browser specific test.
 */

if (typeof exports !== 'undefined') return;

describe('jQuery', function() {
  it('$', function() {
    $.should.be.a('function');
  });
  
  it('#test p:first', function() {
    $('#test').find('p').first().text().should.be.equal('This is test.');
  });
  
  it('#test span:first (ajax)', function() {
    $.get('./ajax.txt', function(data) {
      var $target = $('#test').find('span').first().text(data);
      $target.text().should.be.equal('This is ajax content.');
    });
  });
});
