import React, {useState} from "react"

export default function Products({addToCart}){
  const DRESS ="Dresses";
  const SHOES ="shoes";
  const Jewellery="jewellery";
  const Models="Models";


  const [products] = useState([
    {
      category:DRESS,
      name:"Ruched Fitted Jersey Dress In Coral",
      cost: 590.00,
      image:"https://cdn.shopify.com/s/files/1/3028/9038/products/VictoriaBeckham_RuchedFittedDress_CORAL_1223JDR004598A_2700_4050_247_WHITE_LR_FLATSHOTS_Model1_JPG_576x.jpg?v=1676569040 " ,

    },
    {
      category:DRESS,
      name: "Exclusive to VB Sleeveless Circle Draped Dress In Sky Blue",
      cost: 1590.00,
      image:"https://cdn.shopify.com/s/files/1/3028/9038/products/VictoriaBeckham_SleevelessCircleDrapedDressInSkyBlue_SKYBLUE_1223WDR004561B_2700_4050_247_WHITE_LR_HR_FLATSHOT_Model3_JPG2_576x.jpg?v=1676542421",

    },
    {
      category:DRESS,
      name: "Gathered Waist Midi Dress In Parrot Green",
      cost: 1090.00,
      image:"https://cdn.shopify.com/s/files/1/3028/9038/products/GatheredWaistMidiDressInParrotGreen_576x.jpg?v=1677494163",

    },
    {
      category:DRESS,
      name: "Asymmetric Ruched Dress In Fuchsia",
      cost: 1250.00,
      image:"https://cdn.shopify.com/s/files/1/3028/9038/products/VictoriaBeckham_AsymmetricRuchedDressInFuschia_Pink_1123JDR004457A_2700_4050_247_WHITE_LR_Flatshot_Model5_JPG_533x.jpg?v=1669206870",

    },
    {
      category: SHOES ,
      name: "Pointy Toe Stiletto Sandal in Black Leather",
      cost: 850.00,
      image:"https://cdn.shopify.com/s/files/1/3028/9038/products/UntitledSession24043_576x.jpg?v=1680707263",

    },
    {
      category: SHOES ,
      name: "Dawn Sandal in Petrol Green Printed Snakeskin",
      cost: 695.00,
      image:"https://cdn.shopify.com/s/files/1/3028/9038/products/output-onlinejpgtools_576x.jpg?v=1680707888",

    },
    {
      category:Jewellery,
      name: "Tassel Necklace In Gold",
      cost: 370.00,
      image:"https://cdn.shopify.com/s/files/1/3028/9038/products/TASSLE_PENDANT_GOLD_1_G_sRGB_isoR1isoR2_576x.jpg?v=1643901738",

    },
    {
      category:Jewellery,
      name: "Watch Chain Choker In Gold",
      cost: 490.00,
      image:"https://cdn.shopify.com/s/files/1/3028/9038/products/JEWELLERY_02_2700_4050_247_LR_576x.jpg?v=1645212913",

    },
    {
      category:Models,
      name: "Model",
      cost: 999999.00,
      image:"https://assets.vogue.com/photos/633732c14af93add38c1e9a2/master/w_1280%2Cc_limit/00001-victoria-beckham-spring-2023-ready-to-wear-credit-gorunway.jpg",

    },
    {
      category:Models,
      name: "Model",
      cost: 999999.00,
      image:"https://mediacdn.grabone.co.nz/asset/3VWwLI5Chb/Victoria_Beckham_1.jpg",

    },
    {
      category:Models,
      name: "Model",
      cost: 999999.00,
      image:"https://wwd.com/wp-content/uploads/2023/03/Victoria-Beckham-rtw-fall-2023-001.jpg",

    },
    {
      category:Models,
      name: "Model",
      cost: 999999.00,
      image:"https://www.fashionotography.com/wp-content/uploads/2022/10/Victoria-Beckham-Spring-Summer-2023-Paris-Fashion-Week-9.webp",

    },
    {
      category:Models,
      name: "Model",
      cost: 999999.00,
      image:"https://imageio.forbes.com/specials-images/imageserve/6338ea9acd638e486b4ce61a/Victoria-Beckham-Unveils-Her-First-Paris-Fashion-Week-Show/960x0.jpg?format=jpg&width=960",

    },
    {
      category:Models,
      name: "Model",
      cost: 999999.00,
      image:"https://theimpression.com/wp-content/uploads/2022/09/victoria-beckham-s23-008-10841588-1.jpg",

    },
   
   
  ]);
  const[catagory,setCategory] = useState(DRESS)

   const getProductsInCategory =(catagory) =>{
    return products.filter(
      (product) => product.category ===catagory   )

   }


    return(
         <>
         <div className="selection">
     Select your catagory: <select onChange={(e) => setCategory(e.target.value)}>
            <option value={DRESS}>Dresses</option>
            <option value={SHOES}>Shoes</option>
            <option value={Jewellery}>Jewellery</option>
            <option value={Models}>Models</option>
          </select>
          </div>
      
        <div className="products-container" height="770" width="400">
          
        {getProductsInCategory(catagory).map((product,index) =>(
          <div className="product-card" key={index}>
            <div>{product.name}</div>
            <div>${product.cost}</div>
            <img src={product.image} alt={product.name} height="80%" width="90%"/>

            <div>
              <button onClick={()=> addToCart(product)} className="button2">Add to cart</button>
      </div>
     
            </div>
     
        ))}
          
        
            </div>
            </>
    )
}