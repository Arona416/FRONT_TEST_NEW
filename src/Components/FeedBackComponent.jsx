import logo  from '../assets/logo.svg'
import React from 'react'

function FeedBackComponent() {
  return (
    <>
            <div className='component-haut'>
                <h3>Душнила <br />Доволен вами </h3>
                <h5>Все показатели в норме</h5>

           </div>

          <div className="component-bottom">
            <div className='component-bottom-left'>
                    <h3>Дней без Душноты 0</h3>
                    <a href="#" className='link'>
                        <p>История</p>
                        <p> →</p>

                        </a>

            </div>
     </div>
     <div className='component-bottom-rigth'>
                <img  src={logo} alt="" className='logo' />

            </div>
   
   </>
   
   

  )
}

export default FeedBackComponent
