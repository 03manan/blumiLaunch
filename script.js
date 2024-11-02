let growth = 0;
        let leafCount = 0;
        const maxGrowth = 100;
        const plant = document.querySelector('.plant');
        const stem = document.querySelector('.stem');
        const waterBtn = document.querySelector('.water-btn');
        const growthLevel = document.querySelector('.growth-level');
    
        function addLeaf() {
            const leaf = document.createElement('div');
            leaf.className = 'leaf';
            leaf.style.left = `${Math.random() * 40 - 20}px`;
            leaf.style.top = `${Math.random() * 100}px`;
            leaf.style.transform = `rotate(${Math.random() * 360}deg)`;
            stem.appendChild(leaf);
            setTimeout(() => {
                leaf.style.opacity = '1';
            }, 100);
        }
    
        function createWaterDrop() {
            const drop = document.createElement('div');
            drop.className = 'water-drop';
            drop.style.left = '50%';
            drop.style.top = '0';
            plant.appendChild(drop);
    
            drop.animate([
                { top: '0', opacity: 1 },
                { top: '100px', opacity: 0 }
            ], {
                duration: 1000,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }).onfinish = () => drop.remove();
        }
    
        function waterPlant() {
            if (growth < maxGrowth) {
                createWaterDrop();
                growth += 10;
                growth = Math.min(growth, maxGrowth);
    
                stem.style.height = `${20 + growth}px`;
                growthLevel.textContent = `Growth: ${growth}%`;
    
                if (growth % 20 === 0 && leafCount < 5) {
                    addLeaf();
                    leafCount++;
                }
    
                if (growth === maxGrowth) {
                    growthLevel.textContent = 'Fully Grown! 🌿';
                    waterBtn.disabled = true;
                    waterBtn.textContent = 'Plant Flourishing ✨';
                }
            }
        }
    
        // Add event listeners for both 'click' and 'touchstart' for mobile compatibility
        waterBtn.addEventListener('click', waterPlant);
        waterBtn.addEventListener('touchstart', waterPlant);
    
        // Logo hover effect
        const logo = document.getElementById('logo');
        logo.addEventListener('mouseover', () => {
            logo.style.transform = 'scale(1.05)';
        });
        logo.addEventListener('mouseout', () => {
            logo.style.transform = 'scale(1)';
        });

        //notification
        function showNotification() {
            const notification = document.getElementById('notification');
            notification.classList.add('show');
        
            // Auto-hide after 3 seconds
            setTimeout(() => {
                closeNotification();
            }, 3000);
        }
        
        function closeNotification() {
            const notification = document.getElementById('notification');
            notification.classList.remove('show');
        }
        
        // Email submission handling
        document.addEventListener('DOMContentLoaded', function() {
            const emailInput = document.querySelector('.email-input');
            const submitBtn = document.querySelector('.submit-btn');
        
            submitBtn.addEventListener('click', function() {
                if (emailInput.value.trim() !== '') {
                    showNotification();
                    emailInput.value = ''; // Clear the input
                }
            });
        
            // Handle Enter key in email input
            emailInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' && emailInput.value.trim() !== '') {
                    showNotification();
                    emailInput.value = ''; // Clear the input
                }
            });
        });
