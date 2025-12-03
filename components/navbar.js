class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    transition: all 0.3s ease;
                }
                .nav-link {
                    position: relative;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -2px;
                    left: 0;
                    background-color: #3b82f6;
                    transition: width 0.3s ease;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
            </style>
            <nav class="bg-white dark:bg-gray-800 shadow-md">
                <div class="container mx-auto px-4">
                    <div class="flex justify-between items-center py-4">
                        <a href="/" class="flex items-center space-x-2">
                            <i data-feather="shield" class="w-6 h-6 text-primary-500"></i>
                            <span class="text-xl font-bold text-gray-800 dark:text-white">CyberSim</span>
                        </a>
                        
                        <div class="hidden md:flex items-center space-x-8">
                            <a href="/" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500">Home</a>
                            <a href="/challenge-lab.html" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500">Challenges</a>
                            <a href="/firewall-lab.html" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500">Firewall Lab</a>
                            <a href="/network-lab.html" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500">Network Lab</a>
                            <a href="/leaderboard" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500">Leaderboard</a>
                            <a href="/about" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500">About</a>
                            <a href="/path" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500">Path</a>
<button onclick="toggleTheme()" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                                <i data-feather="moon" class="w-5 h-5 text-gray-700 dark:text-gray-300"></i>
                            </button>
                            ${currentSession ? `
                                <div class="flex items-center space-x-2">
                                    <span class="text-sm">${currentSession.username}</span>
                                    <span id="xp-display" class="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                                        ${currentSession.xp || 0} XP
                                    </span>
                                    <a href="#" onclick="logout()" class="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                                        Logout
                                    </a>
                                </div>
                            ` : `
                                <a href="/login" class="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition">Login</a>
                            `}
</div>
                        
                        <button class="md:hidden focus:outline-none" id="mobile-menu-button">
                            <i data-feather="menu" class="w-6 h-6 text-gray-700 dark:text-gray-300"></i>
                        </button>
                    </div>
                    
                    <div class="md:hidden hidden py-2" id="mobile-menu">
                        <a href="/" class="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500">Home</a>
                        <a href="/challenge-lab.html" class="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500">Challenges</a>
                        <a href="/firewall-lab.html" class="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500">Firewall Lab</a>
                        <a href="/network-lab.html" class="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500">Network Lab</a>
                        <a href="/leaderboard" class="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500">Leaderboard</a>
                        <a href="/about" class="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500">About</a>
                        <a href="/path" class="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500">Path</a>
<div class="flex items-center justify-between py-2">
                            <button onclick="toggleTheme()" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                                <i data-feather="moon" class="w-5 h-5 text-gray-700 dark:text-gray-300"></i>
                            </button>
                            <a href="/login" class="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        `;
        
        // Add mobile menu toggle functionality
        this.shadowRoot.getElementById('mobile-menu-button').addEventListener('click', () => {
            const menu = this.shadowRoot.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);
