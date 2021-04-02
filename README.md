# SpeechMeter

When it comes to the first configuration of any device to be used with a screenreader, one of the major questions is: "What speech rate should be set in the screenreader?"
There are often ways to define this attribute in percentage, what is however not very helpful. Various screenreaders have various approaches to the meaning of the percentage even on a single platform, so how should one independently and objectively determine the real speech rate in a crossplatform environment?
Of course, one can simply try out various configurations, and find the most suitingone for him / her.
The problem is, that such determination is very subjective and inaccurate, it can be influenced by many factors, and even change over time as one gets used to higher / lower voice speeds.

SpeechMeter is a tool to resolve this situation. It's a web application, so it can be accessed from any platform with a decent browser and screenreader. It allows the user to measure the speech rate in words per minute unit (WPM), which should provide a better image about voice's speech rate.

## Usage

1. Clone the repository, either wia the web interface or by command:\
```git clone https://github.com/RastislavKish/SpeechMeter```\
Open speechmeter.html in your favourite browser.
2. Enter the text which will be used as the basis for the measurement. Alternatively, you can insert a predefined text with the same named button, this is useful especially if you're planning to test also mobile devices.
3. Find the Start button and press space. Your screenreader should start reading the text entered in the respective field. Don't interrupt it, and press space again as soon as the speech finishes.
4. You should see information about your speech rate under the form. Current speech rate value is the result value of the last measurement, Average speech rate represents the average of multiple measurements performed on the same text, if you did them.

## Tips and tricks

* To get the best image about changes in speech rate on various devices / platforms / configurations, it's best to use the same text in all measurements so the result is not dependend on it.
* The optimal length of the text used for measurements depends on various factors, such as the used language. To get the most reliable results, you can start on certain amount of words, and increase to see, how the results change. If you don't see any relevant activity, it's a sign, that your text is representative and stable.
* The "predefined text" is not set by default, as it's impossible to write it suitably for everyone. You can however easily define it yourself. All you need to do is to open js/main.js in your favourite text editor and find the line:\
```predefinedText="";```\
Write your text between the quotes and save the changes. If you already have SpeechMeter open, refresh the page (usually F5 key) to reflect the changes.
* SpeechMeter has a word counter under the input form. It's fully dynamic and you can use it to check how many words have you typed into the input field.

