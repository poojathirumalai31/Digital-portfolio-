function downloadResume() {
    const resumeUrl = 'pooja.T(RESUME).pdf';  // Change to actual filename if different
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'pooja.T(RESUME).pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}