
var  test, test_status, question, choice, choices, chA, chB, chC, correct = 0,a=0;
var pos=Math.floor(Math.random() * 10) + 1;
            var questions = [
                [ "What Is HTML?", "Hyper Text Markup Language", " Hyper Linked Markup Lang", "Hyper Text Marked Line", "A" ],
                [ "Most popular social media app?", "what's app", "FB", "Insta", "B" ],
                [ "Ceo of GOOGLE?", "Sundar P", "Subash p", "Anil Namboothiripad", "A" ],
                [ "Winners of FIFA world cup 2018?", "Germany", "Brazil", "France", "C"],
                [" How may km from miyami beach to sanfransico?", "3000km", " 30001km", "KM and KM", "C"],
                //java
                [" Best actor in malayalam?", "Mohan lal", " Neymar", "Santhosh pandit", "A"],
                [ "Best actor in Hindi?", "AAmir Khan", "SRk", "Salman khan", "A"],
                ["A for?","Orange","Apple","Lemon","B"],
                ["Capital of INDIA?","NEW DELHI","Mumbai","Mayannur","A"],
                ["Capital of kerala?", "Ottapalam","Thiruvanathapuram","Mayannur", "B"],
                //
                [ "Headquarters of google?", "London", " California", "Ottapalam", "B" ],
                [ "JavaScript is a?", "Programming language", "Scripting language", "desing", "B" ],
                [ "Founder of Facebook?", "M Zuckerberg", "A Muccolum", "Anil Namboothiripad", "A" ],
                [ "Founder of What's APP?", "Sundar P", "Jack Dorsey", "Brian Acton", "C"],
                [" Orikyal_____mon ennode chodichu uncle te...?", "saju", "Raju", "Liju", "B"],
               //
                ["Kochi___kochi alla...?", "Pazhaya", "Puthiya", "Adutha", "A"],
                [ "D for?", "Donkey", "Monkey", "YOU", "A"],
                ["Place that not found in goolge map?","Thrangali","kavalappara","Kayarampara","A"],
                ["Best village in Thrissur District?","Mayannur","Pambadi","Kuttanellur","A"],
                ["This qiuz created by?", "Anil Namboothiripad","YOU","i dont know", "A"],
                ];
            function one(x){
                return document.getElementById(x);
            }
            function  renderQuestion(){
                test = one("test");
                if(a<=10){
                myVar = setTimeout(function()
                {one("h").innerHTML = "Time out of question "+(a+1);checkAnswer();
                }, 10000,);}




                if (a==10)
                {
                    clearTimeout(myVar);
                    var E;
                    if(correct==10){E="perfect"}
                    if(correct>5){E="Good"}
                    if(correct<5){E="Better luck next time"}
                    if(correct==0){E="Very bad"}
                    test.innerHTML = '<h3>You Got '+correct+' of 10 questions </h3>'+'<br><h3>'+E+'</h3>';
                    one("test_status").innerHTML = "Test Comleted!";


                    pos = 0;
                    correct = 0;
                    return false;
               }
                if(a<=10)
                {
                one("test_status").innerHTML = " "+(a+1)+" ";
                question = questions[pos][0];
                chA = questions[pos][1];
                chB = questions[pos][2];
                chC = questions[pos][3];
                test.innerHTML ="<h3>"+question+"</h3>";
                test.innerHTML += "<label class='three'><input type='radio' name='choices' value='A'> "+chA+"</label>"+"<br><br>";
                test.innerHTML += "<label class='three'><input type='radio' name='choices' value='B'> "+chB+"</label>"+"<br><br>";
                test.innerHTML += "<label class='three'><input type='radio' name='choices' value='C'> "+chC+"</label>"+"<br><br>";
                test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer!</button>";
            }}



            function checkAnswer(){
                choices = document.getElementsByName("choices");
                for (var i=0; i<choices.length; i++){
                    if (choices[i].checked){
                        choice = choices[i].value;
                    }
                }
                if (choice == questions[pos][4]){
                    correct++;

                }
                    clearTimeout(myVar);
                    a=a+1;
                    pos++;
                    renderQuestion();

            }




    window.addEventListener("load", renderQuestion, false);