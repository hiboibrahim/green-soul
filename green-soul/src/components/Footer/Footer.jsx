import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink
    
  
} from "../Footer/FooterStyles";
 
const Footer = () => {
    return (
        <Box>
           
            <FooterContainer>
                <Row>
                    <Column>
                        <FooterLink href="#">
                            About Us
                        </FooterLink>
                        <FooterLink href="#">
                            
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            
                        </FooterLink>
                       
                        
                    </Column>
                    <Column>
                        
                        <FooterLink href="#">
                            Our Projects
                        </FooterLink>
                        <FooterLink href="#">
                            
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            
                        </FooterLink>
                       
                      
                         
                    </Column>
                    <Column>
                
                        <FooterLink href="#">
                            Events
                        </FooterLink>
                      
                        <FooterLink href="#">
                            
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            
                        </FooterLink>
                      
                       
                    </Column>

                    <Column>
                        
                    <FooterLink href="#">
                            Contact Us 
                        </FooterLink>
                       
                        <FooterLink href="#">
                            Blog
                        </FooterLink>
                      
                        
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;