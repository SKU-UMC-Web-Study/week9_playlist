public class TestPOS {
    public static void main(String[] args) {
        // POST 객체를 준비
        Store store = new Store();
        ProductCatalog catalog = new ProductCatalog();
        catalog.addSpec(1, new ProductSpec(1, "pencil", 1000));
        catalog.addSpec(2, new ProductSpec(2, "eraser", 500));
        catalog.addSpec(3, new ProductSpec(3, "fountain pen", 50000));
        POST post = new POST(store, catalog);

        // 첫 번째 판매
        post.enterItem(1, 12);
        post.enterItem(2, 4);
        post.enterItem(3, 1);

        post.makePayment();

        post.endSale();

        // 두 번째 판매
        post.enterItem(1, 2);
        post.enterItem(2, 1);

        post.makePayment();

        post.endSale();

        // 출력을 보여주어 이해를 돕기위한 코드
        for (Sale sale : store.completedSales) {
            System.out.println(sale.getDate());
            sale.printLineItems();
            System.out.println("total = " + sale.getTotal());
        }
    }
}
