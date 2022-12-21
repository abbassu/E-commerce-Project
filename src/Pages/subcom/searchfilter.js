import { computeStyles } from "@popperjs/core";
import React from "react";



const DEFULT_FILTER="title";

class SearchFilter extends React.Component {
    constructor(props){
        super(props)

        this.state={
            searchText:"",
            filterby:"title"
        }

    }

   async onresetform(e){
        console.log("aaaaaaaaaaaaaaaaaa")
        e.preventDefault();
        await this.setState({
            searchText:"",
            filterby:DEFULT_FILTER
        })

        if('onChange' in this.props){
            this.props.onChange(this.state.searchText,this.state.filterby);
        }
    }

    async onfilterselected(e){
        console.log("aaaaAAFFF");
        
        await this.setState({
            filterby:e.target.value
        })

        if('onChange' in this.props){
            this.props.onChange(this.state.searchText,this.state.filterby);
        }
    }

    async onSearchchange(e){
        console.log("aaaaAASSSS");

        await this.setState({
            searchText:e.target.value
        }, ()=> {
            if('onChange' in this.props){
                this.props.onChange(this.state.searchText,this.state.filterby);
            }
        })

        // or

        // if('onChange' in this.props){
        //     this.props.onChange(e.target.value);
        //    }

        // if('onChange' in this.props){
        //     this.props.onChange(this.state.searchText);
        //    }
    }

    render(){
        return(
            <div className="row">
                    <form className=" mt-4 ms-4 form-in-row">
                        <div className="col-lg-6 col-md-3 d-flex">
                            <div className="me-2 flex-grow-1" >
                                <input type="text"
                                value={this.state.searchText}
                                onChange={this.onSearchchange.bind(this)}
                                placeholder="Search"
                                className="form-control"/>
                            </div>

                            <div className="me-2 flex-grow-2">

                            <select 
                            className="form-select"
                            onChange={this.onfilterselected.bind(this)}
                            value={this.state.filterby}>
                                    <option value="title">By Title</option>
                                    <option value="desc">By Description</option>
                                    <option value="title-and-desc">By Title/Description</option>
                                </select>
                            </div>
                            <div className="btn btn-secondary flex-grow-2" onClick={this.onresetform.bind(this)}>Reset</div>
                        </div>
                    </form>
            </div>
        )
    }
}

export default SearchFilter