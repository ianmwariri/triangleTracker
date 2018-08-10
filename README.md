Triangle Tracker App


#AUTHOR

  Ian Mwangi


#DESCRIPTION

  This App prompts a User to Key In Triangle Dimensions & thereafter, he/she is given alert message stating what type of Triangle the dimensions give. 
  
  To use the System, Simply Click the 'Check it Out' Button, and type in the desired Triangle Dimensions.
  
  In the event that the user keys in an invalid input, say a Negative number or Letter, The console pops an error alert stating that the Dimension(s) is/are Invalid.


#Setup/Installation requirements

* An up-to-date browser, preferably chrome

* Internet connection

* `Git`

* SYSTEM GUIDELINES:

git clone https://github.com/smokeyice/triangleTracker.git
cd triangleTracker
atom . OR code .


#KNOWN BUGS

  -The system fails to show the intended background image when the github website is deployed, therefore, I have incorporated a background-color as my Website Background.


 ##BEHAVIOUR DRIVEN DEVELOPMENT (BDD)

The program should return the following when the user keys in a non-digit: 
      Input Example: 'ghzjaj' 
      Output Example: 'Invalid Input!'


The program should return the follwoing when user keys in a negative value: 
      Input Example: -97 
      Output Example: ' Re-enter a valid Dimension: ' 


The program should return the following when the sum of any two dimensions of the triangle is less than or equal to the Third Dimension: 
      Input Example: Dimension a: 40, Dimension b: 40, Dimension c: 100000 
      Output Example: 'Dimensions DON'T form a triangle...'



The program should return the following when ALL 3 keyed-in dimensions are similar: 
         Input Example: Dimension a: 56, Dimension b: 56, Dimesnion c: 56
         Output Example: 'That's an Equilateral Triangle'


The program should return the following when ONLY two of the keyed-in dimensions are similar: 
        Input Example: Dimension a: 690, second side = 690, third side = 750 
        Output Example: 'That's an Isosceles Triangle'


The program should return the following when ALL triangle dimensions Differ: 
        Input Example: Dimension a: 377, Dimension b: 389, Dimension c: 6 
        Output Example: 'That's a Scalene Triangle'.


#TECHNOLOGIES USED:

  HTML

  CSS

  JS

  Live Demo


#To view the LIVE SITE, Click Here: 

    https://smokeyice.github.io/triangleTracker/



#CONTACT DETAILS

  In case of any queries, feel free to reach me at: mwangi.ian3@gmail.com


#COPYRIGHT & LICENCE

  <2018> Ian Mwangi.

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.