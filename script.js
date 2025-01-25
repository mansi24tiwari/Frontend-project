const users = [
            { "id": 1, "name": "John Doe", "email": "john@example.com", "avatar": "https://randomuser.me/api/portraits/men/1.jpg" },
            { "id": 2, "name": "Jane Smith", "email": "jane@example.com", "avatar": "https://randomuser.me/api/portraits/women/1.jpg" },
            { "id": 3, "name": "Mark Johnson", "email": "mark@example.com", "avatar": "https://randomuser.me/api/portraits/men/2.jpg" }
        ];

        document.addEventListener('DOMContentLoaded', () => {
            const userList = document.querySelector('.user-list');
            const loadingIndicator = document.querySelector('.loading');
            const loadMoreButton = document.querySelector('.load-more');

            function displayUsers(users) {
                users.forEach(user => {
                    const userCard = document.createElement('div');
                    userCard.className = 'user-card';
                    userCard.innerHTML = `
                        <img src="${user.avatar}" alt="${user.name}">
                        <h2>${user.name}</h2>
                        <p>${user.email}</p>
                    `;
                    userList.appendChild(userCard);
                });
            }

            function fetchUsers() {
                loadingIndicator.style.display = 'block';
                setTimeout(() => {
                    loadingIndicator.style.display = 'none';
                    displayUsers(users);
                }, 2000);
            }

            loadMoreButton.addEventListener('click', () => {
                loadMoreButton.classList.add('clicked');
                setTimeout(() => {
                    loadMoreButton.classList.remove('clicked');
                }, 300);
            });

            fetchUsers();
        });