import { Page } from "@playwright/test";

export class EmpresasPage {
  constructor(private page: Page) {}

  async goToProductos() {
    await this.page.click("text=Productos");
  }

  async goToPagoYRecaudos() {
    await this.page.click("text=Pagos y Recaudos");

  }
}
