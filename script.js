 // Q -1
 console.log("....................(Q -1).................")

 class book {
   title;
   author;
   yearofpublished;
 
   constructor(title, author,yearofpublished){
       this. title = title;
       this. author = author;
       this. yearofpublished = yearofpublished;
   }
 
 }
 
 var book1 = new book ("mahabharath", "vadavsaya", "1900");
 console.log(book1);
 
 //print the book author
 console.log(book1.author);
 
 //update the book published year
 book1. yearofpublished = 2022;
 console.log(book1);
 
 //add the new function in the book
 book1. genre = "fection";
 console.log(book1)
 
 
 //delete the book title
 delete  book1 .title;
 console.log(book1) -->
 
  ///  Q -2
 console.log(".................Q -2...........................")
    class employee{
     name;
     age;
     position;
     salary;
 
     constructor(name, age, position, salary){
         this. name = name;
         this. age = age;
         this. position = position;
         this. salary = salary;
     }
 }
 var employee1 = new employee('prabhas','45','CEO','10000000');
 console.log(employee1);
 
 //print the employee position
 console.log(employee1.position);
 
 
 //updated the employee salary
 employee1.salary = 500000;
 console.log(employee1);
 
 
 //adding the one property in employe1 object
 employee1.department = 'HR'
 console.log(employee1);
 
 
 //delete the employee age in object
 delete employee1. age;
 console.log(employee1);
 
    // Q -3
 
 console.log(".........................Q -3........................")
    // class product{
 //     id;
 //     name;
 //     price;
 //     category;
 
 
 //     constructor(id, name, price, category){
 //         this.id = id;
 //         this.name = name;
 //         this.price = price;
 //         this. category = category;
 //     }
 // }
 var product = {
     'id' : '108',
     'name' : 'loptop',
     'price' : '49,999',
     'category' : 'portability'
 }
        
   
 
 // var product1 = new product ('108', 'loptop', '49,999','portability');
 console.log( product);
 
 
 //print the price value.
 console.log(product['price']);
 
 
 //change the product category portability to  electronics.
 product. category = 'Electronic'
 console.log(product);
 
 
 //add the one property in the product object.
 product.instock = 'true';
 console.log(product);
 
 
 //delete the id property in the product object.
 delete product. id;
 console.log(product);
 
    // Q -4
 
 console.log(".......................Q -4.....................")
    class car{
     make;
     model;
     year;
     color;
 
      constructor(make,  model, year, color){
         this. make = make;
         this. model = model;
         this. year = year;
         this. color = color;
 
      }
 }
 
 var car1  = new car ('Toyota', ' Sedan', '2020','white');
 console.log(car1);
 
 
 //printed the car make value.
 console.log(car1['make']);
 
 
 //change tha car color white to black.
 car1. color = 'Black'
 console.log(car1);
 
 
 //add the another property in the object.
 car1.engine = 'V6';
 console.log(car1);
 
 
 //deleted the year property in the car object.
 delete car1. year;
 console.log(car1);
 
     // Q -5
 
 console.log("..........................Q -5................")
     class student{
         name;
         age;
         grade;
         school;
     
     
         constructor(name, age, grade, school){
             this. name = name;
             this. age = age;
             this. grade = grade;
             this. school  = school;
     
         }
     }
     
     var student1 = new student('Sai', '22', '80','NGKL');
     console.log(student1);
     
     
     console.log(student1['school'])
     
     student1. grade = '95';
     console.log(student1);
     
     
     student1. hobbies = ["readimg", "sports"]
     console.log(student1);
     
     
     delete student1.age;
     console.log(student1);
 
     // Q - 6
 console.log(".........................Q -6...............")
     const user = {
         username: "john_doe",
         profile: {
           firstName: "John",
           lastName: "Doe",
           age: 28,
           address: {
             street: "456 Elm St",
             city: "Gotham",
             zip: "54321"
           }
         },
         preferences: {
           theme: "dark",
           notifications: true
         }
       };
       
     
     
       console.log(user);
     
       //printed the city  
       console.log(user.profile.address.city);
       // console.log(user['profile']['address']);
     
     
     //change the theme color dark to light
      user.preferences. theme = 'light';
       console.log(user);
     
     
       //add the phone property in profile object
       user.profile.phone = '555-9876';
       console.log(user);
     
     
       //deleted the  zip property in the object
       delete  user.profile.address.  zip;
       console.log(user);
 
     // Q -7
 console.log("...................Q -7................")
     const company = {
         name: "Tech Solutions",
         employees: [
           {
             name: "Alice",
             position: "Developer",
             contact: {
               email: "alice@tech.com",
               phone: "555-2345"
             }
           },
           {
             name: "Bob",
             position: "Manager",
             contact: {
               email: "bob@tech.com",
               phone: "555-6789"
             }
           }
         ],
         location: "New York"
       };
       
     
       console.log(company);
     
     
       //print second employee name
       console.log(company .employees[1].name);
     
     
       //change the  first employee object properties phone number.
       company.employees[0].contact . phone = '555-1111';
       console.log(company);
     
     
       //add first employee object another property that department
       company.employees[0] .department ='Engineering';
       console.log(company);
     
     
       //delete the company location.
       delete company.location;
       console.log(company);