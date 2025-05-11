function sortByPrice(order) {
    let items = document.querySelectorAll(".item");
    let catalog = document.querySelector(".catalog");

    let sortedItems = Array.from(items).sort((a, b) => {
        let priceA = parseInt(a.querySelector("p").textContent.replace(/\D/g, ""));
        let priceB = parseInt(b.querySelector("p").textContent.replace(/\D/g, ""));
        return order === 'asc' ? priceA - priceB : priceB - priceA;
    });

    catalog.innerHTML = "";
    sortedItems.forEach(item => catalog.appendChild(item));
}

        function sortByName() {
            let items = document.querySelectorAll(".item");
            let catalog = document.querySelector(".catalog");

            let sortedItems = Array.from(items).sort((a, b) => {
                let nameA = a.querySelector("h3").textContent.toLowerCase();
                let nameB = b.querySelector("h3").textContent.toLowerCase();
                return nameA.localeCompare(nameB);
            });

            catalog.innerHTML = "";
            sortedItems.forEach(item => catalog.appendChild(item));
            
        }