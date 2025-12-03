class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    transition: all 0.3s ease;
                }
                .social-icon {
                    transition: transform 0.3s ease;
                }
                .social-icon:hover {
                    transform: translateY(-3px);
                }
            </style>
            <footer class="bg-gray-800 dark:bg-gray-900 text-white py-8">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 class="text-xl font-bold mb-4">CyberSim Challenge Arena</h3>
                            <p class="text-gray-400">Test your cybersecurity skills with realistic simulations and challenges.</p>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul class="space-y-2">
                                <li><a href="/" class="text-gray-400 hover:text-white transition">Home</a></li>
                                <li><a href="/challenges" class="text-gray-400 hover:text-white transition">Challenges</a></li>
                                <li><a href="/leaderboard" class="text-gray-400 hover:text-white transition">Leaderboard</a></li>
                                <li><a href="/about" class="text-gray-400 hover:text-white transition">About</a></li>
                                <li><a href="/path" class="text-gray-400 hover:text-white transition">Path</a></li>
</ul>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-semibold mb-4">Resources</h4>
                            <ul class="space-y-2">
                                <li><a href="/docs" class="text-gray-400 hover:text-white transition">Documentation</a></li>
                                <li><a href="/blog" class="text-gray-400 hover:text-white transition">Blog</a></li>
                                <li><a href="/api" class="text-gray-400 hover:text-white transition">API</a></li>
                                <li><a href="/contribute" class="text-gray-400 hover:text-white transition">Contribute</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-semibold mb-4">Connect</h4>
                            <div class="flex space-x-4">
                                <a href="#" class="social-icon text-gray-400 hover:text-white">
                                    <i data-feather="github" class="w-5 h-5"></i>
                                </a>
                                <a href="#" class="social-icon text-gray-400 hover:text-white">
                                    <i data-feather="twitter" class="w-5 h-5"></i>
                                </a>
                                <a href="#" class="social-icon text-gray-400 hover:text-white">
                                    <i data-feather="linkedin" class="w-5 h-5"></i>
                                </a>
                                <a href="#" class="social-icon text-gray-400 hover:text-white">
                                    <i data-feather="discord" class="w-5 h-5"></i>
                                </a>
                            </div>
                            <p class="text-gray-400 mt-4">contact@cybersim.com</p>
                        </div>
                    </div>
                    
                    <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                        <p>© 2023 CyberSim Challenge Arena. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
