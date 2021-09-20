import Navbar from "./Navbar";
import { Container } from "semantic-ui-react";
import BookSegment from "./BookSegment";
import { useEffect, useState } from "react";

const Homepage = () => {

    return (
        <Container>
            <Navbar/>
            <BookSegment title={'New books'} color={'red'} />
            <BookSegment title={'Top rated'} color={'teal'} />
            <BookSegment title={'Philosophy'} color={'blue'} />
            <BookSegment title={'Horror'} color={'olive'} />
            <BookSegment title={'Programming'} color={'brown'} />
        </Container>
     );
}
 
export default Homepage;