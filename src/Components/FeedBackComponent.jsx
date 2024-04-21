import logo  from '../assets/logo.svg'
import React from 'react'

function FeedBackComponent() {
  return (
    <>
     <div className="Component">
            <div className='component_haut'>
                <h3>Душнила Доволен вами </h3>
                <h5>Все показатели в норме</h5>

           </div>

           <div className='component_buttom_left'>
                <h3>Дней без Душноты 0</h3>
                <a href="#">История → </a> 

            </div>
            
            <div className='component_buttom_rigth'>
                <img src={logo} alt="" />

            </div>
     </div>

   
   
   </>
   
   

  )
}

export default FeedBackComponent
