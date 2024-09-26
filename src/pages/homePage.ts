import { Page } from "@playwright/test";
export class HomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("https://www.bancocajasocial.com/");
  }

  async goToEmpresasSection() {
    const empresasButton =
      "#cmp-header > div.cmp-header__top > div > div.cmp-header__tabs > nav > ul > li:nth-child(3) > a > span";
    await this.page.click(empresasButton);
  }
}
