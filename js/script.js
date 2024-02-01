function getValue(event) {
    
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let comment = document.getElementById('comment').value;

    // let commentArr = JSON.parse(sessionStorage.getItem('commentArr')) || [];

    // let datas = {
    //     name: name,
    //     email: email,
    //     comment: comment
    // };

    // commentArr.unshift(datas);
    // sessionStorage.setItem('commentArr', JSON.stringify(commentArr));

    // let showDatas;

    // showDatas = JSON.parse(sessionStorage.getItem('commentArr'));

    // if (showDatas.length > 3) {
    //     showDatas.splice(3,1);
    // }
    
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('comment').value = "";

    document.getElementById('displayName').textContent = name;
    document.getElementById('displayComment').textContent = comment;
    
}
let sampleData = [
    { name: "John Doe", comment: "Lorem ipsum dolor sit amet." },
    { name: "Jane Smith", comment: "Consectetur adipiscing elit." },
    // Tambahkan data komentar sesuai kebutuhan
  ];

function comment(showDatas) {

    let cardContainer = document.getElementById('card-container');

    showDatas.forEach((data) => {
      let card = document.createElement("div");
      card.classList.add("comment-item");

      let listName = document.createElement("div");
      listName.classList.add("list-name");

      let imgProfile = document.createElement("div");
      imgProfile.classList.add("img-profile");
      let img = document.createElement("img");
      img.style = "width: 35px; height: 35px";
      img.src = "assets/icon.png";
      img.alt = "pp";
      imgProfile.appendChild(img);

      let nameProfile = document.createElement("div");
      nameProfile.classList.add("name-profile");
      nameProfile.textContent = data.name;

      listName.appendChild(imgProfile);
      listName.appendChild(nameProfile);

      let commentText = document.createElement("div");
      commentText.classList.add("comment-text");
      commentText.textContent = data.comment;

      card.appendChild(listName);
      card.appendChild(commentText);

      cardContainer.appendChild(card);
    })
}

// document.getElementById('form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     let value = getValue();
//     comment(sampleData);
// })
