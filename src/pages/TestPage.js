import React, { Component } from 'react';
import "../css/stylesheet.css";
import { API, graphqlOperation } from 'aws-amplify';
import { Racerdata, asset } from "../graphql/queries";
import { onUpdateAsset } from "../graphql/subscriptions";

const addTodo = `mutation createTodo($name:String! $description: String!) {
  createTodo(input:{
    name:$name
    description:$description
  }){
    id
    name
    description
  }
}`

class TestPage extends Component {

  todoMutation = async () => {
    //change name and description to what you want to query to database
    const todoDetails = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value
    };
    
    const newEvent = await API.graphql(graphqlOperation(addTodo, todoDetails));
    alert(JSON.stringify(newEvent));
  }

  // listQuery = async () => {
  //   console.log('listing todos');
  //   const allTodos = await API.graphql(graphqlOperation(listTodos));
  //   alert(JSON.stringify(allTodos));
  // }

  listQuery = async () => {
    console.log('listing todos');
    const allTodos = await API.graphql(graphqlOperation(Racerdata));
    alert(JSON.stringify(allTodos));
  }

  listAsset = async () => {
    console.log('listing todos');
    const allTodos = await API.graphql(graphqlOperation(onUpdateAsset));
    // alert(JSON.stringify(allTodos));
    console.log(allTodos);
  }

  state = {users: [], error: ""}
  
  async componentDidMount(){
    const allRacerData = await API.graphql(graphqlOperation(Racerdata));

    this.setState({
      users: allRacerData.data.listRacerNj7uthp6pzfadg3eixfrzy5utmRaamenvs.items
    })

    // this.listAsset();
  //  await fetch("https://api.findmespot.com/spot-main-web/consumer/rest-api/2.0/public/feed/FEED_ID_HERE/message.json")
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //       console.log(result);
  //     },
  //     // Note: it's important to handle errors here
  //     // instead of a catch() block so that we don't swallow
  //     // exceptions from actual bugs in components.
  //     (error) => {
  //     console.log(error);
      
  //     }
  //   )

  }

  //this a temporary render method just to query data from database.
  render() {
    return (
      <div className="App">
          <input id="name" placeholder="Name"/>
          <input id="description" placeholder="Description"/>
        <button onClick={this.listQuery}>GraphQL Query</button>
        <button onClick={this.todoMutation}>GraphQL Mutation</button>
        <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Cadence</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              {
             this.state.users.map((user,index)=>(  
              <tbody>
               <tr key={index}>
                <td>{user.id}</td>
                <td>{user.cadence}</td>
                <td>{user.timestamp}</td>
                </tr>
            </tbody>         
          ))
        }
      </table>
    
      </div>
    );
  }

  // render() {
  //   return (
  //     //Fan experience page. This is the first page that will load. For Dashboard access for now 
  //     //we will have to add /dashboardRAAMforVIPaccess to out http

  //     //Removing the extact will show both the fan page and dash page together
  //     //which we might need later to avoid multiple same implementations.
  //     //For development purpose I have added the exact.
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <Switch>
  //           <Route path="/" component={FanPage} exact />
  //           <Route path="/FanData" component={FanDataPage} exact />
  //           <Route path="/dashboardRAAMforVIPaccess" component={DashboardPage} exact/>
  //           <Route component={ErrorPage} />
  //         </Switch>
  //       </BrowserRouter>
  //     </Provider>
  //   );
  // }

}

export default TestPage;
