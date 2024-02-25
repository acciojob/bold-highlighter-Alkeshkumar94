function highlight() {
    //Write your code here
    let bold=document.querySelectorAll('strong');
	bold.forEach(boldwords=>{
		boldwords.style.color='green'
	})

}


function return_normal() {
    //Write your code here
 let bold=document.querySelectorAll('strong');
	bold.forEach(boldwords=>{
		boldwords.style.color='black'
	})
    
}
