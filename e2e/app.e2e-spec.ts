import { AssignmentDay12Page } from './app.po';

describe('assignment-day12 App', () => {
  let page: AssignmentDay12Page;

  beforeEach(() => {
    page = new AssignmentDay12Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
