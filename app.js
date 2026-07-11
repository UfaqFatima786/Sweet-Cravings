 const filterButtons = document.querySelectorAll('.category-pill');
        const cards = document.querySelectorAll('.product-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const selectedCategory = button.textContent.trim().toLowerCase();

                cards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    const shouldShow = selectedCategory === 'all' || cardCategory === selectedCategory;
                    card.style.display = shouldShow ? 'block' : 'none';
                });
            });
        });