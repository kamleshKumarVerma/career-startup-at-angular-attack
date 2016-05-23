import { CareerStartupPage } from './app.po';

describe('career-startup App', function() {
  let page: CareerStartupPage;

  beforeEach(() => {
    page = new CareerStartupPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('career-startup works!');
  });
});
