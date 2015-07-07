[Project: Building An On Screen Calculator Using Javascript](http://www.theodinproject.com/javascript-and-jquery/on-screen-calculator)

You've done a lot of Codecademy lately and so it's time to wean yourself off their super-friendly environment and create some Javascript on your own computer.

In this project, you'll be building many simple exercises to drill in your understanding of the language. You can write them in a script file in your text editor and then run them by copy-pasting into JS Fiddle. You can run your functions (e.g. my_max() below) by console logging their output with something like console.log(my_max([1,56,2,3,-1,0])) (which would output 56).

Save your solutions to Github and submit them for inclusion here when you're finished!

#Warmup

* Build a function my_max() which takes an array and returns the maximum number.
* Build a function vowel_count() which takes a string and returns the number of vowels (AEIOUY).
* Build a function reverse() which takes a string and returns all the characters in the opposite position, e.g. reverse("this is a string") // "gnirts a si siht"


#Calculator

It's time to build an on-screen calculator

* Build a function add() which takes two numbers and adds them together.
* Build multiply, divide and subtract functions in a similar fashion.
* Build a grid of divs in the browser that are labeled with the numbers 0-9.
* Set up a listener so when the user clicks on one of these squares, it displays that number in the console log. This can be done by assigning a function to the onclick() property of the div (use this if you haven't been introduced to jQuery listeners before). It's okay to hard-code them in for now (e.g. onclick(function(){ console.log "1" }))
* Now add "buttons" (more divs) to your calculator which represent "+", "-", "*", "/", "=" and "clear".
* Make your calculator work! This means that you'll need to "save" the first number that is pressed (to a variable or array) and you'll also need to "save" which operation has been chosen (e.g. addition). Once the equals sign is pressed, it should run a function which evaluates the expression by calling the simple functions you created earlier and outputting the result to the command line. It may take some practice to be able to pass the values from your "buttons" to your main calculator function. It's a bit tricky, but you can do it.
* Pressing "=" or "clear" should clear any saved variables or operations so you can start over.
* Push your project to Github and share the solution below.
* Extra credit: If you're comfortable with jQuery, create a "screen" for your calculator -- another <div> which displays the numbers and the results like a normal calculator would.
* Extra credit: Create a "parent filter" which checks if the user has inputted any immature numbers "e.g. 80085" and scolds the user if so.
