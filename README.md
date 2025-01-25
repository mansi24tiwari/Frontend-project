# Frontend-project
1. HTML & Structure:
   - Create a clean, semantic HTML structure for the page.
   - The page should contain:
     - A header with the title "User List".
     - A section displaying user information (name, email, and avatar).
     - A loading indicator that appears when the page is fetching data and disappears once the data is loaded.

2. Fetching Data:
   - Use **JavaScript (fetch API)** to simulate fetching user data from a mock API. You may use the following sample data (stored in an array) for the mock API:
     
json
     [
       { "id": 1, "name": "John Doe", "email": "john@example.com", "avatar": "https://randomuser.me/api/portraits/men/1.jpg" },
       { "id": 2, "name": "Jane Smith", "email": "jane@example.com", "avatar": "https://randomuser.me/api/portraits/women/1.jpg" },
       { "id": 3, "name": "Mark Johnson", "email": "mark@example.com", "avatar": "https://randomuser.me/api/portraits/men/2.jpg" }
     ]

     - Simulate a delay of 2 seconds before displaying the data.

3. Styling (CSS):
   - Style the user list so that the layout is simple, clean, and responsive.
   - Each user should be displayed as a card with:
     - A round avatar image.
     - The user’s name in bold.
     - The email displayed under the name in regular text.
   - The page should be responsive and work well on both desktop and mobile screens.

4. Interactivity:
   - Display a button below the user list that says "Load More Users" (even though there are no additional users to load).
   - When clicked, the button should display a small animation (such as changing its color or shaking) to show it was clicked.
