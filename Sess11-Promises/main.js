const data = async () => await fetch('https://api.kodemia.com');

data()
  .then(async (res) => {
    const data = await res.json();
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
