# Angular forms validation using template-driven  or fluent valdation
-   Now, We are build project structure:

![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image2/3(1).png)


**Angular forms validation using template-driven or fluent valdation.**

![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image2/2(1).png)

**Forms validation using template-driven** 

How to set up form validation in angular using Template-Driven. The registration form contains definitions of the field and types: first name, last name, email, password, confirm password. 

**I can build the description error for the fields below for me:**
 - The first name is required.
 - The last name is required
 - The email is required and must be a valid email address.
 - The password is required and must have a min length of 6.
 - The confirm password is custom validation and directive called  **MustMatch() method** which is used to validation that the confirm password show the same the password

![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image2/1.png)
![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image2/2.png)

This is implemented using the **f.submit** property of the **#f="ngForm"**  template variable which is true after the form is submitted for the first time.

## Template-Driven Forms Validation FormValidationComponent()

The FormValidationComponent() doesn't need much since the form **fields** and **validators** are defined in angular template-driven forms. The angular template-driven defined a model object which is bound to the form fields in the template to give you access to the data entered into the form.
![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image2/3.png)

**What** is template-driven form validaton ? **How** does  Template-Driven Forms Validation in FormValidationComponent work and **use it**? 

**The template-driven** form validation contains in all the html for displaying when we  submited in your browser. The form input fields use the **[(ngModel)]** directive to bind to properties of the model object in the component.

 **We are implemented using** the attribute such as : required , minlength, email, maxlength ,........,etc. The angular framework contains directives The match these attributes with **built-in validator** functions.
 
The forms bind data when we have submitted after that its event to the **onSubmit()** event handler  in the component using the angular event binding **(ngSubmit)='onSubmit'.** The validation message is displayed only after the user attempts to submit the form the first time.

## Template-Driven Forms Custom "Must Match" Validator

The custom **MustMatch()** validator is used that both of the password and confirm password are matching.

![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image2/4.png)

## Template-Driven Forms Custom "Must Match" Directive


![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image2/5.png)

The custom [MustMatch] validator so we can attach it to form. A custom validator directive is required when using template-dirven forms because we don't have direct access to the **FormGroup** like in reactive forms

The directive implements the validator interface and **NG_VALIDATORS** prodiver to let angular know that its a custom validator directive.
**[mustMatch]="['field1', 'field2']"** will validate the that field1 and field2 contains the same value,  otherwise a validaton error will be set on field2.




