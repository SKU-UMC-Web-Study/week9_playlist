import java.util.Date;
public class POST {
    private Store store;
    private ProductCatalog catalog;
    private Sale sale = null;

    public POST(Store store, ProductCatalog catalog) {
        this.store = store;
        this.catalog = catalog;
    }

    public void enterItem(int upc, int qty) {
        if (sale == null) {
            Date date = new Date(System.currentTimeMillis());
            sale = new Sale(date);
        }
        ProductSpec s = catalog.spec(upc);
        sale.makeLineItem(s, qty);
    }

    public void makePayment() {
        if (sale != null) sale.makePayment();
    }

    public void endSale() {
        store.addCompleteSale(sale);
        sale = null;
    }
}
