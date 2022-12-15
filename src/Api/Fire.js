import firebase from './firebaseConfig';
import 'firebase/compat/firestore';
import React, { useEffect, useState } from "react";

const Fire = () => {

  let [users, setUser] = useState([]);
  let [name, setName] = useState('');
  let [surname, setSurname] = useState('');
  
  const addUser = user =>{
    let flag = false;
    users.forEach(el=> {
      if(el.id === user.id){
        flag = true;
      }
    })
    if(!flag){
      setUser(curr=> [...curr, user]);
    }
  }

  useEffect(() => {
  firebase
    .firestore()
    .collection('form_data')
    .get()
    .then((response) => {
      response.docs.map((x) => ({
        id: x.id,
        name: x.data().firstname,
        surname: x.data().lastname
      })).forEach(doc => addUser(doc));
      });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    firebase.firestore().collection("form_data").add({
      firstname: name,
      lastname: surname,
    });
  
    console.log('ok');
    setName('');
    setSurname('');
  };

  return (
    <div>
      <fieldset>
        First name:<br/>
        <input type="text" name="firstname" onChange={(e) => setName(e.target.value)}/>
        <br/>
        Last name:<br/>
        <input type="text" name="lastname" onChange={(e) => setSurname(e.target.value)}/>
        <br/><br/>
        <input type="submit" value="Submit" onClick={submit}/>
      </fieldset>
      <thead>
          <tr>
          <th width="17%">Id</th>
          <th width="17%">Name</th>
          <th width="17%">Surname</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item) => (
          <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.surname}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default Fire;