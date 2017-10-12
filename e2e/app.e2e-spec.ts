import { LazyLoadPage } from './app.po';

describe('lazy-load App', () => {
  let page: LazyLoadPage;

  beforeEach(() => {
    page = new LazyLoadPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
