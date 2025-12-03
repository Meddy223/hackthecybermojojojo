
function logout(e) {
    e.preventDefault();
    if (confirm('Are you sure you want to log out?')) {
        // Save any pending progress
        if (typeof saveUserProgress === 'function') {
            saveUserProgress();
        }
        
        // Clear session
        localStorage.removeItem('currentSession');
        currentSession = null;
        userProgress = {};
        
        // Redirect to home
        window.location.href = '/';
    }
}
