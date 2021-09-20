import { Grid, Header, Segment } from "semantic-ui-react";
import BookCard from "./BookCard";
import { useState, useEffect } from "react";

const BookSegment = (props) => {

    const [booksData, setBooksData] = useState();
    const [loading, setLoading] = useState(true);


    const ApiKey= process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
    const QUERY = `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=newest&key=${ApiKey}`

    useEffect(()=> {
         fetch(QUERY)
         .then(response => response.json())
         .then(result=>{
            setBooksData(result.items)
            setLoading(false)
        })
    }, [QUERY])
    

    return ( 
        <Segment color={props.color}>
            <Header as='h3'>
                {props.title}
            </Header>
            <Grid relaxed columns={6}>
                {loading ? <h2>LOADING</h2> : 
                booksData.map(book => (
                    <Grid.Column>
                        <BookCard title={book.volumeInfo.title} />
                    </Grid.Column>
                ))
                }             
            </Grid>
        </Segment>
     );
}
 
export default BookSegment;