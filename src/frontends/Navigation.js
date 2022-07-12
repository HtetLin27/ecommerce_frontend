import React from 'react';

function Navigation(props){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id='appNavBar'>
  <a class="navbar-brand text-white" href="#">Shopping</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link text-white" href="#">HOME <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">SERVICES</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">ABOUT</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">PRODUCTS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">CONTACT</a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navigation;