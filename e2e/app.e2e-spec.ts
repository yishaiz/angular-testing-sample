import { AngularTestingSamplePage } from './app.po';

describe('angular-testing-sample App', () => {
  let page: AngularTestingSamplePage;

  beforeEach(() => {
    page = new AngularTestingSamplePage();
  });

  it('should display message saying app works with tests', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works with tests !');
  });
});
