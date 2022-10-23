document.querySelector("#greet-user").addEventListener("click", function () {
    document.querySelector("#greet-output").textContent = `Hello `;
  });
  
  
  
  const people = [{name: 'Jack', age: 34, salary: 1400}, {name: 'Mary', age: 25, salary: 2000}, {name: 'Bob', age: 30, salary: 1900}];
  
  document.querySelector(".task-2").textContent = `Hello ${people[0].name}. Your are ${people[0].age} years old. Your salary is ${people[0].salary}`;
  
  
  document.querySelector(".task-2").textContent = `Hello ${people[1].name}. Your are ${people[1].age} years old. Your salary is ${people[1].salary}`;
  
  document.querySelector(".task-2").textContent = `Hello ${people[2].name}. Your are ${people[2].age} years old. Your salary is ${people[2].salary}`;
  
  
  
  
  
  document.querySelector(".box").addEventListener("mouseover", function (e) {
    const target = e.target;
    if (target.matches(".box")) {
      target.style.backgroundColor = "blue";
    } 
  });
  
  document.querySelector(".box").addEventListener("mouseout", function (e) {
      const target = e.target;
      if (target.matches(".box")) {
        target.style.backgroundColor = "red";
      } 
    });
  

