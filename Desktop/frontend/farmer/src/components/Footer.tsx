import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Globe, Heart, ArrowUp } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail("");
    }
  };

  // Color definitions
  const colors = {
    primary: "#800080", // Deep purple
    secondary: "#5218fa", // Bright purple-blue
    gradient: "linear-gradient(135deg, #800080 0%, #5218fa 100%)",
    lightBg: "rgba(128, 0, 128, 0.05)",
    hoverLight: "rgba(128, 0, 128, 0.1)",
    badgeBg: "rgba(82, 24, 250, 0.1)",
    badgeBorder: "rgba(82, 24, 250, 0.3)",
    textMuted: "rgba(255, 255, 255, 0.75)",
    darkBg: "#121212",
    borderColor: "rgba(255, 255, 255, 0.1)"
  };

  // Link data
  const buyerLinks = [
    "Browse Products",
    "How to Buy", 
    "Safety Guidelines", 
    "FAQs", 
    "Customer Reviews",
    "Payment Methods"
  ];

  const farmerLinks = [
    "Register Now", 
    "Selling Guide", 
    "Success Stories", 
    "Support Center", 
    "Pricing Plans",
    "Resources"
  ];

  return (
    <footer 
      id="about" 
      style={{
        backgroundColor: colors.darkBg,
        color: "white",
        borderTop: `1px solid ${colors.borderColor}`
      }}
    >
      {/* Horizontal Main Content */}
      <div style={{
        width: "100%",
        padding: "0 16px"
      }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          margin: 0
        }}>
          {/* Left Column - Brand & Contact */}
          <div style={{
            width: "25%",
            borderRight: `1px solid ${colors.borderColor}`,
            minHeight: "400px"
          }}>
            <div style={{
              padding: "32px",
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}>
              {/* Brand */}
              <div style={{ marginBottom: "40px" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "16px"
                }}>
                  <div 
                    style={{
                      borderRadius: "12px",
                      padding: "8px",
                      background: colors.gradient
                    }}
                  >
                    <span style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "24px"
                    }}>FC</span>
                  </div>
                  <div>
                    <h2 style={{
                      color: "white",
                      fontWeight: "bold",
                      margin: 0,
                      fontSize: "28px"
                    }}>FarmConnect</h2>
                    <small style={{
                      color: "rgba(255, 255, 255, 0.5)"
                    }}>Ethiopia</small>
                  </div>
                </div>
                <p style={{
                  color: colors.textMuted,
                  lineHeight: "1.6",
                  fontSize: "14px",
                  margin: 0
                }}>
                  Empowering Ethiopian farmers and artisans through direct trade and multilingual support.
                </p>
              </div>

              {/* Contact Info */}
              <div style={{ marginTop: "auto" }}>
                <h6 style={{
                  color: "white",
                  marginBottom: "12px",
                  fontWeight: "bold"
                }}>Get in Touch</h6>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    { icon: Mail, text: "hello@farmconnect.et", href: "mailto:hello@farmconnect.et" },
                    { icon: Phone, text: "+251 911 123 456", href: "tel:+251911123456" },
                    { icon: MapPin, text: "Addis Ababa, Ethiopia", href: "#" }
                  ].map((contact, index) => (
                    <li key={index} style={{
                      marginBottom: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px"
                    }}>
                      <div 
                        style={{
                          borderRadius: "50%",
                          padding: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: colors.lightBg,
                          width: "36px",
                          height: "36px",
                          flexShrink: 0
                        }}
                      >
                        <contact.icon size={16} style={{ color: colors.secondary }} />
                      </div>
                      <div>
                        <a 
                          href={contact.href} 
                          style={{
                            color: colors.textMuted,
                            textDecoration: "none",
                            transition: "color 0.3s ease",
                            fontSize: "14px",
                            display: "block"
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = colors.secondary}
                          onMouseLeave={(e) => e.currentTarget.style.color = colors.textMuted}
                        >
                          {contact.text}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Center Column - Horizontal Links Layout */}
          <div style={{
            width: "50%",
            borderRight: `1px solid ${colors.borderColor}`,
            minHeight: "400px"
          }}>
            <div style={{
              padding: "32px",
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}>
              {/* Horizontal Links Section */}
              <div style={{ marginBottom: "40px" }}>
                <div style={{
                  display: "flex",
                  gap: "32px"
                }}>
                  {/* For Buyers Column */}
                  <div style={{ flex: 1 }}>
                    <h5 style={{
                      color: "white",
                      fontWeight: "bold",
                      marginBottom: "16px",
                      fontSize: "16px"
                    }}>
                      For Buyers
                    </h5>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px 16px"
                    }}>
                      {buyerLinks.map((item) => (
                        <a 
                          key={item}
                          href="#" 
                          style={{
                            color: colors.textMuted,
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                            padding: "4px 0",
                            fontSize: "14px",
                            lineHeight: "1.4",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "4px"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = colors.secondary;
                            e.currentTarget.style.paddingLeft = "4px";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = colors.textMuted;
                            e.currentTarget.style.paddingLeft = "0";
                          }}
                        >
                          <span style={{ 
                            color: colors.secondary, 
                            fontSize: "14px",
                            lineHeight: "1.4"
                          }}>›</span> 
                          <span>{item}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* For Farmers Column */}
                  <div style={{ flex: 1 }}>
                    <h5 style={{
                      color: "white",
                      fontWeight: "bold",
                      marginBottom: "16px",
                      fontSize: "16px"
                    }}>
                      For Farmers
                    </h5>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px 16px"
                    }}>
                      {farmerLinks.map((item) => (
                        <a 
                          key={item}
                          href="#" 
                          style={{
                            color: colors.textMuted,
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                            padding: "4px 0",
                            fontSize: "14px",
                            lineHeight: "1.4",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "4px"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = colors.secondary;
                            e.currentTarget.style.paddingLeft = "4px";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = colors.textMuted;
                            e.currentTarget.style.paddingLeft = "0";
                          }}
                        >
                          <span style={{ 
                            color: colors.secondary, 
                            fontSize: "14px",
                            lineHeight: "1.4"
                          }}>›</span> 
                          <span>{item}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div style={{
                marginTop: "auto",
                paddingTop: "16px",
                borderTop: `1px solid ${colors.borderColor}`
              }}>
                <h6 style={{
                  color: "white",
                  marginBottom: "12px",
                  fontWeight: "bold"
                }}>📬 Subscribe to Newsletter</h6>
                <form onSubmit={handleSubscribe} style={{
                  display: "flex",
                  gap: "8px"
                }}>
                  <input
                    type="email"
                    style={{
                      flex: 1,
                      padding: "10px 12px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: `1px solid rgba(128, 0, 128, 0.3)`,
                      color: "white",
                      fontSize: "14px",
                      borderRadius: "6px",
                      outline: "none"
                    }}
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button 
                    type="submit" 
                    style={{
                      background: colors.gradient,
                      border: "none",
                      color: "white",
                      fontWeight: "500",
                      minWidth: "100px",
                      fontSize: "14px",
                      padding: "10px 16px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column - Social & Language */}
          <div style={{
            width: "25%",
            minHeight: "400px"
          }}>
            <div style={{
              padding: "32px",
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}>
              {/* Language Support */}
              <div style={{ marginBottom: "40px" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "12px"
                }}>
                  <Globe size={20} style={{ color: colors.secondary }} />
                  <h6 style={{
                    color: "white",
                    margin: 0,
                    fontWeight: "bold"
                  }}>Multilingual Support</h6>
                </div>
                
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "12px"
                }}>
                  {["English", "አማርኛ", "Afaan Oromoo", "ትግርኛ", "Soomaali", "Afar"].map((lang) => (
                    <span 
                      key={lang}
                      style={{
                        background: colors.badgeBg,
                        border: `1px solid ${colors.badgeBorder}`,
                        color: colors.secondary,
                        transition: "all 0.3s ease",
                        fontSize: "12px",
                        padding: "8px 12px",
                        borderRadius: "20px",
                        display: "inline-block"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(82, 24, 250, 0.2)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = colors.badgeBg;
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
                
                <small style={{
                  color: colors.textMuted,
                  fontSize: "12px"
                }}>
                  Full support in all major Ethiopian languages
                </small>
              </div>

              {/* Social Media */}
              <div style={{ marginTop: "auto" }}>
                <h6 style={{
                  color: "white",
                  marginBottom: "12px",
                  fontWeight: "bold"
                }}>Follow Us</h6>
                <div style={{
                  display: "flex",
                  gap: "8px"
                }}>
                  {[
                    { icon: Facebook, label: "Facebook", color: "#1877F2", href: "#" },
                    { icon: Twitter, label: "Twitter", color: "#1DA1F2", href: "#" },
                    { icon: Instagram, label: "Instagram", color: "#E4405F", href: "#" }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={`Visit our ${social.label} page`}
                      style={{
                        width: "44px",
                        height: "44px",
                        border: `1px solid ${social.color}`,
                        transition: "all 0.3s ease",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        background: "transparent"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = social.color;
                        e.currentTarget.style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <social.icon size={20} color={social.color} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: `1px solid ${colors.borderColor}`,
        paddingTop: "12px",
        paddingBottom: "12px"
      }}>
        <div style={{
          width: "100%",
          padding: "0 16px"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap"
          }}>
            <div style={{
              marginBottom: "8px"
            }}>
              <p style={{
                color: colors.textMuted,
                margin: 0,
                fontSize: "14px"
              }}>
                &copy; {new Date().getFullYear()} FarmConnect Ethiopia. All rights reserved.
              </p>
            </div>
            <div>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                justifyContent: "flex-end"
              }}>
                {["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"].map((item) => (
                  <a 
                    key={item} 
                    href="#" 
                    style={{
                      color: colors.textMuted,
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                      fontSize: "14px"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.secondary}
                    onMouseLeave={(e) => e.currentTarget.style.color = colors.textMuted}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Made with love */}
          <div style={{
            textAlign: "center",
            marginTop: "12px",
            paddingTop: "8px",
            borderTop: `1px solid ${colors.borderColor}`
          }}>
            <p style={{
              color: colors.textMuted,
              margin: 0,
              fontSize: "14px"
            }}>
              <Heart 
                size={14} 
                style={{ 
                  color: "#ff4757",
                  animation: "heartbeat 1.5s infinite",
                  display: "inline-block",
                  margin: "0 4px",
                  verticalAlign: "middle"
                }}
              />
              Built with passion for Ethiopian communities
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        style={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
          width: "48px",
          height: "48px",
          background: colors.gradient,
          border: "none",
          zIndex: 1000,
          transition: "transform 0.3s ease",
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <ArrowUp size={20} color="white" />
      </button>

      {/* CSS Animation */}
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        /* Responsive styles */
        @media (max-width: 1200px) {
          footer > div > div > div {
            width: 33.333% !important;
          }
        }
        
        @media (max-width: 992px) {
          footer > div > div > div {
            width: 50% !important;
            border-right: none !important;
            border-bottom: 1px solid ${colors.borderColor} !important;
          }
          
          footer > div > div {
            flex-direction: column;
          }
        }
        
        @media (max-width: 768px) {
          footer > div > div > div {
            width: 100% !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;