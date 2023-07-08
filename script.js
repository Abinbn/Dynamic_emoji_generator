
      const canvas = document.getElementById("emojiCanvas");
      const ctx = canvas.getContext("2d");

      function generateRandomSize() {
        return Math.floor(Math.random() * 40) + 10; // Random size between 10 and 50
      }
      
      function generateEmoji() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw a yellow round circle as the shape
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 80, 0, 2 * Math.PI);
        ctx.fillStyle = "yellow";
        ctx.fill();

        // Generate random sizes for the eyes and mouth
        const eyeSize = generateRandomSize();
        const mouthSize = generateRandomSize();

        // Draw the two eyes
        ctx.beginPath();
        ctx.arc(canvas.width / 2 - 40, canvas.height / 2, eyeSize, 0, 2 * Math.PI);
        ctx.arc(canvas.width / 2 + 40, canvas.height / 2, eyeSize, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        
        // Draw the mouth
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2 + 20, mouthSize, 0, Math.PI);
        ctx.lineWidth = 4;
        ctx.strokeStyle = "black";
        ctx.stroke();
      }
      
      const generateButton = document.getElementById("generateButton");
      generateButton.addEventListener("click", generateEmoji);
      
      generateEmoji();
    
