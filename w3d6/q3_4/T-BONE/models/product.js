let  Product = class{
   constructor(pdtname, price, id, description){
    this.pdtname = pdtname;
    this.price = price;
    this.id = id;
    this.description = description;
   }

   toString(){
    return "Product-Name:" + this.pdtname 
    + "Price: $" + this.price 
    + "ID: " + this.id 
    + "Description :"  + this.description;
   }
}
module.export = Product;