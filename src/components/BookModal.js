import { useState } from "react";
import { Modal, Image, Header, Grid, Segment, Divider, Icon, Label, Button, Accordion, List } from "semantic-ui-react";

const BookModal = props => {

  const { book } = props;
  const [accordionState, setAccordionState] = useState(1);

  const bookAuthors = book.volumeInfo.authors.map(author => ( <Label>{author}</Label>))

  const handleAccordionClick = (number) => {
    const index = number; //0
    const activeIndex = accordionState // -1 
    const newIndex = activeIndex === index ? -1 : index

    setAccordionState(newIndex)
  }

    return ( 
        <Modal
          closeIcon
          dimmer={"blurring"}
          onClose={props.onClose}
          open={props.open}
           >

            <Modal.Header>
              Book Details
            </Modal.Header>
            <Modal.Content>
              <Grid>
                <Grid.Column width={5}>
                  <Image src={book.volumeInfo.imageLinks.thumbnail} size="medium" />
                </Grid.Column>
                <Grid.Column width={11}>
                    <Header>
                      <h1>{book.volumeInfo.title}</h1>
                      <h3>{book.volumeInfo.subtitle}</h3>
                      </Header>
                      <Divider />
                      <Modal.Content>
                          <Grid columns={2}>
                            <Grid.Column>
                              <p><strong>{bookAuthors.length > 1 ? <span>Authors: </span> : <span>Author: </span>}{bookAuthors}</strong></p>
                              <p><strong>Publisher: <Label color={'blue'}>{book.volumeInfo.publisher}</Label></strong></p>
                              <Label color="blue"><Icon name="calendar" /> {book.volumeInfo.publishedDate}</Label>
                              <Label color="teal"> <Icon name="book" /> {book.volumeInfo.pageCount} pages </Label>
                                <Accordion>
                                  <Accordion.Title
                                    active={accordionState === 0}
                                    index={0}
                                    onClick={() => handleAccordionClick(0)}
                                  >
                                      <Icon name='dropdown' /> Details
                                    </Accordion.Title>
                                    <Accordion.Content active={accordionState === 0}>
                                      <List>
                                        <List.Item><strong>Type: </strong> {book.volumeInfo.industryIdentifiers[0].type}</List.Item>
                                        <List.Item><strong>Identifier: </strong> {book.volumeInfo.industryIdentifiers[0].identifier}</List.Item>
                                        <List.Item><strong>Language: </strong> {book.volumeInfo.language}</List.Item>
                                        
                                      </List>
                                    </Accordion.Content>
                                </Accordion>

                            </Grid.Column>
                            <Grid.Column>

                            </Grid.Column>
                          </Grid>
                            <Segment>
                              <h3>Description:</h3>
                              <p>
                                {book.volumeInfo.description}
                              </p>
                            </Segment>
                      </Modal.Content>
                </Grid.Column>
              </Grid>
            </Modal.Content>
            <Modal.Actions>
              <Header textAlign={'center'}>
                <h3>Add book to list:</h3>
              </Header>
            <Grid columns={3} textAlign={'center'}>
                <Grid.Column>
                <Button size={'big'} icon labelPosition='left' color={'blue'}><Icon name='archive'/>To Read</Button>
                </Grid.Column>
                <Grid.Column>
                <Button size={'big'} icon labelPosition='left' color={'teal'}><Icon name='book'/>Reading</Button>
                </Grid.Column>
                <Grid.Column>
                <Button size={'big'} icon labelPosition='left' color={'green'}><Icon name='thumbs up outline'/>Readed</Button>
                </Grid.Column>
                </Grid>
            </Modal.Actions>

        </Modal>
     );
}

export default BookModal;