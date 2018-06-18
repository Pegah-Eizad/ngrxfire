import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getParagraphText()).toEqual('Welcome to ngrxfire!');
=======
    expect(page.getParagraphText()).toEqual('Welcome to ngrxFire!');
>>>>>>> a94dce003145e9febe54b9aed1f3803a57243096
  });
});
