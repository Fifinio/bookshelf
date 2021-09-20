import { Card, Placeholder, Image } from "semantic-ui-react";

const BookCardPlaceholder = (props) => {
    return ( 
        <Card>
            <Image><Placeholder><Placeholder.Image square/></Placeholder></Image>
            <Card.Content>
                <Card.Header>
                    <Placeholder>
                        <Placeholder.Header>
                            <Placeholder.Line />
                            <Placeholder.Line length={'medium'}/>
                        </Placeholder.Header>
                    </Placeholder>
                </Card.Header>
                <Card.Meta>
                    <Placeholder>
                        <Placeholder.Line />
                    </Placeholder>
                </Card.Meta>
                <Card.Description>
                    <Placeholder>
                        <Placeholder.Line length={'medium'} />
                    </Placeholder>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Placeholder>
                    <Placeholder.Line length={'short'} />
                </Placeholder>    
            </Card.Content>
        </Card>
     );
}
 
export default BookCardPlaceholder;