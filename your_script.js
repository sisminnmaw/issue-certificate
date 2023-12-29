function updateText() {
    document.getElementById('displayStudentName').textContent = document.getElementById('studentName').value;
    document.getElementById('displayStudentNameSmall').textContent = document.getElementById('studentName').value;
    document.getElementById('displaySession').textContent = document.getElementById('session').value;
    document.getElementById('displayDate').textContent = document.getElementById('date').value;
    document.getElementById('displayIssue').textContent = document.getElementById('issue').value;
}

function updateGuideText() {
    document.getElementById('displayGuideName').textContent = document.getElementById('guideName').value;
    document.getElementById('displayGuideNameSmall').textContent = document.getElementById('guideName').value;
    document.getElementById('displaySession').textContent = document.getElementById('session').value;
    document.getElementById('displayDate').textContent = document.getElementById('date').value;
    document.getElementById('displayIssue').textContent = document.getElementById('issue').value;
}

function updateVolunteerText() {
    document.getElementById('displayVolunteerName').textContent = document.getElementById('volunteerName').value;
    document.getElementById('displaySession').textContent = document.getElementById('session').value;
    document.getElementById('displayDate').textContent = document.getElementById('date').value;
    document.getElementById('displayIssue').textContent = document.getElementById('issue').value;
}
function downloadPNG() {
    html2canvas(document.getElementById("content"),{ useCORS: true }).then(canvas => {
        var imageURL = canvas.toDataURL("image/png");
        var downloadLink = document.createElement('a');
        downloadLink.href = imageURL;
        downloadLink.download = "webview.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
}
