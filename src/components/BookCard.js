import { Card,Placeholder,Image, Icon } from "semantic-ui-react";

const BookCard = (props) => {
    return ( 
        <Card>
            <Image><Placeholder><Placeholder.Image square/></Placeholder></Image>
            <Card.Content>
                <Card.Header>{props.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>Date of publish</span>
                </Card.Meta>
                <Card.Description>Author</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='star'>Rating</Icon>    
            </Card.Content>
        </Card>
     );
}
 
export default BookCard;