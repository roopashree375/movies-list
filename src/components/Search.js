import React,{Component} from "react";
import {Form,FormGroup,FormControl,ControlLabel,Button} from "react-bootstrap"
class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            query: ''
        };
    }
    search(){
        console.log("Movie: ",this.state.query);
    }
    render(){
        return(
            <div>
                <Form inline>
                    <FormGroup>
                        <ControlLabel>
                            Search
                        </ControlLabel>{" "}
                        <FormControl type="text" placeholder="Search for movies"
                        onChange={(event)=>this.setState({query:event.target.value})}></FormControl>{" "}
                        <Button bsStyle="primary" onClick={()=>this.search()}>Submit</Button>
                    </FormGroup>
                </Form>
            </div>
            
        )
    }
}

export default Search;