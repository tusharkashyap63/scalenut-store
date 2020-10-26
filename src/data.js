import nike from './images/Nike-Air-Vapor-Advantage-Womens-Tennis-Shoe-599364_508_A_PREM.jpg';
import vans from './images/D3HY28-HERO.jpg';
import adidas from './images/CG6334_01_standard.webp';
import peter from './images/Peter-England-Black-Formal-Trousers-SDL190029486-1-d803c.jpg';
import huesen from './images/2596808_Black.webp';
import solly from './images/1cnny-allen-solly-men-s-slim-fit-casual-trousers_500x500_0.jpg';
import skybag from './images/neon03blt4.jpeg.abeb3ccfcc.999x1000x1000.jpg';
import lenovo from './images/GX40Q75214-main-v1.jpg';
import vuitton from './images/Louis-Vuitton-Bag-3.jpg';
import puma from './images/190276_Pers_Image_0424473.jpg';
import titan from './images/1698SL02.webp';
import rolex from './images/OIP.jpg';

// Add products here with unique ProductIDs
const storeData = [
  {
    ProductID: 'abc123',
    ProductName: 'Nike',
    CategoryId: 'A12',
    CategoryName: 'Footwear',
    SubCategoryId: 'X67',
    SubCategoryName: 'Sports Shoes',
    Price: 3599,
    imgSrc: nike,
  },
  {
    ProductID: 'abc126',
    ProductName: 'Peter England',
    CategoryId: 'D12',
    CategoryName: 'Trousers',
    SubCategoryId: 'Y59',
    SubCategoryName: 'Formal Trousers',
    Price: 999,
    imgSrc: peter,
  },
  {
    ProductID: 'abc124',
    ProductName: 'Vans',
    CategoryId: 'B12',
    CategoryName: 'Footwear',
    SubCategoryId: 'X68',
    SubCategoryName: 'Casual Shoes',
    Price: 1299,
    imgSrc: vans,
  },
  {
    ProductID: 'abc125',
    ProductName: 'Adidas',
    CategoryId: 'C12',
    CategoryName: 'Footwear',
    SubCategoryId: 'X69',
    SubCategoryName: 'Sports Shoes',
    Price: 2599,
    imgSrc: adidas,
  },

  {
    ProductID: 'abc127',
    ProductName: 'Van Huesen',
    CategoryId: 'E12',
    CategoryName: 'Trousers',
    SubCategoryId: 'Y60',
    SubCategoryName: 'Formal Trousers',
    Price: 1099,
    imgSrc: huesen,
  },
  {
    ProductID: 'abc128',
    ProductName: 'Allen Solly',
    CategoryId: 'F12',
    CategoryName: 'Trousers',
    SubCategoryId: 'Y61',
    SubCategoryName: 'Casual Trousers',
    Price: 1199,
    imgSrc: solly,
  },
  {
    ProductID: 'abc129',
    ProductName: 'Skybags',
    CategoryId: 'G12',
    CategoryName: 'Bags',
    SubCategoryId: 'Z31',
    SubCategoryName: 'Casual Bag',
    Price: 1299,
    imgSrc: skybag,
  },
  {
    ProductID: 'abc130',
    ProductName: 'Lenovo',
    CategoryId: 'H12',
    CategoryName: 'Bags',
    SubCategoryId: 'Z32',
    SubCategoryName: 'Laptop Bag',
    Price: 799,
    imgSrc: lenovo,
  },
  {
    ProductID: 'abc131',
    ProductName: 'Louis Vuitton',
    CategoryId: 'I12',
    CategoryName: 'Bags',
    SubCategoryId: 'Z33',
    SubCategoryName: 'Luxury Bag',
    Price: 6999,
    imgSrc: vuitton,
  },
  {
    ProductID: 'abc132',
    ProductName: 'Puma',
    CategoryId: 'J12',
    CategoryName: 'Footwear',
    SubCategoryId: 'X70',
    SubCategoryName: 'Sports Shoes',
    Price: 1999,
    imgSrc: puma,
  },
  {
    ProductID: 'abc133',
    ProductName: 'Titan',
    CategoryId: 'K12',
    CategoryName: 'Watches',
    SubCategoryId: 'B45',
    SubCategoryName: 'Formal Watch',
    Price: 1699,
    imgSrc: titan,
  },
  {
    ProductID: 'abc134',
    ProductName: 'Rolex',
    CategoryId: 'L12',
    CategoryName: 'Watches',
    SubCategoryId: 'B46',
    SubCategoryName: 'Luxury Watch',
    Price: 29999,
    imgSrc: rolex,
  },
];

export default storeData;
