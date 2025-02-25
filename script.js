document.addEventListener("DOMContentLoaded", function () {
    let products = [
        { id: 1, name: "Ноутбук", desc: "Мощный игровой ноутбук", price: "120000", qty: 5, category: "Электроника", brand: "ASUS", weight: "2.5 кг", file: "" },
        { id: 2, name: "Смартфон", desc: "Флагманский телефон", price: "90000", qty: 10, category: "Электроника", brand: "Samsung", weight: "0.2 кг", file: "" },
        { id: 3, name: "Кофеварка", desc: "Автоматическая кофеварка", price: "15000", qty: 3, category: "Бытовая техника", brand: "Philips", weight: "5 кг", file: "" },
        { id: 4, name: "Холодильник", desc: "Двухкамерный холодильник", price: "55000", qty: 2, category: "Бытовая техника", brand: "LG", weight: "60 кг", file: "" }
    ];

    const tableBody = document.getElementById("productTable");
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");

    function renderTable(filteredProducts) {
        tableBody.innerHTML = "";
        filteredProducts.forEach(product => {
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
                <td>
                    ${product.file 
                        ? <a href="${product.file}" target="_blank">📎 Открыть</a> 
                        : <input type="file" class="file-input" data-id="${product.id}">
                    }
                </td>
            `;
            tableBody.appendChild(row);
        });

        document.querySelectorAll(".file-input").forEach(input => {
            input.addEventListener("change", handleFileUpload);
        });
    }

    function handleFileUpload(event) {
        const fileInput = event.target;
        const file = fileInput.files[0];
        const productId = fileInput.getAttribute("data-id");

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                products = products.map(product => 
                    product.id == productId ? { ...product, file: e.target.result } : product
                );
                renderTable(products);
            };
            reader.readAsDataURL(file);
        }
    }

    function updateFilters() {
        const searchText = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        const filteredProducts = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchText);
            const matchesCategory = selectedCategory === "" || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        renderTable(filteredProducts);
    }

    function populateCategories() {
        const categories = [...new Set(products.map(p => p.category))];
        categories.forEach(category => {
            const option = document.createElement("option");
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }

    searchInput.addEventListener("input", updateFilters);
    categoryFilter.addEventListener("change", updateFilters);

    populateCategories();
    renderTable(products);
});
