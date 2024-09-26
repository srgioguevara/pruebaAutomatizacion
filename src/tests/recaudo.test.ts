import { test } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { EmpresasPage } from "../pages/empresasPage";

test.describe("Verificar titulo de archivo PDF en Recaudos del la pagina Banco caja social", () => {
  test("Navegar a seccion Recaudos y leer titulo archivo PDF", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const empresasPage = new EmpresasPage(page);
    
    // Paso 1: Ir a la página Banco
    await homePage.navigate();

    // Paso 2: Ir a sección Empresas
    await homePage.goToEmpresasSection();
    // await page.waitForLoadState('networkidle');

    // Paso 3: Ir a opción Productos
    await empresasPage.goToProductos();

    // Paso 4: Ir a Pago y Recaudos, 
    await empresasPage.goToPagoYRecaudos();

    // Paso 5: ir a recaudo
    await empresasPage.goToRecaudo();

    // Paso 6: ir a PDF
    await empresasPage.goToreglamentoPDF();
    
  });
});
