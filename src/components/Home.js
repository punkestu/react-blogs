// import { Button } from "bootstrap";
import React from "react";

import { Row, Col, Card, Button } from 'react-bootstrap';

export default function () {

      const [blogs, setBlogs] = React.useState({});
      const [loaded, setLoaded] = React.useState(false);
      const [segment, setSegment] = React.useState(1);
      const [nSegment, setNSegment] = React.useState(1);
      React.useEffect(() => {
            fetch("https://6260dcb4e7361dff91fb310d.mockapi.io/blogs", { method: "get" }).then(res => { return res.json() }).then(res => {
                  setBlogs(res);
                  setLoaded(true);
                  setNSegment(Math.floor(res.length / 6));
            });
      }, []);
      function cut(text) {
            // console.log(text[0])
            if (text.length >= 50) {
                  return text.substring(0, 50) + " ...";
            } else return text
      }
      return <>
            <Row className="d-flex flex-wrap m-2 justify-content-center">
                  {loaded ?
                        blogs.slice((segment-1)*6, segment * 6).map(element => {
                              return (
                                    <Card key={element.id} className="w-25 text-start m-1 py-2 px-3">
                                          <Card.Img variant="top" src={element.pic} />
                                          <Card.Body>
                                                <Card.Title>{element.title}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{element.subtitle}</Card.Subtitle>
                                                <Card.Text>{cut(element.description)}
                                                </Card.Text>
                                          </Card.Body>
                                          <Button>Read More &raquo;</Button>
                                    </Card>
                              )
                        })
                        : <div>Loading</div>
                  }
            </Row>
            <div className="d-flex justify-content-center align-items-center">
                  <Button onClick={()=>{
                        if(segment>1){
                              setSegment(segment-1);
                        }
                  }}>&lt;</Button>
                  <div className="text-dark mx-4">{segment}/{nSegment}</div>
                  <Button onClick={()=>{
                        if(segment<nSegment){
                              setSegment(segment+1);
                        }
                  }}>&gt;</Button>
            </div>
      </>;
};