// import React, { useEffect, useState } from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import Card from '../components/Card';


// function Home() {
//   const [search, setSearch] = useState("");
//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItem, setFoodItem] = useState([]);

//   const loadData = async () => {
//     let response = await fetch("http://localhost:5000/api/foodData", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     response = await response.json();

//     setFoodItem(response[0]);
//     setFoodCat(response[1]);

//     // console.log(response[0], response[1]);
//   }
//   useEffect(() => {
//     loadData()
//   }, [])



//   return (
//     <div>
//       <div> <Navbar /> </div>
//       <div>
//         <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "fill" }}>
//           <div className="carousel-inner" id='carousel'>
//             <div className="carousel-caption" style={{ zIndex: '10' }}>
//               <div className="d-flex justify-content-center">
//                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
//                 {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
//               </div>
//             </div>

//             {/* Use direct image URLs from Unsplash */}
//             <div className="carousel-item active">
//               <img
//                 src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//                 className="d-block w-100"
//                 style={{ filter: "brightness(30%)" }}
//                 alt="Bowl of food"
//               />
//             </div>
//             <div className="carousel-item">
//               <img
//                 src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
//                 className="d-block w-100"
//                 style={{ filter: "brightness(30%)" }}
//                 alt="Burger"
//               />
//             </div>
//             <div className="carousel-item">
//               <img
//                 src="https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
//                 className="d-block w-100"
//                 style={{ filter: "brightness(30%)" }}
//                 alt="Pizza"
//               />
//             </div>
//           </div>
//           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//       <div className='m-3'>
//         {
//           foodCat.length !== 0 ? foodCat.map((data) => {
//             return (<div>
//               <div key={data._id} className='fs-3 m-3'>
//                 {data.CategoryName}
//               </div>
//               <hr />


//               {foodItem.length !== 0 ? (
//                 <div className='row justify-content-center'>
//                   {foodItem.filter((item) => (item.CategoryName === data.CategoryName) && item.name.toLowerCase().includes(search.toLowerCase()))
//                     .map((filterItems) => {
//                       return (
//                         <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
//                           {/* <Card foodName={filterItems.name}
//                             options={filterItems.options[0]}
//                             imgSrc={filterItems.img}
//                           // description={filterItems.description}
//                           ></Card> */}
//                           {filterItems.options && filterItems.options.length > 0 ? (
//                             <Card foodItem = {filterItems}
//                               options={filterItems.options[0]}
//                               imgSrc={filterItems.img}
//                             />
//                           ) : null}
//                         </div>
//                       );
//                     })}
//                 </div>
//               ) : (
//                 <div>No food items available</div>
//               )}
//             </div>
//             );
//           }) : <div>No Categories Available</div>
//         }


//       </div>
//       <div><Footer /></div>
//     </div>
//   );
// }

// export default Home;

// import React, { useEffect, useState } from 'react'
// import Card from '../components/Card'
// // import Carousel from '../components/Carousel'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
// export default function Home() {
//   const [foodCat, setFoodCat] = useState([])
//   const [foodItems, setFoodItems] = useState([])
//   const [search, setSearch] = useState('')
//   const loadFoodItems = async () => {
//     let response = await fetch("http://localhost:5000/api/foodData", {
//       // credentials: 'include',
//       // Origin:"http://localhost:3000/login",
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       }

//     });
//     response = await response.json()
//     // console.log(response[1][0].CategoryName)
//     setFoodItems(response[0])
//     setFoodCat(response[1])
//   }

//   useEffect(() => {
//     loadFoodItems()
//   }, [])

//   return (
//     <div >
//       <div>
//         <Navbar />
//       </div>
//       <div>
//         <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

//           <div className="carousel-inner " id='carousel'>
//             <div class=" carousel-caption  " style={{ zIndex: "9" }}>
//               <div className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
//                 <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search in here..." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
//                 <button className="btn text-white bg-danger" onClick={() => { setSearch('') }}>X</button>
//               </div>
//             </div>
//             <div className="carousel-item active" >
//               <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
//             </div>
//           </div>
//           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//       <div className='container'> {/* boootstrap is mobile first */}
//         {
//           foodCat.length !== 0
//             ? foodCat.map((data) => {
//               return (
//                 // justify-content-center
//                 <div className='row mb-3'>
//                   <div key={data.id} className='fs-3 m-3'>
//                     {data.CategoryName}
//                   </div>
//                   <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
//                   {foodItems.length !== 0 ? foodItems.filter(
//                     (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
//                     .map(filterItems => {
//                       return (
//                         <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
//                           {console.log(filterItems.url)}
//                           <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} ></Card>
//                         </div>
//                       )
//                     }) : <div> No Such Data </div>}
//                 </div>
//               )
//             })
//             : ""}
//       </div>
//       <Footer />
//     </div>

//   )
// }


// import React, { useEffect, useState } from 'react'
// import Card from '../components/Card'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'

// export default function Home() {
//   const [foodCat, setFoodCat] = useState([])
//   const [foodItems, setFoodItems] = useState([])
//   const [search, setSearch] = useState('')
//   const [carouselImages, setCarouselImages] = useState([])

//   const loadFoodItems = async () => {
//     const response = await fetch("http://localhost:5000/api/foodData", {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' }
//     });
//     const data = await response.json()
//     setFoodItems(data[0])
//     setFoodCat(data[1])
//   }

//   const loadCarouselImages = async () => {
//     const categories = ["burger", "pastry", "barbeque"];
//     const promises = categories.map(async (cat) => {
//       const res = await fetch(`http://localhost:5000/api/unsplash?query=${cat}`);
//       const data = await res.json();
//       return data.imageUrl;
//     });
//     const imgs = await Promise.all(promises);
//     setCarouselImages(imgs);
//   }

//   useEffect(() => {
//     loadFoodItems()
//     loadCarouselImages()
//   }, [])

//   return (
//     <div>
//       <Navbar />

//       <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
//         <div className="carousel-inner" id="carousel">
//           <div className="carousel-caption" style={{ zIndex: "9" }}>
//             <div className="d-flex justify-content-center">
//               <input className="form-control me-2 w-75 bg-white text-dark"
//                 type="search"
//                 placeholder="Search in here..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//               />
//               <button className="btn text-white bg-danger" onClick={() => setSearch('')}>X</button>
//             </div>
//           </div>

//           {carouselImages.map((img, idx) => (
//             <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
//               <img src={img} className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="slide" />
//             </div>
//           ))}
//         </div>

//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>

//       <div className='container'>
//         {foodCat.length !== 0 && foodCat.map((data) => (
//           <div className='row mb-3' key={data._id}>
//             <div className='fs-3 m-3'>
//               {data.CategoryName}
//             </div>
//             <hr style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />

//             {foodItems.length !== 0
//               ? foodItems.filter(item =>
//                 item.CategoryName === data.CategoryName &&
//                 item.name.toLowerCase().includes(search.toLowerCase())
//               ).map((filterItems) => (
//                 <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
//                   <Card
//                     foodName={filterItems.name}
//                     item={filterItems}
//                     options={filterItems.options[0]}
//                     ImgSrc={filterItems.img}
//                   />
//                 </div>
//               ))
//               : <div>No Such Data</div>}
//           </div>
//         ))}
//       </div>

//       <Footer />
//     </div>
//   );
// }



import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  const [foodCat, setFoodCat] = useState([])
  const [foodItems, setFoodItems] = useState([])
  const [search, setSearch] = useState('')

  const loadFoodItems = async () => {
    const response = await fetch("http://localhost:5000/api/foodData", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json()
    setFoodItems(data[0])
    setFoodCat(data[1])
  }

  useEffect(() => {
    loadFoodItems()
  }, [])

  return (
    <div>
      <Navbar />

      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "9" }}>
            <div className="d-flex justify-content-center">
              <input className="form-control me-2 w-75 bg-white text-dark"
                type="search"
                placeholder="Search in here..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn text-white bg-danger" onClick={() => setSearch('')}>X</button>
            </div>
          </div>

          {/* Static images for carousel */}
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1589308078055-ced8489d45c6?auto=format&fit=crop&w=900&q=80"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="Pastry"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1604909053284-c5e74db22846?auto=format&fit=crop&w=900&q=80"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="Barbeque"
            />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className='container'>
        {foodCat.length !== 0 && foodCat.map((data) => (
          <div className='row mb-3' key={data._id}>
            <div className='fs-3 m-3'>
              {data.CategoryName}
            </div>
            <hr style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />

            {foodItems.length !== 0
              ? foodItems.filter(item =>
                item.CategoryName === data.CategoryName &&
                item.name.toLowerCase().includes(search.toLowerCase())
              ).map((filterItems) => (
                <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                  <Card
                    foodName={filterItems.name}
                    item={filterItems}
                    options={filterItems.options[0]}
                    ImgSrc={filterItems.img}
                  />
                </div>
              ))
              : <div>No Such Data</div>}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
