// Importing images from the images module
import images from './images';

// Array of appetizers with their details
const appetizers = [
  {
    title: 'Caprese Salad',
    price: '$12',
    tags: 'Fresh mozzarella, tomatoes, basil, balsamic glaze',
  },
  {
    title: 'Bruschetta',
    price: '$8',
    tags: 'Toasted bread, tomatoes, garlic, basil, olive oil',
  },
  {
    title: 'Spinach and Artichoke Dip',
    price: '$10',
    tags: 'Creamy spinach, artichokes, tortilla chips',
  },
  {
    title: 'Stuffed Mushrooms',
    price: '$14',
    tags: 'Mushrooms, cream cheese, herbs, breadcrumbs',
  },
  {
    title: 'Shrimp Cocktail',
    price: '$16',
    tags: 'Chilled shrimp, cocktail sauce, lemon',
  },
];

// Array of main courses with their details
const mainCourses = [
  {
    title: 'Grilled Salmon',
    price: '$24',
    tags: 'Wild-caught salmon, lemon dill sauce, roasted vegetables',
  },
  {
    title: 'Chicken Alfredo',
    price: '$18',
    tags: 'Grilled chicken, fettuccine, Alfredo sauce',
  },
  {
    title: 'Vegetarian Stir-Fry',
    price: '$16',
    tags: 'Assorted vegetables, tofu, soy-ginger sauce, rice',
  },
  {
    title: 'Filet Mignon',
    price: '$32',
    tags: 'Grass-fed beef, red wine reduction, mashed potatoes',
  },
  {
    title: 'Pesto Pasta',
    price: '$14',
    tags: 'Spaghetti, basil pesto, cherry tomatoes, pine nuts',
  },
];

// Array of desserts with their details
const desserts = [
  {
    title: 'Chocolate Fondue',
    price: '$15',
    tags: 'Assorted fruits, marshmallows, melted chocolate',
  },
  {
    title: 'Tiramisu',
    price: '$10',
    tags: 'Ladyfingers, coffee-soaked layers, mascarpone',
  },
  {
    title: 'New York Cheesecake',
    price: '$12',
    tags: 'Classic creamy cheesecake, fruit compote',
  },
  {
    title: 'Molten Lava Cake',
    price: '$14',
    tags: 'Warm chocolate cake, gooey center, vanilla ice cream',
  },
  {
    title: 'Creme Brulee',
    price: '$16',
    tags: 'Vanilla custard, caramelized sugar crust',
  },
];

// Array of awards with their details, including image URLs from the imported images module
const awards = [
  {
    imgUrl: images.award02,
    title: 'Exquisite Dining Award',
    subtitle: 'Recognized for providing an exceptional culinary experience that tantalizes the taste buds and delights the senses.',
  },
  {
    imgUrl: images.award01,
    title: 'Emerging Culinary Star',
    subtitle: 'Acknowledged as a rising force in the culinary world, showcasing innovation, creativity, and a commitment to excellence.',
  },
  {
    imgUrl: images.award05,
    title: 'Hospitality Excellence',
    subtitle: 'Awarded for outstanding hospitality, ensuring every guest receives a warm welcome and an unforgettable dining experience.',
  },
  {
    imgUrl: images.award03,
    title: 'Masterful Chef Accolade',
    subtitle: 'Celebrated as an outstanding chef who demonstrates culinary prowess, creativity, and a dedication to perfection.',
  },
];

// Object containing all the arrays of menu items and awards
const data = { appetizers, mainCourses, desserts, awards };

export default data;
