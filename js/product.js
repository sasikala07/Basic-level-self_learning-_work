

function Product(pid,name,price){ //function consructor creation
    this.pid=pid //initialize 
    this.name=name
    this.price=price
}

function saveProduct(){ //button click functon
    let pid=document.getElementById("pid").value
    let name=document.getElementById("name").value
    let price=document.getElementById("price").value 
    //creat object
    let p=new Product(pid,name,price)
    console.log(p)
}
