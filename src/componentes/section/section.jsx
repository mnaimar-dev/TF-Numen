import React from 'react'
import infoSection from '../../helpers/SectionInfo'
import "./section.css"

function section() {
  return (
   <div className='section-body'>
    {
        infoSection.map( (e) => {
            return (
                <section key={ e.id } className='section-container text-white'>
                    <div className="card1 sectionCard" >
                        <div className="card-body bg-black" >
                            <p className='ms-4 fs-5'>{ e.icono }</p>
                            <span className="card-title text-center" style={{ marginRight: '5%' }}>{ e.titulo }</span>
                            <p className="text-start mx-5">{ e.texto }</p>
                        </div>
                    </div>

                    {/* <div className='section-box1 text-white d-flex border border-red' style={{ maxWidth: '20rem' }}>
                        <div className='d-grid'>
                            { e.icono } <br />
                            { e.titulo } <br />
                            { e.texto }
                        </div>
                    </div> */}
                </section>
            )
        } )
    }
   </div>
  )
}

export default section