let array = [];
let vegetables = [];
let meat = [];
let sweet = [];
function add() {
  let food = {
    name: null,
    weight: null,
    selectool: null,
    price: null,
    date: null,
    id: null,
    get Name() {
      return this.name;
    },
    set Name(a) {
      if (a.length > 3 && a.length < 50) {
        this.name = a;
        let b = document.getElementById("name");
        b.placeholder = "Name";
        b.value = "";
        b.style.webkitTextFillColor = "gray";
        b.style.borderColor = "cyan";
      } else {
        let b = document.getElementById("name");
        b.placeholder = "Min-3 Max-50";
        b.value = "";
        b.style.webkitTextFillColor = "gray";
        b.style.borderColor = "red";
      }
    },
    get Weight() {
      return this.weight;
    },
    set Weight(a) {
      if (a > 0) {
        this.weight = a;
        let b = document.getElementById("weight");
        b.placeholder = "Weight";
        b.value = "";
        b.style.webkitTextFillColor = "gray";
        b.style.borderColor = "cyan";
      } else {
        let b = document.getElementById("weight");
        b.placeholder = "Bigger than 0";
        b.value = "";
        b.style.webkitTextFillColor = "gray";
        b.style.borderColor = "red";
      }
    },
    get Price() {
      return this.price;
    },
    set Price(a) {
      if (a > 0) {
        this.price = a;
        let b = document.getElementById("price");
        b.placeholder = "Price";
        b.value = "";
        b.style.webkitTextFillColor = "gray";
        b.style.borderColor = "cyan";
      } else {
        let b = document.getElementById("price");
        b.placeholder = "Bigger than 0";
        b.value = "";
        b.style.webkitTextFillColor = "gray";
        b.style.borderColor = "red";
      }
    },
    get Lastdate() {
      return this.date;
    },
    set Lastdate(a) {
      if (a.length < 11 && a.length > 7) {
        let splider = a.split("/");
        let first = parseInt(splider[0]);
        let second = parseInt(splider[1]);
        let third = parseInt(splider[2]);
        if (
          first > 0 &&
          first < 32 &&
          (second > 0 && second < 13) &&
          third > 2017
        ) {
          this.date = a;
          let b = document.getElementById("date");
          b.placeholder = "Day/Month/Year";
          b.value = "";
          b.style.webkitTextFillColor = "gray";
          b.style.borderColor = "cyan";
        }
        else{
          let b = document.getElementById("date");
        b.placeholder = "Day/Month/Year";
        b.value = "";
        b.style.webkitTextFillColor = "gray";
        b.style.borderColor = "red";
        }
      } else {
        let b = document.getElementById("date");
        b.placeholder = "Day/Month/Year";
        b.value = "";
        b.style.webkitTextFillColor = "gray";
        b.style.borderColor = "red";
      }
    }
  };
  if (array.length > 0) {
    food.id = array.length;
    food.id++;
  } else {
    food.id = 1;
  }
  food.Name = document.getElementById("name").value;
  food.Weight = document.getElementById("weight").value;
  food.selectool = document.getElementById("selectool").value;
  food.Price = document.getElementById("price").value;
  food.Lastdate = document.getElementById("date").value;
  if (
    food.Name != null &&
    food.Weight != null &&
    food.Price != null &&
    food.Lastdate != null
  ) {
    array.push(food);
    console.log(array);
    document.getElementById("stok").innerText = food.id;
    if (food.selectool == 1) {
      meat.push(food);
    } else if (food.selectool == 2) {
      sweet.push(food);
    } else {
      vegetables.push(food);
    }
    document.getElementById("meat").innerText = meat.length;
    document.getElementById("sweet").innerText = sweet.length;
    document.getElementById("grocer").innerText = vegetables.length;
    document.getElementById("weight").value = "";
    document.getElementById("price").value = "";
    document.getElementById("date").value = "";
    document.getElementById("selectool").value = "1";
  }
}
