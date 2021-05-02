class calculator {
    expression = "";
    constructor(calculatorName, whereTo) {

        this.calculatorHeading = document.createElement('h1');
        this.calculatorHeading.setAttribute("style"," margin-top : 100px;");
        this.calculatorHeading.innerHTML = "Calculator Name : " + calculatorName;
        document.querySelector(whereTo).append(this.calculatorHeading);

        this.mainElement = document.createElement('div');
        this.mainElement.className = calculatorName;
        this.mainElement.setAttribute("style","display:flex; ");
        document.querySelector(whereTo).append(this.mainElement);        

        this.calculatorBox = document.createElement('div');
        this.calculatorBox.className = 'calculator-box';
        this.mainElement.append(this.calculatorBox);

        this.inputElement = document.createElement('input');
        this.inputElement.type = 'text';
        this.inputElement.id = "calculationArea"
        this.inputElement.className = "calculation-area";
        this.calculatorBox.append(this.inputElement);

        this.buttonInputSection = document.createElement('div');
        this.buttonInputSection.className = "input-section";
        this.calculatorBox.append(this.buttonInputSection);


        // Operand Section
        this.buttonInputOperandSection = document.createElement('div');
        this.buttonInputOperandSection.className = "operand-section";
        this.buttonInputSection.append(this.buttonInputOperandSection);

        this.button9 = document.createElement('button');
        this.button9.id = "9";
        this.button9.addEventListener("click", this.calculationButtons.bind(this, this.button9.id));
        this.button9.innerHTML = "9";
        this.buttonInputOperandSection.append(this.button9);

        this.button8 = document.createElement('button');
        this.button8.id = "8";
        this.button8.addEventListener("click", this.calculationButtons.bind(this, this.button8.id));
        this.button8.innerHTML = "8";
        this.buttonInputOperandSection.append(this.button8);

        this.button7 = document.createElement('button');
        this.button7.id = "7";
        this.button7.addEventListener("click", this.calculationButtons.bind(this, this.button7.id));
        this.button7.innerHTML = "7";
        this.buttonInputOperandSection.append(this.button7);

        this.button6 = document.createElement('button');
        this.button6.id = "6";
        this.button6.innerHTML = "6";
        this.button6.addEventListener("click", this.calculationButtons.bind(this, this.button6.id));
        this.buttonInputOperandSection.append(this.button6);

        this.button5 = document.createElement('button');
        this.button5.id = "5";
        this.button5.innerHTML = "5";
        this.button5.addEventListener("click", this.calculationButtons.bind(this, this.button5.id));
        this.buttonInputOperandSection.append(this.button5);

        this.button4 = document.createElement('button');
        this.button4.id = "4";
        this.button4.innerHTML = "4";
        this.button4.addEventListener("click", this.calculationButtons.bind(this, this.button4.id));
        this.buttonInputOperandSection.append(this.button4);

        this.button3 = document.createElement('button');
        this.button3.id = "3";
        this.button3.addEventListener("click", this.calculationButtons.bind(this, this.button3.id));
        this.button3.innerHTML = "3";
        this.buttonInputOperandSection.append(this.button3);

        this.button2 = document.createElement('button');
        this.button2.id = "2";
        this.button2.addEventListener("click", this.calculationButtons.bind(this, this.button2.id));
        this.button2.innerHTML = "2";
        this.buttonInputOperandSection.append(this.button2);

        this.button1 = document.createElement('button');
        this.button1.id = "1";
        this.button1.addEventListener("click", this.calculationButtons.bind(this, this.button1.id));
        this.button1.innerHTML = "1";
        this.buttonInputOperandSection.append(this.button1);

        this.buttondot = document.createElement('button');
        this.buttondot.id = "dot";
        this.buttondot.innerHTML = ".";
        this.buttondot.addEventListener("click", this.calculationButtons.bind(this, this.buttondot.id));
        this.buttonInputOperandSection.append(this.buttondot);

        this.button0 = document.createElement('button');
        this.button0.id = "0";
        this.button0.addEventListener("click", this.calculationButtons.bind(this, this.button0.id));
        this.button0.innerHTML = "0";
        this.buttonInputOperandSection.append(this.button0);

        this.buttonClr = document.createElement('button');
        this.buttonClr.id = "clr";
        this.buttonClr.innerHTML = "Clr";
        this.buttonClr.addEventListener("click", this.calculationButtons.bind(this, this.buttonClr.id));
        this.buttonInputOperandSection.append(this.buttonClr);

        //Operator Section

        this.buttonInputOperatorSection = document.createElement('div');
        this.buttonInputOperatorSection.className = "operator-section";
        this.buttonInputSection.append(this.buttonInputOperatorSection);

        this.buttonAdd = document.createElement('button');
        this.buttonAdd.id = "add";
        this.buttonAdd.addEventListener("click", this.calculationButtons.bind(this, this.buttonAdd.id));
        this.buttonAdd.innerHTML = "+";
        this.buttonInputOperatorSection.append(this.buttonAdd);

        this.buttonSub = document.createElement('button');
        this.buttonSub.id = "sub";
        this.buttonSub.addEventListener("click", this.calculationButtons.bind(this, this.buttonSub.id));
        this.buttonSub.innerHTML = "-";
        this.buttonInputOperatorSection.append(this.buttonSub);

        this.buttonDiv = document.createElement('button');
        this.buttonDiv.id = "div";
        this.buttonDiv.addEventListener("click", this.calculationButtons.bind(this, this.buttonDiv.id));
        this.buttonDiv.innerHTML = "/";
        this.buttonInputOperatorSection.append(this.buttonDiv);

        this.buttonMul = document.createElement('button');
        this.buttonMul.id = "mul";
        this.buttonMul.addEventListener("click", this.calculationButtons.bind(this, this.buttonMul.id));
        this.buttonMul.innerHTML = "*";
        this.buttonInputOperatorSection.append(this.buttonMul);

        this.buttonEquals = document.createElement('button');
        this.buttonEquals.id = "e";
        this.buttonEquals.addEventListener("click", this.calculationResult.bind(this));
        this.buttonEquals.innerHTML = "=";
        this.buttonInputOperatorSection.append(this.buttonEquals);


        //History Button        
        this.historyButton = document.createElement('button');
        this.historyButton.addEventListener("click", function () { window.location.href = "#historyof" + calculatorName;});
        this.historyButton.innerHTML = "<i class='fa fa-history'></i>";
        this.historyButton.setAttribute("style", "margin-left:20px");
        this.mainElement.append(this.historyButton);


        // History Container
        this.historyContainer = document.createElement('div');
        this.historyContainer.id = "historyof" + calculatorName;
        this.historyContainer.className = "history";
        this.mainElement.append(this.historyContainer);

        this.historyContainerContent = document.createElement('div');
        this.historyContainerContent.setAttribute("style", "display:flex;");
        this.historyContainer.append(this.historyContainerContent);

        this.historyContainerContentText = document.createElement('div');
        this.historyContainerContentText.innerHTML = "<h1>HISTORY</h1>";
        this.historyContainerContentText.setAttribute("style", "color:wheat; margin-left:20px");
        this.historyContainerContent.append(this.historyContainerContentText);

        this.historyContainerContentCloseSymbol = document.createElement('div');
        this.historyContainerContentCloseSymbol.setAttribute("style", "position: absolute; top: 0px; right: 10px;");
        this.historyContainerContentCloseSymbol.innerHTML = "<a class='close' href='#'>&times;</a>";
        this.historyContainerContent.append(this.historyContainerContentCloseSymbol);

        this.calculatedHistoryArea = document.createElement('div');
        this.calculatedHistoryArea.id = "history-calculations";
        this.historyContainer.append(this.calculatedHistoryArea);

    }

    calculationButtons(inputId) {

        if (inputId == "9") {
            this.expression += "9";
            this.inputElement.value = this.expression;
        }
        if (inputId == "8") {
            this.expression += "8";
            this.inputElement.value = this.expression;
        }
        if (inputId == "7") {
            this.expression += "7";
            this.inputElement.value = this.expression;
        }
        if (inputId == "6") {
            this.expression += "6";
            this.inputElement.value = this.expression;
        }
        if (inputId == "5") {
            this.expression += "5";
            this.inputElement.value = this.expression;
        }
        if (inputId == "4") {
            this.expression += "4";
            this.inputElement.value = this.expression;
        }
        if (inputId == "3") {
            this.expression += "3";
            this.inputElement.value = this.expression;
        }
        if (inputId == "2") {
            this.expression += "2";
            this.inputElement.value = this.expression;
        }
        if (inputId == "1") {
            this.expression += "1";
            this.inputElement.value = this.expression;
        }
        if (inputId == "0") {
            this.expression += "0";
            this.inputElement.value = this.expression;
        }
        if (inputId == "dot") {
            this.expression += ".";
            this.inputElement.value = this.expression;
        }
        if (inputId == "sub") {
            this.expression += " - ";
            this.inputElement.value = this.expression;
        }
        if (inputId == "mul") {
            this.expression += " * ";
            this.inputElement.value = this.expression;
        }
        if (inputId == "add") {
            this.expression += " + ";
            this.inputElement.value = this.expression;
        }
        if (inputId == "div") {
            this.expression += " / ";
            this.inputElement.value = this.expression;
        }
        if (inputId == "clr") {
            this.expression = "";
            this.inputElement.value = this.expression;
        }
    }

    errorShow(){
        alert("ERROR : No Number before operator!");
        this.expression = "";
        this.inputElement.value = this.expression;
    }

    calculationResult() {
        this.expression = this.inputElement.value;
        if(this.expression[1] == '*' || this.expression[1] == '/' || this.expression[1] == '-' || this.expression[1] == '+')  this.errorShow();
        else{
          this.result = eval(this.expression);
          this.inputElement.value = this.result;
          this.calculatedHistoryAreaButton(this.expression + ' = ' + this.result);
          this.expression = "";
      }
    }

    copyToInput(textContent){
        
        textContent = textContent.substring(0,textContent.indexOf('=') - 1);
        this.expression += textContent;
        this.inputElement.value = textContent;
    }

    calculatedHistoryAreaButton(content) {
        this.buttonForExpressionCopy = document.createElement('button');
        this.buttonForExpressionCopy.id="calculationMade";
        this.buttonForExpressionCopy.innerHTML = content;
        this.buttonForExpressionCopy.addEventListener("click", this.copyToInput.bind(this,content));
        this.calculatedHistoryArea.innerHTML  += "<hr>"; 
        this.calculatedHistoryArea.append(this.buttonForExpressionCopy);
    }

}
let objectOf = new calculator("Main", "#nCalculators");