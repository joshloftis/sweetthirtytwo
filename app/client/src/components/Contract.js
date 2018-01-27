import React, {Component} from 'react';
import Header from './navheader';
import Contractlayout from './contractlayout';
import Avatar from './avatar';
import '../css/app.css';

class Contract extends Component {
    // state = {   cardbody: [       {         img: ,         name: ,
    // totalcost: ,       }]};

    render() {
        return (
            <div className="gridhome">
                <Header/>
                <Avatar/>
                <Contractlayout/>
            </div>
        );
    }
}

export default Contract;