import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerAbout from "../components/BannerAbout";
import HoverContent from "../components/hoverContent";
function About() {
    return (
        <>
            <Header />
            <BannerAbout />
            <div class="best-features about-features">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-heading">
                                <h2>Our Background</h2>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="right-image">
                                <img src="assets/images/feature-image.jpg" alt="" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="left-content">
                                <h4>Who we are &amp; What we do?</h4>
                                <p>Lorem Ipsum</p>
                                <ul class="social-icons">
                                    <li><a href="# "><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="# "><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="# " ><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href="# "><i class="fa fa-behance"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="team-members">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Our Team Members</h2>
            </div>
          </div>
          <div class="col-md-4">
            <div class="team-member">
              <div class="thumb-container">
                <img src="assets/images/team_01.jpg" alt="" />
                <div class="hover-effect">
                  <HoverContent />
                </div>
              </div>
              <div class="down-content">
                <h4>Avinash Dod</h4>
                <span>CO-Founder</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="team-member">
              <div class="thumb-container">
                <img src="assets/images/IMG_20211204_133538.jpg" alt="" />
                <div class="hover-effect">
                  <div class="hover-content">
                    <ul class="social-icons">
                      <li><a href="# "><i class="fa fa-facebook"></i></a></li>
                      <li><a href="# "><i class="fa fa-twitter"></i></a></li>
                      <li><a href="# "><i class="fa fa-linkedin"></i></a></li>
                      <li><a href="# "><i class="fa fa-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="down-content">
                <h4>Himanshu Tomar</h4>
                <span>Product Expert</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="team-member">
              <div class="thumb-container">
                <img src="assets/images/team_03.jpg" alt="" />
                <div class="hover-effect">
                  <div class="hover-content">
                    <ul class="social-icons">
                      <li><a href="# "><i class="fa fa-facebook"></i></a></li>
                      <li><a href="# "><i class="fa fa-twitter"></i></a></li>
                      <li><a href="# "><i class="fa fa-linkedin"></i></a></li>
                      <li><a href="# "><i class="fa fa-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="down-content">
                <h4>Sakshi Tomar</h4>
                <span>Chief Marketing</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="team-member">
              <div class="thumb-container">
                <img src="assets/images/IMG_20211204_133616.jpg" alt="" />
                <div class="hover-effect">
                  <div class="hover-content">
                    <ul class="social-icons">
                      <li><a href="# "><i class="fa fa-facebook"></i></a></li>
                      <li><a href="# "><i class="fa fa-twitter"></i></a></li>
                      <li><a href="# "><i class="fa fa-linkedin"></i></a></li>
                      <li><a href="# "><i class="fa fa-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="down-content">
                <h4>Trapti Sharma</h4>
                <span>Product Specialist</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
              </div>
            </div>
          </div>
           </div>
      </div>
    </div>
    <Footer/>
        </>
    )

}
export default About;