'use strict'

let booksByGenre = [
    {
        genreName: "Crafts",
        books: [
            {
                id: 8,
                title: "Lorem ipsum",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non nulla " +
                    "optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=20"
            },
            {
                id: 10,
                title: "Aliquam consequatur",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
                    "ea fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=21"
            },
            {
                id: 34,
                title: "Laudantium",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
                    "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=22"
            }
        ]
    },
    {
        genreName: "Thriller",
        books: [
            {
                id: 4,
                title: "Necessitatibus",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
                    " nulla optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=23"
            },
            {
                id: 13,
                title: "Nulla optio quae quod",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
                    "fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=24"
            },
            {
                id: 59,
                title: "Non nulla",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus," +
                    " necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=25"
            }
        ]
    }
];

/* для каждого жанра отдельный div:
<div> name
    <h2></h2> nameGenre
    <div class="books"> booksDiv
        <article> artic
            <span>название книги</span> nameBook
            <img> img
            <p>описание</p> description
            <a>Читать</a> read
        </article>
    </div>
</div>
*/


// for (let gener of booksByGenre){
//     let generDiv = document.createElement("div");
//     generDiv.classList.add ("booksDiv")
//     let nameGener = document.createElement("h")
//     nameGener = gener.title
//         for (let book of gener.books) {
//             let everyBook = document.createElement("article");
//             everyBook.innerHTML = `
//                 <span>${book.title}</span>
//                 <img>${book.img}</img>
//                 <p>${book.description}</p>
//                 <a>Читать</a>
//             `
//         }
//         generDiv.append(nameGener, everyBook)
//     }




    let articles = [
        {
            id: 1,
            title: "JS",
            text: "About JS",
            author: "Max"
        },
        {
            id: 2,
            title: "PHP",
            text: "About PHP",
            author: "Ivan"
        },
        {
            id: 3,
            title: "DataBase",
            text: "About DB",
            author: "Paul"
        },
        {
            id: 4,
            title: "HTML",
            text: "About HTML",
            author: "Paul"
        }
    ];

    let goods = [
        {
            title: "Piano",
            price: 3000,
            count: 25
        },
        {
            title: "Guitar",
            price: 1200,
            count: 40
        },
        {
            title: "Drum",
            price: 2700,
            count: 12
        },
        {
            title: "Flute",
            price: 900,
            count: 50
        },
        {
            title: "Harp",
            price: 3400,
            count: 5
        }
    ];

function generateTable(arr) {
let table = document.createElement("table")

let keys = Object.keys(arr[0]);
let firstRow = table.insertRow();
for (let key of keys) {
    let cell = firstRow.insertCell(); 
    cell.innerText = key.toUpperCase();
}

for (let elem of arr) {
    let row = table.insertRow();
    for (let prop in elem) {
        let cell = row.insertCell();
        cell.innerText = elem[prop];
    }
}
document.body.append(table);
}
generateTable(articles)
generateTable(goods)





// function generateTable(n) {
//     if (n<3) return;
// // генерация поля n*n
// // добавление поля в html
// let cells = td;
// let randomCell = cells[Math.floor(math.random()*cells.length)]
// randomCell. 
// }