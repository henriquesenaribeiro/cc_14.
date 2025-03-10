document.addEventListener("DOMContentLoaded", () => {
    const ticketContainer = document.getElementById("ticketContainer");

    // Task 2: Adding Support Tickets Dynamically
    function addSupportTicket(customerName, issueDescription, priorityLevel) {
        const ticket = document.createElement("div");
        ticket.classList.add("ticket");
        if (priorityLevel.toLowerCase() === "high") {
            ticket.classList.add("high-priority");
        }

        const nameElement = document.createElement("h3");
        nameElement.textContent = customerName;
        
        const issueElement = document.createElement("p");
        issueElement.textContent = issueDescription;
        
        const priorityElement = document.createElement("span");
        priorityElement.textContent = `Priority: ${priorityLevel}`;
        
        const resolveButton = document.createElement("button");
        resolveButton.textContent = "Resolve";
        resolveButton.addEventListener("click", (event) => {
            event.stopPropagation();
            ticketContainer.removeChild(ticket);
        });

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
            enableEditing(ticket, nameElement, issueElement, priorityElement, editButton);
        });

        ticket.appendChild(nameElement);
        ticket.appendChild(issueElement);
        ticket.appendChild(priorityElement);
        ticket.appendChild(resolveButton);
        ticket.appendChild(editButton);
        ticketContainer.appendChild(ticket);
    }
    // Adds support tickets dynamically to the container

    // Task 3: Converting NodeLists to Arrays for Bulk Updates
    function highlightHighPriorityTickets() {
        const highPriorityTickets = Array.from(document.querySelectorAll(".high-priority"));
        highPriorityTickets.forEach(ticket => {
            ticket.style.border = "2px solid red";
            ticket.style.backgroundColor = "#ffe6e6";
        });
    }
    // Highlights high-priority tickets by changing their border and background color

    // Task 4: Implementing Ticket Resolution with Event Bubbling
    ticketContainer.addEventListener("click", () => {
        console.log("A ticket was clicked.");
    });
    // Logs a message when a ticket is clicked, demonstrating event bubbling

    // Task 5: Inline Editing of Support Tickets
    function enableEditing(ticket, nameElement, issueElement, priorityElement, editButton) {
        const nameInput = document.createElement("input");
        nameInput.value = nameElement.textContent;
        
        const issueInput = document.createElement("input");
        issueInput.value = issueElement.textContent;
        
        const priorityInput = document.createElement("input");
        priorityInput.value = priorityElement.textContent.replace("Priority: ", "");

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.addEventListener("click", () => {
            nameElement.textContent = nameInput.value;
            issueElement.textContent = issueInput.value;
            priorityElement.textContent = `Priority: ${priorityInput.value}`;
            
            ticket.replaceChild(nameElement, nameInput);
            ticket.replaceChild(issueElement, issueInput);
            ticket.replaceChild(priorityElement, priorityInput);
            ticket.replaceChild(editButton, saveButton);
        });

        ticket.replaceChild(nameInput, nameElement);
        ticket.replaceChild(issueInput, issueElement);
        ticket.replaceChild(priorityInput, priorityElement);
        ticket.replaceChild(saveButton, editButton);
    }
    // Enables editing of ticket details using input fields and a save button

    // Example usage
    addSupportTicket("Fabiana Requena", "Denied", "High");
    addSupportTicket("Sophia Kirschner", "Accepted", "Medium");

    highlightHighPriorityTickets(); // Apply highlighting after tickets are added
});

