const UsersApi ={
    users:[
        {number: 1, email: "Prop", password: "prop", name: "Aleksandr", surname: "Lor"},
        {number: 2, email: "Lorp", password: "prop", name: "Sushi", surname: "Kwas"},
    ],

    all: function(){return this.users},
    isUsers: function(email, password){
        const user = p=> p.email === email && p.password === password;
        if (this.users.find(user) != null){
            return true;
        } else return false;
    },
}

export default UsersApi;