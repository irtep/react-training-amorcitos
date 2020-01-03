/*

  function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
        <div id= "enLinks" className= { forLinks }>       

          <center>

            { this.state.enLinks.map(todo => {
            
            return (
            
              <LinksItem
                title={todo}
                handleClick={this.showMenu}
              />

            )
              }) 
            }            

          </center>
        
        </div>

  showMenu(todo){

    console.log("showMenu called ", todo);

    switch (todo) {

      case "Entertainment":

      break;
 
      case "Social media":

      break;
 
      case "News and weather":

      break;

      case "Education":

      break;           

      default: console.log("button in action not found..");

    }
  }


    let forLinks = ["hiddenLinks"];
    
    if (this.state.shows) {

      forLinks.splice(0, 1);
      forLinks.push("visibleLinks");
    
    } else {

      forLinks.splice(0,1);
      forLinks.push("hiddenLinks");

    }


*/ 