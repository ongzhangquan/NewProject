import { CombPage } from './app.po';

describe('comb App', () => {
  let page: CombPage;

  beforeEach(() => {
    page = new CombPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
