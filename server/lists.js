const posts = [
  {
    id: "001",
    author: "Cafe De Casa",
    couponCode: 'FR6bwx1q',
    imagePath: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    instruction: "Your coupon value is $5."
  },
  {
    id: "002",
    author: "85°C Bakery Cafe",
    couponCode: 'ByamOdWV',
    imagePath: "https://images.pexels.com/photos/1974892/pexels-photo-1974892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    instruction: "Your coupon value is $8."
  },
  {
    id: "003",
    author: "HiroNori Craft Ramen",
    couponCode: '7roFwfQs',
    imagePath: "https://images.pexels.com/photos/4048778/pexels-photo-4048778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    instruction: "Your coupon value is $10."
  },    
  {
    id: "004",
    author: "Yeemy Yummy",
    couponCode: 'rmWlwvll',
    imagePath: "https://images.pexels.com/photos/1841108/pexels-photo-1841108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    instruction: `Your coupon value is $10.`
  },
  {
    id: "005",
    author: "Duck Donuts",
    couponCode: 'pgih5eAB',
    imagePath: "https://images.pexels.com/photos/2801980/pexels-photo-2801980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    instruction: `Your coupon value is $10.`
  },
  {
    id: "006",
    author: "Haidilao Hot Pot",
    couponCode: 'pgih5eAB',
    imagePath: "https://images.pexels.com/photos/954677/pexels-photo-954677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    instruction: `Your coupon value is $20.`
  },
  {
    id: "006",
    author: "Outpost Kitchen",
    couponCode: 'sddh5eAB',
    imagePath: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    instruction: `Your coupon value is $10.`
  },    
  {
    id: "007",
    author: "Empire Salon",
    couponCode: 'drdh5eAB',
    imagePath: "https://images.pexels.com/photos/696287/pexels-photo-696287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    instruction: `Your coupon value is $10.`
  },
  {
    id: "008",
    author: "Cambria Hotels & Suites Anaheim Resort",
    couponCode: 'ddhs5eAB',
    imagePath: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    instruction: `Your coupon value is $30.`
  },    
  {
    id: "009",
    author: "High Park Tap House",
    couponCode: 'drrh5eAt',
    imagePath: "https://images.pexels.com/photos/941864/pexels-photo-941864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    instruction: `Your coupon value is $8.`
  },
  {
    id: "010",
    author: "Flowers De Monet",
    couponCode: 'ipphs5eAB',
    imagePath: "https://images.pexels.com/photos/880463/pexels-photo-880463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    instruction: `Your coupon value is $6.`
  },    
  {
    id: "011",
    author: "All Star Car Wash",
    couponCode: 'drrh5eAt',
    imagePath: "https://images.pexels.com/photos/3354647/pexels-photo-3354647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    instruction: `Your coupon value is $3.`
  }
];

const addPost = ({id, author, couponCode, imagePath, instruction}) => {
  const post = {id, author, couponCode, imagePath, instruction};
  posts.push(post);
}

const getPostById = (postId) => {
  const post = posts.find(post => post.id == postId);
  if (post) { return post; }
}

const lists = {
  posts,
  addPost,
  getPostById,
}

module.exports = lists;