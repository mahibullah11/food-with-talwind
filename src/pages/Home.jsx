import FoodCard from "../components/FoodCard";
import Footer from "../components/Footer";
import MenuCard from "../components/MenuCard";


function Home() {

    const foodCards = [
        {
            id:1,
            imgUrl: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGljZSUyMGNyZWFtfGVufDB8fDB8fHww',
            name:"Ice-Cream"
        },
        {
            id:2,
            imgUrl: 'https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
        imgUrl: 'https://media.istockphoto.com/id/635875304/photo/hamburger-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=Tvk-dWZpyovfZySr27VuvOoSPPj_3D0w0YXqVlYhIGc='
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
        profileUrl:"https://www.linkedin.com/in/mahib-ullah74/",
        iconUrl:'https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000'
      },
      {
        id:2,
        name:'facebook',
        profileUrl:"https://www.facebook.com/mahib.malak?mibextid=ZbWKwL",
        iconUrl: "https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000",
       
      },
      {
        id:3,
        name:'Youtube',
        profileUrl:"https://www.youtube.com/@mahibullahSkillsofficial",
        iconUrl: "https://img.icons8.com/?size=100&id=19318&format=png&color=000000",
       
      },
     
    ]

  return (
    <div>
        {/* Hero Section  */}
    <section className='relative'>
      <img src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='h-[50vh] w-full object-cover' alt="" />
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
     <section className="flex flex-col items-center justify-between p-4 bg-gray-400 ">
      <div className="flex items-center justify-center gap-1 flex-grow">
       {
        socialIcons.map((icon) =>(
          <Footer key={icon.id} name={icon.name} iconUrl={icon.iconUrl} profileUrl={icon.profileUrl}/>
        ))
      }
      </div>
     <div>
     <p>All right reserved.2024</p>
     </div>
     </section>
    </div>
  )
}

export default Home