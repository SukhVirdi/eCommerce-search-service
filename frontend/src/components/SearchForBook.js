import React, { Component } from "react"

class SearchForBook extends Component {
  state = {
    name: "",
    returned: []
  };

  setStateToBook = (book) => {
    return new Promise((resolve, reject) => {
        resolve(this.setState({ name: book }))
      }
    )}

    setSearchedBook = (body) => {     
      (this.setState({ 
        returned: body.data,
    }))
  }
      
  sendBook = () => {
    let book = JSON.stringify(this.state)
    const requestOptions = {
      method: "POST",
      body: book,
      headers: {"Content-Type": "application/json"}
    };
    fetch("http://localhost:4000/search", requestOptions)
    .then((response) => {
      return response.json()
    }).then((body)=> {
      this.setSearchedBook(body)
    });;
    
  };

  handleInput = (event) => {
    this.setStateToBook(event.target.value).then(this.sendBook);
  };

  render() {
    return (
      <div>
        <h1>eCommerce Book Search Service</h1>
        <input type="text" onChange={this.handleInput} placeholder="Enter the book name " />
        <div>
       </div>
       {this.state.returned.map((product)=>{
        return(
            <div key = {product.id}>
              <div>
                <div>
                  <h1>{product.name}</h1>
                  <h2>{product.ratings}</h2>
                  <p></p>
                </div>
              </div>
            </div>
      )})}
      </div>
    );
  }
}

export default SearchForBook;