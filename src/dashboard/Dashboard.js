import React, {Component} from 'react';
import EmployeeList from '../components/EmployeeList';
import {connect} from 'react-redux';

class Dashboard extends Component {
    render(){
        const {employees} = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col m12 s12">
                        <EmployeeList employees={employees}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employeedata.user
    }
}

export default connect(mapStateToProps, null)(Dashboard);