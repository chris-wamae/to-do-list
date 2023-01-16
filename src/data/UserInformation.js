import React from "react";

class UserInformation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        firstName:"Johnny",
        lastName:"Joe",
        email:"johjobizarre@gmail.com",
        hobbies:["running","gaming","clubbing","bird watching"]
        }
      }
}