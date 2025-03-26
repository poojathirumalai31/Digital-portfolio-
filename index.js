function downloadResume() {
    const resumeUrl = 'pooja_Resume.pdf';  // Change to actual filename if different
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'Pooja_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}