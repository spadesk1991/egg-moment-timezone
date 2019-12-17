'use strict';

const mock = require('egg-mock');

describe('test/moment-timezone.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/moment-timezone-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, momentTimezone')
      .expect(200);
  });
});
