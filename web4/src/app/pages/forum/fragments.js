import {commentData} from "./commentData";


const fragments = () => {
    return (
        <div>
            <Tab eventKey="one" title="comment is card">
                <div>
                    <Card className="mt-3">
                        <Card.Header className="border-bottom-0 d-flex py-1 pl-1 align-items-center">
                            <img width="54px" height="54px" src={avatar} alt="Arnold Smrtka avatar"
                                 className="rounded-circle"/>
                            <h6 className="pl-3">{c1.author}
                                <small className="text-muted"> 12.11.2011</small>
                            </h6>
                        </Card.Header>
                        <Collapse in={open}>
                            <Card.Body>
                                <Card.Text as="div" style={{whiteSpace: 'pre-wrap'}}>
                                    {c1.text}
                                </Card.Text>

                                <Card className="mt-3">
                                    <Card.Header>Oskar Konopný
                                        <small className="text-muted"> 12.11.2011</small>
                                    </Card.Header>
                                    <Card.Body className="">
                                        <div className="d-flex">
                                            <img width="54px" height="54px" src={avatar} alt="Arnold Smrtka avatar"
                                                 className="rounded-circle mr-3"/>
                                            <Card.Text as="div" style={{whiteSpace: 'pre-wrap', width: '100%'}}>
                                                <p>
                                                    This is only a reply.
                                                </p>
                                                Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.
                                                Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                per inceptos hymenaeos. Duis condimentum augue id magna semper
                                                rutrum. Maecenas libero. Sed vel lectus. Donec odio tempus molestie,
                                                porttitor ut, iaculis quis, sem. Maecenas libero.
                                            </Card.Text>
                                        </div>

                                        <Card className="mt-3">
                                            <Card.Header>Oskar Rukojeť
                                                <small className="text-muted"> 13.11.2011</small>
                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Text as="div" style={{whiteSpace: 'pre-wrap'}}>
                                                    <p>
                                                        Replying to a reply.
                                                    </p>
                                                    Naecenas ipsum velit, consectetuer eu lobortis ut, dictum at
                                                    dui. Class aptent taciti sociosqu ad litora torquent per conubia
                                                    nostra, per inceptos hymenaeos. Duis condimentum augue id magna
                                                    semper rutrum. Maecenas libero. Sed vel lectus. Donec odio
                                                    tempus molestie, porttitor ut, iaculis quis, sem. Maecenas
                                                    libero.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>

                                        <Card className="mt-3">
                                            <Card.Header>Oskar Rukojeť
                                                <small className="text-muted"> 13.11.2011</small>
                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Text as="div" style={{whiteSpace: 'pre-wrap'}}>
                                                    Also this.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>

                                    </Card.Body>
                                </Card>

                            </Card.Body>
                        </Collapse>
                    </Card>
                    <Card className="mt-3">
                        <Card.Header>{c2.author}
                            <small className="text-muted"> 12.11.2011</small>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text as="div" style={{whiteSpace: 'pre-wrap'}}>
                                {c2.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Tab>
            <Tab eventKey="two" title="one card">
                <Card className="mt-3">
                    <Card.Header>Donec ipsum.</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h6>{c1.author}
                                <small>11.11.2023</small>
                            </h6>
                            <div style={{whiteSpace: 'pre-wrap'}}>
                                {c1.text}
                            </div>
                        </ListGroup.Item>
                        <ListGroup variant="flush" className="ml-5">
                            <ListGroup.Item className="ml-5">
                                <h6>Oskar Bueno <small> 12.11.2023</small></h6>
                                <div style={{whiteSpace: 'pre-wrap'}}>
                                    This is a reply.
                                </div>
                            </ListGroup.Item>
                            <ListGroup variant="flush" className="ml-5">
                                <ListGroup.Item className="ml-5">
                                    <h6>Oskar konopný
                                        <small> 13.11.2023</small>
                                    </h6>
                                    <div style={{whiteSpace: 'pre-wrap'}}>
                                        This is another reply.
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="ml-5">
                                    <h6>Karel Veliký
                                        <small> 14.11.2023</small>
                                    </h6>
                                    <div style={{whiteSpace: 'pre-wrap'}}>
                                        You don´t say.
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </ListGroup>
                        <ListGroup.Item>
                            <h6>{c2.author}
                                <small>11.12.1222</small>
                            </h6>
                            <div style={{whiteSpace: 'pre-wrap'}}>
                                {c2.text}
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Tab>
            <Tab>
                <div className="mt-3">
                    <Card>
                        <Card.Body>
                            <div className="d-flex">
                                <div className="pl-1">
                                    <div>
                                        <img width="55" height="55" src={avatar} alt="Arnold Smrtka avatar"
                                             className="rounded-circle"/>
                                    </div>
                                </div>
                                <div style={{whiteSpace: 'pre-wrap'}} className="pl-3 w-100">
                                    <h6 style={{whiteSpace: 'nowrap'}} className="text-nowrap mb-2">
                                        Arnold Smrtka
                                        <small> 12.11.1999</small>
                                    </h6>
                                    {commentData[0].text}
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="d-flex mt-3">
                    <div className="pl-1">
                        <div className="pt-2">
                            <img width="55" height="55" src={avatar} alt="Pavel Velmi avatar"
                                 className="rounded-circle"/>
                        </div>
                    </div>

                    <div style={{whiteSpace: 'pre-wrap', width: '100%'}} className="pl-3">
                        <h6 style={{whiteSpace: 'nowrap'}} className="text-nowrap mb-2">
                            Pavel Velmi
                            <small> 13.11.1999</small>
                        </h6>
                        {commentData[1].text}

                        <div className="border-left border-light">
                            <div className="d-flex mt-3">
                                <div className="pl-1" style={{width: '80px'}}>
                                    <div className="pt-2">
                                        <img width="55" height="55" src={avatar} alt="Pavel Velmi avatar"
                                             className="rounded-circle"/>
                                    </div>
                                </div>
                                <div style={{whiteSpace: 'pre-wrap', width: '100%'}} className="pl-3">
                                    <h6 style={{whiteSpace: 'nowrap'}} className="text-nowrap mb-2">
                                        Pavel Velmi
                                        <small> 13.11.1999</small>
                                    </h6>
                                    Reply: {commentData[1].text}
                                </div>
                            </div>

                            <div className="d-flex mt-3">
                                <div className="pl-1" style={{width: '80px'}}>
                                    <div className="pt-2">
                                        <img width="55" height="55" src={avatar} alt="oskar avatar"
                                             className="rounded-circle"/>
                                    </div>
                                </div>
                                <div style={{whiteSpace: 'pre-wrap', width: '100%'}} className="pl-3">
                                    <h6 style={{whiteSpace: 'nowrap'}} className="text-nowrap mb-2">
                                        Oskar Špatný
                                        <small> 14.11.1999</small>
                                    </h6>
                                    Another reply ...
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </Tab>
        </div>
    );
}