# Discord-Meadow-Cheats
This contains some simple copy &amp; paste scripts to be pasted into your developer console

## Auto-clicker
``` 
(function() {
    const clickInterval = setInterval(() => {
        const elements = document.querySelectorAll('[class*="logoGreen"]');
        if (elements.length > 0) {
            elements.forEach(element => {
                element.click();
                console.log('Clicked on element with logoGreen class');
            });
        } else {
            console.log('No elements with logoGreen class found');
        }
    }, 1); // Click every single millisecond
    
    // To stop the clicking, run this function in the console:
    window.stopLogoClicking = function() {
        clearInterval(clickInterval);
        console.log('Stopped clicking on logoGreen elements');
    };
    
    console.log('Started continuous clicking. Run stopLogoClicking() to stop.');
})();
```

```
(function() {
    const clickInterval = setInterval(() => {
        const elements = document.querySelectorAll('[class*="logo_"]');
        if (elements.length > 0) {
            elements.forEach(element => {
                element.click();
                console.log('Clicked on element with logo_ class');
            });
        } else {
            console.log('No elements with logo_ class found');
        }
    }, 1); // Click every single millisecond
    
    // To stop the clicking, run this function in the console:
    window.stopLogoClicking = function() {
        clearInterval(clickInterval);
        console.log('Stopped clicking on logo_ elements');
    };
    
    console.log('Started continuous clicking. Run stopLogoClicking() to stop.');
})();
```
