const homeHeaderHTML = `
<div class="headerr position-relative">
    <div class="fixed-top header-color">
        <nav class="navbar navbar-expand-lg navbar-light container p-0">
            <a class="navbar-brand ms-2 text-white" href="index.html"><img src="../images/ALYERLA2.png" style="width:70px"alt="logo"></a>
            <span class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars text-white" aria-hidden="true"></i>   
            </span>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active ">
                        <a class="nav-link" href="index.html">HOME </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="service.html">SERVICES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</div >


<div class="header-content position-absolute">
    <div class="cen-div ">
       <span style="font-weight:800;font-size:50px;color:rgb(244, 171, 12);">ALYERLA</span>
       <span style="font-weight:150;font-size:
    </div>
</div>
</div>`

const footerHTML = ` 
<div class="container">
<div class="row">
  
  
  <div class="col-12">
    <hr style="color: white; border-top: 5px solid; ">
  </div>
  
  <div class="col-lg-4 col-md-12 d-md-block  col-12 m-auto footer-div">
    <div class=" d-flex justify-content-center">
      <div class=" text-center">
        <div class="align-center">
          <img src="./images/ALYERLA2.png" style="max-width: 200px;" alt="">
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-md-6 col-12  d-flex justify-content-center footer-div">
    <div class="">
      <h3 id="calibri" style="color:orange">COMPANY</h3>
      <ul id="calibri-body">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="service.html">Service</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </div>
  </div>

  <div class="col-lg-4 col-md-6 col-12  d-flex justify-content-center footer-div">
    <div class="w-100">
      <h3 id="calibri" style="color:orange">Get in Touch</h3>
      <div class="links">
        <ul class="row m-0">
          <li class="d-inline ">
              <p><b> Mail:</b>INFO@ALYERLA.COM</p>
            /li>
          <li class="d-inline" style="color:orange"><b> phone:</b> +91 9000147197</li>
          <li class="d-inline ">
              <p><b>Location:</b> H.no.6-204/4/5, Plot No.13,Boudha Nagar, Jeedimetla,
                Hyderabad-Telangana 500081</p>
           </li>
          </li>
        </ul>
      </div>
    </div>
  </div>
<div>  <ul class="d-flex float-right m-0">
<li class="d-inline m-1 p-1 text-white "><a href="mail-to:info@alyerla.com"><i class="fa fa-envelope"
      aria-hidden="true"></i></a></li>
<li class="d-inline m-1 p-1 text-white "><a href="9000147197"><i class="fa fa-phone" aria-hidden="true"></i></a>
</li>
<li class="d-inline m-1 p-1 text-white "><a href="https://www.linkedin.com/company/alyerla/"><i class="fa fa-linkedin"
      aria-hidden="true"></i></a></li>
<li class="d-inline m-1 p-1 text-white "><a href="#"><i class="fa fa-facebook"
      aria-hidden="true"></i></a></li>
<li class="d-inline m-1 p-1 text-white "><a href="#"><i class="fa fa-instagram"
      aria-hidden="true"></i></a></li>
<li class="d-inline m-1 p-1 text-white "><a href="9000147197"><i class="fa fa-whatsapp"
      aria-hidden="true"></i></a>
</li>
</ul></div>

</div>
<div class="links">

</div>
<div class="text-center my-3">
  <p class="d-inline text-white">Copyright @2023 All Rights Reserved | this site made by <i>Alyerla</i></p>
</div>



</div>`;

const gnHeaderHTML = `<div class="menu-bar sticky-top">
<div class="fixed-top header-color">
  <nav class="navbar navbar-expand-lg navbar-light container">
    <a class="navbar-brand ms-2 text-white" href="index.html"><img src="./images/ALYERLA2.png" style="width:70px" alt="logo""></a>
    <span class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </span>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active ">
          <a class="nav-link" href="index.html">HOME </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="service.html">SERVICES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="contact.html">CONTACT</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
</div>`;


function conditionalRendring() {
    const elemnt = document.getElementById("headerHome");
    const footer = document.getElementById("footerdiv");
    const header2 = document.getElementById("header2");

    if (elemnt) elemnt.innerHTML = homeHeaderHTML;
    if (footer) footer.innerHTML = footerHTML;
    if (header2) header2.innerHTML = gnHeaderHTML;
}
window.onload = conditionalRendring();