import { NgrxWebcatToolkitPage } from './app.po';

describe('ngrx-webcat-toolkit App', () => {
  let page: NgrxWebcatToolkitPage;

  beforeEach(() => {
    page = new NgrxWebcatToolkitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
