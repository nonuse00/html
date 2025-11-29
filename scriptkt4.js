
document.addEventListener('DOMContentLoaded', function() {
 
    const sizeButtons = document.querySelectorAll('.size-btn');
    const body = document.body;
    
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {

            sizeButtons.forEach(btn => btn.classList.remove('active'));
            

            this.classList.add('active');
            
            const width = this.getAttribute('data-width');
            const height = this.getAttribute('data-height');
            
            if (width === '100%') {

                body.style.width = '100%';
                body.style.height = '100%';
                body.style.margin = '0';
                body.style.overflow = 'auto';
                body.style.border = 'none';
                body.style.boxShadow = 'none';
            } else {

                body.style.width = `${width}px`;
                body.style.height = `${height}px`;
                body.style.margin = '20px auto';
                body.style.overflow = 'hidden';
                body.style.border = '1px solid #ccc';
                body.style.boxShadow = '0 0 15px rgba(0,0,0,0.1)';
            }
        });
    });

    document.querySelector('.size-btn[data-width="100%"]').classList.add('active');
    
    document.querySelectorAll('.card-content').forEach(content => {
        content.addEventListener('dblclick', function() {
            const currentText = this.textContent;
            const textarea = document.createElement('textarea');
            textarea.value = currentText;
            textarea.style.width = '100%';
            textarea.style.height = '100px';
            textarea.style.padding = '10px';
            textarea.style.border = '1px solid #ddd';
            textarea.style.borderRadius = '4px';
            textarea.style.fontFamily = 'inherit';
            textarea.style.fontSize = 'inherit';
            
            this.replaceWith(textarea);
            textarea.focus();
            
            textarea.addEventListener('blur', function() {
                const newText = this.value;
                const newContent = document.createElement('div');
                newContent.className = 'card-content';
                newContent.textContent = newText;
                
                this.replaceWith(newContent);
                
                newContent.addEventListener('dblclick', arguments.callee.caller);
            });
        });
    });
});