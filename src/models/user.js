class User {
    constructor(name, email){
        this.id = this.generate_uuid();
        this.name = name;
        this.email = email;
    }
    generate_uuid(){
        return crypto.randomUUID();
    }
}
module.exports = User;