import React,{useState} from 'react';
import data from './data';
import Categories from './components/Categories';
import Menu from './components/Menu';
import "./app.css";

const App = () => {
   const [menuItems,setMenuItems]=useState(data);

   const filteredMenu=(category)=>{
    if(category==='All'){
      setMenuItems(data)
    }
    else{
      const updateMenu=data.filter((menu)=>menu.category===category );  
      setMenuItems(updateMenu);
    }
   }

   //convert array to set array 
   let categories=['All',...new Set(data.map((menu)=>{
    return menu.category
   }),
   )
  ];
  return (
    <main>
        <section className='menu section'>
        <div className='title'>
          <h2>Our Courses</h2>
          <div className='underline'></div>
        </div>
        <Categories filteredMenu={filteredMenu} categories={categories}/>
        <Menu menuItems={menuItems} />
      </section>
    </main>
  )
} 

export default App