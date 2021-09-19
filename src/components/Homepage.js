import Navbar from "./Navbar";
import { Container } from "semantic-ui-react";
import BookSegment from "./BookSegment";

const Homepage = () => {

    

    return ( 
        
        <Container>
            <Navbar/>
            <BookSegment title={'New books'} color={'red'} />
            <BookSegment title={'Top rated'} color={'teal'} />
            <BookSegment title={'Philosophy'} color={'blue'} />
            <BookSegment title={'Horror'} color={'Olive'} />
            <BookSegment title={'Programming'} color={'Brown'} />
        </Container>
     );
}
 
export default Homepage;