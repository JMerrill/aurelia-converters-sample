/* */ 
(function(process) {
  var B = require("..\index.js").Buffer;
  var test = require("tape");
  if (process.env.OBJECT_IMPL)
    B.TYPED_ARRAY_SUPPORT = false;
  test('Buffer.isEncoding', function(t) {
    t.equal(B.isEncoding('HEX'), true);
    t.equal(B.isEncoding('hex'), true);
    t.equal(B.isEncoding('bad'), false);
    t.end();
  });
  test('Buffer.isBuffer', function(t) {
    t.equal(B.isBuffer(new B('hey', 'utf8')), true);
    t.equal(B.isBuffer(new B([1, 2, 3], 'utf8')), true);
    t.equal(B.isBuffer('hey'), false);
    t.end();
  });
  test('Buffer.toArrayBuffer', function(t) {
    var data = [1, 2, 3, 4, 5, 6, 7, 8];
    if (typeof Uint8Array !== 'undefined') {
      var result = new B(data).toArrayBuffer();
      var expected = new Uint8Array(data).buffer;
      for (var i = 0; i < expected.byteLength; i++) {
        t.equal(result[i], expected[i]);
      }
    } else {
      t.pass('No toArrayBuffer() method provided in old browsers');
    }
    t.end();
  });
})(require("process"));
