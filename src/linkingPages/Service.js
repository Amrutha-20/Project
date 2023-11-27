import React from 'react'
import Front from '../pages/front'
import "./service.css"
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import ActionAlerts from './material';
import Home from '../pages/home';

export default function Service() {
  
          function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const tiers = [
    {
      title: 'Free',
      price: '0',
      description: [
        'Limited posting.',
        'Simple on-page SEO.',
        'Help center access.',
        'Simple email design and content.',
      ],
      buttonText: 'Sign up for free',
      buttonVariant: 'outlined',
    },
    {
      title: 'Pro',
      subheader: 'Most popular',
      price: '15',
      description: [
        'Basic backlink building.',
        'Basic social media advertising.',
        'Goal tracking and analysis.',
        'Priority email support.',
      ],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
    {
      title: 'Enterprise',
      price: '30',
      description: [
        'Strategy adjustment based on data analysis.',
        'Ongoing backlink building and outreach.',
        'Phone & email support.',
      ],
      buttonText: 'Contact us',
      buttonVariant: 'outlined',
    },
  ];
  
  const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: [
        'Cool stuff',
        'Random feature',
        'Team feature',
        'Developer stuff',
        'Another one',
      ],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];
  
  // TODO remove, this demo shouldn't need to reset the theme.
  const defaultTheme = createTheme();
  return (
    <div className='boy'>
          <Front />
        <section className="ser">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section">
                  <span>
                    <h1 className="H1" style={{fontWeight:"900",textDecoration:"underline",color:"white"}}>
                     Our Services
                    </h1>
                  </span>
                  <h2 className="H2">Our Repute Digital Marketing Services<br></br>
                    <span style={{color:"#001f3f",fontWeight:"600"}}>Level up your online marketing strategy</span>
                  </h2>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-ser">
                <div className="servicegrid">
                  <div className="grid">
                    <div className="imghold">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjWOc2NTLJmNlkiEFYxC_zbVclFAyK5VN-eR5rNCFC0muhtcjukySgexbrDSI9xCeQrI&usqp=CAU"/>
                    </div>
                    <div className="details">
                      <h3 className="H3">
                        <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwfUzdSEJ6gfljmEFTwjZU6e3Z9Ia6faEBDw&usqp=CAU">BRANDING</a>
                      </h3>
                      <p className="PARIS">Develop customized branding solutions for business<br/> by creating a unique logo, a brand identity <br/>which is recognised and remembered by your target audience.</p>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="imghold">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBxdJZm6Q38NcBJd_vWDrHQKXvp4_ofMxs3A&usqp=CAU"/>
                    </div>
                    <div className="details">
                      <h3 className="H3">
                        <a href="">LOGO DESIGN</a>
                      </h3>
                      <p className="PARIS">Does your business need to be recognised by your audience? We provide<br/>professional designed logos that establish trust, define your brand, and<br/>link you with customers.</p>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="imghold">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDE0Ji-6dsbr5zaGJ9YbZGtHfx7JFcXooXg&usqp=CAU"/>
                    </div>
                    <div className="details">
                      <h3 className="H3">
                        <a href="">BROCHERE DESIGN</a>
                      </h3>
                      <p className="PARIS">We help you in designing the brochure that advertises your brand,<br/> product or services. It provides the highlights of your product, <br/>shopping benefits, and what you sell in a digital format.</p>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="imghold">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0voUU5B-N9oSSz8UkuvZO5aBM79pMr6ibcQ&usqp=CAU"/>
                    </div>
                    <div className="details">
                      <h3 className="H3">
                        <a href="">WEBSITE DESIGN</a>
                      </h3>
                      <p className="PARIS">Website design sets the impression on your business. We design<br/> websites for businesses that help them stay one step ahead<br/> of the competition, boost sales, and establish credibility.</p>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="imghold">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAmsOvZzX8RYbBF3BlwPlFYOnv78YKmAasew&usqp=CAU"/>
                    </div>
                    <div className="details">
                      <h3 className="H3">
                        <a href="">CMS WEBSITE DEVELOPMENT</a>
                      </h3>
                    <p className="PARIS">A Content Management System for your website is one solution it <br/>allows you to create, manage, revise and publish. Now you don’t <br/>need to worry about the lack of coding knowledge to develop a website.</p>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="imghold">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9PooxWxkpXrRdnMcJheCLRfXd6lYqcq56ztiS5AlN4eH8_Oyw6ZeyNDJHwkDbfI6Wno&usqp=CAU"/>
                    </div>
                    <div className="details">
                      <h3 className="H3">
                        <a href="">eCommerce Website Development</a>
                      </h3>
                      <p className="PARIS">Ensure your business has an eCommerce online store other<br/> than a physical one. We develop your online store<br/> that increases your ROI.</p>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="imghold">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZELpJPCGTu60O18xtHD6aWFrnv7FrQmJDA&usqp=CAU"/>
                    </div>
                    <div className="details">
                      <h3 className="H3">
                        <a href="">Search Engine Optimization</a>
                      </h3>
                      <p className="PARIS">To get high positions in Google search results, we<br/> perform keyword analysis, copywriting, employ <br/>white-hat techniques, and optimisation <br/>strategies on web pages and blog posts.</p>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="imghold">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCLrViFufLbauUGCpN2yci0ULsn0P42TxfTg&usqp=CAU"/>
                    </div>
                    <div className="details">
                      <h3 className="H3">
                        <a href="">Social Media Marketing</a>
                      </h3>
                      <p className="PARIS">Gain more followers and likes, increase <br/>engagement, and drive more traffic to the <br/>business website with the support of the #1<br/> social media marketing firm in Coimbatore.</p>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="imghold">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr6X5P9lNTSapwlfrZHmfYYzTH4UwimJaiKw&usqp=CAU"/>
                    </div>
                    <div className="details">
                      <h3 className="H3">
                        <a href="">Pay-Per-Click</a>
                      </h3>
                      <p className="PARIS">Strategies to gain immediate traffic and <br/>conversions through PPC campaigns and ensure <br/>that the money invested is used efficiently.</p>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="imghold">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9eK0fC4LOzKvnDT8tIvvFa36A4Nek2p7cA&usqp=CAU"/>
                    </div>
                    <div className="details">
                      <h3 className="H3">
                        <a href="">Mobile App Development</a>
                      </h3>
                      <p className="PARIS">Mobile apps are a convenient way to stay in <br/>touch with customers. We develop mobile apps<br/> for businesses that are available in Android, and<br/> iOS and designed to run in native or cross-platform.</p>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="imghold">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS-W3riUyHq9tAIoBvGHhtYB4lTLgTdUtphg&usqp=CAU"/>
                    </div>
                    <div className="details">
                      <h3 className="H3">
                        <a href="">Amazon Listing Services/ Marketplace</a>
                      </h3>
                      <p className="PARIS">Now customers can easily discover your <br/>products in a big marketplace. We help <br/>businesses to list their products on Amazon,<br/> Myntra, Meesho and related eCommerce platforms.</p>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="imghold">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz67FBs92muanvgCpc7D20Zf4qIh1xkNdnow&usqp=CAU"/>
                    </div>
                    <div className="details">
                      <h3 className="H3">
                        <a href="">Corporate Video</a>
                      </h3>
                      <p className="PARIS">Reach your audience through a powerful video<br/> that tells your story, and the message you need <br/>to convey or share business goals and stay<br/> connected with your target audience.</p>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </section>



    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          
          
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Our Pricing
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Quickly build an effective pricing table for your potential customers with
          this layout. It&apos;s built with default MUI components with little
          customization.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
     
      {/* End footer */}
    </ThemeProvider>
  
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>




            <div id="hft" >
        <div >
          <h2 style={{color:"white",fontWeight:"900"}}>About Us</h2>
          <p >
          Fueling digital dreams with a sprinkle of creativity and a dash of strategy, DigitalDreams is not your average marketing team—we're the storytellers, trendsetters, and magic-makers in the digital realm
          </p>
        </div>

       
        <div>
          <h2 style={{color:"white",fontWeight:"900"}}>Contact Us</h2>
          <p >
            Email: info@example.com
            <br/>
            Phone: +1 123 456 7890
          </p>
        </div>

        <div >
          <h2  style={{color:"white",fontWeight:"900"}}>Follow Us</h2>
          <div className="social-icons">
            <div>
            <a href="https://www.facebook.com" target="_blank" >
              <FaFacebook  className='ic'/>
            </a>
            </div>
            <div>

            <a href="https://www.twitter.com" target="_blank">
              <FaTwitter  className='ic'/>
            </a>
            </div>
            <div>
              
            <a href="https://www.linkedin.com" target="_blank">
              <FaLinkedin className='ic'/>
            </a>
            </div>
            <div>

            <a href="https://www.instagram.com" target="_blank">
              <FaInstagram className='ic'/>
            </a>
            </div>
          </div>
        </div>

      
        </div>

        </div>
    
  )
}
