const products = [
  {
    id: 1,
    title: 'Pathfinder-Rise of the Runelords Adventure Path (Anniversary Edition)',
    description:
      'This hardcover compilation updates the fan-favorite campaign to the Pathfinder Roleplaying Game rules with revised and new content in more than 400 pages packed with mayhem, excitement, and adventure! Celebrating both the fifth anniversary of the Pathfinder Adventure Path and the tenth anniversary of Paizo Publishing, this new edition expands the original campaign with new options and refined encounters throughout, incorporating 5 years of community feedback.',
    price: '40',
    pictureUrl: 'https://m.media-amazon.com/images/I/51sFCZpDhZL._AC_SY780_.jpg',
  },
  {
    id: 2,
    title: `Tarrasque 8 ' miniature`,
    description:
      'For unpainted models, please allow 3 to 7 days of handling time. For painted models, larger requests of very high Grade can take up to 30 days of work.',
    price: '7.95',
    pictureUrl:
      'https://i.etsystatic.com/24342469/r/il/01e92e/2481155688/il_340x270.2481155688_6u3y.jpg',
  },
  {
    id: 3,
    title: 'Dice Set- Song of Rest',
    description:
      'The world’s Challenge Rating keeps going up, so it’s important to remember to take a short rest every now and again!Meet 🎶 Song of Rest 🎶 now an eight dice set. Made for Bards',
    price: '18.05',
    pictureUrl:
      'https://cdn.shopify.com/s/files/1/2364/6599/products/Song-of-rest-purple-dnd-set-of-dice.jpg?v=1644832121',
  },
  {
    id: 4,
    title: `Explorer's Guide to Wildemount (5E D&D Campaign Setting and Adventure Book)`,
    description:
      'HOW DO YOU WANT TO DO THIS? A war brews on a continent that has withstood more than its fair share of conflict. The Dwendalian Empire and the Kryn Dynasty are on the verge of war. Are you gonna stay put?',
    price: '35',
    pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/81FgacqauqL.jpg',
  },
  {
    id: 5,
    title: 'Sparkled Meteor - Hollow Metal Dice Set',
    description:
      'Beautiful black hollow metal dice set with gold numbers. Easy to read, balanced and super cool DnD dice.',
    price: '95',
    pictureUrl:
      'https://cdn.shopify.com/s/files/1/0491/9705/6162/products/product-image-1644892594.jpg?v=1619283123',
  },
];

export const fetching = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(products);
    }, 2000);
  });
};
