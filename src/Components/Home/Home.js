import React, {Component} from 'react';
import JSONData from '../../Indian-Cities-JSON/cities.json'


class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            data : JSONData,
            states : [],
            cities : [],
            selectedState : ''
        }

        this.stateClickHandler = this.stateClickHandler.bind(this);
        this.countCitiesInState = this.countCitiesInState.bind(this);

    }

    componentDidMount(){
        let stateArr = [];
        this.state.data.map((state) => {
            stateArr.push(state.state);
            return null;
        });
        this.setState({
            states : [...new Set(stateArr)]
        })
    }

    stateClickHandler(key){
        this.setState({
            selectedState : key
        });
        let cityArr = [];
        this.state.data.map((state) => {
            if(state.state === key){
                cityArr.push(state.name)
            }
            return null;
        });

        this.setState({
            cities : cityArr
        });
    }

    countCitiesInState(stateParam)
    {
        let stateArr = [];
        this.state.data.map((state) => {
            if(state.state === stateParam){
                stateArr.push(state.state)
            }
            return null;
        });
        return stateArr.length;
    }

    render(){
        return(
            <div>
                <h2>Home</h2>
                <table style ={{border:"1px solid black"}}>
                    <tbody>
                        {this.state.states ? this.state.states.map((state,index )=> 
                                (
                                    <tr  key={index}>
                                        <td style ={{border:"1px solid black"}} onClick={() => {this.stateClickHandler(state)}}><span>{state + ' ('+this.countCitiesInState(state)+ ')'}</span></td>
                                        <td style ={{border:"1px solid black"}}>
                                            <table>
                                                <tbody>
                                                    { state === this.state.selectedState ? this.state.cities.map((city) =>(
                                                        <tr key={city}>
                                                            <td style ={{border:"1px solid black"}}>{city}</td>
                                                        </tr>
                                                    )) : null}
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                
                            )) : null}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;