/*         function SelectLanguage(evt, Lang)
        {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++)
            {
                tabcontent[i].style.display = "none"
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++)
            {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(Lang).style.display = "block";
            evt.currentTarget.className += " active";
        }
 */

function moveBackFunction()
{
    var urlParam = new URLSearchParams(location.search);

    var qs = urlParam.get('id');
    window.location.href= qs+".html";
}

function SelectLanguage(evt, Lang)
{
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++)
    {
        tabcontent[i].style.display = "none"
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++)
    {
        tablinks[i].className = tablinks[i].className.replace("active","");
    }
    document.getElementById(Lang).style.display="block";

    evt.currentTarget.className += " active";
}


        // document.getElementById("defaultOpen").click();

        document.addEventListener("backbutton", onBackKeyDown, false); 
        function onBackKeyDown(e) {
            e.preventDefault();
            var r = confirm("Do you want to Exit?");
            if (r == true) {
               navigator.app.exitApp();
            } 
        } 
        
            //document.addEventListener("backbutton", onBackKeyDown, false); 
            /* function backKey() {   
            app.exitApp();
            window.alert("App Exit")
            } */
             