import React from 'react'

const Menu = ({menuItems}) => {
  return (
    <div className='section-center'>
        {menuItems.map((menuItem)=>{
            const {id,title,price,img,desc}=menuItem;
            return(
                <article
                className='card' key={id}>
                    <div className='image'>
                    <img src={img}
                    alt={title}n
                    className='photo'/>
                    </div>
                    
                    <div className='item-info'>
                        <header>
                            <h4 className='tittle'>{title}</h4>
                            <h4 className='price'>₹{price}</h4>
                        </header>
                        <p className='item-text'>{desc}</p>
                    </div>
                </article>
            )
        })}
    </div>
  )
}

export default Menu