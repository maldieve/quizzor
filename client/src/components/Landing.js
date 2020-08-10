import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Dashboard from './Dashboard'; 
import {connect} from 'react-redux'; 
import {fetchCurrentUser} from '../actions/index'; 


class Landing extends Component{
  
  componentDidMount(){
    this.props.fetchCurrentUser();
  }

  renderComponent(){
    if(!this.props.auth){
      return(
        <div className="headerpage jumbotron">
        <div className="container">
          <h1 className="display-3">Welcome to QUIZZOR</h1>
          <b><p>"This is the beginning of a really cool quiz program.</p>
          </b>
          <p>
          <Link className="btn btn-primary btn-lg" to="login" role="button">
            login
          </Link>
          <Link className="btn btn-primary btn-lg" to="register" role="button">
            Register
          </Link>
          </p>
        </div>
  
        </div>  
      );
    }
    else{
      return(
        <Dashboard username={this.props.auth.username}/>
      );
    }
  }

  render(){
      return (
        <div>
           {this.renderComponent()}
        </div>
      )
    }
}

function mapStateToProps({auth}){
  return{
     auth: auth
  }
}

export default connect(mapStateToProps, {fetchCurrentUser})(Landing);