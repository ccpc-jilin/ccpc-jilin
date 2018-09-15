

window.onload = function() 
{
	var lis = document.getElementById('arri_ul').getElementsByTagName('li');
	var spans = document.getElementById('arri_parts').getElementsByTagName('span');

    for(var i = 0; i < lis.length; i++) 
    {
        lis[i].index = i;
        lis[i].onclick = function() 

        {
            for(var i = 0; i < lis.length; i++)
            {
                lis[i].className = "";
            }
            this.className = "arri_li_on";

            for(var j =0; j < spans.length; j++) 
            {
                spans[j].className = "arri_part_hide";
            }
            spans[this.index].className = "arri_part";
        }     
           
    }
 };


