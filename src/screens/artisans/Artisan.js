import React from 'react';
import { Card, Button } from 'react-bootstrap';

export const Artisan = ({ artisan }) => {

    // const { banner_pic, name, service, detail_desc, contact } = artisan;
    return (
        <Card className="Artisan__card">
          <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYTsTAooieGT9PY7CibhWIg9SOLh-QmQm_1aO-xW-zrYIm3C0s&usqp=CAU" alt="Card image" />
          <Card.ImgOverlay className="Artisan__Overlay">
             <Card.Text>
               I'm the best web designer in the subsaharan Africa
             </Card.Text>
             <Button>Contact Me</Button>
          </Card.ImgOverlay>
          <Card.Body>
            <Card.Title> SERVICES </Card.Title>
            <Card.Subtitle> NAME <b>$45/hr</b></Card.Subtitle>
          </Card.Body>
        </Card>
    )
}

