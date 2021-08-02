const disp = document.getElementById('disp');
const b1=document.getElementById("b1");

function clk(num)
{
      disp.value=disp.value+num;
      
}
function ac(){
      disp.value="";
}
function del(){
      str = disp.value;
      disp.value=str.substring(0, str.length - 1);
}



function calculate()
{
      let data =disp.value;
      
      console.log(eval(data));
      
      disp.value=eval(data);
}