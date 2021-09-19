import { Grid, Header, Segment, Placeholder, Image, Card } from "semantic-ui-react";
import BookCard from "./BookCard";

const BookSegment = (props) => {
    return ( 
        <Segment color={props.color}>
            <Header as='h3'>
                {props.title}
            </Header>
            <Grid relaxed columns={6}>
                <Grid.Column>
                    <BookCard />
                </Grid.Column>
                <Grid.Column>
                    <BookCard />
                </Grid.Column>
                <Grid.Column>
                    <BookCard />
                </Grid.Column>
                <Grid.Column>
                    <BookCard />
                </Grid.Column>
                <Grid.Column>
                    <BookCard />
                </Grid.Column>
                <Grid.Column>
                    <BookCard />
                </Grid.Column>
             
            </Grid>
        </Segment>
     );
}
 
export default BookSegment;