import { Card, Placeholder, Image, Icon } from "semantic-ui-react";
import BookModal from "./BookModal";
import { useState } from "react";

const BookCard = props => {

    const [showModal, setShowModal] = useState(false)


    return (
        <>
        <Card onClick={() => setShowModal(true)}>
            <Image ><Placeholder><Image src={props.image} size="large" /></Placeholder></Image>
            <Card.Content>
                <Card.Header>{props.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{props.publishedDate}</span>
                </Card.Meta>
                <Card.Description>{props.author}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='star'>Rating</Icon>    
            </Card.Content>
        </Card>
        <BookModal key="Modal1" open={showModal} onClose={() => setShowModal(false)} book={props.bookData}/>
        </>
     );
}
 
export default BookCard;