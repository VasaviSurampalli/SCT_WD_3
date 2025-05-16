# SCT_WD_3
# Quiz Game Application

This is a simple interactive Quiz Game built using HTML, CSS, and JavaScript. It supports multiple question types including:
- Single choice questions  
- Multiple choice questions  
- Fill in the blank questions  

## Features

- Questions and answers are embedded directly in the HTML using 'data' attributes.
- User selects or inputs answers, clicks Next, and gets scored at the end.
- Clean and responsive UI.
- Easily extendable by adding new questions directly in HTML.


## File Structure

- 'index.html'— Main HTML file containing quiz structure and embedded questions.
- 'style.css' — Styling for quiz UI.
- 'script.js' — JavaScript logic for handling quiz flow and scoring.


## How to Add Questions

Add new questions inside the '<div id="questions-data">' section in 'index.html'.  
Each question is a'<div class="question">' with the following attributes:
- 'data-type' — question type ('single','multi', or `fill')
- 'data-question' — the question text
- 'data-answer' — correct answer(s). Use commas to separate multiple correct answers for 'multi' type.

Example:

html
<div class="question" data-type="single" data-question="What is 2 + 2?" data-answer="4">
  <label><input type="radio" name="q4" value="3"> 3</label>
  <label><input type="radio" name="q4" value="4"> 4</label>
  <label><input type="radio" name="q4" value="5"> 5</label>
</div>
