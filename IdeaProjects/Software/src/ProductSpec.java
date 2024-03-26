public class ProductSpec  {
    private int upc;
    private String name;
    private int price;

    public ProductSpec(int upc, String name, int price) {
        this.upc = upc;
        this.name = name;
        this.price = price;
    }

    public int getPrice() {
        return price;
    }

    // 출력을 보여주어 이해를 돕기위한 메소드, 클래스 다이어그램에 반영하지 않음
    public int getUpc() {
        return upc;
    }

    // 출력을 보여주어 이해를 돕기위한 메소드, 클래스 다이어그램에 반영하지 않음
    public String getName()	{
        return name;
    }
}
