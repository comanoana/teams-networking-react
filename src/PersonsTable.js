function getValues(){
    const firstName = document.querySelector("input[name=firstName]").value;
    const lastName = document.querySelector("input[name=lastName]").value;
    const url= document.querySelector("input[name=url]").value;

    const person = {
       firstName,
       lastName,
      url
};
return person;
}

export const PersonsTable = ({border, persons, onSubmit, onDelete  }) => (
  <form id="main-form" onSubmit={ e =>  {
      e.preventDefault();
     const values= getValues();
     onSubmit(values)
  }}>
      <table border={border}>
  <thead>
      <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Link</th>
          <th></th>
      </tr>
  </thead>
  <tbody>
      {persons.map((person, index) => (
          <tr key={index}>
              <td>{person.firstName.split(/\s*,\s*/).join("<br>")}</td>
              <td>{person.lastName}</td>
              <td><a target="_blank" href={person.url}>GitHub</a></td>
              <td>
                  <a href="#" className="delete-row" onClick={ e => {
                      onDelete(person.id);
                  }}>&#10006;</a>
                  <a href="#" className="edit-row" data-id="{person.id}">&#9998;</a>
              </td>
          </tr>
  ))}
  </tbody>
  <tfoot>
      <tr>
          <td><input type="text" required name="firstName" placeholder="Enter First Name"  /></td>
          <td><input type="text" required name="lastName" placeholder="Enter Last Name" /></td>
          <td><input type="text" required name="url" placeholder="GitHub account"  /></td>
          <td><button type="submit">Save</button></td>
      </tr>
  </tfoot>
</table>
</form>
);
