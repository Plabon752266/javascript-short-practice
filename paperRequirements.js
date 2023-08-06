// write a function name paperRequirements where book1 consists 100pages, book2 consists 200 pages, and book 3 consists 300 pages. now you need to print how many book1, book2, book3 want to print

function paperRequirements(book1, book2, book3) {
    const book1PageConsists = 100;
    const book2PageConsists = 200;
    const book3PageConsists = 300;

    const book1_Ordervalue = book1 * book1PageConsists;
    const book2_Ordervalue = book2 * book2PageConsists;
    const book3_Ordervalue = book3 * book3PageConsists;

    const totalPageRequire = book1_Ordervalue + book2_Ordervalue + book3_Ordervalue;
    return totalPageRequire;
    
}

const result = paperRequirements(15, 8, 30);
console.log(result);