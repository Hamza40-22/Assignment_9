// Question # 1

// var Std_name_Array = [];

// ***************************************************     *****************************************

// Question # 2

// var array_with_Object = new Array();


// ***************************************************     *****************************************

// Question # 3

// var array_with_string = ["bitcoin", "gold", "silver", "cat"]

// ***************************************************     *****************************************

// Question # 4

// var array_with_number = [5, 4, 3, 2, 1, 0]

// ***************************************************     *****************************************

// Question # 5

// var array_with_bolean = [true, false]

// ***************************************************     *****************************************

// Question # 6

// var mixed_arr = [5, "hello", 4, true, "cat", false]


// ***************************************************     *****************************************

// Question # 7

// var heading = "<h1>Qualifications:</h1>";
// document.write(heading + "<br>")

// var qaulifications = [" SSC", " HSC", " BSC", " BS", " BCOM", " MS", " M.Phil", " PhD"]

// for (let i = 0; i <= 7; i++) {
//     document.write(i,")",qaulifications[i] + "<br>")
// }

// ***************************************************     *****************************************

// Question # 8

// var std_names = ["Michael", "John", "Tony"];


// var std_scores = [320, 230, 480];


// for (var i = 0; i < std_names.length; i++) {
//     var all_names = std_names[i];
//     var total_score = std_scores[i];

//     var percent = (total_score / 500) * 100;

//     document.write("Score of  " , all_names , " is ", total_score , " Percentage: " , percent+"%" ,"<br>");

// }



// ***************************************************     *****************************************

// Question # 9


// var color_array = ["black", " white", " orange"];
// document.write("<p>Original Array: " + color_array.join(", ") + "</p>")

// // part a
// var begining_Color = prompt("Which Color do you want to add at the begining of an array?")
// color_array.unshift(begining_Color)
// document.write("<p>Original Array: " + color_array.join(", ") + "</p>")

// // part b
// var Ending_Color = prompt("Enter a color you want to add at the end of an array:");

// // 
// colors.push(Ending_Color);


// document.write("<p>Updated Array (with user's color at the end): " + colors.join(", ") + "</p>");
// //part c 


// colors.unshift("maroon", "sky green");


// document.write("<p>Updated Array (with two colors added to the beginning): " + colors.join(", ") + "</p>");

// //part d 


// colors.shift();


// document.write("<p>Updated Array (after deleting the first color): " + colors.join(", ") + "</p>");

// //part  f 


// var add_index = parseInt(prompt("Enter the index where you want to add a color:"));
// var user_Color_Add = prompt("Enter the color name to add:");


// if (add_index >= 0 && add_index <= colors.length) {
   
//     colors.splice(add_index, 0, user_Color_Add);


//     document.write("<p>Updated Array (with user's color added at index " + add_index + "): " + colors.join(", ") + "</p>");
// } else {
//     document.write("<p>Invalid index. Color not added.</p>");

// }
// //part g 

// var delete_index = parseInt(prompt("Enter the index where you want to delete color(s):"));
// var delete_count = parseInt(prompt("Enter how many colors you want to delete:"));


// if (delete_index >= 0 && delete_index < colors.length && delete_count > 0 && delete_index + delete_count <= colors.length) {

//     colors.splice(delete_index, delete_count);


//     document.write("<p>Updated Array (after deleting " + delete_count + " color(s) from index " + delete_index + "): " + colors.join(", ") + "</p>");
// } else {
//     document.write("<p>Invalid input. Colors not deleted.</p>");
// } 

// ***************************************************     *****************************************

// Question # 10

 
// var std_Scores = [320, 230, 480, 120];
// document.write("Original",std_Scores)
// for(i=0; i < std_Scores.length;i++){


//     document.write(std_Scores[i],",");
// }  

// //  ascending order
// std_Scores.sort(function(a, b) {
//     return a - b;
// });


// document.write("Sorted Student Scores (Ascending Order): " + std_Scores.join(", "));   


// ***************************************************     *****************************************

// Question # 11


// var cities = ["Karachi", "Lahore", "Islamabad","Quetta", "Peshawer"];


// var selected_Cities = [];

// document.writeln("<h1>cities</h1>")

// for(i=0; i < cities.length;i++){


//         document.write(cities[i],",");
//     }  


// selected_Cities = cities.slice(2);



// document.write("<br> <h1>Selected Cities: </h1>" + selected_Cities.join(", "));  


// ***************************************************     *****************************************

// Question # 12

// var array_cat = ["This", " is", " my", " cat"];
// var simple = array_cat.join('');
                          
// console.log(simple);                        




// ***************************************************     *****************************************


