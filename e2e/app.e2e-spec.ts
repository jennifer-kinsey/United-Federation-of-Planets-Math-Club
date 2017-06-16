import { MathClubPage } from './app.po';

describe('math-club App', () => {
  let page: MathClubPage;

  beforeEach(() => {
    page = new MathClubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
