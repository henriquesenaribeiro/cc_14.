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

