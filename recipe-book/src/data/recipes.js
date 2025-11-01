// Recipe data
import spaghettiImg from '../images/FAW-recipes-pasta-sausage-basil-and-mustard.jpg';
import pizzaImg from '../images/classic-cheese-pizza.jpg';
import saladImg from '../images/Smoked-Salmon-Lyonnaise-Salad.jpg';
import cakeImg from '../images/spongecake.jpg';

export const recipes = [
  {
    id: 1,
    name: "Classic cheese pizza",
    category: "Dinner",
    image: pizzaImg,
    rating: 5,
    reviews: 6,
    time: "20 min",
    ingredients: [
      "Pizza dough 1 base (store-bought or homemade)",
      "Pizza sauce half cup",
      "Mozzarella cheese one and a half cups (grated)",
      "Olive oil 1 tablespoon"
    ],
    instructions: [
      "Preheat oven to 220°C (425°F).",
      "Spread pizza sauce evenly over the dough.",
      "Sprinkle mozzarella cheese generously on top.",
      "Drizzle olive oil and bake for 12 to 15 minutes until crust is golden."
    ]

  },
  {
    id: 2,
    name: "Pasta Alfredo",
    category: "Dinner",
    image: spaghettiImg,
    rating: 4,
    reviews: 0,
    time: "30 min",
    ingredients: [
      "Chicken breast 500g",
      "Fettuccine pasta 400g",
      "Heavy cream 200ml",
      "Parmesan cheese 100g"
    ],
    instructions: [
      "Cook pasta according to package instructions",
      "Season and cook chicken until golden",
      "Make alfredo sauce with cream and cheese",
      "Combine everything and serve hot"
    ]
  },
  {
    id: 3,
    name: "Smoked Salmon Salad",
    category: "Lunch",
    image: saladImg,
    rating: 4.5,
    reviews: 6,
    time: "25 min",
    ingredients: [
      "Ground beef 500g",
      "Taco shells 8 pieces",
      "Lettuce, tomatoes, cheese",
      "Taco seasoning"
    ],
    instructions: [
      "Brown the ground beef in a pan",
      "Add taco seasoning and water",
      "Warm taco shells in oven",
      "Assemble tacos with toppings"
    ]
  },
  {
    id: 4,
    name: "Sponge Cake",
    category: "Lunch",
    image: cakeImg,
    rating: 5,
    reviews: 0,
    time: "10 min",
    ingredients: [
      "Fresh mozzarella 200g",
      "Tomatoes 3 large",
      "Fresh basil leaves",
      "Extra virgin olive oil"
    ],
    instructions: [
      "Slice tomatoes and mozzarella",
      "Arrange alternating on plate",
      "Add fresh basil leaves",
      "Drizzle with olive oil and season"
    ]
  }
];