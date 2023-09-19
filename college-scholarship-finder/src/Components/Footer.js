import React from 'react'

import './Footer.css'
const Footer = () => {
  return (
    <div>
        
    
        <footer>
            <div class="container flex footer-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
          </svg>
          <h3 style={{marginTop:10}}>ScholarSearch</h3>
                <div class="link-column flex">
                    <h4>Looking for Scholarship</h4>
                    <a href="#" class="hover-link">Scholarship Availability</a>
                    <a href="#" class="hover-link">Funds offered</a>
                    <a href="#" class="hover-link">Grants</a>
                    <a href="#" class="hover-link">Providers</a>
        
                </div>
                <div class="link-column flex">
                    <h4>Scholarships</h4>
                    <a href="#" class="hover-link">Scholarship Search</a>
                    <a href="#" class="hover-link">Scholarship Directory</a>
                    <a href="#" class="hover-link">Minority Scholarships</a>
                    <a href="#" class="hover-link">Abroad Scholarships</a>
                </div>
                <div class="link-column flex">
                    <h4>Help</h4>
                    <a href="#" class="hover-link">FAQ</a>
                    <a href="#" class="hover-link">Contact Us</a>
                    <a href="#" class="hover-link">Career Opportunities</a>
                    <a href="#" class="hover-link">Partenerships</a>
                </div>
            </div>
        </footer>
    
     
    
        <div class="subfooter">
            <div class="container flex subfooter-container">
                <a class="hover-link" href="#">Privacy policy</a>
                <a class="hover-link" href="#">Terms & Condition</a>
                <a class="hover-link" href="#">Security Information</a>
                <a class="hover-link" href="#"><i class="fa-brands fa-facebook"></i></a>
                <a class="hover-link" href="#"><i class="fa-brands fa-twitter"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Footer