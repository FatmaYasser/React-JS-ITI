export class Validator {
    constructor(form, errors) {
        this.form = form
        this.errors = errors
    }

    validate() {
        console.log(this.form)
        let errors = { valid: false };
        //all
        if (!this.form['username'] || !this.form['email'] || !this.form['password'] || !this.form['phone'] || !this.form['selector']) {

            //username
            if (!this.form["username"]) {
                errors["username"] = "Please enter your username.";
                this.errors = errors

            } else if (typeof this.form["username"] !== "undefined") {
                if (!this.form["username"].match(/^[a-zA-Z ]*$/)) {
                    errors["username"] = "Please enter alphabet characters only.";
                    this.errors = errors

                }
            }

            //email
            if (!this.form["email"]) {
                errors["email"] = "Please enter your email";
                this.errors = errors
            } else if (typeof this.form["email"] !== "undefined") {
                //regular expression for email validation
                var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                if (!pattern.test(this.form["email"])) {
                    this.counter++
                    errors["email"] = "Please enter valid email";
                    this.errors = errors
                }
            }

            //password
            if (!this.form["password"]) {
                errors["password"] = "Please enter your password.";
                this.errors = errors

            } else if (typeof this.form["password"] !== "undefined") {
                if (!this.form["password"].match(/^[a-zA-z0-9]*(?=.*?[#?!@$%^&*-])[a-zA-z0-9]*.{6}$/)) {
                    errors["password"] = "Please enter password have at least 6 char having one special char.";
                    this.errors = errors


                }
            }

            //phone
            if (!this.form["phone"]) {
                errors["phone"] = "Please enter your phone.";
                this.errors = errors
            } else if (typeof this.form["phone"] !== "undefined") {
                if (!this.form["phone"].match(/^[0-9]{11}$/)) {
                    errors["phone"] = "Please enter valid number.";
                    this.errors = errors

                }
            }

            //select
            if (!this.form["selector"]) {
                errors["selector"] = "Please enter your language.";
                this.errors = errors


            }
            //no Error
        } else {
            this.errors = { valid: true }
            return this.errors
        }

        return this.errors = errors

    }

}