var paragraph = document.getElementsByTagName("p");
alert(paragraph.length);
var bgColors=["red","yellow","green"];
var txtColors=["grey","orange","brown"];
for (var index =0;index <= paragraph.length;index++){

paragraph[index].style.backgroundColor =bgColors[index];
paragraph[index].style.color =txtColors[index];
paragraph[index].style.fontSize= "40px";
}


------------------------------------------------------------------------------------------------------
interlink
-----------------------------------------------------------------------------------------------------



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script>
     function disp(name="user"){
         for (var index = 0; index < 10; index++ ){
             document.write("Welcome  " +name+ "<br>");
         }
     }
     var name = prompt("Enter Your Name");
     disp(name);
     disp("Aqsa");
     disp();
    </script>
</head>
<body>
   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusamus ipsum fugiat recusandae. Commodi aperiam suscipit eum omnis eius. Asperiores, architecto aspernatur error deleniti assumenda illum quasi nam. Impedit, quaerat.</p>

   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nobis suscipit nulla nemo laudantium, quas qui voluptas fugiat totam impedit sequi minus eligendi recusandae fuga cupiditate illo explicabo consequatur quia.</p>

   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ex, fugit architecto veniam ab, ipsa, hic ipsum vel quo quae velit quis? Harum aspernatur tempore praesentium, quod ducimus autem ex.</p>

   <script src="script.js"></script>
</body>
</html>
