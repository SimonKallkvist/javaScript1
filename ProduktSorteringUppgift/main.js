// ----------------->

// Product Array

let productsArr = [
    {
        productName: 'ARX-120+',
        productImg: 'https://source.unsplash.com/random',
        productPrice: 799,
        productBrand: 'Adidas',
        productCategory: 'Jacket',
        productColorBox: 'Black', 
        
    },
    {
        productName: 'Low-Benie',
        productImg: 'https://source.unsplash.com/random',
        productPrice: 299,
        productBrand: 'Adidas',
        productCategory: 'Mössa',
        productColorBox: 'Pink', 
        
    },
    {
        productName: 'Wasters',
        productImg: 'https://source.unsplash.com/random',
        productPrice: 1099,
        productBrand: 'Nike',
        productCategory: 'Byxa',
        productColorBox: 'Red', 
        
    },
    {
        productName: 'Grobby',
        productImg: 'https://source.unsplash.com/random',
        productPrice: 2499,
        productBrand: 'Gucci',
        productCategory: 'Jacket',
        productColorBox: 'Pink', 
        
    },
    {
        productName: 'Tankerzzz',
        productImg: 'https://source.unsplash.com/random',
        productPrice: 4349,
        productBrand: 'Prada',
        productCategory: 'Mössa',
        productColorBox: 'Black', 
        
    },
    {
        productName: 'Willow',
        productImg: 'https://source.unsplash.com/random',
        productPrice: 89,
        productBrand: 'Adidas',
        productCategory: 'Byxa',
        productColorBox: 'Red', 
        
    },
    {
        productName: 'GöranP*s',
        productImg: 'https://source.unsplash.com/random',
        productPrice: 499,
        productBrand: 'Gucci',
        productCategory: 'Jacket',
        productColorBox: 'Pink', 
        
    },
    {
        productName: 'DankMa',
        productImg: 'https://source.unsplash.com/random',
        productPrice: 799,
        productBrand: 'Prada',
        productCategory: 'ByXa',
        productColorBox: 'Red', 
        
    },
    {
        productName: 'Trogglodyte',
        productImg: 'https://source.unsplash.com/random',
        productPrice: 1999,
        productBrand: 'Nike',
        productCategory: 'Jacket',
        productColorBox: 'Pink', 
        
    },
    {
        productName: 'Y270k',
        productImg: 'https://source.unsplash.com/random',
        productPrice: 7999,
        productBrand: 'Prada',
        productCategory: 'Jacket',
        productColorBox: 'Black', 
        
    }
];

// Global declaration
let genereateItem = document.querySelector('.generate');



genereateItem.addEventListener('click', () => {
    const newProdPrice = Math.floor(Math.random() * 1000) + 1
    console.log(newProdPrice);
})

//
let showAll = document.querySelector('#showAllProducts')
let removeAll = document.querySelector('#clearGrid');
let filterProds = document.querySelector('#filterButton')
let productGrid = document.querySelector('.productGrid');

removeAll.addEventListener('click', () => {
    productGrid.innerHTML = '';
});


// --------> Show all items that are in the productsArr!
showAll.addEventListener('click', () => {
    //Create the product card
    productGrid.innerHTML = '';
    productsArr.forEach((prod) => {
        let gridItem = document.createElement('div');
        gridItem.classList.add('productCard');
        //create the productName
        let productName = document.createElement('h3');
        productName.textContent = prod.productName;
        //Create the product image
        let productImg = document.createElement('div');
        productImg.style.backgroundImage = `url(${prod.productImg})`;
        //Create product price
        let productPrice = document.createElement('h4');
        productPrice.textContent = prod.productPrice + " kr";
        //create Brand tag
        let productBrand = document.createElement('h5');
        productBrand.textContent = prod.productBrand;
        //Create category tag
        let productCategory = document.createElement('p');
        productCategory.textContent = prod.productCategory;
        //Create color heading tag
        let productColor = document.createElement('h6');
        productColor.textContent = 'Color';
        //Create color box showcase
        let productColorBox = document.createElement('div');
        productColorBox.classList.add = 'colorBox';
        productColorBox.style.background = prod.productColorBox;

        gridItem.append(productName, productImg,productPrice,productBrand,productCategory,productColor,productColorBox);
        productGrid.appendChild(gridItem);
    
    });
});

filterProds.addEventListener('click', () => {
    productGrid.innerHTML = '';

    //HÄmta värde fårn isRObot
    let robotMan = document.querySelector('#amRobot').checked;
    // ----------> Hämta värden från radio buttons
    // -------> Spara värdet från dropDown
    let categoryDrop = document.querySelector('#itemSelect').value;
    console.log(categoryDrop);

    // ----------> Hämta värdet från Brand radio
    let brandRadio = document.querySelector("[name='brand']:checked").value;
    console.log(brandRadio);

     // -------------> Hämta värdet från Color check (och skriv över i ny array).
     // TODO Gör att den tar in alla valda checkboxes i en ny array och sortera därifrån
     let colorCheck = document.querySelector("[name='color']:checked").value;
     console.log(colorCheck);

    //  let colorBla = document.getElementsByName('color');

    // let multiColor = Array.from(document.getElementsByName('color'));

    // Create an array from nodelist gatherd by checkbox name attribute then filter on checked checkboxes!
    let multiColorCheck = Array.from(document.getElementsByName('color')).filter((color) => {
        return(
            color.checked
            )
    });

   
  

    
     let filterdProducts = productsArr.filter((prods) => {
        return ( 
            (categoryDrop.toUpperCase() === 'ALL' || prods.productCategory.toUpperCase() === categoryDrop.toUpperCase()) &&
            (brandRadio.toUpperCase() === 'ALL' || prods.productBrand.toUpperCase() === brandRadio.toUpperCase()) &&
           (colorCheck.toUpperCase() === 'ALL' || multiColorCheck.some((color) => color.value.toUpperCase() === prods.productColorBox.toUpperCase()))
        );
     });

    
     console.log(filterdProducts);
   

     // Render Grid Items on Screen
     if(robotMan){
        if(filterdProducts.length > 0)
        filterdProducts.forEach((prod) => {
            let gridItem = document.createElement('div');
            gridItem.classList.add('productCard');
            //create the productName
            let productName = document.createElement('h3');
            productName.textContent = prod.productName;
            //Create the product image
            let productImg = document.createElement('div');
            productImg.style.backgroundImage = `url(${prod.productImg})`;
            //Create product price
            let productPrice = document.createElement('h4');
            productPrice.textContent = prod.productPrice + " kr";
            //create Brand tag
            let productBrand = document.createElement('h5');
            productBrand.textContent = prod.productBrand;
            //Create category tag
            let productCategory = document.createElement('p');
            productCategory.textContent = prod.productCategory;
            //Create color heading tag
            let productColor = document.createElement('h6');
            productColor.textContent = 'Color';
            //Create color box showcase
            let productColorBox = document.createElement('div');
            productColorBox.classList.add = 'colorBox';
            productColorBox.style.background = prod.productColorBox;
    
            gridItem.append(productName, productImg,productPrice,productBrand,productCategory,productColor,productColorBox);
            productGrid.appendChild(gridItem);
        });
        else {
            alert('Sorry no items with those Specifics');
        }
     }else{
        alert('You have to be a robot to shop here!');
     }
});






















// ---------> Depreceated code
   // let gridItem = document.createElement('div');
    // gridItem.classList.add('productCard');
    // //create the productName
    // let productName = document.createElement('h3');
    // productName.textContent = 'Adidas YMCA';
    // //Create the product image
    // let productImg = document.createElement('div');
    // productImg.style.backgroundImage = 'url(https://picsum.photos/200)';
    // //Create product price
    // let productPrice = document.createElement('h4');
    // productPrice.textContent = '799 kr';
    // //create Brand tag
    // let productBrand = document.createElement('h5');
    // productBrand.textContent = 'Adidas';
    // //Create category tag
    // let productCategory = document.createElement('p');
    // productCategory.textContent = 'Jacket';
    // //Create color heading tag
    // let productColor = document.createElement('h6');
    // productColor.textContent = 'Color';
    // //Create color box showcase
    // let productColorBox = document.createElement('div');
    // productColorBox.classList.add = 'colorBox';
    // productColorBox.style.background = 'blue';

    // Appending to the product card
    // gridItem.append(productName, productImg,productPrice,productBrand,productCategory,productColor,productColorBox);

    // // Appending to the grid
    // productGrid.appendChild(gridItem);