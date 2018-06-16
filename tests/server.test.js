const config = require('../config/server');

describe('Port should be set', () => {
  test('Port shoude not undefinded', () => {
    expect(config.PORT).toBeDefined();
  });
});
