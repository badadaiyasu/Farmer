import { Button } from "../components/ui/button";
import { ArrowRight, Store, Users } from "lucide-react";
import heroImage from "@/assets/hero-marketplace.jpg";

const Hero = () => {
  return (
    <section className="position-relative overflow-hidden bg-light">
      {/* Gradient Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100" 
           style={{
             background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)",
             zIndex: -1
           }} />
      
      <div className="container px-4 px-md-5 py-5 py-lg-6">
        <div className="row align-items-center gx-5 min-vh-80 py-5 py-lg-6">
          {/* Left Content Column */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="animate__animated animate__fadeInLeft">
              {/* Badge */}
              <div className="d-inline-flex align-items-center gap-2 px-3 py-2 mb-4 rounded-pill bg-primary bg-opacity-10 text-primary fw-medium">
                <span className="h-2 w-2 rounded-circle bg-primary animate__animated animate__pulse" />
                Empowering Ethiopian Farmers
              </div>

              {/* Main Heading */}
              <h1 className="display-3 fw-bold text-dark mb-4">
                Trade Directly,
                <br />
                <span className="text-gradient" style={{
                  background: "linear-gradient(90deg, #0d6efd, #6f42c1, #d63384)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                  Speak Your Language
                </span>
              </h1>

              {/* Description */}
              <p className="lead text-muted mb-5" style={{maxWidth: "540px"}}>
                Connect farmers and artisans with buyers across Ethiopia. No middlemen, no language barriers. 
                Full support in <strong className="text-dark">English</strong>, <strong className="text-dark">አማርኛ</strong>, and <strong className="text-dark">Afaan Oromoo</strong>.
              </p>

              {/* Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
                <Button 
                  size="lg" 
                  className="btn-primary btn-gradient px-5 py-3 fw-semibold shadow-lg border-0"
                  style={{
                    background: "linear-gradient(90deg, #0d6efd, #6f42c1)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(13, 110, 253, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  Start Buying
                  <ArrowRight className="ms-2" style={{transition: "transform 0.3s ease"}} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="btn-outline-primary px-5 py-3 fw-semibold border-2"
                  style={{
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.background = "rgba(13, 110, 253, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  I'm a Farmer
                </Button>
              </div>

              {/* Stats */}
              <div className="d-flex flex-wrap gap-5 pt-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-primary bg-opacity-10 rounded-3 p-3 d-flex align-items-center justify-content-center">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="h4 fw-bold text-dark mb-0">1,000+</div>
                    <div className="text-muted">Active Farmers</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="bg-success bg-opacity-10 rounded-3 p-3 d-flex align-items-center justify-content-center">
                    <Store className="text-success" size={24} />
                  </div>
                  <div>
                    <div className="h4 fw-bold text-dark mb-0">5,000+</div>
                    <div className="text-muted">Products Listed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="col-lg-6">
            <div className="position-relative animate__animated animate__fadeInRight">
              {/* Gradient Blur Effect */}
              <div 
                className="position-absolute top-50 start-50 translate-middle w-100 h-100 rounded-circle"
                style={{
                  background: "radial-gradient(circle, rgba(13, 110, 253, 0.2) 0%, transparent 70%)",
                  filter: "blur(40px)",
                  zIndex: 0
                }}
              />
              
              {/* Main Image */}
              <div className="position-relative z-1">
                <img
                  src={heroImage}
                  alt="Ethiopian farmers at a vibrant local marketplace"
                  className="img-fluid rounded-4 shadow-lg"
                  style={{
                    transform: "perspective(1000px) rotateY(-5deg)",
                    transition: "transform 0.5s ease",
                    border: "8px solid white"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg) scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "perspective(1000px) rotateY(-5deg) scale(1)";
                  }}
                />
                
                {/* Floating Elements */}
                <div 
                  className="position-absolute top-0 end-0 bg-white rounded-3 shadow-lg p-3 animate__animated animate__bounceIn"
                  style={{animationDelay: "0.5s", zIndex: 2, transform: "translate(30%, -30%)"}}
                >
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-success bg-opacity-10 rounded-circle p-2">
                      <span className="text-success fw-bold">✓</span>
                    </div>
                    <div>
                      <div className="small text-muted">Trusted</div>
                      <div className="fw-bold">100% Verified</div>
                    </div>
                  </div>
                </div>

                <div 
                  className="position-absolute bottom-0 start-0 bg-white rounded-3 shadow-lg p-3 animate__animated animate__bounceIn"
                  style={{animationDelay: "0.8s", zIndex: 2, transform: "translate(-30%, 30%)"}}
                >
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-warning bg-opacity-10 rounded-circle p-2">
                      <span className="text-warning fw-bold">⚡</span>
                    </div>
                    <div>
                      <div className="small text-muted">Fast</div>
                      <div className="fw-bold">24h Delivery</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div 
        className="position-absolute bottom-0 start-0 w-100"
        style={{
          height: "100px",
          background: "linear-gradient(to top, rgba(248, 249, 250, 1) 0%, rgba(248, 249, 250, 0) 100%)",
          zIndex: 1
        }}
      />
    </section>
  );
};

export default Hero;