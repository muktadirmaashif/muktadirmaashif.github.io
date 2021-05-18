

function regexFunction() {
    let selectOption  = document.getElementById("select-regex");
    var re;
    let selectedIndex = selectOption.options[selectOption.selectedIndex].value;
    
    if(selectedIndex == 0) {
        alert("Please select a valid option!");
            
    } else {
        let selectedOption = selectOption.options[selectOption.selectedIndex].text;
        //console.log(selectedIndex, selectedOption);

        choice = prompt("enter the expression: ");
        //console.log(choice, typeof(choice));
        switch(selectedIndex) {
            case "1": //email address
                re = /^([a-zA-Z0-9](\.|\-|\_)?)+[^\.^\_^\-^\@]@[a-z\.]+[^\.^\_^\-^\!^\@^\#^\$^\&^\*]$/;
                //console.log(re.test(choice));
                break; 
            case "2": // Postal code
                re = /^[0-9]{4}$/;
                //console.log(re.test(choice));
                break;
            case "3": //Phone Number
                re = /^(\+88)?(88)?01[0-9]{9}$/;
                //console.log(re.test(choice));
                break;
            case "4": //html tag
                re = /^<\/?[a-z]+>$/;
                //console.log(re.test(choice));
                break;
            default: //empty
                //alert("Textbox is empty! Please try again!");
                break;
        }
        if(re.test(choice)) {
            alert("Your entered expression is valid. Congratulations!");
        } else {
            alert("Your entered expression is invalid! Please try again...")
        }
    
    }
    
    //console.log(selectOption);
  }

  

//let re;
//let str;

//postal code
//re = /^[0-9]{4}$/;
//str = "2220";

// phone number
//re = /^(\+88)?(88)?01[0-9]{9}$/;
//str = "01521443805";

//email address
//re = /^([a-zA-Z0-9](\.|\-|\_)?)+[^\.^\_^\-^\@]@[a-z\.]+[^\.^\_^\-^\!^\@^\#^\$^\&^\*]$/;
//str = "mmm1604116@askdlfhgaskdlf.com.bd.un";

// html tag
//re = /^<\/?[a-z]+>$/;
//str = "</div>";

//console.log(re.test(str));

//alert(selectOption.options[selectOption.selectedIndex].text);
