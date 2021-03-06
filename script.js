// En el siguiente ejercicio debéis sacar por consola (console.log) una lista con el nombre de los usuarios.
// Dicha la lista la obtendréis del documento "users.json" haciendo uso de la función "fetch". Una vez tengáis el array de usuarios, debéis generar otro array con la función "filter" para que solo estén los usuarios que tengán más de 500 en la propiedad "money".
// Teniendo la lista ya filtrada, la recorreréis con el método "forEach" para mostrar por consola el nombre de cada usuario.

let buttonShowList = document.getElementById("showList");
buttonShowList.addEventListener("click", getUsers);

// GetUsers.
function getUsers() {
  // Use the file json.
  fetch("users.json")
    .then(response => response.json())
    .then(data => {
      // Show data.
      console.log(data);
      // Filter data.
      const users500 = filterUsers(data);
      // Show name filter data.
      users500.forEach(function(element) {
        console.log(element.name);
      });
    });
}
// Filter users.
function filterUsers(x) {
  const result = x.filter(x => x.money > 500);
  return result;
}
