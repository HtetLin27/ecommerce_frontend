import React from 'react';
import '../App.css'

const Description =()=>{
    return(
    <section className='app-box mt-5'>
        <h2 className='text-center'>Our App For You</h2>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src='/assets/image/socialnetwork1.png' alt='social'/>
                </div>
                <div className='col-md-6'>
                    <div className='app-body'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                       <div className='text-center'>
                        <button className='app-btn'>IOS App</button>
                        <button className='app-btn'>Android App</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Description;