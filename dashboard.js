document.querySelectorAll('.show-btn').forEach(button => {
    button.addEventListener('click', () => {
        const passwordCell = button.parentElement;
        const isHidden = passwordCell.childNodes[0].textContent.includes('•••••••');
        
        if (isHidden) {
            // Replace 'password123' with the actual password to be shown
            passwordCell.childNodes[0].textContent = 'password123'; 
            button.textContent = 'Hide';
        } else {
            passwordCell.childNodes[0].textContent = '•••••••';
            button.textContent = 'Show';
        }
    });
});

document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const textToCopy = button.previousSibling.textContent.trim();
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Username copied to clipboard!');
        });
    });
});

document.querySelectorAll('.copy-pass-btn').forEach(button => {
    button.addEventListener('click', () => {
        const textToCopy = button.previousSibling.previousSibling.textContent.trim();
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Password copied to clipboard!');
        });
    });
});

document.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Edit function not implemented yet.');
        // Implement edit functionality here
    });
});

document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', () => {
        const row = button.closest('tr');
        row.remove();
        alert('Entry deleted.');
        // Implement additional delete logic if needed
    });
});

// Popup form functionality
const popupForm = document.getElementById('popup-form');
const addBtn = document.querySelector('.add-btn');
const closeBtn = document.querySelector('.close-btn');
const form = document.getElementById('add-entry-form');

addBtn.addEventListener('click', () => {
    popupForm.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    popupForm.style.display = 'none';
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Collect form data
    const site = document.getElementById('site').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const additionalInfo = document.getElementById('additional-info').value;
    
    // Add a new row to the table
    const tbody = document.querySelector('table tbody');
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>${site}</td>
        <td>${username}<button class="copy-btn">Copy</button></td>
        <td>•••••••<button class="show-btn">Show</button><button class="copy-pass-btn">Copy</button></td>
        <td>${additionalInfo}</td>
        <td><button class="edit-btn">Edit</button><button class="delete-btn">Delete</button></td>
    `;
    
    tbody.appendChild(newRow);
    
    // Reset form and close popup
    form.reset();
    popupForm.style.display = 'none';
    
    // Rebind events for the new buttons
    rebindEvents();
});

function rebindEvents() {
    document.querySelectorAll('.show-btn').forEach(button => {
        button.addEventListener('click', () => {
            const passwordCell = button.parentElement;
            const isHidden = passwordCell.childNodes[0].textContent.includes('•••••••');
            
            if (isHidden) {
                //passwordCell.childNodes[0].textContent = 'password123'; 
                button.textContent = 'Hide';
            } else {
                passwordCell.childNodes[0].textContent = '•••••••';
                button.textContent = 'Show';
            }
        });
    });

    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', () => {
            const textToCopy = button.previousSibling.textContent.trim();
            navigator.clipboard.writeText(textToCopy).then(() => {
                alert('Username copied to clipboard!');
            });
        });
    });

    document.querySelectorAll('.copy-pass-btn').forEach(button => {
        button.addEventListener('click', () => {
            const textToCopy = button.previousSibling.previousSibling.textContent.trim();
            navigator.clipboard.writeText(textToCopy).then(() => {
                alert('Password copied to clipboard!');
            });
        });
    });

    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Edit function not implemented yet.');
            // Implement edit functionality here
        });
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', () => {
            const row = button.closest('tr');
            row.remove();
            alert('Entry deleted.');
            // Implement additional delete logic if needed
        });
    });
}
