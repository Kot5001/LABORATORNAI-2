document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { id: 1, name: "Ноутбук", desc: "Мощный игровой ноутбук", price: "120000", qty: 5, category: "Электроника", brand: "ASUS", weight: "2.5 кг" },
        { id: 2, name: "Смартфон", desc: "Флагманский телефон", price: "90000", qty: 10, category: "Электроника", brand: "Samsung", weight: "0.2 кг" },
        { id: 3, name: "Кофеварка", desc: "Автоматическая кофеварка", price: "15000", qty: 3, category: "Бытовая техника", brand: "Philips", weight: "5 кг" },
        { id: 4, name: "Холодильник", desc: "Двухкамерный холодильник", price: "55000", qty: 2, category: "Бытовая техника", brand: "LG", weight: "60 кг" }
    ];

    const tableBody = document.getElementById("productTable");

    function renderTable() {
        tableBody.innerHTML = "";
        products.forEach(product => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.desc}</td>
                <td>${product.price} ₽</td>
                <td>${product.qty}</td>
                <td>${product.category}</td>
                <td>${product.brand}</td>
                <td>${product.weight}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    renderTable();
});
