// Simulated Supabase data
const mockRecipes = [
    {
        id: 1,
        image: 'path_to_image.jpg', // Replace with actual path or URL
        title: 'Recipe Title 1',
        description: 'Recipe Description 1',
        likes: 12,
        comments: 3,
    },
    {
        id: 2,
        image: 'path_to_image.jpg',
        title: 'Recipe Title 2',
        description: 'Recipe Description 2',
        likes: 8,
        comments: 5,
    },
    {
        id: 2,
        image: 'path_to_image.jpg',
        title: 'Recipe Title 2',
        description: 'Recipe Description 2',
        likes: 8,
        comments: 5,
    },
    {
        id: 2,
        image: 'path_to_image.jpg',
        title: 'Recipe Title 2',
        description: 'Recipe Description 2',
        likes: 8,
        comments: 5,
    },
    {
        id: 2,
        image: 'path_to_image.jpg',
        title: 'Recipe Title 2',
        description: 'Recipe Description 2',
        likes: 8,
        comments: 5,
    },
    {
        id: 2,
        image: 'path_to_image.jpg',
        title: 'Recipe Title 2',
        description: 'Recipe Description 2',
        likes: 8,
        comments: 5,
    },
    {
        id: 2,
        image: 'path_to_image.jpg',
        title: 'Recipe Title 2',
        description: 'Recipe Description 2',
        likes: 8,
        comments: 5,
    },
    {
        id: 2,
        image: 'path_to_image.jpg',
        title: 'Recipe Title 2',
        description: 'Recipe Description 2',
        likes: 8,
        comments: 5,
    },
    {
        id: 2,
        image: 'path_to_image.jpg',
        title: 'Recipe Title 2',
        description: 'Recipe Description 2',
        likes: 8,
        comments: 5,
    },
];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('username').textContent = getCurrentUserName();
    loadRecipes();
});

function getCurrentUserName() {
    return 'User Name'; // Replace with actual user name fetching logic
}

function loadRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = ''; // Clear previous content
    mockRecipes.forEach((recipe) => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}">
            </div>
            <div class="recipe-details">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
                <div class="recipe-meta">
                    <span><i class="icon-favorite"></i> ${recipe.likes}</span>
                    <span><i class="icon-comment"></i> ${recipe.comments}</span>
                </div>
            </div>
        `;
        recipeList.appendChild(card);
    });
}

function goBack() {
    // Implement navigation back logic
}

function navigateToHome() {
    // Implement navigation to Home logic
}

function navigateToProfile() {
    // Implement navigation to Profile logic
}

function createNewRecipe() {
    // Implement create new recipe logic
}
