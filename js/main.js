currentSpeechRate=-1;
speechRatesSum=0;
measurementCount=0;
textToSpeak="";

predefinedText="";

window.addEventListener("load", function() {
    textToSpeakTextArea=document.getElementById("textToSpeakTextArea");
    submitButton=document.getElementById("submitButton");
    insertPredefinedTextButton=document.getElementById("insertPredefinedTextButton");
    currentSpeechRateStrong=document.getElementById("currentSpeechRateStrong");
    averageSpeechRateStrong=document.getElementById("averageSpeechRateStrong");
    wordCountStrong=document.getElementById("wordCountStrong");
    spokenTextParagraph=document.getElementById("spokenTextParagraph");

    submitButton.addEventListener("click", submitButton_click);
    insertPredefinedTextButton.addEventListener("click", insertPredefinedTextButton_click);
    textToSpeakTextArea.addEventListener("input", textToSpeakTextArea_input);

    wordCountStrong.textContent=wordCount(predefinedText);
    });

function submitButton_click() {
    if (currentSpeechRate!=0) {
        if (textToSpeakTextArea.value=="") {
            alert("Error: No input text found");
            return;
            }
        if (wordCount(textToSpeakTextArea.value)==0) {
            alert("Error: The entered text does not contain any words.");
            return;
            }

        submitButton.value="Stop";
        currentSpeechRate=0;
        if (textToSpeak!=textToSpeakTextArea.value) {
            speechRatesSum=0;
            measurementCount=0;
            }
        textToSpeak=textToSpeakTextArea.value;
        textToSpeakWordCount=wordCount(textToSpeak);

        currentSpeechRateStrong.textContent="0";

        //In order to allow repeated measurement, we need to change the displayed text a bit in order for it to be recognized as change by screenreaders.

        if (spokenTextParagraph.textContent.endsWith(" ,")) {
            spokenTextParagraph.textContent=textToSpeak;
            }
        else {
            spokenTextParagraph.textContent=`${textToSpeak} ,`;
            }

        startTime=new Date();
        }
    else {
        let endTime=new Date();
        let elapsedTime=(endTime-startTime)/(60*1000); //in minutes
        currentSpeechRate=Math.round(textToSpeakWordCount/elapsedTime);
        speechRatesSum+=currentSpeechRate;
        measurementCount+=1;

        currentSpeechRateStrong.textContent=currentSpeechRate.toString();
        averageSpeechRateStrong.textContent=Math.floor(speechRatesSum/measurementCount).toString();
        submitButton.value="Start";
        }
    }
function insertPredefinedTextButton_click() {
    textToSpeakTextArea.value=predefinedText;
    wordCountStrong.textContent=wordCount(predefinedText);
    }
function textToSpeakTextArea_input() {
    wordCountStrong.textContent=wordCount(textToSpeakTextArea.value).toString();
    }

function wordCount(text) {
    let result=0;

    let inWord=false;

    for (let i=0;i<text.length;i++) {
        if (text[i]==" ") {
            if (inWord) {
                inWord=false;
                }
            }
        else {
            if (inWord==false) {
                result++;
                inWord=true;
                }
            }
        }

    return result;
    }

