var arr=[{
    quote:
           
    
     
    'I leave behind me two things, The Quran and My Sunnah and if you follow these you will never go astray',
    author:"Hazrat Muhammad Sallallahu ala wasallam"
},

{

quote:"However difficult life may seem, there is always something you can do and succeed at",
author:"Stephen Hawking"
},
{
    quote:
    
    "The first people to enter Paradise will be Ali and Fatima",
    author:"Hazrat Muhammad Sallallahu ala wasallam"
},
{
    quote:
    
    "There are two motives for reading a book; one, that you enjoy it; the other, that you can boast about it.",
    author:"Bertrand Russell"
},
{
    quote:
    
    'A brother is like gold and a friend is like diamond.',
    author:'Hazrat Ali R.A'
},
{
    quote:
    
    'The most generous person is the one who offers help to those who do not expect him to help',
    author:'Imam Hussain'
},
{
    quote:
    
    'Do good but never speak of it ',
    author:'Imam Ali '
},

{
    quote:
    
    'People say i am a genius. I might be one but i am not the only one. There are many other Pakistani girls and boys like me. All those gems need, is a little bit of polishing. And I will do it. That my aim',
    author:'Arfa Karim'
},
{
    quote:
    'Dont compare yourself with anyone in this world…if you do so, you are insulting yourself. If you are born poor its not your mistake, but if you die poor its your mistake',
    author:'Bill Gates'
},
{
    quote:
    'Dont fear to facing failure even the successful Mathematics starts with the zero only',
    author:'APJ kalam'
},
{
    quote:
   'Dont waste your time , Be honest with yourself and your parents',
    author:'Mussafara Riaz'
},
{
    quote:
    'My Dear Girls! Focus on your studies make your career you have to payback to your parents',

    author:'Mussafara Riaz'
},



]
const quote1=document.getElementById("quotation");
const athr=document.getElementById("author");

function func(){
    let random1=Math.floor(Math.random()*20);
    quote1.innerHTML=arr[random1].quote ;
    athr.innerHTML=arr[random1].author;  
 

}







