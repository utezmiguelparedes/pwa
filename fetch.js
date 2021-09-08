/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => {
            let registros = document.getElementById('registros')
            data.data.forEach(element => {
                let tr = document.createElement('tr')
                tr.innerHTML = `<tr>` + `<td>${element.id}</td>` + `<td>${element.email}</td>` + `<td>${element.first_name}</td>` + `<td>${element.last_name}</td>` + `</tr>`
                registros.append(tr)
            });
        });

function guardar() {
    var name = document.getElementById("name").value
    var job = document.getElementById("job").value
    var url = 'https://reqres.in/api/users'
    var data = {name: name, job: job}
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response), window.alert('Success'));
}