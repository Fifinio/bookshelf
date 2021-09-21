import { Grid, Header, Segment } from "semantic-ui-react";
import BookCard from "./BookCard";
import { useState, useEffect } from "react";
import BookCardPlaceholder from "./BookCardPlaceholder";

const BookSegment = (props) => {

    const [booksData, setBooksData] = useState();
    const [loading, setLoading] = useState(true);
    const [maxResults, setMaxResults] = useState(5)
    const [laungage, setLanguage] = useState('en')


    const ApiKey= process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
    const QUERY = `https://www.googleapis.com/books/v1/volumes?q=subject:${props.subject}&orderBy=${props.orderBy}&maxResults=${maxResults}&langRestrict=${laungage}&key=${ApiKey}`
    
    useEffect(()=> {
         fetch(QUERY)
         .then(response => response.json())
         .then(result=>{
            setBooksData(result.items)
            setLoading(false)
        })
    }, [QUERY])
    
    if (loading) {
        return (
            <Segment color={props.color}>
                <Header as='h3'>
                    {props.title}
                </Header>
                <Grid relaxed columns={5}>
                        <Grid.Column>
                            <BookCardPlaceholder />
                        </Grid.Column>
                        <Grid.Column>
                            <BookCardPlaceholder />
                        </Grid.Column>  
                        <Grid.Column>
                            <BookCardPlaceholder />
                        </Grid.Column>  
                        <Grid.Column>
                            <BookCardPlaceholder />
                        </Grid.Column>  
                        <Grid.Column>
                            <BookCardPlaceholder />
                        </Grid.Column>    
                </Grid>
            </Segment>
        )
    }
    else {
        return ( 
            <Segment color={props.color}>
                <Header as='h3'>
                    {props.title}
                </Header>
                <Grid relaxed columns={5}>
                    {loading ? <h2>LOADING</h2> : 
                    booksData.map(book => (
                        <Grid.Column key={book.id}>
                            <BookCard 
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            publishedDate={book.volumeInfo.publishedDate}
                            image={book.volumeInfo.imageLinks.thumbnail} />
                        </Grid.Column>
                    ))
                    }             
                </Grid>
            </Segment>
         );
        }
    }
 
export default BookSegment;