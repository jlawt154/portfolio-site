const canvas = document.getElementById("myCanvas");
            // initalize the context
            let ctx = canvas.getContext("2d");
            const CW = canvas.width;
            const CH = canvas.height;
            const halfCW = CW / 2;
            const halfCH = CH / 2;
            
            let ballIconSrc = "https://o.remove.bg/downloads/c8441bc7-4b03-484e-9775-d0bc73ee4592/istockphoto-1440454524-612x612-removebg-preview.png";
            
            let ballImage = new Image();
            ballImage.crossOrigin = "anonymous";
            ballImage.src = ballIconSrc;
            
            let ballW = 10;
            let ballH = 10;
            
            let ballX = CW / 2 - ballW / 2;
            let ballY = CH / 2 - ballH / 2 - 10;
            
            let ballSpeedX = 1;
            let ballSpeedY = 1;
            
            function drawBall() {
                ctx.drawImage(ballImage, ballX, ballY, ballW, ballH);
            }
            drawBall();
            function playGame() {
              ctx.clearRect(0, 0, CW, CH);
             
              ballX += ballSpeedX;
              ballY += ballSpeedY;

              if (ballX + ballW > CW || ballX < 0) {
                ballSpeedX *= -1;
              }
              if (ballY < 0) {
                ballSpeedY *= -1;
              }
              if (ballY + ballH > CH) {
            
                ballSpeedY *= -1;
                ballSpeedX *= 1;
              }
              drawBall();
              requestAnimationFrame(playGame);
            }