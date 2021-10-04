import { Button, Container, Grid } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeCard from '../HomeCard/HomeCard';
import './Home.css';
const Home = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[]);
    const someCourse = courses.filter(course=> course.id%2===0);
    return (
        <div className='bg'>
        <Container fixed>
            <Grid container className='hero-section'>
                <Grid item xs={12} md={12}>
                    <h1 className='hero-title'>Learn new skills online <br /> with top educators</h1>
                    <p>Learn 100% online with world-class universities <br />  and industry experts.
                    </p>
                    <Button  size="large" className='btn btn-regular' variant="contained">Join Us</Button>
                </Grid>
            </Grid>
            <div className="home-courses">
            {
               someCourse.map(course => <HomeCard key={course.id} course={course}></HomeCard>)
            }
            </div>
        </Container>
    </div>
    );
};

export default Home;