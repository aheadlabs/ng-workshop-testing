import { AppPage } from './app.po';

describe('ng-workshop-testing App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display name of first user', () => {
    page.navigateTo();
    expect(page.getNameOfFirst()).toEqual('Leanne Graham');
  });
});
