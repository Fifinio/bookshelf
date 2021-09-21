import { Card,Placeholder,Image, Icon } from "semantic-ui-react";

const BookCard = (props) => {
    return ( 
        <Card>
            <Image><Placeholder><Image src={props.image} size="large" /></Placeholder></Image>
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
     );
}
 
export default BookCard;