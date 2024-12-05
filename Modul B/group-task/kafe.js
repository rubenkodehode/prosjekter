const menuContainer = document.getElementById("menu");

const fooditem = [
  {
    MenuItem: "Java Runtime Latte",
    MenuImg: "./images/java-run0.png",
    Price: "$7.50",
    Type: "coffee",
  },
  {
    MenuItem: "Syntax Drip Coffee",
    MenuImg: "./images/syntax-drip0.png",
    Price: "$7.50",
    Type: "coffee",
  },
  {
    MenuItem: "C# Affogato",
    MenuImg: "./images/affogato.png",
    Price: "$8",
    Type: "coffee",
  },
  {
    MenuItem: "Excel Mazagran",
    MenuImg: "./images/mazagran.png",
    Price: "$7",
    Type: "coffee",
  },
  {
    MenuItem: "Hotfix Honey Latte",
    MenuImg: "./images/honey-latte.png",
    Price: "$8",
    Type: "coffee",
  },
  {
    MenuItem: "Syntaxed Ice Latte",
    MenuImg: "./images/iced-latte.png",
    Price: "$7",
    Type: "cold drinks",
  },
  {
    MenuItem: "Looped Lasagna",
    MenuImg: "./images/lasagna.png",
    Price: "$14.75",
    Type: "dinner",
  },
  {
    MenuItem: "Bug-free BBQ Ribs",
    MenuImg: "./images/bbq-ribs.png",
    Price: "$15",
    Type: "dinner",
  },
  {
    MenuItem: "Junior Hot Chocolate",
    MenuImg: "./images/jr-hot-choco.png",
    Price: "$8",
    Type: "kids",
  },
  {
    MenuItem: "Recursive Ravioli",
    MenuImg: "./images/ravioli.png",
    Price: "$13.50",
    Type: "dinner",
  },
  {
    MenuItem: "Algorithm Cobb Salad",
    MenuImg: "./images/cobb-salad.png",
    Price: "$16",
    Type: "dinner",
  },
  {
    MenuItem: "Full Stack Burger",
    MenuImg: "./images/burger1.png",
    Price: "$14.75",
    Type: "dinner",
  },
  {
    MenuItem: "Stack Overflow Burger",
    MenuImg: "./images/burger2.png",
    Price: "$15",
    Type: "dinner",
  },
  {
    MenuItem: "Mini Debug Pizza",
    MenuImg: "./images/jr-pizza.png",
    Price: "$12.75",
    Type: "kids",
  },
  {
    MenuItem: "Array of Veggies Wrap",
    MenuImg: "./images/wraps.png",
    Price: "$13",
    Type: "vegan",
  },
  {
    MenuItem: "Kernel Crusted Chicken",
    MenuImg: "./images/chicken.png",
    Price: "$10.50",
    Type: "dinner",
  },
  {
    MenuItem: "404 Mac Not Found",
    MenuImg: "./images/mac404.png",
    Price: "$12",
    Type: "dinner",
  },
  {
    MenuItem: "Code Crashed Carbonara",
    MenuImg: "./images/carbonara.png",
    Price: "$14.75",
    Type: "dinner",
  },
  {
    MenuItem: "Debugging BLT",
    MenuImg: "./images/BLT.png",
    Price: "$12.25",
    Type: "dinner",
  },
  {
    MenuItem: "Bug-free Berry Smoothie",
    MenuImg: "./images/smoothie.png",
    Price: "$7",
    Type: "cold drinks",
  },
  {
    MenuItem: "Dynamic Data Bowl",
    MenuImg: "./images/bowl.png",
    Price: "$13",
    Type: "dinner",
  },
  {
    MenuItem: "Byte-sized Burger",
    MenuImg: "./images/jr-burger.png",
    Price: "$10",
    Type: "kids",
  },
  {
    MenuItem: "Boolean Bean Burrito",
    MenuImg: "./images/burrito.png",
    Price: "$15.75",
    Type: "vegan",
  },
  {
    MenuItem: "Milk & Cookies in Cache",
    MenuImg: "./images/cookie.png",
    Price: "$8.50",
    Type: "kids",
  },
  {
    MenuItem: "Binary Brewe",
    MenuImg: "./images/brewe.png",
    Price: "$9",
    Type: "coffee",
  },
];

function renderMenu(items) {
  menuContainer.innerHTML = "";

  items.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.setAttribute("data-type", item.Type);

    menuItem.innerHTML = `
        <img src="${item.MenuImg}" alt="${item.MenuItem}">
        <div class="heart-icon"></div>
        <div class="info">
            <h3>${item.MenuItem}</h3>
            <p class="price">${item.Price}</p>
        </div>
        `;

    menuContainer.appendChild(menuItem);
  });
}

renderMenu(fooditem);

const checkboxes = document.querySelectorAll('#filters input[type="checkbox"]');

function updateMenuBasedOnFilters() {
  const selectedCategories = Array.from(checkboxes)
    .filter((cb) => cb.checked)
    .map((cb) => cb.value);

  const filteredItems = fooditem.filter(
    (item) =>
      selectedCategories.length === 0 || selectedCategories.includes(item.Type)
  );

  renderMenu(filteredItems);
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateMenuBasedOnFilters);
});

document.getElementById("selectAll").addEventListener("click", () => {
  checkboxes.forEach((checkbox) => (checkbox.checked = true));
  renderMenu(fooditem);
});

document.getElementById("resetFilters").addEventListener("click", () => {
  checkboxes.forEach((checkbox) => (checkbox.checked = false));
  renderMenu(fooditem);
});
