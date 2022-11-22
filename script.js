async function books(){
    try {
        let url = "https://www.anapioficeandfire.com/api/books";
        let res = await fetch( url,{
            method:"GET",
        })
        let data = await res.json();
        console.log(data)
        for (let details of data){
            let bookname = details.name;
            let bookisbn = details.isbn;
            let noofpages = details.numberOfPages;
            let authors = details.authors[0];
            let publisher = details.publisher;
            let release_date = details.released;
            let result=document.getElementById("bookshelf")
            let result1=`
            <div class="container text-center">
              <div class="row row-cols-2">
                  <div class="card" style="width: 18rem;">
                  <img src="https://cdn.shopify.com/s/files/1/0064/5342/8271/products/RHGM5-game-thrones-armor-front-1200_480x480.jpg?v=1550953191" class="card-img-side" alt="...">
                  <div class="col-md-12">
                     <div class="card-body">
                       <h5 class="card-title" id="booktitle"><span class="bookinfo">Book Title:<span class="information">${bookname}</h5>
                     </div>
                     <p class="col"><span>isbn:<span>${bookisbn}.</span></p>
                     <p class="col"><span>number of pages:<span>${noofpages}.</p>
                     <p class="col bookddetails"><span>Authors:<span>${authors}.</span></p>
                     <p class="col bookddetails"><span>publisher:<span>${publisher}.</span></p>
                     <p class="col bookddetails"><span>Release Date:<span>${release_date}.</span></p>
                     <div class="card-body">
                      <a href="#" class="card-link">more detais</a>
                     </div>
                  </div>
               </div>
            </div>
            
            
            `
            result.innerHTML+=result1
        }
    }catch (error) {
     console.log(error)   
    }
}

books()