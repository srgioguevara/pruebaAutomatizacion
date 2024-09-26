import { Page,expect } from "@playwright/test";

export class EmpresasPage {
  constructor(private page: Page) {}

  async goToProductos() {
    await this.page.click("text=Productos");
  }

  async goToPagoYRecaudos() {
    await this.page.click("text=Pagos y Recaudos");

  }
  async goToRecaudo () {
    await this.page.click("(//*[@class='cmp-cardvertical__btn1'])[1]");
    await this.page.screenshot({ path: 'recaudo.png' })
  }

async goToreglamentoPDF () {
  await this.page.getByRole('link', { name: 'Enlace Reglamento de Recaudos' }).click();
  await this.page.screenshot({ path: 'IraPDF.png' })
  expect(this.page.url()).toContain( "https://www.bancocajasocial.com/empresas/pagos-y-recaudos/recaudo/");

}
}


