import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getNameOfFirst() {
    return element(by.css('#user-0 #name')).getText();
  }
}
