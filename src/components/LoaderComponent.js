import { Segment, Dimmer, Loader } from "semantic-ui-react";

const LoaderComponent = () => {
    return ( 
        <Segment>
            <Dimmer active>
                <Loader />
            </Dimmer>
        </Segment>
     );
}
 
export default LoaderComponent;