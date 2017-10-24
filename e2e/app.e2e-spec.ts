import { PortalMetal2Page } from './app.po';

describe('portal-metal2 App', () => {
  let page: PortalMetal2Page;

  beforeEach(() => {
    page = new PortalMetal2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
