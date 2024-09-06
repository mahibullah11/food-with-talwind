import FoodCard from "../components/FoodCard";
import Footer from "../components/Footer";
import MenuCard from "../components/MenuCard";


function Home() {

    const foodCards = [
        {
            id:1,
            imgUrl: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1bGwlMjBzaXplJTIwZm9vZCUyMGltYWdlcyUyMG1vcmV8ZW58MHx8MHx8fDA%3D',
            name:"Ice-Cream"
        },
        {
            id:2,
            imgUrl: 'https://images.unsplash.com/photo-1589187151053-5ec8818e661b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpenphJTIwaW1nZXN8ZW58MHx8MHx8fDA%3D',
            name:"Pizza "
        },
        {
            id:3,
            imgUrl: 'https://images.unsplash.com/photo-1481671703460-040cb8a2d909?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2QlMjBpbWdlYXxlbnwwfHwwfHx8MA%3D%3D',
            name:"Juice"
        },
    ];

    const foodMenu = [
      {
        id:1,
        name:'Bakery Muffin',
        price:'10',
        desc:"A muffin is an individually portioned baked product",
        imgUrl: 'https://images.unsplash.com/photo-1481391145929-5bcf567d5211?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id:2,
        name:'Fancy Toast',
        price:'4.8',
        desc:"a thick-cut piece of bread, toasted and topped with any ",
        imgUrl: 'https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id:3,
        name:'Plate of Pasta',
        price:'5.8',
        desc:"Pasta plates are large, deep plates that often have a wide  ",
        imgUrl: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id:4,
        name:'Burger',
        price:'13',
        desc:"a patty of ground beef grilled and placed between.",
        imgUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id:5,
        name:'Pizza',
        price:'20.6',
        desc:"Pizza with extra sauces and empty space still life art",
        imgUrl: 'https://media.istockphoto.com/id/1270745940/photo/pizza-with-extra-sauces-and-empty-space-still-life.jpg?s=1024x1024&w=is&k=20&c=y5Tw0sTrPgwDnEuPaVFXsVyqDg-JFj_YEcgszrbWhAw='
      },
      {
        id:6,
        name:'Rice with Mushroom',
        price:'15.54',
        desc:"pink mushroom choyala with bitten rice.",
        imgUrl: 'https://images.unsplash.com/photo-1682423199837-e1f233a13de0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
    ];

    const socialIcons = [
      {
        id:1,
        name: "linkedin",
        profileUrl:"https://www.linkedin.com/in/najeeb-khan90?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_apphttps://www.linkedin.com/in/najeeb-khan90?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        iconUrl:'data:image/png;base64,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'
      },
      {
        id:2,
        name:'faceBook',
        profileUrl:"https://www.facebook.com/profile.php?id=100053768207242&mibextid=ZbWKwL",
        iconUrl: "data:image/png;base64,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",
       
      },
      {
        id:3,
        name:'Youtube',
        profileUrl:"https://www.youtube.com/@NajeebUllah_1",
        iconUrl: "data:image/png;base64,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",
       
      },
     
    ]

  return (
    <div>
        {/* Hero Section  */}
    <section className='relative'>
      <img src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640773.jpg&fm=jpg" className='h-[50vh] w-full object-cover' alt="" />
      <div className='absolute top-[35%] right-[50%] translate-x-[50%] translate-y-[50%]'>
        <div className="flex gap-1"> 
            <input type="text" placeholder='Search Here'  className='px-4 w-[50vw] sm:w-[35vw] py-2 focus:outline-none border  border-gray-600 rounded-md'  />
            <button className="px-5 py-2 text-white font-semibold bg-gradient-to-tl from-pink-500 to-pink-600 rounded-md">Search</button>
        </div>
      </div>
    </section>
     {/* Explore Foods  */}
     <section className="w-[100vw] flex flex-col justify-center items-center p-5">
        <h2 className="text-3xl font-bold text-gray-700 mb-8">Explore Foods</h2>
        <div className="w-full flex flex-wrap justify-center gap-8 items-center">
         {
          foodCards.map((foodItem) =>(
            <FoodCard key={foodItem.id} name={foodItem.name} images={foodItem.imgUrl}/>
          ))
         }
        </div>
     </section>

     {/* Food menu */}
     <section className="mx-auto mt-10 mb-10 px-4">
  <h2 className="text-center font-bold text-2xl">Food Menu</h2>
  <div className="flex flex-wrap justify-around mt-10 gap-4">
    {foodMenu.map((item) => (
      <MenuCard key={item.id} name={item.name} price={item.price} descripton={item.desc} image={item.imgUrl} />
    ))}
  </div>
</section>
     {/* Footer section  */}
     <section className="flex flex-col items-center justify-between p-4 bg-gray-300 ">
      <div className="flex items-center justify-center gap-1 flex-grow">
       {
        socialIcons.map((icon) =>(
          <Footer key={icon.id} name={icon.name} iconUrl={icon.iconUrl} profileUrl={icon.profileUrl}/>
        ))
      }
      </div>
     <div>
     <p>All right reserved. Design by <span className="text-gry-600">Mr Mahibllah</span></p>
     </div>
     </section>
    </div>
  )
}

export default Home