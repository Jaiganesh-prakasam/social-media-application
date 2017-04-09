import { MtPage } from './app.po';

describe('mt App', () => {
  let page: MtPage;

  beforeEach(() => {
    page = new MtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
