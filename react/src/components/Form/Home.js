import React, { Component } from 'react'

import RouterElement from './Router';
import Navibar from './Navibar';
import { Navbar,Carousel } from 'react-bootstrap';
// import Courselist from '../Courselist';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './about.css'
import List from '../Courselist.json'





 export class Home extends Component {
            componentDidMount(){
                let name = this.props.match.params.name
                console.log(name)

                // List.map((List)=>{
                //   console.log(List.courseName)

                // })

            }
            
                constructor(props) {
                        super(props)
                    
                        this.state = {
                            
                        }
                    }
                    
     
            render() {
                return (
                    <div className="App">
                    <div><Navibar></Navibar></div>
                    {/* <img  height="450" width="1420" src={require('./Images/carosel-1.png')}  /> */}
                        <br/>
                    <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                height="350" width="1220"
                                src={require('./Images/elearning.jpg')}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>A Great Place To Learn</h3>
                                <p>A learning community dedicated to building respectful and responsible citizens and empowering all learners.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                height="350" width="1220"
                                src={require('./Images/machine-learing.jpg')}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h3>A Family Of Learning</h3>
                                <p>A community of lifelong learners,responsible global citizens, and champions of our own success.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                height="350" width="1220"
                                src={require('./Images/elearning-3.png')}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h3>Be safe. Be kind. Be smart.</h3>
                                <p>Committed to educating and nurturing all students so they may grow towards responsible global citizenship.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                </Carousel>



                        <br/>

                        <table>
                            <tr> 
                                <th>
                                    <tr>
                                        <Card style={{ width: '22rem' }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                    component="img"
                                                    alt="Contemplative Reptile"
                                                    height="140"
                                                    src={require('./Images/javalogo.jpg')}
                                                    // image="../components/Form/Images/python.png"
                                                    title="Contemplative Reptile"
                                                    />
                                                    <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Lizard
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                        across all continents except Antarctica
                                                    </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Button size="small" color="primary">
                                                    Share
                                                    </Button>
                                                    <Button size="small" color="primary">
                                                    Learn More
                                                    </Button>
                                                </CardActions>
                                                </Card> 
                                            </tr>
                                            </th>
                                    <th>
                                    <tr>
                                    <Card style={{ width: '22rem' }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                    component="img"
                                                    alt="Contemplative Reptile"
                                                    height="140"
                                                    src={require('./Images/pythonlogo.png')}
                                                    // image="../components/Form/Images/python.png"
                                                    title="Contemplative Reptile"
                                                    />
                                                    <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Lizard
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                        across all continents except Antarctica
                                                    </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Button size="small" color="primary">
                                                    Share
                                                    </Button>
                                                    <Button size="small" color="primary">
                                                    Learn More
                                                    </Button>
                                                </CardActions>
                                                </Card> 
                                                </tr>
                                            </th>
                                            <th>
                                    <tr>
                                    <Card style={{ width: '22rem' }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                    component="img"
                                                    alt="Contemplative Reptile"
                                                    height="140"
                                                    src={require('./Images/mongodb.jpeg')}
                                                    // image="../components/Form/Images/python.png"
                                                    title="Contemplative Reptile"
                                                    />
                                                    <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Lizard
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                        across all continents except Antarctica
                                                    </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Button size="small" color="primary">
                                                    Share
                                                    </Button>
                                                    <Button size="small" color="primary">
                                                    Learn More
                                                    </Button>
                                                </CardActions>
                                                </Card> 
                                                </tr>
                                            </th>


                                            <th>
                                    <tr>
                                    <Card style={{ width: '22rem' }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                    component="img"
                                                    alt="Contemplative Reptile"
                                                    height="140"
                                                    src={require('./Images/dotnet.jpg')}
                                                    // image="../components/Form/Images/python.png"
                                                    title="Contemplative Reptile"
                                                    />
                                                    <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Lizard
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                        across all continents except Antarctica
                                                    </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Button size="small" color="primary">
                                                    Share
                                                    </Button>
                                                    <Button size="small" color="primary">
                                                    Learn More
                                                    </Button>
                                                </CardActions>
                                                </Card> 
                                                </tr>
                                            </th>





                            </tr>
                        </table> 
                        <footer text-align="center"><p>&#169;2019 Copy Rights Reserved.</p></footer>
                    </div>
                )
    }
}

export default Home
