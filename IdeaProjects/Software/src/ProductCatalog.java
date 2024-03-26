import java.util.HashMap;
public 	class ProductCatalog  {
    private HashMap<Integer, ProductSpec> specTable = new HashMap<Integer, ProductSpec>();

    public void addSpec(int upc, ProductSpec spec) {
        specTable.put(upc, spec);
    }

    public ProductSpec spec(int upc) {
        return specTable.get(upc);
    }
}
