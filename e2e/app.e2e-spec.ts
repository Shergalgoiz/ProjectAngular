import { AngularTourofheroesPage } from './app.po';

describe('angular-tourofheroes App', function() {
  let page: AngularTourofheroesPage;

  beforeEach(() => {
    page = new AngularTourofheroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
