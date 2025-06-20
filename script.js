// โหลดโน้ตจาก Local Storage
window.onload = function () {
    loadNotes();
};

function saveNote() {
    let noteInput = document.getElementById('noteInput').value;
    if (noteInput.trim() === "") {
        alert("กรุณาเขียนโน้ตก่อนบันทึก");
        return;
    }

    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(noteInput);
    localStorage.setItem('notes', JSON.stringify(notes));

    document.getElementById('noteInput').value = '';
    loadNotes();
}

function loadNotes() {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    let noteList = document.getElementById('noteList');
    noteList.innerHTML = '';

    notes.forEach(note => {
        let li = document.createElement('li');
        li.innerText = note;
        noteList.appendChild(li);
    });
}

function clearNotes() {
    if (confirm('คุณต้องการลบโน้ตทั้งหมดหรือไม่?')) {
        localStorage.removeItem('notes');
        loadNotes();
    }
}
