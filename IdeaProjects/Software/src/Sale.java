import java.util.ArrayList;
import java.util.Date;
public class Sale {
    private Date date;
    private ArrayList<SalesLineItem> lineItem = null;
    private Payment payment = null;

    public Sale(Date date)
    {
        this.date = date;
        lineItem = new ArrayList<SalesLineItem>();
    }

    public void makeLineItem(ProductSpec s, int qty) {
        SalesLineItem item = new SalesLineItem(s, qty);
        lineItem.add(item);
    }

    public int getTotal() {
        int total = 0;
        for (SalesLineItem item : lineItem) {
            total += item.getSubTotal();
        }
        return total;
    }

    public void makePayment() {
        int total = this.getTotal();
        payment = new Payment(total);
    }

    // 출력을 보여주어 이해를 돕기위한 메소드, 클래스 다이어그램에 반영하지 않음
    public Date getDate() {
        return date;
    }

    // 출력을 보여주어 이해를 돕기위한 메소드, 클래스 다이어그램에 반영하지 않음
    public void printLineItems() {
        for (SalesLineItem item : lineItem) {
            System.out.println("upc : " + item.getItemUpc() +", name : " + item.getItemName() + ", price : "
                    + item.getItemPrice() + ", quantity : " + item.getQuantity());
        }
    }
}
