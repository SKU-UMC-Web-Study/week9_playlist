import java.util.ArrayList;
public class Store {
    protected ArrayList<Sale> completedSales = null;

    public Store() {
        completedSales = new ArrayList<Sale>();
    }

    public void addCompleteSale(Sale sale) {
        completedSales.add(sale);
    }
}
