export const errorCheck = (type,value) => {
    
    switch(type){

        case "email":

            if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value) ) {
                return "Invalid e-mail format";
            }

        break;

        case "phone":
            if (! /(?=.*?[0-9])/.test(value) ) {
                return "Incorrect phone number";
            } 

        break;

        case "password":
        case "password2":

            if(value.length < 8){
                return "Write 8 characters at least"
            } else {

                //Checking the password format....

                if (! /[\d()+-]/g.test(value) ) {
                    return "Invalid password format";
                } 
            }

        break;
    }
};