# Assignment

## Task-1
  ![image](https://github.com/user-attachments/assets/5ae630b9-e8b1-4dc0-b1e2-c59b42901008)

  ### Hosted Link: https://assignment-kommunicate.vercel.app/
  ### Github Link: https://github.com/ANIKET9411/Assignment_Kommunicate.git

  ### Objective:
Create a simple screen with a heading and a button using plain HTML and CSS.

### Specifications:

- Button Height: 36px
- Button Color: #2DD35C
- Heading Color: #5553B7
  
### Components:

Heading: The text "E-commerce store" should be displayed prominently and colored using the code #5553B7.
Button: The "Try for free" button should be styled to have a height of 36px and a background color of #2DD35C.
Implementation:

### HTML Structure:

- Use a div container to center the content.
- Add an h1 tag for the heading text.
- Include a button tag for the button.

### CSS Styling:

- Use flexbox to center the content both horizontally and vertically.
- Style the heading with the specified color.
- Style the button to have the correct height, color, and additional styling for a polished look.

## Task-2
![image](https://github.com/user-attachments/assets/fef92299-8e76-483b-b175-484c6912dc42)

### Purpose:
The getUrlParameterValue function extracts the value of a specified query parameter from a URL.

### Parameters:

- url (string): The URL containing the query parameters.
- parameter (string): The name of the query parameter whose value needs to be extracted.

### Implementation Steps:

#### Extract Query String:

- The URL is split at the ? character to isolate the query string.
- url.split('?')[1] extracts the part of the URL after the ?, which contains the query parameters.

#### Split Parameters:

- The query string is split by & to separate individual parameters.
- queryString.split('&') results in an array of parameter strings.
- 
#### Iterate Through Parameters:

- A loop iterates through the array of parameters.
- Each parameter string is split at = to separate the key and value.
- params[i].split('=') provides an array where pair[0] is the parameter name and pair[1] is the parameter value.

#### Check Parameter Name:

- The function checks if the parameter name (pair[0]) matches the specified parameter.
- If a match is found, the function returns the corresponding value (pair[1]).
- 
#### Return Value or Null:

- If the specified parameter is found, its value is returned.
- If the parameter is not found, the function returns null.

## Task-3

![image](https://github.com/user-attachments/assets/47d0bffb-5c02-418f-8ad2-f2cec8f2f788)

### Purpose:
The reverseNumber function reverses the digits of a given number and prints the result.

### Implementation Steps:

#### Initialize Variables:

- reversed is initialized to 0 to store the reversed number.

#### Reverse Digits:

- A while loop runs as long as the number is not 0.
- In each iteration, the last digit of the number is obtained using the modulo operator (number % 10).
- This digit is then added to the reversed variable, which is shifted left by multiplying it by 10 to make room for the new digit.
- The last digit is removed from the number by performing integer division (Math.floor(number / 10)).

#### Print Result:

- After the loop completes, the reversed number is printed to the console.

