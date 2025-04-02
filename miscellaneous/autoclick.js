function() {
    // Define the class names to target
    const targetClasses = [
        { name: 'primaryShop__', stopFnName: 'stopShopClicking' },
        { name: 'logoGreen', stopFnName: 'stopLogoGreenClicking' },
        { name: 'logo_', stopFnName: 'stopLogoClicking' }
    ];
    
    // Create click intervals for each target class
    const clickIntervals = targetClasses.map(target => {
        const interval = setInterval(() => {
            const elements = document.querySelectorAll(`[class*="${target.name}"]`);
            if (elements.length > 0) {
                elements.forEach(element => {
                    element.click();
                    console.log(`Clicked on element with ${target.name} class`);
                });
            } else {
                console.log(`No elements with ${target.name} class found`);
            }
        }, 1); // Click every single millisecond
        
        // Create stop function for this interval
        window[target.stopFnName] = function() {
            clearInterval(interval);
            console.log(`Stopped clicking on ${target.name} elements`);
        };
        
        console.log(`Started continuous clicking on ${target.name}. Run ${target.stopFnName}() to stop.`);
        
        return { interval, target };
    });
    
    // Add a function to stop all clicking
    window.stopAllClicking = function() {
        clickIntervals.forEach(({ interval, target }) => {
            clearInterval(interval);
            console.log(`Stopped clicking on ${target.name} elements`);
        });
        console.log('Stopped all automatic clicking');
    };
    
    console.log('Started all automatic clicking. Run stopAllClicking() to stop everything.');
})();