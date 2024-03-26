public class SalesLineItem  {
    private int quantity;
    private ProductSpec spec;

    public SalesLineItem(ProductSpec spec, int quantity) {
        this.spec = spec;
        this.quantity = quantity;
    }

    public int getSubTotal() {
        int price = spec.getPrice();
        return price * quantity;
    }

    // 출력을 보여주어 이해를 돕기위한 메소드, 클래스 다이어그램에 반영하지 않음
    public int getItemUpc() {
        return spec.getUpc();
    }

    // 출력을 보여주어 이해를 돕기위한 메소드, 클래스 다이어그램에 반영하지 않음
    public String getItemName() {
        return spec.getName();
    }

    // 출력을 보여주어 이해를 돕기위한 메소드, 클래스 다이어그램에 반영하지 않음
    public int getItemPrice() {
        return spec.getPrice();
    }

    // 출력을 보여주어 이해를 돕기위한 메소드, 클래스 다이어그램에 반영하지 않음
    public int getQuantity() {
        return quantity;
    }
}
