document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.innerText = "Click Me!";
    button.className = "btn btn-success";
    button.onclick = () => alert("You clicked the button!");
    document.body.appendChild(button);
  });
  