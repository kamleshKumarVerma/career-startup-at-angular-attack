export class CareerStartupPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('career-startup-app h1')).getText();
  }
}
