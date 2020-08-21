/* eslint-disable arrow-parens */
import getData from '../../utils/getData';

describe('Fetch API Test', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('Call an API and return data', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '123456' }));

    getData('https://google.com').then(response => {
      expect(response.data).toEqual('123456');
    });

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
