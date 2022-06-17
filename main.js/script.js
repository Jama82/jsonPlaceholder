

fetch('https://jsonplaceholder.typicode.com/albums')
  .then(r => r.json())
  .then(r => {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="wrapper">${r.map(n => `
        <div class="item">
          <div>UserId: ${n.userId}</div>
          <div>Id: ${n.id}</div>
          <div>Title: ${n.title}</div>
        </div>`).join('')}
      </div>
    `);
  });
