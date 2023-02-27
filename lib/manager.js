const Employee = require('./employee')

class Manager extends Employee {
    super(officeNumber){
        this.officeNumber = officeNumber
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return 'Manager'
    }
}

module.exports = Manager