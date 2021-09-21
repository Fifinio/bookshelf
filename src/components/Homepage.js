import Navbar from "./Navbar";
import { Container } from "semantic-ui-react";
import BookSegment from "./BookSegment";

const Homepage = () => {

    return (
        <Container>
            <Navbar/>
            <BookSegment title={'Fiction'} color={'blue'} subject={'fiction'} orderBy={'newest'} />
            <BookSegment title={'Horror'} color={'red'} subject={'horror'} orderBy={'newest'} />
            <BookSegment title={'Romance'} color={'orange'} subject={'romance'} orderBy={'newest'} />
            <BookSegment title={'Fantasy'} color={'purple'} subject={'fantasy'} orderBy={'newest'} />
            <BookSegment title={'Programming'} color={'yellow'} subject={'programming'} orderBy={'newest'} />
        </Container>
     );
}
 
export default Homepage;


//todos:
// BookModal