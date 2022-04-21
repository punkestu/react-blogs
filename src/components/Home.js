// import { Button } from "bootstrap";
import React from "react";

import { Row, Col, Card, Button } from 'react-bootstrap';

export default function () {

      const [blogs, setBlogs] = React.useState({});
      const [loaded, setLoaded] = React.useState(false);
      React.useEffect(() => {
            fetch("https://6260dcb4e7361dff91fb310d.mockapi.io/blogs", { method: "get" }).then(res => { return res.json() }).then(res => { setBlogs(res); setLoaded(true); });
      }, []);
      function cut(text){
            // console.log(text[0])
            if(text.length >= 100){
                  return text.substring(0,100)+" ...";
            }else return text
      }
      return <>
            <Row className="mt-3 mx-2">
                  <Col md={8} className="me-md-5">
                        {loaded ?
                              blogs.map(element => {
                                    return (
                                          <Card key={element.id} className="text-start mb-2">
                                                <Card.Body>
                                                      {/* <Card.Img /> */}
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
                  </Col>
                  <Col className="d-md-block d-sm-none">side</Col>
            </Row>
      </>;
};